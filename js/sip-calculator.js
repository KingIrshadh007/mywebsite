function calculateSIP(){

    const monthlyInvestment =
    parseFloat(document.getElementById("sipAmount").value);

    const annualRate =
    parseFloat(document.getElementById("sipRate").value);

    const years =
    parseFloat(document.getElementById("sipYears").value);

    if(!monthlyInvestment || !annualRate || !years){

        document.getElementById("sipResult").innerHTML =
        "Please enter all fields";

        return;
    }

    const monthlyRate =
    annualRate / 12 / 100;

    const months =
    years * 12;

    const futureValue =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1)
    / monthlyRate) * (1 + monthlyRate));

    const investedAmount =
    monthlyInvestment * months;

    const wealthGained =
    futureValue - investedAmount;

    document.getElementById("sipResult").innerHTML =
    `
    <b>Total Invested:</b> ₹${investedAmount.toFixed(2)}<br>
    <b>Estimated Returns:</b> ₹${wealthGained.toFixed(2)}<br>
    <b>Maturity Value:</b> ₹${futureValue.toFixed(2)}
    `;
}
