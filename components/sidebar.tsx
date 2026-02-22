"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, BookOpen, Bug, FileSearch, Home, ArrowRightLeft, Sparkles, GitCommit } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Repo Explainer", href: "/explainer", icon: FileSearch },
  { name: "Code Reviewer", href: "/reviewer", icon: Code },
  { name: "Debug Assistant", href: "/debugger", icon: Bug },
  { name: "Docs Generator", href: "/docs", icon: BookOpen },
  { name: "Code Translator", href: "/translator", icon: ArrowRightLeft },
  { name: "Commit Generator", href: "/commit", icon: GitCommit },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 flex h-screen w-72 flex-col bg-background/60 backdrop-blur-3xl border-r border-border/50 px-6 py-10 z-50 transition-all duration-500 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_24px_-12px_rgba(0,0,0,0.5)]">
      {/* Decorative Gradient Flare */}
      <div className="absolute top-[-10%] left-[-20%] w-[150%] h-[40%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <Link href="/" className="mb-12 flex items-center gap-3 px-2 group">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <Sparkles className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-2xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">Copilot.</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 leading-none">Studio</span>
        </div>
      </Link>

      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 mb-6 px-3">
        System Overview
      </div>

      <nav className="flex flex-1 flex-col gap-2 relative z-10 overflow-y-auto custom-scrollbar pr-2 -mr-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-4 rounded-2xl px-3 py-3.5 text-sm font-semibold transition-all duration-300",
                isActive 
                  ? "bg-primary/10 text-primary shadow-[inset_0_0_12px_rgba(var(--primary),0.05)]" 
                  : "text-muted-foreground/70 hover:bg-primary/5 hover:text-primary"
              )}
            >
              <div className={cn(
                "flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-500",
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-110 rotate-3"
                  : "bg-background/40 border-border/60 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110"
              )}>
                <item.icon className={cn(
                  "h-4.5 w-4.5 transition-transform",
                  isActive && "scale-110"
                )} />
              </div>
              <span className="tracking-tight">{item.name}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-6 bg-primary rounded-full shadow-[0_0_12px_rgba(var(--primary),0.5)] animate-in slide-in-from-right-2 duration-500" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto relative z-10 pt-8 border-t border-border/40 flex flex-col items-start px-3 space-y-3">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 group-hover:text-emerald-500 transition-colors">System Online</span>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] text-muted-foreground/40 tracking-widest font-bold uppercase">
            Edition v1.2.0
          </p>
          <p className="text-[10px] text-muted-foreground/30 tracking-wide font-medium">
            &copy; {new Date().getFullYear()} AI Developer Studio
          </p>
        </div>
      </div>
    </div>
  );
}
