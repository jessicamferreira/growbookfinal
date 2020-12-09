/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aut */ \"./src/aut.js\");\n/* harmony import */ var _growbook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./growbook */ \"./src/growbook.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.growbook = new _growbook__WEBPACK_IMPORTED_MODULE_1__.Growbook();\n    this.autenticacao = new _aut__WEBPACK_IMPORTED_MODULE_0__.Autenticacao();\n    this.objetoMensagem = document.getElementById('mensagem');\n    this.botaoEnviar = document.getElementById('comentar');\n    this.id = 0;\n    this.email = document.getElementById('email');\n    this.senha = document.getElementById('senha');\n    this.btnEntrar = document.getElementById('btnLogin');\n    this.registrarEventos();\n    this.mostrar();\n  }\n\n  _createClass(App, [{\n    key: \"registrarEventos\",\n    value: function registrarEventos() {\n      var _this = this;\n\n      this.btnEntrar.onclick = function () {\n        _this.autenticacao.entrar(_this.email.value, _this.senha.value);\n      };\n\n      this.botaoEnviar.onclick = function () {\n        _this.growbook.adicionaComentario(_this.objetoMensagem.value);\n\n        _this.mostrar();\n      };\n    }\n  }, {\n    key: \"mostrar\",\n    value: function mostrar() {\n      var divComentarios = document.getElementById(\"comentarios\");\n      var novoHTML = '';\n      var novalista = this.growbook.pegarDados().slice(0, this.growbook.pegarDados().length);\n      novalista.reverse();\n      novalista.forEach(function (comentario) {\n        var card = new _card__WEBPACK_IMPORTED_MODULE_2__.Card(comentario);\n        novoHTML += card.pegaCard();\n      });\n      divComentarios.innerHTML = novoHTML;\n    }\n  }]);\n\n  return App;\n}();\n\nvar app = new App();\n\n//# sourceURL=webpack://growbook/./src/app.js?");

/***/ }),

/***/ "./src/aut.js":
/*!********************!*
  !*** ./src/aut.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Autenticacao\": () => /* binding */ Autenticacao\n/* harmony export */ });\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/users.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Autenticacao = /*#__PURE__*/function () {\n  function Autenticacao() {\n    _classCallCheck(this, Autenticacao);\n  }\n\n  _createClass(Autenticacao, [{\n    key: \"entrar\",\n    value: function entrar(inputUsuario, inputSenha) {\n      //usar o find\n      if (inputUsuario === _users__WEBPACK_IMPORTED_MODULE_0__.Usuarios.usuario && inputSenha === _users__WEBPACK_IMPORTED_MODULE_0__.Usuarios.senha) {\n        localStorage.setItem(\"Login\", JSON.stringify(inputUsuario));\n        document.getElementById(\"pageLogin\").style.display = \"none\";\n        document.getElementById(\"page\").style.display = \"block\";\n      } else {\n        alert('Usuário ou senha incorretos!');\n      }\n    }\n  }]);\n\n  return Autenticacao;\n}();\n\n//# sourceURL=webpack://growbook/./src/aut.js?");

/***/ }),

/***/ "./src/card.js":
/*!*********************!*
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => /* binding */ Card\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Card = /*#__PURE__*/function () {\n  function Card(comentario) {\n    _classCallCheck(this, Card);\n\n    this.comentario = comentario;\n  }\n\n  _createClass(Card, [{\n    key: \"pegaCard\",\n    value: function pegaCard() {\n      return \"\\n        <div class=\\\"one-comment\\\" id=\\\"\".concat(this.comentario.id, \"\\\">\\n        <div class=\\\"add-comment\\\" >\\n        <img class=\\\"avatar\\\" src=\\\"../public/img/roger.jpg\\\">\\n        <div class='comment-content'>\\n        <h4>Roger<span>Agora mesmo</span></h4>\\n        <p> \").concat(this.comentario.comentario, \" </p>\\n       \\n      </div>\\n      </div>\\n      </div>\\n          \"); //                        <a href=\"#\" class=\"edit-card\" onclick=\"editar(${this.recado.id})\" class=\"card-link\" data-toggle=\"modal\" data-target=\"#staticBackdrop\">Editar</a>\n    }\n  }]);\n\n  return Card;\n}();\n\n//# sourceURL=webpack://growbook/./src/card.js?");

/***/ }),

/***/ "./src/comentario.js":
/*!***************************!*
  !*** ./src/comentario.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comentario\": () => /* binding */ Comentario\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Comentario = function Comentario(id, comentario) {\n  _classCallCheck(this, Comentario);\n\n  this.id = id;\n  this.comentario = comentario;\n};\n\n//# sourceURL=webpack://growbook/./src/comentario.js?");

/***/ }),

/***/ "./src/growbook.js":
/*!*************************!*
  !*** ./src/growbook.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Growbook\": () => /* binding */ Growbook\n/* harmony export */ });\n/* harmony import */ var _comentario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comentario */ \"./src/comentario.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Growbook = /*#__PURE__*/function () {\n  function Growbook() {\n    _classCallCheck(this, Growbook);\n\n    this.listaDeComentarios = [];\n    this.recuperarDados();\n  }\n\n  _createClass(Growbook, [{\n    key: \"proximoId\",\n    value: function proximoId() {\n      var maior = 0;\n      this.listaDeComentarios.forEach(function (f) {\n        maior = Math.max(maior, f.id);\n      });\n      return ++maior;\n    }\n  }, {\n    key: \"adicionaComentario\",\n    value: function adicionaComentario(mensagem) {\n      var comentario = new _comentario__WEBPACK_IMPORTED_MODULE_0__.Comentario(this.proximoId(), mensagem);\n      this.listaDeComentarios.push(comentario);\n      this.salvarDados();\n    }\n  }, {\n    key: \"salvarDados\",\n    value: function salvarDados() {\n      localStorage.setItem(\"salvo\", JSON.stringify(this.listaDeComentarios));\n    }\n  }, {\n    key: \"recuperarDados\",\n    value: function recuperarDados() {\n      var dados = localStorage.getItem(\"salvo\");\n      this.listaDeComentarios = JSON.parse(dados !== null && dados !== void 0 ? dados : \"[]\");\n    }\n  }, {\n    key: \"pegarDados\",\n    value: function pegarDados() {\n      return this.listaDeComentarios;\n    }\n  }, {\n    key: \"salvarItem\",\n    value: function salvarItem(id, mensagem) {\n      var indice = this.listaDeComentarios.findIndex(function (r) {\n        return r.id === parseInt(id);\n      });\n      this.listaDeComentarios[indice].comentario = mensagem;\n      this.salvarDados(this.listaDeComentarios);\n    }\n  }]);\n\n  return Growbook;\n}();\n\n//# sourceURL=webpack://growbook/./src/growbook.js?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*
  !*** ./src/users.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Usuarios\": () => /* binding */ Usuarios\n/* harmony export */ });\nvar Usuarios = {\n  usuario: \"admin\",\n  senha: \"admin\"\n};\n\n\n//# sourceURL=webpack://growbook/./src/users.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;