const GameBoard = () => {
    let count = 0;
    let yourTurn = "playerone";
    let boardArray = ["sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8", "sq9"];
    const square = document.querySelectorAll(".square");
    return() => {
        square.forEach(function(marker) {
            let xmark = "X";
            let omark = "O"; 
            marker.addEventListener("click", function() {
                if(this.innerHTML == "" && yourTurn == "playerone") {
                    this.innerHTML = xmark;
                    const index = boardArray.indexOf(this.id);
                    boardArray[index] = 1;
                    yourTurn = "playertwo";
                    count++;
                } else if(this.innerHTML == "" && yourTurn == "playertwo") {
                    this.innerHTML = omark;
                    const index = boardArray.indexOf(this.id);
                    boardArray[index] = 2;
                    yourTurn = "playerone";
                    count++;
                }
            });
        });
    }
};

const play = GameBoard();
play();
