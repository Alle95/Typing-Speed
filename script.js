let words = ["car", "ball","against","there","story","could","something",
"wind","door","star","side","think","vocabulary","score","confused","illusion",
"smartest","world","dictionary","looking","faster","learning",
"research","teacher","moment","education","student","country","mother","money",
"story","fact","month","book","business","issue","side",
"kind","head","house","service","friend","father","power","member",
"law","community","body","information","level","office","health",
"reason","air","girl","boy","kid","women","men","end"];
let setTimer;

function shuffle() {
    let currentIndex = words.length,  randomIndex;
    while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [words[currentIndex], words[randomIndex]] = [
        words[randomIndex], words[currentIndex]];
  }
}

function createText() {
    document.getElementById("startButton").onclick = null;
    shuffle();
    let letterId = 0;
    for (let i = 0; i < words.length; ++i) {
        let word = words[i];
        for (let j = 0; j < word.length; ++j) {
            let letter1 = word[j];
            let letter = document.createElement('span');
            ++letterId;
            letter.id = letterId;
            letter.innerHTML = letter1;
            document.getElementById('text').append(letter);
        }
        let letter = document.createElement('span');
        ++letterId;
        letter.id = letterId;
        letter.innerHTML = ' ';
        document.getElementById('text').append(letter);
    }
    setTimer = setInterval(changeTime, 1000);
    document.addEventListener("keyup", apearLetter);
    
}

let letterId = 1;
let totalCorrectWords = 0;
let correctLetter = true;

function apearLetter(event) {
    if (event.key == document.getElementById(letterId).textContent) {
        document.getElementById(letterId).style="color:greenyellow";
    } else {
        document.getElementById(letterId).style="color:red";
        correctLetter = false;
    }
    if(document.getElementById(letterId).textContent == ' ') {
        if(correctLetter == true) {
            ++totalCorrectWords;
        }
        correctLetter = true;
    }
    ++letterId;
}

let time = 60;

function changeTime() {
    --time;
    timer.innerHTML = time;
    if (time == 50) {
        document.removeEventListener("keyup", apearLetter);
        clearInterval(setTimer);
        score.innerHTML = 'You wrote ' +totalCorrectWords + ' correct words!';
        document.getElementById("reload").style.display = "block";
    }
}
