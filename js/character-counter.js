function countCharacters(){

    const text =
    document.getElementById("characterCounterText")
    .value;

    const characters =
    text.length;

    const charactersNoSpaces =
    text.replace(/\s/g, "").length;

    const words =
    text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

    const lines =
    text === ""
    ? 0
    : text.split("\n").length;

    document.getElementById("characterCounterResult")
    .innerHTML =
    `
    <b>Characters:</b> ${characters}<br>
    <b>Characters (No Spaces):</b> ${charactersNoSpaces}<br>
    <b>Words:</b> ${words}<br>
    <b>Lines:</b> ${lines}
    `;
}
