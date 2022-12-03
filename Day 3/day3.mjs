import {readFileSync} from "node:fs";

const rucksacks = readFileSync("data.txt", {encoding: "UTF-8"})
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

// Part 1
const FindDuplicatesInLine = () => {

    let dupesTab = [];

    rucksacks.forEach((rucksack) => {
        rucksack.split('\n').forEach((itemSet, index) => {
            let firstHalf = itemSet.slice(0, itemSet.length / 2).split("");
            let secondHalf = itemSet.slice(itemSet.length / 2, itemSet.length).split("");

            firstHalf.forEach(item1 => {
                secondHalf.forEach(item2 => {
                    if (item1 === item2) {
                        dupesTab[index] = item1;
                    }
                })
            });
        });
    });


    console.log(CalculatePriority(dupesTab));

}

const FindDuplicatesInThreeLines = () => {


    let i = 0;
    let itemNum;
    let firstItem, secondItem, thirdItem;
    let dupesTab = [];

    rucksacks.forEach((rucksack) => {
        rucksack.split('\n').forEach((itemSet, index) => {
            itemNum = (index + 1) % 3;

            if (itemNum === 0) {
                thirdItem = itemSet.split("");

                firstItem.forEach(item1 => {
                    secondItem.forEach(item2 => {
                        thirdItem.forEach(item3 => {
                            if(item1 === item2 && item1 === item3 && item2 === item3) {
                                dupesTab[i] = item1;
                            }
                        });
                    });
                });

                i++;
            } else if (itemNum === 1) {
                firstItem = itemSet.split("");
            } else {
                secondItem = itemSet.split("");
            }
        });
    });

    console.log(CalculatePriority(dupesTab));

}

const CalculatePriority = (duplicatesTab) => {
    let points = 0;

    duplicatesTab.forEach(item => {
        if (item.charCodeAt(item) <= 90) {
            points += item.charCodeAt(item) - 38;
        } else {
            points += item.charCodeAt(item) - 96;
        }

    });

    return points;
}

FindDuplicatesInLine();
FindDuplicatesInThreeLines();