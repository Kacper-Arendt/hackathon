"use client"

import {ContextProvider} from "./Context"
export default function Layout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) { 
    return (
        <main>
            <ContextProvider>
            {children}
            </ContextProvider>
        </main>
    );
}
