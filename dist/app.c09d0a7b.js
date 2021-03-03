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
})({"scripts/modules/calcDryMinutes.js":[function(require,module,exports) {
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
},{}],"scripts/modules/createElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createElement = (tag, _ref) => {
  let {
    classNames,
    attributes,
    text,
    src,
    href,
    children,
    parent,
    eventListener,
    namespace,
    html
  } = _ref;
  const el = namespace ? document.createElementNS(namespace, tag) : document.createElement(tag);
  classNames && classNames.forEach(className => el.classList.add(className));
  attributes && attributes.forEach(attribute => el.setAttribute(attribute.attr, attribute.val));
  html && (el.innerHTML = html);
  text && (el.innerText = text);
  src && (el.src = src);
  href && (el.href = href);
  children && children.forEach(child => el.appendChild(child));
  parent && parent.appendChild(el);
  eventListener && el.addEventListener(eventListener.on, eventListener.func);
  return el;
};

var _default = createElement;
exports.default = _default;
},{}],"scripts/config/index.js":[function(require,module,exports) {
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

var _2 = require(".");

var _config = require("../config");

const getCoords = place => {
  const url = "".concat(_config.locationEndpoint, "q=").concat(place, "&key=").concat(_config.locationAPIKey);
  return (0, _2.getData)(url).then(data => data.results[0].geometry).catch(_ => null);
};

var _default = getCoords;
exports.default = _default;
},{".":"scripts/modules/index.js","../config":"scripts/config/index.js"}],"scripts/modules/getData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getData = url => {
  return fetch(url).then(res => res.json()).catch(_ => null);
};

var _default = getData;
exports.default = _default;
},{}],"scripts/modules/getCity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _2 = require(".");

var _config = require("../config");

const getCity = (lat, lng) => {
  const loading = document.querySelector('.loading-container');
  loading.classList.remove('loading');
  return (0, _2.getData)("".concat(_config.locationEndpoint, "q=").concat(lat, "+").concat(lng, "&key=").concat(_config.locationAPIKey)).then(data => data.results[0].components.city).catch(_ => null);
};

var _default = getCity;
exports.default = _default;
},{".":"scripts/modules/index.js","../config":"scripts/config/index.js"}],"scripts/modules/removeChildren.js":[function(require,module,exports) {
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

var _ = require(".");

var _router = require("../router");

var _wetShirt = _interopRequireDefault(require("../../images/wet-shirt.png"));

var _dryShirt = _interopRequireDefault(require("../../images/dry-shirt.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderOutcome = (minutes, city, coords) => {
  const container = document.querySelector('.result'),
        loading = document.querySelector('.loading-container');
  (0, _.removeChildren)(container);
  const currentDate = new Date(),
        departTime = new Date(currentDate.getTime() + (minutes - 1) * 60000),
        formatDepartTime = departTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  let departMessage;

  if (minutes && minutes !== 1) {
    departMessage = "Als je om ".concat(formatDepartTime, " vertrekt blijf je droog!");
  } else if (minutes === 1) {
    departMessage = 'Als je nu vertrekt blijf je droog!';
  } else {
    departMessage = 'Je kunt het komende uur niet vertrekken zonder nat te worden...';
  }

  (0, _.createElement)('h2', {
    text: departMessage,
    parent: container
  });
  (0, _.createElement)('img', {
    src: minutes ? _dryShirt.default : _wetShirt.default,
    classNames: ['result-image'],
    parent: container
  });
  (0, _.createElement)('button', {
    text: "Meer informatie over ".concat(city),
    attributes: [{
      attr: 'route',
      val: "/location?lat=".concat(coords.lat, "&lng=").concat(coords.lng)
    }],
    eventListener: {
      on: 'click',
      func: _router.navigator
    },
    parent: container
  });
  loading.classList.remove('loading');
};

var _default = renderOutcome;
exports.default = _default;
},{".":"scripts/modules/index.js","../router":"scripts/router/index.js","../../images/wet-shirt.png":"images/wet-shirt.png","../../images/dry-shirt.png":"images/dry-shirt.png"}],"scripts/modules/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "calcDryMinutes", {
  enumerable: true,
  get: function () {
    return _calcDryMinutes.default;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function () {
    return _createElement.default;
  }
});
Object.defineProperty(exports, "getCoords", {
  enumerable: true,
  get: function () {
    return _getCoords.default;
  }
});
Object.defineProperty(exports, "getData", {
  enumerable: true,
  get: function () {
    return _getData.default;
  }
});
Object.defineProperty(exports, "getCity", {
  enumerable: true,
  get: function () {
    return _getCity.default;
  }
});
Object.defineProperty(exports, "removeChildren", {
  enumerable: true,
  get: function () {
    return _removeChildren.default;
  }
});
Object.defineProperty(exports, "renderOutcome", {
  enumerable: true,
  get: function () {
    return _renderOutcome.default;
  }
});

var _calcDryMinutes = _interopRequireDefault(require("./calcDryMinutes"));

var _createElement = _interopRequireDefault(require("./createElement"));

var _getCoords = _interopRequireDefault(require("./getCoords"));

var _getData = _interopRequireDefault(require("./getData"));

var _getCity = _interopRequireDefault(require("./getCity"));

var _removeChildren = _interopRequireDefault(require("./removeChildren"));

var _renderOutcome = _interopRequireDefault(require("./renderOutcome"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./calcDryMinutes":"scripts/modules/calcDryMinutes.js","./createElement":"scripts/modules/createElement.js","./getCoords":"scripts/modules/getCoords.js","./getData":"scripts/modules/getData.js","./getCity":"scripts/modules/getCity.js","./removeChildren":"scripts/modules/removeChildren.js","./renderOutcome":"scripts/modules/renderOutcome.js"}],"images/umbrella.png":[function(require,module,exports) {
module.exports = "/umbrella.3633b8ab.png";
},{}],"scripts/components/globals/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = require("../../modules");

var _router = require("../../router");

var _umbrella = _interopRequireDefault(require("../../../images/umbrella.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const header = () => {
  const title = (0, _modules.createElement)('h1', {
    text: 'Blijf ik droog?'
  });
  const image = (0, _modules.createElement)('img', {
    src: _umbrella.default
  });
  const homeBtn = (0, _modules.createElement)('button', {
    text: 'Home',
    attributes: [{
      attr: 'route',
      val: '/'
    }],
    eventListener: {
      on: 'click',
      func: _router.navigator
    }
  });
  const locationBtn = (0, _modules.createElement)('button', {
    text: 'Landen',
    attributes: [{
      attr: 'route',
      val: '/location'
    }],
    eventListener: {
      on: 'click',
      func: _router.navigator
    }
  });
  const header = (0, _modules.createElement)('header', {
    children: [image, title, homeBtn, locationBtn]
  });
  return header;
};

var _default = header;
exports.default = _default;
},{"../../modules":"scripts/modules/index.js","../../router":"scripts/router/index.js","../../../images/umbrella.png":"images/umbrella.png"}],"images/victor.png":[function(require,module,exports) {
module.exports = "/victor.3ffdb11d.png";
},{}],"images/linkedin.png":[function(require,module,exports) {
module.exports = "/linkedin.03aad0ec.png";
},{}],"images/github.png":[function(require,module,exports) {
module.exports = "/github.0512e05a.png";
},{}],"scripts/components/globals/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = require("../../modules");

var _victor = _interopRequireDefault(require("../../../images/victor.png"));

var _linkedin = _interopRequireDefault(require("../../../images/linkedin.png"));

var _github = _interopRequireDefault(require("../../../images/github.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const footer = () => {
  const avatar = (0, _modules.createElement)('img', {
    classNames: ['avatar'],
    src: _victor.default
  });
  const name = (0, _modules.createElement)('h3', {
    text: 'Victor Boucher'
  });
  const title = (0, _modules.createElement)('h4', {
    text: 'Frontend developer'
  });
  const githubIcon = (0, _modules.createElement)('img', {
    classNames: ['icon'],
    src: _github.default
  });
  const linkedinIcon = (0, _modules.createElement)('img', {
    classNames: ['icon'],
    src: _linkedin.default
  });
  const githubAnchor = (0, _modules.createElement)('a', {
    href: 'https://github.com/BVictorB',
    attributes: [{
      attr: 'target',
      val: '_blank'
    }],
    children: [githubIcon]
  });
  const linkedinAnchor = (0, _modules.createElement)('a', {
    href: 'https://www.linkedin.com/in/victor-boucher-18267813b/',
    attributes: [{
      attr: 'target',
      val: '_blank'
    }],
    children: [linkedinIcon]
  });
  const footer = (0, _modules.createElement)('footer', {
    children: [avatar, name, title, githubAnchor, linkedinAnchor]
  });
  return footer;
};

var _default = footer;
exports.default = _default;
},{"../../modules":"scripts/modules/index.js","../../../images/victor.png":"images/victor.png","../../../images/linkedin.png":"images/linkedin.png","../../../images/github.png":"images/github.png"}],"scripts/components/globals/load.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = require("../../modules");

const load = () => {
  const emptyDiv = (0, _modules.createElement)('div', {});
  const loadingRing = (0, _modules.createElement)('div', {
    classNames: ['loading-ring'],
    children: [emptyDiv, emptyDiv, emptyDiv, emptyDiv]
  });
  const dot = (0, _modules.createElement)('span', {
    text: '.'
  });
  const loadingText = (0, _modules.createElement)('h2', {
    classNames: ['loading-text'],
    text: 'Loading',
    children: [dot, dot, dot]
  });
  const div = (0, _modules.createElement)('div', {
    children: [loadingRing, loadingText]
  });
  const loadingContainer = (0, _modules.createElement)('div', {
    classNames: ['loading-container'],
    children: [div]
  });
  return loadingContainer;
};

var _default = load;
exports.default = _default;
},{"../../modules":"scripts/modules/index.js"}],"images/location.png":[function(require,module,exports) {
module.exports = "/location.d4a002e3.png";
},{}],"scripts/components/screens/homeScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = require("../../modules");

var _location = _interopRequireDefault(require("../../../images/location.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const homeScreen = () => {
  const locationError = (0, _modules.createElement)('p', {
    text: 'Vul alsjeblieft een geldige locatie in.',
    classNames: ['location-error']
  });
  const minuteError = (0, _modules.createElement)('p', {
    text: 'Vul alsjeblieft een geldig aantal minuten in (<60).',
    classNames: ['minute-error']
  });
  const locationInput = (0, _modules.createElement)('input', {
    classNames: ['city'],
    attributes: [{
      attr: 'type',
      val: 'text'
    }, {
      attr: 'placeholder',
      val: 'Huidige locatie'
    }]
  });
  const locationImg = (0, _modules.createElement)('img', {
    classNames: ['geolocation'],
    src: _location.default
  });
  const locationLabel = (0, _modules.createElement)('label', {
    text: 'Locatie',
    children: [locationInput, locationImg, locationError]
  });
  const timeInput = (0, _modules.createElement)('input', {
    classNames: ['minutes'],
    attributes: [{
      attr: 'type',
      val: 'number'
    }, {
      attr: 'placeholder',
      val: 'Reistijd in minuten'
    }]
  });
  const timeLabel = (0, _modules.createElement)('label', {
    text: 'Reistijd',
    children: [timeInput, minuteError]
  });
  const button = (0, _modules.createElement)('button', {
    text: 'Bekijk resultaat',
    attributes: [{
      attr: 'type',
      val: 'submit'
    }]
  });
  const form = (0, _modules.createElement)('form', {
    children: [locationLabel, timeLabel, button]
  });
  const result = (0, _modules.createElement)('div', {
    classNames: ['result']
  });
  const main = (0, _modules.createElement)('main', {
    children: [form, result]
  });
  return main;
};

var _default = homeScreen;
exports.default = _default;
},{"../../modules":"scripts/modules/index.js","../../../images/location.png":"images/location.png"}],"scripts/components/screens/countriesScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = require("../../modules");

var _router = require("../../router");

const countriesScreen = async () => {
  const url = 'https://restcountries.eu/rest/v2/region/europe',
        data = await (0, _modules.getData)(url);
  const countries = data.map(country => {
    return {
      'country': country.translations.nl,
      'capital': country.capital,
      'flag': country.flag,
      'lat': country.latlng[0],
      'lng': country.latlng[1]
    };
  });
  const elements = countries.map(country => {
    const title = (0, _modules.createElement)('h4', {
      text: country.country
    });
    const image = (0, _modules.createElement)('img', {
      src: country.flag,
      classNames: ['country-flag']
    });
    const button = (0, _modules.createElement)('button', {
      text: "Meer informatie over ".concat(country.country),
      attributes: [{
        attr: 'route',
        val: "/location?lat=".concat(country.lat, "&lng=").concat(country.lng, "&country=").concat(country.country)
      }],
      eventListener: {
        on: 'click',
        func: _router.navigator
      }
    });
    return (0, _modules.createElement)('div', {
      classNames: ['country-block'],
      children: [title, image, button]
    });
  });
  const countryContainer = (0, _modules.createElement)('div', {
    classNames: ['country-container'],
    children: elements
  });
  const container = (0, _modules.createElement)('main', {
    children: [countryContainer]
  });
  return container;
};

var _default = countriesScreen;
exports.default = _default;
},{"../../modules":"scripts/modules/index.js","../../router":"scripts/router/index.js"}],"scripts/components/screens/detailScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = require("../../modules");

const detailScreen = (city, data) => {
  const svgWidth = 600,
        svgHeight = 300,
        svgNamespace = 'http://www.w3.org/2000/svg',
        barWidth = 100,
        currentDate = new Date(),
        filteredData = data.filter((_, i) => i % 6 === 0);
  const title = (0, _modules.createElement)('h1', {
    text: "Het weer in ".concat(city)
  });
  const bars = filteredData.map((minute, index) => {
    const barSize = minute.precipitation * 30,
          rainTime = new Date(currentDate.getTime() + index * 10 * 60000),
          formatRainTime = rainTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    const rectangle = (0, _modules.createElement)('rect', {
      attributes: [{
        attr: 'y',
        val: svgHeight - barSize
      }, {
        attr: 'height',
        val: barSize
      }, {
        attr: 'width',
        val: barWidth - 2
      }, {
        attr: 'transform',
        val: "translate(".concat([barWidth * index, 0], ")")
      }],
      namespace: svgNamespace
    });
    const text = (0, _modules.createElement)('text', {
      attributes: [{
        attr: 'x',
        val: 25
      }, {
        attr: 'y',
        val: 25
      }, {
        attr: 'height',
        val: barSize
      }, {
        attr: 'width',
        val: barWidth - 2
      }, {
        attr: 'transform',
        val: "translate(".concat([barWidth * index, 0], ")")
      }, {
        attr: 'style',
        val: "fill:".concat(barSize > 275 ? 'white' : 'black', ";")
      }],
      html: formatRainTime,
      namespace: svgNamespace
    });
    const mm = (0, _modules.createElement)('text', {
      attributes: [{
        attr: 'x',
        val: 20
      }, {
        attr: 'y',
        val: 285
      }, {
        attr: 'height',
        val: barSize
      }, {
        attr: 'width',
        val: barWidth - 2
      }, {
        attr: 'transform',
        val: "translate(".concat([barWidth * index, 0], ")")
      }, {
        attr: 'style',
        val: "fill:".concat(barSize > 20 ? 'white' : 'black', ";")
      }],
      html: "".concat(Math.round(minute.precipitation * 10) / 10, " mm"),
      namespace: svgNamespace
    });
    return (0, _modules.createElement)('g', {
      children: [rectangle, text, mm],
      namespace: svgNamespace
    });
  });
  const svg = (0, _modules.createElement)('svg', {
    attributes: [{
      attr: 'width',
      val: svgWidth
    }, {
      attr: 'height',
      val: svgHeight
    }],
    namespace: svgNamespace,
    children: bars
  });
  return (0, _modules.createElement)('main', {
    children: [title, svg]
  });
};

var _default = detailScreen;
exports.default = _default;
},{"../../modules":"scripts/modules/index.js"}],"scripts/components/screens/fourOfourScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = require("../../modules");

const fourOfourScreen = () => {
  const title = (0, _modules.createElement)('h2', {
    classNames: ['404-message'],
    text: 'Oops.. deze pagina bestaat niet (meer).'
  });
  const main = (0, _modules.createElement)('main', {
    children: [title]
  });
  return main;
};

var _default = fourOfourScreen;
exports.default = _default;
},{"../../modules":"scripts/modules/index.js"}],"scripts/components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "header", {
  enumerable: true,
  get: function () {
    return _header.default;
  }
});
Object.defineProperty(exports, "footer", {
  enumerable: true,
  get: function () {
    return _footer.default;
  }
});
Object.defineProperty(exports, "load", {
  enumerable: true,
  get: function () {
    return _load.default;
  }
});
Object.defineProperty(exports, "homeScreen", {
  enumerable: true,
  get: function () {
    return _homeScreen.default;
  }
});
Object.defineProperty(exports, "countriesScreen", {
  enumerable: true,
  get: function () {
    return _countriesScreen.default;
  }
});
Object.defineProperty(exports, "detailScreen", {
  enumerable: true,
  get: function () {
    return _detailScreen.default;
  }
});
Object.defineProperty(exports, "fourOfourScreen", {
  enumerable: true,
  get: function () {
    return _fourOfourScreen.default;
  }
});

var _header = _interopRequireDefault(require("./globals/header"));

var _footer = _interopRequireDefault(require("./globals/footer"));

var _load = _interopRequireDefault(require("./globals/load"));

var _homeScreen = _interopRequireDefault(require("./screens/homeScreen"));

var _countriesScreen = _interopRequireDefault(require("./screens/countriesScreen"));

var _detailScreen = _interopRequireDefault(require("./screens/detailScreen"));

var _fourOfourScreen = _interopRequireDefault(require("./screens/fourOfourScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./globals/header":"scripts/components/globals/header.js","./globals/footer":"scripts/components/globals/footer.js","./globals/load":"scripts/components/globals/load.js","./screens/homeScreen":"scripts/components/screens/homeScreen.js","./screens/countriesScreen":"scripts/components/screens/countriesScreen.js","./screens/detailScreen":"scripts/components/screens/detailScreen.js","./screens/fourOfourScreen":"scripts/components/screens/fourOfourScreen.js"}],"scripts/views/home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = require("../modules");

var _config = require("../config");

var _components = require("../components");

const home = () => {
  (0, _modules.removeChildren)(document.body);
  document.body.append((0, _components.load)(), (0, _components.header)(), (0, _components.homeScreen)(), (0, _components.footer)());
  const form = document.querySelector('form'),
        geoButton = document.querySelector('.geolocation'),
        city = form.querySelectorAll('input')[0],
        neededMinutes = form.querySelectorAll('input')[1],
        loading = document.querySelector('.loading-container'),
        minuteError = document.querySelector('.minute-error'),
        locationError = document.querySelector('.location-error');
  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (city.value) {
      locationError.classList.remove('error');
    } else {
      locationError.classList.add('error');
      return;
    }

    if (neededMinutes.value && neededMinutes.value <= 60) {
      minuteError.classList.remove('error');
    } else {
      minuteError.classList.add('error');
      return;
    }

    loading.classList.add('loading');
    const coords = await (0, _modules.getCoords)(city.value);

    if (!coords) {
      loading.classList.remove('loading');
      locationError.classList.add('error');
      return;
    }

    const weatherURL = "".concat(_config.weatherEndpoint, "lat=").concat(coords.lat, "&lon=").concat(coords.lng, "&exclude=").concat(_config.exclude, "&appid=").concat(_config.weatherAPIKey),
          weatherData = await (0, _modules.getData)(weatherURL);

    if (!weatherData) {
      loading.classList.remove('loading');
      locationError.classList.add('error');
      return;
    }

    (0, _modules.renderOutcome)((0, _modules.calcDryMinutes)(weatherData.minutely, neededMinutes.value), city.value, coords);
  });
  geoButton.addEventListener('click', () => {
    loading.classList.add('loading');
    navigator.geolocation.getCurrentPosition(async pos => {
      city.value = await (0, _modules.getCity)(pos.coords.latitude, pos.coords.longitude);
    });
  });
};

var _default = home;
exports.default = _default;
},{"../modules":"scripts/modules/index.js","../config":"scripts/config/index.js","../components":"scripts/components/index.js"}],"scripts/views/location.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../config");

var _modules = require("../modules");

var _components = require("../components");

const location = async (lat, lng, country) => {
  (0, _modules.removeChildren)(document.body);
  document.body.append((0, _components.load)(), (0, _components.header)());

  if (lat && lng) {
    const weatherURL = "".concat(_config.weatherEndpoint, "lat=").concat(lat, "&lon=").concat(lng, "&exclude=").concat(_config.exclude, "&appid=").concat(_config.weatherAPIKey),
          weatherData = await (0, _modules.getData)(weatherURL);
    const screen = (0, _components.detailScreen)(country ? country : await (0, _modules.getCity)(lat, lng), weatherData.minutely);
    document.body.append(screen);
  } else {
    document.body.append(await (0, _components.countriesScreen)());
  }

  document.body.append((0, _components.footer)());
};

var _default = location;
exports.default = _default;
},{"../config":"scripts/config/index.js","../modules":"scripts/modules/index.js","../components":"scripts/components/index.js"}],"scripts/views/fourOfour.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = require("../modules");

var _components = require("../components");

const fourOfour = () => {
  (0, _modules.removeChildren)(document.body);
  document.body.append((0, _components.load)(), (0, _components.header)(), (0, _components.fourOfourScreen)(), (0, _components.footer)());
};

var _default = fourOfour;
exports.default = _default;
},{"../modules":"scripts/modules/index.js","../components":"scripts/components/index.js"}],"scripts/views/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "home", {
  enumerable: true,
  get: function () {
    return _home.default;
  }
});
Object.defineProperty(exports, "location", {
  enumerable: true,
  get: function () {
    return _location.default;
  }
});
Object.defineProperty(exports, "fourOfour", {
  enumerable: true,
  get: function () {
    return _fourOfour.default;
  }
});

var _home = _interopRequireDefault(require("./home"));

var _location = _interopRequireDefault(require("./location"));

var _fourOfour = _interopRequireDefault(require("./fourOfour"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./home":"scripts/views/home.js","./location":"scripts/views/location.js","./fourOfour":"scripts/views/fourOfour.js"}],"scripts/router/router.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require(".");

var _views = require("../views");

const router = () => {
  const urlParameter = new URLSearchParams(window.location.search),
        currentPath = window.location.pathname,
        route = _.routes.filter(route => route.path === currentPath)[0];

  if (route && route.params) {
    const params = route.params.map(param => urlParameter.get(param));
    route.view(...params);
  } else if (route) {
    route.view();
  } else {
    (0, _views.fourOfour)();
  }
};

var _default = router;
exports.default = _default;
},{".":"scripts/router/index.js","../views":"scripts/views/index.js"}],"scripts/router/navigator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require(".");

var _views = require("../views");

const navigator = e => {
  const routePath = e.target.attributes.route.value,
        formattedRoutePath = routePath.replace(/\?.*/, ''),
        routeInfo = _.routes.filter(route => route.path === formattedRoutePath)[0];

  if (!routeInfo) {
    (0, _views.fourOfour)();
  } else {
    window.history.pushState({}, '', routePath);
    (0, _.router)();
  }
};

var _default = navigator;
exports.default = _default;
},{".":"scripts/router/index.js","../views":"scripts/views/index.js"}],"scripts/router/routes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _views = require("../views");

const routes = [{
  path: '/',
  name: 'Home',
  view: _views.home
}, {
  path: '/location',
  name: 'Location',
  params: ['lat', 'lng', 'country'],
  view: _views.location
}];
var _default = routes;
exports.default = _default;
},{"../views":"scripts/views/index.js"}],"scripts/router/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "router", {
  enumerable: true,
  get: function () {
    return _router.default;
  }
});
Object.defineProperty(exports, "navigator", {
  enumerable: true,
  get: function () {
    return _navigator.default;
  }
});
Object.defineProperty(exports, "routes", {
  enumerable: true,
  get: function () {
    return _routes.default;
  }
});

var _router = _interopRequireDefault(require("./router"));

var _navigator = _interopRequireDefault(require("./navigator"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./router":"scripts/router/router.js","./navigator":"scripts/router/navigator.js","./routes":"scripts/router/routes.js"}],"scripts/app.js":[function(require,module,exports) {
"use strict";

var _router = require("./router");

(0, _router.router)();
},{"./router":"scripts/router/index.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61405" + '/');

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
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/app.js"], null)
//# sourceMappingURL=/app.c09d0a7b.js.map