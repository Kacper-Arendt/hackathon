"use client"

import React from "react";
import {Context, QuestionKey} from "@/app/steps/Context";
import CheckBox from "@/app/steps/Checkbox";
import {useRouter} from "next/navigation"
interface Item {
    label: string;
    value: any;
}
export default function Step({
    header,
    stepKey,
    nextStepKey,
    items}:{
    header: string
    stepKey: QuestionKey,
    nextStepKey: QuestionKey | "end",
    items: Item[]
}){
    const {setStep, currentStep, setCurrentStep} = React.useContext(Context)
    const [pending, setPending] = React.useState(false)
    const router = useRouter()
    const onChange = (value: number) => {
        if(nextStepKey === "end"){
            router.push("result")
            return
        }
        
        setPending(true)
        setStep(stepKey, value)
        setTimeout(() => {
            setCurrentStep(nextStepKey)
            setPending(false)
        },1000)
    }

    return ( <div>
            <h2>{header}</h2>
            <div>
                {items.map(item=>
                    <CheckBox 
                        key={item.label}
                        pending={pending} 
                        label={item.label} 
                        onChange={()=>onChange(item.value)} 
                        name={item.label}/>
                )}
            </div>
        </div>

    )
}