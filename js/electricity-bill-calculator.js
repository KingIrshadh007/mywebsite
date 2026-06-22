```javascript
// ======================================
// ELECTRICITY BILL CALCULATOR
// ======================================

let billData = null;

function generateBillNumber() {
    return "EB" + Date.now().toString().slice(-8);
}

// ======================================
// CALCULATE BILL
// ======================================

function calculateElectricityBill() {

    const state = document.getElementById("state").value;
    const units = parseFloat(document.getElementById("units").value) || 0;
    const freeUnits = parseFloat(document.getElementById("freeUnits").value) || 0;
    const rate = parseFloat(document.getElementById("rate").value) || 0;
    const fixedCharge = parseFloat(document.getElementById("fixedCharge").value) || 0;

    if (units <= 0 || rate <= 0) {
        alert("Please enter valid Units and Rate.");
        return;
    }

    const chargeableUnits = Math.max(0, units - freeUnits);
    const total = (chargeableUnits * rate) + fixedCharge;

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
        <h3>📄 Electricity Usage Report</h3>

        <p><strong>Bill Number :</strong> ${billData.billNo}</p>
        <p><strong>State :</strong> ${billData.state}</p>
        <p><strong>Total Units :</strong> ${billData.units}</p>
        <p><strong>Free Units :</strong> ${billData.freeUnits}</p>
        <p><strong>Chargeable Units :</strong> ${billData.chargeableUnits}</p>
        <p><strong>Rate Per Unit :</strong> ₹${billData.rate}</p>
        <p><strong>Fixed Charge :</strong> ₹${billData.fixedCharge}</p>
        <p><strong>Date :</strong> ${billData.date}</p>
        <p><strong>Time :</strong> ${billData.time}</p>

        <hr>

        <h2 style="margin-top:15px;">
            Total Amount : ₹${billData.total.toFixed(2)}
        </h2>
    `;
}

// ======================================
// CLEAR BILL
// ======================================

function clearBill() {

    billData = null;

    document.getElementById("units").value = "";
    document.getElementById("freeUnits").value = "0";
    document.getElementById("rate").value = "";
    document.getElementById("fixedCharge").value = "0";

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
// DOWNLOAD PDF
// ======================================

function downloadBillPDF() {

    if (!billData) {
        alert("Please calculate bill first.");
        return;
    }

    if (!window.jspdf) {
        alert("jsPDF library not loaded.");
        return;
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a5"
    });

    // Outer Border
    doc.setDrawColor(40, 120, 255);
    doc.setLineWidth(0.8);
    doc.rect(8, 8, 132, 190);

    // Header
    doc.setFillColor(40, 120, 255);
    doc.rect(8, 8, 132, 18, "F");

    doc.setTextColor(255,255,255);
    doc.setFontSize(14);
    doc.text("Electricity Usage Report", 74, 19, {align:"center"});

    doc.setTextColor(0,0,0);

    let y = 40;

    doc.setFontSize(10);

    doc.text(`Bill Number : ${billData.billNo}`, 15, y); y += 10;
    doc.text(`State : ${billData.state}`, 15, y); y += 10;
    doc.text(`Units : ${billData.units}`, 15, y); y += 10;
    doc.text(`Free Units : ${billData.freeUnits}`, 15, y); y += 10;
    doc.text(`Chargeable Units : ${billData.chargeableUnits}`, 15, y); y += 10;
    doc.text(`Rate Per Unit : Rs. ${billData.rate}`, 15, y); y += 10;
    doc.text(`Fixed Charge : Rs. ${billData.fixedCharge}`, 15, y); y += 10;
    doc.text(`Date : ${billData.date}`, 15, y); y += 10;

    y += 8;

    doc.setFillColor(16,185,129);
    doc.rect(20, y, 105, 15, "F");

    doc.setTextColor(255,255,255);
    doc.setFontSize(12);

    doc.text(
        `Total Amount : Rs. ${billData.total.toFixed(2)}`,
        72,
        y + 10,
        {align:"center"}
    );

    doc.save(`Electricity-Report-${billData.billNo}.pdf`);
}
```
