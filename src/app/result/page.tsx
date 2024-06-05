'use client'
import React from "react";
import {Context, QuestionKey} from "@/app/steps/Context";

const CO2Usage = {
    transport: {
        1: 0.2,
        2: 0.4,
        3: 0.6
    },
    outfit: {
        1: 50,
        2: 0,
    },
    food: {
        1: 20,
        2: 150,
    },
    alcohol: 2, // per unit
    attractions: {
        1: 100,
        2: 200,
        3: 500,
    },
    hotel: {
        1: 100,
        2: 250,
        3: 500,
    },
}

export default function Home() {
    const {steps, distance} = React.useContext(Context)
    console.log(steps, distance)

    const calculateCO2Usage = (values: Record<QuestionKey, string | number | boolean>) => {
        let co2Usage = 0;
        const distanceNumber = distance ? parseInt(distance.split(" ")[0]) : 0;
        
        const transport = CO2Usage.transport[values.transport as keyof typeof CO2Usage.transport] * distanceNumber ?? 0;
        const outfit = CO2Usage.outfit[values.outfit as keyof typeof CO2Usage.outfit] ?? 0;
        const food = CO2Usage.food[values.food as keyof typeof CO2Usage.food]?? 0;
        const alcohol = CO2Usage.alcohol * Number(values.alcohol)?? 0;
        const attractions = CO2Usage.attractions[values.attractions as keyof typeof CO2Usage.attractions] ?? 0;
        const hotel = CO2Usage.hotel[values.hotel as keyof typeof CO2Usage.hotel]?? 0;
        
        co2Usage = transport + outfit + food + alcohol + attractions + hotel
        
        return {
            co2Usage,
            transport,
            outfit,
            food,
            alcohol,
            attractions,
            hotel
        }
    }
    
    const min = calculateCO2Usage({
        transport: 1,
        outfit: 1,
        food: 1,
        alcohol: 0,
        attractions: 1,
        hotel: 1
    })
    
    const max = calculateCO2Usage({
        transport: 3,
        outfit: 2,
        food: 2,
        alcohol: 3,
        attractions: 3,
        hotel: 3
    })
    
    const yours = calculateCO2Usage(steps)


    return (
        <div>
            <p>min: {min.co2Usage}</p>
            <p>yours: {yours.co2Usage}</p>
            <p>min: {max.co2Usage}</p>
           
        </div>
    );
}