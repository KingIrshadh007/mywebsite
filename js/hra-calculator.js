function calculateHRA(){

    const basic =
    parseFloat(document.getElementById("hraBasic").value);

    const hraReceived =
    parseFloat(document.getElementById("hraReceived").value);

    const rent =
    parseFloat(document.getElementById("hraRent").value);

    if(!basic || !hraReceived || !rent){

        document.getElementById("hraResult").innerHTML =
        "Please enter all fields";

        return;
    }

    const rentPaidYearly = rent * 12;

    const exemption =
    Math.min(
        hraReceived,
        rentPaidYearly - (basic * 0.10),
        basic * 0.50
    );

    document.getElementById("hraResult").innerHTML =
    `
    <b>Estimated HRA Exemption:</b>
    ₹${Math.max(0, exemption).toFixed(2)}
    `;
}
