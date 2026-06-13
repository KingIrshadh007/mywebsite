function convertTemperature(){

    const value =
    parseFloat(
        document.getElementById("temperatureValue").value
    );

    const from =
    document.getElementById("fromTemp").value;

    const to =
    document.getElementById("toTemp").value;

    if(isNaN(value)){

        document.getElementById("temperatureResult").innerHTML =
        "Please enter a valid temperature";

        return;
    }

    let result;

    if(from === to){

        result = value;
    }

    else if(from === "C" && to === "F"){

        result = (value * 9/5) + 32;
    }

    else if(from === "F" && to === "C"){

        result = (value - 32) * 5/9;
    }

    else if(from === "C" && to === "K"){

        result = value + 273.15;
    }

    else if(from === "K" && to === "C"){

        result = value - 273.15;
    }

    else if(from === "F" && to === "K"){

        result = (value - 32) * 5/9 + 273.15;
    }

    else if(from === "K" && to === "F"){

        result = (value - 273.15) * 9/5 + 32;
    }

    document.getElementById("temperatureResult").innerHTML =
    `
    <b>${value}° ${from}</b>
    =
    <b>${result.toFixed(2)}° ${to}</b>
    `;
}
