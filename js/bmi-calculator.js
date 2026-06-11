function calculateBMI(){

    const weight =
    parseFloat(document.getElementById("bmiWeight").value);

    const height =
    parseFloat(document.getElementById("bmiHeight").value);

    if(!weight || !height){

        document.getElementById("bmiResult").innerHTML =
        "Please enter weight and height";

        return;
    }

    const bmi =
    weight / ((height / 100) * (height / 100));

    let category = "";

    if(bmi < 18.5){

        category = "Underweight";

    }else if(bmi < 25){

        category = "Normal Weight";

    }else if(bmi < 30){

        category = "Overweight";

    }else{

        category = "Obese";
    }

    document.getElementById("bmiResult").innerHTML =
    `BMI: <b>${bmi.toFixed(2)}</b><br>Category: <b>${category}</b>`;
}
