document.addEventListener('DOMContentLoaded', function() {
    let board = document.getElementById("board");
    let board_div = board.querySelectorAll("div");
    const squares = Array.from(board.getElementsByTagName("div"))
    let moves =
    [" "," "," ", //row1
    " "," "," " ,  //row2
    " "," "," "] //row3
    let X_play = document.createTextNode("X"); 
    let O_play = document.createTextNode("O");
    let cur_play = "X";



    board_div.forEach((sq) =>{
        sq.classList.add("square");
        sq.addEventListener("click",function(){
        
            if(moves[squares.indexOf(sq)] == " " ){
              if(cur_play == "X"){
    
               sq.append(X_play);   
               sq.classList.add('square', 'X');
               moves[squares.indexOf(sq)] = cur_play
               sq.innerText = cur_play;
              
               cur_play = "O";
             }else{
              
               sq.append(O_play);
               sq.classList.add('square', 'O');
               moves[squares.indexOf(sq)] =cur_play
               sq.innerText = cur_play;
               cur_play = "X";
              
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



});