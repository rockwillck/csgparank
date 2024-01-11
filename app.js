function gpaToRank(gpa) {
    return Math.round(445500000 * 0.02472**gpa)
}

function rankToGpa(rank) {
    /*
    y = 445500000 * 0.02472**x
    x = log0.02472(y/445500000)
    */

    return Math.log(rank/445500000)/Math.log(0.02472)
}

function updateRank(gpa) {
    if (!isNaN(parseFloat(gpa))) {
        document.getElementById("rank").value = gpaToRank(parseFloat(gpa))
    }
}

function updateGPA(rank) {
    if (!isNaN(parseInt(rank))) {
        document.getElementById("GPA").value = Math.round(rankToGpa(parseInt(rank))*1000)/1000
    }
}

// console.log(gpaToRank(4.784))
for (i = 0; i < 1000; i++ ){
    if (i != gpaToRank(rankToGpa(i))) {
        console.log(i, gpaToRank(rankToGpa(i)))
    }
}