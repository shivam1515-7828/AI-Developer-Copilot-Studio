"use client";

import { Bell, Check, Info, AlertTriangle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: 1,
    title: "System Update",
    description: "Gemini 2.5 Intelligence Engine is now active.",
    time: "2 mins ago",
    icon: Sparkles,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: 2,
    title: "Security Scan",
    description: "No vulnerabilities detected in your last review.",
    time: "1 hour ago",
    icon: Check,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: 3,
    title: "API Limit Warning",
    description: "You have used 80% of your daily token quota.",
    time: "5 hours ago",
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    id: 4,
    title: "New Feature",
    description: "Multi-language Code Translation is now live.",
    time: "Yesterday",
    icon: Info,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

export function Notifications() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl relative text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-rose-500 border-2 border-background" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 rounded-2xl border-border/40 bg-background/95 backdrop-blur-xl shadow-2xl" align="end">
        <div className="p-4 border-b border-border/40 flex items-center justify-between">
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Notifications</h4>
          <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">4 NEW</span>
        </div>
        <ScrollArea className="h-[350px]">
          <div className="p-2 space-y-1">
            {notifications.map((n) => (
              <button
                key={n.id}
                className="w-full text-left p-3 rounded-xl hover:bg-muted/50 transition-colors flex gap-4 group"
              >
                <div className={cn("h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", n.bg)}>
                  <n.icon className={cn("h-5 w-5", n.color)} />
                </div>
                <div className="space-y-1 overflow-hidden">
                  <p className="text-sm font-semibold text-foreground truncate">{n.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {n.description}
                  </p>
                  <p className="text-[10px] text-muted-foreground/50 font-medium">
                    {n.time}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
        <div className="p-2 border-t border-border/40">
          <Button variant="ghost" className="w-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary/5 hover:text-primary rounded-lg py-2">
            View All Activity
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
