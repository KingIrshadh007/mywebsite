function checkKeywordDensity(){

    const text =
    document.getElementById("keywordText")
    .value
    .toLowerCase()
    .trim();

    const keyword =
    document.getElementById("keywordInput")
    .value
    .toLowerCase()
    .trim();

    if(!text || !keyword){

        document.getElementById("keywordResult")
        .innerHTML =
        "Please enter content and keyword";

        return;
    }

    const words =
    text.split(/\s+/);

    const totalWords =
    words.length;

    let keywordCount = 0;

    words.forEach(word => {

        if(word === keyword){

            keywordCount++;
        }

    });

    const density =
    (keywordCount / totalWords) * 100;

    document.getElementById("keywordResult")
    .innerHTML =
    `
    <b>Total Words:</b> ${totalWords}<br>
    <b>Keyword Count:</b> ${keywordCount}<br>
    <b>Keyword Density:</b> ${density.toFixed(2)}%
    `;
}
