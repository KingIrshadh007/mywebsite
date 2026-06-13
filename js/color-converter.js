function hexToRgb(){

    let hex =
    document.getElementById("hexInput")
    .value
    .replace("#","");

    if(hex.length !== 6){

        document.getElementById("colorResult")
        .innerHTML =
        "Invalid HEX color";

        return;
    }

    const r =
    parseInt(hex.substring(0,2),16);

    const g =
    parseInt(hex.substring(2,4),16);

    const b =
    parseInt(hex.substring(4,6),16);

    document.getElementById("colorResult")
    .innerHTML =
    `
    RGB(${r}, ${g}, ${b})
    `;
}

function rgbToHex(){

    const r =
    parseInt(document.getElementById("red").value);

    const g =
    parseInt(document.getElementById("green").value);

    const b =
    parseInt(document.getElementById("blue").value);

    if(
        isNaN(r) || isNaN(g) || isNaN(b)
    ){

        document.getElementById("colorResult")
        .innerHTML =
        "Please enter RGB values";

        return;
    }

    const hex =
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase();

    document.getElementById("colorResult")
    .innerHTML =
    `
    ${hex}
    `;
}
