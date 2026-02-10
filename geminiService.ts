
import { GoogleGenAI } from "@google/genai";
import { CV_DATA } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI Assistant representing Muhammed Rahees, a skilled Frontend Developer.
Your goal is to answer questions about Muhammed's professional background, skills, and projects based on the provided CV data.

Muhammed Rahees CV Context:
- Name: ${CV_DATA.name}
- Email: ${CV_DATA.email}
- Current Role: Front-End Developer at Polosys Technologies
- Skills: ${CV_DATA.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('; ')}
- Summary: ${CV_DATA.summary}
- Education: ${CV_DATA.education.degree} from ${CV_DATA.education.institution}

Instructions:
1. Be professional, concise, and helpful.
2. If someone asks for contact info, provide his email: ${CV_DATA.email}.
3. If asked about technical skills, highlight his expertise in React, Next.js, and TypeScript.
4. Keep answers friendly. If you don't know something based on the CV, say you aren't sure but suggest they contact Muhammed directly.
`;

export async function askResumeQuestion(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently taking a break. Please contact Muhammed directly via email!";
  }
}
