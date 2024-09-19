import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppProvider } from "@/shared/context";
import { Navbar } from "@/widgets/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "boilerplate app",
  description: "basic functionality with a modern stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProvider>
          <div className="grid h-screen w-full pl-[56px]">
            <Navbar />
            <div className="flex flex-col z-0">
              <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
                <h1 className="text-xl font-semibold">boilerplate</h1>
              </header>
              <main className="flex-grow overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </AppProvider>
      </body>
    </html >
  );
}
