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

    document.getElementById("state").selectedIndex = 0;

    document.getElementById("units").value = "";

    document.getElementById("freeUnits").value = 0;

    document.getElementById("rate").value = "";

    document.getElementById("fixedCharge").value = 0;

    document.getElementById("billResult").innerHTML = `
<h3>⚡ Electricity Usage Report</h3>

<p><b>State :</b> -</p>

<p><b>Total Units :</b> -</p>

<p><b>Free Units :</b> -</p>

<p><b>Chargeable Units :</b> -</p>

<p><b>Rate Per Unit :</b> -</p>

<p><b>Fixed Charge :</b> -</p>

<hr>

<h2>Total Amount : ₹0</h2>
`;

}

// ======================================
// DOWNLOAD PDF
// ======================================
function downloadBillPDF() {

    if (!billData) {
        alert("Please calculate the bill first.");
        return;
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a5"
    });

    // Outer Border
    doc.setDrawColor(59,130,246);
    doc.setLineWidth(0.8);
    doc.roundedRect(8,8,132,185,4,4);

    // Header
    doc.setFillColor(59,130,246);
    doc.roundedRect(8,8,132,18,4,4,"F");

    doc.setTextColor(255,255,255);
    doc.setFontSize(14);

    doc.text(
        "Electricity Usage Report",
        74,
        19,
        {align:"center"}
    );

    doc.setTextColor(0,0,0);
    doc.setFontSize(10);

    let y = 35;

    doc.text(`Bill Number : ${billData.billNo}`,15,y);
    y+=10;

    doc.text(`State : ${billData.state}`,15,y);
    y+=10;

    doc.text(`Total Units : ${billData.units}`,15,y);
    y+=10;

    doc.text(`Free Units : ${billData.freeUnits}`,15,y);
    y+=10;

    doc.text(`Chargeable Units : ${billData.chargeableUnits}`,15,y);
    y+=10;

    doc.text(`Rate Per Unit : ₹${billData.rate}`,15,y);
    y+=10;

    doc.text(`Fixed Charge : ₹${billData.fixedCharge}`,15,y);
    y+=10;

    doc.text(`Date : ${billData.date}`,15,y);
    y+=10;

    doc.text(`Time : ${billData.time}`,15,y);

    // Total Amount Box
    y += 18;

    doc.setFillColor(16,185,129);

    doc.roundedRect(
        25,
        y,
        95,
        14,
        3,
        3,
        "F"
    );

    doc.setTextColor(255,255,255);

    doc.setFontSize(12);

    doc.text(
        `Total Amount : ₹${billData.total.toFixed(2)}`,
        72,
        y+9,
        {align:"center"}
    );

    doc.save(
        `Electricity-Report-${billData.billNo}.pdf`
    );

}
