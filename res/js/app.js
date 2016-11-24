let isStrict = false;
let roundNo = 0;
let arr = [];

function main() {
    $(".ctrlBtn").removeClass("fadeIn");
    $(".round").removeClass("fadeIn");
}

function strictBtn() {
    isStrict = !isStrict;
    $(".strictBtn").toggleClass("pulse infinite");
}

function red() {
    let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    sound.play();
}

function blue() {
    let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    sound.play();
}

function green() {
    let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    sound.play();
}

function yellow() {
    let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    sound.play();
}

function memory() {
    for (let i = 0; i < arr.length; ++i) {
        switch (arr[i]) {
            case "red":
                red();
                break;
            case "blue":
                blue();
                break;
            case "green":
                green();
                break;
            case "yellow":
                yellow();
                break;
        }
    }
}

function simon() {
    let rand = Math.floor((Math.random() * 4) + 1);
    console.log("Strict = " + isStrict + " Rand = " + rand);
    switch (rand) {
        case 1:
            arr.push("red");
            break;
        case 2:
            arr.push("blue");
            break;
        case 3:
            arr.push("green");
            break;
        case 4:
            arr.push("yellow");
            break;
    }
    roundNo++;
    $(".round").html(roundNo);
    memory();
}

$(document).ready(main());