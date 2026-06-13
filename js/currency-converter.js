function convertCurrency(){

    const amount =
    parseFloat(
        document.getElementById("currencyAmount").value
    );

    const from =
    document.getElementById("fromCurrency").value;

    const to =
    document.getElementById("toCurrency").value;

    if(isNaN(amount)){

        document.getElementById("currencyResult").innerHTML =
        "Please enter an amount";

        return;
    }

    const rates = {

        USD: 1,
        INR: 86,
        EUR: 0.92,
        GBP: 0.78

    };

    const usdAmount =
    amount / rates[from];

    const converted =
    usdAmount * rates[to];

    document.getElementById("currencyResult").innerHTML =
    `
    <b>${amount} ${from}</b>
    =
    <b>${converted.toFixed(2)} ${to}</b>
    `;
}
