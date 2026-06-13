function formatJSON(){

    const input =
    document.getElementById("jsonInput").value;

    try{

        const parsed =
        JSON.parse(input);

        document.getElementById("jsonResult").value =
        JSON.stringify(parsed, null, 4);

    }catch(error){

        document.getElementById("jsonResult").value =
        "Invalid JSON";
    }
}

function minifyJSON(){

    const input =
    document.getElementById("jsonInput").value;

    try{

        const parsed =
        JSON.parse(input);

        document.getElementById("jsonResult").value =
        JSON.stringify(parsed);

    }catch(error){

        document.getElementById("jsonResult").value =
        "Invalid JSON";
    }
}
