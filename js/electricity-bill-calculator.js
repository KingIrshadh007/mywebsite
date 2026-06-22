```javascript
// ======================================
// ELECTRICITY BILL CALCULATOR
// ======================================

let billData = null;

// Generate Bill Number
function generateBillNumber() {
    return "EB" + Date.now().toString().slice(-8);
}

// ======================================
// CALCULATE BILL
// ======================================

function calculateElectricityBill() {

    const state = document.getElementById("state").value;

    const units = Number(document.getElementById("units").value);

    const freeUnits = Number(document.getElementById("freeUnits").value);

    const rate = Number(document.getElementById("rate").value);

    const fixedCharge = Number(
        document.getElementById("fixedCharge").value
    );

    if (units <= 0 || rate <= 0) {
        alert("Please enter valid units and rate.");
        return;
    }

    const chargeableUnits =
        Math.max(0, units - freeUnits);

    const total =
        (chargeableUnits * rate) + fixedCharge;

    billData = {
        billNo: generateBillNumber(),
        state,
        units,
        freeUnits,
        chargeableUnits,
        rate,
        fixedCharge,
        total,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    };

    document.getElementById("billResult").innerHTML = `

<h3>⚡ Electricity Usage Report</h3>

<p><b>Bill Number :</b> ${billData.billNo}</p>

<p><b>State :</b> ${state}</p>

<p><b>Total Units :</b> ${units}</p>

<p><b>Free Units :</b> ${freeUnits}</p>

<p><b>Chargeable Units :</b> ${chargeableUnits}</p>

<p><b>Rate Per Unit :</b> ₹${rate}</p>

<p><b>Fixed Charge :</b> ₹${fixedCharge}</p>

<p><b>Date :</b> ${billData.date}</p>

<p><b>Time :</b> ${billData.time}</p>

<hr>

<h2>Total Amount : ₹${total.toFixed(2)}</h2>

`;

}

// ======================================
// CLEAR
// ======================================

function clearBill() {

    billData = null;

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

// ======================================
// COPY BILL
// ======================================

function copyBill() {

    if (!billData) {
        alert("Please calculate the bill first.");
        return;
    }

    navigator.clipboard.writeText(

`Electricity Usage Report

Bill Number : ${billData.billNo}

State : ${billData.state}

Units : ${billData.units}

Total Amount : ₹${billData.total.toFixed(2)}
`
    );

    alert("Bill copied successfully.");
}

// ======================================
// PRINT BILL
// ======================================

function printBill() {

    if (!billData) {
        alert("Please calculate bill first.");
        return;
    }

    window.print();

}

// ======================================
// SHARE BILL
// ======================================

function shareBill() {

    if (!billData) {
        alert("Please calculate bill first.");
        return;
    }

    if (navigator.share) {

        navigator.share({

            title: "Electricity Usage Report",

            text:
`Bill Number : ${billData.billNo}

State : ${billData.state}

Total Amount : ₹${billData.total.toFixed(2)}
`

        });

    } else {

        alert("Share not supported on this device.");

    }

}

// ======================================
// DOWNLOAD PDF
// ======================================

function downloadBillPDF() {

    if (!billData) {
        alert("Please calculate bill first.");
        return;
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a5"
    });

    // Border
    doc.setDrawColor(59,130,246);
    doc.setLineWidth(1);
    doc.roundedRect(8,8,132,185,4,4);

    // Header
    doc.setFillColor(59,130,246);

    doc.roundedRect(8,8,132,18,4,4,"F");

    doc.setTextColor(255,255,255);

    doc.setFontSize(16);

    doc.text(
        "Electricity Usage Report",
        74,
        20,
        {align:"center"}
    );

    doc.setTextColor(0,0,0);

    doc.setFontSize(11);

    let y = 40;

    doc.text(`Bill No : ${billData.billNo}`,15,y);

    y += 12;

    doc.text(`State : ${billData.state}`,15,y);

    y += 12;

    doc.text(`Units : ${billData.units}`,15,y);

    y += 12;

    doc.text(`Free Units : ${billData.freeUnits}`,15,y);

    y += 12;

    doc.text(`Chargeable Units : ${billData.chargeableUnits}`,15,y);

    y += 12;

    doc.text(`Rate Per Unit : ₹${billData.rate}`,15,y);

    y += 12;

    doc.text(`Fixed Charge : ₹${billData.fixedCharge}`,15,y);

    y += 20;

    doc.setFillColor(16,185,129);

    doc.roundedRect(
        20,
        y,
        105,
        18,
        3,
        3,
        "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFontSize(14);

    doc.text(
        `Total Amount : ₹${billData.total.toFixed(2)}`,
        72,
        y + 11,
        {align:"center"}
    );

    doc.save("Electricity-Usage-Report.pdf");

}
```
