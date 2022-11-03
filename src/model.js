export const state = {
  score: 0,
  highScore: 0,
  lastTime: null,
};

export const persistHighScore = function () {
  localStorage.setItem("highScore", JSON.stringify(state.highScore));
};

const init = function () {
  console.log(state.highScore);
  const storage = localStorage.getItem("highScore");
  if (storage) state.highScore = JSON.parse(storage);
};
init();
