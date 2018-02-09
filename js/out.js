/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BinaryCalculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculator2 = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BinaryCalculator = function (_Calculator) {
    _inherits(BinaryCalculator, _Calculator);

    function BinaryCalculator(settings) {
        _classCallCheck(this, BinaryCalculator);

        var _this = _possibleConstructorReturn(this, (BinaryCalculator.__proto__ || Object.getPrototypeOf(BinaryCalculator)).call(this, settings));

        console.log(_this.getName());
        return _this;
    }

    /* Method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */


    _createClass(BinaryCalculator, [{
        key: "add",
        value: function add(numberX, numberY) {
            var result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (var i = numberX.length - 1; i >= 0; i--) {
                var carryBit = numberX[i] + numberY[i] + result[i];
                if (carryBit === 2) {
                    result[i] = 0;
                    result[i - 1] = 1;
                } else if (carryBit === 3) {
                    result[i] = 1;
                    result[i - 1] = 1;
                } else {
                    result[i] = carryBit;
                }
            }
            return result;
        }

        /* Method changing number
        *  @param {jQuery element} root Parent element
        */

    }, {
        key: "changeNumber",
        value: function changeNumber(root) {
            var _this2 = this;

            var activeElement = root.find('.active');
            activeElement.removeClass("active");
            activeElement.siblings().addClass("active");
            root.children(":first-child").slideToggle(function () {
                _this2.checkNumber();
                _this2.updateResult();
            });
        }

        /* Method changing Result
        */

    }, {
        key: "updateResult",
        value: function updateResult() {
            var root = this.$calculatorDOMElement;
            var $resultNumber = root.children(".group-number").children(".result-bit");
            for (var i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
                var valueResult = parseInt($resultNumber.eq(j).find(".active").text());
                if (this.resultNumberArray[i] != valueResult) {
                    var activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
                    activeElement.siblings().addClass("active");
                    $resultNumber.eq(j).children(":first-child").slideToggle();
                }
            }
        }
    }]);

    return BinaryCalculator;
}(_Calculator2.Calculator);

exports.BinaryCalculator = BinaryCalculator;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* abstract */var Calculator = function () {
    function Calculator(selectorName) {
        _classCallCheck(this, Calculator);

        this.name = selectorName;
        this.$calculatorDOMElement = $(selectorName);

        this.firstNumberArray = [];
        this.secondNumberArray = [];
        this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.initEvents();
    }

    /* Abstract method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */


    _createClass(Calculator, [{
        key: "add",
        value: function add(numberX, numberY) {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
            return [0, 0, 0, 0, 0, 0, 0, 0];
        }

        /* Abstract method changing number
        *  @param {jQuery element} root Parent element
        */

    }, {
        key: "changeNumber",
        value: function changeNumber(root) {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
        }

        /* Abstract method changing Result
        */

    }, {
        key: "updateResult",
        value: function updateResult() {
            console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
        }

        /* Get the name of calculator selector
        *  @return {string}
        */

    }, {
        key: "getName",
        value: function getName() {
            return "Hello I am " + this.name;
        }

        /* Check what number is set in both numbers and add
        *  @return {string}
        */

    }, {
        key: "checkNumber",
        value: function checkNumber() {
            var root = this.$calculatorDOMElement;
            var $firstNumber = root.children(".group-number").children("label:first-child");
            var $secondNumber = root.children(".group-number").children("label:nth-child(2)");
            var $resultNumber = root.children(".group-number").children(".result-bit");

            for (var i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
                this.firstNumberArray[i] = parseInt($firstNumber.eq(j).find('.active').text());
                this.secondNumberArray[i] = parseInt($secondNumber.eq(j).find('.active').text());
                this.resultNumberArray[i] = parseInt($resultNumber.eq(j).find('.active').text());
            }
            this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
        }

        /* Set event click on number
        */

    }, {
        key: "initEvents",
        value: function initEvents() {
            var _this = this;

            this.$calculatorDOMElement.find(".display-number").on('click', function (event) {
                var parentLabel = $(event.target).parent(".display-number");
                _this.changeNumber(parentLabel);
            });
        }
    }]);

    return Calculator;
}();

exports.Calculator = Calculator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(0);
__webpack_require__(5);
module.exports = __webpack_require__(1);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BinaryCalculator = __webpack_require__(0);

__webpack_require__(4);

$(document).ready(function () {
    var bitCalc = new _BinaryCalculator.BinaryCalculator(".binary-calculator");
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (2:12)\nYou may need an appropriate loader to handle this file type.\n| // fonts\n| $font-number: Arial;\n| $font-text: Tahoma;\n| ");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DecCalculator = function DecCalculator() {
    _classCallCheck(this, DecCalculator);
};

/***/ })
/******/ ]);
//# sourceMappingURL=out.js.map