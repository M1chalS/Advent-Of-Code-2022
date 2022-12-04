import {readFileSync} from "node:fs";

const sections = readFileSync("data.txt", {encoding: "UTF-8"})
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

const FindFullyContaining = () => {

    let firstElfSection;
    let secondElfSection;
    let count = 0;

    sections.map(section => {
        section.split("\n").forEach((elfsSection) => {
            elfsSection.split(",").forEach((elfsSec, index) => {
                elfsSec = elfsSec.split("-");
                if (index === 0) {
                    firstElfSection = elfsSec;
                } else {
                    secondElfSection = elfsSec;

                    if (parseInt(firstElfSection[0]) <= parseInt(secondElfSection[0]) && parseInt(firstElfSection[1]) >= parseInt(secondElfSection[1])) {
                        count++;
                    } else if (parseInt(firstElfSection[0]) >= parseInt(secondElfSection[0]) && parseInt(firstElfSection[1]) <= parseInt(secondElfSection[1])) {
                        count++;
                    }

                }
            });
        });
    });

    console.log(count);

}

const FindAllOverlapping = () => {
    let firstElfSection;
    let secondElfSection;
    let count = 0;

    sections.map(section => {
        section.split("\n").forEach((elfsSection) => {
            let firstElfList = [];
            let secondElfList = [];
            let overlap = false;
            elfsSection.split(",").forEach((elfsSec, index) => {
                elfsSec = elfsSec.split("-");
                if (index === 0) {
                    firstElfSection = elfsSec;

                    for(let i = parseInt(firstElfSection[0]); i <= parseInt(firstElfSection[1]); i++ ) {
                      firstElfList.push(i);
                    }

                } else {
                    secondElfSection = elfsSec;

                    for(let i = parseInt(secondElfSection[0]); i <= parseInt(secondElfSection[1]); i++ ) {
                        secondElfList.push(i);
                    }

                    firstElfList.forEach(list1 => {
                        secondElfList.forEach(list2 => {
                            while (overlap !== true)
                            {
                                if(list1===list2) {
                                    count++;
                                    overlap = true;
                                }
                                else
                                    break;
                            }
                        });
                    });

                }
            });
        });
    });

    console.log(count);
}


FindFullyContaining();
FindAllOverlapping();