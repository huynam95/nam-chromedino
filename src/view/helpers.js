export default class Helpers {
  _SPEED_SCALE = 1;

  getPosition(el, prop) {
    return parseFloat(getComputedStyle(el).getPropertyValue(prop));
  }

  setPosition(el, prop, value) {
    el.style.setProperty(prop, value);
  }

  changePosition(el, prop, changeValue) {
    this.setPosition(el, prop, this.getPosition(el, prop) + changeValue);
  }

  updateSpeedScale(delta, SPEED_INCREASE) {
    this._SPEED_SCALE = this._SPEED_SCALE + delta * SPEED_INCREASE;
  }

  resetSpeedScale() {
    this._SPEED_SCALE = 1;
  }
}
