// Start coding here
const quadratic = {a:84.6508, b:-902.4983, c:2381.18}
const a = quadratic.a
const b = quadratic.b
const c = quadratic.c

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
    if (parseFloat(gpa) != NaN) {
        document.getElementById("rank").value = gpaToRank(parseFloat(gpa))
    }
}

function updateGPA(rank) {
    if (parseInt(rank) != NaN) {
        document.getElementById("GPA").value = Math.round(rankToGpa(parseInt(rank))*1000)/1000
    }
}

// console.log(gpaToRank(4.784))
for (i = 0; i < 1000; i++ ){
    if (i != gpaToRank(rankToGpa(i))) {
        console.log(i, gpaToRank(rankToGpa(i)))
    }
}