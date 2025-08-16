var e0=Object.defineProperty;var t0=(e,t,n)=>t in e?e0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var No=(e,t,n)=>(t0(e,typeof t!="symbol"?t+"":t,n),n);const n0="modulepreload",r0=function(e){return"/"+e},W8={},u=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=r0(s),s in W8)return;W8[s]=!0;const E=s.endsWith(".css"),l=E?'[rel="stylesheet"]':"";if(!!r)for(let p=o.length-1;p>=0;p--){const d=o[p];if(d.href===s&&(!E||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const a=document.createElement("link");if(a.rel=E?"stylesheet":n0,E||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),E)return new Promise((p,d)=>{a.addEventListener("load",p),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const E=new Event("vite:preloadError",{cancelable:!0});if(E.payload=s,window.dispatchEvent(E),!E.defaultPrevented)throw s})};function js(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const De={},Rn=[],vt=()=>{},o0=()=>!1,s0=/^on[^a-z]/,Pr=e=>s0.test(e),zs=e=>e.startsWith("onUpdate:"),Le=Object.assign,qs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},E0=Object.prototype.hasOwnProperty,ve=(e,t)=>E0.call(e,t),K=Array.isArray,On=e=>Lr(e)==="[object Map]",Jn=e=>Lr(e)==="[object Set]",K8=e=>Lr(e)==="[object Date]",ne=e=>typeof e=="function",ie=e=>typeof e=="string",mr=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Il=e=>ye(e)&&ne(e.then)&&ne(e.catch),Tl=Object.prototype.toString,Lr=e=>Tl.call(e),l0=e=>Lr(e).slice(8,-1),Pl=e=>Lr(e)==="[object Object]",Us=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cr=js(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Co=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},i0=/-(\w)/g,at=Co(e=>e.replace(i0,(t,n)=>n?n.toUpperCase():"")),a0=/\B([A-Z])/g,hn=Co(e=>e.replace(a0,"-$1").toLowerCase()),Rr=Co(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ho=Co(e=>e?`on${Rr(e)}`:""),hr=(e,t)=>!Object.is(e,t),io=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},co=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},uo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},c0=e=>{const t=ie(e)?Number(e):NaN;return isNaN(t)?e:t};let Y8;const ds=()=>Y8||(Y8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gs(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=ie(r)?B0(r):Gs(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if(ie(e))return e;if(ye(e))return e}}const u0=/;(?![^(]*\))/g,p0=/:([^]+)/,d0=/\/\*[^]*?\*\//g;function B0(e){const t={};return e.replace(d0,"").split(u0).forEach(n=>{if(n){const r=n.split(p0);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ws(e){let t="";if(ie(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=Ws(e[n]);r&&(t+=r+" ")}else if(ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const A0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",v0=js(A0);function Ll(e){return!!e||e===""}function f0(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=vn(e[r],t[r]);return n}function vn(e,t){if(e===t)return!0;let n=K8(e),r=K8(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=mr(e),r=mr(t),n||r)return e===t;if(n=K(e),r=K(t),n||r)return n&&r?f0(e,t):!1;if(n=ye(e),r=ye(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const E in e){const l=e.hasOwnProperty(E),c=t.hasOwnProperty(E);if(l&&!c||!l&&c||!vn(e[E],t[E]))return!1}}return String(e)===String(t)}function Ks(e,t){return e.findIndex(n=>vn(n,t))}const M3=e=>ie(e)?e:e==null?"":K(e)||ye(e)&&(e.toString===Tl||!ne(e.toString))?JSON.stringify(e,Rl,2):String(e),Rl=(e,t)=>t&&t.__v_isRef?Rl(e,t.value):On(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:Jn(t)?{[`Set(${t.size})`]:[...t.values()]}:ye(t)&&!K(t)&&!Pl(t)?String(t):t;let Ze;class m0{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ze,!t&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ze;try{return Ze=this,t()}finally{Ze=n}}}on(){Ze=this}off(){Ze=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function h0(e,t=Ze){t&&t.active&&t.effects.push(e)}function Ol(){return Ze}function b0(e){Ze&&Ze.cleanups.push(e)}const Ys=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fl=e=>(e.w&Xt)>0,Vl=e=>(e.n&Xt)>0,_0=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Xt},g0=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Fl(o)&&!Vl(o)?o.delete(e):t[n++]=o,o.w&=~Xt,o.n&=~Xt}t.length=n}},po=new WeakMap;let ir=0,Xt=1;const Bs=30;let Bt;const dn=Symbol(""),As=Symbol("");class Js{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,h0(this,r)}run(){if(!this.active)return this.fn();let t=Bt,n=Jt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Bt,Bt=this,Jt=!0,Xt=1<<++ir,ir<=Bs?_0(this):J8(this),this.fn()}finally{ir<=Bs&&g0(this),Xt=1<<--ir,Bt=this.parent,Jt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bt===this?this.deferStop=!0:this.active&&(J8(this),this.onStop&&this.onStop(),this.active=!1)}}function J8(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Jt=!0;const Sl=[];function Qn(){Sl.push(Jt),Jt=!1}function Xn(){const e=Sl.pop();Jt=e===void 0?!0:e}function Je(e,t,n){if(Jt&&Bt){let r=po.get(e);r||po.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=Ys()),kl(o)}}function kl(e,t){let n=!1;ir<=Bs?Vl(e)||(e.n|=Xt,n=!Fl(e)):n=!e.has(Bt),n&&(e.add(Bt),Bt.deps.push(e))}function St(e,t,n,r,o,s){const E=po.get(e);if(!E)return;let l=[];if(t==="clear")l=[...E.values()];else if(n==="length"&&K(e)){const c=Number(r);E.forEach((a,p)=>{(p==="length"||p>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(E.get(n)),t){case"add":K(e)?Us(n)&&l.push(E.get("length")):(l.push(E.get(dn)),On(e)&&l.push(E.get(As)));break;case"delete":K(e)||(l.push(E.get(dn)),On(e)&&l.push(E.get(As)));break;case"set":On(e)&&l.push(E.get(dn));break}if(l.length===1)l[0]&&vs(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);vs(Ys(c))}}function vs(e,t){const n=K(e)?e:[...e];for(const r of n)r.computed&&Q8(r);for(const r of n)r.computed||Q8(r)}function Q8(e,t){(e!==Bt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function y0(e,t){var n;return(n=po.get(e))==null?void 0:n.get(t)}const C0=js("__proto__,__v_isRef,__isVue"),xl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mr)),D0=Qs(),w0=Qs(!1,!0),I0=Qs(!0),X8=T0();function T0(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ce(this);for(let s=0,E=this.length;s<E;s++)Je(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(ce)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Qn();const r=ce(this)[t].apply(this,n);return Xn(),r}}),e}function P0(e){const t=ce(this);return Je(t,"has",e),t.hasOwnProperty(e)}function Qs(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?U0:jl:t?Hl:Nl).get(r))return r;const E=K(r);if(!e){if(E&&ve(X8,o))return Reflect.get(X8,o,s);if(o==="hasOwnProperty")return P0}const l=Reflect.get(r,o,s);return(mr(o)?xl.has(o):C0(o))||(e||Je(r,"get",o),t)?l:Ve(l)?E&&Us(o)?l:l.value:ye(l)?e?$t(l):Or(l):l}}const L0=$l(),R0=$l(!0);function $l(e=!1){return function(n,r,o,s){let E=n[r];if(Nn(E)&&Ve(E)&&!Ve(o))return!1;if(!e&&(!Bo(o)&&!Nn(o)&&(E=ce(E),o=ce(o)),!K(n)&&Ve(E)&&!Ve(o)))return E.value=o,!0;const l=K(n)&&Us(r)?Number(r)<n.length:ve(n,r),c=Reflect.set(n,r,o,s);return n===ce(s)&&(l?hr(o,E)&&St(n,"set",r,o):St(n,"add",r,o)),c}}function O0(e,t){const n=ve(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&St(e,"delete",t,void 0),r}function F0(e,t){const n=Reflect.has(e,t);return(!mr(t)||!xl.has(t))&&Je(e,"has",t),n}function V0(e){return Je(e,"iterate",K(e)?"length":dn),Reflect.ownKeys(e)}const Ml={get:D0,set:L0,deleteProperty:O0,has:F0,ownKeys:V0},S0={get:I0,set(e,t){return!0},deleteProperty(e,t){return!0}},k0=Le({},Ml,{get:w0,set:R0}),Xs=e=>e,Do=e=>Reflect.getPrototypeOf(e);function Gr(e,t,n=!1,r=!1){e=e.__v_raw;const o=ce(e),s=ce(t);n||(t!==s&&Je(o,"get",t),Je(o,"get",s));const{has:E}=Do(o),l=r?Xs:n?t8:br;if(E.call(o,t))return l(e.get(t));if(E.call(o,s))return l(e.get(s));e!==o&&e.get(t)}function Wr(e,t=!1){const n=this.__v_raw,r=ce(n),o=ce(e);return t||(e!==o&&Je(r,"has",e),Je(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Kr(e,t=!1){return e=e.__v_raw,!t&&Je(ce(e),"iterate",dn),Reflect.get(e,"size",e)}function Z8(e){e=ce(e);const t=ce(this);return Do(t).has.call(t,e)||(t.add(e),St(t,"add",e,e)),this}function eE(e,t){t=ce(t);const n=ce(this),{has:r,get:o}=Do(n);let s=r.call(n,e);s||(e=ce(e),s=r.call(n,e));const E=o.call(n,e);return n.set(e,t),s?hr(t,E)&&St(n,"set",e,t):St(n,"add",e,t),this}function tE(e){const t=ce(this),{has:n,get:r}=Do(t);let o=n.call(t,e);o||(e=ce(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&St(t,"delete",e,void 0),s}function nE(){const e=ce(this),t=e.size!==0,n=e.clear();return t&&St(e,"clear",void 0,void 0),n}function Yr(e,t){return function(r,o){const s=this,E=s.__v_raw,l=ce(E),c=t?Xs:e?t8:br;return!e&&Je(l,"iterate",dn),E.forEach((a,p)=>r.call(o,c(a),c(p),s))}}function Jr(e,t,n){return function(...r){const o=this.__v_raw,s=ce(o),E=On(s),l=e==="entries"||e===Symbol.iterator&&E,c=e==="keys"&&E,a=o[e](...r),p=n?Xs:t?t8:br;return!t&&Je(s,"iterate",c?As:dn),{next(){const{value:d,done:B}=a.next();return B?{value:d,done:B}:{value:l?[p(d[0]),p(d[1])]:p(d),done:B}},[Symbol.iterator](){return this}}}}function jt(e){return function(...t){return e==="delete"?!1:this}}function x0(){const e={get(s){return Gr(this,s)},get size(){return Kr(this)},has:Wr,add:Z8,set:eE,delete:tE,clear:nE,forEach:Yr(!1,!1)},t={get(s){return Gr(this,s,!1,!0)},get size(){return Kr(this)},has:Wr,add:Z8,set:eE,delete:tE,clear:nE,forEach:Yr(!1,!0)},n={get(s){return Gr(this,s,!0)},get size(){return Kr(this,!0)},has(s){return Wr.call(this,s,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:Yr(!0,!1)},r={get(s){return Gr(this,s,!0,!0)},get size(){return Kr(this,!0)},has(s){return Wr.call(this,s,!0)},add:jt("add"),set:jt("set"),delete:jt("delete"),clear:jt("clear"),forEach:Yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Jr(s,!1,!1),n[s]=Jr(s,!0,!1),t[s]=Jr(s,!1,!0),r[s]=Jr(s,!0,!0)}),[e,n,t,r]}const[$0,M0,N0,H0]=x0();function Zs(e,t){const n=t?e?H0:N0:e?M0:$0;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ve(n,o)&&o in r?n:r,o,s)}const j0={get:Zs(!1,!1)},z0={get:Zs(!1,!0)},q0={get:Zs(!0,!1)},Nl=new WeakMap,Hl=new WeakMap,jl=new WeakMap,U0=new WeakMap;function G0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function W0(e){return e.__v_skip||!Object.isExtensible(e)?0:G0(l0(e))}function Or(e){return Nn(e)?e:e8(e,!1,Ml,j0,Nl)}function zl(e){return e8(e,!1,k0,z0,Hl)}function $t(e){return e8(e,!0,S0,q0,jl)}function e8(e,t,n,r,o){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const E=W0(e);if(E===0)return e;const l=new Proxy(e,E===2?r:n);return o.set(e,l),l}function Fn(e){return Nn(e)?Fn(e.__v_raw):!!(e&&e.__v_isReactive)}function Nn(e){return!!(e&&e.__v_isReadonly)}function Bo(e){return!!(e&&e.__v_isShallow)}function ql(e){return Fn(e)||Nn(e)}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function Ul(e){return co(e,"__v_skip",!0),e}const br=e=>ye(e)?Or(e):e,t8=e=>ye(e)?$t(e):e;function n8(e){Jt&&Bt&&(e=ce(e),kl(e.dep||(e.dep=Ys())))}function r8(e,t){e=ce(e);const n=e.dep;n&&vs(n)}function Ve(e){return!!(e&&e.__v_isRef===!0)}function N(e){return Gl(e,!1)}function Te(e){return Gl(e,!0)}function Gl(e,t){return Ve(e)?e:new K0(e,t)}class K0{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ce(t),this._value=n?t:br(t)}get value(){return n8(this),this._value}set value(t){const n=this.__v_isShallow||Bo(t)||Nn(t);t=n?t:ce(t),hr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:br(t),r8(this))}}function Bn(e){return Ve(e)?e.value:e}const Y0={get:(e,t,n)=>Bn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Ve(o)&&!Ve(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Wl(e){return Fn(e)?e:new Proxy(e,Y0)}class J0{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>n8(this),()=>r8(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Kl(e){return new J0(e)}class Q0{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return y0(ce(this._object),this._key)}}class X0{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Zn(e,t,n){return Ve(e)?e:ne(e)?new X0(e):ye(e)&&arguments.length>1?Z0(e,t,n):N(e)}function Z0(e,t,n){const r=e[t];return Ve(r)?r:new Q0(e,t,n)}class e6{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Js(t,()=>{this._dirty||(this._dirty=!0,r8(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=ce(this);return n8(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function t6(e,t,n=!1){let r,o;const s=ne(e);return s?(r=e,o=vt):(r=e.get,o=e.set),new e6(r,o,s||!o,n)}function Qt(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){Fr(s,t,n)}return o}function it(e,t,n,r){if(ne(e)){const s=Qt(e,t,n,r);return s&&Il(s)&&s.catch(E=>{Fr(E,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(it(e[s],t,n,r));return o}function Fr(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const E=t.proxy,l=n;for(;s;){const a=s.ec;if(a){for(let p=0;p<a.length;p++)if(a[p](e,E,l)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Qt(c,null,10,[e,E,l]);return}}n6(e,n,o,r)}function n6(e,t,n,r=!0){console.error(e)}let _r=!1,fs=!1;const je=[];let It=0;const Vn=[];let Ft=null,an=0;const Yl=Promise.resolve();let o8=null;function nn(e){const t=o8||Yl;return e?t.then(this?e.bind(this):e):t}function r6(e){let t=It+1,n=je.length;for(;t<n;){const r=t+n>>>1;gr(je[r])<e?t=r+1:n=r}return t}function wo(e){(!je.length||!je.includes(e,_r&&e.allowRecurse?It+1:It))&&(e.id==null?je.push(e):je.splice(r6(e.id),0,e),Jl())}function Jl(){!_r&&!fs&&(fs=!0,o8=Yl.then(Ql))}function o6(e){const t=je.indexOf(e);t>It&&je.splice(t,1)}function s6(e){K(e)?Vn.push(...e):(!Ft||!Ft.includes(e,e.allowRecurse?an+1:an))&&Vn.push(e),Jl()}function rE(e,t=_r?It+1:0){for(;t<je.length;t++){const n=je[t];n&&n.pre&&(je.splice(t,1),t--,n())}}function Ao(e){if(Vn.length){const t=[...new Set(Vn)];if(Vn.length=0,Ft){Ft.push(...t);return}for(Ft=t,Ft.sort((n,r)=>gr(n)-gr(r)),an=0;an<Ft.length;an++)Ft[an]();Ft=null,an=0}}const gr=e=>e.id==null?1/0:e.id,E6=(e,t)=>{const n=gr(e)-gr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ql(e){fs=!1,_r=!0,je.sort(E6);const t=vt;try{for(It=0;It<je.length;It++){const n=je[It];n&&n.active!==!1&&Qt(n,null,14)}}finally{It=0,je.length=0,Ao(),_r=!1,o8=null,(je.length||Vn.length)&&Ql()}}function l6(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||De;let o=n;const s=t.startsWith("update:"),E=s&&t.slice(7);if(E&&E in r){const p=`${E==="modelValue"?"model":E}Modifiers`,{number:d,trim:B}=r[p]||De;B&&(o=n.map(v=>ie(v)?v.trim():v)),d&&(o=n.map(uo))}let l,c=r[l=Ho(t)]||r[l=Ho(at(t))];!c&&s&&(c=r[l=Ho(hn(t))]),c&&it(c,e,6,o);const a=r[l+"Once"];if(a){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,it(a,e,6,o)}}function Xl(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let E={},l=!1;if(!ne(e)){const c=a=>{const p=Xl(a,t,!0);p&&(l=!0,Le(E,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!l?(ye(e)&&r.set(e,null),null):(K(s)?s.forEach(c=>E[c]=null):Le(E,s),ye(e)&&r.set(e,E),E)}function Io(e,t){return!e||!Pr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(e,t[0].toLowerCase()+t.slice(1))||ve(e,hn(t))||ve(e,t))}let He=null,To=null;function vo(e){const t=He;return He=e,To=e&&e.type.__scopeId||null,t}function N3(e){To=e}function H3(){To=null}function i6(e,t=He,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&AE(-1);const s=vo(t);let E;try{E=e(...o)}finally{vo(s),r._d&&AE(1)}return E};return r._n=!0,r._c=!0,r._d=!0,r}function jo(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[E],slots:l,attrs:c,emit:a,render:p,renderCache:d,data:B,setupState:v,ctx:m,inheritAttrs:g}=e;let D,h;const _=vo(e);try{if(n.shapeFlag&4){const F=o||r;D=dt(p.call(F,F,d,s,v,B,m)),h=c}else{const F=t;D=dt(F.length>1?F(s,{attrs:c,slots:l,emit:a}):F(s,null)),h=t.props?c:a6(c)}}catch(F){dr.length=0,Fr(F,e,1),D=Pe(nt)}let L=D;if(h&&g!==!1){const F=Object.keys(h),{shapeFlag:q}=L;F.length&&q&7&&(E&&F.some(zs)&&(h=c6(h,E)),L=Zt(L,h))}return n.dirs&&(L=Zt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),D=L,vo(_),D}const a6=e=>{let t;for(const n in e)(n==="class"||n==="style"||Pr(n))&&((t||(t={}))[n]=e[n]);return t},c6=(e,t)=>{const n={};for(const r in e)(!zs(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function u6(e,t,n){const{props:r,children:o,component:s}=e,{props:E,children:l,patchFlag:c}=t,a=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?oE(r,E,a):!!E;if(c&8){const p=t.dynamicProps;for(let d=0;d<p.length;d++){const B=p[d];if(E[B]!==r[B]&&!Io(a,B))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===E?!1:r?E?oE(r,E,a):!0:!!E;return!1}function oE(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!Io(n,s))return!0}return!1}function p6({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const d6=e=>e.__isSuspense;function Zl(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):s6(e)}function ei(e,t){return s8(e,null,t)}const Qr={};function re(e,t,n){return s8(e,t,n)}function s8(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:E}=De){var l;const c=Ol()===((l=Se)==null?void 0:l.scope)?Se:null;let a,p=!1,d=!1;if(Ve(e)?(a=()=>e.value,p=Bo(e)):Fn(e)?(a=()=>e,r=!0):K(e)?(d=!0,p=e.some(F=>Fn(F)||Bo(F)),a=()=>e.map(F=>{if(Ve(F))return F.value;if(Fn(F))return pn(F);if(ne(F))return Qt(F,c,2)})):ne(e)?t?a=()=>Qt(e,c,2):a=()=>{if(!(c&&c.isUnmounted))return B&&B(),it(e,c,3,[v])}:a=vt,t&&r){const F=a;a=()=>pn(F())}let B,v=F=>{B=_.onStop=()=>{Qt(F,c,4)}},m;if(zn)if(v=vt,t?n&&it(t,c,3,[a(),d?[]:void 0,v]):a(),o==="sync"){const F=E1();m=F.__watcherHandles||(F.__watcherHandles=[])}else return vt;let g=d?new Array(e.length).fill(Qr):Qr;const D=()=>{if(_.active)if(t){const F=_.run();(r||p||(d?F.some((q,R)=>hr(q,g[R])):hr(F,g)))&&(B&&B(),it(t,c,3,[F,g===Qr?void 0:d&&g[0]===Qr?[]:g,v]),g=F)}else _.run()};D.allowRecurse=!!t;let h;o==="sync"?h=D:o==="post"?h=()=>Ke(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),h=()=>wo(D));const _=new Js(a,h);t?n?D():g=_.run():o==="post"?Ke(_.run.bind(_),c&&c.suspense):_.run();const L=()=>{_.stop(),c&&c.scope&&qs(c.scope.effects,_)};return m&&m.push(L),L}function B6(e,t,n){const r=this.proxy,o=ie(e)?e.includes(".")?ti(r,e):()=>r[e]:e.bind(r,r);let s;ne(t)?s=t:(s=t.handler,n=t);const E=Se;jn(this);const l=s8(o,s.bind(r),n);return E?jn(E):An(),l}function ti(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function pn(e,t){if(!ye(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ve(e))pn(e.value,t);else if(K(e))for(let n=0;n<e.length;n++)pn(e[n],t);else if(Jn(e)||On(e))e.forEach(n=>{pn(n,t)});else if(Pl(e))for(const n in e)pn(e[n],t);return e}function j3(e,t){const n=He;if(n===null)return e;const r=Ro(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[E,l,c,a=De]=t[s];E&&(ne(E)&&(E={mounted:E,updated:E}),E.deep&&pn(l),o.push({dir:E,instance:r,value:l,oldValue:void 0,arg:c,modifiers:a}))}return e}function wt(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let E=0;E<o.length;E++){const l=o[E];s&&(l.oldValue=s[E].value);let c=l.dir[r];c&&(Qn(),it(c,n,8,[e.el,l,e,t]),Xn())}}function ni(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pe(()=>{e.isMounted=!0}),l8(()=>{e.isUnmounting=!0}),e}const st=[Function,Array],ri={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:st,onEnter:st,onAfterEnter:st,onEnterCancelled:st,onBeforeLeave:st,onLeave:st,onAfterLeave:st,onLeaveCancelled:st,onBeforeAppear:st,onAppear:st,onAfterAppear:st,onAppearCancelled:st},A6={name:"BaseTransition",props:ri,setup(e,{slots:t}){const n=rn(),r=ni();let o;return()=>{const s=t.default&&E8(t.default(),!0);if(!s||!s.length)return;let E=s[0];if(s.length>1){for(const g of s)if(g.type!==nt){E=g;break}}const l=ce(e),{mode:c}=l;if(r.isLeaving)return zo(E);const a=sE(E);if(!a)return zo(E);const p=yr(a,l,r,n);Cr(a,p);const d=n.subTree,B=d&&sE(d);let v=!1;const{getTransitionKey:m}=a.type;if(m){const g=m();o===void 0?o=g:g!==o&&(o=g,v=!0)}if(B&&B.type!==nt&&(!cn(a,B)||v)){const g=yr(B,l,r,n);if(Cr(B,g),c==="out-in")return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},zo(E);c==="in-out"&&a.type!==nt&&(g.delayLeave=(D,h,_)=>{const L=oi(r,B);L[String(B.key)]=B,D._leaveCb=()=>{h(),D._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=_})}return E}}},v6=A6;function oi(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function yr(e,t,n,r){const{appear:o,mode:s,persisted:E=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:p,onBeforeLeave:d,onLeave:B,onAfterLeave:v,onLeaveCancelled:m,onBeforeAppear:g,onAppear:D,onAfterAppear:h,onAppearCancelled:_}=t,L=String(e.key),F=oi(n,e),q=(I,z)=>{I&&it(I,r,9,z)},R=(I,z)=>{const J=z[1];q(I,z),K(I)?I.every(Z=>Z.length<=1)&&J():I.length<=1&&J()},$={mode:s,persisted:E,beforeEnter(I){let z=l;if(!n.isMounted)if(o)z=g||l;else return;I._leaveCb&&I._leaveCb(!0);const J=F[L];J&&cn(e,J)&&J.el._leaveCb&&J.el._leaveCb(),q(z,[I])},enter(I){let z=c,J=a,Z=p;if(!n.isMounted)if(o)z=D||c,J=h||a,Z=_||p;else return;let U=!1;const ee=I._enterCb=W=>{U||(U=!0,W?q(Z,[I]):q(J,[I]),$.delayedLeave&&$.delayedLeave(),I._enterCb=void 0)};z?R(z,[I,ee]):ee()},leave(I,z){const J=String(e.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return z();q(d,[I]);let Z=!1;const U=I._leaveCb=ee=>{Z||(Z=!0,z(),ee?q(m,[I]):q(v,[I]),I._leaveCb=void 0,F[J]===e&&delete F[J])};F[J]=e,B?R(B,[I,U]):U()},clone(I){return yr(I,t,n,r)}};return $}function zo(e){if(Vr(e))return e=Zt(e),e.children=null,e}function sE(e){return Vr(e)?e.children?e.children[0]:void 0:e}function Cr(e,t){e.shapeFlag&6&&e.component?Cr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function E8(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let E=e[s];const l=n==null?E.key:String(n)+String(E.key!=null?E.key:s);E.type===Ue?(E.patchFlag&128&&o++,r=r.concat(E8(E.children,t,l))):(t||E.type!==nt)&&r.push(l!=null?Zt(E,{key:l}):E)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function S(e,t){return ne(e)?(()=>Le({name:e.name},t,{setup:e}))():e}const Sn=e=>!!e.type.__asyncLoader;function A(e){ne(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:o=200,timeout:s,suspensible:E=!0,onError:l}=e;let c=null,a,p=0;const d=()=>(p++,c=null,B()),B=()=>{let v;return c||(v=c=t().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),l)return new Promise((g,D)=>{l(m,()=>g(d()),()=>D(m),p+1)});throw m}).then(m=>v!==c&&c?c:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),a=m,m)))};return S({name:"AsyncComponentWrapper",__asyncLoader:B,get __asyncResolved(){return a},setup(){const v=Se;if(a)return()=>qo(a,v);const m=_=>{c=null,Fr(_,v,13,!r)};if(E&&v.suspense||zn)return B().then(_=>()=>qo(_,v)).catch(_=>(m(_),()=>r?Pe(r,{error:_}):null));const g=N(!1),D=N(),h=N(!!o);return o&&setTimeout(()=>{h.value=!1},o),s!=null&&setTimeout(()=>{if(!g.value&&!D.value){const _=new Error(`Async component timed out after ${s}ms.`);m(_),D.value=_}},s),B().then(()=>{g.value=!0,v.parent&&Vr(v.parent.vnode)&&wo(v.parent.update)}).catch(_=>{m(_),D.value=_}),()=>{if(g.value&&a)return qo(a,v);if(D.value&&r)return Pe(r,{error:D.value});if(n&&!h.value)return Pe(n)}}})}function qo(e,t){const{ref:n,props:r,children:o,ce:s}=t.vnode,E=Pe(e,r,o);return E.ref=n,E.ce=s,delete t.vnode.ce,E}const Vr=e=>e.type.__isKeepAlive;function f6(e,t){si(e,"a",t)}function m6(e,t){si(e,"da",t)}function si(e,t,n=Se){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Po(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Vr(o.parent.vnode)&&h6(r,t,n,o),o=o.parent}}function h6(e,t,n,r){const o=Po(t,e,r,!0);bn(()=>{qs(r[t],o)},n)}function Po(e,t,n=Se,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...E)=>{if(n.isUnmounted)return;Qn(),jn(n);const l=it(t,n,e,E);return An(),Xn(),l});return r?o.unshift(s):o.push(s),s}}const Mt=e=>(t,n=Se)=>(!zn||e==="sp")&&Po(e,(...r)=>t(...r),n),b6=Mt("bm"),pe=Mt("m"),_6=Mt("bu"),Ei=Mt("u"),l8=Mt("bum"),bn=Mt("um"),g6=Mt("sp"),y6=Mt("rtg"),C6=Mt("rtc");function D6(e,t=Se){Po("ec",e,t)}const li="components";function tt(e,t){return I6(li,e,!0,t)||e}const w6=Symbol.for("v-ndc");function I6(e,t,n=!0,r=!1){const o=He||Se;if(o){const s=o.type;if(e===li){const l=r1(s,!1);if(l&&(l===t||l===at(t)||l===Rr(at(t))))return s}const E=EE(o[e]||s[e],t)||EE(o.appContext[e],t);return!E&&r?s:E}}function EE(e,t){return e&&(e[t]||e[at(t)]||e[Rr(at(t))])}function z3(e,t,n,r){let o;const s=n&&n[r];if(K(e)||ie(e)){o=new Array(e.length);for(let E=0,l=e.length;E<l;E++)o[E]=t(e[E],E,void 0,s&&s[E])}else if(typeof e=="number"){o=new Array(e);for(let E=0;E<e;E++)o[E]=t(E+1,E,void 0,s&&s[E])}else if(ye(e))if(e[Symbol.iterator])o=Array.from(e,(E,l)=>t(E,l,void 0,s&&s[l]));else{const E=Object.keys(e);o=new Array(E.length);for(let l=0,c=E.length;l<c;l++){const a=E[l];o[l]=t(e[a],a,l,s&&s[l])}}else o=[];return n&&(n[r]=o),o}function q3(e,t,n={},r,o){if(He.isCE||He.parent&&Sn(He.parent)&&He.parent.isCE)return t!=="default"&&(n.name=t),Pe("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),fi();const E=s&&ii(s(n)),l=hi(Ue,{key:n.key||E&&E.key||`_${t}`},E||(r?r():[]),E&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function ii(e){return e.some(t=>bo(t)?!(t.type===nt||t.type===Ue&&!ii(t.children)):!0)?e:null}const ms=e=>e?yi(e)?Ro(e)||e.proxy:ms(e.parent):null,ur=Le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ms(e.parent),$root:e=>ms(e.root),$emit:e=>e.emit,$options:e=>i8(e),$forceUpdate:e=>e.f||(e.f=()=>wo(e.update)),$nextTick:e=>e.n||(e.n=nn.bind(e.proxy)),$watch:e=>B6.bind(e)}),Uo=(e,t)=>e!==De&&!e.__isScriptSetup&&ve(e,t),T6={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:E,type:l,appContext:c}=e;let a;if(t[0]!=="$"){const v=E[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Uo(r,t))return E[t]=1,r[t];if(o!==De&&ve(o,t))return E[t]=2,o[t];if((a=e.propsOptions[0])&&ve(a,t))return E[t]=3,s[t];if(n!==De&&ve(n,t))return E[t]=4,n[t];hs&&(E[t]=0)}}const p=ur[t];let d,B;if(p)return t==="$attrs"&&Je(e,"get",t),p(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==De&&ve(n,t))return E[t]=4,n[t];if(B=c.config.globalProperties,ve(B,t))return B[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return Uo(o,t)?(o[t]=n,!0):r!==De&&ve(r,t)?(r[t]=n,!0):ve(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},E){let l;return!!n[E]||e!==De&&ve(e,E)||Uo(t,E)||(l=s[0])&&ve(l,E)||ve(r,E)||ve(ur,E)||ve(o.config.globalProperties,E)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ve(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function U3(e,t,n){const r=rn();if(n&&n.local){const o=N(e[t]);return re(()=>e[t],s=>o.value=s),re(o,s=>{s!==e[t]&&r.emit(`update:${t}`,s)}),o}else return{__v_isRef:!0,get value(){return e[t]},set value(o){r.emit(`update:${t}`,o)}}}function lE(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let hs=!0;function P6(e){const t=i8(e),n=e.proxy,r=e.ctx;hs=!1,t.beforeCreate&&iE(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:E,watch:l,provide:c,inject:a,created:p,beforeMount:d,mounted:B,beforeUpdate:v,updated:m,activated:g,deactivated:D,beforeDestroy:h,beforeUnmount:_,destroyed:L,unmounted:F,render:q,renderTracked:R,renderTriggered:$,errorCaptured:I,serverPrefetch:z,expose:J,inheritAttrs:Z,components:U,directives:ee,filters:W}=t;if(a&&L6(a,r,null),E)for(const fe in E){const de=E[fe];ne(de)&&(r[fe]=de.bind(n))}if(o){const fe=o.call(n,n);ye(fe)&&(e.data=Or(fe))}if(hs=!0,s)for(const fe in s){const de=s[fe],$e=ne(de)?de.bind(n,n):ne(de.get)?de.get.bind(n,n):vt,yt=!ne(de)&&ne(de.set)?de.set.bind(n):vt,ot=C({get:$e,set:yt});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Me=>ot.value=Me})}if(l)for(const fe in l)ai(l[fe],r,n,fe);if(c){const fe=ne(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(de=>{ft(de,fe[de])})}p&&iE(p,e,"c");function oe(fe,de){K(de)?de.forEach($e=>fe($e.bind(n))):de&&fe(de.bind(n))}if(oe(b6,d),oe(pe,B),oe(_6,v),oe(Ei,m),oe(f6,g),oe(m6,D),oe(D6,I),oe(C6,R),oe(y6,$),oe(l8,_),oe(bn,F),oe(g6,z),K(J))if(J.length){const fe=e.exposed||(e.exposed={});J.forEach(de=>{Object.defineProperty(fe,de,{get:()=>n[de],set:$e=>n[de]=$e})})}else e.exposed||(e.exposed={});q&&e.render===vt&&(e.render=q),Z!=null&&(e.inheritAttrs=Z),U&&(e.components=U),ee&&(e.directives=ee)}function L6(e,t,n=vt){K(e)&&(e=bs(e));for(const r in e){const o=e[r];let s;ye(o)?"default"in o?s=ue(o.from||r,o.default,!0):s=ue(o.from||r):s=ue(o),Ve(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:E=>s.value=E}):t[r]=s}}function iE(e,t,n){it(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ai(e,t,n,r){const o=r.includes(".")?ti(n,r):()=>n[r];if(ie(e)){const s=t[e];ne(s)&&re(o,s)}else if(ne(e))re(o,e.bind(n));else if(ye(e))if(K(e))e.forEach(s=>ai(s,t,n,r));else{const s=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(s)&&re(o,s,e)}}function i8(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:E}}=e.appContext,l=s.get(t);let c;return l?c=l:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(a=>fo(c,a,E,!0)),fo(c,t,E)),ye(t)&&s.set(t,c),c}function fo(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&fo(e,s,n,!0),o&&o.forEach(E=>fo(e,E,n,!0));for(const E in t)if(!(r&&E==="expose")){const l=R6[E]||n&&n[E];e[E]=l?l(e[E],t[E]):t[E]}return e}const R6={data:aE,props:cE,emits:cE,methods:ar,computed:ar,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:ar,directives:ar,watch:F6,provide:aE,inject:O6};function aE(e,t){return t?e?function(){return Le(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function O6(e,t){return ar(bs(e),bs(t))}function bs(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function qe(e,t){return e?[...new Set([].concat(e,t))]:t}function ar(e,t){return e?Le(Object.create(null),e,t):t}function cE(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Le(Object.create(null),lE(e),lE(t??{})):t}function F6(e,t){if(!e)return t;if(!t)return e;const n=Le(Object.create(null),e);for(const r in t)n[r]=qe(e[r],t[r]);return n}function ci(){return{app:null,config:{isNativeTag:o0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let V6=0;function S6(e,t){return function(r,o=null){ne(r)||(r=Le({},r)),o!=null&&!ye(o)&&(o=null);const s=ci(),E=new Set;let l=!1;const c=s.app={_uid:V6++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:l1,get config(){return s.config},set config(a){},use(a,...p){return E.has(a)||(a&&ne(a.install)?(E.add(a),a.install(c,...p)):ne(a)&&(E.add(a),a(c,...p))),c},mixin(a){return s.mixins.includes(a)||s.mixins.push(a),c},component(a,p){return p?(s.components[a]=p,c):s.components[a]},directive(a,p){return p?(s.directives[a]=p,c):s.directives[a]},mount(a,p,d){if(!l){const B=Pe(r,o);return B.appContext=s,p&&t?t(B,a):e(B,a,d),l=!0,c._container=a,a.__vue_app__=c,Ro(B.component)||B.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(a,p){return s.provides[a]=p,c},runWithContext(a){mo=c;try{return a()}finally{mo=null}}};return c}}let mo=null;function ft(e,t){if(Se){let n=Se.provides;const r=Se.parent&&Se.parent.provides;r===n&&(n=Se.provides=Object.create(r)),n[e]=t}}function ue(e,t,n=!1){const r=Se||He;if(r||mo){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:mo._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ne(t)?t.call(r&&r.proxy):t}}function k6(e,t,n,r=!1){const o={},s={};co(s,Lo,1),e.propsDefaults=Object.create(null),ui(e,t,o,s);for(const E in e.propsOptions[0])E in o||(o[E]=void 0);n?e.props=r?o:zl(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function x6(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:E}}=e,l=ce(o),[c]=e.propsOptions;let a=!1;if((r||E>0)&&!(E&16)){if(E&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let B=p[d];if(Io(e.emitsOptions,B))continue;const v=t[B];if(c)if(ve(s,B))v!==s[B]&&(s[B]=v,a=!0);else{const m=at(B);o[m]=_s(c,l,m,v,e,!1)}else v!==s[B]&&(s[B]=v,a=!0)}}}else{ui(e,t,o,s)&&(a=!0);let p;for(const d in l)(!t||!ve(t,d)&&((p=hn(d))===d||!ve(t,p)))&&(c?n&&(n[d]!==void 0||n[p]!==void 0)&&(o[d]=_s(c,l,d,void 0,e,!0)):delete o[d]);if(s!==l)for(const d in s)(!t||!ve(t,d))&&(delete s[d],a=!0)}a&&St(e,"set","$attrs")}function ui(e,t,n,r){const[o,s]=e.propsOptions;let E=!1,l;if(t)for(let c in t){if(cr(c))continue;const a=t[c];let p;o&&ve(o,p=at(c))?!s||!s.includes(p)?n[p]=a:(l||(l={}))[p]=a:Io(e.emitsOptions,c)||(!(c in r)||a!==r[c])&&(r[c]=a,E=!0)}if(s){const c=ce(n),a=l||De;for(let p=0;p<s.length;p++){const d=s[p];n[d]=_s(o,c,d,a[d],e,!ve(a,d))}}return E}function _s(e,t,n,r,o,s){const E=e[n];if(E!=null){const l=ve(E,"default");if(l&&r===void 0){const c=E.default;if(E.type!==Function&&!E.skipFactory&&ne(c)){const{propsDefaults:a}=o;n in a?r=a[n]:(jn(o),r=a[n]=c.call(null,t),An())}else r=c}E[0]&&(s&&!l?r=!1:E[1]&&(r===""||r===hn(n))&&(r=!0))}return r}function pi(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,E={},l=[];let c=!1;if(!ne(e)){const p=d=>{c=!0;const[B,v]=pi(d,t,!0);Le(E,B),v&&l.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!s&&!c)return ye(e)&&r.set(e,Rn),Rn;if(K(s))for(let p=0;p<s.length;p++){const d=at(s[p]);uE(d)&&(E[d]=De)}else if(s)for(const p in s){const d=at(p);if(uE(d)){const B=s[p],v=E[d]=K(B)||ne(B)?{type:B}:Le({},B);if(v){const m=BE(Boolean,v.type),g=BE(String,v.type);v[0]=m>-1,v[1]=g<0||m<g,(m>-1||ve(v,"default"))&&l.push(d)}}}const a=[E,l];return ye(e)&&r.set(e,a),a}function uE(e){return e[0]!=="$"}function pE(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function dE(e,t){return pE(e)===pE(t)}function BE(e,t){return K(t)?t.findIndex(n=>dE(n,e)):ne(t)&&dE(t,e)?0:-1}const di=e=>e[0]==="_"||e==="$stable",a8=e=>K(e)?e.map(dt):[dt(e)],$6=(e,t,n)=>{if(t._n)return t;const r=i6((...o)=>a8(t(...o)),n);return r._c=!1,r},Bi=(e,t,n)=>{const r=e._ctx;for(const o in e){if(di(o))continue;const s=e[o];if(ne(s))t[o]=$6(o,s,r);else if(s!=null){const E=a8(s);t[o]=()=>E}}},Ai=(e,t)=>{const n=a8(t);e.slots.default=()=>n},M6=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ce(t),co(t,"_",n)):Bi(t,e.slots={})}else e.slots={},t&&Ai(e,t);co(e.slots,Lo,1)},N6=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,E=De;if(r.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:(Le(o,t),!n&&l===1&&delete o._):(s=!t.$stable,Bi(t,o)),E=t}else t&&(Ai(e,t),E={default:1});if(s)for(const l in o)!di(l)&&!(l in E)&&delete o[l]};function ho(e,t,n,r,o=!1){if(K(e)){e.forEach((B,v)=>ho(B,t&&(K(t)?t[v]:t),n,r,o));return}if(Sn(r)&&!o)return;const s=r.shapeFlag&4?Ro(r.component)||r.component.proxy:r.el,E=o?null:s,{i:l,r:c}=e,a=t&&t.r,p=l.refs===De?l.refs={}:l.refs,d=l.setupState;if(a!=null&&a!==c&&(ie(a)?(p[a]=null,ve(d,a)&&(d[a]=null)):Ve(a)&&(a.value=null)),ne(c))Qt(c,l,12,[E,p]);else{const B=ie(c),v=Ve(c);if(B||v){const m=()=>{if(e.f){const g=B?ve(d,c)?d[c]:p[c]:c.value;o?K(g)&&qs(g,s):K(g)?g.includes(s)||g.push(s):B?(p[c]=[s],ve(d,c)&&(d[c]=p[c])):(c.value=[s],e.k&&(p[e.k]=c.value))}else B?(p[c]=E,ve(d,c)&&(d[c]=E)):v&&(c.value=E,e.k&&(p[e.k]=E))};E?(m.id=-1,Ke(m,n)):m()}}}let zt=!1;const Xr=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Zr=e=>e.nodeType===8;function H6(e){const{mt:t,p:n,o:{patchProp:r,createText:o,nextSibling:s,parentNode:E,remove:l,insert:c,createComment:a}}=e,p=(h,_)=>{if(!_.hasChildNodes()){n(null,h,_),Ao(),_._vnode=h;return}zt=!1,d(_.firstChild,h,null,null,null),Ao(),_._vnode=h,zt&&console.error("Hydration completed but contains mismatches.")},d=(h,_,L,F,q,R=!1)=>{const $=Zr(h)&&h.data==="[",I=()=>g(h,_,L,F,q,$),{type:z,ref:J,shapeFlag:Z,patchFlag:U}=_;let ee=h.nodeType;_.el=h,U===-2&&(R=!1,_.dynamicChildren=null);let W=null;switch(z){case Hn:ee!==3?_.children===""?(c(_.el=o(""),E(h),h),W=h):W=I():(h.data!==_.children&&(zt=!0,h.data=_.children),W=s(h));break;case nt:ee!==8||$?W=I():W=s(h);break;case pr:if($&&(h=s(h),ee=h.nodeType),ee===1||ee===3){W=h;const Re=!_.children.length;for(let oe=0;oe<_.staticCount;oe++)Re&&(_.children+=W.nodeType===1?W.outerHTML:W.data),oe===_.staticCount-1&&(_.anchor=W),W=s(W);return $?s(W):W}else I();break;case Ue:$?W=m(h,_,L,F,q,R):W=I();break;default:if(Z&1)ee!==1||_.type.toLowerCase()!==h.tagName.toLowerCase()?W=I():W=B(h,_,L,F,q,R);else if(Z&6){_.slotScopeIds=q;const Re=E(h);if(t(_,Re,null,L,F,Xr(Re),R),W=$?D(h):s(h),W&&Zr(W)&&W.data==="teleport end"&&(W=s(W)),Sn(_)){let oe;$?(oe=Pe(Ue),oe.anchor=W?W.previousSibling:Re.lastChild):oe=h.nodeType===3?gi(""):Pe("div"),oe.el=h,_.component.subTree=oe}}else Z&64?ee!==8?W=I():W=_.type.hydrate(h,_,L,F,q,R,e,v):Z&128&&(W=_.type.hydrate(h,_,L,F,Xr(E(h)),q,R,e,d))}return J!=null&&ho(J,null,F,_),W},B=(h,_,L,F,q,R)=>{R=R||!!_.dynamicChildren;const{type:$,props:I,patchFlag:z,shapeFlag:J,dirs:Z}=_,U=$==="input"&&Z||$==="option";if(U||z!==-1){if(Z&&wt(_,null,L,"created"),I)if(U||!R||z&48)for(const W in I)(U&&W.endsWith("value")||Pr(W)&&!cr(W))&&r(h,W,null,I[W],!1,void 0,L);else I.onClick&&r(h,"onClick",null,I.onClick,!1,void 0,L);let ee;if((ee=I&&I.onVnodeBeforeMount)&&Et(ee,L,_),Z&&wt(_,null,L,"beforeMount"),((ee=I&&I.onVnodeMounted)||Z)&&Zl(()=>{ee&&Et(ee,L,_),Z&&wt(_,null,L,"mounted")},F),J&16&&!(I&&(I.innerHTML||I.textContent))){let W=v(h.firstChild,_,h,L,F,q,R);for(;W;){zt=!0;const Re=W;W=W.nextSibling,l(Re)}}else J&8&&h.textContent!==_.children&&(zt=!0,h.textContent=_.children)}return h.nextSibling},v=(h,_,L,F,q,R,$)=>{$=$||!!_.dynamicChildren;const I=_.children,z=I.length;for(let J=0;J<z;J++){const Z=$?I[J]:I[J]=dt(I[J]);if(h)h=d(h,Z,F,q,R,$);else{if(Z.type===Hn&&!Z.children)continue;zt=!0,n(null,Z,L,null,F,q,Xr(L),R)}}return h},m=(h,_,L,F,q,R)=>{const{slotScopeIds:$}=_;$&&(q=q?q.concat($):$);const I=E(h),z=v(s(h),_,I,L,F,q,R);return z&&Zr(z)&&z.data==="]"?s(_.anchor=z):(zt=!0,c(_.anchor=a("]"),I,z),z)},g=(h,_,L,F,q,R)=>{if(zt=!0,_.el=null,R){const z=D(h);for(;;){const J=s(h);if(J&&J!==z)l(J);else break}}const $=s(h),I=E(h);return l(h),n(null,_,I,$,L,F,Xr(I),q),$},D=h=>{let _=0;for(;h;)if(h=s(h),h&&Zr(h)&&(h.data==="["&&_++,h.data==="]")){if(_===0)return s(h);_--}return h};return[p,d]}const Ke=Zl;function j6(e){return z6(e,H6)}function z6(e,t){const n=ds();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:E,createText:l,createComment:c,setText:a,setElementText:p,parentNode:d,nextSibling:B,setScopeId:v=vt,insertStaticContent:m}=e,g=(f,b,y,w=null,P=null,O=null,H=!1,k=null,M=!!b.dynamicChildren)=>{if(f===b)return;f&&!cn(f,b)&&(w=T(f),Me(f,P,O,!0),f=null),b.patchFlag===-2&&(M=!1,b.dynamicChildren=null);const{type:V,ref:Q,shapeFlag:G}=b;switch(V){case Hn:D(f,b,y,w);break;case nt:h(f,b,y,w);break;case pr:f==null&&_(b,y,w,H);break;case Ue:U(f,b,y,w,P,O,H,k,M);break;default:G&1?q(f,b,y,w,P,O,H,k,M):G&6?ee(f,b,y,w,P,O,H,k,M):(G&64||G&128)&&V.process(f,b,y,w,P,O,H,k,M,x)}Q!=null&&P&&ho(Q,f&&f.ref,O,b||f,!b)},D=(f,b,y,w)=>{if(f==null)r(b.el=l(b.children),y,w);else{const P=b.el=f.el;b.children!==f.children&&a(P,b.children)}},h=(f,b,y,w)=>{f==null?r(b.el=c(b.children||""),y,w):b.el=f.el},_=(f,b,y,w)=>{[f.el,f.anchor]=m(f.children,b,y,w,f.el,f.anchor)},L=({el:f,anchor:b},y,w)=>{let P;for(;f&&f!==b;)P=B(f),r(f,y,w),f=P;r(b,y,w)},F=({el:f,anchor:b})=>{let y;for(;f&&f!==b;)y=B(f),o(f),f=y;o(b)},q=(f,b,y,w,P,O,H,k,M)=>{H=H||b.type==="svg",f==null?R(b,y,w,P,O,H,k,M):z(f,b,P,O,H,k,M)},R=(f,b,y,w,P,O,H,k)=>{let M,V;const{type:Q,props:G,shapeFlag:X,transition:te,dirs:Ee}=f;if(M=f.el=E(f.type,O,G&&G.is,G),X&8?p(M,f.children):X&16&&I(f.children,M,null,w,P,O&&Q!=="foreignObject",H,k),Ee&&wt(f,null,w,"created"),$(M,f,f.scopeId,H,w),G){for(const _e in G)_e!=="value"&&!cr(_e)&&s(M,_e,null,G[_e],O,f.children,w,P,Oe);"value"in G&&s(M,"value",null,G.value),(V=G.onVnodeBeforeMount)&&Et(V,w,f)}Ee&&wt(f,null,w,"beforeMount");const Ce=(!P||P&&!P.pendingBranch)&&te&&!te.persisted;Ce&&te.beforeEnter(M),r(M,b,y),((V=G&&G.onVnodeMounted)||Ce||Ee)&&Ke(()=>{V&&Et(V,w,f),Ce&&te.enter(M),Ee&&wt(f,null,w,"mounted")},P)},$=(f,b,y,w,P)=>{if(y&&v(f,y),w)for(let O=0;O<w.length;O++)v(f,w[O]);if(P){let O=P.subTree;if(b===O){const H=P.vnode;$(f,H,H.scopeId,H.slotScopeIds,P.parent)}}},I=(f,b,y,w,P,O,H,k,M=0)=>{for(let V=M;V<f.length;V++){const Q=f[V]=k?Kt(f[V]):dt(f[V]);g(null,Q,b,y,w,P,O,H,k)}},z=(f,b,y,w,P,O,H)=>{const k=b.el=f.el;let{patchFlag:M,dynamicChildren:V,dirs:Q}=b;M|=f.patchFlag&16;const G=f.props||De,X=b.props||De;let te;y&&En(y,!1),(te=X.onVnodeBeforeUpdate)&&Et(te,y,b,f),Q&&wt(b,f,y,"beforeUpdate"),y&&En(y,!0);const Ee=P&&b.type!=="foreignObject";if(V?J(f.dynamicChildren,V,k,y,w,Ee,O):H||de(f,b,k,null,y,w,Ee,O,!1),M>0){if(M&16)Z(k,b,G,X,y,w,P);else if(M&2&&G.class!==X.class&&s(k,"class",null,X.class,P),M&4&&s(k,"style",G.style,X.style,P),M&8){const Ce=b.dynamicProps;for(let _e=0;_e<Ce.length;_e++){const Fe=Ce[_e],ut=G[Fe],gn=X[Fe];(gn!==ut||Fe==="value")&&s(k,Fe,ut,gn,P,f.children,y,w,Oe)}}M&1&&f.children!==b.children&&p(k,b.children)}else!H&&V==null&&Z(k,b,G,X,y,w,P);((te=X.onVnodeUpdated)||Q)&&Ke(()=>{te&&Et(te,y,b,f),Q&&wt(b,f,y,"updated")},w)},J=(f,b,y,w,P,O,H)=>{for(let k=0;k<b.length;k++){const M=f[k],V=b[k],Q=M.el&&(M.type===Ue||!cn(M,V)||M.shapeFlag&70)?d(M.el):y;g(M,V,Q,null,w,P,O,H,!0)}},Z=(f,b,y,w,P,O,H)=>{if(y!==w){if(y!==De)for(const k in y)!cr(k)&&!(k in w)&&s(f,k,y[k],null,H,b.children,P,O,Oe);for(const k in w){if(cr(k))continue;const M=w[k],V=y[k];M!==V&&k!=="value"&&s(f,k,V,M,H,b.children,P,O,Oe)}"value"in w&&s(f,"value",y.value,w.value)}},U=(f,b,y,w,P,O,H,k,M)=>{const V=b.el=f?f.el:l(""),Q=b.anchor=f?f.anchor:l("");let{patchFlag:G,dynamicChildren:X,slotScopeIds:te}=b;te&&(k=k?k.concat(te):te),f==null?(r(V,y,w),r(Q,y,w),I(b.children,y,Q,P,O,H,k,M)):G>0&&G&64&&X&&f.dynamicChildren?(J(f.dynamicChildren,X,y,P,O,H,k),(b.key!=null||P&&b===P.subTree)&&vi(f,b,!0)):de(f,b,y,Q,P,O,H,k,M)},ee=(f,b,y,w,P,O,H,k,M)=>{b.slotScopeIds=k,f==null?b.shapeFlag&512?P.ctx.activate(b,y,w,H,M):W(b,y,w,P,O,H,M):Re(f,b,M)},W=(f,b,y,w,P,O,H)=>{const k=f.component=X6(f,w,P);if(Vr(f)&&(k.ctx.renderer=x),Z6(k),k.asyncDep){if(P&&P.registerDep(k,oe),!f.el){const M=k.subTree=Pe(nt);h(null,M,b,y)}return}oe(k,f,b,y,P,O,H)},Re=(f,b,y)=>{const w=b.component=f.component;if(u6(f,b,y))if(w.asyncDep&&!w.asyncResolved){fe(w,b,y);return}else w.next=b,o6(w.update),w.update();else b.el=f.el,w.vnode=b},oe=(f,b,y,w,P,O,H)=>{const k=()=>{if(f.isMounted){let{next:Q,bu:G,u:X,parent:te,vnode:Ee}=f,Ce=Q,_e;En(f,!1),Q?(Q.el=Ee.el,fe(f,Q,H)):Q=Ee,G&&io(G),(_e=Q.props&&Q.props.onVnodeBeforeUpdate)&&Et(_e,te,Q,Ee),En(f,!0);const Fe=jo(f),ut=f.subTree;f.subTree=Fe,g(ut,Fe,d(ut.el),T(ut),f,P,O),Q.el=Fe.el,Ce===null&&p6(f,Fe.el),X&&Ke(X,P),(_e=Q.props&&Q.props.onVnodeUpdated)&&Ke(()=>Et(_e,te,Q,Ee),P)}else{let Q;const{el:G,props:X}=b,{bm:te,m:Ee,parent:Ce}=f,_e=Sn(b);if(En(f,!1),te&&io(te),!_e&&(Q=X&&X.onVnodeBeforeMount)&&Et(Q,Ce,b),En(f,!0),G&&Be){const Fe=()=>{f.subTree=jo(f),Be(G,f.subTree,f,P,null)};_e?b.type.__asyncLoader().then(()=>!f.isUnmounted&&Fe()):Fe()}else{const Fe=f.subTree=jo(f);g(null,Fe,y,w,f,P,O),b.el=Fe.el}if(Ee&&Ke(Ee,P),!_e&&(Q=X&&X.onVnodeMounted)){const Fe=b;Ke(()=>Et(Q,Ce,Fe),P)}(b.shapeFlag&256||Ce&&Sn(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&f.a&&Ke(f.a,P),f.isMounted=!0,b=y=w=null}},M=f.effect=new Js(k,()=>wo(V),f.scope),V=f.update=()=>M.run();V.id=f.uid,En(f,!0),V()},fe=(f,b,y)=>{b.component=f;const w=f.vnode.props;f.vnode=b,f.next=null,x6(f,b.props,w,y),N6(f,b.children,y),Qn(),rE(),Xn()},de=(f,b,y,w,P,O,H,k,M=!1)=>{const V=f&&f.children,Q=f?f.shapeFlag:0,G=b.children,{patchFlag:X,shapeFlag:te}=b;if(X>0){if(X&128){yt(V,G,y,w,P,O,H,k,M);return}else if(X&256){$e(V,G,y,w,P,O,H,k,M);return}}te&8?(Q&16&&Oe(V,P,O),G!==V&&p(y,G)):Q&16?te&16?yt(V,G,y,w,P,O,H,k,M):Oe(V,P,O,!0):(Q&8&&p(y,""),te&16&&I(G,y,w,P,O,H,k,M))},$e=(f,b,y,w,P,O,H,k,M)=>{f=f||Rn,b=b||Rn;const V=f.length,Q=b.length,G=Math.min(V,Q);let X;for(X=0;X<G;X++){const te=b[X]=M?Kt(b[X]):dt(b[X]);g(f[X],te,y,null,P,O,H,k,M)}V>Q?Oe(f,P,O,!0,!1,G):I(b,y,w,P,O,H,k,M,G)},yt=(f,b,y,w,P,O,H,k,M)=>{let V=0;const Q=b.length;let G=f.length-1,X=Q-1;for(;V<=G&&V<=X;){const te=f[V],Ee=b[V]=M?Kt(b[V]):dt(b[V]);if(cn(te,Ee))g(te,Ee,y,null,P,O,H,k,M);else break;V++}for(;V<=G&&V<=X;){const te=f[G],Ee=b[X]=M?Kt(b[X]):dt(b[X]);if(cn(te,Ee))g(te,Ee,y,null,P,O,H,k,M);else break;G--,X--}if(V>G){if(V<=X){const te=X+1,Ee=te<Q?b[te].el:w;for(;V<=X;)g(null,b[V]=M?Kt(b[V]):dt(b[V]),y,Ee,P,O,H,k,M),V++}}else if(V>X)for(;V<=G;)Me(f[V],P,O,!0),V++;else{const te=V,Ee=V,Ce=new Map;for(V=Ee;V<=X;V++){const Xe=b[V]=M?Kt(b[V]):dt(b[V]);Xe.key!=null&&Ce.set(Xe.key,V)}let _e,Fe=0;const ut=X-Ee+1;let gn=!1,q8=0;const or=new Array(ut);for(V=0;V<ut;V++)or[V]=0;for(V=te;V<=G;V++){const Xe=f[V];if(Fe>=ut){Me(Xe,P,O,!0);continue}let Dt;if(Xe.key!=null)Dt=Ce.get(Xe.key);else for(_e=Ee;_e<=X;_e++)if(or[_e-Ee]===0&&cn(Xe,b[_e])){Dt=_e;break}Dt===void 0?Me(Xe,P,O,!0):(or[Dt-Ee]=V+1,Dt>=q8?q8=Dt:gn=!0,g(Xe,b[Dt],y,null,P,O,H,k,M),Fe++)}const U8=gn?q6(or):Rn;for(_e=U8.length-1,V=ut-1;V>=0;V--){const Xe=Ee+V,Dt=b[Xe],G8=Xe+1<Q?b[Xe+1].el:w;or[V]===0?g(null,Dt,y,G8,P,O,H,k,M):gn&&(_e<0||V!==U8[_e]?ot(Dt,y,G8,2):_e--)}}},ot=(f,b,y,w,P=null)=>{const{el:O,type:H,transition:k,children:M,shapeFlag:V}=f;if(V&6){ot(f.component.subTree,b,y,w);return}if(V&128){f.suspense.move(b,y,w);return}if(V&64){H.move(f,b,y,x);return}if(H===Ue){r(O,b,y);for(let G=0;G<M.length;G++)ot(M[G],b,y,w);r(f.anchor,b,y);return}if(H===pr){L(f,b,y);return}if(w!==2&&V&1&&k)if(w===0)k.beforeEnter(O),r(O,b,y),Ke(()=>k.enter(O),P);else{const{leave:G,delayLeave:X,afterLeave:te}=k,Ee=()=>r(O,b,y),Ce=()=>{G(O,()=>{Ee(),te&&te()})};X?X(O,Ee,Ce):Ce()}else r(O,b,y)},Me=(f,b,y,w=!1,P=!1)=>{const{type:O,props:H,ref:k,children:M,dynamicChildren:V,shapeFlag:Q,patchFlag:G,dirs:X}=f;if(k!=null&&ho(k,null,y,f,!0),Q&256){b.ctx.deactivate(f);return}const te=Q&1&&X,Ee=!Sn(f);let Ce;if(Ee&&(Ce=H&&H.onVnodeBeforeUnmount)&&Et(Ce,b,f),Q&6)Ct(f.component,y,w);else{if(Q&128){f.suspense.unmount(y,w);return}te&&wt(f,null,b,"beforeUnmount"),Q&64?f.type.remove(f,b,y,P,x,w):V&&(O!==Ue||G>0&&G&64)?Oe(V,b,y,!1,!0):(O===Ue&&G&384||!P&&Q&16)&&Oe(M,b,y),w&&Qe(f)}(Ee&&(Ce=H&&H.onVnodeUnmounted)||te)&&Ke(()=>{Ce&&Et(Ce,b,f),te&&wt(f,null,b,"unmounted")},y)},Qe=f=>{const{type:b,el:y,anchor:w,transition:P}=f;if(b===Ue){Tt(y,w);return}if(b===pr){F(f);return}const O=()=>{o(y),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(f.shapeFlag&1&&P&&!P.persisted){const{leave:H,delayLeave:k}=P,M=()=>H(y,O);k?k(f.el,O,M):M()}else O()},Tt=(f,b)=>{let y;for(;f!==b;)y=B(f),o(f),f=y;o(b)},Ct=(f,b,y)=>{const{bum:w,scope:P,update:O,subTree:H,um:k}=f;w&&io(w),P.stop(),O&&(O.active=!1,Me(H,f,b,y)),k&&Ke(k,b),Ke(()=>{f.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Oe=(f,b,y,w=!1,P=!1,O=0)=>{for(let H=O;H<f.length;H++)Me(f[H],b,y,w,P)},T=f=>f.shapeFlag&6?T(f.component.subTree):f.shapeFlag&128?f.suspense.next():B(f.anchor||f.el),j=(f,b,y)=>{f==null?b._vnode&&Me(b._vnode,null,null,!0):g(b._vnode||null,f,b,null,null,null,y),rE(),Ao(),b._vnode=f},x={p:g,um:Me,m:ot,r:Qe,mt:W,mc:I,pc:de,pbc:J,n:T,o:e};let Y,Be;return t&&([Y,Be]=t(x)),{render:j,hydrate:Y,createApp:S6(j,Y)}}function En({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function vi(e,t,n=!1){const r=e.children,o=t.children;if(K(r)&&K(o))for(let s=0;s<r.length;s++){const E=r[s];let l=o[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[s]=Kt(o[s]),l.el=E.el),n||vi(E,l)),l.type===Hn&&(l.el=E.el)}}function q6(e){const t=e.slice(),n=[0];let r,o,s,E,l;const c=e.length;for(r=0;r<c;r++){const a=e[r];if(a!==0){if(o=n[n.length-1],e[o]<a){t[r]=o,n.push(r);continue}for(s=0,E=n.length-1;s<E;)l=s+E>>1,e[n[l]]<a?s=l+1:E=l;a<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,E=n[s-1];s-- >0;)n[s]=E,E=t[E];return n}const U6=e=>e.__isTeleport,Ue=Symbol.for("v-fgt"),Hn=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),pr=Symbol.for("v-stc"),dr=[];let At=null;function fi(e=!1){dr.push(At=e?null:[])}function G6(){dr.pop(),At=dr[dr.length-1]||null}let Dr=1;function AE(e){Dr+=e}function mi(e){return e.dynamicChildren=Dr>0?At||Rn:null,G6(),Dr>0&&At&&At.push(e),e}function G3(e,t,n,r,o,s){return mi(_i(e,t,n,r,o,s,!0))}function hi(e,t,n,r,o){return mi(Pe(e,t,n,r,o,!0))}function bo(e){return e?e.__v_isVNode===!0:!1}function cn(e,t){return e.type===t.type&&e.key===t.key}const Lo="__vInternal",bi=({key:e})=>e??null,ao=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||Ve(e)||ne(e)?{i:He,r:e,k:t,f:!!n}:e:null);function _i(e,t=null,n=null,r=0,o=null,s=e===Ue?0:1,E=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bi(t),ref:t&&ao(t),scopeId:To,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:He};return l?(c8(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=ie(n)?8:16),Dr>0&&!E&&At&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&At.push(c),c}const Pe=W6;function W6(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===w6)&&(e=nt),bo(e)){const l=Zt(e,t,!0);return n&&c8(l,n),Dr>0&&!s&&At&&(l.shapeFlag&6?At[At.indexOf(e)]=l:At.push(l)),l.patchFlag|=-2,l}if(o1(e)&&(e=e.__vccOpts),t){t=K6(t);let{class:l,style:c}=t;l&&!ie(l)&&(t.class=Ws(l)),ye(c)&&(ql(c)&&!K(c)&&(c=Le({},c)),t.style=Gs(c))}const E=ie(e)?1:d6(e)?128:U6(e)?64:ye(e)?4:ne(e)?2:0;return _i(e,t,n,r,o,E,s,!0)}function K6(e){return e?ql(e)||Lo in e?Le({},e):e:null}function Zt(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:E}=e,l=t?Y6(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&bi(l),ref:t&&t.ref?n&&o?K(o)?o.concat(ao(t)):[o,ao(t)]:ao(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:E,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function gi(e=" ",t=0){return Pe(Hn,null,e,t)}function W3(e,t){const n=Pe(pr,null,e);return n.staticCount=t,n}function K3(e="",t=!1){return t?(fi(),hi(nt,null,e)):Pe(nt,null,e)}function dt(e){return e==null||typeof e=="boolean"?Pe(nt):K(e)?Pe(Ue,null,e.slice()):typeof e=="object"?Kt(e):Pe(Hn,null,String(e))}function Kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zt(e)}function c8(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),c8(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Lo in t)?t._ctx=He:o===3&&He&&(He.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ne(t)?(t={default:t,_ctx:He},n=32):(t=String(t),r&64?(n=16,t=[gi(t)]):n=8);e.children=t,e.shapeFlag|=n}function Y6(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Ws([t.class,r.class]));else if(o==="style")t.style=Gs([t.style,r.style]);else if(Pr(o)){const s=t[o],E=r[o];E&&s!==E&&!(K(s)&&s.includes(E))&&(t[o]=s?[].concat(s,E):E)}else o!==""&&(t[o]=r[o])}return t}function Et(e,t,n,r=null){it(e,t,7,[n,r])}const J6=ci();let Q6=0;function X6(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||J6,s={uid:Q6++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new m0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pi(r,o),emitsOptions:Xl(r,o),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=l6.bind(null,s),e.ce&&e.ce(s),s}let Se=null;const rn=()=>Se||He;let u8,yn,vE="__VUE_INSTANCE_SETTERS__";(yn=ds()[vE])||(yn=ds()[vE]=[]),yn.push(e=>Se=e),u8=e=>{yn.length>1?yn.forEach(t=>t(e)):yn[0](e)};const jn=e=>{u8(e),e.scope.on()},An=()=>{Se&&Se.scope.off(),u8(null)};function yi(e){return e.vnode.shapeFlag&4}let zn=!1;function Z6(e,t=!1){zn=t;const{props:n,children:r}=e.vnode,o=yi(e);k6(e,n,o,t),M6(e,r);const s=o?e1(e,t):void 0;return zn=!1,s}function e1(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ul(new Proxy(e.ctx,T6));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?n1(e):null;jn(e),Qn();const s=Qt(r,e,0,[e.props,o]);if(Xn(),An(),Il(s)){if(s.then(An,An),t)return s.then(E=>{fE(e,E,t)}).catch(E=>{Fr(E,e,0)});e.asyncDep=s}else fE(e,s,t)}else Ci(e,t)}function fE(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=Wl(t)),Ci(e,n)}let mE;function Ci(e,t,n){const r=e.type;if(!e.render){if(!t&&mE&&!r.render){const o=r.template||i8(e).template;if(o){const{isCustomElement:s,compilerOptions:E}=e.appContext.config,{delimiters:l,compilerOptions:c}=r,a=Le(Le({isCustomElement:s,delimiters:l},E),c);r.render=mE(o,a)}}e.render=r.render||vt}jn(e),Qn(),P6(e),Xn(),An()}function t1(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Je(e,"get","$attrs"),t[n]}}))}function n1(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return t1(e)},slots:e.slots,emit:e.emit,expose:t}}function Ro(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wl(Ul(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ur)return ur[n](e)},has(t,n){return n in t||n in ur}}))}function r1(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function o1(e){return ne(e)&&"__vccOpts"in e}const C=(e,t)=>t6(e,t,zn);function i(e,t,n){const r=arguments.length;return r===2?ye(t)&&!K(t)?bo(t)?Pe(e,null,[t]):Pe(e,t):Pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&bo(n)&&(n=[n]),Pe(e,t,n))}const s1=Symbol.for("v-scx"),E1=()=>ue(s1),l1="3.3.4",i1="http://www.w3.org/2000/svg",un=typeof document<"u"?document:null,hE=un&&un.createElement("template"),a1={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?un.createElementNS(i1,e):un.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>un.createTextNode(e),createComment:e=>un.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>un.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const E=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{hE.innerHTML=r?`<svg>${e}</svg>`:e;const l=hE.content;if(r){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[E?E.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c1(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function u1(e,t,n){const r=e.style,o=ie(n);if(n&&!o){if(t&&!ie(t))for(const s in t)n[s]==null&&gs(r,s,"");for(const s in n)gs(r,s,n[s])}else{const s=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const bE=/\s*!important$/;function gs(e,t,n){if(K(n))n.forEach(r=>gs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=p1(e,t);bE.test(n)?e.setProperty(hn(r),n.replace(bE,""),"important"):e[r]=n}}const _E=["Webkit","Moz","ms"],Go={};function p1(e,t){const n=Go[t];if(n)return n;let r=at(t);if(r!=="filter"&&r in e)return Go[t]=r;r=Rr(r);for(let o=0;o<_E.length;o++){const s=_E[o]+r;if(s in e)return Go[t]=s}return t}const gE="http://www.w3.org/1999/xlink";function d1(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(gE,t.slice(6,t.length)):e.setAttributeNS(gE,t,n);else{const s=v0(t);n==null||s&&!Ll(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function B1(e,t,n,r,o,s,E){if(t==="innerHTML"||t==="textContent"){r&&E(r,o,s),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const a=l==="OPTION"?e.getAttribute("value"):e.value,p=n??"";a!==p&&(e.value=p),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ll(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Vt(e,t,n,r){e.addEventListener(t,n,r)}function A1(e,t,n,r){e.removeEventListener(t,n,r)}function v1(e,t,n,r,o=null){const s=e._vei||(e._vei={}),E=s[t];if(r&&E)E.value=r;else{const[l,c]=f1(t);if(r){const a=s[t]=b1(r,o);Vt(e,l,a,c)}else E&&(A1(e,l,E,c),s[t]=void 0)}}const yE=/(?:Once|Passive|Capture)$/;function f1(e){let t;if(yE.test(e)){t={};let r;for(;r=e.match(yE);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hn(e.slice(2)),t]}let Wo=0;const m1=Promise.resolve(),h1=()=>Wo||(m1.then(()=>Wo=0),Wo=Date.now());function b1(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;it(_1(r,n.value),t,5,[r])};return n.value=e,n.attached=h1(),n}function _1(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const CE=/^on[a-z]/,g1=(e,t,n,r,o=!1,s,E,l,c)=>{t==="class"?c1(e,r,o):t==="style"?u1(e,n,r):Pr(t)?zs(t)||v1(e,t,n,r,E):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):y1(e,t,r,o))?B1(e,t,r,s,E,l,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),d1(e,t,r,o))};function y1(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&CE.test(t)&&ne(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||CE.test(t)&&ie(n)?!1:t in e}const qt="transition",sr="animation",en=(e,{slots:t})=>i(v6,wi(e),t);en.displayName="Transition";const Di={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},C1=en.props=Le({},ri,Di),ln=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},DE=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function wi(e){const t={};for(const U in e)U in Di||(t[U]=e[U]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:E=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:a=E,appearToClass:p=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:B=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,m=D1(o),g=m&&m[0],D=m&&m[1],{onBeforeEnter:h,onEnter:_,onEnterCancelled:L,onLeave:F,onLeaveCancelled:q,onBeforeAppear:R=h,onAppear:$=_,onAppearCancelled:I=L}=t,z=(U,ee,W)=>{Wt(U,ee?p:l),Wt(U,ee?a:E),W&&W()},J=(U,ee)=>{U._isLeaving=!1,Wt(U,d),Wt(U,v),Wt(U,B),ee&&ee()},Z=U=>(ee,W)=>{const Re=U?$:_,oe=()=>z(ee,U,W);ln(Re,[ee,oe]),wE(()=>{Wt(ee,U?c:s),Lt(ee,U?p:l),DE(Re)||IE(ee,r,g,oe)})};return Le(t,{onBeforeEnter(U){ln(h,[U]),Lt(U,s),Lt(U,E)},onBeforeAppear(U){ln(R,[U]),Lt(U,c),Lt(U,a)},onEnter:Z(!1),onAppear:Z(!0),onLeave(U,ee){U._isLeaving=!0;const W=()=>J(U,ee);Lt(U,d),Ti(),Lt(U,B),wE(()=>{U._isLeaving&&(Wt(U,d),Lt(U,v),DE(F)||IE(U,r,D,W))}),ln(F,[U,W])},onEnterCancelled(U){z(U,!1),ln(L,[U])},onAppearCancelled(U){z(U,!0),ln(I,[U])},onLeaveCancelled(U){J(U),ln(q,[U])}})}function D1(e){if(e==null)return null;if(ye(e))return[Ko(e.enter),Ko(e.leave)];{const t=Ko(e);return[t,t]}}function Ko(e){return c0(e)}function Lt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Wt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function wE(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let w1=0;function IE(e,t,n,r){const o=e._endId=++w1,s=()=>{o===e._endId&&r()};if(n)return setTimeout(s,n);const{type:E,timeout:l,propCount:c}=Ii(e,t);if(!E)return r();const a=E+"end";let p=0;const d=()=>{e.removeEventListener(a,B),s()},B=v=>{v.target===e&&++p>=c&&d()};setTimeout(()=>{p<c&&d()},l+1),e.addEventListener(a,B)}function Ii(e,t){const n=window.getComputedStyle(e),r=m=>(n[m]||"").split(", "),o=r(`${qt}Delay`),s=r(`${qt}Duration`),E=TE(o,s),l=r(`${sr}Delay`),c=r(`${sr}Duration`),a=TE(l,c);let p=null,d=0,B=0;t===qt?E>0&&(p=qt,d=E,B=s.length):t===sr?a>0&&(p=sr,d=a,B=c.length):(d=Math.max(E,a),p=d>0?E>a?qt:sr:null,B=p?p===qt?s.length:c.length:0);const v=p===qt&&/\b(transform|all)(,|$)/.test(r(`${qt}Property`).toString());return{type:p,timeout:d,propCount:B,hasTransform:v}}function TE(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>PE(n)+PE(e[r])))}function PE(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Ti(){return document.body.offsetHeight}const Pi=new WeakMap,Li=new WeakMap,Ri={name:"TransitionGroup",props:Le({},C1,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=rn(),r=ni();let o,s;return Ei(()=>{if(!o.length)return;const E=e.moveClass||`${e.name||"v"}-move`;if(!O1(o[0].el,n.vnode.el,E))return;o.forEach(P1),o.forEach(L1);const l=o.filter(R1);Ti(),l.forEach(c=>{const a=c.el,p=a.style;Lt(a,E),p.transform=p.webkitTransform=p.transitionDuration="";const d=a._moveCb=B=>{B&&B.target!==a||(!B||/transform$/.test(B.propertyName))&&(a.removeEventListener("transitionend",d),a._moveCb=null,Wt(a,E))};a.addEventListener("transitionend",d)})}),()=>{const E=ce(e),l=wi(E);let c=E.tag||Ue;o=s,s=t.default?E8(t.default()):[];for(let a=0;a<s.length;a++){const p=s[a];p.key!=null&&Cr(p,yr(p,l,r,n))}if(o)for(let a=0;a<o.length;a++){const p=o[a];Cr(p,yr(p,l,r,n)),Pi.set(p,p.el.getBoundingClientRect())}return Pe(c,null,s)}}},I1=e=>delete e.mode;Ri.props;const T1=Ri;function P1(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function L1(e){Li.set(e,e.el.getBoundingClientRect())}function R1(e){const t=Pi.get(e),n=Li.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${o}px)`,s.transitionDuration="0s",e}}function O1(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(E=>{E.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(E=>E&&r.classList.add(E)),r.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(r);const{hasTransform:s}=Ii(r);return o.removeChild(r),s}const tn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>io(t,n):t};function F1(e){e.target.composing=!0}function LE(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const RE={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=tn(o);const s=r||o.props&&o.props.type==="number";Vt(e,t?"change":"input",E=>{if(E.target.composing)return;let l=e.value;n&&(l=l.trim()),s&&(l=uo(l)),e._assign(l)}),n&&Vt(e,"change",()=>{e.value=e.value.trim()}),t||(Vt(e,"compositionstart",F1),Vt(e,"compositionend",LE),Vt(e,"change",LE))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},s){if(e._assign=tn(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&uo(e.value)===t))return;const E=t??"";e.value!==E&&(e.value=E)}},V1={deep:!0,created(e,t,n){e._assign=tn(n),Vt(e,"change",()=>{const r=e._modelValue,o=qn(e),s=e.checked,E=e._assign;if(K(r)){const l=Ks(r,o),c=l!==-1;if(s&&!c)E(r.concat(o));else if(!s&&c){const a=[...r];a.splice(l,1),E(a)}}else if(Jn(r)){const l=new Set(r);s?l.add(o):l.delete(o),E(l)}else E(Oi(e,s))})},mounted:OE,beforeUpdate(e,t,n){e._assign=tn(n),OE(e,t,n)}};function OE(e,{value:t,oldValue:n},r){e._modelValue=t,K(t)?e.checked=Ks(t,r.props.value)>-1:Jn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=vn(t,Oi(e,!0)))}const S1={created(e,{value:t},n){e.checked=vn(t,n.props.value),e._assign=tn(n),Vt(e,"change",()=>{e._assign(qn(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=tn(r),t!==n&&(e.checked=vn(t,r.props.value))}},k1={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const o=Jn(t);Vt(e,"change",()=>{const s=Array.prototype.filter.call(e.options,E=>E.selected).map(E=>n?uo(qn(E)):qn(E));e._assign(e.multiple?o?new Set(s):s:s[0])}),e._assign=tn(r)},mounted(e,{value:t}){FE(e,t)},beforeUpdate(e,t,n){e._assign=tn(n)},updated(e,{value:t}){FE(e,t)}};function FE(e,t){const n=e.multiple;if(!(n&&!K(t)&&!Jn(t))){for(let r=0,o=e.options.length;r<o;r++){const s=e.options[r],E=qn(s);if(n)K(t)?s.selected=Ks(t,E)>-1:s.selected=t.has(E);else if(vn(qn(s),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function qn(e){return"_value"in e?e._value:e.value}function Oi(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Y3={created(e,t,n){eo(e,t,n,null,"created")},mounted(e,t,n){eo(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){eo(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){eo(e,t,n,r,"updated")}};function x1(e,t){switch(e){case"SELECT":return k1;case"TEXTAREA":return RE;default:switch(t){case"checkbox":return V1;case"radio":return S1;default:return RE}}}function eo(e,t,n,r,o){const E=x1(e.tagName,n.props&&n.props.type)[o];E&&E(e,t,n,r)}const $1=["ctrl","shift","alt","meta"],M1={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>$1.some(n=>e[`${n}Key`]&&!t.includes(n))},J3=(e,t)=>(n,...r)=>{for(let o=0;o<t.length;o++){const s=M1[t[o]];if(s&&s(n,t))return}return e(n,...r)},N1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Q3=(e,t)=>n=>{if(!("key"in n))return;const r=hn(n.key);if(t.some(o=>o===r||N1[o]===r))return e(n)},X3={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Er(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Er(e,!0),r.enter(e)):r.leave(e,()=>{Er(e,!1)}):Er(e,t))},beforeUnmount(e,{value:t}){Er(e,t)}};function Er(e,t){e.style.display=t?e._vod:"none"}const H1=Le({patchProp:g1},a1);let Yo,VE=!1;function j1(){return Yo=VE?Yo:j6(H1),VE=!0,Yo}const z1=(...e)=>{const t=j1().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=q1(r);if(o)return n(o,!0,o instanceof SVGElement)},t};function q1(e){return ie(e)?document.querySelector(e):e}const U1={"v-8daa1a0e":()=>u(()=>import("./index.html-d05d4bd3.js"),[]).then(({data:e})=>e),"v-184f4da6":()=>u(()=>import("./intro.html-c5fc01cd.js"),[]).then(({data:e})=>e),"v-2e3eac9e":()=>u(()=>import("./slides.html-203ebd17.js"),[]).then(({data:e})=>e),"v-88a07046":()=>u(()=>import("./1 趋于混乱的代码.html-285951e9.js"),[]).then(({data:e})=>e),"v-4c913582":()=>u(()=>import("./AI无相神功_1 AI第一定律.html-3e709cef.js"),[]).then(({data:e})=>e),"v-19d7c75d":()=>u(()=>import("./AI无相神功_2 AI的问题拆分法.html-3732dd3b.js"),[]).then(({data:e})=>e),"v-1add9fd1":()=>u(()=>import("./AI无相神功_3 定期定额.html-2a5ae8ee.js"),[]).then(({data:e})=>e),"v-071eb094":()=>u(()=>import("./AI无相神功_4 AI的大玩家.html-831459c5.js"),[]).then(({data:e})=>e),"v-33f951d0":()=>u(()=>import("./AI无相神功_6 AI的睡眠工作法.html-bcfe555c.js"),[]).then(({data:e})=>e),"v-359609fd":()=>u(()=>import("./AI的代码完成度太高，各位快跳船.html-a6c6e31d.js"),[]).then(({data:e})=>e),"v-f269ffe0":()=>u(()=>import("./SP1 十六年光阴.html-b27c32e3.js"),[]).then(({data:e})=>e),"v-35ef0eec":()=>u(()=>import("./SP2 一个月花八百的日子.html-fef46728.js"),[]).then(({data:e})=>e),"v-393b2345":()=>u(()=>import("./SP3 谁懂，我对象的作品被搬到Youtube了.html-9dfd6792.js"),[]).then(({data:e})=>e),"v-0b3def67":()=>u(()=>import("./SP4 华灯初上.html-d67fbce4.js"),[]).then(({data:e})=>e),"v-2e41a181":()=>u(()=>import("./代码能写一辈子么.html-4a1034b6.js"),[]).then(({data:e})=>e),"v-e6852878":()=>u(()=>import("./在Cursor里用claude已经比购买claude还要好.html-b407ae60.js"),[]).then(({data:e})=>e),"v-7ad8adf9":()=>u(()=>import("./打工人手册_1 目标管理.html-8ff3705e.js"),[]).then(({data:e})=>e),"v-2ef88bdf":()=>u(()=>import("./打工人手册_10 利息.html-3e436aea.js"),[]).then(({data:e})=>e),"v-2a6b3493":()=>u(()=>import("./打工人手册_11 职场给不了你的.html-01f0811f.js"),[]).then(({data:e})=>e),"v-9ce71322":()=>u(()=>import("./打工人手册_12 不要追求职场进步.html-09e6a562.js"),[]).then(({data:e})=>e),"v-1c41a51e":()=>u(()=>import("./打工人手册_13 工具.html-0190b3fb.js"),[]).then(({data:e})=>e),"v-3cae8de0":()=>u(()=>import("./打工人手册_14 道.html-19fa16a4.js"),[]).then(({data:e})=>e),"v-be070b50":()=>u(()=>import("./打工人手册_15 法.html-1e2c92ad.js"),[]).then(({data:e})=>e),"v-5116e1f2":()=>u(()=>import("./打工人手册_16 术.html-f6e5e567.js"),[]).then(({data:e})=>e),"v-6e8eda1e":()=>u(()=>import("./打工人手册_17 偷懒是一个系统工程.html-f15e4fc9.js"),[]).then(({data:e})=>e),"v-7522514e":()=>u(()=>import("./打工人手册_18 免费的方案.html-ede9932a.js"),[]).then(({data:e})=>e),"v-125c43c8":()=>u(()=>import("./打工人手册_19 流量，代表着需求.html-95e081a8.js"),[]).then(({data:e})=>e),"v-731a0709":()=>u(()=>import("./打工人手册_2 原则.html-5d92fd38.js"),[]).then(({data:e})=>e),"v-96a0dfea":()=>u(()=>import("./打工人手册_20 二真之间，必有一假.html-4e532050.js"),[]).then(({data:e})=>e),"v-87363a26":()=>u(()=>import("./打工人手册_21 模糊的事情，必然让你付出代价.html-f25854a7.js"),[]).then(({data:e})=>e),"v-09c7f6b9":()=>u(()=>import("./打工人手册_22 一个小时可以干什么.html-4649d082.js"),[]).then(({data:e})=>e),"v-f04a8126":()=>u(()=>import("./打工人手册_23 忙到无暇关注其他事情.html-8baeb118.js"),[]).then(({data:e})=>e),"v-12328457":()=>u(()=>import("./打工人手册_24 才华的耗散.html-c3c3389d.js"),[]).then(({data:e})=>e),"v-7c1c3600":()=>u(()=>import("./打工人手册_25 赚一千万的方法.html-c6e48f8b.js"),[]).then(({data:e})=>e),"v-460d1f69":()=>u(()=>import("./打工人手册_26 赚一百万的方法.html-117d2505.js"),[]).then(({data:e})=>e),"v-67a60806":()=>u(()=>import("./打工人手册_27 赚十万的方法.html-4118e4b5.js"),[]).then(({data:e})=>e),"v-19281f73":()=>u(()=>import("./打工人手册_28 赚一万的方法.html-b941bf69.js"),[]).then(({data:e})=>e),"v-e67be74a":()=>u(()=>import("./打工人手册_29 赚一千的方法.html-1e45ea6d.js"),[]).then(({data:e})=>e),"v-02bc6f94":()=>u(()=>import("./打工人手册_3 输出功率.html-e0033ebb.js"),[]).then(({data:e})=>e),"v-5e72a127":()=>u(()=>import("./打工人手册_30 赚一百的方法.html-4cb1e9d2.js"),[]).then(({data:e})=>e),"v-2775519f":()=>u(()=>import("./打工人手册_31 成本与库存的分野.html-e66370e2.js"),[]).then(({data:e})=>e),"v-272b322a":()=>u(()=>import("./打工人手册_32 赚十块的方法.html-ce44e512.js"),[]).then(({data:e})=>e),"v-338886d1":()=>u(()=>import("./打工人手册_33 赚一块钱的方法.html-c82c8b5b.js"),[]).then(({data:e})=>e),"v-41f517de":()=>u(()=>import("./打工人手册_34 赚一毛钱的方法.html-bb5e4da5.js"),[]).then(({data:e})=>e),"v-9e788cf6":()=>u(()=>import("./打工人手册_35 消费的升级.html-a7a8303d.js"),[]).then(({data:e})=>e),"v-4b589236":()=>u(()=>import("./打工人手册_36 最伟大的亲情.html-ebe0a94e.js"),[]).then(({data:e})=>e),"v-7ca6866c":()=>u(()=>import("./打工人手册_37 小公务员的苦楚.html-d2c65b63.js"),[]).then(({data:e})=>e),"v-0b5fb7fc":()=>u(()=>import("./打工人手册_38 扫平前行的障碍.html-79adeae9.js"),[]).then(({data:e})=>e),"v-2266481e":()=>u(()=>import("./打工人手册_39 时代的六万五.html-5c8c21aa.js"),[]).then(({data:e})=>e),"v-9954f460":()=>u(()=>import("./打工人手册_4 中途.html-78b481ee.js"),[]).then(({data:e})=>e),"v-7e44c719":()=>u(()=>import("./打工人手册_40 斗志.html-aa72a1d3.js"),[]).then(({data:e})=>e),"v-5796c9f4":()=>u(()=>import("./打工人手册_41 资源的极致利用.html-36aef7c8.js"),[]).then(({data:e})=>e),"v-115344b1":()=>u(()=>import("./打工人手册_42 如何打败公司.html-5cbbdbc8.js"),[]).then(({data:e})=>e),"v-38562857":()=>u(()=>import("./打工人手册_43 职场是消耗战.html-efb96fad.js"),[]).then(({data:e})=>e),"v-4077aa70":()=>u(()=>import("./打工人手册_44 财富的光锥之内.html-cc3a363a.js"),[]).then(({data:e})=>e),"v-c47a0d6a":()=>u(()=>import("./打工人手册_45 能量与信息的主旋律.html-d29ec585.js"),[]).then(({data:e})=>e),"v-3612baf2":()=>u(()=>import("./打工人手册_46 钱能产生利息的反面.html-b98176d3.js"),[]).then(({data:e})=>e),"v-a70dce4a":()=>u(()=>import("./打工人手册_47 买与卖的学问.html-a56e309a.js"),[]).then(({data:e})=>e),"v-2a657030":()=>u(()=>import("./打工人手册_48 交易.html-e9cc936e.js"),[]).then(({data:e})=>e),"v-66841430":()=>u(()=>import("./打工人手册_49 生态位.html-108ff52e.js"),[]).then(({data:e})=>e),"v-978e2d4c":()=>u(()=>import("./打工人手册_5 冷启动.html-ff8d7fdb.js"),[]).then(({data:e})=>e),"v-82648be8":()=>u(()=>import("./打工人手册_5.5 输赢.html-376285b8.js"),[]).then(({data:e})=>e),"v-3b20e32d":()=>u(()=>import("./打工人手册_50 脑子为谁工作.html-997664b5.js"),[]).then(({data:e})=>e),"v-072a9dce":()=>u(()=>import("./打工人手册_51 视觉的盲区.html-4b68c89a.js"),[]).then(({data:e})=>e),"v-2c7d9ef1":()=>u(()=>import("./打工人手册_52 大语言模型的浪潮.html-3b5a5c94.js"),[]).then(({data:e})=>e),"v-31f08afb":()=>u(()=>import("./打工人手册_53 生生不息.html-9bb44859.js"),[]).then(({data:e})=>e),"v-691b158a":()=>u(()=>import("./打工人手册_53 窗口期.html-550c491b.js"),[]).then(({data:e})=>e),"v-64d7b94a":()=>u(()=>import("./打工人手册_54 病痛的价值.html-3fe06683.js"),[]).then(({data:e})=>e),"v-7ed7cf28":()=>u(()=>import("./打工人手册_55 权力的结构.html-ea022eff.js"),[]).then(({data:e})=>e),"v-7b220915":()=>u(()=>import("./打工人手册_56 时间的铁则.html-c8d19c4b.js"),[]).then(({data:e})=>e),"v-38d5a178":()=>u(()=>import("./打工人手册_57 命运的拐角.html-6507361b.js"),[]).then(({data:e})=>e),"v-729d120e":()=>u(()=>import("./打工人手册_58 资源的解锁.html-5f79a000.js"),[]).then(({data:e})=>e),"v-33fe848c":()=>u(()=>import("./打工人手册_59 靠专业赚钱.html-ee4dfa57.js"),[]).then(({data:e})=>e),"v-07fbb390":()=>u(()=>import("./打工人手册_6 价值.html-67cf76e7.js"),[]).then(({data:e})=>e),"v-0eea4252":()=>u(()=>import("./打工人手册_60 造势不如顺势.html-571dc47b.js"),[]).then(({data:e})=>e),"v-5c5f8dff":()=>u(()=>import("./打工人手册_63 流寇.html-892a5f38.js"),[]).then(({data:e})=>e),"v-63dbd366":()=>u(()=>import("./打工人手册_64 用想象力拼凑一条向前之路.html-a92668b2.js"),[]).then(({data:e})=>e),"v-0dc7f30a":()=>u(()=>import("./打工人手册_65 用想象力拼凑一条向前之路(下).html-d6bfcbdf.js"),[]).then(({data:e})=>e),"v-73bd7b40":()=>u(()=>import("./打工人手册_66 轮动之道，乃是天之道.html-b9db39a2.js"),[]).then(({data:e})=>e),"v-ce6dc1d2":()=>u(()=>import("./打工人手册_67 遗传的本质就是轮动.html-46f834af.js"),[]).then(({data:e})=>e),"v-2f09909e":()=>u(()=>import("./打工人手册_68 代理之路.html-475d429d.js"),[]).then(({data:e})=>e),"v-37b45762":()=>u(()=>import("./打工人手册_69 跳槽的战略路线.html-930343cb.js"),[]).then(({data:e})=>e),"v-1687afe0":()=>u(()=>import("./打工人手册_7 难难难.html-c32739cf.js"),[]).then(({data:e})=>e),"v-15fbc74e":()=>u(()=>import("./打工人手册_70 永远满仓的问题在于无周转.html-e2b493d8.js"),[]).then(({data:e})=>e),"v-699b4472":()=>u(()=>import("./打工人手册_71 修炼的隐喻.html-7640ac9c.js"),[]).then(({data:e})=>e),"v-1e5c5c7b":()=>u(()=>import("./打工人手册_72 尽量去掌握生产资料.html-7921c968.js"),[]).then(({data:e})=>e),"v-a86f8722":()=>u(()=>import("./打工人手册_73 聚沙成塔的时间复用法.html-79b774fb.js"),[]).then(({data:e})=>e),"v-4a148736":()=>u(()=>import("./打工人手册_74 直接面对问题.html-a9c531c4.js"),[]).then(({data:e})=>e),"v-2e5f21b8":()=>u(()=>import("./打工人手册_75 谷歌前十的页面你应该看完.html-905549ec.js"),[]).then(({data:e})=>e),"v-051b12af":()=>u(()=>import("./打工人手册_76 提升演化的频次.html-bc3ecf3f.js"),[]).then(({data:e})=>e),"v-75d7587d":()=>u(()=>import("./打工人手册_8 大有大的难处.html-9aedae9d.js"),[]).then(({data:e})=>e),"v-299d697c":()=>u(()=>import("./打工人手册_9 捡瓶子的艺术.html-4c1753b5.js"),[]).then(({data:e})=>e),"v-a51a6c2e":()=>u(()=>import("./普通打工人的一生.html-65ed1d5d.js"),[]).then(({data:e})=>e),"v-7da5f727":()=>u(()=>import("./职场的天花板.html-1b250bfb.js"),[]).then(({data:e})=>e),"v-3e6d5320":()=>u(()=>import("./1 电和水的成本.html-42c3f87c.js"),[]).then(({data:e})=>e),"v-a85ff27a":()=>u(()=>import("./10 对标.html-fdb2f035.js"),[]).then(({data:e})=>e),"v-d0d8ee48":()=>u(()=>import("./11 2024 明暗切换之路.html-0196c8db.js"),[]).then(({data:e})=>e),"v-000b162b":()=>u(()=>import("./12 资源的极致使用.html-090a489b.js"),[]).then(({data:e})=>e),"v-3b643057":()=>u(()=>import("./2 关于拖延的分析.html-911c6ca5.js"),[]).then(({data:e})=>e),"v-25efb130":()=>u(()=>import("./3 我所认识的左耳朵耗子.html-d9424e47.js"),[]).then(({data:e})=>e),"v-4c82768e":()=>u(()=>import("./4 韩老魔的成长之路.html-7272af36.js"),[]).then(({data:e})=>e),"v-4434b254":()=>u(()=>import("./5 我所用的方法.html-561cd991.js"),[]).then(({data:e})=>e),"v-6a8bc352":()=>u(()=>import("./6 2023 夹缝中的奇迹.html-e3cb2620.js"),[]).then(({data:e})=>e),"v-7084efee":()=>u(()=>import("./7 房间系统的内循环.html-f1e8950e.js"),[]).then(({data:e})=>e),"v-e36fc148":()=>u(()=>import("./8 强与弱的幻觉.html-5fea4dba.js"),[]).then(({data:e})=>e),"v-34142867":()=>u(()=>import("./9 根据地.html-c351ba50.js"),[]).then(({data:e})=>e),"v-c4735526":()=>u(()=>import("./2020我来了.html-54375d89.js"),[]).then(({data:e})=>e),"v-60a2d43e":()=>u(()=>import("./2021重回深圳芜湖.html-f800a603.js"),[]).then(({data:e})=>e),"v-75f5f7f8":()=>u(()=>import("./2023的尾巴来广州工作啦打工人日常.html-e07f1875.js"),[]).then(({data:e})=>e),"v-06d58938":()=>u(()=>import("./2024又要去往新的城市啦.html-969ba487.js"),[]).then(({data:e})=>e),"v-75834753":()=>u(()=>import("./2024很幸运2025会更好呀.html-4c552d68.js"),[]).then(({data:e})=>e),"v-4ac06eac":()=>u(()=>import("./2025要和男朋友一起旺旺旺.html-f45a8f8e.js"),[]).then(({data:e})=>e),"v-954d91fe":()=>u(()=>import("./47卡位赛 王者荣耀第三轮.html-e25669ae.js"),[]).then(({data:e})=>e),"v-f2ce5f74":()=>u(()=>import("./Last day要去广州啦_一切顺利.html-41e4a121.js"),[]).then(({data:e})=>e),"v-160124f8":()=>u(()=>import("./iPhone15 Pro Max使用感很好好看.html-62e37ed3.js"),[]).then(({data:e})=>e),"v-176bc0da":()=>u(()=>import("./record a new day.html-4e5c87cd.js"),[]).then(({data:e})=>e),"v-01a225a0":()=>u(()=>import("./一丢丢生活plog如此热爱生活.html-88970a0b.js"),[]).then(({data:e})=>e),"v-682c8701":()=>u(()=>import("./一人食的日常.html-32ed43d8.js"),[]).then(({data:e})=>e),"v-28c21826":()=>u(()=>import("./一张图证明你的运气很好.html-53830c60.js"),[]).then(({data:e})=>e),"v-7ca3b6cc":()=>u(()=>import("./一把晋级成功太顺利惹.html-678220ae.js"),[]).then(({data:e})=>e),"v-09673a32":()=>u(()=>import("./上周的王者荣耀牌牌.html-131a5eb7.js"),[]).then(({data:e})=>e),"v-bcf14eb0":()=>u(()=>import("./不要把你的观念强加给别人.html-7e42d11a.js"),[]).then(({data:e})=>e),"v-2db2b064":()=>u(()=>import("./两个人在一起就是意义.html-41084058.js"),[]).then(({data:e})=>e),"v-4120dc9f":()=>u(()=>import("./中秋节假期后被夸了一周了.html-130ae7fe.js"),[]).then(({data:e})=>e),"v-f6610eae":()=>u(()=>import("./中通快递真的很垃圾无语.html-bb18bc2b.js"),[]).then(({data:e})=>e),"v-61011f00":()=>u(()=>import("./为什么闹别扭以后情绪反扑这么严重.html-a9b3f59d.js"),[]).then(({data:e})=>e),"v-49db4735":()=>u(()=>import("./乐乐茶这个包装也太好笑了.html-e05a2f60.js"),[]).then(({data:e})=>e),"v-2b8b9fdf":()=>u(()=>import("./乐高积木.html-35165061.js"),[]).then(({data:e})=>e),"v-6bb85300":()=>u(()=>import("./二十大几单身很好不要焦虑开心最重要.html-fe97a8c3.js"),[]).then(({data:e})=>e),"v-aea96510":()=>u(()=>import("./于祥宇真的很难不让人喜欢.html-3d349847.js"),[]).then(({data:e})=>e),"v-46d10d3e":()=>u(()=>import("./今天喝了什么.html-bffa1a00.js"),[]).then(({data:e})=>e),"v-117967e4":()=>u(()=>import("./今天喝了吗.html-58e20893.js"),[]).then(({data:e})=>e),"v-7fd019d2":()=>u(()=>import("./今天喝了吗绿箭给我打钱.html-92b5a1e7.js"),[]).then(({data:e})=>e),"v-50760880":()=>u(()=>import("./今天我就是女野王哈哈哈.html-f2204eca.js"),[]).then(({data:e})=>e),"v-676d5ede":()=>u(()=>import("./今年的网易云年度总结来啦.html-fec23f63.js"),[]).then(({data:e})=>e),"v-fa2a96d0":()=>u(()=>import("./今日份水果已发放到手里.html-9cd68762.js"),[]).then(({data:e})=>e),"v-ee3cab44":()=>u(()=>import("./今日早餐土豆泥沙拉.html-8b7abd89.js"),[]).then(({data:e})=>e),"v-2da7eada":()=>u(()=>import("./他怎么这么好看.html-5cb7fc93.js"),[]).then(({data:e})=>e),"v-01def838":()=>u(()=>import("./他说我在欣赏我的猎物.html-1938f6f1.js"),[]).then(({data:e})=>e),"v-b760b8b6":()=>u(()=>import("./任何没看封神的人体会不到我的快乐.html-dc96467f.js"),[]).then(({data:e})=>e),"v-6f80895a":()=>u(()=>import("./你好呀2019.html-d3cd3307.js"),[]).then(({data:e})=>e),"v-1b754024":()=>u(()=>import("./你怎么知道我要去看孟凡明.html-6f3d6db2.js"),[]).then(({data:e})=>e),"v-40355436":()=>u(()=>import("./借朋友家小猫咪来拍视频.html-200d05a3.js"),[]).then(({data:e})=>e),"v-35abf21c":()=>u(()=>import("./做饭日常.html-bc428091.js"),[]).then(({data:e})=>e),"v-10146b6e":()=>u(()=>import("./充满生活气的城市随便拍.html-eb63b1ed.js"),[]).then(({data:e})=>e),"v-0c3dd955":()=>u(()=>import("./公司留下的陈楚生店长.html-ebb41505.js"),[]).then(({data:e})=>e),"v-6de021dc":()=>u(()=>import("./别再给我推荐eStar了.html-66198322.js"),[]).then(({data:e})=>e),"v-903e110a":()=>u(()=>import("./剧版镇魂这是仙子吧朱一龙.html-7191af6f.js"),[]).then(({data:e})=>e),"v-061618aa":()=>u(()=>import("./又是为别人爱情落泪的一天.html-a9e09be0.js"),[]).then(({data:e})=>e),"v-1825afb7":()=>u(()=>import("./又是美食.html-24da7e2f.js"),[]).then(({data:e})=>e),"v-7dd86076":()=>u(()=>import("./双人同舞真的好玩爱玩.html-268e1a79.js"),[]).then(({data:e})=>e),"v-439caf43":()=>u(()=>import("./名场面啊买床单以后笑死了.html-a13718df.js"),[]).then(({data:e})=>e),"v-7665fb42":()=>u(()=>import("./后天隔离结束17号预约了dfs.html-c1c0d414.js"),[]).then(({data:e})=>e),"v-3ec97590":()=>u(()=>import("./周末快乐三人同居在家的快乐生活.html-81ccf735.js"),[]).then(({data:e})=>e),"v-94f15b56":()=>u(()=>import("./和室友喝小酒吃烧烤聊到深夜.html-f4669194.js"),[]).then(({data:e})=>e),"v-b990bda8":()=>u(()=>import("./啊我这大屁股怎么办.html-4a368629.js"),[]).then(({data:e})=>e),"v-0dad4594":()=>u(()=>import("./啊逛街看到一个男团在签售.html-b017da01.js"),[]).then(({data:e})=>e),"v-1e4e63fb":()=>u(()=>import("./嗓子痛哑成电音朵拉还是没逃过.html-3fa2de62.js"),[]).then(({data:e})=>e),"v-5c9d16cd":()=>u(()=>import("./四海城圣诞节氛围好浓啊.html-72b2208e.js"),[]).then(({data:e})=>e),"v-1621c87a":()=>u(()=>import("./回家回家勇敢的人先买机票再请假.html-e44b6cdc.js"),[]).then(({data:e})=>e),"v-6379fee4":()=>u(()=>import("./在上海虹桥站换乘已经被挤死.html-ca21a3b0.js"),[]).then(({data:e})=>e),"v-369d4408":()=>u(()=>import("./坚持真的会有改善.html-7dd5161d.js"),[]).then(({data:e})=>e),"v-4620b9dd":()=>u(()=>import("./复阳第四天慢慢恢复中.html-c44fa0f7.js"),[]).then(({data:e})=>e),"v-6fe02bb0":()=>u(()=>import("./外卖小哥好有趣.html-b4ec981f.js"),[]).then(({data:e})=>e),"v-c3a2a69c":()=>u(()=>import("./大三巴这家店在放周兴哲.html-422b86f5.js"),[]).then(({data:e})=>e),"v-12e7c04b":()=>u(()=>import("./大唐诗人传我冲了.html-548bd9d1.js"),[]).then(({data:e})=>e),"v-72c4231b":()=>u(()=>import("./大声宣布终于甜甜的恋爱也轮到我啦.html-1480ed85.js"),[]).then(({data:e})=>e),"v-eb83d134":()=>u(()=>import("./太恶心了避雷百草味鸭脖有虫卵.html-3b4f9e6c.js"),[]).then(({data:e})=>e),"v-efef747a":()=>u(()=>import("./如果爱情有温度此刻就是最适宜的.html-9da30f07.js"),[]).then(({data:e})=>e),"v-382b43ec":()=>u(()=>import("./孟凡明带来的快乐持续一整天.html-a6f52904.js"),[]).then(({data:e})=>e),"v-3d6634f3":()=>u(()=>import("./它真的太会了好可爱.html-47ba1c98.js"),[]).then(({data:e})=>e),"v-9c1c004a":()=>u(()=>import("./封神第一部真的好看给我冲.html-52172095.js"),[]).then(({data:e})=>e),"v-6f8bec3a":()=>u(()=>import("./小卢真帅终于可以继续追唐诡2.html-f13536db.js"),[]).then(({data:e})=>e),"v-5607e1b6":()=>u(()=>import("./小总结就是太快乐了.html-fc969f4c.js"),[]).then(({data:e})=>e),"v-e8eb45da":()=>u(()=>import("./小红书给我发奖状啦.html-f64fd9aa.js"),[]).then(({data:e})=>e),"v-7d26b93f":()=>u(()=>import("./山姆新品牛肉馅饼干.html-6cc42abc.js"),[]).then(({data:e})=>e),"v-4ca4fa0a":()=>u(()=>import("./希望在香港越来越好呀.html-14051df1.js"),[]).then(({data:e})=>e),"v-725aaab5":()=>u(()=>import("./幸福的一天开启 更加努力爱自己.html-92239a49.js"),[]).then(({data:e})=>e),"v-44c66a70":()=>u(()=>import("./广东番禺区求租房南村万博附近.html-9225136b.js"),[]).then(({data:e})=>e),"v-2d234042":()=>u(()=>import("./广州周末看展ᴗ广东省博物馆.html-12a19585.js"),[]).then(({data:e})=>e),"v-7e8c337f":()=>u(()=>import("./广播剧cv漠然配音小花絮.html-5640724e.js"),[]).then(({data:e})=>e),"v-e873d900":()=>u(()=>import("./建议不会说话的人shut up.html-4906611a.js"),[]).then(({data:e})=>e),"v-482461a3":()=>u(()=>import("./开启新的一天10月快乐.html-3f100fb0.js"),[]).then(({data:e})=>e),"v-7b142612":()=>u(()=>import("./异地恋当然要记录啦被爱真的好幸福.html-f1735a9b.js"),[]).then(({data:e})=>e),"v-5577c31d":()=>u(()=>import("./异地恋的远程约会_.html-e56621cf.js"),[]).then(({data:e})=>e),"v-587178f6":()=>u(()=>import("./异地恋见面之陪男朋友过生日一.html-e977de95.js"),[]).then(({data:e})=>e),"v-39ba3dc8":()=>u(()=>import("./异地恋见面之陪男朋友过生日三.html-44b341b2.js"),[]).then(({data:e})=>e),"v-2a9b3e5b":()=>u(()=>import("./异地恋见面之陪男朋友过生日二.html-a537a13f.js"),[]).then(({data:e})=>e),"v-c1c61150":()=>u(()=>import("./弟弟浅浅带我王者荣耀连赢啦.html-e3d6f69c.js"),[]).then(({data:e})=>e),"v-1160b200":()=>u(()=>import("./张凯我哭死TTG明年见.html-3cdaed38.js"),[]).then(({data:e})=>e),"v-2922241c":()=>u(()=>import("./得了新冠进入羊圈的第一天感受.html-b940e120.js"),[]).then(({data:e})=>e),"v-cf57e28a":()=>u(()=>import("./心心念念的apm六芒星项链和手链.html-7e882221.js"),[]).then(({data:e})=>e),"v-57c30dab":()=>u(()=>import("./心疼我们耶耶罗思源是最棒.html-8bf65fb6.js"),[]).then(({data:e})=>e),"v-33271e12":()=>u(()=>import("./志怪纪录片妖怪传安利.html-1f7c2e28.js"),[]).then(({data:e})=>e),"v-403c2dec":()=>u(()=>import("./怎么一喝咖啡就容易窜稀.html-70a477a4.js"),[]).then(({data:e})=>e),"v-3d15b942":()=>u(()=>import("./情绪稳定的男友真的很重要家人们.html-42cffc4e.js"),[]).then(({data:e})=>e),"v-34cb1ca4":()=>u(()=>import("./感情的消失从没有分享欲开始.html-908a3eaf.js"),[]).then(({data:e})=>e),"v-546a013c":()=>u(()=>import("./感觉圈子真的很可怕一诺.html-2791fbf8.js"),[]).then(({data:e})=>e),"v-66660248":()=>u(()=>import("./我一直都被好好爱着爱我的父母.html-eba6a745.js"),[]).then(({data:e})=>e),"v-e2c137d4":()=>u(()=>import("./我们一起热烈.html-32688d29.js"),[]).then(({data:e})=>e),"v-1856cc8d":()=>u(()=>import("./我们在小红书解锁新的聊天标识啦.html-92e68a0a.js"),[]).then(({data:e})=>e),"v-6eb5a85d":()=>u(()=>import("./我四年前喜欢的超糊帕帕终于要火了吗.html-39e958f9.js"),[]).then(({data:e})=>e),"v-3d29dfdc":()=>u(()=>import("./我很震惊为什么首页推荐全是男生.html-9c1211d7.js"),[]).then(({data:e})=>e),"v-05f8870d":()=>u(()=>import("./我的搜索记录显示我有霸总气质.html-aa5bb750.js"),[]).then(({data:e})=>e),"v-214e4128":()=>u(()=>import("./我真的吐了素质极差.html-73bb6d7a.js"),[]).then(({data:e})=>e),"v-13be1e3e":()=>u(()=>import("./我真的生气了买了新皮还在输.html-f284f5b1.js"),[]).then(({data:e})=>e),"v-bec1e8b6":()=>u(()=>import("./我那进步很大的主队拜托继续加油.html-48d70720.js"),[]).then(({data:e})=>e),"v-152a9a46":()=>u(()=>import("./打游戏小拇指根部疼.html-69344c51.js"),[]).then(({data:e})=>e),"v-1c851524":()=>u(()=>import("./打游戏约我公主请上号.html-6da21a48.js"),[]).then(({data:e})=>e),"v-563489d8":()=>u(()=>import("./扬州乒乓球全锦赛你别太离谱.html-177788f0.js"),[]).then(({data:e})=>e),"v-3bcd1164":()=>u(()=>import("./扬州去啦.html-abcd4e8d.js"),[]).then(({data:e})=>e),"v-210e4199":()=>u(()=>import("./抓娃娃的快乐.html-d52bc816.js"),[]).then(({data:e})=>e),"v-00a3822b":()=>u(()=>import("./排位日记这周保住啦可惜小明掉了.html-99cc1ac2.js"),[]).then(({data:e})=>e),"v-6f415fe0":()=>u(()=>import("./排队一小时的粤陈记粥底火锅.html-4f466566.js"),[]).then(({data:e})=>e),"v-6b95903e":()=>u(()=>import("./推荐一个宝藏历史博主-东兴苟十三.html-556c6e4c.js"),[]).then(({data:e})=>e),"v-b3bbe49e":()=>u(()=>import("./收扬州全锦赛门票.html-0e2d9c30.js"),[]).then(({data:e})=>e),"v-653e79e6":()=>u(()=>import("./新型雪糕刺客-德芙真有你的.html-7e10a2cf.js"),[]).then(({data:e})=>e),"v-4b16f173":()=>u(()=>import("./新年战甲搞定啦.html-39180896.js"),[]).then(({data:e})=>e),"v-2b464b56":()=>u(()=>import("./新的一周新的王者荣耀标标.html-fa96a97d.js"),[]).then(({data:e})=>e),"v-7c7ea5d4":()=>u(()=>import("./无所谓 俺有朋友帮我跑哈哈哈.html-100f3b7f.js"),[]).then(({data:e})=>e),"v-3fbc0cc9":()=>u(()=>import("./日料放题.html-be29f1a8.js"),[]).then(({data:e})=>e),"v-77177bb1":()=>u(()=>import("./日腐剧日腐电影推荐安利都给我哭.html-dd52179e.js"),[]).then(({data:e})=>e),"v-624f63b1":()=>u(()=>import("./日腐我又来啦.html-834b94e5.js"),[]).then(({data:e})=>e),"v-7a12e684":()=>u(()=>import("./早上被陌生人敲门还让我开门.html-fe4262b5.js"),[]).then(({data:e})=>e),"v-85531764":()=>u(()=>import("./最近的嘎嘎快乐.html-ff4e5684.js"),[]).then(({data:e})=>e),"v-5a5b4491":()=>u(()=>import("./有家人们一起来聊天吗分享快乐.html-c43b1a97.js"),[]).then(({data:e})=>e),"v-2802af42":()=>u(()=>import("./机动搜查队404.html-d52084f6.js"),[]).then(({data:e})=>e),"v-2c322832":()=>u(()=>import("./来小红书9周年啦.html-eef9f431.js"),[]).then(({data:e})=>e),"v-24e0682c":()=>u(()=>import("./松鹤楼 我葱呢我面的葱呢.html-16c9657e.js"),[]).then(({data:e})=>e),"v-0cbed1f4":()=>u(()=>import("./极限虹桥机场T2到T1登机.html-a0b54951.js"),[]).then(({data:e})=>e),"v-ec6f06ce":()=>u(()=>import("./毕业前的快乐.html-2dbcaeb2.js"),[]).then(({data:e})=>e),"v-1770c20e":()=>u(()=>import("./永远怀念追一年生的青春SK白月光.html-29d30973.js"),[]).then(({data:e})=>e),"v-42195c7e":()=>u(()=>import("./求一个深圳隔离同行 香港回深圳.html-5a6787a2.js"),[]).then(({data:e})=>e),"v-3fa5834c":()=>u(()=>import("./江苏共青团主题盲盒.html-1f7d2097.js"),[]).then(({data:e})=>e),"v-6efd7506":()=>u(()=>import("./没有蓝还给我让蓝的澜太帅了吧.html-ef9c8377.js"),[]).then(({data:e})=>e),"v-4b2d2df5":()=>u(()=>import("./没看过小公子x小王子的会哭吧.html-3494a284.js"),[]).then(({data:e})=>e),"v-ed4402e2":()=>u(()=>import("./浅浅记录打工人的一周三餐饮食.html-d2d65b0d.js"),[]).then(({data:e})=>e),"v-ff348f2c":()=>u(()=>import("./深圳小煵记休想再坑到我.html-26d19119.js"),[]).then(({data:e})=>e),"v-190d1618":()=>u(()=>import("./深圳的周末快乐碎片降温啦十月你好.html-813e6ef4.js"),[]).then(({data:e})=>e),"v-490b9ac4":()=>u(()=>import("./游记懒得P图之原图直发.html-fd551c0b.js"),[]).then(({data:e})=>e),"v-cf4d09da":()=>u(()=>import("./滴胶手作沉浸式开箱视频.html-972c6973.js"),[]).then(({data:e})=>e),"v-1c6067c0":()=>u(()=>import("./激光点痣伤口感染发炎了.html-ddbe4784.js"),[]).then(({data:e})=>e),"v-43a60d5e":()=>u(()=>import("./火锅时间到等不及随便拍一个开吃.html-347d5f60.js"),[]).then(({data:e})=>e),"v-4ed17f67":()=>u(()=>import("./爱上喝汤健健康康.html-866504b3.js"),[]).then(({data:e})=>e),"v-4aca13b8":()=>u(()=>import("./牛眼泪把科颜氏当身体乳抹了.html-5c9e53a1.js"),[]).then(({data:e})=>e),"v-e1fcb2e6":()=>u(()=>import("./特种兵出差太强了我.html-5b2238fe.js"),[]).then(({data:e})=>e),"v-671b1c80":()=>u(()=>import("./狮暖一生推.html-01f6003f.js"),[]).then(({data:e})=>e),"v-11dcb231":()=>u(()=>import("./王者荣耀一周爬55颗星星.html-f4c02699.js"),[]).then(({data:e})=>e),"v-664dc686":()=>u(()=>import("./王者荣耀世冠抽签结果.html-1471ee11.js"),[]).then(({data:e})=>e),"v-377154b6":()=>u(()=>import("./王者荣耀亚运会大名单公布.html-191380cd.js"),[]).then(({data:e})=>e),"v-66e72c09":()=>u(()=>import("./王者荣耀你可得瑟吧.html-0fb4c88d.js"),[]).then(({data:e})=>e),"v-5f3b6b11":()=>u(()=>import("./王者荣耀快乐上分超nice游戏搭子.html-6333eed5.js"),[]).then(({data:e})=>e),"v-2d0c3bcd":()=>u(()=>import("./瑞幸你是懂联名的真可爱.html-afa00b6e.js"),[]).then(({data:e})=>e),"v-79c4af16":()=>u(()=>import("./瑞幸桂花龙井拿铁.html-a1f3a376.js"),[]).then(({data:e})=>e),"v-af3dd876":()=>u(()=>import("./男朋友从投喂一只小猪变成了三只.html-e944cc1b.js"),[]).then(({data:e})=>e),"v-39007411":()=>u(()=>import("./男生穿搭好难啊丑的真丑好看的真好看.html-f9ed189d.js"),[]).then(({data:e})=>e),"v-f03e7622":()=>u(()=>import("./番禺天河城一早排队盛况.html-5fd443c6.js"),[]).then(({data:e})=>e),"v-48c69535":()=>u(()=>import("./白石深夜食堂 日料真好吃.html-fb8e13a6.js"),[]).then(({data:e})=>e),"v-49eff157":()=>u(()=>import("./盐城你出息了只此青绿.html-3985d53f.js"),[]).then(({data:e})=>e),"v-89239f76":()=>u(()=>import("./睡醒以后怎么样才能复睡呀.html-45acbf0e.js"),[]).then(({data:e})=>e),"v-f49a64f8":()=>u(()=>import("./秋冬份的新美甲简简单单.html-8b3a40d2.js"),[]).then(({data:e})=>e),"v-b3818dfc":()=>u(()=>import("./紫心之恋好好看.html-8ed0034d.js"),[]).then(({data:e})=>e),"v-450e5ed5":()=>u(()=>import("./纯爱战士应声倒下.html-bdce1df2.js"),[]).then(({data:e})=>e),"v-2b924bd4":()=>u(()=>import("./终于上无双啦下班艰苦.html-09025b7b.js"),[]).then(({data:e})=>e),"v-46d3234f":()=>u(()=>import("./莱德拉我来了巧克力脑袋开心.html-00d20d9a.js"),[]).then(({data:e})=>e),"v-bf39abac":()=>u(()=>import("./虽然正方输了但是罗淼学长太强了.html-bcb7b090.js"),[]).then(({data:e})=>e),"v-3f0b059b":()=>u(()=>import("./观光电梯上的维港景色.html-ac3908ee.js"),[]).then(({data:e})=>e),"v-3c0dd36e":()=>u(()=>import("./记录一下勇敢Heidi的一天-Part one.html-15fe217b.js"),[]).then(({data:e})=>e),"v-b708cd52":()=>u(()=>import("./记录勇敢Heidi的一天Part Two.html-eaf2ecc1.js"),[]).then(({data:e})=>e),"v-2c8bcb29":()=>u(()=>import("./谁能想到是早餐互联网人最后的倔强.html-1e5936e4.js"),[]).then(({data:e})=>e),"v-15c22a10":()=>u(()=>import("./谈恋爱好幸福被爱的时候人真的会闪耀.html-31171d15.js"),[]).then(({data:e})=>e),"v-7540e5f4":()=>u(()=>import("./贾诩xMr岑爱情标价戏码新歌.html-df4a791c.js"),[]).then(({data:e})=>e),"v-2246859a":()=>u(()=>import("./越简单的款越好看啊秋日美甲.html-112ccc07.js"),[]).then(({data:e})=>e),"v-a002a826":()=>u(()=>import("./迎接冬天第一款美甲.html-52fc2efc.js"),[]).then(({data:e})=>e),"v-6ac9c13e":()=>u(()=>import("./这不快乐就来了.html-45a6ffc0.js"),[]).then(({data:e})=>e),"v-a67ba00a":()=>u(()=>import("./这个点你为什么在看手机.html-ca0a100a.js"),[]).then(({data:e})=>e),"v-656280de":()=>u(()=>import("./这年头工作上还能遇到普信男绝.html-ad9c8b76.js"),[]).then(({data:e})=>e),"v-2cef7e20":()=>u(()=>import("./通宵加班的一天.html-9c60251a.js"),[]).then(({data:e})=>e),"v-8bf0b2b6":()=>u(()=>import("./随缘收316SHINee香港.html-f47dbffb.js"),[]).then(({data:e})=>e),"v-d3f65882":()=>u(()=>import("./三维建模.html-750a06b6.js"),[]).then(({data:e})=>e),"v-61015d2d":()=>u(()=>import("./三角测量.html-189893d4.js"),[]).then(({data:e})=>e),"v-fac6c888":()=>u(()=>import("./全球定位系统（GPS）.html-991fdabd.js"),[]).then(({data:e})=>e),"v-4586dce6":()=>u(()=>import("./全站仪测量.html-27daea8f.js"),[]).then(({data:e})=>e),"v-0791f4a4":()=>u(()=>import("./卫星影像处理.html-909ee563.js"),[]).then(({data:e})=>e),"v-750d807f":()=>u(()=>import("./变形监测.html-b410f53b.js"),[]).then(({data:e})=>e),"v-bd47f06e":()=>u(()=>import("./地下管线探测.html-4c1ca525.js"),[]).then(({data:e})=>e),"v-168f6cf5":()=>u(()=>import("./地图投影.html-dd13003e.js"),[]).then(({data:e})=>e),"v-4e2ba3b9":()=>u(()=>import("./地理信息系统（GIS）.html-c89438d7.js"),[]).then(({data:e})=>e),"v-3aa5140e":()=>u(()=>import("./地籍测量.html-1fdb4b7d.js"),[]).then(({data:e})=>e),"v-bc0cc008":()=>u(()=>import("./坐标转换.html-537f85bd.js"),[]).then(({data:e})=>e),"v-429b791e":()=>u(()=>import("./导线测量.html-7644c6e6.js"),[]).then(({data:e})=>e),"v-590f1733":()=>u(()=>import("./工程测量.html-60c935af.js"),[]).then(({data:e})=>e),"v-20c5aa01":()=>u(()=>import("./摄影测量.html-ff2fd80e.js"),[]).then(({data:e})=>e),"v-3b2ec64e":()=>u(()=>import("./数字高程模型（DEM）.html-1bae3ad9.js"),[]).then(({data:e})=>e),"v-31872f2f":()=>u(()=>import("./水准测量.html-ceefc25e.js"),[]).then(({data:e})=>e),"v-74af3aa5":()=>u(()=>import("./海洋测绘.html-e463cf2a.js"),[]).then(({data:e})=>e),"v-4924f29d":()=>u(()=>import("./激光雷达（LiDAR）.html-eaa7d259.js"),[]).then(({data:e})=>e),"v-3ab229c8":()=>u(()=>import("./空间数据分析。.html-018bd314.js"),[]).then(({data:e})=>e),"v-c18e5fb6":()=>u(()=>import("./遥感技术.html-da497df8.js"),[]).then(({data:e})=>e),"v-2c30c006":()=>u(()=>import("./温州行.html-fa607df5.js"),[]).then(({data:e})=>e),"v-3706649a":()=>u(()=>import("./404.html-44291856.js"),[]).then(({data:e})=>e),"v-78db5d8e":()=>u(()=>import("./index.html-fee49b51.js"),[]).then(({data:e})=>e),"v-e1e3da16":()=>u(()=>import("./index.html-e0e37297.js"),[]).then(({data:e})=>e),"v-3b3de132":()=>u(()=>import("./index.html-576a2530.js"),[]).then(({data:e})=>e),"v-b42c4e26":()=>u(()=>import("./index.html-374ceb0e.js"),[]).then(({data:e})=>e),"v-54e7730c":()=>u(()=>import("./index.html-09368dd0.js"),[]).then(({data:e})=>e),"v-532a2275":()=>u(()=>import("./index.html-b4416ca4.js"),[]).then(({data:e})=>e),"v-c05dc7ba":()=>u(()=>import("./index.html-fc3a22bf.js"),[]).then(({data:e})=>e),"v-5bc93818":()=>u(()=>import("./index.html-c1b23135.js"),[]).then(({data:e})=>e),"v-744d024e":()=>u(()=>import("./index.html-56819b08.js"),[]).then(({data:e})=>e),"v-e52c881c":()=>u(()=>import("./index.html-2b300ef0.js"),[]).then(({data:e})=>e),"v-154dc4c4":()=>u(()=>import("./index.html-56046374.js"),[]).then(({data:e})=>e),"v-01560935":()=>u(()=>import("./index.html-48b35b89.js"),[]).then(({data:e})=>e)},G1=JSON.parse('{"base":"/","lang":"en-US","title":"入川为王","description":"A blog demo for vuepress-theme-hope","head":[],"locales":{}}');var W1=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),K1=e=>{const t=new Set,n=[];return e.forEach(r=>{const o=W1(r);t.has(o)||(t.add(o),n.push(r))}),n},Y1=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,J1=e=>e.startsWith("ftp://"),_n=e=>/^(https?:)?\/\//.test(e),Q1=/.md((\?|#).*)?$/,_o=(e,t="/")=>!!(_n(e)||J1(e)||e.startsWith("/")&&!e.startsWith(t)&&!Q1.test(e)),Fi=e=>/^mailto:/.test(e),X1=e=>/^tel:/.test(e),Sr=e=>Object.prototype.toString.call(e)==="[object Object]",p8=e=>e[e.length-1]==="/"?e.slice(0,-1):e,Vi=e=>e[0]==="/"?e.slice(1):e,Z1=(e,t)=>{const n=Object.keys(e).sort((r,o)=>{const s=o.split("/").length-r.split("/").length;return s!==0?s:o.length-r.length});for(const r of n)if(t.startsWith(r))return r;return"/"};const Si={"v-8daa1a0e":A(()=>u(()=>import("./index.html-182132de.js"),["assets/index.html-182132de.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-184f4da6":A(()=>u(()=>import("./intro.html-0dd8d3d6.js"),["assets/intro.html-0dd8d3d6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2e3eac9e":A(()=>u(()=>import("./slides.html-ae2f805b.js"),["assets/slides.html-ae2f805b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-88a07046":A(()=>u(()=>import("./1 趋于混乱的代码.html-312a2ca4.js"),["assets/1 趋于混乱的代码.html-312a2ca4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4c913582":A(()=>u(()=>import("./AI无相神功_1 AI第一定律.html-8345142d.js"),["assets/AI无相神功_1 AI第一定律.html-8345142d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-19d7c75d":A(()=>u(()=>import("./AI无相神功_2 AI的问题拆分法.html-dbb79477.js"),["assets/AI无相神功_2 AI的问题拆分法.html-dbb79477.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1add9fd1":A(()=>u(()=>import("./AI无相神功_3 定期定额.html-a68fca52.js"),["assets/AI无相神功_3 定期定额.html-a68fca52.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-071eb094":A(()=>u(()=>import("./AI无相神功_4 AI的大玩家.html-a030c450.js"),["assets/AI无相神功_4 AI的大玩家.html-a030c450.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33f951d0":A(()=>u(()=>import("./AI无相神功_6 AI的睡眠工作法.html-98823c9a.js"),["assets/AI无相神功_6 AI的睡眠工作法.html-98823c9a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-359609fd":A(()=>u(()=>import("./AI的代码完成度太高，各位快跳船.html-a6aadcd3.js"),["assets/AI的代码完成度太高，各位快跳船.html-a6aadcd3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f269ffe0":A(()=>u(()=>import("./SP1 十六年光阴.html-d214298d.js"),["assets/SP1 十六年光阴.html-d214298d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-35ef0eec":A(()=>u(()=>import("./SP2 一个月花八百的日子.html-38e529da.js"),["assets/SP2 一个月花八百的日子.html-38e529da.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-393b2345":A(()=>u(()=>import("./SP3 谁懂，我对象的作品被搬到Youtube了.html-f3e74c7d.js"),["assets/SP3 谁懂，我对象的作品被搬到Youtube了.html-f3e74c7d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0b3def67":A(()=>u(()=>import("./SP4 华灯初上.html-2a16b832.js"),["assets/SP4 华灯初上.html-2a16b832.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2e41a181":A(()=>u(()=>import("./代码能写一辈子么.html-a0d94557.js"),["assets/代码能写一辈子么.html-a0d94557.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e6852878":A(()=>u(()=>import("./在Cursor里用claude已经比购买claude还要好.html-bb8a3eef.js"),["assets/在Cursor里用claude已经比购买claude还要好.html-bb8a3eef.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7ad8adf9":A(()=>u(()=>import("./打工人手册_1 目标管理.html-b0a2fc58.js"),["assets/打工人手册_1 目标管理.html-b0a2fc58.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2ef88bdf":A(()=>u(()=>import("./打工人手册_10 利息.html-9ed53e60.js"),["assets/打工人手册_10 利息.html-9ed53e60.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2a6b3493":A(()=>u(()=>import("./打工人手册_11 职场给不了你的.html-d428606b.js"),["assets/打工人手册_11 职场给不了你的.html-d428606b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9ce71322":A(()=>u(()=>import("./打工人手册_12 不要追求职场进步.html-e6454f4d.js"),["assets/打工人手册_12 不要追求职场进步.html-e6454f4d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1c41a51e":A(()=>u(()=>import("./打工人手册_13 工具.html-0a854612.js"),["assets/打工人手册_13 工具.html-0a854612.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3cae8de0":A(()=>u(()=>import("./打工人手册_14 道.html-1751d923.js"),["assets/打工人手册_14 道.html-1751d923.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-be070b50":A(()=>u(()=>import("./打工人手册_15 法.html-721fd058.js"),["assets/打工人手册_15 法.html-721fd058.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5116e1f2":A(()=>u(()=>import("./打工人手册_16 术.html-c5214bd3.js"),["assets/打工人手册_16 术.html-c5214bd3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6e8eda1e":A(()=>u(()=>import("./打工人手册_17 偷懒是一个系统工程.html-bb006711.js"),["assets/打工人手册_17 偷懒是一个系统工程.html-bb006711.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7522514e":A(()=>u(()=>import("./打工人手册_18 免费的方案.html-8b2c9643.js"),["assets/打工人手册_18 免费的方案.html-8b2c9643.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-125c43c8":A(()=>u(()=>import("./打工人手册_19 流量，代表着需求.html-adc4cd41.js"),["assets/打工人手册_19 流量，代表着需求.html-adc4cd41.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-731a0709":A(()=>u(()=>import("./打工人手册_2 原则.html-f228ea72.js"),["assets/打工人手册_2 原则.html-f228ea72.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-96a0dfea":A(()=>u(()=>import("./打工人手册_20 二真之间，必有一假.html-d3a10a04.js"),["assets/打工人手册_20 二真之间，必有一假.html-d3a10a04.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-87363a26":A(()=>u(()=>import("./打工人手册_21 模糊的事情，必然让你付出代价.html-9324dc76.js"),["assets/打工人手册_21 模糊的事情，必然让你付出代价.html-9324dc76.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-09c7f6b9":A(()=>u(()=>import("./打工人手册_22 一个小时可以干什么.html-d4ffa294.js"),["assets/打工人手册_22 一个小时可以干什么.html-d4ffa294.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f04a8126":A(()=>u(()=>import("./打工人手册_23 忙到无暇关注其他事情.html-88ba7681.js"),["assets/打工人手册_23 忙到无暇关注其他事情.html-88ba7681.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-12328457":A(()=>u(()=>import("./打工人手册_24 才华的耗散.html-475edf63.js"),["assets/打工人手册_24 才华的耗散.html-475edf63.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7c1c3600":A(()=>u(()=>import("./打工人手册_25 赚一千万的方法.html-878397b0.js"),["assets/打工人手册_25 赚一千万的方法.html-878397b0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-460d1f69":A(()=>u(()=>import("./打工人手册_26 赚一百万的方法.html-311fe17c.js"),["assets/打工人手册_26 赚一百万的方法.html-311fe17c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-67a60806":A(()=>u(()=>import("./打工人手册_27 赚十万的方法.html-bfebaf89.js"),["assets/打工人手册_27 赚十万的方法.html-bfebaf89.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-19281f73":A(()=>u(()=>import("./打工人手册_28 赚一万的方法.html-124eaec1.js"),["assets/打工人手册_28 赚一万的方法.html-124eaec1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e67be74a":A(()=>u(()=>import("./打工人手册_29 赚一千的方法.html-070757c4.js"),["assets/打工人手册_29 赚一千的方法.html-070757c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-02bc6f94":A(()=>u(()=>import("./打工人手册_3 输出功率.html-5fefb39b.js"),["assets/打工人手册_3 输出功率.html-5fefb39b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5e72a127":A(()=>u(()=>import("./打工人手册_30 赚一百的方法.html-14ff17ba.js"),["assets/打工人手册_30 赚一百的方法.html-14ff17ba.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2775519f":A(()=>u(()=>import("./打工人手册_31 成本与库存的分野.html-739c1abb.js"),["assets/打工人手册_31 成本与库存的分野.html-739c1abb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-272b322a":A(()=>u(()=>import("./打工人手册_32 赚十块的方法.html-a59d51d1.js"),["assets/打工人手册_32 赚十块的方法.html-a59d51d1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-338886d1":A(()=>u(()=>import("./打工人手册_33 赚一块钱的方法.html-517ff680.js"),["assets/打工人手册_33 赚一块钱的方法.html-517ff680.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-41f517de":A(()=>u(()=>import("./打工人手册_34 赚一毛钱的方法.html-f713f64c.js"),["assets/打工人手册_34 赚一毛钱的方法.html-f713f64c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9e788cf6":A(()=>u(()=>import("./打工人手册_35 消费的升级.html-b023c388.js"),["assets/打工人手册_35 消费的升级.html-b023c388.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4b589236":A(()=>u(()=>import("./打工人手册_36 最伟大的亲情.html-0626cfe5.js"),["assets/打工人手册_36 最伟大的亲情.html-0626cfe5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7ca6866c":A(()=>u(()=>import("./打工人手册_37 小公务员的苦楚.html-3c14ce78.js"),["assets/打工人手册_37 小公务员的苦楚.html-3c14ce78.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0b5fb7fc":A(()=>u(()=>import("./打工人手册_38 扫平前行的障碍.html-73c0c099.js"),["assets/打工人手册_38 扫平前行的障碍.html-73c0c099.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2266481e":A(()=>u(()=>import("./打工人手册_39 时代的六万五.html-fad6dce6.js"),["assets/打工人手册_39 时代的六万五.html-fad6dce6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9954f460":A(()=>u(()=>import("./打工人手册_4 中途.html-87ffeaf7.js"),["assets/打工人手册_4 中途.html-87ffeaf7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7e44c719":A(()=>u(()=>import("./打工人手册_40 斗志.html-c26c6110.js"),["assets/打工人手册_40 斗志.html-c26c6110.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5796c9f4":A(()=>u(()=>import("./打工人手册_41 资源的极致利用.html-dc49d012.js"),["assets/打工人手册_41 资源的极致利用.html-dc49d012.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-115344b1":A(()=>u(()=>import("./打工人手册_42 如何打败公司.html-292df97c.js"),["assets/打工人手册_42 如何打败公司.html-292df97c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-38562857":A(()=>u(()=>import("./打工人手册_43 职场是消耗战.html-8d1facbf.js"),["assets/打工人手册_43 职场是消耗战.html-8d1facbf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4077aa70":A(()=>u(()=>import("./打工人手册_44 财富的光锥之内.html-619f925b.js"),["assets/打工人手册_44 财富的光锥之内.html-619f925b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c47a0d6a":A(()=>u(()=>import("./打工人手册_45 能量与信息的主旋律.html-094e7e91.js"),["assets/打工人手册_45 能量与信息的主旋律.html-094e7e91.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3612baf2":A(()=>u(()=>import("./打工人手册_46 钱能产生利息的反面.html-efe92010.js"),["assets/打工人手册_46 钱能产生利息的反面.html-efe92010.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a70dce4a":A(()=>u(()=>import("./打工人手册_47 买与卖的学问.html-1ec7a336.js"),["assets/打工人手册_47 买与卖的学问.html-1ec7a336.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2a657030":A(()=>u(()=>import("./打工人手册_48 交易.html-13eb8c36.js"),["assets/打工人手册_48 交易.html-13eb8c36.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-66841430":A(()=>u(()=>import("./打工人手册_49 生态位.html-4dfede2d.js"),["assets/打工人手册_49 生态位.html-4dfede2d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-978e2d4c":A(()=>u(()=>import("./打工人手册_5 冷启动.html-873fde7c.js"),["assets/打工人手册_5 冷启动.html-873fde7c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-82648be8":A(()=>u(()=>import("./打工人手册_5.5 输赢.html-20137ad3.js"),["assets/打工人手册_5.5 输赢.html-20137ad3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b20e32d":A(()=>u(()=>import("./打工人手册_50 脑子为谁工作.html-81878306.js"),["assets/打工人手册_50 脑子为谁工作.html-81878306.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-072a9dce":A(()=>u(()=>import("./打工人手册_51 视觉的盲区.html-a8ce515e.js"),["assets/打工人手册_51 视觉的盲区.html-a8ce515e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2c7d9ef1":A(()=>u(()=>import("./打工人手册_52 大语言模型的浪潮.html-783ae64c.js"),["assets/打工人手册_52 大语言模型的浪潮.html-783ae64c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-31f08afb":A(()=>u(()=>import("./打工人手册_53 生生不息.html-ddfb99d4.js"),["assets/打工人手册_53 生生不息.html-ddfb99d4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-691b158a":A(()=>u(()=>import("./打工人手册_53 窗口期.html-ea66eaed.js"),["assets/打工人手册_53 窗口期.html-ea66eaed.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-64d7b94a":A(()=>u(()=>import("./打工人手册_54 病痛的价值.html-eeb89328.js"),["assets/打工人手册_54 病痛的价值.html-eeb89328.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7ed7cf28":A(()=>u(()=>import("./打工人手册_55 权力的结构.html-9e63aea2.js"),["assets/打工人手册_55 权力的结构.html-9e63aea2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b220915":A(()=>u(()=>import("./打工人手册_56 时间的铁则.html-8527e7ef.js"),["assets/打工人手册_56 时间的铁则.html-8527e7ef.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-38d5a178":A(()=>u(()=>import("./打工人手册_57 命运的拐角.html-051ead6c.js"),["assets/打工人手册_57 命运的拐角.html-051ead6c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-729d120e":A(()=>u(()=>import("./打工人手册_58 资源的解锁.html-9c00fd0b.js"),["assets/打工人手册_58 资源的解锁.html-9c00fd0b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33fe848c":A(()=>u(()=>import("./打工人手册_59 靠专业赚钱.html-b3dc600a.js"),["assets/打工人手册_59 靠专业赚钱.html-b3dc600a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-07fbb390":A(()=>u(()=>import("./打工人手册_6 价值.html-d5e2c1bc.js"),["assets/打工人手册_6 价值.html-d5e2c1bc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0eea4252":A(()=>u(()=>import("./打工人手册_60 造势不如顺势.html-8616cc19.js"),["assets/打工人手册_60 造势不如顺势.html-8616cc19.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5c5f8dff":A(()=>u(()=>import("./打工人手册_63 流寇.html-a8034171.js"),["assets/打工人手册_63 流寇.html-a8034171.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-63dbd366":A(()=>u(()=>import("./打工人手册_64 用想象力拼凑一条向前之路.html-4bb33972.js"),["assets/打工人手册_64 用想象力拼凑一条向前之路.html-4bb33972.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0dc7f30a":A(()=>u(()=>import("./打工人手册_65 用想象力拼凑一条向前之路(下).html-2125a921.js"),["assets/打工人手册_65 用想象力拼凑一条向前之路(下).html-2125a921.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-73bd7b40":A(()=>u(()=>import("./打工人手册_66 轮动之道，乃是天之道.html-19f1c1c6.js"),["assets/打工人手册_66 轮动之道，乃是天之道.html-19f1c1c6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ce6dc1d2":A(()=>u(()=>import("./打工人手册_67 遗传的本质就是轮动.html-5f814710.js"),["assets/打工人手册_67 遗传的本质就是轮动.html-5f814710.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2f09909e":A(()=>u(()=>import("./打工人手册_68 代理之路.html-62675a6b.js"),["assets/打工人手册_68 代理之路.html-62675a6b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-37b45762":A(()=>u(()=>import("./打工人手册_69 跳槽的战略路线.html-7e3d2a90.js"),["assets/打工人手册_69 跳槽的战略路线.html-7e3d2a90.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1687afe0":A(()=>u(()=>import("./打工人手册_7 难难难.html-11fa9d35.js"),["assets/打工人手册_7 难难难.html-11fa9d35.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-15fbc74e":A(()=>u(()=>import("./打工人手册_70 永远满仓的问题在于无周转.html-9da278a6.js"),["assets/打工人手册_70 永远满仓的问题在于无周转.html-9da278a6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-699b4472":A(()=>u(()=>import("./打工人手册_71 修炼的隐喻.html-909356d3.js"),["assets/打工人手册_71 修炼的隐喻.html-909356d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1e5c5c7b":A(()=>u(()=>import("./打工人手册_72 尽量去掌握生产资料.html-518a474e.js"),["assets/打工人手册_72 尽量去掌握生产资料.html-518a474e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a86f8722":A(()=>u(()=>import("./打工人手册_73 聚沙成塔的时间复用法.html-1b0edf30.js"),["assets/打工人手册_73 聚沙成塔的时间复用法.html-1b0edf30.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4a148736":A(()=>u(()=>import("./打工人手册_74 直接面对问题.html-193195eb.js"),["assets/打工人手册_74 直接面对问题.html-193195eb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2e5f21b8":A(()=>u(()=>import("./打工人手册_75 谷歌前十的页面你应该看完.html-c38054f5.js"),["assets/打工人手册_75 谷歌前十的页面你应该看完.html-c38054f5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-051b12af":A(()=>u(()=>import("./打工人手册_76 提升演化的频次.html-94f15a0c.js"),["assets/打工人手册_76 提升演化的频次.html-94f15a0c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-75d7587d":A(()=>u(()=>import("./打工人手册_8 大有大的难处.html-6610f9d5.js"),["assets/打工人手册_8 大有大的难处.html-6610f9d5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-299d697c":A(()=>u(()=>import("./打工人手册_9 捡瓶子的艺术.html-28626d92.js"),["assets/打工人手册_9 捡瓶子的艺术.html-28626d92.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a51a6c2e":A(()=>u(()=>import("./普通打工人的一生.html-57284555.js"),["assets/普通打工人的一生.html-57284555.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7da5f727":A(()=>u(()=>import("./职场的天花板.html-54a554c5.js"),["assets/职场的天花板.html-54a554c5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3e6d5320":A(()=>u(()=>import("./1 电和水的成本.html-fff4928e.js"),["assets/1 电和水的成本.html-fff4928e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a85ff27a":A(()=>u(()=>import("./10 对标.html-5fc97bf2.js"),["assets/10 对标.html-5fc97bf2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d0d8ee48":A(()=>u(()=>import("./11 2024 明暗切换之路.html-c4b767b4.js"),["assets/11 2024 明暗切换之路.html-c4b767b4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-000b162b":A(()=>u(()=>import("./12 资源的极致使用.html-1ad9eb81.js"),["assets/12 资源的极致使用.html-1ad9eb81.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b643057":A(()=>u(()=>import("./2 关于拖延的分析.html-f58234ab.js"),["assets/2 关于拖延的分析.html-f58234ab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-25efb130":A(()=>u(()=>import("./3 我所认识的左耳朵耗子.html-402f880f.js"),["assets/3 我所认识的左耳朵耗子.html-402f880f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4c82768e":A(()=>u(()=>import("./4 韩老魔的成长之路.html-ad9e56e9.js"),["assets/4 韩老魔的成长之路.html-ad9e56e9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4434b254":A(()=>u(()=>import("./5 我所用的方法.html-95bf1ab5.js"),["assets/5 我所用的方法.html-95bf1ab5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6a8bc352":A(()=>u(()=>import("./6 2023 夹缝中的奇迹.html-b9338539.js"),["assets/6 2023 夹缝中的奇迹.html-b9338539.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7084efee":A(()=>u(()=>import("./7 房间系统的内循环.html-41b2cba4.js"),["assets/7 房间系统的内循环.html-41b2cba4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e36fc148":A(()=>u(()=>import("./8 强与弱的幻觉.html-eba042db.js"),["assets/8 强与弱的幻觉.html-eba042db.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-34142867":A(()=>u(()=>import("./9 根据地.html-abb62ae8.js"),["assets/9 根据地.html-abb62ae8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c4735526":A(()=>u(()=>import("./2020我来了.html-a4dd01b9.js"),["assets/2020我来了.html-a4dd01b9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-60a2d43e":A(()=>u(()=>import("./2021重回深圳芜湖.html-97fd697c.js"),["assets/2021重回深圳芜湖.html-97fd697c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-75f5f7f8":A(()=>u(()=>import("./2023的尾巴来广州工作啦打工人日常.html-90396f72.js"),["assets/2023的尾巴来广州工作啦打工人日常.html-90396f72.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-06d58938":A(()=>u(()=>import("./2024又要去往新的城市啦.html-52a04d3e.js"),["assets/2024又要去往新的城市啦.html-52a04d3e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-75834753":A(()=>u(()=>import("./2024很幸运2025会更好呀.html-0c4f8ec2.js"),["assets/2024很幸运2025会更好呀.html-0c4f8ec2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4ac06eac":A(()=>u(()=>import("./2025要和男朋友一起旺旺旺.html-4b91b255.js"),["assets/2025要和男朋友一起旺旺旺.html-4b91b255.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-954d91fe":A(()=>u(()=>import("./47卡位赛 王者荣耀第三轮.html-d939992c.js"),["assets/47卡位赛 王者荣耀第三轮.html-d939992c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f2ce5f74":A(()=>u(()=>import("./Last day要去广州啦_一切顺利.html-a942bf8c.js"),["assets/Last day要去广州啦_一切顺利.html-a942bf8c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-160124f8":A(()=>u(()=>import("./iPhone15 Pro Max使用感很好好看.html-5b26f7fc.js"),["assets/iPhone15 Pro Max使用感很好好看.html-5b26f7fc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-176bc0da":A(()=>u(()=>import("./record a new day.html-e2ce3c0a.js"),["assets/record a new day.html-e2ce3c0a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01a225a0":A(()=>u(()=>import("./一丢丢生活plog如此热爱生活.html-3462cbb1.js"),["assets/一丢丢生活plog如此热爱生活.html-3462cbb1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-682c8701":A(()=>u(()=>import("./一人食的日常.html-b1569c14.js"),["assets/一人食的日常.html-b1569c14.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-28c21826":A(()=>u(()=>import("./一张图证明你的运气很好.html-8c1baa24.js"),["assets/一张图证明你的运气很好.html-8c1baa24.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7ca3b6cc":A(()=>u(()=>import("./一把晋级成功太顺利惹.html-adf35553.js"),["assets/一把晋级成功太顺利惹.html-adf35553.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-09673a32":A(()=>u(()=>import("./上周的王者荣耀牌牌.html-251463db.js"),["assets/上周的王者荣耀牌牌.html-251463db.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bcf14eb0":A(()=>u(()=>import("./不要把你的观念强加给别人.html-4bc716d6.js"),["assets/不要把你的观念强加给别人.html-4bc716d6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2db2b064":A(()=>u(()=>import("./两个人在一起就是意义.html-792f9da2.js"),["assets/两个人在一起就是意义.html-792f9da2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4120dc9f":A(()=>u(()=>import("./中秋节假期后被夸了一周了.html-4b05db12.js"),["assets/中秋节假期后被夸了一周了.html-4b05db12.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f6610eae":A(()=>u(()=>import("./中通快递真的很垃圾无语.html-347108cb.js"),["assets/中通快递真的很垃圾无语.html-347108cb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-61011f00":A(()=>u(()=>import("./为什么闹别扭以后情绪反扑这么严重.html-bad499cd.js"),["assets/为什么闹别扭以后情绪反扑这么严重.html-bad499cd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49db4735":A(()=>u(()=>import("./乐乐茶这个包装也太好笑了.html-94b64112.js"),["assets/乐乐茶这个包装也太好笑了.html-94b64112.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b8b9fdf":A(()=>u(()=>import("./乐高积木.html-ce49f0d8.js"),["assets/乐高积木.html-ce49f0d8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6bb85300":A(()=>u(()=>import("./二十大几单身很好不要焦虑开心最重要.html-52c10d2d.js"),["assets/二十大几单身很好不要焦虑开心最重要.html-52c10d2d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-aea96510":A(()=>u(()=>import("./于祥宇真的很难不让人喜欢.html-16fdab71.js"),["assets/于祥宇真的很难不让人喜欢.html-16fdab71.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-46d10d3e":A(()=>u(()=>import("./今天喝了什么.html-347f401c.js"),["assets/今天喝了什么.html-347f401c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-117967e4":A(()=>u(()=>import("./今天喝了吗.html-8f9d4c7c.js"),["assets/今天喝了吗.html-8f9d4c7c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7fd019d2":A(()=>u(()=>import("./今天喝了吗绿箭给我打钱.html-032fd470.js"),["assets/今天喝了吗绿箭给我打钱.html-032fd470.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-50760880":A(()=>u(()=>import("./今天我就是女野王哈哈哈.html-ca27bab7.js"),["assets/今天我就是女野王哈哈哈.html-ca27bab7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-676d5ede":A(()=>u(()=>import("./今年的网易云年度总结来啦.html-5bac6da7.js"),["assets/今年的网易云年度总结来啦.html-5bac6da7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fa2a96d0":A(()=>u(()=>import("./今日份水果已发放到手里.html-3820eecf.js"),["assets/今日份水果已发放到手里.html-3820eecf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ee3cab44":A(()=>u(()=>import("./今日早餐土豆泥沙拉.html-611e5770.js"),["assets/今日早餐土豆泥沙拉.html-611e5770.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2da7eada":A(()=>u(()=>import("./他怎么这么好看.html-0614f924.js"),["assets/他怎么这么好看.html-0614f924.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01def838":A(()=>u(()=>import("./他说我在欣赏我的猎物.html-d6ec6ffd.js"),["assets/他说我在欣赏我的猎物.html-d6ec6ffd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b760b8b6":A(()=>u(()=>import("./任何没看封神的人体会不到我的快乐.html-1217656a.js"),["assets/任何没看封神的人体会不到我的快乐.html-1217656a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6f80895a":A(()=>u(()=>import("./你好呀2019.html-eb9079b6.js"),["assets/你好呀2019.html-eb9079b6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b754024":A(()=>u(()=>import("./你怎么知道我要去看孟凡明.html-756b78bd.js"),["assets/你怎么知道我要去看孟凡明.html-756b78bd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-40355436":A(()=>u(()=>import("./借朋友家小猫咪来拍视频.html-8a27c671.js"),["assets/借朋友家小猫咪来拍视频.html-8a27c671.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-35abf21c":A(()=>u(()=>import("./做饭日常.html-f0cb2504.js"),["assets/做饭日常.html-f0cb2504.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-10146b6e":A(()=>u(()=>import("./充满生活气的城市随便拍.html-f6791a1d.js"),["assets/充满生活气的城市随便拍.html-f6791a1d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0c3dd955":A(()=>u(()=>import("./公司留下的陈楚生店长.html-4da59aa7.js"),["assets/公司留下的陈楚生店长.html-4da59aa7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6de021dc":A(()=>u(()=>import("./别再给我推荐eStar了.html-e8a8a348.js"),["assets/别再给我推荐eStar了.html-e8a8a348.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-903e110a":A(()=>u(()=>import("./剧版镇魂这是仙子吧朱一龙.html-c52649d3.js"),["assets/剧版镇魂这是仙子吧朱一龙.html-c52649d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-061618aa":A(()=>u(()=>import("./又是为别人爱情落泪的一天.html-515a4fb9.js"),["assets/又是为别人爱情落泪的一天.html-515a4fb9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1825afb7":A(()=>u(()=>import("./又是美食.html-1e4bb635.js"),["assets/又是美食.html-1e4bb635.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7dd86076":A(()=>u(()=>import("./双人同舞真的好玩爱玩.html-8731f7c7.js"),["assets/双人同舞真的好玩爱玩.html-8731f7c7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-439caf43":A(()=>u(()=>import("./名场面啊买床单以后笑死了.html-bb29e687.js"),["assets/名场面啊买床单以后笑死了.html-bb29e687.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7665fb42":A(()=>u(()=>import("./后天隔离结束17号预约了dfs.html-d136e09e.js"),["assets/后天隔离结束17号预约了dfs.html-d136e09e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ec97590":A(()=>u(()=>import("./周末快乐三人同居在家的快乐生活.html-5eba086b.js"),["assets/周末快乐三人同居在家的快乐生活.html-5eba086b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-94f15b56":A(()=>u(()=>import("./和室友喝小酒吃烧烤聊到深夜.html-28774763.js"),["assets/和室友喝小酒吃烧烤聊到深夜.html-28774763.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b990bda8":A(()=>u(()=>import("./啊我这大屁股怎么办.html-6ee86b28.js"),["assets/啊我这大屁股怎么办.html-6ee86b28.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0dad4594":A(()=>u(()=>import("./啊逛街看到一个男团在签售.html-9df962d2.js"),["assets/啊逛街看到一个男团在签售.html-9df962d2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1e4e63fb":A(()=>u(()=>import("./嗓子痛哑成电音朵拉还是没逃过.html-86773960.js"),["assets/嗓子痛哑成电音朵拉还是没逃过.html-86773960.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5c9d16cd":A(()=>u(()=>import("./四海城圣诞节氛围好浓啊.html-23edf959.js"),["assets/四海城圣诞节氛围好浓啊.html-23edf959.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1621c87a":A(()=>u(()=>import("./回家回家勇敢的人先买机票再请假.html-8ef71e0d.js"),["assets/回家回家勇敢的人先买机票再请假.html-8ef71e0d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6379fee4":A(()=>u(()=>import("./在上海虹桥站换乘已经被挤死.html-62daa5c9.js"),["assets/在上海虹桥站换乘已经被挤死.html-62daa5c9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-369d4408":A(()=>u(()=>import("./坚持真的会有改善.html-d54fb200.js"),["assets/坚持真的会有改善.html-d54fb200.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4620b9dd":A(()=>u(()=>import("./复阳第四天慢慢恢复中.html-c61d09df.js"),["assets/复阳第四天慢慢恢复中.html-c61d09df.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6fe02bb0":A(()=>u(()=>import("./外卖小哥好有趣.html-bd19df1c.js"),["assets/外卖小哥好有趣.html-bd19df1c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c3a2a69c":A(()=>u(()=>import("./大三巴这家店在放周兴哲.html-5e7c0323.js"),["assets/大三巴这家店在放周兴哲.html-5e7c0323.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-12e7c04b":A(()=>u(()=>import("./大唐诗人传我冲了.html-6890d008.js"),["assets/大唐诗人传我冲了.html-6890d008.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-72c4231b":A(()=>u(()=>import("./大声宣布终于甜甜的恋爱也轮到我啦.html-ab1f21ef.js"),["assets/大声宣布终于甜甜的恋爱也轮到我啦.html-ab1f21ef.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-eb83d134":A(()=>u(()=>import("./太恶心了避雷百草味鸭脖有虫卵.html-d32c4d3b.js"),["assets/太恶心了避雷百草味鸭脖有虫卵.html-d32c4d3b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-efef747a":A(()=>u(()=>import("./如果爱情有温度此刻就是最适宜的.html-0068f4b7.js"),["assets/如果爱情有温度此刻就是最适宜的.html-0068f4b7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-382b43ec":A(()=>u(()=>import("./孟凡明带来的快乐持续一整天.html-ddde0234.js"),["assets/孟凡明带来的快乐持续一整天.html-ddde0234.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3d6634f3":A(()=>u(()=>import("./它真的太会了好可爱.html-bc2d080c.js"),["assets/它真的太会了好可爱.html-bc2d080c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9c1c004a":A(()=>u(()=>import("./封神第一部真的好看给我冲.html-d98bfeb5.js"),["assets/封神第一部真的好看给我冲.html-d98bfeb5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6f8bec3a":A(()=>u(()=>import("./小卢真帅终于可以继续追唐诡2.html-a267cae2.js"),["assets/小卢真帅终于可以继续追唐诡2.html-a267cae2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5607e1b6":A(()=>u(()=>import("./小总结就是太快乐了.html-be66a2e8.js"),["assets/小总结就是太快乐了.html-be66a2e8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e8eb45da":A(()=>u(()=>import("./小红书给我发奖状啦.html-a1e834d2.js"),["assets/小红书给我发奖状啦.html-a1e834d2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7d26b93f":A(()=>u(()=>import("./山姆新品牛肉馅饼干.html-e8721770.js"),["assets/山姆新品牛肉馅饼干.html-e8721770.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4ca4fa0a":A(()=>u(()=>import("./希望在香港越来越好呀.html-20b8660c.js"),["assets/希望在香港越来越好呀.html-20b8660c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-725aaab5":A(()=>u(()=>import("./幸福的一天开启 更加努力爱自己.html-c6c0d695.js"),["assets/幸福的一天开启 更加努力爱自己.html-c6c0d695.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-44c66a70":A(()=>u(()=>import("./广东番禺区求租房南村万博附近.html-031f28e4.js"),["assets/广东番禺区求租房南村万博附近.html-031f28e4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d234042":A(()=>u(()=>import("./广州周末看展ᴗ广东省博物馆.html-dfbfc101.js"),["assets/广州周末看展ᴗ广东省博物馆.html-dfbfc101.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7e8c337f":A(()=>u(()=>import("./广播剧cv漠然配音小花絮.html-60327961.js"),["assets/广播剧cv漠然配音小花絮.html-60327961.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e873d900":A(()=>u(()=>import("./建议不会说话的人shut up.html-210e5305.js"),["assets/建议不会说话的人shut up.html-210e5305.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-482461a3":A(()=>u(()=>import("./开启新的一天10月快乐.html-84baaa84.js"),["assets/开启新的一天10月快乐.html-84baaa84.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b142612":A(()=>u(()=>import("./异地恋当然要记录啦被爱真的好幸福.html-e9e4f7ea.js"),["assets/异地恋当然要记录啦被爱真的好幸福.html-e9e4f7ea.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5577c31d":A(()=>u(()=>import("./异地恋的远程约会_.html-04a59586.js"),["assets/异地恋的远程约会_.html-04a59586.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-587178f6":A(()=>u(()=>import("./异地恋见面之陪男朋友过生日一.html-fcc461a0.js"),["assets/异地恋见面之陪男朋友过生日一.html-fcc461a0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-39ba3dc8":A(()=>u(()=>import("./异地恋见面之陪男朋友过生日三.html-a1a1f2ac.js"),["assets/异地恋见面之陪男朋友过生日三.html-a1a1f2ac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2a9b3e5b":A(()=>u(()=>import("./异地恋见面之陪男朋友过生日二.html-db3e310b.js"),["assets/异地恋见面之陪男朋友过生日二.html-db3e310b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c1c61150":A(()=>u(()=>import("./弟弟浅浅带我王者荣耀连赢啦.html-f3590616.js"),["assets/弟弟浅浅带我王者荣耀连赢啦.html-f3590616.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1160b200":A(()=>u(()=>import("./张凯我哭死TTG明年见.html-6ad74d38.js"),["assets/张凯我哭死TTG明年见.html-6ad74d38.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2922241c":A(()=>u(()=>import("./得了新冠进入羊圈的第一天感受.html-402aa22f.js"),["assets/得了新冠进入羊圈的第一天感受.html-402aa22f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cf57e28a":A(()=>u(()=>import("./心心念念的apm六芒星项链和手链.html-e1211534.js"),["assets/心心念念的apm六芒星项链和手链.html-e1211534.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-57c30dab":A(()=>u(()=>import("./心疼我们耶耶罗思源是最棒.html-52ea4227.js"),["assets/心疼我们耶耶罗思源是最棒.html-52ea4227.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-33271e12":A(()=>u(()=>import("./志怪纪录片妖怪传安利.html-54a8d095.js"),["assets/志怪纪录片妖怪传安利.html-54a8d095.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-403c2dec":A(()=>u(()=>import("./怎么一喝咖啡就容易窜稀.html-01ddc231.js"),["assets/怎么一喝咖啡就容易窜稀.html-01ddc231.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3d15b942":A(()=>u(()=>import("./情绪稳定的男友真的很重要家人们.html-b553e2fb.js"),["assets/情绪稳定的男友真的很重要家人们.html-b553e2fb.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-34cb1ca4":A(()=>u(()=>import("./感情的消失从没有分享欲开始.html-f92c30df.js"),["assets/感情的消失从没有分享欲开始.html-f92c30df.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-546a013c":A(()=>u(()=>import("./感觉圈子真的很可怕一诺.html-fe818dd7.js"),["assets/感觉圈子真的很可怕一诺.html-fe818dd7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-66660248":A(()=>u(()=>import("./我一直都被好好爱着爱我的父母.html-50745373.js"),["assets/我一直都被好好爱着爱我的父母.html-50745373.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e2c137d4":A(()=>u(()=>import("./我们一起热烈.html-f2747ed3.js"),["assets/我们一起热烈.html-f2747ed3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1856cc8d":A(()=>u(()=>import("./我们在小红书解锁新的聊天标识啦.html-16f7a406.js"),["assets/我们在小红书解锁新的聊天标识啦.html-16f7a406.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6eb5a85d":A(()=>u(()=>import("./我四年前喜欢的超糊帕帕终于要火了吗.html-02d3a817.js"),["assets/我四年前喜欢的超糊帕帕终于要火了吗.html-02d3a817.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3d29dfdc":A(()=>u(()=>import("./我很震惊为什么首页推荐全是男生.html-4d799d51.js"),["assets/我很震惊为什么首页推荐全是男生.html-4d799d51.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-05f8870d":A(()=>u(()=>import("./我的搜索记录显示我有霸总气质.html-b3c3685e.js"),["assets/我的搜索记录显示我有霸总气质.html-b3c3685e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-214e4128":A(()=>u(()=>import("./我真的吐了素质极差.html-0f9d34c7.js"),["assets/我真的吐了素质极差.html-0f9d34c7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-13be1e3e":A(()=>u(()=>import("./我真的生气了买了新皮还在输.html-0772ab51.js"),["assets/我真的生气了买了新皮还在输.html-0772ab51.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bec1e8b6":A(()=>u(()=>import("./我那进步很大的主队拜托继续加油.html-2fc4a710.js"),["assets/我那进步很大的主队拜托继续加油.html-2fc4a710.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-152a9a46":A(()=>u(()=>import("./打游戏小拇指根部疼.html-a841afe4.js"),["assets/打游戏小拇指根部疼.html-a841afe4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1c851524":A(()=>u(()=>import("./打游戏约我公主请上号.html-24e55b77.js"),["assets/打游戏约我公主请上号.html-24e55b77.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-563489d8":A(()=>u(()=>import("./扬州乒乓球全锦赛你别太离谱.html-d2018d07.js"),["assets/扬州乒乓球全锦赛你别太离谱.html-d2018d07.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3bcd1164":A(()=>u(()=>import("./扬州去啦.html-c55a9a5b.js"),["assets/扬州去啦.html-c55a9a5b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-210e4199":A(()=>u(()=>import("./抓娃娃的快乐.html-81d04a68.js"),["assets/抓娃娃的快乐.html-81d04a68.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-00a3822b":A(()=>u(()=>import("./排位日记这周保住啦可惜小明掉了.html-950cbf0d.js"),["assets/排位日记这周保住啦可惜小明掉了.html-950cbf0d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6f415fe0":A(()=>u(()=>import("./排队一小时的粤陈记粥底火锅.html-e2497fd3.js"),["assets/排队一小时的粤陈记粥底火锅.html-e2497fd3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6b95903e":A(()=>u(()=>import("./推荐一个宝藏历史博主-东兴苟十三.html-abe6ed1e.js"),["assets/推荐一个宝藏历史博主-东兴苟十三.html-abe6ed1e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b3bbe49e":A(()=>u(()=>import("./收扬州全锦赛门票.html-882627b9.js"),["assets/收扬州全锦赛门票.html-882627b9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-653e79e6":A(()=>u(()=>import("./新型雪糕刺客-德芙真有你的.html-a997898c.js"),["assets/新型雪糕刺客-德芙真有你的.html-a997898c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4b16f173":A(()=>u(()=>import("./新年战甲搞定啦.html-f48acc9a.js"),["assets/新年战甲搞定啦.html-f48acc9a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b464b56":A(()=>u(()=>import("./新的一周新的王者荣耀标标.html-e16a1c7c.js"),["assets/新的一周新的王者荣耀标标.html-e16a1c7c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7c7ea5d4":A(()=>u(()=>import("./无所谓 俺有朋友帮我跑哈哈哈.html-559528ff.js"),["assets/无所谓 俺有朋友帮我跑哈哈哈.html-559528ff.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3fbc0cc9":A(()=>u(()=>import("./日料放题.html-c2a7d38b.js"),["assets/日料放题.html-c2a7d38b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-77177bb1":A(()=>u(()=>import("./日腐剧日腐电影推荐安利都给我哭.html-6311e35d.js"),["assets/日腐剧日腐电影推荐安利都给我哭.html-6311e35d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-624f63b1":A(()=>u(()=>import("./日腐我又来啦.html-8fb5bc42.js"),["assets/日腐我又来啦.html-8fb5bc42.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7a12e684":A(()=>u(()=>import("./早上被陌生人敲门还让我开门.html-688981a1.js"),["assets/早上被陌生人敲门还让我开门.html-688981a1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-85531764":A(()=>u(()=>import("./最近的嘎嘎快乐.html-bb2e3021.js"),["assets/最近的嘎嘎快乐.html-bb2e3021.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5a5b4491":A(()=>u(()=>import("./有家人们一起来聊天吗分享快乐.html-0487ff69.js"),["assets/有家人们一起来聊天吗分享快乐.html-0487ff69.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2802af42":A(()=>u(()=>import("./机动搜查队404.html-2c67c717.js"),["assets/机动搜查队404.html-2c67c717.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2c322832":A(()=>u(()=>import("./来小红书9周年啦.html-a7be1a5e.js"),["assets/来小红书9周年啦.html-a7be1a5e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-24e0682c":A(()=>u(()=>import("./松鹤楼 我葱呢我面的葱呢.html-78a3a682.js"),["assets/松鹤楼 我葱呢我面的葱呢.html-78a3a682.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0cbed1f4":A(()=>u(()=>import("./极限虹桥机场T2到T1登机.html-b9b76a48.js"),["assets/极限虹桥机场T2到T1登机.html-b9b76a48.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ec6f06ce":A(()=>u(()=>import("./毕业前的快乐.html-f5b07fd9.js"),["assets/毕业前的快乐.html-f5b07fd9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1770c20e":A(()=>u(()=>import("./永远怀念追一年生的青春SK白月光.html-0bae8452.js"),["assets/永远怀念追一年生的青春SK白月光.html-0bae8452.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-42195c7e":A(()=>u(()=>import("./求一个深圳隔离同行 香港回深圳.html-b3d46b54.js"),["assets/求一个深圳隔离同行 香港回深圳.html-b3d46b54.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3fa5834c":A(()=>u(()=>import("./江苏共青团主题盲盒.html-35e154b7.js"),["assets/江苏共青团主题盲盒.html-35e154b7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6efd7506":A(()=>u(()=>import("./没有蓝还给我让蓝的澜太帅了吧.html-81a5cf46.js"),["assets/没有蓝还给我让蓝的澜太帅了吧.html-81a5cf46.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4b2d2df5":A(()=>u(()=>import("./没看过小公子x小王子的会哭吧.html-89f3bb0e.js"),["assets/没看过小公子x小王子的会哭吧.html-89f3bb0e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ed4402e2":A(()=>u(()=>import("./浅浅记录打工人的一周三餐饮食.html-3bd007a4.js"),["assets/浅浅记录打工人的一周三餐饮食.html-3bd007a4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ff348f2c":A(()=>u(()=>import("./深圳小煵记休想再坑到我.html-551213ac.js"),["assets/深圳小煵记休想再坑到我.html-551213ac.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-190d1618":A(()=>u(()=>import("./深圳的周末快乐碎片降温啦十月你好.html-990e94b6.js"),["assets/深圳的周末快乐碎片降温啦十月你好.html-990e94b6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-490b9ac4":A(()=>u(()=>import("./游记懒得P图之原图直发.html-88489ad8.js"),["assets/游记懒得P图之原图直发.html-88489ad8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-cf4d09da":A(()=>u(()=>import("./滴胶手作沉浸式开箱视频.html-192fb1a4.js"),["assets/滴胶手作沉浸式开箱视频.html-192fb1a4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1c6067c0":A(()=>u(()=>import("./激光点痣伤口感染发炎了.html-7a589992.js"),["assets/激光点痣伤口感染发炎了.html-7a589992.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-43a60d5e":A(()=>u(()=>import("./火锅时间到等不及随便拍一个开吃.html-ae2d1a66.js"),["assets/火锅时间到等不及随便拍一个开吃.html-ae2d1a66.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4ed17f67":A(()=>u(()=>import("./爱上喝汤健健康康.html-af951a4d.js"),["assets/爱上喝汤健健康康.html-af951a4d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4aca13b8":A(()=>u(()=>import("./牛眼泪把科颜氏当身体乳抹了.html-8e3d153b.js"),["assets/牛眼泪把科颜氏当身体乳抹了.html-8e3d153b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e1fcb2e6":A(()=>u(()=>import("./特种兵出差太强了我.html-595e5858.js"),["assets/特种兵出差太强了我.html-595e5858.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-671b1c80":A(()=>u(()=>import("./狮暖一生推.html-2b0dcc31.js"),["assets/狮暖一生推.html-2b0dcc31.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-11dcb231":A(()=>u(()=>import("./王者荣耀一周爬55颗星星.html-17d340a4.js"),["assets/王者荣耀一周爬55颗星星.html-17d340a4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-664dc686":A(()=>u(()=>import("./王者荣耀世冠抽签结果.html-618e53bc.js"),["assets/王者荣耀世冠抽签结果.html-618e53bc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-377154b6":A(()=>u(()=>import("./王者荣耀亚运会大名单公布.html-8444aa58.js"),["assets/王者荣耀亚运会大名单公布.html-8444aa58.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-66e72c09":A(()=>u(()=>import("./王者荣耀你可得瑟吧.html-e7b916ab.js"),["assets/王者荣耀你可得瑟吧.html-e7b916ab.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5f3b6b11":A(()=>u(()=>import("./王者荣耀快乐上分超nice游戏搭子.html-aa1843f7.js"),["assets/王者荣耀快乐上分超nice游戏搭子.html-aa1843f7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d0c3bcd":A(()=>u(()=>import("./瑞幸你是懂联名的真可爱.html-64950ba0.js"),["assets/瑞幸你是懂联名的真可爱.html-64950ba0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-79c4af16":A(()=>u(()=>import("./瑞幸桂花龙井拿铁.html-593eff08.js"),["assets/瑞幸桂花龙井拿铁.html-593eff08.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-af3dd876":A(()=>u(()=>import("./男朋友从投喂一只小猪变成了三只.html-edda3e27.js"),["assets/男朋友从投喂一只小猪变成了三只.html-edda3e27.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-39007411":A(()=>u(()=>import("./男生穿搭好难啊丑的真丑好看的真好看.html-9a6e6d3e.js"),["assets/男生穿搭好难啊丑的真丑好看的真好看.html-9a6e6d3e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f03e7622":A(()=>u(()=>import("./番禺天河城一早排队盛况.html-61218525.js"),["assets/番禺天河城一早排队盛况.html-61218525.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-48c69535":A(()=>u(()=>import("./白石深夜食堂 日料真好吃.html-f55477bc.js"),["assets/白石深夜食堂 日料真好吃.html-f55477bc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49eff157":A(()=>u(()=>import("./盐城你出息了只此青绿.html-db789778.js"),["assets/盐城你出息了只此青绿.html-db789778.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-89239f76":A(()=>u(()=>import("./睡醒以后怎么样才能复睡呀.html-165ffbf5.js"),["assets/睡醒以后怎么样才能复睡呀.html-165ffbf5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f49a64f8":A(()=>u(()=>import("./秋冬份的新美甲简简单单.html-18326ad6.js"),["assets/秋冬份的新美甲简简单单.html-18326ad6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b3818dfc":A(()=>u(()=>import("./紫心之恋好好看.html-d495dbda.js"),["assets/紫心之恋好好看.html-d495dbda.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-450e5ed5":A(()=>u(()=>import("./纯爱战士应声倒下.html-23595d00.js"),["assets/纯爱战士应声倒下.html-23595d00.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b924bd4":A(()=>u(()=>import("./终于上无双啦下班艰苦.html-e4ad8c80.js"),["assets/终于上无双啦下班艰苦.html-e4ad8c80.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-46d3234f":A(()=>u(()=>import("./莱德拉我来了巧克力脑袋开心.html-846157ed.js"),["assets/莱德拉我来了巧克力脑袋开心.html-846157ed.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bf39abac":A(()=>u(()=>import("./虽然正方输了但是罗淼学长太强了.html-168ced8d.js"),["assets/虽然正方输了但是罗淼学长太强了.html-168ced8d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3f0b059b":A(()=>u(()=>import("./观光电梯上的维港景色.html-a67f8dd8.js"),["assets/观光电梯上的维港景色.html-a67f8dd8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3c0dd36e":A(()=>u(()=>import("./记录一下勇敢Heidi的一天-Part one.html-77e753b7.js"),["assets/记录一下勇敢Heidi的一天-Part one.html-77e753b7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b708cd52":A(()=>u(()=>import("./记录勇敢Heidi的一天Part Two.html-6ad0e4f0.js"),["assets/记录勇敢Heidi的一天Part Two.html-6ad0e4f0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2c8bcb29":A(()=>u(()=>import("./谁能想到是早餐互联网人最后的倔强.html-2fd290c0.js"),["assets/谁能想到是早餐互联网人最后的倔强.html-2fd290c0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-15c22a10":A(()=>u(()=>import("./谈恋爱好幸福被爱的时候人真的会闪耀.html-37eae5a1.js"),["assets/谈恋爱好幸福被爱的时候人真的会闪耀.html-37eae5a1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7540e5f4":A(()=>u(()=>import("./贾诩xMr岑爱情标价戏码新歌.html-a7e6c94b.js"),["assets/贾诩xMr岑爱情标价戏码新歌.html-a7e6c94b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2246859a":A(()=>u(()=>import("./越简单的款越好看啊秋日美甲.html-4b2ff5b3.js"),["assets/越简单的款越好看啊秋日美甲.html-4b2ff5b3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a002a826":A(()=>u(()=>import("./迎接冬天第一款美甲.html-cf6f7309.js"),["assets/迎接冬天第一款美甲.html-cf6f7309.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6ac9c13e":A(()=>u(()=>import("./这不快乐就来了.html-0d7eda73.js"),["assets/这不快乐就来了.html-0d7eda73.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a67ba00a":A(()=>u(()=>import("./这个点你为什么在看手机.html-791dd10c.js"),["assets/这个点你为什么在看手机.html-791dd10c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-656280de":A(()=>u(()=>import("./这年头工作上还能遇到普信男绝.html-4b7552e4.js"),["assets/这年头工作上还能遇到普信男绝.html-4b7552e4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2cef7e20":A(()=>u(()=>import("./通宵加班的一天.html-9cbf79e8.js"),["assets/通宵加班的一天.html-9cbf79e8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-8bf0b2b6":A(()=>u(()=>import("./随缘收316SHINee香港.html-90c5e460.js"),["assets/随缘收316SHINee香港.html-90c5e460.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d3f65882":A(()=>u(()=>import("./三维建模.html-fde69f4b.js"),["assets/三维建模.html-fde69f4b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-61015d2d":A(()=>u(()=>import("./三角测量.html-636acfa3.js"),["assets/三角测量.html-636acfa3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fac6c888":A(()=>u(()=>import("./全球定位系统（GPS）.html-13b404e1.js"),["assets/全球定位系统（GPS）.html-13b404e1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4586dce6":A(()=>u(()=>import("./全站仪测量.html-0ee8b965.js"),["assets/全站仪测量.html-0ee8b965.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0791f4a4":A(()=>u(()=>import("./卫星影像处理.html-d20aaf86.js"),["assets/卫星影像处理.html-d20aaf86.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-750d807f":A(()=>u(()=>import("./变形监测.html-9cfbc6c4.js"),["assets/变形监测.html-9cfbc6c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bd47f06e":A(()=>u(()=>import("./地下管线探测.html-a6cff5e4.js"),["assets/地下管线探测.html-a6cff5e4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-168f6cf5":A(()=>u(()=>import("./地图投影.html-211aad22.js"),["assets/地图投影.html-211aad22.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4e2ba3b9":A(()=>u(()=>import("./地理信息系统（GIS）.html-2ee3c4db.js"),["assets/地理信息系统（GIS）.html-2ee3c4db.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3aa5140e":A(()=>u(()=>import("./地籍测量.html-e0e999f7.js"),["assets/地籍测量.html-e0e999f7.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-bc0cc008":A(()=>u(()=>import("./坐标转换.html-36ee1c05.js"),["assets/坐标转换.html-36ee1c05.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-429b791e":A(()=>u(()=>import("./导线测量.html-845bc795.js"),["assets/导线测量.html-845bc795.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-590f1733":A(()=>u(()=>import("./工程测量.html-626790a5.js"),["assets/工程测量.html-626790a5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-20c5aa01":A(()=>u(()=>import("./摄影测量.html-76976d5c.js"),["assets/摄影测量.html-76976d5c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b2ec64e":A(()=>u(()=>import("./数字高程模型（DEM）.html-b1288722.js"),["assets/数字高程模型（DEM）.html-b1288722.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-31872f2f":A(()=>u(()=>import("./水准测量.html-873736f4.js"),["assets/水准测量.html-873736f4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-74af3aa5":A(()=>u(()=>import("./海洋测绘.html-42014a8e.js"),["assets/海洋测绘.html-42014a8e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4924f29d":A(()=>u(()=>import("./激光雷达（LiDAR）.html-788cb467.js"),["assets/激光雷达（LiDAR）.html-788cb467.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3ab229c8":A(()=>u(()=>import("./空间数据分析。.html-dbbe4402.js"),["assets/空间数据分析。.html-dbbe4402.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c18e5fb6":A(()=>u(()=>import("./遥感技术.html-9d18de59.js"),["assets/遥感技术.html-9d18de59.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2c30c006":A(()=>u(()=>import("./温州行.html-c2c118d2.js"),["assets/温州行.html-c2c118d2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3706649a":A(()=>u(()=>import("./404.html-7fc732e5.js"),["assets/404.html-7fc732e5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-78db5d8e":A(()=>u(()=>import("./index.html-e3564423.js"),["assets/index.html-e3564423.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e1e3da16":A(()=>u(()=>import("./index.html-4bd49aae.js"),["assets/index.html-4bd49aae.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3b3de132":A(()=>u(()=>import("./index.html-04708c25.js"),["assets/index.html-04708c25.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b42c4e26":A(()=>u(()=>import("./index.html-554a6d57.js"),["assets/index.html-554a6d57.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-54e7730c":A(()=>u(()=>import("./index.html-59be91f3.js"),["assets/index.html-59be91f3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-532a2275":A(()=>u(()=>import("./index.html-6ef16800.js"),["assets/index.html-6ef16800.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c05dc7ba":A(()=>u(()=>import("./index.html-366132e2.js"),["assets/index.html-366132e2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5bc93818":A(()=>u(()=>import("./index.html-208a880c.js"),["assets/index.html-208a880c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744d024e":A(()=>u(()=>import("./index.html-0a0fcb6e.js"),["assets/index.html-0a0fcb6e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e52c881c":A(()=>u(()=>import("./index.html-e0f29fff.js"),["assets/index.html-e0f29fff.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-154dc4c4":A(()=>u(()=>import("./index.html-dec3ec3d.js"),["assets/index.html-dec3ec3d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01560935":A(()=>u(()=>import("./index.html-9ee15b26.js"),["assets/index.html-9ee15b26.js","assets/plugin-vue_export-helper-c27b6911.js"]))};var e5=Symbol(""),ki=Symbol(""),t5=$t({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),ae=()=>{const e=ue(ki);if(!e)throw new Error("pageData() is called without provider.");return e},xi=Symbol(""),he=()=>{const e=ue(xi);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},$i=Symbol(""),n5=()=>{const e=ue($i);if(!e)throw new Error("usePageHead() is called without provider.");return e},r5=Symbol(""),Mi=Symbol(""),d8=()=>{const e=ue(Mi);if(!e)throw new Error("usePageLang() is called without provider.");return e},Ni=Symbol(""),o5=()=>{const e=ue(Ni);if(!e)throw new Error("usePageLayout() is called without provider.");return e},s5=N(U1),B8=Symbol(""),Nt=()=>{const e=ue(B8);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},Pn=N(G1),Hi=()=>Pn,ji=Symbol(""),kr=()=>{const e=ue(ji);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},E5=Symbol(""),l5="Layout",i5="NotFound",Rt=Or({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageData:async e=>{const t=s5.value[e];return await(t==null?void 0:t())??t5},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const r=ie(t.description)?t.description:n.description,o=[...K(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:r}]];return K1(o)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||"en-US",resolvePageLayout:(e,t)=>{let n;if(e.path){const r=e.frontmatter.layout;ie(r)?n=r:n=l5}else n=i5;return t[n]},resolveRouteLocale:(e,t)=>Z1(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),Oo=S({name:"ClientOnly",setup(e,t){const n=N(!1);return pe(()=>{n.value=!0}),()=>{var r,o;return n.value?(o=(r=t.slots).default)==null?void 0:o.call(r):null}}}),A8=S({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=ae(),n=C(()=>Si[e.pageKey||t.value.key]);return()=>n.value?i(n.value):i("div","404 Not Found")}}),_t=(e={})=>e,Ie=e=>_n(e)?e:`/${Vi(e)}`;const a5={};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const In=typeof window<"u";function c5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const be=Object.assign;function Jo(e,t){const n={};for(const r in t){const o=t[r];n[r]=ht(o)?o.map(e):e(o)}return n}const Br=()=>{},ht=Array.isArray,u5=/\/$/,p5=e=>e.replace(u5,"");function Qo(e,t,n="/"){let r,o={},s="",E="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,l>-1?l:t.length),o=e(s)),l>-1&&(r=r||t.slice(0,l),E=t.slice(l,t.length)),r=v5(r??t,n),{fullPath:r+(s&&"?")+s+E,path:r,query:o,hash:E}}function d5(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function SE(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function B5(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Un(t.matched[r],n.matched[o])&&zi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Un(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!A5(e[n],t[n]))return!1;return!0}function A5(e,t){return ht(e)?kE(e,t):ht(t)?kE(t,e):e===t}function kE(e,t){return ht(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function v5(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let s=n.length-1,E,l;for(E=0;E<r.length;E++)if(l=r[E],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(E-(E===r.length?1:0)).join("/")}var wr;(function(e){e.pop="pop",e.push="push"})(wr||(wr={}));var Ar;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ar||(Ar={}));function f5(e){if(!e)if(In){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),p5(e)}const m5=/^[^#]+#/;function h5(e,t){return e.replace(m5,"#")+t}function b5(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Fo=()=>({left:window.pageXOffset,top:window.pageYOffset});function _5(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=b5(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xE(e,t){return(history.state?history.state.position-t:-1)+e}const ys=new Map;function g5(e,t){ys.set(e,t)}function y5(e){const t=ys.get(e);return ys.delete(e),t}let C5=()=>location.protocol+"//"+location.host;function qi(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let l=o.includes(e.slice(s))?e.slice(s).length:1,c=o.slice(l);return c[0]!=="/"&&(c="/"+c),SE(c,"")}return SE(n,e)+r+o}function D5(e,t,n,r){let o=[],s=[],E=null;const l=({state:B})=>{const v=qi(e,location),m=n.value,g=t.value;let D=0;if(B){if(n.value=v,t.value=B,E&&E===m){E=null;return}D=g?B.position-g.position:0}else r(v);o.forEach(h=>{h(n.value,m,{delta:D,type:wr.pop,direction:D?D>0?Ar.forward:Ar.back:Ar.unknown})})};function c(){E=n.value}function a(B){o.push(B);const v=()=>{const m=o.indexOf(B);m>-1&&o.splice(m,1)};return s.push(v),v}function p(){const{history:B}=window;B.state&&B.replaceState(be({},B.state,{scroll:Fo()}),"")}function d(){for(const B of s)B();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:a,destroy:d}}function $E(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Fo():null}}function w5(e){const{history:t,location:n}=window,r={value:qi(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,a,p){const d=e.indexOf("#"),B=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:C5()+e+c;try{t[p?"replaceState":"pushState"](a,"",B),o.value=a}catch(v){console.error(v),n[p?"replace":"assign"](B)}}function E(c,a){const p=be({},t.state,$E(o.value.back,c,o.value.forward,!0),a,{position:o.value.position});s(c,p,!0),r.value=c}function l(c,a){const p=be({},o.value,t.state,{forward:c,scroll:Fo()});s(p.current,p,!0);const d=be({},$E(r.value,c,null),{position:p.position+1},a);s(c,d,!1),r.value=c}return{location:r,state:o,push:l,replace:E}}function I5(e){e=f5(e);const t=w5(e),n=D5(e,t.state,t.location,t.replace);function r(s,E=!0){E||n.pauseListeners(),history.go(s)}const o=be({location:"",base:e,go:r,createHref:h5.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function T5(e){return typeof e=="string"||e&&typeof e=="object"}function Ui(e){return typeof e=="string"||typeof e=="symbol"}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gi=Symbol("");var ME;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ME||(ME={}));function Gn(e,t){return be(new Error,{type:e,[Gi]:!0},t)}function Pt(e,t){return e instanceof Error&&Gi in e&&(t==null||!!(e.type&t))}const NE="[^/]+?",P5={sensitive:!1,strict:!1,start:!0,end:!0},L5=/[.+*?^${}()[\]/\\]/g;function R5(e,t){const n=be({},P5,t),r=[];let o=n.start?"^":"";const s=[];for(const a of e){const p=a.length?[]:[90];n.strict&&!a.length&&(o+="/");for(let d=0;d<a.length;d++){const B=a[d];let v=40+(n.sensitive?.25:0);if(B.type===0)d||(o+="/"),o+=B.value.replace(L5,"\\$&"),v+=40;else if(B.type===1){const{value:m,repeatable:g,optional:D,regexp:h}=B;s.push({name:m,repeatable:g,optional:D});const _=h||NE;if(_!==NE){v+=10;try{new RegExp(`(${_})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${_}): `+F.message)}}let L=g?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(L=D&&a.length<2?`(?:/${L})`:"/"+L),D&&(L+="?"),o+=L,v+=20,D&&(v+=-8),g&&(v+=-20),_===".*"&&(v+=-50)}p.push(v)}r.push(p)}if(n.strict&&n.end){const a=r.length-1;r[a][r[a].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const E=new RegExp(o,n.sensitive?"":"i");function l(a){const p=a.match(E),d={};if(!p)return null;for(let B=1;B<p.length;B++){const v=p[B]||"",m=s[B-1];d[m.name]=v&&m.repeatable?v.split("/"):v}return d}function c(a){let p="",d=!1;for(const B of e){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const v of B)if(v.type===0)p+=v.value;else if(v.type===1){const{value:m,repeatable:g,optional:D}=v,h=m in a?a[m]:"";if(ht(h)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const _=ht(h)?h.join("/"):h;if(!_)if(D)B.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);p+=_}}return p||"/"}return{re:E,score:r,keys:s,parse:l,stringify:c}}function O5(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function F5(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=O5(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(HE(r))return 1;if(HE(o))return-1}return o.length-r.length}function HE(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const V5={type:0,value:""},S5=/[a-zA-Z0-9_]/;function k5(e){if(!e)return[[]];if(e==="/")return[[V5]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${a}": ${v}`)}let n=0,r=n;const o=[];let s;function E(){s&&o.push(s),s=[]}let l=0,c,a="",p="";function d(){a&&(n===0?s.push({type:0,value:a}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:a,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),a="")}function B(){a+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(a&&d(),E()):c===":"?(d(),n=1):B();break;case 4:B(),n=r;break;case 1:c==="("?n=2:S5.test(c)?B():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${a}"`),d(),E(),o}function x5(e,t,n){const r=R5(k5(e.path),n),o=be(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function $5(e,t){const n=[],r=new Map;t=qE({strict:!1,end:!0,sensitive:!1},t);function o(p){return r.get(p)}function s(p,d,B){const v=!B,m=M5(p);m.aliasOf=B&&B.record;const g=qE(t,p),D=[m];if("alias"in p){const L=typeof p.alias=="string"?[p.alias]:p.alias;for(const F of L)D.push(be({},m,{components:B?B.record.components:m.components,path:F,aliasOf:B?B.record:m}))}let h,_;for(const L of D){const{path:F}=L;if(d&&F[0]!=="/"){const q=d.record.path,R=q[q.length-1]==="/"?"":"/";L.path=d.record.path+(F&&R+F)}if(h=x5(L,d,g),B?B.alias.push(h):(_=_||h,_!==h&&_.alias.push(h),v&&p.name&&!zE(h)&&E(p.name)),m.children){const q=m.children;for(let R=0;R<q.length;R++)s(q[R],h,B&&B.children[R])}B=B||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&c(h)}return _?()=>{E(_)}:Br}function E(p){if(Ui(p)){const d=r.get(p);d&&(r.delete(p),n.splice(n.indexOf(d),1),d.children.forEach(E),d.alias.forEach(E))}else{const d=n.indexOf(p);d>-1&&(n.splice(d,1),p.record.name&&r.delete(p.record.name),p.children.forEach(E),p.alias.forEach(E))}}function l(){return n}function c(p){let d=0;for(;d<n.length&&F5(p,n[d])>=0&&(p.record.path!==n[d].record.path||!Wi(p,n[d]));)d++;n.splice(d,0,p),p.record.name&&!zE(p)&&r.set(p.record.name,p)}function a(p,d){let B,v={},m,g;if("name"in p&&p.name){if(B=r.get(p.name),!B)throw Gn(1,{location:p});g=B.record.name,v=be(jE(d.params,B.keys.filter(_=>!_.optional).map(_=>_.name)),p.params&&jE(p.params,B.keys.map(_=>_.name))),m=B.stringify(v)}else if("path"in p)m=p.path,B=n.find(_=>_.re.test(m)),B&&(v=B.parse(m),g=B.record.name);else{if(B=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!B)throw Gn(1,{location:p,currentLocation:d});g=B.record.name,v=be({},d.params,p.params),m=B.stringify(v)}const D=[];let h=B;for(;h;)D.unshift(h.record),h=h.parent;return{name:g,path:m,params:v,matched:D,meta:H5(D)}}return e.forEach(p=>s(p)),{addRoute:s,resolve:a,removeRoute:E,getRoutes:l,getRecordMatcher:o}}function jE(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function M5(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:N5(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function N5(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function zE(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function H5(e){return e.reduce((t,n)=>be(t,n.meta),{})}function qE(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Wi(e,t){return t.children.some(n=>n===e||Wi(e,n))}const Ki=/#/g,j5=/&/g,z5=/\//g,q5=/=/g,U5=/\?/g,Yi=/\+/g,G5=/%5B/g,W5=/%5D/g,Ji=/%5E/g,K5=/%60/g,Qi=/%7B/g,Y5=/%7C/g,Xi=/%7D/g,J5=/%20/g;function v8(e){return encodeURI(""+e).replace(Y5,"|").replace(G5,"[").replace(W5,"]")}function Q5(e){return v8(e).replace(Qi,"{").replace(Xi,"}").replace(Ji,"^")}function Cs(e){return v8(e).replace(Yi,"%2B").replace(J5,"+").replace(Ki,"%23").replace(j5,"%26").replace(K5,"`").replace(Qi,"{").replace(Xi,"}").replace(Ji,"^")}function X5(e){return Cs(e).replace(q5,"%3D")}function Z5(e){return v8(e).replace(Ki,"%23").replace(U5,"%3F")}function ec(e){return e==null?"":Z5(e).replace(z5,"%2F")}function go(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function tc(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(Yi," "),E=s.indexOf("="),l=go(E<0?s:s.slice(0,E)),c=E<0?null:go(s.slice(E+1));if(l in t){let a=t[l];ht(a)||(a=t[l]=[a]),a.push(c)}else t[l]=c}return t}function UE(e){let t="";for(let n in e){const r=e[n];if(n=X5(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ht(r)?r.map(s=>s&&Cs(s)):[r&&Cs(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function nc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ht(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const rc=Symbol(""),GE=Symbol(""),Vo=Symbol(""),f8=Symbol(""),Ds=Symbol("");function lr(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Yt(e,t,n,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((E,l)=>{const c=d=>{d===!1?l(Gn(4,{from:n,to:t})):d instanceof Error?l(d):T5(d)?l(Gn(2,{from:t,to:d})):(s&&r.enterCallbacks[o]===s&&typeof d=="function"&&s.push(d),E())},a=e.call(r&&r.instances[o],t,n,c);let p=Promise.resolve(a);e.length<3&&(p=p.then(c)),p.catch(d=>l(d))})}function Xo(e,t,n,r){const o=[];for(const s of e)for(const E in s.components){let l=s.components[E];if(!(t!=="beforeRouteEnter"&&!s.instances[E]))if(oc(l)){const a=(l.__vccOpts||l)[t];a&&o.push(Yt(a,n,r,s,E))}else{let c=l();o.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${E}" at "${s.path}"`));const p=c5(a)?a.default:a;s.components[E]=p;const B=(p.__vccOpts||p)[t];return B&&Yt(B,n,r,s,E)()}))}}return o}function oc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ws(e){const t=ue(Vo),n=ue(f8),r=C(()=>t.resolve(Bn(e.to))),o=C(()=>{const{matched:c}=r.value,{length:a}=c,p=c[a-1],d=n.matched;if(!p||!d.length)return-1;const B=d.findIndex(Un.bind(null,p));if(B>-1)return B;const v=WE(c[a-2]);return a>1&&WE(p)===v&&d[d.length-1].path!==v?d.findIndex(Un.bind(null,c[a-2])):B}),s=C(()=>o.value>-1&&ic(n.params,r.value.params)),E=C(()=>o.value>-1&&o.value===n.matched.length-1&&zi(n.params,r.value.params));function l(c={}){return lc(c)?t[Bn(e.replace)?"replace":"push"](Bn(e.to)).catch(Br):Promise.resolve()}return{route:r,href:C(()=>r.value.href),isActive:s,isExactActive:E,navigate:l}}const sc=S({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ws,setup(e,{slots:t}){const n=Or(ws(e)),{options:r}=ue(Vo),o=C(()=>({[KE(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[KE(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:i("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Ec=sc;function lc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ic(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!ht(o)||o.length!==r.length||r.some((s,E)=>s!==o[E]))return!1}return!0}function WE(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const KE=(e,t,n)=>e??t??n,ac=S({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ue(Ds),o=C(()=>e.route||r.value),s=ue(GE,0),E=C(()=>{let a=Bn(s);const{matched:p}=o.value;let d;for(;(d=p[a])&&!d.components;)a++;return a}),l=C(()=>o.value.matched[E.value]);ft(GE,C(()=>E.value+1)),ft(rc,l),ft(Ds,o);const c=N();return re(()=>[c.value,l.value,e.name],([a,p,d],[B,v,m])=>{p&&(p.instances[d]=a,v&&v!==p&&a&&a===B&&(p.leaveGuards.size||(p.leaveGuards=v.leaveGuards),p.updateGuards.size||(p.updateGuards=v.updateGuards))),a&&p&&(!v||!Un(p,v)||!B)&&(p.enterCallbacks[d]||[]).forEach(g=>g(a))},{flush:"post"}),()=>{const a=o.value,p=e.name,d=l.value,B=d&&d.components[p];if(!B)return YE(n.default,{Component:B,route:a});const v=d.props[p],m=v?v===!0?a.params:typeof v=="function"?v(a):v:null,D=i(B,be({},m,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[p]=null)},ref:c}));return YE(n.default,{Component:D,route:a})||D}}});function YE(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Zi=ac;function cc(e){const t=$5(e.routes,e),n=e.parseQuery||tc,r=e.stringifyQuery||UE,o=e.history,s=lr(),E=lr(),l=lr(),c=Te(Ot);let a=Ot;In&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Jo.bind(null,T=>""+T),d=Jo.bind(null,ec),B=Jo.bind(null,go);function v(T,j){let x,Y;return Ui(T)?(x=t.getRecordMatcher(T),Y=j):Y=T,t.addRoute(Y,x)}function m(T){const j=t.getRecordMatcher(T);j&&t.removeRoute(j)}function g(){return t.getRoutes().map(T=>T.record)}function D(T){return!!t.getRecordMatcher(T)}function h(T,j){if(j=be({},j||c.value),typeof T=="string"){const y=Qo(n,T,j.path),w=t.resolve({path:y.path},j),P=o.createHref(y.fullPath);return be(y,w,{params:B(w.params),hash:go(y.hash),redirectedFrom:void 0,href:P})}let x;if("path"in T)x=be({},T,{path:Qo(n,T.path,j.path).path});else{const y=be({},T.params);for(const w in y)y[w]==null&&delete y[w];x=be({},T,{params:d(y)}),j.params=d(j.params)}const Y=t.resolve(x,j),Be=T.hash||"";Y.params=p(B(Y.params));const f=d5(r,be({},T,{hash:Q5(Be),path:Y.path})),b=o.createHref(f);return be({fullPath:f,hash:Be,query:r===UE?nc(T.query):T.query||{}},Y,{redirectedFrom:void 0,href:b})}function _(T){return typeof T=="string"?Qo(n,T,c.value.path):be({},T)}function L(T,j){if(a!==T)return Gn(8,{from:j,to:T})}function F(T){return $(T)}function q(T){return F(be(_(T),{replace:!0}))}function R(T){const j=T.matched[T.matched.length-1];if(j&&j.redirect){const{redirect:x}=j;let Y=typeof x=="function"?x(T):x;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=_(Y):{path:Y},Y.params={}),be({query:T.query,hash:T.hash,params:"path"in Y?{}:T.params},Y)}}function $(T,j){const x=a=h(T),Y=c.value,Be=T.state,f=T.force,b=T.replace===!0,y=R(x);if(y)return $(be(_(y),{state:typeof y=="object"?be({},Be,y.state):Be,force:f,replace:b}),j||x);const w=x;w.redirectedFrom=j;let P;return!f&&B5(r,Y,x)&&(P=Gn(16,{to:w,from:Y}),ot(Y,Y,!0,!1)),(P?Promise.resolve(P):J(w,Y)).catch(O=>Pt(O)?Pt(O,2)?O:yt(O):de(O,w,Y)).then(O=>{if(O){if(Pt(O,2))return $(be({replace:b},_(O.to),{state:typeof O.to=="object"?be({},Be,O.to.state):Be,force:f}),j||w)}else O=U(w,Y,!0,b,Be);return Z(w,Y,O),O})}function I(T,j){const x=L(T,j);return x?Promise.reject(x):Promise.resolve()}function z(T){const j=Tt.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(T):T()}function J(T,j){let x;const[Y,Be,f]=uc(T,j);x=Xo(Y.reverse(),"beforeRouteLeave",T,j);for(const y of Y)y.leaveGuards.forEach(w=>{x.push(Yt(w,T,j))});const b=I.bind(null,T,j);return x.push(b),Oe(x).then(()=>{x=[];for(const y of s.list())x.push(Yt(y,T,j));return x.push(b),Oe(x)}).then(()=>{x=Xo(Be,"beforeRouteUpdate",T,j);for(const y of Be)y.updateGuards.forEach(w=>{x.push(Yt(w,T,j))});return x.push(b),Oe(x)}).then(()=>{x=[];for(const y of f)if(y.beforeEnter)if(ht(y.beforeEnter))for(const w of y.beforeEnter)x.push(Yt(w,T,j));else x.push(Yt(y.beforeEnter,T,j));return x.push(b),Oe(x)}).then(()=>(T.matched.forEach(y=>y.enterCallbacks={}),x=Xo(f,"beforeRouteEnter",T,j),x.push(b),Oe(x))).then(()=>{x=[];for(const y of E.list())x.push(Yt(y,T,j));return x.push(b),Oe(x)}).catch(y=>Pt(y,8)?y:Promise.reject(y))}function Z(T,j,x){l.list().forEach(Y=>z(()=>Y(T,j,x)))}function U(T,j,x,Y,Be){const f=L(T,j);if(f)return f;const b=j===Ot,y=In?history.state:{};x&&(Y||b?o.replace(T.fullPath,be({scroll:b&&y&&y.scroll},Be)):o.push(T.fullPath,Be)),c.value=T,ot(T,j,x,b),yt()}let ee;function W(){ee||(ee=o.listen((T,j,x)=>{if(!Ct.listening)return;const Y=h(T),Be=R(Y);if(Be){$(be(Be,{replace:!0}),Y).catch(Br);return}a=Y;const f=c.value;In&&g5(xE(f.fullPath,x.delta),Fo()),J(Y,f).catch(b=>Pt(b,12)?b:Pt(b,2)?($(b.to,Y).then(y=>{Pt(y,20)&&!x.delta&&x.type===wr.pop&&o.go(-1,!1)}).catch(Br),Promise.reject()):(x.delta&&o.go(-x.delta,!1),de(b,Y,f))).then(b=>{b=b||U(Y,f,!1),b&&(x.delta&&!Pt(b,8)?o.go(-x.delta,!1):x.type===wr.pop&&Pt(b,20)&&o.go(-1,!1)),Z(Y,f,b)}).catch(Br)}))}let Re=lr(),oe=lr(),fe;function de(T,j,x){yt(T);const Y=oe.list();return Y.length?Y.forEach(Be=>Be(T,j,x)):console.error(T),Promise.reject(T)}function $e(){return fe&&c.value!==Ot?Promise.resolve():new Promise((T,j)=>{Re.add([T,j])})}function yt(T){return fe||(fe=!T,W(),Re.list().forEach(([j,x])=>T?x(T):j()),Re.reset()),T}function ot(T,j,x,Y){const{scrollBehavior:Be}=e;if(!In||!Be)return Promise.resolve();const f=!x&&y5(xE(T.fullPath,0))||(Y||!x)&&history.state&&history.state.scroll||null;return nn().then(()=>Be(T,j,f)).then(b=>b&&_5(b)).catch(b=>de(b,T,j))}const Me=T=>o.go(T);let Qe;const Tt=new Set,Ct={currentRoute:c,listening:!0,addRoute:v,removeRoute:m,hasRoute:D,getRoutes:g,resolve:h,options:e,push:F,replace:q,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:E.add,afterEach:l.add,onError:oe.add,isReady:$e,install(T){const j=this;T.component("RouterLink",Ec),T.component("RouterView",Zi),T.config.globalProperties.$router=j,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Bn(c)}),In&&!Qe&&c.value===Ot&&(Qe=!0,F(o.location).catch(Be=>{}));const x={};for(const Be in Ot)Object.defineProperty(x,Be,{get:()=>c.value[Be],enumerable:!0});T.provide(Vo,j),T.provide(f8,zl(x)),T.provide(Ds,c);const Y=T.unmount;Tt.add(T),T.unmount=function(){Tt.delete(T),Tt.size<1&&(a=Ot,ee&&ee(),ee=null,c.value=Ot,Qe=!1,fe=!1),Y()}}};function Oe(T){return T.reduce((j,x)=>j.then(()=>z(x)),Promise.resolve())}return Ct}function uc(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let E=0;E<s;E++){const l=t.matched[E];l&&(e.matched.find(a=>Un(a,l))?r.push(l):n.push(l));const c=e.matched[E];c&&(t.matched.find(a=>Un(a,c))||o.push(c))}return[n,r,o]}function ze(){return ue(Vo)}function gt(){return ue(f8)}var Ge=Uint8Array,Ln=Uint16Array,pc=Int32Array,ea=new Ge([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ta=new Ge([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),dc=new Ge([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),na=function(e,t){for(var n=new Ln(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var o=new pc(n[30]),r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)o[s]=s-n[r]<<5|r;return{b:n,r:o}},ra=na(ea,2),oa=ra.b,Bc=ra.r;oa[28]=258,Bc[258]=28;var Ac=na(ta,0),vc=Ac.b,Is=new Ln(32768);for(var we=0;we<32768;++we){var Ut=(we&43690)>>1|(we&21845)<<1;Ut=(Ut&52428)>>2|(Ut&13107)<<2,Ut=(Ut&61680)>>4|(Ut&3855)<<4,Is[we]=((Ut&65280)>>8|(Ut&255)<<8)>>1}var vr=function(e,t,n){for(var r=e.length,o=0,s=new Ln(t);o<r;++o)e[o]&&++s[e[o]-1];var E=new Ln(t);for(o=1;o<t;++o)E[o]=E[o-1]+s[o-1]<<1;var l;if(n){l=new Ln(1<<t);var c=15-t;for(o=0;o<r;++o)if(e[o])for(var a=o<<4|e[o],p=t-e[o],d=E[e[o]-1]++<<p,B=d|(1<<p)-1;d<=B;++d)l[Is[d]>>c]=a}else for(l=new Ln(r),o=0;o<r;++o)e[o]&&(l[o]=Is[E[e[o]-1]++]>>15-e[o]);return l},xr=new Ge(288);for(var we=0;we<144;++we)xr[we]=8;for(var we=144;we<256;++we)xr[we]=9;for(var we=256;we<280;++we)xr[we]=7;for(var we=280;we<288;++we)xr[we]=8;var sa=new Ge(32);for(var we=0;we<32;++we)sa[we]=5;var fc=vr(xr,9,1),mc=vr(sa,5,1),Zo=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},pt=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},es=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},hc=function(e){return(e+7)/8|0},m8=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new Ge(e.subarray(t,n))},bc=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],lt=function(e,t,n){var r=new Error(t||bc[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,lt),!n)throw r;return r},_c=function(e,t,n,r){var o=e.length,s=r?r.length:0;if(!o||t.f&&!t.l)return n||new Ge(0);var E=!n,l=E||t.i!=2,c=t.i;E&&(n=new Ge(o*3));var a=function(Be){var f=n.length;if(Be>f){var b=new Ge(Math.max(f*2,Be));b.set(n),n=b}},p=t.f||0,d=t.p||0,B=t.b||0,v=t.l,m=t.d,g=t.m,D=t.n,h=o*8;do{if(!v){p=pt(e,d,1);var _=pt(e,d+1,3);if(d+=3,_)if(_==1)v=fc,m=mc,g=9,D=5;else if(_==2){var R=pt(e,d,31)+257,$=pt(e,d+10,15)+4,I=R+pt(e,d+5,31)+1;d+=14;for(var z=new Ge(I),J=new Ge(19),Z=0;Z<$;++Z)J[dc[Z]]=pt(e,d+Z*3,7);d+=$*3;for(var U=Zo(J),ee=(1<<U)-1,W=vr(J,U,1),Z=0;Z<I;){var Re=W[pt(e,d,ee)];d+=Re&15;var L=Re>>4;if(L<16)z[Z++]=L;else{var oe=0,fe=0;for(L==16?(fe=3+pt(e,d,3),d+=2,oe=z[Z-1]):L==17?(fe=3+pt(e,d,7),d+=3):L==18&&(fe=11+pt(e,d,127),d+=7);fe--;)z[Z++]=oe}}var de=z.subarray(0,R),$e=z.subarray(R);g=Zo(de),D=Zo($e),v=vr(de,g,1),m=vr($e,D,1)}else lt(1);else{var L=hc(d)+4,F=e[L-4]|e[L-3]<<8,q=L+F;if(q>o){c&&lt(0);break}l&&a(B+F),n.set(e.subarray(L,q),B),t.b=B+=F,t.p=d=q*8,t.f=p;continue}if(d>h){c&&lt(0);break}}l&&a(B+131072);for(var yt=(1<<g)-1,ot=(1<<D)-1,Me=d;;Me=d){var oe=v[es(e,d)&yt],Qe=oe>>4;if(d+=oe&15,d>h){c&&lt(0);break}if(oe||lt(2),Qe<256)n[B++]=Qe;else if(Qe==256){Me=d,v=null;break}else{var Tt=Qe-254;if(Qe>264){var Z=Qe-257,Ct=ea[Z];Tt=pt(e,d,(1<<Ct)-1)+oa[Z],d+=Ct}var Oe=m[es(e,d)&ot],T=Oe>>4;Oe||lt(3),d+=Oe&15;var $e=vc[T];if(T>3){var Ct=ta[T];$e+=es(e,d)&(1<<Ct)-1,d+=Ct}if(d>h){c&&lt(0);break}l&&a(B+131072);var j=B+Tt;if(B<$e){var x=s-$e,Y=Math.min($e,j);for(x+B<0&&lt(3);B<Y;++B)n[B]=r[x+B]}for(;B<j;++B)n[B]=n[B-$e]}}t.l=v,t.p=Me,t.b=B,t.f=p,v&&(p=1,t.m=g,t.d=m,t.n=D)}while(!p);return B!=n.length&&E?m8(n,0,B):n.subarray(0,B)},gc=new Ge(0),yc=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&lt(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&lt(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function Cc(e,t){return _c(e.subarray(yc(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var JE=typeof TextEncoder<"u"&&new TextEncoder,Ts=typeof TextDecoder<"u"&&new TextDecoder,Dc=0;try{Ts.decode(gc,{stream:!0}),Dc=1}catch{}var wc=function(e){for(var t="",n=0;;){var r=e[n++],o=(r>127)+(r>223)+(r>239);if(n+o>e.length)return{s:t,r:m8(e,n-1)};o?o==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):o&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function Ic(e,t){if(t){for(var n=new Ge(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(JE)return JE.encode(e);for(var o=e.length,s=new Ge(e.length+(e.length>>1)),E=0,l=function(p){s[E++]=p},r=0;r<o;++r){if(E+5>s.length){var c=new Ge(E+8+(o-r<<1));c.set(s),s=c}var a=e.charCodeAt(r);a<128||t?l(a):a<2048?(l(192|a>>6),l(128|a&63)):a>55295&&a<57344?(a=65536+(a&1047552)|e.charCodeAt(++r)&1023,l(240|a>>18),l(128|a>>12&63),l(128|a>>6&63),l(128|a&63)):(l(224|a>>12),l(128|a>>6&63),l(128|a&63))}return m8(s,0,E)}function Tc(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else{if(Ts)return Ts.decode(e);var o=wc(e),s=o.s,n=o.r;return n.length&&lt(8),s}}const se=({name:e="",color:t="currentColor"},{slots:n})=>{var r;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":`${e} icon`},(r=n.default)==null?void 0:r.call(n))};se.displayName="IconBase";const on=({size:e=48,stroke:t=4,wrapper:n=!0,height:r=2*e})=>{const o=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[i("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),i("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round"},[i("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),i("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return n?i("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${r}px`},o):o};on.displayName="LoadingIcon";const Ea=(e,{slots:t})=>{var n;return(n=t.default)==null?void 0:n.call(t)},h8=(e="")=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},So=(e,t)=>{let n=1;for(let r=0;r<e.length;r++)n+=e.charCodeAt(r),n+=n<<10,n^=n>>6;return n+=n<<3,n^=n>>11,n%t},b8=Array.isArray,Pc=e=>typeof e=="function",Lc=e=>typeof e=="string";var Rc=e=>e.startsWith("ftp://"),_8=e=>/^(https?:)?\/\//.test(e),Oc=/.md((\?|#).*)?$/,Fc=(e,t="/")=>!!(_8(e)||Rc(e)||e.startsWith("/")&&!e.startsWith(t)&&!Oc.test(e)),fr=e=>Object.prototype.toString.call(e)==="[object Object]";function Vc(){const e=N(!1);return rn()&&pe(()=>{e.value=!0}),e}function Sc(e){return Vc(),C(()=>!!e())}const kc=e=>typeof e=="function",kt=e=>typeof e=="string",Wn=(e,t)=>kt(e)&&e.startsWith(t),Cn=(e,t)=>kt(e)&&e.endsWith(t),er=Object.entries,xc=Object.fromEntries,rt=Object.keys,QE=(e,...t)=>{if(t.length===0)return e;const n=t.shift()||null;return n&&er(n).forEach(([r,o])=>{r==="__proto__"||r==="constructor"||(fr(e[r])&&fr(o)?QE(e[r],o):b8(o)?e[r]=[...o]:fr(o)?e[r]={...o}:e[r]=n[r])}),QE(e,...t)},$c=e=>(e.endsWith(".md")&&(e=`${e.slice(0,-3)}.html`),!e.endsWith("/")&&!e.endsWith(".html")&&(e=`${e}.html`),e=e.replace(/(^|\/)(?:README|index).html$/i,"$1"),e),la=e=>{const[t,n=""]=e.split("#");return t?`${$c(t)}${n?`#${n}`:""}`:e},XE=e=>fr(e)&&kt(e.name),Ir=(e,t=!1)=>e?b8(e)?e.map(n=>kt(n)?{name:n}:XE(n)?n:null).filter(n=>n!==null):kt(e)?[{name:e}]:XE(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],ia=(e,t)=>{if(e){if(b8(e)&&e.every(kt))return e;if(kt(e))return[e];console.error(`Expect ${t||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},aa=e=>ia(e,"category"),ca=e=>ia(e,"tag"),ko=e=>Wn(e,"/");let Mc=class{constructor(){No(this,"containerElement");No(this,"messageElements",{});const t="message-container",n=document.getElementById(t);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,n=2e3){const r=document.createElement("div"),o=Date.now();return r.className="message move-in",r.innerHTML=t,this.containerElement.appendChild(r),this.messageElements[o]=r,n>0&&setTimeout(()=>{this.close(o)},n),o}close(t){if(t){const n=this.messageElements[t];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[t]})}else rt(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const ua=/#.*$/u,Nc=e=>{const t=ua.exec(e);return t?t[0]:""},ZE=e=>decodeURI(e).replace(ua,"").replace(/(index)?\.(md|html)$/,""),g8=(e,t)=>{if(t===void 0)return!1;const n=ZE(e.path),r=ZE(t),o=Nc(t);return o?o===e.hash&&(!r||n===r):n===r},fn=e=>{const t=atob(e);return Tc(Cc(Ic(t,!0)))},Hc=e=>_8(e)?e:`https://github.com/${e}`,pa=e=>!_8(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Kn=(e,...t)=>{const n=e.resolve(...t),r=n.matched[n.matched.length-1];if(!(r!=null&&r.redirect))return n;const{redirect:o}=r,s=Pc(o)?o(n):o,E=Lc(s)?{path:s}:s;return Kn(e,{hash:n.hash,query:n.query,params:n.params,...E})},jc=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const t=e.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},ke=({to:e="",class:t="",...n},{slots:r})=>{var o;const s=ze(),E=(l={})=>jc(l)?s.push(e).catch():Promise.resolve();return i("a",{...n,class:["vp-link",t],href:Ie(la(e)),onClick:E},(o=r.default)==null?void 0:o.call(r))};ke.displayName="VPLink";const da=()=>i(se,{name:"github"},()=>i("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));da.displayName="GitHubIcon";const Ba=()=>i(se,{name:"gitlab"},()=>i("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Ba.displayName="GitLabIcon";const Aa=()=>i(se,{name:"gitee"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Aa.displayName="GiteeIcon";const va=()=>i(se,{name:"bitbucket"},()=>i("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));va.displayName="BitbucketIcon";const fa=()=>i(se,{name:"source"},()=>i("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));fa.displayName="SourceIcon";const mt=(e,t)=>{const n=t?t._instance:rn();return fr(n==null?void 0:n.appContext.components)&&(e in n.appContext.components||at(e)in n.appContext.components||Rr(at(e))in n.appContext.components)},zc=()=>Sc(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),qc=()=>{const e=zc();return C(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},tr=e=>{const t=Nt();return C(()=>e[t.value])};function el(e,t){var n;const r=Te();return ei(()=>{r.value=e()},{...t,flush:(n=t==null?void 0:t.flush)!=null?n:"sync"}),$t(r)}function Uc(e,t){let n,r,o;const s=N(!0),E=()=>{s.value=!0,o()};re(e,E,{flush:"sync"});const l=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,a=Kl((p,d)=>(r=p,o=d,{get(){return s.value&&(n=l(),s.value=!1),r(),n},set(B){c==null||c(B)}}));return Object.isExtensible(a)&&(a.trigger=E),a}function bt(e){return Ol()?(b0(e),!0):!1}function Ne(e){return typeof e=="function"?e():Bn(e)}const mn=typeof window<"u"&&typeof document<"u",Gc=Object.prototype.toString,Wc=e=>Gc.call(e)==="[object Object]",xt=()=>{},Ps=Kc();function Kc(){var e;return mn&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function y8(e,t){function n(...r){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(s)})}return n}const ma=e=>e();function Yc(e,t={}){let n,r,o=xt;const s=l=>{clearTimeout(l),o(),o=xt};return l=>{const c=Ne(e),a=Ne(t.maxWait);return n&&s(n),c<=0||a!==void 0&&a<=0?(r&&(s(r),r=null),Promise.resolve(l())):new Promise((p,d)=>{o=t.rejectOnCancel?d:p,a&&!r&&(r=setTimeout(()=>{n&&s(n),r=null,p(l())},a)),n=setTimeout(()=>{r&&s(r),r=null,p(l())},c)})}}function Jc(e,t=!0,n=!0,r=!1){let o=0,s,E=!0,l=xt,c;const a=()=>{s&&(clearTimeout(s),s=void 0,l(),l=xt)};return d=>{const B=Ne(e),v=Date.now()-o,m=()=>c=d();return a(),B<=0?(o=Date.now(),m()):(v>B&&(n||!E)?(o=Date.now(),m()):t&&(c=new Promise((g,D)=>{l=r?D:g,s=setTimeout(()=>{o=Date.now(),E=!0,g(m()),a()},Math.max(0,B-v))})),!n&&!s&&(s=setTimeout(()=>E=!0,B)),E=!1,c)}}function Qc(e=ma){const t=N(!0);function n(){t.value=!1}function r(){t.value=!0}const o=(...s)=>{t.value&&e(...s)};return{isActive:$t(t),pause:n,resume:r,eventFilter:o}}function Xc(...e){if(e.length!==1)return Zn(...e);const t=e[0];return typeof t=="function"?$t(Kl(()=>({get:t,set:xt}))):N(t)}function ha(e,t=200,n={}){return y8(Yc(t,n),e)}function Zc(e,t=200,n=!1,r=!0,o=!1){return y8(Jc(t,n,r,o),e)}function e2(e,t,n={}){const{eventFilter:r=ma,...o}=n;return re(e,y8(r,t),o)}function t2(e,t,n={}){const{eventFilter:r,...o}=n,{eventFilter:s,pause:E,resume:l,isActive:c}=Qc(r);return{stop:e2(e,t,{...o,eventFilter:s}),pause:E,resume:l,isActive:c}}function C8(e,t=!0){rn()?pe(e):t?e():nn(e)}function n2(e){rn()&&bn(e)}function r2(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:o=!1}=n;let s=null;const E=N(!1);function l(){s&&(clearInterval(s),s=null)}function c(){E.value=!1,l()}function a(){const p=Ne(t);p<=0||(E.value=!0,o&&e(),l(),s=setInterval(e,p))}if(r&&mn&&a(),Ve(t)||typeof t=="function"){const p=re(t,()=>{E.value&&mn&&a()});bt(p)}return bt(c),{isActive:E,pause:c,resume:a}}function o2(e,t,n={}){const{immediate:r=!0}=n,o=N(!1);let s=null;function E(){s&&(clearTimeout(s),s=null)}function l(){o.value=!1,E()}function c(...a){E(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...a)},Ne(t))}return r&&(o.value=!0,mn&&c()),bt(l),{isPending:$t(o),start:c,stop:l}}function Ls(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,o=Ve(e),s=N(e);function E(l){if(arguments.length)return s.value=l,s.value;{const c=Ne(n);return s.value=s.value===c?Ne(r):c,s.value}}return o?E:[s,E]}function et(e){var t;const n=Ne(e);return(t=n==null?void 0:n.$el)!=null?t:n}const ct=mn?window:void 0,D8=mn?window.document:void 0,s2=mn?window.navigator:void 0;function xe(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=ct):[t,n,r,o]=e,!t)return xt;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],E=()=>{s.forEach(p=>p()),s.length=0},l=(p,d,B,v)=>(p.addEventListener(d,B,v),()=>p.removeEventListener(d,B,v)),c=re(()=>[et(t),Ne(o)],([p,d])=>{if(E(),!p)return;const B=Wc(d)?{...d}:d;s.push(...n.flatMap(v=>r.map(m=>l(p,v,m,B))))},{immediate:!0,flush:"post"}),a=()=>{c(),E()};return bt(a),a}let tl=!1;function E2(e,t,n={}){const{window:r=ct,ignore:o=[],capture:s=!0,detectIframe:E=!1}=n;if(!r)return;Ps&&!tl&&(tl=!0,Array.from(r.document.body.children).forEach(B=>B.addEventListener("click",xt)),r.document.documentElement.addEventListener("click",xt));let l=!0;const c=B=>o.some(v=>{if(typeof v=="string")return Array.from(r.document.querySelectorAll(v)).some(m=>m===B.target||B.composedPath().includes(m));{const m=et(v);return m&&(B.target===m||B.composedPath().includes(m))}}),p=[xe(r,"click",B=>{const v=et(e);if(!(!v||v===B.target||B.composedPath().includes(v))){if(B.detail===0&&(l=!c(B)),!l){l=!0;return}t(B)}},{passive:!0,capture:s}),xe(r,"pointerdown",B=>{const v=et(e);v&&(l=!B.composedPath().includes(v)&&!c(B))},{passive:!0}),E&&xe(r,"blur",B=>{setTimeout(()=>{var v;const m=et(e);((v=r.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(m!=null&&m.contains(r.document.activeElement))&&t(B)},0)})].filter(Boolean);return()=>p.forEach(B=>B())}function l2(){const e=N(!1);return rn()&&pe(()=>{e.value=!0}),e}function $r(e){const t=l2();return C(()=>(t.value,!!e()))}function i2(e,t={}){const{immediate:n=!0,window:r=ct}=t,o=N(!1);let s=0,E=null;function l(p){if(!o.value||!r)return;const d=p-(s||p);e({delta:d,timestamp:p}),s=p,E=r.requestAnimationFrame(l)}function c(){!o.value&&r&&(o.value=!0,E=r.requestAnimationFrame(l))}function a(){o.value=!1,E!=null&&r&&(r.cancelAnimationFrame(E),E=null)}return n&&c(),bt(a),{isActive:$t(o),pause:a,resume:c}}function ba(e,t={}){const{window:n=ct}=t,r=$r(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const s=N(!1),E=a=>{s.value=a.matches},l=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",E):o.removeListener(E))},c=ei(()=>{r.value&&(l(),o=n.matchMedia(Ne(e)),"addEventListener"in o?o.addEventListener("change",E):o.addListener(E),s.value=o.matches)});return bt(()=>{c(),l(),o=void 0}),s}function a2(e={}){const{navigator:t=s2,read:n=!1,source:r,copiedDuring:o=1500,legacy:s=!1}=e,E=$r(()=>t&&"clipboard"in t),l=C(()=>E.value||s),c=N(""),a=N(!1),p=o2(()=>a.value=!1,o);function d(){E.value?t.clipboard.readText().then(g=>{c.value=g}):c.value=m()}l.value&&n&&xe(["copy","cut"],d);async function B(g=Ne(r)){l.value&&g!=null&&(E.value?await t.clipboard.writeText(g):v(g),c.value=g,a.value=!0,p.start())}function v(g){const D=document.createElement("textarea");D.value=g??"",D.style.position="absolute",D.style.opacity="0",document.body.appendChild(D),D.select(),document.execCommand("copy"),D.remove()}function m(){var g,D,h;return(h=(D=(g=document==null?void 0:document.getSelection)==null?void 0:g.call(document))==null?void 0:D.toString())!=null?h:""}return{isSupported:l,text:c,copied:a,copy:B}}const to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},no="__vueuse_ssr_handlers__",c2=u2();function u2(){return no in to||(to[no]=to[no]||{}),to[no]}function p2(e,t){return c2[e]||t}function d2(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const B2={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},nl="vueuse-storage";function nr(e,t,n,r={}){var o;const{flush:s="pre",deep:E=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:a=!1,shallow:p,window:d=ct,eventFilter:B,onError:v=I=>{console.error(I)}}=r,m=(p?Te:N)(t);if(!n)try{n=p2("getDefaultStorage",()=>{var I;return(I=ct)==null?void 0:I.localStorage})()}catch(I){v(I)}if(!n)return m;const g=Ne(t),D=d2(g),h=(o=r.serializer)!=null?o:B2[D],{pause:_,resume:L}=t2(m,()=>F(m.value),{flush:s,deep:E,eventFilter:B});return d&&l&&(xe(d,"storage",$),xe(d,nl,R)),$(),m;function F(I){try{if(I==null)n.removeItem(e);else{const z=h.write(I),J=n.getItem(e);J!==z&&(n.setItem(e,z),d&&d.dispatchEvent(new CustomEvent(nl,{detail:{key:e,oldValue:J,newValue:z,storageArea:n}})))}}catch(z){v(z)}}function q(I){const z=I?I.newValue:n.getItem(e);if(z==null)return c&&g!==null&&n.setItem(e,h.write(g)),g;if(!I&&a){const J=h.read(z);return typeof a=="function"?a(J,g):D==="object"&&!Array.isArray(J)?{...g,...J}:J}else return typeof z!="string"?z:h.read(z)}function R(I){$(I.detail)}function $(I){if(!(I&&I.storageArea!==n)){if(I&&I.key==null){m.value=g;return}if(!(I&&I.key!==e)){_();try{(I==null?void 0:I.newValue)!==h.write(m.value)&&(m.value=q(I))}catch(z){v(z)}finally{I?nn(L):L()}}}}}function A2(e){return ba("(prefers-color-scheme: dark)",e)}function _a(e,t,n={}){const{window:r=ct,...o}=n;let s;const E=$r(()=>r&&"MutationObserver"in r),l=()=>{s&&(s.disconnect(),s=void 0)},c=re(()=>et(e),p=>{l(),E.value&&r&&p&&(s=new MutationObserver(t),s.observe(p,o))},{immediate:!0}),a=()=>{l(),c()};return bt(a),{isSupported:E,stop:a}}function v2(e,t,n={}){const{window:r=ct,...o}=n;let s;const E=$r(()=>r&&"ResizeObserver"in r),l=()=>{s&&(s.disconnect(),s=void 0)},c=C(()=>Array.isArray(e)?e.map(d=>et(d)):[et(e)]),a=re(c,d=>{if(l(),E.value&&r){s=new ResizeObserver(t);for(const B of d)B&&s.observe(B,o)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{l(),a()};return bt(p),{isSupported:E,stop:p}}function f2(e,t={width:0,height:0},n={}){const{window:r=ct,box:o="content-box"}=n,s=C(()=>{var c,a;return(a=(c=et(e))==null?void 0:c.namespaceURI)==null?void 0:a.includes("svg")}),E=N(t.width),l=N(t.height);return v2(e,([c])=>{const a=o==="border-box"?c.borderBoxSize:o==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(r&&s.value){const p=et(e);if(p){const d=r.getComputedStyle(p);E.value=Number.parseFloat(d.width),l.value=Number.parseFloat(d.height)}}else if(a){const p=Array.isArray(a)?a:[a];E.value=p.reduce((d,{inlineSize:B})=>d+B,0),l.value=p.reduce((d,{blockSize:B})=>d+B,0)}else E.value=c.contentRect.width,l.value=c.contentRect.height},n),re(()=>et(e),c=>{E.value=c?t.width:0,l.value=c?t.height:0}),{width:E,height:l}}const rl=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function w8(e,t={}){const{document:n=D8,autoExit:r=!1}=t,o=C(()=>{var h;return(h=et(e))!=null?h:n==null?void 0:n.querySelector("html")}),s=N(!1),E=C(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(h=>n&&h in n||o.value&&h in o.value)),l=C(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(h=>n&&h in n||o.value&&h in o.value)),c=C(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(h=>n&&h in n||o.value&&h in o.value)),a=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(h=>n&&h in n),p=$r(()=>o.value&&n&&E.value!==void 0&&l.value!==void 0&&c.value!==void 0),d=()=>a?(n==null?void 0:n[a])===o.value:!1,B=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const h=o.value;if((h==null?void 0:h[c.value])!=null)return!!h[c.value]}}return!1};async function v(){if(!(!p.value||!s.value)){if(l.value)if((n==null?void 0:n[l.value])!=null)await n[l.value]();else{const h=o.value;(h==null?void 0:h[l.value])!=null&&await h[l.value]()}s.value=!1}}async function m(){if(!p.value||s.value)return;B()&&await v();const h=o.value;E.value&&(h==null?void 0:h[E.value])!=null&&(await h[E.value](),s.value=!0)}async function g(){await(s.value?v():m())}const D=()=>{const h=B();(!h||h&&d())&&(s.value=h)};return xe(n,rl,D,!1),xe(()=>et(o),rl,D,!1),r&&bt(v),{isSupported:p,isFullscreen:s,enter:m,exit:v,toggle:g}}function ts(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function e7(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,r=N(new Date),o=()=>r.value=new Date,s=n==="requestAnimationFrame"?i2(o,{immediate:!0}):r2(o,n,{immediate:!0});return t?{now:r,...s}:r}function ns(e,t=xt,n={}){const{immediate:r=!0,manual:o=!1,type:s="text/javascript",async:E=!0,crossOrigin:l,referrerPolicy:c,noModule:a,defer:p,document:d=D8,attrs:B={}}=n,v=N(null);let m=null;const g=_=>new Promise((L,F)=>{const q=I=>(v.value=I,L(I),I);if(!d){L(!1);return}let R=!1,$=d.querySelector(`script[src="${Ne(e)}"]`);$?$.hasAttribute("data-loaded")&&q($):($=d.createElement("script"),$.type=s,$.async=E,$.src=Ne(e),p&&($.defer=p),l&&($.crossOrigin=l),a&&($.noModule=a),c&&($.referrerPolicy=c),Object.entries(B).forEach(([I,z])=>$==null?void 0:$.setAttribute(I,z)),R=!0),$.addEventListener("error",I=>F(I)),$.addEventListener("abort",I=>F(I)),$.addEventListener("load",()=>{$.setAttribute("data-loaded","true"),t($),q($)}),R&&($=d.head.appendChild($)),_||q($)}),D=(_=!0)=>(m||(m=g(_)),m),h=()=>{if(!d)return;m=null,v.value&&(v.value=null);const _=d.querySelector(`script[src="${Ne(e)}"]`);_&&d.head.removeChild(_)};return r&&!o&&C8(D),o||n2(h),{scriptTag:v,load:D,unload:h}}function ga(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:ga(n)}}function m2(e){const t=e||window.event,n=t.target;return ga(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}function ya(e,t=!1){const n=N(t);let r=null,o;re(Xc(e),l=>{const c=ts(Ne(l));if(c){const a=c;o=a.style.overflow,n.value&&(a.style.overflow="hidden")}},{immediate:!0});const s=()=>{const l=ts(Ne(e));!l||n.value||(Ps&&(r=xe(l,"touchmove",c=>{m2(c)},{passive:!1})),l.style.overflow="hidden",n.value=!0)},E=()=>{const l=ts(Ne(e));!l||!n.value||(Ps&&(r==null||r()),l.style.overflow=o,n.value=!1)};return bt(E),C({get(){return n.value},set(l){l?s():E()}})}function Ca(e,t,n={}){const{window:r=ct}=n;return nr(e,t,r==null?void 0:r.sessionStorage,n)}let h2=0;function t7(e,t={}){const n=N(!1),{document:r=D8,immediate:o=!0,manual:s=!1,id:E=`vueuse_styletag_${++h2}`}=t,l=N(e);let c=()=>{};const a=()=>{if(!r)return;const d=r.getElementById(E)||r.createElement("style");d.isConnected||(d.id=E,t.media&&(d.media=t.media),r.head.appendChild(d)),!n.value&&(c=re(l,B=>{d.textContent=B},{immediate:!0}),n.value=!0)},p=()=>{!r||!n.value||(c(),r.head.removeChild(r.getElementById(E)),n.value=!1)};return o&&!s&&C8(a),s||bt(p),{id:E,css:l,unload:p,load:a,isLoaded:$t(n)}}function b2({window:e=ct}={}){if(!e)return{x:N(0),y:N(0)};const t=N(e.scrollX),n=N(e.scrollY);return xe(e,"scroll",()=>{t.value=e.scrollX,n.value=e.scrollY},{capture:!1,passive:!0}),{x:t,y:n}}function _2(e={}){const{window:t=ct,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:o=!0,includeScrollbar:s=!0}=e,E=N(n),l=N(r),c=()=>{t&&(s?(E.value=t.innerWidth,l.value=t.innerHeight):(E.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};if(c(),C8(c),xe("resize",c,{passive:!0}),o){const a=ba("(orientation: portrait)");re(a,()=>c())}return{width:E,height:l}}const Da=({type:e="info",text:t="",vertical:n,color:r},{slots:o})=>{var s;return i("span",{class:["vp-badge",e,{diy:r}],style:{verticalAlign:n??!1,backgroundColor:r??!1}},((s=o.default)==null?void 0:s.call(o))||t)};Da.displayName="Badge";var g2=S({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const t=C(()=>{const r=["font-icon icon"],o=`fas fa-${e.icon}`;return r.push("fa-fw fa-sm"),r.push(e.icon.includes(" ")?e.icon:o),r}),n=C(()=>{const r={};return e.color&&(r.color=e.color),e.size&&(r["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),rt(r).length?r:null});return()=>e.icon?i("span",{key:e.icon,class:t.value,style:n.value}):null}});const wa=()=>i(se,{name:"back-to-top"},()=>[i("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),i("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);wa.displayName="BackToTopIcon";var y2=S({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(e){const t=he(),n=tr({"/":{backToTop:"Back to top"}}),r=Te(),{height:o}=f2(r),{height:s}=_2(),{y:E}=b2(),l=C(()=>t.value.backToTop!==!1&&E.value>e.threshold),c=C(()=>E.value/(o.value-s.value));return pe(()=>{r.value=document.body}),()=>i(en,{name:"fade"},()=>l.value?i("button",{type:"button",class:"vp-back-to-top-button","aria-label":n.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[e.noProgress?null:i("svg",{class:"vp-scroll-progress"},i("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*c.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),i(wa)]):null)}});const C2=_t({enhance:({app:e})=>{mt("Badge")||e.component("Badge",Da),mt("FontIcon")||e.component("FontIcon",g2)},setup:()=>{ns("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),ns("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),ns("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[()=>i(y2,{})]});function D2(e,t,n){var r,o,s;t===void 0&&(t=50),n===void 0&&(n={});var E=(r=n.isImmediate)!=null&&r,l=(o=n.callback)!=null&&o,c=n.maxWait,a=Date.now(),p=[];function d(){if(c!==void 0){var v=Date.now()-a;if(v+t>=c)return c-v}return t}var B=function(){var v=[].slice.call(arguments),m=this;return new Promise(function(g,D){var h=E&&s===void 0;if(s!==void 0&&clearTimeout(s),s=setTimeout(function(){if(s=void 0,a=Date.now(),!E){var L=e.apply(m,v);l&&l(L),p.forEach(function(F){return(0,F.resolve)(L)}),p=[]}},d()),h){var _=e.apply(m,v);return l&&l(_),g(_)}p.push({resolve:g,reject:D})})};return B.cancel=function(v){s!==void 0&&clearTimeout(s),p.forEach(function(m){return(0,m.reject)(v)}),p=[]},B}const w2=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{const o=ze(),E=D2(()=>{var g,D;const l=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(l-0)<r){ol(o,"");return}const a=window.innerHeight+l,p=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(p-a)<r,B=Array.from(document.querySelectorAll(e)),m=Array.from(document.querySelectorAll(t)).filter(h=>B.some(_=>_.hash===h.hash));for(let h=0;h<m.length;h++){const _=m[h],L=m[h+1],F=l>=(((g=_.parentElement)==null?void 0:g.offsetTop)??0)-r,q=!L||l<(((D=L.parentElement)==null?void 0:D.offsetTop)??0)-r;if(!(F&&q))continue;const $=decodeURIComponent(o.currentRoute.value.hash),I=decodeURIComponent(_.hash);if($===I)return;if(d){for(let z=h+1;z<m.length;z++)if($===decodeURIComponent(m[z].hash))return}ol(o,I);return}},n);pe(()=>{window.addEventListener("scroll",E)}),l8(()=>{window.removeEventListener("scroll",E)})},ol=async(e,t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:t}).finally(()=>e.options.scrollBehavior=n)},I2=".vp-sidebar-link, .toc-link",T2=".header-anchor",P2=200,L2=5,R2=_t({setup(){w2({headerLinkSelector:I2,headerAnchorSelector:T2,delay:P2,offset:L2})}});let Ia=()=>null;const Ta=Symbol(""),O2=e=>{Ia=e},F2=()=>ue(Ta),V2=e=>{e.provide(Ta,Ia)};var S2=S({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(e){const t=F2(),n=tr({"/":{title:"Catalog",empty:"No catalog"}}),r=ae(),o=ze(),s=Hi(),E=a=>{const p=a.I;return typeof p>"u"||p},l=()=>{const a=e.base||r.value.path.replace(/\/[^/]+$/,"/"),p=o.getRoutes(),d=[];return p.filter(({meta:B,path:v})=>{if(!Wn(v,a)||v===a)return!1;if(a==="/"){const m=rt(s.value.locales).filter(g=>g!=="/");if(v==="/404.html"||m.some(g=>Wn(v,g)))return!1}return(Cn(v,".html")&&!Cn(v,"/index.html")||Cn(v,"/"))&&E(B)}).map(({path:B,meta:v})=>{const m=B.substring(a.length).split("/").length;return{title:v.t||"",icon:v.i,base:B.replace(/\/[^/]+\/?$/,"/"),order:v.O||null,level:Cn(B,"/")?m-1:m,path:B}}).filter(({title:B,level:v})=>B&&v<=e.level).sort(({title:B,level:v,path:m,order:g},{title:D,level:h,path:_,order:L})=>v-h||(Cn(m,"/index.html")?-1:Cn(_,"/index.html")?1:g===null?L===null?B.localeCompare(D):L:L===null?g:g>0?L>0?g-L:-1:L<0?g-L:1)).forEach(B=>{var v;const{base:m,level:g}=B;switch(g){case 1:d.push(B);break;case 2:{const D=d.find(h=>h.path===m);D&&(D.children??(D.children=[])).push(B);break}default:{const D=d.find(h=>h.path===m.replace(/\/[^/]+\/$/,"/"));if(D){const h=(v=D.children)==null?void 0:v.find(_=>_.path===m);h&&(h.children??(h.children=[])).push(B)}}}}),d},c=C(()=>l());return()=>i("div",{class:"vp-catalog"},[i("h2",{class:"vp-catalog-main-title"},n.value.title),c.value.length?c.value.map(({children:a=[],icon:p,path:d,title:B},v)=>[i("h3",{id:B,class:["vp-catalog-child-title",{"has-children":a.length}]},[i("a",{href:`#${B}`,class:"header-anchor","aria-hidden":!0},"#"),i(ke,{class:"vp-catalog-title",to:d},()=>[e.index?`${v+1}.`:null,p&&t?i(t,{icon:p}):null,B||d])]),a.length?i("ul",{class:"vp-catalog-child-catalogs"},a.map(({children:m=[],icon:g,path:D,title:h},_)=>i("li",{class:"vp-child-catalog"},[i("div",{class:["vp-catalog-sub-title",{"has-children":m.length}]},[i("a",{href:`#${h}`,class:"header-anchor"},"#"),i(ke,{class:"vp-catalog-title",to:D},()=>[e.index?`${v+1}.${_+1}`:null,g&&t?i(t,{icon:g}):null,h||D])]),m.length?i("div",{class:"v-sub-catalogs"},m.map(({icon:L,path:F,title:q},R)=>i(ke,{class:"vp-sub-catalog",to:F},()=>[e.index?`${v+1}.${_+1}.${R+1}`:null,L&&t?i(t,{icon:L}):null,q||F]))):null]))):null]):i("p",{class:"vp-empty-catalog"},n.value.empty)])}}),k2=_t({enhance:({app:e})=>{V2(e),mt("AutoCatalog",e)||e.component("AutoCatalog",S2)}});const x2=i("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Pa=S({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=Nt(),n=C(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>i("span",[x2,i("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),$2={},M2=_t({enhance({app:e}){e.component("ExternalLinkIcon",i(Pa,{locales:$2}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const Ae={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=Ae.isStarted();e=rs(e,Ae.settings.minimum,1),Ae.status=e===1?null:e;const n=Ae.render(!t),r=n.querySelector(Ae.settings.barSelector),o=Ae.settings.speed,s=Ae.settings.easing;return n.offsetWidth,N2(E=>{ro(r,{transform:"translate3d("+sl(e)+"%,0,0)",transition:"all "+o+"ms "+s}),e===1?(ro(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){ro(n,{transition:"all "+o+"ms linear",opacity:"0"}),setTimeout(function(){Ae.remove(),E()},o)},o)):setTimeout(()=>E(),o)}),Ae},isStarted:()=>typeof Ae.status=="number",start:()=>{Ae.status||Ae.set(0);const e=()=>{setTimeout(()=>{Ae.status&&(Ae.trickle(),e())},Ae.settings.trickleSpeed)};return Ae.settings.trickle&&e(),Ae},done:e=>!e&&!Ae.status?Ae:Ae.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=Ae.status;return t?(typeof e!="number"&&(e=(1-t)*rs(Math.random()*t,.1,.95)),t=rs(t+e,0,.994),Ae.set(t)):Ae.start()},trickle:()=>Ae.inc(Math.random()*Ae.settings.trickleRate),render:e=>{if(Ae.isRendered())return document.getElementById("nprogress");El(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=Ae.settings.template;const n=t.querySelector(Ae.settings.barSelector),r=e?"-100":sl(Ae.status||0),o=document.querySelector(Ae.settings.parent);return ro(n,{transition:"all 0 linear",transform:"translate3d("+r+"%,0,0)"}),o!==document.body&&El(o,"nprogress-custom-parent"),o==null||o.appendChild(t),t},remove:()=>{ll(document.documentElement,"nprogress-busy"),ll(document.querySelector(Ae.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&H2(e)},isRendered:()=>!!document.getElementById("nprogress")},rs=(e,t,n)=>e<t?t:e>n?n:e,sl=e=>(-1+e)*100,N2=function(){const e=[];function t(){const n=e.shift();n&&n(t)}return function(n){e.push(n),e.length===1&&t()}}(),ro=function(){const e=["Webkit","O","Moz","ms"],t={};function n(E){return E.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(l,c){return c.toUpperCase()})}function r(E){const l=document.body.style;if(E in l)return E;let c=e.length;const a=E.charAt(0).toUpperCase()+E.slice(1);let p;for(;c--;)if(p=e[c]+a,p in l)return p;return E}function o(E){return E=n(E),t[E]??(t[E]=r(E))}function s(E,l,c){l=o(l),E.style[l]=c}return function(E,l){for(const c in l){const a=l[c];a!==void 0&&Object.prototype.hasOwnProperty.call(l,c)&&s(E,c,a)}}}(),La=(e,t)=>(typeof e=="string"?e:I8(e)).indexOf(" "+t+" ")>=0,El=(e,t)=>{const n=I8(e),r=n+t;La(n,t)||(e.className=r.substring(1))},ll=(e,t)=>{const n=I8(e);if(!La(e,t))return;const r=n.replace(" "+t+" "," ");e.className=r.substring(1,r.length-1)},I8=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),H2=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const j2=()=>{pe(()=>{const e=ze(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||Ae.start()}),e.afterEach(n=>{t.add(n.path),Ae.done()})})},z2=_t({setup(){j2()}}),q2=JSON.parse(`{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$hoNaU/mp/vXgyeFOKdoQcu6U05VoRvPo3WjXd/2ExQXqPpFT8HhLe"]}},"author":{"name":"入川为王","url":"https://mister-hope.com"},"logo":"/logo.svg","repo":"ZGarry/ZGarry.github.io","docsDir":"src","footer":"Default footer","displayFooter":true,"blog":{"description":"大厂Java程序员，金融参与者，卡牌游戏大师","intro":"/intro.html","medias":{"GitHub":"https://github.com/ZGarry"}},"locales":{"/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page on GitHub","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"navbar":["/","/posts/"],"sidebar":{"/":[{"text":"Articles","icon":"book","prefix":"posts/","children":"structure"},"intro","slides"]}}}}`),U2=N(q2),Ra=()=>U2,Oa=Symbol(""),G2=()=>{const e=ue(Oa);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},W2=(e,t)=>{const{locales:n,...r}=e;return{...r,...n==null?void 0:n[t]}},K2=_t({enhance({app:e}){const t=Ra(),n=e._context.provides[B8],r=C(()=>W2(t.value,n.value));e.provide(Oa,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})}}),Y2={"Content-Type":"application/json"},J2=({serverURL:e,lang:t,paths:n,signal:r})=>(({serverURL:o,lang:s,paths:E,type:l,signal:c})=>fetch(`${o}/article?path=${encodeURIComponent(E.join(","))}&type=${encodeURIComponent(l.join(","))}&lang=${s}`,{signal:c}).then(a=>a.json()))({serverURL:e,lang:t,paths:n,type:["time"],signal:r}).then(o=>Array.isArray(o)?o:[o]),Q2=e=>(({serverURL:t,lang:n,path:r,type:o,action:s})=>fetch(`${t}/article?lang=${n}`,{method:"POST",headers:Y2,body:JSON.stringify({path:r,type:o,action:s})}).then(E=>E.json()))({...e,type:"time",action:"inc"}),il=e=>{const t=((n="")=>n.replace(/\/$/u,""))(e);return/^(https?:)?\/\//.test(t)?t:`https://${t}`},X2=e=>{e.name!=="AbortError"&&console.error(e.message)},al=e=>e.dataset.path||e.getAttribute("id"),cl=(e,t)=>{t.forEach((n,r)=>{n.innerText=e[r].toString()})},Fa=({serverURL:e,path:t=window.location.pathname,selector:n=".waline-pageview-count",update:r=!0,lang:o=navigator.language})=>{const s=new AbortController,E=Array.from(document.querySelectorAll(n)),l=a=>{const p=al(a);return p!==null&&t!==p},c=a=>J2({serverURL:il(e),paths:a.map(p=>al(p)||t),lang:o,signal:s.signal}).then(p=>cl(p,a)).catch(X2);if(r){const a=E.filter(d=>!l(d)),p=E.filter(l);Q2({serverURL:il(e),path:t,lang:o}).then(d=>cl(new Array(a.length).fill(d),a)),p.length&&c(p)}else c(E);return s.abort.bind(s)};const Z2={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline-comment.vuejs.press"};let eu=Z2;const Va=Symbol(""),Sa=()=>ue(Va),tu=Sa,nu=e=>{e.provide(Va,eu)},ru={"/":{placeholder:"Write a comment here (Fill in the email address to receive an email notification when being replied)"}};u(()=>import("./waline-meta-56fbc549.js"),[]);var ou=S({name:"WalineComment",props:{identifier:{type:String,required:!0}},setup(e){const t=tu(),n=he(),r=d8(),o=tr(ru);let s;const E=!!t.serverURL,l=C(()=>{if(!E)return!1;const a=t.pageview!==!1,p=n.value.pageview;return!!p||a!==!1&&p!==!1}),c=C(()=>({lang:r.value==="zh-CN"?"zh-CN":"en",locale:o.value,dark:"html.dark",...t,path:e.identifier}));return pe(()=>{re(()=>e.identifier,()=>{s==null||s(),l.value&&nn().then(()=>{setTimeout(()=>{s=Fa({serverURL:t.serverURL,path:e.identifier})},t.delay||800)})},{immediate:!0})}),()=>E?i("div",{id:"comment",class:"waline-wrapper"},i(A({loader:async()=>(await u(()=>import("./component-da61f7c3.js"),[])).Waline,loadingComponent:on}),c.value)):null}}),su=S({name:"CommentService",props:{darkmode:Boolean},setup(e){const t=Sa(),n=ae(),r=he(),o=t.comment!==!1,s=C(()=>r.value.comment||o&&r.value.comment!==!1);return()=>i(ou,{identifier:r.value.commentID||n.value.path,darkmode:e.darkmode,style:{display:s.value?"block":"none"}})}}),Eu=_t({enhance:({app:e})=>{nu(e),e.component("CommentService",su)}});const lu=800,iu=2e3,au={"/":{copy:"Copy code",copied:"Copied",hint:"Copied successfully"}},cu=!1,uu=['.theme-hope-content div[class*="language-"] pre'],ul=!1,os=new Map,pu=()=>{const{copy:e}=a2({legacy:!0}),t=tr(au),n=ae(),r=qc(),o=l=>{if(!l.hasAttribute("copy-code-registered")){const c=document.createElement("button");c.type="button",c.classList.add("copy-code-button"),c.innerHTML='<div class="copy-icon" />',c.setAttribute("aria-label",t.value.copy),c.setAttribute("data-copied",t.value.copied),l.parentElement&&l.parentElement.insertBefore(c,l),l.setAttribute("copy-code-registered","")}},s=()=>nn().then(()=>new Promise(l=>{setTimeout(()=>{uu.forEach(c=>{document.querySelectorAll(c).forEach(o)}),l()},lu)})),E=(l,c,a)=>{let{innerText:p=""}=c;/language-(shellscript|shell|bash|sh|zsh)/.test(l.classList.toString())&&(p=p.replace(/^ *(\$|>) /gm,"")),e(p).then(()=>{a.classList.add("copied"),clearTimeout(os.get(a));const d=setTimeout(()=>{a.classList.remove("copied"),a.blur(),os.delete(a)},iu);os.set(a,d)})};pe(()=>{(!r.value||ul)&&s(),xe("click",l=>{const c=l.target;if(c.matches('div[class*="language-"] > button.copy')){const a=c.parentElement,p=c.nextElementSibling;p&&E(a,p,c)}else if(c.matches('div[class*="language-"] div.copy-icon')){const a=c.parentElement,p=a.parentElement,d=a.nextElementSibling;d&&E(p,d,a)}}),re(()=>n.value.path,()=>{(!r.value||ul)&&s()})})};var du=_t({setup:()=>{pu()}});const Bu=(e,t)=>t==="json"?JSON.parse(e):new Function(`let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;`)();var Au=S({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const t=Te(),n=Te(),r=N(!0);return pe(async()=>{const[{default:o}]=await Promise.all([u(()=>import("./auto-fe80bb03.js"),[]),new Promise(l=>setTimeout(l,800))]);o.defaults.maintainAspectRatio=!1;const s=Bu(fn(e.config),e.type),E=n.value.getContext("2d");new o(E,s),r.value=!1}),()=>[e.title?i("div",{class:"chartjs-title"},decodeURIComponent(e.title)):null,r.value?i(on,{class:"chartjs-loading",height:192}):null,i("div",{ref:t,class:"chartjs-wrapper",id:e.id,style:{display:r.value?"none":"block"}},i("canvas",{ref:n,height:400}))]}});const oo=nr("VUEPRESS_CODE_TAB_STORE",{});var vu=S({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=N(e.active),r=Te([]),o=()=>{e.tabId&&(oo.value[e.tabId]=e.data[n.value].id)},s=(a=n.value)=>{n.value=a<r.value.length-1?a+1:0,r.value[n.value].focus()},E=(a=n.value)=>{n.value=a>0?a-1:r.value.length-1,r.value[n.value].focus()},l=(a,p)=>{a.key===" "||a.key==="Enter"?(a.preventDefault(),n.value=p):a.key==="ArrowRight"?(a.preventDefault(),s()):a.key==="ArrowLeft"&&(a.preventDefault(),E()),e.tabId&&(oo.value[e.tabId]=e.data[n.value].id)},c=()=>{if(e.tabId){const a=e.data.findIndex(({id:p})=>oo.value[e.tabId]===p);if(a!==-1)return a}return e.active};return pe(()=>{n.value=c(),re(()=>oo.value[e.tabId],(a,p)=>{if(e.tabId&&a!==p){const d=e.data.findIndex(({id:B})=>B===a);d!==-1&&(n.value=d)}})}),()=>e.data.length?i("div",{class:"vp-code-tabs"},[i("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:a},p)=>{const d=p===n.value;return i("button",{type:"button",ref:B=>{B&&(r.value[p]=B)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":`codetab-${e.id}-${p}`,"aria-selected":d,onClick:()=>{n.value=p,o()},onKeydown:B=>l(B,p)},t[`title${p}`]({value:a,isActive:d}))})),e.data.map(({id:a},p)=>{const d=p===n.value;return i("div",{class:["vp-code-tab",{active:d}],id:`codetab-${e.id}-${p}`,role:"tabpanel","aria-expanded":d},t[`tab${p}`]({value:a,isActive:d}))})]):null}});const ka=({active:e=!1},{slots:t})=>{var n;return i("div",{class:["code-group-item",{active:e}],"aria-selected":e},(n=t.default)==null?void 0:n.call(t))};ka.displayName="CodeGroupItem";const fu=S({name:"CodeGroup",slots:Object,setup(e,{slots:t}){const n=N(-1),r=Te([]),o=(l=n.value)=>{n.value=l<r.value.length-1?l+1:0,r.value[n.value].focus()},s=(l=n.value)=>{n.value=l>0?l-1:r.value.length-1,r.value[n.value].focus()},E=(l,c)=>{l.key===" "||l.key==="Enter"?(l.preventDefault(),n.value=c):l.key==="ArrowRight"?(l.preventDefault(),o(c)):l.key==="ArrowLeft"&&(l.preventDefault(),s(c))};return()=>{var l;const c=(((l=t.default)==null?void 0:l.call(t))||[]).filter(a=>a.type.name==="CodeGroupItem").map(a=>(a.props===null&&(a.props={}),a));return c.length===0?null:(n.value<0||n.value>c.length-1?(n.value=c.findIndex(a=>"active"in a.props),n.value===-1&&(n.value=0)):c.forEach((a,p)=>{a.props.active=p===n.value}),i("div",{class:"code-group"},[i("div",{class:"code-group-nav"},c.map((a,p)=>{const d=p===n.value;return i("button",{type:"button",ref:B=>{B&&(r.value[p]=B)},class:["code-group-nav-tab",{active:d}],"aria-pressed":d,"aria-expanded":d,onClick:()=>{n.value=p},onKeydown:B=>E(B,p)},a.props.title)})),c]))}}});const mu=()=>i(se,{name:"back"},()=>i("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),hu=()=>i(se,{name:"home"},()=>i("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"})),bu='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',_u='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',gu='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';const ss={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},pl={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},yu=(e,t,n)=>{const r=document.createElement(e);return Sr(t)&&rt(t).forEach(o=>{if(o.indexOf("data"))r[o]=t[o];else{const s=o.replace("data","");r.dataset[s]=t[o]}}),n&&n.forEach(o=>{r.appendChild(o)}),r},T8=e=>({...ss,...e,jsLib:Array.from(new Set([...ss.jsLib||[],...e.jsLib||[]])),cssLib:Array.from(new Set([...ss.cssLib||[],...e.cssLib||[]]))}),kn=(e,t)=>{if(e[t]!==void 0)return e[t];const n=new Promise(r=>{var o;const s=document.createElement("script");s.src=t,(o=document.querySelector("body"))==null||o.appendChild(s),s.onload=()=>{r()}});return e[t]=n,n},Cu=(e,t)=>{if(t.css&&Array.from(e.childNodes).every(n=>n.nodeName!=="STYLE")){const n=yu("style",{innerHTML:t.css});e.appendChild(n)}},Du=(e,t,n)=>{const r=n.getScript();if(r&&Array.from(t.childNodes).every(o=>o.nodeName!=="SCRIPT")){const o=document.createElement("script");o.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${r}}`)),t.appendChild(o)}},wu=e=>{const t=rt(e),n={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(r=>{const o=t.filter(s=>pl[r].types.includes(s));if(o.length){const s=o[0];n[r]=[e[s].replace(/^\n|\n$/g,""),pl[r].map[s]||s]}}),n.isLegal=(!n.html.length||n.html[1]==="none")&&(!n.js.length||n.js[1]==="none")&&(!n.css.length||n.css[1]==="none"),n},xa=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),$a=e=>`<div id="app">
${xa(e)}
</div>`,Iu=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,Tu=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Ma=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`,Pu=(e,t)=>{const n=T8(t),r=e.js[0]||"";return{...n,html:xa(e.html[0]||""),js:r,css:e.css[0]||"",isLegal:e.isLegal,getScript:()=>{var o;return n.useBabel?((o=window.Babel.transform(r,{presets:["es2015"]}))==null?void 0:o.code)||"":r}}},Lu=/<template>([\s\S]+)<\/template>/u,Ru=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,Ou=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,Fu=(e,t)=>{const n=T8(t),r=e.html[0]||"",o=Lu.exec(r),s=Ru.exec(r),E=Ou.exec(r),l=o?o[1].replace(/^\n|\n$/g,""):"",[c="",a=""]=s?[s[4].replace(/^\n|\n$/g,""),s[3]]:[],[p="",d=""]=E?[E[4].replace(/^\n|\n$/g,""),E[3]]:[],B=a===""&&(d===""||d==="css");return{...n,html:$a(l),js:Tu(c),css:p,isLegal:B,jsLib:[n.vue,...n.jsLib],getScript:()=>{var v,m;const g=t.useBabel?((m=(v=window.Babel)==null?void 0:v.transform(c,{presets:["es2015"]}))==null?void 0:m.code)||"":c.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Ma(g)};appOptions.template=\`${l.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},Vu=(e,t)=>{const n=T8(t);return{...n,html:$a(""),js:Iu(e.js[0]||""),css:e.css[0]||(e.js[0]?e.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:e.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>{var r,o;const s=((o=(r=window.Babel)==null?void 0:r.transform(e.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Ma(s)}))`}}},xn={},Su=e=>Promise.all([kn(xn,e.babel),kn(xn,e.react),kn(xn,e.reactDOM)]),ku=e=>{const t=[kn(xn,e.vue)];return e.useBabel&&t.push(kn(xn,e.babel)),Promise.all(t)},xu=e=>e.useBabel?kn(xn,e.babel):Promise.resolve();var $u=S({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const[n,r]=Ls(!1),o=Te(),s=Te(),E=N("0"),l=N(!1),c=C(()=>JSON.parse(e.config?fn(e.config):"{}")),a=C(()=>{const m=JSON.parse(fn(e.code));return wu(m)}),p=C(()=>e.type==="react"?Vu(a.value,c.value):e.type==="vue"?Fu(a.value,c.value):Pu(a.value,c.value)),d=C(()=>p.value.isLegal),B=(m=!1)=>{const g=o.value.attachShadow({mode:"open"}),D=document.createElement("div");D.classList.add("code-demo-app"),g.appendChild(D),d.value?(m&&(D.innerHTML=p.value.html),Cu(g,p.value),Du(e.id,g,p.value),E.value="0"):E.value="auto",l.value=!0},v=()=>{switch(e.type){case"react":return Su(p.value).then(()=>B());case"vue":return ku(p.value).then(()=>B());default:return xu(p.value).then(()=>B(!0))}};return pe(()=>{setTimeout(()=>{v()},800)}),()=>{var m;return i("div",{class:"vp-code-demo",id:e.id},[i("div",{class:"vp-code-demo-header"},[p.value.isLegal?i("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",n.value?"down":"end"],onClick:()=>{E.value=n.value?"0":`${s.value.clientHeight+13.8}px`,r()}}):null,e.title?i("span",{class:"vp-code-demo-title"},decodeURIComponent(e.title)):null,p.value.isLegal&&p.value.jsfiddle!==!1?i("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[i("input",{type:"hidden",name:"html",value:p.value.html}),i("input",{type:"hidden",name:"js",value:p.value.js}),i("input",{type:"hidden",name:"css",value:p.value.css}),i("input",{type:"hidden",name:"wrap",value:"1"}),i("input",{type:"hidden",name:"panel_js",value:"3"}),i("input",{type:"hidden",name:"resources",value:[...p.value.cssLib,...p.value.jsLib].join(",")}),i("button",{type:"submit",class:"jsfiddle-button",innerHTML:_u,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!p.value.isLegal||p.value.codepen!==!1?i("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[i("input",{type:"hidden",name:"data",value:JSON.stringify({html:p.value.html,js:p.value.js,css:p.value.css,js_external:p.value.jsLib.join(";"),css_external:p.value.cssLib.join(";"),layout:p.value.codepenLayout,html_pre_processor:a.value?a.value.html[1]:"none",js_pre_processor:a.value?a.value.js[1]:p.value.jsx?"babel":"none",css_pre_processor:a.value?a.value.css[1]:"none",editors:p.value.codepenEditors})}),i("button",{type:"submit",innerHTML:bu,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),l.value?null:i(on,{class:"vp-code-demo-loading"}),i("div",{ref:o,class:"vp-code-demo-display",style:{display:d.value&&l.value?"block":"none"}}),i("div",{class:"vp-code-demo-code-wrapper",style:{height:E.value}},i("div",{ref:s,class:"vp-code-demo-codes"},(m=t.default)==null?void 0:m.call(t)))])}}});const Mu=(async()=>{}).constructor,Nu=(e,t,n)=>t==="js"?Mu("myChart",`let width,height,option,__echarts_config__;
{
${e}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(n):Promise.resolve({option:JSON.parse(e)});var Hu=S({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const t=N(!0),n=Te();let r;return xe("resize",ha(()=>r==null?void 0:r.resize(),100)),pe(()=>{Promise.all([u(()=>import("./index-2bf332f6.js"),[]),new Promise(o=>setTimeout(o,800))]).then(async([o])=>{r=o.init(n.value);const{option:s,...E}=await Nu(fn(e.config),e.type,r);r.resize(E),r.setOption(s),t.value=!1})}),bn(()=>{r==null||r.dispose()}),()=>[e.title?i("div",{class:"echarts-title"},decodeURIComponent(e.title)):null,i("div",{class:"echarts-wrapper"},[i("div",{ref:n,class:"echarts-container",id:e.id}),t.value?i(on,{class:"echarts-loading",height:360}):null])]}});var P8={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},ju={...P8,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},zu={...P8,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},qu={...P8,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const dl={ant:ju,vue:qu,pie:zu};var Uu=S({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(e){let t=null;const n=Te(),r=N(!0),o=N(1),s=C(()=>dl[e.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${e.preset}`),dl.vue)),E=l=>l<419?.8:l>1280?1:.9;return pe(()=>{Promise.all([u(()=>import("./flowchart-c441f34d.js"),[]),new Promise(l=>setTimeout(l,800))]).then(([{parse:l}])=>{t=l(fn(e.code)),o.value=E(window.innerWidth),r.value=!1,t.draw(e.id,{...s.value,scale:o.value})}),xe("resize",ha(()=>{if(t){const l=E(window.innerWidth);o.value!==l&&(o.value=l,t.draw(e.id,{...s.value,scale:l}))}},100))}),()=>[r.value?i(on,{class:"flowchart-loading",height:192}):null,i("div",{ref:n,class:["flowchart-wrapper",e.preset],id:e.id,style:{display:r.value?"none":"block"}})]}});let Gu={};const Na=Symbol(""),Wu=()=>ue(Na),Ku=e=>{e.provide(Na,Gu)},Dn={useMaxWidth:!1},Yu=e=>({dark:e,background:e?"#1e1e1e":"#fff",primaryColor:e?"#389d70":"#4abf8a",primaryBorderColor:e?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:e?"#fff":"#000",secondaryTextColor:e?"#ddd":"#333",tertiaryColor:e?"#282828":"#efeef4",tertiaryBorderColor:e?"#bbb":"#242424",tertiaryTextColor:e?"#ddd":"#333",noteBkgColor:e?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:e?"#f6d365":"#333",lineColor:e?"#d3d3d3":"#333",textColor:e?"#fff":"#242424",mainBkg:e?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:e?"#389d70":"#4abf8a",nodeTextColor:e?"#fff":"#242424",signalTextColor:e?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:e?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var Ju=S({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(e){const{themeVariables:t,...n}=Wu(),r=Te(),o=C(()=>fn(e.code)),s=N(""),E=N(!1),l=async()=>{const[{default:p}]=await Promise.all([u(()=>import("./mermaid.core-1f1cd747.js").then(d=>d.b7),["assets/mermaid.core-1f1cd747.js","assets/commonjsHelpers-de833af9.js"]),new Promise(d=>setTimeout(d,800))]);p.initialize({theme:"base",themeVariables:{...Yu(E.value),...kc(t)?t(E.value):t},flowchart:Dn,sequence:Dn,journey:Dn,gantt:Dn,er:Dn,pie:Dn,...n,startOnLoad:!1}),s.value=(await p.render(e.id,o.value)).svg},c=()=>{const{body:p}=document,d=document.createElement("div");d.classList.add("mermaid-preview"),d.innerHTML=s.value,p.appendChild(d),d.addEventListener("click",()=>{p.removeChild(d)})},a=()=>{const p=`data:image/svg+xml;charset=utf8,${s.value.replace(/<br>/g,"<br />").replace(/%/g,"%25").replace(/"/g,"%22").replace(/'/g,"%27").replace(/&/g,"%26").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E")}`,d=document.createElement("a");d.setAttribute("href",p),d.setAttribute("download",`${e.id}.svg`),d.click()};return pe(()=>{const p=document.documentElement,d=()=>p.classList.contains("dark")||p.getAttribute("data-theme")==="dark";E.value=d(),l(),_a(p,()=>{E.value=d()},{attributeFilter:["class","data-theme"],attributes:!0}),re(E,()=>l())}),()=>[i("div",{class:"mermaid-actions"},[i("button",{class:"preview-button",onClick:()=>c(),title:"preview",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>'}),i("button",{class:"download-button",onClick:()=>a(),title:"download",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>'})]),i("div",{ref:r,class:"mermaid-wrapper"},s.value?i("div",{class:"mermaid-content",innerHTML:s.value}):i(on,{class:"mermaid-loading",height:96}))]}});let Qu={};const Ha=Symbol(""),Xu=()=>ue(Ha),Zu=e=>{e.provide(Ha,Qu)},e4={showCompileOutput:!1,clearConsole:!1,ssr:!1};let t4=e4;const ja=Symbol(""),n7=()=>ue(ja),n4=e=>{e.provide(ja,t4)},r4=()=>u(()=>import("./highlight.esm-75b11b9d.js"),[]),o4=()=>u(()=>import("./markdown.esm-9d5bc2ce.js"),[]),s4=()=>u(()=>import("./math.esm-70a288c8.js"),[]),E4=()=>u(()=>import("./notes.esm-a106bb2c.js"),[]),l4=()=>u(()=>import("./reveal.esm-1a4c3ae7.js"),[]),i4=()=>u(()=>import("./search.esm-7e6792e2.js"),[]),a4=()=>u(()=>import("./zoom.esm-b83b91d0.js"),[]);const c4=()=>[l4(),o4(),r4(),s4(),i4(),E4(),a4()];var u4=S({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(e){const t=Xu(),n=he(),r=N(""),o=N(!0),s=Te();let E=null;const l=async c=>{const a=[new Promise(v=>setTimeout(v,800)),...c4()],[,p,...d]=await Promise.all(a),B=new p.default(c,{backgroundTransition:"slide",hash:n.value.layout==="Slide",mouseWheel:n.value.layout==="Slide",transition:"slide",slideNumber:!0,...t,...n.value.reveal||{},embedded:n.value.layout!=="Slide",plugins:[...d.map(({default:v})=>v),...t.plugins??[]]});return await B.initialize(),B};return pe(async()=>{const c=s.value;c&&(r.value=fn(e.code),c.setAttribute("id",e.id),c.setAttribute("data-theme",e.theme),E=await l(c),o.value=!1)}),bn(()=>{E==null||E.destroy()}),()=>i("div",{class:"vp-reveal"},[i("div",{ref:s,class:["reveal","reveal-viewport"]},i("div",{class:"slides",innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${r.value}<\/script></section>`})),o.value?i(on,{class:"reveal-loading",height:400}):null])}});var p4=S({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(e){return()=>[i("div",{class:"vp-playground"},[i("div",{class:"vp-playground-header"},[e.title?i("div",{class:"vp-playground-title"},decodeURIComponent(e.title)):null,i("div",{class:"vp-playground-actions"},[i("a",{class:"vp-playground-action",href:decodeURIComponent(e.link),target:"_blank",innerHTML:gu})])]),i("div",{class:"vp-playground-container"},i("iframe",{src:decodeURIComponent(e.link)}))])]}});const Es=nr("VUEPRESS_TAB_STORE",{});var d4=S({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=N(e.active),r=Te([]),o=()=>{e.tabId&&(Es.value[e.tabId]=e.data[n.value].id)},s=(a=n.value)=>{n.value=a<r.value.length-1?a+1:0,r.value[n.value].focus()},E=(a=n.value)=>{n.value=a>0?a-1:r.value.length-1,r.value[n.value].focus()},l=(a,p)=>{a.key===" "||a.key==="Enter"?(a.preventDefault(),n.value=p):a.key==="ArrowRight"?(a.preventDefault(),s()):a.key==="ArrowLeft"&&(a.preventDefault(),E()),o()},c=()=>{if(e.tabId){const a=e.data.findIndex(({id:p})=>Es.value[e.tabId]===p);if(a!==-1)return a}return e.active};return pe(()=>{n.value=c(),re(()=>Es.value[e.tabId],(a,p)=>{if(e.tabId&&a!==p){const d=e.data.findIndex(({id:B})=>B===a);d!==-1&&(n.value=d)}})}),()=>e.data.length?i("div",{class:"vp-tabs"},[i("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:a},p)=>{const d=p===n.value;return i("button",{type:"button",ref:B=>{B&&(r.value[p]=B)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":`tab-${e.id}-${p}`,"aria-selected":d,onClick:()=>{n.value=p,o()},onKeydown:B=>l(B,p)},t[`title${p}`]({value:a,isActive:d}))})),e.data.map(({id:a},p)=>{const d=p===n.value;return i("div",{class:["vp-tab",{active:d}],id:`tab-${e.id}-${p}`,role:"tabpanel","aria-expanded":d},t[`tab${p}`]({value:a,isActive:d}))})]):null}});const B4=_t({enhance:({app:e})=>{e.component("ChartJS",Au),e.component("CodeTabs",vu),mt("CodeGroup",e)||e.component("CodeGroup",fu),mt("CodeGroupItem",e)||e.component("CodeGroupItem",ka),e.component("CodeDemo",$u),e.component("ECharts",Hu),e.component("FlowChart",Uu),Ku(e),e.component("Mermaid",Ju),Zu(e),e.component("Presentation",u4),e.component("Playground",p4),e.component("Tabs",d4),n4(e),e.component("VuePlayground",A(()=>u(()=>import("./VuePlayground-69674cdc.js"),[])))},setup:()=>{}});let A4={};const za=Symbol(""),v4=()=>ue(za),f4=e=>{e.provide(za,A4)};const m4=".theme-hope-content :not(a) > img:not([no-view])",h4={"/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"}},b4=800,_4='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',g4=e=>ie(e)?Array.from(document.querySelectorAll(e)):e.map(t=>Array.from(document.querySelectorAll(t))).flat(),qa=e=>new Promise((t,n)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>t(qa(e)),e.onerror=r=>n(r))}),y4=()=>{const{isSupported:e,toggle:t}=w8(),n=v4(),r=tr(h4),o=ae();let s;const E=c=>{c.on("uiRegister",()=>{e&&c.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{t()}}),c.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(a,p)=>{a.setAttribute("download",""),a.setAttribute("target","_blank"),a.setAttribute("rel","noopener"),p.on("change",()=>{a.setAttribute("href",p.currSlide.data.src)})}}),c.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(a,p)=>{const d=[];let B=-1;for(let v=0;v<p.getNumItems();v++){const m=document.createElement("div");m.className="photo-swipe-bullet",m.onclick=g=>{p.goTo(d.indexOf(g.target))},d.push(m),a.appendChild(m)}p.on("change",()=>{B>=0&&d[B].classList.remove("active"),d[p.currIndex].classList.add("active"),B=p.currIndex})}})})},l=()=>Promise.all([u(()=>import("./photoswipe.esm-1464cdb9.js"),[]),nn().then(()=>new Promise(c=>setTimeout(c,b4)).then(()=>g4(m4)))]).then(([{default:c},a])=>{const p=a.map(d=>({html:_4,element:d,msrc:d.src}));a.forEach((d,B)=>{const v=()=>{s=new c({preloaderDelay:0,showHideAnimationType:"zoom",...r.value,...n,dataSource:p,index:B,closeOnVerticalDrag:!0,wheelToZoom:!1}),E(s),s.addFilter("thumbEl",()=>d),s.addFilter("placeholderSrc",()=>d.src),s.init()};d.style.cursor="zoom-in",d.addEventListener("click",()=>{v()}),d.addEventListener("keypress",({key:m})=>{m==="Enter"&&v()})}),a.forEach((d,B)=>{qa(d).then(v=>{p.splice(B,1,v),s==null||s.refreshSlideContent(B)})})});pe(()=>{xe("wheel",()=>{s==null||s.close()}),l(),re(()=>o.value.path,()=>l())})};var C4=_t({enhance:({app:e})=>{f4(e)},setup:()=>{y4()}});const Ua=()=>{const e=ae();return C(()=>e.value.readingTime??null)},Rs=typeof{"/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}}>"u"?null:{"/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}},Ga=(e,t)=>{const{minutes:n,words:r}=e,{less1Minute:o,word:s,time:E}=t;return{time:n<1?o:E.replace("$time",Math.round(n).toString()),words:s.replace("$word",r.toString())}},Bl={words:"",time:""},Wa=()=>Rs?tr(Rs):C(()=>null),D4=()=>{if(typeof Rs>"u")return C(()=>Bl);const e=Ua(),t=Wa();return C(()=>e.value&&t.value?Ga(e.value,t.value):Bl)},sn=()=>Ra(),le=()=>G2(),rr=()=>C(()=>!!sn().value.pure);var ls=S({name:"EmptyComponent",setup:()=>()=>null});const w4="719px",I4="1440px",T4="false",L8={mobileBreakPoint:w4,pcBreakPoint:I4,enableThemeColor:T4},R8={"/posts/":[{text:"打工人手册",prefix:"打工人手册/",collapsible:!0,children:["代码能写一辈子么","普通打工人的一生","职场的天花板","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_1%20AI%E7%AC%AC%E4%B8%80%E5%AE%9A%E5%BE%8B.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_2%20AI%E7%9A%84%E9%97%AE%E9%A2%98%E6%8B%86%E5%88%86%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_3%20%E5%AE%9A%E6%9C%9F%E5%AE%9A%E9%A2%9D.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_4%20AI%E7%9A%84%E5%A4%A7%E7%8E%A9%E5%AE%B6.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_6%20AI%E7%9A%84%E7%9D%A1%E7%9C%A0%E5%B7%A5%E4%BD%9C%E6%B3%95.html","AI的代码完成度太高，各位快跳船","SP1 十六年光阴","SP2 一个月花八百的日子","SP3 谁懂，我对象的作品被搬到Youtube了","SP4 华灯初上","在Cursor里用claude已经比购买claude还要好","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_1%20%E7%9B%AE%E6%A0%87%E7%AE%A1%E7%90%86.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_2%20%E5%8E%9F%E5%88%99.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_3%20%E8%BE%93%E5%87%BA%E5%8A%9F%E7%8E%87.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_4%20%E4%B8%AD%E9%80%94.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_5%20%E5%86%B7%E5%90%AF%E5%8A%A8.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_5.5%20%E8%BE%93%E8%B5%A2.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_6%20%E4%BB%B7%E5%80%BC.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_7%20%E9%9A%BE%E9%9A%BE%E9%9A%BE.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_8%20%E5%A4%A7%E6%9C%89%E5%A4%A7%E7%9A%84%E9%9A%BE%E5%A4%84.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_9%20%E6%8D%A1%E7%93%B6%E5%AD%90%E7%9A%84%E8%89%BA%E6%9C%AF.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_10%20%E5%88%A9%E6%81%AF.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_11%20%E8%81%8C%E5%9C%BA%E7%BB%99%E4%B8%8D%E4%BA%86%E4%BD%A0%E7%9A%84.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_12%20%E4%B8%8D%E8%A6%81%E8%BF%BD%E6%B1%82%E8%81%8C%E5%9C%BA%E8%BF%9B%E6%AD%A5.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_13%20%E5%B7%A5%E5%85%B7.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_14%20%E9%81%93.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_15%20%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_16%20%E6%9C%AF.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_17%20%E5%81%B7%E6%87%92%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_18%20%E5%85%8D%E8%B4%B9%E7%9A%84%E6%96%B9%E6%A1%88.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_19%20%E6%B5%81%E9%87%8F%EF%BC%8C%E4%BB%A3%E8%A1%A8%E7%9D%80%E9%9C%80%E6%B1%82.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_20%20%E4%BA%8C%E7%9C%9F%E4%B9%8B%E9%97%B4%EF%BC%8C%E5%BF%85%E6%9C%89%E4%B8%80%E5%81%87.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_21%20%E6%A8%A1%E7%B3%8A%E7%9A%84%E4%BA%8B%E6%83%85%EF%BC%8C%E5%BF%85%E7%84%B6%E8%AE%A9%E4%BD%A0%E4%BB%98%E5%87%BA%E4%BB%A3%E4%BB%B7.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_22%20%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%8F%AF%E4%BB%A5%E5%B9%B2%E4%BB%80%E4%B9%88.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_23%20%E5%BF%99%E5%88%B0%E6%97%A0%E6%9A%87%E5%85%B3%E6%B3%A8%E5%85%B6%E4%BB%96%E4%BA%8B%E6%83%85.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_24%20%E6%89%8D%E5%8D%8E%E7%9A%84%E8%80%97%E6%95%A3.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_25%20%E8%B5%9A%E4%B8%80%E5%8D%83%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_26%20%E8%B5%9A%E4%B8%80%E7%99%BE%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_27%20%E8%B5%9A%E5%8D%81%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_28%20%E8%B5%9A%E4%B8%80%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_29%20%E8%B5%9A%E4%B8%80%E5%8D%83%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_30%20%E8%B5%9A%E4%B8%80%E7%99%BE%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_31%20%E6%88%90%E6%9C%AC%E4%B8%8E%E5%BA%93%E5%AD%98%E7%9A%84%E5%88%86%E9%87%8E.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_32%20%E8%B5%9A%E5%8D%81%E5%9D%97%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_33%20%E8%B5%9A%E4%B8%80%E5%9D%97%E9%92%B1%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_34%20%E8%B5%9A%E4%B8%80%E6%AF%9B%E9%92%B1%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_35%20%E6%B6%88%E8%B4%B9%E7%9A%84%E5%8D%87%E7%BA%A7.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_36%20%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BA%B2%E6%83%85.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_37%20%E5%B0%8F%E5%85%AC%E5%8A%A1%E5%91%98%E7%9A%84%E8%8B%A6%E6%A5%9A.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_38%20%E6%89%AB%E5%B9%B3%E5%89%8D%E8%A1%8C%E7%9A%84%E9%9A%9C%E7%A2%8D.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_39%20%E6%97%B6%E4%BB%A3%E7%9A%84%E5%85%AD%E4%B8%87%E4%BA%94.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_40%20%E6%96%97%E5%BF%97.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_41%20%E8%B5%84%E6%BA%90%E7%9A%84%E6%9E%81%E8%87%B4%E5%88%A9%E7%94%A8.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_42%20%E5%A6%82%E4%BD%95%E6%89%93%E8%B4%A5%E5%85%AC%E5%8F%B8.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_43%20%E8%81%8C%E5%9C%BA%E6%98%AF%E6%B6%88%E8%80%97%E6%88%98.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_44%20%E8%B4%A2%E5%AF%8C%E7%9A%84%E5%85%89%E9%94%A5%E4%B9%8B%E5%86%85.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_45%20%E8%83%BD%E9%87%8F%E4%B8%8E%E4%BF%A1%E6%81%AF%E7%9A%84%E4%B8%BB%E6%97%8B%E5%BE%8B.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_46%20%E9%92%B1%E8%83%BD%E4%BA%A7%E7%94%9F%E5%88%A9%E6%81%AF%E7%9A%84%E5%8F%8D%E9%9D%A2.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_47%20%E4%B9%B0%E4%B8%8E%E5%8D%96%E7%9A%84%E5%AD%A6%E9%97%AE.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_48%20%E4%BA%A4%E6%98%93.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_49%20%E7%94%9F%E6%80%81%E4%BD%8D.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_50%20%E8%84%91%E5%AD%90%E4%B8%BA%E8%B0%81%E5%B7%A5%E4%BD%9C.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_51%20%E8%A7%86%E8%A7%89%E7%9A%84%E7%9B%B2%E5%8C%BA.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_52%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%B5%AA%E6%BD%AE.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_53%20%E7%94%9F%E7%94%9F%E4%B8%8D%E6%81%AF.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_53%20%E7%AA%97%E5%8F%A3%E6%9C%9F.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_54%20%E7%97%85%E7%97%9B%E7%9A%84%E4%BB%B7%E5%80%BC.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_55%20%E6%9D%83%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_56%20%E6%97%B6%E9%97%B4%E7%9A%84%E9%93%81%E5%88%99.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_57%20%E5%91%BD%E8%BF%90%E7%9A%84%E6%8B%90%E8%A7%92.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_58%20%E8%B5%84%E6%BA%90%E7%9A%84%E8%A7%A3%E9%94%81.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_59%20%E9%9D%A0%E4%B8%93%E4%B8%9A%E8%B5%9A%E9%92%B1.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_60%20%E9%80%A0%E5%8A%BF%E4%B8%8D%E5%A6%82%E9%A1%BA%E5%8A%BF.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_63%20%E6%B5%81%E5%AF%87.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_64%20%E7%94%A8%E6%83%B3%E8%B1%A1%E5%8A%9B%E6%8B%BC%E5%87%91%E4%B8%80%E6%9D%A1%E5%90%91%E5%89%8D%E4%B9%8B%E8%B7%AF.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_65%20%E7%94%A8%E6%83%B3%E8%B1%A1%E5%8A%9B%E6%8B%BC%E5%87%91%E4%B8%80%E6%9D%A1%E5%90%91%E5%89%8D%E4%B9%8B%E8%B7%AF(%E4%B8%8B).html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_66%20%E8%BD%AE%E5%8A%A8%E4%B9%8B%E9%81%93%EF%BC%8C%E4%B9%83%E6%98%AF%E5%A4%A9%E4%B9%8B%E9%81%93.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_67%20%E9%81%97%E4%BC%A0%E7%9A%84%E6%9C%AC%E8%B4%A8%E5%B0%B1%E6%98%AF%E8%BD%AE%E5%8A%A8.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_68%20%E4%BB%A3%E7%90%86%E4%B9%8B%E8%B7%AF.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_69%20%E8%B7%B3%E6%A7%BD%E7%9A%84%E6%88%98%E7%95%A5%E8%B7%AF%E7%BA%BF.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_70%20%E6%B0%B8%E8%BF%9C%E6%BB%A1%E4%BB%93%E7%9A%84%E9%97%AE%E9%A2%98%E5%9C%A8%E4%BA%8E%E6%97%A0%E5%91%A8%E8%BD%AC.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_71%20%E4%BF%AE%E7%82%BC%E7%9A%84%E9%9A%90%E5%96%BB.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_72%20%E5%B0%BD%E9%87%8F%E5%8E%BB%E6%8E%8C%E6%8F%A1%E7%94%9F%E4%BA%A7%E8%B5%84%E6%96%99.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_73%20%E8%81%9A%E6%B2%99%E6%88%90%E5%A1%94%E7%9A%84%E6%97%B6%E9%97%B4%E5%A4%8D%E7%94%A8%E6%B3%95.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_74%20%E7%9B%B4%E6%8E%A5%E9%9D%A2%E5%AF%B9%E9%97%AE%E9%A2%98.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_75%20%E8%B0%B7%E6%AD%8C%E5%89%8D%E5%8D%81%E7%9A%84%E9%A1%B5%E9%9D%A2%E4%BD%A0%E5%BA%94%E8%AF%A5%E7%9C%8B%E5%AE%8C.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_76%20%E6%8F%90%E5%8D%87%E6%BC%94%E5%8C%96%E7%9A%84%E9%A2%91%E6%AC%A1.html"]},{text:"技术",prefix:"技术/",collapsible:!0,children:["/posts/%E6%8A%80%E6%9C%AF/1%20%E8%B6%8B%E4%BA%8E%E6%B7%B7%E4%B9%B1%E7%9A%84%E4%BB%A3%E7%A0%81.html"]},{text:"文章",prefix:"文章/",collapsible:!0,children:["/posts/%E6%96%87%E7%AB%A0/12%20%E8%B5%84%E6%BA%90%E7%9A%84%E6%9E%81%E8%87%B4%E4%BD%BF%E7%94%A8.html","/posts/%E6%96%87%E7%AB%A0/1%20%E7%94%B5%E5%92%8C%E6%B0%B4%E7%9A%84%E6%88%90%E6%9C%AC.html","/posts/%E6%96%87%E7%AB%A0/2%20%E5%85%B3%E4%BA%8E%E6%8B%96%E5%BB%B6%E7%9A%84%E5%88%86%E6%9E%90.html","/posts/%E6%96%87%E7%AB%A0/3%20%E6%88%91%E6%89%80%E8%AE%A4%E8%AF%86%E7%9A%84%E5%B7%A6%E8%80%B3%E6%9C%B5%E8%80%97%E5%AD%90.html","/posts/%E6%96%87%E7%AB%A0/4%20%E9%9F%A9%E8%80%81%E9%AD%94%E7%9A%84%E6%88%90%E9%95%BF%E4%B9%8B%E8%B7%AF.html","/posts/%E6%96%87%E7%AB%A0/5%20%E6%88%91%E6%89%80%E7%94%A8%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/%E6%96%87%E7%AB%A0/6%202023%20%E5%A4%B9%E7%BC%9D%E4%B8%AD%E7%9A%84%E5%A5%87%E8%BF%B9.html","/posts/%E6%96%87%E7%AB%A0/7%20%E6%88%BF%E9%97%B4%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%86%85%E5%BE%AA%E7%8E%AF.html","/posts/%E6%96%87%E7%AB%A0/8%20%E5%BC%BA%E4%B8%8E%E5%BC%B1%E7%9A%84%E5%B9%BB%E8%A7%89.html","/posts/%E6%96%87%E7%AB%A0/9%20%E6%A0%B9%E6%8D%AE%E5%9C%B0.html","/posts/%E6%96%87%E7%AB%A0/10%20%E5%AF%B9%E6%A0%87.html","/posts/%E6%96%87%E7%AB%A0/11%202024%20%E6%98%8E%E6%9A%97%E5%88%87%E6%8D%A2%E4%B9%8B%E8%B7%AF.html"]},{text:"沐沐",prefix:"沐沐/",collapsible:!0,children:["来小红书9周年啦","47卡位赛 王者荣耀第三轮","2020我来了","2021重回深圳芜湖","2023的尾巴来广州工作啦打工人日常","2024又要去往新的城市啦","2024很幸运2025会更好呀","2025要和男朋友一起旺旺旺","iPhone15 Pro Max使用感很好好看","Last day要去广州啦_一切顺利","record a new day","一丢丢生活plog如此热爱生活","一人食的日常","一张图证明你的运气很好","一把晋级成功太顺利惹","上周的王者荣耀牌牌","不要把你的观念强加给别人","两个人在一起就是意义","中秋节假期后被夸了一周了","中通快递真的很垃圾无语","为什么闹别扭以后情绪反扑这么严重","乐乐茶这个包装也太好笑了","乐高积木","二十大几单身很好不要焦虑开心最重要","于祥宇真的很难不让人喜欢","今天喝了什么","今天喝了吗","今天喝了吗绿箭给我打钱","今天我就是女野王哈哈哈","今年的网易云年度总结来啦","今日份水果已发放到手里","今日早餐土豆泥沙拉","他怎么这么好看","他说我在欣赏我的猎物","任何没看封神的人体会不到我的快乐","你好呀2019","你怎么知道我要去看孟凡明","借朋友家小猫咪来拍视频","做饭日常","充满生活气的城市随便拍","公司留下的陈楚生店长","最近的嘎嘎快乐","别再给我推荐eStar了","剧版镇魂这是仙子吧朱一龙","又是为别人爱情落泪的一天","又是美食","双人同舞真的好玩爱玩","名场面啊买床单以后笑死了","后天隔离结束17号预约了dfs","周末快乐三人同居在家的快乐生活","和室友喝小酒吃烧烤聊到深夜","啊我这大屁股怎么办","啊逛街看到一个男团在签售","嗓子痛哑成电音朵拉还是没逃过","四海城圣诞节氛围好浓啊","回家回家勇敢的人先买机票再请假","在上海虹桥站换乘已经被挤死","坚持真的会有改善","复阳第四天慢慢恢复中","外卖小哥好有趣","大三巴这家店在放周兴哲","大唐诗人传我冲了","大声宣布终于甜甜的恋爱也轮到我啦","太恶心了避雷百草味鸭脖有虫卵","如果爱情有温度此刻就是最适宜的","孟凡明带来的快乐持续一整天","它真的太会了好可爱","封神第一部真的好看给我冲","小卢真帅终于可以继续追唐诡2","小总结就是太快乐了","小红书给我发奖状啦","山姆新品牛肉馅饼干","希望在香港越来越好呀","幸福的一天开启 更加努力爱自己","广东番禺区求租房南村万博附近","广州周末看展ᴗ广东省博物馆","广播剧cv漠然配音小花絮","建议不会说话的人shut up","开启新的一天10月快乐","异地恋当然要记录啦被爱真的好幸福","异地恋的远程约会_","异地恋见面之陪男朋友过生日一","异地恋见面之陪男朋友过生日三","异地恋见面之陪男朋友过生日二","弟弟浅浅带我王者荣耀连赢啦","张凯我哭死TTG明年见","得了新冠进入羊圈的第一天感受","心心念念的apm六芒星项链和手链","心疼我们耶耶罗思源是最棒","志怪纪录片妖怪传安利","怎么一喝咖啡就容易窜稀","情绪稳定的男友真的很重要家人们","感情的消失从没有分享欲开始","感觉圈子真的很可怕一诺","我一直都被好好爱着爱我的父母","我们一起热烈","我们在小红书解锁新的聊天标识啦","我四年前喜欢的超糊帕帕终于要火了吗","我很震惊为什么首页推荐全是男生","我的搜索记录显示我有霸总气质","我真的吐了素质极差","我真的生气了买了新皮还在输","我那进步很大的主队拜托继续加油","打游戏小拇指根部疼","打游戏约我公主请上号","扬州乒乓球全锦赛你别太离谱","扬州去啦","抓娃娃的快乐","排位日记这周保住啦可惜小明掉了","排队一小时的粤陈记粥底火锅","推荐一个宝藏历史博主-东兴苟十三","收扬州全锦赛门票","新型雪糕刺客-德芙真有你的","新年战甲搞定啦","新的一周新的王者荣耀标标","无所谓 俺有朋友帮我跑哈哈哈","日料放题","日腐剧日腐电影推荐安利都给我哭","日腐我又来啦","早上被陌生人敲门还让我开门","有家人们一起来聊天吗分享快乐","机动搜查队404","极限虹桥机场T2到T1登机","松鹤楼 我葱呢我面的葱呢","毕业前的快乐","永远怀念追一年生的青春SK白月光","求一个深圳隔离同行 香港回深圳","江苏共青团主题盲盒","没有蓝还给我让蓝的澜太帅了吧","没看过小公子x小王子的会哭吧","浅浅记录打工人的一周三餐饮食","深圳小煵记休想再坑到我","深圳的周末快乐碎片降温啦十月你好","游记懒得P图之原图直发","滴胶手作沉浸式开箱视频","激光点痣伤口感染发炎了","火锅时间到等不及随便拍一个开吃","爱上喝汤健健康康","牛眼泪把科颜氏当身体乳抹了","特种兵出差太强了我","狮暖一生推","王者荣耀一周爬55颗星星","王者荣耀世冠抽签结果","王者荣耀亚运会大名单公布","王者荣耀你可得瑟吧","王者荣耀快乐上分超nice游戏搭子","瑞幸你是懂联名的真可爱","瑞幸桂花龙井拿铁","男朋友从投喂一只小猪变成了三只","男生穿搭好难啊丑的真丑好看的真好看","番禺天河城一早排队盛况","白石深夜食堂 日料真好吃","盐城你出息了只此青绿","睡醒以后怎么样才能复睡呀","秋冬份的新美甲简简单单","紫心之恋好好看","纯爱战士应声倒下","终于上无双啦下班艰苦","莱德拉我来了巧克力脑袋开心","虽然正方输了但是罗淼学长太强了","观光电梯上的维港景色","记录一下勇敢Heidi的一天-Part one","记录勇敢Heidi的一天Part Two","谁能想到是早餐互联网人最后的倔强","谈恋爱好幸福被爱的时候人真的会闪耀","贾诩xMr岑爱情标价戏码新歌","越简单的款越好看啊秋日美甲","迎接冬天第一款美甲","这不快乐就来了","这个点你为什么在看手机","这年头工作上还能遇到普信男绝","通宵加班的一天","随缘收316SHINee香港"]},{text:"测绘 此目录文章为 A I生成",prefix:"测绘_此目录文章为AI生成/",collapsible:!0,children:["三维建模","三角测量","全球定位系统（GPS）","全站仪测量","卫星影像处理","变形监测","地下管线探测","地图投影","地理信息系统（GIS）","地籍测量","坐标转换","导线测量","工程测量","摄影测量","数字高程模型（DEM）","水准测量","海洋测绘","激光雷达（LiDAR）","空间数据分析。","遥感技术"]},{text:"见解 Tag",prefix:"见解Tag/",collapsible:!0,children:["温州行"]}]},Ka=e=>{const{icon:t="",color:n,size:r}=e,o={};return n&&(o.color=n),r&&(o.height=Number.isNaN(Number(r))?r:`${r}px`),_n(t)?i("img",{class:"icon",src:t,"no-view":"",style:o}):ko(t)?i("img",{class:"icon",src:Ie(t),"no-view":"",style:o}):i(tt("FontIcon"),e)};Ka.displayName="HopeIcon";var We=Ka,ge=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))(ge||{}),Ya=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(Ya||{});const $n=(e,t,n=!1)=>{let r=Kn(e,la(encodeURI(t)));r.name==="404"&&(r=Kn(e,t));const{fullPath:o,meta:s,name:E}=r;return{text:!n&&s[ge.shortTitle]?s[ge.shortTitle]:s[ge.title]||t,link:E==="404"?t:o,...s[ge.icon]?{icon:s[ge.icon]}:{}}},Mr=()=>{const e=ze(),t=gt();return n=>{if(n)if(ko(n))t.path!==n&&e.push(n);else if(_n(n)||Fi(n))window&&window.open(n);else{const r=t.path.slice(0,t.path.lastIndexOf("/"));e.push(`${r}/${encodeURI(n)}`)}}},Ja=()=>{const e=le(),t=he();return C(()=>{const{author:n}=t.value;return n?Ir(n):n===!1?[]:Ir(e.value.author,!1)})},P4=()=>{const e=he();return C(()=>aa(e.value.category).map(t=>{var n,r;return{name:t,path:((r=(n=ue(Symbol.for("categoryMap")))==null?void 0:n.value.map[t])==null?void 0:r.path)||""}}))},L4=()=>{const e=he();return C(()=>ca(e.value.tag).map(t=>{var n,r;return{name:t,path:((r=(n=ue(Symbol.for("tagMap")))==null?void 0:n.value.map[t])==null?void 0:r.path)||""}}))},R4=()=>{const e=he(),t=ae();return C(()=>{const n=h8(e.value.date);if(n)return n;const{createdTime:r}=t.value.git||{};return r?new Date(r):null})},O4=()=>{const e=le(),t=ae(),n=he(),r=Ja(),o=P4(),s=L4(),E=R4(),l=Ua(),c=D4(),a=C(()=>({author:r.value,category:o.value,date:E.value,localizedDate:t.value.localizedDate,tag:s.value,isOriginal:n.value.isOriginal||!1,readingTime:l.value,readingTimeLocale:c.value,pageview:"pageview"in n.value?n.value.pageview:!0})),p=C(()=>"pageInfo"in n.value?n.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:a,items:p}},{mobileBreakPoint:F4,pcBreakPoint:V4}=L8,Al=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,Nr=()=>{const e=N(!1),t=N(!1),n=()=>{e.value=window.innerWidth<=(Al(F4)??719),t.value=window.innerWidth>=(Al(V4)??1440)};return pe(()=>{n(),xe("resize",n,!1),xe("orientationchange",n,!1)}),{isMobile:e,isPC:t}},Qa=Symbol(""),Hr=()=>{const e=ue(Qa);if(!e)throw new Error("useDarkmode() is called without provider.");return e},S4=e=>{const t=sn(),n=A2(),r=nr("vuepress-theme-hope-scheme","auto"),o=C(()=>t.value.darkmode||"switch"),s=C(()=>{const l=o.value;return l==="disable"?!1:l==="enable"?!0:l==="auto"?n.value:l==="toggle"?r.value==="dark":r.value==="dark"||r.value==="auto"&&n.value}),E=C(()=>{const l=o.value;return l==="switch"||l==="toggle"});e.provide(Qa,{canToggle:E,config:o,isDarkmode:s,status:r}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>s.value}})},k4=()=>{const{isDarkmode:e}=Hr(),t=(n=e.value)=>document.documentElement.setAttribute("data-theme",n?"dark":"light");pe(()=>{re(e,t,{immediate:!0})})};var Ye=S({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:t,emit:n,slots:r}){const o=gt(),s=Hi(),E=Zn(e,"config"),l=C(()=>_n(E.value.link)),c=C(()=>Fi(E.value.link)||X1(E.value.link)),a=C(()=>c.value?void 0:E.value.target||(l.value?"_blank":void 0)),p=C(()=>a.value==="_blank"),d=C(()=>!l.value&&!c.value&&!p.value),B=C(()=>c.value?void 0:E.value.rel||(p.value?"noopener noreferrer":void 0)),v=C(()=>E.value.ariaLabel||E.value.text),m=C(()=>{if(e.exact)return!1;const D=rt(s.value.locales);return D.length?D.every(h=>h!==E.value.link):E.value.link!=="/"}),g=C(()=>d.value?E.value.activeMatch?new RegExp(E.value.activeMatch).test(o.path):m.value?Wn(o.path,E.value.link):o.path===E.value.link:!1);return()=>{const{before:D,after:h,default:_}=r,{text:L,icon:F,link:q}=E.value;return d.value?i(ke,{to:q,"aria-label":v.value,...t,class:["nav-link",{active:g.value},t.class],onFocusout:()=>n("focusout")},()=>_?_():[D?D():i(We,{icon:F}),L,h==null?void 0:h()]):i("a",{href:q,rel:B.value,target:a.value,"aria-label":v.value,...t,class:["nav-link",t.class],onFocusout:()=>n("focusout")},_?_():[D?D():i(We,{icon:F}),L,e.noExternalLinkIcon?null:i(Pa),h==null?void 0:h()])}}});const Yn=(e,t,n=!1)=>"activeMatch"in t?new RegExp(t.activeMatch).test(e.path):g8(e,t.link)?!0:t.children&&!n?t.children.some(r=>Yn(e,r)):!1,Xa=(e,t)=>t.type==="group"?t.children.some(n=>n.type==="group"?Xa(e,n):n.type==="page"&&Yn(e,n,!0))||"prefix"in t&&g8(e,t.prefix):!1,Za=(e,t)=>ie(e.link)?i(Ye,{...t,config:e}):i("p",t,[i(We,{icon:e.icon}),e.text]),e9=e=>{const t=gt();return e?i("ul",{class:"vp-sidebar-sub-headers"},e.map(n=>{const r=Yn(t,n,!0);return i("li",{class:"vp-sidebar-sub-header"},[Za(n,{class:["vp-sidebar-link","vp-heading",{active:r}]}),e9(n.children)])})):null},is=(e="",t="")=>ko(t)?t:`${Y1(e)}${t}`,x4=(e,t)=>{const n=ae();return{type:"heading",text:e.title,link:`${n.value.path}#${e.slug}`,children:O8(e.children,t)}},O8=(e,t)=>t>0?e.map(n=>x4(n,t-1)):[],t9=e=>{const t=ae();return O8(t.value.headers,e)},Os=(e,t,n="")=>{const r=ze(),o=ae(),s=(E,l=n)=>{var c;const a=ie(E)?$n(r,is(l,E)):E.link?{...E,..._o(E.link)?{}:{link:$n(r,is(l,E.link)).link}}:E;if("children"in a){const p=is(l,a.prefix),d=a.children==="structure"?R8[p]:a.children;return{type:"group",...a,prefix:p,children:d.map(B=>s(B,p))}}return{type:"page",...a,children:a.link===o.value.path?O8(((c=o.value.headers[0])==null?void 0:c.level)===1?o.value.headers[0].children:o.value.headers,t):[]}};return e.map(E=>s(E))},$4=(e,t)=>{const n=ae(),r=rt(e).sort((o,s)=>s.length-o.length);for(const o of r)if(Wn(decodeURI(n.value.path),o)){const s=e[o];return s?Os(s==="structure"?R8[o]:s==="heading"?t9(t):s,t,o):[]}return console.warn(`${n.value.path} is missing sidebar config.`),[]},M4=(e,t)=>{const n=Nt();return e===!1?[]:e==="heading"?t9(t):e==="structure"?Os(R8[n.value],t,n.value):K(e)?Os(e,t):Sr(e)?$4(e,t):[]},n9=Symbol(""),N4=()=>{const e=he(),t=le(),n=C(()=>e.value.home?!1:e.value.sidebar??t.value.sidebar??"structure"),r=C(()=>e.value.headerDepth??t.value.headerDepth??2),o=C(()=>M4(n.value,r.value));ft(n9,o)},F8=()=>{const e=ue(n9);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var H4=S({name:"PageFooter",setup(){const e=he(),t=le(),n=Ja(),r=C(()=>{const{copyright:E,footer:l}=e.value;return l!==!1&&!!(E||l||t.value.displayFooter)}),o=C(()=>{const{footer:E}=e.value;return E===!1?!1:ie(E)?E:t.value.footer||""}),s=C(()=>"copyright"in e.value?e.value.copyright:"copyright"in t.value?t.value.copyright:n.value.length?`Copyright © ${new Date().getFullYear()} ${n.value[0].name}`:!1);return()=>r.value?i("footer",{class:"vp-footer-wrapper"},[o.value?i("div",{class:"vp-footer",innerHTML:o.value}):null,s.value?i("div",{class:"vp-copyright",innerHTML:s.value}):null]):null}}),j4=S({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=ae(),r=Zn(e,"config"),o=C(()=>r.value.ariaLabel||r.value.text),s=N(!1);re(()=>n.value.path,()=>{s.value=!1});const E=l=>{l.detail===0&&(s.value=!s.value)};return()=>{var l;return i("div",{class:["dropdown-wrapper",{open:s.value}]},[i("button",{type:"button",class:"dropdown-title","aria-label":o.value,onClick:E},[((l=t.title)==null?void 0:l.call(t))||i("span",{class:"title"},[i(We,{icon:r.value.icon}),e.config.text]),i("span",{class:"arrow"}),i("ul",{class:"nav-dropdown"},r.value.children.map((c,a)=>{const p=a===r.value.children.length-1;return i("li",{class:"dropdown-item"},"children"in c?[i("h4",{class:"dropdown-subtitle"},c.link?i(Ye,{config:c,onFocusout:()=>{c.children.length===0&&p&&(s.value=!1)}}):i("span",c.text)),i("ul",{class:"dropdown-subitem-wrapper"},c.children.map((d,B)=>i("li",{class:"dropdown-subitem"},i(Ye,{config:d,onFocusout:()=>{B===c.children.length-1&&p&&(s.value=!1)}}))))]:i(Ye,{config:c,onFocusout:()=>{p&&(s.value=!1)}}))}))])])}}});const r9=(e,t,n="")=>ie(t)?$n(e,`${n}${t}`):"children"in t?{...t,...t.link&&!_o(t.link)?$n(e,`${n}${t.link}`):{},children:t.children.map(r=>r9(e,r,`${n}${t.prefix||""}`))}:{...t,link:_o(t.link)?t.link:$n(e,`${n}${t.link}`).link},o9=()=>{const e=le(),t=ze(),n=()=>(e.value.navbar||[]).map(o=>r9(t,o)),r=N(n());return re(e,()=>{r.value=n()}),r},z4=()=>{const e=le(),t=C(()=>e.value.repo||null),n=C(()=>t.value?Hc(t.value):null),r=C(()=>t.value?pa(t.value):null),o=C(()=>n.value?e.value.repoLabel??(r.value===null?"Source":r.value):null);return C(()=>!n.value||!o.value||e.value.repoDisplay===!1?null:{type:r.value||"Source",label:o.value,link:n.value})};var q4=S({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const t=ae(),n=Zn(e,"config"),r=C(()=>n.value.ariaLabel||n.value.text),o=N(!1);re(()=>t.value.path,()=>{o.value=!1});const s=(E,l)=>l[l.length-1]===E;return()=>[i("button",{type:"button",class:["nav-screen-dropdown-title",{active:o.value}],"aria-label":r.value,onClick:()=>{o.value=!o.value}},[i("span",{class:"title"},[i(We,{icon:n.value.icon}),e.config.text]),i("span",{class:["arrow",o.value?"down":"end"]})]),i("ul",{class:["nav-screen-dropdown",{hide:!o.value}]},n.value.children.map(E=>i("li",{class:"dropdown-item"},"children"in E?[i("h4",{class:"dropdown-subtitle"},E.link?i(Ye,{config:E,onFocusout:()=>{s(E,n.value.children)&&E.children.length===0&&(o.value=!1)}}):i("span",E.text)),i("ul",{class:"dropdown-subitem-wrapper"},E.children.map(l=>i("li",{class:"dropdown-subitem"},i(Ye,{config:l,onFocusout:()=>{s(l,E.children)&&s(E,n.value.children)&&(o.value=!1)}}))))]:i(Ye,{config:E,onFocusout:()=>{s(E,n.value.children)&&(o.value=!1)}}))))]}}),U4=S({name:"NavScreenLinks",setup(){const e=o9();return()=>e.value.length?i("nav",{class:"nav-screen-links"},e.value.map(t=>i("div",{class:"navbar-links-item"},"children"in t?i(q4,{config:t}):i(Ye,{config:t})))):null}});const s9=()=>i(se,{name:"dark"},()=>i("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));s9.displayName="DarkIcon";const E9=()=>i(se,{name:"light"},()=>i("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));E9.displayName="LightIcon";const l9=()=>i(se,{name:"auto"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));l9.displayName="AutoIcon";const i9=()=>i(se,{name:"enter-fullscreen"},()=>i("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));i9.displayName="EnterFullScreenIcon";const a9=()=>i(se,{name:"cancel-fullscreen"},()=>i("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));a9.displayName="CancelFullScreenIcon";const c9=()=>i(se,{name:"outlook"},()=>[i("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);c9.displayName="OutlookIcon";var u9=S({name:"AppearanceSwitch",setup(){const{config:e,status:t}=Hr(),n=()=>{e.value==="switch"?t.value={light:"dark",dark:"auto",auto:"light"}[t.value]:t.value=t.value==="light"?"dark":"light"};return()=>i("button",{type:"button",id:"appearance-switch",onClick:()=>n()},[i(l9,{style:{display:t.value==="auto"?"block":"none"}}),i(s9,{style:{display:t.value==="dark"?"block":"none"}}),i(E9,{style:{display:t.value==="light"?"block":"none"}})])}}),G4=S({name:"AppearanceMode",setup(){const e=le(),{canToggle:t}=Hr(),n=C(()=>e.value.outlookLocales.darkmode);return()=>t.value?i("div",{class:"appearance-wrapper"},[i("label",{class:"appearance-title",for:"appearance-switch"},n.value),i(u9)]):null}});const as="VUEPRESS_THEME_COLOR";var W4=S({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const t=(n="")=>{const r=document.documentElement.classList,o=rt(e.themeColor);if(!n){localStorage.removeItem(as),r.remove(...o);return}r.remove(...o.filter(s=>s!==n)),r.add(n),localStorage.setItem(as,n)};return pe(()=>{const n=localStorage.getItem(as);n&&t(n)}),()=>i("ul",{id:"theme-color-picker"},[i("li",i("span",{class:"theme-color",onClick:()=>t()})),er(e.themeColor).map(([n,r])=>i("li",i("span",{style:{background:r},onClick:()=>t(n)})))])}});const Mn=L8.enableThemeColor==="true",K4=Mn?xc(er(L8).filter(([e])=>e.startsWith("theme-"))):{};var Y4=S({name:"ThemeColor",setup(){const e=le(),t=C(()=>e.value.outlookLocales.themeColor);return()=>Mn?i("div",{class:"theme-color-wrapper"},[i("label",{class:"theme-color-title",for:"theme-color-picker"},t.value),i(W4,{themeColor:K4})]):null}}),p9=S({name:"ToggleFullScreenButton",setup(){const e=le(),{isSupported:t,isFullscreen:n,toggle:r}=w8(),o=C(()=>e.value.outlookLocales.fullscreen);return()=>t?i("div",{class:"full-screen-wrapper"},[i("label",{class:"full-screen-title",for:"full-screen-switch"},o.value),i("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:n.value,onClick:()=>r()},n.value?i(a9):i(i9))]):null}}),d9=S({name:"OutlookSettings",setup(){const e=sn(),t=rr(),n=C(()=>!t.value&&e.value.fullscreen);return()=>i(Oo,()=>[Mn?i(Y4):null,i(G4),n.value?i(p9):null])}}),J4=S({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:t,slots:n}){const r=ae(),{isMobile:o}=Nr(),s=Te(),E=ya(s);return pe(()=>{s.value=document.body,re(o,l=>{!l&&e.show&&(E.value=!1,t("close"))}),re(()=>r.value.path,()=>{E.value=!1,t("close")})}),bn(()=>{E.value=!1}),()=>i(en,{name:"fade",onEnter:()=>{E.value=!0},onAfterLeave:()=>{E.value=!1}},()=>{var l,c;return e.show?i("div",{id:"nav-screen"},i("div",{class:"vp-nav-screen-container"},[(l=n.before)==null?void 0:l.call(n),i(U4),i("div",{class:"vp-outlook-wrapper"},i(d9)),(c=n.after)==null?void 0:c.call(n)])):null})}}),Q4=S({name:"NavbarBrand",setup(){const e=Nt(),t=kr(),n=le(),r=C(()=>n.value.home||e.value),o=C(()=>t.value.title),s=C(()=>n.value.navTitle??o.value),E=C(()=>n.value.logo?Ie(n.value.logo):null),l=C(()=>n.value.logoDark?Ie(n.value.logoDark):null);return()=>i(ke,{to:r.value,class:"vp-brand"},()=>[E.value?i("img",{class:["vp-nav-logo",{light:!!l.value}],src:E.value,alt:o.value}):null,l.value?i("img",{class:["vp-nav-logo dark"],src:l.value,alt:o.value}):null,s.value?i("span",{class:["vp-site-name",{"hide-in-pad":E.value&&n.value.hideSiteNameOnMobile!==!1}]},s.value):null])}}),X4=S({name:"NavbarLinks",setup(){const e=o9();return()=>e.value.length?i("nav",{class:"vp-nav-links"},e.value.map(t=>i("div",{class:"nav-item hide-in-mobile"},"children"in t?i(j4,{config:t}):i(Ye,{config:t})))):null}}),Z4=S({name:"RepoLink",components:{BitbucketIcon:va,GiteeIcon:Aa,GitHubIcon:da,GitLabIcon:Ba,SourceIcon:fa},setup(){const e=z4();return()=>e.value?i("div",{class:"nav-item vp-repo"},i("a",{class:"vp-repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},i(tt(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const B9=({active:e=!1},{emit:t})=>i("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>t("toggle")},i("span",[i("span",{class:"vp-top"}),i("span",{class:"vp-middle"}),i("span",{class:"vp-bottom"})]));B9.displayName="ToggleNavbarButton";var ep=B9;const Fs=(e,{emit:t})=>i("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},i("span",{class:"icon"}));Fs.displayName="ToggleSidebarButton",Fs.emits=["toggle"];var tp=Fs,np=S({name:"OutlookButton",setup(){const{isSupported:e}=w8(),t=sn(),n=rr(),r=ae(),{canToggle:o}=Hr(),s=N(!1),E=C(()=>!n.value&&t.value.fullscreen&&e);return re(()=>r.value.path,()=>{s.value=!1}),()=>o.value||E.value||Mn?i("div",{class:"nav-item hide-in-mobile"},o.value&&!E.value&&!Mn?i(u9):E.value&&!o.value&&!Mn?i(p9):i("button",{type:"button",class:["outlook-button",{open:s.value}],tabindex:"-1","aria-hidden":!0},[i(c9),i("div",{class:"outlook-dropdown"},i(d9))])):null}}),rp=S({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:n}){const r=le(),{isMobile:o}=Nr(),s=N(!1),E=C(()=>{const{navbarAutoHide:p="mobile"}=r.value;return p!=="none"&&(p==="always"||o.value)}),l=C(()=>r.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:Q4,Language:ls,Links:X4,Repo:Z4,Outlook:np,Search:mt("Docsearch")?tt("Docsearch"):mt("SearchBox")?tt("SearchBox"):ls},a=p=>c[p]??(mt(p)?tt(p):ls);return()=>{var p,d,B,v,m,g;return[i("header",{id:"navbar",class:["vp-navbar",{"auto-hide":E.value,"hide-icon":r.value.navbarIcon===!1}]},[i("div",{class:"vp-navbar-start"},[i(tp,{onToggle:()=>{s.value&&(s.value=!1),t("toggleSidebar")}}),(p=n.startBefore)==null?void 0:p.call(n),(l.value.start||[]).map(D=>i(a(D))),(d=n.startAfter)==null?void 0:d.call(n)]),i("div",{class:"vp-navbar-center"},[(B=n.centerBefore)==null?void 0:B.call(n),(l.value.center||[]).map(D=>i(a(D))),(v=n.centerAfter)==null?void 0:v.call(n)]),i("div",{class:"vp-navbar-end"},[(m=n.endBefore)==null?void 0:m.call(n),(l.value.end||[]).map(D=>i(a(D))),(g=n.endAfter)==null?void 0:g.call(n),i(ep,{active:s.value,onToggle:()=>{s.value=!s.value}})])]),i(J4,{show:s.value,onClose:()=>{s.value=!1}},{before:()=>{var D;return(D=n.screenTop)==null?void 0:D.call(n)},after:()=>{var D;return(D=n.screenBottom)==null?void 0:D.call(n)}})]}}}),op=S({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=gt();return()=>[Za(e.config,{class:["vp-sidebar-link",`vp-sidebar-${e.config.type}`,{active:Yn(t,e.config,!0)}],exact:!0}),e9(e.config.children)]}}),sp=S({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const n=gt(),r=C(()=>Yn(n,e.config)),o=C(()=>Yn(n,e.config,!0));return()=>{const{collapsible:s,children:E=[],icon:l,prefix:c,link:a,text:p}=e.config;return i("section",{class:"vp-sidebar-group"},[i(s?"button":"p",{class:["vp-sidebar-heading",{clickable:s||a,exact:o.value,active:r.value}],...s?{type:"button",onClick:()=>t("toggle"),onKeydown:d=>{d.key==="Enter"&&t("toggle")}}:{}},[i(We,{icon:l}),a?i(Ye,{class:"vp-sidebar-title",config:{text:p,link:a},noExternalLinkIcon:!0}):i("span",{class:"vp-sidebar-title"},p),s?i("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!s?i(A9,{key:c,config:E}):null])}}}),A9=S({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=gt(),n=N(-1),r=o=>{n.value=o===n.value?-1:o};return re(()=>t.path,()=>{const o=e.config.findIndex(s=>Xa(t,s));n.value=o},{immediate:!0,flush:"post"}),()=>i("ul",{class:"vp-sidebar-links"},e.config.map((o,s)=>i("li",o.type==="group"?i(sp,{config:o,open:s===n.value,onToggle:()=>r(s)}):i(op,{config:o}))))}}),Ep=S({name:"SideBar",slots:Object,setup(e,{slots:t}){const n=gt(),r=le(),o=F8(),s=Te();return pe(()=>{re(()=>n.hash,E=>{const l=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${E}"]`);if(!l)return;const{top:c,height:a}=s.value.getBoundingClientRect(),{top:p,height:d}=l.getBoundingClientRect();p<c?l.scrollIntoView(!0):p+d>c+a&&l.scrollIntoView(!1)},{immediate:!0})}),()=>{var E,l,c;return i("aside",{ref:s,id:"sidebar",class:["vp-sidebar",{"hide-icon":r.value.sidebarIcon===!1}]},[(E=t.top)==null?void 0:E.call(t),((l=t.default)==null?void 0:l.call(t))||i(A9,{config:o.value}),(c=t.bottom)==null?void 0:c.call(t)])}}}),V8=S({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const n=ze(),r=ae(),o=he(),s=le(),{isMobile:E,isPC:l}=Nr(),[c,a]=Ls(!1),[p,d]=Ls(!1),B=F8(),v=N(!1),m=C(()=>e.noNavbar||o.value.navbar===!1||s.value.navbar===!1?!1:!!(r.value.title||s.value.logo||s.value.repo||s.value.navbar)),g=C(()=>e.noSidebar?!1:o.value.sidebar!==!1&&B.value.length!==0&&!o.value.home),D=C(()=>e.noToc||o.value.home?!1:o.value.toc||s.value.toc!==!1&&o.value.toc!==!1),h={x:0,y:0},_=R=>{h.x=R.changedTouches[0].clientX,h.y=R.changedTouches[0].clientY},L=R=>{const $=R.changedTouches[0].clientX-h.x,I=R.changedTouches[0].clientY-h.y;Math.abs($)>Math.abs(I)*1.5&&Math.abs($)>40&&($>0&&h.x<=80?a(!0):a(!1))},F=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let q=0;return xe("scroll",Zc(()=>{const R=F();R<=58||R<q?v.value=!1:q+200<R&&!c.value&&(v.value=!0),q=R},300,!0)),re(E,R=>{R||a(!1)}),pe(()=>{const R=ya(document.body);re(c,I=>{R.value=I});const $=n.afterEach(()=>{a(!1)});bn(()=>{R.value=!1,$()})}),()=>i(mt("GlobalEncrypt")?tt("GlobalEncrypt"):Ea,()=>i("div",{class:["theme-container",{"no-navbar":!m.value,"no-sidebar":!g.value&&!(t.sidebar||t.sidebarTop||t.sidebarBottom),"has-toc":D.value,"hide-navbar":v.value,"sidebar-collapsed":!E.value&&!l.value&&p.value,"sidebar-open":E.value&&c.value},e.containerClass,o.value.containerClass||""],onTouchStart:_,onTouchEnd:L},[m.value?i(rp,{onToggleSidebar:()=>a()},{startBefore:()=>{var R;return(R=t.navbarStartBefore)==null?void 0:R.call(t)},startAfter:()=>{var R;return(R=t.navbarStartAfter)==null?void 0:R.call(t)},centerBefore:()=>{var R;return(R=t.navbarCenterBefore)==null?void 0:R.call(t)},centerAfter:()=>{var R;return(R=t.navbarCenterAfter)==null?void 0:R.call(t)},endBefore:()=>{var R;return(R=t.navbarEndBefore)==null?void 0:R.call(t)},endAfter:()=>{var R;return(R=t.navbarEndAfter)==null?void 0:R.call(t)},screenTop:()=>{var R;return(R=t.navScreenTop)==null?void 0:R.call(t)},screenBottom:()=>{var R;return(R=t.navScreenBottom)==null?void 0:R.call(t)}}):null,i(en,{name:"fade"},()=>c.value?i("div",{class:"vp-sidebar-mask",onClick:()=>a(!1)}):null),i(en,{name:"fade"},()=>E.value?null:i("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},i("span",{class:["arrow",p.value?"end":"start"]}))),i(Ep,{},{...t.sidebar?{default:()=>t.sidebar()}:{},top:()=>{var R;return(R=t.sidebarTop)==null?void 0:R.call(t)},bottom:()=>{var R;return(R=t.sidebarBottom)==null?void 0:R.call(t)}}),t.default(),i(H4)]))}}),me=S({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:t}){const n=o=>{o.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,o.style.transform="translateY(-20px)",o.style.opacity="0"},r=o=>{o.style.transform="translateY(0)",o.style.opacity="1"};return()=>i(e.type==="single"?en:T1,{name:"drop",appear:e.appear,onAppear:n,onAfterAppear:r,onEnter:n,onAfterEnter:r,onBeforeLeave:n},()=>t.default())}});const Vs=({custom:e})=>i(A8,{class:["theme-hope-content",{custom:e}]});Vs.displayName="MarkdownContent",Vs.props={custom:Boolean};var S8=Vs;const v9=()=>i(se,{name:"author"},()=>i("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));v9.displayName="AuthorIcon";const f9=()=>i(se,{name:"calendar"},()=>i("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));f9.displayName="CalendarIcon";const m9=()=>i(se,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));m9.displayName="CategoryIcon";const h9=()=>i(se,{name:"eye"},()=>i("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));h9.displayName="EyeIcon";const b9=()=>i(se,{name:"fire"},()=>i("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));b9.displayName="FireIcon";const _9=()=>i(se,{name:"print"},()=>i("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));_9.displayName="PrintIcon";const g9=()=>i(se,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));g9.displayName="TagIcon";const y9=()=>i(se,{name:"timer"},()=>i("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));y9.displayName="TimerIcon";const C9=()=>i(se,{name:"word"},()=>[i("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),i("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);C9.displayName="WordIcon";const Ht=()=>{const e=le();return C(()=>e.value.metaLocales)};var lp=S({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const t=Ht();return()=>e.author.length?i("span",{class:"page-author-info","aria-label":`${t.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(v9),i("span",e.author.map(n=>n.url?i("a",{class:"page-author-item",href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name):i("span",{class:"page-author-item"},n.name))),i("span",{property:"author",content:e.author.map(n=>n.name).join(", ")})]):null}}),ip=S({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const t=ze(),n=ae(),r=Ht(),o=(s,E="")=>{E&&n.value.path!==E&&(s.preventDefault(),t.push(E))};return()=>e.category.length?i("span",{class:"page-category-info","aria-label":`${r.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(m9),e.category.map(({name:s,path:E})=>i("span",{class:["page-category-item",{[`category${So(s,9)}`]:!e.pure,clickable:E}],role:E?"navigation":"",onClick:l=>o(l,E)},s)),i("meta",{property:"articleSection",content:e.category.map(({name:s})=>s).join(",")})]):null}}),ap=S({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const t=d8(),n=Ht();return()=>e.date?i("span",{class:"page-date-info","aria-label":`${n.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(f9),i("span",i(Oo,()=>e.localizedDate||e.date.toLocaleDateString(t.value))),i("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),cp=S({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=Ht();return()=>e.isOriginal?i("span",{class:"page-original-info"},t.value.origin):null}}),up=S({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(e){const t=gt(),n=Ht(),r=Te(),o=N(0);return _a(r,()=>{const s=r.value.textContent;s&&!isNaN(Number(s))&&(o.value=Number(s))},{childList:!0}),()=>e.pageview?i("span",{class:"page-pageview-info","aria-label":`${n.value.views}${e.pure?"":"🔢"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(o.value<1e3?h9:b9),i("span",{ref:r,id:"ArtalkPV",class:"waline-pageview-count","data-path":ie(e.pageview)?e.pageview:t.path},"...")]):null}}),pp=S({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=Ht(),n=C(()=>{if(!e.readingTime)return null;const{minutes:r}=e.readingTime;return r<1?"PT1M":`PT${Math.round(r)}M`});return()=>{var r,o;return(r=e.readingTimeLocale)!=null&&r.time?i("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(y9),i("span",(o=e.readingTimeLocale)==null?void 0:o.time),i("meta",{property:"timeRequired",content:n.value})]):null}}}),dp=S({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const t=ze(),n=ae(),r=Ht(),o=(s,E="")=>{E&&n.value.path!==E&&(s.preventDefault(),t.push(E))};return()=>e.tag.length?i("span",{class:"page-tag-info","aria-label":`${r.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(g9),e.tag.map(({name:s,path:E})=>i("span",{class:["page-tag-item",{[`tag${So(s,9)}`]:!e.pure,clickable:E}],role:E?"navigation":"",onClick:l=>o(l,E)},s)),i("meta",{property:"keywords",content:e.tag.map(({name:s})=>s).join(",")})]):null}}),Bp=S({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=Ht();return()=>{var n,r,o;return(n=e.readingTimeLocale)!=null&&n.words?i("span",{class:"page-word-info","aria-label":`${t.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(C9),i("span",(r=e.readingTimeLocale)==null?void 0:r.words),i("meta",{property:"wordCount",content:(o=e.readingTime)==null?void 0:o.words})]):null}}}),D9=S({name:"PageInfo",components:{AuthorInfo:lp,CategoryInfo:ip,DateInfo:ap,OriginalInfo:cp,PageViewInfo:up,ReadingTimeInfo:pp,TagInfo:dp,WordInfo:Bp},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const t=rr();return()=>e.items?i("div",{class:"page-info"},e.items.map(n=>i(tt(`${n}Info`),{...e.info,pure:t.value}))):null}}),Ap=S({name:"PrintButton",setup(){const e=sn(),t=le();return()=>e.value.print===!1?null:i("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},i(_9))}});const vp=({title:e,level:t,slug:n})=>i(ke,{to:`#${n}`,class:["toc-link",`level${t}`]},()=>e),Ss=(e,t)=>{const n=gt();return e.length&&t>0?i("ul",{class:"toc-list"},e.map(r=>{const o=Ss(r.children,t-1);return[i("li",{class:["toc-item",{active:g8(n,`#${r.slug}`)}]},vp(r)),o?i("li",o):null]})):null};var w9=S({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:t}){const n=gt(),r=ae(),o=Ht(),s=Te(),E=N("-1.7rem"),l=a=>{var p;(p=s.value)==null||p.scrollTo({top:a,behavior:"smooth"})},c=()=>{if(s.value){const a=document.querySelector(".toc-item.active");a?E.value=`${a.getBoundingClientRect().top-s.value.getBoundingClientRect().top+s.value.scrollTop}px`:E.value="-1.7rem"}else E.value="-1.7rem"};return pe(()=>{re(()=>n.hash,a=>{if(s.value){const p=document.querySelector(`#toc a.toc-link[href$="${a}"]`);if(!p)return;const{top:d,height:B}=s.value.getBoundingClientRect(),{top:v,height:m}=p.getBoundingClientRect();v<d?l(s.value.scrollTop+v-d):v+m>d+B&&l(s.value.scrollTop+v+m-d-B)}}),re(()=>n.fullPath,()=>c(),{flush:"post",immediate:!0})}),()=>{var a,p;const d=e.items.length?Ss(e.items,e.headerDepth):r.value.headers?Ss(r.value.headers,e.headerDepth):null;return d?i("div",{class:"toc-place-holder"},[i("aside",{id:"toc"},[(a=t.before)==null?void 0:a.call(t),i("div",{class:"toc-header"},[o.value.toc,i(Ap)]),i("div",{class:"toc-wrapper",ref:s},[d,i("div",{class:"toc-marker",style:{top:E.value}})]),(p=t.after)==null?void 0:p.call(t)])]):null}}}),k8=S({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=ae(),n=le(),r=Te(),o=({target:s})=>{const E=document.querySelector(s.hash);if(E){const l=()=>{E.removeAttribute("tabindex"),E.removeEventListener("blur",l)};E.setAttribute("tabindex","-1"),E.addEventListener("blur",l),E.focus(),window.scrollTo(0,0)}};return pe(()=>{re(()=>t.value.path,()=>r.value.focus())}),()=>[i("span",{ref:r,tabindex:"-1"}),i("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:o},n.value.routeLocales.skipToContent)]}});let cs=null,so=null;const fp={wait:()=>cs,pending:()=>{cs=new Promise(e=>so=e)},resolve:()=>{so==null||so(),cs=null,so=null}},I9=()=>fp;var T9=S({name:"FadeSlideY",slots:Object,setup(e,{slots:t}){const{resolve:n,pending:r}=I9();return()=>i(en,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:r},()=>{var o;return(o=t.default)==null?void 0:o.call(t)})}});const mp=(e,t)=>{const n=e.replace(t,"/").split("/"),r=[];let o=p8(t);return n.forEach((s,E)=>{E!==n.length-1?(o+=`${s}/`,r.push({link:o,name:s||"Home"})):s!==""&&(o+=s,r.push({link:o,name:s}))}),r},P9=(e,{slots:t})=>{var n,r;const{bgImage:o,bgImageDark:s,bgImageStyle:E,color:l,description:c,image:a,imageDark:p,header:d,features:B=[]}=e;return i("div",{class:"vp-feature-wrapper"},[o?i("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${o})`},E]}):null,s?i("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},E]}):null,i("div",{class:"vp-feature",style:l?{color:l}:{}},[((n=t.image)==null?void 0:n.call(t,e))||[a?i("img",{class:["vp-feature-image",{light:p}],src:Ie(a),alt:d}):null,p?i("img",{class:"vp-feature-image dark",src:Ie(p),alt:d}):null],((r=t.info)==null?void 0:r.call(t,e))||[d?i("h2",{class:"vp-feature-header"},d):null,c?i("p",{class:"vp-feature-description",innerHTML:c}):null],B.length?i("div",{class:"vp-features"},B.map(({icon:v,title:m,details:g,link:D})=>{const h=[i("h3",{class:"vp-feature-title"},[i(We,{icon:v}),i("span",{innerHTML:m})]),i("p",{class:"vp-feature-details",innerHTML:g})];return D?_o(D)?i("a",{class:"vp-feature-item link",href:D,role:"navigation","aria-label":m,target:"_blank"},h):i(ke,{class:"vp-feature-item link",to:D,role:"navigation","aria-label":m},()=>h):i("div",{class:"vp-feature-item"},h)})):null])])};P9.displayName="FeaturePanel";var vl=P9,hp=S({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const n=he(),r=kr(),o=C(()=>n.value.heroFullScreen??!1),s=C(()=>{const{heroText:a,tagline:p}=n.value;return{text:a??r.value.title??"Hello",tagline:p??r.value.description??"",isFullScreen:o.value}}),E=C(()=>{const{heroText:a,heroImage:p,heroImageDark:d,heroAlt:B,heroImageStyle:v}=n.value;return{image:p?Ie(p):null,imageDark:d?Ie(d):null,heroStyle:v,alt:B||a||"hero image",isFullScreen:o.value}}),l=C(()=>{const{bgImage:a,bgImageDark:p,bgImageStyle:d}=n.value;return{image:kt(a)?Ie(a):null,imageDark:kt(p)?Ie(p):null,bgStyle:d,isFullScreen:o.value}}),c=C(()=>n.value.actions??[]);return()=>{var a,p,d;return i("header",{class:["vp-hero-info-wrapper",{fullscreen:o.value}]},[((a=t.heroBg)==null?void 0:a.call(t,l.value))||[l.value.image?i("div",{class:["vp-hero-mask",{light:l.value.imageDark}],style:[{"background-image":`url(${l.value.image})`},l.value.bgStyle]}):null,l.value.imageDark?i("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${l.value.imageDark})`},l.value.bgStyle]}):null],i("div",{class:"vp-hero-info"},[((p=t.heroImage)==null?void 0:p.call(t,E.value))||i(me,{appear:!0,type:"group"},()=>[E.value.image?i("img",{key:"light",class:["vp-hero-image",{light:E.value.imageDark}],style:E.value.heroStyle,src:E.value.image,alt:E.value.alt}):null,E.value.imageDark?i("img",{key:"dark",class:"vp-hero-image dark",style:E.value.heroStyle,src:E.value.imageDark,alt:E.value.alt}):null]),((d=t.heroInfo)==null?void 0:d.call(t,s.value))??i("div",{class:"vp-hero-infos"},[s.value.text?i(me,{appear:!0,delay:.04},()=>i("h1",{id:"main-title"},s.value.text)):null,s.value.tagline?i(me,{appear:!0,delay:.08},()=>i("p",{class:"vp-description",innerHTML:s.value.tagline})):null,c.value.length?i(me,{appear:!0,delay:.12},()=>i("p",{class:"vp-actions"},c.value.map(B=>i(Ye,{class:["vp-action",B.type||"default"],config:B,noExternalLinkIcon:!0})))):null])])])}}});const L9=(e,{slots:t})=>{var n,r,o;const{bgImage:s,bgImageDark:E,bgImageStyle:l,color:c,description:a,image:p,imageDark:d,header:B,highlights:v=[],type:m="un-order"}=e;return i("div",{class:"vp-highlight-wrapper",style:c?{color:c}:{}},[s?i("div",{class:["vp-highlight-bg",{light:E}],style:[{"background-image":`url(${s})`},l]}):null,E?i("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${E})`},l]}):null,i("div",{class:"vp-highlight"},[((n=t.image)==null?void 0:n.call(t,e))||[p?i("img",{class:["vp-highlight-image",{light:d}],src:Ie(p),alt:B}):null,d?i("img",{class:"vp-highlight-image dark",src:Ie(d),alt:B}):null],((r=t.info)==null?void 0:r.call(t,e))||[i("div",{class:"vp-highlight-info-wrapper"},i("div",{class:"vp-highlight-info"},[B?i("h2",{class:"vp-highlight-header",innerHTML:B}):null,a?i("p",{class:"vp-highlight-description",innerHTML:a}):null,((o=t.highlights)==null?void 0:o.call(t,v))||i(m==="order"?"ol":m==="no-order"?"dl":"ul",{class:"vp-highlights"},v.map(({icon:g,title:D,details:h,link:_})=>{const L=[i(m==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[g?i(We,{class:"vp-highlight-icon",icon:g}):null,i("span",{innerHTML:D})]),h?i(m==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:h}):null];return i(m==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:_}]},_?Fc(_)?i("a",{class:"vp-highlight-item link",href:_,role:"navigation","aria-label":D,target:"_blank"},L):i(ke,{class:"vp-highlight-item link",to:_,role:"navigation","aria-label":D},()=>L):i("div",{class:"vp-highlight-item"},L))}))]))]])])};L9.displayName="HighlightPanel";var bp=L9,_p=S({name:"HomePage",slots:Object,setup(e,{slots:t}){const n=rr(),r=he(),o=C(()=>{const{features:E}=r.value;return K(E)?E:null}),s=C(()=>{const{highlights:E}=r.value;return K(E)?E:null});return()=>{var E,l,c,a;return i("main",{id:"main-content",class:["vp-project-home ",{pure:n.value}],"aria-labelledby":r.value.heroText===null?"":"main-title"},[(E=t.top)==null?void 0:E.call(t),i(hp),((l=s.value)==null?void 0:l.map(p=>"features"in p?i(vl,p):i(bp,p)))||(o.value?i(me,{appear:!0,delay:.24},()=>i(vl,{features:o.value})):null),(c=t.center)==null?void 0:c.call(t),i(me,{appear:!0,delay:.32},()=>i(S8)),(a=t.bottom)==null?void 0:a.call(t)])}}}),gp=S({name:"BreadCrumb",setup(){const e=ze(),t=ae(),n=Nt(),r=he(),o=le(),s=Te([]),E=C(()=>(r.value.breadcrumb||r.value.breadcrumb!==!1&&o.value.breadcrumb!==!1)&&s.value.length>1),l=C(()=>r.value.breadcrumbIcon||r.value.breadcrumbIcon!==!1&&o.value.breadcrumbIcon!==!1),c=()=>{const a=e.getRoutes(),p=mp(t.value.path,n.value).map(({link:d,name:B})=>{const v=a.find(m=>m.path===d);if(v){const{meta:m,path:g}=Kn(e,v.path);return{title:m[ge.shortTitle]||m[ge.title]||B,icon:m[ge.icon],path:g}}return null}).filter(d=>d!==null);p.length>1&&(s.value=p)};return pe(()=>{c(),re(()=>t.value.path,c)}),()=>i("nav",{class:["vp-breadcrumb",{disable:!E.value}]},E.value?i("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},s.value.map((a,p)=>i("li",{class:{"is-active":s.value.length-1===p},property:"itemListElement",typeof:"ListItem"},[i(ke,{to:a.path,property:"item",typeof:"WebPage"},()=>[l.value?i(We,{icon:a.icon}):null,i("span",{property:"name"},a.title||"Unknown")]),i("meta",{property:"position",content:p+1})]))):[])}});const fl=e=>{const t=ze();return e===!1?!1:ie(e)?$n(t,e,!0):Sr(e)?e:null},ks=(e,t,n)=>{const r=e.findIndex(o=>o.link===t);if(r!==-1){const o=e[r+n];return o!=null&&o.link?o:null}for(const o of e)if(o.children){const s=ks(o.children,t,n);if(s)return s}return null};var yp=S({name:"PageNav",setup(){const e=le(),t=he(),n=F8(),r=ae(),o=Mr(),s=C(()=>{const l=fl(t.value.prev);return l===!1?null:l||(e.value.prevLink===!1?null:ks(n.value,r.value.path,-1))}),E=C(()=>{const l=fl(t.value.next);return l===!1?null:l||(e.value.nextLink===!1?null:ks(n.value,r.value.path,1))});return xe("keydown",l=>{l.altKey&&(l.key==="ArrowRight"?E.value&&(o(E.value.link),l.preventDefault()):l.key==="ArrowLeft"&&s.value&&(o(s.value.link),l.preventDefault()))}),()=>s.value||E.value?i("nav",{class:"vp-page-nav"},[s.value?i(Ye,{class:"prev",config:s.value},()=>{var l,c;return[i("div",{class:"hint"},[i("span",{class:"arrow start"}),e.value.metaLocales.prev]),i("div",{class:"link"},[i(We,{icon:(l=s.value)==null?void 0:l.icon}),(c=s.value)==null?void 0:c.text])]}):null,E.value?i(Ye,{class:"next",config:E.value},()=>{var l,c;return[i("div",{class:"hint"},[e.value.metaLocales.next,i("span",{class:"arrow end"})]),i("div",{class:"link"},[(l=E.value)==null?void 0:l.text,i(We,{icon:(c=E.value)==null?void 0:c.icon})])]}):null]):null}});const Cp={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Dp=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:r,editLinkPattern:o})=>{if(!r)return null;const s=pa(e);let E;return o?E=o:s!==null&&(E=Cp[s]),E?E.replace(/:repo/,_n(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Vi(`${p8(n)}/${r}`)):null},wp=()=>{const e=le(),t=ae(),n=he();return C(()=>{const{repo:r,docsRepo:o=r,docsBranch:s="main",docsDir:E="",editLink:l,editLinkPattern:c=""}=e.value;if(!(n.value.editLink??l??!0)||!o)return null;const a=Dp({docsRepo:o,docsBranch:s,docsDir:E,editLinkPattern:c,filePathRelative:t.value.filePathRelative});return a?{text:e.value.metaLocales.editLink,link:a}:null})},Ip=()=>{const e=kr(),t=le(),n=ae(),r=he();return C(()=>{var o,s;return!(r.value.lastUpdated??t.value.lastUpdated??!0)||!((o=n.value.git)!=null&&o.updatedTime)?null:new Date((s=n.value.git)==null?void 0:s.updatedTime).toLocaleString(e.value.lang)})},Tp=()=>{const e=le(),t=ae(),n=he();return C(()=>{var r;return n.value.contributors??e.value.contributors??!0?((r=t.value.git)==null?void 0:r.contributors)??null:null})};var Pp=S({name:"PageTitle",setup(){const e=ae(),t=he(),n=le(),{info:r,items:o}=O4();return()=>i("div",{class:"vp-page-title"},[i("h1",[n.value.titleIcon===!1?null:i(We,{icon:t.value.icon}),e.value.title]),i(D9,{info:r.value,...o.value===null?{}:{items:o.value}}),i("hr")])}});const R9=()=>i(se,{name:"edit"},()=>[i("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),i("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);R9.displayName="EditIcon";var Lp=S({name:"PageMeta",setup(){const e=le(),t=wp(),n=Ip(),r=Tp();return()=>{const{metaLocales:o}=e.value;return i("footer",{class:"page-meta"},[t.value?i("div",{class:"meta-item edit-link"},i(Ye,{class:"label",config:t.value},{before:()=>i(R9)})):null,i("div",{class:"meta-item git-info"},[n.value?i("div",{class:"update-time"},[i("span",{class:"label"},`${o.lastUpdated}: `),i(Oo,()=>i("span",{class:"info"},n.value))]):null,r.value&&r.value.length?i("div",{class:"contributors"},[i("span",{class:"label"},`${o.contributors}: `),r.value.map(({email:s,name:E},l)=>[i("span",{class:"contributor",title:`email: ${s}`},E),l!==r.value.length-1?",":""])]):null])])}}}),Rp=S({name:"NormalPage",slots:Object,setup(e,{slots:t}){const n=he(),r=ae(),{isDarkmode:o}=Hr(),s=le(),E=C(()=>n.value.toc||n.value.toc!==!1&&s.value.toc!==!1);return()=>i("main",{id:"main-content",class:"vp-page"},i(mt("LocalEncrypt")?tt("LocalEncrypt"):Ea,()=>{var l,c,a,p;return[(l=t.top)==null?void 0:l.call(t),n.value.cover?i("img",{class:"page-cover",src:Ie(n.value.cover),alt:r.value.title,"no-view":""}):null,i(gp),i(Pp),E.value?i(w9,{headerDepth:n.value.headerDepth??s.value.headerDepth??2},{before:()=>{var d;return(d=t.tocBefore)==null?void 0:d.call(t)},after:()=>{var d;return(d=t.tocAfter)==null?void 0:d.call(t)}}):null,(c=t.contentBefore)==null?void 0:c.call(t),i(S8),(a=t.contentAfter)==null?void 0:a.call(t),i(Lp),i(yp),mt("CommentService")?i(tt("CommentService"),{darkmode:o.value}):null,(p=t.bottom)==null?void 0:p.call(t)]}))}}),Op=S({name:"Layout",setup(){const e=sn(),t=le(),n=ae(),r=he(),{isMobile:o}=Nr(),s=C(()=>{var E,l;return((E=t.value.blog)==null?void 0:E.sidebarDisplay)||((l=e.value.blog)==null?void 0:l.sidebarDisplay)||"mobile"});return()=>[i(k8),i(V8,{},{default:()=>r.value.home?i(_p):i(T9,()=>i(Rp,{key:n.value.path})),...s.value!=="none"?{navScreenBottom:()=>i(tt("BloggerInfo"))}:{},...!o.value&&s.value==="always"?{sidebar:()=>i(tt("BloggerInfo"))}:{}})]}}),Fp=S({name:"NotFoundHint",setup(){const e=le(),t=()=>{const n=e.value.routeLocales.notFoundMsg;return n[Math.floor(Math.random()*n.length)]};return()=>i("div",{class:"not-found-hint"},[i("p",{class:"error-code"},"404"),i("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),i("p",{class:"error-hint"},t())])}}),Vp=S({name:"NotFound",slots:Object,setup(e,{slots:t}){const n=Nt(),r=le(),{navigate:o}=ws({to:r.value.home??n.value});return()=>[i(k8),i(V8,{noSidebar:!0},()=>{var s;return i("main",{id:"main-content",class:"vp-page not-found"},((s=t.default)==null?void 0:s.call(t))||[i(Fp),i("div",{class:"actions"},[i("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},r.value.routeLocales.back),i("button",{type:"button",class:"action-button",onClick:()=>o()},r.value.routeLocales.home)])])})]}});const Sp={GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},kp={category:{"/":{path:"/category/",map:{}}},tag:{"/":{path:"/tag/",map:{}}}},xp={article:{"/":{path:"/article/",keys:["v-2e41a181","v-a51a6c2e","v-7da5f727","v-000b162b","v-d3f65882","v-61015d2d","v-fac6c888","v-4586dce6","v-0791f4a4","v-750d807f","v-bd47f06e","v-168f6cf5","v-4e2ba3b9","v-3aa5140e","v-bc0cc008","v-429b791e","v-590f1733","v-20c5aa01","v-3b2ec64e","v-31872f2f","v-74af3aa5","v-4924f29d","v-3ab229c8","v-c18e5fb6","v-60a2d43e","v-75f5f7f8","v-954d91fe","v-f2ce5f74","v-160124f8","v-176bc0da","v-01a225a0","v-28c21826","v-7ca3b6cc","v-bcf14eb0","v-2db2b064","v-4120dc9f","v-f6610eae","v-49db4735","v-2b8b9fdf","v-6bb85300","v-46d10d3e","v-117967e4","v-7fd019d2","v-50760880","v-676d5ede","v-fa2a96d0","v-ee3cab44","v-01def838","v-b760b8b6","v-40355436","v-10146b6e","v-0c3dd955","v-7dd86076","v-7665fb42","v-3ec97590","v-b990bda8","v-5c9d16cd","v-1621c87a","v-6379fee4","v-369d4408","v-4620b9dd","v-6fe02bb0","v-c3a2a69c","v-12e7c04b","v-382b43ec","v-9c1c004a","v-7d26b93f","v-44c66a70","v-2d234042","v-e873d900","v-1160b200","v-2922241c","v-cf57e28a","v-57c30dab","v-33271e12","v-3d15b942","v-34cb1ca4","v-546a013c","v-e2c137d4","v-1856cc8d","v-3d29dfdc","v-05f8870d","v-214e4128","v-13be1e3e","v-152a9a46","v-1c851524","v-563489d8","v-3bcd1164","v-210e4199","v-6f415fe0","v-6b95903e","v-7c7ea5d4","v-3fbc0cc9","v-7a12e684","v-85531764","v-ec6f06ce","v-42195c7e","v-3fa5834c","v-ff348f2c","v-190d1618","v-490b9ac4","v-cf4d09da","v-1c6067c0","v-4ed17f67","v-4aca13b8","v-e1fcb2e6","v-664dc686","v-377154b6","v-2d0c3bcd","v-79c4af16","v-af3dd876","v-f03e7622","v-48c69535","v-49eff157","v-f49a64f8","v-b3818dfc","v-450e5ed5","v-46d3234f","v-bf39abac","v-3f0b059b","v-3c0dd36e","v-b708cd52","v-a67ba00a","v-8bf0b2b6","v-c4735526","v-06d58938","v-75834753","v-4ac06eac","v-682c8701","v-09673a32","v-61011f00","v-aea96510","v-2da7eada","v-6f80895a","v-1b754024","v-35abf21c","v-6de021dc","v-903e110a","v-061618aa","v-1825afb7","v-439caf43","v-94f15b56","v-0dad4594","v-1e4e63fb","v-72c4231b","v-eb83d134","v-efef747a","v-3d6634f3","v-6f8bec3a","v-5607e1b6","v-e8eb45da","v-4ca4fa0a","v-725aaab5","v-7e8c337f","v-482461a3","v-7b142612","v-5577c31d","v-587178f6","v-39ba3dc8","v-2a9b3e5b","v-c1c61150","v-403c2dec","v-66660248","v-6eb5a85d","v-bec1e8b6","v-00a3822b","v-b3bbe49e","v-653e79e6","v-4b16f173","v-2b464b56","v-77177bb1","v-624f63b1","v-5a5b4491","v-2802af42","v-2c322832","v-24e0682c","v-0cbed1f4","v-1770c20e","v-6efd7506","v-4b2d2df5","v-ed4402e2","v-43a60d5e","v-671b1c80","v-11dcb231","v-66e72c09","v-5f3b6b11","v-39007411","v-89239f76","v-2b924bd4","v-2c8bcb29","v-15c22a10","v-7540e5f4","v-2246859a","v-a002a826","v-6ac9c13e","v-656280de","v-2cef7e20","v-4c913582","v-19d7c75d","v-1add9fd1","v-071eb094","v-33f951d0","v-359609fd","v-393b2345","v-0b3def67","v-e6852878","v-7ed7cf28","v-7b220915","v-38d5a178","v-729d120e","v-33fe848c","v-0eea4252","v-5c5f8dff","v-63dbd366","v-0dc7f30a","v-73bd7b40","v-ce6dc1d2","v-2f09909e","v-37b45762","v-15fbc74e","v-699b4472","v-1e5c5c7b","v-a86f8722","v-4a148736","v-2e5f21b8","v-051b12af","v-a85ff27a","v-d0d8ee48","v-2c30c006","v-34142867","v-88a07046","v-e36fc148","v-7084efee","v-6a8bc352","v-f269ffe0","v-35ef0eec","v-38562857","v-4077aa70","v-c47a0d6a","v-3612baf2","v-a70dce4a","v-2a657030","v-66841430","v-3b20e32d","v-072a9dce","v-2c7d9ef1","v-31f08afb","v-691b158a","v-64d7b94a","v-3e6d5320","v-3b643057","v-25efb130","v-4c82768e","v-4434b254","v-7ca6866c","v-0b5fb7fc","v-2266481e","v-7e44c719","v-5796c9f4","v-115344b1","v-7ad8adf9","v-2ef88bdf","v-2a6b3493","v-9ce71322","v-1c41a51e","v-3cae8de0","v-be070b50","v-5116e1f2","v-6e8eda1e","v-7522514e","v-125c43c8","v-731a0709","v-96a0dfea","v-87363a26","v-09c7f6b9","v-f04a8126","v-12328457","v-7c1c3600","v-460d1f69","v-67a60806","v-19281f73","v-e67be74a","v-02bc6f94","v-5e72a127","v-2775519f","v-272b322a","v-338886d1","v-41f517de","v-9e788cf6","v-4b589236","v-9954f460","v-978e2d4c","v-82648be8","v-07fbb390","v-1687afe0","v-75d7587d","v-299d697c","v-184f4da6","v-2e3eac9e"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-2e41a181","v-a51a6c2e","v-7da5f727","v-000b162b","v-d3f65882","v-61015d2d","v-fac6c888","v-4586dce6","v-0791f4a4","v-750d807f","v-bd47f06e","v-168f6cf5","v-4e2ba3b9","v-3aa5140e","v-bc0cc008","v-429b791e","v-590f1733","v-20c5aa01","v-3b2ec64e","v-31872f2f","v-74af3aa5","v-4924f29d","v-3ab229c8","v-c18e5fb6","v-60a2d43e","v-75f5f7f8","v-954d91fe","v-f2ce5f74","v-160124f8","v-176bc0da","v-01a225a0","v-28c21826","v-7ca3b6cc","v-bcf14eb0","v-2db2b064","v-4120dc9f","v-f6610eae","v-49db4735","v-2b8b9fdf","v-6bb85300","v-46d10d3e","v-117967e4","v-7fd019d2","v-50760880","v-676d5ede","v-fa2a96d0","v-ee3cab44","v-01def838","v-b760b8b6","v-40355436","v-10146b6e","v-0c3dd955","v-7dd86076","v-7665fb42","v-3ec97590","v-b990bda8","v-5c9d16cd","v-1621c87a","v-6379fee4","v-369d4408","v-4620b9dd","v-6fe02bb0","v-c3a2a69c","v-12e7c04b","v-382b43ec","v-9c1c004a","v-7d26b93f","v-44c66a70","v-2d234042","v-e873d900","v-1160b200","v-2922241c","v-cf57e28a","v-57c30dab","v-33271e12","v-3d15b942","v-34cb1ca4","v-546a013c","v-e2c137d4","v-1856cc8d","v-3d29dfdc","v-05f8870d","v-214e4128","v-13be1e3e","v-152a9a46","v-1c851524","v-563489d8","v-3bcd1164","v-210e4199","v-6f415fe0","v-6b95903e","v-7c7ea5d4","v-3fbc0cc9","v-7a12e684","v-85531764","v-ec6f06ce","v-42195c7e","v-3fa5834c","v-ff348f2c","v-190d1618","v-490b9ac4","v-cf4d09da","v-1c6067c0","v-4ed17f67","v-4aca13b8","v-e1fcb2e6","v-664dc686","v-377154b6","v-2d0c3bcd","v-79c4af16","v-af3dd876","v-f03e7622","v-48c69535","v-49eff157","v-f49a64f8","v-b3818dfc","v-450e5ed5","v-46d3234f","v-bf39abac","v-3f0b059b","v-3c0dd36e","v-b708cd52","v-a67ba00a","v-8bf0b2b6","v-c4735526","v-06d58938","v-75834753","v-4ac06eac","v-682c8701","v-09673a32","v-61011f00","v-aea96510","v-2da7eada","v-6f80895a","v-1b754024","v-35abf21c","v-6de021dc","v-903e110a","v-061618aa","v-1825afb7","v-439caf43","v-94f15b56","v-0dad4594","v-1e4e63fb","v-72c4231b","v-eb83d134","v-efef747a","v-3d6634f3","v-6f8bec3a","v-5607e1b6","v-e8eb45da","v-4ca4fa0a","v-725aaab5","v-7e8c337f","v-482461a3","v-7b142612","v-5577c31d","v-587178f6","v-39ba3dc8","v-2a9b3e5b","v-c1c61150","v-403c2dec","v-66660248","v-6eb5a85d","v-bec1e8b6","v-00a3822b","v-b3bbe49e","v-653e79e6","v-4b16f173","v-2b464b56","v-77177bb1","v-624f63b1","v-5a5b4491","v-2802af42","v-2c322832","v-24e0682c","v-0cbed1f4","v-1770c20e","v-6efd7506","v-4b2d2df5","v-ed4402e2","v-43a60d5e","v-671b1c80","v-11dcb231","v-66e72c09","v-5f3b6b11","v-39007411","v-89239f76","v-2b924bd4","v-2c8bcb29","v-15c22a10","v-7540e5f4","v-2246859a","v-a002a826","v-6ac9c13e","v-656280de","v-2cef7e20","v-4c913582","v-19d7c75d","v-1add9fd1","v-071eb094","v-33f951d0","v-359609fd","v-393b2345","v-0b3def67","v-e6852878","v-7ed7cf28","v-7b220915","v-38d5a178","v-729d120e","v-33fe848c","v-0eea4252","v-5c5f8dff","v-63dbd366","v-0dc7f30a","v-73bd7b40","v-ce6dc1d2","v-2f09909e","v-37b45762","v-15fbc74e","v-699b4472","v-1e5c5c7b","v-a86f8722","v-4a148736","v-2e5f21b8","v-051b12af","v-a85ff27a","v-d0d8ee48","v-2c30c006","v-34142867","v-88a07046","v-e36fc148","v-7084efee","v-6a8bc352","v-f269ffe0","v-35ef0eec","v-38562857","v-4077aa70","v-c47a0d6a","v-3612baf2","v-a70dce4a","v-2a657030","v-66841430","v-3b20e32d","v-072a9dce","v-2c7d9ef1","v-31f08afb","v-691b158a","v-64d7b94a","v-3e6d5320","v-3b643057","v-25efb130","v-4c82768e","v-4434b254","v-7ca6866c","v-0b5fb7fc","v-2266481e","v-7e44c719","v-5796c9f4","v-115344b1","v-7ad8adf9","v-2ef88bdf","v-2a6b3493","v-9ce71322","v-1c41a51e","v-3cae8de0","v-be070b50","v-5116e1f2","v-6e8eda1e","v-7522514e","v-125c43c8","v-731a0709","v-96a0dfea","v-87363a26","v-09c7f6b9","v-f04a8126","v-12328457","v-7c1c3600","v-460d1f69","v-67a60806","v-19281f73","v-e67be74a","v-02bc6f94","v-5e72a127","v-2775519f","v-272b322a","v-338886d1","v-41f517de","v-9e788cf6","v-4b589236","v-9954f460","v-978e2d4c","v-82648be8","v-07fbb390","v-1687afe0","v-75d7587d","v-299d697c","v-184f4da6","v-2e3eac9e"]}}},ml=N(kp),O9=(e="")=>{const t=ae(),n=ze(),r=Nt();return C(()=>{var o;const s=e||((o=he().value.blog)==null?void 0:o.key)||"";if(!s)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const E=n.getRoutes();if(!ml.value[s])throw new Error(`useBlogCategory: key ${s} is invalid`);const l=ml.value[s][r.value],c={path:l.path,map:{}};for(const a in l.map){const p=l.map[a];c.map[a]={path:p.path,items:[]};for(const d of p.keys){const B=E.find(({name:v})=>v===d);if(B){const v=Kn(n,B.path);c.map[a].items.push({path:v.path,info:v.meta})}}t.value.path===p.path&&(c.currentItems=c.map[a].items)}return c})},hl=N(xp),xo=(e="")=>{const t=ze(),n=Nt();return C(()=>{var r;const o=e||((r=he().value.blog)==null?void 0:r.key)||"";if(!o)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!hl.value[o])throw new Error(`useBlogType: key ${e} is invalid`);const s=t.getRoutes(),E=hl.value[o][n.value],l={path:E.path,items:[]};for(const c of E.keys){const a=s.find(({name:p})=>p===c);if(a){const p=Kn(t,a.path);l.items.push({path:p.path,info:p.meta})}}return l})},F9=()=>Fa({serverURL:"https://waline-comment.vuejs.press"}),$p=Object.freeze(Object.defineProperty({__proto__:null,updatePageview:F9},Symbol.toStringTag,{value:"Module"}));const Mp="/assets/hero-197a9d2d.jpg",V9=Symbol.for("categoryMap"),jr=()=>{const e=ue(V9);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},Np=()=>{const e=O9("category");ft(V9,e)},zr=()=>{const e=sn(),t=le();return C(()=>({...e.value.blog,...t.value.blog}))},S9=Symbol.for("tagMap"),qr=()=>{const e=ue(S9);if(!e)throw new Error("useTagMap() is called without provider.");return e},Hp=()=>{const e=O9("tag");ft(S9,e)},jp=e=>{const t=le();return C(()=>{const{[ge.author]:n}=e.value;return n?Ir(n):n===!1?[]:Ir(t.value.author,!1)})},zp=e=>{const t=jr();return C(()=>aa(e.value[ge.category]).map(n=>({name:n,path:t.value.map[n].path})))},qp=e=>{const t=qr();return C(()=>ca(e.value[ge.tag]).map(n=>({name:n,path:t.value.map[n].path})))},Up=e=>C(()=>{const{[ge.date]:t}=e.value;return h8(t)}),Gp=e=>{const t=Zn(e,"info"),n=zr(),r=jp(t),o=zp(t),s=qp(t),E=Up(t),l=Wa(),c=C(()=>({author:r.value,category:o.value,date:E.value,localizedDate:t.value[ge.localizedDate]||"",tag:s.value,isOriginal:t.value[ge.isOriginal]||!1,readingTime:t.value[ge.readingTime]||null,readingTimeLocale:t.value[ge.readingTime]&&l.value?Ga(t.value[ge.readingTime],l.value):null,pageview:e.path})),a=C(()=>n.value.articleInfo);return{info:c,items:a}},k9=Symbol(""),Ur=()=>{const e=ue(k9);if(!e)throw new Error("useArticles() is called without provider.");return e},Wp=()=>{const e=xo("article");ft(k9,e)},x9=Symbol(""),x8=()=>{const e=ue(x9);if(!e)throw new Error("useStars() is called without provider.");return e},Kp=()=>{const e=xo("star");ft(x9,e)},$9=Symbol(""),$8=()=>{const e=ue($9);if(!e)throw new Error("useTimelines() is called without provider.");return e},Yp=()=>{const e=xo("timeline"),t=C(()=>{const n=[];return e.value.items.forEach(({info:r,path:o})=>{const s=h8(r[ge.date]),E=s==null?void 0:s.getFullYear(),l=s?s.getMonth()+1:null,c=s==null?void 0:s.getDate();E&&l&&c&&((!n[0]||n[0].year!==E)&&n.unshift({year:E,items:[]}),n[0].items.push({date:`${l}/${c}`,info:r,path:o}))}),{...e.value,config:n.reverse()}});ft($9,t)},Jp=()=>{Wp(),Np(),Kp(),Hp(),Yp()};var Qp=S({name:"SocialMedia",setup(){const e=zr(),t=rr(),n=C(()=>{const r=e.value.medias;return r?er(r).map(([o,s])=>({name:o,icon:Sp[o],url:s})):[]});return()=>n.value.length?i("div",{class:"vp-social-medias"},n.value.map(({name:r,icon:o,url:s})=>i("a",{class:"vp-social-media",href:s,rel:"noopener noreferrer",target:"_blank","aria-label":r,...t.value?{}:{"data-balloon-pos":"up"},innerHTML:o}))):null}}),M8=S({name:"BloggerInfo",setup(){const e=zr(),t=kr(),n=le(),r=Ur(),o=jr(),s=qr(),E=$8(),l=Mr(),c=C(()=>{var B;return e.value.name||((B=Ir(n.value.author)[0])==null?void 0:B.name)||t.value.title}),a=C(()=>e.value.avatar||n.value.logo),p=C(()=>n.value.blogLocales),d=C(()=>e.value.intro);return()=>{const{article:B,category:v,tag:m,timeline:g}=p.value,D=[[r.value.path,r.value.items.length,B],[o.value.path,rt(o.value.map).length,v],[s.value.path,rt(s.value.map).length,m],[E.value.path,E.value.items.length,g]];return i("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[i("div",{class:"vp-blogger",...d.value?{style:{cursor:"pointer"},"aria-label":p.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>l(d.value)}:{}},[a.value?i("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:Ie(a.value),property:"image",alt:"Blogger Avatar"}):null,c.value?i("div",{class:"vp-blogger-name",property:"name"},c.value):null,e.value.description?i("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,d.value?i("meta",{property:"url",content:Ie(d.value)}):null]),i("div",{class:"vp-blog-counts"},D.map(([h,_,L])=>i(ke,{class:"vp-blog-count",to:h},()=>[i("div",{class:"count"},_),i("div",L)]))),i(Qp)])}}});const xs=()=>i(se,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));xs.displayName="CategoryIcon";const $s=()=>i(se,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));$s.displayName="TagIcon";const N8=()=>i(se,{name:"timeline"},()=>i("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));N8.displayName="TimelineIcon";const M9=()=>i(se,{name:"slides"},()=>i("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));M9.displayName="SlideIcon";const N9=()=>i(se,{name:"sticky"},()=>[i("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);N9.displayName="StickyIcon";const yo=()=>i(se,{name:"article"},()=>i("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));yo.displayName="ArticleIcon";const H9=()=>i(se,{name:"book"},()=>i("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));H9.displayName="BookIcon";const j9=()=>i(se,{name:"link"},()=>i("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));j9.displayName="LinkIcon";const z9=()=>i(se,{name:"project"},()=>i("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));z9.displayName="ProjectIcon";const q9=()=>i(se,{name:"friend"},()=>i("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));q9.displayName="FriendIcon";const Ms=()=>i(se,{name:"slide-down"},()=>i("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Ms.displayName="SlideDownIcon";const U9=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});U9.displayName="EmptyIcon";const G9=()=>i(se,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));G9.displayName="LockIcon";var Xp=S({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const n=Zn(e,"info"),{info:r,items:o}=Gp(e);return()=>{var s,E,l;const{[ge.title]:c,[ge.type]:a,[ge.isEncrypted]:p=!1,[ge.cover]:d,[ge.excerpt]:B,[ge.sticky]:v}=n.value,m=r.value;return i("div",{class:"vp-article-wrapper"},i("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((s=t.cover)==null?void 0:s.call(t,{cover:d}))||(d?[i("img",{class:"vp-article-cover",src:Ie(d)}),i("meta",{property:"image",content:Ie(d)})]:[]),v?i(N9):null,i(ke,{to:e.path},()=>{var g;return((g=t.title)==null?void 0:g.call(t,{title:c,isEncrypted:p,type:a}))||i("header",{class:"vp-article-title"},[p?i(G9):null,a===Ya.slide?i(M9):null,i("span",{property:"headline"},c)])}),((E=t.excerpt)==null?void 0:E.call(t,{excerpt:B}))||(B?i("div",{class:"vp-article-excerpt",innerHTML:B}):null),i("hr",{class:"vp-article-hr"}),((l=t.info)==null?void 0:l.call(t,{info:m}))||i(D9,{info:m,...o.value?{items:o.value}:{}})]))}}}),Zp=S({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){let n;const r=le(),o=N(""),s=C(()=>r.value.paginationLocales),E=C(()=>Math.ceil(e.total/e.perPage)),l=C(()=>!!E.value&&E.value!==1),c=C(()=>E.value<7?!1:e.current>4),a=C(()=>E.value<7?!1:e.current<E.value-3),p=C(()=>{const{current:v}=e;let m=1,g=E.value;const D=[];E.value>=7&&(v<=4&&v<E.value-3?(m=1,g=5):v>4&&v>=E.value-3?(g=E.value,m=E.value-4):E.value>7&&(m=v-2,g=v+2));for(let h=m;h<=g;h++)D.push(h);return D}),d=v=>t("updateCurrentPage",v),B=v=>{const m=parseInt(v);m<=E.value&&m>0?d(m):n.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${s.value.errorText.replace(/\$page/g,E.value.toString())}`)};return pe(()=>{n=new Mc}),()=>i("div",{class:"vp-pagination"},l.value?i("div",{class:"vp-pagination-list"},[i("div",{class:"vp-pagination-number "},[e.current>1?i("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(e.current-1)},s.value.prev):null,c.value?[i("div",{role:"navigation",onClick:()=>d(1)},1),i("div",{class:"ellipsis"},"...")]:null,p.value.map(v=>i("div",{key:v,class:{active:e.current===v},role:"navigation",onClick:()=>d(v)},v)),a.value?[i("div",{class:"ellipsis"},"..."),i("div",{role:"navigation",onClick:()=>d(E.value)},E.value)]:null,e.current<E.value?i("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(e.current+1)},s.value.next):null]),i("div",{class:"vp-pagination-nav"},[i("label",{for:"navigation-text"},`${s.value.navigate}: `),i("input",{id:"navigation-text",value:o.value,onInput:({target:v})=>{o.value=v.value},onKeydown:v=>{v.key==="Enter"&&(v.preventDefault(),B(o.value))}}),i("button",{class:"vp-pagination-button",role:"navigation",title:s.value.action,onClick:()=>B(o.value)},s.value.action)])]):[])}}),H8=S({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const t=gt(),n=ze(),r=zr(),o=N(1),s=C(()=>r.value.articlePerPage||10),E=C(()=>e.items.slice((o.value-1)*s.value,o.value*s.value)),l=c=>{o.value=c;const a={...t.query};a.page===c.toString()||c===1&&!a.page||(c===1?delete a.page:a.page=c.toString(),n.push({path:t.path,query:a}).then(()=>{F9()}))};return pe(()=>{const{page:c}=t.query;l(c?Number(c):1),u(()=>Promise.resolve().then(()=>$p),void 0).then(({updatePageview:a})=>{a()}),re(o,()=>{const a=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,a)},100)}),re(()=>t.query,({page:a})=>{l(a?Number(a):1)})}),()=>i("div",{id:"article-list",class:"vp-article-list"},E.value.length?[...E.value.map(({info:c,path:a},p)=>i(me,{appear:!0,delay:p*.04},()=>i(Xp,{key:a,info:c,path:a}))),i(Zp,{current:o.value,perPage:s.value,total:e.items.length,onUpdateCurrentPage:l})]:i(U9))}}),j8=S({name:"CategoryList",setup(){const e=ae(),t=jr();return()=>i("ul",{class:"vp-category-list"},er(t.value.map).map(([n,{path:r,items:o}])=>i("li",{class:["vp-category",`vp-category${So(n,9)}`,{active:r===e.value.path}]},i(ke,{to:r},()=>[n,i("span",{class:"count"},o.length)]))))}}),z8=S({name:"TagList",setup(){const e=he(),t=qr(),n=r=>{var o;return r===((o=e.value.blog)==null?void 0:o.name)};return()=>i("ul",{class:"tag-list-wrapper"},er(t.value.map).map(([r,{path:o,items:s}])=>i("li",{class:["tag",`tag${So(r,9)}`,{active:n(r)}]},i(ke,{to:o},()=>[r,i("span",{class:"tag-num"},s.length)]))))}}),e3=S({name:"TimelineList",setup(){const e=le(),t=$8(),n=Mr(),r=C(()=>e.value.blogLocales.timeline);return()=>i("div",{class:"timeline-list-wrapper"},[i("div",{class:"timeline-list-title",onClick:()=>n(t.value.path)},[i(N8),i("span",{class:"num"},t.value.items.length),r.value]),i("hr"),i("div",{class:"timeline-content"},i("ul",{class:"timeline-list"},t.value.config.map(({year:o,items:s},E)=>i(me,{appear:!0,delay:.08*(E+1)},()=>i("li",[i("h3",{class:"timeline-year"},o),i("ul",{class:"timeline-year-wrapper"},s.map(({date:l,info:c,path:a})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},l),i(ke,{class:"timeline-title",to:a},()=>c[ge.title])])))])))))])}}),W9=S({name:"InfoList",setup(){const e=le(),t=Ur(),n=jr(),r=C(()=>rt(n.value.map).length),o=x8(),s=qr(),E=C(()=>rt(s.value.map).length),l=Mr(),c=N("article"),a=C(()=>e.value.blogLocales),p=[["article",yo],["category",xs],["tag",$s],["timeline",N8]];return()=>i("div",{class:"vp-blog-infos"},[i("div",{class:"vp-blog-type-switcher"},p.map(([d,B])=>i("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=d}},i("div",{class:["icon-wrapper",{active:c.value===d}],"aria-label":a.value[d],"data-balloon-pos":"up"},i(B))))),i(me,()=>c.value==="article"?i("div",{class:"vp-sticky-article-wrapper"},[i("div",{class:"title",onClick:()=>l(t.value.path)},[i(yo),i("span",{class:"num"},t.value.items.length),a.value.article]),i("hr"),i("ul",{class:"vp-sticky-articles"},o.value.items.map(({info:d,path:B},v)=>i(me,{appear:!0,delay:.08*(v+1)},()=>i("li",{class:"vp-sticky-article"},i(ke,{to:B},()=>d[ge.title])))))]):c.value==="category"?i("div",{class:"vp-category-wrapper"},[r.value?i("div",{class:"title",onClick:()=>l(n.value.path)},[i(xs),i("span",{class:"num"},r.value),a.value.category]):null,i("hr"),i(me,{delay:.04},()=>i(j8))]):c.value==="tag"?i("div",{class:"vp-tag-wrapper"},[E.value?i("div",{class:"title",onClick:()=>l(s.value.path)},[i($s),i("span",{class:"num"},E.value),a.value.tag]):null,i("hr"),i(me,{delay:.04},()=>i(z8))]):i(me,()=>i(e3)))])}}),$o=S({name:"BlogWrapper",slots:Object,setup(e,{slots:t}){const{isMobile:n}=Nr();return()=>[i(k8),i(V8,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>i(M8),...n.value?{sidebar:()=>i(W9)}:{}})]}});const K9=()=>i("aside",{class:"vp-blog-info-wrapper"},[i(me,()=>i(M8)),i(me,{delay:.04},()=>i(W9))]);K9.displayName="InfoPanel";var Mo=K9,t3=S({name:"BlogPage",components:{CategoryList:j8,TagList:z8},setup(){const e=ae(),t=he(),n=jr(),r=qr(),o=C(()=>t.value.blog||{}),s=C(()=>{const{key:l=""}=o.value;return l==="category"?"CategoryList":l==="tag"?"TagList":null}),E=C(()=>{const{name:l="",key:c=""}=o.value;return c==="category"?l?n.value.map[l].items:[]:c==="tag"?l?r.value.map[l].items:[]:[]});return()=>i($o,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(me,()=>s.value?i(tt(s.value)):null),o.value.name?i(me,{appear:!0,delay:.24},()=>i(H8,{key:e.value.path,items:E.value})):null]),i(me,{delay:.16},()=>i(Mo,{key:"blog"}))])))}}),n3=S({name:"BlogHero",slots:Object,setup(e,{slots:t}){const n=he(),r=kr(),o=Te(),s=C(()=>n.value.heroFullScreen??!1),E=C(()=>{const{heroText:c,heroImage:a,heroImageDark:p,heroAlt:d,heroImageStyle:B,tagline:v}=n.value;return{text:c??r.value.title??"Hello",image:a?Ie(a):null,imageDark:p?Ie(p):null,heroStyle:B,alt:d||c||"hero image",tagline:v??"",isFullScreen:s.value}}),l=C(()=>{const{bgImage:c,bgImageDark:a,bgImageStyle:p}=n.value;return{image:ie(c)?Ie(c):c===!1?null:Mp,imageDark:ie(a)?Ie(a):null,bgStyle:p,isFullScreen:s.value}});return()=>{var c,a;return n.value.hero===!1?null:i("div",{ref:o,class:["vp-blog-hero",{fullscreen:s.value,"no-bg":!l.value.image}]},[((c=t.heroBg)==null?void 0:c.call(t,l.value))||[l.value.image?i("div",{class:["vp-blog-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.bgStyle]}):null,l.value.imageDark?i("div",{class:"vp-blog-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.bgStyle]}):null],((a=t.heroInfo)==null?void 0:a.call(t,E.value))||[i(me,{appear:!0,type:"group",delay:.04},()=>[E.value.image?i("img",{key:"light",class:["vp-blog-hero-image",{light:E.value.imageDark}],style:E.value.heroStyle,src:E.value.image,alt:E.value.alt}):null,E.value.imageDark?i("img",{key:"dark",class:"vp-blog-hero-image dark",style:E.value.heroStyle,src:E.value.imageDark,alt:E.value.alt}):null]),i(me,{appear:!0,delay:.08},()=>E.value.text?i("h1",{class:"vp-blog-hero-title"},E.value.text):null),i(me,{appear:!0,delay:.12},()=>E.value.tagline?i("p",{class:"vp-blog-hero-description",innerHTML:E.value.tagline}):null)],E.value.isFullScreen?i("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:o.value.clientHeight,behavior:"smooth"})}},[i(Ms),i(Ms)]):null])}}});const r3=["link","article","book","project","friend"];var o3=S({name:"ProjectPanel",components:{ArticleIcon:yo,BookIcon:H9,FriendIcon:q9,LinkIcon:j9,ProjectIcon:z9},setup(){const e=he(),t=rr(),n=Mr(),r=(o="",s="icon")=>r3.includes(o)?i(tt(`${o}-icon`)):_n(o)?i("img",{class:"vp-project-image",src:o,alt:s}):ko(o)?i("img",{class:"vp-project-image",src:Ie(o),alt:s}):i(We,{icon:o});return()=>{var o;return(o=e.value.projects)!=null&&o.length?i("div",{class:"vp-project-panel"},e.value.projects.map(({icon:s,link:E,name:l,desc:c},a)=>i("div",{class:["vp-project-card",{[`project${a%9}`]:!t.value}],onClick:()=>n(E)},[r(s,l),i("div",{class:"vp-project-name"},l),i("div",{class:"vp-project-desc"},c)]))):null}}}),s3=S({name:"BlogHome",setup(){const e=Ur();return()=>i("div",{class:"vp-page vp-blog"},[i(n3),i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(me,{appear:!0,delay:.16},()=>i(o3)),i(me,{appear:!0,delay:.24},()=>i(H8,{items:e.value.items}))]),i(me,{appear:!0,delay:.16},()=>i(Mo,{key:"blog"}))]),i(me,{appear:!0,delay:.28},()=>i(S8))])}}),E3=S({name:"BlogHome",setup(){return()=>i($o,()=>i(s3))}}),Y9=S({name:"ArticleType",setup(){const e=ae(),t=Nt(),n=le(),r=Ur(),o=x8(),s=C(()=>{const E=n.value.blogLocales;return[{text:E.all,path:r.value.path},{text:E.star,path:o.value.path},...[].map(({key:l,path:c})=>({text:E[l],path:c.replace(/^\//,t.value)}))]});return()=>i("ul",{class:"vp-article-type-wrapper"},s.value.map(E=>i("li",{class:["vp-article-type",{active:E.path===e.value.path}]},i(ke,{to:E.path},()=>E.text))))}}),l3=S({name:"BlogPage",setup(){const e=xo(),t=he(),n=ae(),r=Ur(),o=x8(),s=C(()=>{const{key:E="",type:l}=t.value.blog||{};return E==="star"?o.value.items:l==="type"&&E?e.value.items:r.value.items});return()=>i($o,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(me,()=>i(Y9)),i(me,{appear:!0,delay:.24},()=>i(H8,{key:n.value.path,items:s.value}))]),i(me,{delay:.16},()=>i(Mo,{key:"blog"}))])))}}),i3=S({name:"TimelineItems",setup(){const e=zr(),t=le(),n=$8(),r=C(()=>e.value.timeline||t.value.blogLocales.timelineTitle),o=C(()=>n.value.config.map(({year:s})=>({title:s.toString(),level:2,slug:s.toString(),children:[]})));return()=>i("div",{class:"timeline-wrapper"},i("ul",{class:"timeline-content"},[i(me,()=>i("li",{class:"motto"},r.value)),i(w9,{items:o.value}),n.value.config.map(({year:s,items:E},l)=>i(me,{appear:!0,delay:.08*(l+1),type:"group"},()=>[i("h3",{key:"title",id:s,class:"timeline-year-title"},i("span",s)),i("li",{key:"content",class:"timeline-year-list"},[i("ul",{class:"timeline-year-wrapper"},E.map(({date:c,info:a,path:p})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},c),i(ke,{class:"timeline-title",to:p},()=>a[ge.title])])))])]))]))}}),a3=S({name:"Timeline",components:{ArticleType:Y9,CategoryList:j8,TagList:z8},setup(){return()=>i($o,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(me,{appear:!0,delay:.24},()=>i(i3))]),i(me,{delay:.16},()=>i(Mo,{key:"blog"}))])))}});const wn="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),us=Array.from({length:64},(e,t)=>t),Eo=e=>Array(e).fill(-1),Gt=[...Eo(46),0,1,...us.slice(54,64),...Eo(7),...us.slice(2,28),...Eo(6),...us.slice(28,54),...Eo(5)],bl=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],_l=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],J9=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Ns=(e,t)=>{if(t<=0||t>e.length)throw Error(`Illegal len: ${t}`);let n=0,r,o;const s=[];for(;n<t;){if(r=e[n++]&255,s.push(wn[r>>2&63]),r=(r&3)<<4,n>=t){s.push(wn[r&63]);break}if(o=e[n++]&255,r|=o>>4&15,s.push(wn[r&63]),r=(o&15)<<2,n>=t){s.push(wn[r&63]);break}o=e[n++]&255,r|=o>>6&3,s.push(wn[r&63]),s.push(wn[o&63])}return s.join("")},c3=(e,t)=>{if(t<=0)throw Error(`Illegal len: ${t}`);const n=e.length;let r=0,o=0,s,E,l,c,a,p;const d=[];for(;r<n-1&&o<t&&(p=e.charCodeAt(r++),s=p<Gt.length?Gt[p]:-1,p=e.charCodeAt(r++),E=p<Gt.length?Gt[p]:-1,!(s==-1||E==-1||(a=s<<2>>>0,a|=(E&48)>>4,d.push(String.fromCharCode(a)),++o>=t||r>=n)||(p=e.charCodeAt(r++),l=p<Gt.length?Gt[p]:-1,l==-1)||(a=(E&15)<<4>>>0,a|=(l&60)>>2,d.push(String.fromCharCode(a)),++o>=t||r>=n)));)p=e.charCodeAt(r++),c=p<Gt.length?Gt[p]:-1,a=(l&3)<<6>>>0,a|=c,d.push(String.fromCharCode(a)),++o;return d.map(B=>B.charCodeAt(0))},u3=(e,t)=>{let n=null;for(typeof e=="number"&&(n=e,e=()=>null);n!==null||(n=e())!==null;)n<128?t(n&127):n<2048?(t(n>>6&31|192),t(n&63|128)):n<65536?(t(n>>12&15|224),t(n>>6&63|128),t(n&63|128)):(t(n>>18&7|240),t(n>>12&63|128),t(n>>6&63|128),t(n&63|128)),n=null},p3=(e,t)=>{let n,r=null;for(;(n=r!==null?r:e())!==null;){if(n>=55296&&n<=57343&&(r=e())!==null&&r>=56320&&r<=57343){t((n-55296)*1024+r-56320+65536),r=null;continue}t(n)}r!==null&&t(r)},d3=(e,t)=>{p3(e,function(n){u3(n,t)})},B3=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,A3=e=>{const t=[];let n=0;return d3(()=>n>=e.length?null:e.charCodeAt(n++),r=>{t.push(r)}),t},Tr=(e,t,n,r)=>{let o,s=e[t],E=e[t+1];return s^=n[0],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],E^=o^n[1],o=r[E>>>24],o+=r[256|E>>16&255],o^=r[512|E>>8&255],o+=r[768|E&255],s^=o^n[2],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],E^=o^n[3],o=r[E>>>24],o+=r[256|E>>16&255],o^=r[512|E>>8&255],o+=r[768|E&255],s^=o^n[4],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],E^=o^n[5],o=r[E>>>24],o+=r[256|E>>16&255],o^=r[512|E>>8&255],o+=r[768|E&255],s^=o^n[6],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],E^=o^n[7],o=r[E>>>24],o+=r[256|E>>16&255],o^=r[512|E>>8&255],o+=r[768|E&255],s^=o^n[8],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],E^=o^n[9],o=r[E>>>24],o+=r[256|E>>16&255],o^=r[512|E>>8&255],o+=r[768|E&255],s^=o^n[10],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],E^=o^n[11],o=r[E>>>24],o+=r[256|E>>16&255],o^=r[512|E>>8&255],o+=r[768|E&255],s^=o^n[12],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],E^=o^n[13],o=r[E>>>24],o+=r[256|E>>16&255],o^=r[512|E>>8&255],o+=r[768|E&255],s^=o^n[14],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],E^=o^n[15],o=r[E>>>24],o+=r[256|E>>16&255],o^=r[512|E>>8&255],o+=r[768|E&255],s^=o^n[16],e[t]=E^n[16+1],e[t+1]=s,e},Tn=(e,t)=>{let n=0;for(let r=0;r<4;++r)n=n<<8|e[t]&255,t=(t+1)%e.length;return{key:n,offp:t}},gl=(e,t,n)=>{const r=t.length,o=n.length;let s=0,E=[0,0],l;for(let c=0;c<r;c++)l=Tn(e,s),s=l.offp,t[c]=t[c]^l.key;for(let c=0;c<r;c+=2)E=Tr(E,0,t,n),t[c]=E[0],t[c+1]=E[1];for(let c=0;c<o;c+=2)E=Tr(E,0,t,n),n[c]=E[0],n[c+1]=E[1]},v3=(e,t,n,r)=>{const o=n.length,s=r.length;let E=0,l=[0,0],c;for(let a=0;a<o;a++)c=Tn(t,E),E=c.offp,n[a]=n[a]^c.key;E=0;for(let a=0;a<o;a+=2)c=Tn(e,E),E=c.offp,l[0]^=c.key,c=Tn(e,E),E=c.offp,l[1]^=c.key,l=Tr(l,0,n,r),n[a]=l[0],n[a+1]=l[1];for(let a=0;a<s;a+=2)c=Tn(e,E),E=c.offp,l[0]^=c.key,c=Tn(e,E),E=c.offp,l[1]^=c.key,l=Tr(l,0,n,r),r[a]=l[0],r[a+1]=l[1]},yl=(e,t,n,r,o)=>{const s=J9.slice(),E=s.length;if(n<4||n>31){const B=new Error(`Illegal number of rounds (4-31): ${n}`);if(r===!1)return Promise.reject(B);throw B}if(t.length!==16){const B=new Error(`Illegal salt length: ${t.length} != 16`);if(r===!1)return Promise.reject(B);throw B}n=1<<n>>>0;let l,c,a=0,p;Int32Array?(l=new Int32Array(bl),c=new Int32Array(_l)):(l=bl.slice(),c=_l.slice()),v3(t,e,l,c);const d=()=>{if(o&&o(a/n),a<n){const B=Date.now();for(;a<n&&(a=a+1,gl(e,l,c),gl(t,l,c),!(Date.now()-B>100)););}else{for(a=0;a<64;a++)for(p=0;p<E>>1;p++)Tr(s,p<<1,l,c);const B=[];for(a=0;a<E;a++)B.push((s[a]>>24&255)>>>0),B.push((s[a]>>16&255)>>>0),B.push((s[a]>>8&255)>>>0),B.push((s[a]&255)>>>0);return r===!1?Promise.resolve(B):B}if(r===!1)return new Promise(B=>B3(()=>{d().then(B)}))};if(r===!1)return d();{let B;for(;;)if(typeof(B=d())<"u")return B||[]}},f3=e=>{try{let t;return(self.crypto||self.msCrypto).getRandomValues(t=new Uint32Array(e)),Array.prototype.slice.call(t)}catch{throw Error("WebCryptoAPI is not available")}},m3=(e=10)=>{if(typeof e!="number")throw Error("Illegal arguments: "+typeof e);e<4?e=4:e>31&&(e=31);const t=[];return t.push("$2a$"),e<10&&t.push("0"),t.push(e.toString()),t.push("$"),t.push(Ns(f3(16),16)),t.join("")};function h3(e,t,n,r){if(typeof e!="string"||typeof t!="string"){const v=new Error("Invalid string / salt: Not a string");if(n===!1)return Promise.reject(v);throw v}let o,s;if(t.charAt(0)!=="$"||t.charAt(1)!=="2"){const v=new Error("Invalid salt version: "+t.substring(0,2));if(n===!1)return Promise.reject(v);throw v}if(t.charAt(2)==="$")o=String.fromCharCode(0),s=3;else{if(o=t.charAt(2),o!=="a"&&o!=="b"&&o!=="y"||t.charAt(3)!=="$"){const v=Error("Invalid salt revision: "+t.substring(2,4));if(n===!1)return Promise.reject(v);throw v}s=4}if(t.charAt(s+2)>"$"){const v=new Error("Missing salt rounds");if(n===!1)return Promise.reject(v);throw v}const E=parseInt(t.substring(s,s+1),10)*10,l=parseInt(t.substring(s+1,s+2),10),c=E+l,a=t.substring(s+3,s+25);e+=o>="a"?"\0":"";const p=A3(e),d=c3(a,16),B=v=>{const m=[];return m.push("$2"),o>="a"&&m.push(o),m.push("$"),c<10&&m.push("0"),m.push(c.toString()),m.push("$"),m.push(Ns(d,d.length)),m.push(Ns(v,J9.length*4-1)),m.join("")};return n===!1?yl(p,d,c,!1,r).then(v=>B(v)):B(yl(p,d,c,!0,r))}const b3=(e,t=10)=>{if(typeof t=="number"&&(t=m3(t)),typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return h3(e,t,!0)},Hs=(e,t)=>{if(typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return t.length!==60?!1:b3(e,t.substring(0,t.length-31))===t},Q9=()=>i(se,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Q9.displayName="LockIcon";var X9=S({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(e,{emit:t}){const n=he(),r=le(),o=N(""),s=N(!1),E=N(!1),l=C(()=>r.value.encryptLocales);let c=null;const a=()=>{c&&clearTimeout(c),s.value=!1,t("verify",o.value,E.value),nn().then(()=>{s.value=!0,c=setTimeout(()=>{s.value=!1},1e3)})};return()=>i("div",{class:["vp-decrypt-layer",{expand:e.full||n.value.home}]},i("div",{class:"vp-decrypt-modal"},[i("div",{class:["vp-decrypt-hint",{tried:s.value}]},s.value?l.value.errorHint:i(Q9,{"aria-label":l.value.iconLabel})),i("div",{class:"vp-decrypt-input"},[i("input",{type:"password",value:o.value,placeholder:l.value.placeholder,onInput:({target:p})=>{o.value=p.value},onKeydown:({key:p})=>{p==="Enter"&&a()}})]),i("div",{class:"vp-remember-password"},[i("input",{type:"checkbox",value:E.value,onChange:()=>E.value=!E.value}),l.value.remember]),i("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>a()},"OK")]))}});const Z9=()=>{const e=sn();return C(()=>e.value.encrypt||{})},Cl="VUEPRESS_HOPE_GLOBAL_TOKEN",_3=()=>{const e=Z9(),t=nr(Cl,""),n=Ca(Cl,""),r=C(()=>{const{global:s=!1,admin:E=[]}=e.value;return s&&E.length>0}),o=C(()=>{if(r.value){if(t.value)return e.value.admin.some(s=>Hs(t.value,s));if(n.value)return e.value.admin.some(s=>Hs(n.value,s))}return!1});return{isEncrypted:r,isDecrypted:o,validate:(s,E=!1)=>{(E?t:n).value=s}}},ps=(e="",t)=>!!e&&Hs(e,t),Dl="VUEPRESS_HOPE_PATH_TOKEN",g3=()=>{const e=ae(),t=Z9(),n=nr(Dl,{}),r=Ca(Dl,{}),o=E=>Sr(t.value.config)?rt(t.value.config).filter(l=>Wn(decodeURI(E),l)).sort((l,c)=>c.length-l.length):[],s=E=>{const l=o(E);if(l.length>0){const{config:c={}}=t.value;return{isEncrypted:!0,isDecrypted:l.some(a=>n.value[a]&&c[a].some(p=>ps(n.value[a],p))||r.value[a]&&c[a].some(p=>ps(r.value[a],p)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:C(()=>s(e.value.path)),getStatus:s,validate:(E,l=!1)=>{const{config:c={}}=t.value,a=o(e.value.path);for(const p of a)if(c[p].filter(d=>ps(E,d))){(l?n:r).value[p]=E;break}}}};var y3=S({name:"GlobalEncrypt",slots:Object,setup(e,{slots:t}){const{isDecrypted:n,isEncrypted:r,validate:o}=_3(),s=N(!1);return pe(()=>{s.value=!0}),()=>i(T9,()=>r.value?s.value?n.value?t.default():i(X9,{full:!0,onVerify:o}):null:t.default())}}),C3=S({name:"LocalEncrypt",slots:Object,setup(e,{slots:t}){const{status:n,validate:r}=g3(),o=N(!1);return pe(()=>{o.value=!0}),()=>{const{isEncrypted:s,isDecrypted:E}=n.value;return s?o.value?E?t.default()||null:i(X9,{full:!0,onVerify:r}):null:t.default()||null}}});var D3=S({name:"SlidePage",setup(){const e=ze(),t=N(!1),n=Te(),r=()=>{t.value=!t.value},o=()=>{t.value=!1},s=()=>{o(),window.history.go(-1)},E=()=>{o(),e.push("/")};return E2(n,o),()=>i("div",{class:"vp-reveal-page"},[i(A8),i("div",{ref:n,class:["vp-reveal-menu",{active:t.value}]},[i("button",{type:"button",class:"menu-button",onClick:()=>r()},i("span",{class:"icon"})),i("button",{type:"button",class:"back-button",onClick:()=>s()},i(mu)),i("button",{type:"button",class:"home-button",onClick:()=>E()},i(hu))])])}});O2(We);const w3=_t({enhance:({app:e,router:t})=>{const{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...r)=>(await I9().wait(),n(...r)),S4(e),e.component("HopeIcon",We),e.component("VPLink",ke),e.component("BloggerInfo",M8),e.component("GlobalEncrypt",y3),e.component("LocalEncrypt",C3)},setup:()=>{k4(),N4(),Jp()},layouts:{Layout:Op,NotFound:Vp,BlogCategory:t3,BlogHome:E3,BlogType:l3,Timeline:a3,Slide:D3}}),lo=[a5,C2,R2,k2,M2,z2,K2,Eu,du,B4,C4,w3],I3=[["v-8daa1a0e","/",{y:"h",t:"Home",i:"home"},["/README.md"]],["v-184f4da6","/intro.html",{d:1696603608e3,v:"/assets/images/cover3.jpg",e:`<h2> 个人介绍</h2>
<p>Todo：个人介绍</p>
`,r:{minutes:.05,words:14},y:"a",t:"",i:"circle-info"},[":md"]],["v-2e3eac9e","/slides.html",{d:1696603608e3,e:`<!-- markdownlint-disable MD024 MD033 MD051 -->
`,r:{minutes:3.24,words:973},y:"s",t:"Slide page",i:"person-chalkboard"},[":md"]],["v-88a07046","/posts/%E6%8A%80%E6%9C%AF/1%20%E8%B6%8B%E4%BA%8E%E6%B7%B7%E4%B9%B1%E7%9A%84%E4%BB%A3%E7%A0%81.html",{d:1725859989e3,e:`<h1> #1 趋于混乱的代码</h1>
<blockquote>
<p>生命，以负熵为食。</p>
</blockquote>
<p>本文从熵的视角谈一谈对生活中一些事务的看法。</p>
<h2> 代码趋于混乱</h2>
<p>代码是天然的趋于混乱的。我想用软件界一些常见的思维和词汇，以熵的视角来谈谈这个问题。</p>
<h3> <strong>面向对象：用对象来解决混乱问题</strong></h3>
<p>面向对象对解决混乱度提出的解决方案是，将行为和数据赋予给对象。进而，有更加清晰的语意，并且代码也是天然分散的（不要小瞧这点，这很重要）；行为也会在更加适合解决它的那个对象中解决。但是，<strong>随意命名的对象</strong>，<strong>对象之间彼此不必要的耦合</strong>，导致了代码还是很多，混乱度还是很高。</p>`,r:{minutes:3.53,words:1059},y:"a",t:"#1 趋于混乱的代码"},["/posts/技术/1 趋于混乱的代码.html","/posts/技术/#1 趋于混乱的代码.html","/posts/%E6%8A%80%E6%9C%AF/#1%20%E8%B6%8B%E4%BA%8E%E6%B7%B7%E4%B9%B1%E7%9A%84%E4%BB%A3%E7%A0%81.html","/posts/技术/#1 趋于混乱的代码.md","/posts/%E6%8A%80%E6%9C%AF/#1%20%E8%B6%8B%E4%BA%8E%E6%B7%B7%E4%B9%B1%E7%9A%84%E4%BB%A3%E7%A0%81.md"]],["v-4c913582","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_1%20AI%E7%AC%AC%E4%B8%80%E5%AE%9A%E5%BE%8B.html",{d:1735613476e3,e:`<h1> AI无相神功#1 AI第一定律</h1>
<figure><figcaption></figcaption></figure>
<p>你可能解决的比AI好，但一定没有AI解决得快。<br>
一切问题，能用AI就用AI，先用AI。</p>
<p>AI第二定律<br>
像是流水线组装一样把问题拆分，AI就能帮你搞定。<br>
AI搞不定是因为问题没有拆得足够细小。</p>
<p>AI第三定律<br>
Cost--<br>
AI成本比你低非常多（提供放大的可能）</p>
<p>人生第一定律<br>
选择比努力重要</p>
<p>人生第二定律<br>
事情搞不定是因为没有拆得足够细</p>
`,r:{minutes:.55,words:164},y:"a",t:"AI无相神功#1 AI第一定律"},["/posts/打工人手册/AI无相神功_1 AI第一定律.html","/posts/打工人手册/AI无相神功#1 AI第一定律.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#1%20AI%E7%AC%AC%E4%B8%80%E5%AE%9A%E5%BE%8B.html","/posts/打工人手册/AI无相神功#1 AI第一定律.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#1%20AI%E7%AC%AC%E4%B8%80%E5%AE%9A%E5%BE%8B.md"]],["v-19d7c75d","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_2%20AI%E7%9A%84%E9%97%AE%E9%A2%98%E6%8B%86%E5%88%86%E6%B3%95.html",{d:1735613476e3,e:`<h1> AI无相神功#2 AI的问题拆分法</h1>
<figure><figcaption></figcaption></figure>
<p>AI不擅长的场景是：多个context在不同地方<br>
擅长的场景是：聚焦的context<br>
解决不了的问题是：完全没有人探索过的知识，拆解、组合也不行。如基本理论研究。</p>
<p>一个可以优化的点是，使用像是Cursor这样的工具，辅助你提供context，免去自己裁剪context的过程。<br>
二是拆分流程，让单次聚焦一个更小的context。<br>
AI擅长更加小的context，但是这并不意味着AI解决不了全局的问题。</p>`,r:{minutes:.86,words:257},y:"a",t:"AI无相神功#2 AI的问题拆分法"},["/posts/打工人手册/AI无相神功_2 AI的问题拆分法.html","/posts/打工人手册/AI无相神功#2 AI的问题拆分法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#2%20AI%E7%9A%84%E9%97%AE%E9%A2%98%E6%8B%86%E5%88%86%E6%B3%95.html","/posts/打工人手册/AI无相神功#2 AI的问题拆分法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#2%20AI%E7%9A%84%E9%97%AE%E9%A2%98%E6%8B%86%E5%88%86%E6%B3%95.md"]],["v-1add9fd1","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_3%20%E5%AE%9A%E6%9C%9F%E5%AE%9A%E9%A2%9D.html",{d:1735613476e3,e:`<h1> AI无相神功#3 定期定额</h1>
<figure><figcaption></figcaption></figure>
<p>定期定额是有巨大价值的，帮助你调整动作，帮助你做正确的事情。<br>
很多时候其实做事情之所以你是专业的，就是因为你熟悉。<br>
从陌生到熟悉，你要迈过的是巨大的门槛。</p>
<p>一个事情哪怕你从[道]上推断它是正确的，它初期也是没有正反馈的。<br>
你要坚持，要持续投入，勘破那希望的曙光。</p>
<p>如果你知道一个事情有价值，对你有好处应该怎么做？持续不断的做。<br>
使用AI就是这样一个对你有好处的事情。</p>
<p>每天至少进行50次AI对话吧。下一步是利用API调用，每日进行500次对话，5000次对话。</p>`,r:{minutes:.69,words:206},y:"a",t:"AI无相神功#3 定期定额"},["/posts/打工人手册/AI无相神功_3 定期定额.html","/posts/打工人手册/AI无相神功#3 定期定额.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#3%20%E5%AE%9A%E6%9C%9F%E5%AE%9A%E9%A2%9D.html","/posts/打工人手册/AI无相神功#3 定期定额.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#3%20%E5%AE%9A%E6%9C%9F%E5%AE%9A%E9%A2%9D.md"]],["v-071eb094","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_4%20AI%E7%9A%84%E5%A4%A7%E7%8E%A9%E5%AE%B6.html",{d:1735613476e3,e:`<h1> AI无相神功#4 AI的大玩家</h1>
<figure><figcaption></figcaption></figure>
<p>大厂程序员，AI的持续使用者，每天用ChatGPT解决工作的各种点至少20+个吧。ChatGPT刚出的时候（22年底阿里内网小爆发，23年2月全社会爆发），每个人都在问，怎么用上ChatGPT。现在国产的AI已经非常好用了。</p>
<p>现在来看，GPT类形成了如下格局：</p>
<ol>
<li>海外玩家：OpenAI、Claude、谷歌。</li>
<li>国内玩家：百度、阿里千问、DeepSeek、月之暗面、字节（豆包/Coze-AIAgent玩家）</li>
</ol>`,r:{minutes:1.18,words:353},y:"a",t:"AI无相神功#4 AI的大玩家"},["/posts/打工人手册/AI无相神功_4 AI的大玩家.html","/posts/打工人手册/AI无相神功#4 AI的大玩家.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#4%20AI%E7%9A%84%E5%A4%A7%E7%8E%A9%E5%AE%B6.html","/posts/打工人手册/AI无相神功#4 AI的大玩家.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#4%20AI%E7%9A%84%E5%A4%A7%E7%8E%A9%E5%AE%B6.md"]],["v-33f951d0","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F_6%20AI%E7%9A%84%E7%9D%A1%E7%9C%A0%E5%B7%A5%E4%BD%9C%E6%B3%95.html",{d:1735613476e3,e:`<h1> AI无相神功#6 AI的睡眠工作法</h1>
<figure><figcaption></figcaption></figure>
<p>为何人类需要睡眠？为何不需要睡眠、减少睡眠的生物，没有占据生物链的最顶端。<br>
这是演化留给我们的问题。<br>
答案是，睡眠、休息、遗忘、排泄、死亡，这都是进化的选择。都是有利于族群壮大的。<br>
答案是，上面都是避免进入局部最优的方法。<br>
使用AI进行工作时，也应该遵守这种法则。如果你陷入了怎么提示AI，都搞不定的困境。或者AI已经越写越偏。那么，不如干脆休息下，下一次再尝试。本次的尝试先到此为止，让AI睡一会。<br>
这一切写起来是如此反直觉。但是当如果你自己用实际体验，又会发现，这一切又是如此自然而然。<br>
就像是你自己充足休息后，做起事情来得心应手。AI睡眠了之后，再次工作，可能就一下子解决你上次的问题。</p>`,r:{minutes:.9,words:269},y:"a",t:"AI无相神功#6 AI的睡眠工作法"},["/posts/打工人手册/AI无相神功_6 AI的睡眠工作法.html","/posts/打工人手册/AI无相神功#6 AI的睡眠工作法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#6%20AI%E7%9A%84%E7%9D%A1%E7%9C%A0%E5%B7%A5%E4%BD%9C%E6%B3%95.html","/posts/打工人手册/AI无相神功#6 AI的睡眠工作法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E6%97%A0%E7%9B%B8%E7%A5%9E%E5%8A%9F#6%20AI%E7%9A%84%E7%9D%A1%E7%9C%A0%E5%B7%A5%E4%BD%9C%E6%B3%95.md"]],["v-359609fd","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/AI%E7%9A%84%E4%BB%A3%E7%A0%81%E5%AE%8C%E6%88%90%E5%BA%A6%E5%A4%AA%E9%AB%98%EF%BC%8C%E5%90%84%E4%BD%8D%E5%BF%AB%E8%B7%B3%E8%88%B9.html",{d:1735613476e3,e:`<h1> AI的代码完成度太高，各位快跳船</h1>
<p><br>
<br>
<br>
</p>
<p>没戏了，快撤吧。<br>
下一个时代，软件开发的底层逻辑完全被改变了。<br>
程序员要继续当，但是不要再走我们上一代人的老路了。</p>
<p>这个页面，我用15分钟，三轮对话，纯用Claude，就整出来了。这种速度，这种精致的页面，你知道真人去开发，需要多久的时间么？至少三天！甚至你还会写一些潜藏的bug。<br>
但是现在，AI用了15分钟，薄纱了你传统编程。</p>
<p>十倍效率的差距，谁还用传统编程！？<br>
一步步学语法，语言结构，做小Demo，做大项目，遇到问题求助谷歌。磨个一年半载到毕业生水平，在公司的实战练就到专业水平。这个路线没用了。</p>`,r:{minutes:1.12,words:335},y:"a",t:"AI的代码完成度太高，各位快跳船"},["/posts/打工人手册/AI的代码完成度太高，各位快跳船.html","/posts/打工人手册/AI的代码完成度太高，各位快跳船.md",":md"]],["v-f269ffe0","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/SP1%20%E5%8D%81%E5%85%AD%E5%B9%B4%E5%85%89%E9%98%B4.html",{d:1705553761e3,e:`<h1> SP1 十六年光阴</h1>
<figure><figcaption></figcaption></figure>
<p>你和别人的差距是什么，是十六年光阴。<br>
别人07年所写的文章，到你有机会读的时候，已经十六年了。十六年前，我才9岁。</p>
<p>但是机会不会等你16年。未来可能还会错误无数个这样的机会，差十年（智能手机），差八年（比特币），差四年（电动汽车），差三年（疫情），差一年（电商出海）。<br>
总要差几年，就总无法突破。</p>
`,r:{minutes:.43,words:128},y:"a",t:"SP1 十六年光阴"},["/posts/打工人手册/SP1 十六年光阴.html","/posts/打工人手册/SP1 十六年光阴.md",":md"]],["v-35ef0eec","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/SP2%20%E4%B8%80%E4%B8%AA%E6%9C%88%E8%8A%B1%E5%85%AB%E7%99%BE%E7%9A%84%E6%97%A5%E5%AD%90.html",{d:1705553761e3,e:`<h1> SP2 一个月花八百的日子</h1>
<figure><figcaption></figcaption></figure>
<p>那时候，我刚毕业。月收入一万五。各位可能觉得很多，但是我当时真的觉得很少。<br>
第一个月，我去了公司。才发现，我手上的钱，连第一个月的房租都支付不起。公司很人性化，甚至提前支给我们半个月的工资。<br>
而且我不敢花钱，也觉得没有必要花钱。2500块我就可以买入一支万科的股票，这不是比乱花钱要好得多么。</p>
<p>我反而比起之前更加节俭。甚至做到了新房子连垃圾桶都不买。<br>
不需要垃圾桶的，你不要点外卖，在家里不吃零食。哪里还需要垃圾桶呢？</p>`,r:{minutes:.83,words:249},y:"a",t:"SP2 一个月花八百的日子"},["/posts/打工人手册/SP2 一个月花八百的日子.html","/posts/打工人手册/SP2 一个月花八百的日子.md",":md"]],["v-393b2345","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/SP3%20%E8%B0%81%E6%87%82%EF%BC%8C%E6%88%91%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BD%9C%E5%93%81%E8%A2%AB%E6%90%AC%E5%88%B0Youtube%E4%BA%86.html",{d:1735613476e3,e:`<h1> SP3 谁懂，我对象的作品被搬到Youtube了</h1>
<p><br>
</p>
<p>🚨 今天真的气炸了！🔥<br>
图一竟然是搬运的作品，图二是我老婆在网易云的专辑！ 不是吧，现在搬运工都这么猖狂了吗？</p>
<p>这种行为真的不能忍！所以有什么好办法对付这些搬运工吗？o(╥﹏╥)o</p>
<p>#原创保护\uFEFF \uFEFF#搬运工\uFEFF \uFEFF#网易云音乐\uFEFF \uFEFF#维权攻略</p>
`,r:{minutes:.37,words:112},y:"a",t:"SP3 谁懂，我对象的作品被搬到Youtube了"},["/posts/打工人手册/SP3 谁懂，我对象的作品被搬到Youtube了.html","/posts/打工人手册/SP3 谁懂，我对象的作品被搬到Youtube了.md",":md"]],["v-0b3def67","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/SP4%20%E5%8D%8E%E7%81%AF%E5%88%9D%E4%B8%8A.html",{d:1735613476e3,e:`<h1> SP4 华灯初上</h1>
<figure><figcaption></figcaption></figure>
<p>AI画图的世界在向我招手<br>
今天把个人AI绘图的框架搭建起来了</p>
`,r:{minutes:.12,words:37},y:"a",t:"SP4 华灯初上"},["/posts/打工人手册/SP4 华灯初上.html","/posts/打工人手册/SP4 华灯初上.md",":md"]],["v-2e41a181","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E4%BB%A3%E7%A0%81%E8%83%BD%E5%86%99%E4%B8%80%E8%BE%88%E5%AD%90%E4%B9%88.html",{d:1755318311e3,e:`<p>为什么写这篇文章。因为越来越意识到，写代码，真的写不了一辈子。</p>
<p>我已经入行快四年了，不要拿出什么写代码转管理，或者钻研技术，只要技术好，就可以写一辈子的话来骗我。</p>
<p>本人就是大厂的，现在的Level也是大厂中位数，是明白大厂的。</p>
<p>大厂的钱，要赚，每年百八十万，是丰厚的现金流来源。而且是完全不依赖之前的资本积累的。但是大厂的钱其实没法一直赚下去。</p>
<p>有<strong>三个</strong>像是基础规律一样的铁网，横亘在我们这些互联网职场人的上方。本文聊聊第一个，也是最重要的一个。</p>
<figure><img src="https://xqimg.imedao.com/18e07e871ac46c4f3fe40606.png!800.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:6.63,words:1988},y:"a",t:""},["/posts/打工人手册/代码能写一辈子么.html","/posts/打工人手册/代码能写一辈子么.md",":md"]],["v-e6852878","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E5%9C%A8Cursor%E9%87%8C%E7%94%A8claude%E5%B7%B2%E7%BB%8F%E6%AF%94%E8%B4%AD%E4%B9%B0claude%E8%BF%98%E8%A6%81%E5%A5%BD.html",{d:1735613476e3,e:`<h1> 在Cursor里用claude已经比购买claude还要好</h1>
<figure><figcaption></figcaption></figure>
<p>如题。<br>
专业版的Cl·中aude的核心是有Project能力（收费）。但还是有如下的问题无法解决：</p>
<ol>
<li>没法很快提供一个Context给Claude。例如想特指某一部分文件，还是要复制。但Cursor里面提供了@表达符帮助你快速提供Context。</li>
<li>Claude可以录入Project，但随后对代码的调整却不会更新Project。你需要手动复制粘贴。如果Claude只改动了一部分，你还需要定位到究竟是改了什么地方，然后复制粘贴。<br>
更别说，用Cursor时，你可以手动编码，写文档，运行等等等。<br>
总而言之，后续不再建议直接用Claude，都建议在Cursor里用Claude。#7</li>
</ol>`,r:{minutes:.68,words:205},y:"a",t:"在Cursor里用claude已经比购买claude还要好"},["/posts/打工人手册/在Cursor里用claude已经比购买claude还要好.html","/posts/打工人手册/在Cursor里用claude已经比购买claude还要好.md",":md"]],["v-7ad8adf9","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_1%20%E7%9B%AE%E6%A0%87%E7%AE%A1%E7%90%86.html",{d:169691398e4,e:`<h1> 打工人手册#1 目标管理</h1>
<figure><figcaption></figcaption></figure>
<p>没有目标，闲暇时间就不知道做什么。<br>
完成别人的目标，就成了老板的机器。<br>
像是最伟大的操盘手那样吧，策划好每一个细节，然后去做吧!</p>
<p>今年自己的目标完成了多少，想一想，今年为什么还没有发财，也没有构建起一套自己不投入时间也可以赚钱的机制。</p>
<p>首先要聚焦点，目标先行，以终为始。</p>
`,r:{minutes:.44,words:132},y:"a",t:"打工人手册#1 目标管理"},["/posts/打工人手册/打工人手册_1 目标管理.html","/posts/打工人手册/打工人手册#1 目标管理.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#1%20%E7%9B%AE%E6%A0%87%E7%AE%A1%E7%90%86.html","/posts/打工人手册/打工人手册#1 目标管理.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#1%20%E7%9B%AE%E6%A0%87%E7%AE%A1%E7%90%86.md"]],["v-2ef88bdf","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_10%20%E5%88%A9%E6%81%AF.html",{d:169691398e4,e:`<h1> 打工人手册#10 利息</h1>
<figure><figcaption></figcaption></figure>
<p>很容易想到，钱是有利息的。<br>
但这恰恰是最容易忘的，家里好几十万，就放在某个角落吃灰。</p>
<p>人们天性总是忙碌于眼前的事务，而无法去很好的为长期的事情预留时间的。</p>
<p>现在的无风险利率，至少有2%。如图为逆回购的利率，高的约2.6%。<br>
意思是如果一万，年利息200，折合到每日约5毛4。<br>
百万一天产生的利息是54元，一年产生的利息是2w元，够你一年去旅行两三趟了。</p>
<p>最简单提升资源利用率，从构建一套余钱自动购买货币基金的方式开始。(不论是手动，还是自动)</p>`,r:{minutes:.66,words:198},y:"a",t:"打工人手册#10 利息"},["/posts/打工人手册/打工人手册_10 利息.html","/posts/打工人手册/打工人手册#10 利息.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#10%20%E5%88%A9%E6%81%AF.html","/posts/打工人手册/打工人手册#10 利息.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#10%20%E5%88%A9%E6%81%AF.md"]],["v-2a6b3493","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_11%20%E8%81%8C%E5%9C%BA%E7%BB%99%E4%B8%8D%E4%BA%86%E4%BD%A0%E7%9A%84.html",{d:169691398e4,e:`<h1> 打工人手册#11 职场给不了你的</h1>
<figure><figcaption></figcaption></figure>
<p>职场给不了你暴富，给不了你从容，给不了你自由。</p>
<p>职场给你些钱，给你些技术，给你些脆弱的社会关系，给你一些35岁前的甜头。<br>
让你学会制度，懂得讲究效率，对风险敬畏，明白什么是人力杠杆。</p>
<p>但是，有一件事，是职场无法给你的。<br>
哪怕职场给你无数件事情，只要这个事情他没法给你，余下的，就没有任何作用。</p>
<p>职场无法给你的是，动机。<br>
真正成就一番大事，攫取巨额财富的，动机。</p>
`,r:{minutes:.56,words:168},y:"a",t:"打工人手册#11 职场给不了你的"},["/posts/打工人手册/打工人手册_11 职场给不了你的.html","/posts/打工人手册/打工人手册#11 职场给不了你的.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#11%20%E8%81%8C%E5%9C%BA%E7%BB%99%E4%B8%8D%E4%BA%86%E4%BD%A0%E7%9A%84.html","/posts/打工人手册/打工人手册#11 职场给不了你的.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#11%20%E8%81%8C%E5%9C%BA%E7%BB%99%E4%B8%8D%E4%BA%86%E4%BD%A0%E7%9A%84.md"]],["v-9ce71322","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_12%20%E4%B8%8D%E8%A6%81%E8%BF%BD%E6%B1%82%E8%81%8C%E5%9C%BA%E8%BF%9B%E6%AD%A5.html",{d:169691398e4,e:`<h1> 打工人手册#12 不要追求职场进步</h1>
<figure><figcaption></figcaption></figure>
<p>职场的问题是，你稍微进一步，以别人退一步换来。<br>
说给你一些甜头，只是为了让你可以更好的付出。<br>
而且各种时机总是要敲打你，所以说干嘛不直接选择避免职场上的这种进步呢？</p>
<p>神魔皆以血饲。职场，想从你这拿的是什么？</p>
`,r:{minutes:.36,words:109},y:"a",t:"打工人手册#12 不要追求职场进步"},["/posts/打工人手册/打工人手册_12 不要追求职场进步.html","/posts/打工人手册/打工人手册#12 不要追求职场进步.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#12%20%E4%B8%8D%E8%A6%81%E8%BF%BD%E6%B1%82%E8%81%8C%E5%9C%BA%E8%BF%9B%E6%AD%A5.html","/posts/打工人手册/打工人手册#12 不要追求职场进步.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#12%20%E4%B8%8D%E8%A6%81%E8%BF%BD%E6%B1%82%E8%81%8C%E5%9C%BA%E8%BF%9B%E6%AD%A5.md"]],["v-1c41a51e","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_13%20%E5%B7%A5%E5%85%B7.html",{d:169691398e4,e:`<h1> 打工人手册#13 工具</h1>
<figure><figcaption></figcaption></figure>
<p>你不搞某个事情，或者说，没有体会过那种全靠手进行的环节，你根本无法体会某件事情有多难。</p>
<p>就比如说你没做过自媒体运营之前，对于一个如何多个平台同时发内容的软件，嗤之以鼻。现在你，惊叹，wc但凡你搞个运营，这就是基础的工具。</p>
<p>你做个软件，真正把这些都支持好，一年收费100块，别人为什么不买你的软件？<br>
稳定啊，我就是想有一个很快多发的工具，不要那些花里胡哨的。你一直把多发给支持好，我就一直把钱打给你。</p>
<p>这里面对用户，是多大的价值。对你自己，是多大的市场？<br>
下一步，将这些运营的工具，聚类成产品，这个你会吧。这又是多少的价值，多大的市场空间。</p>`,r:{minutes:1.46,words:438},y:"a",t:"打工人手册#13 工具"},["/posts/打工人手册/打工人手册_13 工具.html","/posts/打工人手册/打工人手册#13 工具.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#13%20%E5%B7%A5%E5%85%B7.html","/posts/打工人手册/打工人手册#13 工具.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#13%20%E5%B7%A5%E5%85%B7.md"]],["v-3cae8de0","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_14%20%E9%81%93.html",{d:169691398e4,e:`<h1> 打工人手册#14 道</h1>
<figure><figcaption></figcaption></figure>
<p>道法术器用。</p>
<p>如何得[道]？</p>
<p>道是什么，是经济学的思维，是一眼看穿本质，是愿意不断进取来获得更大的成就。</p>
<p>经济学，心理学，信息论，效率论。这些更低层的原理，才是道。</p>
<p>人生永远面临多个抉择，如果是从来没见过的事情，遇到了从来没有对付的过的事情。你如何做？</p>
<p>如何一步步提升自己，优化自己的行为，构建赚钱的机器，这些才是道。</p>
<p>道最重要。</p>
<p>例如，你怎么知道当前某件事情，有优化空间。你只需要通过信息论，看看有没有冗余执行的部分，就知道有没有优化空间了。<br>
一场场的输赢，都不重要。因为道告诉了你，不断以正确的方式尝试，你就能成功。</p>`,r:{minutes:.86,words:258},y:"a",t:"打工人手册#14 道"},["/posts/打工人手册/打工人手册_14 道.html","/posts/打工人手册/打工人手册#14 道.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#14%20%E9%81%93.html","/posts/打工人手册/打工人手册#14 道.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#14%20%E9%81%93.md"]],["v-be070b50","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_15%20%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#15 法</h1>
<figure><figcaption></figcaption></figure>
<p>佛经上说，法不轻传。<br>
因为轻易传递的法，必然不是真法。</p>
<p>道可以传，传递了，也无用。因为道这种T-1层面的东西，不是光明白就可以的。</p>
<p>每一个行业的知识都重要，但是又没那么重要。毕竟都是细节。</p>
<p>真正重要的，是心法。有了心法，你才能判断什么重要，什么不重要。<br>
才知道如何不让自己那么累，也不让自己，深陷泥潭。更不让自己，把时间投入到别人的事业上。</p>
<p>什么是心法，心法是无数细节，无数经验的汇聚。是帮你在解决某一领域问题时，起到巨大作用的东西。</p>`,r:{minutes:.91,words:272},y:"a",t:"打工人手册#15 法"},["/posts/打工人手册/打工人手册_15 法.html","/posts/打工人手册/打工人手册#15 法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#15%20%E6%B3%95.html","/posts/打工人手册/打工人手册#15 法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#15%20%E6%B3%95.md"]],["v-5116e1f2","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_16%20%E6%9C%AF.html",{d:169691398e4,e:`<h1> 打工人手册#16 术</h1>
<figure><figcaption></figcaption></figure>
<p>何为术？<br>
举一个小学四年级的例子，十字相乘法。没有这个术，很多人可能一元二次方程解起来很吃力。</p>
<p>有了这个术之后呢，你花点心思这个问题就可以解决。</p>
<p>好的，想必你已经知道什么是真正的器了。对于计算领域那就是一个计算器。对于一元二次方程的解决，那就是一个一个chatgpt。</p>
<p>术是很有用的。</p>
<p>也是无数人试图在学的东西。</p>
<p>例如在软件领域学习经典设计模式，人际领域学习人际交往的一些技巧，销售领域学习商品包装话术。</p>`,r:{minutes:1.18,words:355},y:"a",t:"打工人手册#16 术"},["/posts/打工人手册/打工人手册_16 术.html","/posts/打工人手册/打工人手册#16 术.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#16%20%E6%9C%AF.html","/posts/打工人手册/打工人手册#16 术.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#16%20%E6%9C%AF.md"]],["v-6e8eda1e","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_17%20%E5%81%B7%E6%87%92%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B.html",{d:169691398e4,e:`<h1> 打工人手册#17 偷懒是一个系统工程</h1>
<figure><figcaption></figcaption></figure>
<p>看图。<br>
觉醒的人不少，但是能做到工作上减少投入，做到举重若轻的人，不多。</p>
<p>你以为的偷懒：直接开摆，整个小组都知道你在摆烂，没有任何人委以重任。下一步直接领最差绩效，过段时间就被优化。<br>
真正高效的偷懒：用最少的精力把事情做到良好，然后余下的都是自己的时间。</p>
<p>这样才是高roi的做法。工作要做好，但不能无节制的做好。</p>
<p>你需要首先支付时间给自己的事业。</p>
<p>老实说，偷懒确实不容易。下面我提几点，下班绝不想公司的事情，公司的钱只买你上班的时间。同理，加班若无加班工资，绝不干。<br>
明面上违反公司章程，小组章程的事情，绝不干。<br>
绝不为了所谓老板的批评而精神内耗。更高境界，也不为了老板的表扬而奋发图强。</p>`,r:{minutes:1.16,words:349},y:"a",t:"打工人手册#17 偷懒是一个系统工程"},["/posts/打工人手册/打工人手册_17 偷懒是一个系统工程.html","/posts/打工人手册/打工人手册#17 偷懒是一个系统工程.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#17%20%E5%81%B7%E6%87%92%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B.html","/posts/打工人手册/打工人手册#17 偷懒是一个系统工程.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#17%20%E5%81%B7%E6%87%92%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B3%BB%E7%BB%9F%E5%B7%A5%E7%A8%8B.md"]],["v-7522514e","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_18%20%E5%85%8D%E8%B4%B9%E7%9A%84%E6%96%B9%E6%A1%88.html",{d:169691398e4,e:`<h1> 打工人手册#18 免费的方案</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>有这么两句话，今天我先免费送给各位。各位要是能看懂，也算是大道渐得。<br>
为什么，软件代表着高效？<br>
源码之下，了无秘密。</p>
<p>上面这些我以后还会掰碎慢慢讲。<br>
今天我们聊解决方案。前面我们提到了诸多东西，有道法术器。今天我们来聊一聊把无数个器以及术包装起来的东西——解决方案。</p>
<p>什么是解决方案？你会算账，你懂一点法律，这不叫解决方案，能从零到一给把公司搭建起来，这叫解决方案。你会代码，会图像识别，会制作小机器人，这不叫解决方案，你能针对对方公司，直接造一批符合对方需要的机器人，甩对方脸上。然后和他说，哥，你要的机器人好了。你们效率可以提升多少，成本可以降低多少。这，叫解决方案。</p>`,r:{minutes:1.4,words:420},y:"a",t:"打工人手册#18 免费的方案"},["/posts/打工人手册/打工人手册_18 免费的方案.html","/posts/打工人手册/打工人手册#18 免费的方案.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#18%20%E5%85%8D%E8%B4%B9%E7%9A%84%E6%96%B9%E6%A1%88.html","/posts/打工人手册/打工人手册#18 免费的方案.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#18%20%E5%85%8D%E8%B4%B9%E7%9A%84%E6%96%B9%E6%A1%88.md"]],["v-125c43c8","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_19%20%E6%B5%81%E9%87%8F%EF%BC%8C%E4%BB%A3%E8%A1%A8%E7%9D%80%E9%9C%80%E6%B1%82.html",{d:169691398e4,e:`<h1> 打工人手册#19 流量，代表着需求</h1>
<figure><figcaption></figcaption></figure>
<p>有些人瞧不起流量，瞧不起网红，瞧不起网红店铺。</p>
<p>有些人寒窗苦读十年了，有点知识了，对于那些国庆扎堆，卖各种浮夸的小玩意，装潢捡漏但猎奇的店铺，嗤之以鼻。心说，这有什么意思？<br>
但是，现实啪啪打脸。钱谁赚了？大家都是一面瞧不起网红，一面被网红的收入教育。</p>
<p>不要你认为，要普罗大众认为，今天，我普罗大众认为你好，你就是真的好。认为要考研，认为要靠背单词学英语，认为味精是化学产品，你就是。</p>
<p>流量，归根结底，是需求的化身啊。<br>
那一年，阿里刚出江湖，还只是一个小小的电商网站，不就是靠无数个个人小站，不停的买广告，引流到淘宝么。互联网的上半场，就是流量争夺的上半场。</p>`,r:{minutes:1,words:300},y:"a",t:"打工人手册#19 流量，代表着需求"},["/posts/打工人手册/打工人手册_19 流量，代表着需求.html","/posts/打工人手册/打工人手册#19 流量，代表着需求.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#19%20%E6%B5%81%E9%87%8F%EF%BC%8C%E4%BB%A3%E8%A1%A8%E7%9D%80%E9%9C%80%E6%B1%82.html","/posts/打工人手册/打工人手册#19 流量，代表着需求.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#19%20%E6%B5%81%E9%87%8F%EF%BC%8C%E4%BB%A3%E8%A1%A8%E7%9D%80%E9%9C%80%E6%B1%82.md"]],["v-731a0709","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_2%20%E5%8E%9F%E5%88%99.html",{d:169691398e4,e:`<h1> 打工人手册#2 原则</h1>
<figure><figcaption></figcaption></figure>
<p>到底什么是真正的原则。<br>
我高声在内心说，今天，我要确定这样一个原则，不晚于某某时候下班。<br>
好，现在有重活，累活了，你还是跟着一起加班了。<br>
这是原则么？</p>
<p>你的原则到底自己有没有恪守。<br>
如果今天可以因为项目比较忙，加班了，明天为了工作上表现一下比较忙加班了，后天呢？<br>
是不是对外的形象上，你没有维护住自己的原则。所谓原则，你又是自己在欺骗自己什么呢？</p>
<p>依我看，既然你提了原则，那就要恪守。<br>
任性点，外力会因你而变。</p>`,r:{minutes:.62,words:186},y:"a",t:"打工人手册#2 原则"},["/posts/打工人手册/打工人手册_2 原则.html","/posts/打工人手册/打工人手册#2 原则.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#2%20%E5%8E%9F%E5%88%99.html","/posts/打工人手册/打工人手册#2 原则.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#2%20%E5%8E%9F%E5%88%99.md"]],["v-96a0dfea","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_20%20%E4%BA%8C%E7%9C%9F%E4%B9%8B%E9%97%B4%EF%BC%8C%E5%BF%85%E6%9C%89%E4%B8%80%E5%81%87.html",{d:169691398e4,e:`<h1> 打工人手册#20 二真之间，必有一假</h1>
<figure><figcaption></figcaption></figure>
<p>同一领域，同一场景下，如果有两个人，两个事情，都说他是真的。<br>
都说他是不二法门。<br>
那错了，一定有一个错了。</p>
<p>二真之间，必有一假。<br>
一定有正确的那条路，一定有错误的那条路，你不要说谁谁谁靠扎十年马步成功，谁谁又靠挥刀自宫成功。<br>
扎马步和挥刀自宫或许都是不二法门。</p>
<p>但错了，对你而言。不是。对你而言。没有无数种不二法门。<br>
没有一方面，另一方面。<br>
我们的教育受马克思的辩证法影响太深，辩证法好是好，但是他无法帮助你做到极致。<br>
极致的前提是，你不能相信A对，B也对。写一个技术方案，你不能说A好，B也好。要么是你马马虎虎，要么你压根对整个系统没有深入的调研与了解。<br>
你定了一个技术方案，别人也定了一个技术方案。你们如果都去做，且做同一个事情，那么，谁最后做的更快，更好，谁就是真。<br>
现实世界，既然方案已经定了，肯定是没法既用A法做，又用B法做的。<br>
但是，A法与B法，必然有一个更加高效。</p>`,r:{minutes:1.6,words:479},y:"a",t:"打工人手册#20 二真之间，必有一假"},["/posts/打工人手册/打工人手册_20 二真之间，必有一假.html","/posts/打工人手册/打工人手册#20 二真之间，必有一假.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#20%20%E4%BA%8C%E7%9C%9F%E4%B9%8B%E9%97%B4%EF%BC%8C%E5%BF%85%E6%9C%89%E4%B8%80%E5%81%87.html","/posts/打工人手册/打工人手册#20 二真之间，必有一假.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#20%20%E4%BA%8C%E7%9C%9F%E4%B9%8B%E9%97%B4%EF%BC%8C%E5%BF%85%E6%9C%89%E4%B8%80%E5%81%87.md"]],["v-87363a26","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_21%20%E6%A8%A1%E7%B3%8A%E7%9A%84%E4%BA%8B%E6%83%85%EF%BC%8C%E5%BF%85%E7%84%B6%E8%AE%A9%E4%BD%A0%E4%BB%98%E5%87%BA%E4%BB%A3%E4%BB%B7.html",{d:169691398e4,e:`<h1> 打工人手册#21 模糊的事情，必然让你付出代价</h1>
<figure><figcaption></figcaption></figure>
<p>小事情上可以模糊，今天吃什么，什么时候睡觉，打碎个盘子，这些都没有问题。<br>
没有人去一板一眼的关心这些，你就是乱看地图，走到爪洼国里去了，也没有问题。</p>
<p>但有些事情，模糊不得。<br>
涉及钱的，涉及生存的，涉及竞争的。<br>
工作是你吃饭的本事，前文我们一直说，不要为工作浪费额外的情绪资源。但是，这难道代表着，你不应该在职场上精益求精么？</p>
<p>代码不看清楚就开始动手；<br>
一厢情愿，认为系统逻辑是这样的，所以这样做了，连基本的系统规则还没搞清楚，只幻想着可以轻松，奇迹般搞定问题；<br>
认为自己是价值投资，就可以靠买入一些白马股赚钱了；<br>
房子已经在跌了，我也不用关心；<br>
钱，平时躺在银行里睡大觉；<br>
觉得工作是个铁饭碗，35岁被辞退，一定是能力不行。</p>`,r:{minutes:1.23,words:369},y:"a",t:"打工人手册#21 模糊的事情，必然让你付出代价"},["/posts/打工人手册/打工人手册_21 模糊的事情，必然让你付出代价.html","/posts/打工人手册/打工人手册#21 模糊的事情，必然让你付出代价.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#21%20%E6%A8%A1%E7%B3%8A%E7%9A%84%E4%BA%8B%E6%83%85%EF%BC%8C%E5%BF%85%E7%84%B6%E8%AE%A9%E4%BD%A0%E4%BB%98%E5%87%BA%E4%BB%A3%E4%BB%B7.html","/posts/打工人手册/打工人手册#21 模糊的事情，必然让你付出代价.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#21%20%E6%A8%A1%E7%B3%8A%E7%9A%84%E4%BA%8B%E6%83%85%EF%BC%8C%E5%BF%85%E7%84%B6%E8%AE%A9%E4%BD%A0%E4%BB%98%E5%87%BA%E4%BB%A3%E4%BB%B7.md"]],["v-09c7f6b9","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_22%20%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%8F%AF%E4%BB%A5%E5%B9%B2%E4%BB%80%E4%B9%88.html",{d:169691398e4,e:`<h1> 打工人手册#22 一个小时可以干什么</h1>
<figure><figcaption></figcaption></figure>
<p>一个小时可以干什么。<br>
一个小时什么也干不了。<br>
一个小时可以干很多事情。</p>
<p>其实想到这个问题，我想到的是，一天，10个小时（累计高效时间），可以干什么。</p>
<p>一个小时可以干很多事情，可以认真阅读十篇文章；<br>
可以定位一个问题；<br>
可以打开自己一直应该看，但是一直没有看的视频；<br>
可以去游泳一次，增强身体；</p>
<p>有些人觉得，一天干不了什么。那是因为你没有把时间拆分。在不同事情之间切换事务，是有巨大的损耗的。将任务拆解为一个小时，一个小时可以做的。</p>`,r:{minutes:.99,words:297},y:"a",t:"打工人手册#22 一个小时可以干什么"},["/posts/打工人手册/打工人手册_22 一个小时可以干什么.html","/posts/打工人手册/打工人手册#22 一个小时可以干什么.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#22%20%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%8F%AF%E4%BB%A5%E5%B9%B2%E4%BB%80%E4%B9%88.html","/posts/打工人手册/打工人手册#22 一个小时可以干什么.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#22%20%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%8F%AF%E4%BB%A5%E5%B9%B2%E4%BB%80%E4%B9%88.md"]],["v-f04a8126","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_23%20%E5%BF%99%E5%88%B0%E6%97%A0%E6%9A%87%E5%85%B3%E6%B3%A8%E5%85%B6%E4%BB%96%E4%BA%8B%E6%83%85.html",{d:169691398e4,e:`<h1> 打工人手册#23 忙到无暇关注其他事情</h1>
<figure><figcaption></figcaption></figure>
<p>职场最危险的就是忙碌。<br>
即便忙碌，也要化忙为闲。</p>
<p>事情卡住了，那就卡住了。你千万不要拼了老命把进度跟上，然后再努力的去说自己有多忙。何必呢？<br>
这种事后的努力说忙，还有被别人说的嫌疑。别人想，你这也太爱自吹自擂了。<br>
不需要这样。</p>
<p>事情卡住了，你付出你的能量去推动，但是做事情也不要着急。一点点来，做好份内的那一部分。就慢一点，不要说不行，不要说难，不要疯狂去催促。只说确实需要更多时间，问题确实很多。这些嘛，都是客观的。</p>`,r:{minutes:.94,words:282},y:"a",t:"打工人手册#23 忙到无暇关注其他事情"},["/posts/打工人手册/打工人手册_23 忙到无暇关注其他事情.html","/posts/打工人手册/打工人手册#23 忙到无暇关注其他事情.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#23%20%E5%BF%99%E5%88%B0%E6%97%A0%E6%9A%87%E5%85%B3%E6%B3%A8%E5%85%B6%E4%BB%96%E4%BA%8B%E6%83%85.html","/posts/打工人手册/打工人手册#23 忙到无暇关注其他事情.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#23%20%E5%BF%99%E5%88%B0%E6%97%A0%E6%9A%87%E5%85%B3%E6%B3%A8%E5%85%B6%E4%BB%96%E4%BA%8B%E6%83%85.md"]],["v-12328457","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_24%20%E6%89%8D%E5%8D%8E%E7%9A%84%E8%80%97%E6%95%A3.html",{d:169691398e4,e:`<h1> 打工人手册#24 才华的耗散</h1>
<figure><figcaption></figcaption></figure>
<p>才华是热量。<br>
才华会凝固在你的身上。这可以反应为，你学会了某个东西，掌握了某个事情的关键领域，能够提供完整的解决方案；你换一个环境，花费一点时间，就可以很快把这一套继续玩起来。</p>
<p>但是还有很多才华，不见了，像是散热一样，消失了。<br>
才华是时间与思考构建的产物，有些人以为自己学到了，就是完全🆗了。不记录，不输出，不把才华凝结成作品。<br>
过了一段时间，你花费了很多心思，终于把某个事情重新跑通后。一拍大腿，心想，该死的，我之前搞过这一套东西的。</p>`,r:{minutes:.94,words:283},y:"a",t:"打工人手册#24 才华的耗散"},["/posts/打工人手册/打工人手册_24 才华的耗散.html","/posts/打工人手册/打工人手册#24 才华的耗散.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#24%20%E6%89%8D%E5%8D%8E%E7%9A%84%E8%80%97%E6%95%A3.html","/posts/打工人手册/打工人手册#24 才华的耗散.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#24%20%E6%89%8D%E5%8D%8E%E7%9A%84%E8%80%97%E6%95%A3.md"]],["v-7c1c3600","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_25%20%E8%B5%9A%E4%B8%80%E5%8D%83%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#25 赚一千万的方法</h1>
<figure><figcaption></figcaption></figure>
<p>人生有多少痛苦，有多少渴望别人理解的时候。<br>
职场上有多少委屈，多少别领导骂，被客户要求东要求西的时候。</p>
<p>现在，这些都有解决方案了。那就是赚到一千万。<br>
你说你很牛，思想过人，没人听。你把一千万拿出来，摔在桌子上，大家都相信了。</p>
<p>物理说服（给人感官刺激），才是说服最有效的方式。</p>
`,r:{minutes:.44,words:133},y:"a",t:"打工人手册#25 赚一千万的方法"},["/posts/打工人手册/打工人手册_25 赚一千万的方法.html","/posts/打工人手册/打工人手册#25 赚一千万的方法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#25%20%E8%B5%9A%E4%B8%80%E5%8D%83%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/打工人手册/打工人手册#25 赚一千万的方法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#25%20%E8%B5%9A%E4%B8%80%E5%8D%83%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-460d1f69","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_26%20%E8%B5%9A%E4%B8%80%E7%99%BE%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#26 赚一百万的方法</h1>
<figure><figcaption></figcaption></figure>
<p>赚一千万难，难就难在，根本没有一千万的单子。<br>
这辈子也幻想不到年薪千万。<br>
赚千万，让你意识到，只能靠资产和架构赚钱。<br>
赚百万却很简单，因为我就能赚百万。<br>
赚百万，只需要选对赛道，努力奋斗就好了。名校名企，996，努力攀爬职场天梯。年薪百万就是你的回报。</p>
<p>但是赚一百万也最难的。很多人赚一百万的方法，就是出售自己的人力资源，等待着公司的涨薪。等到某一天人力成本变高，年龄变大，回首四周。<br>
才恍然明白，努力打工赚百万和构建机制赚百万的方法，从来就不同。</p>`,r:{minutes:.69,words:208},y:"a",t:"打工人手册#26 赚一百万的方法"},["/posts/打工人手册/打工人手册_26 赚一百万的方法.html","/posts/打工人手册/打工人手册#26 赚一百万的方法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#26%20%E8%B5%9A%E4%B8%80%E7%99%BE%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/打工人手册/打工人手册#26 赚一百万的方法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#26%20%E8%B5%9A%E4%B8%80%E7%99%BE%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-67a60806","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_27%20%E8%B5%9A%E5%8D%81%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#27 赚十万的方法</h1>
<figure><figcaption></figcaption></figure>
<p>赚千万靠机制。<br>
赚百万靠人力资源。</p>
<p>赚十万，啥也不用靠，你只需要马上辍学，去大润发刮鳝鱼，两三年就能赚到十万。<br>
那么，还有什么其他办法，我可以赚到这十万呢？那就是企业服务。<br>
例如你开发了一款软件（例如医院药品自动管理系统），解决了某个行业的一系列问题，这个企业的人愿意不愿意使用你的软件呢?<br>
愿意啊，我公司这么多人，每个人使用这个软件，提升了效率。<br>
岂不是等同于，多了好几个年薪10~20w的人为我打工么？<br>
企业服务有着巨大的市场，但是也是最难做的。你一个做互联网的，凭什么能做出一款迎合对方痛点的软件呢？这在互联网里，叫B端市场。<br>
而且，但凡高手在此，就可以读到一个隐含条件。迎合对方痛点，那成本呢？</p>`,r:{minutes:1.07,words:321},y:"a",t:"打工人手册#27 赚十万的方法"},["/posts/打工人手册/打工人手册_27 赚十万的方法.html","/posts/打工人手册/打工人手册#27 赚十万的方法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#27%20%E8%B5%9A%E5%8D%81%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/打工人手册/打工人手册#27 赚十万的方法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#27%20%E8%B5%9A%E5%8D%81%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-19281f73","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_28%20%E8%B5%9A%E4%B8%80%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#28 赚一万的方法</h1>
<figure><figcaption></figcaption></figure>
<p>赚一万才是最简单的。<br>
你现在什么都不需要做，一个月后，叮当，一万月薪到账。</p>
<p>塔勒布：每个月领工资本质是一种上瘾的毒药。<br>
月薪给你虚幻的安全感，用你足以体面，不足以自由的方式，把你的时间卖给公司。</p>
<p>公司从来都是不亏的。给你发的工资，必然从产生的价值中收获回来。如果是销售，这种收获就直接一些。如果是程序员，法务，财务，你产生的价值将是整个大的系统一部分，最终也会被老板收回来。<br>
因为老板赚钱有一个基础：产出&gt;投入[你们的工资]。</p>`,r:{minutes:1.22,words:366},y:"a",t:"打工人手册#28 赚一万的方法"},["/posts/打工人手册/打工人手册_28 赚一万的方法.html","/posts/打工人手册/打工人手册#28 赚一万的方法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#28%20%E8%B5%9A%E4%B8%80%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/打工人手册/打工人手册#28 赚一万的方法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#28%20%E8%B5%9A%E4%B8%80%E4%B8%87%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-e67be74a","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_29%20%E8%B5%9A%E4%B8%80%E5%8D%83%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#29 赚一千的方法</h1>
<figure><figcaption></figcaption></figure>
<p>前面说，赚一万容易。<br>
那是通过工资赚一万容易。</p>
<p>你要去单独赚个一万试试？怎么持续赚一万呢，提供高价值的咨询服务，这是赚一万的方法。一万的服务是什么，是房产的手续费，是高价值知识的实操班。</p>
<p>赚一千的方法，就和这个差不多。<br>
你要提供点什么，搭建点什么。<br>
赚一千的方法，一旦准备好了，从来不是为了赚一个一千准备的。</p>
<p>例如电脑倒卖，一笔赚一千。例如非核心技能的培训班(琴棋书画这些)，价格也就两三千。例如写一个常见的小程序，这些东西，价格就是一千多。</p>`,r:{minutes:.75,words:226},y:"a",t:"打工人手册#29 赚一千的方法"},["/posts/打工人手册/打工人手册_29 赚一千的方法.html","/posts/打工人手册/打工人手册#29 赚一千的方法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#29%20%E8%B5%9A%E4%B8%80%E5%8D%83%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/打工人手册/打工人手册#29 赚一千的方法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#29%20%E8%B5%9A%E4%B8%80%E5%8D%83%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-02bc6f94","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_3%20%E8%BE%93%E5%87%BA%E5%8A%9F%E7%8E%87.html",{d:169691398e4,e:`<h1> 打工人手册#3 输出功率</h1>
<figure><figcaption></figcaption></figure>
<p>为何我们大多数人，除了工作之外，少有所成。<br>
这儿的少有所成是说，除了工作之外，没有赚到其他的钱。<br>
为何呢？<br>
我们投入其他事情的时候，总是有一时间的热情，一时间投入了半个夜晚，半个早晨，然后项目推进了很多。</p>
<p>例如你自己做一个淘宝网店，做这些差不多等于你把店铺建好了，第一个商品发布上去了。<br>
又例如你写代码，差不多等于你把架构图画好了。</p>
<p>但是，最大的问题就来啦，那就是，只有输出的最大功率。没有平均功率。</p>`,r:{minutes:.74,words:223},y:"a",t:"打工人手册#3 输出功率"},["/posts/打工人手册/打工人手册_3 输出功率.html","/posts/打工人手册/打工人手册#3 输出功率.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#3%20%E8%BE%93%E5%87%BA%E5%8A%9F%E7%8E%87.html","/posts/打工人手册/打工人手册#3 输出功率.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#3%20%E8%BE%93%E5%87%BA%E5%8A%9F%E7%8E%87.md"]],["v-5e72a127","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_30%20%E8%B5%9A%E4%B8%80%E7%99%BE%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#30 赚一百的方法</h1>
<figure><figcaption></figcaption></figure>
<p>有些人看我说得越来越小了，便觉得越来越不重要了。<br>
一百块，谁赚不到？</p>
<p>但是，我们说的，从来都不是赚一百块，而是搭建一个机制，让你可以源源不断的赚一百块。</p>
<p>之前阿里云有一个拉新人的活动，拉一下新人，一单就是给一百块。你如果有自己的网站，把这个贴在旁边，只要有人去买了，你提成就是100。</p>
<p>购买率或许低，但如果从你这儿过的流量多。你就可以赚钱。</p>
<p>一百块的机会中，我们看到了。终于，这个场景里，你不再需要[说服]这个技能了。这是巨大的差别，不需要说服，意味着，你可以把人力解放出去。一旦人力能解放出去，那么做的事情就可以复制。就能源源不断的赚这一百块。</p>`,r:{minutes:1.42,words:425},y:"a",t:"打工人手册#30 赚一百的方法"},["/posts/打工人手册/打工人手册_30 赚一百的方法.html","/posts/打工人手册/打工人手册#30 赚一百的方法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#30%20%E8%B5%9A%E4%B8%80%E7%99%BE%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/打工人手册/打工人手册#30 赚一百的方法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#30%20%E8%B5%9A%E4%B8%80%E7%99%BE%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-2775519f","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_31%20%E6%88%90%E6%9C%AC%E4%B8%8E%E5%BA%93%E5%AD%98%E7%9A%84%E5%88%86%E9%87%8E.html",{d:169691398e4,e:`<h1> 打工人手册#31 成本与库存的分野</h1>
<figure><figcaption></figcaption></figure>
<p>一个事情，你的成本是多少。</p>
<p>例如，你是软件工程师，你在系统后台加了一个配置。这个配置，需要你自己来手动操作，如果用户想要使用这个高级功能，需要经过如下流程。<br>
充值 -&gt; 主动或被动 -&gt; 你确认充值收到 -&gt; 你获取用户名，填写进新高级功能白名单。</p>
<p>这就是成本。你心想，这成本也很低啊。 我就手操作一下，2min钟搞定。<br>
但是，你错了。现实世界中，你这个流程，极有可能10min才能搞定。</p>`,r:{minutes:1.97,words:592},y:"a",t:"打工人手册#31 成本与库存的分野"},["/posts/打工人手册/打工人手册_31 成本与库存的分野.html","/posts/打工人手册/打工人手册#31 成本与库存的分野.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#31%20%E6%88%90%E6%9C%AC%E4%B8%8E%E5%BA%93%E5%AD%98%E7%9A%84%E5%88%86%E9%87%8E.html","/posts/打工人手册/打工人手册#31 成本与库存的分野.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#31%20%E6%88%90%E6%9C%AC%E4%B8%8E%E5%BA%93%E5%AD%98%E7%9A%84%E5%88%86%E9%87%8E.md"]],["v-272b322a","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_32%20%E8%B5%9A%E5%8D%81%E5%9D%97%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#32 赚十块的方法</h1>
<figure><figcaption></figcaption></figure>
<p>十块是礼物，是打赏。<br>
不要以为钱好赚的。打赏一百的，你没点梗，没点钩子，别人不肯的。</p>
<p>只肯一次打赏十块钱的。<br>
但是，但是，难道挣钱只能靠打赏么。<br>
打赏是流量变现的一种方式，还有一种方式，带货。</p>
<p>带货的平均收入，就在 10 元上下。抖音上卖一张券，抖音向商家抽 4%，差不多也就十来块钱。<br>
这些钱我们挣不到，因为这流量你没有，这个平台你也没有。<br>
还有什么地方，可以一次赚十块钱呢？拼多多补贴，各大 up 主的拉人头啊。付费阅读啊，傻孩子。</p>`,r:{minutes:.77,words:232},y:"a",t:"打工人手册#32 赚十块的方法"},["/posts/打工人手册/打工人手册_32 赚十块的方法.html","/posts/打工人手册/打工人手册#32 赚十块的方法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#32%20%E8%B5%9A%E5%8D%81%E5%9D%97%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/打工人手册/打工人手册#32 赚十块的方法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#32%20%E8%B5%9A%E5%8D%81%E5%9D%97%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-338886d1","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_33%20%E8%B5%9A%E4%B8%80%E5%9D%97%E9%92%B1%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#33 赚一块钱的方法</h1>
<figure><figcaption></figcaption></figure>
<p>前面讲了无数种赚不知道多少钱的方法，这儿终于进入了我真正想说的正题。<br>
前面无数种是排比，是分析，是让你意识到什么是成本，什么是产出。</p>
<p>想要挣一块钱，你怎么挣？<br>
你不会再使用任何说服技能，你会不想要在事情上浪费任何的时间成本。<br>
因为，这只是一块钱啊。</p>
<p>我就赚一块钱的生意，还给你扯一大堆的，与其扯一大堆，不如这生意直接不做了。</p>
<p>越是这样想，反而越触发到了生意的本质。<br>
赚一块钱的礼物，你会下意识的选择自动化。自动化pdf贩售/十块钱多钱卖给别人一堆考研资料/12块开通会员，阅读整个网站，知乎教别人穿搭挂各种淘宝链接。</p>`,r:{minutes:.96,words:288},y:"a",t:"打工人手册#33 赚一块钱的方法"},["/posts/打工人手册/打工人手册_33 赚一块钱的方法.html","/posts/打工人手册/打工人手册#33 赚一块钱的方法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#33%20%E8%B5%9A%E4%B8%80%E5%9D%97%E9%92%B1%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/打工人手册/打工人手册#33 赚一块钱的方法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#33%20%E8%B5%9A%E4%B8%80%E5%9D%97%E9%92%B1%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-41f517de","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_34%20%E8%B5%9A%E4%B8%80%E6%AF%9B%E9%92%B1%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:169691398e4,e:`<h1> 打工人手册#34 赚一毛钱的方法</h1>
<figure><figcaption></figcaption></figure>
<p>赚钱系列的最后一期了。法不轻传，道不贱卖，后面这种干货分享会越来越少。赚钱系列每一篇文章你去深挖，都可以找到一个你的赛道。高手看了之后，更是可以融汇贯通，在好几个赛道上赚钱。</p>
<p>如何赚一毛钱？这个问题很难。从来没有过这么低的要求。<br>
从10~1块，你不得不使用自动化来降低成本，在一毛钱的领域，你光自动化甚至已经不够了。</p>
<p>你得有海量的，低质量的泛流量。这才撑得起你的自动化，不然有什么用？</p>
<p>哪些企业在这样一毛一毛的赚钱呢，移动联通是的，水电是的，券商是的。<br>
这些你做不到。因为你无法垄断，也无法渗透到他们那样。</p>`,r:{minutes:1.46,words:437},y:"a",t:"打工人手册#34 赚一毛钱的方法"},["/posts/打工人手册/打工人手册_34 赚一毛钱的方法.html","/posts/打工人手册/打工人手册#34 赚一毛钱的方法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#34%20%E8%B5%9A%E4%B8%80%E6%AF%9B%E9%92%B1%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/打工人手册/打工人手册#34 赚一毛钱的方法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#34%20%E8%B5%9A%E4%B8%80%E6%AF%9B%E9%92%B1%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-9e788cf6","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_35%20%E6%B6%88%E8%B4%B9%E7%9A%84%E5%8D%87%E7%BA%A7.html",{d:169691398e4,e:`<h1> 打工人手册#35 消费的升级</h1>
<figure><figcaption></figcaption></figure>
<p>小城市第一次通地铁，人挤满了地铁口。</p>
<p>消费在升级，还会继续升级下去。国庆期间，我也在实地踩点看盘。</p>
<p>机会像是海水一样多。赚钱的八种模式，已经悉数传授给你，你可以列一个表格。</p>
<p>我当前赚钱在哪个象限，哪一个象限，我是可以扩展的。</p>
`,r:{minutes:.37,words:112},y:"a",t:"打工人手册#35 消费的升级"},["/posts/打工人手册/打工人手册_35 消费的升级.html","/posts/打工人手册/打工人手册#35 消费的升级.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#35%20%E6%B6%88%E8%B4%B9%E7%9A%84%E5%8D%87%E7%BA%A7.html","/posts/打工人手册/打工人手册#35 消费的升级.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#35%20%E6%B6%88%E8%B4%B9%E7%9A%84%E5%8D%87%E7%BA%A7.md"]],["v-4b589236","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_36%20%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BA%B2%E6%83%85.html",{d:169691398e4,e:`<h1> 打工人手册#36 最伟大的亲情</h1>
<figure><figcaption></figcaption></figure>
<p>想做点什么，真的难。<br>
人在外地，有工作，时间都泡在工作上，触手可及。<br>
想要置办的物业在家乡，遥远难以掌控。<br>
没跑过盘。第一次跑。钱我出，时间我出，到最后，还要花心思，说服父母。<br>
什么是说线做泪啊，这就是说线做泪。就是哪怕你已经怀揣着百来万了，你还要努力去调动每一根神经，去说服，去争辩。</p>
<p>所以，没有独立跑通的事情，不要交给父母，不要让父母参与决策。你去做就好了。<br>
我已经算家庭建设非常好的一个孩子了，但即便这种情况下，奢求父母主动去突破，去抗事情，仍旧难以实现。那些家庭建设更差的人呢，岂不是做事前，父母都要成为阻力？</p>`,r:{minutes:1.19,words:356},y:"a",t:"打工人手册#36 最伟大的亲情"},["/posts/打工人手册/打工人手册_36 最伟大的亲情.html","/posts/打工人手册/打工人手册#36 最伟大的亲情.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#36%20%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BA%B2%E6%83%85.html","/posts/打工人手册/打工人手册#36 最伟大的亲情.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#36%20%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BA%B2%E6%83%85.md"]],["v-7ca6866c","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_37%20%E5%B0%8F%E5%85%AC%E5%8A%A1%E5%91%98%E7%9A%84%E8%8B%A6%E6%A5%9A.html",{d:1698126131e3,e:`<h1> 打工人手册#37 小公务员的苦楚</h1>
<figure><figcaption></figcaption></figure>
<p>若干年前，莫泊桑写了一篇文章《小公务员之死》。<br>
内容不大记得了，只记得一个字，怕。<br>
一个公务员弄脏了一个上流社会的贵族的衣服，后面在恐惧中渡过了一生。</p>
<p>苦啊。<br>
还有什么比这更苦的事情么？<br>
但是天下还有比这更令人觉得可笑的苦楚么？</p>
<p>莫泊桑不知道，即便过了三四百年，有一群叫中产阶级的人，还是这样。<br>
怕领导批评，怕同事指摘。<br>
前怕狼后怕虎。怕得真实，怕得很容易让人共情。<br>
但是这也是最可笑的害怕，因为这种害怕都是自找的。</p>`,r:{minutes:.84,words:252},y:"a",t:"打工人手册#37 小公务员的苦楚"},["/posts/打工人手册/打工人手册_37 小公务员的苦楚.html","/posts/打工人手册/打工人手册#37 小公务员的苦楚.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#37%20%E5%B0%8F%E5%85%AC%E5%8A%A1%E5%91%98%E7%9A%84%E8%8B%A6%E6%A5%9A.html","/posts/打工人手册/打工人手册#37 小公务员的苦楚.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#37%20%E5%B0%8F%E5%85%AC%E5%8A%A1%E5%91%98%E7%9A%84%E8%8B%A6%E6%A5%9A.md"]],["v-0b5fb7fc","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_38%20%E6%89%AB%E5%B9%B3%E5%89%8D%E8%A1%8C%E7%9A%84%E9%9A%9C%E7%A2%8D.html",{d:1698126131e3,e:`<h1> 打工人手册#38 扫平前行的障碍</h1>
<figure><figcaption></figcaption></figure>
<p>日常做事情，是有很多卡点的。<br>
例如这个操作很耗时；那个操作一有点不理解；或者这个设备总是出了些故障；另外一个材料，每个月都需要月底手动花一天处理。</p>
<p>这些都是卡点，都需要解决。<br>
有一台机器，或者一个系统，故障率是5%。那就是你使用120分钟，系统会故障6分钟(120<em>0.05)。<br>
实际故障并非一产生就能解决，可能这个故障是因为螺丝松动，或者某个特殊情况而产生，你需要把机器重启，或者把数据手动恢复。这一来一回之间，预估需要</em>3倍时间，即18分钟，即故障率虽然只有百分之5，但实际造成了15%的时间占用。</p>`,r:{minutes:.97,words:292},y:"a",t:"打工人手册#38 扫平前行的障碍"},["/posts/打工人手册/打工人手册_38 扫平前行的障碍.html","/posts/打工人手册/打工人手册#38 扫平前行的障碍.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#38%20%E6%89%AB%E5%B9%B3%E5%89%8D%E8%A1%8C%E7%9A%84%E9%9A%9C%E7%A2%8D.html","/posts/打工人手册/打工人手册#38 扫平前行的障碍.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#38%20%E6%89%AB%E5%B9%B3%E5%89%8D%E8%A1%8C%E7%9A%84%E9%9A%9C%E7%A2%8D.md"]],["v-2266481e","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_39%20%E6%97%B6%E4%BB%A3%E7%9A%84%E5%85%AD%E4%B8%87%E4%BA%94.html",{d:1698126131e3,e:`<h1> 打工人手册#39 时代的六万五</h1>
<figure><figcaption></figcaption></figure>
<p>本文又名，试错的成本。<br>
为了试错，我已经花了多少钱了？<br>
昨天打开电脑，纸和笔，一算，花了六万五了。<br>
这笔钱很多，我打工赚回来，也要花费点时间。我的钱亏在，基金，价值投资，问题债。房产投资我刚开始搞，还没入局。其他小淘宝店等，没大力投入。自媒体现在还没入局。</p>
<p>这笔钱也很少，很多人第一轮开店，这笔钱也就亏掉了。</p>
<p>知识，用真金白银学习。大家都无话可说。有些人亏了，一转身重新投入到正确的事情上，并依靠此基业长青。<br>
有些人亏了，丢失了全部本金，无翻身的机会。</p>`,r:{minutes:1.08,words:324},y:"a",t:"打工人手册#39 时代的六万五"},["/posts/打工人手册/打工人手册_39 时代的六万五.html","/posts/打工人手册/打工人手册#39 时代的六万五.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#39%20%E6%97%B6%E4%BB%A3%E7%9A%84%E5%85%AD%E4%B8%87%E4%BA%94.html","/posts/打工人手册/打工人手册#39 时代的六万五.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#39%20%E6%97%B6%E4%BB%A3%E7%9A%84%E5%85%AD%E4%B8%87%E4%BA%94.md"]],["v-9954f460","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_4%20%E4%B8%AD%E9%80%94.html",{d:169691398e4,e:`<h1> 打工人手册#4 中途</h1>
<figure><figcaption></figcaption></figure>
<p>最近有些倦怠。做了一个比较大的需求，狠狠练了一把高并发，事务，锁的逻辑。</p>
<p>需求接近尾声，有一种已经完成了99%的感觉。完成99%，毕竟不是100%。所以有一种事情，完成大半时的倦怠感。</p>
<p>生活很多时候就是这样啊，什么是完成？100%才是完成。99%不是完成。</p>
<p>不论倦怠如何，继续按照计划向前推进。</p>
`,r:{minutes:.43,words:128},y:"a",t:"打工人手册#4 中途"},["/posts/打工人手册/打工人手册_4 中途.html","/posts/打工人手册/打工人手册#4 中途.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#4%20%E4%B8%AD%E9%80%94.html","/posts/打工人手册/打工人手册#4 中途.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#4%20%E4%B8%AD%E9%80%94.md"]],["v-7e44c719","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_40%20%E6%96%97%E5%BF%97.html",{d:1698126131e3,e:`<h1> 打工人手册#40 斗志</h1>
<figure><figcaption></figcaption></figure>
<p>生活，职场或者其他任何一切都是这样的，你想做点什么，结果进二退一。<br>
进了两步就退回一步，甚至有些时候，前进两步连着两步都要退回来。</p>
<p>到最后你四下看去，做了不少事，但最后只剩下一个机制的空壳，还是没有跑通整个环节。</p>
<p>难难难，这就是做事之难。<br>
当你付出的努力被抵消时，当方向被论证其实没有用时。你怎么想？</p>
<p>有些人沮丧，有些人放弃，有些人心想：你看，果然努力和和不努力的区别很小，最后我的收入来自于打工，他的也来自，没有区别。</p>`,r:{minutes:.82,words:245},y:"a",t:"打工人手册#40 斗志"},["/posts/打工人手册/打工人手册_40 斗志.html","/posts/打工人手册/打工人手册#40 斗志.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#40%20%E6%96%97%E5%BF%97.html","/posts/打工人手册/打工人手册#40 斗志.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#40%20%E6%96%97%E5%BF%97.md"]],["v-5796c9f4","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_41%20%E8%B5%84%E6%BA%90%E7%9A%84%E6%9E%81%E8%87%B4%E5%88%A9%E7%94%A8.html",{d:1698126131e3,e:`<h1> 打工人手册#41 资源的极致利用</h1>
<figure><figcaption></figcaption></figure>
<p>如何把资源利用到极致？<br>
我不知道。我不是那么明白这个问题。<br>
但是我能说上两句。<br>
对于你最懂的行业，你天然的就是明白如何知道把资源利用到极致的。例如软件，你在这个行业浸淫久了，就能学会如何把开发的时间压缩到极致，如何把软件的性能提升到极致。</p>
<p>但除此之外呢？生活上呢，如何把时间利用到极致呢？<br>
钱如何使用，时间资源如何使用，购买的电子产品如何使用，结实的人脉资源如何使用？<br>
这里面，难道不是每个都有一个利用到极致的心法在么？</p>`,r:{minutes:.99,words:297},y:"a",t:"打工人手册#41 资源的极致利用"},["/posts/打工人手册/打工人手册_41 资源的极致利用.html","/posts/打工人手册/打工人手册#41 资源的极致利用.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#41%20%E8%B5%84%E6%BA%90%E7%9A%84%E6%9E%81%E8%87%B4%E5%88%A9%E7%94%A8.html","/posts/打工人手册/打工人手册#41 资源的极致利用.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#41%20%E8%B5%84%E6%BA%90%E7%9A%84%E6%9E%81%E8%87%B4%E5%88%A9%E7%94%A8.md"]],["v-115344b1","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_42%20%E5%A6%82%E4%BD%95%E6%89%93%E8%B4%A5%E5%85%AC%E5%8F%B8.html",{d:1698126131e3,e:`<h1> 打工人手册#42 如何打败公司</h1>
<figure><figcaption></figcaption></figure>
<p>如何打败公司？例如公司给你的薪水是100元/h，意思是，你在公司里，用自己的脑子输出价值1h，你就可以获得100块。那你有什么办法可以创造，超过100元每小时的收益呢？<br>
今天，从椅子说起。<br>
公司椅子，就是为了让你坐得舒服的。家里更是要如此，要让在家里为自己干活，比公司干活还要舒服，你需要做到什么？<br>
舒适的灯光、到点就送过来的食物（或者一个楼下食堂）、月度回顾最近做的事情。高性能电脑，适宜的温度，战斗的环境，可以一起交流的队友。<br>
做得好，就可以升职的预期。各类中间团队为你提供完整的解决方案。合适桌椅。<br>
打败公司，就是打败公司背后对应着的一整套机制。<br>
如何保证，今天你从平台离开，创造的价值，比在平台上还大呢？说明你已经可以打败公司背后对应的那一套机制了。<br>
从商业上，你有自己的商业模式之道。从效率，以及提升效率上，你有咨询顾问，你有工具，你有可以提升效率的舒适的环境。<br>
之前看了一本书，叫《软技能》，里面的作者说。虽然他离职创业了。但他还是坚持早上九点上班，九点下班，每天雷打不动。<br>
为什么？因为这套机制真的是可行的。你不能把床放在离你太近的地方，你真的会想要上床。你不能骗自己说，我晚一点再开始工作，那可能就永远不会再开始工作。<br>
今年我，提出了一个目标，那就是为自己写代码。如何让自己顺畅的为自己写代码呢？那就是，搭建一套机制，让自己为自己写代码，和为公司写代码一样顺服。</p>`,r:{minutes:1.74,words:521},y:"a",t:"打工人手册#42 如何打败公司"},["/posts/打工人手册/打工人手册_42 如何打败公司.html","/posts/打工人手册/打工人手册#42 如何打败公司.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#42%20%E5%A6%82%E4%BD%95%E6%89%93%E8%B4%A5%E5%85%AC%E5%8F%B8.html","/posts/打工人手册/打工人手册#42 如何打败公司.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#42%20%E5%A6%82%E4%BD%95%E6%89%93%E8%B4%A5%E5%85%AC%E5%8F%B8.md"]],["v-38562857","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_43%20%E8%81%8C%E5%9C%BA%E6%98%AF%E6%B6%88%E8%80%97%E6%88%98.html",{d:1705553761e3,e:`<h1> 打工人手册#43 职场是消耗战</h1>
<figure><figcaption></figcaption></figure>
<p>前面有一篇文章，说偷懒是一个系统工程。这篇文章还要说，职场是一个消耗战。</p>
<p>就像是汉武帝攻打匈奴一样。鼎盛时期的汉朝，做到了让胡人不敢南下而牧马。大汉在阴山(匈奴人的精神图腾)上举杯相庆。然而没用，你赢了，但是你赢得很惨。</p>
<p>职场无数地方都存在这种例子，你赢了，但是你赢得很惨。你堆时间，争项目，不断让自己提升，思考效率，拥有掌控更多全局的能力。做了很多事情，但是最后的收益也只体现在绩效上，再换来在年终奖上。<br>
只有你自己知道，要表现好。其实并不容易，不断思考，平衡进取与同事关系，也不能抢了上司风头。职场是这样一个阶梯，你发现有路可以攀登，于是赶忙爬上了这个阶梯，也确有所获。但是很快你就发现，这是奴役之路。</p>`,r:{minutes:1.13,words:338},y:"a",t:"打工人手册#43 职场是消耗战"},["/posts/打工人手册/打工人手册_43 职场是消耗战.html","/posts/打工人手册/打工人手册#43 职场是消耗战.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#43%20%E8%81%8C%E5%9C%BA%E6%98%AF%E6%B6%88%E8%80%97%E6%88%98.html","/posts/打工人手册/打工人手册#43 职场是消耗战.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#43%20%E8%81%8C%E5%9C%BA%E6%98%AF%E6%B6%88%E8%80%97%E6%88%98.md"]],["v-4077aa70","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_44%20%E8%B4%A2%E5%AF%8C%E7%9A%84%E5%85%89%E9%94%A5%E4%B9%8B%E5%86%85.html",{d:1705553761e3,e:`<h1> 打工人手册#44 财富的光锥之内</h1>
<figure><figcaption></figcaption></figure>
<p>光锥之内，就是命运。<br>
这句话是科幻作者刘慈欣说的。你看到了一个东西，但你其实已经改变不了它了。因为光跑到你这儿，就已经需要数十年。你看到的，是过去。光锥之内的事情，你都无法改变。</p>
<p>金钱的光锥之内呢？大公司的中产阶级，小职员，卡车司机，在厂里上班的，每天看起来都做了很多事情，开了很多会，写了很多材料。但是最后一合计呢，又好像什么都没做。</p>
<p>你觉得你的生活特殊，独一无二。但你所赚取的财富已经为你的光锥界定了边界，你月薪5k，就不可能四处游览中国。你忙头忙尾，就无法从容且安闲。</p>`,r:{minutes:1.02,words:306},y:"a",t:"打工人手册#44 财富的光锥之内"},["/posts/打工人手册/打工人手册_44 财富的光锥之内.html","/posts/打工人手册/打工人手册#44 财富的光锥之内.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#44%20%E8%B4%A2%E5%AF%8C%E7%9A%84%E5%85%89%E9%94%A5%E4%B9%8B%E5%86%85.html","/posts/打工人手册/打工人手册#44 财富的光锥之内.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#44%20%E8%B4%A2%E5%AF%8C%E7%9A%84%E5%85%89%E9%94%A5%E4%B9%8B%E5%86%85.md"]],["v-c47a0d6a","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_45%20%E8%83%BD%E9%87%8F%E4%B8%8E%E4%BF%A1%E6%81%AF%E7%9A%84%E4%B8%BB%E6%97%8B%E5%BE%8B.html",{d:1705553761e3,e:`<h1> 打工人手册#45 能量与信息的主旋律</h1>
<figure><figcaption></figcaption></figure>
<p>社会的真正的发展脉络是什么。马克思说，是生产关系与生产力。<br>
生产力由什么决定？能量和信息。<br>
能量密度，能量强度，信息密度，信息强度。</p>
<p>高等级文明对低等级文明的胜利，是能源的胜利。你用石油作为燃料，攻打以马和煤作为主要能源的国家，谁取得胜利？<br>
据说当年埃及曾发生过皇帝被抓的事情，结果整个埃及王权政府直接从内部土崩瓦解。而中国历朝历代不知道出现了几次皇帝被抓的情况，这就是信息组织度的价值。</p>
<p>人力-捕捉野兽，火，耕种，畜牧，铜与铁，煤炭，水运，封建体制...到今天电与互联网，天然气与石油。这是能源的突破。<br>
能源突破的事情，从来没有小事情。这代表的是代际的领先。<br>
当然，我上面讲的这些，离我们每个个人都太远了。整个社会发展的事情，和我赚钱，有什么关系呢？<br>
有关系，你要去发掘便宜且密度高的能源，要去发掘便宜且密度高的信息。别人还在用手工的方式一点点做，你直接用上了自动化。别人还在为招人苦恼，你直接定位小城市，挖掘广大的便宜劳动力。<br>
你领先了别人什么？能量和信息的双重领先，效率的真正领先。</p>`,r:{minutes:1.44,words:432},y:"a",t:"打工人手册#45 能量与信息的主旋律"},["/posts/打工人手册/打工人手册_45 能量与信息的主旋律.html","/posts/打工人手册/打工人手册#45 能量与信息的主旋律.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#45%20%E8%83%BD%E9%87%8F%E4%B8%8E%E4%BF%A1%E6%81%AF%E7%9A%84%E4%B8%BB%E6%97%8B%E5%BE%8B.html","/posts/打工人手册/打工人手册#45 能量与信息的主旋律.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#45%20%E8%83%BD%E9%87%8F%E4%B8%8E%E4%BF%A1%E6%81%AF%E7%9A%84%E4%B8%BB%E6%97%8B%E5%BE%8B.md"]],["v-3612baf2","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_46%20%E9%92%B1%E8%83%BD%E4%BA%A7%E7%94%9F%E5%88%A9%E6%81%AF%E7%9A%84%E5%8F%8D%E9%9D%A2.html",{d:1705553761e3,e:`<h1> 打工人手册#46 钱能产生利息的反面</h1>
<figure><figcaption></figcaption></figure>
<p>我们都知道，钱能产生利息。虽然很多人只是知道这句话，并未真正的内化于行。</p>
<p>钱能产生利息的反面是什么？<br>
利息能产生钱？不，那还是正面，那是对钱生钱的描述。</p>
<p>反面：不产生利息的钱，其实在亏损。</p>
<p>你不管理你的钱，让他们躺在帐上睡大觉，你就在亏损。因为你只要动动手指，就能至少换取2.5%的年化收益。明白这点，你才真正把钱能产生利息，内化于行。</p>
`,r:{minutes:.54,words:161},y:"a",t:"打工人手册#46 钱能产生利息的反面"},["/posts/打工人手册/打工人手册_46 钱能产生利息的反面.html","/posts/打工人手册/打工人手册#46 钱能产生利息的反面.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#46%20%E9%92%B1%E8%83%BD%E4%BA%A7%E7%94%9F%E5%88%A9%E6%81%AF%E7%9A%84%E5%8F%8D%E9%9D%A2.html","/posts/打工人手册/打工人手册#46 钱能产生利息的反面.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#46%20%E9%92%B1%E8%83%BD%E4%BA%A7%E7%94%9F%E5%88%A9%E6%81%AF%E7%9A%84%E5%8F%8D%E9%9D%A2.md"]],["v-a70dce4a","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_47%20%E4%B9%B0%E4%B8%8E%E5%8D%96%E7%9A%84%E5%AD%A6%E9%97%AE.html",{d:1705553761e3,e:`<h1> 打工人手册#47 买与卖的学问</h1>
<figure><figcaption></figcaption></figure>
<p>如何衡量一个国家的强大与否，看他的交易。<br>
如何衡量一个人有多有钱，以及未来会掌握多少财富？看他的交易。<br>
他买入什么，他卖出什么，如果他只是卖出时间，然后买入的都是各类消费与娱乐，那我们就知道，这个人是一颗电池。新时代的电池就是这般。即便你年薪百万，但如果你慎重的对待买与卖，终究百万也是耗材。<br>
兵法上说，兵者国之大事，死生之地，存亡之道，不可不查也。<br>
今天的道理上可以这么说，交易，个体之大事，财富之道，不可不查也。</p>`,r:{minutes:.65,words:196},y:"a",t:"打工人手册#47 买与卖的学问"},["/posts/打工人手册/打工人手册_47 买与卖的学问.html","/posts/打工人手册/打工人手册#47 买与卖的学问.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#47%20%E4%B9%B0%E4%B8%8E%E5%8D%96%E7%9A%84%E5%AD%A6%E9%97%AE.html","/posts/打工人手册/打工人手册#47 买与卖的学问.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#47%20%E4%B9%B0%E4%B8%8E%E5%8D%96%E7%9A%84%E5%AD%A6%E9%97%AE.md"]],["v-2a657030","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_48%20%E4%BA%A4%E6%98%93.html",{d:1705553761e3,e:`<h1> 打工人手册#48 交易</h1>
<figure><figcaption></figcaption></figure>
<p>计算机的关键是0/1。 -- 《炼金笔记》</p>
<p>交易<br>
交易的两端是货与客（流量&amp;曝光）。<br>
交易的关键是提升交换比（过桥的艺术）与数量<br>
宏观角度就是供给和需求，法律角度就是产权与经济纠纷。国家维度是货币和信用。<br>
很多现代人，对于种地的理论很“熟悉”，他们害怕交易，反对交易。<br>
一个人在一个企业干一辈子，一个人一辈子只买一套房子就够了。<br>
这就是企图做一次交易，获得一辈子的收入，获得一辈子的安稳。<br>
你怎么保证，你一上来进行交易，对应的交换比，就足够高，高到再也无需下次交易呢？<br>
职场的打工的关键也是提升交换比，这就是所谓的面向简历编程。<br>
人在大城市，心在中世纪。<br>
这种思维方式和种地有什么区别呢？<br>
不是说种地有啥不好，你一直升职，那这笔交易也不错。<br>
但是这并非一个在大城市生存的逻辑。<br>
要拥抱交易，适应交易，学会交易。<br>
一个打工人所有交易中，唯一带来收入的就是出卖劳动力，所有其它的交易全部都是支出。</p>`,r:{minutes:1.15,words:345},y:"a",t:"打工人手册#48 交易"},["/posts/打工人手册/打工人手册_48 交易.html","/posts/打工人手册/打工人手册#48 交易.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#48%20%E4%BA%A4%E6%98%93.html","/posts/打工人手册/打工人手册#48 交易.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#48%20%E4%BA%A4%E6%98%93.md"]],["v-66841430","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_49%20%E7%94%9F%E6%80%81%E4%BD%8D.html",{d:1705553761e3,e:`<h1> 打工人手册#49 生态位</h1>
<figure><figcaption></figcaption></figure>
<p>达尔文说物竞天择，适者生存。<br>
将时间拉到足够长，形成充分竞争，那么就可以得出一个推论：<br>
每个生态位，只能存活一个物种</p>
`,r:{minutes:.21,words:64},y:"a",t:"打工人手册#49 生态位"},["/posts/打工人手册/打工人手册_49 生态位.html","/posts/打工人手册/打工人手册#49 生态位.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#49%20%E7%94%9F%E6%80%81%E4%BD%8D.html","/posts/打工人手册/打工人手册#49 生态位.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#49%20%E7%94%9F%E6%80%81%E4%BD%8D.md"]],["v-978e2d4c","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_5%20%E5%86%B7%E5%90%AF%E5%8A%A8.html",{d:169691398e4,e:`<h1> 打工人手册#5 冷启动</h1>
<figure><figcaption></figcaption></figure>
<p>万事开头难，中间难，结尾难。<br>
但是最难，还是难在开头。难在第一次，难在第一个mvp都没跑通。</p>
<p>以前我一直不明白一个道理，这些大公司是怎么一步步做到今天这么大呢？<br>
后来我看了很多书若干大佬的自述，他们讲起过往。事物起于微末，大公司不是一上来就朝着大公司去的，而是先从小公司，然后逐步扩张，才成为大公司的。</p>
<p>是边飞边换发动机，而且飞完一圈后，公司的引擎就从木头制造的引擎，变成了不锈钢的。</p>
<p>后面我又看了一篇文章，叫脚手架定律。我才恍然大悟。建筑在修建的时候，是有脚手架的。很多事情我们之所以感慨，别人把钱赚了，自己却无法复现，仿佛缺失了几个关键链路，就是因为，脚手架在大厦修建完毕后，已经撤去了。</p>`,r:{minutes:1,words:301},y:"a",t:"打工人手册#5 冷启动"},["/posts/打工人手册/打工人手册_5 冷启动.html","/posts/打工人手册/打工人手册#5 冷启动.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#5%20%E5%86%B7%E5%90%AF%E5%8A%A8.html","/posts/打工人手册/打工人手册#5 冷启动.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#5%20%E5%86%B7%E5%90%AF%E5%8A%A8.md"]],["v-82648be8","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_5.5%20%E8%BE%93%E8%B5%A2.html",{d:169691398e4,e:`<h1> 打工人手册#5.5 输赢</h1>
<figure><figcaption></figcaption></figure>
<p>为什么你总是赢，最后却输的一败涂地。</p>
<p>你攀爬职场阶梯，不停的爬，不停的爬，你一直尝试站在胜者组。<br>
努力拼搏，勤奋加班，向上管理。<br>
你升了一级又一级。但终究卡在了某个职级。</p>
<p>高考的胜者组，就业的胜者组，升职加薪的胜者组。和你同一层级的人越来越优秀。但你发现即便如此，你还是无法当上小组长。</p>
<p>职场上真的有所谓不可替代性么？曾经你完成了一个高超的技术挑战之后，也曾抚掌自叹。但如今你看到后进者，发现他们想要超过你，也不过只是时间问题。</p>`,r:{minutes:.92,words:275},y:"a",t:"打工人手册#5.5 输赢"},["/posts/打工人手册/打工人手册_5.5 输赢.html","/posts/打工人手册/打工人手册#5.5 输赢.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#5.5%20%E8%BE%93%E8%B5%A2.html","/posts/打工人手册/打工人手册#5.5 输赢.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#5.5%20%E8%BE%93%E8%B5%A2.md"]],["v-3b20e32d","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_50%20%E8%84%91%E5%AD%90%E4%B8%BA%E8%B0%81%E5%B7%A5%E4%BD%9C.html",{d:1705553761e3,e:`<h1> 打工人手册#50 脑子为谁工作</h1>
<p><br>
</p>
<p>身体在为谁工作，为了公司。脑子在为了谁工作，还是为了公司。<br>
一开始你只是想出卖时间，获取财富。到后面你发现你把八个小时之外也卖了，脑子中总想着公司的事情，方案下一步怎么推进，哪儿有什么卡点。</p>
<p>智慧是有限的产物，需要时间来沉淀，而且也是用一点少一点。虽然可以不断壮大，但有限时间内，这儿多分配一点，另外一个地方就要少分配一些。</p>
<p>你把你的脑子都替公司想方案，为公司的自动化，赚钱机制不断进行思考。为今年公司给你定的okr不断思考，那么你自己的事业呢，推进了多少？最后你能从公司带走的只有两样：钱和经过公司事情洗刷过后的脑子。</p>`,r:{minutes:1.14,words:343},y:"a",t:"打工人手册#50 脑子为谁工作"},["/posts/打工人手册/打工人手册_50 脑子为谁工作.html","/posts/打工人手册/打工人手册#50 脑子为谁工作.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#50%20%E8%84%91%E5%AD%90%E4%B8%BA%E8%B0%81%E5%B7%A5%E4%BD%9C.html","/posts/打工人手册/打工人手册#50 脑子为谁工作.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#50%20%E8%84%91%E5%AD%90%E4%B8%BA%E8%B0%81%E5%B7%A5%E4%BD%9C.md"]],["v-072a9dce","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_51%20%E8%A7%86%E8%A7%89%E7%9A%84%E7%9B%B2%E5%8C%BA.html",{d:1705553761e3,e:`<h1> 打工人手册#51 视觉的盲区</h1>
<figure><figcaption>img</figcaption></figure>
<p>有盲区，生活中，一定有所盲区。<br>
很多东西被我们忽略了，在我们的盲区里一眼扫过去却没有发现。<br>
就像是一个事情，原来已经这样了，到今天才有感觉。<br>
一家公司已经发展至此了，现在才通过行情知道。<br>
职场之路原来走到尽头了，那一刹那才意识到。</p>
<p>这些东西这些信息就在你的周围，但是你却感知不到。<br>
你俯在草丛里，眼中只有兔子，看不到周围的危险与机遇</p>
`,r:{minutes:.54,words:161},y:"a",t:"打工人手册#51 视觉的盲区"},["/posts/打工人手册/打工人手册_51 视觉的盲区.html","/posts/打工人手册/打工人手册#51 视觉的盲区.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#51%20%E8%A7%86%E8%A7%89%E7%9A%84%E7%9B%B2%E5%8C%BA.html","/posts/打工人手册/打工人手册#51 视觉的盲区.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#51%20%E8%A7%86%E8%A7%89%E7%9A%84%E7%9B%B2%E5%8C%BA.md"]],["v-2c7d9ef1","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_52%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%B5%AA%E6%BD%AE.html",{d:1705553761e3,e:`<h1> 打工人手册#52 大语言模型的浪潮</h1>
<figure><figcaption></figcaption></figure>
<p>2023是一个奇迹年。大预言模型不是科技发展如此顺理成章的结果，而是一个奇迹。<br>
计算机行业出售硬件，出售软件，出售操作系统，出售手机，出售云。现在也开始出售LLM(大语言模型)。</p>
<p>无AI不创业，大语言模型领域还有很多领土未被瓜分，甚至简单点，让用户能用上gpt这件事情，就有土壤可挖。</p>
`,r:{minutes:.45,words:135},y:"a",t:"打工人手册#52 大语言模型的浪潮"},["/posts/打工人手册/打工人手册_52 大语言模型的浪潮.html","/posts/打工人手册/打工人手册#52 大语言模型的浪潮.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#52%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%B5%AA%E6%BD%AE.html","/posts/打工人手册/打工人手册#52 大语言模型的浪潮.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#52%20%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E6%B5%AA%E6%BD%AE.md"]],["v-31f08afb","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_53%20%E7%94%9F%E7%94%9F%E4%B8%8D%E6%81%AF.html",{d:1705553761e3,e:`<h1> 打工人手册#53 生生不息</h1>
<figure><figcaption></figcaption></figure>
<p>昨天参加团队聚餐。<br>
那一刹那我被触动了，那是生生不息的蓬勃之气，是团队的一群人干点什么的热切。</p>
<p>我不再是当年那个被鼓动的小孩，我站在的是当年刘邦看始皇帝的那个位置，我想到了团队的好处，(我明白了周围一切都在围绕你转的魅力。)</p>
<p>三十个人的团队，一个大领导，4-5个小组长，一定要超设小组长，有些小组长让他带3-4个人就行了。<br>
这就是核心领导层。这就是生生不息的力量，有了这股力量，行动可以被执行，人才可以被照片，员工可以被驱动，利润可以赚取到你手中。</p>`,r:{minutes:.7,words:211},y:"a",t:"打工人手册#53 生生不息"},["/posts/打工人手册/打工人手册_53 生生不息.html","/posts/打工人手册/打工人手册#53 生生不息.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#53%20%E7%94%9F%E7%94%9F%E4%B8%8D%E6%81%AF.html","/posts/打工人手册/打工人手册#53 生生不息.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#53%20%E7%94%9F%E7%94%9F%E4%B8%8D%E6%81%AF.md"]],["v-691b158a","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_53%20%E7%AA%97%E5%8F%A3%E6%9C%9F.html",{d:1705553761e3,e:`<h1> 打工人手册#53 窗口期</h1>
<figure><figcaption></figcaption></figure>
<p>做事情是有窗口期的。<br>
以前我不明白这个道理，公司推进一些项目的时候，推进一周，我下一周又不怎么推进了。或者喊出一个口号，事情没有完全完成，后面又不喊这个口号了。</p>
<p>当然，站在我的视角，这是合理的，我毕竟是一个大头兵，下一周可能领导走到我面前语重心长的说，最近有一个非常重要的项目，你跟进一下。我的注意力又转移了。</p>
<p>但是我发现，一些事情，一旦间隙一周，下一周想要继续推进这个事情就难了。</p>
<p>很多时候，公司里推项目，其实就是在不停的把资源卷入进来。你好不容易把资源卷了进来，结果过了一周不推进。这个资源自然和你脱钩了。</p>`,r:{minutes:1.09,words:327},y:"a",t:"打工人手册#53 窗口期"},["/posts/打工人手册/打工人手册_53 窗口期.html","/posts/打工人手册/打工人手册#53 窗口期.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#53%20%E7%AA%97%E5%8F%A3%E6%9C%9F.html","/posts/打工人手册/打工人手册#53 窗口期.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#53%20%E7%AA%97%E5%8F%A3%E6%9C%9F.md"]],["v-64d7b94a","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_54%20%E7%97%85%E7%97%9B%E7%9A%84%E4%BB%B7%E5%80%BC.html",{d:1705553761e3,e:`<h1> 打工人手册#54 病痛的价值</h1>
<figure><figcaption></figcaption></figure>
<p>前几天感冒了。卧榻之上，基本只能睡觉。</p>
<p>那一刹那，我又想起了老鼠赛跑。</p>
<p>病痛有什么价值？<br>
病痛能让你意识到，你当前的钱能赚一时，赚不了一世。让你明白，你终究是在用劳动和时间换钱，一刻也不能停歇。打工人是不敢生病的，因为生病意味着得就是巨大的效率下滑，产出减少。</p>
<p>疼痛的身体，呓语的梦幻，停摆的生活。这是远古遗存留下来的呼唤，呼唤着我们，去构建机制，从打猎变成农作。<br>
用太阳光来获取能量，用机制来谋生。</p>`,r:{minutes:.62,words:187},y:"a",t:"打工人手册#54 病痛的价值"},["/posts/打工人手册/打工人手册_54 病痛的价值.html","/posts/打工人手册/打工人手册#54 病痛的价值.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#54%20%E7%97%85%E7%97%9B%E7%9A%84%E4%BB%B7%E5%80%BC.html","/posts/打工人手册/打工人手册#54 病痛的价值.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#54%20%E7%97%85%E7%97%9B%E7%9A%84%E4%BB%B7%E5%80%BC.md"]],["v-7ed7cf28","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_55%20%E6%9D%83%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84.html",{d:1735613476e3,e:`<h1> 打工人手册#55 权力的结构</h1>
<figure><figcaption></figcaption></figure>
<p>让人一步，步步让人。<br>
这是职场的铁则。晋升上让人一步了，步步都要让与别人。但是无妨。权力的结构从内部打破是如此艰难。而一旦权力结构构建了，得利的每一个人都会努力维护之。<br>
你从和个人斗，变成了和集体斗，和权力的结构斗。这就是为何晋升难。</p>
<p>但是这又何妨呢？让你一尺，再让你一丈如何。早知职场后面是爬忠诚的天梯，且后面付出一分，回报越来越少。那这天梯，我不爬，又如何呢？</p>
<p>构建新的结构，才是更大的效益所在。</p>
`,r:{minutes:.63,words:188},y:"a",t:"打工人手册#55 权力的结构"},["/posts/打工人手册/打工人手册_55 权力的结构.html","/posts/打工人手册/打工人手册#55 权力的结构.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#55%20%E6%9D%83%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84.html","/posts/打工人手册/打工人手册#55 权力的结构.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#55%20%E6%9D%83%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84.md"]],["v-7b220915","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_56%20%E6%97%B6%E9%97%B4%E7%9A%84%E9%93%81%E5%88%99.html",{d:1735613476e3,e:`<h1> 打工人手册#56 时间的铁则</h1>
<figure><figcaption></figcaption></figure>
<p>时间。是时间。<br>
休息花费时间，积累财富花费时间，交通花费时间。构建事务也花费时间，公司买走你的时间，游戏空耗你的时间。<br>
行为通过时间关联了起来，钱是社会的一般等价物。时间是做决策的一般等价物。<br>
没有完全做不到的事情，时间耗费的多少是成本的一部分。</p>
`,r:{minutes:.41,words:123},y:"a",t:"打工人手册#56 时间的铁则"},["/posts/打工人手册/打工人手册_56 时间的铁则.html","/posts/打工人手册/打工人手册#56 时间的铁则.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#56%20%E6%97%B6%E9%97%B4%E7%9A%84%E9%93%81%E5%88%99.html","/posts/打工人手册/打工人手册#56 时间的铁则.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#56%20%E6%97%B6%E9%97%B4%E7%9A%84%E9%93%81%E5%88%99.md"]],["v-38d5a178","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_57%20%E5%91%BD%E8%BF%90%E7%9A%84%E6%8B%90%E8%A7%92.html",{d:1735613476e3,e:`<h1> 打工人手册#57 命运的拐角</h1>
<figure><figcaption></figcaption></figure>
<p>分歧让人选择，选择让后续的分歧会越大。众多的命运线成就了社会这颗大树。<br>
很多时候会感觉自己来到了命运的分歧点上，选择A择选择一种生活。选择B又是另外一种生活。<br>
内心的火种不会熄灭，想要实现的梦想刻在心中。夜晚，有时陷入麻木的白天，我内心的渴望在回响。<br>
那是呼唤自己去创造更大一番事业的战角，也是时刻提醒自己做好风险控制的警钟。<br>
勇者总是先踏上旅程，然后成为了勇者。</p>
`,r:{minutes:.6,words:179},y:"a",t:"打工人手册#57 命运的拐角"},["/posts/打工人手册/打工人手册_57 命运的拐角.html","/posts/打工人手册/打工人手册#57 命运的拐角.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#57%20%E5%91%BD%E8%BF%90%E7%9A%84%E6%8B%90%E8%A7%92.html","/posts/打工人手册/打工人手册#57 命运的拐角.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#57%20%E5%91%BD%E8%BF%90%E7%9A%84%E6%8B%90%E8%A7%92.md"]],["v-729d120e","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_58%20%E8%B5%84%E6%BA%90%E7%9A%84%E8%A7%A3%E9%94%81.html",{d:1735613476e3,e:`<h1> 打工人手册#58 资源的解锁</h1>
<figure><figcaption></figcaption></figure>
<p>资源一定是一步步解锁的。</p>
<p>你能力很强，但是今天让你去收个废品，你短时间内一定是收不明白的。城市里哪里有废品回收站？哪里高价值废品比较多？自己要捡为主还是收为主？能不能跳掉这些小的回收站，自己对大回收站？能不能自己开个回收站？</p>
<p>这些，你没搞过，光凭脑子想是想不明白的。但你到里面去搞，一两周就能摸明白。<br>
很多隔行如隔山，恰恰是因为不在此行之中。<br>
当然很多行业其实也没有必要入，如果要学武，自然要学天阶功法。如果入行，自然选择能成神的行业(科技树的终端，有超额回报)。<br>
而锁死一个人科技树的最好方式，就是锁死他的时间。</p>`,r:{minutes:.8,words:241},y:"a",t:"打工人手册#58 资源的解锁"},["/posts/打工人手册/打工人手册_58 资源的解锁.html","/posts/打工人手册/打工人手册#58 资源的解锁.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#58%20%E8%B5%84%E6%BA%90%E7%9A%84%E8%A7%A3%E9%94%81.html","/posts/打工人手册/打工人手册#58 资源的解锁.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#58%20%E8%B5%84%E6%BA%90%E7%9A%84%E8%A7%A3%E9%94%81.md"]],["v-33fe848c","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_59%20%E9%9D%A0%E4%B8%93%E4%B8%9A%E8%B5%9A%E9%92%B1.html",{d:1735613476e3,e:`<h1> 打工人手册#59 靠专业赚钱</h1>
<figure><figcaption></figcaption></figure>
<p>你以为你是赚的什么钱？运气，大势？不，本质上都是赚的专业的钱。<br>
你足够专业，才能赚钱。<br>
不论写代码，ppt，设计，还是股票，投资。</p>
<p>你以为你赚的是运气，是行业？或许有人说，谁谁谁运气好，进入了一家上升的公司，赚了很多股票。然后高位套现，后面就脱离了基本都生活约束区了。<br>
后面自然也是突飞猛进赚了更多的钱。</p>
<p>这个描述有两个巨大的描述误区，首先，难道这个能上升的公司，不是自己选的么。在公司里的站到浪头的技能，不是自己选的么？其次，高位套现，不是正确的抉择么。出来开创事业，中间吃过多少苦头。亏光的只怕不在少数。<br>
成功的最终才成了你面前看到的样子，吃到了时代的红利。但是时代的红利就在那儿，任何人都可以去把握，去抓取啊。<br>
怎么选本身，就要求你足够专业啊。选择后，能否每个环节比别人优化1%，也要求你足够专业。</p>`,r:{minutes:1.08,words:324},y:"a",t:"打工人手册#59 靠专业赚钱"},["/posts/打工人手册/打工人手册_59 靠专业赚钱.html","/posts/打工人手册/打工人手册#59 靠专业赚钱.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#59%20%E9%9D%A0%E4%B8%93%E4%B8%9A%E8%B5%9A%E9%92%B1.html","/posts/打工人手册/打工人手册#59 靠专业赚钱.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#59%20%E9%9D%A0%E4%B8%93%E4%B8%9A%E8%B5%9A%E9%92%B1.md"]],["v-07fbb390","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_6%20%E4%BB%B7%E5%80%BC.html",{d:169691398e4,e:`<h1> 打工人手册#6 价值</h1>
<figure><figcaption></figcaption></figure>
<p>把工作看成自己的day job。<br>
创造财富的秘诀是，创造价值。<br>
财富不从某个人手中出分配给你，也不是一个大饼。你多吃一口，别人就少吃一口。<br>
财富是可以创造的，取决于你的人力所创造的价值，取决于你创造的东西的价值。</p>
<p>难难难!多年以前，某位姓林的炒股大户说，怕高都是苦命人。<br>
今天我终于从另一个角度理解了这句话。无数的真理，无数的顿悟，但是即便把这些都摔在你脸上，你就能成功么？日入上万还是与你无缘，这中间还有这巨大的鸿沟。<br>
奔忙到三十岁，你有个几百万，无非还是尘草。</p>`,r:{minutes:.74,words:223},y:"a",t:"打工人手册#6 价值"},["/posts/打工人手册/打工人手册_6 价值.html","/posts/打工人手册/打工人手册#6 价值.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#6%20%E4%BB%B7%E5%80%BC.html","/posts/打工人手册/打工人手册#6 价值.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#6%20%E4%BB%B7%E5%80%BC.md"]],["v-0eea4252","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_60%20%E9%80%A0%E5%8A%BF%E4%B8%8D%E5%A6%82%E9%A1%BA%E5%8A%BF.html",{d:1735613476e3,e:`<h1> 打工人手册#60 造势不如顺势</h1>
<p>以前我理解的势能：你自己造势的能力，你自己的能量，你自己掌控的资源多少的集合。<br>
但是后面我发现，这条道路虽然也是对的。但如果只感悟到这点，等于只感悟到结果。类似于只感悟到赚钱的关键就是要收入＞成本。就像再说资源越多越好做事。这是正确的废话。</p>
<p>上面所描述的与其说更像是势，不如说更像是能。</p>
<p>兵法说，激水之疾至于漂石者势也。天下大势，分久必合，合久必分。顺势而为。这里面有一个很重要的点，那就是，这个势是一个真正的合力，一个极其巨大的外部合力。你要做的，不是造势，而是借势。甚至无需借势，只要顺势。<br>
造势不如顺势。</p>`,r:{minutes:.84,words:253},y:"a",t:"打工人手册#60 造势不如顺势"},["/posts/打工人手册/打工人手册_60 造势不如顺势.html","/posts/打工人手册/打工人手册#60 造势不如顺势.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#60%20%E9%80%A0%E5%8A%BF%E4%B8%8D%E5%A6%82%E9%A1%BA%E5%8A%BF.html","/posts/打工人手册/打工人手册#60 造势不如顺势.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#60%20%E9%80%A0%E5%8A%BF%E4%B8%8D%E5%A6%82%E9%A1%BA%E5%8A%BF.md"]],["v-5c5f8dff","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_63%20%E6%B5%81%E5%AF%87.html",{d:1735613476e3,e:`<h1> 打工人手册#63 流寇</h1>
<p>再次发自内心觉得自己还是流寇。<br>
是雇佣兵。从职场赚的越来越多。但是其实仍旧不够强大，只是一个把头别在腰间的雇佣兵。</p>
<p>没有基本盘，没有根据地。</p>
<p>职场之外，赚一点，都必须五倍努力，才能赚一点。甚至感觉还不如去职场加一天班。</p>
<p>要是职场一个浪头打过来，翻了。又或者投资时，一个浪打过来，也翻了。就要很长时间去恢复元气。</p>
<p>我做事情的方式需要根本性调整，不要再逐一时之利了，这不是全局更优。</p>
<p>如果从一个短期之利跑向另一个短期之利，就像是从一个镖局，到另一个高手更多，工资更高的镖局。你一直在赚更多，但是若干年后，你自己的根据地还是没有，还没有落地生根。</p>`,r:{minutes:.95,words:285},y:"a",t:"打工人手册#63 流寇"},["/posts/打工人手册/打工人手册_63 流寇.html","/posts/打工人手册/打工人手册#63 流寇.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#63%20%E6%B5%81%E5%AF%87.html","/posts/打工人手册/打工人手册#63 流寇.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#63%20%E6%B5%81%E5%AF%87.md"]],["v-63dbd366","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_64%20%E7%94%A8%E6%83%B3%E8%B1%A1%E5%8A%9B%E6%8B%BC%E5%87%91%E4%B8%80%E6%9D%A1%E5%90%91%E5%89%8D%E4%B9%8B%E8%B7%AF.html",{d:1735613476e3,e:`<h1> 打工人手册#64 用想象力拼凑一条向前之路</h1>
<p>前段时间，某一天下午莫名有些焦虑。<br>
我[竟然]在为了一个我无法掌控的需求，而焦虑。我在因为别人的事情焦虑。仿佛有一把达摩克里斯之剑悬在我的头顶，我因此束手束脚。<br>
一方面我因为这个需求悬而未决焦虑，另一方面我因为潜在事情的风险，领导随后可能的PUA而焦虑。<br>
我深吸一口，告诉自己，“保持风度，有PUA就淡然回应”。各种预案，技巧，我脑子中都过了一遍。<br>
但是我很快发现了，自己[竟然]在为了一个完全不值得在意的小事情焦虑。这好么，我的注意力，我的精力用的地方是合适的么？<br>
该死的，我还是不够强大。才会过于在意这一点点的得失。那是达摩克里斯之剑么，那不过是一个纸糊的假物！<br>
让我想起来多年前一次在阿里会议室里，批头散发，我想了一个下午，下一步怎么走，要去追逐什么。我写写画画，最后想明白了，没有增量了，我所在的业务几年之内都不会有增量，我要到有增量的地方去。</p>`,r:{minutes:1.14,words:341},y:"a",t:"打工人手册#64 用想象力拼凑一条向前之路"},["/posts/打工人手册/打工人手册_64 用想象力拼凑一条向前之路.html","/posts/打工人手册/打工人手册#64 用想象力拼凑一条向前之路.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#64%20%E7%94%A8%E6%83%B3%E8%B1%A1%E5%8A%9B%E6%8B%BC%E5%87%91%E4%B8%80%E6%9D%A1%E5%90%91%E5%89%8D%E4%B9%8B%E8%B7%AF.html","/posts/打工人手册/打工人手册#64 用想象力拼凑一条向前之路.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#64%20%E7%94%A8%E6%83%B3%E8%B1%A1%E5%8A%9B%E6%8B%BC%E5%87%91%E4%B8%80%E6%9D%A1%E5%90%91%E5%89%8D%E4%B9%8B%E8%B7%AF.md"]],["v-0dc7f30a","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_65%20%E7%94%A8%E6%83%B3%E8%B1%A1%E5%8A%9B%E6%8B%BC%E5%87%91%E4%B8%80%E6%9D%A1%E5%90%91%E5%89%8D%E4%B9%8B%E8%B7%AF(%E4%B8%8B).html",{d:1735613476e3,e:`<h1> 打工人手册#65 用想象力拼凑一条向前之路(下)</h1>
<figure><figcaption></figcaption></figure>
<p>这次的问题是一样的，我的潜能没有好好利用起来。关注需求有什么卡点，只会让我变得平庸。在一个过于窄的角度上深究。这是通往35岁危机的路。</p>
<p>我挣扎，痛苦睡不着，看着过去一年[毁三观树新生]以来，我构建了N个小机制，但没有通过对应机制赚到过钱。中途还去追过其他小蝴蝶。<br>
现在我重新意识到，即便追蝴蝶可以赚钱，也不要去追！</p>
<p>我的痛苦是一个关于下一步的问题，下一步是明天，是明年。从A地到B地不是靠马车，而是靠想象力。用想象力拼凑一条向前之路。</p>`,r:{minutes:1.94,words:583},y:"a",t:"打工人手册#65 用想象力拼凑一条向前之路(下)"},["/posts/打工人手册/打工人手册_65 用想象力拼凑一条向前之路(下).html","/posts/打工人手册/打工人手册#65 用想象力拼凑一条向前之路(下).html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#65%20%E7%94%A8%E6%83%B3%E8%B1%A1%E5%8A%9B%E6%8B%BC%E5%87%91%E4%B8%80%E6%9D%A1%E5%90%91%E5%89%8D%E4%B9%8B%E8%B7%AF(%E4%B8%8B).html","/posts/打工人手册/打工人手册#65 用想象力拼凑一条向前之路(下).md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#65%20%E7%94%A8%E6%83%B3%E8%B1%A1%E5%8A%9B%E6%8B%BC%E5%87%91%E4%B8%80%E6%9D%A1%E5%90%91%E5%89%8D%E4%B9%8B%E8%B7%AF(%E4%B8%8B).md"]],["v-73bd7b40","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_66%20%E8%BD%AE%E5%8A%A8%E4%B9%8B%E9%81%93%EF%BC%8C%E4%B9%83%E6%98%AF%E5%A4%A9%E4%B9%8B%E9%81%93.html",{d:1735613476e3,e:`<h1> 打工人手册#66 轮动之道，乃是天之道</h1>
<figure><figcaption></figcaption></figure>
<p>天之道，损有余而补不足。---《道德经》<br>
可选择性，是天赐的优势。 假设你有三份工作Offer可以选择（假设每次开Offer有20%的波动性），天然的就比只有一个Offer的人平均收入高10%。这就是可选择性的力量。<br>
天道无情，只用生存来筛选。 高矮胖瘦，都可以是优势策略，也可以是弱势策略。关键在于，你是否能适应环境，在竞争中生存下来。<br>
选择的过程，就是轮动的过程。 轮动，就是在不同的选择中，根据自身需求和市场变化，不断调整，找到性价比最高的那个。</p>`,r:{minutes:1.82,words:547},y:"a",t:"打工人手册#66 轮动之道，乃是天之道"},["/posts/打工人手册/打工人手册_66 轮动之道，乃是天之道.html","/posts/打工人手册/打工人手册#66 轮动之道，乃是天之道.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#66%20%E8%BD%AE%E5%8A%A8%E4%B9%8B%E9%81%93%EF%BC%8C%E4%B9%83%E6%98%AF%E5%A4%A9%E4%B9%8B%E9%81%93.html","/posts/打工人手册/打工人手册#66 轮动之道，乃是天之道.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#66%20%E8%BD%AE%E5%8A%A8%E4%B9%8B%E9%81%93%EF%BC%8C%E4%B9%83%E6%98%AF%E5%A4%A9%E4%B9%8B%E9%81%93.md"]],["v-ce6dc1d2","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_67%20%E9%81%97%E4%BC%A0%E7%9A%84%E6%9C%AC%E8%B4%A8%E5%B0%B1%E6%98%AF%E8%BD%AE%E5%8A%A8.html",{d:1735613476e3,e:`<h1> 打工人手册#67 遗传的本质就是轮动</h1>
<figure><figcaption></figcaption></figure>
<p>天不需要知道什么是优势策略，家里的族长也不需要知道谁家的孩子会成才。<br>
只需要在一个孩子成才之后，让他获得最多的资源即可；只需要在一个物种占据优势后，让他活下来就好。</p>
<p>决定遗传算法的优秀程度的，有两个指标，迭代代际，基因数量。如果有10种基因，每个基因有两种特征，那么总共就有2的19次方种可能。假设过一万代，最后能生存下来的，就是优势因子。</p>
<p>决定轮动的收益高低的，有两个指标，迭代代际，因子数量。任何数据都可以构成因子，因子如果是数值类型的的，可以用插空法，确定其点位。假设模拟一万代，最后收益最高的，就是优势因子。</p>`,r:{minutes:1.11,words:334},y:"a",t:"打工人手册#67 遗传的本质就是轮动"},["/posts/打工人手册/打工人手册_67 遗传的本质就是轮动.html","/posts/打工人手册/打工人手册#67 遗传的本质就是轮动.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#67%20%E9%81%97%E4%BC%A0%E7%9A%84%E6%9C%AC%E8%B4%A8%E5%B0%B1%E6%98%AF%E8%BD%AE%E5%8A%A8.html","/posts/打工人手册/打工人手册#67 遗传的本质就是轮动.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#67%20%E9%81%97%E4%BC%A0%E7%9A%84%E6%9C%AC%E8%B4%A8%E5%B0%B1%E6%98%AF%E8%BD%AE%E5%8A%A8.md"]],["v-2f09909e","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_68%20%E4%BB%A3%E7%90%86%E4%B9%8B%E8%B7%AF.html",{d:1735613476e3,e:`<h1> 打工人手册#68 代理之路</h1>
<figure><figcaption></figcaption></figure>
<p>更多的道路<br>
我一直思考如何冷启动。这样未来转入电商开公司阶段，才会更加稳健。但是很长时间也确实没有太多有价值的思考。</p>
<p>就在今天，随着对一些AI工具使用的深入，我发现我思考到了。那就是，代理。<br>
当前时代是一个生产过剩的时代。但是A世界生产的内容，在B世界，却有一些门槛无法跨过，因而无法很好的进行消费。</p>
<p>这些东西可能非常好用，例如这些AI工具，但是可能充值都是一个问题。国内也没有成规模体系的宣传，大家都是凭借技巧在使用着。</p>`,r:{minutes:1.51,words:454},y:"a",t:"打工人手册#68 代理之路"},["/posts/打工人手册/打工人手册_68 代理之路.html","/posts/打工人手册/打工人手册#68 代理之路.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#68%20%E4%BB%A3%E7%90%86%E4%B9%8B%E8%B7%AF.html","/posts/打工人手册/打工人手册#68 代理之路.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#68%20%E4%BB%A3%E7%90%86%E4%B9%8B%E8%B7%AF.md"]],["v-37b45762","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_69%20%E8%B7%B3%E6%A7%BD%E7%9A%84%E6%88%98%E7%95%A5%E8%B7%AF%E7%BA%BF.html",{d:1735613476e3,e:`<h1> 打工人手册#69 跳槽的战略路线</h1>
<figure><figcaption></figcaption></figure>
<p>一个工作多年的专家级程序员问过一个问题：<br>
你有两个offer，一个是google，一个是阿里，薪水差不多。你会选择哪个？<br>
答案是google，可以这么想这个问题，进入谷歌后，再进入阿里更容易；还是进入阿里后，再进入谷歌更容易？<br>
进入了阿里，以后国内大厂横着走。但进了google，以后所有企业横着走。<br>
职场是有战略路线的。跳槽有战略路线。一些东西天然在职场是有溢价的。例如大厂相对于小厂，有职级溢价。美国互联网相对于国内，也有一层光环溢价。<br>
这些溢价，就像是清华北大对任何一个地方，都会有溢价一样。<br>
甚至连做一些看起来很酷，但是其实对工作没有什么帮助的事情，都会有溢价。例如去潜水，去环游。这些其实对职场的帮助很小，但是别人却会更容易给你贴上，自由无拘束，有想法的标签。<br>
又例如，这段时间，大模型的浪潮，所有大模型AI的人才，都更具有溢价。又或者黑神话悟空的游戏开发员工，其实黑猴最成功的时候，也就是他们最该跳槽的时候了。<br>
你等到现在黑猴全网热度下滑，你在跳槽，溢价就下滑了非常多。<br>
那么，如何利用这个溢价呢：你需要设置自己的职场动线。<br>
你要思考：你的资源禀赋是什么，什么更加有溢价。<br>
例如，假设你是土木工作了几年，转的软件开发。那么你在大厂就是劣势，因为你的年龄更大，并且互联网软件开发的技术不一定比得过应届生。但是如果你可以大厂刷几年，去中建，铁建，而且对方刚好筹划互联网业务。那么你昔日的劣势，就成为优势。<br>
例如我一开始以为自己只能是深研电商，尤其注重出海板块。但现在我意识到，其实不必要如此。你只要，去从事那些人们认为很酷的事情，或者你掌握的技能，对方恰好需要就好了。不就是更好的道路么。<br>
后面我可以的选择还有：AI方面；券商；出海板块；电商。可以考虑基于对金融的理解为锚点，肯定有公司刚好想要做金融、互联网版块，这个就是你的机会。而且金融本来就是一个很酷的事情，这个事情是有溢价的。<br>
和自己的主业也是相互关联的。<br>
互联网、AI、金融、电商，这些将是我下一步的方向。</p>`,r:{minutes:2.43,words:728},y:"a",t:"打工人手册#69 跳槽的战略路线"},["/posts/打工人手册/打工人手册_69 跳槽的战略路线.html","/posts/打工人手册/打工人手册#69 跳槽的战略路线.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#69%20%E8%B7%B3%E6%A7%BD%E7%9A%84%E6%88%98%E7%95%A5%E8%B7%AF%E7%BA%BF.html","/posts/打工人手册/打工人手册#69 跳槽的战略路线.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#69%20%E8%B7%B3%E6%A7%BD%E7%9A%84%E6%88%98%E7%95%A5%E8%B7%AF%E7%BA%BF.md"]],["v-1687afe0","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_7%20%E9%9A%BE%E9%9A%BE%E9%9A%BE.html",{d:169691398e4,e:`<h1> 打工人手册#7 难难难</h1>
<figure><figcaption></figcaption></figure>
<p>世界上没有容易的事情。<br>
世界上也没有那么多事情。<br>
至少世界上没有那么多需要你关注的不容易的事情。</p>
<p>世界是无限大的网，哪怕你现在已经在其中一个岗位，做一个具体的事情，你的行动路径仍旧是可以千奇百怪，可以随心所欲的。</p>
<p>你有的选就不代表不难了吗？<br>
我让你有的选，但是我给你三条路。<br>
难，难难，难难难!</p>
<p>每一条都难，你如怎么选？<br>
年轻时摆烂老来无依无靠；选择加班疯狂为公司卷，公司无价值的时候就会被清退；自己当老板走出一条新的路，路在何方，难!</p>`,r:{minutes:.73,words:219},y:"a",t:"打工人手册#7 难难难"},["/posts/打工人手册/打工人手册_7 难难难.html","/posts/打工人手册/打工人手册#7 难难难.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#7%20%E9%9A%BE%E9%9A%BE%E9%9A%BE.html","/posts/打工人手册/打工人手册#7 难难难.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#7%20%E9%9A%BE%E9%9A%BE%E9%9A%BE.md"]],["v-15fbc74e","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_70%20%E6%B0%B8%E8%BF%9C%E6%BB%A1%E4%BB%93%E7%9A%84%E9%97%AE%E9%A2%98%E5%9C%A8%E4%BA%8E%E6%97%A0%E5%91%A8%E8%BD%AC.html",{d:1735613476e3,e:`<h1> 打工人手册#70 永远满仓的问题在于无周转</h1>
<figure><figcaption></figcaption></figure>
<p>永远满仓是一种会被剥削的策略。职场如此，股市也是如此。<br>
很长时间，我的股票一直是满仓的。因为长期来看，所有投资中，股票收益最高。因而我满仓股票。<br>
但是这有一个巨大的问题，就是资金无法辗转腾挪。你的满仓策略，会被别人剥削。<br>
同涨的时候，你就涨了，但是同跌的时候，你就跌了。<br>
而且你的系统里，你不敢卖出，你很担心卖出的时候后面就暴涨了咋办。<br>
于是涨了不卖，跌了也不卖，过山车坐几趟了都。你花时间建仓，然后所有仓位就一成不变。别人就可以因此而剥削你，因为知道你不会离开，我大肆下跌，引诱你割肉。<br>
但如果你资金辗转腾挪，那么下跌就是你的机会。<br>
一直持有，那么波动这个事情，对你而言，是没有收益的。不好也不坏。你的收益来自于公司背后增长，或者你低位买入（注意这本质也是波动）。<br>
但是对于轮动策略来说，波动是收益。公司正增长也是收益。<br>
另一个点，一直满仓就会拖慢其他需要资金的地方，例如买房、切换贷款、创业。这些是需要资金腾挪的。<br>
我想，我们应该建设一套更加完善的轮动机制，卖出在这个机制里，是常见操作。所有持仓等比例减少即可。超额也是可行的，所有持仓等比例增加即可。</p>`,r:{minutes:1.65,words:495},y:"a",t:"打工人手册#70 永远满仓的问题在于无周转"},["/posts/打工人手册/打工人手册_70 永远满仓的问题在于无周转.html","/posts/打工人手册/打工人手册#70 永远满仓的问题在于无周转.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#70%20%E6%B0%B8%E8%BF%9C%E6%BB%A1%E4%BB%93%E7%9A%84%E9%97%AE%E9%A2%98%E5%9C%A8%E4%BA%8E%E6%97%A0%E5%91%A8%E8%BD%AC.html","/posts/打工人手册/打工人手册#70 永远满仓的问题在于无周转.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#70%20%E6%B0%B8%E8%BF%9C%E6%BB%A1%E4%BB%93%E7%9A%84%E9%97%AE%E9%A2%98%E5%9C%A8%E4%BA%8E%E6%97%A0%E5%91%A8%E8%BD%AC.md"]],["v-699b4472","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_71%20%E4%BF%AE%E7%82%BC%E7%9A%84%E9%9A%90%E5%96%BB.html",{d:1735613476e3,e:`<h1> 打工人手册#71 修炼的隐喻</h1>
<figure><figcaption></figcaption></figure>
<p>最近看了这么一个情节，看完之后心有戚戚。<br>
某个修仙世界中，修炼的硬通货是元石，有更多的元石，就可以修炼到更高境界。<br>
但是家族里很多人，会自愿的贿赂“家老“，把自己好不容易攒下来的元石，送给“家老”，这样年终考核，或者写评语的时候，"家老"就会美言几句，会评分高一点。</p>
<p>“在体制之下，成员们都是心甘情愿被剥削，这种剥削却往往是隐形的。送来的元石如果自己修炼，对自身的修为绝对有提升，评分自然也就上去了。除了钱财还有时间上的剥削，虽然某些精英不太需要贿赂领导，但是他们需要用时间来贿赂领导。参与所谓的重点任务，美其名曰，这是高层的重视和青睐。如果用这些时间和元石来修行，说不定早就突破了。”</p>`,r:{minutes:1.68,words:503},y:"a",t:"打工人手册#71 修炼的隐喻"},["/posts/打工人手册/打工人手册_71 修炼的隐喻.html","/posts/打工人手册/打工人手册#71 修炼的隐喻.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#71%20%E4%BF%AE%E7%82%BC%E7%9A%84%E9%9A%90%E5%96%BB.html","/posts/打工人手册/打工人手册#71 修炼的隐喻.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#71%20%E4%BF%AE%E7%82%BC%E7%9A%84%E9%9A%90%E5%96%BB.md"]],["v-1e5c5c7b","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_72%20%E5%B0%BD%E9%87%8F%E5%8E%BB%E6%8E%8C%E6%8F%A1%E7%94%9F%E4%BA%A7%E8%B5%84%E6%96%99.html",{d:1735613476e3,e:`<h1> 打工人手册#72 尽量去掌握生产资料</h1>
<figure><figcaption></figcaption></figure>
<p>中国人勤劳而不富有，因为没有掌握生产资料。因为没有掌握资源。</p>
<p>打工人不是向单一的资本家出售全部时间和劳动力，而是将劳动力拆分成几段，依次向整个市场出售。<br>
资产的控制权，非常重要。<br>
有了，就要长期有。这是资金变成资产的过程。</p>
<p>生产资料无比宝贵。背后沉淀的技术，代码，公司的制度，专利，渠道，客户，都是资产的一部分。光靠钱是不够的。<br>
只是替公司打工，最后积累的生产资料其实是公司的。入职合同上也会写一句话，“工作期间所有成果，归公司所有”。你没有控制权。</p>`,r:{minutes:1.12,words:337},y:"a",t:"打工人手册#72 尽量去掌握生产资料"},["/posts/打工人手册/打工人手册_72 尽量去掌握生产资料.html","/posts/打工人手册/打工人手册#72 尽量去掌握生产资料.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#72%20%E5%B0%BD%E9%87%8F%E5%8E%BB%E6%8E%8C%E6%8F%A1%E7%94%9F%E4%BA%A7%E8%B5%84%E6%96%99.html","/posts/打工人手册/打工人手册#72 尽量去掌握生产资料.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#72%20%E5%B0%BD%E9%87%8F%E5%8E%BB%E6%8E%8C%E6%8F%A1%E7%94%9F%E4%BA%A7%E8%B5%84%E6%96%99.md"]],["v-a86f8722","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_73%20%E8%81%9A%E6%B2%99%E6%88%90%E5%A1%94%E7%9A%84%E6%97%B6%E9%97%B4%E5%A4%8D%E7%94%A8%E6%B3%95.html",{d:1735613476e3,e:`<h1> 打工人手册#73 聚沙成塔的时间复用法</h1>
<figure><figcaption></figcaption></figure>
<p>打工人手册写到了编号73了。我预期这个手册到108就完结，打工人的生涯也到此为止。<br>
从一阶段的职场上忙忙碌碌攀登天梯，到二阶段的挣扎反复，现在是三阶段的破茧成蝶。本手册虽然叫打工人手册，但一点都不说如何打工打成人上人，所思所想，都是如何走出独立自主之路。<br>
从而无需再打工，或者至少无需困于打工。<br>
到三阶段，我最感觉不够的，反而是时间。现在我是一手抓职场，一手抓个人项目。<br>
两边都像是海绵一样，需要投入大量时间。尤其是个人项目，我如果不去认真仔细推进，就肯定不会有任何进展。职场则是如果不维持超长工作时间，不遵守明面上的规则，就肯定会会被管控。<br>
这种切换的过程，恰恰是最难的。但是也是最关键的。不说没有闪失，但是至少要做的相对平稳的切换。<br>
我国当前的问题是：人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。<br>
我当前的问题是：个人事业增长的需要和职场耗时过长之间的矛盾。<br>
我的解决方案很简单，无他，唯复用尔。把职场的事情基本做好，把职场里的时间留下来，写文章，读文章，了解个人项目遇到的问题。把一些订票，旅行计划等，搬到上班期间来处理。<br>
下班期间参与的事情，记录一二，推进到一些节点，上班期间可以继续思考进展，思考下一步，拎出来解决一些单点问题。<br>
工作只是DayJob，我还有我的NightJob，在暗夜，我是这片自由大陆的主宰。</p>`,r:{minutes:1.7,words:509},y:"a",t:"打工人手册#73 聚沙成塔的时间复用法"},["/posts/打工人手册/打工人手册_73 聚沙成塔的时间复用法.html","/posts/打工人手册/打工人手册#73 聚沙成塔的时间复用法.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#73%20%E8%81%9A%E6%B2%99%E6%88%90%E5%A1%94%E7%9A%84%E6%97%B6%E9%97%B4%E5%A4%8D%E7%94%A8%E6%B3%95.html","/posts/打工人手册/打工人手册#73 聚沙成塔的时间复用法.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#73%20%E8%81%9A%E6%B2%99%E6%88%90%E5%A1%94%E7%9A%84%E6%97%B6%E9%97%B4%E5%A4%8D%E7%94%A8%E6%B3%95.md"]],["v-4a148736","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_74%20%E7%9B%B4%E6%8E%A5%E9%9D%A2%E5%AF%B9%E9%97%AE%E9%A2%98.html",{d:1735613476e3,e:`<h1> 打工人手册#74 直接面对问题</h1>
<figure><figcaption></figcaption></figure>
<p>直接面对问题，才是解决问题最好的方法。Real World。<br>
而不是写很多分析整理的文章，也不是脑子中构想若干个改造。<br>
或者抱着一本很厚的书啃着，这些都不是效率最高的。<br>
最高的就是，直接面对问题，你要优化什么，你直接去优化，而不是去想优化什么。<br>
看到某个技术词汇，看不懂，再去看解释。<br>
想让电脑用作个人服务器，就直接调试，直到正常息屏且也不停止后台任务。<br>
要对资金进行规划，就列一个表格，每块需要多少资金，规划好后，直接把资金转账转了就好了。<br>
应该发布的网页，那就直接发布就好了，先发布了，再优化啊。<br>
不要总是，我下一步要做什么，要做一个什么优化，要做什么改造。我先学习下，我先了解下，我先沉淀下，这样就慢了啊。<br>
这不就是从母猪的产后护理开始，学习养猪么。养猪最简单的，不就是先去买几头猪，然后开始养起来么<br>
这样就意味着，这个事情不是第一优先级了啊。可以被其他事情时间往后推。</p>`,r:{minutes:1.15,words:345},y:"a",t:"打工人手册#74 直接面对问题"},["/posts/打工人手册/打工人手册_74 直接面对问题.html","/posts/打工人手册/打工人手册#74 直接面对问题.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#74%20%E7%9B%B4%E6%8E%A5%E9%9D%A2%E5%AF%B9%E9%97%AE%E9%A2%98.html","/posts/打工人手册/打工人手册#74 直接面对问题.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#74%20%E7%9B%B4%E6%8E%A5%E9%9D%A2%E5%AF%B9%E9%97%AE%E9%A2%98.md"]],["v-2e5f21b8","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_75%20%E8%B0%B7%E6%AD%8C%E5%89%8D%E5%8D%81%E7%9A%84%E9%A1%B5%E9%9D%A2%E4%BD%A0%E5%BA%94%E8%AF%A5%E7%9C%8B%E5%AE%8C.html",{d:1735613476e3,e:`<h1> 打工人手册#75 谷歌前十的页面你应该看完</h1>
<figure><figcaption></figcaption></figure>
<p>如果一个事情你不了解，你应该至少应该要把谷歌前十的页面看完。<br>
这是一个广度优先的搜索。随着你对某个人，某个网站感兴趣，你可以继续深度搜索。<br>
例如，我说个话题，"可转债 量化"，这个话题非常的窄。如果你不接触这个领域，可能这辈子都不会搜索这个话题。但是你既然接触了，是不是要把最核心的十个文章看完。<br>
看一看这个里面有没有什么你不知道的玩法？<br>
又或者，你准备办一个烤鱼店，你是不是要把前十个关于烤鱼怎么烤好吃的文章都看完？奶茶店也是。<br>
或者你在"长沙 XX路"买房子，是不是应该用脚丈量一下周围的每一寸土地？<br>
或者你在XX电商的卖XX内容，是不是应该收集下，你卖的这个东西，前十的卖家，他们怎么卖的，店铺怎么装修。什么话术？<br>
有两类人：</p>`,r:{minutes:1.45,words:436},y:"a",t:"打工人手册#75 谷歌前十的页面你应该看完"},["/posts/打工人手册/打工人手册_75 谷歌前十的页面你应该看完.html","/posts/打工人手册/打工人手册#75 谷歌前十的页面你应该看完.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#75%20%E8%B0%B7%E6%AD%8C%E5%89%8D%E5%8D%81%E7%9A%84%E9%A1%B5%E9%9D%A2%E4%BD%A0%E5%BA%94%E8%AF%A5%E7%9C%8B%E5%AE%8C.html","/posts/打工人手册/打工人手册#75 谷歌前十的页面你应该看完.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#75%20%E8%B0%B7%E6%AD%8C%E5%89%8D%E5%8D%81%E7%9A%84%E9%A1%B5%E9%9D%A2%E4%BD%A0%E5%BA%94%E8%AF%A5%E7%9C%8B%E5%AE%8C.md"]],["v-051b12af","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_76%20%E6%8F%90%E5%8D%87%E6%BC%94%E5%8C%96%E7%9A%84%E9%A2%91%E6%AC%A1.html",{d:1735613476e3,e:`<h1> 打工人手册#76 提升演化的频次</h1>
<figure><figcaption></figcaption></figure>
<p>进化告诉我们。拉长时间，很多事物的变化将是不可以想象的，猿猴可以进化成人类。人类可以构建出钢铁大厦，构建出科技丛林。<br>
这需要多久，进化成人类只需要500百万年；进化出现在的高科技，只需要5000年。<br>
但是你说，这5000年，对我而言，还是太长了，怎么办。<br>
我的个人业务是一个小舢板，根本等不了百年，如果再不改造升级，根本活不过50天。<br>
一万年太久，只争取朝夕。之前我们已经分析了，进化的力量是多么强大，拉长时间周期，辅以不停试错，就能诞生非常强的策略。<br>
但是我们每个人的问题是，每个人的时间都是非常短的。没有5000年去供我们的业务演变。<br>
所以我们要主动创造一个，我们的业务可以快速的演化的环境。<br>
可以是，招聘更多员工，不行的予以轮换；尝试更多的商品，不好卖的不再花时间运营；做更多的项目优化，每次优化一点点。<br>
我一天一次演化，一天百次演化。虽然拔苗助长，虽然不说50天进化出完美的结果，但是这样，确实能换来进化。<br>
更多尝试，更小的周期。</p>`,r:{minutes:1.23,words:369},y:"a",t:"打工人手册#76 提升演化的频次"},["/posts/打工人手册/打工人手册_76 提升演化的频次.html","/posts/打工人手册/打工人手册#76 提升演化的频次.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#76%20%E6%8F%90%E5%8D%87%E6%BC%94%E5%8C%96%E7%9A%84%E9%A2%91%E6%AC%A1.html","/posts/打工人手册/打工人手册#76 提升演化的频次.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#76%20%E6%8F%90%E5%8D%87%E6%BC%94%E5%8C%96%E7%9A%84%E9%A2%91%E6%AC%A1.md"]],["v-75d7587d","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_8%20%E5%A4%A7%E6%9C%89%E5%A4%A7%E7%9A%84%E9%9A%BE%E5%A4%84.html",{d:169691398e4,e:`<h1> 打工人手册#8 大有大的难处</h1>
<figure><figcaption></figcaption></figure>
<p>大有大的难处。<br>
真大起来，才会知道，这么多东西。</p>
<p>更大代码仓库，不是你一人能管理得过来。<br>
更多的卡，你划拉划拉，都需要花费不少时间。更大的公司，连电费支出你都不可忽视。大了，因而就没那么精细化了，资源利用率低了。管理没那么贴近了。管束也多了。你5个人的公司，50个人，500，5000个人。到5000个人，吃喝拉撒，火灾，社会民生问题，也就都成了问题。</p>
<p>哪怕更多的钱，你管理起来，也和少量的钱，完全不一样。</p>`,r:{minutes:.59,words:178},y:"a",t:"打工人手册#8 大有大的难处"},["/posts/打工人手册/打工人手册_8 大有大的难处.html","/posts/打工人手册/打工人手册#8 大有大的难处.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#8%20%E5%A4%A7%E6%9C%89%E5%A4%A7%E7%9A%84%E9%9A%BE%E5%A4%84.html","/posts/打工人手册/打工人手册#8 大有大的难处.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#8%20%E5%A4%A7%E6%9C%89%E5%A4%A7%E7%9A%84%E9%9A%BE%E5%A4%84.md"]],["v-299d697c","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C_9%20%E6%8D%A1%E7%93%B6%E5%AD%90%E7%9A%84%E8%89%BA%E6%9C%AF.html",{d:169691398e4,e:`<h1> 打工人手册#9 捡瓶子的艺术</h1>
<figure><figcaption></figcaption></figure>
<p>捡瓶子是有艺术的。<br>
公理一：收入&gt;产出。<br>
公理二：科技树 ＋ 心法 + (机器/人力)时间</p>
<p>.知名不具</p>
`,r:{minutes:.17,words:52},y:"a",t:"打工人手册#9 捡瓶子的艺术"},["/posts/打工人手册/打工人手册_9 捡瓶子的艺术.html","/posts/打工人手册/打工人手册#9 捡瓶子的艺术.html","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#9%20%E6%8D%A1%E7%93%B6%E5%AD%90%E7%9A%84%E8%89%BA%E6%9C%AF.html","/posts/打工人手册/打工人手册#9 捡瓶子的艺术.md","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C#9%20%E6%8D%A1%E7%93%B6%E5%AD%90%E7%9A%84%E8%89%BA%E6%9C%AF.md"]],["v-a51a6c2e","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E6%99%AE%E9%80%9A%E6%89%93%E5%B7%A5%E4%BA%BA%E7%9A%84%E4%B8%80%E7%94%9F.html",{d:1755318311e3,e:`<p>之前文章提到，职场有三张横亘在头上的大网，你想越过去。穷尽各种努力，但到头来终究会发现，自己越不过去。因为那是<em><strong>客观规律</strong></em>。</p>
<p>前两张网分别是：年收入100w后极其高昂的税收 和 带不走的位置。</p>
<p>今天是最后一张大网，<strong>ROE的下滑</strong>。</p>
<p>本文，我们以一个普通打工人的视角，来看看这最后一条铁律。</p>
<h4> 一、什么是ROE的下滑</h4>
<p>你从三四线城市出生，今年毕业了，年入20w左右。一开始全部的个人财富，就是农村的爸妈为你垫付的三个月房租，每个月800元，总共2400。最多再算一下你的其他零七零八的东西，共算你总资产5000元。</p>`,r:{minutes:7.81,words:2344},y:"a",t:""},["/posts/打工人手册/普通打工人的一生.html","/posts/打工人手册/普通打工人的一生.md",":md"]],["v-7da5f727","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/%E8%81%8C%E5%9C%BA%E7%9A%84%E5%A4%A9%E8%8A%B1%E6%9D%BF.html",{d:1755318311e3,e:`<p>之前写了篇文章，里面提到了三个点，是横亘在职场上的三张大网。里面只提到了第一个大网，牢牢的把大家框定在年薪100w左右。每多赚一分，都要付出极其高昂的税收。</p>
<p>这三个大网比你想象中的要来得早，分别是：税收，带不走的位置，ROE的下滑。我们挨个讲解，今天讲第二个大网：<strong>带不走的位置</strong>。</p>
<h4> <strong>一、职场的套现</strong></h4>
<p>假设你是小王，你在公司负责A、B、C三个业务，还带领着几个新人，几个老人，一起推进这些业务。你自己都感觉自己很重要，领导也自然是这样这样觉得。<strong>事情给你办，领导很放心</strong>。你一天十多个电话小会议，把各个业务线串了起来。你有一张大的表格，里面记录着每个人当前做什么。你每天下午都会再系统性的review一遍这个内容。很多时候，深夜你也被拉起来看问题，很多时候，一些事情你不在场都没法进行去决策。</p>`,r:{minutes:7.66,words:2297},y:"a",t:""},["/posts/打工人手册/职场的天花板.html","/posts/打工人手册/职场的天花板.md",":md"]],["v-3e6d5320","/posts/%E6%96%87%E7%AB%A0/1%20%E7%94%B5%E5%92%8C%E6%B0%B4%E7%9A%84%E6%88%90%E6%9C%AC.html",{d:1705553761e3,e:`<h1> #1 电和水的成本</h1>
<p>现代社会，电和水的成本到底是多少？到底维持机器运转，维持你的正常的使用电脑，玩耍手机，启动机器，这一切的一切，需要多少成本？</p>
<h2> 电费成本</h2>
<p>答案是，电费<strong>很便宜</strong>，下图是上海的电费：</p>
<figure><figcaption>lQDPJxDsrmYoyrfNBQDNAkCwYmCBBvoXXYQFTL48CsAdAA_576_1280.jpg</figcaption></figure>
<p>一般的用户，一个月很难用300度电。大家基本上都是在第一阶梯以内。而且还有峰时电和谷时电。谷时电的价格是峰时的一半。</p>`,r:{minutes:4.08,words:1223},y:"a",t:"#1 电和水的成本"},["/posts/文章/1 电和水的成本.html","/posts/文章/#1 电和水的成本.html","/posts/%E6%96%87%E7%AB%A0/#1%20%E7%94%B5%E5%92%8C%E6%B0%B4%E7%9A%84%E6%88%90%E6%9C%AC.html","/posts/文章/#1 电和水的成本.md","/posts/%E6%96%87%E7%AB%A0/#1%20%E7%94%B5%E5%92%8C%E6%B0%B4%E7%9A%84%E6%88%90%E6%9C%AC.md"]],["v-a85ff27a","/posts/%E6%96%87%E7%AB%A0/10%20%E5%AF%B9%E6%A0%87.html",{d:1734919416e3,e:`<h1> #10 对标</h1>
<p>1983年出生于福建龙岩，2001年考入南开大学[18岁]，2005毕业[24岁]，2006-酷讯-2007技术总监，2008-微软-饭否。2009-酷讯被收购，开始创业[26岁]。2010年不舍得买苹果。2012年创建字节跳动[29岁，纽芬兰渔场]。</p>
<p>这是张一鸣的人生轨迹。创建字节之后的事情，我们不追求，只看这之前的。大丈夫当如是也。</p>
<p>我和张一鸣年龄差距15岁，没有那么巨大。但两人在财富上的差别，极其巨大。</p>
<p>26岁，我没有开始创业，还苟且于职场之中，不敢做什么事情。投资刚刚起步，电商八字没有一撇，软件开发的技术倒是已练到炉火纯青。甚至有时候一些职场的小事，都让我偶尔心神疲惫。这是什么，这是通往奴役之路。</p>`,r:{minutes:2.51,words:752},y:"a",t:"#10 对标"},["/posts/文章/10 对标.html","/posts/文章/#10 对标.html","/posts/%E6%96%87%E7%AB%A0/#10%20%E5%AF%B9%E6%A0%87.html","/posts/文章/#10 对标.md","/posts/%E6%96%87%E7%AB%A0/#10%20%E5%AF%B9%E6%A0%87.md"]],["v-d0d8ee48","/posts/%E6%96%87%E7%AB%A0/11%202024%20%E6%98%8E%E6%9A%97%E5%88%87%E6%8D%A2%E4%B9%8B%E8%B7%AF.html",{d:1734919416e3,e:`<h1> #11 2024 明暗切换之路</h1>
<p>2024，最让我惊讶的是AI。</p>
<p>体验了很多新事物，太多事情里面有机会，世界上的一切都在迅速发展，而你还在搞什么对接服务商！</p>
<blockquote>
<p>我乃托孤重臣，却在这搞什么粮草！</p>
</blockquote>
<p>AI（编程、营销号、API调用）、电车。甚至包括量化系统，之前我不了解量化，今年参与到了其中，看到了一些内情，都感觉到这个行业在迅猛发展。一年前和现在也完全不一样。<br>
当下不是永恒的，沧海桑田，也是弹指一挥间。2024年的我走在这样一条道路上，后方是各种林荫的影子，前方则是坦途一片。我在交界处前行。<br>
未来基础程序员这个职业会消失，对此我毫不怀疑。这是一个时间问题。</p>`,r:{minutes:6.99,words:2096},y:"a",t:"#11 2024 明暗切换之路"},["/posts/文章/11 2024 明暗切换之路.html","/posts/文章/#11 2024 明暗切换之路.html","/posts/%E6%96%87%E7%AB%A0/#11%202024%20%E6%98%8E%E6%9A%97%E5%88%87%E6%8D%A2%E4%B9%8B%E8%B7%AF.html","/posts/文章/#11 2024 明暗切换之路.md","/posts/%E6%96%87%E7%AB%A0/#11%202024%20%E6%98%8E%E6%9A%97%E5%88%87%E6%8D%A2%E4%B9%8B%E8%B7%AF.md"]],["v-000b162b","/posts/%E6%96%87%E7%AB%A0/12%20%E8%B5%84%E6%BA%90%E7%9A%84%E6%9E%81%E8%87%B4%E4%BD%BF%E7%94%A8.html",{d:17553171e5,e:`<p>#12 资源的极致使用</p>
<h2> 一</h2>
<p>什么样的人可以对资源进行极致利用？大师！</p>
<p>之前看的小说里，有一种职业叫炼丹师。</p>
<p>他们利用火焰炼丹，炼丹的过程中，必须全神贯注，精妙的操纵火焰，一点点融合灵草&amp;精华&amp;天材地宝。对于其中真正的高手，我们称其为“大师”。这样的丹药成型的时候，会散发出丹药的异香。</p>
<p>大师就是擅长微操的人，大师就是能把资源利用到极限，能开发出不同技能树的人。<br>
这世界上本没有流派，有一个大师走过，于是便有了流派。</p>
<p>人生没有炼丹，但是人活在世上，有无数种和炼丹相同的事情。</p>`,r:{minutes:2.65,words:794},y:"a",t:""},["/posts/文章/12 资源的极致使用.html","/posts/文章/#12 资源的极致使用.html","/posts/%E6%96%87%E7%AB%A0/#12%20%E8%B5%84%E6%BA%90%E7%9A%84%E6%9E%81%E8%87%B4%E4%BD%BF%E7%94%A8.html","/posts/文章/#12 资源的极致使用.md","/posts/%E6%96%87%E7%AB%A0/#12%20%E8%B5%84%E6%BA%90%E7%9A%84%E6%9E%81%E8%87%B4%E4%BD%BF%E7%94%A8.md"]],["v-3b643057","/posts/%E6%96%87%E7%AB%A0/2%20%E5%85%B3%E4%BA%8E%E6%8B%96%E5%BB%B6%E7%9A%84%E5%88%86%E6%9E%90.html",{d:1705553761e3,e:`<h1> #2 关于拖延的分析</h1>
<p>很多事情，我明明知道很重要。但是仍然没有把它设置为最高优先级，这是为什么呢？例如投入到可转债自动化的事业中</p>
<p>人们在决定将某个任务或事项设置为最高优先级时，通常会受到多种因素的影响。以下是一些可能导致没有将某事项设置为最高优先级的常见原因：</p>
<p>缺乏清晰的目标：如果你没有明确的目标或愿景，很难将某个事项视为最高优先级。确保你明确知道自己想要达到的目标，并将其与其他事项进行比较。</p>
<p>时间管理挑战：有时，人们可能感到时间不够用，无法将某个事项设置为最高优先级，因为他们已经有很多其他紧急或重要的任务需要完成。在这种情况下，审查日程安排并进行优先级排序可能有所帮助。</p>`,r:{minutes:2.16,words:649},y:"a",t:"#2 关于拖延的分析"},["/posts/文章/2 关于拖延的分析.html","/posts/文章/#2 关于拖延的分析.html","/posts/%E6%96%87%E7%AB%A0/#2%20%E5%85%B3%E4%BA%8E%E6%8B%96%E5%BB%B6%E7%9A%84%E5%88%86%E6%9E%90.html","/posts/文章/#2 关于拖延的分析.md","/posts/%E6%96%87%E7%AB%A0/#2%20%E5%85%B3%E4%BA%8E%E6%8B%96%E5%BB%B6%E7%9A%84%E5%88%86%E6%9E%90.md"]],["v-25efb130","/posts/%E6%96%87%E7%AB%A0/3%20%E6%88%91%E6%89%80%E8%AE%A4%E8%AF%86%E7%9A%84%E5%B7%A6%E8%80%B3%E6%9C%B5%E8%80%97%E5%AD%90.html",{d:1705553761e3,e:`<h1> #3 我所认识的左耳朵耗子</h1>
<p>2023年，5月中旬，很普通的一天，我的朋友【左耳朵耗子】离开了我们。</p>
<p>他或许不是一个天才的程序员，但是他是一个杰出的程序员，是一个有着很多作品的程序员。Collshell博客，极客时间上的栏目，他的公司MegaEase。</p>
<p>死亡，是个人在这个星球上的终结。</p>
<p>我很遗憾通过这种方式认识左耳朵耗子，其实，<strong>我现实世界中压根没有见过左耳朵耗子</strong>。但是，我从各个别人的缅怀的文章中，突然发现，这个我之前没有听过的技术人，他似乎真的有两把刷子。</p>
<p>然后，我读了他的极客时间作品，一读就不可收拾。如痴如醉，我持续三个月，前后两次，读完了他全部的文章作品。</p>`,r:{minutes:9.11,words:2732},y:"a",t:"#3 我所认识的左耳朵耗子"},["/posts/文章/3 我所认识的左耳朵耗子.html","/posts/文章/#3 我所认识的左耳朵耗子.html","/posts/%E6%96%87%E7%AB%A0/#3%20%E6%88%91%E6%89%80%E8%AE%A4%E8%AF%86%E7%9A%84%E5%B7%A6%E8%80%B3%E6%9C%B5%E8%80%97%E5%AD%90.html","/posts/文章/#3 我所认识的左耳朵耗子.md","/posts/%E6%96%87%E7%AB%A0/#3%20%E6%88%91%E6%89%80%E8%AE%A4%E8%AF%86%E7%9A%84%E5%B7%A6%E8%80%B3%E6%9C%B5%E8%80%97%E5%AD%90.md"]],["v-4c82768e","/posts/%E6%96%87%E7%AB%A0/4%20%E9%9F%A9%E8%80%81%E9%AD%94%E7%9A%84%E6%88%90%E9%95%BF%E4%B9%8B%E8%B7%AF.html",{d:1705553761e3,e:`<h1> #4 韩老魔的成长之路</h1>
<p>最近重新看了《凡人修仙传》这部动漫，感慨颇多。</p>
<p>修仙界等级差一级，就是天差地别。以前我觉得这个设定很奇怪，但是现实世界经历了越多，我越是觉得，确实是如此的。韩立不是一开始就如此稳重，也是后来逐步变得如此稳重的，在此，我们聊一聊<strong>救苦救难韩天尊</strong>是如何一步步成长起来的。</p>
<figure><figcaption>image.png</figcaption></figure>
<h2> 初期</h2>
<p>初入七玄门，反杀墨大夫，杀金光道人。</p>
<p>这个时候，韩立基本上还没有什么心思。知识和技能都来自于墨大夫的教诲。偶尔获得小绿瓶，这算是本书的唯一外挂。其实此时此刻，我们就知道了，如果韩立没有获得小绿瓶。等待他的是什么？他的下场，恐怕和张铁一样。成为了别人的垫脚石。</p>`,r:{minutes:5.37,words:1611},y:"a",t:"#4 韩老魔的成长之路"},["/posts/文章/4 韩老魔的成长之路.html","/posts/文章/#4 韩老魔的成长之路.html","/posts/%E6%96%87%E7%AB%A0/#4%20%E9%9F%A9%E8%80%81%E9%AD%94%E7%9A%84%E6%88%90%E9%95%BF%E4%B9%8B%E8%B7%AF.html","/posts/文章/#4 韩老魔的成长之路.md","/posts/%E6%96%87%E7%AB%A0/#4%20%E9%9F%A9%E8%80%81%E9%AD%94%E7%9A%84%E6%88%90%E9%95%BF%E4%B9%8B%E8%B7%AF.md"]],["v-4434b254","/posts/%E6%96%87%E7%AB%A0/5%20%E6%88%91%E6%89%80%E7%94%A8%E7%9A%84%E6%96%B9%E6%B3%95.html",{d:1705553761e3,e:`<h1> #5 我所用的方法</h1>
<h3> 1. <strong>MECE思考方式</strong></h3>
<p>MECE是一种不重不漏的思考方式。适宜对某一场景，找出重点应该解决的问题。方案同时考虑到两点，人容易忽略某些事情（自顶向下逐步分解，这样中间可以发现一些被忽略的点）；同时对局部进行思考时，不要一次性关联太多要素。</p>
<p>配合xmind图，对系统性拆解起来很好用的一个方法。例如用来分析，"面试投递"、"赚钱"、"当前业务应该做的事情"。</p>
<h3> 2. <strong>面向观光的学习方法</strong></h3>
<p>面向观光的学习。这是一种启发法，即看似散漫的学习，观察。若有启发的部分，内化采用，再深入探索。随机漫步，发现了感兴趣的部分再深挖，一种非常轻松的方式。</p>`,r:{minutes:4.85,words:1454},y:"a",t:"#5 我所用的方法"},["/posts/文章/5 我所用的方法.html","/posts/文章/#5 我所用的方法.html","/posts/%E6%96%87%E7%AB%A0/#5%20%E6%88%91%E6%89%80%E7%94%A8%E7%9A%84%E6%96%B9%E6%B3%95.html","/posts/文章/#5 我所用的方法.md","/posts/%E6%96%87%E7%AB%A0/#5%20%E6%88%91%E6%89%80%E7%94%A8%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-6a8bc352","/posts/%E6%96%87%E7%AB%A0/6%202023%20%E5%A4%B9%E7%BC%9D%E4%B8%AD%E7%9A%84%E5%A5%87%E8%BF%B9.html",{d:1705988375e3,e:`<h1> #6 2023 夹缝中的奇迹</h1>
<p>2023年是一个奇迹年。是人工智能的奇迹，但是我确并没有躬身入局。我在一个叫<br>
职场规训的牢笼之中，挣扎。</p>
<p>我越来越为到手的工资兴奋，但是对于手上的财富，还是出现了不知道如何支配的问<br>
题，我的股市阴亏。投资计划前景美好，但又好像赚钱的那一天永远不会到来。我的<br>
计算机技能臻于化境，文档写的行云流水，向上管理也小有所得。但是工作的劳累程<br>
度超乎想象，11点半到家，艰难的2点入睡，早起时还记得昨日的劳累。</p>
<p>这一切，说明我都还在挣扎。还在生存的水位线上努力。明白了努力不过是幻觉，打工无法致富的我，只是勘破了一点点夹缝中的光芒。</p>`,r:{minutes:8.32,words:2497},y:"a",t:"#6 2023 夹缝中的奇迹"},["/posts/文章/6 2023 夹缝中的奇迹.html","/posts/文章/#6 2023 夹缝中的奇迹.html","/posts/%E6%96%87%E7%AB%A0/#6%202023%20%E5%A4%B9%E7%BC%9D%E4%B8%AD%E7%9A%84%E5%A5%87%E8%BF%B9.html","/posts/文章/#6 2023 夹缝中的奇迹.md","/posts/%E6%96%87%E7%AB%A0/#6%202023%20%E5%A4%B9%E7%BC%9D%E4%B8%AD%E7%9A%84%E5%A5%87%E8%BF%B9.md"]],["v-7084efee","/posts/%E6%96%87%E7%AB%A0/7%20%E6%88%BF%E9%97%B4%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%86%85%E5%BE%AA%E7%8E%AF.html",{d:1719294454e3,e:`<h1> #7 房间系统的内循环</h1>
<p>有一天我突然想到了这个话题，房间系统的内循环。<br>
我们来想一想，我们的房间为何总是趋向于变乱？</p>
<h2> A面</h2>
<p>一些比较庸俗的回答是热力学第二定律，事务从有序变为无序，这个过程不可逆。除非引入外力，例如你花费一顿午饭的能量，将房间重新变得干净整洁。<br>
<br>
那如果只是房间内循环呢？垃圾倒往何处？没有外部的物质输入，房间这个系统不会变好。<br>
就好像你生活中有一些东西坏了，例如房间里的吹风机坏了，你不上淘宝买个新的，那么吹头发就无法再进行了。</p>
<p>这个规律似乎很普世。因为有些时候，我们都有懒惰情绪，例如前段时间我的刮胡刀坏了，但是我的下意识想法不是马上去修/换，而是仿佛在等待，或者放着不管，<strong>似乎是在等它自己变好</strong>。</p>`,r:{minutes:4.78,words:1433},y:"a",t:"#7 房间系统的内循环"},["/posts/文章/7 房间系统的内循环.html","/posts/文章/#7 房间系统的内循环.html","/posts/%E6%96%87%E7%AB%A0/#7%20%E6%88%BF%E9%97%B4%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%86%85%E5%BE%AA%E7%8E%AF.html","/posts/文章/#7 房间系统的内循环.md","/posts/%E6%96%87%E7%AB%A0/#7%20%E6%88%BF%E9%97%B4%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%86%85%E5%BE%AA%E7%8E%AF.md"]],["v-e36fc148","/posts/%E6%96%87%E7%AB%A0/8%20%E5%BC%BA%E4%B8%8E%E5%BC%B1%E7%9A%84%E5%B9%BB%E8%A7%89.html",{d:1725859989e3,e:`<h1> #8 强与弱的幻觉</h1>
<h2> 一、</h2>
<p>有些人看起来很强，看起来不可一世。仿佛你在其面前只能低头。例如你的小组长。</p>
<p>有些人看起来很弱，看起来就孤零零，没有力量，没有能力。例如路边一个捡瓶子的老大爷。</p>
<p>强到什么地步，在职场这个场景，你说了不算，组长说了，即便不对，也可以算。是非黑白，不如官大一级。</p>
<p>弱到什么地步，你刚刚不屑一顾丢掉的东西（那个瓶子），对方审慎的把他捡起来，然后装进自己袋子里。你一丢掉，对方就立马捡起。</p>
<p>这强弱的差别有多大，看看起来就是海一般的差别，天与地的差别。但是我要告诉你，这是错觉呢？纸面的财富差距如此之大，看起来两个人的能级差别如此之大，但其实其背后，两者可以说根本性没有差别呢？</p>`,r:{minutes:6.35,words:1905},y:"a",t:"#8 强与弱的幻觉"},["/posts/文章/8 强与弱的幻觉.html","/posts/文章/#8 强与弱的幻觉.html","/posts/%E6%96%87%E7%AB%A0/#8%20%E5%BC%BA%E4%B8%8E%E5%BC%B1%E7%9A%84%E5%B9%BB%E8%A7%89.html","/posts/文章/#8 强与弱的幻觉.md","/posts/%E6%96%87%E7%AB%A0/#8%20%E5%BC%BA%E4%B8%8E%E5%BC%B1%E7%9A%84%E5%B9%BB%E8%A7%89.md"]],["v-34142867","/posts/%E6%96%87%E7%AB%A0/9%20%E6%A0%B9%E6%8D%AE%E5%9C%B0.html",{d:1727070541e3,e:`<h1> #9 根据地</h1>
<p>没有根据地，就是流寇。</p>
<h2> 一、机制</h2>
<p>从某个时刻开始，我就对于构建机制非常痴迷。因为意识到了，很多之前自己做过的事情，自己还会需要重复做。</p>
<p>而自己第二次做的时候，如果没有文档、没有机制，很多时候就需要从头再来一遍。</p>
<p>单独执行一次的代码没有意义，把代码部署到服务器，不分昼夜的进行，这就有意义。</p>
<p>这一整套，提需求，写代码，验证无误，发布，赚取商业价值，就成了互联网公司的工作流，也就是互联网公司最大的机制。</p>
<p>机制是这样的重要。机制其实是不依赖于任何一个个人的，不论你是写代码的测试，还是管理机器的运维。你只是这个机制中的一颗螺丝钉，是可以随时替换的。</p>`,r:{minutes:5.16,words:1549},y:"a",t:"#9 根据地"},["/posts/文章/9 根据地.html","/posts/文章/#9 根据地.html","/posts/%E6%96%87%E7%AB%A0/#9%20%E6%A0%B9%E6%8D%AE%E5%9C%B0.html","/posts/文章/#9 根据地.md","/posts/%E6%96%87%E7%AB%A0/#9%20%E6%A0%B9%E6%8D%AE%E5%9C%B0.md"]],["v-c4735526","/posts/%E6%B2%90%E6%B2%90/2020%E6%88%91%E6%9D%A5%E4%BA%86.html",{d:1737800654e3,e:`<h1> 2020我来了</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
`,r:{minutes:.2,words:59},y:"a",t:"2020我来了"},["/posts/沐沐/2020我来了.html","/posts/沐沐/2020我来了.md",":md"]],["v-60a2d43e","/posts/%E6%B2%90%E6%B2%90/2021%E9%87%8D%E5%9B%9E%E6%B7%B1%E5%9C%B3%E8%8A%9C%E6%B9%96.html",{d:1739615298e3,e:`<h1> 2021重回深圳！芜湖</h1>
<p><br>
<br>
</p>
<p>真的对深圳感情太不一样啦～<br>
经常去而且之前香港读书都是经深圳<br>
这次休假就是去深圳<br>
打卡蘩楼 汶和记 干炒牛河 肠粉 虾饺<br>
快乐</p>
`,r:{minutes:.25,words:76},y:"a",t:"2021重回深圳！芜湖"},["/posts/沐沐/2021重回深圳芜湖.html","/posts/沐沐/2021重回深圳芜湖.md",":md"]],["v-75f5f7f8","/posts/%E6%B2%90%E6%B2%90/2023%E7%9A%84%E5%B0%BE%E5%B7%B4%E6%9D%A5%E5%B9%BF%E5%B7%9E%E5%B7%A5%E4%BD%9C%E5%95%A6%E6%89%93%E5%B7%A5%E4%BA%BA%E6%97%A5%E5%B8%B8.html",{d:1739615298e3,e:`<h1> 2023的尾巴来广州工作啦！打工人日常～</h1>
<p><br>
<br>
</p>
<p>异动广州第一周，快要冻死了……<br>
我的散伙饭刚吃完前组长也异动了<br>
师傅也在，这下好啦，广州相聚了<br>
第一天刚到俺师傅就带我去吃了标记！<br>
猪杂粥吃了，牛杂煲吃了，羊杂汤吃了，<br>
潮汕牛肉火锅吃了，粿条吃了，肠粉吃了，<br>
生滚粥也吃了，米粉米线牛河也吃了</p>
<p>公司楼下的卡皮巴拉和圣诞树真可爱，<br>
附近的商场都是圣诞节的氛围真好呀！<br>
广东人夜生活真的好丰富！我爱了！</p>
<p>夜里下班后的夜宵&amp;周六的改善伙食。<br>
#周末吃什么 #广州 #打工人日常 #广州美食 #圣诞节</p>`,r:{minutes:.71,words:212},y:"a",t:"2023的尾巴来广州工作啦！打工人日常～"},["/posts/沐沐/2023的尾巴来广州工作啦打工人日常.html","/posts/沐沐/2023的尾巴来广州工作啦打工人日常.md",":md"]],["v-06d58938","/posts/%E6%B2%90%E6%B2%90/2024%E5%8F%88%E8%A6%81%E5%8E%BB%E5%BE%80%E6%96%B0%E7%9A%84%E5%9F%8E%E5%B8%82%E5%95%A6.html",{d:1737800654e3,e:`<h1> 2024又要去往新的城市啦！</h1>
<p><br>
<br>
</p>
<p>在广州生活还不到一年，<br>
又要搬去深圳啦～<br>
还记得之前毕业的时候和同学去深圳湾人才公园<br>
当时看着对面的CBD大楼还在互相打趣说<br>
以后我们会不会也来这里上班～<br>
结果兜兜转转几年以后，我又辗转来了深圳<br>
那就南村万博再见，前海湾你好呀！<br>
未来请多指教</p>
<p>【9月份真的好疲惫，每一次出门远行都很开心但是来自路途奔波的身体疲劳完全挡不住，中秋节一次飞机高铁的辗转，回来以后蔫了一天，生理期直接大爆炸。最近为了调休又在连续上班，晚上下班收拾行李到夜里，打包整理寄走，搬家真的好辛苦～这几天早上又睡得不好，突然醒来就睡不着，今天和明天都要五点起床赶高铁赶飞机，前天今天早起刷牙的时候都要点呼吸困难～不过很快就假期啦，哦莫哦莫，下个月一切都会更顺利！健健康康】</p>`,r:{minutes:1.04,words:311},y:"a",t:"2024又要去往新的城市啦！"},["/posts/沐沐/2024又要去往新的城市啦.html","/posts/沐沐/2024又要去往新的城市啦.md",":md"]],["v-75834753","/posts/%E6%B2%90%E6%B2%90/2024%E5%BE%88%E5%B9%B8%E8%BF%902025%E4%BC%9A%E6%9B%B4%E5%A5%BD%E5%91%80.html",{d:1737800654e3,e:`<h1> 2024很幸运，2025会更好呀！</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>2024.12.31，眨眼间已经是2024年最后一天了，<br>
2025，开启人生下一阶段，我们都会更好<br>
3月认识，6月每天电话发信息，9月正式在一起，一年四季，已经12月啦，缘分真的是个很神奇的事情<br>
虽然24年最后一天因为工作/异地/一天假等等因素，无法见面，但是男朋友3-5号会来深圳一起跨年<br>
——————如此便也对未来畅想一下——————</p>
<p>【诚诚2024年的总结里，对2025年的展望原文为】：<br>
2025，轻松自由。机制逐一构建。<br>
职场从容自信，每天下楼走走，持续减少付出。<br>
和对象琴瑟相和。<br>
轻松自由着，也可以把事情给做了。关键在于思考，在于选择。</p>`,r:{minutes:1.55,words:464},y:"a",t:"2024很幸运，2025会更好呀！"},["/posts/沐沐/2024很幸运2025会更好呀.html","/posts/沐沐/2024很幸运2025会更好呀.md",":md"]],["v-4ac06eac","/posts/%E6%B2%90%E6%B2%90/2025%E8%A6%81%E5%92%8C%E7%94%B7%E6%9C%8B%E5%8F%8B%E4%B8%80%E8%B5%B7%E6%97%BA%E6%97%BA%E6%97%BA.html",{d:1737800654e3,e:`<h1> 2025要和男朋友一起旺旺旺！！！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>晚上和诚诚一起看斗牌传说！<br>
被赤木的高超牌技和强大心态折服<br>
顺势两个人有讨论了一下各自家乡麻将打法！<br>
今年回家我们肯定免不了要牌桌上坐坐<br>
看了几集以后一致决定不如去练练？？？<br>
2vs2组合模式主打一个配合和技巧，<br>
一开始我们还有点不熟练，两个人一直输，<br>
对象的牌一度输到只剩4k左右<br>
还好后面几局我们巧妙配合，有两把我做了大牌！<br>
还是自摸自摸，直接炸翻天诚诚也超厉害！<br>
有一局对方已经领先，靠我自摸+男朋友不点炮止损，<br>
最后浅赢入场费300豆哈哈哈还两次碰到一对情侣…<br>
一胜一负，但是我们那局赢的豆子多，还是我们强<br>
嘿嘿！好诶！开门红今年一定顺顺利利！赚钱钱！<br>
#新的一年希望我们越来越好 #麻将 #斗牌传说 #欢乐麻将 #麻将技巧 #恋爱日常记录#异地恋 #异地恋情侣日常 #手机游戏</p>`,r:{minutes:1.1,words:331},y:"a",t:"2025要和男朋友一起旺旺旺！！！"},["/posts/沐沐/2025要和男朋友一起旺旺旺.html","/posts/沐沐/2025要和男朋友一起旺旺旺.md",":md"]],["v-954d91fe","/posts/%E6%B2%90%E6%B2%90/47%E5%8D%A1%E4%BD%8D%E8%B5%9B%20%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%AC%AC%E4%B8%89%E8%BD%AE.html",{d:1739615298e3,e:`<h1> 4.7卡位赛 王者荣耀第三轮</h1>
<p><br>
<br>
</p>
<p>LGD打DRG，<br>
私心希望lgd拿下哈哈哈，<br>
然后就能在佛山看到es啦</p>
<p>想看罗思源！！小狗耶耶</p>
`,r:{minutes:.2,words:59},y:"a",t:"4.7卡位赛 王者荣耀第三轮"},["/posts/沐沐/47卡位赛 王者荣耀第三轮.html","/posts/沐沐/47卡位赛 王者荣耀第三轮.md",":md"]],["v-f2ce5f74","/posts/%E6%B2%90%E6%B2%90/Last%20day%E8%A6%81%E5%8E%BB%E5%B9%BF%E5%B7%9E%E5%95%A6_%E4%B8%80%E5%88%87%E9%A1%BA%E5%88%A9.html",{d:1739615298e3,e:`<h1> Last day！要去广州啦(<sup>_</sup>)一切顺利</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>今天是在原岗位的最后一天！！！<br>
所有人都说是好事，恭喜我，让我好好努力！<br>
我被问的时候都没有犹豫一点，直接说可以走<br>
好快啊，几天交接时间就结束了！请了一天假再报道，<br>
不管怎么样，感谢这段时间的经历，遇到的人和自己！<br>
越努力越幸运，我觉得自己很好运但我也会把握机会。<br>
【本来不想发的，交接完坐着好无聊啦哈哈哈哈】<br>
这是20年从香港毕业的时候隔离玩去广州玩，<br>
和我广州室友一起玩的照片刚好也是圣诞节附近！<br>
没想到兜兜转转三年我又回到了继续南方生活，<br>
总之，希望未来一切顺利顺心顺遂！冲冲冲！<br>
#广州 #lastday #打工人 #打工日记</p>`,r:{minutes:.9,words:270},y:"a",t:"Last day！要去广州啦(_)一切顺利"},["/posts/沐沐/Last day要去广州啦_一切顺利.html","/posts/沐沐/Last day要去广州啦_一切顺利.md",":md"]],["v-160124f8","/posts/%E6%B2%90%E6%B2%90/iPhone15%20Pro%20Max%E4%BD%BF%E7%94%A8%E6%84%9F%E5%BE%88%E5%A5%BD%E5%A5%BD%E7%9C%8B.html",{d:1739615298e3,e:`<h1> iPhone15 Pro Max使用感很好！！！好看</h1>
<p><br>
<br>
<br>
</p>
<p>本来预计是11月到，结果昨天就送到了～<br>
非常惊喜，拿到手先检查快递包装，封口条，手机信息<br>
编码还有序列号（是否为印度）开机检查网上都有！<br>
第一件事就是贴膜自己贴的（闪魔家很方便）<br>
然后套上我可爱的手机壳（这组买了好几个颜色）<br>
不是发财就是暴富赚钱哈哈哈，还有个小富婆的<br>
第二件事就是各种设置，灵动岛必须搞起来！<br>
相机📷查找，铃声各种app，我的墙纸桌面<br>
我没搞一键传输所有，主要是照片iCloud备份，<br>
【王者荣耀那是必须得有，第一把排位lose】<br>
目前使用感很好，嘎嘎轻嘎嘎快，像素nice，听歌ok<br>
#iPhone15promax #iphone #灵动岛 #iOS17</p>`,r:{minutes:.79,words:236},y:"a",t:"iPhone15 Pro Max使用感很好！！！好看"},["/posts/沐沐/iPhone15 Pro Max使用感很好好看.html","/posts/沐沐/iPhone15 Pro Max使用感很好好看.md",":md"]],["v-176bc0da","/posts/%E6%B2%90%E6%B2%90/record%20a%20new%20day.html",{d:1739615298e3,e:`<h1> record a new day</h1>
<p><br>
<br>
</p>
<p>下头😴无语🙄</p>
`,r:{minutes:.08,words:23},y:"a",t:"record a new day"},["/posts/沐沐/record a new day.html","/posts/沐沐/record a new day.md",":md"]],["v-01a225a0","/posts/%E6%B2%90%E6%B2%90/%E4%B8%80%E4%B8%A2%E4%B8%A2%E7%94%9F%E6%B4%BBplog%E5%A6%82%E6%AD%A4%E7%83%AD%E7%88%B1%E7%94%9F%E6%B4%BB.html",{d:1739615298e3,e:`<h1> 一丢丢生活plog，如此热爱生活～</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>又是不想工作的一天！<br>
什么时候才能退休～</p>
`,r:{minutes:.43,words:129},y:"a",t:"一丢丢生活plog，如此热爱生活～"},["/posts/沐沐/一丢丢生活plog如此热爱生活.html","/posts/沐沐/一丢丢生活plog如此热爱生活.md",":md"]],["v-682c8701","/posts/%E6%B2%90%E6%B2%90/%E4%B8%80%E4%BA%BA%E9%A3%9F%E7%9A%84%E6%97%A5%E5%B8%B8.html",{d:1737800654e3,e:`<h1> 一人食的日常</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>希望要越来越好！</p>
`,r:{minutes:.23,words:68},y:"a",t:"一人食的日常"},["/posts/沐沐/一人食的日常.html","/posts/沐沐/一人食的日常.md",":md"]],["v-28c21826","/posts/%E6%B2%90%E6%B2%90/%E4%B8%80%E5%BC%A0%E5%9B%BE%E8%AF%81%E6%98%8E%E4%BD%A0%E7%9A%84%E8%BF%90%E6%B0%94%E5%BE%88%E5%A5%BD.html",{d:1739615298e3,e:`<h1> 一张图证明你的运气很好</h1>
<p><br>
<br>
</p>
<p>#一张图证明<br>
#中奖了 #刮刮乐<br>
少不了我刮刮乐第一次刮朋友说让我开心一下<br>
好友买的我收了奖励r然后喝了奶茶哈哈哈</p>
`,r:{minutes:.25,words:76},y:"a",t:"一张图证明你的运气很好"},["/posts/沐沐/一张图证明你的运气很好.html","/posts/沐沐/一张图证明你的运气很好.md",":md"]],["v-7ca3b6cc","/posts/%E6%B2%90%E6%B2%90/%E4%B8%80%E6%8A%8A%E6%99%8B%E7%BA%A7%E6%88%90%E5%8A%9F%E5%A4%AA%E9%A1%BA%E5%88%A9%E6%83%B9.html",{d:1739615298e3,e:`<h1> 一把晋级成功！太顺利惹！</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>休假两天从星耀三干到王者<br>
还得是我大腿带我上分哈哈哈<br>
小王这个赛季勉强对我还不错<br>
虽然也会遇到3.0的0.6马超2/4马可<br>
但是总体来说还行继续努力多爱我一点<br>
#王者荣耀上分 #王者荣耀辅助 #王者荣耀 #王者荣耀晋级 #王者荣耀游戏搭子</p>
`,r:{minutes:.45,words:134},y:"a",t:"一把晋级成功！太顺利惹！"},["/posts/沐沐/一把晋级成功太顺利惹.html","/posts/沐沐/一把晋级成功太顺利惹.md",":md"]],["v-09673a32","/posts/%E6%B2%90%E6%B2%90/%E4%B8%8A%E5%91%A8%E7%9A%84%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%89%8C%E7%89%8C.html",{d:1737800654e3,e:`<h1> 上周的王者荣耀牌牌🤔</h1>
<p><br>
<br>
</p>
<p>这个星期颓废了完全不想打，<br>
每天有空就睡觉💤三天了就打了一把巅峰赛<br>
#王者荣耀 #王者荣耀上分</p>
`,r:{minutes:.21,words:64},y:"a",t:"上周的王者荣耀牌牌🤔"},["/posts/沐沐/上周的王者荣耀牌牌.html","/posts/沐沐/上周的王者荣耀牌牌.md",":md"]],["v-bcf14eb0","/posts/%E6%B2%90%E6%B2%90/%E4%B8%8D%E8%A6%81%E6%8A%8A%E4%BD%A0%E7%9A%84%E8%A7%82%E5%BF%B5%E5%BC%BA%E5%8A%A0%E7%BB%99%E5%88%AB%E4%BA%BA.html",{d:1739615298e3,e:`<h1> 不要把你的观念强加给别人</h1>
<p><br>
<br>
</p>
<p>遇到一个男生在跟我讨论感情问题的时候说：“我觉得你总有一个理想型，一些条条框框限制在，你觉得你真的能等到一个百分百匹配你的人吗？就算你等到了，他真的适合你吗？”</p>
<p>我说：“每个人都有自己的理想型，你挑选对象也不是阿猫阿狗都可以吧？都有筛选的条件才能有了解的欲望，性格外貌不都是？再者，我没有说非要百分百契合才可以且适不适合需要磨合才知道。也是你说得成年人只做筛选不做教育。”</p>
<p>真的很不喜欢爱教育别人的男生当然前提你要是有这个资本也不是不行，你有能力说服我。别拿你自以为是的那一套东西来跟我battle，每个人都有自己的坚持和喜好，先不论对与错，大家的成长环境不一样，接触的东西体验的人生不一样，形成的价值观念不一样，别把你的想法强加给别人，有些东西可以放弃有些东西不可以，尤其是原则性的～</p>`,r:{minutes:1.31,words:392},y:"a",t:"不要把你的观念强加给别人"},["/posts/沐沐/不要把你的观念强加给别人.html","/posts/沐沐/不要把你的观念强加给别人.md",":md"]],["v-2db2b064","/posts/%E6%B2%90%E6%B2%90/%E4%B8%A4%E4%B8%AA%E4%BA%BA%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%B0%B1%E6%98%AF%E6%84%8F%E4%B9%89.html",{d:1739615298e3,e:`<h1> 两个人在一起就是意义！！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>两个人在一起就是最重要的、就是意义、就是经历、就是陪伴、就是幸福。☀️这个是男朋友今天说的话，戳中了我的心巴，很喜欢很喜欢～ (<em>¯︶¯</em>)</p>
<p>“异地恋怎么谈”“如何坚持/维持异地恋”“异地恋的意义”“异地恋需要天天打电话吗”...太多太多这样的话题，在没有遇到对象之前我也害怕排斥异地恋，隔着屏幕的感觉对方能真切感受到吗？但是遇到他以后，异地恋算什么！每天都好甜好快乐</p>
<p>我天下第一幸福，就是那个最配他喜欢和疼爱守护的，哈哈哈！！我不喜欢异地恋，我喜欢他超爱他，他也很爱我。他也说没有异地恋的感觉，很亲近！见面也没有陌生感，熟络的拉手手贴贴～<br>
我爱用波浪号，男朋友被我影响跟我聊天也会使用，各种存我的表情包还嫌弃我好久不更新，哼哼</p>`,r:{minutes:2.69,words:806},y:"a",t:"两个人在一起就是意义！！"},["/posts/沐沐/两个人在一起就是意义.html","/posts/沐沐/两个人在一起就是意义.md",":md"]],["v-4120dc9f","/posts/%E6%B2%90%E6%B2%90/%E4%B8%AD%E7%A7%8B%E8%8A%82%E5%81%87%E6%9C%9F%E5%90%8E%E8%A2%AB%E5%A4%B8%E4%BA%86%E4%B8%80%E5%91%A8%E4%BA%86.html",{d:1739615298e3,e:`<h1> 中秋节假期后被夸了一周了！！</h1>
<p><br>
<br>
</p>
<p>放假回公司上班第一天，好几个同事夸我皮肤状态比之前好很多，整个人精神也不一样了，感觉充完电恢复了能量一样活力满满～</p>
<p>今天下午一个客户发消息说感觉我最近很开心，心情很好非常明显～对比之前和他打电话沟通能听出来人的状态不一样！</p>
<p>今天晚上拿餐的时候，一个男同事说之前到十点多十一点我的皮肤状态会有点蜡黄憔悴，今天完全不一样水灵灵很嫩，这个点还很好！而且我都是在公司素颜</p>
<p>哦莫哦莫，尊嘟超级开心🎉我的嘴角都上天啦～<br>
所以说……人遇到快乐的事情，在正确的磁场里面真的会很顺利，由内而外的散发一种美，心情也好，状态也好，皮肤也棒！<br>
#打工人日常 #磁场 #快乐瞬间 #生活碎片</p>`,r:{minutes:.92,words:275},y:"a",t:"中秋节假期后被夸了一周了！！"},["/posts/沐沐/中秋节假期后被夸了一周了.html","/posts/沐沐/中秋节假期后被夸了一周了.md",":md"]],["v-f6610eae","/posts/%E6%B2%90%E6%B2%90/%E4%B8%AD%E9%80%9A%E5%BF%AB%E9%80%92%E7%9C%9F%E7%9A%84%E5%BE%88%E5%9E%83%E5%9C%BE%E6%97%A0%E8%AF%AD.html",{d:1739615298e3,e:`<h1> 中通快递真的很垃圾！！！无语</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>快递昨天签收了，朋友给买的，我都不知道有快递，<br>
没有电话联系没有短信提醒，还是朋友告知。<br>
根本就没找到在哪，没写公司楼层快递间没有，<br>
也没说放在快递柜自取，或者哪个驿站，啥也不是！<br>
早上联系了显示的两个快递员好吗，跟我说不是他们派送的，找在线客服说显示签收让我联系业务员就是我发短信的号码联系网点电话根本打不通，响了三四分钟没人接听？？？<br>
最后没办法打95720找我的快递，真的被气到了，又去打了95311投诉，一直不给我转人工说我咨询过了。我说！转人工，我要投诉！然后终于给我切换客服了，噼里啪啦一顿输出，一顿发泄哈哈哈，客服说您先消消气～稍晚联系您。<br>
不是我说，这个服务和链路真的拉垮，显示业务员和派送员号码联系了没用有啥意义，网店号码打不通干嘛放着当摆设呢～客服转入也很拉垮，在线都找不到人工还必须要电话📞以后备注不要发中通<br>
#快递 #快递投诉 #中通快递#投诉中通快递 #中通物流 #中通客服不给转人工 #中通客服 #中通</p>`,r:{minutes:1.33,words:398},y:"a",t:"中通快递真的很垃圾！！！无语"},["/posts/沐沐/中通快递真的很垃圾无语.html","/posts/沐沐/中通快递真的很垃圾无语.md",":md"]],["v-61011f00","/posts/%E6%B2%90%E6%B2%90/%E4%B8%BA%E4%BB%80%E4%B9%88%E9%97%B9%E5%88%AB%E6%89%AD%E4%BB%A5%E5%90%8E%E6%83%85%E7%BB%AA%E5%8F%8D%E6%89%91%E8%BF%99%E4%B9%88%E4%B8%A5%E9%87%8D.html",{d:1737800654e3,e:`<h1> 为什么闹别扭以后情绪反扑这么严重！</h1>
<p><br>
<br>
</p>
<p>前天晚上和男朋友闹了不愉快，小事，<br>
僵持到夜里三点多，两个人都没睡着<br>
最后有打电话彼此沟通了，他也有在哄我，<br>
但是不知道为什么感觉情绪没有得到安抚。<br>
五点多睡，七点多做噩梦（关于他）哭着醒来<br>
眼睛还在一直流泪，呼吸也很难受，得不到舒缓，<br>
早上起来洗澡的时候也一直在哭，非常非常低落。<br>
他有一直给我发信息，早上中午下午都有发……<br>
可是我不知道怎么回也提不起兴趣聊天，难受，<br>
一天没办法主动去给他发消息，心里面很不开心～<br>
下午他有给我点奶茶，可是总是无法消弭坏情绪，<br>
办公室和家里都巨安静，室友感觉到我情绪很糟安慰，<br>
昨天晚上没有例行电话，发了个消息就去睡觉了<br>
是真的睡着了！连续两天没睡好，连续上班一周了～<br>
以为睡一觉能够缓解变好，今天早上起来还是不开心<br>
有各种想他的好，去看一下之前的快乐聊天记录<br>
（我室友说因为你还在意，没有真正排解掉，可以生个气，大吵大闹一下，骂他一下，让自己发泄一下）<br>
但是我这个性格没办法任性，也很难吵架，去发作<br>
我同事（男生）说我太理性了，让我去找个憨包（哈哈）<br>
他不知道我有对象，昨天看我不开心让我去谈个恋爱。<br>
说找个男朋友快乐一下（殊不知我在为狗男人伤心呢）<br>
【昨天有发小作文，但是回复略微敷衍，导致更生气】<br>
明明是个不拧巴的人，之前也很有小别扭都很快好了，<br>
这次就是能量很低很低，一会儿好些一会儿又不好了，<br>
早上又给狗男人发了好几条消息，给他说不开心☹️<br>
很想他 很爱他 快碎了 想抱抱 哭得很难受 ～～～<br>
他醒了立马给我发消息发语音，路上打电话安慰我<br>
（异地恋 一点也不想闹不愉快 好想好想见面 想贴贴）<br>
（爱你的人 怎么舍得推开你 冷落你 只是不知道怎么办了）<br>
（没有能量不开心 原来真的是对什么都不感兴趣 蔫巴）</p>`,r:{minutes:2.15,words:644},y:"a",t:"为什么闹别扭以后情绪反扑这么严重！"},["/posts/沐沐/为什么闹别扭以后情绪反扑这么严重.html","/posts/沐沐/为什么闹别扭以后情绪反扑这么严重.md",":md"]],["v-49db4735","/posts/%E6%B2%90%E6%B2%90/%E4%B9%90%E4%B9%90%E8%8C%B6%E8%BF%99%E4%B8%AA%E5%8C%85%E8%A3%85%E4%B9%9F%E5%A4%AA%E5%A5%BD%E7%AC%91%E4%BA%86.html",{d:1739615298e3,e:`<h1> 乐乐茶这个包装也太好笑了🤭</h1>
<p><br>
<br>
</p>
<p>乐乐茶一拳牛油果真的丑到我哈哈哈！！！<br>
好可爱啊，贼好玩，也好喝的～<br>
还有芒果和山楂草莓系列，都是我喜欢的<br>
#乐乐茶</p>
`,r:{minutes:.25,words:74},y:"a",t:"乐乐茶这个包装也太好笑了🤭"},["/posts/沐沐/乐乐茶这个包装也太好笑了.html","/posts/沐沐/乐乐茶这个包装也太好笑了.md",":md"]],["v-2b8b9fdf","/posts/%E6%B2%90%E6%B2%90/%E4%B9%90%E9%AB%98%E7%A7%AF%E6%9C%A8.html",{d:1739615298e3,e:`<h1> 乐高积木</h1>
<p><br>
<br>
<br>
</p>
<p>闲着无聊开始拼乐高<br>
之前买其他的店员送的小的<br>
我妈说给以后孩子玩<br>
我？？？？</p>
`,r:{minutes:.18,words:55},y:"a",t:"乐高积木"},["/posts/沐沐/乐高积木.html","/posts/沐沐/乐高积木.md",":md"]],["v-6bb85300","/posts/%E6%B2%90%E6%B2%90/%E4%BA%8C%E5%8D%81%E5%A4%A7%E5%87%A0%E5%8D%95%E8%BA%AB%E5%BE%88%E5%A5%BD%E4%B8%8D%E8%A6%81%E7%84%A6%E8%99%91%E5%BC%80%E5%BF%83%E6%9C%80%E9%87%8D%E8%A6%81.html",{d:1739615298e3,e:`<h1> 二十大几单身很好，不要焦虑，开心最重要！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>不知不觉已经二十大几了，以前从没想过自己也会被“催婚”，大多来自于亲戚七大姑八大姨～</p>
<p>大学期间努力学习考证旅游培养爱好，一个人到处飞参加社会实践做志愿做义工，大部分奖学金荣誉都拿了，毕业应该是专业Top1或者2。<br>
香港读研的时候也很努力学习，顺便打卡香港各种景点和美食，和同学一起玩，Top10毕业。<br>
算起来单身超久了哈哈哈，不知道为什么对于感情的欲望很低，更爱体验生活，有喜欢的也有被追过都没有下文，就好像短暂的被爱了然后对方退了。<br>
我偏理性喜欢就会很热烈会主动，但是一旦察觉在感情里消耗自己或者对方没有那么喜欢，我会停下来自己走，更爱自己</p>`,r:{minutes:2.7,words:811},y:"a",t:"二十大几单身很好，不要焦虑，开心最重要！"},["/posts/沐沐/二十大几单身很好不要焦虑开心最重要.html","/posts/沐沐/二十大几单身很好不要焦虑开心最重要.md",":md"]],["v-aea96510","/posts/%E6%B2%90%E6%B2%90/%E4%BA%8E%E7%A5%A5%E5%AE%87%E7%9C%9F%E7%9A%84%E5%BE%88%E9%9A%BE%E4%B8%8D%E8%AE%A9%E4%BA%BA%E5%96%9C%E6%AC%A2.html",{d:1737800654e3,e:`<h1> 于祥宇真的很难不让人喜欢！</h1>
<p><br>
<br>
<br>
</p>
<p>我宣布！<br>
今年最喜欢的脱口秀演员是于祥宇<br>
他的观点段子很独特，表达方式很亲和也让人有共鸣，幽默风趣，暗讽拿捏的太好了！<br>
太有意思了，很松弛，总之每次都能踩中我喜欢的点，疯狂get～<br>
#正在追的综艺 #综艺 #喜剧之王单口季 #脱口秀 #于祥宇 #搞笑</p>
`,r:{minutes:.44,words:131},y:"a",t:"于祥宇真的很难不让人喜欢！"},["/posts/沐沐/于祥宇真的很难不让人喜欢.html","/posts/沐沐/于祥宇真的很难不让人喜欢.md",":md"]],["v-46d10d3e","/posts/%E6%B2%90%E6%B2%90/%E4%BB%8A%E5%A4%A9%E5%96%9D%E4%BA%86%E4%BB%80%E4%B9%88.html",{d:1739615298e3,e:`<h1> 今天喝了什么</h1>
<p><br>
<br>
</p>
<p>第一次喝茶理宜世！因为办公室真的太热了<br>
室内温度31度谁懂啊，需要一杯快乐水降温！<br>
然后然后他就给我送了两个吸管一个勺子，<br>
真的好离谱，不过工作真的真的太热啦！！<br>
#记录生活 #奶茶</p>
`,r:{minutes:.32,words:97},y:"a",t:"今天喝了什么"},["/posts/沐沐/今天喝了什么.html","/posts/沐沐/今天喝了什么.md",":md"]],["v-117967e4","/posts/%E6%B2%90%E6%B2%90/%E4%BB%8A%E5%A4%A9%E5%96%9D%E4%BA%86%E5%90%97.html",{d:1739615298e3,e:`<h1> 今天喝了吗？☕️☕️</h1>
<p><br>
<br>
<br>
</p>
<p>星巴克新杯子高级的新品？这个系列高级</p>
<p>第一次买吸管杯！！！玻璃的还蛮好看～<br>
#星巴克 #星巴克新品 #星巴克杯子 #咖啡 #圣诞节</p>
`,r:{minutes:.25,words:74},y:"a",t:"今天喝了吗？☕️☕️"},["/posts/沐沐/今天喝了吗.html","/posts/沐沐/今天喝了吗.md",":md"]],["v-7fd019d2","/posts/%E6%B2%90%E6%B2%90/%E4%BB%8A%E5%A4%A9%E5%96%9D%E4%BA%86%E5%90%97%E7%BB%BF%E7%AE%AD%E7%BB%99%E6%88%91%E6%89%93%E9%92%B1.html",{d:1739615298e3,e:`<h1> 今天喝了吗？☕️☕️绿箭给我打钱！</h1>
<p><br>
<br>
<br>
</p>
<p>#COTD #想记录下此刻 #这个模板有点东西 #100家探店计划<br>
本咖啡星人好久没喝星巴克了！<br>
都怪瑞幸那小子，每周9.9深入我心！<br>
平时用券也就十几谁不爱啊<br>
翻记录上次喝星爸爸最少三个月之前<br>
瑞幸！你赢了！你成功霸占了我的钱包～<br>
还有绿箭啊，你看看你看看要不要给我打钱！<br>
你家的薄荷糖、润喉糖、口香糖、脆皮糖……<br>
包包必备，宿舍必备，清新口气来一颗～<br>
#瑞幸 #星巴克 #咖啡 #绿箭 #清新口气 #打工人</p>
`,r:{minutes:.62,words:186},y:"a",t:"今天喝了吗？☕️☕️绿箭给我打钱！"},["/posts/沐沐/今天喝了吗绿箭给我打钱.html","/posts/沐沐/今天喝了吗绿箭给我打钱.md",":md"]],["v-50760880","/posts/%E6%B2%90%E6%B2%90/%E4%BB%8A%E5%A4%A9%E6%88%91%E5%B0%B1%E6%98%AF%E5%A5%B3%E9%87%8E%E7%8E%8B%E5%93%88%E5%93%88%E5%93%88.html",{d:1739615298e3,e:`<h1> 今天我就是女野王哈哈哈！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>把平时想玩不会的英雄都操作一遍<br>
友友负责点技能，我负责移动平A<br>
真好玩哈哈哈比排位有意思！可惜17号就没了<br>
#王者荣耀 #双人同舞 #游戏分享</p>
`,r:{minutes:.42,words:126},y:"a",t:"今天我就是女野王哈哈哈！"},["/posts/沐沐/今天我就是女野王哈哈哈.html","/posts/沐沐/今天我就是女野王哈哈哈.md",":md"]],["v-676d5ede","/posts/%E6%B2%90%E6%B2%90/%E4%BB%8A%E5%B9%B4%E7%9A%84%E7%BD%91%E6%98%93%E4%BA%91%E5%B9%B4%E5%BA%A6%E6%80%BB%E7%BB%93%E6%9D%A5%E5%95%A6.html",{d:1739615298e3,e:`<h1> 今年的网易云年度总结来啦🥰</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>年度最爱歌手！孟凡明！！我就知道<br>
年度最爱歌曲—永不失联的爱 周兴哲我的爱<br>
别问，问就是永远的第一名逆袭的第二名<br>
周书逸和高仕德，我真的好爱好恨没早入坑<br>
周兴哲的歌曲我都超喜欢，你好不好 挚友……<br>
why don't you stay 懂得都懂，黑帮哈哈哈！</p>
<p>杨宇腾的水蓝色情人，林老板清唱真好听</p>
<p>唯一想了解的人，那个近距离爱上你的歌～<br>
冬天被脆脆鲨陈楚生带入坑，披襟斩棘真不错！</p>`,r:{minutes:.93,words:280},y:"a",t:"今年的网易云年度总结来啦🥰"},["/posts/沐沐/今年的网易云年度总结来啦.html","/posts/沐沐/今年的网易云年度总结来啦.md",":md"]],["v-fa2a96d0","/posts/%E6%B2%90%E6%B2%90/%E4%BB%8A%E6%97%A5%E4%BB%BD%E6%B0%B4%E6%9E%9C%E5%B7%B2%E5%8F%91%E6%94%BE%E5%88%B0%E6%89%8B%E9%87%8C.html",{d:1739615298e3,e:`<h1> 今日份水果已发放到手里</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>朋友寄来的赣南脐橙真好吃！有大又甜！<br>
每一片都爆珠了超级正宗的，水分多多<br>
为了欢迎回粤小伙伴—我，从老家寄的～#每日水果 #大爱水果季 #应季水果 #赣南脐橙 #打工人 #打工日记 #广州番禺</p>
`,r:{minutes:.39,words:116},y:"a",t:"今日份水果已发放到手里"},["/posts/沐沐/今日份水果已发放到手里.html","/posts/沐沐/今日份水果已发放到手里.md",":md"]],["v-ee3cab44","/posts/%E6%B2%90%E6%B2%90/%E4%BB%8A%E6%97%A5%E6%97%A9%E9%A4%90%E5%9C%9F%E8%B1%86%E6%B3%A5%E6%B2%99%E6%8B%89.html",{d:1739615298e3,e:`<h1> 今日早餐—土豆泥沙拉</h1>
<p><br>
<br>
</p>
<p>早睡早起好快乐！能做好多事<br>
早起做了个土豆泥沙拉（没有黄瓜放了洋葱）<br>
吃完出了丢汗顺便洗个澡洗头香喷喷<br>
#一人食<br>
#一人食吃什么<br>
#早餐<br>
#土豆泥<br>
#减脂餐<br>
#努力改变自己一起变瘦变美吧<br>
#控制饮食</p>
`,r:{minutes:.35,words:104},y:"a",t:"今日早餐—土豆泥沙拉"},["/posts/沐沐/今日早餐土豆泥沙拉.html","/posts/沐沐/今日早餐土豆泥沙拉.md",":md"]],["v-2da7eada","/posts/%E6%B2%90%E6%B2%90/%E4%BB%96%E6%80%8E%E4%B9%88%E8%BF%99%E4%B9%88%E5%A5%BD%E7%9C%8B.html",{d:1737800654e3,e:`<h1> 他怎么这么好看！</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>#体感预报 #日漫 #原耽腐漫 #日剧 #日剧体感预报 #樋口幸平 #日腐剧<br>
漫画真的很看！脸部特写都好帅～<br>
作为一个攻控，一脸满足！<br>
好久没看到这么合胃口的日漫攻<br>
第六话看完啦，后记也看了，好喜欢～<br>
不过还是建议家人们看完剧再看漫画。</p>
`,r:{minutes:.43,words:129},y:"a",t:"他怎么这么好看！"},["/posts/沐沐/他怎么这么好看.html","/posts/沐沐/他怎么这么好看.md",":md"]],["v-01def838","/posts/%E6%B2%90%E6%B2%90/%E4%BB%96%E8%AF%B4%E6%88%91%E5%9C%A8%E6%AC%A3%E8%B5%8F%E6%88%91%E7%9A%84%E7%8C%8E%E7%89%A9.html",{d:1739615298e3,e:`<h1> 他说：我在欣赏我的猎物</h1>
<p>对面被打了一波只剩下辅助鲁班大师<br>
跑到龙坑去了，然后我朋友还在那游了一下<br>
我问：你在干嘛<br>
他说：我在欣赏我的猎物，反正跑不掉了<br>
太残忍了太残忍了，给人希望再一刀收割了～<br>
#王者荣耀 #王者荣耀上分 #澜 #王者荣耀高光时刻</p>
`,r:{minutes:.34,words:103},y:"a",t:"他说：我在欣赏我的猎物"},["/posts/沐沐/他说我在欣赏我的猎物.html","/posts/沐沐/他说我在欣赏我的猎物.md",":md"]],["v-b760b8b6","/posts/%E6%B2%90%E6%B2%90/%E4%BB%BB%E4%BD%95%E6%B2%A1%E7%9C%8B%E5%B0%81%E7%A5%9E%E7%9A%84%E4%BA%BA%E4%BD%93%E4%BC%9A%E4%B8%8D%E5%88%B0%E6%88%91%E7%9A%84%E5%BF%AB%E4%B9%90.html",{d:1739615298e3,e:`<h1> 任何没看封神的人体会不到我的快乐</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>封神真的后劲好大！<br>
安利身边人去看，二刷二刷<br>
质子团这个编剧和导演的设定太牛了～<br>
姬发和殷郊的选角很适配！人物也立体！<br>
咋就是说，谁不爱180黑皮腹肌胸肌体育生<br>
man爆了好吗？郊通发达好朋友👭一起磕<br>
#封神 #封神第一部 #郊通发达 #于适 #陈牧驰</p>
`,r:{minutes:.47,words:140},y:"a",t:"任何没看封神的人体会不到我的快乐"},["/posts/沐沐/任何没看封神的人体会不到我的快乐.html","/posts/沐沐/任何没看封神的人体会不到我的快乐.md",":md"]],["v-6f80895a","/posts/%E6%B2%90%E6%B2%90/%E4%BD%A0%E5%A5%BD%E5%91%802019.html",{d:1737800654e3,e:`<h1> 你好呀2019</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>吃吃喝喝</p>
`,r:{minutes:.21,words:63},y:"a",t:"你好呀2019"},["/posts/沐沐/你好呀2019.html","/posts/沐沐/你好呀2019.md",":md"]],["v-1b754024","/posts/%E6%B2%90%E6%B2%90/%E4%BD%A0%E6%80%8E%E4%B9%88%E7%9F%A5%E9%81%93%E6%88%91%E8%A6%81%E5%8E%BB%E7%9C%8B%E5%AD%9F%E5%87%A1%E6%98%8E.html",{d:1737800654e3,e:`<h1> 你怎么知道我要去看孟凡明</h1>
<p><br>
<br>
</p>
<p>#孟凡明 #livehouse<br>
还有不到一个月！！！<br>
期待和小明见面</p>
`,r:{minutes:.15,words:45},y:"a",t:"你怎么知道我要去看孟凡明"},["/posts/沐沐/你怎么知道我要去看孟凡明.html","/posts/沐沐/你怎么知道我要去看孟凡明.md",":md"]],["v-40355436","/posts/%E6%B2%90%E6%B2%90/%E5%80%9F%E6%9C%8B%E5%8F%8B%E5%AE%B6%E5%B0%8F%E7%8C%AB%E5%92%AA%E6%9D%A5%E6%8B%8D%E8%A7%86%E9%A2%91.html",{d:1739615298e3,e:`<h1> 借朋友家小猫咪来拍视频</h1>
<p>好不容易骗来的哈哈哈，一点也不配合气死咯！还吃我猫罐头猫条#猫咪 #flower #宠物版flower #蓝猫</p>
`,r:{minutes:.16,words:47},y:"a",t:"借朋友家小猫咪来拍视频"},["/posts/沐沐/借朋友家小猫咪来拍视频.html","/posts/沐沐/借朋友家小猫咪来拍视频.md",":md"]],["v-35abf21c","/posts/%E6%B2%90%E6%B2%90/%E5%81%9A%E9%A5%AD%E6%97%A5%E5%B8%B8.html",{d:1737800654e3,e:`<h1> 做饭日常</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>记录一下在HK做饭的成品！</p>
`,r:{minutes:.23,words:70},y:"a",t:"做饭日常"},["/posts/沐沐/做饭日常.html","/posts/沐沐/做饭日常.md",":md"]],["v-10146b6e","/posts/%E6%B2%90%E6%B2%90/%E5%85%85%E6%BB%A1%E7%94%9F%E6%B4%BB%E6%B0%94%E7%9A%84%E5%9F%8E%E5%B8%82%E9%9A%8F%E4%BE%BF%E6%8B%8D.html",{d:1739615298e3,e:`<h1> 充满生活气的城市🍂随便拍</h1>
<p><br>
<br>
<br>
</p>
<p>元旦广州真的so many people！！！<br>
根本不敢去热门景点，什么小蛮腰北京路，<br>
真的太可怕了，就连家门口的四海城都挤死，<br>
在家看地图都堵得发紫晚上十一点多万达金街都人，<br>
就附近走走转转，滴滴打车都难打，骑共享电动车<br>
骑到边界又走路，最近的步数直线上升<br>
已经研究好后面两个周末的博物馆路线，<br>
不要加班拜托了！加班那就都空谈哈哈哈哈哈<br>
#一起逛夜市 #夜市 #广州 #植村夜市 #南村万博 #番禺 #四海城 #citywalk #广州美食</p>`,r:{minutes:.65,words:196},y:"a",t:"充满生活气的城市🍂随便拍"},["/posts/沐沐/充满生活气的城市随便拍.html","/posts/沐沐/充满生活气的城市随便拍.md",":md"]],["v-0c3dd955","/posts/%E6%B2%90%E6%B2%90/%E5%85%AC%E5%8F%B8%E7%95%99%E4%B8%8B%E7%9A%84%E9%99%88%E6%A5%9A%E7%94%9F%E5%BA%97%E9%95%BF.html",{d:1739615298e3,e:`<h1> 公司留下的陈楚生店长</h1>
<p><br>
<br>
</p>
<p>#想记录下此刻 #这个模板有点东西<br>
楼下全家看到生哥，脆脆鲨实火<br>
陈楚生2024巡回演唱会顺利！！！<br>
#陈楚生 #0713</p>
`,r:{minutes:.22,words:67},y:"a",t:"公司留下的陈楚生店长"},["/posts/沐沐/公司留下的陈楚生店长.html","/posts/沐沐/公司留下的陈楚生店长.md",":md"]],["v-6de021dc","/posts/%E6%B2%90%E6%B2%90/%E5%88%AB%E5%86%8D%E7%BB%99%E6%88%91%E6%8E%A8%E8%8D%90eStar%E4%BA%86.html",{d:1737800654e3,e:`<h1> 别再给我推荐eStar了！</h1>
<p><br>
<br>
</p>
<p>昨天晚上没看真的心梗，要泪崩了<br>
打dyg顺风变逆风，想过2:0 1:1 唯独0:2<br>
ag那场我不敢看，说上中野生气打架很凶<br>
说子阳真的很努力去偷家偷水晶<br>
说清融恨不得一脚踢五个全控死<br>
说花海还要怎么C怎么刷才能赢<br>
谁的问题谁的失误真的不想去评判了<br>
中野真的辛苦了，花海清融好想赢别再给我推荐世冠任何消息了！别刀我了，谁赶着戳人肺管子！</p>
`,r:{minutes:.56,words:168},y:"a",t:"别再给我推荐eStar了！"},["/posts/沐沐/别再给我推荐eStar了.html","/posts/沐沐/别再给我推荐eStar了.md",":md"]],["v-903e110a","/posts/%E6%B2%90%E6%B2%90/%E5%89%A7%E7%89%88%E9%95%87%E9%AD%82%E8%BF%99%E6%98%AF%E4%BB%99%E5%AD%90%E5%90%A7%E6%9C%B1%E4%B8%80%E9%BE%99.html",{d:1737800654e3,e:`<h1> 剧版镇魂，这是仙子吧，朱一龙！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>镇魂[影视]# #朱一龙 沈美人朱一龙 之前想养肥了看，但是……<br>
没忍住，天哪，这是哪里来的仙子，沈美人！<br>
太太好看了，眼睛里都是戏，眉目都是深情，<br>
发现他的傅红雪，连城璧，花无谢也都好看，<br>
中毒太深了，希望龙哥越来越好ꉂ ೭(˵¯̴͒ꇴ¯̴͒˵)౨”</p>
`,r:{minutes:.51,words:152},y:"a",t:"剧版镇魂，这是仙子吧，朱一龙！"},["/posts/沐沐/剧版镇魂这是仙子吧朱一龙.html","/posts/沐沐/剧版镇魂这是仙子吧朱一龙.md",":md"]],["v-061618aa","/posts/%E6%B2%90%E6%B2%90/%E5%8F%88%E6%98%AF%E4%B8%BA%E5%88%AB%E4%BA%BA%E7%88%B1%E6%83%85%E8%90%BD%E6%B3%AA%E7%9A%84%E4%B8%80%E5%A4%A9.html",{d:1737800654e3,e:`<h1> 又是为别人爱情落泪的一天</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>#星条红与皇室蓝#电影 #同性题材电影<br>
我真的会被狠狠感动<br>
两个人因为身份纠结<br>
但是为了爱情而勇敢<br>
Alex公开演讲，Henry对抗国王<br>
他叫他baby，他让他hurry</p>
`,r:{minutes:.57,words:172},y:"a",t:"又是为别人爱情落泪的一天"},["/posts/沐沐/又是为别人爱情落泪的一天.html","/posts/沐沐/又是为别人爱情落泪的一天.md",":md"]],["v-1825afb7","/posts/%E6%B2%90%E6%B2%90/%E5%8F%88%E6%98%AF%E7%BE%8E%E9%A3%9F.html",{d:1737800654e3,e:`<h1> 又是美食</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>哈哈哈看到食物很开心！</p>
`,r:{minutes:.23,words:69},y:"a",t:"又是美食"},["/posts/沐沐/又是美食.html","/posts/沐沐/又是美食.md",":md"]],["v-7dd86076","/posts/%E6%B2%90%E6%B2%90/%E5%8F%8C%E4%BA%BA%E5%90%8C%E8%88%9E%E7%9C%9F%E7%9A%84%E5%A5%BD%E7%8E%A9%E7%88%B1%E7%8E%A9.html",{d:1739615298e3,e:`<h1> 双人同舞真的好玩！爱玩！</h1>
<p>#王者荣耀 #双人同舞 #澜<br>
浅浅体验几把女野王的快乐！！！<br>
和我朋友的默契度也太高l吧了</p>
`,r:{minutes:.15,words:45},y:"a",t:"双人同舞真的好玩！爱玩！"},["/posts/沐沐/双人同舞真的好玩爱玩.html","/posts/沐沐/双人同舞真的好玩爱玩.md",":md"]],["v-439caf43","/posts/%E6%B2%90%E6%B2%90/%E5%90%8D%E5%9C%BA%E9%9D%A2%E5%95%8A%E4%B9%B0%E5%BA%8A%E5%8D%95%E4%BB%A5%E5%90%8E%E7%AC%91%E6%AD%BB%E4%BA%86.html",{d:1737800654e3,e:`<h1> 名场面啊～～买床单以后笑死了</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>救命！他们这个这个对话也太直白了吧哈哈哈！给我笑傻了～大做特做这台词烫嘴不？<br>
日剧里面想吃中餐，结果去买了大肉包大鸡排，给我震惊了🤯体感预报没有一集没有kiss坐缆车牵手的时候那个笑太绝了，得逞的偷笑哈哈哈～<br>
#好看的日剧推荐<br>
#日腐<br>
#体感预报<br>
#樋口幸平<br>
#增子敦贵</p>
`,r:{minutes:.63,words:189},y:"a",t:"名场面啊～～买床单以后笑死了"},["/posts/沐沐/名场面啊买床单以后笑死了.html","/posts/沐沐/名场面啊买床单以后笑死了.md",":md"]],["v-7665fb42","/posts/%E6%B2%90%E6%B2%90/%E5%90%8E%E5%A4%A9%E9%9A%94%E7%A6%BB%E7%BB%93%E6%9D%9F17%E5%8F%B7%E9%A2%84%E7%BA%A6%E4%BA%86dfs.html",{d:1739615298e3,e:`<h1> 后天隔离结束！17号预约了dfs</h1>
<p><br>
<br>
</p>
<p>早上九点的场，希望dfs6折闪购能够抢到东西，隔离十四天太苦了！</p>
`,r:{minutes:.18,words:53},y:"a",t:"后天隔离结束！17号预约了dfs"},["/posts/沐沐/后天隔离结束17号预约了dfs.html","/posts/沐沐/后天隔离结束17号预约了dfs.md",":md"]],["v-3ec97590","/posts/%E6%B2%90%E6%B2%90/%E5%91%A8%E6%9C%AB%E5%BF%AB%E4%B9%90%E4%B8%89%E4%BA%BA%E5%90%8C%E5%B1%85%E5%9C%A8%E5%AE%B6%E7%9A%84%E5%BF%AB%E4%B9%90%E7%94%9F%E6%B4%BB.html",{d:1739615298e3,e:`<h1> 周末快乐！！！三人同居在家的快乐生活～</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>早上被室友们薅起来打扫卫生，巨困<br>
大家分工拖地扫地擦拭桌台，干干净净！<br>
收拾完立马下楼丢垃圾，该洗衣服的洗衣服～<br>
最小的妹妹给大家煮了玉米糊，超好喝<br>
中午大家又煮了酸汤米线吃+点外卖，<br>
有个姐妹发烧了但是要出门，给她煮了姜茶咕咕灌，<br>
洗个热水澡，吃完药才让她出去吃饭饭<br>
剩下我们两个在思考吃什么，小妹妹说做焖饭！<br>
于是我先去洗澡她去做饭🍳吃完我来收拾洗碗～<br>
（宝子跟我道歉说做得不好吃，我说非常好辛苦啦！）<br>
去买葱蒜的时候顺便买两杯奶茶，又下单了小零食，<br>
她打游戏我看电影，惬意又松弛，超级快乐<br>
其实一开始会担心同居大家会有摩擦闹矛盾。<br>
一周过去啦，大家有问题就直说去改善调整，<br>
个人注意自己的卫生，轮流买日用品或者AA，<br>
早上晚上一起下班，回家的路上聊天唱歌🎤<br>
虽然她们最近经常蛐蛐我和我对象哈哈哈，<br>
氮素，还是非常可爱～很有礼貌和分寸感，<br>
慢慢填充这个小家，互相包容互相理解未来会更好！<br>
#周末宅家 #周末快乐碎片 #打工人的快乐周末 #同居日常 #室友 #美食日记 #做饭日记 #记录吧就现在 #快乐瞬间</p>`,r:{minutes:1.41,words:422},y:"a",t:"周末快乐！！！三人同居在家的快乐生活～"},["/posts/沐沐/周末快乐三人同居在家的快乐生活.html","/posts/沐沐/周末快乐三人同居在家的快乐生活.md",":md"]],["v-94f15b56","/posts/%E6%B2%90%E6%B2%90/%E5%92%8C%E5%AE%A4%E5%8F%8B%E5%96%9D%E5%B0%8F%E9%85%92%E5%90%83%E7%83%A7%E7%83%A4%E8%81%8A%E5%88%B0%E6%B7%B1%E5%A4%9C.html",{d:1737800654e3,e:`<h1> 和室友喝小酒吃烧烤聊到深夜</h1>
<p><br>
<br>
</p>
<p>姐妹给我兑了两杯詹娜龙舌兰，晕乎乎但是还好<br>
呜呜呜😭女孩子之间的感情真的好棒！！！<br>
家人么，晚安，有点醉了哈哈哈～～睡觉💤<br>
明天还要加班，离谱的很，咋就是说<br>
#一起喝酒吧 #微醺 #夜生活模式开启 #记录我的生活瞬间</p>
`,r:{minutes:.38,words:113},y:"a",t:"和室友喝小酒吃烧烤聊到深夜"},["/posts/沐沐/和室友喝小酒吃烧烤聊到深夜.html","/posts/沐沐/和室友喝小酒吃烧烤聊到深夜.md",":md"]],["v-b990bda8","/posts/%E6%B2%90%E6%B2%90/%E5%95%8A%E6%88%91%E8%BF%99%E5%A4%A7%E5%B1%81%E8%82%A1%E6%80%8E%E4%B9%88%E5%8A%9E.html",{d:1739615298e3,e:`<h1> 啊！我这大屁股怎么办～</h1>
<p><br>
<br>
</p>
<p>体检报告的腰围臀围和腰臀比<br>
高中的时候胖然后毕业减肥现在还好<br>
就是这屁股真的减不下去呜呜<br>
所以我喜欢穿连衣裙👗必须收腰的<br>
没有收腰得配腰带，裤子👖真的死亡<br>
之前有一次穿直筒喇叭牛仔裤+短上衣吊带<br>
我女同事在厕所拍了我屁股说“好生养”<br>
我……emm……栓Q！报警啦！<br>
我妈还安慰我，没事欧美人就喜欢你这种身材大屁股我朋友调侃我去穿旗袍好了。<br>
可是我腿粗，不爱运动所以肉松松的不紧致，<br>
梨形身材真的好痛苦😖也没有很重看起来不瘦</p>`,r:{minutes:.76,words:227},y:"a",t:"啊！我这大屁股怎么办～"},["/posts/沐沐/啊我这大屁股怎么办.html","/posts/沐沐/啊我这大屁股怎么办.md",":md"]],["v-0dad4594","/posts/%E6%B2%90%E6%B2%90/%E5%95%8A%E9%80%9B%E8%A1%97%E7%9C%8B%E5%88%B0%E4%B8%80%E4%B8%AA%E7%94%B7%E5%9B%A2%E5%9C%A8%E7%AD%BE%E5%94%AE.html",{d:1737800654e3,e:`<h1> 啊！逛街看到一个男团在签售</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>ENONE我感觉我都已经脱离🐟了<br>
现在的小孩我都不认识了救命！<br>
还停留在韩庚 金在中 superjunior 时代</p>
`,r:{minutes:.31,words:93},y:"a",t:"啊！逛街看到一个男团在签售"},["/posts/沐沐/啊逛街看到一个男团在签售.html","/posts/沐沐/啊逛街看到一个男团在签售.md",":md"]],["v-1e4e63fb","/posts/%E6%B2%90%E6%B2%90/%E5%97%93%E5%AD%90%E7%97%9B%E5%93%91%E6%88%90%E7%94%B5%E9%9F%B3%E6%9C%B5%E6%8B%89%E8%BF%98%E6%98%AF%E6%B2%A1%E9%80%83%E8%BF%87.html",{d:1737800654e3,e:`<h1> 嗓子痛，哑成电音朵拉还是没逃过！</h1>
<p><br>
<br>
</p>
<p>离谱啊，这次是流感还是什么支原体感染？<br>
第一天是轻微嗓子痛有点痒，吃了999和蒲地兰<br>
晚上睡觉就开始严重了，一直咳嗽😷流鼻涕🤧<br>
就感觉要把肺咳出来那种，而且还是老黄痰！<br>
第二天就严重多了，膝盖发冷腿走路无力，<br>
咳嗽不多但是每次咳都撕心裂肺那种吓人呢<br>
喉咙痛到撕裂，早上伴有轻微头痛，药加了连花清瘟<br>
晚上量了两次体温，分别是37.3和37.1，没吃退烧药<br>
增加了抗病毒口服液和止咳片<br>
今天第三天早上睡醒感觉喉咙有异物，咽口水痛，<br>
可能是扁桃体发炎肿大了，好消息是36.5<br>
准备再吃个阿莫西林消炎一下，哑了不怎么能说话！<br>
下午再看看，早上吃了一个梨吃的时候很舒服<br>
吃药没用的话就打算去挂水看医生啦……<br>
【办公室有人咳嗽，有人感冒一周，有人流鼻涕】<br>
#流感 #嗓子痛 #喉咙痛<br>
一天没吃东西吃不了喉咙痛晚上饿的不行点了份粥<br>
然后听别人推荐买了念慈庵枇杷膏和片仔癀含片<br>
不是我说真的别生病，费钱费人，很难受没力气<br>
补充一下到晚上发现自己肩膀疼还要胸下两侧边<br>
以及后背很痛，走路的话膝盖和小腿无力……<br>
我朋友说是病毒性感冒引发的肌肉无力和咳嗽引起胸疼</p>`,r:{minutes:1.44,words:431},y:"a",t:"嗓子痛，哑成电音朵拉还是没逃过！"},["/posts/沐沐/嗓子痛哑成电音朵拉还是没逃过.html","/posts/沐沐/嗓子痛哑成电音朵拉还是没逃过.md",":md"]],["v-5c9d16cd","/posts/%E6%B2%90%E6%B2%90/%E5%9B%9B%E6%B5%B7%E5%9F%8E%E5%9C%A3%E8%AF%9E%E8%8A%82%E6%B0%9B%E5%9B%B4%E5%A5%BD%E6%B5%93%E5%95%8A.html",{d:1739615298e3,e:`<h1> 四海城圣诞节氛围好浓啊</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>今天休息吃完饭顺便去四海城溜达～<br>
圣诞节装饰好漂亮啊！！！好美！<br>
门口的恐龙会动哈哈哈，还有泡沫喷雪～<br>
拍照的人超级多明天就是平安夜啦<br>
【oh no，我还要上班】<br>
#番禺四海城 #广州番禹 #圣诞节</p>
`,r:{minutes:.51,words:152},y:"a",t:"四海城圣诞节氛围好浓啊"},["/posts/沐沐/四海城圣诞节氛围好浓啊.html","/posts/沐沐/四海城圣诞节氛围好浓啊.md",":md"]],["v-1621c87a","/posts/%E6%B2%90%E6%B2%90/%E5%9B%9E%E5%AE%B6%E5%9B%9E%E5%AE%B6%E5%8B%87%E6%95%A2%E7%9A%84%E4%BA%BA%E5%85%88%E4%B9%B0%E6%9C%BA%E7%A5%A8%E5%86%8D%E8%AF%B7%E5%81%87.html",{d:1739615298e3,e:`<h1> 回家回家！勇敢的人先买机票再请假</h1>
<p><br>
<br>
</p>
<p>一直纠结要不要回去，真的太忙了～<br>
我妈和朋友问了两次都在期待我回家吧，<br>
于是就把票买了哈哈哈，请假请假！<br>
月底happy一下，到时候再想怎么请假吧<br>
看医生剪头发逛街美甲美容吃饭唱歌按摩，安排！</p>
`,r:{minutes:.37,words:110},y:"a",t:"回家回家！勇敢的人先买机票再请假"},["/posts/沐沐/回家回家勇敢的人先买机票再请假.html","/posts/沐沐/回家回家勇敢的人先买机票再请假.md",":md"]],["v-6379fee4","/posts/%E6%B2%90%E6%B2%90/%E5%9C%A8%E4%B8%8A%E6%B5%B7%E8%99%B9%E6%A1%A5%E7%AB%99%E6%8D%A2%E4%B9%98%E5%B7%B2%E7%BB%8F%E8%A2%AB%E6%8C%A4%E6%AD%BB.html",{d:1739615298e3,e:`<h1> 在上海虹桥站换乘已经被挤死……</h1>
<p><br>
<br>
</p>
<p>家人们，我上来以后看到我的口是二十九<br>
换乘的站是4，我人都傻了两眼发黑……<br>
一路在人群中找缝隙挤来挤去，都出汗了！<br>
箱子磕磕碰碰，被别人挤也挤到别人～<br>
虽然撞到你鞋子不对但是那个女的好凶<br>
回头说我，大姐我也不是故意要碰到你鞋子<br>
全是人走路都很困难了，互相理解一下<br>
你这么凶真的挺丑的我被磕我都没在意<br>
高铁站坐下来吃百醇，隔壁小孩盯我看，<br>
她妈妈给她拿吃的我抬头看了一眼<br>
她妈妈说看到你在吃东西然后我就给她分了<br>
很可爱会叫阿姨好会说谢谢阿姨不吵不闹<br>
对比前面一排的小孩真的绝了！！一直在哭<br>
#上海虹桥 #上海虹桥站 #中秋节 #国庆节旅游</p>`,r:{minutes:.87,words:262},y:"a",t:"在上海虹桥站换乘已经被挤死……"},["/posts/沐沐/在上海虹桥站换乘已经被挤死.html","/posts/沐沐/在上海虹桥站换乘已经被挤死.md",":md"]],["v-369d4408","/posts/%E6%B2%90%E6%B2%90/%E5%9D%9A%E6%8C%81%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%9C%89%E6%94%B9%E5%96%84.html",{d:1739615298e3,e:`<h1> 坚持真的会有改善～</h1>
<p><br>
<br>
</p>
<p>每次洗头的那次洗澡🛁夏天抹芦荟胶or清爽身体乳，冬天身体乳，头发吹半干抹护发精油！#有什么事你坚持了一年以上</p>
`,r:{minutes:.24,words:71},y:"a",t:"坚持真的会有改善～"},["/posts/沐沐/坚持真的会有改善.html","/posts/沐沐/坚持真的会有改善.md",":md"]],["v-4620b9dd","/posts/%E6%B2%90%E6%B2%90/%E5%A4%8D%E9%98%B3%E7%AC%AC%E5%9B%9B%E5%A4%A9%E6%85%A2%E6%85%A2%E6%81%A2%E5%A4%8D%E4%B8%AD.html",{d:1739615298e3,e:`<h1> 复阳第四天慢慢恢复中</h1>
<p><br>
<br>
</p>
<p>成功被同事影响加入大军<br>
目前症状都很轻微，还好没有特别难受～<br>
测了两次终究是没逃过，猛女落泪了…<br>
过了三天了，身体疼痛缓解头疼好些了，<br>
鼻涕没有一开始多了哈哈哈哈咳嗽还有<br>
特别是晚上咳嗽很厉害也很痒干咳<br>
没吃药没挂水没打针纯靠自己扛<br>
多喝水多吃水果饮食要正常保证营养<br>
#复阳 #二阳 #复阳症状</p>
`,r:{minutes:.51,words:153},y:"a",t:"复阳第四天慢慢恢复中"},["/posts/沐沐/复阳第四天慢慢恢复中.html","/posts/沐沐/复阳第四天慢慢恢复中.md",":md"]],["v-6fe02bb0","/posts/%E6%B2%90%E6%B2%90/%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E5%A5%BD%E6%9C%89%E8%B6%A3.html",{d:1739615298e3,e:`<h1> 外卖小哥好有趣！</h1>
<p><br>
<br>
</p>
<p>#打工人 #有趣日常 #外卖小哥 #外卖<br>
下午上班一直在忙没接到手机电话，<br>
看到未接电话才回去(⁎⁍̴̛ᴗ⁍̴̛⁎)<br>
结果就开启一串有趣的对话！</p>
`,r:{minutes:.24,words:71},y:"a",t:"外卖小哥好有趣！"},["/posts/沐沐/外卖小哥好有趣.html","/posts/沐沐/外卖小哥好有趣.md",":md"]],["v-c3a2a69c","/posts/%E6%B2%90%E6%B2%90/%E5%A4%A7%E4%B8%89%E5%B7%B4%E8%BF%99%E5%AE%B6%E5%BA%97%E5%9C%A8%E6%94%BE%E5%91%A8%E5%85%B4%E5%93%B2.html",{d:1739615298e3,e:`<h1> 大三巴这家店在放周兴哲！</h1>
<p>#澳门 #大三巴 #citywalk #周兴哲<br>
路过这家店在放周兴哲，<br>
从你好不好到以后别做朋友<br>
听了两首走了，好开心哦～<br>
可惜昨天没能来听演唱会，广州见！</p>
`,r:{minutes:.22,words:66},y:"a",t:"大三巴这家店在放周兴哲！"},["/posts/沐沐/大三巴这家店在放周兴哲.html","/posts/沐沐/大三巴这家店在放周兴哲.md",":md"]],["v-12e7c04b","/posts/%E6%B2%90%E6%B2%90/%E5%A4%A7%E5%94%90%E8%AF%97%E4%BA%BA%E4%BC%A0%E6%88%91%E5%86%B2%E4%BA%86.html",{d:1739615298e3,e:`<h1> 大唐诗人传！我冲了</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>央妈出品，必是精品！每次纪录片都超爱<br>
年初的时候还在看《宗师列传 唐宋八大家》<br>
没想到年底，出了《宗师列传 大唐诗人传》<br>
超级喜欢！开篇就是初唐四杰，意气风发的少年～<br>
王勃 杨炯 卢照邻 骆宾王，演员都选得特别好！<br>
#央视频 #纪录片 #大唐诗人传 #初唐四杰</p>
`,r:{minutes:.48,words:144},y:"a",t:"大唐诗人传！我冲了"},["/posts/沐沐/大唐诗人传我冲了.html","/posts/沐沐/大唐诗人传我冲了.md",":md"]],["v-72c4231b","/posts/%E6%B2%90%E6%B2%90/%E5%A4%A7%E5%A3%B0%E5%AE%A3%E5%B8%83%E7%BB%88%E4%BA%8E%E7%94%9C%E7%94%9C%E7%9A%84%E6%81%8B%E7%88%B1%E4%B9%9F%E8%BD%AE%E5%88%B0%E6%88%91%E5%95%A6.html",{d:1737800654e3,e:`<h1> 大声宣布！终于甜甜的恋爱也轮到我啦～</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>在今年！2024进入恋爱关系～脱离孤寡团队啦<br>
拥有一个非常好的男朋友，是超级健康的恋爱状态～<br>
有被宠着被照顾着被呵护的，是忍不住想要分享“我有对象”的幸福冲动！</p>
<p>《如果要恋爱，请一定选自己很喜欢也很喜欢你的吧》<br>
每天起床都充满动力和能量。你们的磁场会很干净，一切都会很顺利，互相给对方带来好运～<br>
在遇到我男朋友之前，异动城市并且完全更换业务的我，状态很差，但是认识他这半年多以来，整个人变得越来越好，我很满意现在的我</p>`,r:{minutes:2.81,words:843},y:"a",t:"大声宣布！终于甜甜的恋爱也轮到我啦～"},["/posts/沐沐/大声宣布终于甜甜的恋爱也轮到我啦.html","/posts/沐沐/大声宣布终于甜甜的恋爱也轮到我啦.md",":md"]],["v-eb83d134","/posts/%E6%B2%90%E6%B2%90/%E5%A4%AA%E6%81%B6%E5%BF%83%E4%BA%86%E9%81%BF%E9%9B%B7%E7%99%BE%E8%8D%89%E5%91%B3%E9%B8%AD%E8%84%96%E6%9C%89%E8%99%AB%E5%8D%B5.html",{d:1737800654e3,e:`<h1> 太恶心了🤢避雷百草味鸭脖！有虫卵</h1>
<p><br>
<br>
<br>
</p>
<p>一整个大无语，买的百草味零食，<br>
一打开就有白点（不确定是不是虫卵）密密麻麻<br>
给我恶心到了，yue！又贵又不好吃！一袋才3个！<br>
重点是，这个品质也太垃圾了，晚饭要吐出来了<br>
卤味以后还是尽量买线下店吧，这种保质期很久的我真的不敢吃了……<br>
#鸭脖 #百草味 #百草味零食 #零食避雷</p>
`,r:{minutes:.48,words:145},y:"a",t:"太恶心了🤢避雷百草味鸭脖！有虫卵"},["/posts/沐沐/太恶心了避雷百草味鸭脖有虫卵.html","/posts/沐沐/太恶心了避雷百草味鸭脖有虫卵.md",":md"]],["v-efef747a","/posts/%E6%B2%90%E6%B2%90/%E5%A6%82%E6%9E%9C%E7%88%B1%E6%83%85%E6%9C%89%E6%B8%A9%E5%BA%A6%E6%AD%A4%E5%88%BB%E5%B0%B1%E6%98%AF%E6%9C%80%E9%80%82%E5%AE%9C%E7%9A%84.html",{d:1737800654e3,e:`<h1> 如果爱情有温度，此刻就是最适宜的！</h1>
<p><br>
<br>
<br>
</p>
<p>原来想标题的时候脑袋里闪现的是“不会有男孩子像他这样对我这么好“、”不会遇到另一个这么好的男朋友“诸如此类，怎么读怎么怪<br>
因为我不会有下一个男孩子啦，也不需要再遇见其他人诚诚最后一位，唯一的一位男嘉宾～嘿嘿</p>
<p>好久没写小作文了～年前太忙了而且精力有些不足。可是今天晚上坐在工位前面，很想诚诚老师，眼泪有些打转想这么可爱坚定认真的男孩子被我抓住了诶，很爱很爱我，哎呀，一定是我太优秀太有魅力了诚诚寻着我的光来了（哈哈哈哈哈）<br>
以上纯属搞笑，重要的是 想记录一下这几天的小事～</p>`,r:{minutes:2.8,words:841},y:"a",t:"如果爱情有温度，此刻就是最适宜的！"},["/posts/沐沐/如果爱情有温度此刻就是最适宜的.html","/posts/沐沐/如果爱情有温度此刻就是最适宜的.md",":md"]],["v-382b43ec","/posts/%E6%B2%90%E6%B2%90/%E5%AD%9F%E5%87%A1%E6%98%8E%E5%B8%A6%E6%9D%A5%E7%9A%84%E5%BF%AB%E4%B9%90%E6%8C%81%E7%BB%AD%E4%B8%80%E6%95%B4%E5%A4%A9.html",{d:1739615298e3,e:`<h1> 孟凡明带来的快乐～持续一整天</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>超级喜欢小明！终于见面啦～<br>
现场超好，唱了我超爱的不胜防！！<br>
喊了一声好听吸引了小明的注意力<br>
于是签名的时候也签了不胜防～<br>
他夸了我的美甲好看c超开心！！</p>
<p>排队+现场站了超久，也没吃晚饭都还好<br>
#live #孟凡明 #音乐 #周末 #快乐</p>
`,r:{minutes:.45,words:134},y:"a",t:"孟凡明带来的快乐～持续一整天"},["/posts/沐沐/孟凡明带来的快乐持续一整天.html","/posts/沐沐/孟凡明带来的快乐持续一整天.md",":md"]],["v-3d6634f3","/posts/%E6%B2%90%E6%B2%90/%E5%AE%83%E7%9C%9F%E7%9A%84%E5%A4%AA%E4%BC%9A%E4%BA%86%E5%A5%BD%E5%8F%AF%E7%88%B1.html",{d:1737800654e3,e:`<h1> 它真的太会了！好可爱</h1>
<p><br>
<br>
<br>
</p>
<p>远远看还以为是一只小猫<br>
结果是一只猫包，做得可真好啊～</p>
`,r:{minutes:.18,words:53},y:"a",t:"它真的太会了！好可爱"},["/posts/沐沐/它真的太会了好可爱.html","/posts/沐沐/它真的太会了好可爱.md",":md"]],["v-9c1c004a","/posts/%E6%B2%90%E6%B2%90/%E5%B0%81%E7%A5%9E%E7%AC%AC%E4%B8%80%E9%83%A8%E7%9C%9F%E7%9A%84%E5%A5%BD%E7%9C%8B%E7%BB%99%E6%88%91%E5%86%B2.html",{d:1739615298e3,e:`<h1> 封神第一部真的好看！给我冲</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>#封神 #封神榜第一部 #于适 #陈牧驰<br>
真的很不错呜呜呜，快去看家人们<br>
我想看第二部，一直坐到最后看彩蛋<br>
两首片尾曲都听完了，忍着不上厕所<br>
我泪点好低看得哭唧唧 旁边小姐姐<br>
她时不时回头盯着我看好尴尬<br>
姬发殷郊帅晕我了，质子团我直接嘶溜<br>
现在到处安利人去看，给身边朋友发展到<br>
“你快去看，我给你买票”给我冲<br>
看完后劲好大，我满脑子回味跟人讨论<br>
很多老戏骨，四侯之死那里我泪奔了妈妈呀<br>
伯邑考和姬发，姬发和父亲牢里，感动的！<br>
这个封神从姬发角度去写，更细腻也很独特<br>
特效什么的做得很好，人物性格很饱满<br>
这些小鲜肉真的很棒啊，未来可期</p>`,r:{minutes:.93,words:280},y:"a",t:"封神第一部真的好看！给我冲"},["/posts/沐沐/封神第一部真的好看给我冲.html","/posts/沐沐/封神第一部真的好看给我冲.md",":md"]],["v-6f8bec3a","/posts/%E6%B2%90%E6%B2%90/%E5%B0%8F%E5%8D%A2%E7%9C%9F%E5%B8%85%E7%BB%88%E4%BA%8E%E5%8F%AF%E4%BB%A5%E7%BB%A7%E7%BB%AD%E8%BF%BD%E5%94%90%E8%AF%A12.html",{d:1737800654e3,e:`<h1> 小卢真帅！！！终于可以继续追唐诡2～</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>之前唐诡2追到《仵作之死》就没看了～狂赚我眼泪<br>
今天追到了《通天犀》，有点普通，另外我居然没发现姜威的演员是李汶翰 第三个案子的打戏超级帅气<br>
小卢这集出来真的帅炸了，第一次听到bgm挥枪的时候一身浩然正气。这段也就看了四遍吧～<br>
不过我觉得从风摩店到千重渡到通天犀，推理的过程都变弱了，虽然诡谲但是每个人的身份都自曝而且太好猜了（卷宗居然能记载到被救走到山里，被姓宋的猎户收养，妥妥就猜到是谁了）且看后面，看帖子说后面的好看！</p>
<p>我每次看剧看电影喜欢1.5倍速，实在是感觉说话慢了而且太长了被我室友吐槽说太快了，还说我喜欢快进以后不能跟我一起看了哈哈哈……可是不好看的地方真的忍不住跳，当然好看的地方我能平速看三四遍唐诡3快来！<br>
#唐朝诡事录之西行 #唐诡2 #卢凌风</p>`,r:{minutes:1.14,words:342},y:"a",t:"小卢真帅！！！终于可以继续追唐诡2～"},["/posts/沐沐/小卢真帅终于可以继续追唐诡2.html","/posts/沐沐/小卢真帅终于可以继续追唐诡2.md",":md"]],["v-5607e1b6","/posts/%E6%B2%90%E6%B2%90/%E5%B0%8F%E6%80%BB%E7%BB%93%E5%B0%B1%E6%98%AF%E5%A4%AA%E5%BF%AB%E4%B9%90%E4%BA%86.html",{d:1737800654e3,e:`<h1> 小总结就是太快乐了</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>今天一举报一个成功，什么牛马都出来了<br>
巅峰赛故意选同路英雄？？？厉害👍<br>
两把让中路结果辅助mvp玩啥呢<br>
拿个铠玩辅助还不出辅助装还在装<br>
玩个夏洛特拼命去对面野区送<br>
搞个牛魔打出3.7评分看呆了<br>
要么射手菜要么打野菜，对抗路0/3开局<br>
我双杀开局的也被队友送没了震惊了<br>
2023.11.17 我记住你了！！！小王我做梦都骂你！<br>
#王者荣耀 #巅峰赛 #王者荣耀奇葩队友 #王昭君 #王者荣耀皮肤</p>`,r:{minutes:.69,words:206},y:"a",t:"小总结就是太快乐了"},["/posts/沐沐/小总结就是太快乐了.html","/posts/沐沐/小总结就是太快乐了.md",":md"]],["v-e8eb45da","/posts/%E6%B2%90%E6%B2%90/%E5%B0%8F%E7%BA%A2%E4%B9%A6%E7%BB%99%E6%88%91%E5%8F%91%E5%A5%96%E7%8A%B6%E5%95%A6.html",{d:1737800654e3,e:`<h1> 小红书给我发奖状啦！</h1>
<p><br>
<br>
</p>
<p>#新春友得聊 #小红书聊天状态<br>
笑死 天下第一好@求索之路</p>
`,r:{minutes:.16,words:48},y:"a",t:"小红书给我发奖状啦！"},["/posts/沐沐/小红书给我发奖状啦.html","/posts/沐沐/小红书给我发奖状啦.md",":md"]],["v-7d26b93f","/posts/%E6%B2%90%E6%B2%90/%E5%B1%B1%E5%A7%86%E6%96%B0%E5%93%81%E7%89%9B%E8%82%89%E9%A6%85%E9%A5%BC%E5%B9%B2.html",{d:1739615298e3,e:`<h1> 山姆新品牛肉馅饼干</h1>
<p><br>
<br>
<br>
</p>
<p>去逛山姆试吃了一下被安利的<br>
试吃确实很惊艳，但是买回来以后，<br>
多吃两口感觉就还好……没那么好吃～<br>
黑松露火腿是被安利的，苏打饼干我一般<br>
但是感觉超市买海盐苏打的最多，<br>
个人爱好黑糖薄脆和poppies！之前爱芝士夹心，<br>
话说Poppies焦糖饼干我还是在出差的时候，<br>
开会过程中对方发充饥小零食被安利的<br>
当时还有薯脆薄饼干，个人感觉一般…<br>
#山姆 #山姆饼干 #山姆黑松露火腿苏打饼干 #山姆牛肉馅酥脆饼干 #山姆黑金芝士薄脆饼干 #山姆美食</p>`,r:{minutes:.69,words:206},y:"a",t:"山姆新品牛肉馅饼干"},["/posts/沐沐/山姆新品牛肉馅饼干.html","/posts/沐沐/山姆新品牛肉馅饼干.md",":md"]],["v-4ca4fa0a","/posts/%E6%B2%90%E6%B2%90/%E5%B8%8C%E6%9C%9B%E5%9C%A8%E9%A6%99%E6%B8%AF%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A5%BD%E5%91%80.html",{d:1737800654e3,e:`<h1> 希望在香港越来越好呀</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
`,r:{minutes:.22,words:65},y:"a",t:"希望在香港越来越好呀"},["/posts/沐沐/希望在香港越来越好呀.html","/posts/沐沐/希望在香港越来越好呀.md",":md"]],["v-725aaab5","/posts/%E6%B2%90%E6%B2%90/%E5%B9%B8%E7%A6%8F%E7%9A%84%E4%B8%80%E5%A4%A9%E5%BC%80%E5%90%AF%20%E6%9B%B4%E5%8A%A0%E5%8A%AA%E5%8A%9B%E7%88%B1%E8%87%AA%E5%B7%B1.html",{d:1737800654e3,e:`<h1> 幸福的一天开启 ～更加努力爱自己</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>最近一周虽然睡得比较晚，但是很舒服！<br>
约莫睡了五个多小时就起床啦，加班ing～<br>
早上温了一瓶官栈花胶（小嫩胶）滋补一下<br>
给对象妈妈也买了一盒（不过是花胶粥花胶羹）<br>
饱腹感和口味更好，花胶也更大块<br>
我妈：？？？我的呢，你小子哈哈哈哈哈</p>
<p>公司发了对联和窗花，起床在房间窗户上贴了个福！<br>
今天深圳的天气也超级好，阳光很好温度很适宜<br>
衣服也洗完晾在阳台，鞋子也放出去吹吹风哈哈～<br>
每天都超级快乐超级幸福（kuku给男朋友发消息骚扰他）<br>
#记录美好#健康养生 #打工人日常</p>`,r:{minutes:.77,words:230},y:"a",t:"幸福的一天开启 ～更加努力爱自己"},["/posts/沐沐/幸福的一天开启 更加努力爱自己.html","/posts/沐沐/幸福的一天开启 更加努力爱自己.md",":md"]],["v-44c66a70","/posts/%E6%B2%90%E6%B2%90/%E5%B9%BF%E4%B8%9C%E7%95%AA%E7%A6%BA%E5%8C%BA%E6%B1%82%E7%A7%9F%E6%88%BF%E5%8D%97%E6%9D%91%E4%B8%87%E5%8D%9A%E9%99%84%E8%BF%91.html",{d:1739615298e3,e:`<h1> 广东番禺区求租房！南村万博附近</h1>
<p><br>
<br>
</p>
<p>需要一室一厅那种，一个人住比较方便～<br>
最好靠近奥园集团大厦，走路十五分钟内！<br>
下周需要入住想看看有没有合适的房源～<br>
#广州租房 #奥园#番禺租房 #公寓 #loft #南村万博</p>
`,r:{minutes:.32,words:96},y:"a",t:"广东番禺区求租房！南村万博附近"},["/posts/沐沐/广东番禺区求租房南村万博附近.html","/posts/沐沐/广东番禺区求租房南村万博附近.md",":md"]],["v-2d234042","/posts/%E6%B2%90%E6%B2%90/%E5%B9%BF%E5%B7%9E%E5%91%A8%E6%9C%AB%E7%9C%8B%E5%B1%95%E1%B4%97%E5%B9%BF%E4%B8%9C%E7%9C%81%E5%8D%9A%E7%89%A9%E9%A6%86.html",{d:1739615298e3,e:`<h1> 广州周末看展(⁎⁍̴̛ᴗ⁍̴̛⁎)广东省博物馆</h1>
<p><br>
<br>
</p>
<p>📍Guang Zhou<br>
Weekend 🎐<br>
🏯今日看展 暴走逛吃🎞️</p>
<p>有没有搭子们一起约看展、逛博物馆，分享每周展览消息哇可以一起玩！<br>
#广东看展 #广州看展攻略 #周末去哪 #画展 #艺术展 #博物馆    #美术馆 #看展 #广州新展 #值得一去的博物馆 #广州免费展览 #广州 #广州打卡 #搭子 #看展搭子 #周末搭子 #番禺</p>
`,r:{minutes:.43,words:130},y:"a",t:"广州周末看展(⁎⁍̴̛ᴗ⁍̴̛⁎)广东省博物馆"},["/posts/沐沐/广州周末看展ᴗ广东省博物馆.html","/posts/沐沐/广州周末看展ᴗ广东省博物馆.md",":md"]],["v-7e8c337f","/posts/%E6%B2%90%E6%B2%90/%E5%B9%BF%E6%92%AD%E5%89%A7cv%E6%BC%A0%E7%84%B6%E9%85%8D%E9%9F%B3%E5%B0%8F%E8%8A%B1%E7%B5%AE.html",{d:1737800654e3,e:`<h1> 广播剧—cv漠然配音小花絮</h1>
<p>#声优 #广播剧 漠然的一炉冬火，太可爱啊了！秦三见的文永远都是那么细腻真挚(≧∇≦)配音过程的小花絮！他是真的吃哈哈哈哈</p>
`,r:{minutes:.2,words:60},y:"a",t:"广播剧—cv漠然配音小花絮"},["/posts/沐沐/广播剧cv漠然配音小花絮.html","/posts/沐沐/广播剧cv漠然配音小花絮.md",":md"]],["v-e873d900","/posts/%E6%B2%90%E6%B2%90/%E5%BB%BA%E8%AE%AE%E4%B8%8D%E4%BC%9A%E8%AF%B4%E8%AF%9D%E7%9A%84%E4%BA%BAshut%20up.html",{d:1739615298e3,e:`<h1> 建议不会说话的人shut up</h1>
<p><br>
<br>
</p>
<p>巨讨厌说话阴阳怪气的人<br>
如果不会好好说话 建议闭嘴<br>
拿“怎么开不起玩笑”当借口<br>
真心建议您好好研读说话的艺术<br>
没人有时间有心情跟你玩文字游戏<br>
什么话该说什么话不该说 怎么说<br>
成年人了 别总把自己当小孩子<br>
动不动玻璃心 当自己林黛玉呢</p>
`,r:{minutes:.43,words:128},y:"a",t:"建议不会说话的人shut up"},["/posts/沐沐/建议不会说话的人shut up.html","/posts/沐沐/建议不会说话的人shut up.md",":md"]],["v-482461a3","/posts/%E6%B2%90%E6%B2%90/%E5%BC%80%E5%90%AF%E6%96%B0%E7%9A%84%E4%B8%80%E5%A4%A910%E6%9C%88%E5%BF%AB%E4%B9%90.html",{d:1737800654e3,e:`<h1> 开启新的一天！！！10月快乐～</h1>
<p><br>
<br>
<br>
</p>
<p>正式和小姐妹们入住啦～<br>
早上起来两姐妹都在化妆，<br>
我负责给大家做咖啡和加热早饭</p>
<p>收拾好一起下楼出门上班～深圳红绿灯也太长了，差点没赶上，55才落地，57打上卡哈哈哈😂<br>
#早安新的一天 #早安打卡  #姐妹同居</p>
`,r:{minutes:.38,words:115},y:"a",t:"开启新的一天！！！10月快乐～"},["/posts/沐沐/开启新的一天10月快乐.html","/posts/沐沐/开启新的一天10月快乐.md",":md"]],["v-7b142612","/posts/%E6%B2%90%E6%B2%90/%E5%BC%82%E5%9C%B0%E6%81%8B%E5%BD%93%E7%84%B6%E8%A6%81%E8%AE%B0%E5%BD%95%E5%95%A6%E8%A2%AB%E7%88%B1%E7%9C%9F%E7%9A%84%E5%A5%BD%E5%B9%B8%E7%A6%8F.html",{d:1737800654e3,e:`<h1> 异地恋当然要记录啦！被爱真的好幸福～</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>这篇文章的起因是昨晚有点小情绪但是对象一直很温柔解释，安抚好我再指出我的问题～然后说“这不是吵架哦”（他在投喂我下单搞了一个多小时，暴哭）他真的太好啦，好爱我男朋友</p>
<p>List一下男朋友让我心动的时刻，写到超字为止吧。</p>
<ol>
<li>声音超好听，超级喜欢！心动的第一瞬间；</li>
<li>身高体重长相都很好，不抽烟不酗酒（陪我小酌），不沉迷打游戏；</li>
<li>真诚用心从来不敷衍对待，认真倾听认真回应，deep talk聊四五个小时都会保持好的语调；</li>
<li>每天想办法逗我开心，帮我缓解工作压力提醒我relax；</li>
<li>会记住我的生日和喜好，会给我送礼物点外卖准备各种惊喜（谁说理工男不浪漫）；</li>
<li>即使很忙每天都给我发消息，一个一个仔细回复我的信息不遗漏不跳过，出门/有事会告诉我；</li>
<li>会大大方方表达对我的想念和爱意，每天都会花式夸我（男生说情话很好听）；</li>
<li>见面无论去哪都会想要牵着我的手，拽着我or搂着我；</li>
<li>从不推脱没时间，每次见面都会去机场和高铁站接送我；<br>
10.我说喜欢玫瑰花，会给我买花花，即使旅行途中都会送我；</li>
<li>规划旅行分工合作，我完成我的part他会安排好剩下一切，非常靠谱（旅行没有任何矛盾！）；</li>
<li>去他的城市，会租好车接我带我吃好吃的带我玩，想办法让你体验各种东西；</li>
<li>会在我生病不舒服的时候文字/电话/行动关心我，给我买暖宝宝，等我睡醒点外卖；</li>
<li>wx置顶我，会用代码给我画爱心写我名字（超超超级可爱）；</li>
<li>会在我提到伤心事情的时候给我拥抱，陪我落泪；</li>
<li>无数次坚定的告诉我，他的未来有我想要和我一起建立我们的小家，并且在执行他的计划，很安心；</li>
<li>会等我化完妆出门从来不催，夸我搭配的衣服和妆容好看，会耐心等我拍照and帮我拍照；</li>
<li>尊重我肯定我，支持我的选择；</li>
<li>言出必行，不轻易承诺，但承诺了都会去做到；</li>
<li>自觉和异性保持距离，很大方的告诉朋友“非单身”；</li>
<li>情绪稳定，会让步不冷暴力。不舍得让我生气让我委屈。有嘴！把事情说开好好解决问题；</li>
<li>无数次告诉我有他在呢，无论怎么样都会陪着我，做我的后盾。</li>
</ol>`,r:{minutes:2.65,words:795},y:"a",t:"异地恋当然要记录啦！被爱真的好幸福～"},["/posts/沐沐/异地恋当然要记录啦被爱真的好幸福.html","/posts/沐沐/异地恋当然要记录啦被爱真的好幸福.md",":md"]],["v-5577c31d","/posts/%E6%B2%90%E6%B2%90/%E5%BC%82%E5%9C%B0%E6%81%8B%E7%9A%84%E8%BF%9C%E7%A8%8B%E7%BA%A6%E4%BC%9A_.html",{d:1737800654e3,e:`<h1> 异地恋的远程约会(☆_☆)</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>上海和深圳，1400+公里的距离，<br>
异地恋，我们的爱情也很甜蜜<br>
慵懒的周末，男朋友安排了一个surprise～<br>
前脚两个人刚各自在床上视频电话完，<br>
后脚让我准备出门，吃点好吃饭，我？<br>
给我安排了一顿海鲜自助大餐，他也会去吃自助，<br>
小小的身体弱弱的反抗了一下（完全吃不了多少呀）<br>
但是男朋友想让我快乐开心那就不纠结，去啦！<br>
两个人出发的时候告诉对方～觅食约会开始啦！<br>
—————————————————————————</p>`,r:{minutes:2.51,words:752},y:"a",t:"异地恋的远程约会(☆_☆)"},["/posts/沐沐/异地恋的远程约会_.html","/posts/沐沐/异地恋的远程约会_.md",":md"]],["v-587178f6","/posts/%E6%B2%90%E6%B2%90/%E5%BC%82%E5%9C%B0%E6%81%8B%E8%A7%81%E9%9D%A2%E4%B9%8B%E9%99%AA%E7%94%B7%E6%9C%8B%E5%8F%8B%E8%BF%87%E7%94%9F%E6%97%A5%E4%B8%80.html",{d:1737800654e3,e:`<h1> 异地恋见面之陪男朋友过生日～【一】</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>2024年的尾巴，飞去上海陪男朋友一起过生日<br>
10.5-12.19，两个没见到我宝啦，异地恋好苦又好甜！<br>
见不到面的时候，会大大方方说“想你”“爱你”，<br>
见面后的每时每刻都想黏在一起，珍惜来之不易的假期！<br>
我觉得我们两个每次旅行都非常幸福的原因，有几点做得非常好！<br>
1.见面那一刻起，远离手机远离工作，非紧急事情不处理，给到彼此最极致的体验和陪伴。<br>
2.即便对方单独想玩什么，也会陪伴着一起参互动【比如陪我对象晚上一起打炉石，我在旁边跟他讨论听他分析，从不看手机】。<br>
3.小问题及时处理沟通相互理解，不要抱怨不要生气【一些计划之外的小意外都可以接受，重要的是两个人一起】。<br>
4.多聊天deeptalk，对象开车的时候我都会跟他互动讲话，不浪费路途的时间，每天晚上睡前早上睡醒，吃饭的时候我们都会沟通和探讨一些事情【情侣最怕的就是相顾无言】。<br>
5.提供充足的情绪价值，一方精心准备好大致行程，另一方无条件信任跟着走，细节可以一起填充【不要一直怀疑，各种问问题，会很扫兴】。</p>`,r:{minutes:2.78,words:833},y:"a",t:"异地恋见面之陪男朋友过生日～【一】"},["/posts/沐沐/异地恋见面之陪男朋友过生日一.html","/posts/沐沐/异地恋见面之陪男朋友过生日一.md",":md"]],["v-39ba3dc8","/posts/%E6%B2%90%E6%B2%90/%E5%BC%82%E5%9C%B0%E6%81%8B%E8%A7%81%E9%9D%A2%E4%B9%8B%E9%99%AA%E7%94%B7%E6%9C%8B%E5%8F%8B%E8%BF%87%E7%94%9F%E6%97%A5%E4%B8%89.html",{d:1737800654e3,e:`<h1> 异地恋见面之陪男朋友过生日～【三】</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>接【二】<br>
出景区的时候绕远了，男朋友带我走了个偏僻小路，黑乎乎的有点害怕问了2次他真的是这么走的吗？以后我要更加多多信任他，不要再确认了！晚上呼啦啦又开去淀山湖附近的彩虹桥【这个狗子还说要在日落的时候在那里对我许下一生一世的诺言，害我期待了一番，结果两个人吃饭没赶上日落】</p>
<p>22号最后一天了，早上开车去佘山公园转一圈，说好只是转转，被这个男人拉着爬了一小段山，今天腿还是抖的！终于吃上了我的10元肉肠和7元两根淀粉肠，我们俩还针对山脚下两个卖肠的摊子进行了一番研究～快到停车场的时候，两只小狗嗅着烤肠味道看着我们，本来是不打算喂的，那只大黄一直跟着我们，很坚持！男朋友“被感动”咬两块喂了狗狗～</p>`,r:{minutes:3.11,words:932},y:"a",t:"异地恋见面之陪男朋友过生日～【三】"},["/posts/沐沐/异地恋见面之陪男朋友过生日三.html","/posts/沐沐/异地恋见面之陪男朋友过生日三.md",":md"]],["v-2a9b3e5b","/posts/%E6%B2%90%E6%B2%90/%E5%BC%82%E5%9C%B0%E6%81%8B%E8%A7%81%E9%9D%A2%E4%B9%8B%E9%99%AA%E7%94%B7%E6%9C%8B%E5%8F%8B%E8%BF%87%E7%94%9F%E6%97%A5%E4%BA%8C.html",{d:1737800654e3,e:`<h1> 异地恋见面之陪男朋友过生日～【二】</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>接【一】</p>
<p>晚上对象选了一家奢侈的晚饭-高丽饭店，笑死，朝鲜族，菜品一般但是价格真高，表演都是小姐姐，诚诚老师破费了哈～服务员有问有没有过生日的，想着对象昨天生日把他报上去，最后果然是上台集体庆生，我在下面疯狂拍照拍视频，哈哈哈可可爱爱！</p>
<p>吃完饭一起散步回家，从银杏树下走过，两个人拉手手抱抱，拌嘴打闹，风很大心很暖，因为身边是他，微小的幸福也变得格外美好。那一刻幸福都具象化啦，真的想就这样和身边这个人一起走很久很远</p>`,r:{minutes:2.92,words:875},y:"a",t:"异地恋见面之陪男朋友过生日～【二】"},["/posts/沐沐/异地恋见面之陪男朋友过生日二.html","/posts/沐沐/异地恋见面之陪男朋友过生日二.md",":md"]],["v-c1c61150","/posts/%E6%B2%90%E6%B2%90/%E5%BC%9F%E5%BC%9F%E6%B5%85%E6%B5%85%E5%B8%A6%E6%88%91%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%BF%9E%E8%B5%A2%E5%95%A6.html",{d:1737800654e3,e:`<h1> 弟弟浅浅带我王者荣耀连赢啦</h1>
<p><br>
<br>
<br>
</p>
<p>说实话按照正常情况q区一年多不登陆<br>
上去就是黄金最低段位完全不想玩<br>
还好弟弟开黄金小号陪着我一路打<br>
黄金-铂金-钻石，又换了个星耀号来<br>
三天浅浅赢了28颗星星芜湖<br>
紧巴巴午休晚休还有晚上下班一个多小时<br>
我的目标是这个月星耀下个月王者<br>
弟弟说这个月就可以有点怕拖后腿<br>
有个人陪着一路上分真的很快乐了～<br>
#王者荣耀 #王者荣耀上分 #王者</p>
`,r:{minutes:.6,words:181},y:"a",t:"弟弟浅浅带我王者荣耀连赢啦"},["/posts/沐沐/弟弟浅浅带我王者荣耀连赢啦.html","/posts/沐沐/弟弟浅浅带我王者荣耀连赢啦.md",":md"]],["v-1160b200","/posts/%E6%B2%90%E6%B2%90/%E5%BC%A0%E5%87%AF%E6%88%91%E5%93%AD%E6%AD%BBTTG%E6%98%8E%E5%B9%B4%E8%A7%81.html",{d:1739615298e3,e:`<h1> 张凯我哭死！TTG明年见</h1>
<p><br>
<br>
<br>
</p>
<p>非粉看了也落泪，这四天一直在关注TTG<br>
在梦一个水鬼出山，以一敌三的你们～<br>
前几天真的丢太多分了我好难受……<br>
凯凯为了你们为了赢什么都愿意做<br>
他真的很善良很心软，下次站着握手！<br>
【逆子们你们真的该给张凯磕一个】</p>
`,r:{minutes:.39,words:118},y:"a",t:"张凯我哭死！TTG明年见"},["/posts/沐沐/张凯我哭死TTG明年见.html","/posts/沐沐/张凯我哭死TTG明年见.md",":md"]],["v-2922241c","/posts/%E6%B2%90%E6%B2%90/%E5%BE%97%E4%BA%86%E6%96%B0%E5%86%A0%E8%BF%9B%E5%85%A5%E7%BE%8A%E5%9C%88%E7%9A%84%E7%AC%AC%E4%B8%80%E5%A4%A9%E6%84%9F%E5%8F%97.html",{d:1739615298e3,e:`<h1> 得了新冠，进入羊圈的第一天感受</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>本来以为自己是天选之人可以进入决赛圈，结果还是倒下来了阳了！宝娟，我的嗓子～浅浅记录一下第一天的感受！<br>
办公室部门11个人，阳了8个，还有一个也症状了，最后谁将拔得头筹？我的毒株真的很强反应很大，特别难受，希望大家都遇到好毒株！#新冠 #我的新冠康复日记 #阳了 #疫情 #疫情下的生活</p>
`,r:{minutes:.56,words:169},y:"a",t:"得了新冠，进入羊圈的第一天感受"},["/posts/沐沐/得了新冠进入羊圈的第一天感受.html","/posts/沐沐/得了新冠进入羊圈的第一天感受.md",":md"]],["v-cf57e28a","/posts/%E6%B2%90%E6%B2%90/%E5%BF%83%E5%BF%83%E5%BF%B5%E5%BF%B5%E7%9A%84apm%E5%85%AD%E8%8A%92%E6%98%9F%E9%A1%B9%E9%93%BE%E5%92%8C%E6%89%8B%E9%93%BE.html",{d:1739615298e3,e:`<h1> 心心念念的apm六芒星项链和手链～</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>大头送的礼物！是APM六芒星<br>
笑死 第一次下单是耳钉<br>
大哥 我没有耳洞在干啥<br>
真的很喜欢啦 一直都是潘多拉换牌子<br>
我好喜欢各种首饰哈哈哈<br>
#异地恋 #apm #六芒星 #情侣礼物</p>
`,r:{minutes:.38,words:113},y:"a",t:"心心念念的apm六芒星项链和手链～"},["/posts/沐沐/心心念念的apm六芒星项链和手链.html","/posts/沐沐/心心念念的apm六芒星项链和手链.md",":md"]],["v-57c30dab","/posts/%E6%B2%90%E6%B2%90/%E5%BF%83%E7%96%BC%E6%88%91%E4%BB%AC%E8%80%B6%E8%80%B6%E7%BD%97%E6%80%9D%E6%BA%90%E6%98%AF%E6%9C%80%E6%A3%92.html",{d:1739615298e3,e:`<h1> 心疼我们耶耶！罗思源是最棒</h1>
<p><br>
<br>
</p>
<p>花海真的要碎了！<br>
谁来抱抱我们小狗<br>
花楼你没心<br>
为什么输了又是罗思源去采访<br>
还替你解释逆天的bp阵容<br>
本来还开开心心说进A组<br>
佛山drg也在A组，就能去现场<br>
结果2:0开局被打成2:3<br>
真的好离谱，花海他真的很想赢</p>
<p>#estar花海 #estar</p>
`,r:{minutes:.41,words:122},y:"a",t:"心疼我们耶耶！罗思源是最棒"},["/posts/沐沐/心疼我们耶耶罗思源是最棒.html","/posts/沐沐/心疼我们耶耶罗思源是最棒.md",":md"]],["v-33271e12","/posts/%E6%B2%90%E6%B2%90/%E5%BF%97%E6%80%AA%E7%BA%AA%E5%BD%95%E7%89%87%E5%A6%96%E6%80%AA%E4%BC%A0%E5%AE%89%E5%88%A9.html",{d:1739615298e3,e:`<h1> 志怪纪录片《妖怪传》安利</h1>
<p><br>
<br>
<br>
</p>
<p>家人们有在看《妖怪传》的吗🙋<br>
这种志怪纪录片我看得少，被吸引了<br>
叙述的方式很棒通俗易懂了解妖怪的故事<br>
不同朝代文人笔下妖怪的形象及对其态度<br>
配有相关文字和图片记载及有关出土文物<br>
以《山海经》为载体，配有现有专家解读<br>
动画制作精美，画质优良，配音专业<br>
总之，强烈安利推荐无脑冲真的好看<br>
缺点就是妖怪传一集十几分钟太短啦～<br>
#纪录片 #妖怪传 #纪录片推荐 #学习</p>
`,r:{minutes:.61,words:183},y:"a",t:"志怪纪录片《妖怪传》安利"},["/posts/沐沐/志怪纪录片妖怪传安利.html","/posts/沐沐/志怪纪录片妖怪传安利.md",":md"]],["v-403c2dec","/posts/%E6%B2%90%E6%B2%90/%E6%80%8E%E4%B9%88%E4%B8%80%E5%96%9D%E5%92%96%E5%95%A1%E5%B0%B1%E5%AE%B9%E6%98%93%E7%AA%9C%E7%A8%80.html",{d:1737800654e3,e:`<h1> 怎么一喝咖啡就容易窜稀！</h1>
<p><br>
<br>
</p>
<p>最近真的有点容易拉肚子<br>
感觉稍微吃点不健康或者不消化的就容易窜，<br>
昨天喝了一杯咖啡窜了2次，以前不是诶！<br>
前两天感冒受凉也窜屁屁疼～<br>
不知道是不是年纪大了，吃冷偶尔也会，<br>
所以一年四季出门饮料都是热，夏天去冰，<br>
也很少很少吃冰淇淋，不知道是不是年纪大了<br>
#肠胃 #健康养生 #咖啡 #记录生活</p>
`,r:{minutes:.5,words:149},y:"a",t:"怎么一喝咖啡就容易窜稀！"},["/posts/沐沐/怎么一喝咖啡就容易窜稀.html","/posts/沐沐/怎么一喝咖啡就容易窜稀.md",":md"]],["v-3d15b942","/posts/%E6%B2%90%E6%B2%90/%E6%83%85%E7%BB%AA%E7%A8%B3%E5%AE%9A%E7%9A%84%E7%94%B7%E5%8F%8B%E7%9C%9F%E7%9A%84%E5%BE%88%E9%87%8D%E8%A6%81%E5%AE%B6%E4%BA%BA%E4%BB%AC.html",{d:1739615298e3,e:`<h1> 情绪稳定的男友真的很重要！！！家人们！</h1>
<p><br>
<br>
</p>
<p>半夜起来抓蚊子睡不着了，<br>
顺便记录一下今天发生的事情。<br>
我室友，是一个非常非常nice的小姐姐，<br>
但是她的男朋友，性格比较内而且有点自大。<br>
今天我回来的比较早看见小姐姐在沙发上，<br>
她男朋友来了在做饭，因为明天是周末。<br>
我就回房间吃蛋糕🍰顺便处理工作的事情。<br>
没过多久，两个人就吵起来了男生很大声，<br>
甚至摔东西，隐约还动手了，大概是推人！<br>
没敢出去，听到小姐姐报警了，两个人又吵了一会。<br>
室友说：请你10点之前离开我家，检查一下心理医生<br>
男生说：我本来马上要走，你心理才有问题<br>
中间我很清楚记得男生说了一句：<br>
“吵一架不行就打一架”？他怎么说的出口！<br>
安静下来又跟没事人一样吹口哨吃饭，好淡定！<br>
具体吵架的内容我记不清了，本身也没出房间。<br>
没过一会警察来了，男生就开始吐槽小姐姐<br>
说什么男女朋友，小姐姐说他，睡觉吃饭说他，<br>
自己忍了一天了吧啦吧啦之类的，最讨厌什么什么<br>
小姐姐说 你怎么不讲一下打人的过程等等，<br>
然后就是警察在调解，我也记不清惹<br>
后面我去卫生间出来了一下，男生在收拾东西…<br>
没敢和室友说，也没问，真的太尴尬了😅<br>
小姐姐尊嘟很好，我觉得他男朋友配不上他！<br>
有一次我们两个逛山姆回来，下着雨开电驴的，<br>
男生在我们到家以后来的，说小姐姐不接电话不接他，<br>
自己冒着雨从地铁站回来，啊这……<br>
小姐姐关心他拎了吃的，很凶，“我吃什么不要你管”<br>
救命，我脚趾抠地立马回房间，实在是看不下去。<br>
虽然我室友也是有点啰嗦的那种，但是为他好诶～</p>`,r:{minutes:2.21,words:663},y:"a",t:"情绪稳定的男友真的很重要！！！家人们！"},["/posts/沐沐/情绪稳定的男友真的很重要家人们.html","/posts/沐沐/情绪稳定的男友真的很重要家人们.md",":md"]],["v-34cb1ca4","/posts/%E6%B2%90%E6%B2%90/%E6%84%9F%E6%83%85%E7%9A%84%E6%B6%88%E5%A4%B1%E4%BB%8E%E6%B2%A1%E6%9C%89%E5%88%86%E4%BA%AB%E6%AC%B2%E5%BC%80%E5%A7%8B.html",{d:1739615298e3,e:`<h1> 感情的消失从没有分享欲开始</h1>
<p><br>
<br>
<br>
</p>
<p>得不到积极回应，好像自己是个小丑，热情到了嘴边突然就散了…… #说一个分享欲消失的瞬间</p>
`,r:{minutes:.23,words:70},y:"a",t:"感情的消失从没有分享欲开始"},["/posts/沐沐/感情的消失从没有分享欲开始.html","/posts/沐沐/感情的消失从没有分享欲开始.md",":md"]],["v-546a013c","/posts/%E6%B2%90%E6%B2%90/%E6%84%9F%E8%A7%89%E5%9C%88%E5%AD%90%E7%9C%9F%E7%9A%84%E5%BE%88%E5%8F%AF%E6%80%95%E4%B8%80%E8%AF%BA.html",{d:1739615298e3,e:`<h1> 感觉圈子真的很可怕😱一诺！</h1>
<p><br>
<br>
<br>
</p>
<p>我朋友说六人定律！！！真的离谱～<br>
我研究生室友的小姨认识朱一龙的亲戚<br>
我大学同学的亲戚和韩庚妈妈认识<br>
昨天我朋友又掏出朋友圈的一诺舅舅<br>
我的妈呀，下次会不会给我出现一个花海的关系<br>
#王者荣耀 #estar花海 #成都ag超玩会一诺 #徐必成 #王者荣耀世冠总决赛</p>
`,r:{minutes:.46,words:138},y:"a",t:"感觉圈子真的很可怕😱一诺！"},["/posts/沐沐/感觉圈子真的很可怕一诺.html","/posts/沐沐/感觉圈子真的很可怕一诺.md",":md"]],["v-66660248","/posts/%E6%B2%90%E6%B2%90/%E6%88%91%E4%B8%80%E7%9B%B4%E9%83%BD%E8%A2%AB%E5%A5%BD%E5%A5%BD%E7%88%B1%E7%9D%80%E7%88%B1%E6%88%91%E7%9A%84%E7%88%B6%E6%AF%8D.html",{d:1737800654e3,e:`<h1> 我一直都被好好爱着～爱我的父母！</h1>
<p><br>
<br>
</p>
<p>#想记录下此刻 #逛超市 #生活碎片 #原生家庭<br>
去超市补给路过熟食柜想着买个烤鸡腿，<br>
前面一男一女（兄妹or情侣？）在挑选，<br>
两人一直在纠结买什么，我就在后面排队，<br>
空手没有购物车没有购物篮没买任何东西，<br>
纠结七八分钟最后只拿了一只炸鸡腿（5元），<br>
有些诧异，那一刻突然就觉得生活挺不容易，<br>
基本日常吃喝也不是谁都可以随随便便消费。<br>
看家长带小孩买零食，一包薯片or一袋饼干，<br>
想到以前每次我爸带我去超市都是满满当当<br>
十几年前去都是消费200起大部分买零食酸奶，<br>
别人送的永辉超市乐天玛特金鹰大润发的卡，<br>
我家也都是给卡我去买零食想吃什么就买，那个时候网购也没这么普及，不看价格就买买买，真的很幸福！一直都有被好好爱着～现在也是！</p>`,r:{minutes:.99,words:298},y:"a",t:"我一直都被好好爱着～爱我的父母！"},["/posts/沐沐/我一直都被好好爱着爱我的父母.html","/posts/沐沐/我一直都被好好爱着爱我的父母.md",":md"]],["v-e2c137d4","/posts/%E6%B2%90%E6%B2%90/%E6%88%91%E4%BB%AC%E4%B8%80%E8%B5%B7%E7%83%AD%E7%83%88.html",{d:1739615298e3,e:`<h1> 我们，一起热烈。</h1>
<p><br>
<br>
</p>
`,r:{minutes:.07,words:21},y:"a",t:"我们，一起热烈。"},["/posts/沐沐/我们一起热烈.html","/posts/沐沐/我们一起热烈.md",":md"]],["v-1856cc8d","/posts/%E6%B2%90%E6%B2%90/%E6%88%91%E4%BB%AC%E5%9C%A8%E5%B0%8F%E7%BA%A2%E4%B9%A6%E8%A7%A3%E9%94%81%E6%96%B0%E7%9A%84%E8%81%8A%E5%A4%A9%E6%A0%87%E8%AF%86%E5%95%A6.html",{d:1739615298e3,e:`<h1> 我们在小红书解锁新的聊天标识啦😊！</h1>
<p><br>
<br>
</p>
<p>我和 @郭德纲的腿毛 累计互发消息达到100天啦，获得了新的聊天标识【天下第一好】<br>
#小红书新功能 #小红书聊天标识</p>
`,r:{minutes:.26,words:77},y:"a",t:"我们在小红书解锁新的聊天标识啦😊！"},["/posts/沐沐/我们在小红书解锁新的聊天标识啦.html","/posts/沐沐/我们在小红书解锁新的聊天标识啦.md",":md"]],["v-6eb5a85d","/posts/%E6%B2%90%E6%B2%90/%E6%88%91%E5%9B%9B%E5%B9%B4%E5%89%8D%E5%96%9C%E6%AC%A2%E7%9A%84%E8%B6%85%E7%B3%8A%E5%B8%95%E5%B8%95%E7%BB%88%E4%BA%8E%E8%A6%81%E7%81%AB%E4%BA%86%E5%90%97.html",{d:1737800654e3,e:`<h1> 我四年前喜欢的超糊帕帕终于要火了吗！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>四年前逐月之月2出来好多人排斥不看<br>
但是我被四哥吸引了，就去看了！！！<br>
然后喜欢上了帕帕，还加了pavel的站子<br>
当时在香港上学就很方便做搬运和翻译文案～<br>
天呐‼️我就知道宝藏男孩不会被埋没<br>
泰剧极速恋人我来了，但是我的宝你怎么被压了<br>
人真超nice，都是用英文发会点赞回复粉丝～<br>
啊啊啊，谁会不为他心动💓聪明帅气<br>
都给我冲，PavelPhoom给我火！极速恋人爆！<br>
#泰剧极速恋人 #极速恋人 #pavelphoom #泰兰德的夏天永不停歇 #泰剧推荐 #泰剧</p>`,r:{minutes:.76,words:227},y:"a",t:"我四年前喜欢的超糊帕帕终于要火了吗！"},["/posts/沐沐/我四年前喜欢的超糊帕帕终于要火了吗.html","/posts/沐沐/我四年前喜欢的超糊帕帕终于要火了吗.md",":md"]],["v-3d29dfdc","/posts/%E6%B2%90%E6%B2%90/%E6%88%91%E5%BE%88%E9%9C%87%E6%83%8A%E4%B8%BA%E4%BB%80%E4%B9%88%E9%A6%96%E9%A1%B5%E6%8E%A8%E8%8D%90%E5%85%A8%E6%98%AF%E7%94%B7%E7%94%9F.html",{d:1739615298e3,e:`<h1> 我很震惊为什么首页推荐全是男生</h1>
<p><br>
<br>
</p>
<p>我大为震惊且不理解！！！</p>
<p>平时我都是刷的美食旅游萌宠<br>
偶尔刷一刷王者影视还有明星<br>
为什么今天首页蹦出来的全是男人？？？<br>
🍠怪会的，手控党给我还分配手好看的<br>
是不是最近和姐妹提男高or大狗狗？？<br>
这大数据也太离谱，虽说单身看看帅哥也无妨但是十个里面八个是帅哥or找对象就过分了哦</p>
`,r:{minutes:.5,words:149},y:"a",t:"我很震惊为什么首页推荐全是男生"},["/posts/沐沐/我很震惊为什么首页推荐全是男生.html","/posts/沐沐/我很震惊为什么首页推荐全是男生.md",":md"]],["v-05f8870d","/posts/%E6%B2%90%E6%B2%90/%E6%88%91%E7%9A%84%E6%90%9C%E7%B4%A2%E8%AE%B0%E5%BD%95%E6%98%BE%E7%A4%BA%E6%88%91%E6%9C%89%E9%9C%B8%E6%80%BB%E6%B0%94%E8%B4%A8.html",{d:1739615298e3,e:`<h1> 我的搜索记录显示我有霸总气质😎</h1>
<p><br>
<br>
</p>
<p>我在小红书的搜索人格居然是entj<br>
原来我是霸总？<br>
有和我一样的朋友吗？<br>
（搜索“年度搜索报告”就可以看到你的搜索人格了！）<br>
#我的小红书搜索报告</p>
`,r:{minutes:.29,words:87},y:"a",t:"我的搜索记录显示我有霸总气质😎"},["/posts/沐沐/我的搜索记录显示我有霸总气质.html","/posts/沐沐/我的搜索记录显示我有霸总气质.md",":md"]],["v-214e4128","/posts/%E6%B2%90%E6%B2%90/%E6%88%91%E7%9C%9F%E7%9A%84%E5%90%90%E4%BA%86%E7%B4%A0%E8%B4%A8%E6%9E%81%E5%B7%AE.html",{d:1739615298e3,e:`<h1> 我真的吐了，素质极差……</h1>
<p><br>
<br>
</p>
<p>为什么有人上高铁拖鞋还不穿袜子<br>
大姐你穿的漂漂亮亮的<br>
小孩和老公在前排，搁这脱鞋～<br>
高铁不是你家，公共场合能讲文明？<br>
#高铁 #高铁脱鞋 #上海虹桥 #高铁不文明行为<br>
好家伙今天被我碰上了，不辛苦命苦！</p>
`,r:{minutes:.36,words:107},y:"a",t:"我真的吐了，素质极差……"},["/posts/沐沐/我真的吐了素质极差.html","/posts/沐沐/我真的吐了素质极差.md",":md"]],["v-13be1e3e","/posts/%E6%B2%90%E6%B2%90/%E6%88%91%E7%9C%9F%E7%9A%84%E7%94%9F%E6%B0%94%E4%BA%86%E4%B9%B0%E4%BA%86%E6%96%B0%E7%9A%AE%E8%BF%98%E5%9C%A8%E8%BE%93.html",{d:1739615298e3,e:`<h1> 我真的生气了！买了新皮还在输！</h1>
<p><br>
<br>
<br>
</p>
<p>这游戏到底谁在玩<br>
巅峰赛辅助吃我线结果她2级我1级<br>
辅助帮对抗路不扛伤害，打野一直死<br>
射手玩个评分最低，不知道在搞啥<br>
我只求正常队友<br>
#王者荣耀 #王昭君 #王者荣耀联动美少女战士</p>
`,r:{minutes:.37,words:111},y:"a",t:"我真的生气了！买了新皮还在输！"},["/posts/沐沐/我真的生气了买了新皮还在输.html","/posts/沐沐/我真的生气了买了新皮还在输.md",":md"]],["v-bec1e8b6","/posts/%E6%B2%90%E6%B2%90/%E6%88%91%E9%82%A3%E8%BF%9B%E6%AD%A5%E5%BE%88%E5%A4%A7%E7%9A%84%E4%B8%BB%E9%98%9F%E6%8B%9C%E6%89%98%E7%BB%A7%E7%BB%AD%E5%8A%A0%E6%B2%B9.html",{d:1737800654e3,e:`<h1> 我那进步很大的主队！拜托继续加油！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>说真的，第一把Bo7打到巅峰对决确实进步，<br>
虽然中间有bp失误、反向闪现、掉点等等，<br>
但是对于一个春季赛夏季赛挑杯一路看过来的，<br>
本ies觉得孩子们有努力正视自己的问题了！<br>
昨天两个0:1落后打平，状态真不好，<br>
今天很火热，晚上打的第一把太可惜了<br>
破三高被翻盘我心脏都不好了，急救……<br>
总之，恭喜🎉770拿下第一胜，今天都辛苦了！<br>
明天继续加油，咱们努力进正赛好不好🥺<br>
易坦子融花，一坛紫融花～相信你们会好起来～<br>
从21年22年，如今呢23，高峰低谷都走来了，<br>
只要你们在变好，在进步在努力我们就有希望！<br>
五个人再好好打比赛吧，拿冠军吧我的eStarPro，<br>
一个人的职业生涯真的太短太短了，好好珍惜<br>
罗思源真的很棒，他很努力很认真很热血很纯粹爱电竞！<br>
最爱的电竞选手、没有之一，因为花海看比赛玩游戏身边的朋友陪我一起看es比赛，跟我一起讨论！会因为你们赢而开心，因为我他们认识了你们五个复活吧我的爱人意思大！</p>`,r:{minutes:1.37,words:412},y:"a",t:"我那进步很大的主队！拜托继续加油！"},["/posts/沐沐/我那进步很大的主队拜托继续加油.html","/posts/沐沐/我那进步很大的主队拜托继续加油.md",":md"]],["v-152a9a46","/posts/%E6%B2%90%E6%B2%90/%E6%89%93%E6%B8%B8%E6%88%8F%E5%B0%8F%E6%8B%87%E6%8C%87%E6%A0%B9%E9%83%A8%E7%96%BC.html",{d:1739615298e3,e:`<h1> 打游戏🎮小拇指根部疼</h1>
<p><br>
<br>
</p>
<p>和朋友一起打王者，打得我手心都是汗<br>
小拇指根部贼痛第一次这样……<br>
王者荣耀你拿什么赔我！还不给我赢<br>
这个赛季我真的无语，匹配的队友太菜了<br>
玩不了一点，举报还不成功凭什么啊<br>
#王者荣耀 #王者荣耀上分 #游戏</p>
`,r:{minutes:.37,words:111},y:"a",t:"打游戏🎮小拇指根部疼"},["/posts/沐沐/打游戏小拇指根部疼.html","/posts/沐沐/打游戏小拇指根部疼.md",":md"]],["v-1c851524","/posts/%E6%B2%90%E6%B2%90/%E6%89%93%E6%B8%B8%E6%88%8F%E7%BA%A6%E6%88%91%E5%85%AC%E4%B8%BB%E8%AF%B7%E4%B8%8A%E5%8F%B7.html",{d:1739615298e3,e:`<h1> 打游戏约我【公主请上号】</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>笑死了，游戏搭子很尊重公主呢～<br>
以后timi前请叫公主！<br>
#王者荣耀 #王者荣耀上分 #我和搭子的游戏时刻</p>
`,r:{minutes:.27,words:80},y:"a",t:"打游戏约我【公主请上号】"},["/posts/沐沐/打游戏约我公主请上号.html","/posts/沐沐/打游戏约我公主请上号.md",":md"]],["v-563489d8","/posts/%E6%B2%90%E6%B2%90/%E6%89%AC%E5%B7%9E%E4%B9%92%E4%B9%93%E7%90%83%E5%85%A8%E9%94%A6%E8%B5%9B%E4%BD%A0%E5%88%AB%E5%A4%AA%E7%A6%BB%E8%B0%B1.html",{d:1739615298e3,e:`<h1> 扬州乒乓球全锦赛你别太离谱</h1>
<p><br>
<br>
</p>
<p>不是我说，扬州乒乓球全锦赛吃相太难看了，割韭菜还是看白菜呢。我和我姐妹疯狂在骂，借我姐妹的话“搞得好像办完这场没钱办了一样”。<br>
比赛日程都没出8月8号就要开始抢票，今天6号了几点开始抢票也不说，最恶心的水这个必须买通票我是真的大开眼界，没见过全锦赛这么搞的，上班族和学生党只能周末，大家拼票的都预定14/15周末，剩下工作日都得找好多人一起拼[汗]我服了。<br>
我只想看个男团，都不知道哪几日会有他们，咋买，很离谱，属实没见过～<br>
#全锦赛 #扬州全锦赛 #乒乓球 #全锦赛乒乓球</p>
`,r:{minutes:.77,words:230},y:"a",t:"扬州乒乓球全锦赛你别太离谱"},["/posts/沐沐/扬州乒乓球全锦赛你别太离谱.html","/posts/沐沐/扬州乒乓球全锦赛你别太离谱.md",":md"]],["v-3bcd1164","/posts/%E6%B2%90%E6%B2%90/%E6%89%AC%E5%B7%9E%E5%8E%BB%E5%95%A6.html",{d:1739615298e3,e:`<h1> 扬州去啦！</h1>
<p>早上抵达晚上回来<br>
天气嘎嘎好人是真的多<br>
出去散心好开心哦#扬州旅行 #扬州 #烟花三月下扬州 #东关街 #皮市街</p>
`,r:{minutes:.16,words:49},y:"a",t:"扬州去啦！"},["/posts/沐沐/扬州去啦.html","/posts/沐沐/扬州去啦.md",":md"]],["v-210e4199","/posts/%E6%B2%90%E6%B2%90/%E6%8A%93%E5%A8%83%E5%A8%83%E7%9A%84%E5%BF%AB%E4%B9%90.html",{d:1739615298e3,e:`<h1> 抓娃娃的快乐🎉</h1>
<p><br>
<br>
<br>
</p>
<p>笑死了和我朋友抓娃娃，他一个都没抓到<br>
全是我努力奋斗的结果，但是这个挡板真的好讨厌<br>
很不喜欢，好多次都是卡着挡板的<br>
#抓娃娃 #毛绒公仔 #夹娃娃</p>
`,r:{minutes:.29,words:88},y:"a",t:"抓娃娃的快乐🎉"},["/posts/沐沐/抓娃娃的快乐.html","/posts/沐沐/抓娃娃的快乐.md",":md"]],["v-00a3822b","/posts/%E6%B2%90%E6%B2%90/%E6%8E%92%E4%BD%8D%E6%97%A5%E8%AE%B0%E8%BF%99%E5%91%A8%E4%BF%9D%E4%BD%8F%E5%95%A6%E5%8F%AF%E6%83%9C%E5%B0%8F%E6%98%8E%E6%8E%89%E4%BA%86.html",{d:1737800654e3,e:`<h1> 排位日记！这周保住啦，可惜小明掉了</h1>
<p><br>
<br>
</p>
<p>上周的巅峰赛和挑战赛我是真的不想说<br>
要不是为了保每周的牌牌，不想打了！<br>
这周我只想遇到正常不讲废话的队友<br>
要求不高，小王你识相点别逼我骂你<br>
还有最最最重要，今天意思大比赛加油！<br>
武汉eStarPro，两场2:0给我拿下，稳稳幸福☺️<br>
花海你要相信自己，金婚五人组一定要沟通好！<br>
#巅峰赛 #王者荣耀 #王者荣耀上分 #武汉eStarPro</p>
`,r:{minutes:.53,words:159},y:"a",t:"排位日记！这周保住啦，可惜小明掉了"},["/posts/沐沐/排位日记这周保住啦可惜小明掉了.html","/posts/沐沐/排位日记这周保住啦可惜小明掉了.md",":md"]],["v-6f415fe0","/posts/%E6%B2%90%E6%B2%90/%E6%8E%92%E9%98%9F%E4%B8%80%E5%B0%8F%E6%97%B6%E7%9A%84%E7%B2%A4%E9%99%88%E8%AE%B0%E7%B2%A5%E5%BA%95%E7%81%AB%E9%94%85.html",{d:1739615298e3,e:`<h1> 排队一小时的粤陈记，粥底火锅</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>#一起逛夜市 #想记录下此刻 #这个模板有点东西<br>
五百多号终于给我等到了粤陈记<br>
太可怕了，去的时候一百多，打着游戏等～<br>
实话：还行，但没有那么惊艳<br>
可能我预期太高了，两个人吃了两百多<br>
有的海鲜不是很新鲜，建议大家看一下<br>
然后粥底一般，对了它居然没有香菜调料<br>
#广州 #粤陈记煲仔粥 #番禺美食 #广州美食</p>
`,r:{minutes:.54,words:163},y:"a",t:"排队一小时的粤陈记，粥底火锅"},["/posts/沐沐/排队一小时的粤陈记粥底火锅.html","/posts/沐沐/排队一小时的粤陈记粥底火锅.md",":md"]],["v-6b95903e","/posts/%E6%B2%90%E6%B2%90/%E6%8E%A8%E8%8D%90%E4%B8%80%E4%B8%AA%E5%AE%9D%E8%97%8F%E5%8E%86%E5%8F%B2%E5%8D%9A%E4%B8%BB-%E4%B8%9C%E5%85%B4%E8%8B%9F%E5%8D%81%E4%B8%89.html",{d:1739615298e3,e:`<h1> 推荐一个宝藏历史博主-东兴苟十三</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>之前在微博推荐一个B站历史up主<br>
五月份发wb的时候粉丝还是七十几万<br>
八月份发小🍠已经一百万了！太棒了<br>
我之前就关注了一直追更几期才敢推荐<br>
每一期故事每一个人物都有主题扣着不散<br>
文案写得特别好，诗句引用恰到好处信手拈来<br>
画面非常用心，逻辑感很强，大家能听下去<br>
虽然东兴苟十三更新的慢但是能感受到用心<br>
时长是我不舍得倍速且经常二刷三刷的程度<br>
他一定查阅了大量资料写稿删改校对录制调试<br>
真心希望喜欢历史的朋友可以去搜一下看看～<br>
相信我你一定会喜欢上他期待二百万！<br>
@东兴苟十三 #历史  #历史博主推荐 #b站历史博主推荐 #历史人物 #文学</p>`,r:{minutes:.92,words:277},y:"a",t:"推荐一个宝藏历史博主-东兴苟十三"},["/posts/沐沐/推荐一个宝藏历史博主-东兴苟十三.html","/posts/沐沐/推荐一个宝藏历史博主-东兴苟十三.md",":md"]],["v-b3bbe49e","/posts/%E6%B2%90%E6%B2%90/%E6%94%B6%E6%89%AC%E5%B7%9E%E5%85%A8%E9%94%A6%E8%B5%9B%E9%97%A8%E7%A5%A8.html",{d:1737800654e3,e:`<h1> 收扬州全锦赛门票</h1>
<p><br>
<br>
</p>
<p>比较倾向12-14号的票<br>
主要想看男团女团，12号全天或者白天，不看混双，主要看白天的单打<br>
13号和14号全天或者白天都行<br>
超喜欢乒乒乓乓，家人们快快看看我～救救孩子吧，之前不确定主力没敢买，留言or私信都可以！！！江苏家门口～<br>
#扬州全锦赛 #乒乓球 #全锦赛 #樊振东 #王楚钦 #孙颖莎 #陈梦 #王曼昱 #林高远 #梁靖昆 #国乒 #扬州</p>
`,r:{minutes:.5,words:151},y:"a",t:"收扬州全锦赛门票"},["/posts/沐沐/收扬州全锦赛门票.html","/posts/沐沐/收扬州全锦赛门票.md",":md"]],["v-653e79e6","/posts/%E6%B2%90%E6%B2%90/%E6%96%B0%E5%9E%8B%E9%9B%AA%E7%B3%95%E5%88%BA%E5%AE%A2-%E5%BE%B7%E8%8A%99%E7%9C%9F%E6%9C%89%E4%BD%A0%E7%9A%84.html",{d:1737800654e3,e:`<h1> 新型雪糕刺客-德芙真有你的</h1>
<p><br>
<br>
</p>
<p>家人们不是我说，雪糕刺客又来了<br>
你猜这德芙冰淇淋多少钱？<br>
18.9！！！没错👍18.9<br>
我一整个大无语啦<br>
#雪糕刺客 #雪糕 #冰淇淋 #德芙巧克力冰淇淋 #德芙冰激凌 #德芙#冰淇淋 #德芙冰淇淋</p>
`,r:{minutes:.32,words:96},y:"a",t:"新型雪糕刺客-德芙真有你的"},["/posts/沐沐/新型雪糕刺客-德芙真有你的.html","/posts/沐沐/新型雪糕刺客-德芙真有你的.md",":md"]],["v-4b16f173","/posts/%E6%B2%90%E6%B2%90/%E6%96%B0%E5%B9%B4%E6%88%98%E7%94%B2%E6%90%9E%E5%AE%9A%E5%95%A6.html",{d:1737800654e3,e:`<h1> 新年战甲搞定啦🥰</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>过年约美甲真的太难了！<br>
因为临时想做，问了好几家才有空位-<br>
结果到店里渐变+30，猫眼+30，新年加油包+30<br>
在原来的基础上给我硬生生又多收了钱<br>
尊嘟很无语～还一直问我为什么不做长指甲贴甲片<br>
好在最后做出来的成果还不错……简约大方好看<br>
#新年美甲 #短甲美甲 #本甲美甲 #腮红美甲 #猫眼美甲 #简约美甲</p>
`,r:{minutes:.52,words:155},y:"a",t:"新年战甲搞定啦🥰"},["/posts/沐沐/新年战甲搞定啦.html","/posts/沐沐/新年战甲搞定啦.md",":md"]],["v-2b464b56","/posts/%E6%B2%90%E6%B2%90/%E6%96%B0%E7%9A%84%E4%B8%80%E5%91%A8%E6%96%B0%E7%9A%84%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%A0%87%E6%A0%87.html",{d:1737800654e3,e:`<h1> 新的一周新的王者荣耀标标！</h1>
<p><br>
<br>
</p>
<p>新的一周标标更新<br>
#王者荣耀上分 #巅峰赛 #王者荣耀市标 #明世隐<br>
昨天巅峰赛遇到两个普信男<br>
上来就攻击女玩家，真恶心啊<br>
法师想玩朵莉亚被ban了拿了西施<br>
我就去玩小明，然后一直说我们没控制没前排<br>
也不看看自己打的什么鬼样子，最后mvp西施<br>
举报扣了6分，另一个扣少了才1分！！！</p>
`,r:{minutes:.48,words:143},y:"a",t:"新的一周新的王者荣耀标标！"},["/posts/沐沐/新的一周新的王者荣耀标标.html","/posts/沐沐/新的一周新的王者荣耀标标.md",":md"]],["v-7c7ea5d4","/posts/%E6%B2%90%E6%B2%90/%E6%97%A0%E6%89%80%E8%B0%93%20%E4%BF%BA%E6%9C%89%E6%9C%8B%E5%8F%8B%E5%B8%AE%E6%88%91%E8%B7%91%E5%93%88%E5%93%88%E5%93%88.html",{d:1739615298e3,e:`<h1> 无所谓 俺有朋友帮我跑哈哈哈</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>#keep奖牌 #keep晴天小猪 #hellokitty #HelloKitty奖牌 #keep<br>
真的好可爱！！！沉甸甸的～<br>
拿在手里真的很重，手好酸<br>
虽然是锌合金但是好看就完事！<br>
keep设计师都不睡觉吗？？？<br>
越来越好看了</p>
`,r:{minutes:.36,words:109},y:"a",t:"无所谓 俺有朋友帮我跑哈哈哈"},["/posts/沐沐/无所谓 俺有朋友帮我跑哈哈哈.html","/posts/沐沐/无所谓 俺有朋友帮我跑哈哈哈.md",":md"]],["v-3fbc0cc9","/posts/%E6%B2%90%E6%B2%90/%E6%97%A5%E6%96%99%E6%94%BE%E9%A2%98.html",{d:1739615298e3,e:`<h1> 日料放题</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
`,r:{minutes:.16,words:49},y:"a",t:"日料放题"},["/posts/沐沐/日料放题.html","/posts/沐沐/日料放题.md",":md"]],["v-77177bb1","/posts/%E6%B2%90%E6%B2%90/%E6%97%A5%E8%85%90%E5%89%A7%E6%97%A5%E8%85%90%E7%94%B5%E5%BD%B1%E6%8E%A8%E8%8D%90%E5%AE%89%E5%88%A9%E9%83%BD%E7%BB%99%E6%88%91%E5%93%AD.html",{d:1737800654e3,e:`<h1> 日腐剧/日腐电影推荐安利！都给我哭！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>#到了三十岁还是处男会变成魔法师 #日腐 #bl #日剧 #町田启太 #赤楚卫二<br>
非常温柔的一部剧，上周回家看的，町田启太和赤楚卫二，颜值很高演技很好剧情很棒，op和ed好听！电影是剧的延伸、今天晚上抽空看完了电影版，前面很甜后面感动，截取了里面的部分台词，分享记录<br>
知道安达清受伤跑到长崎的黑泽优一，两个人第一次互相袒露真心，告诉对方自己真实的想法对那个个人的心意是要完整表达给对方，两个人都改变了！<br>
安达一家对两个人的态度，太美好了，没有过多的言语，妈妈开心的笑容，爸爸认同的眼神，弟弟一家的祝福，晚上其乐融融的喝酒吃饭真的太好哭了<br>
黑泽这里则不一样，妈妈从抗拒见面到愿意见面，再到见面时被两个的幸福感化，笑着落泪祝福，爸爸说得话太好了呀两边都是相信孩子的选择，只要幸福就好了，太好哭了！<br>
黑泽和安达这段在妈妈面前的内心剖白，我泪流不止！安达成长了，之前都是靠魔法听见黑泽的心声，他很胆怯完全不敢相信那么优秀的黑泽会喜欢自己，他一次次靠魔法去确定感受对方的想法。可是魔法会失效，他开始靠自己。从自卑到自信，敢于开口敢于尝试敢于说爱，都是因为被黑泽坚定的选择着[泪]而黑泽一直以来压抑自己，内心的脆弱和不完美终于有一个人可以完全接受最真实的他！优一和清是双向奔赴的爱情，互相尊重理解，小心呵护对方的感情，在爱里坚强勇敢，一起努力成为更好的自己。看完久久不能平复，很清新很喜欢，不得不说日本真的很会拍纯爱</p>`,r:{minutes:2.11,words:632},y:"a",t:"日腐剧/日腐电影推荐安利！都给我哭！"},["/posts/沐沐/日腐剧日腐电影推荐安利都给我哭.html","/posts/沐沐/日腐剧日腐电影推荐安利都给我哭.md",":md"]],["v-624f63b1","/posts/%E6%B2%90%E6%B2%90/%E6%97%A5%E8%85%90%E6%88%91%E5%8F%88%E6%9D%A5%E5%95%A6.html",{d:1737800654e3,e:`<h1> 日腐我又来啦！！！</h1>
<p><br>
<br>
<br>
</p>
<p>大半夜冲了个夸克svip会员（蹭了个苹果第一次开通的福利，立马关了自动续费嘿嘿）不是我说88vip真的太烦了，之前买了别人的一年，一直掉真没意思……<br>
回到正题，火速存了一堆2024的推荐剧</p>
<p>翻看了一下，2024战绩惨不忍睹，呜呜呜，主要怪我对象！阻碍我看剧的脚步嘿嘿嘿嘿～2024追更完的居然只有一部，我震惊了，就呆湾的《樱桃魔法》。告辞，六月份以来每天跟狗子打电话，《25时赤坂见》看了一半，《完美求婚》《我成为BL剧主角》各看了一集。后面新的剧也没关注了，韩腐更不用说了，0！领了个鸭蛋<br>
不是，咋回事！《体感预报》居然是2023年的了？<br>
泰腐啥情况，出得倒不少，好看的没来个，我都没关注了看了一下别人的年度总结，算了，除了taynew没有一个戳我了～还是期待今年的狮暖吧！二搭给我火！</p>`,r:{minutes:1.18,words:353},y:"a",t:"日腐我又来啦！！！"},["/posts/沐沐/日腐我又来啦.html","/posts/沐沐/日腐我又来啦.md",":md"]],["v-7a12e684","/posts/%E6%B2%90%E6%B2%90/%E6%97%A9%E4%B8%8A%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%95%B2%E9%97%A8%E8%BF%98%E8%AE%A9%E6%88%91%E5%BC%80%E9%97%A8.html",{d:1739615298e3,e:`<h1> 早上被陌生人敲门还让我开门！！</h1>
<p><br>
<br>
</p>
<p>家人们，我吐了真的大无语<br>
早上l有人一直敲我门而且还在试图转我六点门把手，我是属于那种睡眠比较浅的人，没敲两声就被吵醒了然后问了一句：谁啊！很凶的那种，然后就没动静了。<br>
大概是被吓到了，心脏一直砰砰砰跳。<br>
结果，更离谱的事情发生了<br>
又有人来敲我门！我没睡着直接跑去门口问谁啊干什么，门口一个男的开始说话：刚刚是不是有人敲你门了，他走错了不好意思。想跟你道歉，你能不能开个门？我：你谁啊，我不开门，你可以走了。他就一直说让我开门打扰我休息想跟我道歉大概重复了三次让我开门道歉这个事情。我真的恼了知道打扰别人休息还在二次敲门干嘛，还让我开门？我一个人诶开门我是疯了吗？隔着门道歉不行？什么意图啊！<br>
听声音不认识，我不是没有安全意识的好吗？最后发火直接赶走了，真的很吓心脏还没缓过来，昨天晚上本来就晚睡，现在完全睡不着了还好是早上六点多#陌生人敲门 #独居 #保护自己 #女生的自我保护</p>`,r:{minutes:1.25,words:374},y:"a",t:"早上被陌生人敲门还让我开门！！"},["/posts/沐沐/早上被陌生人敲门还让我开门.html","/posts/沐沐/早上被陌生人敲门还让我开门.md",":md"]],["v-85531764","/posts/%E6%B2%90%E6%B2%90/%E6%9C%80%E8%BF%91%E7%9A%84%E5%98%8E%E5%98%8E%E5%BF%AB%E4%B9%90.html",{d:1739615298e3,e:`<h1> 最近的嘎嘎快乐</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>#COTD #想记录下此刻 #这个模板有点东西<br>
首先你要快乐！<br>
其次都是其次</p>
`,r:{minutes:.23,words:69},y:"a",t:"最近的嘎嘎快乐"},["/posts/沐沐/最近的嘎嘎快乐.html","/posts/沐沐/最近的嘎嘎快乐.md",":md"]],["v-5a5b4491","/posts/%E6%B2%90%E6%B2%90/%E6%9C%89%E5%AE%B6%E4%BA%BA%E4%BB%AC%E4%B8%80%E8%B5%B7%E6%9D%A5%E8%81%8A%E5%A4%A9%E5%90%97%E5%88%86%E4%BA%AB%E5%BF%AB%E4%B9%90.html",{d:1737800654e3,e:`<h1> 有家人们一起来聊天吗！分享快乐～</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>泰腐台腐日腐韩腐欧美腐，格局大点家人们都可以来玩！最近疯狂看剧嗑cp，想找搭子一起聊天哈哈哈！顺便给大家po一下我看过的剧，可能还有遗漏哈哈哈，私我wx群<br>
#以你的心诠释我的爱 #一年生 #bkpp #泰剧 #泰腐 #日腐 #台剧腐剧 #韩腐 #泰兰德的夏天永不停歇 #爱在空气中 #消失的初恋 #到了三十岁还是处男会变成魔法师 #黑帮少爷我上我 #mileapo #美丽的他 #永远的第一名 #samyu #萩原利久八木勇征 #目黑莲道枝骏佑 #腐劇 #双男主 #cp #经典杯子蛋糕 #两小无拆</p>`,r:{minutes:.72,words:217},y:"a",t:"有家人们一起来聊天吗！分享快乐～"},["/posts/沐沐/有家人们一起来聊天吗分享快乐.html","/posts/沐沐/有家人们一起来聊天吗分享快乐.md",":md"]],["v-2802af42","/posts/%E6%B2%90%E6%B2%90/%E6%9C%BA%E5%8A%A8%E6%90%9C%E6%9F%A5%E9%98%9F404.html",{d:1737800654e3,e:`<h1> 机动搜查队404</h1>
<p><br>
<br>
<br>
</p>
<p>用超大显示屏看刑侦剧也太快乐了！<br>
一直想看的#机动搜查队404 #MIU404<br>
我来了～破案剧就是好看<br>
猫猫狗狗双男主，一集一个案子节奏很好！</p>
`,r:{minutes:.27,words:80},y:"a",t:"机动搜查队404"},["/posts/沐沐/机动搜查队404.html","/posts/沐沐/机动搜查队404.md",":md"]],["v-2c322832","/posts/%E6%B2%90%E6%B2%90/%E6%9D%A5%E5%B0%8F%E7%BA%A2%E4%B9%A69%E5%91%A8%E5%B9%B4%E5%95%A6.html",{d:1737800654e3,e:`<h1> 🙌来小红书9周年啦！</h1>
<p><br>
<br>
</p>
<p>居然已经9年啦！！哦莫</p>
`,r:{minutes:.11,words:32},y:"a",t:"🙌来小红书9周年啦！"},["/posts/沐沐/来小红书9周年啦.html","/posts/沐沐/来小红书9周年啦.md",":md"]],["v-24e0682c","/posts/%E6%B2%90%E6%B2%90/%E6%9D%BE%E9%B9%A4%E6%A5%BC%20%E6%88%91%E8%91%B1%E5%91%A2%E6%88%91%E9%9D%A2%E7%9A%84%E8%91%B1%E5%91%A2.html",{d:1737800654e3,e:`<h1> 松鹤楼 我葱呢？？？我面的葱呢😭</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>今天深圳降温了再加上没睡好，有点蔫～<br>
下午对象说让我吃点热呼呼呼好的（今天我俩都在加班）<br>
看了我公司附近没有海底捞，有牛肉火锅让我去，<br>
实在是不想动，整个人懒洋洋了拒绝了两次…<br>
对象因为我不想去吃火锅，也取消了自己的海底捞计划，可怜的宝宝说要跟我同甘共苦<br>
到饭点，跟我同桌聊天他说吃面</p>
<p>诶，人吧，他就突然馋了！！！我就给我对象说想吃面，<br>
一开始他还在执着给我点火锅外卖，谭鸭血<br>
我说，我想吃面……<br>
他说，那我给你点渔粉吧，五谷渔粉<br>
我说，啊啊啊，要吃面，不是粉！不是米线<br>
他说，啊，我们那里都不分都是一样的<br>
我说，我们那里分很细，粗面细面，哪种分都拆拆，我要汤面，不要辣，要葱要葱<br>
他说，我是ChatGPT是吧，现场输入指令<br>
我嘿嘿嘿傻笑，面面！<br>
同桌本来说出去吃番茄鸡蛋面后来没去，问我咋个点面没喊他，现在看来，幸好没喊。他，我幸好没吃</p>`,r:{minutes:2.12,words:636},y:"a",t:"松鹤楼 我葱呢？？？我面的葱呢😭"},["/posts/沐沐/松鹤楼 我葱呢我面的葱呢.html","/posts/沐沐/松鹤楼 我葱呢我面的葱呢.md",":md"]],["v-0cbed1f4","/posts/%E6%B2%90%E6%B2%90/%E6%9E%81%E9%99%90%E8%99%B9%E6%A1%A5%E6%9C%BA%E5%9C%BAT2%E5%88%B0T1%E7%99%BB%E6%9C%BA.html",{d:1737800654e3,e:`<h1> 极限虹桥机场T2到T1登机</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>今天一整个大无语，第一次看错航站楼<br>
五点多起床，六点十五左右就到了，<br>
对象送我到机场两个人还温存了一会<br>
想着易安检+线上值机肯定来得及，<br>
在安检门口排队好一会发现进不去！！！<br>
这个时候已经六点五十，七点半起飞，慌神了～<br>
先问了机场工作人员怎么去T1，立马转弯下楼，<br>
又遇到一个工作人员说来不及但是可以开车带我赶一下，<br>
如果赶上飞机让我给【小费100！！！】更离谱<br>
我怀疑不是机场人员，西装革履的不知道干啥～<br>
还好指示牌提醒10号线一站即可到～相信官方YYDS<br>
和男朋友打了个电话他也一直安抚我来得及，<br>
帮我看路线，又防止我真的赶不上反着坐到T1等我<br>
在地铁上搜xhs如何快速从地铁到T1，提供了很大帮助！<br>
一路背着我的大包狂奔，后面真的走不动了<br>
好在安检人员看到我已经开始登机让我走头等舱通道！<br>
安检完毕一路小跑到登机口，广播传来我的名字<br>
催我登机，笑死，第一次听到我名字……<br>
最后紧赶慢赶，上了最后一辆摆渡车<br>
登机时间七点十分！等最后一位小姐姐到十五发车，二十到飞机下～～真的太极限了！<br>
《搞笑的是，还被合作方看到我在机场狂奔》</p>`,r:{minutes:2.05,words:614},y:"a",t:"极限虹桥机场T2到T1登机"},["/posts/沐沐/极限虹桥机场T2到T1登机.html","/posts/沐沐/极限虹桥机场T2到T1登机.md",":md"]],["v-ec6f06ce","/posts/%E6%B2%90%E6%B2%90/%E6%AF%95%E4%B8%9A%E5%89%8D%E7%9A%84%E5%BF%AB%E4%B9%90.html",{d:1739615298e3,e:`<h1> 毕业前的快乐</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
`,r:{minutes:.2,words:61},y:"a",t:"毕业前的快乐"},["/posts/沐沐/毕业前的快乐.html","/posts/沐沐/毕业前的快乐.md",":md"]],["v-1770c20e","/posts/%E6%B2%90%E6%B2%90/%E6%B0%B8%E8%BF%9C%E6%80%80%E5%BF%B5%E8%BF%BD%E4%B8%80%E5%B9%B4%E7%94%9F%E7%9A%84%E9%9D%92%E6%98%A5SK%E7%99%BD%E6%9C%88%E5%85%89.html",{d:1737800654e3,e:`<h1> 永远怀念追《一年生》的青春！SK白月光</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>#我爱的少年永远热恋 #泰兰德的夏天永不停歇 #一年生 #singtokrist #他泰<br>
休假的晚上都在补剧，之前大家安利的泰腐日腐台腐基本都追平了，今天又刷到了嵩山音乐节bkpp和爱空的演出，太帅了[单身狗]看大家熬夜排队，突然发现年纪大了嗑cp的状态也不一样了，一瞬间好怀念追SK的青春！<br>
入坑是白船，但最疯狂的绝对是《一年生》狮暖，是谁困在了17-18年的泰兰德[苦涩]，是我！有多喜欢？是边考雅思考Gmat边追singtokrist好几场见面会、是可以赶行程接完机送完花不睡觉和后援会凌晨布置现场下午看完演出直接去车站回学校继续上课、是为了更靠近他们努力进了站子跑前线做英翻，是一个人和同担去泰国看5.5告别演唱会，去逛拉玛八世大桥兰实大学农业大学、住在GMM对面日常蹲上下班、去打卡他们综艺拍摄餐厅景点和念书的学校、去演唱会碰到暖爸暖妈跑去合照的勇敢girl，是断腿跑一整天他泰宣传活动等点名被拍进限时IG的程度，是签名照签名T恤签名海报各种周边几乎不落的我……<br>
后来的他们散了，那么火却没有二搭，🐔真的不当人，后来的我也在泰兰德的圈子里消失了很久很久[失望]当年虽然画质差服化一般很清水，但是很戳心巴很上头！要知道我先追的逐月之月六子，一开始还很抗拒一年生，两部都超火，自己入坑以后各种恶补！<br>
要说现在的我，喜欢依旧热烈，喜欢黑帮的mileapo，喜欢以你的BKPP，喜欢爱空四子，喜欢第一名的samyu，喜欢近距离爱上你的呈仁，喜欢消初的莲理枝，喜欢美彼的久八……但是好佛系，考古同框补物料，没有那么浓烈要追现场的欲望了，唉，终究是我所有的炙热都在那些年给了这对白月光[泪]</p>`,r:{minutes:2.29,words:688},y:"a",t:"永远怀念追《一年生》的青春！SK白月光"},["/posts/沐沐/永远怀念追一年生的青春SK白月光.html","/posts/沐沐/永远怀念追一年生的青春SK白月光.md",":md"]],["v-42195c7e","/posts/%E6%B2%90%E6%B2%90/%E6%B1%82%E4%B8%80%E4%B8%AA%E6%B7%B1%E5%9C%B3%E9%9A%94%E7%A6%BB%E5%90%8C%E8%A1%8C%20%E9%A6%99%E6%B8%AF%E5%9B%9E%E6%B7%B1%E5%9C%B3.html",{d:1739615298e3,e:`<h1> 求一个深圳隔离同行 香港回深圳</h1>
<p><br>
<br>
</p>
<p>我打算十二月中下旬或者1月初回深圳，隔离十四天，过年之前回去！一起隔离，能拼宿最好了，还可以一起玩耍，不行路上互相照应也可！女孩子，好相处！</p>
`,r:{minutes:.3,words:90},y:"a",t:"求一个深圳隔离同行 香港回深圳"},["/posts/沐沐/求一个深圳隔离同行 香港回深圳.html","/posts/沐沐/求一个深圳隔离同行 香港回深圳.md",":md"]],["v-3fa5834c","/posts/%E6%B2%90%E6%B2%90/%E6%B1%9F%E8%8B%8F%E5%85%B1%E9%9D%92%E5%9B%A2%E4%B8%BB%E9%A2%98%E7%9B%B2%E7%9B%92.html",{d:1739615298e3,e:`<h1> 江苏共青团主题盲盒！</h1>
<p><br>
<br>
<br>
</p>
<p>感谢江苏团团寄来的盲盒！<br>
作为最先一批拥有的迫不及待来分享[哇]<br>
苏小茉和苏小莉超级可爱五个主题，<br>
拆了“强国有我、探索科学、勇攀高峰”，<br>
今天苏团也在各平台正式官宣主题盲盒啦，<br>
家人们关注一下参与活动也能免费拥有<br>
希望以后能和我们苏团多多合作，祝福我们江苏团团越来越好，赞赞我们的家乡#江苏 #盲盒 #江苏共青团</p>
`,r:{minutes:.54,words:163},y:"a",t:"江苏共青团主题盲盒！"},["/posts/沐沐/江苏共青团主题盲盒.html","/posts/沐沐/江苏共青团主题盲盒.md",":md"]],["v-6efd7506","/posts/%E6%B2%90%E6%B2%90/%E6%B2%A1%E6%9C%89%E8%93%9D%E8%BF%98%E7%BB%99%E6%88%91%E8%AE%A9%E8%93%9D%E7%9A%84%E6%BE%9C%E5%A4%AA%E5%B8%85%E4%BA%86%E5%90%A7.html",{d:1737800654e3,e:`<h1> 没有蓝还给我让蓝的澜太帅了吧！</h1>
<p><br>
<br>
</p>
<p>呜呜呜永远爱澜澜#王者荣耀 #王者荣耀澜<br>
王者英雄我最爱的澜！没有之一！又酷又帅<br>
最近练习西施和弈星，朋友帮我看装备还教我打法，我自己练习了几把带我去匹配一起练，开心！<br>
笑死了，比上班还认真不想上班家人们～<br>
#王者荣耀上分</p>
`,r:{minutes:.41,words:124},y:"a",t:"没有蓝还给我让蓝的澜太帅了吧！"},["/posts/沐沐/没有蓝还给我让蓝的澜太帅了吧.html","/posts/沐沐/没有蓝还给我让蓝的澜太帅了吧.md",":md"]],["v-4b2d2df5","/posts/%E6%B2%90%E6%B2%90/%E6%B2%A1%E7%9C%8B%E8%BF%87%E5%B0%8F%E5%85%AC%E5%AD%90x%E5%B0%8F%E7%8E%8B%E5%AD%90%E7%9A%84%E4%BC%9A%E5%93%AD%E5%90%A7.html",{d:1737800654e3,e:`<h1> 没看过小公子x小王子的会哭吧</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>#星条红与皇室蓝 #电影<br>
两个小时电影看看停停，再倒回去重放，<br>
他们的口音真的好好听！表达也Nice～<br>
一边欣赏一边学英语哈哈哈哈哈<br>
我真的真的很少不倍速看一个电影🎬</p>
`,r:{minutes:.37,words:112},y:"a",t:"没看过小公子x小王子的会哭吧"},["/posts/沐沐/没看过小公子x小王子的会哭吧.html","/posts/沐沐/没看过小公子x小王子的会哭吧.md",":md"]],["v-ed4402e2","/posts/%E6%B2%90%E6%B2%90/%E6%B5%85%E6%B5%85%E8%AE%B0%E5%BD%95%E6%89%93%E5%B7%A5%E4%BA%BA%E7%9A%84%E4%B8%80%E5%91%A8%E4%B8%89%E9%A4%90%E9%A5%AE%E9%A3%9F.html",{d:1737800654e3,e:`<h1> 浅浅记录打工人的一周三餐饮食</h1>
<p><br>
<br>
</p>
<p>8.27<br>
早餐：生椰贝贝+麻薯+牛奶<br>
午晚：番茄鸡蛋打卤面<br>
下午：桃子+香蕉/咖啡<br>
8.28<br>
早餐：鲜吐司+鲜肉月饼+牛奶<br>
午晚：鸡蛋黄瓜（加了鸡腿肉）<br>
下午：香蕉+橘子<br>
8.29<br>
早餐：烤吐司+咖啡<br>
午晚：豆腐抱蛋（加了洋葱）+煮红薯<br>
下午：黑布林+橘子<br>
8.30<br>
早餐：三明治<br>
午饭：土豆黄瓜胡萝卜洋葱沙拉<br>
下午：黑布林+桃子<br>
晚上和同事吃了东北铁锅炖<br>
8.31<br>
早餐：蒸胡萝卜鸡蛋红薯<br>
午晚：红烧排骨+时蔬（无主食）<br>
下午：香蕉+橘子<br>
9.1<br>
早餐：包子烧麦+牛奶<br>
午饭：烤鸡腿+烤时蔬<br>
周五晚上休假咯和朋友出去搓饭<br>
9.2:<br>
中午烤鱼<br>
晚上家常菜<br>
下午一杯霸王茶姬还吃了点小零食水果<br>
【救命！！！忽然胖了胖了3斤我哭了】<br>
感觉也没怎么乱吃，噗噗也很正常……<br>
昨天晚上熬大夜里今天早睡明天早上再看看<br>
9.3<br>
早上：鸡蛋+辣汤<br>
中午：红烧排骨/西红柿鸡蛋/茭白肉丝无主食<br>
下午：晴王+枣子<br>
#我的日常饮食<br>
#日常饮食<br>
#清淡饮食<br>
#打工人带饭<br>
#健康饮食</p>`,r:{minutes:1.14,words:341},y:"a",t:"浅浅记录打工人的一周三餐饮食"},["/posts/沐沐/浅浅记录打工人的一周三餐饮食.html","/posts/沐沐/浅浅记录打工人的一周三餐饮食.md",":md"]],["v-ff348f2c","/posts/%E6%B2%90%E6%B2%90/%E6%B7%B1%E5%9C%B3%E5%B0%8F%E7%85%B5%E8%AE%B0%E4%BC%91%E6%83%B3%E5%86%8D%E5%9D%91%E5%88%B0%E6%88%91.html",{d:1739615298e3,e:`<h1> 深圳小煵记，休想再坑到我！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>看网上推荐大排档这个店昨天下班去了，<br>
首先不得不说，小煵记人是真的多呀<br>
刚洗完碗筷就下雨了我？？？<br>
好在后面雨停了，但是篷子也搭起来了<br>
美团写的人均100真的是大骗子呀！根本不是，<br>
我们人均吃了四百400一个人我吃什么不好吃这个，<br>
打扰了🙇再也不会来了，都是坑……（我不会被骂吧）<br>
价格一方面，环境也就那样，被蚊子咬死了<br>
口味也是一言难尽！！怎么吐槽都不够！哎呀呀<br>
小青龙180一只，我们点了两只，烤得很老，没吃完<br>
肉质一点也不鲜嫩，吃在嘴里很柴，蒜香味也没融入～<br>
蟹粥188一份，分量很少，粥米很稀很稀，跟水一样，<br>
比不上如轩的海鲜砂锅粥，海鲜也少得可怜<br>
其他的，什么炒牛肉猪颈肉，都那样吧！</p>`,r:{minutes:1.53,words:458},y:"a",t:"深圳小煵记，休想再坑到我！"},["/posts/沐沐/深圳小煵记休想再坑到我.html","/posts/沐沐/深圳小煵记休想再坑到我.md",":md"]],["v-190d1618","/posts/%E6%B2%90%E6%B2%90/%E6%B7%B1%E5%9C%B3%E7%9A%84%E5%91%A8%E6%9C%AB%E5%BF%AB%E4%B9%90%E7%A2%8E%E7%89%87%E9%99%8D%E6%B8%A9%E5%95%A6%E5%8D%81%E6%9C%88%E4%BD%A0%E5%A5%BD.html",{d:1739615298e3,e:`<h1> 深圳的周末快乐碎片🧩降温啦～十月你好</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>周六快乐！假期快乐！今天开心心～<br>
本来选了一个晕染的秋系美甲💅超级喜欢…<br>
说做不了，有点复杂，想我了李姐啦！！！呜呜<br>
就自己选了个颜色参考别人的款做了个～<br>
等到新年再去做那个晕染吧（李姐什么都能做）<br>
总体来说还行，自然会有些蓝调，打工人简约！<br>
一起在做的美女说做深圳做这个色系有点早，不管嘻嘻😜<br>
回家的路上顺便去超市买了点菜和杂粮哦吼吼，<br>
用破壁机打了个韩式南瓜汤🎃最后加黄冰糖好喝！<br>
顺便用咖啡机做了杯拿铁，我觉得6-8度烘焙比较好喝，<br>
室友第一次开得11号直接给我苦没了哈哈哈<br>
超市菠菜卖完了！最后在小青菜和生菜选了后者～<br>
嗷嗷，生理期补一补嘎嘎快乐🎉还买了红豆红枣O<br>
明天给家人们做红豆浆，之前做过黑豆浆黄豆浆<br>
水果是昨天晚上逛山姆买的！大蓝莓好吃😋番茄nice，<br>
本来看中一个红提但是剩下的几盒质量一般般……<br>
话说，山姆的gay好多啊，昨天看到起码三对<br>
有一对健身香香的，还偷偷摸手手，绝对是哈哈哈<br>
【看我花融比赛咯，这个赛季第一次看，笑鼠咯】<br>
#秋冬美甲 #每日美食分享 #做饭日记 #打工人日常 #记录我的生活 #周末快乐碎片 #健康生活 #研磨咖啡</p>`,r:{minutes:1.55,words:465},y:"a",t:"深圳的周末快乐碎片🧩降温啦～十月你好"},["/posts/沐沐/深圳的周末快乐碎片降温啦十月你好.html","/posts/沐沐/深圳的周末快乐碎片降温啦十月你好.md",":md"]],["v-490b9ac4","/posts/%E6%B2%90%E6%B2%90/%E6%B8%B8%E8%AE%B0%E6%87%92%E5%BE%97P%E5%9B%BE%E4%B9%8B%E5%8E%9F%E5%9B%BE%E7%9B%B4%E5%8F%91.html",{d:1739615298e3,e:`<h1> 游记🎀懒得P图之原图直发</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>周末快乐🎉<br>
又是逛吃逛吃的一天，可惜胃太小了，啥也吃不下<br>
#广州 #广州探店 #打工人 #西华路 #大佛寺 #北京路 #陈家祠 #周末去哪玩</p>
`,r:{minutes:.49,words:146},y:"a",t:"游记🎀懒得P图之原图直发"},["/posts/沐沐/游记懒得P图之原图直发.html","/posts/沐沐/游记懒得P图之原图直发.md",":md"]],["v-cf4d09da","/posts/%E6%B2%90%E6%B2%90/%E6%BB%B4%E8%83%B6%E6%89%8B%E4%BD%9C%E6%B2%89%E6%B5%B8%E5%BC%8F%E5%BC%80%E7%AE%B1%E8%A7%86%E9%A2%91.html",{d:1739615298e3,e:`<h1> 滴胶手作沉浸式开箱视频</h1>
<p>#滴胶 #手作 #手工 #蜡片 #滴胶猫爪<br>
定制的一批手作，录了个沉浸式开箱<br>
徽章 钥匙扣 蜡烛 蜡片</p>
`,r:{minutes:.16,words:47},y:"a",t:"滴胶手作沉浸式开箱视频"},["/posts/沐沐/滴胶手作沉浸式开箱视频.html","/posts/沐沐/滴胶手作沉浸式开箱视频.md",":md"]],["v-1c6067c0","/posts/%E6%B2%90%E6%B2%90/%E6%BF%80%E5%85%89%E7%82%B9%E7%97%A3%E4%BC%A4%E5%8F%A3%E6%84%9F%E6%9F%93%E5%8F%91%E7%82%8E%E4%BA%86.html",{d:1739615298e3,e:`<h1> 激光点痣伤口感染发炎了</h1>
<p><br>
<br>
</p>
<p>7.31去激光的，手上胳膊还有身上一点<br>
正常应该一周就能结疤，结果发现发炎了！<br>
就是伤口一圈红肿还有黄白色的东西，<br>
不出意外可能是灌脓了，硬且摸起来疼<br>
去挂水了第二天，明天第三天继续去！<br>
我好焦虑啊，担心会留疤或者是增长，<br>
不知道什么时候能消炎，恢复期多久…<br>
晚上睡觉忍不住哭了，好愁后悔夏天点</p>
<p>没有洗澡没有流汗，饮食也有控制……<br>
真的不知道咋回事，我好害怕后面恢复期<br>
明天再挂一天水不行就回去找那个医生了！<br>
#激光点痣 #点痣 #点痣修复 #点痣发炎</p>`,r:{minutes:.71,words:214},y:"a",t:"激光点痣伤口感染发炎了"},["/posts/沐沐/激光点痣伤口感染发炎了.html","/posts/沐沐/激光点痣伤口感染发炎了.md",":md"]],["v-43a60d5e","/posts/%E6%B2%90%E6%B2%90/%E7%81%AB%E9%94%85%E6%97%B6%E9%97%B4%E5%88%B0%E7%AD%89%E4%B8%8D%E5%8F%8A%E9%9A%8F%E4%BE%BF%E6%8B%8D%E4%B8%80%E4%B8%AA%E5%BC%80%E5%90%83.html",{d:1737800654e3,e:`<h1> 火锅时间到！等不及随便拍一个开吃</h1>
<p><br>
<br>
</p>
<p>哈哈哈哈哈双十一终于结束啦！<br>
下雨天适合吃火锅暖暖的#火锅 #重庆老火锅 #美食</p>
`,r:{minutes:.21,words:63},y:"a",t:"火锅时间到！等不及随便拍一个开吃"},["/posts/沐沐/火锅时间到等不及随便拍一个开吃.html","/posts/沐沐/火锅时间到等不及随便拍一个开吃.md",":md"]],["v-4ed17f67","/posts/%E6%B2%90%E6%B2%90/%E7%88%B1%E4%B8%8A%E5%96%9D%E6%B1%A4%E5%81%A5%E5%81%A5%E5%BA%B7%E5%BA%B7.html",{d:1739615298e3,e:`<h1> 爱上喝汤健健康康</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>大口大口喝汤，真的好快乐，气色也变很好！#食疗养生 #养生日常 #滋补养生</p>
`,r:{minutes:.21,words:62},y:"a",t:"爱上喝汤健健康康"},["/posts/沐沐/爱上喝汤健健康康.html","/posts/沐沐/爱上喝汤健健康康.md",":md"]],["v-4aca13b8","/posts/%E6%B2%90%E6%B2%90/%E7%89%9B%E7%9C%BC%E6%B3%AA%E6%8A%8A%E7%A7%91%E9%A2%9C%E6%B0%8F%E5%BD%93%E8%BA%AB%E4%BD%93%E4%B9%B3%E6%8A%B9%E4%BA%86.html",{d:1739615298e3,e:`<h1> 牛眼泪，把科颜氏当身体乳抹了</h1>
<p><br>
<br>
<br>
</p>
<p>晚上洗完澡开始例行抹身体乳，<br>
也不知道怎么回事把科颜氏高保湿霜打开了，<br>
抠第一勺的时候觉得没味道还以为熬夜的问题，<br>
于是又挖了一勺怎么有点难涂开也不香，<br>
当我定睛一看，妈妈呀这不是身体乳这是面霜<br>
身体乳前两天被我用了放在床头柜上呢！！！<br>
两个瓶子都是白的，乳也是白色的我真的哭死……<br>
我后悔我惭愧我懊恼，还抠了两大坨</p>
`,r:{minutes:.57,words:172},y:"a",t:"牛眼泪，把科颜氏当身体乳抹了"},["/posts/沐沐/牛眼泪把科颜氏当身体乳抹了.html","/posts/沐沐/牛眼泪把科颜氏当身体乳抹了.md",":md"]],["v-e1fcb2e6","/posts/%E6%B2%90%E6%B2%90/%E7%89%B9%E7%A7%8D%E5%85%B5%E5%87%BA%E5%B7%AE%E5%A4%AA%E5%BC%BA%E4%BA%86%E6%88%91.html",{d:1739615298e3,e:`<h1> 特种兵出差，太强了我</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>早上五点十分起床，洗漱化妆六点半出发，<br>
打车七点四十到机场安检候机十一点多到达<br>
然后继续打车，不到十二点到开会附近的商场，<br>
吃个饭找星爸爸点杯咖啡复习稿子和材料，<br>
五点半开完会又打车去机场堵了一个多小时，<br>
还好司机看我赶车七点前给我送到还能恰个饭！<br>
继续安检候机坐飞机，晚上没睡着看黑豹2，<br>
笑死了我旁边大爷斗地主下象棋，<br>
旁边的旁边小姐姐一开始在处理工作后来玩五子棋，<br>
不幸的事起飞延误二十几分钟，十一点多落地，<br>
出来打车到家凌晨十二点半算了算真的可怕，<br>
我今天下午在我手机蹲起都开始晕眩💫<br>
昨天晚上十二点多才睡着，满打满算四个半小时！<br>
（回来飞机落地的时候都要yue了哈哈哈很难受）<br>
不过好一点的是！都是宽体飞机坐得还蛮舒服</p>`,r:{minutes:1.38,words:415},y:"a",t:"特种兵出差，太强了我"},["/posts/沐沐/特种兵出差太强了我.html","/posts/沐沐/特种兵出差太强了我.md",":md"]],["v-671b1c80","/posts/%E6%B2%90%E6%B2%90/%E7%8B%AE%E6%9A%96%E4%B8%80%E7%94%9F%E6%8E%A8.html",{d:1737800654e3,e:`<h1> 狮暖一生推！！！</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>和好姐妹聊了快两个小时，<br>
爬上ins就看到了好东西<br>
上次见到两个人一起合体还是在18年泰兰德！<br>
天呐，距离上一次已经六年了！！<br>
恭喜狮子回归，两个大宝贝希望有新合作～<br>
#泰兰德女孩 #狮暖 #singto #krist #singtokrist #GMM</p>
`,r:{minutes:.4,words:120},y:"a",t:"狮暖一生推！！！"},["/posts/沐沐/狮暖一生推.html","/posts/沐沐/狮暖一生推.md",":md"]],["v-11dcb231","/posts/%E6%B2%90%E6%B2%90/%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%80%E5%91%A8%E7%88%AC55%E9%A2%97%E6%98%9F%E6%98%9F.html",{d:1737800654e3,e:`<h1> 王者荣耀一周爬55颗星星</h1>
<p><br>
<br>
<br>
</p>
<p>和我可爱的游戏搭子弟弟一起稳稳上分<br>
这几天他生病我说要歇业让他养病<br>
不同意，晚上要一起玩（说要虐我两把）<br>
虽然打着会说两句但都是开着玩笑<br>
看我不讲话怕我不开心发消息让我别放心上<br>
每天不打游戏逗弟弟真的太快乐了#王者荣耀 #王者荣耀上分 #游戏</p>
`,r:{minutes:.46,words:139},y:"a",t:"王者荣耀一周爬55颗星星"},["/posts/沐沐/王者荣耀一周爬55颗星星.html","/posts/沐沐/王者荣耀一周爬55颗星星.md",":md"]],["v-664dc686","/posts/%E6%B2%90%E6%B2%90/%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%96%E5%86%A0%E6%8A%BD%E7%AD%BE%E7%BB%93%E6%9E%9C.html",{d:1739615298e3,e:`<h1> 王者荣耀世冠抽签结果</h1>
<p><br>
<br>
</p>
<p>estar给我冲！！！</p>
`,r:{minutes:.1,words:29},y:"a",t:"王者荣耀世冠抽签结果"},["/posts/沐沐/王者荣耀世冠抽签结果.html","/posts/沐沐/王者荣耀世冠抽签结果.md",":md"]],["v-377154b6","/posts/%E6%B2%90%E6%B2%90/%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%A4%A7%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83.html",{d:1739615298e3,e:`<h1> 王者荣耀亚运会大名单公布！</h1>
<p><br>
<br>
<br>
</p>
<p>恭喜花海！！！太棒了～China花海！！<br>
坦然真的人生赢家，菠萝宝牛～<br>
说是根据集训成绩选拔的，这个名单我没想到<br>
有一说一虽然我是🌟粉，喜欢estar<br>
但是我以为中路会是尾子，fly好像是被举报的<br>
#王者荣耀亚运会 #王者荣耀 #杭州亚运会 #武汉eStarPro花海  #estar #武汉estarPro坦然</p>
`,r:{minutes:.44,words:131},y:"a",t:"王者荣耀亚运会大名单公布！"},["/posts/沐沐/王者荣耀亚运会大名单公布.html","/posts/沐沐/王者荣耀亚运会大名单公布.md",":md"]],["v-66e72c09","/posts/%E6%B2%90%E6%B2%90/%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%BD%A0%E5%8F%AF%E5%BE%97%E7%91%9F%E5%90%A7.html",{d:1737800654e3,e:`<h1> 王者荣耀你可得瑟吧😂</h1>
<p><br>
<br>
</p>
<p>#解锁11月幸运关键词                  #在玩的游戏 #涂涂假期正在玩的游戏<br>
有且只有这一个哈哈哈哈哈#王者荣耀 #王者荣耀上分</p>
`,r:{minutes:.23,words:70},y:"a",t:"王者荣耀你可得瑟吧😂"},["/posts/沐沐/王者荣耀你可得瑟吧.html","/posts/沐沐/王者荣耀你可得瑟吧.md",":md"]],["v-5f3b6b11","/posts/%E6%B2%90%E6%B2%90/%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%BF%AB%E4%B9%90%E4%B8%8A%E5%88%86%E8%B6%85nice%E6%B8%B8%E6%88%8F%E6%90%AD%E5%AD%90.html",{d:1737800654e3,e:`<h1> 王者荣耀快乐上分超nice游戏搭子</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>我的王者荣耀游戏搭子真的超nice<br>
弟弟拿我最喜欢花海签名带我上分<br>
用云中君的时候给我嘎嘎送红送蓝<br>
对面馋哭了疯狂想打我拿buff哈哈哈哈哈<br>
怕队友坑抢位置还带上他弟弟三排拿星星<br>
本赛季v区王者7颗星本菜鸡心满意足～<br>
（弟弟说来打v区就是为了带我上分）<br>
再往上好难打不知不觉他都荣耀了<br>
不想打娱乐模式，突发奇想去奋战q区，<br>
一年没登陆q区，唯一一个王者也是他带的<br>
（去年上完王者一年没打游戏被弟弟记恨了）<br>
弟弟q区大号等级太高了，根本打不了<br>
于是用小号从黄金陪着我一起上分<br>
一边打一边教我，没做好也不会着急<br>
想打的时候随叫随到还会给我复盘<br>
打得好的时候一直在夸好控好杀好准<br>
操作失误的时候看到说下次要这样这样<br>
我自责没丢好技能会跟我说没事练手<br>
打游戏因为我不喜欢听脏话都不会讲<br>
但是队友太脏气急会让我闭麦他开麦<br>
我被骂了和他弟弟两个人一起帮我怼<br>
以前每天的快乐是和朋友一起打游戏聊天<br>
现在午休晚休下班就会立马上线和他开黑<br>
还会用刘禅辅助我法师教我怎么游走<br>
每个位置都很厉害，射野真的超级强<br>
希望每个人都能遇到一个特别好的游戏搭子！<br>
（没有任何多余无照片无金钱只有游戏开麦）<br>
#王者荣耀 #王者荣耀游戏搭子 #王者荣耀排位 #王者荣耀固玩 #王者荣耀辅助#王者</p>`,r:{minutes:1.79,words:536},y:"a",t:"王者荣耀快乐上分超nice游戏搭子"},["/posts/沐沐/王者荣耀快乐上分超nice游戏搭子.html","/posts/沐沐/王者荣耀快乐上分超nice游戏搭子.md",":md"]],["v-2d0c3bcd","/posts/%E6%B2%90%E6%B2%90/%E7%91%9E%E5%B9%B8%E4%BD%A0%E6%98%AF%E6%87%82%E8%81%94%E5%90%8D%E7%9A%84%E7%9C%9F%E5%8F%AF%E7%88%B1.html",{d:1739615298e3,e:`<h1> 瑞幸你是懂联名的！真可爱～</h1>
<p><br>
<br>
</p>
<p>一杯没有贴纸！！！一杯没有！<br>
我一个人怎么买两杯<br>
热饮不加糖味道还行，可爱就完事<br>
#瑞幸 #瑞幸猫和老鼠 #瑞幸生酪拿铁</p>
`,r:{minutes:.24,words:73},y:"a",t:"瑞幸你是懂联名的！真可爱～"},["/posts/沐沐/瑞幸你是懂联名的真可爱.html","/posts/沐沐/瑞幸你是懂联名的真可爱.md",":md"]],["v-79c4af16","/posts/%E6%B2%90%E6%B2%90/%E7%91%9E%E5%B9%B8%E6%A1%82%E8%8A%B1%E9%BE%99%E4%BA%95%E6%8B%BF%E9%93%81.html",{d:1739615298e3,e:`<h1> 瑞幸桂花龙井拿铁</h1>
<p><br>
<br>
</p>
<p>瑞门永存<br>
瑞幸新口味，想要那个翅膀杯套说外卖才能<br>
但是给了一个粉色的挺好看！<br>
#瑞幸<br>
#瑞幸新品<br>
#咖啡<br>
#每日分享<br>
#打工人</p>
`,r:{minutes:.24,words:72},y:"a",t:"瑞幸桂花龙井拿铁"},["/posts/沐沐/瑞幸桂花龙井拿铁.html","/posts/沐沐/瑞幸桂花龙井拿铁.md",":md"]],["v-af3dd876","/posts/%E6%B2%90%E6%B2%90/%E7%94%B7%E6%9C%8B%E5%8F%8B%E4%BB%8E%E6%8A%95%E5%96%82%E4%B8%80%E5%8F%AA%E5%B0%8F%E7%8C%AA%E5%8F%98%E6%88%90%E4%BA%86%E4%B8%89%E5%8F%AA.html",{d:1739615298e3,e:`<h1> 男朋友从投喂一只小猪变成了三只！</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>从昨天开始每天都在收快递，<br>
今天到家我室友都惊呆啦<br>
然后她们洗完澡我还没拆完～<br>
一边拆一边收拾顺便尝一尝零食，<br>
等我洗完澡发现室友在沙发上互喂零食，<br>
还在说“我觉得这个好吃”“我喜欢这个口味”<br>
我“你俩吃着我对象买的零食点评，我还没说呢”<br>
然后三个人开了男朋友买的Rio开始小酌<br>
又在我的要求下给我对象语音发了谢谢哈哈！<br>
【发现男朋友还挑了很多他们家乡的零食，是他小时候吃的一些零食，说让我尝一下感受他童年爱吃的东西～之前很流行一句话，你的过去我未曾参与，除了聊天分享，线下走过曾经的路，这何尝不是一种方式～】<br>
饮料牛奶酒都整齐摆在柜子里，巧克力放在冰箱，<br>
各种零食客厅放一部分，房间一点点膨化和坚果，<br>
办公室脚下也放了一个零食袋超级开心！！！<br>
都是男朋友给买的嘻嘻～室友也都很快乐🎉<br>
今天也是超级想念和爱我男朋友的一天<br>
#恋爱 #异地恋 #恋爱记录 #甜甜的恋爱 #男朋友 #记录吧就现在 #恋爱日常 #零食 #开心快乐每一天</p>`,r:{minutes:1.31,words:394},y:"a",t:"男朋友从投喂一只小猪变成了三只！"},["/posts/沐沐/男朋友从投喂一只小猪变成了三只.html","/posts/沐沐/男朋友从投喂一只小猪变成了三只.md",":md"]],["v-39007411","/posts/%E6%B2%90%E6%B2%90/%E7%94%B7%E7%94%9F%E7%A9%BF%E6%90%AD%E5%A5%BD%E9%9A%BE%E5%95%8A%E4%B8%91%E7%9A%84%E7%9C%9F%E4%B8%91%E5%A5%BD%E7%9C%8B%E7%9A%84%E7%9C%9F%E5%A5%BD%E7%9C%8B.html",{d:1737800654e3,e:`<h1> 男生穿搭好难啊……丑的真丑，好看的真好看</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>看了一周男生衣服穿搭了，比女生难多了！！！<br>
xhs/dw/tb都在逛，运动品牌+潮牌都库库看，虽然感觉男生可选择的款式其实比女生少很多！上衣（外套+内搭）+裤子，但是真的好难选！<br>
看测评和分享，好看好看，一去店铺看实物图和买家秀，嗯？ 重点是不同身材类型穿起来感觉天差地别，让我无从下手！<br>
不过最近知识库猛猛提升，因为之前我是不爱穿卫衣，现在研究以后，什么克重 含棉量 肩线位置 版型 连帽圆领开衫 风格 色系……打开大门！sorry，第一次了解卫裤，牛牛牛，我说为什么男生那么多束脚裤！直筒裤工装裤休闲裤微喇裤，瞬间感觉还是穿裙子方便我爱裙子！<br>
总之，现在最好的办法是，抓着我男朋友去试衣服，哈哈哈，看看适合什么风格的衣服<br>
#男生穿搭 #秋冬穿搭</p>`,r:{minutes:1.01,words:303},y:"a",t:"男生穿搭好难啊……丑的真丑，好看的真好看"},["/posts/沐沐/男生穿搭好难啊丑的真丑好看的真好看.html","/posts/沐沐/男生穿搭好难啊丑的真丑好看的真好看.md",":md"]],["v-f03e7622","/posts/%E6%B2%90%E6%B2%90/%E7%95%AA%E7%A6%BA%E5%A4%A9%E6%B2%B3%E5%9F%8E%E4%B8%80%E6%97%A9%E6%8E%92%E9%98%9F%E7%9B%9B%E5%86%B5.html",{d:1739615298e3,e:`<h1> 番禺天河城一早排队盛况</h1>
<p><br>
<br>
</p>
<p>#乌萨奇 #chiikawa #名创优品<br>
路过等红绿灯一转头给我看呆了</p>
`,r:{minutes:.16,words:48},y:"a",t:"番禺天河城一早排队盛况"},["/posts/沐沐/番禺天河城一早排队盛况.html","/posts/沐沐/番禺天河城一早排队盛况.md",":md"]],["v-48c69535","/posts/%E6%B2%90%E6%B2%90/%E7%99%BD%E7%9F%B3%E6%B7%B1%E5%A4%9C%E9%A3%9F%E5%A0%82%20%E6%97%A5%E6%96%99%E7%9C%9F%E5%A5%BD%E5%90%83.html",{d:1739615298e3,e:`<h1> 白石深夜食堂 日料真好吃</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>两个人没怎么排队<br>
四个人的排好长<br>
好久没吃日料了<br>
和好姐妹也好长时间没见了<br>
两个人好多话#日料 #姐妹 #白石的深夜食堂</p>
`,r:{minutes:.36,words:107},y:"a",t:"白石深夜食堂 日料真好吃"},["/posts/沐沐/白石深夜食堂 日料真好吃.html","/posts/沐沐/白石深夜食堂 日料真好吃.md",":md"]],["v-49eff157","/posts/%E6%B2%90%E6%B2%90/%E7%9B%90%E5%9F%8E%E4%BD%A0%E5%87%BA%E6%81%AF%E4%BA%86%E5%8F%AA%E6%AD%A4%E9%9D%92%E7%BB%BF.html",{d:1739615298e3,e:`<h1> 盐城！！！你出息了，只此青绿</h1>
<p><br>
<br>
</p>
<p>刷广州深圳佛山的演出<br>
就打开只此青绿深圳场看看<br>
结果发现有盐城站<br>
我惊的下巴都掉了哈哈哈，牛哇<br>
我不在家你给我搞这个是吧，揍你！<br>
看了看机票，还是附近吧😐#舞剧只此青绿 #舞剧</p>
`,r:{minutes:.33,words:100},y:"a",t:"盐城！！！你出息了，只此青绿"},["/posts/沐沐/盐城你出息了只此青绿.html","/posts/沐沐/盐城你出息了只此青绿.md",":md"]],["v-89239f76","/posts/%E6%B2%90%E6%B2%90/%E7%9D%A1%E9%86%92%E4%BB%A5%E5%90%8E%E6%80%8E%E4%B9%88%E6%A0%B7%E6%89%8D%E8%83%BD%E5%A4%8D%E7%9D%A1%E5%91%80.html",{d:1737800654e3,e:`<h1> 睡醒以后怎么样才能复睡呀！</h1>
<p><br>
<br>
</p>
<p>睡一觉醒来难以入眠了……<br>
已经翻来覆去滚了一个多小时了<br>
马上四点了，明天还要上班，完全睡不着，<br>
换了好几个睡觉姿势都没办法入睡</p>
<p>打工人已经碎了</p>
`,r:{minutes:.3,words:89},y:"a",t:"睡醒以后怎么样才能复睡呀！"},["/posts/沐沐/睡醒以后怎么样才能复睡呀.html","/posts/沐沐/睡醒以后怎么样才能复睡呀.md",":md"]],["v-f49a64f8","/posts/%E6%B2%90%E6%B2%90/%E7%A7%8B%E5%86%AC%E4%BB%BD%E7%9A%84%E6%96%B0%E7%BE%8E%E7%94%B2%E7%AE%80%E7%AE%80%E5%8D%95%E5%8D%95.html",{d:1739615298e3,e:`<h1> 秋冬份的新美甲！简简单单</h1>
<p><br>
<br>
</p>
<p>哈哈哈小姐姐美甲师不在店里做了<br>
我俩还开了个钟点房做指甲<br>
太好笑了哈哈哈～颜色是琉璃色<br>
#美甲 #秋冬美甲 #秋冬显白美甲 #高级美甲</p>
`,r:{minutes:.27,words:82},y:"a",t:"秋冬份的新美甲！简简单单"},["/posts/沐沐/秋冬份的新美甲简简单单.html","/posts/沐沐/秋冬份的新美甲简简单单.md",":md"]],["v-b3818dfc","/posts/%E6%B2%90%E6%B2%90/%E7%B4%AB%E5%BF%83%E4%B9%8B%E6%81%8B%E5%A5%BD%E5%A5%BD%E7%9C%8B.html",{d:1739615298e3,e:`<h1> 紫心之恋好好看😻</h1>
<p><br>
<br>
<br>
<br>
<br>
</p>
<p>好看好看！先婚后爱好甜啊军官<br>
#尼古拉斯加利齐纳 好帅啊，造型盘顺<br>
虽然我心里就是星条红的王子哈哈哈～<br>
双向救赎，彼此真诚，逐渐信任相爱！<br>
1.5倍速看完了，（俗套但感人）两个人颜都绝了！<br>
#紫心之恋 #网飞 #爱情电影</p>
`,r:{minutes:.41,words:123},y:"a",t:"紫心之恋好好看😻"},["/posts/沐沐/紫心之恋好好看.html","/posts/沐沐/紫心之恋好好看.md",":md"]],["v-450e5ed5","/posts/%E6%B2%90%E6%B2%90/%E7%BA%AF%E7%88%B1%E6%88%98%E5%A3%AB%E5%BA%94%E5%A3%B0%E5%80%92%E4%B8%8B.html",{d:1739615298e3,e:`<h1> 纯爱战士应声倒下！</h1>
<p><br>
<br>
<br>
</p>
<p>我疯啦！磕疯了后劲太大了！<br>
他们将爱意隐藏在黑夜，在众多雕塑中，<br>
他们将爱意诉说在白日，在万千目光下。<br>
他为了他公开演讲抗击满怀恶意的谣言，<br>
他为了他抵抗传统王室的面子改写历史。<br>
他把自己的起点最宝贵的钥匙赠予他，<br>
他把自己尊贵王室象征的尾戒托付他。<br>
他带他走出灯塔感受从未拥有过的生活，<br>
他带他了解自己剖出最隐秘的内心深处。<br>
他叫他“baby”，他说“missing you”，<br>
他为他一句“hurry”穿越一整个大西洋！<br>
他说“I love you”，他回应“I love you more”<br>
他在全国人民面前叫了最爱的人全名。<br>
没有谁不会心动吧Alex和Henry太配！<br>
#星条红与皇室蓝 #NicholasGalitzine #TaylorZakharPerez #电影推荐 #电影台词</p>`,r:{minutes:.84,words:251},y:"a",t:"纯爱战士应声倒下！"},["/posts/沐沐/纯爱战士应声倒下.html","/posts/沐沐/纯爱战士应声倒下.md",":md"]],["v-2b924bd4","/posts/%E6%B2%90%E6%B2%90/%E7%BB%88%E4%BA%8E%E4%B8%8A%E6%97%A0%E5%8F%8C%E5%95%A6%E4%B8%8B%E7%8F%AD%E8%89%B0%E8%8B%A6.html",{d:1737800654e3,e:`<h1> 终于上无双啦！下班！艰苦</h1>
<p><br>
<br>
</p>
<p>太难打了，排位匹配不到正常的队友<br>
吕布原地跳大原地闪现，看懵逼了<br>
孙膑+澜双排根本不管射手死活……<br>
前期中路也不帮我，辅助看蓝三分钟真贴心！<br>
瑶开局跟曹操对抗路，双排形影不离，<br>
海月次次拉对面芈月，跟吕布双双赴死<sup>-</sup><br>
还有这匹配，到底谁在赢啊谁在玩啊<br>
朵莉亚都能mvp，我练西施队友不知道在干嘛<br>
能不能给我匹配一些正常的队友，拜托了<br>
#王者上分 #王者荣耀上分 #王者荣耀排位</p>
`,r:{minutes:.61,words:182},y:"a",t:"终于上无双啦！下班！艰苦"},["/posts/沐沐/终于上无双啦下班艰苦.html","/posts/沐沐/终于上无双啦下班艰苦.md",":md"]],["v-46d3234f","/posts/%E6%B2%90%E6%B2%90/%E8%8E%B1%E5%BE%B7%E6%8B%89%E6%88%91%E6%9D%A5%E4%BA%86%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%84%91%E8%A2%8B%E5%BC%80%E5%BF%83.html",{d:1739615298e3,e:`<h1> 莱德拉我来了！巧克力脑袋开心</h1>
<p><br>
<br>
<br>
</p>
<p>#想记录下此刻 #巧克力控 #巧克力 #Laderach莱德拉巧克力 #莱德拉<br>
感觉我可爱的同事请我吃莱德拉！！！<br>
一小盒的快乐满足😌好吃好吃～～<br>
排队进去，一次只能进十个人江苏无锡店</p>
`,r:{minutes:.33,words:99},y:"a",t:"莱德拉我来了！巧克力脑袋开心"},["/posts/沐沐/莱德拉我来了巧克力脑袋开心.html","/posts/沐沐/莱德拉我来了巧克力脑袋开心.md",":md"]],["v-bf39abac","/posts/%E6%B2%90%E6%B2%90/%E8%99%BD%E7%84%B6%E6%AD%A3%E6%96%B9%E8%BE%93%E4%BA%86%E4%BD%86%E6%98%AF%E7%BD%97%E6%B7%BC%E5%AD%A6%E9%95%BF%E5%A4%AA%E5%BC%BA%E4%BA%86.html",{d:1739615298e3,e:`<h1> 虽然正方输了！但是罗淼学长太强了</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>太快乐了～罗淼的质询和对辩一如既往的强<br>
詹青云+庞颖 vs 席瑞+罗淼，超有看点<br>
我就是一个快乐的小女生嘿嘿！！！<br>
花花席瑞今天太好看惹，这场期待值拉满！</p>
<p>#华语辩论老友赛 #辩论赛 #席瑞 #罗淼 #詹青云</p>
`,r:{minutes:.43,words:129},y:"a",t:"虽然正方输了！但是罗淼学长太强了"},["/posts/沐沐/虽然正方输了但是罗淼学长太强了.html","/posts/沐沐/虽然正方输了但是罗淼学长太强了.md",":md"]],["v-3f0b059b","/posts/%E6%B2%90%E6%B2%90/%E8%A7%82%E5%85%89%E7%94%B5%E6%A2%AF%E4%B8%8A%E7%9A%84%E7%BB%B4%E6%B8%AF%E6%99%AF%E8%89%B2.html",{d:1739615298e3,e:`<h1> 观光电梯上的维港景色</h1>
<p>呜呜呜 去面试看到<br>
因为上下两次拍照被大叔说了几句<br>
然后我就走了哈哈哈哈</p>
`,r:{minutes:.14,words:43},y:"a",t:"观光电梯上的维港景色"},["/posts/沐沐/观光电梯上的维港景色.html","/posts/沐沐/观光电梯上的维港景色.md",":md"]],["v-3c0dd36e","/posts/%E6%B2%90%E6%B2%90/%E8%AE%B0%E5%BD%95%E4%B8%80%E4%B8%8B%E5%8B%87%E6%95%A2Heidi%E7%9A%84%E4%B8%80%E5%A4%A9-Part%20one.html",{d:1739615298e3,e:`<h1> 记录一下勇敢Heidi的一天-Part one</h1>
<p><br>
<br>
<br>
<br>
</p>
<p>事发：早上起床就感觉头疼不舒服，昨天开始就有一些。走到公司楼下的时候被这种坏路绊倒了，“砰“得一声倒地，看看腿还好，再一看手，蒙了血流成河，我室友也吓傻了，让我立马把手抬起来，地上都是我的血迹。<br>
【搞笑事件1:我俩此刻说了一句，先去打卡再去包扎】【搞笑事件2:拿起手机拍视频发给对象】【搞笑事件3:立马给领导说明情况】</p>
<p>经过1:打完卡以后就去旁边的一个健康服务站小医院去清洗伤口，生理盐水+碘伏，手掌胳膊和腿，一个护士和一个医生在搞，另一个室友也来了，两个人陪我。本来很坚强，看到室友担心的目光，一下子就落泪了～她们两个看我疼得脸色苍白，让我直接请假，摇头。<br>
【搞笑事件4:我发现自己打卡没打上，和护士说暂停一下再去打一次】【搞笑事件5:同事让我补卡，我一本正经回复会被骂】【搞笑事件6:大家都劝我请假，我还是要处理完上楼工作】</p>`,r:{minutes:2.85,words:855},y:"a",t:"记录一下勇敢Heidi的一天-Part one"},["/posts/沐沐/记录一下勇敢Heidi的一天-Part one.html","/posts/沐沐/记录一下勇敢Heidi的一天-Part one.md",":md"]],["v-b708cd52","/posts/%E6%B2%90%E6%B2%90/%E8%AE%B0%E5%BD%95%E5%8B%87%E6%95%A2Heidi%E7%9A%84%E4%B8%80%E5%A4%A9Part%20Two.html",{d:1739615298e3,e:`<h1> 记录勇敢Heidi的一天—Part Two</h1>
<p><br>
<br>
<br>
</p>
<p>经过5:拿了片发现我的爪子还挺好看，医生看了一下说没骨折没大问题让我走。我？？？不要吃药不要开药吗，他说自然痊愈，我就走了。走到门口还是不放心，又去问了一些问题 得到以下答复:(1)不要吃药忌口就行(2)不要碰生水(3)至少休养10天(4)2天换一次纱布结疤就可以不用了(5)可能会有疤痕(6)这小伤口还不能长好，那就是免疫系统问题了。总之，在医生眼里就云淡风轻，但是作为患者的我也得到了治愈和宽慰，变得淡定很多。<br>
【搞笑事件12:一个小哥装修的时候被铁皮刮伤看急诊，2个人陪着，他还在玩手机，我也太不从容了吧】【搞笑事件13:打车回公司发现手链戒指落在DR拍片那边，又回去拿还好找到啦】</p>`,r:{minutes:2.84,words:851},y:"a",t:"记录勇敢Heidi的一天—Part Two"},["/posts/沐沐/记录勇敢Heidi的一天Part Two.html","/posts/沐沐/记录勇敢Heidi的一天Part Two.md",":md"]],["v-2c8bcb29","/posts/%E6%B2%90%E6%B2%90/%E8%B0%81%E8%83%BD%E6%83%B3%E5%88%B0%E6%98%AF%E6%97%A9%E9%A4%90%E4%BA%92%E8%81%94%E7%BD%91%E4%BA%BA%E6%9C%80%E5%90%8E%E7%9A%84%E5%80%94%E5%BC%BA.html",{d:1737800654e3,e:`<h1> 谁能想到是早餐！互联网人最后的倔强～</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>凉拌菜YYDS，蔬菜沙拉也是真好吃！<br>
灵魂料汁or烘焙芝麻酱都很赞～<br>
就是刀工不熟练，每次都要半个小时<br>
虽然上班迟但是早餐一定要吃！嘻嘻～<br>
买了吐司、培根、烤肠、芝士、沙拉酱，<br>
准备开始我的空气炸锅三明治🥪系列<br>
#今天的早餐长这样 #空气炸锅炸一切 #凉拌菜 #沙拉</p>
`,r:{minutes:.52,words:155},y:"a",t:"谁能想到是早餐！互联网人最后的倔强～"},["/posts/沐沐/谁能想到是早餐互联网人最后的倔强.html","/posts/沐沐/谁能想到是早餐互联网人最后的倔强.md",":md"]],["v-15c22a10","/posts/%E6%B2%90%E6%B2%90/%E8%B0%88%E6%81%8B%E7%88%B1%E5%A5%BD%E5%B9%B8%E7%A6%8F%E8%A2%AB%E7%88%B1%E7%9A%84%E6%97%B6%E5%80%99%E4%BA%BA%E7%9C%9F%E7%9A%84%E4%BC%9A%E9%97%AA%E8%80%80.html",{d:1737800654e3,e:`<h1> 谈恋爱好幸福！被爱的时候人真的会闪耀～</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>谈恋爱真的真的太美好了<br>
谈甜甜的恋爱真的真的太幸福了<br>
被爱的时候能感受到，根本就不用去找细节证明！<br>
是谁谈到一段健康且真诚的感情～是我呀<br>
不知不觉和男朋友已经打了半年的电话/视频，<br>
除了加班/回家/见面，几乎每天晚上都会聊2h起。<br>
家人们，咱就是说完全不腻！完全不会觉得没话说<br>
鹅子！打钱！都用微信语音视频或者是腾讯会议投屏～做什么不重要，重要的是陪伴是我们在一起！好爱他！<br>
————————————————————————————<br>
今天浅浅记录一下日常用腾讯会议我们一般做什么<br>
真的真的真的非常感谢我男朋友想办法哄我开心～<br>
基本都是他提前准备的一些小惊喜，甚至自己研究设计！</p>`,r:{minutes:2.91,words:872},y:"a",t:"谈恋爱好幸福！被爱的时候人真的会闪耀～"},["/posts/沐沐/谈恋爱好幸福被爱的时候人真的会闪耀.html","/posts/沐沐/谈恋爱好幸福被爱的时候人真的会闪耀.md",":md"]],["v-7540e5f4","/posts/%E6%B2%90%E6%B2%90/%E8%B4%BE%E8%AF%A9xMr%E5%B2%91%E7%88%B1%E6%83%85%E6%A0%87%E4%BB%B7%E6%88%8F%E7%A0%81%E6%96%B0%E6%AD%8C.html",{d:1737800654e3,e:`<h1> 贾诩xMr.岑《爱情标价戏码》！新歌！</h1>
<p>这是什么神仙合唱！！！岑甜甜和贾甜甜的原创主题曲合唱一头母猪广播剧的主役版～超级可爱的广播剧，推荐推荐！#cv岑先生 #cv贾诩 #广播剧</p>
`,r:{minutes:.23,words:68},y:"a",t:"贾诩xMr.岑《爱情标价戏码》！新歌！"},["/posts/沐沐/贾诩xMr岑爱情标价戏码新歌.html","/posts/沐沐/贾诩xMr岑爱情标价戏码新歌.md",":md"]],["v-2246859a","/posts/%E6%B2%90%E6%B2%90/%E8%B6%8A%E7%AE%80%E5%8D%95%E7%9A%84%E6%AC%BE%E8%B6%8A%E5%A5%BD%E7%9C%8B%E5%95%8A%E7%A7%8B%E6%97%A5%E7%BE%8E%E7%94%B2.html",{d:1737800654e3,e:`<h1> 越简单的款越好看啊！秋日美甲</h1>
<p><br>
<br>
<br>
</p>
<p>迎接初秋！！！<br>
秋日显白美甲💅琥珀色超好看～<br>
#超显白美甲<br>
#美甲分享<br>
#气质美甲<br>
#琥珀色美甲<br>
#秋冬美甲<br>
#晕染美甲</p>
`,r:{minutes:.25,words:75},y:"a",t:"越简单的款越好看啊！秋日美甲"},["/posts/沐沐/越简单的款越好看啊秋日美甲.html","/posts/沐沐/越简单的款越好看啊秋日美甲.md",":md"]],["v-a002a826","/posts/%E6%B2%90%E6%B2%90/%E8%BF%8E%E6%8E%A5%E5%86%AC%E5%A4%A9%E7%AC%AC%E4%B8%80%E6%AC%BE%E7%BE%8E%E7%94%B2.html",{d:1737800654e3,e:`<h1> 迎接冬天第一款美甲</h1>
<p><br>
<br>
</p>
<p>准备好迎接冬天啦，你呢#美甲 #冬天 #美甲显白</p>
`,r:{minutes:.14,words:42},y:"a",t:"迎接冬天第一款美甲"},["/posts/沐沐/迎接冬天第一款美甲.html","/posts/沐沐/迎接冬天第一款美甲.md",":md"]],["v-6ac9c13e","/posts/%E6%B2%90%E6%B2%90/%E8%BF%99%E4%B8%8D%E5%BF%AB%E4%B9%90%E5%B0%B1%E6%9D%A5%E4%BA%86.html",{d:1737800654e3,e:`<h1> 这不快乐就来了～</h1>
<p><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</p>
<p>第一首必须是我爱的花海！！！<br>
披荆斩棘最近的爱，我生哥！<br>
王者荣耀的百战成诗怎么能没有<br>
腐剧的主题曲会唱的不会唱的都安排<br>
如何永不失联的爱唯一了解的人水蓝色情人<br>
我朋友点了一堆说唱x笑死我了………<br>
然后我还是一边处理工作一边唱歌🎤<br>
#KTV #唱歌 #披荆斩棘 #陈楚生 #0713 #王者荣耀<br>
两个人的KTV好处就是一人一个麦不用抢～</p>
`,r:{minutes:.61,words:184},y:"a",t:"这不快乐就来了～"},["/posts/沐沐/这不快乐就来了.html","/posts/沐沐/这不快乐就来了.md",":md"]],["v-a67ba00a","/posts/%E6%B2%90%E6%B2%90/%E8%BF%99%E4%B8%AA%E7%82%B9%E4%BD%A0%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9C%A8%E7%9C%8B%E6%89%8B%E6%9C%BA.html",{d:1739615298e3,e:`<h1> 这个点你为什么在看手机</h1>
<p><br>
<br>
</p>
<p>因为刚下班！！！！！<br>
家人们，是刚<br>
#打工人 #打工人日常 #打工人精神状态 #打工人日记 #加班</p>
`,r:{minutes:.19,words:58},y:"a",t:"这个点你为什么在看手机"},["/posts/沐沐/这个点你为什么在看手机.html","/posts/沐沐/这个点你为什么在看手机.md",":md"]],["v-656280de","/posts/%E6%B2%90%E6%B2%90/%E8%BF%99%E5%B9%B4%E5%A4%B4%E5%B7%A5%E4%BD%9C%E4%B8%8A%E8%BF%98%E8%83%BD%E9%81%87%E5%88%B0%E6%99%AE%E4%BF%A1%E7%94%B7%E7%BB%9D.html",{d:1737800654e3,e:`<h1> 这年头工作上还能遇到普信男…绝</h1>
<p><br>
<br>
</p>
<p>遇到一傻x男的<br>
工作上跟我一女同事发了点口角<br>
然后来找我对接谈事情第一句话<br>
“你们女生不讲武德”</p>
<p>我什么都还没说给我扣性别帽子？<br>
直接开喷，这种人见一个骂一个<br>
骂完移除拉黑他又去找我那女同事<br>
“女生都是水做的 惹不起”<br>
同事：“请你不要把男生女生挂嘴上，做生意跟性别有毛关系”<br>
不知道哪里来的普信男，自以为是…<br>
#职场 #普信男 #性别歧视 #工作吐槽</p>
`,r:{minutes:.58,words:175},y:"a",t:"这年头工作上还能遇到普信男…绝"},["/posts/沐沐/这年头工作上还能遇到普信男绝.html","/posts/沐沐/这年头工作上还能遇到普信男绝.md",":md"]],["v-2cef7e20","/posts/%E6%B2%90%E6%B2%90/%E9%80%9A%E5%AE%B5%E5%8A%A0%E7%8F%AD%E7%9A%84%E4%B8%80%E5%A4%A9.html",{d:1737800654e3,e:`<h1> 通宵加班的一天</h1>
<p><br>
<br>
<br>
</p>
<p>#打工人的日常 #加班 #上班日常<br>
遇到大问题 🙋还好技术大佬给力<br>
夜里随时待命，半夜入会解决！<br>
真的太可靠了，一直在倒计时～<br>
还好解决了，敲代码的声音是天籁！</p>
`,r:{minutes:.3,words:90},y:"a",t:"通宵加班的一天"},["/posts/沐沐/通宵加班的一天.html","/posts/沐沐/通宵加班的一天.md",":md"]],["v-8bf0b2b6","/posts/%E6%B2%90%E6%B2%90/%E9%9A%8F%E7%BC%98%E6%94%B6316SHINee%E9%A6%99%E6%B8%AF.html",{d:1739615298e3,e:`<h1> 随缘收3.16SHINee香港🎫</h1>
<p><br>
<br>
</p>
<p>这周刚好双休，看到有闪的香港Con<br>
随缘收1099，899，699坐票，打折最好<br>
站票折扣价低可以考虑看小崔老师<br>
实在是年纪上来了不想站了哈哈哈<br>
随缘收，不接收溢价，3.16真的好多演出<br>
#SHINee #shinee香港 #shinee #shinee演唱会 #崔珉豪</p>
`,r:{minutes:.35,words:104},y:"a",t:"随缘收3.16SHINee香港🎫"},["/posts/沐沐/随缘收316SHINee香港.html","/posts/沐沐/随缘收316SHINee香港.md",":md"]],["v-d3f65882","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E4%B8%89%E7%BB%B4%E5%BB%BA%E6%A8%A1.html",{d:17553171e5,e:`<h1> 三维建模</h1>
<h2> 三维建模详解</h2>
<p><strong>1. 概述</strong></p>
<p>三维建模是指利用计算机软件在虚拟三维空间中创建具有长、宽、高三个维度属性的数字模型的过程。这些模型可以用于各种领域，例如：</p>
<ul>
<li><strong>产品设计:</strong>  设计汽车、手机、家具等产品的外观和结构。</li>
<li><strong>影视动画:</strong>  创建电影、动画、游戏中的角色、场景和特效。</li>
<li><strong>建筑设计:</strong>  设计建筑物的外观、结构和内部布局。</li>
<li><strong>科学研究:</strong>  模拟分子结构、天体运动等科学现象。</li>
</ul>`,r:{minutes:3.07,words:922},y:"a",t:"三维建模"},["/posts/测绘_此目录文章为AI生成/三维建模.html","/posts/测绘_此目录文章为AI生成/三维建模.md",":md"]],["v-61015d2d","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E4%B8%89%E8%A7%92%E6%B5%8B%E9%87%8F.html",{d:17553171e5,e:`<h1> 三角测量</h1>
<h2> 三角测量技术文档</h2>
<p><strong>1. 概述</strong></p>
<p>三角测量是一种利用几何原理，通过测量已知基线长度及两个角度，来确定目标点位置的技术。它广泛应用于测绘、导航、机器人、计算机视觉等领域。</p>
<p><strong>2. 基本原理</strong></p>
<p>三角测量基于三角形边角关系，其基本原理如下：</p>
<ul>
<li><strong>已知条件:</strong>
<ul>
<li>基线长度 (AB)</li>
<li>观测点 A 到目标点 C 的方位角 (α)</li>
<li>观测点 B 到目标点 C 的方位角 (β)</li>
</ul>
</li>
<li><strong>求解目标:</strong>
<ul>
<li>目标点 C 的坐标 (x, y)</li>
</ul>
</li>
</ul>`,r:{minutes:1.92,words:576},y:"a",t:"三角测量"},["/posts/测绘_此目录文章为AI生成/三角测量.html","/posts/测绘_此目录文章为AI生成/三角测量.md",":md"]],["v-fac6c888","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%85%A8%E7%90%83%E5%AE%9A%E4%BD%8D%E7%B3%BB%E7%BB%9F%EF%BC%88GPS%EF%BC%89.html",{d:17553171e5,e:`<h1> 全球定位系统（GPS）</h1>
<h1> 全球定位系统（GPS）技术文档</h1>
<h2> 1. 概述</h2>
<p>全球定位系统（Global Positioning System，简称GPS）是一种基于卫星的导航系统，能够为用户提供全球范围内的精确位置、速度和时间信息。GPS由美国国防部开发并维护，最初用于军事用途，现已广泛应用于民用领域，如导航、测绘、交通管理、农业、气象等。</p>
<h2> 2. 系统组成</h2>
<p>GPS系统主要由三大部分组成：空间段、控制段和用户段。</p>
<h3> 2.1 空间段（Space Segment）</h3>
<p>空间段由一组GPS卫星组成，这些卫星在地球上空约20,200公里的中地球轨道（MEO）上运行。GPS卫星星座通常由24颗卫星组成，分布在6个轨道平面上，每个轨道平面有4颗卫星。这种分布确保了地球上任何地点、任何时间都能接收到至少4颗卫星的信号。</p>`,r:{minutes:3.75,words:1124},y:"a",t:"全球定位系统（GPS）"},["/posts/测绘_此目录文章为AI生成/全球定位系统（GPS）.html","/posts/测绘_此目录文章为AI生成/全球定位系统（GPS）.md",":md"]],["v-4586dce6","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%85%A8%E7%AB%99%E4%BB%AA%E6%B5%8B%E9%87%8F.html",{d:17553171e5,e:`<h1> 全站仪测量</h1>
<h2> 全站仪测量技术文档</h2>
<h3> 1. 概述</h3>
<p>全站仪（Total Station）是一种集电子测角、电子测距、数据存储和处理等功能于一体的现代化测量仪器。它能够同时测量水平角、垂直角和斜距，并通过内置微处理器自动计算平距、高差、坐标等数据，广泛应用于地形测量、工程放样、变形监测等领域。</p>
<h3> 2. 仪器结构</h3>
<p>全站仪主要由以下部分组成：</p>
<ul>
<li><strong>望远镜</strong>: 用于瞄准目标，通常配备有十字丝和调焦装置。</li>
<li><strong>水平度盘和垂直度盘</strong>: 分别用于测量水平角和垂直角，采用光电编码器或光栅盘进行角度测量。</li>
<li><strong>测距系统</strong>: 采用相位法或脉冲法测量仪器与目标之间的斜距。</li>
<li><strong>微处理器</strong>: 负责数据采集、计算、存储和显示。</li>
<li><strong>键盘和显示屏</strong>: 用于输入参数、设置测量模式、显示测量结果。</li>
<li><strong>数据存储设备</strong>: 用于存储测量数据，可以是内置存储器或外接存储卡。</li>
<li><strong>基座和脚架</strong>: 用于支撑和整平仪器。</li>
</ul>`,r:{minutes:4.1,words:1230},y:"a",t:"全站仪测量"},["/posts/测绘_此目录文章为AI生成/全站仪测量.html","/posts/测绘_此目录文章为AI生成/全站仪测量.md",":md"]],["v-0791f4a4","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%8D%AB%E6%98%9F%E5%BD%B1%E5%83%8F%E5%A4%84%E7%90%86.html",{d:17553171e5,e:`<h1> 卫星影像处理</h1>
<h2> 卫星影像处理技术文档</h2>
<h3> 1. 概述</h3>
<p>卫星影像处理是指利用计算机技术对卫星获取的遥感影像数据进行处理和分析，以提取有用信息的过程。其应用领域广泛，包括但不限于：</p>
<ul>
<li><strong>资源调查:</strong> 土地利用、森林资源、水资源等</li>
<li><strong>环境监测:</strong> 大气污染、水污染、生态变化等</li>
<li><strong>灾害评估:</strong> 地震、洪水、火灾等</li>
<li><strong>城市规划:</strong> 城市扩张、交通规划等</li>
<li><strong>国防军事:</strong> 目标识别、战场环境分析等</li>
</ul>`,r:{minutes:3.5,words:1049},y:"a",t:"卫星影像处理"},["/posts/测绘_此目录文章为AI生成/卫星影像处理.html","/posts/测绘_此目录文章为AI生成/卫星影像处理.md",":md"]],["v-750d807f","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%8F%98%E5%BD%A2%E7%9B%91%E6%B5%8B.html",{d:17553171e5,e:`<h1> 变形监测</h1>
<h2> 变形监测技术文档</h2>
<p><strong>1. 概述</strong></p>
<p>变形监测是指通过测量和分析建筑物、构筑物或其他工程结构在荷载、环境等因素作用下的变形情况，评估其安全性和稳定性，并为工程设计和施工提供依据的技术手段。</p>
<p><strong>2. 监测目的</strong></p>
<ul>
<li><strong>评估结构安全性和稳定性:</strong> 通过监测结构变形，判断其是否处于安全范围内，及时发现潜在安全隐患，防止事故发生。</li>
<li><strong>验证设计理论和施工质量:</strong> 将监测结果与设计理论值和施工规范进行对比，验证设计方案的合理性和施工质量。</li>
<li><strong>指导工程设计和施工:</strong> 根据监测结果，优化设计方案，调整施工工艺，确保工程质量和安全。</li>
<li><strong>积累工程经验:</strong> 为类似工程的设计和施工提供参考依据。</li>
</ul>`,r:{minutes:4.25,words:1274},y:"a",t:"变形监测"},["/posts/测绘_此目录文章为AI生成/变形监测.html","/posts/测绘_此目录文章为AI生成/变形监测.md",":md"]],["v-bd47f06e","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%9C%B0%E4%B8%8B%E7%AE%A1%E7%BA%BF%E6%8E%A2%E6%B5%8B.html",{d:17553171e5,e:`<h1> 地下管线探测</h1>
<h1> 地下管线探测技术文档</h1>
<h2> 目录</h2>
<ol>
<li>引言</li>
<li>地下管线探测的基本原理</li>
<li>探测设备与技术</li>
<li>探测方法与步骤</li>
<li>数据处理与分析</li>
<li>应用场景与案例分析</li>
<li>结论与展望</li>
</ol>
<h2> 1. 引言</h2>
<p>地下管线是城市基础设施的重要组成部分，包括供水、排水、燃气、电力、通信等各类管线。随着城市化进程的加快，地下管线的数量和复杂性不断增加，因此，准确、高效地探测地下管线对于城市规划、建设和管理具有重要意义。本文旨在详细解释地下管线探测的基本原理、设备、方法、数据处理及其应用。</p>`,r:{minutes:4.58,words:1375},y:"a",t:"地下管线探测"},["/posts/测绘_此目录文章为AI生成/地下管线探测.html","/posts/测绘_此目录文章为AI生成/地下管线探测.md",":md"]],["v-168f6cf5","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%9C%B0%E5%9B%BE%E6%8A%95%E5%BD%B1.html",{d:17553171e5,e:`<h1> 地图投影</h1>
<h2> 地图投影详解</h2>
<p><strong>1. 概述</strong></p>
<p>地图投影是将地球椭球体表面上的点、线、面投影到平面上的数学方法。由于地球是一个三维的椭球体，而地图是二维的平面，因此在进行地图投影时，必然会产生变形。地图投影的目标是尽可能减少变形，并根据不同的应用需求，保留特定的几何特性。</p>
<p><strong>2. 投影分类</strong></p>
<p>地图投影可以根据不同的标准进行分类，常见的分类方法包括：</p>
<ul>
<li><strong>按投影面分类:</strong>
<ul>
<li><strong>圆柱投影:</strong> 将地球表面投影到圆柱面上，然后将圆柱面展开成平面。例如，墨卡托投影。</li>
<li><strong>圆锥投影:</strong> 将地球表面投影到圆锥面上，然后将圆锥面展开成平面。例如，兰勃特等角圆锥投影。</li>
<li><strong>方位投影:</strong> 将地球表面投影到与地球表面相切的平面上。例如，球心投影。</li>
</ul>
</li>
<li><strong>按投影性质分类:</strong>
<ul>
<li><strong>等角投影:</strong> 保持投影前后角度不变，即投影后任意两条相交线段的夹角与投影前一致。例如，墨卡托投影。</li>
<li><strong>等积投影:</strong> 保持投影前后面积不变，即投影后任意区域的面积与投影前一致。例如，阿尔伯斯等积投影。</li>
<li><strong>等距投影:</strong> 保持投影前后特定方向上的距离不变。例如，等距方位投影。</li>
<li><strong>任意投影:</strong> 不保持上述任何性质的投影，通常用于平衡各种变形。例如，罗宾逊投影。</li>
</ul>
</li>
<li><strong>按投影中心分类:</strong>
<ul>
<li><strong>正轴投影:</strong> 投影面与地轴垂直。</li>
<li><strong>横轴投影:</strong> 投影面与地轴平行。</li>
<li><strong>斜轴投影:</strong> 投影面与地轴斜交。</li>
</ul>
</li>
</ul>`,r:{minutes:3.31,words:993},y:"a",t:"地图投影"},["/posts/测绘_此目录文章为AI生成/地图投影.html","/posts/测绘_此目录文章为AI生成/地图投影.md",":md"]],["v-4e2ba3b9","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%9C%B0%E7%90%86%E4%BF%A1%E6%81%AF%E7%B3%BB%E7%BB%9F%EF%BC%88GIS%EF%BC%89.html",{d:17553171e5,e:`<h1> 地理信息系统（GIS）</h1>
<h2> 地理信息系统 (GIS) 技术文档</h2>
<p><strong>1. 概述</strong></p>
<p>地理信息系统 (Geographic Information System, GIS) 是一种用于采集、存储、管理、分析、展示地理空间数据的计算机系统。它将地理位置信息与属性信息相结合，帮助用户更好地理解空间关系、模式和趋势，从而为决策提供支持。</p>
<p><strong>2. 核心概念</strong></p>
<ul>
<li><strong>地理空间数据:</strong> 描述地球表面要素位置、形状、大小及其相互关系的数据，包括矢量数据和栅格数据两种主要类型。
<ul>
<li><strong>矢量数据:</strong> 用点、线、面等几何图形表示地理要素，例如道路、建筑物、行政边界等。</li>
<li><strong>栅格数据:</strong> 用像元阵列表示地理要素，每个像元代表一个区域并存储该区域的属性值，例如卫星影像、数字高程模型等。</li>
</ul>
</li>
<li><strong>属性数据:</strong> 描述地理要素特征的数据，例如道路名称、建筑物高度、人口数量等。</li>
<li><strong>空间关系:</strong> 地理要素之间的位置关系，例如相邻、包含、相交等。</li>
<li><strong>空间分析:</strong> 利用 GIS 工具对地理空间数据进行处理和分析，例如缓冲区分析、叠加分析、网络分析等。</li>
</ul>`,r:{minutes:3.28,words:983},y:"a",t:"地理信息系统（GIS）"},["/posts/测绘_此目录文章为AI生成/地理信息系统（GIS）.html","/posts/测绘_此目录文章为AI生成/地理信息系统（GIS）.md",":md"]],["v-3aa5140e","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%9C%B0%E7%B1%8D%E6%B5%8B%E9%87%8F.html",{d:17553171e5,e:`<h1> 地籍测量</h1>
<h2> 地籍测量技术文档</h2>
<p><strong>1. 概述</strong></p>
<p>地籍测量是获取和表达土地及其附着物的权属、位置、形状、面积、用途等信息的测量工作。它是土地管理的基础，为土地登记、土地税收、土地利用规划等提供数据支持。</p>
<p><strong>2. 测量内容</strong></p>
<p>地籍测量主要包括以下内容：</p>
<ul>
<li><strong>权属调查:</strong> 确定土地及其附着物的权属人、权属性质、权属来源等信息。</li>
<li><strong>界址测量:</strong> 测定土地及其附着物的界址点、界址线，并绘制地籍图。</li>
<li><strong>面积测算:</strong> 计算土地及其附着物的面积。</li>
<li><strong>地籍图测绘:</strong> 将权属调查和界址测量的结果绘制成地籍图，并标注相关信息。</li>
</ul>`,r:{minutes:2.74,words:822},y:"a",t:"地籍测量"},["/posts/测绘_此目录文章为AI生成/地籍测量.html","/posts/测绘_此目录文章为AI生成/地籍测量.md",":md"]],["v-bc0cc008","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%9D%90%E6%A0%87%E8%BD%AC%E6%8D%A2.html",{d:17553171e5,e:`<h1> 坐标转换</h1>
<h2> 坐标转换详解</h2>
<h3> 1. 概述</h3>
<p>坐标转换是指将点或物体的位置从一种坐标系表示转换为另一种坐标系表示的过程。在计算机图形学、地理信息系统、机器人学等领域，坐标转换是基础且重要的操作。</p>
<h3> 2. 坐标系</h3>
<h4> 2.1 坐标系定义</h4>
<p>坐标系是用来确定点或物体在空间中位置的参考系统，通常由坐标原点和坐标轴组成。</p>
<h4> 2.2 常见坐标系</h4>
<ul>
<li><strong>笛卡尔坐标系 (Cartesian Coordinate System):</strong>  使用相互垂直的坐标轴 (x, y, z) 表示点的位置。</li>
<li><strong>极坐标系 (Polar Coordinate System):</strong>  使用距离原点的距离 (r) 和与参考轴的夹角 (θ) 表示点的位置。</li>
<li><strong>球坐标系 (Spherical Coordinate System):</strong>  使用距离原点的距离 (r)、与参考轴的夹角 (θ) 和与参考平面的夹角 (φ) 表示点的位置。</li>
<li><strong>地理坐标系 (Geographic Coordinate System):</strong>  使用经度 (longitude) 和纬度 (latitude) 表示地球表面点的位置。</li>
</ul>`,r:{minutes:2.37,words:712},y:"a",t:"坐标转换"},["/posts/测绘_此目录文章为AI生成/坐标转换.html","/posts/测绘_此目录文章为AI生成/坐标转换.md",":md"]],["v-429b791e","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%AF%BC%E7%BA%BF%E6%B5%8B%E9%87%8F.html",{d:17553171e5,e:`<h1> 导线测量</h1>
<h2> 导线测量技术文档</h2>
<h3> 1. 概述</h3>
<p>导线测量是一种常用的平面控制测量方法，通过测量相邻控制点之间的水平距离和水平角，计算各控制点的平面坐标。导线测量具有布设灵活、精度高、适用范围广等优点，广泛应用于地形测量、工程测量等领域。</p>
<h3> 2. 测量原理</h3>
<p>导线测量基于平面直角坐标系，通过测量导线边的水平距离和转折角，利用坐标正算和坐标反算原理，依次推算各导线点的坐标。</p>
<p><strong>2.1 坐标正算</strong></p>
<p>已知点A的坐标 (XA, YA)，点A到点B的水平距离 SAB 和坐标方位角 αAB，则点B的坐标 (XB, YB) 可按下式计算：</p>`,r:{minutes:2.57,words:772},y:"a",t:"导线测量"},["/posts/测绘_此目录文章为AI生成/导线测量.html","/posts/测绘_此目录文章为AI生成/导线测量.md",":md"]],["v-590f1733","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E5%B7%A5%E7%A8%8B%E6%B5%8B%E9%87%8F.html",{d:17553171e5,e:`<h1> 工程测量</h1>
<h2> 工程测量技术文档</h2>
<p><strong>1. 概述</strong></p>
<p>工程测量是利用测量仪器和设备，按照一定的原理和方法，对工程建设中的空间位置、形状、大小等进行测定和放样的一门应用科学。它是工程建设的基础性工作，贯穿于工程建设的全过程，为工程设计、施工和运营提供准确可靠的数据支持。</p>
<p><strong>2. 工程测量的分类</strong></p>
<p>工程测量按工程建设的阶段可分为：</p>
<ul>
<li><strong>勘测设计阶段测量:</strong> 包括地形测量、工程地质测量、水文测量等，为工程设计提供基础资料。</li>
<li><strong>施工阶段测量:</strong> 包括施工控制测量、施工放样测量、变形监测等，为工程施工提供依据和保障。</li>
<li><strong>运营管理阶段测量:</strong> 包括变形监测、竣工测量、设备安装测量等，为工程运营管理提供数据支持。</li>
</ul>`,r:{minutes:3.09,words:926},y:"a",t:"工程测量"},["/posts/测绘_此目录文章为AI生成/工程测量.html","/posts/测绘_此目录文章为AI生成/工程测量.md",":md"]],["v-20c5aa01","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E6%91%84%E5%BD%B1%E6%B5%8B%E9%87%8F.html",{d:17553171e5,e:`<h1> 摄影测量</h1>
<h2> 摄影测量技术文档</h2>
<p><strong>1. 概述</strong></p>
<p>摄影测量（Photogrammetry）是通过摄影手段获取目标物体的几何信息和物理信息，并进行分析和处理的一门学科和技术。它利用摄影机或其他传感器从不同角度获取目标物体的影像，通过影像处理和几何计算，重建目标物体的三维模型，并提取其几何、纹理、位置等信息。</p>
<p><strong>2. 基本原理</strong></p>
<p>摄影测量的基本原理是<strong>共线方程</strong>，即目标物体表面点、摄影机镜头中心和像点三点共线。通过至少两张从不同角度拍摄的影像，利用共线方程可以解算出目标物体表面点的三维坐标。</p>`,r:{minutes:3.47,words:1040},y:"a",t:"摄影测量"},["/posts/测绘_此目录文章为AI生成/摄影测量.html","/posts/测绘_此目录文章为AI生成/摄影测量.md",":md"]],["v-3b2ec64e","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E6%95%B0%E5%AD%97%E9%AB%98%E7%A8%8B%E6%A8%A1%E5%9E%8B%EF%BC%88DEM%EF%BC%89.html",{d:17553171e5,e:`<h1> 数字高程模型（DEM）</h1>
<h1> 数字高程模型（DEM）技术文档</h1>
<h2> 1. 概述</h2>
<p>数字高程模型（Digital Elevation Model，简称DEM）是一种用于表示地表高程信息的数字模型。它通过离散的高程点或规则网格来模拟地形的起伏变化，广泛应用于地理信息系统（GIS）、遥感、地形分析、水文建模、城市规划等领域。</p>
<h2> 2. DEM的基本概念</h2>
<h3> 2.1 定义</h3>
<p>数字高程模型（DEM）是一种以数字形式表示地表高程的数据模型。它通常由规则网格或不规则三角网（TIN）组成，每个网格点或三角网节点都包含一个高程值。</p>`,r:{minutes:3.55,words:1064},y:"a",t:"数字高程模型（DEM）"},["/posts/测绘_此目录文章为AI生成/数字高程模型（DEM）.html","/posts/测绘_此目录文章为AI生成/数字高程模型（DEM）.md",":md"]],["v-31872f2f","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E6%B0%B4%E5%87%86%E6%B5%8B%E9%87%8F.html",{d:17553171e5,e:`<h1> 水准测量</h1>
<h2> 水准测量技术文档</h2>
<p><strong>1. 概述</strong></p>
<p>水准测量是确定地面点高程的一种测量方法，其基本原理是利用水准仪提供的水平视线，测量两点之间的高差，从而推算待测点的高程。</p>
<p><strong>2. 仪器设备</strong></p>
<ul>
<li><strong>水准仪</strong>: 提供水平视线，主要类型有光学水准仪和电子水准仪。</li>
<li><strong>水准尺</strong>:  用于读取高差，通常为双面尺，一面为黑面，另一面为红面。</li>
<li><strong>尺垫</strong>:  用于支撑水准尺，防止其下沉。</li>
<li><strong>三脚架</strong>:  用于支撑和整平水准仪。</li>
</ul>`,r:{minutes:2.9,words:869},y:"a",t:"水准测量"},["/posts/测绘_此目录文章为AI生成/水准测量.html","/posts/测绘_此目录文章为AI生成/水准测量.md",":md"]],["v-74af3aa5","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E6%B5%B7%E6%B4%8B%E6%B5%8B%E7%BB%98.html",{d:17553171e5,e:`<h1> 海洋测绘</h1>
<h2> 海洋测绘技术文档</h2>
<p><strong>1. 概述</strong></p>
<p>海洋测绘是利用各种技术手段获取、处理、分析和表达海洋及其周边环境空间信息的一门学科。它为海洋资源开发、海洋环境保护、海洋权益维护、海洋科学研究等提供基础数据和科学依据。</p>
<p><strong>2. 主要内容</strong></p>
<p>海洋测绘的主要内容包括：</p>
<ul>
<li><strong>海洋地形测量:</strong> 测量海底地形、地貌、水深等信息，绘制海底地形图。</li>
<li><strong>海洋水文测量:</strong> 测量海水温度、盐度、密度、流速、流向等水文要素，绘制海洋水文图。</li>
<li><strong>海洋地质测量:</strong> 测量海底地质构造、沉积物类型、矿产资源等信息，绘制海洋地质图。</li>
<li><strong>海洋重力测量:</strong> 测量海洋重力场，研究地球形状和内部结构。</li>
<li><strong>海洋磁力测量:</strong> 测量海洋磁场，研究海底地质构造和矿产资源。</li>
<li><strong>海洋工程测量:</strong> 为海洋工程建设提供测量服务，如港口建设、海底管道铺设等。</li>
</ul>`,r:{minutes:3.84,words:1153},y:"a",t:"海洋测绘"},["/posts/测绘_此目录文章为AI生成/海洋测绘.html","/posts/测绘_此目录文章为AI生成/海洋测绘.md",":md"]],["v-4924f29d","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E6%BF%80%E5%85%89%E9%9B%B7%E8%BE%BE%EF%BC%88LiDAR%EF%BC%89.html",{d:17553171e5,e:`<h1> 激光雷达（LiDAR）</h1>
<h2> 激光雷达 (LiDAR) 技术文档</h2>
<p><strong>1. 概述</strong></p>
<p>激光雷达 (Light Detection and Ranging, LiDAR) 是一种主动遥感技术，通过发射激光脉冲并接收其反射信号来探测目标物体的距离、方位和特征信息。LiDAR 系统通常由激光发射器、接收器、扫描系统和数据处理单元组成。</p>
<p><strong>2. 工作原理</strong></p>
<p>LiDAR 系统的工作原理可以概括为以下步骤：</p>
<ol>
<li><strong>激光发射:</strong>  激光发射器发射出短脉冲激光束。</li>
<li><strong>光束扫描:</strong>  扫描系统控制激光束的发射方向，使其按照预设的扫描模式（例如，旋转、线性扫描等）对目标区域进行扫描。</li>
<li><strong>目标反射:</strong>  激光束遇到目标物体后发生反射，部分反射光返回 LiDAR 系统。</li>
<li><strong>信号接收:</strong>  接收器接收反射回来的激光信号，并将其转换为电信号。</li>
<li><strong>时间测量:</strong>  系统测量激光脉冲从发射到接收的时间差，即飞行时间 (Time of Flight, ToF)。</li>
<li><strong>距离计算:</strong>  根据光速和飞行时间，计算出目标物体与 LiDAR 系统之间的距离。</li>
<li><strong>数据处理:</strong>  系统将距离信息与扫描角度、位置信息等结合，生成目标物体的三维点云数据。</li>
</ol>`,r:{minutes:3.59,words:1077},y:"a",t:"激光雷达（LiDAR）"},["/posts/测绘_此目录文章为AI生成/激光雷达（LiDAR）.html","/posts/测绘_此目录文章为AI生成/激光雷达（LiDAR）.md",":md"]],["v-3ab229c8","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E7%A9%BA%E9%97%B4%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E3%80%82.html",{d:17553171e5,e:`<h1> 空间数据分析。</h1>
<h2> 空间数据分析详解</h2>
<p><strong>1. 概述</strong></p>
<p>空间数据分析 (Spatial Data Analysis) 是指对具有地理位置信息的数据进行分析，以揭示空间分布模式、空间关联关系以及空间变化趋势。它广泛应用于地理信息系统 (GIS)、遥感、环境科学、城市规划、交通管理等领域。</p>
<p><strong>2. 空间数据类型</strong></p>
<p>空间数据主要分为两类：</p>
<ul>
<li><strong>矢量数据 (Vector Data):</strong> 用点、线、面等几何要素表示空间对象，例如：
<ul>
<li>点：城市位置、气象站位置</li>
<li>线：道路、河流、边界</li>
<li>面：行政区划、土地利用类型</li>
</ul>
</li>
<li><strong>栅格数据 (Raster Data):</strong> 用规则网格表示空间现象，每个网格单元 (像素) 存储一个属性值，例如：
<ul>
<li>数字高程模型 (DEM)</li>
<li>遥感影像</li>
<li>气象数据</li>
</ul>
</li>
</ul>`,r:{minutes:3.41,words:1024},y:"a",t:"空间数据分析。"},["/posts/测绘_此目录文章为AI生成/空间数据分析。.html","/posts/测绘_此目录文章为AI生成/空间数据分析。.md",":md"]],["v-c18e5fb6","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/%E9%81%A5%E6%84%9F%E6%8A%80%E6%9C%AF.html",{d:17553171e5,e:`<h1> 遥感技术</h1>
<h2> 遥感技术详解</h2>
<p><strong>1. 概述</strong></p>
<p>遥感（Remote Sensing），顾名思义，就是从远处感知目标。它是指在不直接接触目标物体的情况下，利用传感器获取目标物体的电磁波信息，并通过处理、分析和解译这些信息，来识别目标物体及其性质、状态和变化规律的一门综合性探测技术。</p>
<p><strong>2. 基本原理</strong></p>
<p>遥感技术的基本原理是基于一切物体都具有发射、反射和吸收电磁波的特性。不同物体对不同波段的电磁波的响应特性不同，因此可以通过分析传感器接收到的电磁波信息来识别和区分不同的物体。</p>`,r:{minutes:3.41,words:1024},y:"a",t:"遥感技术"},["/posts/测绘_此目录文章为AI生成/遥感技术.html","/posts/测绘_此目录文章为AI生成/遥感技术.md",":md"]],["v-2c30c006","/posts/%E8%A7%81%E8%A7%A3Tag/%E6%B8%A9%E5%B7%9E%E8%A1%8C.html",{d:1728409688e3,e:`<h1> 温州行</h1>
<h2> 一、顺风车✳</h2>
<p>Case：顺风车接了2个乘客，分别在100km和140km左右，<br>
我们下单的费用是88rmb，无意间瞥见司机的收入是76rmb，平台扣除手续费约13.63%，另一位乘客司机的收入约在85rmb左右，单程收入在161rmb左右。<br>
电车成本约5~7分/km，约7-9.8rmb，姑且算10rmb成本，利润在151rmb。<br>
<br>
疯狂一点假设，单日2个来回，约赚600rmb</p>
<p>滴滴抽成约20%~40%</p>
<p>之前从家打快车/特惠快车到机场，200rmb司机收入约110-120rmb</p>`,r:{minutes:2.98,words:895},y:"a",t:"温州行"},["/posts/见解Tag/温州行.html","/posts/见解Tag/温州行.md",":md"]],["v-3706649a","/404.html",{y:"p",t:""},[]],["v-78db5d8e","/posts/%E6%8A%80%E6%9C%AF/",{y:"p",t:"技术"},["/posts/技术/"]],["v-e1e3da16","/posts/",{y:"p",t:"Posts"},[]],["v-3b3de132","/posts/%E6%89%93%E5%B7%A5%E4%BA%BA%E6%89%8B%E5%86%8C/",{y:"p",t:"打工人手册"},["/posts/打工人手册/"]],["v-b42c4e26","/posts/%E6%96%87%E7%AB%A0/",{y:"p",t:"文章"},["/posts/文章/"]],["v-54e7730c","/posts/%E6%B2%90%E6%B2%90/",{y:"p",t:"沐沐"},["/posts/沐沐/"]],["v-532a2275","/posts/%E6%B5%8B%E7%BB%98_%E6%AD%A4%E7%9B%AE%E5%BD%95%E6%96%87%E7%AB%A0%E4%B8%BAAI%E7%94%9F%E6%88%90/",{y:"p",t:"测绘 此目录文章为 A I生成"},["/posts/测绘_此目录文章为AI生成/"]],["v-c05dc7ba","/posts/%E8%A7%81%E8%A7%A3Tag/",{y:"p",t:"见解 Tag"},["/posts/见解Tag/"]],["v-5bc93818","/category/",{y:"p",t:"Category",I:0},[]],["v-744d024e","/tag/",{y:"p",t:"Tag",I:0},[]],["v-e52c881c","/article/",{y:"p",t:"Articles",I:0},[]],["v-154dc4c4","/star/",{y:"p",t:"Star",I:0},[]],["v-01560935","/timeline/",{y:"p",t:"Timeline",I:0},[]]];var wl=S({name:"Vuepress",setup(){const e=o5();return()=>i(e.value)}}),T3=()=>I3.reduce((e,[t,n,r,o])=>(e.push({name:t,path:n,component:wl,meta:r},{path:n.endsWith("/")?n+"index.html":n.substring(0,n.length-5),redirect:n},...o.map(s=>({path:s===":md"?n.substring(0,n.length-5)+".md":s,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:wl}]),P3=I5,L3=()=>{const e=cc({history:P3(p8("/")),routes:T3(),scrollBehavior:(t,n,r)=>r||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{var r;(t.path!==n.path||n===Ot)&&([t.meta._data]=await Promise.all([Rt.resolvePageData(t.name),(r=Si[t.name])==null?void 0:r.__asyncLoader()]))}),e},R3=e=>{e.component("ClientOnly",Oo),e.component("Content",A8)},O3=(e,t,n)=>{const r=el(()=>t.currentRoute.value.path),o=el(()=>Rt.resolveRouteLocale(Pn.value.locales,r.value)),s=Uc(r,()=>t.currentRoute.value.meta._data),E=C(()=>Rt.resolveLayouts(n)),l=C(()=>Rt.resolveSiteLocaleData(Pn.value,o.value)),c=C(()=>Rt.resolvePageFrontmatter(s.value)),a=C(()=>Rt.resolvePageHeadTitle(s.value,l.value)),p=C(()=>Rt.resolvePageHead(a.value,c.value,l.value)),d=C(()=>Rt.resolvePageLang(s.value,l.value)),B=C(()=>Rt.resolvePageLayout(s.value,E.value));return e.provide(e5,E),e.provide(ki,s),e.provide(xi,c),e.provide(r5,a),e.provide($i,p),e.provide(Mi,d),e.provide(Ni,B),e.provide(B8,o),e.provide(ji,l),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>c.value},$head:{get:()=>p.value},$headTitle:{get:()=>a.value},$lang:{get:()=>d.value},$page:{get:()=>s.value},$routeLocale:{get:()=>o.value},$site:{get:()=>Pn.value},$siteLocale:{get:()=>l.value},$withBase:{get:()=>Ie}}),{layouts:E,pageData:s,pageFrontmatter:c,pageHead:p,pageHeadTitle:a,pageLang:d,pageLayout:B,routeLocale:o,siteData:Pn,siteLocaleData:l}},F3=()=>{const e=n5(),t=d8(),n=N([]),r=()=>{e.value.forEach(s=>{const E=V3(s);E&&n.value.push(E)})},o=()=>{document.documentElement.lang=t.value,n.value.forEach(s=>{s.parentNode===document.head&&document.head.removeChild(s)}),n.value.splice(0,n.value.length),e.value.forEach(s=>{const E=S3(s);E!==null&&(document.head.appendChild(E),n.value.push(E))})};ft(E5,o),pe(()=>{r(),o(),re(()=>e.value,o)})},V3=([e,t,n=""])=>{const r=Object.entries(t).map(([l,c])=>ie(c)?`[${l}=${JSON.stringify(c)}]`:c===!0?`[${l}]`:"").join(""),o=`head > ${e}${r}`;return Array.from(document.querySelectorAll(o)).find(l=>l.innerText===n)||null},S3=([e,t,n])=>{if(!ie(e))return null;const r=document.createElement(e);return Sr(t)&&Object.entries(t).forEach(([o,s])=>{ie(s)?r.setAttribute(o,s):s===!0&&r.setAttribute(o,"")}),ie(n)&&r.appendChild(document.createTextNode(n)),r},k3=z1,x3=async()=>{var n;const e=k3({name:"VuepressApp",setup(){var r;F3();for(const o of lo)(r=o.setup)==null||r.call(o);return()=>[i(Zi),...lo.flatMap(({rootComponents:o=[]})=>o.map(s=>i(s)))]}}),t=L3();R3(e),O3(e,t,lo);for(const r of lo)await((n=r.enhance)==null?void 0:n.call(r,{app:e,router:t,siteData:Pn}));return e.use(t),{app:e,router:t}};x3().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{nr as A,bn as B,on as C,Or as D,j3 as E,Ue as F,Y3 as G,RE as H,Ve as I,X3 as J,t7 as K,ft as L,nn as M,ns as N,ha as O,l1 as P,ei as Q,Zn as R,i6 as S,q3 as T,J3 as U,en as V,Q3 as W,U3 as X,N3 as Y,H3 as Z,u as _,_i as a,gi as b,G3 as c,x3 as createVueApp,K3 as d,Pe as e,W3 as f,S as g,n7 as h,N as i,C as j,pe as k,i as l,l8 as m,z3 as n,fi as o,Gs as p,ue as q,tt as r,Te as s,hi as t,e7 as u,QE as v,re as w,Bn as x,M3 as y,Ws as z};
