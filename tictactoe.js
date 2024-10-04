
let counter = 0;
const cells = document.querySelectorAll(".cell");
const btn = document.querySelector(".reset");
const whoWin = document.querySelector(".whoWin");
const blurr = document.querySelector(".blur");

// add attributes to all cells

for(let i=0; i<cells.length; i++){
    cells[i].addEventListener("click",(fillCell)=>{
    if(counter % 2 == 0 ){
        if(!cells[i].hasAttribute("value")){
        cells[i].innerHTML = "X";
        cells[i].setAttribute("value", "used");
        counter = counter + 1;
        rowCheck();
    }
        

    } else {
        if(!cells[i].hasAttribute("value")){
        cells[i].innerHTML = "O";
        cells[i].setAttribute("value","used");
        counter = counter + 1;
        rowCheck();
    }
        
    }
    });
}



// check 3 in a row


function rowCheck(){
    let status1 = true;
    let status2 = true;
    let status3 = true;
    let win = false;
    let who;

 
        for(let i = 0; i < 3; i++){
            if(cells[i].innerHTML == ""){
                status1 = false;
            }
        }

        for(let i = 3; i < 6; i++){
            if(cells[i].innerHTML == ""){
                status2 = false;
            }
        }

        for(let i = 6; i < 9; i++){
            if(cells[i].innerHTML == ""){
                status3 = false;
            }
        }

        if(status1 == true){
            if(cells[0].innerHTML == cells[1].innerHTML && cells[0].innerHTML == cells[2].innerHTML){
                console.log("brawo");
                win = true;
                who = cells[0].innerHTML;
        }
    }
        if(status2 == true){
            if(cells[3].innerHTML == cells[4].innerHTML && cells[3].innerHTML == cells[5].innerHTML) {
                console.log("brawo");
                win = true;
                who = cells[3].innerHTML;
        }
    }

        if(status3 == true){
         if(cells[6].innerHTML == cells[7].innerHTML && cells[6].innerHTML == cells[8].innerHTML){
            console.log("brawo");
            win = true;
            who = cells[6].innerHTML;
        } 
    }
        if(win == false){
            columnCheck();
        } else {
            youWin(who);
        }
    }


// if rowCheck return false, check if there 3 in a row in columns

function columnCheck(){


    let status1 = true;
    let status2 = true;
    let status3 = true;
    let win = false;
    let who;

        for(let i = 0; i < 7; i+=3){
            if(cells[i].innerHTML == ""){
                status1 = false;
            }
        }

        for(let i = 1; i < 8; i+=3){
            if(cells[i].innerHTML == ""){
                status2 = false;
            }
        }

        for(let i = 2; i < 9; i+=3){
            if(cells[i].innerHTML == ""){
                status3 = false;
            }
        }


        if(status1 == true){
        if(cells[0].innerHTML == cells[3].innerHTML && cells[0].innerHTML == cells[6].innerHTML){
            console.log("brawo");
            win = true;
            who = cells[0].innerHTML;
        }
    }

        if(status2 == true){
            if(cells[1].innerHTML == cells[4].innerHTML && cells[1].innerHTML == cells[7].innerHTML){
                console.log("brawo");
                win = true;
                who = cells[1].innerHTML;
        }
    } 

        if(status3 == true){
            if(cells[2].innerHTML == cells[5].innerHTML && cells[2].innerHTML == cells[8].innerHTML){
                console.log("brawo");
                win = true;
                who = cells[2].innerHTML;
        }
    }
        if(win == false){
            crosswiseCheck();
        } else {
            youWin(who);
        }
        
    
    }   


// if columnCheck return false, try to check if there are 3 in a row crosswise

function crosswiseCheck(){

    let status1 = true;
    let status2 = true;
    let win = false;
    let who;

    for(let i = 0 ; i < 9 ; i += 4){
        if(cells[i].innerHTML == ""){
            status1 = false;
        }
    }

    for(let i = 2; i < 7; i+=2){
        if(cells[i].innerHTML == ""){
            status2 = false;
        }
    }

        if(status1 == true){
            if(cells[0].innerHTML == cells[4].innerHTML && cells[0].innerHTML == cells[8].innerHTML){
                console.log("brawo");
                 win = true;
                 who = cells[0].innerHTML;
        }
    }
        if(status2 == true){
            if(cells[2].innerHTML == cells[4].innerHTML && cells[2].innerHTML == cells[6].innerHTML){
                console.log("brawo");
                win = true;
                who = cells[2].innerHTML;        
            }
    }

        if(win == false){
            drawCheck();
        } else{
            youWin(who);
        }
}


// if counter (number of moves) are higher than 8, and there is no winner, call a draw

function drawCheck(){
    if(counter > 8){
        console.log("remis");
        draw();
    } 
}

// blur background

function draw(){
    whoWin.innerHTML ="It's a draw, try again";
    blurr.setAttribute("id", "blurred");
    whoWin.setAttribute("id", "whoWinStyle");
}

// if someone win, show communicate who (X or O) and blur background

function youWin(who){
    whoWin.innerHTML = who + " has won, congratulations."
    blurr.setAttribute("id", "blurred");
    whoWin.setAttribute("id", "whoWinStyle");
}

// reset the game to play again

btn.addEventListener("click",(reset)=>{
    for(let i=0; i<cells.length; i++){
        cells[i].innerHTML = "";
        cells[i].removeAttribute("value");
    }
    whoWin.innerHTML = "";
    whoWin.removeAttribute("id");
    blurr.removeAttribute("id");
    counter = 0;

})
