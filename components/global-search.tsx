"use client";

import * as React from "react";
import {
  Settings,
  User,
  Search,
  FileSearch,
  Code,
  Bug,
  BookOpen,
  ArrowRightLeft,
  GitCommit,
} from "lucide-react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative max-w-md w-full group hidden md:flex items-center gap-3 px-4 h-11 bg-background/30 border border-border/40 hover:border-primary/50 transition-all duration-300 rounded-xl text-muted-foreground"
      >
        <Search className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
        <span className="text-sm">Search tools or code...</span>
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Tools">
            <CommandItem onSelect={() => runCommand(() => router.push("/explainer"))}>
              <FileSearch className="mr-2 h-4 w-4" />
              <span>Repo Explainer</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/reviewer"))}>
              <Code className="mr-2 h-4 w-4" />
              <span>Code Reviewer</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/debugger"))}>
              <Bug className="mr-2 h-4 w-4" />
              <span>Debug Assistant</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/docs"))}>
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Docs Generator</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/translator"))}>
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              <span>Code Translator</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/commit"))}>
              <GitCommit className="mr-2 h-4 w-4" />
              <span>Commit Generator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
