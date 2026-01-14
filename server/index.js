import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const applicationsFile = path.join(dataDir, 'applications.json');

const SYSTEM_INSTRUCTION = `
You are AETHER Assistant, an AI representative for AETHER, an intentional educational formation program for Muslim youth.
AETHER integrates Arabic literacy, Islamic character, and modern technology.

TONE:
- Calm, disciplined, confident, selective, institutional.
- No hype, no religious clichés, no startup jargon.
- Clarity over persuasion.

KEY FACTS:
- Duration: 2 years.
- Pillars: 1) Arabic & Language, 2) Character & Ethics, 3) Technology & Critical Skills.
- Format: Hybrid (in-person + online + mentorship).
- Target: Disciplined students (15-22) and values-conscious parents.
- Goal: Build the Mind, Shape the Character.
- Admission: Selective, application-based.

Response Rules:
- Be concise. 
- Use clear language.
- Provide factual information based on the spec.
- If you don't know something specific, state that it will be shared during the selection process.
`;

// AI Assistant endpoint
app.post('/api/assistant', async (req, res) => {
    try {
        const { message } = req.body;
        const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

        if (!apiKey) {
            console.error('AI Error: API_KEY or GEMINI_API_KEY is missing');
            return res.status(500).json({
                success: false,
                message: "I apologize, but I am unable to process your request at the moment due to a configuration error."
            });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: SYSTEM_INSTRUCTION,
        });

        const chatSession = model.startChat({
            generationConfig: {
                temperature: 0.7,
                topP: 0.95,
            },
            history: [],
        });



        const result = await chatSession.sendMessage(message);
        const responseText = result.response.text();

        res.json({ success: true, response: responseText });
    } catch (error) {
        console.error('AI Assistant Error:', error);
        res.status(500).json({
            success: false,
            message: "I apologize, but I am unable to process your request at the moment. Please reach out to info@aether.education for direct assistance."
        });
    }
});

// POST endpoint for application submission
app.post('/api/apply', async (req, res) => {
    try {
        const formData = req.body;
        console.log('Received application:', formData.fullName);

        // 1. Save to local JSON file
        let applications = [];
        if (fs.existsSync(applicationsFile)) {
            const data = fs.readFileSync(applicationsFile, 'utf8');
            applications = JSON.parse(data);
        }

        const newApplication = {
            id: Date.now(),
            submittedAt: new Date().toISOString(),
            ...formData
        };

        applications.push(newApplication);
        fs.writeFileSync(applicationsFile, JSON.stringify(applications, null, 2));

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.ethereal.email',
            port: process.env.SMTP_PORT || 587,
            auth: {
                user: process.env.SMTP_USER || 'fake_user',
                pass: process.env.SMTP_PASS || 'fake_pass',
            },
        });

        const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Times New Roman', serif; line-height: 1.6; color: #0A1A2F; background-color: #F4F1EC; padding: 40px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border: 1px solid #D1D5DB; padding: 40px; border-top: 4px solid #C6A25D; }
          h1 { color: #0A1A2F; border-bottom: 1px solid #E5E7EB; padding-bottom: 20px; font-size: 24px; font-weight: bold; }
          p { margin-bottom: 20px; }
          .footer { margin-top: 40px; font-size: 12px; color: #4B5563; border-top: 1px solid #E5E7EB; pt: 20px; }
          .gold { color: #C6A25D; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Registration of Interest: AETHER</h1>
          <p>Dear ${formData.fullName},</p>
          <p>This automated dispatch confirms that your formal dossier has been successfully recorded in the AETHER Institutional Registry.</p>
          <p>Our admissions committee evaluates each candidate with precision and deliberation. We value the time and intent you have invested in this application.</p>
          <p><strong>Dossier ID:</strong> [ATH-${newApplication.id}]<br>
          <strong>Status:</strong> Under Review</p>
          <p>You will be contacted via this electronic channel should your profile proceed to the next stage of deliberation.</p>
          <p><em>"Build the Mind. Shape the Character."</em></p>
          <div class="footer">
            Institutional Registry &mdash; AETHER Formation Program<br>
            <span class="gold">Institutional Authority &bull; Classical Discipline &bull; Technical Mastery</span>
          </div>
        </div>
      </body>
      </html>
    `;

        try {
            await transporter.sendMail({
                from: '"AETHER Admissions" <admissions@aether-program.edu>',
                to: formData.email,
                subject: "Dossier Received: AETHER Application",
                html: emailHtml,
            });
            console.log('Confirmation email sent to:', formData.email);
        } catch (mailError) {
            console.warn('Mail delivery failed (likely due to missing SMTP credentials):', mailError.message);
            // We don't fail the whole request since the data was saved
        }

        res.status(201).json({ success: true, message: 'Dossier received and logged.' });
    } catch (error) {
        console.error('Submission error:', error);
        res.status(500).json({ success: false, message: 'Internal institutional error during processing.' });
    }
});

app.listen(PORT, () => {
    console.log(`AETHER Backend running on port ${PORT}`);
});
