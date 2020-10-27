
let arrJohn = [89,120,103];
let arrMike = [129 , 94 ,123];
let arrMarry = [97 , 134 , 105];



function calcltAvrgScore(name1,name2,scoreJohn,scoreMike){
    scoreMike=Math.floor((scoreMike[0]+scoreMike[1]+scoreMike[2]) /3);
    scoreJohn=Math.floor((scoreJohn[0]+scoreJohn[1]+scoreJohn[2])/3);
    if (scoreJohn > scoreMike) {
        console.log(name1+'s team wins with ' + scoreJohn +" to "+ scoreMike +' points');
    } else if (scoreMike > scoreJohn) {
        console.log(name2+'s team wins with ' + scoreMike + " to "+ scoreJohn +' points');
    } else {
        console.log('There is a draw');
    }
}

calcltAvrgScore("Jhon","Mike",arrJohn,arrMike);

// if (scoreJohn > scoreMike) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a draw');
// }



//console.log(scoreJohn, scoreMike, scoreMary);
function letSeeWinners(j,mi,mr,scoreJohn,scoreMarry,scoreMike){
    scoreMary= Math.floor((scoreMarry[0] + scoreMarry[1] + scoreMarry[2]) / 3);
    scoreMike=Math.floor((scoreMike[0]+scoreMike[1]+scoreMike[2] )/3);
    scoreJohn=Math.floor((scoreJohn[0]+scoreJohn[1]+scoreJohn[2])/3);

    if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
        console.log(j+'s team wins with ' + scoreJohn + ' points');
    } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
        console.log(mi+"s team wins with " + scoreMike + ' points');
    } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
        console.log(mr+'s team wins with ' + scoreMary + ' points');
    } else {
        console.log('There is a draw');
    }
}

letSeeWinners("jhon","mike","marry",arrJohn,arrMarry,arrMike);