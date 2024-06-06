'use client'
import s from "./styles.module.css"
import {Map} from "@/components/map/Map";
import React from "react";
import {Context} from "@/app/steps/Context";
import {DistanceSummary} from "@/components/map/DistanceSummary";

export default function Home() {
    const {setTo, setFrom, setDistance, distance} = React.useContext(Context)

    return (
        <main className={s.main}
        >
            <p className={s.title}>Kalkulator śladu węglowego imienia Taylor Swift</p>
            <div className={s.bg}/>
            {distance &&
                <DistanceSummary distance={distance}/>
            }
            <Map headerClassname={s.inputs} setFrom={setFrom} setTo={setTo} setDistance={setDistance}/>

        </main>
    );
}
