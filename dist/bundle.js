/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	const text = document.querySelector('.text');
	const response = document.querySelector('.response');

	text.onkeyup = e => {
	  const { value } = e.target;
	  if (value !== '') {
	    const words = value.split(' ');
	    const letters = words.map(word => word.substr(0, 1));

	    fetch(`https://cors-anywhere.herokuapp.com/http://www.anagramica.com/all/${letters.join('')}`)
	    .then(res => res.json())
	    .then(json => {
	      response.classList.remove('empty');
	      response.textContent = json.all[0];
	    });
	  } else {
	    response.classList.add('empty');
	    response.textContent = 'Your new word will be here!';
	  }
	}

/***/ }
/******/ ]);