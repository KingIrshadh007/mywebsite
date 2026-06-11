function calculateAge(){

    const dob =
    document.getElementById("ageDob").value;

    if(!dob){

        document.getElementById("ageResult").innerHTML =
        "Please select DOB";

        return;
    }

    const birth = new Date(dob);
    const today = new Date();

    if(birth > today){

        document.getElementById("ageResult").innerHTML =
        "Date of birth cannot be in the future";

        return;
    }

    let years =
    today.getFullYear() - birth.getFullYear();

    let months =
    today.getMonth() - birth.getMonth();

    let days =
    today.getDate() - birth.getDate();

    if(days < 0){

        months--;

        const previousMonth =
        new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if(months < 0){

        years--;
        months += 12;
    }

    document.getElementById("ageResult").innerHTML =
    `Age: <b>${years}</b> Years <b>${months}</b> Months <b>${days}</b> Days`;
}
