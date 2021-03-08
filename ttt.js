const GameBoard = () => {
    let yourTurn = "playerone";
    let boardArray = ["sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8", "sq9"];
    const square = document.querySelectorAll(".square");
    const replayBtn = document.getElementById("replayBtn");

    const whoWins = (arr) => {
        let winner = "";
        if(arr[0] === 1) {
            winner = "X";
        } else if(arr[0] === 2) {
            winner = "O";
        }
        const winPara = document.createElement("h1");
        winPara.textContent = winner + " is the winner!";
        const replay = document.createElement("button");
        replay.textContent = "play again";
        replay.id = "replayBtn";
        replay.addEventListener("click", function() {
            location.reload();
        });
        endGame.appendChild(winPara);
        buttonRow.appendChild(replay);
    }

    const winDiag = () => {
        let one = [boardArray[0], boardArray[4], boardArray[8]],
            two = [boardArray[2], boardArray[4], boardArray[6]];
        if(one[0] === one[1] && one[0] === one[2]) {
            whoWins(one);
        } else if(two[0] === two[1] && two[0] === two[2]) {
            whoWins(two);
        }
    }

    const winCol = () => {
        let one = [boardArray[0], boardArray[3], boardArray[6]],
            two = [boardArray[1], boardArray[4], boardArray[7]],
            thr = [boardArray[2], boardArray[5], boardArray[8]];
        if(one[0] === one[1] && one[0] === one[2]) {
            whoWins(one);
        } else if(two[0] === two[1] && two[0] === two[2]) {
            whoWins(two);
        } else if(thr[0] === thr[1] && thr[0] === thr[2]) {
            whoWins(thr);
        } else {
            winDiag();
        }
    }

    const winRow = () => {
        let one = [boardArray[0], boardArray[1], boardArray[2]],
            two = [boardArray[3], boardArray[4], boardArray[5]],
            thr = [boardArray[6], boardArray[7], boardArray[8]];
        if(one[0] === one[1] && one[0] === one[2]) {
            whoWins(one);
        } else if(two[0] === two[1] && two[0] === two[2]) {
            whoWins(two);
        } else if(thr[0] === thr[1] && thr[0] === thr[2]) {
            whoWins(thr);
        } else {
            winCol();
        }
    }

    return() => {
        square.forEach((marker) => {
            let xmark = "X";
            let omark = "O"; 
            marker.addEventListener("click", function() {
                if(this.innerHTML == "" && yourTurn == "playerone") {
                    this.innerHTML = xmark;
                    const index = boardArray.indexOf(this.id);
                    boardArray[index] = 1;
                    yourTurn = "playertwo";
                } else if(this.innerHTML == "" && yourTurn == "playertwo") {
                    this.innerHTML = omark;
                    const index = boardArray.indexOf(this.id);
                    boardArray[index] = 2;
                    yourTurn = "playerone";
                }
                winRow();
            });
        });
    }
};

const play = GameBoard();
play();
