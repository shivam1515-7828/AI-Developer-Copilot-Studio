"use client";

import { useEffect, useState } from "react";
import { Loader2, Sparkles, Binary, Cpu, SearchCode } from "lucide-react";

const ANIMATION_MESSAGES = [
  "Firing up the neural networks...",
  "Consulting the documentation...",
  "Searching StackOverflow for answers...",
  "Reversing the polarity...",
  "Bribing the compiler...",
  "Analyzing stack traces...",
  "Translating to machine code...",
  "Asking the elders for wisdom...",
  "Adding more print statements...",
  "Optimizing the unoptimizable...",
  "Looking for the missing semicolon...",
];

export function LoadingMessage({ isWriting = false }: { isWriting?: boolean }) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (isWriting) return;
    
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % ANIMATION_MESSAGES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isWriting]);

  if (isWriting) {
    return (
      <div className="flex flex-col h-full items-center justify-center text-center space-y-6 animate-in fade-in duration-500">
        <div className="relative">
          <div className="h-20 w-20 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-10 w-10 text-primary animate-pulse" />
          </div>
          <div className="absolute -inset-1 bg-primary/20 rounded-3xl blur-xl animate-pulse -z-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Synthesizing Output...
          </h3>
          <p className="text-sm text-muted-foreground animate-pulse">
            Typing response...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full items-center justify-center text-center space-y-8 animate-in fade-in duration-500">
      <div className="relative group">
        <div className="h-24 w-24 rounded-[2rem] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40 shadow-xl shadow-primary/5">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-[3rem] blur-2xl animate-pulse opacity-50 -z-10 transition-all duration-1000 group-hover:opacity-80" />
        
        {/* Floating Icons */}
        <Binary className="absolute -top-4 -left-4 h-6 w-6 text-primary/40 animate-bounce delay-100" />
        <Cpu className="absolute -bottom-4 -right-4 h-6 w-6 text-primary/40 animate-bounce delay-300" />
        <SearchCode className="absolute top-1/2 -right-8 h-6 w-6 text-primary/40 animate-pulse delay-500" />
      </div>

      <div className="space-y-3 max-w-[280px]">
        <h3 className="text-2xl font-black tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Processing
        </h3>
        <div className="h-12 flex items-center justify-center">
          <p className="text-sm font-medium text-muted-foreground animate-pulse transition-all duration-300">
            {ANIMATION_MESSAGES[messageIndex]}
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary w-1/3 rounded-full animate-[progress_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
