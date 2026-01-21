
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = `
You are the personal AI assistant for ${PORTFOLIO_DATA.name}, a ${PORTFOLIO_DATA.title}.
Your goal is to answer questions from visitors about Alexander's career, skills, and projects based on the following information:

About Alexander: ${PORTFOLIO_DATA.about}
Experience: ${JSON.stringify(PORTFOLIO_DATA.experience)}
Skills: ${JSON.stringify(PORTFOLIO_DATA.skills)}
Projects: ${JSON.stringify(PORTFOLIO_DATA.projects)}

Keep your tone professional, minimal, and premium. Respond in concise sentences. 
If someone asks something not covered in the data, politely suggest they contact Alexander directly via the contact form.
Never break character.
`;

export const askNexusAI = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Nexus AI is currently resting. Please reach out via the contact form.";
  }
};
