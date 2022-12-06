import {readFileSync} from "node:fs";

const packet = readFileSync("data.txt", {encoding: "UTF-8"});

const FindFirstPacketMarker = () => {

    let latestPacket = null, secondPacket = null, thirdPacket = null, fourthPacket = null;

    for (let i = 0; i < packet.length; i++) {
        if (thirdPacket != null) {
            fourthPacket = thirdPacket;
        }

        if (secondPacket != null) {
            thirdPacket = secondPacket;
        }

        if (latestPacket != null) {
            secondPacket = latestPacket;
        }

        latestPacket = packet.charAt(i);

        if (latestPacket !== null && secondPacket !== null && thirdPacket !== null && fourthPacket !== null) {
            if (
                latestPacket !== secondPacket && secondPacket !== thirdPacket &&
                thirdPacket !== fourthPacket && fourthPacket !== latestPacket &&
                secondPacket !== fourthPacket && thirdPacket !== latestPacket) {
                console.log(i + 1);
                break;
            }
        }
    }
}

const FindMessageMarker = () => {

    let packetTab;

    packetTab = packet.split("");


}

FindFirstPacketMarker();
// FindMessageMarker();