'use client'
import React from "react";
import {Context} from "@/app/steps/Context";

const CO2Usage = {
    transport: {
        bus: 0.2,
        furka: 0.4,
        samolot: 0.6
    },
    outfit: {
        new: 50,
        existing: 0,
    },
    food: {
        vegan: 20,
        nonVegan: 50,
    },
    alcohol: 2, // per unit
    attractions: {
        1: 100,
        2: 50,
        3: 0,
    },
    hotel: {
        1: 200,
        2: 150,
        3: 100,
    },
}

export default function Home() {
    const {steps, distance } = React.useContext(Context)
    console.log(steps,distance)
    
    const calculateCO2Usage = () => {
        let co2Usage = 0;
        const distanceNumber = distance ? parseInt(distance.split(" ")[0]) : 0;
        
        co2Usage += CO2Usage.transport[steps.transport as keyof typeof CO2Usage.transport] * distanceNumber;
        co2Usage += CO2Usage.outfit[steps.outfit ? "new" : "existing"];
        co2Usage += CO2Usage.food[steps.food ? "vegan" : "nonVegan"];
        co2Usage += CO2Usage.alcohol * Number(steps.alcohol);
        co2Usage += CO2Usage.attractions[steps.attractions as keyof typeof CO2Usage.attractions];
        co2Usage += CO2Usage.hotel[steps.hotel as keyof typeof CO2Usage.hotel];

        return co2Usage
    }
    
    

    return (
        <div>
            {calculateCO2Usage()}
        </div>
    );
}