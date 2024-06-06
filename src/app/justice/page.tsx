"use client"

import React from "react";
import "../globals.css"
import { useSearchParams } from 'next/navigation'
import Confetti from 'react-confetti'

export default function Justice() {
    const searchParams = useSearchParams()
    const score = searchParams.get('score') as string
    const maxScore = searchParams.get('maxScore') as string
    const percent: number = (parseInt(score) / parseInt(maxScore)) * 100
    console.log(`score: ${score}, max score: ${maxScore}, percent: ${percent}`)

    if (percent > 50) {
        return (<div className="w-screen h-screen overflow-hidden relative flex justify-center">
            <h2 className="fixed top-[40px] text-xl left-1/2 -translate-x-1/2 text-center">Zobacz, co narobiłeś/aś! 🪦</h2>
            <img id="panda" src="/panda.png"/>
            <img id="panda2" src="/panda.png"/>
            <img id="panda3" src="/panda.png"/>
            <img src="/asset.gif" className="w-[400px] fixed z-50 -bottom-[50px] left-1/2 -translate-x-1/2"/>
        </div>)
    }

    return <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl text-center">Gratulacje! Uratowałeś/aś małe pandy ❤️</h2>
        <img className="h-[200px]" src="/panda.png"/>
        <Confetti
            className="w-screen h-screen"
            numberOfPieces={200}
            gravity={0.2}
        />
    </div>


}