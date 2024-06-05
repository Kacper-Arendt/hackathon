"use client"

import React from "react";

export default function CheckBox  ({pending, label, onChange, name}: {
    pending: boolean,
    label:string, 
    onChange: (value:any)=> void, 
    name:string}) {
    const checkboxClass = "checkbox-secondary"

    return( <div className="form-control">
        <label className="label cursor-pointer justify-start">
            <input disabled={pending} onChange={onChange} type="checkbox" name={name}
                   className={`checkbox ${checkboxClass}`}/>
            <span className="label-text ml-4 text-lg">{label}</span>
        </label>
    </div>)
}