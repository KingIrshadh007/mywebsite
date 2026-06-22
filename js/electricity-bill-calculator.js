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

function downloadBillPDF(){

if(!billData){
alert("Please calculate the bill first.");
return;
}

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.setDrawColor(0,102,255);
doc.setLineWidth(1.5);

doc.roundedRect(10,10,190,125,5,5);

doc.setFillColor(30,144,255);
doc.roundedRect(10,10,190,20,5,5,"F");

doc.setTextColor(255,255,255);
doc.setFontSize(18);
doc.text("Electricity Usage Report",55,23);

doc.setTextColor(0,0,0);
doc.setFontSize(12);

let y=45;

doc.text("State :",20,y);
doc.text(billData.state,100,y);

y+=12;
doc.text("Units Consumed :",20,y);
doc.text(String(billData.units),100,y);

y+=12;
doc.text("Free Units :",20,y);
doc.text(String(billData.freeUnits),100,y);

y+=12;
doc.text("Chargeable Units :",20,y);
doc.text(String(billData.chargeableUnits),100,y);

y+=12;
doc.text("Rate Per Unit :",20,y);
doc.text("₹"+billData.rate,100,y);

y+=12;
doc.text("Fixed Charge :",20,y);
doc.text("₹"+billData.fixedCharge,100,y);

doc.setFillColor(34,197,94);

doc.roundedRect(35,105,140,18,4,4,"F");

doc.setTextColor(255,255,255);
doc.setFontSize(15);

doc.text(
"TOTAL : ₹"+billData.totalAmount.toFixed(2),
65,
117
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

<div class="bill-row">
<b>State :</b> ${state}
</div>

<div class="bill-row">
<b>Total Units :</b> ${units}
</div>

<div class="bill-row">
<b>Free Units :</b> ${freeUnits}
</div>

<div class="bill-row">
<b>Chargeable Units :</b> ${chargeableUnits}
</div>

<div class="bill-row">
<b>Rate Per Unit :</b> ₹${rate}
</div>

<div class="bill-row">
<b>Fixed Charge :</b> ₹${fixedCharge}
</div>

<div class="bill-total">
Total Amount : ₹${totalAmount.toFixed(2)}
</div>

`;

}
