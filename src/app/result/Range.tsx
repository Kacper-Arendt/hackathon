function isValueGreaterThanHalfMax(value: number, max: number) {
    return value > max / 2;
}

export const Range = ({min, max, steps, value, label}: {label: string;value: number;min: number; max: number; steps?: number}) => {
    return (
        <div >
            <p>{label}</p>
            <input type="range" min={min} max={max} value={value} step={steps} className={`range ${isValueGreaterThanHalfMax(value, max) ? "range-error" : "range-success"} `}/>
            <div className="w-full flex justify-between text-xs">
                <span>Mały</span>
                <span>Duży</span>
            </div>
        </div>
    )
}