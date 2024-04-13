"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";

export function Provider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            {children}
            <Toaster position="top-right" richColors expand closeButton />
        </NextThemesProvider>
    )
};