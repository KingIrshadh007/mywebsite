function calculateScientific(){

    const expression =
    document.getElementById("scientificInput").value;

    if(!expression){

        document.getElementById("scientificResult").innerHTML =
        "Please enter an expression";

        return;
    }

    try{

        const result = eval(expression);

        document.getElementById("scientificResult").innerHTML =
        `
        <b>Result:</b>
        ${result}
        `;

    }catch(error){

        document.getElementById("scientificResult").innerHTML =
        "Invalid expression";
    }
}
