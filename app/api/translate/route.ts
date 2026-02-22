import { streamText } from "ai";
import { aiService } from "@/services/ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { prompt, language } = await req.json();
    console.log("AI Translate Request received for prompt length:", prompt?.length, "to:", language);

    const result = await streamText({
      model: aiService.getModel(),
      prompt: aiService.getTranslatorPrompt(prompt, language || "another language"),
    });

    console.log("AI Translate stream started successfully");
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("AI Translate Route Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
