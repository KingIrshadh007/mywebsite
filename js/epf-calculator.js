function calculateEPF(){

    const salary =
    parseFloat(document.getElementById("epfSalary").value);

    const years =
    parseFloat(document.getElementById("epfYears").value);

    if(!salary || !years){

        document.getElementById("epfResult").innerHTML =
        "Please enter all fields";

        return;
    }

    const employeeContribution =
    salary * 0.12;

    const employerContribution =
    salary * 0.12;

    const monthlyTotal =
    employeeContribution + employerContribution;

    const totalContribution =
    monthlyTotal * 12 * years;

    document.getElementById("epfResult").innerHTML =
    `
    <b>Employee Contribution / Month:</b>
    ₹${employeeContribution.toFixed(2)}<br>

    <b>Employer Contribution / Month:</b>
    ₹${employerContribution.toFixed(2)}<br>

    <b>Total Contribution:</b>
    ₹${totalContribution.toFixed(2)}
    `;
}
