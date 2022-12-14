import {
  WORLD_WIDTH,
  WORLD_HEIGHT,
  JUMP_SPEED,
  SPEED,
  SPEED_INCREASE,
  CACTUS_TIME_MAX,
} from "./config.js";
import * as model from "./model.js";
import ground from "./view/ground.js";
import dino from "./view/dino.js";
import score from "./view/score.js";
import cactus from "./view/cactus.js";
import jumpSound from "url:./sound/jump.wav";
// import dieSound from "url:./sound/die.wav";
import backgroundSound from "url:./sound/background.mp3";
import dieSound from "url:./sound/lose.mp3";

const worldElement = document.querySelector(".world");
const messageElement = document.querySelector(".start-message");

const playElement = document.querySelector(".play-pause");

const musicElement = document.querySelector(".music");
const musicOn = document.querySelector(".music-button");
const musicOff = document.querySelector(".no-music-button");

let paused = 0;
let volume = 1;

let jumpSoundDino = new Audio(jumpSound);
let backgroundSoundDino = new Audio(backgroundSound);
backgroundSoundDino.volume = 0.5;
let dieSoundDino = new Audio(dieSound);
dieSoundDino.volume = 0.1;

const checkCol = function () {
  const dinoDim = dino.getDimDino();
  const cactucesDim = cactus.getDimCactus();

  return cactucesDim.some((cactus) => {
    return (
      dinoDim.left < cactus.right &&
      dinoDim.right > cactus.left &&
      dinoDim.top < cactus.bottom &&
      dinoDim.bottom > cactus.top
    );
  });
};

const jump = function (e) {
  if (e.code !== "Space" || !dino.RUNNING) return;
  dino.JUMP_SPEED = JUMP_SPEED;
  dino.RUNNING = false;

  jumpSoundDino.play();
};

const resizeWorld = function () {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  let scale;

  if (windowWidth / windowHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    scale = windowWidth / WORLD_WIDTH;
  } else {
    scale = windowHeight / WORLD_HEIGHT;
  }

  worldElement.style.width = `${WORLD_WIDTH * scale}px`;
  worldElement.style.height = `${WORLD_HEIGHT * scale}px`;
};

const updateWorld = function (time) {
  if (paused === 1) {
    paused = 0;
    messageElement.classList.remove("hidden");
    setTimeout(() => {
      init2();
    }, 100);
    return;
  }

  if (!model.state.lastTime) {
    model.state.lastTime = time;
    window.requestAnimationFrame(updateWorld);
    return;
  }

  const delta = time - model.state.lastTime;

  // Update Screen
  ground.updateGround(delta);
  dino.updateDino(delta);

  model.state.score = score.updateScore(delta, model.state.score);
  score.updateHighScore(model.state.highScore);

  cactus.updateCactus(delta);
  cactus.getDimCactus();
  // Update Screen

  // Check collision
  if (checkCol()) {
    dieSoundDino.play();
    backgroundSoundDino.pause();
    backgroundSoundDino.currentTime = 0;

    dino.dinoLoseImg();
    messageElement.classList.remove("hidden");
    if (model.state.score > model.state.highScore)
      model.state.highScore = model.state.score;
    model.persistHighScore();

    setTimeout(() => {
      init();
    }, 2500);
    return;
  }
  // Check collision

  model.state.lastTime = time;
  window.requestAnimationFrame(updateWorld);
};

const handleVisibilityChange = function () {
  if (document.hidden) paused = 1;
};

const start = function () {
  model.state.score = 0;
  model.state.lastTime = null;
  backgroundSoundDino.volume = 0.5;
  jumpSoundDino.volume = 1;
  dieSoundDino.volume = 0.1;

  backgroundSoundDino.play();

  ground.resetGround();
  cactus.resetCactus();
  dino.resetDino();

  messageElement.classList.add("hidden");

  window.addEventListener("keydown", jump);
  document.addEventListener("visibilitychange", handleVisibilityChange, false);
  window.requestAnimationFrame(updateWorld);
};

const music = function () {
  volume = 1 - volume;
  if (volume === 0) {
    backgroundSoundDino.volume = 0;
    jumpSoundDino.volume = 0;
    dieSoundDino.volume = 0;
  }
  if (volume === 1) {
    backgroundSoundDino.volume = 0.5;
    jumpSoundDino.volume = 1;
    dieSoundDino.volume = 0.1;
  }
  musicOn.classList.toggle("hidden");
  musicOff.classList.toggle("hidden");
};

const play = function () {
  paused = 1;
  backgroundSoundDino.volume = 0;
  jumpSoundDino.volume = 0;
  dieSoundDino.volume = 0;
};

const init = function () {
  resizeWorld();
  score.updateHighScore(model.state.highScore);

  musicElement.addEventListener("click", music);
  playElement.addEventListener("click", play);
  window.addEventListener("resize", resizeWorld);
  window.addEventListener("keydown", start, { once: true });
};

const start2 = function () {
  model.state.lastTime = null;
  backgroundSoundDino.volume = 0.5;
  jumpSoundDino.volume = 1;
  dieSoundDino.volume = 0.1;

  messageElement.classList.add("hidden");

  window.addEventListener("keydown", jump);
  document.addEventListener("visibilitychange", handleVisibilityChange, false);
  window.requestAnimationFrame(updateWorld);
};

const init2 = function () {
  score.updateHighScore(model.state.highScore);

  resizeWorld();

  musicElement.addEventListener("click", music);
  playElement.addEventListener("click", play);
  window.addEventListener("resize", resizeWorld);
  window.addEventListener("keydown", start2, { once: true });
};

init();

//************* Terminal: npm init -> Create package.json:

// package name: (starter) forkify
// version: (1.0.0)
// description: Recipe application
// entry point: (index.js)
// test command:
// git repository:
// keywords:
// author: Huy Nam
// license: (ISC)
// About to write to E:\Huy Nam\complete-javascript-course-updates-and-fixes\18-forkify\starter\package.json:
// {
//   "name": "forkify",
//   "version": "1.0.0",
//   "description": "Recipe application",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "Huy Nam",
//   "license": "ISC"
// }

// Is this OK? (yes)
// PS E:\Huy Nam\complete-javascript-course-updates-and-fixes\18-forkify\starter>

// "scripts": {
//   "start": "parcel index.html",
//   "build": "parcel build index.html --dist-dir ./dist"
// }
//************* Terminal: npm start -> Start Parcel on index.html

//************* Terminal: npm install parcel@2 -D

// git init
// git config --global user.name huynam95
// git config --global user.email tranhuynam15@gmail.com

// git status
// git add -A
// git commit -m 'Initial commit'
// git status
// git reset -- hard HEAD
// git log
// git reset -- hard 46f81f7b82c809b1e60048ba019c3e8485bb9e02

// git branch
// git branch new-feature
// git checkout new-feature
// git merge new-feature
