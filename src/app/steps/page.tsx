"use client"

import React from "react";
import {Context} from "@/app/steps/Context";
import Header from "@/app/steps/Header";
import Step from "@/app/steps/Step";
import { motion, MotionConfig  } from "framer-motion";

export default function Steps() {
    const { currentStep} = React.useContext(Context)
    const renderStep = () => {
        switch (currentStep) {
            case "transport":
                return <Step 
                    stepKey="transport" 
                    nextStepKey="outfit" 
                    header="Jaki transport wybierasz?" 
                    img="https://www.boredpanda.com/blog/wp-content/uploads/2021/07/edgy-environmentalist-memes-545474-61040212ed2cd__700.jpg"
                    items={[{
                    label: "🚌 Autokar",
                    value: 1
                }, {
                    label: "🚗 Samochód",
                    value: 2
                }, {
                    label: "🛫 Samolot",
                    value: 3
                }
                ]}/>
            case "outfit":
                return <Step 
                    stepKey="outfit" 
                    nextStepKey="food" 
                    header="Czy potrzebujesz nowych ubrań?" 
                    img="https://cdn.memes.com/up/38640291658407124/i/1661947461773.jpg"
                    items={[{
                    label: "😟 Tak",
                    value: 1
                }, {
                    label: "👍 Nie",
                    value: 2
                }
                ]}/>            
            case "food":
                return <Step 
                    stepKey="food" 
                    nextStepKey="alcohol" 
                    header="Czy jesz mięso?" 
                    img="https://flynerd.pl/wp-content/uploads/2019/03/weganskie_mleko.jpg"
                    items={[{
                    label: "🍖 Tak",
                    value: 1
                }, {
                    label: "🥦 Jestem wege",
                    value: 2
                }
                ]}/>
            case "alcohol":
                return <Step 
                    stepKey="alcohol" 
                    nextStepKey="attractions" 
                    header="Ile alkoholu wypijesz?" 
                    img="https://pobierak.jeja.pl/images_thumb/b/6/7/676513_600x315.jpg"
                    items={[{
                    label: "🍼 0-500 ml",
                    value: 1
                }, {
                    label: "🍺 500-1000 ml",
                    value: 2
                }, {
                    label: "🚒 1000-2000 ml",
                    value: 3
                }
                ]}/>            
            case "attractions":
                return <Step 
                    stepKey="attractions" 
                    nextStepKey="hotel" 
                    header="Co planujesz robić?" 
                    img="https://i1.jbzd.com.pl/contents/2021/11/normal/bAnnaP9HAwWaZPye9hSU56Aet2dOs888.png"
                    items={[{
                    label: "🏖️ Aktywności na świeżym powietrzu (jazda rowerem, chodzenie po górach)",
                    value: 1
                }, {
                    label: "🏛️ Zwiedzanie i aktywności kulturalne (muzea, galerie sztuki)",
                    value: 2
                }, {
                    label: "🛥️ Rejsy, pływanie motorówką, skutery wodne, etc.",
                    value: 3
                }
                ]}/>              
            case "hotel":
                return <Step 
                    stepKey="hotel"
                    nextStepKey="end"
                    header="Gdzie będziesz spać?" 
                    img="https://i1.kwejk.pl/k/obrazki/2023/11/Aa4YL0W9jfdDRB1i.jpg"
                    items={[{
                    label: "🏕️ Kemping",
                    value: 1
                }, {
                    label: "🛖 Hostel",
                    value: 2
                }, {
                    label: "⭐⭐⭐⭐ Hotel",
                    value: 3
                }
                ]}/>
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center px-8 py-2 overflow-x-hidden relative">
            <MotionConfig transition={{ duration: 1 }}>
                <Header/>
                {renderStep()}
            </MotionConfig>
        </main>
    );
}
