import React, { useState } from "react";
import { ResultSection } from './ResultSection.jsx'
import { TableResult } from './TableResult.jsx'
import { calcMonthlyFee } from '../processes/CreditComputations.js'

function ArticleResults({ totalRate, userState, creditState, btnClick, moths }) {
    let monthlyFee = ""
    let totalFee = ""
    let isHidden = true
    const creditValue = parseInt(creditState.value)
    const mothCalculate = parseInt(moths)
    const rate = totalRate / 100
    const [arrowClick, setArrowClick] = useState(false)
    const [displayTable, setDisplayTable] = useState('none')

    if (btnClick == true) {
        isHidden = false

        if (userState.valid === 'true' && creditState.valid === 'true') {
            totalFee = calcMonthlyFee(creditValue, rate, mothCalculate)
           monthlyFee = new Intl.NumberFormat('es-CO').format(totalFee)
        }
    }

    return (
        <article className="results" id="resultsId" hidden={isHidden}>
            <ResultSection 
                rate={rate} totalRate={totalRate}
                inputNameState={userState} monthlyFee={monthlyFee}
                setIsArrow={setArrowClick}
                displayTable={displayTable} />
            <TableResult totalFee={totalFee} moths={mothCalculate} rate={rate} credit={creditState.value} isArrow={arrowClick} setDisplayTable={setDisplayTable}  />
        </article>
    )
}

export { ArticleResults }