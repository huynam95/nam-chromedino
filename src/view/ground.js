import Helpers from "./helpers.js";
import { SPEED, SPEED_INCREASE } from "../config.js";

class Ground extends Helpers {
  _groundElement = document.querySelectorAll(".ground");

  resetGround() {
    this.setPosition(this._groundElement[0], "--left", 0);
    this.setPosition(this._groundElement[1], "--left", 300);
    this.resetSpeedScale();
  }

  updateGround(delta) {
    this._groundElement.forEach((ground) => {
      this.changePosition(
        ground,
        "--left",
        delta * this._SPEED_SCALE * SPEED * -1
      );

      if (this.getPosition(ground, "--left") <= -300) {
        this.setPosition(ground, "--left", 300);
      }
    });

    this.updateSpeedScale(delta, SPEED_INCREASE);
  }
}

export default new Ground();
