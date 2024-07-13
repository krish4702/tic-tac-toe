let box = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turno = true;
  enableBox();
  msgContainer.classList.add("hide");
};

const enableBox = () => {
  box.forEach((boxes) => {
    boxes.disabled = false;
    boxes.innerText = "";
  });
};

const disableBox = () => {
  box.forEach((boxes) => {
    boxes.disabled = true;
  });
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = box[pattern[0]].innerText;
    let pos2Val = box[pattern[1]].innerText;
    let pos3Val = box[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
