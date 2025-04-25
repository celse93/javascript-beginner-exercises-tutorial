// Your code here:

let song = "";
let song2 = "";

function subtraction (a, b) {
    return a-b;
};


function sing () {
    for(let i = 99; i > 2; i--) {
        song = i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " 
        + subtraction(i, 1) + " bottles of milk on the wall. ";
    
        console.log(song);
    }

    for(let i = 2; i > 1; i--) {
        song2 = i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " 
        + subtraction(i, 1) + " bottle of milk on the wall. ";
        
        console.log(song2);
    }

    let finalLyric = "1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, " +
    "no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. " +
    "Go to the store and buy some more, 99 bottles of milk on the wall."

        console.log(finalLyric);
};


//Your code above ^^^

console.log(sing());