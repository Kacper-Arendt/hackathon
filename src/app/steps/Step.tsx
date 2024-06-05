"use client"

import React from "react";
import {Context, QuestionKey} from "@/app/steps/Context";
import CheckBox from "@/app/steps/Checkbox";
import {useRouter} from "next/navigation"
import { motion, AnimatePresence  } from "framer-motion";

interface Item {
    label: string;
    value: any;
}
export default function Step({
    header,
    stepKey,
    nextStepKey,
    items, 
    img}:{
    header: string
    stepKey: QuestionKey,
    nextStepKey: QuestionKey | "end",
    items: Item[],
    img: string
}){
    const {setStep, currentStep, setCurrentStep} = React.useContext(Context)
    const [pending, setPending] = React.useState(false)
    const router = useRouter()
    const onChange = (value: number) => {

        
        setPending(true)
        setStep(stepKey, value)
        setTimeout(() => {
            if(nextStepKey === "end"){
                router.push("result")
            }else{
                setCurrentStep(nextStepKey)
            }
            setPending(false)
        },500)
    }

    return (<AnimatePresence>
            <motion.div key={stepKey}
                        initial={{x: -300, y: 0, opacity: 0, position: "absolute", top: 60}}
                        animate={{x: 0, y: 0, opacity: 1, position: "absolute", top: 60}}
                        exit={{x: 300, y: 0, opacity: 0, position: "absolute", top: 60}}
            >
                <div>
                    <h2 className="mb-4 text-2xl">{header}</h2>
                    <div>
                        {items.map(item =>
                            <CheckBox
                                key={item.label}
                                pending={pending}
                                label={item.label}
                                onChange={() => onChange(item.value)}
                                name={item.label}/>
                        )}
                    </div>
                </div>
                <img className="mt-4 max-w-[350px]" src={img}/>

            </motion.div>
        </AnimatePresence>
    )
}