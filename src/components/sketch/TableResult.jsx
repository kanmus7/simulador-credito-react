import React from "react";
import MaterialTable from 'material-table'
import { calculateTableContent } from '../processes/CreditComputations'

function TableResult({ totalFee, moths, rate, credit, isArrow, setDisplayTable }) {
    let columns = []
    let data = []
    const displayTable = {
        display: 'block'
    }

    if (isArrow) {

        displayTable.display = 'block'

        columns = [
            {
                title: 'Período',
                field: 'periodo'
            },
            {
                title: 'Abono capital',
                field: 'abonoCapital'
            },
            {
                title: 'Interés',
                field: 'interes'
            },
            {
                title: 'Saldo',
                field: 'saldo'
            },
        ]
        data = calculateTableContent(totalFee, moths, rate, credit)
        data[moths].saldo = 0

    } else {
        displayTable.display = 'none'

    }

    setDisplayTable(displayTable.display)

    return (
        <section className={`tableResults ${displayTable.display === 'block' && 'block'}`} id="tableResultsId" >
            <MaterialTable
                title=" "
                options={{
                    search: false,
                    selection: false,
                    showTitle: false,
                    toolbar: false,
                    paging: false,

                }}
                columns={columns}
                data={data}
            />
        </section>
    )
}

export { TableResult }