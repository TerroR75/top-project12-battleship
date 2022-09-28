/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/GameBoard.js":
/*!**********************************!*\
  !*** ./src/classes/GameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/classes/Ship.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _generateShips = /*#__PURE__*/new WeakSet();

var GameBoard = /*#__PURE__*/function () {
  function GameBoard(humanOrAi) {
    _classCallCheck(this, GameBoard);

    _classPrivateMethodInitSpec(this, _generateShips);

    this.tileArray = [];
    this.init();
    this.player = humanOrAi;
  }

  _createClass(GameBoard, [{
    key: "init",
    value: function init() {
      for (var i = 0; i < 100; i++) {
        this.tileArray.push({
          isHit: false,
          hasShip: false,
          ship: null
        });
      }
    }
  }, {
    key: "hit",
    value: function hit(index) {
      if (this.tileArray[index].isHit === true) {
        return;
      } else {
        this.tileArray[index].isHit = true;
      }

      if (this.tileArray[index].hasShip) {
        this.tileArray[index].ship.isHit = true;
        this.tileArray[index].ship.hit();
      }
    }
  }, {
    key: "randomPlacement",
    value: function randomPlacement() {
      var _this = this;

      var ships = _classPrivateMethodGet(this, _generateShips, _generateShips2).call(this);

      console.log(ships);

      for (var i = 0; i < ships.length; i++) {
        var axis = _utils_utils__WEBPACK_IMPORTED_MODULE_1__.utils.randomIntFromInterval(0, 1); // 0 - Horizontal, 1 - Vertical

        var boardIndex = _utils_utils__WEBPACK_IMPORTED_MODULE_1__.utils.randomIntFromInterval(0, this.tileArray.length - 1);
        console.log(axis);
        console.log(boardIndex);

        if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__.utils.shipCanBePlaced(axis, boardIndex, ships[i].length)) {
          var positions = [boardIndex];
          var nextPos = boardIndex;

          for (var j = 1; j < ships[i].length; j++) {
            nextPos += _utils_utils__WEBPACK_IMPORTED_MODULE_1__.utils.returnPosOffset(axis);
            positions.push(nextPos);
          }

          console.log(positions);

          if (positions.some(function (pos) {
            return _this.tileArray[pos].hasShip;
          })) {
            i--;
          } else {
            this.addShip(ships[i], positions);
          }
        } else {
          i--;
        }
      }
    }
  }, {
    key: "addShip",
    value: function addShip(ship, positions) {
      for (var i = 0; i < ship.length; i++) {
        ship.position.push({
          pos: positions[i],
          isHit: false
        });
        this.tileArray[positions[i]].hasShip = true;
        this.tileArray[positions[i]].ship = ship;
      }
    }
  }]);

  return GameBoard;
}();

function _generateShips2() {
  var shipNames = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol_Boat'];
  var ships = [];

  for (var i = 0; i < shipNames.length; i++) {
    var newShip = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"]("".concat(shipNames[i]));
    ships.push(newShip);
  }

  return ships;
}



/***/ }),

/***/ "./src/classes/Ship.js":
/*!*****************************!*\
  !*** ./src/classes/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Ship = /*#__PURE__*/function () {
  function Ship(type) {
    _classCallCheck(this, Ship);

    this.type = type;
    this.sunk = false;
    this.length = this.determineLength(this.type);
    this.position = [];
    this.hitTimes = 0;
  }

  _createClass(Ship, [{
    key: "determineLength",
    value: function determineLength(type) {
      switch (type) {
        case 'Carrier':
          return 5;

        case 'Battleship':
          return 4;

        case 'Destroyer':
          return 3;

        case 'Submarine':
          return 3;

        case 'Patrol_Boat':
          return 2;

        default:
          return 0;
      }
    }
  }, {
    key: "hit",
    value: function hit() {
      this.hitTimes += 1;
      this.checkIfSunken();
    }
  }, {
    key: "checkIfSunken",
    value: function checkIfSunken() {
      if (this.hitTimes === this.length) {
        this.sunk = true;
      } else {
        this.sunk = false;
      }
    }
  }]);

  return Ship;
}();



/***/ }),

/***/ "./src/domManip/GameBoard.js":
/*!***********************************!*\
  !*** ./src/domManip/GameBoard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendTiles": () => (/* binding */ appendTiles),
/* harmony export */   "refreshTiles": () => (/* binding */ refreshTiles)
/* harmony export */ });
function appendTiles(gameBoardDOM, gameBoardObject) {
  for (var i = 0; i < gameBoardObject.tileArray.length; i++) {
    var tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.id = i;

    if (gameBoardObject.player !== 'ai') {
      if (gameBoardObject.tileArray[i].hasShip === true) {
        tile.classList.add('hasShip');
      }

      if (gameBoardObject.tileArray[i].ship !== null) {
        if (gameBoardObject.tileArray[i].ship.type === 'Carrier') {
          tile.classList.add('carrier');
        } else if (gameBoardObject.tileArray[i].ship.type === 'Battleship') {
          tile.classList.add('battleship');
        } else if (gameBoardObject.tileArray[i].ship.type === 'Destroyer') {
          tile.classList.add('destroyer');
        } else if (gameBoardObject.tileArray[i].ship.type === 'Submarine') {
          tile.classList.add('submarine');
        } else {
          tile.classList.add('patrol-boat');
        }
      }
    } // console.log(gameBoardObject.tileArray[i]);


    gameBoardDOM.appendChild(tile);
  }
}
function refreshTiles(gameBoardObject) {
  var tiles = document.querySelectorAll('.tile');

  for (var i = 0; i < gameBoardObject.tileArray.length; i++) {
    if (gameBoardObject.tileArray[i].hasShip) tiles[i].classList.add('hasShip');

    if (gameBoardObject.tileArray[i].isHit) {
      if (gameBoardObject.tileArray[i].hasShip && gameBoardObject.tileArray[i].isHit) {
        tiles[i].classList.add('hitShip');
      } else {
        tiles[i].classList.add('hit');
      }
    }
  }
}

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "utils": () => (/* binding */ utils)
/* harmony export */ });
function randomIntFromInterval(min, max) {
  //
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shipCanBePlaced(axis, boardIndex, shipLength) {
  if (axis === 0) {
    var shipsRear = boardIndex + (shipLength - 1) * returnPosOffset(0);

    if (boardIndex >= 0 && boardIndex <= 9) {
      return shipsRear > 9 ? false : true;
    } else if (boardIndex >= 10 && boardIndex <= 19) {
      return shipsRear > 19 ? false : true;
    } else if (boardIndex >= 20 && boardIndex <= 29) {
      return shipsRear > 29 ? false : true;
    } else if (boardIndex >= 30 && boardIndex <= 39) {
      return shipsRear > 39 ? false : true;
    } else if (boardIndex >= 40 && boardIndex <= 49) {
      return shipsRear > 49 ? false : true;
    } else if (boardIndex >= 50 && boardIndex <= 59) {
      return shipsRear > 59 ? false : true;
    } else if (boardIndex >= 60 && boardIndex <= 69) {
      return shipsRear > 69 ? false : true;
    } else if (boardIndex >= 70 && boardIndex <= 79) {
      return shipsRear > 79 ? false : true;
    } else if (boardIndex >= 80 && boardIndex <= 89) {
      return shipsRear > 89 ? false : true;
    } else if (boardIndex >= 90 && boardIndex <= 99) {
      return shipsRear > 99 ? false : true;
    } else {
      return false;
    }
  } else {
    var _shipsRear = boardIndex + (shipLength - 1) * returnPosOffset(10);

    if (shipLength === 5) {
      return boardIndex >= 60 ? false : true;
    } else if (shipLength === 4) {
      return boardIndex >= 70 ? false : true;
    } else if (shipLength === 3) {
      return boardIndex >= 80 ? false : true;
    } else if (shipLength === 2) {
      return boardIndex >= 90 ? false : true;
    } else {
      return false;
    }
  }
}

function returnPosOffset(axis) {
  if (axis === 0) {
    return 1;
  } else {
    return 10;
  }
}

var utils = {
  randomIntFromInterval: randomIntFromInterval,
  shipCanBePlaced: shipCanBePlaced,
  returnPosOffset: returnPosOffset
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: #272727;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.gameWindow {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 100px;\n}\n.gameWindow .playerBoard,\n.gameWindow .aiBoard {\n  width: 500px;\n  height: 500px;\n  border: 1px solid white;\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.gameWindow .playerBoard .tile.hit:before,\n.gameWindow .aiBoard .tile.hit:before {\n  font-size: 3rem;\n  content: \"•\";\n  color: white;\n  position: relative;\n  left: 15px;\n  bottom: 5px;\n}\n.gameWindow .playerBoard .tile.hitShip:before,\n.gameWindow .aiBoard .tile.hitShip:before {\n  font-size: 3rem;\n  content: \"•\";\n  color: red;\n  position: relative;\n  left: 15px;\n  bottom: 5px;\n}\n.gameWindow .playerBoard .tile {\n  border: 1px solid rgba(255, 255, 255, 0.377);\n  width: 50px;\n  height: 50px;\n  margin: 0;\n  box-sizing: border-box;\n  user-select: none;\n}\n.gameWindow .playerBoard .carrier {\n  background: rgb(255, 255, 255) !important;\n}\n.gameWindow .playerBoard .battleship {\n  background: rgb(230, 230, 230) !important;\n}\n.gameWindow .playerBoard .destroyer {\n  background: rgb(210, 210, 210) !important;\n}\n.gameWindow .playerBoard .submarine {\n  background: rgb(190, 190, 190) !important;\n}\n.gameWindow .playerBoard .patrol-boat {\n  background: rgb(170, 170, 170) !important;\n}\n.gameWindow .aiBoard {\n  border: 1px solid green;\n}\n.gameWindow .aiBoard .tile {\n  border: 1px solid rgba(0, 128, 0, 0.377);\n  width: 50px;\n  height: 50px;\n  margin: 0;\n  box-sizing: border-box;\n  user-select: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,UAAA;EACA,SAAA;AAEJ;;AACA;EACI,yBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAEJ;;AACA;EACI,aAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAEJ;AAAI;;EAEI,YAAA;EACA,aAAA;EACA,uBAAA;EACA,aAAA;EACA,eAAA;EACA,cAAA;AAER;AAAQ;;EACI,eAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;AAGZ;AAAQ;;EACI,eAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;AAGZ;AAEQ;EACI,4CAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,iBAAA;AAAZ;AAGQ;EACI,yCAAA;AADZ;AAIQ;EACI,yCAAA;AAFZ;AAKQ;EACI,yCAAA;AAHZ;AAMQ;EACI,yCAAA;AAJZ;AAOQ;EACI,yCAAA;AALZ;AASI;EACI,uBAAA;AAPR;AASQ;EACI,wCAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,iBAAA;AAPZ","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    background-color: #272727;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.gameWindow {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 100px;\r\n\r\n    .playerBoard,\r\n    .aiBoard {\r\n        width: 500px;\r\n        height: 500px;\r\n        border: 1px solid white;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        flex-shrink: 0;\r\n\r\n        .tile.hit:before {\r\n            font-size: 3rem;\r\n            content: '•';\r\n            color: white;\r\n            position: relative;\r\n            left: 15px;\r\n            bottom: 5px;\r\n        }\r\n\r\n        .tile.hitShip:before {\r\n            font-size: 3rem;\r\n            content: '•';\r\n            color: red;\r\n            position: relative;\r\n            left: 15px;\r\n            bottom: 5px;\r\n        }\r\n    }\r\n\r\n    .playerBoard {\r\n        .tile {\r\n            border: 1px solid rgba(255, 255, 255, 0.377);\r\n            width: 50px;\r\n            height: 50px;\r\n            margin: 0;\r\n            box-sizing: border-box;\r\n            user-select: none;\r\n        }\r\n\r\n        .carrier {\r\n            background: rgb(255, 255, 255) !important;\r\n        }\r\n\r\n        .battleship {\r\n            background: rgb(230, 230, 230) !important;\r\n        }\r\n\r\n        .destroyer {\r\n            background: rgb(210, 210, 210) !important;\r\n        }\r\n\r\n        .submarine {\r\n            background: rgb(190, 190, 190) !important;\r\n        }\r\n\r\n        .patrol-boat {\r\n            background: rgb(170, 170, 170) !important;\r\n        }\r\n    }\r\n\r\n    .aiBoard {\r\n        border: 1px solid green;\r\n\r\n        .tile {\r\n            border: 1px solid rgba(0, 128, 0, 0.377);\r\n            width: 50px;\r\n            height: 50px;\r\n            margin: 0;\r\n            box-sizing: border-box;\r\n            user-select: none;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiBoard": () => (/* binding */ aiBoard),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard)
/* harmony export */ });
/* harmony import */ var _classes_GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/GameBoard */ "./src/classes/GameBoard.js");
/* harmony import */ var _classes_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Ship */ "./src/classes/Ship.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _domManip_GameBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManip/GameBoard */ "./src/domManip/GameBoard.js");




var playerBoard = document.querySelector('.playerBoard');
var aiBoard = document.querySelector('.aiBoard');
var gameBoard = new _classes_GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]('player');
gameBoard.randomPlacement();
(0,_domManip_GameBoard__WEBPACK_IMPORTED_MODULE_3__.appendTiles)(playerBoard, gameBoard);
(0,_domManip_GameBoard__WEBPACK_IMPORTED_MODULE_3__.refreshTiles)(gameBoard);
var gameBoardAi = new _classes_GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]('ai');
gameBoardAi.randomPlacement();
(0,_domManip_GameBoard__WEBPACK_IMPORTED_MODULE_3__.appendTiles)(aiBoard, gameBoardAi);
})();

/******/ })()
;
//# sourceMappingURL=main5ef8a2add32408ce93ca.js.map