enum Choice {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}
type Result = {
  userchoicestring: string | null;
  computerchoicestring: string | null;
  result: string;
  humancounter: number;
  computercounter: number;
};

class RockPaperScissorsGame {
  private humanChoice: Choice | null = null;
  private computerChoice: Choice | null = null;
  private humancounter: number = 0;
  private computercounter: number = 0;

  constructor() {}

  makeHumanChoice(choice: Choice): void {
    this.humanChoice = choice;
    this.generateComputerChoice();
  }

  private generateComputerChoice(): void {
    const choices: Choice[] = Object.values(Choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    this.computerChoice = choices[randomIndex];
  }

  playRound(): Result {
    if (!this.humanChoice || !this.computerChoice) {
      return {
        result: "Invalid Choices. Please Choose Again",
        humancounter: this.humancounter,
        computercounter: this.computercounter,
        userchoicestring: null,
        computerchoicestring: null,
      };
    }

    const resultMessage = `You chose ${this.humanChoice}. Computer chose ${this.computerChoice}.`;

    if (this.humanChoice === this.computerChoice) {
      return {
        result: " It's a tie!",
        humancounter: this.humancounter,
        computercounter: this.computercounter,
        userchoicestring: `You chose ${this.humanChoice}. `,
        computerchoicestring: `Computer chose ${this.computerChoice}.`,
      };
    } else if (
      (this.humanChoice === Choice.Rock &&
        this.computerChoice === Choice.Scissors) ||
      (this.humanChoice === Choice.Paper &&
        this.computerChoice === Choice.Rock) ||
      (this.humanChoice === Choice.Scissors &&
        this.computerChoice === Choice.Paper)
    ) {
      this.humancounter++;
      return {
        result: " You win!",
        humancounter: this.humancounter,
        computercounter: this.computercounter,
        userchoicestring: `You chose ${this.humanChoice}. `,
        computerchoicestring: `Computer chose ${this.computerChoice}.`,
      };
    } else {
      this.computercounter++;
      return {
        result: " Computer wins!",
        humancounter: this.humancounter,
        computercounter: this.computercounter,
        userchoicestring: `You chose ${this.humanChoice}. `,
        computerchoicestring: `Computer chose ${this.computerChoice}.`,
      };
    }
  }

  getScore(): { humancounter: number; computercounter: number } {
    return {
      humancounter: this.humancounter,
      computercounter: this.computercounter,
    };
  }
}

const game = new RockPaperScissorsGame();

// function playGame(choice: Choice): void {
//   game.makeHumanChoice(choice);
//   const result = game.playRound();

//   var targetElement = document.getElementById("result");
//   targetElement.innerHTML = `<p>${result.result}</p>`;

//   var score = game.getScore();
//   var scoreElement = document.getElementById("score");
//   scoreElement.innerHTML = `<p>${score.humancounter} VS ${score.computercounter}</p>`;
// }
function playGame(choice: Choice): void {
  game.makeHumanChoice(choice);

  disableButtons();

  setTimeout(() => {
    const result = game.playRound();

    var targetElement = document.getElementById("result");
    targetElement.innerHTML = `<p>${result.result}</p>`;

    var targetElement = document.getElementById("userchoice");
    targetElement.innerHTML = `<p>${result.userchoicestring}</p>`;
    var targetElement = document.getElementById("computerchoice");
    targetElement.innerHTML = `<p>${result.computerchoicestring}</p>`;

    var score = game.getScore();
    var scoreElement = document.getElementById("score");
    scoreElement.innerHTML = `<p>${score.humancounter} VS ${score.computercounter}</p>`;

    enableButtons();
  }, 500);
}

function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
}
