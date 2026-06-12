function calculateDateDifference(){

    const startDate =
    document.getElementById("startDate").value;

    const endDate =
    document.getElementById("endDate").value;

    if(!startDate || !endDate){

        document.getElementById("dateResult").innerHTML =
        "Please select both dates";

        return;
    }

    const start =
    new Date(startDate);

    const end =
    new Date(endDate);

    const difference =
    Math.abs(end - start);

    const days =
    Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
    );

    document.getElementById("dateResult").innerHTML =
    `
    <b>Date Difference:</b>
    ${days} day(s)
    `;
}
