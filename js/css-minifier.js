function minifyCSS(){

    const css =
    document.getElementById("cssInput").value;

    if(!css){

        document.getElementById("cssResult").value =
        "Please enter CSS code";

        return;
    }

    const minified =
    css

    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, "")

    // Remove line breaks
    .replace(/\n/g, "")

    // Remove extra spaces
    .replace(/\s+/g, " ")

    // Remove spaces around symbols
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*:\s*/g, ":")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*,\s*/g, ",")

    .trim();

    document.getElementById("cssResult").value =
    minified;
}
