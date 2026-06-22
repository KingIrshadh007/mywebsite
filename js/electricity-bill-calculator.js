// =============================
// Electricity Bill Calculator
// =============================

let billData = null;

// Calculate Bill
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

    // Save data for PDF
    billData = {
        state,
        units,
        freeUnits,
        chargeableUnits,
        rate,
        fixedCharge,
        totalAmount
    };

    document.getElementById("billResult").innerHTML = `

        <div class="bill-header">
            ⚡ Electricity Usage Report
        </div>

        <div class="bill-row">
            <span>State</span>
            <span>${state}</span>
        </div>

        <div class="bill-row">
            <span>Total Units</span>
            <span>${units}</span>
        </div>

        <div class="bill-row">
            <span>Free Units</span>
            <span>${freeUnits}</span>
        </div>

        <div class="bill-row">
            <span>Chargeable Units</span>
            <span>${chargeableUnits}</span>
        </div>

        <div class="bill-row">
            <span>Rate / Unit</span>
            <span>₹${rate}</span>
        </div>

        <div class="bill-row">
            <span>Fixed Charge</span>
            <span>₹${fixedCharge}</span>
        </div>

        <div class="bill-total">
            ₹${totalAmount.toFixed(2)}
        </div>

    `;
}


// =============================
// Download Beautiful PDF
// =============================

function downloadBillPDF() {

    if (!billData) {
        alert("Please calculate the bill first.");
        return;
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Border
    doc.setDrawColor(0,102,255);
    doc.setLineWidth(1.5);
    doc.roundedRect(8,8,194,135,5,5);

    // Header
    doc.setFillColor(0,102,255);
    doc.roundedRect(8,8,194,20,5,5,"F");

    doc.setTextColor(255,255,255);
    doc.setFontSize(18);
    doc.text("Electricity Usage Report",55,21);

    doc.setTextColor(80);
    doc.setFontSize(10);

    const now = new Date();

    doc.text(
        "Generated : " +
        now.toLocaleDateString() +
        " " +
        now.toLocaleTimeString(),
        15,
        35
    );

    // Table Header
    doc.setFillColor(230,240,255);
    doc.rect(15,45,80,10,"F");
    doc.rect(95,45,90,10,"F");

    doc.setTextColor(0,0,0);
    doc.setFontSize(12);

    doc.text("Description",40,52);
    doc.text("Value",130,52);

    let y = 55;

    function row(label,value){

        doc.rect(15,y,80,12);
        doc.rect(95,y,90,12);

        doc.text(label,20,y+8);
        doc.text(String(value),100,y+8);

        y += 12;
    }

    row("State",billData.state);
    row("Units Consumed",billData.units);
    row("Free Units",billData.freeUnits);
    row("Chargeable Units",billData.chargeableUnits);
    row("Rate Per Unit","₹"+billData.rate);
    row("Fixed Charge","₹"+billData.fixedCharge);

    // Total Box
    doc.setFillColor(34,197,94);

    doc.roundedRect(40,130,120,18,4,4,"F");

    doc.setTextColor(255,255,255);

    doc.setFontSize(15);

    doc.text(
        "TOTAL AMOUNT : ₹" +
        billData.totalAmount.toFixed(2),
        62,
        142
    );

    doc.save("Electricity_Usage_Report.pdf");

}


// =============================
// Clear
// =============================

function clearBill() {

    document.getElementById("units").value = "";
    document.getElementById("freeUnits").value = 0;
    document.getElementById("rate").value = "";
    document.getElementById("fixedCharge").value = 0;

    billData = null;

   document.getElementById("billResult").innerHTML = `
<div class="bill-report">

<h3>⚡ Electricity Usage Report</h3>

<div class="bill-row">
<span>State :</span>
<span>${state}</span>
</div>

<div class="bill-row">
<span>Total Units :</span>
<span>${units}</span>
</div>

<div class="bill-row">
<span>Free Units :</span>
<span>${freeUnits}</span>
</div>

<div class="bill-row">
<span>Chargeable Units :</span>
<span>${chargeableUnits}</span>
</div>

<div class="bill-row">
<span>Rate Per Unit :</span>
<span>₹${rate}</span>
</div>

<div class="bill-row">
<span>Fixed Charge :</span>
<span>₹${fixedCharge}</span>
</div>

<div class="bill-total">
₹${totalAmount.toFixed(2)}
</div>

</div>
`;

}
