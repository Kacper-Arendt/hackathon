import React, { createContext } from "react";

export type QuestionKey = "transport" | "outfit" | "food" | "alcohol" | "attractions" |"hotel"

interface IContext  {
    distance: number
    steps: Record<QuestionKey, string | number | boolean>
    setStep: (step: QuestionKey, value: any)=> void
    setDistance: React.Dispatch<React.SetStateAction<number>>
    currentStep: QuestionKey
    setCurrentStep: Function
}

const defaultState: IContext = {
    distance: 0,
    steps:{
        transport: "bus",
        outfit: true,
        food: true,
        alcohol: 500,
        attractions: "wszystkie",
        hotel: "*****"
    },
    setStep: (step: QuestionKey, value: any)=> {},
    setDistance: value => {},
    currentStep: "transport",
    setCurrentStep: (value: QuestionKey)=>{}

}



export const Context = createContext<IContext>(defaultState);

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
    const [steps, setSteps] = React.useState(defaultState.steps)
    const [distance, setDistance] = React.useState(defaultState.distance)
    const [currentStep, setCurrentStep] = React.useState<QuestionKey>(defaultState.currentStep)

    const setStep = (step: QuestionKey, value: any) =>{
        setSteps(prev=> ({...prev, [step]: value}))
    }
    
    return (
        <Context.Provider
            value={{
                steps,setStep, distance,setDistance, currentStep, setCurrentStep
            }}
        >
            {children}
        </Context.Provider>
    );
};