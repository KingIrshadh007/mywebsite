function createUUID(){

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function(c){

        const r =
        crypto.getRandomValues(
            new Uint8Array(1)
        )[0] % 16;

        const v =
        c === "x"
        ? r
        : (r & 0x3 | 0x8);

        return v.toString(16);

    });
}

function generateUUIDs(){

    const count =
    parseInt(
        document.getElementById("uuidCount").value
    );

    let output = "";

    for(let i = 0; i < count; i++){

        output += createUUID() + "\n";
    }

    document.getElementById("uuidResult").value =
    output.trim();
}

function copyUUIDs(){

    const result =
    document.getElementById("uuidResult");

    navigator.clipboard.writeText(
        result.value
    );
}
