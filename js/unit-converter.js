function convertUnit(){

    const value =
    parseFloat(
        document.getElementById("converterValue").value
    );

    const type =
    document.getElementById("conversionType").value;

    if(isNaN(value)){

        document.getElementById("converterResult").innerHTML =
        "Please enter a valid value";

        return;
    }

    let result = "";

    if(type === "length"){

        const miles =
        value * 0.621371;

        result =
        `
        <b>${value} km</b>
        =
        <b>${miles.toFixed(4)} miles</b>
        `;
    }

    if(type === "weight"){

        const pounds =
        value * 2.20462;

        result =
        `
        <b>${value} kg</b>
        =
        <b>${pounds.toFixed(4)} lbs</b>
        `;
    }

    document.getElementById("converterResult").innerHTML =
    result;
}
