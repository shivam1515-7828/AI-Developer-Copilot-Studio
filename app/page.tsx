"use client";

import Link from "next/link";
import { 
  Code, 
  BookOpen, 
  Bug, 
  FileSearch, 
  ArrowRightLeft, 
  ArrowRight,
  ChevronRight,
  Zap,
  Globe,
  Lock,
  GitCommit
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Repo Explainer",
    description: "Deep-dive analysis of complex code architecture and logic flow.",
    icon: FileSearch,
    href: "/explainer",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    shadow: "group-hover:shadow-blue-500/10",
  },
  {
    title: "Code Reviewer",
    description: "AI-driven quality gate to detect bugs and optimization points.",
    icon: Code,
    href: "/reviewer",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
    shadow: "group-hover:shadow-emerald-500/10",
  },
  {
    title: "Debug Assistant",
    description: "Automated root-cause analysis for stack traces and system logs.",
    icon: Bug,
    href: "/debugger",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "group-hover:border-rose-500/50",
    shadow: "group-hover:shadow-rose-500/10",
  },
  {
    title: "Docs Generator",
    description: "Maintain high documentation hygiene with auto-generated READMEs.",
    icon: BookOpen,
    href: "/docs",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/50",
    shadow: "group-hover:shadow-amber-500/10",
  },
  {
    title: "Code Translator",
    description: "Seamlessly port logic across multiple programming languages.",
    icon: ArrowRightLeft,
    href: "/translator",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    border: "group-hover:border-indigo-500/50",
    shadow: "group-hover:shadow-indigo-500/10",
  },
  {
    title: "Commit Generator",
    description: "Transform your code changes into professional commit messages.",
    icon: GitCommit,
    href: "/commit",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
    shadow: "group-hover:shadow-purple-500/10",
  },
];

export default function Home() {
  return (
    <div className="space-y-20 py-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      {/* Hero Section */}
      <section className="relative text-center space-y-8 max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
        
        <div className="space-y-6 relative z-10">
          <div className="h-1 w-20 bg-gradient-to-r from-primary/50 to-transparent mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(var(--primary),0.3)]" />
          
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none">
            Architecting <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-indigo-600">
              Intelligence.
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground/80 leading-relaxed font-medium max-w-2xl mx-auto">
            A specialized AI ecosystem designed to accelerate your development lifecycle. 
            Analyze, review, debug, and document with unprecedented precision.
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-8">
            <Link href="/explainer">
              <div className="flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all active:scale-95 cursor-pointer">
                Initialize System
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="space-y-10 relative z-10">
        <div className="flex items-end justify-between px-2">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">Core Suite</h2>
            <p className="text-muted-foreground font-medium">Enterprise-grade utilities powered by Gemini 2.5</p>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-border/0 via-border to-border/0 mx-10 hidden md:block" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href} className="group outline-none">
              <Card className={`h-full relative overflow-hidden transition-all duration-500 border-border/40 bg-card/40 backdrop-blur-xl hover:bg-card/60 hover:-translate-y-2 hover:shadow-2xl ${feature.border} ${feature.shadow}`}>
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-20 ${feature.bg}`} />
                
                <CardContent className="p-8 space-y-6">
                  <div className={`inline-flex items-center justify-center h-16 w-16 rounded-2xl border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${feature.bg}`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight transition-colors">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground font-medium">{feature.description}</p>
                  </div>
                  
                  <div className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-primary/0 translate-y-3 group-hover:text-primary group-hover:translate-y-0 transition-all duration-300">
                    Open Tool <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Ecosystem Section */}
      <section className="pt-20">
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { icon: Globe, label: "Global Presence", detail: "Distributed AI edge nodes" },
             { icon: Lock, label: "Encryption", detail: "End-to-end data security" },
             { icon: Zap, label: "Real-time", detail: "Streaming intelligence" }
           ].map((stat, i) => (
             <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-card/10 border border-border/20 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                   <div className="font-bold text-foreground">{stat.label}</div>
                   <div className="text-xs text-muted-foreground font-medium">{stat.detail}</div>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
