import {readFileSync} from "node:fs";

const data = readFileSync("data.txt", {encoding: "UTF-8"})
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

function findMost() {

    let elves = data.map(elf =>
        elf.split("\n")
    );

    let elfTab = [];

    elves.forEach((elf, index) => {
        elfTab[index] = 0;
        elf.forEach(x => {
            elfTab[index] += x * 1;
        });
    });

    let max = 0;

    elfTab.forEach((elf) => {
        if (max < elf) {
            max = elf;
        }
    });

    console.log(max);

}

function findTopThree() {

    let elves = data.map(elf =>
        elf.split("\n")
    );

    let elfTab = [];

    elves.forEach((elf, index) => {
        elfTab[index] = 0;
        elf.forEach(x => {
            elfTab[index] += x * 1;
        });
    });

    elfTab.sort((a, b) => {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    })

    let topThree = elfTab.splice(0, 3);
    let totalCalories = 0;

    topThree.forEach((elf) => {
        totalCalories += elf;
    });

    console.log(totalCalories);

}

findMost();

findTopThree();