// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/modules/getData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getData = url => {
  return fetch(url).then(res => res.json()).catch(err => console.log("Error: ".concat(err)));
};

var _default = getData;
exports.default = _default;
},{}],"scripts/modules/createElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createElement = (tag, _ref) => {
  let {
    classNames,
    text,
    src,
    href,
    children,
    parent
  } = _ref;
  const el = document.createElement(tag);
  classNames && classNames.forEach(className => el.classList.add(className));
  text && (el.innerText = text);
  src && (el.src = src);
  href && (el.href = href);
  children && children.forEach(child => el.appendChild(child));
  parent && parent.appendChild(el);
  return el;
};

var _default = createElement;
exports.default = _default;
},{}],"scripts/modules/removeChildren.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const removeChildren = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

var _default = removeChildren;
exports.default = _default;
},{}],"images/wet-shirt.png":[function(require,module,exports) {
module.exports = "/wet-shirt.f2b431d2.png";
},{}],"images/dry-shirt.png":[function(require,module,exports) {
module.exports = "/dry-shirt.31488741.png";
},{}],"scripts/modules/renderOutcome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createElement = _interopRequireDefault(require("./createElement"));

var _removeChildren = _interopRequireDefault(require("./removeChildren"));

var _wetShirt = _interopRequireDefault(require("../../images/wet-shirt.png"));

var _dryShirt = _interopRequireDefault(require("../../images/dry-shirt.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderOutcome = minutes => {
  const container = document.querySelector('.result');
  (0, _removeChildren.default)(container);
  const currentDate = new Date(),
        departTime = new Date(currentDate.getTime() + (minutes - 1) * 60000),
        formatDepartTime = departTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  (0, _createElement.default)('h2', {
    text: minutes ? "Als je om ".concat(formatDepartTime, " vertrekt blijf je droog.") : "Je kan het komende uur niet vertrekken zonder nat te worden.",
    parent: container
  });
  (0, _createElement.default)('img', {
    src: minutes ? _dryShirt.default : _wetShirt.default,
    classNames: ['result-image'],
    parent: container
  });
};

var _default = renderOutcome;
exports.default = _default;
},{"./createElement":"scripts/modules/createElement.js","./removeChildren":"scripts/modules/removeChildren.js","../../images/wet-shirt.png":"images/wet-shirt.png","../../images/dry-shirt.png":"images/dry-shirt.png"}],"scripts/modules/calcDryMinutes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const calcDryMinutes = (data, neededMinutes) => {
  let minuteAmount = 0,
      firstMinute = null;
  const dryMinutes = data.reduce((array, minute, index) => {
    minute.precipitation === 0 && array.push(index);
    return array;
  }, []);
  dryMinutes.forEach((dryMinute, index) => {
    if (minuteAmount >= neededMinutes) {
      return;
    }

    if (dryMinute - 1 === dryMinutes[index - 1]) {
      minuteAmount++;
      firstMinute === null ? firstMinute = dryMinute : null;
    } else {
      minuteAmount = 0;
      firstMinute = null;
    }
  });
  return minuteAmount >= neededMinutes ? firstMinute : null;
};

var _default = calcDryMinutes;
exports.default = _default;
},{}],"scripts/config/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exclude = exports.locationEndpoint = exports.weatherEndpoint = exports.locationAPIKey = exports.weatherAPIKey = void 0;
const weatherAPIKey = 'c6d3274323a8201fd1939ef229fc0078',
      locationAPIKey = 'c2b0d7efe5404c009235e07bcaf81a3a',
      weatherEndpoint = 'https://api.openweathermap.org/data/2.5/onecall?',
      locationEndpoint = 'https://api.opencagedata.com/geocode/v1/json?',
      exclude = 'current,hourly,daily,alerts';
exports.exclude = exclude;
exports.locationEndpoint = locationEndpoint;
exports.weatherEndpoint = weatherEndpoint;
exports.locationAPIKey = locationAPIKey;
exports.weatherAPIKey = weatherAPIKey;
},{}],"scripts/modules/getCoords.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getData = _interopRequireDefault(require("./getData"));

var _api = require("../config/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getCoords = place => {
  const url = "".concat(_api.locationEndpoint, "q=").concat(place, "&key=").concat(_api.locationAPIKey);
  return (0, _getData.default)(url).then(data => data.results[0].geometry);
};

var _default = getCoords;
exports.default = _default;
},{"./getData":"scripts/modules/getData.js","../config/api":"scripts/config/api.js"}],"scripts/config/elements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.neededMinutes = exports.city = exports.geoButton = exports.form = void 0;
const form = document.querySelector('form'),
      geoButton = document.querySelector('.geolocation'),
      city = form.querySelectorAll('input')[0],
      neededMinutes = form.querySelectorAll('input')[1];
exports.neededMinutes = neededMinutes;
exports.city = city;
exports.geoButton = geoButton;
exports.form = form;
},{}],"scripts/modules/getGeoLocation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getData = _interopRequireDefault(require("./getData"));

var _api = require("../config/api");

var _elements = require("../config/elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getGeoLocation = position => {
  const lat = position.coords.latitude,
        lng = position.coords.longitude;

  _elements.geoButton.classList.remove('loading');

  (0, _getData.default)("".concat(_api.locationEndpoint, "q=").concat(lat, "+").concat(lng, "&key=").concat(_api.locationAPIKey)).then(data => {
    _elements.city.value = data.results[0].components.city;
  });
};

var _default = getGeoLocation;
exports.default = _default;
},{"./getData":"scripts/modules/getData.js","../config/api":"scripts/config/api.js","../config/elements":"scripts/config/elements.js"}],"scripts/app.js":[function(require,module,exports) {
"use strict";

var _getData = _interopRequireDefault(require("./modules/getData"));

var _renderOutcome = _interopRequireDefault(require("./modules/renderOutcome"));

var _calcDryMinutes = _interopRequireDefault(require("./modules/calcDryMinutes"));

var _getCoords = _interopRequireDefault(require("./modules/getCoords"));

var _getGeoLocation = _interopRequireDefault(require("./modules/getGeoLocation"));

var _api = require("./config/api");

var _elements = require("./config/elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_elements.form.addEventListener('submit', async e => {
  e.preventDefault();
  const coords = await (0, _getCoords.default)(_elements.city.value),
        weatherURL = "".concat(_api.weatherEndpoint, "lat=").concat(coords.lat, "&lon=").concat(coords.lng, "&exclude=").concat(_api.exclude, "&appid=").concat(_api.weatherAPIKey),
        weatherData = await (0, _getData.default)(weatherURL),
        dryMinutes = (0, _calcDryMinutes.default)(weatherData.minutely, _elements.neededMinutes.value);
  (0, _renderOutcome.default)(dryMinutes);
});

_elements.geoButton.addEventListener('click', () => {
  _elements.geoButton.classList.add('loading');

  navigator.geolocation.getCurrentPosition(_getGeoLocation.default);
});
},{"./modules/getData":"scripts/modules/getData.js","./modules/renderOutcome":"scripts/modules/renderOutcome.js","./modules/calcDryMinutes":"scripts/modules/calcDryMinutes.js","./modules/getCoords":"scripts/modules/getCoords.js","./modules/getGeoLocation":"scripts/modules/getGeoLocation.js","./config/api":"scripts/config/api.js","./config/elements":"scripts/config/elements.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51357" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/app.js"], null)
//# sourceMappingURL=/app.c09d0a7b.js.map