const loremText =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function generateLorem(){

    const count =
    parseInt(
        document.getElementById("paragraphCount").value
    );

    let output = "";

    for(let i = 0; i < count; i++){

        output += loremText + "\n\n";
    }

    document.getElementById("loremResult").value =
    output.trim();
}

function copyLorem(){

    navigator.clipboard.writeText(
        document.getElementById("loremResult").value
    );
}
