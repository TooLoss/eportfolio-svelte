export function generateHashedText(text: string, char: string = "@*$#&") {
    return text.split("").map(() => char[Math.floor(Math.random() * char.length)]).join("");
}