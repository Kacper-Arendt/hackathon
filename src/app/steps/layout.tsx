"use client"
import { Analytics } from '@vercel/analytics/react';

export default function Layout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) { 
    return (
        <main>
            {children}
            <Analytics />
        </main>
    );
}
