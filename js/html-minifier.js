function minifyHTML(){

    const html =
    document.getElementById("htmlInput").value;

    if(!html){

        document.getElementById("htmlResult").value =
        "Please enter HTML code";

        return;
    }

    const minified =
    html

    // Remove HTML comments
    .replace(/<!--[\s\S]*?-->/g, "")

    // Remove line breaks
    .replace(/\n/g, "")

    // Remove extra spaces
    .replace(/\s{2,}/g, " ")

    // Remove spaces between tags
    .replace(/>\s+</g, "><")

    .trim();

    document.getElementById("htmlResult").value =
    minified;
}
