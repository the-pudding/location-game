import{S as te,i as se,s as ne,k as b,a as P,q as x,J as ge,l as k,h as y,c as N,m as S,r as A,n as E,p as Y,C as a,b as j,Q as Ee,L as Z,u as Q,R as be,D as ee,M as ue,o as ke,T as X,g as H,v as pe,f as de,d as G,K as he,U as ze,y as me,z as ye,A as _e,B as ve}from"../chunks/index.5a81c418.js";import"../chunks/transform.4d2927c0.js";import{b as Ce}from"../chunks/paths.6898f39f.js";function Se(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}class Te extends Map{constructor(e,n=Le){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[s,f]of e)this.set(s,f)}get(e){return super.get(re(this,e))}has(e){return super.has(re(this,e))}set(e,n){return super.set(we(this,e),n)}delete(e){return super.delete(De(this,e))}}function re({_intern:t,_key:e},n){const s=e(n);return t.has(s)?t.get(s):n}function we({_intern:t,_key:e},n){const s=e(n);return t.has(s)?t.get(s):(t.set(s,n),n)}function De({_intern:t,_key:e},n){const s=e(n);return t.has(s)&&(n=t.get(s),t.delete(s)),n}function Le(t){return t!==null&&typeof t=="object"?t.valueOf():t}function Me(t){return t}function Pe(t,...e){return xe(t,Array.from,Me,e)}function xe(t,e,n,s){return function f(r,_){if(_>=s.length)return n(r);const h=new Te,v=s[_++];let l=-1;for(const c of r){const o=v(c,++l,r),i=h.get(o);i?i.push(c):h.set(o,[c])}for(const[c,o]of h)h.set(c,f(o,_));return e(h)}(t,0)}const Ne=async t=>{if("clipboard"in navigator)await navigator.clipboard.writeText(t);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=t,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},Ae=(t,e)=>{async function n(){if(f)try{await Ne(f),t.dispatchEvent(new CustomEvent("svelte-copy",{detail:f}))}catch(r){t.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:r}))}}let s=typeof e=="string"?["click"]:[e.events].flat(1),f=typeof e=="string"?e:e.text;return s.forEach(r=>{t.addEventListener(r,n,!0)}),{update:r=>{const _=typeof r=="string"?["click"]:[r.events].flat(1),h=typeof r=="string"?r:r.text,v=_.filter(c=>!s.includes(c)),l=s.filter(c=>!_.includes(c));v.forEach(c=>{t.addEventListener(c,n,!0)}),l.forEach(c=>{t.removeEventListener(c,n,!0)}),s=_,f=h},destroy:()=>{s.forEach(r=>{t.removeEventListener(r,n,!0)})}}};function Ie(t){let e,n,s,f,r,_,h,v,l,c,o,i,d,T,w,U,L,I,q,D,B,M,O,K;return{c(){e=b("link"),n=P(),s=b("div"),f=b("h3"),r=x(t[0]),_=P(),h=b("p"),v=x(t[1]),l=P(),c=b("details"),o=b("summary"),i=x("CSS Snippet"),d=P(),T=b("code"),w=x(t[2]),U=P(),L=b("p"),I=b("button"),q=x("Copy CSS to Clipboard"),B=b("span"),M=x(t[3]),this.h()},l(C){const z=ge("svelte-1uevrx3",document.head);e=k(z,"LINK",{rel:!0,href:!0}),z.forEach(y),n=N(C),s=k(C,"DIV",{style:!0,class:!0});var p=S(s);f=k(p,"H3",{class:!0});var W=S(f);r=A(W,t[0]),W.forEach(y),_=N(p),h=k(p,"P",{});var u=S(h);v=A(u,t[1]),u.forEach(y),l=N(p),c=k(p,"DETAILS",{class:!0});var m=S(c);o=k(m,"SUMMARY",{class:!0});var g=S(o);i=A(g,"CSS Snippet"),g.forEach(y),d=N(m),T=k(m,"CODE",{class:!0});var R=S(T);w=A(R,t[2]),R.forEach(y),m.forEach(y),U=N(p),L=k(p,"P",{});var V=S(L);I=k(V,"BUTTON",{class:!0});var F=S(I);q=A(F,"Copy CSS to Clipboard"),F.forEach(y),B=k(V,"SPAN",{class:!0});var J=S(B);M=A(J,t[3]),J.forEach(y),V.forEach(y),p.forEach(y),this.h()},h(){E(e,"rel","external stylesheet"),E(e,"href",t[5]),E(f,"class","svelte-19ry7n"),Y(h,"font-size",t[4]),E(o,"class","svelte-19ry7n"),E(T,"class","svelte-19ry7n"),E(c,"class","svelte-19ry7n"),E(I,"class","svelte-19ry7n"),E(B,"class","svelte-19ry7n"),Y(s,"font-family","'"+t[0]+"'"),E(s,"class","svelte-19ry7n")},m(C,z){a(document.head,e),j(C,n,z),j(C,s,z),a(s,f),a(f,r),a(s,_),a(s,h),a(h,v),a(s,l),a(s,c),a(c,o),a(o,i),a(c,d),a(c,T),a(T,w),a(s,U),a(s,L),a(L,I),a(I,q),a(L,B),a(B,M),O||(K=[Ee(D=Ae.call(null,I,t[2])),Z(I,"svelte-copy",t[6])],O=!0)},p(C,[z]){z&1&&Q(r,C[0]),z&2&&Q(v,C[1]),z&16&&Y(h,"font-size",C[4]),z&4&&Q(w,C[2]),D&&be(D.update)&&z&4&&D.update.call(null,C[2]),z&8&&Q(M,C[3]),z&1&&Y(s,"font-family","'"+C[0]+"'")},i:ee,o:ee,d(C){y(e),C&&y(n),C&&y(s),O=!1,ue(K)}}}function Be(t,e,n){let s,{id:f=""}=e,{family:r=""}=e,{size:_=16}=e,{text:h}=e,v="",l="";const c=`${Ce}/assets/demo/fonts/${f}.css`,o=()=>{n(3,l="Copied!"),setTimeout(()=>{n(3,l="")},1e3)};return ke(async()=>{const i=await fetch(c);n(2,v=await i.text())}),t.$$set=i=>{"id"in i&&n(7,f=i.id),"family"in i&&n(0,r=i.family),"size"in i&&n(8,_=i.size),"text"in i&&n(1,h=i.text)},t.$$.update=()=>{t.$$.dirty&256&&n(4,s=`${_}px`)},[r,h,v,l,s,c,o,f,_]}class Fe extends te{constructor(e){super(),se(this,e,Be,Ie,ne,{id:7,family:0,size:8,text:1})}}const Oe=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function ie(t,e,n){const s=t.slice();return s[5]=e[n][0],s[6]=e[n][1],s}function ae(t,e,n){const s=t.slice();return s[9]=e[n].family,s[10]=e[n].id,s}function fe(t){let e,n;return e=new Fe({props:{id:t[10],family:t[9],size:t[0],text:t[1]}}),{c(){me(e.$$.fragment)},l(s){ye(e.$$.fragment,s)},m(s,f){_e(e,s,f),n=!0},p(s,f){const r={};f&1&&(r.size=s[0]),f&2&&(r.text=s[1]),e.$set(r)},i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ve(e,s)}}}function ce(t){let e,n=t[5]+"",s,f,r,_,h,v=t[6],l=[];for(let o=0;o<v.length;o+=1)l[o]=fe(ae(t,v,o));const c=o=>G(l[o],1,1,()=>{l[o]=null});return{c(){e=b("h2"),s=x(n),f=P(),r=b("section");for(let o=0;o<l.length;o+=1)l[o].c();_=P(),this.h()},l(o){e=k(o,"H2",{});var i=S(e);s=A(i,n),i.forEach(y),f=N(o),r=k(o,"SECTION",{class:!0});var d=S(r);for(let T=0;T<l.length;T+=1)l[T].l(d);_=N(d),d.forEach(y),this.h()},h(){E(r,"class","svelte-1lzc8ku")},m(o,i){j(o,e,i),a(e,s),j(o,f,i),j(o,r,i);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(r,null);a(r,_),h=!0},p(o,i){if(i&7){v=o[6];let d;for(d=0;d<v.length;d+=1){const T=ae(o,v,d);l[d]?(l[d].p(T,i),H(l[d],1)):(l[d]=fe(T),l[d].c(),H(l[d],1),l[d].m(r,_))}for(pe(),d=v.length;d<l.length;d+=1)c(d);de()}},i(o){if(!h){for(let i=0;i<v.length;i+=1)H(l[i]);h=!0}},o(o){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)G(l[i]);h=!1},d(o){o&&y(e),o&&y(f),o&&y(r),he(l,o)}}}function Re(t){let e,n,s,f,r,_,h,v,l,c,o,i,d,T,w,U,L,I,q,D,B,M,O,K,C,z=t[2],p=[];for(let u=0;u<z.length;u+=1)p[u]=ce(ie(t,z,u));const W=u=>G(p[u],1,1,()=>{p[u]=null});return{c(){e=b("div"),n=b("h1"),s=x("Hosted Fonts on The Pudding"),f=P(),r=b("p"),_=b("em"),h=x("Do not use fonts hosted by The Pudding without written permission."),v=P(),l=b("form"),c=b("label"),o=x("font-size: "),i=x(t[0]),d=x("px"),T=P(),w=b("input"),U=P(),L=b("label"),I=x("text sample"),q=P(),D=b("input"),B=P(),M=b("article");for(let u=0;u<p.length;u+=1)p[u].c();this.h()},l(u){e=k(u,"DIV",{id:!0,class:!0});var m=S(e);n=k(m,"H1",{});var g=S(n);s=A(g,"Hosted Fonts on The Pudding"),g.forEach(y),f=N(m),r=k(m,"P",{});var R=S(r);_=k(R,"EM",{});var V=S(_);h=A(V,"Do not use fonts hosted by The Pudding without written permission."),V.forEach(y),R.forEach(y),v=N(m),l=k(m,"FORM",{});var F=S(l);c=k(F,"LABEL",{for:!0,class:!0});var J=S(c);o=A(J,"font-size: "),i=A(J,t[0]),d=A(J,"px"),J.forEach(y),T=N(F),w=k(F,"INPUT",{id:!0,type:!0,min:!0,max:!0}),U=N(F),L=k(F,"LABEL",{for:!0,class:!0});var le=S(L);I=A(le,"text sample"),le.forEach(y),q=N(F),D=k(F,"INPUT",{id:!0,type:!0,maxlength:!0}),F.forEach(y),m.forEach(y),B=N(u),M=k(u,"ARTICLE",{class:!0});var oe=S(M);for(let $=0;$<p.length;$+=1)p[$].l(oe);oe.forEach(y),this.h()},h(){E(c,"for","size"),E(c,"class","svelte-1lzc8ku"),E(w,"id","size"),E(w,"type","range"),E(w,"min","12"),E(w,"max","48"),E(L,"for","text"),E(L,"class","svelte-1lzc8ku"),E(D,"id","text"),E(D,"type","text"),E(D,"maxlength","100"),E(e,"id","info"),E(e,"class","svelte-1lzc8ku"),E(M,"class","svelte-1lzc8ku")},m(u,m){j(u,e,m),a(e,n),a(n,s),a(e,f),a(e,r),a(r,_),a(_,h),a(e,v),a(e,l),a(l,c),a(c,o),a(c,i),a(c,d),a(l,T),a(l,w),X(w,t[0]),a(l,U),a(l,L),a(L,I),a(l,q),a(l,D),X(D,t[1]),j(u,B,m),j(u,M,m);for(let g=0;g<p.length;g+=1)p[g]&&p[g].m(M,null);O=!0,K||(C=[Z(w,"change",t[3]),Z(w,"input",t[3]),Z(D,"input",t[4])],K=!0)},p(u,[m]){if((!O||m&1)&&Q(i,u[0]),m&1&&X(w,u[0]),m&2&&D.value!==u[1]&&X(D,u[1]),m&7){z=u[2];let g;for(g=0;g<z.length;g+=1){const R=ie(u,z,g);p[g]?(p[g].p(R,m),H(p[g],1)):(p[g]=ce(R),p[g].c(),H(p[g],1),p[g].m(M,null))}for(pe(),g=z.length;g<p.length;g+=1)W(g);de()}},i(u){if(!O){for(let m=0;m<z.length;m+=1)H(p[m]);O=!0}},o(u){p=p.filter(Boolean);for(let m=0;m<p.length;m+=1)G(p[m]);O=!1},d(u){u&&y(e),u&&y(B),u&&y(M),he(p,u),K=!1,ue(C)}}}function je(t,e,n){let s=18,f="The quick brown fox jumps over the lazy dog.";const r=Pe(Oe,v=>v.type);r.sort((v,l)=>Se(v[1].length,l[1].length));function _(){s=ze(this.value),n(0,s)}function h(){f=this.value,n(1,f)}return[s,f,r,_,h]}class He extends te{constructor(e){super(),se(this,e,je,Re,ne,{})}}function Ue(t){let e,n;return e=new He({}),{c(){me(e.$$.fragment)},l(s){ye(e.$$.fragment,s)},m(s,f){_e(e,s,f),n=!0},p:ee,i(s){n||(H(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ve(e,s)}}}class Ve extends te{constructor(e){super(),se(this,e,null,Ue,ne,{})}}export{Ve as default};
