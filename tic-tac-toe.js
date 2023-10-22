document.addEventListener('DOMContentLoaded', function() {
    let board = document.getElementById("board");
    let board_div = board.querySelectorAll("div");
    let status = document.getElementById("status");
    const squares = Array.from(board.getElementsByTagName("div"));
    
    let gameOn = true;
    let newGameBtn = document.getElementsByClassName("btn")[0];

    //Set array to store record of game 
    let moves =
    [" "," "," ", //row1
    " "," "," " ,  //row2
    " "," "," "] //row3

    //Set starting player
    let cur_play = "X";

    board_div.forEach((sq) =>{
        sq.classList.add("square");
        sq.addEventListener("click",function(){
           
            if(moves[squares.indexOf(sq)] == " " && gameOn == true ){
              if(cur_play == "X"){
               sq.classList.add('square', 'X');
               moves[squares.indexOf(sq)] = cur_play;
               sq.textContent = cur_play;
               if(checkWin(squares.indexOf(sq))== true){
                status.textContent = "Congratulations! " + cur_play + " is the Winner!"
                status.classList.add("you-won");
                gameOn = false;
               }else{
                cur_play = "O";
                console.log("Now it is " + cur_play +" turn");
               }
              
               
               
             }else if (cur_play == "O"  && gameOn == true){
               sq.classList.add('square', 'O');
               moves[squares.indexOf(sq)] =cur_play
               sq.textContent = cur_play;
               if(checkWin(squares.indexOf(sq))== true){
                status.textContent = "Congratulations! " + cur_play + " is the Winner!"
                status.classList.add("you-won");
                gameOn = false;
               }else{
                cur_play = "X";
                console.log("Now it is " + cur_play +" turn");
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

//Checks each the squares to see if player has won
 let checkWin = function(square){
    let playerMove = moves[square];
    
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

 newGameBtn.addEventListener("click", () => {
    console.log("CLICKED NEW GAME")
    squares.forEach(square => {
        if(square.textContent == "X"){
            square.classList.remove('X');
            square.textContent = " ";

        }else{
            square.classList.remove('O');
            square.textContent = " ";
        }
       
    });
    moves =
    [" "," "," ", //row1
    " "," "," " ,  //row2
    " "," "," "];

    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove("you-won");
    
    cur_play = "X";
    gameOn = true;
    
    

})
 



 


});