function calculateEMI(){

    const principal =
    parseFloat(document.getElementById("emiAmount").value);

    const annualRate =
    parseFloat(document.getElementById("emiRate").value);

    const years =
    parseFloat(document.getElementById("emiYears").value);

    if(!principal || !annualRate || !years){

        document.getElementById("emiResult").innerHTML =
        "Please enter all fields";

        return;
    }

    const monthlyRate =
    annualRate / 12 / 100;

    const months =
    years * 12;

    const emi =
    (principal * monthlyRate *
    Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment =
    emi * months;

    const totalInterest =
    totalPayment - principal;

    document.getElementById("emiResult").innerHTML =
    `
    <b>Monthly EMI:</b> ₹${emi.toFixed(2)}<br>
    <b>Total Interest:</b> ₹${totalInterest.toFixed(2)}<br>
    <b>Total Payment:</b> ₹${totalPayment.toFixed(2)}
    `;
}
