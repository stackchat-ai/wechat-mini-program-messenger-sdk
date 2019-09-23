"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _dec,_class,_class2,_temp2,_createClass=function(){function r(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t}}(),_get=function t(e,o,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,o);if(void 0===n){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,o,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../npm/@tarojs/redux/index.js"),_conversation=require("../../state/actions/conversation.js"),_colors=require("../../utils/colors.js");function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ReplyActions=(_dec=(0,_index3.connect)(function(t){var e=t.config,o=t.ui;return{accentColor:e.colors.accentColor,isAccentColorDark:e.colors.isAccentColorDark,locationNotSupportedText:o.text.locationNotSupported}},null,null,{withRef:!0}))((_temp2=_class2=function(){function i(){var t,e,n;_classCallCheck(this,i);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=n=_possibleConstructorReturn(this,(t=i.__proto__||Object.getPrototypeOf(i)).call.apply(t,[this].concat(r)))).$usedState=["loopArray1","choices","dispatch","accentColor","isAccentColorDark"],n.state={},n.onReplyClick=function(t){var e=t.text,o=t.payload,r=t.metadata;(0,n.props.dispatch)((0,_conversation.sendMessage)({text:e,payload:o,metadata:r}))},n.anonymousFunc0Map={},n.customComponents=[],_possibleConstructorReturn(n,e)}return _inherits(i,_index.Component),_createClass(i,[{key:"_constructor",value:function(t){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).call(this,t),this.$$refs=[]}},{key:"_createData",value:function(t,e,o){var n=this;this.__state=t||this.state||{},this.__props=e||this.props||{};this.$prefix;var r=this.__props.choices,a=this.__props,i=a.accentColor,s=a.isAccentColorDark,c={};if(i){var l=(0,_colors.getRGB)("#"+i),u=_colors.rgbToHsl.apply(void 0,_toConsumableArray(l)).h;c.backgroundColor=s?"hsl("+u+", 100%, 95%)":"hsl("+u+", 100%, 98%)",c.borderColor="#"+i,c.color="#"+i}var p=(r=r||[]).map(function(e,t){e={$original:(0,_index.internal_get_original)(e)};function o(t){t.preventDefault(),n.onReplyClick({text:e.$original.text,payload:e.$original.payload,metadata:e.$original.metadata})}var r="CAdPI"+t;return{onClick:n.anonymousFunc0Map[r]=o,_$indexKey:r,$loopState__temp2:(0,_index.internal_inline_style)(c),$loopState__temp4:t.toString(),$original:e.$original}});return Object.assign(this.__state,{loopArray1:p,choices:r}),this.__state}},{key:"anonymousFunc0",value:function(t){for(var e,o=arguments.length,r=Array(1<o?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return this.anonymousFunc0Map[t]&&(e=this.anonymousFunc0Map)[t].apply(e,r)}}]),i}(),_class2.$$events=["anonymousFunc0"],_class2.$$componentPath="messenger/components/reply-actions/ReplyActions",_class=_temp2))||_class;exports.default=ReplyActions,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(ReplyActions));