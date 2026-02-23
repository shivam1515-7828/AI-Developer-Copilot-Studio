import { streamText } from "ai";
import { aiService } from "@/services/ai";

export const maxDuration = 30;
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { prompt }: { prompt: string } = await req.json();
    const result = await streamText({
      model: aiService.getModel(),
      prompt: aiService.getCommitPrompt(prompt),
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("AI Commit Route Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
