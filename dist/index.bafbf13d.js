// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6KagL":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "8b22274fbafbf13d";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gCE4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _configJs = require("./config.js");
var _modelJs = require("./model.js");
var _groundJs = require("./view/ground.js");
var _groundJsDefault = parcelHelpers.interopDefault(_groundJs);
var _dinoJs = require("./view/dino.js");
var _dinoJsDefault = parcelHelpers.interopDefault(_dinoJs);
var _scoreJs = require("./view/score.js");
var _scoreJsDefault = parcelHelpers.interopDefault(_scoreJs);
var _cactusJs = require("./view/cactus.js");
var _cactusJsDefault = parcelHelpers.interopDefault(_cactusJs);
const worldElement = document.querySelector(".world");
const messageElement = document.querySelector(".start-message");
let paused;
const checkCol = function() {
    const dinoDim = (0, _dinoJsDefault.default).getDimDino();
    const cactucesDim = (0, _cactusJsDefault.default).getDimCactus();
    return cactucesDim.some((cactus)=>{
        return dinoDim.left < cactus.right && dinoDim.right > cactus.left && dinoDim.top < cactus.bottom && dinoDim.bottom > cactus.top;
    });
};
const jump = function(e) {
    if (e.code !== "Space" || !(0, _dinoJsDefault.default).RUNNING) return;
    (0, _dinoJsDefault.default).JUMP_SPEED = (0, _configJs.JUMP_SPEED);
    (0, _dinoJsDefault.default).RUNNING = false;
};
const resizeWorld = function() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let scale;
    if (windowWidth / windowHeight < (0, _configJs.WORLD_WIDTH) / (0, _configJs.WORLD_HEIGHT)) scale = windowWidth / (0, _configJs.WORLD_WIDTH);
    else scale = windowHeight / (0, _configJs.WORLD_HEIGHT);
    worldElement.style.width = `${(0, _configJs.WORLD_WIDTH) * scale}px`;
    worldElement.style.height = `${(0, _configJs.WORLD_HEIGHT) * scale}px`;
};
const updateWorld = function(time) {
    if (paused) {
        paused = false;
        messageElement.classList.remove("hidden");
        setTimeout(()=>{
            init2();
        }, 100);
        return;
    }
    if (!_modelJs.state.lastTime) {
        _modelJs.state.lastTime = time;
        window.requestAnimationFrame(updateWorld);
        return;
    }
    const delta = time - _modelJs.state.lastTime;
    // Update Screen
    (0, _groundJsDefault.default).updateGround(delta);
    (0, _dinoJsDefault.default).updateDino(delta);
    _modelJs.state.score = (0, _scoreJsDefault.default).updateScore(delta, _modelJs.state.score);
    (0, _scoreJsDefault.default).updateHighScore(_modelJs.state.highScore);
    (0, _cactusJsDefault.default).updateCactus(delta);
    (0, _cactusJsDefault.default).getDimCactus();
    // Update Screen
    // Check collision
    if (checkCol()) {
        (0, _dinoJsDefault.default).dinoLoseImg();
        messageElement.classList.remove("hidden");
        if (_modelJs.state.score > _modelJs.state.highScore) _modelJs.state.highScore = _modelJs.state.score;
        _modelJs.persistHighScore();
        setTimeout(()=>{
            init();
        }, 100);
        return;
    }
    // Check collision
    _modelJs.state.lastTime = time;
    window.requestAnimationFrame(updateWorld);
};
const handleVisibilityChange = function() {
    console.log(paused);
    if (document.hidden) paused = true;
};
const start = function() {
    _modelJs.state.score = 0;
    _modelJs.state.lastTime = null;
    (0, _groundJsDefault.default).resetGround();
    (0, _cactusJsDefault.default).resetCactus();
    (0, _dinoJsDefault.default).resetDino();
    messageElement.classList.add("hidden");
    window.addEventListener("keydown", jump);
    document.addEventListener("visibilitychange", handleVisibilityChange, false);
    window.requestAnimationFrame(updateWorld);
};
const init = function() {
    resizeWorld();
    (0, _scoreJsDefault.default).updateHighScore(_modelJs.state.highScore);
    window.addEventListener("resize", resizeWorld);
    window.addEventListener("keydown", start, {
        once: true
    });
};
const start2 = function() {
    _modelJs.state.lastTime = null;
    messageElement.classList.add("hidden");
    window.addEventListener("keydown", jump);
    document.addEventListener("visibilitychange", handleVisibilityChange, false);
    window.requestAnimationFrame(updateWorld);
};
const init2 = function() {
    (0, _scoreJsDefault.default).updateHighScore(_modelJs.state.highScore);
    resizeWorld();
    window.addEventListener("resize", resizeWorld);
    window.addEventListener("keydown", start2, {
        once: true
    });
};
init(); //************* Terminal: npm init -> Create package.json:
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

},{"./config.js":"jtCLN","./model.js":"dEDha","./view/ground.js":"jhjbi","./view/dino.js":"1hG7r","./view/score.js":"bXKFW","./view/cactus.js":"fuLgt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtCLN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WORLD_WIDTH", ()=>WORLD_WIDTH);
parcelHelpers.export(exports, "WORLD_HEIGHT", ()=>WORLD_HEIGHT);
parcelHelpers.export(exports, "SPEED", ()=>SPEED);
parcelHelpers.export(exports, "SPEED_INCREASE", ()=>SPEED_INCREASE);
parcelHelpers.export(exports, "JUMP_SPEED", ()=>JUMP_SPEED);
parcelHelpers.export(exports, "GRAVITY", ()=>GRAVITY);
parcelHelpers.export(exports, "RUNNING", ()=>RUNNING);
parcelHelpers.export(exports, "LIMIT_FRAME_TIME", ()=>LIMIT_FRAME_TIME);
parcelHelpers.export(exports, "SCORE_RATE", ()=>SCORE_RATE);
parcelHelpers.export(exports, "CACTUS_TIME_MIN", ()=>CACTUS_TIME_MIN);
parcelHelpers.export(exports, "CACTUS_TIME_MAX", ()=>CACTUS_TIME_MAX);
const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 25;
const SPEED = 0.035;
const SPEED_INCREASE = 0.00005;
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const RUNNING = true;
const LIMIT_FRAME_TIME = 100;
const SCORE_RATE = 0.01;
const CACTUS_TIME_MIN = 800;
const CACTUS_TIME_MAX = 2000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dEDha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "persistHighScore", ()=>persistHighScore);
const state = {
    score: 0,
    highScore: 0,
    lastTime: null
};
const persistHighScore = function() {
    localStorage.setItem("highScore", JSON.stringify(state.highScore));
};
const init = function() {
    console.log(state.highScore);
    const storage = localStorage.getItem("highScore");
    if (storage) state.highScore = JSON.parse(storage);
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhjbi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("./helpers.js");
var _helpersJsDefault = parcelHelpers.interopDefault(_helpersJs);
var _configJs = require("../config.js");
class Ground extends (0, _helpersJsDefault.default) {
    _groundElement = document.querySelectorAll(".ground");
    resetGround() {
        this.setPosition(this._groundElement[0], "--left", 0);
        this.setPosition(this._groundElement[1], "--left", 300);
        this.resetSpeedScale();
    }
    updateGround(delta) {
        this._groundElement.forEach((ground)=>{
            this.changePosition(ground, "--left", delta * this._SPEED_SCALE * (0, _configJs.SPEED) * -1);
            if (this.getPosition(ground, "--left") <= -300) this.setPosition(ground, "--left", 300);
        });
        this.updateSpeedScale(delta, (0, _configJs.SPEED_INCREASE));
    }
}
exports.default = new Ground();

},{"./helpers.js":"RCNjo","../config.js":"jtCLN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"RCNjo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Helpers {
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
exports.default = Helpers;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hG7r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("./helpers.js");
var _helpersJsDefault = parcelHelpers.interopDefault(_helpersJs);
var _configJs = require("../config.js");
var _dinoRun0Png = require("url:../../static/imgs/dino-run-0.png"); // Parcel 2
var _dinoRun0PngDefault = parcelHelpers.interopDefault(_dinoRun0Png);
var _dinoRun1Png = require("url:../../static/imgs/dino-run-1.png"); // Parcel 2
var _dinoRun1PngDefault = parcelHelpers.interopDefault(_dinoRun1Png);
var _dinoLosePng = require("url:../../static/imgs/dino-lose.png"); // Parcel 2
var _dinoLosePngDefault = parcelHelpers.interopDefault(_dinoLosePng);
var _dinoStationaryPng = require("url:../../static/imgs/dino-stationary.png"); // Parcel 2
var _dinoStationaryPngDefault = parcelHelpers.interopDefault(_dinoStationaryPng);
class Dino extends (0, _helpersJsDefault.default) {
    _dinoElement = document.querySelector(".dino");
    _currentFrameTime = 0;
    _limitFrameTime = (0, _configJs.LIMIT_FRAME_TIME);
    _GRAVITY = (0, _configJs.GRAVITY);
    _dinoFrame = 0;
    JUMP_SPEED = (0, _configJs.JUMP_SPEED);
    RUNNING = (0, _configJs.RUNNING);
    updateDino(delta) {
        if (this.RUNNING) this.runDino(delta);
        else this.jumpDino(delta);
    }
    runDino(delta) {
        this._currentFrameTime = this._currentFrameTime + delta * this._SPEED_SCALE;
        if (this._currentFrameTime > this._limitFrameTime) {
            if (this._dinoFrame === 0) this._dinoElement.src = `${0, _dinoRun0PngDefault.default}`;
            else this._dinoElement.src = `${0, _dinoRun1PngDefault.default}`;
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
        this._dinoElement.src = `${0, _dinoLosePngDefault.default}`;
    }
    resetDino() {
        this._dinoElement.src = `${0, _dinoStationaryPngDefault.default}`;
        this._currentFrameTime = 0;
        this._limitFrameTime = (0, _configJs.LIMIT_FRAME_TIME);
        this._GRAVITY = (0, _configJs.GRAVITY);
        this._dinoFrame = 0;
        this.JUMP_SPEED = (0, _configJs.JUMP_SPEED);
        this.RUNNING = (0, _configJs.RUNNING);
        this.setPosition(this._dinoElement, "--bottom", 0);
    }
}
exports.default = new Dino();

},{"./helpers.js":"RCNjo","../config.js":"jtCLN","url:../../static/imgs/dino-run-0.png":"jguk3","url:../../static/imgs/dino-run-1.png":"bUSEX","url:../../static/imgs/dino-lose.png":"jQOWH","url:../../static/imgs/dino-stationary.png":"8bavi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jguk3":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "dino-run-0.f13fb1fe.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bUSEX":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "dino-run-1.5449d1ad.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jQOWH":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "dino-lose.255f1e9b.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8bavi":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "dino-stationary.1dbb02fe.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bXKFW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
var _helpersJs = require("./helpers.js");
var _helpersJsDefault = parcelHelpers.interopDefault(_helpersJs);
class Score extends (0, _helpersJsDefault.default) {
    _scoreElement = document.querySelector(".score");
    _highScoreElement = document.querySelector(".high-score");
    updateScore(delta, score) {
        score = score + delta * (0, _configJs.SCORE_RATE);
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
exports.default = new Score();

},{"../config.js":"jtCLN","./helpers.js":"RCNjo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fuLgt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
var _helpersJs = require("./helpers.js");
var _helpersJsDefault = parcelHelpers.interopDefault(_helpersJs);
var _cactusPng = require("url:../../static/imgs/cactus.png"); // Parcel 2
var _cactusPngDefault = parcelHelpers.interopDefault(_cactusPng);
class Cactus extends (0, _helpersJsDefault.default) {
    _worldElement = document.querySelector(".world");
    _cactusAppearTimeMin = (0, _configJs.CACTUS_TIME_MIN);
    _cactusAppearTimeMax = (0, _configJs.CACTUS_TIME_MAX);
    _cactusAppearTime = (0, _configJs.CACTUS_TIME_MIN);
    updateCactus(delta) {
        // Make all cactus move
        document.querySelectorAll(".cactus").forEach((cactus)=>{
            this.changePosition(cactus, "--left", delta * this._SPEED_SCALE * (0, _configJs.SPEED) * -1);
            // Remove cactus
            if (this.getPosition(cactus, "--left") <= -10) cactus.remove();
        });
        // Increase speed of cactus = ground
        this.updateSpeedScale(delta, (0, _configJs.SPEED_INCREASE));
        // Create cactus
        if (this._cactusAppearTime <= 0) {
            this.createCactus();
            this._cactusAppearTime = this.randomNum(this._cactusAppearTimeMin, this._cactusAppearTimeMax) / this._SPEED_SCALE;
        }
        this._cactusAppearTime = this._cactusAppearTime - delta;
    }
    createCactus() {
        const cactus = document.createElement("img");
        cactus.src = `${0, _cactusPngDefault.default}`;
        cactus.classList.add("cactus");
        this._worldElement.append(cactus);
        this.setPosition(cactus, "--left", 100);
    }
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    getDimCactus() {
        const cactuses = [
            ...document.querySelectorAll(".cactus")
        ];
        return cactuses.map((cactus)=>{
            return cactus.getBoundingClientRect();
        });
    }
    resetCactus() {
        document.querySelectorAll(".cactus").forEach((cactus)=>{
            cactus.remove();
        });
        this.resetSpeedScale();
    }
}
exports.default = new Cactus();

},{"../config.js":"jtCLN","./helpers.js":"RCNjo","url:../../static/imgs/cactus.png":"kHJwB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kHJwB":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bWBrl") + "cactus.8634b9ea.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["6KagL","gCE4p"], "gCE4p", "parcelRequire92b5")

//# sourceMappingURL=index.bafbf13d.js.map
