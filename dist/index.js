"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=d(function(J,h){
var S=require("path").resolve,T=require('@stdlib/fs-read-wasm/dist').sync,B=T(S(__dirname,"..","src","main.wasm"));h.exports=B
});var l=d(function(K,_){
var V=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),z=m();function u(e){if(!(this instanceof u))return new u(e);if(!V(e))throw new TypeError(j('26ZH0',e));return M.call(this,z,e,{env:{memory:e}}),this}g(u,M);w(u.prototype,"main",function(r,s,i,a,t){return this._instance.exports.c_dcopy(r,s,i,a,t),a});w(u.prototype,"ndarray",function(r,s,i,a,t,c,p){return this._instance.exports.c_dcopy_ndarray(r,s,i,a,t,c,p),t});_.exports=u
});var W=d(function(Q,R){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=require('@stdlib/utils-inherit/dist'),x=require('@stdlib/strided-base-stride2offset/dist'),L=require('@stdlib/strided-base-read-dataview/dist').ndarray,P=require('@stdlib/wasm-memory/dist'),k=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),q=l();function o(){return this instanceof o?(q.call(this,new P({initial:0})),this):new o}D(o,q);E(o.prototype,"main",function(r,s,i,a,t){return this.ndarray(r,s,i,x(r,i),a,t,x(r,t))});E(o.prototype,"ndarray",function(r,s,i,a,t,c,p){var y,v,n;return y=k(this,[b(r,s,i,a),b(r,t,c,p)]),v=y[0],n=y[1],q.prototype.ndarray.call(this,r,v.ptr,v.stride,v.offset,n.ptr,n.stride,n.offset),n.copy&&L(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,t,c,p,!0),t});R.exports=o
});var O=d(function(U,A){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=W(),G=l(),f=new F;f.initializeSync();C(f,"Module",G.bind(null));A.exports=f
});var H=O();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
