function minifyJS(){

    const js =
    document.getElementById("jsInput").value;

    if(!js){

        document.getElementById("jsResult").value =
        "Please enter JavaScript code";

        return;
    }

    const minified =
    js

    // Remove single-line comments
    .replace(/\/\/.*$/gm, "")

    // Remove multi-line comments
    .replace(/\/\*[\s\S]*?\*\//g, "")

    // Remove line breaks
    .replace(/\n/g, " ")

    // Remove extra spaces
    .replace(/\s+/g, " ")

    .trim();

    document.getElementById("jsResult").value =
    minified;
}
