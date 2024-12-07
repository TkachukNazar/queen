let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

a = [];
function play(cards) {
  b = 0;
  let card = "";
  let choose;
  console.log(shuffle(cards));
  while (cards.length > 0) {
    if (b % 2 == 0) {
      alert("Your turn!");
      do {
        choose = +prompt(
          "Pull out a card(1 - from the end, 2 - from the beginning, 3 - from the middle, 0 - quit the game): "
        );
      } while (isNaN(choose) || choose < 0 || choose > 3);
    } else {
      alert("Computer's turn!");
      choose = Math.floor(Math.random() * 3) + 1;
      alert(choose);
    }

    choose == 1
      ? alert((card = cards.pop()))
      : choose == 2
      ? alert((card = cards.shift())) //
      : choose == 3
      ? alert((card = cards.splice(Math.floor(cards.length / 2), 1).join()))
      : alert("Bye");
    if (choose == 0) {
      return;
    }
    a.push(card);
    console.log(a);
    b++;
    if (card === "Q") {
      b % 2 ? alert("You won!") : alert("Computer won!");
      console.log(a);
      return;
    }
  }
}

play(cards);
