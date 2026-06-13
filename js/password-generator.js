function generatePassword(){

    const length =
    parseInt(
        document.getElementById("passwordLength").value
    );

    const useUpper =
    document.getElementById("uppercase").checked;

    const useLower =
    document.getElementById("lowercase").checked;

    const useNumbers =
    document.getElementById("numbers").checked;

    const useSymbols =
    document.getElementById("symbols").checked;

    let chars = "";

    if(useUpper)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(useLower)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if(useNumbers)
        chars += "0123456789";

    if(useSymbols)
        chars += "!@#$%^&*()_+-=[]{}<>?";

    if(chars === ""){

        document.getElementById("passwordResult").value =
        "Select at least one option";

        return;
    }

    let password = "";

    for(let i = 0; i < length; i++){

        const randomIndex =
        Math.floor(
            Math.random() * chars.length
        );

        password += chars[randomIndex];
    }

    document.getElementById("passwordResult").value =
    password;
}

function copyPassword(){

    const password =
    document.getElementById("passwordResult");

    navigator.clipboard.writeText(
        password.value
    );
}
