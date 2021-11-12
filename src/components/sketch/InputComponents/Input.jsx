import React from "react";
import { ValidateName, ValidateCredit } from '../../processes/CreditValidations.js'
import './InputStyleError.css' 

function Input({ type, min, max, placeholder, arialabel, ariadescribedby, id, required, readOnly, inputState, setInputState }) {
    const UpdateValue = (e) => {
        setInputState({ ...inputState, value: e.target.value })
    }

    const ValidateInputs = (event) => {

        let validate = false

        if (event.target.type == "text") {
            validate = ValidateName(event)
        }

        if (event.target.type == "number") {
            validate = ValidateCredit(event)
        }

        validate ? setInputState({ ...inputState, valid: 'true' }) : setInputState({ ...inputState, valid: 'false' })

    }

    return (
        <input
            onChange={UpdateValue}
            onKeyUp={ValidateInputs}
            onBlur={ValidateInputs}
            value={inputState.value}
            type={type}
            min={min}
            max={max}
            className={`form-control ${inputState.valid === 'false' && 'StyleError-Active'}`}
            placeholder={placeholder}
            aria-label={arialabel}
            aria-describedby={ariadescribedby}
            id={id}
            required={required}
            readOnly={readOnly}
            valid={inputState.valid}
        />
    )
}

export { Input }