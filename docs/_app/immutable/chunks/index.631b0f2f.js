function k(){}function nt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function I(){return Object.create(null)}function w(t){t.forEach(K)}function z(t){return typeof t=="function"}function vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Et(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function it(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t){let e;return Q(t,n=>e=n)(),e}function Nt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function St(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?nt(n.ctx.slice(),t[1](i(e))):n.ctx}function At(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Ct(t,e,n,i,r,o){if(r){const s=U(e,n,i,o);t.p(s,r)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Tt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Dt(t,e,n){return t.set(n),e}function Lt(t){return t&&z(t.destroy)?t.destroy:k}let M=!1;function rt(){M=!0}function st(){M=!1}function ct(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:ct(1,r,_=>e[n[_]].claim_order,l))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,r=Math.max(d,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function ut(t,e){if(M){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ot(t,e,n){M&&!n?ut(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function Pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function qt(){return F(" ")}function Bt(){return F("")}function Ht(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function zt(t,e){for(const n in e)_t(t,n,e[n])}function Ft(t){return t===""?null:+t}function dt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,i,r=!1){ht(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function X(t,e,n,i){return V(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Rt(t,e,n){return X(t,e,n,at)}function Wt(t,e,n){return X(t,e,n,ft)}function mt(t,e){return V(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Gt(t){return mt(t," ")}function It(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Jt(t,e){t.value=e??""}function Kt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Qt(t,e,n){t.classList[n?"add":"remove"](e)}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ut(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Vt(t,e){return new t(e)}let N;function E(t){N=t}function v(){if(!N)throw new Error("Function called outside component initialization");return N}function Xt(t){v().$$.on_mount.push(t)}function Yt(t){v().$$.after_update.push(t)}function Zt(t){v().$$.on_destroy.push(t)}function te(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=pt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function ee(t,e){return v().$$.context.set(t,e),e}function ne(t){return v().$$.context.get(t)}function ie(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],J=[];let b=[];const q=[],Y=Promise.resolve();let B=!1;function Z(){B||(B=!0,Y.then(tt))}function re(){return Z(),Y}function H(t){b.push(t)}function se(t){q.push(t)}const P=new Set;let $=0;function tt(){if($!==0)return;const t=N;do{try{for(;$<x.length;){const e=x[$];$++,E(e),yt(e.$$)}}catch(e){throw x.length=0,$=0,e}for(E(null),x.length=0,$=0;J.length;)J.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];P.has(n)||(P.add(n),n())}b.length=0}while(x.length);for(;q.length;)q.pop()();B=!1,P.clear(),E(t)}function yt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function gt(t){const e=[],n=[];b.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),b=e}const j=new Set;let g;function ce(){g={r:0,c:[],p:g}}function oe(){g.r||w(g.c),g=g.p}function et(t,e){t&&t.i&&(j.delete(t),t.i(e))}function $t(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ue(t,e){$t(t,1,1,()=>{e.delete(t.key)})}function le(t,e,n,i,r,o,s,u,c,l,f,d){let _=t.length,m=o.length,h=_;const T={};for(;h--;)T[t[h].key]=h;const S=[],D=new Map,L=new Map,R=[];for(h=m;h--;){const a=d(r,o,h),p=n(a);let y=s.get(p);y?i&&R.push(()=>y.p(a,e)):(y=l(p,a),y.c()),D.set(p,S[h]=y),p in T&&L.set(p,Math.abs(h-T[p]))}const W=new Set,G=new Set;function O(a){et(a,1),a.m(u,f),s.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=S[m-1],p=t[_-1],y=a.key,A=p.key;a===p?(f=a.first,_--,m--):D.has(A)?!s.has(y)||W.has(y)?O(a):G.has(A)?_--:L.get(y)>L.get(A)?(G.add(y),O(a)):(W.add(A),_--):(c(p,s),_--)}for(;_--;){const a=t[_];D.has(a.key)||c(a,s)}for(;m;)O(S[m-1]);return w(R),S}function ae(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],u=e[o];if(u){for(const c in s)c in u||(i[c]=1);for(const c in u)r[c]||(n[c]=u[c],r[c]=1);t[o]=u}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function fe(t){return typeof t=="object"&&t!==null?t:{}}function _e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function xt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||H(()=>{const s=t.$$.on_mount.map(K).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...s):w(s),t.$$.on_mount=[]}),o.forEach(H)}function bt(t,e){const n=t.$$;n.fragment!==null&&(gt(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){t.$$.dirty[0]===-1&&(x.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,r,o,s,u=[-1]){const c=N;E(t);const l=t.$$={fragment:null,ctx:[],props:o,update:k,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&r(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),f&&wt(t,d)),_}):[],l.update(),f=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){rt();const d=dt(e.target);l.fragment&&l.fragment.l(d),d.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&et(t.$$.fragment),xt(t,e.target,e.anchor,e.customElement),st(),tt()}E(c)}class pe{$destroy(){bt(this,1),this.$destroy=k}$on(e,n){if(!z(n))return k;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ue as $,xt as A,bt as B,St as C,nt as D,ft as E,Wt as F,zt as G,ut as H,Ct as I,jt as J,At as K,ae as L,Pt as M,Tt as N,Mt as O,fe as P,Ht as Q,k as R,pe as S,w as T,Nt as U,Dt as V,Ut as W,Qt as X,ie as Y,le as Z,te as _,qt as a,Lt as a0,z as a1,Zt as a2,Et as a3,_e as a4,se as a5,ne as a6,ee as a7,kt as a8,Jt as a9,Ft as aa,Ot as b,Gt as c,$t as d,Bt as e,oe as f,et as g,lt as h,me as i,Yt as j,at as k,Rt as l,dt as m,_t as n,Xt as o,Kt as p,F as q,mt as r,vt as s,re as t,It as u,ce as v,J as w,Vt as x,de as y,he as z};
