"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}exports.init=init,exports.reset=reset,exports.setItem=setItem,exports.getItem=getItem,exports.removeItem=removeItem,exports.removeOldIdentityPoolReferences=removeOldIdentityPoolReferences;var storage=void 0;function init(e){storage=new Storage(e)}var Storage=function(){function e(){_classCallCheck(this,e),this.memoryStorage={}}return _createClass(e,[{key:"reset",value:function(){this.memoryStorage={}}},{key:"setItem",value:function(t,r){try{wx.setStorageSync(t,r)}catch(e){this.memoryStorage[t]=r}}},{key:"getItem",value:function(e){var t=void 0;try{t=this.memoryStorage[e]?this.memoryStorage[e]:this.memoryStorage[e]=wx.getStorageSync(e)}catch(e){}return t||null}},{key:"removeItem",value:function(e){delete this.memoryStorage[e];try{wx.removeStorageSync(e)}catch(e){}}}]),e}();function reset(){return storage||init(),storage.reset()}function setItem(e,t){return storage||init(),storage.setItem(e,t)}function getItem(e,t){return storage||init(),storage.getItem(e,t)}function removeItem(e){storage||init(),storage.removeItem(e)}function removeOldIdentityPoolReferences(e){storage||init();for(var t=wx.getStorageInfoSync(),r=0;r<t.keys.length;r++){var o=t.keys[r];-1!==o.indexOf(e)&&storage.removeItem(o)}}