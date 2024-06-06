'use client'
import QRCode from "react-qr-code";

export default function Qr (){
    return <>

        <div className="h-full flex justify-center flex-col gap-4 items-center p-4 bg-white" style={{height: '100vh'}}>
            <p className='text-secondary text-2xl font-bold'>Dziękujemy 🩷🩷🩷</p>
            <p className='text-secondary text-2xl font-bold'>cringe.z Team</p>
            <QRCode value="https://zalezymico2.vercel.app" />
        </div>
    </>
}