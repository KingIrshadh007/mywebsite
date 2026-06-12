function generateOG(){

    const title =
    document.getElementById("ogTitle").value.trim();

    const description =
    document.getElementById("ogDescription").value.trim();

    const url =
    document.getElementById("ogUrl").value.trim();

    const image =
    document.getElementById("ogImage").value.trim();

    if(!title || !description || !url){

        document.getElementById("ogResult").value =
        "Please fill required fields";

        return;
    }

    const output =
`<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="og:type" content="website">`;

    document.getElementById("ogResult").value =
    output;
}
