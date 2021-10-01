var app=function(){"use strict";function t(){}function e(t){return t()}function r(){return Object.create(null)}function n(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function h(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}let l;function f(t){l=t}const g=[],m=[],w=[],d=[],$=Promise.resolve();let v=!1;function y(t){w.push(t)}let b=!1;const k=new Set;function x(){if(!b){b=!0;do{for(let t=0;t<g.length;t+=1){const e=g[t];f(e),E(e.$$)}for(f(null),g.length=0;m.length;)m.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];k.has(e)||(k.add(e),e())}w.length=0}while(g.length);for(;d.length;)d.pop()();v=!1,b=!1,k.clear()}}function E(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const _=new Set;function A(t,e){-1===t.$$.dirty[0]&&(g.push(t),v||(v=!0,$.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(i,s,a,u,p,h,g,m=[-1]){const w=l;f(i);const d=i.$$={fragment:null,ctx:null,props:h,update:t,not_equal:p,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(w?w.$$.context:[])),callbacks:r(),dirty:m,skip_bound:!1,root:s.target||w.$$.root};g&&g(d.root);let $=!1;if(d.ctx=a?a(i,s.props||{},((t,e,...r)=>{const n=r.length?r[0]:e;return d.ctx&&p(d.ctx[t],d.ctx[t]=n)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](n),$&&A(i,t)),e})):[],d.update(),$=!0,n(d.before_update),d.fragment=!!u&&u(d.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);d.fragment&&d.fragment.l(t),t.forEach(c)}else d.fragment&&d.fragment.c();s.intro&&((v=i.$$.fragment)&&v.i&&(_.delete(v),v.i(b))),function(t,r,i,s){const{fragment:c,on_mount:a,on_destroy:u,after_update:p}=t.$$;c&&c.m(r,i),s||y((()=>{const r=a.map(e).filter(o);u?u.push(...r):n(r),t.$$.on_mount=[]})),p.forEach(y)}(i,s.target,s.anchor,s.customElement),x()}var v,b;f(w)}function M(e){let r,n,o,i,l,f,g,m,w;return{c(){r=a("main"),n=a("h1"),o=u("Hello "),i=u(e[0]),l=u("!"),f=p(),g=a("i"),m=p(),w=a("p"),w.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn\n    how to build Svelte apps.',h(n,"class","svelte-1hoym3u"),h(g,"class","fas fa-user"),h(r,"class","svelte-1hoym3u")},m(t,e){!function(t,e,r){t.insertBefore(e,r||null)}(t,r,e),s(r,n),s(n,o),s(n,i),s(n,l),s(r,f),s(r,g),s(r,m),s(r,w)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(i,t[0])},i:t,o:t,d(t){t&&c(r)}}}function V(t,e,r){let{name:n}=e;return t.$$set=t=>{"name"in t&&r(0,n=t.name)},[n]}class R{constructor({token:t,priority:e=0,oneArgument:r=!1,view:n,calc:o}={}){if(this.token=t,this.priority=e,this.oneArgument=r,this.calc=o,n)this.view=n;else{const e=Array.isArray(t);if(e&&!t.length)throw new Error("View is required for twoArgument operators without token");const n=e?t[0]:t;this.view=r?t=>`${t}${n}`:(t,e)=>`${t} ${n} ${e}`}}}var O=new R({token:"empty",oneArgument:!0,view:t=>t,calc:t=>t}),T=new R({token:"+",calc:(t,e)=>t+e}),j=new R({token:"-",calc:(t,e)=>t-e}),B=new R({token:"*",priority:5,calc:(t,e)=>t*e}),N=new R({token:"/",priority:5,calc:(t,e)=>t/e}),q=new R({token:"^",priority:5,calc:(t,e)=>t**e,view:(t,e)=>`${t}^${e}`}),D=new R({token:"sqr",priority:5,oneArgument:!0,calc:t=>t*t});const C=t=>{if(t<0)throw new Error("Negative value hasn't factorial");if(t%1)throw new Error("Fraction value hasn't factorial");return t>=0&&t<=2?t:t*C(t-1)};var F=new R({token:"!",priority:10,oneArgument:!0,calc:C,view:t=>`${t}!`});const H=[T,j,B,N,q,D,F];class I{constructor(t,e,r){if(this.operator=t,this.v1=e,this.v2=r,!t.oneArgument&&void 0===r)throw new Error(`Operator "${t.token}" require two arguments`)}getMaxDepth(){const t=this.v1 instanceof I?this.v1.getMaxDepth()+1:1,e=this.v2 instanceof I?this.v2.getMaxDepth()+1:1;return Math.max(t,e)}getV1View(t=1){if(0===t)return`${this.exec()}`;if(this.v1 instanceof I){const e=this.v1.operator.priority<this.operator.priority,r=this.v1.view(t-1);return e&&t>1?`(${r})`:r}return`${this.v1}`}getV2View(t=1){if(0===t)return`${this.exec()}`;if(this.v2 instanceof I){const e=this.v2.operator.priority<this.operator.priority,r=this.v2.view(t-1);return e&&t>1?`(${r})`:r}return`${this.v2}`}view(t=1){if(t<0){const e=this.getMaxDepth();t=Math.max(e+1+t,0)}if(0===t)return`${this.exec()}`;const e=this.getV1View(t);if(this.operator.oneArgument)return this.operator.view(e);const r=this.getV2View(t);return this.operator.view(e,r)}exec(){if(this.result)return this.result;const t=this.v1 instanceof I?this.v1.exec():this.v1;if(this.operator.oneArgument)return this.result=this.operator.calc(t),this.result;const e=this.v2 instanceof I?this.v2.exec():this.v2;return this.result=this.operator.calc(t,e),this.result}}const L=(t="")=>t.replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&");class P{constructor({operators:t=H}={}){this.operators=t}getMatchRegex(){const t=[{matcher:this.operators.reduce(((t,{token:e})=>t.concat(e)),[]).map(L).join("|"),name:"operator"},{matcher:P.numberRegexpString,name:"number"},{matcher:P.bracketsRegexpString,name:"bracket"}].map((({name:t,matcher:e})=>`(?<${t}>${e})`)).join("|");return new RegExp(t,"g")}static validateBrackets(t){const e=t.match(new RegExp(P.bracketsRegexpString,"g"));if(!e)return!0;let r=0;return e.forEach((t=>{")"===t?r--:r++})),0===r}getOperatorByToken(t){return this.operators.find((e=>"string"==typeof e.token?e.token===t:e.token.includes(t)))}parseString(t){const e=((t,e)=>{const r=[];let n;for(;n=t.exec(e);)r.push(n);return r})(this.getMatchRegex(),t),r=[];let n=0;return e.forEach((({groups:t},o)=>{const{number:i,bracket:s,operator:c}=t,a=e[o-1],u=e[o+1];if(s)")"===s?n-=100:"("===s&&(a&&a.groups.number&&r.push({operator:B,priority:n+B.priority}),n+=100);else if(c)if("+"!==c&&"-"!==c||a&&!(a&&a.groups.operator&&u&&u.groups.number)){const t=this.getOperatorByToken(c);r.push({operator:t,priority:n+t.priority})}else u.groups.number=`${c}${u.groups.number}`;else if(i){const{groups:{bracket:t=null}={}}=a||{};")"===t&&r.push({operator:B,priority:n+B.priority}),r.push(parseFloat(i.replace(",",".")))}})),r}compile(t=""){if(!P.validateBrackets(t))throw new Error("Invalid brackets");const e=this.parseString(t),r=e.filter((t=>"number"!=typeof t)),n=e.slice();if(r.sort(((t,e)=>e.priority-t.priority)).forEach((t=>{const{operator:e,priority:r}=t,o=n.indexOf(t),i=n[o-1];if(i&&"number"!=typeof i&&!(i instanceof I)){const{operator:{token:t}}=i;throw new Error(`Two operators in a row 1:"${t}", 2:"${e.token}"`)}if(e.oneArgument)n.splice(o-1,2,new I(e,i));else{const t=n[o+1];if(t&&"number"!=typeof t&&!(t instanceof I)){const{operator:{token:r}}=t;throw new Error(`Two operators in a row 1:"${e.token}", 2:"${r}"`)}n.splice(o-1,3,new I(e,i,t))}})),n.length>1)throw new Error('Wrong arguments location with "oneArgument" operators');if(!n.length)throw new Error("No operators");const o=n[0];return"number"==typeof o?new I(O,o):o}calc(t=""){return this.compile(t).exec()}}P.numberRegexpString="(?:[-+])?\\d+(?:[,.]\\d+)?",P.bracketsRegexpString="[()]";const W=new class extends class{$destroy(){!function(t,e){const r=t.$$;null!==r.fragment&&(n(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,V,M,i,{name:0})}}({target:document.body,props:{name:"world"}});return window.Calculator=P,window.calc=new P,W}();
//# sourceMappingURL=bundle.js.map
