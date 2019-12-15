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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ball = function () {\n  function Ball(x, y, radius, color) {\n    _classCallCheck(this, Ball);\n\n    this.x = x || 0;\n    this.y = y || 0;\n\n    this.originalX = x || 0;\n    this.originalY = y || 0;\n    this.vx = 0;\n    this.vy = 0;\n    this.radius = radius || 2;\n    this.color = color || '#ff6600';\n    this.friction = 1;\n    this.springFactor = 0.1;\n  }\n\n  _createClass(Ball, [{\n    key: 'setPos',\n    value: function setPos(x, y) {\n      this.x = x;\n      this.y = y;\n    }\n  }, {\n    key: 'think',\n    value: function think(mouse) {\n      var dx = this.x - mouse.x;\n      var dy = this.y - mouse.y;\n\n      var dist = Math.sqrt(dx * dx + dy * dy);\n      // interaction\n      if (dist < 30) {\n        var angle = Math.atan2(dy, dx);\n        var tx = mouse.x + Math.cos(angle) * 30;\n        var ty = mouse.y + Math.sin(angle) * 30;\n\n        this.vx += tx - this.x;\n        this.vy += ty - this.y;\n      }\n\n      // spring back\n      var dx1 = -(this.x - this.originalX);\n      var dy1 = -(this.y - this.originalY);\n\n      this.vx += dx1 * this.springFactor;\n      this.vy += dy1 * this.springFactor;\n\n      // friction\n      this.vx *= this.friction;\n      this.vy *= this.friction;\n\n      // actual move\n      this.x += this.vx;\n      this.y += this.vy;\n    }\n  }, {\n    key: 'draw',\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n      ctx.fillStyle = this.color;\n      ctx.fill();\n      ctx.closePath();\n      ctx.restore();\n    }\n  }]);\n\n  return Ball;\n}();\n\nexports.default = Ball;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYmFsbC5qcz8wZDM0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geCB8fCAwO1xuICAgIHRoaXMueSA9IHkgfHwgMDtcblxuICAgIHRoaXMub3JpZ2luYWxYID0geCB8fCAwO1xuICAgIHRoaXMub3JpZ2luYWxZID0geSB8fCAwO1xuICAgIHRoaXMudnggPSAwO1xuICAgIHRoaXMudnkgPSAwO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDI7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yIHx8ICcjZmY2NjAwJztcbiAgICB0aGlzLmZyaWN0aW9uID0gMTtcbiAgICB0aGlzLnNwcmluZ0ZhY3RvciA9IDAuMTtcbiAgfVxuICBzZXRQb3MoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuICB0aGluayhtb3VzZSkge1xuICAgIGNvbnN0IGR4ID0gdGhpcy54IC0gbW91c2UueDtcbiAgICBjb25zdCBkeSA9IHRoaXMueSAtIG1vdXNlLnk7XG5cbiAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgLy8gaW50ZXJhY3Rpb25cbiAgICBpZiAoZGlzdCA8IDMwKSB7XG4gICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgIGNvbnN0IHR4ID0gbW91c2UueCArIE1hdGguY29zKGFuZ2xlKSAqIDMwO1xuICAgICAgY29uc3QgdHkgPSBtb3VzZS55ICsgTWF0aC5zaW4oYW5nbGUpICogMzA7XG5cbiAgICAgIHRoaXMudnggKz0gdHggLSB0aGlzLng7XG4gICAgICB0aGlzLnZ5ICs9IHR5IC0gdGhpcy55O1xuICAgIH1cblxuICAgICAgICAvLyBzcHJpbmcgYmFja1xuICAgIGNvbnN0IGR4MSA9IC0odGhpcy54IC0gdGhpcy5vcmlnaW5hbFgpO1xuICAgIGNvbnN0IGR5MSA9IC0odGhpcy55IC0gdGhpcy5vcmlnaW5hbFkpO1xuXG4gICAgdGhpcy52eCArPSBkeDEgKiB0aGlzLnNwcmluZ0ZhY3RvcjtcbiAgICB0aGlzLnZ5ICs9IGR5MSAqIHRoaXMuc3ByaW5nRmFjdG9yO1xuXG5cbiAgICAgICAgLy8gZnJpY3Rpb25cbiAgICB0aGlzLnZ4ICo9IHRoaXMuZnJpY3Rpb247XG4gICAgdGhpcy52eSAqPSB0aGlzLmZyaWN0aW9uO1xuXG4gICAgICAgIC8vIGFjdHVhbCBtb3ZlXG4gICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgdGhpcy55ICs9IHRoaXMudnk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9iYWxsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUExREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Mouse = function Mouse(canvas) {\n  var _this = this;\n\n  _classCallCheck(this, Mouse);\n\n  this.x = 0;\n  this.y = 0;\n  var rect = canvas.getBoundingClientRect();\n\n  canvas.onmousemove = function (e) {\n    _this.x = e.clientX - rect.left;\n    _this.y = e.clientY - rect.top;\n  };\n};\n\nexports.default = Mouse;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbW91c2UuanM/ZTVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcbiAgICAgIHRoaXMueCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgIHRoaXMueSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbW91c2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mouse = __webpack_require__(1);\n\nvar _mouse2 = _interopRequireDefault(_mouse);\n\nvar _ball = __webpack_require__(0);\n\nvar _ball2 = _interopRequireDefault(_ball);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar canvas = document.getElementById('drawOnMe');\nvar ctx = canvas.getContext('2d');\nvar pos = new _mouse2.default(canvas);\nvar balls = [];\n\nvar mouse = new _ball2.default(0, 0, 30, 'green');\n\nfor (var i = 0; i < 50; i++) {\n  balls.push(new _ball2.default(200 + 100 * Math.cos(i * 2 * Math.PI / 50), 200 + 100 * Math.sin(i * 2 * Math.PI / 50)));\n}\n\nfunction ConnectDots(balls) {\n  ctx.beginPath();\n  ctx.moveTo(balls[0].x, balls[0].y);\n  balls.forEach(function (ball) {\n    ctx.lineTo(ball.x, ball.y);\n  });\n\n  ctx.closePath();\n  ctx.fill();\n}\n\nfunction ConnectDots1(dots) {\n  ctx.beginPath();\n\n  for (var _i = 0, jlen = dots.length; _i <= jlen; ++_i) {\n    var p0 = dots[_i + 0 >= jlen ? _i + 0 - jlen : _i + 0];\n    var p1 = dots[_i + 1 >= jlen ? _i + 1 - jlen : _i + 1];\n    ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);\n  }\n\n  ctx.closePath();\n  ctx.stroke();\n}\n\nfunction Render() {\n  window.requestAnimationFrame(Render);\n  ctx.clearRect(0, 0, 600, 600);\n\n  mouse.setPos(pos.x, pos.y);\n  mouse.draw(ctx);\n\n  balls.forEach(function (ball) {\n    ball.think(pos);\n    // ball.draw(ctx);\n  });\n  ConnectDots1(balls);\n}\n\nRender();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdXNlIGZyb20gJy4vbW91c2UnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdPbk1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IHBvcyA9IG5ldyBNb3VzZShjYW52YXMpO1xuY29uc3QgYmFsbHMgPSBbXTtcblxuY29uc3QgbW91c2UgPSBuZXcgQmFsbCgwLCAwLCAzMCwgJ2dyZWVuJyk7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgNTA7IGkrKykge1xuICBiYWxscy5wdXNoKFxuXHRcdG5ldyBCYWxsKFxuXHRcdFx0MjAwICsgMTAwICogTWF0aC5jb3MoaSAqIDIgKiBNYXRoLlBJIC8gNTApLFxuXHRcdFx0MjAwICsgMTAwICogTWF0aC5zaW4oaSAqIDIgKiBNYXRoLlBJIC8gNTApXG5cdFx0KVxuXHQpO1xufVxuXG5mdW5jdGlvbiBDb25uZWN0RG90cyhiYWxscykge1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oYmFsbHNbMF0ueCwgYmFsbHNbMF0ueSk7XG4gIGJhbGxzLmZvckVhY2goKGJhbGwpID0+IHtcbiAgICBjdHgubGluZVRvKGJhbGwueCwgYmFsbC55KTtcbiAgfSk7XG5cbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguZmlsbCgpO1xufVxuXG5mdW5jdGlvbiBDb25uZWN0RG90czEoZG90cykge1xuICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGpsZW4gPSBkb3RzLmxlbmd0aDsgaSA8PSBqbGVuOyArK2kpIHtcbiAgICBjb25zdCBwMCA9IGRvdHNbaSArIDAgPj0gamxlbiA/IGkgKyAwIC0gamxlbiA6IGkgKyAwXTtcbiAgICBjb25zdCBwMSA9IGRvdHNbaSArIDEgPj0gamxlbiA/IGkgKyAxIC0gamxlbiA6IGkgKyAxXTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhwMC54LCBwMC55LCAocDAueCArIHAxLngpICogMC41LCAocDAueSArIHAxLnkpICogMC41KTtcbiAgfVxuXG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LnN0cm9rZSgpO1xufVxuXG5mdW5jdGlvbiBSZW5kZXIoKSB7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoUmVuZGVyKTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCA2MDAsIDYwMCk7XG5cbiAgbW91c2Uuc2V0UG9zKHBvcy54LCBwb3MueSk7XG4gIG1vdXNlLmRyYXcoY3R4KTtcblxuICBiYWxscy5mb3JFYWNoKChiYWxsKSA9PiB7XG4gICAgYmFsbC50aGluayhwb3MpO1xuXHRcdC8vIGJhbGwuZHJhdyhjdHgpO1xuICB9KTtcbiAgQ29ubmVjdERvdHMxKGJhbGxzKTtcbn1cblxuUmVuZGVyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);