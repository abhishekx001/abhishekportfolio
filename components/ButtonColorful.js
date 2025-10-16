"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}) {
    return (
        <Button
            className={cn(
                "relative h-10 px-4 overflow-hidden",
                "bg-black",
                "transition-all duration-200",
                "group",
                className
            )}
            style={{ fontFamily: '"BBH Sans Bogle", sans-serif', fontSize: '0.875rem', fontWeight: '400', letterSpacing: '0.05em' }}
            {...props}
        >

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white">{label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/90" />
            </div>
        </Button>
    );
}
