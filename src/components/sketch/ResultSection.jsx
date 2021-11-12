import React from "react";
import arrowImg from '../../resources/arrow.png'
import { InputGroupContainer } from "./InputComponents/InputGroup.jsx";
import { Span } from "./InputComponents/Span.jsx";

function ResultSection({ totalRate, inputNameState, monthlyFee, setIsArrow, displayTable }) {
    let userName = inputNameState.value
    userName = userName.toUpperCase()
    const TransformArrowImg = (event) => {
        if (displayTable === 'none' || displayTable === '') {
            setIsArrow(true)
            event.target.style.transform = 'rotate(180deg)'
        } else {
            setIsArrow(false)
            event.target.style.transform = ''
        }
    }

    return (
        <section className="results-section" id="results-SectionId" >
            <h3 id="usarNameId" className="userName">{userName}</h3>
            <InputGroupContainer className="input-group mb-3">
                <Span className="input-group-text" id="InteresRateId" text="Tasa de interés:" />
                <input type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    id="rateId-Answer"
                    aria-describedby="inputGroup-sizing-default"
                    value={`${totalRate} %`}
                    readOnly />
            </InputGroupContainer>

            <InputGroupContainer className="input-group mb-3">
                <Span className="input-group-text" id="span-monthlyFeeId" text="Cuota mensual:" />
                <input type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    id="monthlyFeeId"
                    aria-describedby="inputGroup-sizing-default"
                    value={`${monthlyFee} $`}
                    readOnly />
            </InputGroupContainer>

            <InputGroupContainer className="moreInfo-Container" id="moreInfo-ContainerId">
                <h6 ><small className="text-muted">Mostrar más información</small></h6>
                <img src={arrowImg} onClick={TransformArrowImg} alt="flecha" className="arrow-img" id="arrowImg-Id" />
            </InputGroupContainer>
        </section>
    )
}

export { ResultSection }