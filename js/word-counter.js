function countWords(){

    const text =
    document.getElementById("wordCounterText")
    .value
    .trim();

    if(!text){

        document.getElementById("wordCounterResult")
        .innerHTML =
        "Please enter text";

        return;
    }

    const words =
    text.split(/\s+/).filter(word => word.length > 0);

    const wordCount =
    words.length;

    const characterCount =
    text.length;

    const characterWithoutSpaces =
    text.replace(/\s/g, "").length;

    const sentenceCount =
    text.split(/[.!?]+/)
    .filter(sentence => sentence.trim().length > 0)
    .length;

    const paragraphCount =
    text.split(/\n+/)
    .filter(paragraph => paragraph.trim().length > 0)
    .length;

    document.getElementById("wordCounterResult")
    .innerHTML =
    `
    <b>Words:</b> ${wordCount}<br>
    <b>Characters:</b> ${characterCount}<br>
    <b>Characters (No Spaces):</b> ${characterWithoutSpaces}<br>
    <b>Sentences:</b> ${sentenceCount}<br>
    <b>Paragraphs:</b> ${paragraphCount}
    `;
}
