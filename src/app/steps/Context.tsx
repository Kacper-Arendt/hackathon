import React, {createContext, useState} from "react";

export type QuestionKey = "transport" | "outfit" | "food" | "alcohol" | "attractions" |"hotel"

interface IContext  {
    distance: string | null
    from: string | null;
    to: string | null;
    steps: Record<QuestionKey, string | number | boolean>
    setStep: (step: QuestionKey, value: any)=> void
    setDistance: (value: string)=> void
    currentStep: QuestionKey
    setCurrentStep: Function
    setTo: (value: string)=>void
    setFrom: (value: string)=>void
}

const defaultState: IContext = {
    distance:  null,
    from: null,
    to: null,
    steps:{
        transport: 1,
        outfit: 1,
        food: 1,
        alcohol: 1,
        attractions: 1,
        hotel: 1
    },
    setStep: (step: QuestionKey, value: any)=> {},
    setDistance: value => {},
    currentStep: "transport",
    setCurrentStep: (value: QuestionKey)=>{},
    setTo: (value: string)=>{},
    setFrom: (value: string)=>{},
}



export const Context = createContext<IContext>(defaultState);

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
    const [steps, setSteps] = React.useState(defaultState.steps)
    const [distance, setDistance] = React.useState(defaultState.distance)
    const [currentStep, setCurrentStep] = React.useState<QuestionKey>(defaultState.currentStep)
    const [from, setFrom] = useState<string | null>(null);
    const [to, setTo] = useState<string | null>(null);

    const setStep = (step: QuestionKey, value: any) =>{
        setSteps(prev=> ({...prev, [step]: value}))
    }
    
    return (
        <Context.Provider
            value={{
                steps,setStep, distance,setDistance, currentStep, setCurrentStep, from, setFrom, to, setTo
            }}
        >
            {children}
        </Context.Provider>
    );
};