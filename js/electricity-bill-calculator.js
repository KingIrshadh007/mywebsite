function calculateElectricityBill() {

    const state = document.getElementById("state").value;

    let units = Number(document.getElementById("units").value);
    let freeUnits = Number(document.getElementById("freeUnits").value);
    let rate = Number(document.getElementById("rate").value);
    let fixedCharge = Number(document.getElementById("fixedCharge").value);

    if (units <= 0 || rate <= 0) {
        alert("Please enter valid units and rate.");
        return;
    }

    let chargeableUnits = units - freeUnits;

    if (chargeableUnits < 0) {
        chargeableUnits = 0;
    }

    let energyCharge = chargeableUnits * rate;

    let totalAmount = energyCharge + fixedCharge;

    document.getElementById("billResult").innerHTML = `

        <h3>Bill Details</h3>

        <p><b>State :</b> ${state}</p>

        <p><b>Total Units :</b> ${units}</p>

        <p><b>Free Units :</b> ${freeUnits}</p>

        <p><b>Chargeable Units :</b> ${chargeableUnits}</p>

        <p><b>Rate Per Unit :</b> ₹${rate}</p>

        <p><b>Fixed Charge :</b> ₹${fixedCharge}</p>

        <h2>Total Amount : ₹${totalAmount.toFixed(2)}</h2>

    `;
}

function clearBill() {

    document.getElementById("units").value = "";
    document.getElementById("freeUnits").value = 0;
    document.getElementById("rate").value = "";
    document.getElementById("fixedCharge").value = 0;

    document.getElementById("billResult").innerHTML = `
        <h3>Bill Details</h3>

        <p>State : -</p>

        <p>Total Units : -</p>

        <p>Free Units : -</p>

        <p>Chargeable Units : -</p>

        <p>Rate Per Unit : -</p>

        <p>Fixed Charge : -</p>

        <h2>Total Amount : ₹0</h2>
    `;
}

function downloadBillPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Electricity Bill Calculator", 20, 20);

    doc.setFontSize(12);

    doc.text(
        document.getElementById("billResult").innerText,
        20,
        40
    );

    doc.save("electricity-bill.pdf");

}
