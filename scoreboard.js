let hScore=document.getElementById("hscore")
let gScore=document.getElementById("gscore")

let score=0;


function oneh(){
    score+=1;
    hScore.textContent = score;
}

function twoh(){
    score+=2;
    hScore.textContent = score;
}

function threeh(){
    score+=3;
    hScore.textContent = score;
}

let scoreg=0

function oneg(){
    scoreg+=1;
    gScore.textContent = scoreg;
}

function twog(){
    scoreg+=2;
    gScore.textContent = scoreg;
}

function threeg(){
    scoreg+=3;
    gScore.textContent = scoreg;
}
