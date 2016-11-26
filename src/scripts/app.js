require("../styles/css/styles.css");

const sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

let isStrict = false;
let roundNo = 0;
let arr = [];
let counter = 0;
let won = false;

function main() {
    $(".ctrlBtn").removeClass("fadeIn");
    $(".round").removeClass("fadeIn");
}

window.strictBtn = function () {
    isStrict = !isStrict;
    $(".strictBtn").toggleClass("pulse infinite strict");
    console.log("is strict: " + isStrict);
};

function red() {
    sound1.play();
    return new Promise(function (resolve, reject) {
        sound1.onended = resolve;
        sound1.onerror = reject;
    });
}

function blue() {
    sound2.play();
    return new Promise(function (resolve, reject) {
        sound2.onended = resolve;
        sound2.onerror = reject;
    });
}

function green() {
    sound3.play();
    return new Promise(function (resolve, reject) {
        sound3.onended = resolve;
        sound3.onerror = reject;
    });
}

function yellow() {
    sound4.play();
    return new Promise(function (resolve, reject) {
        sound4.onended = resolve;
        sound4.onerror = reject;
    });
}

window.boxClick = async function (box) {
    if (won) {
        return;
    }
    switch (box) {
        case "red":
            await red();
            if (arr[counter] === "red") {
                counter++;
                if (counter >= arr.length) {
                    simon();
                }
            }
            else {
                if (isStrict === true) {
                    start();
                }
                await mistake();
                counter = 0;
                memory();
            }
            break;
        case "blue":
            await blue();
            if (arr[counter] === "blue") {
                counter++;
                if (counter >= arr.length) {
                    simon();
                }
            }
            else {
                if (isStrict === true) {
                    start();
                }
                await mistake();
                counter = 0;
                memory();
            }
            break;
        case "green":
            await green();
            if (arr[counter] === "green") {
                counter++;
                if (counter >= arr.length) {
                    simon();
                }
            }
            else {
                if (isStrict === true) {
                    start();
                }
                await mistake();
                counter = 0;
                memory();
            }
            break;
        case "yellow":
            await yellow();
            if (arr[counter] === "yellow") {
                counter++;
                if (counter >= arr.length) {
                    simon();
                }
            }
            else {
                if (isStrict === true) {
                    start();
                }
                await mistake();
                counter = 0;
                memory();
            }
            break;
    }
};

function winner() {
    if (roundNo > 20) {
        $(".round").html("YOU WIN!!!").addClass("flash");
        won = true;
        return true;
    }
    return false;
}

function mistake() {
    return new Promise(function (resolve) {
        $(".round").html("!!").addClass("flash");
        window.setTimeout(function () {
            $(".round").removeClass("flash").html(roundNo);
            resolve();
        }, 800);
    });
}

async function memory() {
    for (let i = 0; i < arr.length; ++i) {
        switch (arr[i]) {
            case "red":
                $(".redRect").addClass("redGlow");
                await
                    red();
                $(".redRect").removeClass("redGlow");
                break;
            case "blue":
                $(".blueRect").addClass("blueGlow");
                await
                    blue();
                $(".blueRect").removeClass("blueGlow");
                break;
            case "green":
                $(".greenRect").addClass("greenGlow");
                await
                    green();
                $(".greenRect").removeClass("greenGlow");
                break;
            case "yellow":
                $(".yellowRect").addClass("yellowGlow");
                await
                    yellow();
                $(".yellowRect").removeClass("yellowGlow");
                break;
        }
    }
}

function simon() {
    counter = 0;
    roundNo++;
    if (!winner()) {
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
        $(".round").html(roundNo);
        memory();
    }
}

window.start = function () {
    won = false;
    arr = [];
    roundNo = 0;
    $(".round").html("00").removeClass("flash");
    simon();
    $(".start").html("Restart");
};

$(document).ready(main());