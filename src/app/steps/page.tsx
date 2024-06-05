"use client"

import React from "react";
import {Context} from "@/app/steps/Context";
import Header from "@/app/steps/Header";
import Step from "@/app/steps/Step";

export default function Steps() {
    const { currentStep} = React.useContext(Context)
    const renderStep = () => {
        switch (currentStep) {
            case "transport":
                return <Step stepKey="transport" nextStepKey="outfit" header="Jaki transport warjancie" items={[{
                    label: "bus",
                    value: "bus"
                }, {
                    label: "furka",
                    value: "furka"
                }, {
                    label: "samolot",
                    value: "samolot"
                }
                ]}/>
            case "outfit":
                return <Step stepKey="outfit" nextStepKey="food" header="Musisz kupić nowy ciuch?" items={[{
                    label: "Nope",
                    value: false
                }, {
                    label: "ajak mordo",
                    value: true
                }
                ]}/>            
            case "food":
                return <Step stepKey="food" nextStepKey="alcohol" header="Jaka paruwa?" items={[{
                    label: "Stejk",
                    value: false
                }, {
                    label: "Wege",
                    value: true
                }
                ]}/>
            case "alcohol":
                return <Step stepKey="alcohol" nextStepKey="attractions" header="Walisz wóde?" items={[{
                    label: "0-500ml",
                    value: 500
                }, {
                    label: "500-1000ml",
                    value: 1000
                }, {
                    label: "1000-2000ml",
                    value: 2000
                }
                ]}/>            
            case "attractions":
                return <Step stepKey="attractions" nextStepKey="hotel" header="Jaki rodzaj hulanek hehe" items={[{
                    label: "Wygibasy z fagatą",
                    value: 1
                }, {
                    label: "Rapowanie z Leosią",
                    value: 2
                }, {
                    label: "Skakanie z Bambi",
                    value: 3
                }
                ]}/>              
            case "hotel":
                return <Step stepKey="hotel" nextStepKey="end" header="Kwatera" items={[{
                    label: "Hostel przy drodze",
                    value: 1
                }, {
                    label: "Kwatera góralska",
                    value: 2
                }, {
                    label: "Top Hotel Ol Ekskjuzmi",
                    value: 3
                }
                ]}/>
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <Header/>
            {renderStep()}
        </main>
    );
}
