import {readFileSync} from "node:fs";

const data = readFileSync("data.txt", {encoding: "UTF-8"})
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

//Part One
function calculateScorePart1() {

    let strategies = data.map(x =>
        x.split("\n")
    );

    let strategiesTab = [];

    strategies.forEach((x) => {
        x.forEach((y, index) => {
            strategiesTab[index] = y.split(' ');
        });
    });

    let previousIndex = -1;
    let previousValue = "";
    let total = 0;

    strategiesTab.forEach((x, index) => {
        x.forEach((y) => {
            if(index === previousIndex) {
                total += CheckResult(previousValue, y);
            }
            else {
                previousIndex = index;
                previousValue = y;
            }
        });
    });

    console.log(total);

}

// A, X - rock  B, Y - paper  C,Z - scissors
function CheckResult(elfInput, userInput) {

    let elfScore = 0;
    let userScore = 0;

    switch (elfInput) {
        case "A": elfScore = 1; break;
        case "B": elfScore = 2; break;
        case "C": elfScore = 3; break;
    }

    switch (userInput) {
        case "X": userScore = 1; break;
        case "Y": userScore = 2; break;
        case "Z": userScore = 3; break;
    }

    return PossibleCombinations(elfScore, userScore);

}

//Part Two
function calculateScorePart2() {
    let strategies = data.map(x =>
        x.split("\n")
    );

    let strategiesTab = [];

    strategies.forEach((x) => {
        x.forEach((y, index) => {
            strategiesTab[index] = y.split(' ');
        });
    });

    let previousIndex = -1;
    let previousValue = "";
    let total = 0;

    strategiesTab.forEach((x, index) => {
        x.forEach((y) => {
            if(index === previousIndex) {
                total += ChooseCorrectInput(previousValue, y);
            }
            else {
                previousIndex = index;
                previousValue = y;
            }
        });
    });

    console.log(total);

}

// A rock B paper C scissors
// Y draw X lose Z win
function ChooseCorrectInput(elfInput, userInput) {

    let elfScore = 0;
    let userScore = 0;

    switch (elfInput) {
        case "A": elfScore = 1; break;
        case "B": elfScore = 2; break;
        case "C": elfScore = 3; break;
    }

    switch (userInput) {
        case "Y": userScore = elfScore;   break;
        case "X": switch (elfScore) {
            case 1: userScore = 3; break;
            case 2: userScore = 1; break;
            case 3: userScore = 2; break;
        }
            break;
        case "Z": switch (elfScore) {
            case 1: userScore = 2; break;
            case 2: userScore = 3; break;
            case 3: userScore = 1; break;
        }
            break;
    }

    return PossibleCombinations(elfScore, userScore);

}

function PossibleCombinations(elfScore, userScore) {
    if(elfScore === userScore) {
        return 3 + userScore;
    }
    else if(elfScore === 1 && userScore === 2) {
        return 6 + userScore;
    }
    else if(elfScore === 2 && userScore === 1) {
        return userScore;
    }
    else if(elfScore === 2 && userScore === 3) {
        return 6 + userScore;
    }
    else if(elfScore === 3 && userScore === 2) {
        return userScore;
    }
    else if(elfScore === 3 && userScore === 1) {
        return 6 + userScore;
    }
    else if(elfScore === 1 && userScore === 3) {
        return userScore;
    }
}

calculateScorePart1();

calculateScorePart2();