var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function i(t,e,n){t.$$.on_destroy.push(s(e,n))}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function p(){return $(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n){e in t?t[e]=n:m(t,e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function b(t,e,n){t.classList[n?"add":"remove"](e)}let w;function k(t){w=t}function x(){const t=function(){if(!w)throw new Error("Function called outside component initialization");return w}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function y(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const _=[],E=[],S=[],L=[],O=Promise.resolve();let T=!1;function N(t){S.push(t)}function q(t){L.push(t)}let j=!1;const C=new Set;function D(){if(!j){j=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];k(e),M(e.$$)}for(k(null),_.length=0;E.length;)E.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];C.has(e)||(C.add(e),e())}S.length=0}while(_.length);for(;L.length;)L.pop()();T=!1,j=!1,C.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const B=new Set;let A;function J(){A={r:0,c:[],p:A}}function U(){A.r||o(A.c),A=A.p}function W(t,e){t&&t.i&&(B.delete(t),t.i(e))}function I(t,e,n,o){if(t&&t.o){if(B.has(t))return;B.add(t),A.c.push((()=>{B.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function z(t,e){I(t,1,1,(()=>{e.delete(t.key)}))}function F(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function R(t){t&&t.c()}function H(t,n,c){const{fragment:s,on_mount:i,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,c),N((()=>{const n=i.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(N)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(_.push(t),T||(T=!0,O.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,r,c,s,i,l,u=[-1]){const f=w;k(e);const $=r.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let d=!1;if(p.ctx=c?c(e,$,((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),d&&G(e,t)),n})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();r.intro&&W(e.$$.fragment),H(e,r.target,r.anchor),D()}k(f)}class Q{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e){let n,o,r,c;return{c(){n=f("button"),o=$(e[0]),m(n,"class","svelte-j25cn1"),b(n,"big",e[1])},m(t,s){u(t,n,s),l(n,o),r||(c=d(n,"click",e[2]),r=!0)},p(t,[e]){1&e&&h(o,t[0]),2&e&&b(n,"big",t[1])},i:t,o:t,d(t){t&&a(n),r=!1,c()}}}function X(t,e,n){let{title:o}=e,{big:r=!1}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"big"in t&&n(1,r=t.big)},[o,r,function(e){y(t,e)}]}class Y extends Q{constructor(t){super(),K(this,t,X,V,c,{title:0,big:1})}}function Z(e){let n,r,c;return{c(){n=f("input"),m(n,"type","text"),m(n,"class","svelte-e91ka9")},m(t,o){u(t,n,o),v(n,e[0]),e[5](n),r||(c=[d(n,"input",e[4]),d(n,"keypress",e[2]),d(n,"blur",e[3])],r=!0)},p(t,[e]){1&e&&n.value!==t[0]&&v(n,t[0])},i:t,o:t,d(t){t&&a(n),e[5](null),r=!1,o(c)}}}function tt(t,e,n){let o,{text:r}=e;const c=x();return t.$$set=t=>{"text"in t&&n(0,r=t.text)},[r,o,function(t){13===t.charCode&&(c("submit"),o.blur())},function(e){y(t,e)},function(){r=this.value,n(0,r)},function(t){E[t?"unshift":"push"]((()=>{o=t,n(1,o)}))}]}class et extends Q{constructor(t){super(),K(this,t,tt,Z,c,{text:0})}}function nt(e){let n,o,r,c;return n=new Y({props:{title:"Today"}}),n.$on("click",e[3]("moveLeft")),{c(){R(n.$$.fragment),o=p(),r=f("spacer"),m(r,"class","svelte-cuo5qf")},m(t,e){H(n,t,e),u(t,o,e),u(t,r,e),c=!0},p:t,i(t){c||(W(n.$$.fragment,t),c=!0)},o(t){I(n.$$.fragment,t),c=!1},d(t){P(n,t),t&&a(o),t&&a(r)}}}function ot(e){let n,o,r,c,s,i,$,d,h,v,b,w,k,x,y;return o=new Y({props:{title:"Hurry",big:!0}}),o.$on("click",e[3]("moveUp")),c=new Y({props:{title:"Wait",big:!0}}),c.$on("click",e[3]("moveDown")),d=new Y({props:{title:"Now",big:!0}}),d.$on("click",e[3]("moveTop")),v=new Y({props:{title:"Later",big:!0}}),v.$on("click",e[3]("moveBottom")),x=new Y({props:{title:"Tomorrow",big:!0}}),x.$on("click",e[3]("moveRight")),{c(){n=f("task-line"),R(o.$$.fragment),r=p(),R(c.$$.fragment),s=p(),i=f("spacer"),$=p(),R(d.$$.fragment),h=p(),R(v.$$.fragment),b=p(),w=f("spacer"),k=p(),R(x.$$.fragment),m(i,"class","svelte-cuo5qf"),m(w,"class","svelte-cuo5qf"),g(n,"class","svelte-cuo5qf")},m(t,e){u(t,n,e),H(o,n,null),l(n,r),H(c,n,null),l(n,s),l(n,i),l(n,$),H(d,n,null),l(n,h),H(v,n,null),l(n,b),l(n,w),l(n,k),H(x,n,null),y=!0},p:t,i(t){y||(W(o.$$.fragment,t),W(c.$$.fragment,t),W(d.$$.fragment,t),W(v.$$.fragment,t),W(x.$$.fragment,t),y=!0)},o(t){I(o.$$.fragment,t),I(c.$$.fragment,t),I(d.$$.fragment,t),I(v.$$.fragment,t),I(x.$$.fragment,t),y=!1},d(t){t&&a(n),P(o),P(c),P(d),P(v),P(x)}}}function rt(t){let e,n,o,r,c,s,i,$,d,m=!t[1]&&nt(t);function h(e){t[4].call(null,e)}let v={};void 0!==t[0]&&(v.text=t[0]),r=new et({props:v}),E.push((()=>F(r,"text",h))),r.$on("blur",t[5]),i=new Y({props:{title:"Done"}}),i.$on("click",t[3]("close"));let b=t[1]&&ot(t);return{c(){e=f("task-panel"),n=f("task-line"),m&&m.c(),o=p(),R(r.$$.fragment),s=p(),R(i.$$.fragment),$=p(),b&&b.c(),g(n,"class","svelte-cuo5qf"),g(e,"class","svelte-cuo5qf")},m(t,c){u(t,e,c),l(e,n),m&&m.m(n,null),l(n,o),H(r,n,null),l(n,s),H(i,n,null),l(e,$),b&&b.m(e,null),d=!0},p(t,[s]){t[1]?m&&(J(),I(m,1,1,(()=>{m=null})),U()):m?(m.p(t,s),2&s&&W(m,1)):(m=nt(t),m.c(),W(m,1),m.m(n,o));const i={};!c&&1&s&&(c=!0,i.text=t[0],q((()=>c=!1))),r.$set(i),t[1]?b?(b.p(t,s),2&s&&W(b,1)):(b=ot(t),b.c(),W(b,1),b.m(e,null)):b&&(J(),I(b,1,1,(()=>{b=null})),U())},i(t){d||(W(m),W(r.$$.fragment,t),W(i.$$.fragment,t),W(b),d=!0)},o(t){I(m),I(r.$$.fragment,t),I(i.$$.fragment,t),I(b),d=!1},d(t){t&&a(e),m&&m.d(),P(r),P(i),b&&b.d()}}}function ct(t,e,n){const o=x();let{current:r}=e,{title:c}=e;return t.$$set=t=>{"current"in t&&n(1,r=t.current),"title"in t&&n(0,c=t.title)},[c,r,o,t=>()=>o(t),function(t){c=t,n(0,c)},()=>o("changed",c)]}class st extends Q{constructor(t){super(),K(this,t,ct,rt,c,{current:1,title:0})}}function it(t,e,n){const o=t.slice();return o[14]=e[n],o}function lt(t,e){let n,o,r;return o=new st({props:{current:e[0],title:e[14].title}}),o.$on("changed",(function(...t){return e[5](e[14],...t)})),o.$on("close",(function(...t){return e[6](e[14],...t)})),o.$on("moveDown",(function(...t){return e[7](e[14],...t)})),o.$on("moveBottom",(function(...t){return e[8](e[14],...t)})),o.$on("moveUp",(function(...t){return e[9](e[14],...t)})),o.$on("moveTop",(function(...t){return e[10](e[14],...t)})),o.$on("moveLeft",(function(...t){return e[11](e[14],...t)})),o.$on("moveRight",(function(...t){return e[12](e[14],...t)})),{key:t,first:null,c(){n=$(""),R(o.$$.fragment),this.first=n},m(t,e){u(t,n,e),H(o,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.current=e[0]),4&n&&(r.title=e[14].title),o.$set(r)},i(t){r||(W(o.$$.fragment,t),r=!0)},o(t){I(o.$$.fragment,t),r=!1},d(t){t&&a(n),P(o,t)}}}function ut(t){let e,n,o=[],r=new Map,c=t[2];const s=t=>t[14].id;for(let e=0;e<c.length;e+=1){let n=it(t,c,e),i=s(n);r.set(i,o[e]=lt(i,n))}return{c(){e=f("task-list");for(let t=0;t<o.length;t+=1)o[t].c();g(e,"class","svelte-69b54a")},m(t,r){u(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){if(31&n){const c=t[2];J(),o=function(t,e,n,o,r,c,s,i,l,u,a,f){let $=t.length,p=c.length,d=$;const m={};for(;d--;)m[t[d].key]=d;const g=[],h=new Map,v=new Map;for(d=p;d--;){const t=f(r,c,d),i=n(t);let l=s.get(i);l?o&&l.p(t,e):(l=u(i,t),l.c()),h.set(i,g[d]=l),i in m&&v.set(i,Math.abs(d-m[i]))}const b=new Set,w=new Set;function k(t){W(t,1),t.m(i,a),s.set(t.key,t),a=t.first,p--}for(;$&&p;){const e=g[p-1],n=t[$-1],o=e.key,r=n.key;e===n?(a=e.first,$--,p--):h.has(r)?!s.has(o)||b.has(o)?k(e):w.has(r)?$--:v.get(o)>v.get(r)?(w.add(o),k(e)):(b.add(r),$--):(l(n,s),$--)}for(;$--;){const e=t[$];h.has(e.key)||l(e,s)}for(;p;)k(g[p-1]);return g}(o,n,s,1,t,c,r,e,z,lt,null,it),U()}},i(t){if(!n){for(let t=0;t<c.length;t+=1)W(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)I(o[t]);n=!1},d(t){t&&a(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function at(e,n,o){let r,c=t,i=()=>(c(),c=s(a,(t=>o(2,r=t))),a);e.$$.on_destroy.push((()=>c()));const l=x();let{current:u}=n,{taskList:a}=n;function f(t){a.remove(t),l("left",t)}function $(t){a.remove(t),l("right",t)}i();return e.$$set=t=>{"current"in t&&o(0,u=t.current),"taskList"in t&&i(o(1,a=t.taskList))},[u,a,r,f,$,(t,e)=>a.updateTask(t,e.detail),t=>a.remove(t),t=>a.moveDown(t),t=>a.moveBottom(t),t=>a.moveUp(t),t=>a.moveTop(t),t=>f(t),t=>$(t)]}class ft extends Q{constructor(t){super(),K(this,t,at,ut,c,{current:0,taskList:1})}}const $t=[];function pt(e){const n=function(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!$t.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),$t.push(n,e)}if(t){for(let t=0;t<$t.length;t+=2)$t[t][0]($t[t+1]);$t.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const l=[c,i];return r.push(l),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}(e);return{subscribe:n.subscribe.bind(n),moveUp(t){n.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e.splice(n-1,0,t),e}))},moveDown(t){n.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e.splice(n+1,0,t),e}))},moveTop(t){n.update((e=>(e.splice(e.indexOf(t),1),e.unshift(t),e)))},moveBottom(t){n.update((e=>(e.splice(e.indexOf(t),1),e.push(t),e)))},add(t){n.update((e=>(e.push(t),e)))},remove(t){n.update((e=>(e.splice(e.indexOf(t),1),e)))},updateTask(t,e){n.update((n=>(t.title=e,n)))},set(t){n.set(t)}}}let dt=!0;const mt=function(){const t=localStorage.getItem("state");return t&&JSON.parse(t)||{current:[],next:[]}}();history.replaceState(mt,document.title);const gt=pt(mt.current),ht=pt(mt.next);function vt(t){t.state&&(dt=!0,gt.set(t.state.current),ht.set(t.state.next),console.debug("loaded",JSON.stringify(t.state)))}function bt(e){let n,o;return{c(){n=f("a"),o=$(e[1]),m(n,"rel","noreferrer"),m(n,"target","_blank"),m(n,"tabindex","-1"),m(n,"href",e[0]),m(n,"title",e[1]),m(n,"class","svelte-zfdknj")},m(t,e){u(t,n,e),l(n,o)},p(t,[e]){2&e&&h(o,t[1]),1&e&&m(n,"href",t[0]),2&e&&m(n,"title",t[1])},i:t,o:t,d(t){t&&a(n)}}}function wt(t,e,n){let{href:o}=e,{title:r}=e;return t.$$set=t=>{"href"in t&&n(0,o=t.href),"title"in t&&n(1,r=t.title)},[o,r]}class kt extends Q{constructor(t){super(),K(this,t,wt,bt,c,{href:0,title:1})}}function xt(e){let n,o,r;return o=new ft({props:{current:!1,taskList:ht}}),o.$on("left",e[5]),{c(){n=f("column"),R(o.$$.fragment),m(n,"class","next svelte-dtti0i")},m(t,e){u(t,n,e),H(o,n,null),r=!0},p:t,i(t){r||(W(o.$$.fragment,t),r=!0)},o(t){I(o.$$.fragment,t),r=!1},d(t){t&&a(n),P(o)}}}function yt(t){let e,n,o,r,c,s,i,g,h,v,b,w,k,x,y,_,S,L,O,T;function N(e){t[3].call(null,e)}let j={};void 0!==t[0]&&(j.text=t[0]),o=new et({props:j}),E.push((()=>F(o,"text",N))),o.$on("submit",t[2]),s=new Y({props:{title:"Create"}}),s.$on("click",t[2]),v=new ft({props:{current:!0,taskList:gt}}),v.$on("right",t[4]);let C=t[1].length&&xt(t);return y=new kt({props:{href:"https://www.flaticon.com/authors/dinosoftlabs",title:"DinosoftLabs"}}),S=new kt({props:{href:"https://www.flaticon.com/",title:"Flaticon"}}),{c(){e=f("main"),n=f("create"),R(o.$$.fragment),c=p(),R(s.$$.fragment),i=p(),g=f("tasks"),h=f("column"),R(v.$$.fragment),b=p(),C&&C.c(),w=p(),k=f("legal"),x=$("Icons made by\n    "),R(y.$$.fragment),_=$("\n    from\n    "),R(S.$$.fragment),m(n,"class","svelte-dtti0i"),m(h,"class","svelte-dtti0i"),m(g,"class","svelte-dtti0i"),m(k,"class","svelte-dtti0i")},m(t,r){u(t,e,r),l(e,n),H(o,n,null),l(n,c),H(s,n,null),l(e,i),l(e,g),l(g,h),H(v,h,null),l(g,b),C&&C.m(g,null),u(t,w,r),u(t,k,r),l(k,x),H(y,k,null),l(k,_),H(S,k,null),L=!0,O||(T=d(window,"popstate",vt),O=!0)},p(t,[e]){const n={};!r&&1&e&&(r=!0,n.text=t[0],q((()=>r=!1))),o.$set(n),t[1].length?C?(C.p(t,e),2&e&&W(C,1)):(C=xt(t),C.c(),W(C,1),C.m(g,null)):C&&(J(),I(C,1,1,(()=>{C=null})),U())},i(t){L||(W(o.$$.fragment,t),W(s.$$.fragment,t),W(v.$$.fragment,t),W(C),W(y.$$.fragment,t),W(S.$$.fragment,t),L=!0)},o(t){I(o.$$.fragment,t),I(s.$$.fragment,t),I(v.$$.fragment,t),I(C),I(y.$$.fragment,t),I(S.$$.fragment,t),L=!1},d(t){t&&a(e),P(o),P(s),P(v),C&&C.d(),t&&a(w),t&&a(k),P(y),P(S),O=!1,T()}}}function _t(t,e,n){let o,r;i(t,gt,(t=>n(7,o=t))),i(t,ht,(t=>n(1,r=t)));let c="",s=Math.max(0,...o.map((({id:t})=>t)),...r.map((({id:t})=>t)))+1;return t.$$.update=()=>{130&t.$$.dirty&&!o.length&&r.length&&(gt.set(r),ht.set([])),130&t.$$.dirty&&function(t){localStorage.setItem("state",JSON.stringify(t)),console.debug("saved","state",JSON.stringify(t)),dt?dt=!1:history.pushState(t,document.title)}({current:o,next:r}),64&t.$$.dirty&&console.debug("counter",s)},[c,r,function(){gt.add({id:n(6,s++,s),title:c}),n(0,c="")},function(t){c=t,n(0,c)},t=>ht.add(t.detail),t=>gt.add(t.detail)]}(async function(){if(!("serviceWorker"in navigator))throw new Error("No service worker support");const t=await navigator.serviceWorker.register("service-worker.js");console.log("ServiceWorker registration successful with scope: ",t.scope),await t.update(),console.log("updated")})().catch((t=>console.warn("Service worker failed:",t)));return new class extends Q{constructor(t){super(),K(this,t,_t,yt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map