import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    // API Key is required. Assuming it's available in process.env.
    // In a real build, we'd handle the missing key more gracefully in the UI.
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiClient;
};

export const sendMessageToV = async (history: { role: 'user' | 'model'; text: string }[], newMessage: string) => {
  const client = getClient();
  
  try {
    const chat = client.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        },
        history: history.map(h => ({
            role: h.role,
            parts: [{ text: h.text }]
        }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;
  } catch (error) {
    console.error("Error communicating with V:", error);
    return "My apologies, I am currently stepping away from the desk to attend to a fitting. Please try again in a moment.";
  }
};
