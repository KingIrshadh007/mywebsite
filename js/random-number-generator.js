function generateRandomNumbers(){

    const min =
    parseInt(
        document.getElementById("minNumber").value
    );

    const max =
    parseInt(
        document.getElementById("maxNumber").value
    );

    const count =
    parseInt(
        document.getElementById("numberCount").value
    );

    if(
        isNaN(min) ||
        isNaN(max) ||
        isNaN(count)
    ){

        document.getElementById("randomResult").value =
        "Please enter valid values";

        return;
    }

    if(min > max){

        document.getElementById("randomResult").value =
        "Minimum value cannot be greater than maximum value";

        return;
    }

    let numbers = [];

    for(let i = 0; i < count; i++){

        const random =
        Math.floor(
            Math.random() *
            (max - min + 1)
        ) + min;

        numbers.push(random);
    }

    document.getElementById("randomResult").value =
    numbers.join(", ");
}

function copyRandomNumbers(){

    const result =
    document.getElementById("randomResult");

    navigator.clipboard.writeText(
        result.value
    );
}
