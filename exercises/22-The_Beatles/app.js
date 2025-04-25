
const lyrics = "let it be";
let song = "";
let song2 = "";

function sing () {
    
    for(let i = 0; i < 4; i++) {
    lyrics 
    song += lyrics + ", "; 
    }
    let firstPart = song + "there will be an answer,";

    for(let i = 0; i < 5; i++) {
        lyrics 
        song2 += lyrics + ", "; 
        }
    let secondPart = song2 + "whisper words of wisdom, let it be";

    return firstPart + " " + secondPart;
}


//Your code above ^^^

console.log(sing());