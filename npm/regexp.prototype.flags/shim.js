"use strict";var supportsDescriptors=require("../define-properties/index.js").supportsDescriptors,getPolyfill=require("./polyfill.js"),gOPD=Object.getOwnPropertyDescriptor,defineProperty=Object.defineProperty,TypeErr=TypeError,getProto=Object.getPrototypeOf,regex=/a/;module.exports=function(){if(!supportsDescriptors||!getProto)throw new TypeErr("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var e=getPolyfill(),r=getProto(regex),t=gOPD(r,"flags");return t&&t.get===e||defineProperty(r,"flags",{configurable:!0,enumerable:!1,get:e}),e};