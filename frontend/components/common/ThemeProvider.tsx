"use client";
import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider enableSystem={true} defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  );
}
