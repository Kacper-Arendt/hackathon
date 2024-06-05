'use client'
import s from "./styles.module.css"
import {Map} from "@/components/map/Map";
export default function Home() {
  
  return (
      <main className={s.main}
      >
        <p className={s.title}>Generator śladu węglowego imienia Taylor Swift</p>
        <div className={s.bg} />
        <Map />

      </main>
  );
}
