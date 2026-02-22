"use client";

import { User, Settings, LogOut, CreditCard, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { GlobalSearch } from "@/components/global-search";
import { Notifications } from "@/components/notifications";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between bg-background/40 backdrop-blur-xl px-8 sticky top-0 z-40 border-b border-border/40 transition-all duration-300">
      <div className="flex items-center gap-6 flex-1">
        <GlobalSearch />
      </div>
      
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Notifications />

        {/* Settings Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-xl text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all">
              <Settings className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Studio Settings</SheetTitle>
              <SheetDescription>
                Configure your AI studio environment and API preferences.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-6 py-8">
              <div className="space-y-2">
                <h4 className="text-sm font-medium leading-none">Model Selection</h4>
                <p className="text-xs text-muted-foreground">Choose the LLM powering your tools.</p>
                <div className="p-3 border rounded-xl bg-muted/50 text-sm font-mono">
                  gemini-flash-latest
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium leading-none">AI Response Speed</h4>
                <p className="text-xs text-muted-foreground">Adjust for low latency vs deep analysis.</p>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-primary" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="h-8 w-[1px] bg-border/40 mx-2" />
        
        {/* Account Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-xl gap-3 pl-2 pr-4 hover:bg-primary/10 transition-all">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-primary-foreground">
                <User className="h-4 w-4" />
              </div>
              <div className="hidden sm:flex flex-col items-start">
                <span className="text-xs font-bold leading-none text-left">Shivam Sharma</span>
                <span className="text-[10px] text-muted-foreground">Admin</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Shivam Sharma</p>
                <p className="text-xs leading-none text-muted-foreground">shivam@studio.ai</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="rounded-lg">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-lg">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-lg">
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-rose-500 rounded-lg focus:bg-rose-500/10 focus:text-rose-500">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
