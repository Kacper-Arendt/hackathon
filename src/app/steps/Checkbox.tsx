"use client"

import React from "react";

export default function CheckBox  ({pending, label, onChange, name}: {
    pending: boolean,
    label:string, 
    onChange: (value:any)=> void, 
    name:string}) {
    const checkboxClass = "border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"

    return( <div className="form-control">
        <label className="label cursor-pointer">
            <input disabled={pending} onChange={onChange} type="checkbox" name={name}
                   className={`checkbox ${checkboxClass}`}/>
            <span className="label-text">{label}</span>
        </label>
    </div>)
}