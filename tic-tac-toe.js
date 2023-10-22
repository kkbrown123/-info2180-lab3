document.addEventListener('DOMContentLoaded', function() {
    let board = document.getElementById("board");
    let board_div = board.querySelectorAll("div");
    let status = document.getElementById("status");
    const squares = Array.from(board.getElementsByTagName("div"));
    let newgame_button = document.getElementsByClassName("btn")[0];
    let moves =
    [" "," "," ", //row1
    " "," "," " ,  //row2
    " "," "," "] //row3

    let cur_play = "X";



    board_div.forEach((sq) =>{
        sq.classList.add("square");
        sq.addEventListener("click",function(){
            // console.log(moves[squares.indexOf(sq)]);
            if(moves[squares.indexOf(sq)] == " " ){
               
              if(cur_play == "X"){
               sq.classList.add('square', 'X');
               moves[squares.indexOf(sq)] = cur_play
               sq.innerText = cur_play;
               if(checkWin(squares.indexOf(sq))== true){
                console.log("X won");
                status.innerText = "Congratulations! " + cur_play + " is the Winner!"
                status.classList.add("you-won")
               }else{
                cur_play = "O";
               }
              
               
               
             }else if (cur_play == "O"){
              
              
               sq.classList.add('square', 'O');
               moves[squares.indexOf(sq)] =cur_play
               sq.innerText = cur_play;
              
               if(checkWin(squares.indexOf(sq))== true){
                console.log("O won");
                status.innerText = "Congratulations! " + cur_play + " is the Winner!"
                status.classList.add("you-won")
               }else{
                cur_play = "X";
               }
              
             }
            }
          
          });

          sq.addEventListener("mouseover",function(){
            sq.classList.add("hover")
           });
           sq.addEventListener("mouseout",function(){
             sq.classList.remove("hover")
            });
        
          
    
      });
 let checkWin = function(square){
    let playerMove = moves[square];
    console.log(playerMove + " " + square);
    if(square == 0){
        if ((moves[1] == playerMove & moves[2] == playerMove) || (moves[3] == playerMove & moves[6] == playerMove) || (moves[4] == playerMove && moves[8] == playerMove))
            {return true}

    }
    else if (square == 1){
        if ((moves[0] == playerMove & moves[2] == playerMove) || (moves[4] == playerMove & moves[7] == playerMove))
            {return true}

    }
    else if (square == 2) {
        if ((moves[0] == playerMove & moves[1] == playerMove) || (moves[5] == playerMove & moves[8] == playerMove) || (moves[4] == playerMove && moves[6] == playerMove))
        {return true}
    }
    else if (square == 3) {
        if ((moves[0] == playerMove & moves[6] == playerMove) || (moves[4] == playerMove & moves[5] == playerMove))
        {return true}
    }
    else if (square == 4) {
        if ((moves[0] == playerMove & moves[8] == playerMove) || (moves[2] == playerMove & moves[6] == playerMove) || (moves[1] == playerMove && moves[7] == playerMove) || (moves[3] == playerMove && moves[5] == playerMove))
        {return true}
    }
    else if (square == 5) {
        if ((moves[2] == playerMove & moves[8] == playerMove) || (moves[3] == playerMove & moves[4] == playerMove))
        {return true}
    }
    else if (square == 6) {
        if ((moves[0] == playerMove & moves[3] == playerMove) || (moves[2] == playerMove & moves[4] == playerMove) || (moves[7] == playerMove && moves[8] == playerMove))
        {return true}
    }
    else if (square == 7) {
        if ((moves[1] == playerMove & moves[4] == playerMove) || (moves[6] == playerMove & moves[8] == playerMove))
        {return true}
    }
    else if (square == 8) {
        if ((moves[0] == playerMove & moves[4] == playerMove) || (moves[2] == playerMove & moves[5] == playerMove) || (moves[6] == playerMove && moves[7] == playerMove))
        {return true}
    }
    return false


 }
 newgame_button.addEventListener("click",function(){
   
    squares.forEach((sq) =>{
       sq.innerText = " "
        
        
    });
    moves =
    [" "," "," ", //row1
    " "," "," " ,  //row2
    " "," "," "]
    status.innerText = "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");
    cur_play = "X";
 });



 


});