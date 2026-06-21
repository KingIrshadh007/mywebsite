async function convertCurrency() {

    const amount =
        parseFloat(document.getElementById("currencyAmount").value);

    const from =
        document.getElementById("fromCurrency").value;

    const to =
        document.getElementById("toCurrency").value;

    const resultBox =
        document.getElementById("currencyResult");

    const rateTime =
        document.getElementById("rateTime");

    if (!amount || amount <= 0) {

        resultBox.innerHTML =
            "Please enter a valid amount.";

        return;
    }

    resultBox.innerHTML = "Loading...";

    try {

        const response =
            await fetch(
                `https://api.exchangerate-api.com/v4/latest/${from}`
            );

        const data = await response.json();

        const rate = data.rates[to];

        const converted =
            (amount * rate).toFixed(2);

        resultBox.innerHTML =
            `${amount} ${from} = <strong>${converted} ${to}</strong>`;

        rateTime.innerHTML =
            "Last updated: " +
            new Date().toLocaleString();

    }

    catch (error) {

        resultBox.innerHTML =
            "Unable to fetch exchange rates.";

    }

}
