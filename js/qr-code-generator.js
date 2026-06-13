let qrInstance = null;

function generateQR(){

    const text =
    document.getElementById("qrInput").value.trim();

    const qrContainer =
    document.getElementById("qrCode");

    qrContainer.innerHTML = "";

    if(!text){

        qrContainer.innerHTML =
        "Please enter text or URL";

        return;
    }

    qrInstance =
    new QRCode(qrContainer,{
        text:text,
        width:250,
        height:250
    });
}

function downloadQR(){

    const image =
    document.querySelector("#qrCode img");

    if(!image){

        alert("Generate QR first");
        return;
    }

    const link =
    document.createElement("a");

    link.href =
    image.src;

    link.download =
    "qrcode.png";

    link.click();
}
