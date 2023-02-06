
let word_array = ["the", "quick", "fox", "jumped", "over"
    , "to", "be", "for", "not", "to"
    , "that", "is", "the", "form", "imitation"
    , "color", "gold", "pen", "code", "laptop"
    , "phone", "notebook", "class", "girl", "boy"
    , "one", "two", "tree", "three", "four"
    , "five", "six", "seven", "eight", "nine"
    , "ten", "hit"]
let inputText = document.getElementById("input-box");
let inputWord = document.getElementById("word");
let result = document.getElementById("result");

function randomWord() {
    let index = Math.floor(Math.random() * word_array.length)
    return index;
}
inputWord.innerHTML = word_array[randomWord()];
function checkWord() {
    if (inputText.value == inputWord.innerHTML) {
        result.innerHTML = "Right";
    }
    else {
        result.innerHTML = "Wrong";
    }
    inputText.value = ""
    inputText.focus()

}
inputText.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkWord();
        randomWord();
        inputWord.innerHTML = word_array[randomWord()];
    }
});


