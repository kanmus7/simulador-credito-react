import React from "react";

function CalculateButton({ setBtnClick, userState, creditState }) {

    const ChangeBtnState = () => {
        userState.valid == 'true' && creditState.valid == 'true'? setBtnClick(true):setBtnClick(false)
    }

    if(userState.valid == 'false' || creditState.valid == 'false'){setBtnClick(false)}

    return (
        <div className="btn-container" >
            <button type="button"  onClick = {ChangeBtnState} className="btn btn-primary btn-lg" id="btn-CalculateId">Calcular</button>
        </div>
    )

}

export { CalculateButton }