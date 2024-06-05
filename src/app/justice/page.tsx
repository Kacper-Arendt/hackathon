"use client"

import React from "react";
import "../globals.css"
import { useSearchParams } from 'next/navigation'

export default function Justice(){
    const searchParams = useSearchParams()
    const score = searchParams.get('score') as string
    const maxScore = searchParams.get('maxScore') as string
    const percent: number = (parseInt(score) / parseInt(maxScore)) * 100
    console.log(score, maxScore, percent)
    
    if(percent > 66){
        return (<div className="w-screen h-screen overflow-hidden relative flex justify-center">
            <h2 className="fixed top-[40px] text-xl left-1/2 -translate-x-1/2">Zobacz, co narobiłeś/aś!</h2>
            <img id="panda" src="/panda.png"/>
            <img id="panda2" src="/panda.png"/>
            <img id="panda3" src="/panda.png"/>
            <img src="/asset.gif" className="w-[400px] fixed z-50 -bottom-[50px] left-1/2 -translate-x-1/2"/>
        </div>)
    }
    
    if(percent > 33 && percent <= 66){
        return(
            <div>
                <h2>Mogło być lepiej</h2>
            </div>
        )
    }
    
        return <div>
            <h2>Jesteś kozak</h2>
        </div>


}