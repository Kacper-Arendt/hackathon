'use client'
import React from "react";
import {Context, QuestionKey} from "@/app/steps/Context";
import {Range} from "@/app/result/Range";
import s from './styles.module.css'
import {useRouter} from "next/navigation";
import Image from "next/image";

const CO2Usage = {
    transport: {
        1: 0.2,
        2: 0.4,
        3: 0.6
    },
    outfit: {
        1: 10,
        2: 100,
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
    const router = useRouter()
    const calculateCO2Usage = (values: Record<QuestionKey, string | number | boolean>) => {
        let co2Usage = 0;
        const distanceNumber = distance ? parseInt(distance.split(" ")[0]) : 0;

        const transport = CO2Usage.transport[values.transport as keyof typeof CO2Usage.transport] * distanceNumber;
        const outfit = CO2Usage.outfit[values.outfit as keyof typeof CO2Usage.outfit] ?? 0;
        const food = CO2Usage.food[values.food as keyof typeof CO2Usage.food] ?? 0;
        const alcohol = CO2Usage.alcohol * Number(values.alcohol) ?? 0;
        const attractions = CO2Usage.attractions[values.attractions as keyof typeof CO2Usage.attractions] ?? 0;
        const hotel = CO2Usage.hotel[values.hotel as keyof typeof CO2Usage.hotel] ?? 0;

        co2Usage = transport + outfit + food + alcohol + attractions + hotel
        co2Usage = Math.round(co2Usage * 0.2)
        
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


    console.log("yours", yours)
    console.log("max", max)

    return (
        <div>
            <div className={s.container}>

                <div className={s.summary}>
                    <p className="text-xl font-bold">
                        Wpływ na środowisko:
                    </p>
                    <Range value={yours.co2Usage} min={0} max={max.co2Usage} label="Zużycie Co2"/>
                    <Range value={yours.transport} min={0} max={max.transport} label="Transport"/>
                    <Range value={yours.outfit} min={0} max={max.outfit} label="Outfit"/>
                    <Range value={yours.food} min={0} max={max.food} label="Jedzenie"/>
                    <Range value={yours.alcohol} min={0} max={max.alcohol} label="Alkohol"/>
                    <Range value={yours.attractions} min={0} max={max.attractions} label="Atrakcje"/>
                    <Range value={yours.hotel} min={0} max={max.hotel} label="Hotel"/>

                    <p className="text-2xl">Minimalny: {min.co2Usage} kg CO<sub>2</sub></p>
                    <p className="text-2xl">Twój: {yours.co2Usage} kg CO<sub>2</sub></p>
                    <p className="text-2xl">Maksymalny: {max.co2Usage} kg CO<sub>2</sub></p>
                </div>

                <div className={s.text}>


                    <p>
                        <Image width={130} height={130} className={s.image}
                               src="https://img.redro.pl/obrazy/czerwona-panda-na-galaz-w-lesie-na-slonecznym-dniu-700-123554399.jpg"
                               alt="panda"/>
                        Ślad węglowy jest jednym z najpoważniejszych problemów współczesnego świata. Oznacza on
                        całkowitą
                        ilość gazów cieplarnianych, głównie dwutlenku węgla (CO₂), emitowanych bezpośrednio lub
                        pośrednio
                        przez daną osobę, organizację, wydarzenie czy produkt przez całe jego życie. Wysoki ślad węglowy
                        ma
                        katastrofalne skutki dla naszego środowiska, przyczyniając się do globalnego ocieplenia, zmiany
                        klimatu i degradacji ekosystemów.
                    </p>

                    <p>Jednym z gatunków, który jest szczególnie zagrożony przez zmiany klimatu i degradację siedlisk,
                        jest <b className="text-secondary">czerwona panda</b>. Te urocze i niezwykle rzadkie zwierzęta żyją w lasach bambusowych Azji, a
                        ich liczba drastycznie spada z powodu wycinania lasów, które są niezbędne do ich przetrwania.
                        Wysoki ślad węglowy przyczynia się do niszczenia tych lasów, co zagraża istnieniu czerwonych
                        pand. Bez odpowiednich działań ich populacja będzie nadal maleć, aż w końcu mogą całkowicie
                        zniknąć z dzikiej przyrody.
                    </p>
                    
                    <p> Aby chronić nasze środowisko i zapobiec wyginięciu takich gatunków jak <b className="text-secondary">czerwona
                        panda</b>, musimy
                        pilnie zmniejszyć nasz ślad węglowy. Każdy z nas może podjąć działania na rzecz ochrony planety.
                        Oto kilka kroków, które możemy podjąć:
                    </p>
                    
                    <p><b className="text-secondary">Zrównoważony transport:</b> korzystanie z komunikacji publicznej,
                        jazda na rowerze, chodzenie pieszo i wybieranie samochodów elektrycznych lub hybrydowych zamiast
                        pojazdów z silnikami spalinowymi</p>
                    <p><b className="text-secondary">Zrównoważona moda: </b>
                        ograniczenie ilości kupowanych ubrań, wybieranie zrównoważonych opcji takich jak second-hand,
                        wymiana ubrań ze znajomymi i rodziną, naprawa starych ubrań </p>
                    <p><b className="text-secondary">Zrównoważone nawyki żywieniowe:</b> ograniczenie spożycia mięsa i
                        produktów odzwierzęcych na rzecz diety roślinnej</p>
                </div>
            </div>
            <div className="w-screen flex justify-center my-16">
                <button onClick={() => router.push(`/justice?score=${yours.co2Usage}&maxScore=${max.co2Usage}`)}
                        className="btn btn-secondary px-8 rounded-3xl animate-pulse">Zobacz, jak potoczyły się losy
                    pandy
                </button>
            </div>
        </div>
    );
}