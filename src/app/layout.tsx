import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Prompt Manager",
  description: "Gerencie seus prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", "font-sans ", inter.variable)}
    >
      <body className="bg-gray-900 text-white">
        <section className="flex h-screen">
          <main className="relative flex-1 overflow-auto min-w-0">
            <div className="p-4 sm:p-6 md:p-8 max-w-full md:max-w-3xl mx-auto h-full">
              {children}
            </div>
          </main>
        </section>
      </body>
    </html>
  );
}
