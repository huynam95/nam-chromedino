import Helpers from "./helpers.js";
import {
  SPEED,
  JUMP_SPEED,
  GRAVITY,
  RUNNING,
  LIMIT_FRAME_TIME,
} from "../config.js";
import dino0 from "url:../../static/imgs/dino-run-0.png"; // Parcel 2
import dino1 from "url:../../static/imgs/dino-run-1.png"; // Parcel 2
import dinoLose from "url:../../static/imgs/dino-lose.png"; // Parcel 2
import dino from "url:../../static/imgs/dino-stationary.png"; // Parcel 2

class Dino extends Helpers {
  _dinoElement = document.querySelector(".dino");
  _currentFrameTime = 0;
  _limitFrameTime = LIMIT_FRAME_TIME;
  _GRAVITY = GRAVITY;
  _dinoFrame = 0;

  JUMP_SPEED = JUMP_SPEED;
  RUNNING = RUNNING;

  updateDino(delta) {
    if (this.RUNNING) {
      this.runDino(delta);
    } else {
      this.jumpDino(delta);
    }
  }

  runDino(delta) {
    this._currentFrameTime = this._currentFrameTime + delta * this._SPEED_SCALE;
    if (this._currentFrameTime > this._limitFrameTime) {
      if (this._dinoFrame === 0) this._dinoElement.src = `${dino0}`;
      else this._dinoElement.src = `${dino1}`;
      this._currentFrameTime = 0;
      this._dinoFrame = 1 - this._dinoFrame;
    }
  }

  jumpDino(delta) {
    this.changePosition(this._dinoElement, "--bottom", this.JUMP_SPEED * delta);

    this.JUMP_SPEED = this.JUMP_SPEED - delta * this._GRAVITY;

    if (this.getPosition(this._dinoElement, "--bottom") <= 0) {
      this.setPosition(this._dinoElement, "--bottom", 0);
      this.RUNNING = true;
    }
  }

  getDimDino() {
    return this._dinoElement.getBoundingClientRect();
  }

  dinoLoseImg() {
    this._dinoElement.src = `${dinoLose}`;
  }

  resetDino() {
    this._dinoElement.src = `${dino}`;
    this._currentFrameTime = 0;
    this._limitFrameTime = LIMIT_FRAME_TIME;
    this._GRAVITY = GRAVITY;
    this._dinoFrame = 0;
    this.JUMP_SPEED = JUMP_SPEED;
    this.RUNNING = RUNNING;

    this.setPosition(this._dinoElement, "--bottom", 0);
  }
}

export default new Dino();
