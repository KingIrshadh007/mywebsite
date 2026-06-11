function calculatePPF(){

    const yearlyInvestment =
    parseFloat(document.getElementById("ppfAmount").value);

    const rate =
    parseFloat(document.getElementById("ppfRate").value);

    const years =
    parseFloat(document.getElementById("ppfYears").value);

    if(!yearlyInvestment || !rate || !years){

        document.getElementById("ppfResult").innerHTML =
        "Please enter all fields";

        return;
    }

    let maturity = 0;

    for(let i = 0; i < years; i++){

        maturity =
        (maturity + yearlyInvestment) *
        (1 + rate / 100);
    }

    const invested =
    yearlyInvestment * years;

    const gain =
    maturity - invested;

    document.getElementById("ppfResult").innerHTML =
    `
    <b>Total Investment:</b> ₹${invested.toFixed(2)}<br>
    <b>Estimated Gain:</b> ₹${gain.toFixed(2)}<br>
    <b>Maturity Amount:</b> ₹${maturity.toFixed(2)}
    `;
}
