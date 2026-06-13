function toUpperCaseText(){

    const text =
    document.getElementById("caseInput").value;

    document.getElementById("caseResult").value =
    text.toUpperCase();
}

function toLowerCaseText(){

    const text =
    document.getElementById("caseInput").value;

    document.getElementById("caseResult").value =
    text.toLowerCase();
}

function toTitleCaseText(){

    const text =
    document.getElementById("caseInput").value;

    const titleCase =
    text.toLowerCase()
    .split(" ")
    .map(word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

    document.getElementById("caseResult").value =
    titleCase;
}

function toSentenceCaseText(){

    const text =
    document.getElementById("caseInput").value;

    const sentence =
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase();

    document.getElementById("caseResult").value =
    sentence;
}

function copyCaseResult(){

    navigator.clipboard.writeText(
        document.getElementById("caseResult").value
    );
}
