import { CACTUS_TIME_MAX, CACTUS_TIME_MIN } from "../config.js";
import Helpers from "./helpers.js";
import { SPEED, SPEED_INCREASE } from "../config.js";
import cactusImg from "url:../../static/imgs/cactus.png"; // Parcel 2

class Cactus extends Helpers {
  _worldElement = document.querySelector(".world");
  _cactusAppearTimeMin = CACTUS_TIME_MIN;
  _cactusAppearTimeMax = CACTUS_TIME_MAX;
  _cactusAppearTime = CACTUS_TIME_MIN;

  updateCactus(delta) {
    // Make all cactus move
    document.querySelectorAll(".cactus").forEach((cactus) => {
      this.changePosition(
        cactus,
        "--left",
        delta * this._SPEED_SCALE * SPEED * -1
      );

      // Remove cactus
      if (this.getPosition(cactus, "--left") <= -10) {
        cactus.remove();
      }
    });

    // Increase speed of cactus = ground
    this.updateSpeedScale(delta, SPEED_INCREASE);

    // Create cactus
    if (this._cactusAppearTime <= 0) {
      this.createCactus();
      this._cactusAppearTime =
        this.randomNum(this._cactusAppearTimeMin, this._cactusAppearTimeMax) /
        this._SPEED_SCALE;
    }

    this._cactusAppearTime = this._cactusAppearTime - delta;
  }

  createCactus() {
    const cactus = document.createElement("img");
    cactus.src = `${cactusImg}`;
    cactus.classList.add("cactus");
    this._worldElement.append(cactus);

    this.setPosition(cactus, "--left", 100);
  }

  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getDimCactus() {
    const cactuses = [...document.querySelectorAll(".cactus")];

    return cactuses.map((cactus) => {
      return cactus.getBoundingClientRect();
    });
  }

  resetCactus() {
    document.querySelectorAll(".cactus").forEach((cactus) => {
      cactus.remove();
    });
    this.resetSpeedScale();
  }
}

export default new Cactus();
