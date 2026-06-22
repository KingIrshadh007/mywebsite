```javascript
function calculateElectricityBill() {

const state = document.getElementById("state").value;

const totalUnits =
Number(document.getElementById("units").value);

const freeUnits =
Number(document.getElementById("freeUnits").value);

const rate =
Number(document.getElementById("rate").value);

const fixedCharge =
Number(document.getElementById("fixedCharge").value);

if(totalUnits <= 0 || rate <= 0){

document.getElementById("billResult").innerHTML =
"<h3>Please enter valid values.</h3>";

return;

}

const chargeableUnits =
Math.max(totalUnits - freeUnits,0);

const energyCharge =
chargeableUnits * rate;

const totalAmount =
energyCharge + fixedCharge;

document.getElementById("billResult").innerHTML = `

<h3>⚡ Bill Details</h3>

<p><b>State :</b> ${state}</p>

<p><b>Total Units :</b> ${totalUnits}</p>

<p><b>Free Units :</b> ${freeUnits}</p>

<p><b>Chargeable Units :</b> ${chargeableUnits}</p>

<p><b>Rate Per Unit :</b> ₹${rate.toFixed(2)}</p>

<p><b>Energy Charge :</b> ₹${energyCharge.toFixed(2)}</p>

<p><b>Fixed Charge :</b> ₹${fixedCharge.toFixed(2)}</p>

<hr>

<h2>Total Amount : ₹${totalAmount.toFixed(2)}</h2>

`;

}



function clearBill(){

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



function downloadBillPDF(){

calculateElectricityBill();

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

const state =
document.getElementById("state").value;

const units =
document.getElementById("units").value;

const freeUnits =
document.getElementById("freeUnits").value;

const rate =
document.getElementById("rate").value;

const fixedCharge =
document.getElementById("fixedCharge").value;

const chargeableUnits =
Math.max(units - freeUnits,0);

const energyCharge =
chargeableUnits * rate;

const totalAmount =
energyCharge + Number(fixedCharge);

doc.setFontSize(18);

doc.text("Electricity Bill Estimate",20,20);

doc.setFontSize(12);

doc.text("State : " + state,20,40);

doc.text("Units Consumed : " + units,20,55);

doc.text("Free Units : " + freeUnits,20,70);

doc.text("Chargeable Units : " + chargeableUnits,20,85);

doc.text("Rate Per Unit : ₹" + rate,20,100);

doc.text("Energy Charge : ₹" + energyCharge.toFixed(2),20,115);

doc.text("Fixed Charge : ₹" + fixedCharge,20,130);

doc.setFontSize(16);

doc.text(
"Total Amount : ₹" + totalAmount.toFixed(2),
20,
155
);

doc.save("electricity-bill.pdf");

}
```
