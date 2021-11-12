import React from "react";
import { useState } from 'react';

function InputGroupContainer({ className, id, children }) {
    return (
        <div className={className} id={id}>
            {children}
        </div>
    )
}

function DisplayInputRange(props) {
    let totalRate = props.totalRate
    const [rangeTitle, SetRangeTitle] = useState('22 meses')
    const interesRate = [1.20, 1.15, 1, 0.98]
    const rateMsj = 'Tasa de interés:'
    let [rateTitle, SetRateTitle] = useState(`${rateMsj} ${interesRate[0]}%`)

    const ChangeInputRange = (event) => {
        const inputRangeValue = event.target.value

        SetRangeTitle(`${inputRangeValue} meses`)

        if (inputRangeValue >= 22 && inputRangeValue <= 34) {
            rateTitle = `${rateMsj} ${interesRate[0]}%`
            totalRate = interesRate[0]

        }
        if (inputRangeValue > 34 && inputRangeValue <= 46) {
            rateTitle = `${rateMsj} ${interesRate[1]}%`
            totalRate = interesRate[1]
        }
        if (inputRangeValue > 46 && inputRangeValue <= 58) {
            rateTitle = `${rateMsj} ${interesRate[2]}%`
            totalRate = interesRate[2]
        }
        if (inputRangeValue > 58) {
            rateTitle = `${rateMsj} ${interesRate[3]}%`
            totalRate = interesRate[3]
        }

        SetRateTitle(rateTitle)
        props.setTotalRate(totalRate)
    }

    const updateRange = (event) => {
        const inputRangeValue = event.target.value
        props.setRangeValue(inputRangeValue)
    }

    return (
        <div className="range-container">
            <label htmlFor="customRange2" className="form-label">A pagar en:</label>
            <h6 className="rangeTitle" id="rangeTitle-Id">{rangeTitle}</h6>
            <input type="range"
                onInput={(event) => ChangeInputRange(event)}
                onChange={(event) => { updateRange(event) }}
                className="form-range"
                step={1}
                value={props.rangeValue}
                min={22}
                max={72}
                id="rangeId" />
            <h6 className="rate" id="rateId">{rateTitle}</h6>
        </div>
    )
}

export { InputGroupContainer, DisplayInputRange }