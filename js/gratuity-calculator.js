function calculateGratuity(){

    const salary =
    parseFloat(document.getElementById("gratuitySalary").value);

    const years =
    parseFloat(document.getElementById("gratuityYears").value);

    if(!salary || !years){

        document.getElementById("gratuityResult").innerHTML =
        "Please enter all fields";

        return;
    }

    const gratuity =
    (salary * 15 * years) / 26;

    document.getElementById("gratuityResult").innerHTML =
    `
    <b>Last Drawn Salary:</b> ₹${salary.toFixed(2)}<br>
    <b>Years of Service:</b> ${years}<br>
    <b>Estimated Gratuity:</b> ₹${gratuity.toFixed(2)}
    `;
}
