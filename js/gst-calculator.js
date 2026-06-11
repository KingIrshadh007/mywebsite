function calculateGST(){

    const amount =
    parseFloat(document.getElementById("gstAmount").value);

    const rate =
    parseFloat(document.getElementById("gstRate").value);

    if(!amount || !rate){

        document.getElementById("gstResult").innerHTML =
        "Please enter amount and GST rate";

        return;
    }

    const gst =
    (amount * rate) / 100;

    const total =
    amount + gst;

    document.getElementById("gstResult").innerHTML =
    `
    <b>Original Amount:</b> ₹${amount.toFixed(2)}<br>
    <b>GST Amount:</b> ₹${gst.toFixed(2)}<br>
    <b>Total Amount:</b> ₹${total.toFixed(2)}
    `;
}
