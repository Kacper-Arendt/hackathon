'use client'
import {Inter} from "next/font/google";
import "./globals.css";
import {ContextProvider} from "@/app/steps/Context";
import {useRouter} from "next/navigation";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter()
    return (
        <html lang="en">
        <body className={inter.className} style={{overflow: 'hidden'}}>
        <ContextProvider>
            {children}
            <span onClick={()=>router.back()} className="fixed top-4 left-2 text-secondary cursor-pointer lg:text-3xl">🔙</span>
        </ContextProvider>
        </body>
        </html>
    );
}
