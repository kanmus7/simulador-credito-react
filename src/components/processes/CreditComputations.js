
const calcMonthlyFee = (creditValue, rate, mothCalculate) => {
    const feePow = Math.pow(1 + rate, mothCalculate)
    let fee = (creditValue * rate * feePow) / (feePow - 1)
    fee = fee.toFixed()
    return fee
}

function calculateTableContent(monthlyFee, moths, rate, credit) {
    let capitalPayment = 0
    let balance = credit
    let interest = 0
    const arrayContent = [
        { periodo: 0, abonoCapital: 0, interes: 0, saldo: Intl.NumberFormat('es-CO').format(balance) }]

    for (let i = 1; i <= moths; i++) {

        interest = rate * balance
        capitalPayment = monthlyFee - interest
        balance = balance - capitalPayment

        capitalPayment = capitalPayment.toFixed(2)
        interest = interest.toFixed(2)
        balance = balance.toFixed(2)

        const newRow = {
            periodo: i,
            abonoCapital: Intl.NumberFormat('es-CO').format(capitalPayment),
            interes: Intl.NumberFormat('es-CO').format(interest),
            saldo: Intl.NumberFormat('es-CO').format(balance)
        }      

        arrayContent.push(newRow)

    }
    return arrayContent
}

export { calcMonthlyFee, calculateTableContent }