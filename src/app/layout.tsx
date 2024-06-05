'use client'
import {Inter} from "next/font/google";
import "./globals.css";
import {ContextProvider} from "@/app/steps/Context";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className} style={{overflow: 'hidden'}}>
        <ContextProvider>
            {children}
        </ContextProvider>
        </body>
        </html>
    );
}
