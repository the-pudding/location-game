function y(){}function V(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function P(){return Object.create(null)}function b(t){t.forEach(W)}function S(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function X(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t){let e;return G(t,n=>e=n)(),e}function bt(t,e,n){t.$$.on_destroy.push(G(e,n))}function $t(t,e,n,i){if(t){const s=R(t,e,n,i);return t[0](s)}}function R(t,e,n,i){return t[1]&&i?V(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function vt(t,e,n,i,s,c){if(s){const r=R(e,n,i,c);t.p(r,s)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Tt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Nt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function At(t,e,n){return t.set(n),e}function kt(t){return t&&S(t.destroy)?t.destroy:y}let T=!1;function Y(){T=!0}function Z(){T=!1}function tt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:tt(1,s,w=>e[n[w]].claim_order,u))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,s=Math.max(a,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<r.length;o++){for(;u<c.length&&r[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(r[o],f)}}function nt(t,e){t.appendChild(e)}function it(t,e){if(T){for(et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function st(t,e,n){t.insertBefore(e,n||null)}function rt(t,e,n){T&&!n?it(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function M(t){return document.createElement(t)}function q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function St(){return L(" ")}function Mt(){return L("")}function D(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t,e){for(const n in e)ot(t,n,e[n])}function jt(t){return t===""?null:+t}function ct(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,e,n,i,s=!1){F(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function J(t,e,n,i){return I(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ht(t,e,n){return J(t,e,n,M)}function Pt(t,e,n){return J(t,e,n,q)}function lt(t,e){return I(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function Dt(t){return lt(t," ")}function z(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function zt(t,e){const n=z(t,"HTML_TAG_START",0),i=z(t,"HTML_TAG_END",n);if(n===i)return new B(void 0,e);F(t);const s=t.splice(n,i-n+1);g(s[0]),g(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new B(c,e)}function Bt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ot(t,e){t.value=e??""}function Wt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let v;function ut(){if(v===void 0){v=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{v=!0}}return v}function Gt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=M("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=ut();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=D(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=D(i.contentWindow,"resize",e),e()}),nt(t,i),()=>{(s||c&&i.contentWindow)&&c(),g(i)}}function Rt(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function qt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ft{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=q(n.nodeName):this.e=M(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)st(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(g)}}class B extends ft{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)rt(this.t,this.n[n],e)}}function Ft(t,e){return new t(e)}let x;function p(t){x=t}function $(){if(!x)throw new Error("Function called outside component initialization");return x}function It(t){$().$$.on_mount.push(t)}function Jt(t){$().$$.after_update.push(t)}function Kt(){const t=$();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=at(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Qt(t,e){return $().$$.context.set(t,e),e}function Ut(t){return $().$$.context.get(t)}const h=[],O=[];let m=[];const A=[],K=Promise.resolve();let k=!1;function Q(){k||(k=!0,K.then(U))}function Vt(){return Q(),K}function C(t){m.push(t)}function Xt(t){A.push(t)}const N=new Set;let _=0;function U(){if(_!==0)return;const t=x;do{try{for(;_<h.length;){const e=h[_];_++,p(e),dt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;O.length;)O.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(h.length);for(;A.length;)A.pop()();k=!1,N.clear(),p(t)}function dt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}function _t(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const E=new Set;let d;function Yt(){d={r:0,c:[],p:d}}function Zt(){d.r||b(d.c),d=d.p}function ht(t,e){t&&t.i&&(E.delete(t),t.i(e))}function te(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ee(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ne(t){return typeof t=="object"&&t!==null?t:{}}function ie(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function se(t){t&&t.c()}function re(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||C(()=>{const r=t.$$.on_mount.map(W).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...r):b(r),t.$$.on_mount=[]}),c.forEach(C)}function pt(t,e){const n=t.$$;n.fragment!==null&&(_t(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(h.push(t),Q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,i,s,c,r,l=[-1]){const o=x;p(t);const u=t.$$={fragment:null,ctx:[],props:c,update:y,not_equal:s,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:P(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,w,...j)=>{const H=j.length?j[0]:w;return u.ctx&&s(u.ctx[a],u.ctx[a]=H)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](H),f&&yt(t,a)),w}):[],u.update(),f=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){Y();const a=ct(e.target);u.fragment&&u.fragment.l(a),a.forEach(g)}else u.fragment&&u.fragment.c();e.intro&&ht(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),Z(),U()}p(o)}class ce{$destroy(){pt(this,1),this.$destroy=y}$on(e,n){if(!S(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ie as $,mt as A,pt as B,V as C,ee as D,ne as E,Tt as F,$t as G,vt as H,Et as I,wt as J,it as K,D as L,y as M,b as N,bt as O,At as P,qt as Q,Ct as R,ce as S,C as T,Gt as U,Qt as V,Rt as W,kt as X,S as Y,Ut as Z,Kt as _,St as a,Xt as a0,B as a1,zt as a2,xt as a3,q as a4,Pt as a5,Lt as a6,Nt as a7,G as a8,Ot as a9,jt as aa,rt as b,Dt as c,te as d,Mt as e,Zt as f,ht as g,g as h,oe as i,Jt as j,M as k,Ht as l,ct as m,ot as n,It as o,Wt as p,L as q,lt as r,gt as s,Vt as t,Bt as u,Yt as v,O as w,Ft as x,se as y,re as z};
