let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let showMsg = document.querySelector(".msg");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");


let turn0 = true; //playerx, player2

let count = 0;//to count draw

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box is cliked");
        if(turn0 == true){
            box.innerText="O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        // console.log(count);
        count++;
        
        let isWinner = checkWin();

        if(count==9 && !isWinner){
            gameDraw();
        }
    })
});

const gameDraw = ()=>{
    showMsg.innerText = "Draw"
    msgContainer.classList.remove("hide");
}


const boxDisaled = ()=>{
    for (const box of boxes) {
        
        box.disabled =true;
    }
}
const boxEnable = ()=>{
    for (const box of boxes) {
        
        box.disabled =false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    showMsg.innerText = `Congratulation ${winner}`
    msgContainer.classList.remove("hide");
}

// const addline = (line1,line2,line3)=>{
//     // style.textDecore=    ="lineThrough";
// }

const checkWin =() =>{
    for (let pattern of winPattern)   {
        let pos0Val = boxes[pattern[0]].innerText;
        let pos1Val = boxes[pattern[1]].innerText;
        let pos2Val = boxes[pattern[2]].innerText;

        if (pos0Val != "" && pos1Val != "" && pos2Val != "") {
            if (pos0Val == pos1Val && pos1Val == pos2Val) {
                // console.log("winner");
                boxDisaled();
                showWinner(pos0Val);
                // addline(pos0Val,pos1Val,pos2Val);
            }
        }
    }
}

const resetGame = ()=>{
    turn0 =true;
    boxEnable();
    msgContainer.classList.add("hide");
}  

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
