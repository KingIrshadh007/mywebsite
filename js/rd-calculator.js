function calculateRD(){

    const monthlyDeposit =
    parseFloat(document.getElementById("rdAmount").value);

    const annualRate =
    parseFloat(document.getElementById("rdRate").value);

    const years =
    parseFloat(document.getElementById("rdYears").value);

    if(!monthlyDeposit || !annualRate || !years){

        document.getElementById("rdResult").innerHTML =
        "Please enter all fields";

        return;
    }

    const months = years * 12;

    const monthlyRate =
    annualRate / 12 / 100;

    const maturity =
    monthlyDeposit *
    ((Math.pow(1 + monthlyRate, months) - 1)
    / monthlyRate) *
    (1 + monthlyRate);

    const invested =
    monthlyDeposit * months;

    const interest =
    maturity - invested;

    document.getElementById("rdResult").innerHTML =
    `
    <b>Total Deposit:</b> ₹${invested.toFixed(2)}<br>
    <b>Interest Earned:</b> ₹${interest.toFixed(2)}<br>
    <b>Maturity Amount:</b> ₹${maturity.toFixed(2)}
    `;
}
