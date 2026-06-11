function calculateFD(){

    const principal =
    parseFloat(document.getElementById("fdPrincipal").value);

    const rate =
    parseFloat(document.getElementById("fdRate").value);

    const years =
    parseFloat(document.getElementById("fdYears").value);

    if(!principal || !rate || !years){

        document.getElementById("fdResult").innerHTML =
        "Please enter all fields";

        return;
    }

    const maturity =
    principal * Math.pow((1 + rate / 100), years);

    const interest =
    maturity - principal;

    document.getElementById("fdResult").innerHTML =
    `
    <b>Invested Amount:</b> ₹${principal.toFixed(2)}<br>
    <b>Interest Earned:</b> ₹${interest.toFixed(2)}<br>
    <b>Maturity Amount:</b> ₹${maturity.toFixed(2)}
    `;
}
