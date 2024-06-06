'use client'
import {Inter} from "next/font/google";
import "./globals.css";
import {ContextProvider} from "@/app/steps/Context";
import {usePathname, useRouter} from "next/navigation";
import Head from "next/head";

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <html lang="en">
        <Head>
            <title>Zależy mi Co2</title>
            <link rel="icon" href="/favicon.ico" sizes="any"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body className={inter.className} style={{}}>
        <ContextProvider>
            {children}
            {pathname !== "/" && <span onClick={() => router.back()}
                                       className="fixed top-4 left-2 text-secondary cursor-pointer lg:text-3xl">🔙</span>}
        </ContextProvider>
        <Analytics />
        </body>
        </html>
    );
}
