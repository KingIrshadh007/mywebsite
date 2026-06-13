function encodeURL(){

    const input =
    document.getElementById("urlInput").value;

    if(!input){

        document.getElementById("urlResult").value =
        "Please enter text";

        return;
    }

    document.getElementById("urlResult").value =
    encodeURIComponent(input);
}

function decodeURL(){

    const input =
    document.getElementById("urlInput").value;

    try{

        document.getElementById("urlResult").value =
        decodeURIComponent(input);

    }catch(error){

        document.getElementById("urlResult").value =
        "Invalid encoded URL";
    }
}

function copyURLResult(){

    const result =
    document.getElementById("urlResult");

    result.select();

    navigator.clipboard.writeText(result.value);
}

function clearURLTool(){

    document.getElementById("urlInput").value = "";
    document.getElementById("urlResult").value = "";
}
