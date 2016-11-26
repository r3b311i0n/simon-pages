require("../styles/css/styles.css");

const sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

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

window.red = async function () {
    sound1.play();
    return new Promise(function (resolve, reject) {
        sound1.onended = resolve;
        sound1.onerror = reject;
    });};

window.blue = async function () {
    sound2.play();
    return new Promise(function (resolve, reject) {
        sound2.onended = resolve;
        sound2.onerror = reject;
    });};

window.green = async function () {
    sound3.play();
    return new Promise(function (resolve, reject) {
        sound3.onended = resolve;
        sound3.onerror = reject;
    });};

window.yellow = async function () {
    sound4.play();
    return new Promise(function (resolve, reject) {
        sound4.onended = resolve;
        sound4.onerror = reject;
    });
};

async function memory() {
    for (let i = 0; i < arr.length; ++i) {
        switch (arr[i]) {
            case "red":
                await red();
                break;
            case "blue":
                await blue();
                break;
            case "green":
                await green();
                break;
            case "yellow":
                await yellow();
                break;
        }
    }
}

window.simon = async function () {
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
    await memory();
};

$(document).ready(main());