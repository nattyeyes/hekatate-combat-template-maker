let intro = "hello"

function updateText(name, maxhp, hp, maxep, ep) {
    let outputText = ""
    let outputHp = "𝙃𝙋: "
    let outputEp = "𝙀𝙋: "

    let hpDifference = maxhp - hp
    let epDifference = maxep - ep
    
    for (let i = 0; i < hp; i += 10) {
        outputHp += "▰"
    }
    for (let i = 0; i < hpDifference; i += 10) {
        if (hpDifference >= 10) outputHp += "▱"
    }
    outputHp += (" *" + hp + " / " + maxhp + "*")

    for (let i = 0; i < ep; i += 10) {
        outputEp += "▰"
    }
    for (let i = 0; i < epDifference; i += 10) {
        if (epDifference >= 10) outputEp += "▱"
    }
    outputEp += (" *" + ep + " / " + maxep + "*")

    outputText += convertText(name) + "<br>"
    outputText += outputHp + "<br>"
    outputText += outputEp + "<br>"

    document.getElementById("output").innerHTML = outputText
}

function convertText(input) {
    let textLowerCase = input.toLowerCase();
    let output = ""

    for (i = 0; i < input.length; i++) {
        switch(textLowerCase.charAt(i)) {
            case "a":
                output += "𝐀"
                break;
            case "b":
                output += "𝐁"
                break;
            case "c":
                output += "𝐂"
                break;
            case "d":
                output += "𝐃"
                break;
            case "e":
                output += "𝐄"
                break;
            case "f":
                output += "𝐅"
                break;
            case "g":
                output += "𝐆"
                break;
            case "h":
                output += "𝐇"
                break;
            case "i":
                output += "𝐈"
                break;
            case "j":
                output += "𝐉"
                break;
            case "k":
                output += "𝐊"
                break;
            case "l":
                output += "𝐋"
                break;
            case "m":
                output += "𝐌"
                break;
            case "n":
                output += "𝐍"
                break;
            case "o":
                output += "𝐎"
                break;
            case "p":
                output += "𝐏"
                break;
            case "q":
                output += "𝐐"
                break;
            case "r":
                output += "𝐑"
                break;
            case "s":
                output += "𝐒"
                break;
            case "t":
                output += "𝐓"
                break;
            case "u":
                output += "𝐔"
                break;
            case "v":
                output += "𝐕"
                break;
            case "w":
                output += "𝐖"
                break;
            case "x":
                output += "𝐗"
                break;
            case "y":
                output += "𝐘"
                break;
            case "z":
                output += "𝐙"
                break;
            case "1":
                output += "𝟏"
                break;
            case "2":
                output += "𝟐"
                break;
            case "3":
                output += "𝟑"
                break;
            case "4":
                output += "𝟒"
                break;
            case "5":
                output += "𝟓"
                break;
            case "6":
                output += "𝟔"
                break;
            case "7":
                output += "𝟕"
                break;
            case "8":
                output += "𝟖"
                break;
            case "9":
                output += "𝟗"
                break;
            case "0":
                output += "𝟎"
                break;
            case " ":
                output += " "
                break;
            default:
                output += input.charAt(i)
                break;
        }
    }

    return output
}