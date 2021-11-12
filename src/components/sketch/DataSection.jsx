import React from "react";
import { InputGroupContainer, DisplayInputRange } from './InputComponents/InputGroup.jsx'
import { Input } from "./InputComponents/Input.jsx";
import { Span } from "./InputComponents/Span.jsx";

function DataSection({ totalRate, setTotalRate, userState, setUserState, creditState, setCreditState, rangeValue, setRangeValue }) {
    return (
        <section className="data-section">
            <InputGroupContainer className="input-group flex-nowrap" id="name-containerId">
                <Span className="input-group-text" id="inputName-title" text="Nombre de usuario" />
                <Input
                    type="text"
                    placeholder="Nombre mínimo 3 letras"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    id="nameId"
                    inputState={userState}
                    setInputState={setUserState}
                    required />
            </InputGroupContainer>

            <InputGroupContainer className="input-group mb-sm-1" id="credit-containerId">
                <Span className="input-group-text" id="inputName-title" text="Monto del crédito" />
                <Input
                    type="number"
                    min="500000"
                    max="100000000"
                    aria-label="Dollar amount (with dot and two decimal places)"
                    id="creditId"
                    inputState={creditState}
                    setInputState={setCreditState}
                    required />
            </InputGroupContainer>

            <p className="creditTitle">Crédito desde  <mark>500.000 $</mark> hasta <mark>10.000.000.000 $</mark></p>
            <DisplayInputRange totalRate={totalRate} setTotalRate={setTotalRate} rangeValue={rangeValue} setRangeValue={setRangeValue} />
        </section>
    )
}

export { DataSection }