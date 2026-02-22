"use client";

import { useCompletion } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Copy, Sparkles, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useToast } from "@/hooks/use-toast";

export default function ExplainerPage() {
  const { toast } = useToast();
  const { completion, input, handleInputChange, handleSubmit, isLoading } = useCompletion({
    api: "/api/explain",
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
      description: "Explainer response copied to your clipboard.",
    });
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">Repo Explainer</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Deep dive into your codebase. Explain complex logic and component interactions instantly.
          </p>
        </div>
        
        {completion && (
          <Button onClick={handleCopy} variant="outline" className="rounded-xl gap-2 font-semibold hover:bg-primary/10 transition-all">
            <Copy className="h-4 w-4" />
            Copy Result
          </Button>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-5 h-[calc(100vh-16rem)] min-h-[600px]">
        {/* Editor Side */}
        <Card className="lg:col-span-2 flex flex-col glass-card overflow-hidden group">
          <div className="px-6 py-4 border-b border-border/40 flex items-center justify-between bg-muted/20">
            <div className="flex items-center gap-2">
              <span className="ml-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Input Buffer</span>
            </div>
            <div className="text-[10px] font-medium text-muted-foreground underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">
              Markdown Supported
            </div>
          </div>
          <CardContent className="flex-1 flex flex-col p-0">
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <Textarea
                className="flex-1 font-mono text-sm resize-none bg-transparent border-none p-6 focus-visible:ring-0 placeholder:text-muted-foreground/30"
                placeholder="// Paste your code here...
// We'll analyze it and explain the logic step-by-step."
                value={input}
                onChange={handleInputChange}
                required
              />
              <div className="p-4 border-t border-border/40 bg-muted/20">
                <Button 
                  type="submit" 
                  disabled={isLoading || !input} 
                  className="w-full rounded-xl py-6 text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      De-compiling logic...
                    </>
                  ) : (
                    <>Analyze Codebase</>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Output Side */}
        <Card className="lg:col-span-3 flex flex-col glass-card overflow-hidden bg-background/20">
          <div className="px-6 py-4 border-b border-border/40 flex items-center justify-between bg-muted/20">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">AI Intelligence</span>
            </div>
          </div>
          <CardContent className="flex-1 overflow-auto custom-scrollbar p-8">
            {completion ? (
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none prose-headings:text-primary">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{completion}</ReactMarkdown>
              </div>
            ) : (
              <div className="flex flex-col h-full items-center justify-center text-center space-y-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-primary-foreground">
                  <User className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-foreground/80 tracking-tight">Ready to Analyze</p>
                  <p className="text-sm text-muted-foreground max-w-[250px]">
                    Paste your code snippets to see the magic happen in real-time.
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
