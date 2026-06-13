function encodeBase64(){

    const input =
    document.getElementById("base64Input").value;

    if(!input){

        document.getElementById("base64Result").value =
        "Please enter text";

        return;
    }

    document.getElementById("base64Result").value =
    btoa(input);
}

function decodeBase64(){

    const input =
    document.getElementById("base64Input").value;

    try{

        document.getElementById("base64Result").value =
        atob(input);

    }catch(error){

        document.getElementById("base64Result").value =
        "Invalid Base64 string";
    }
}

function copyBase64Result(){

    const result =
    document.getElementById("base64Result");

    result.select();

    document.execCommand("copy");
}

function clearBase64(){

    document.getElementById("base64Input").value = "";
    document.getElementById("base64Result").value = "";
}
