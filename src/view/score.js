import { SCORE_RATE } from "../config.js";
import Helpers from "./helpers.js";

class Score extends Helpers {
  _scoreElement = document.querySelector(".score");
  _highScoreElement = document.querySelector(".high-score");

  updateScore(delta, score) {
    score = score + delta * SCORE_RATE;
    const scoreString = this.addLeadingZeros(Math.floor(score), 5);
    this._scoreElement.textContent = scoreString;
    return score;
  }

  updateHighScore(highScore) {
    const highScoreString = this.addLeadingZeros(Math.floor(highScore), 5);
    this._highScoreElement.textContent = highScoreString;
  }

  addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, "0");
  }
}

export default new Score();
