"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.store=void 0;var _index=require("../../../npm/@tarojs/redux/index.js"),configureStore=require("./configure-prod.js").configureStore,createStore=function(e){return configureStore(e)},store=exports.store=createStore({});(0,_index.setStore)(store);