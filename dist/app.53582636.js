parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wqgI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=(e,t)=>{let l=0,r=null;const u=e.reduce((e,t,l)=>(0===t.precipitation&&e.push(l),e),[]);return u.forEach((e,o)=>{l>=t||(e-1===u[o-1]?(l++,null===r&&(r=e)):(l=0,r=null))}),l>=t?r:null};var t=e;exports.default=t;
},{}],"bop1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=(e,t)=>{let{classNames:r,attributes:n,text:a,src:s,href:c,children:d,parent:l,eventListener:o,namespace:i,html:u}=t;const p=i?document.createElementNS(i,e):document.createElement(e);return r&&r.forEach(e=>p.classList.add(e)),n&&n.forEach(e=>p.setAttribute(e.attr,e.val)),u&&(p.innerHTML=u),a&&(p.innerText=a),s&&(p.src=s),c&&(p.href=c),d&&d.forEach(e=>p.appendChild(e)),l&&l.appendChild(p),o&&p.addEventListener(o.on,o.func),p};var t=e;exports.default=t;
},{}],"s0Tx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.exclude=exports.locationEndpoint=exports.weatherEndpoint=exports.locationAPIKey=exports.weatherAPIKey=void 0;const e="c6d3274323a8201fd1939ef229fc0078",t="c2b0d7efe5404c009235e07bcaf81a3a",o="https://api.openweathermap.org/data/2.5/onecall?",a="https://api.opencagedata.com/geocode/v1/json?",r="current,hourly,daily,alerts";exports.exclude=r,exports.locationEndpoint=a,exports.weatherEndpoint=o,exports.locationAPIKey=t,exports.weatherAPIKey=e;
},{}],"SIFP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("."),t=require("../config");const o=o=>{const r="".concat(t.locationEndpoint,"q=").concat(o,"&key=").concat(t.locationAPIKey);return(0,e.getData)(r).then(e=>e.results[0].geometry).catch(e=>null)};var r=o;exports.default=r;
},{".":"uu2P","../config":"s0Tx"}],"tgpC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=e=>fetch(e).then(e=>e.json()).catch(e=>null);var t=e;exports.default=t;
},{}],"ZW5B":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("."),t=require("../config");const o=(o,c)=>{return document.querySelector(".loading-container").classList.remove("loading"),(0,e.getData)("".concat(t.locationEndpoint,"q=").concat(o,"+").concat(c,"&key=").concat(t.locationAPIKey)).then(e=>e.results[0].components.city).catch(e=>null)};var c=o;exports.default=c;
},{".":"uu2P","../config":"s0Tx"}],"LxOH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};var t=e;exports.default=t;
},{}],"ZMqA":[function(require,module,exports) {
module.exports="wet-shirt.cde7df9a.png";
},{}],"uvHa":[function(require,module,exports) {
module.exports="dry-shirt.2e37475f.png";
},{}],"zkbS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("."),t=require("../router"),r=o(require("../../images/wet-shirt.png")),n=o(require("../../images/dry-shirt.png"));function o(e){return e&&e.__esModule?e:{default:e}}const a=(o,a,i)=>{const l=document.querySelector(".result"),u=document.querySelector(".loading-container");(0,e.removeChildren)(l);const c=new Date,s=new Date(c.getTime()+6e4*(o-1)).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});let d;d=o&&1!==o?"Als je om ".concat(s," vertrekt blijf je droog!"):1===o?"Als je nu vertrekt blijf je droog!":"Je kunt het komende uur niet vertrekken zonder nat te worden...",(0,e.createElement)("h2",{text:d,parent:l}),(0,e.createElement)("img",{src:o?n.default:r.default,classNames:["result-image"],parent:l}),(0,e.createElement)("button",{text:"Meer informatie over ".concat(a),attributes:[{attr:"route",val:"/location?lat=".concat(i.lat,"&lng=").concat(i.lng)}],eventListener:{on:"click",func:t.navigator},parent:l}),u.classList.remove("loading")};var i=a;exports.default=i;
},{".":"uu2P","../router":"xF9H","../../images/wet-shirt.png":"ZMqA","../../images/dry-shirt.png":"uvHa"}],"uu2P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"calcDryMinutes",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"createElement",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"getCoords",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"getData",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"getCity",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"removeChildren",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"renderOutcome",{enumerable:!0,get:function(){return i.default}});var e=a(require("./calcDryMinutes")),r=a(require("./createElement")),t=a(require("./getCoords")),n=a(require("./getData")),u=a(require("./getCity")),o=a(require("./removeChildren")),i=a(require("./renderOutcome"));function a(e){return e&&e.__esModule?e:{default:e}}
},{"./calcDryMinutes":"wqgI","./createElement":"bop1","./getCoords":"SIFP","./getData":"tgpC","./getCity":"ZW5B","./removeChildren":"LxOH","./renderOutcome":"zkbS"}],"J8r5":[function(require,module,exports) {
module.exports="umbrella.e94f7530.png";
},{}],"Avas":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../modules"),t=require("../../router"),r=n(require("../../../images/umbrella.png"));function n(e){return e&&e.__esModule?e:{default:e}}const a=()=>{const n=(0,e.createElement)("h1",{text:"Blijf ik droog?"}),a=(0,e.createElement)("img",{src:r.default}),o=(0,e.createElement)("button",{text:"Home",attributes:[{attr:"route",val:"/"}],eventListener:{on:"click",func:t.navigator}}),u=(0,e.createElement)("button",{text:"Landen",attributes:[{attr:"route",val:"/location"}],eventListener:{on:"click",func:t.navigator}});return(0,e.createElement)("header",{children:[a,n,o,u]})};var o=a;exports.default=o;
},{"../../modules":"uu2P","../../router":"xF9H","../../../images/umbrella.png":"J8r5"}],"Mt52":[function(require,module,exports) {
module.exports="victor.dbc1f982.png";
},{}],"SSPC":[function(require,module,exports) {
module.exports="linkedin.96e90d27.png";
},{}],"SrIw":[function(require,module,exports) {
module.exports="github.10ef161f.png";
},{}],"jBss":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../modules"),t=c(require("../../../images/victor.png")),r=c(require("../../../images/linkedin.png")),a=c(require("../../../images/github.png"));function c(e){return e&&e.__esModule?e:{default:e}}const i=()=>{const c=(0,e.createElement)("img",{classNames:["avatar"],src:t.default}),i=(0,e.createElement)("h3",{text:"Victor Boucher"}),n=(0,e.createElement)("h4",{text:"Frontend developer"}),l=(0,e.createElement)("img",{classNames:["icon"],src:a.default}),s=(0,e.createElement)("img",{classNames:["icon"],src:r.default}),o=(0,e.createElement)("a",{href:"https://github.com/BVictorB",attributes:[{attr:"target",val:"_blank"}],children:[l]}),u=(0,e.createElement)("a",{href:"https://www.linkedin.com/in/victor-boucher-18267813b/",attributes:[{attr:"target",val:"_blank"}],children:[s]});return(0,e.createElement)("footer",{children:[c,i,n,o,u]})};var n=i;exports.default=n;
},{"../../modules":"uu2P","../../../images/victor.png":"Mt52","../../../images/linkedin.png":"SSPC","../../../images/github.png":"SrIw"}],"UCTu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../modules");const t=()=>{const t=(0,e.createElement)("div",{}),r=(0,e.createElement)("div",{classNames:["loading-ring"],children:[t,t,t,t]}),a=(0,e.createElement)("span",{text:"."}),n=(0,e.createElement)("h2",{classNames:["loading-text"],text:"Loading",children:[a,a,a]}),l=(0,e.createElement)("div",{children:[r,n]});return(0,e.createElement)("div",{classNames:["loading-container"],children:[l]})};var r=t;exports.default=r;
},{"../../modules":"uu2P"}],"vPfT":[function(require,module,exports) {
module.exports="location.2d2625d1.png";
},{}],"e3yT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../modules"),t=a(require("../../../images/location.png"));function a(e){return e&&e.__esModule?e:{default:e}}const l=()=>{const a=(0,e.createElement)("p",{text:"Vul alsjeblieft een geldige locatie in.",classNames:["location-error"]}),l=(0,e.createElement)("p",{text:"Vul alsjeblieft een geldig aantal minuten in (<60).",classNames:["minute-error"]}),r=(0,e.createElement)("input",{classNames:["city"],attributes:[{attr:"type",val:"text"},{attr:"placeholder",val:"Huidige locatie"}]}),i=(0,e.createElement)("img",{classNames:["geolocation"],src:t.default}),n=(0,e.createElement)("label",{text:"Locatie",children:[r,i,a]}),s=(0,e.createElement)("input",{classNames:["minutes"],attributes:[{attr:"type",val:"number"},{attr:"placeholder",val:"Reistijd in minuten"}]}),c=(0,e.createElement)("label",{text:"Reistijd",children:[s,l]}),u=(0,e.createElement)("button",{text:"Bekijk resultaat",attributes:[{attr:"type",val:"submit"}]}),m=(0,e.createElement)("form",{children:[n,c,u]}),o=(0,e.createElement)("div",{classNames:["result"]});return(0,e.createElement)("main",{children:[m,o]})};var r=l;exports.default=r;
},{"../../modules":"uu2P","../../../images/location.png":"vPfT"}],"JTCk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../../modules"),e=require("../../router");const a=async()=>{const a=(await(0,t.getData)("https://restcountries.eu/rest/v2/region/europe")).map(t=>({country:t.translations.nl,capital:t.capital,flag:t.flag,lat:t.latlng[0],lng:t.latlng[1]})).map(a=>{const r=(0,t.createElement)("h4",{text:a.country}),n=(0,t.createElement)("img",{src:a.flag,classNames:["country-flag"]}),c=(0,t.createElement)("button",{text:"Meer informatie over ".concat(a.country),attributes:[{attr:"route",val:"/location?lat=".concat(a.lat,"&lng=").concat(a.lng,"&country=").concat(a.country)}],eventListener:{on:"click",func:e.navigator}});return(0,t.createElement)("div",{classNames:["country-block"],children:[r,n,c]})}),r=(0,t.createElement)("div",{classNames:["country-container"],children:a});return(0,t.createElement)("main",{children:[r]})};var r=a;exports.default=r;
},{"../../modules":"uu2P","../../router":"xF9H"}],"pcsJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../../modules");const e=(e,a)=>{const r="http://www.w3.org/2000/svg",l=new Date,n=a.filter((t,e)=>e%6==0),c=(0,t.createElement)("h1",{text:"Het weer in ".concat(e)}),i=n.map((e,a)=>{const n=30*e.precipitation,c=new Date(l.getTime()+10*a*6e4).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),i=(0,t.createElement)("rect",{attributes:[{attr:"y",val:300-n},{attr:"height",val:n},{attr:"width",val:98},{attr:"transform",val:"translate(".concat([100*a,0],")")}],namespace:r}),s=(0,t.createElement)("text",{attributes:[{attr:"x",val:25},{attr:"y",val:25},{attr:"height",val:n},{attr:"width",val:98},{attr:"transform",val:"translate(".concat([100*a,0],")")},{attr:"style",val:"fill:".concat(n>275?"white":"black",";")}],html:c,namespace:r}),o=(0,t.createElement)("text",{attributes:[{attr:"x",val:20},{attr:"y",val:285},{attr:"height",val:n},{attr:"width",val:98},{attr:"transform",val:"translate(".concat([100*a,0],")")},{attr:"style",val:"fill:".concat(n>20?"white":"black",";")}],html:"".concat(Math.round(10*e.precipitation)/10," mm"),namespace:r});return(0,t.createElement)("g",{children:[i,s,o],namespace:r})}),s=(0,t.createElement)("svg",{attributes:[{attr:"width",val:600},{attr:"height",val:300}],namespace:r,children:i});return(0,t.createElement)("main",{children:[c,s]})};var a=e;exports.default=a;
},{"../../modules":"uu2P"}],"fnrD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../modules");const t=()=>{const t=(0,e.createElement)("h2",{classNames:["404-message"],text:"Oops.. deze pagina bestaat niet (meer)."});return(0,e.createElement)("main",{children:[t]})};var r=t;exports.default=r;
},{"../../modules":"uu2P"}],"pghd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"header",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"footer",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"load",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"homeScreen",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"countriesScreen",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"detailScreen",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"fourOfourScreen",{enumerable:!0,get:function(){return c.default}});var e=f(require("./globals/header")),r=f(require("./globals/footer")),t=f(require("./globals/load")),n=f(require("./screens/homeScreen")),u=f(require("./screens/countriesScreen")),o=f(require("./screens/detailScreen")),c=f(require("./screens/fourOfourScreen"));function f(e){return e&&e.__esModule?e:{default:e}}
},{"./globals/header":"Avas","./globals/footer":"jBss","./globals/load":"UCTu","./screens/homeScreen":"e3yT","./screens/countriesScreen":"JTCk","./screens/detailScreen":"pcsJ","./screens/fourOfourScreen":"fnrD"}],"nRHW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../modules"),r=require("../config"),t=require("../components");const o=()=>{(0,e.removeChildren)(document.body),document.body.append((0,t.load)(),(0,t.header)(),(0,t.homeScreen)(),(0,t.footer)());const o=document.querySelector("form"),a=document.querySelector(".geolocation"),c=o.querySelectorAll("input")[0],n=o.querySelectorAll("input")[1],i=document.querySelector(".loading-container"),l=document.querySelector(".minute-error"),d=document.querySelector(".location-error");o.addEventListener("submit",async t=>{if(t.preventDefault(),!c.value)return void d.classList.add("error");if(d.classList.remove("error"),!(n.value&&n.value<=60))return void l.classList.add("error");l.classList.remove("error"),i.classList.add("loading");const o=await(0,e.getCoords)(c.value);if(!o)return i.classList.remove("loading"),void d.classList.add("error");const a="".concat(r.weatherEndpoint,"lat=").concat(o.lat,"&lon=").concat(o.lng,"&exclude=").concat(r.exclude,"&appid=").concat(r.weatherAPIKey),s=await(0,e.getData)(a);if(!s)return i.classList.remove("loading"),void d.classList.add("error");(0,e.renderOutcome)((0,e.calcDryMinutes)(s.minutely,n.value),c.value,o)}),a.addEventListener("click",()=>{i.classList.add("loading"),navigator.geolocation.getCurrentPosition(async r=>{c.value=await(0,e.getCity)(r.coords.latitude,r.coords.longitude)})})};var a=o;exports.default=a;
},{"../modules":"uu2P","../config":"s0Tx","../components":"pghd"}],"WtID":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../config"),t=require("../modules"),o=require("../components");const a=async(a,n,d)=>{if((0,t.removeChildren)(document.body),document.body.append((0,o.load)(),(0,o.header)()),a&&n){const c="".concat(e.weatherEndpoint,"lat=").concat(a,"&lon=").concat(n,"&exclude=").concat(e.exclude,"&appid=").concat(e.weatherAPIKey),r=await(0,t.getData)(c),i=(0,o.detailScreen)(d||await(0,t.getCity)(a,n),r.minutely);document.body.append(i)}else document.body.append(await(0,o.countriesScreen)());document.body.append((0,o.footer)())};var n=a;exports.default=n;
},{"../config":"s0Tx","../modules":"uu2P","../components":"pghd"}],"yjzW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../modules"),o=require("../components");const r=()=>{(0,e.removeChildren)(document.body),document.body.append((0,o.load)(),(0,o.header)(),(0,o.fourOfourScreen)(),(0,o.footer)())};var d=r;exports.default=d;
},{"../modules":"uu2P","../components":"pghd"}],"pyv3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"home",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"location",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"fourOfour",{enumerable:!0,get:function(){return t.default}});var e=u(require("./home")),r=u(require("./location")),t=u(require("./fourOfour"));function u(e){return e&&e.__esModule?e:{default:e}}
},{"./home":"nRHW","./location":"WtID","./fourOfour":"yjzW"}],"T7dG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("."),r=require("../views");const a=()=>{const a=new URLSearchParams(window.location.search),t=window.location.pathname,o=e.routes.filter(e=>e.path===t)[0];if(o&&o.params){const e=o.params.map(e=>a.get(e));o.view(...e)}else o?o.view():(0,r.fourOfour)()};var t=a;exports.default=t;
},{".":"xF9H","../views":"pyv3"}],"AOMC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("."),t=require("../views");const r=r=>{const o=r.target.attributes.route.value,u=o.replace(/\?.*/,"");e.routes.filter(e=>e.path===u)[0]?(window.history.pushState({},"",o),(0,e.router)()):(0,t.fourOfour)()};var o=r;exports.default=o;
},{".":"xF9H","../views":"pyv3"}],"g7Do":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../views");const t=[{path:"/",name:"Home",view:e.home},{path:"/location",name:"Location",params:["lat","lng","country"],view:e.location}];var o=t;exports.default=o;
},{"../views":"pyv3"}],"xF9H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"router",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"navigator",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"routes",{enumerable:!0,get:function(){return t.default}});var e=u(require("./router")),r=u(require("./navigator")),t=u(require("./routes"));function u(e){return e&&e.__esModule?e:{default:e}}
},{"./router":"T7dG","./navigator":"AOMC","./routes":"g7Do"}],"dPdB":[function(require,module,exports) {
"use strict";var r=require("./router");(0,r.router)();
},{"./router":"xF9H"}]},{},["dPdB"], null)
//# sourceMappingURL=app.53582636.js.map