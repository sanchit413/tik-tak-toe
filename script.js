let box = document.querySelectorAll(".box");
let restart = document.getElementById("restart");
let msgcontainer = document.querySelector(".msg-container");
let newgamebtn = document.getElementById("new-button");
let newmsg = document.getElementById("new-msg");
let turO = true;

const winpatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const restartgame = ()=>{
    turO = true;
    enablebox();
    msgcontainer.classList.add("hide");
};

box.forEach((b)=>{
    b.addEventListener("click", ()=>{
        if(turO){
            b.innerText = "O";
            turO = false;
        } else {
            b.innerText = "X";
            turO = true;
        }
        b.disabled = true;
        checkwinner();  
    });
});

const disablebox = ()=>{
    for(let b of box){
        b.disabled = true;
    }
};

const enablebox = ()=>{
    for(let b of box){
        b.disabled = false;
        b.innerText = "";
    }
};

const showwinner =(winner)=>{
    msgcontainer.classList.remove("hide");
    newmsg.innerText = `The winner is ${winner}`;
    disablebox();
};

const checkwinner = ()=>{
    for(let pattern of winpatterns){
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;

        if(pos1val !== "" && pos1val === pos2val && pos2val === pos3val){
            console.log("winner", pos1val);
            showwinner(pos1val);
        }
    }
};

newgamebtn.addEventListener("click", restartgame);
restart.addEventListener("click", restartgame);
