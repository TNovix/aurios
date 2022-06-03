const Fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};Fe();const v={};function J(e){v.context=e}const Ke=(e,t)=>e===t,z={equals:Ke};let Me=Ne;const D={},q=1,Y=2,xe={owned:null,cleanups:null,context:null,owner:null},[He,qt]=C(!1);var m=null;let k=null,y=null,M=null,E=null,_=null,fe=0;function Ae(e,t){const n=y,r=m,s=e.length===0?xe:{owned:null,cleanups:null,context:null,owner:t||r};m=s,y=null;try{return re(()=>e(()=>ge(s)),!0)}finally{y=n,m=r}}function C(e,t){t=t?Object.assign({},z,t):z;const n={value:e,observers:null,observerSlots:null,pending:D,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==D?n.pending:n.value)),de(n,s));return[Te.bind(n),r]}function ue(e,t,n){const r=pe(e,t,!0,q);G(r)}function Z(e,t,n){const r=pe(e,t,!1,q);G(r)}function S(e,t,n){n=n?Object.assign({},z,n):z;const r=pe(e,t,!0,0);return r.pending=D,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,G(r),Te.bind(r)}function We(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={});const r=new Set,[s,o]=C(n.initialValue),[i,l]=C(void 0,{equals:!1}),[u,c]=C(!1),[f,w]=C();let g,d=null,P=null,L=null,T=!1,$="initialValue"in n,O=typeof e=="function"&&S(e);v.context&&(L=`${v.context.id}${v.context.count++}`,v.load&&(P=v.load(L)));function A(h,a,p,x){return d===h&&(d=null,$=!0,P&&(h===P||a===P)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated(x,{value:a})),P=null,w(g=p),X(a)),a}function X(h){ee(()=>{o(()=>h),c(!1);for(const a of r.keys())a.decrement();r.clear()})}function I(){const h=ze,a=s();if(g)throw g;return y&&!y.user&&h&&ue(()=>{i(),d&&(h.resolved||r.has(h)||(h.increment(),r.add(h)))}),a}function F(h=!0){if(h&&T)return;T=!1,w(g=void 0);const a=O?O():e;if(a==null||a===!1){A(d,R(s));return}const p=P||R(()=>t(a,{value:s(),refetching:h}));return typeof p!="object"||!("then"in p)?(A(d,p),p):(d=p,T=!0,queueMicrotask(()=>T=!1),ee(()=>{c(!0),l()}),p.then(x=>A(p,x,void 0,a),x=>A(p,x,x)))}return Object.defineProperties(I,{loading:{get(){return u()}},error:{get(){return f()}},latest:{get(){if(!$)return I();if(g)throw g;return s()}}}),O?ue(()=>F(!1)):F(!1),[I,{refetch:F,mutate:o}]}function ee(e){if(M)return e();let t;const n=M=[];try{t=e()}finally{M=null}return re(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==D){const o=s.pending;s.pending=D,de(s,o)}}},!1),t}function R(e){let t,n=y;return y=null,t=e(),y=n,t}function Ce(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(o){o=!1;return}const u=R(()=>t(l,s,i));return s=l,u}}function Re(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function ke(){return m}function Ge(e,t){const n=m;m=e;try{return re(t,!0)}finally{m=n}}function Xe(e){const t=y,n=m;return Promise.resolve().then(()=>{y=t,m=n;let r;return ee(e),y=m=null,r?r.done:void 0})}function Je(){return[He,Xe]}function Le(e){const t=Symbol("context");return{id:t,Provider:et(t),defaultValue:e}}function he(e){let t;return(t=qe(m,e.id))!==void 0?t:e.defaultValue}function Qe(e){const t=S(e);return S(()=>ce(t()))}let ze;function Te(){const e=k;if(this.sources&&(this.state||e)){const t=E;E=null,this.state===q||e?G(this):te(this),E=t}if(y){const t=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(t)):(y.sources=[this],y.sourceSlots=[t]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function de(e,t,n){if(M)return e.pending===D&&M.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&re(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];r&&k.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?E.push(o):_.push(o),o.observers&&_e(o)),r||(o.state=q)}if(E.length>1e6)throw E=[],new Error},!1),t}function G(e){if(!e.fn)return;ge(e);const t=m,n=y,r=fe;y=m=e,Ye(e,e.value,r),y=n,m=t}function Ye(e,t,n){let r;try{r=e.fn(t)}catch(s){$e(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?de(e,r):e.value=r,e.updatedAt=n)}function pe(e,t,n,r=q,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==xe&&(m.owned?m.owned.push(o):m.owned=[o]),o}function Oe(e){const t=k;if(e.state===0||t)return;if(e.state===Y||t)return te(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<fe);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===q||t)G(e);else if(e.state===Y||t){const s=E;E=null,te(e,n[0]),E=s}}function re(e,t){if(E)return e();let n=!1;t||(E=[]),_?n=!0:_=[],fe++;try{const r=e();return Ze(n),r}catch(r){$e(r)}finally{E=null,n||(_=null)}}function Ze(e){E&&(Ne(E),E=null),!e&&(_.length?ee(()=>{Me(_),_=null}):_=null)}function Ne(e){for(let t=0;t<e.length;t++)Oe(e[t])}function te(e,t){const n=k;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===q||n?s!==t&&Oe(s):(s.state===Y||n)&&te(s,t))}}function _e(e){const t=k;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=Y,r.pure?E.push(r):_.push(r),r.observers&&_e(r))}}function ge(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.owned){for(t=0;t<e.owned.length;t++)ge(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function $e(e){throw e}function qe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:qe(e.owner,t):void 0}function ce(e){if(typeof e=="function"&&!e.length)return ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ce(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function et(e){return function(n){let r;return ue(()=>r=R(()=>(m.context={[e]:n.value},Qe(()=>n.children)))),r}}function b(e,t){return R(()=>e(t||{}))}function me(e){let t,n;const r=s=>{const o=v.context;if(o){const[l,u]=C();(n||(n=e())).then(c=>{J(o),u(()=>c.default),J()}),t=l}else if(t){const l=t();if(l)return l(s)}else{const[l]=We(()=>(n||(n=e())).then(u=>u.default));t=l}let i;return S(()=>(i=t())&&R(()=>{if(!o)return i(s);const l=v.context;J(o);const u=i(s);return J(l),u}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}function Ie(e){let t=!1;const n=S(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return S(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?R(()=>s(r)):s}return e.fallback})}function tt(e,t,n){let r=n.length,s=t.length,o=r,i=0,l=0,u=t[s-1].nextSibling,c=null;for(;i<s||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const f=o<r?l?n[l-1].nextSibling:n[o-l]:u;for(;l<o;)e.insertBefore(n[l++],f)}else if(o===l)for(;i<s;)(!c||!c.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[s-1]){const f=t[--s].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],f),t[s]=n[o]}else{if(!c){c=new Map;let w=l;for(;w<o;)c.set(n[w],w++)}const f=c.get(t[i]);if(f!=null)if(l<f&&f<o){let w=i,g=1,d;for(;++w<s&&w<o&&!((d=c.get(t[w]))==null||d!==f+g);)g++;if(g>f-l){const P=t[i];for(;l<f;)e.insertBefore(n[l++],P)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const Se="_$DX_DELEGATE";function nt(e,t,n){let r;return Ae(s=>{r=s,t===document?e():rt(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function It(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function Bt(e,t=window.document){const n=t[Se]||(t[Se]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,st))}}function rt(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ne(e,t,r,n);Z(s=>ne(e,t(),s,n),r)}function st(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),v.registry&&!v.done&&(v.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r(s,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ne(e,t,n,r,s){for(v.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(v.context)return n;if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=U(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(v.context)return n;n=U(e,n,r)}else{if(o==="function")return Z(()=>{let l=t();for(;typeof l=="function";)l=l();n=ne(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[];if(ae(l,t,s))return Z(()=>n=ne(e,l,n,r,!0)),()=>n;if(v.context){for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=U(e,n,r),i)return n}else Array.isArray(n)?n.length===0?Ee(e,l,r):tt(e,n,l):(n&&U(e),Ee(e,l));n=l}else if(t instanceof Node){if(v.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=U(e,n,r,t);U(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ae(e,t,n){let r=!1;for(let s=0,o=t.length;s<o;s++){let i=t[s],l;if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=ae(e,i)||r;else if((l=typeof i)=="string")e.push(document.createTextNode(i));else if(l==="function")if(n){for(;typeof i=="function";)i=i();r=ae(e,Array.isArray(i)?i:[i])||r}else e.push(i),r=!0;else e.push(document.createTextNode(i.toString()))}return r}function Ee(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function U(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(s!==l){const u=l.parentNode===e;!o&&!i?u?e.replaceChild(s,l):e.insertBefore(s,n):u&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}function ot(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function it([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function lt(e){try{return document.querySelector(e)}catch{return null}}function ut(e,t){const n=lt(`a#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function ct(e,t,n,r){let s=!1;const o=l=>typeof l=="string"?{value:l}:l,i=it(C(o(e()),{equals:(l,u)=>l.value===u.value}),void 0,l=>(!s&&t(l),l));return n&&Re(n((l=e())=>{s=!0,i[1](o(l)),s=!1})),{signal:i,utils:r}}function at(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:C({value:""})};return e}function ft(){return ct(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),ut(window.location.hash.slice(1),n)},e=>ot(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const ht=/^(?:[a-z0-9]+:)?\/\//i,dt=/^\/+|\/+$/g;function H(e,t=!1){const n=e.replace(dt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Q(e,t,n){if(ht.test(t))return;const r=H(e),s=n&&H(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+H(t,!o)}function pt(e,t){if(e==null)throw new Error(t);return e}function Be(e,t){return H(e).replace(/\/*(\*.*)?$/g,"")+H(t)}function gt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function V(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function mt(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return i=>{const l=i.split("/").filter(Boolean),u=l.length-o;if(u<0||u>0&&r===void 0&&!t)return null;const c={path:o?"":"/",params:{}};for(let f=0;f<o;f++){const w=s[f],g=l[f];if(w[0]===":")c.params[w.slice(1)]=g;else if(w.localeCompare(g,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${g}`}return r&&(c.params[r]=u?l.slice(-u).join("/"):""),c}}function yt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function je(e){const t=new Map,n=ke();return new Proxy({},{get(r,s){return t.has(s)||Ge(n,()=>t.set(s,S(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}const wt=100,Ue=Le(),se=Le(),oe=()=>pt(he(Ue),"Make sure your app is wrapped in a <Router />");let W;const Ve=()=>W||he(se)||oe().base,jt=()=>oe().navigatorFactory(),Ut=()=>oe().location;function bt(e,t="",n){const{path:r,component:s,data:o,children:i}=e,l=!i||Array.isArray(i)&&!i.length,u=Be(t,r),c=l?u:u.split("/*",1)[0];return{originalPath:r,pattern:c,element:s?()=>b(s,{}):()=>{const{element:f}=e;return f===void 0&&n?b(n,{}):f},preload:e.component?s.preload:e.preload,data:o,matcher:mt(c,!l)}}function vt(e,t=0){return{routes:e,score:yt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function De(e,t="",n,r=[],s=[]){const o=Array.isArray(e)?e:[e];for(let i=0,l=o.length;i<l;i++){const u=o[i];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=bt(u,t,n);if(r.push(c),u.children)De(u.children,c.pattern,n,r,s);else{const f=vt([...r],s.length);s.push(f)}r.pop()}}return r.length?s:s.sort((i,l)=>l.score-i.score)}function St(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Et(e,t){const n=new URL("http://sar"),r=S(u=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),u}},n,{equals:(u,c)=>u.href===c.href}),s=S(()=>V(r().pathname)),o=S(()=>V(r().search,!0)),i=S(()=>V(r().hash)),l=S(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return i()},get state(){return t()},get key(){return l()},query:je(Ce(o,()=>gt(r())))}}function Pt(e,t="",n,r){const{signal:[s,o],utils:i={}}=at(e),l=i.parsePath||(h=>h),u=i.renderPath||(h=>h),c=Q("",t),f=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[w,g]=Je(),[d,P]=C(s().value),[L,T]=C(s().state),$=Et(d,L),O=[],A={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(h){return Q(c,h)}};if(n)try{W=A,A.data=n({data:void 0,params:{},location:$,navigate:I(A)})}finally{W=void 0}function X(h,a,p){R(()=>{if(typeof a=="number"){a&&(i.go?i.go(a):console.warn("Router integration does not support relative routing"));return}const{replace:x,resolve:K,scroll:we,state:B}={replace:!1,resolve:!0,scroll:!0,...p},N=K?h.resolvePath(a):Q("",a);if(N===void 0)throw new Error(`Path '${a}' is not a routable path`);if(O.length>=wt)throw new Error("Too many redirects");const j=d();if(N!==j||B!==L()){const ie=O.push({value:j,replace:x,scroll:we,state:L()});g(()=>{P(N),T(B)}).then(()=>{O.length===ie&&F({value:N,state:B})})}})}function I(h){return h=h||he(se)||A,(a,p)=>X(h,a,p)}function F(h){const a=O[0];a&&((h.value!==a.value||h.state!==a.state)&&o({...h,replace:a.replace,scroll:a.scroll}),O.length=0)}Z(()=>{const{value:h,state:a}=s();R(()=>{h!==d()&&g(()=>{P(h),T(a)})})});{let h=function(a){if(a.defaultPrevented||a.button!==0||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)return;const p=a.composedPath().find(ve=>ve instanceof Node&&ve.nodeName.toUpperCase()==="A");if(!p)return;const x=p instanceof SVGAElement,K=x?p.href.baseVal:p.href;if((x?p.target.baseVal:p.target)||!K&&!p.hasAttribute("state"))return;const B=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||B&&B.includes("external"))return;const N=x?new URL(K,document.baseURI):new URL(K),j=V(N.pathname);if(N.origin!==window.location.origin||c&&j&&!j.toLowerCase().startsWith(c.toLowerCase()))return;const ie=l(j+V(N.search,!0)+V(N.hash)),be=p.getAttribute("state");a.preventDefault(),X(A,ie,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:be&&JSON.parse(be)})};document.addEventListener("click",h),Re(()=>document.removeEventListener("click",h))}return{base:A,out:f,location:$,isRouting:w,renderPath:u,parsePath:l,navigatorFactory:I}}function xt(e,t,n,r){const{base:s,location:o,navigatorFactory:i}=e,{pattern:l,element:u,preload:c,data:f}=r().route,w=S(()=>r().path),g=je(()=>r().params);c&&c();const d={parent:t,pattern:l,get child(){return n()},path:w,params:g,data:t.data,outlet:u,resolvePath(P){return Q(s.path(),P,w())}};if(f)try{W=d,d.data=f({data:t.data,params:g,location:o,navigate:i(d)})}finally{W=void 0}return d}const At=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,i=t||ft(),l=Pt(i,r,s);return b(Ue.Provider,{value:l,get children(){return e.children}})},Ct=e=>{const t=oe(),n=Ve(),r=S(()=>De(e.children,Be(n.pattern,e.base||""),Rt)),s=S(()=>St(r(),t.location.pathname));t.out&&t.out.matches.push(s().map(({route:u,path:c,params:f})=>({originalPath:u.originalPath,pattern:u.pattern,path:c,params:f})));const o=[];let i;const l=S(Ce(s,(u,c,f)=>{let w=c&&u.length===c.length;const g=[];for(let d=0,P=u.length;d<P;d++){const L=c&&c[d],T=u[d];f&&L&&T.route.pattern===L.route.pattern?g[d]=f[d]:(w=!1,o[d]&&o[d](),Ae($=>{o[d]=$,g[d]=xt(t,g[d-1]||n,()=>l()[d+1],()=>s()[d])}))}return o.splice(u.length).forEach(d=>d()),f&&w?f:(i=g[0],g)}));return b(Ie,{get when(){return l()&&i},children:u=>b(se.Provider,{value:u,get children(){return u.outlet()}})})},le=e=>e,Rt=()=>{const e=Ve();return b(Ie,{get when(){return e.child},children:t=>b(se.Provider,{value:t,get children(){return t.outlet()}})})},Lt="modulepreload",Pe={},Tt="/",ye=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Tt}${r}`,r in Pe)return;Pe[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":Lt,s||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),s)return new Promise((l,u)=>{i.addEventListener("load",l),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Ot=me(()=>ye(()=>import("./Root.50dd67cb.js"),[])),Nt=me(()=>ye(()=>import("./login.26a0759a.js"),[])),_t=me(()=>ye(()=>import("./404.1a678c0a.js"),[]));function $t(){return b(Ct,{get children(){return[b(le,{path:"/",get element(){return b(Ot,{})}}),b(le,{path:"/login",get element(){return b(Nt,{})}}),b(le,{path:"*",get element(){return b(_t,{})}})]}})}nt(()=>b(At,{get children(){return b($t,{})}}),document.getElementById("app"));export{Ut as a,b as c,Bt as d,rt as i,It as t,jt as u};
