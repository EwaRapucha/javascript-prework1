{
  const playGame = function (playerInput) {
    clearMessages();
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        printMessage("Nie znam ruchu o id " + argMoveId + ".");
        return "nieznany ruch";
      }
    };

    const displayResult = function (argComputerMove, argPlayerMove) {
      printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
        printMessage("Ty przegrywasz!");
      } else if (
        argComputerMove == "kamień" &&
        argPlayerMove == "nieznany ruch"
      ) {
        printMessage("Wybierz 1,2 lub 3!");
      }
      if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        printMessage("Ty przegrywasz!");
      } else if (
        argComputerMove == "papier" &&
        argPlayerMove == "nieznany ruch"
      ) {
        printMessage("Wybierz 1,2 lub 3!");
      }
      if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        printMessage("Ty przegrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
      } else if (
        argComputerMove == "nożyce" &&
        argPlayerMove == "nieznany ruch"
      ) {
        printMessage("Wybierz 1,2 lub 3!");
      }
      if (argComputerMove == argPlayerMove) {
        printMessage("Remis!");
      }
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage("Mój ruch to: " + computerMove);

    /*let playerInput = prompt(
    "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  );*/

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage("Twój ruch to: " + playerMove);

    displayResult(computerMove, playerMove);
  };

  const playRock = document.getElementById("play-rock");
  playRock.addEventListener("click", function () {
    playGame(1);
  });

  const playPaper = document.getElementById("play-paper");
  playPaper.addEventListener("click", function () {
    playGame(2);
  });

  const playScissors = document.getElementById("play-scissors");
  playScissors.addEventListener("click", function () {
    playGame(3);
  });
}
