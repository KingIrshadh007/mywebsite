function calculateTax(){

    const income =
    parseFloat(document.getElementById("taxIncome").value);

    if(!income){

        document.getElementById("taxResult").innerHTML =
        "Please enter annual income";

        return;
    }

    let tax = 0;

    if(income <= 300000){

        tax = 0;

    }else if(income <= 700000){

        tax = (income - 300000) * 0.05;

    }else if(income <= 1000000){

        tax = 20000 +
        (income - 700000) * 0.10;

    }else if(income <= 1200000){

        tax = 50000 +
        (income - 1000000) * 0.15;

    }else if(income <= 1500000){

        tax = 80000 +
        (income - 1200000) * 0.20;

    }else{

        tax = 140000 +
        (income - 1500000) * 0.30;
    }

    document.getElementById("taxResult").innerHTML =
    `
    <b>Annual Income:</b> ₹${income.toFixed(2)}<br>
    <b>Estimated Tax:</b> ₹${tax.toFixed(2)}
    `;
}
