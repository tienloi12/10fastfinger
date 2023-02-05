
let word_array = [ "the","quick","fox","jumped","over"
            ,"to","be","for","not","to"
            ,"that","is","the","form","imitation"
            ,"color","gold","pen","code","laptop"
            ,"phone","notebook","class","girl","boy"
            ,"one","two","tree","three","four"
            ,"five","six","seven","eight","nine"
            ,"ten","hit"]
let count = 0;
let inputText = document.getElementById("input-box");
let score = document.getElementById("curr-score");
let timer = document.getElementById("curr-time");
let inputWord = document.getElementById("word");
let result = document.getElementById("result");

function randomWord() {
    let index = Math.floor(Math.random()*arrayWord.length)
    return index
     }
    