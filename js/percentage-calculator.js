function calculatePercentage(){

    const number =
    parseFloat(document.getElementById("percentNumber").value);

    const percentage =
    parseFloat(document.getElementById("percentValue").value);

    if(isNaN(number) || isNaN(percentage)){

        document.getElementById("percentageResult").innerHTML =
        "Please enter valid values";

        return;
    }

    const result =
    (number * percentage) / 100;

    document.getElementById("percentageResult").innerHTML =
    `
    <b>${percentage}%</b> of
    <b>${number}</b> =
    <b>${result.toFixed(2)}</b>
    `;
}
