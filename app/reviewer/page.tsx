"use client";

import { useCompletion } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Loader2, Copy, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useToast } from "@/hooks/use-toast";
import { LoadingMessage } from "@/components/loading-message";

export default function ReviewerPage() {
  const { toast } = useToast();
  const { completion, input, handleInputChange, handleSubmit, isLoading } = useCompletion({
    api: "/api/review",
    streamProtocol: "text",
    onError: (err) => {
      toast({
        title: "Error",
        description: err.message || "An error occurred while communicating with the AI.",
        variant: "destructive",
      });
    }
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(completion);
    toast({
      title: "Copied to clipboard",
      description: "Review comments copied to your clipboard.",
    });
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">Code Reviewer</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Get professional feedback on your code. Detect anti-patterns, security flaws, and performance bottlenecks.
          </p>
        </div>
        
        {completion && (
          <Button onClick={handleCopy} variant="outline" className="rounded-xl gap-2 font-semibold hover:bg-primary/10 transition-all">
            <Copy className="h-4 w-4" />
            Copy Feedback
          </Button>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-5 h-[calc(100vh-16rem)] min-h-[600px]">
        {/* Editor Side */}
        <Card className="lg:col-span-2 flex flex-col glass-card overflow-hidden group border-emerald-500/10">
          <div className="px-6 py-4 border-b border-border/40 flex items-center justify-between bg-muted/20">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <span className="ml-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Submission Port</span>
            </div>
          </div>
          <CardContent className="flex-1 flex flex-col p-0">
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <Textarea
                className="flex-1 font-mono text-sm resize-none bg-transparent border-none p-6 focus-visible:ring-0 placeholder:text-muted-foreground/30"
                placeholder="// Paste your code here...
// We will conduct a thorough review of your implementation."
                value={input}
                onChange={handleInputChange}
                required
              />
              <div className="p-4 border-t border-border/40 bg-muted/20">
                <Button 
                  type="submit" 
                  disabled={isLoading || !input} 
                  className="w-full rounded-xl py-6 text-sm font-bold shadow-lg shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-500 text-white hover:scale-[1.01] active:scale-[0.99] transition-all border-none"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Running Static Analysis...
                    </>
                  ) : (
                    <>Run Code Review</>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Output Side */}
        <Card className="lg:col-span-3 flex flex-col glass-card overflow-hidden bg-emerald-500/[0.02]">
          <div className="px-6 py-4 border-b border-border/40 flex items-center justify-between bg-emerald-500/5">
            <div className="flex items-center gap-2 text-emerald-500">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">Review Intelligence</span>
            </div>
          </div>
          <CardContent className="flex-1 overflow-auto custom-scrollbar p-8">
            {isLoading && !completion ? (
              <LoadingMessage />
            ) : completion ? (
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none prose-headings:text-emerald-600 dark:prose-headings:text-emerald-400">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{completion}</ReactMarkdown>
              </div>
            ) : (
              <div className="flex flex-col h-full items-center justify-center text-center space-y-4">
                <div className="h-16 w-16 rounded-3xl bg-emerald-500/5 flex items-center justify-center border border-emerald-500/10">
                  <Code className="h-8 w-8 text-emerald-500/40" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-foreground/80 tracking-tight">Awaiting Code Submission</p>
                  <p className="text-sm text-muted-foreground max-w-[250px]">
                    Submit your logic to get an instant AI-powered code review.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
