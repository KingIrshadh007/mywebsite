function generateBarcode(){

    const value =
    document.getElementById("barcodeInput")
    .value
    .trim();

    if(!value){

        alert("Please enter a value");
        return;
    }

    JsBarcode(
        "#barcode",
        value,
        {
            format: "CODE128",
            width: 2,
            height: 100,
            displayValue: true
        }
    );
}

function downloadBarcode(){

    const svg =
    document.getElementById("barcode");

    if(!svg.innerHTML){

        alert("Generate barcode first");
        return;
    }

    const serializer =
    new XMLSerializer();

    const source =
    serializer.serializeToString(svg);

    const blob =
    new Blob(
        [source],
        {type:"image/svg+xml"}
    );

    const url =
    URL.createObjectURL(blob);

    const link =
    document.createElement("a");

    link.href = url;
    link.download = "barcode.svg";

    link.click();

    URL.revokeObjectURL(url);
}
