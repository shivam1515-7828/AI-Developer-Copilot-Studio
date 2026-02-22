import { streamText } from "ai";
import { aiService } from "@/services/ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    console.log("AI Docs Request received for prompt length:", prompt?.length);

    const result = await streamText({
      model: aiService.getModel(),
      prompt: aiService.getDocsPrompt(prompt),
    });

    console.log("AI Docs stream started successfully");
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("AI Docs Route Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
