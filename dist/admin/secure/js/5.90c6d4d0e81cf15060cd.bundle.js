(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{332:function(e,t,r){var n=r(96);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e},e.exports.default=e.exports,e.exports.__esModule=!0},341:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),l=r(330);r(161),r(332),r(160),r(1),r(114),r(328);const c=({children:e})=>o.a.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation()}},e);t.default=({onChange:e,filter:t,field:r,value:n})=>{if(!t)return null;const i="ks-input-"+r.path;return o.a.createElement(c,null,o.a.createElement(l.a,{field:r,renderContext:null,htmlID:i,onChange:t=>{if(null===t)e(null);else{const{value:r}=t;r&&e(r.id)}},value:n,isMulti:!1}))}}}]);