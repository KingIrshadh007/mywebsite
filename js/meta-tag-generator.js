function generateMetaTags(){

    const title =
    document.getElementById("metaTitle").value.trim();

    const description =
    document.getElementById("metaDescription").value.trim();

    const keywords =
    document.getElementById("metaKeywords").value.trim();

    if(!title || !description){

        document.getElementById("metaResult").value =
        "Please enter title and description";

        return;
    }

    const output =
`<title>${title}</title>

<meta name="description" content="${description}">

<meta name="keywords" content="${keywords}">`;

    document.getElementById("metaResult").value =
    output;
}
