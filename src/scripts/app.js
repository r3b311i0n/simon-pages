import "babel-polyfill";
require("../styles/css/styles.css");

let isStrict = false;
let roundNo = 0;
let arr = [];

function main() {
    $(".ctrlBtn").removeClass("fadeIn");
    $(".round").removeClass("fadeIn");
}

window.strictBtn = function () {
    isStrict = !isStrict;
    $(".strictBtn").toggleClass("pulse infinite");
    console.log("is strict: " + isStrict);
};

window.red = function () {
    let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
    sound.play();
};

window.blue = function () {
    let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
    sound.play();
};

window.green = function () {
    let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
    sound.play();
};

window.yellow = function () {
    let sound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
    sound.play();
};

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

window.simon = function () {
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
};

$(document).ready(main());