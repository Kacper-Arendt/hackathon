"use client"

import React from "react";
import {Context} from "@/app/steps/Context";

export default function Header  (){
    const { currentStep, setCurrentStep} = React.useContext(Context)

    return (<ul className="steps">
        <li className={`step ${currentStep === "transport" ? "step-secondary" : ""}`} onClick={()=>setCurrentStep("transport")}></li>
        <li className={`step ${currentStep === "outfit" ? "step-secondary" : ""}`} onClick={()=>setCurrentStep("outfit")}></li>
        <li className={`step ${currentStep === "food" ? "step-secondary" : ""}`} onClick={()=>setCurrentStep("food")}></li>
        <li className={`step ${currentStep === "alcohol" ? "step-secondary" : ""}`} onClick={()=>setCurrentStep("alcohol")}></li>
        <li className={`step ${currentStep === "attractions" ? "step-secondary" : ""}`} onClick={()=>setCurrentStep("attractions")}></li>
        <li className={`step ${currentStep === "hotel" ? "step-secondary" : ""}`} onClick={()=>setCurrentStep("hotel")}></li>
    </ul>)
}