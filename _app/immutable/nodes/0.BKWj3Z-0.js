import{_ as ct}from"../chunks/preload-helper.D6kgxu3v.js";import{w as pe,d as be}from"../chunks/index.pxFgy7K0.js";import{u as $,s as Kt,n as Rt,c as qt,v as d0,w as He,x as f0,y as p0,z as h0,r as v0,d as m0}from"../chunks/scheduler.CS99l211.js";import{S as Wt,i as Jt,e as p,s as L,t as H,c as h,a as w,y as te,f as O,b as G,d as g,o as d,g as B,h as n,j as J,u as g0,v as b0,w as y0,z as je,n as St,l as zt,x as w0}from"../chunks/index.Beu8SjOS.js";var k0=Object.defineProperty,_0=Object.defineProperties,L0=Object.getOwnPropertyDescriptors,Ge=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable,It=(l,t,e)=>t in l?k0(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,k=(l,t)=>{for(var e in t||(t={}))Zt.call(t,e)&&It(l,e,t[e]);if(Ge)for(var e of Ge(t))Qt.call(t,e)&&It(l,e,t[e]);return l},M=(l,t)=>_0(l,L0(t)),ye=(l,t)=>{var e={};for(var a in l)Zt.call(l,a)&&t.indexOf(a)<0&&(e[a]=l[a]);if(l!=null&&Ge)for(var a of Ge(l))t.indexOf(a)<0&&Qt.call(l,a)&&(e[a]=l[a]);return e},ut=["error","warn","debug"],Xt=({logger:l=console,level:t=ut[1],prefix:e="[i18n]: "})=>ut.reduce((a,r,o)=>M(k({},a),{[r]:s=>ut.indexOf(t)>=o&&l[r](`${e}${s}`)}),{}),_=Xt({}),O0=l=>{_=l},Ft=l=>{var t=l,{parser:e,key:a,params:r,translations:o,locale:s,fallbackLocale:i}=t,c=ye(t,["parser","key","params","translations","locale","fallbackLocale"]);if(!a)return _.warn(`No translation key provided ('${s}' locale). Skipping translation...`),"";if(!s)return _.warn(`No locale provided for '${a}' key. Skipping translation...`),"";let u=(o[s]||{})[a];if(i&&u===void 0&&(_.debug(`No translation provided for '${a}' key in locale '${s}'. Trying fallback '${i}'`),u=(o[i]||{})[a]),u===void 0){if(_.debug(`No translation provided for '${a}' key in fallback '${i}'.`),c.hasOwnProperty("fallbackValue"))return c.fallbackValue;_.warn(`No translation nor fallback found for '${a}' .`)}return e.parse(u,r,s,a)},R=(...l)=>l.length?l.filter(t=>!!t).map(t=>{let e=`${t}`.toLowerCase();try{let[a]=Intl.Collator.supportedLocalesOf(t);if(!a)throw new Error;e=a}catch{_.warn(`'${t}' locale is non-standard.`)}return e}):[],Ne=(l,t,e)=>{if(t&&Array.isArray(l))return l.map(a=>Ne(a,t));if(l&&typeof l=="object"){let a=Object.keys(l).reduce((r,o)=>{let s=l[o],i=e?`${e}.${o}`:`${o}`;return s&&typeof s=="object"&&!(t&&Array.isArray(s))?k(k({},r),Ne(s,t,i)):M(k({},r),{[i]:Ne(s,t)})},{});return Object.keys(a).length?a:null}return l},$0=l=>l.reduce((t,{key:e,data:a,locale:r})=>{if(!a)return t;let[o]=R(r),s=M(k({},t[o]||{}),{[e]:a});return M(k({},t),{[o]:s})},{}),x0=async l=>{try{let t=await Promise.all(l.map(e=>{var a=e,{loader:r}=a,o=ye(a,["loader"]);return new Promise(async s=>{let i;try{i=await r()}catch(c){_.error(`Failed to load translation. Verify your '${o.locale}' > '${o.key}' Loader.`),_.error(c)}s(M(k({loader:r},o),{data:i}))})}));return $0(t)}catch(t){_.error(t)}return{}},T0=l=>t=>{try{if(typeof t=="string")return t===l;if(typeof t=="object")return t.test(l)}catch{_.error("Invalid route config!")}return!1},Nt=(l,t)=>{let e=!0;try{e=Object.keys(l).filter(a=>l[a]!==void 0).every(a=>l[a]===t[a])}catch{}return e},Ht=1e3*60*60*24,j0=class{constructor(t){this.cachedAt=0,this.loadedKeys={},this.currentRoute=pe(),this.config=pe(),this.isLoading=pe(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(e,a)=>{let{fallbackLocale:r}=$(this.config),o=Array.from(this.promises).filter(s=>{let i=Nt({locale:R(e)[0],route:a},s);return r&&(i=i||Nt({locale:R(r)[0],route:a},s)),i}).map(({promise:s})=>s);return Promise.all(o)},get:()=>$(this.isLoading)},this.privateRawTranslations=pe({}),this.rawTranslations={subscribe:this.privateRawTranslations.subscribe,get:()=>$(this.rawTranslations)},this.privateTranslations=pe({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>$(this.translations)},this.locales=M(k({},be([this.config,this.privateTranslations],([e,a])=>{if(!e)return[];let{loaders:r=[]}=e,o=r.map(({locale:i})=>i),s=Object.keys(a).map(i=>i);return Array.from(new Set([...R(...o),...R(...s)]))},[])),{get:()=>$(this.locales)}),this.internalLocale=pe(),this.loaderTrigger=be([this.internalLocale,this.currentRoute],([e,a],r)=>{var o,s;e!==void 0&&a!==void 0&&!(e===((o=$(this.loaderTrigger))==null?void 0:o[0])&&a===((s=$(this.loaderTrigger))==null?void 0:s[1]))&&(_.debug("Triggering translation load..."),r([e,a]))},[]),this.localeHelper=pe(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>$(this.locale)},this.initialized=be([this.locale,this.currentRoute,this.privateTranslations],([e,a,r],o)=>{$(this.initialized)||o(e!==void 0&&a!==void 0&&!!Object.keys(r).length)}),this.translation=be([this.privateTranslations,this.locale,this.isLoading],([e,a,r],o)=>{let s=e[a];s&&Object.keys(s).length&&!r&&o(s)},{}),this.t=M(k({},be([this.config,this.translation],e=>{var[a]=e,r=a,{parser:o,fallbackLocale:s}=r,i=ye(r,["parser","fallbackLocale"]);return(c,...u)=>Ft(k({parser:o,key:c,params:u,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:s},i.hasOwnProperty("fallbackValue")?{fallbackValue:i.fallbackValue}:{}))})),{get:(e,...a)=>$(this.t)(e,...a)}),this.l=M(k({},be([this.config,this.translations],e=>{var[a,...r]=e,o=a,{parser:s,fallbackLocale:i}=o,c=ye(o,["parser","fallbackLocale"]),[u]=r;return(y,b,...T)=>Ft(k({parser:s,key:b,params:T,translations:u,locale:y,fallbackLocale:i},c.hasOwnProperty("fallbackValue")?{fallbackValue:c.fallbackValue}:{}))})),{get:(e,a,...r)=>$(this.l)(e,a,...r)}),this.getLocale=e=>{let{fallbackLocale:a}=$(this.config)||{},r=e||a;if(!r)return;let o=this.locales.get();return o.find(s=>R(r).includes(s))||o.find(s=>R(a).includes(s))},this.setLocale=e=>{if(e&&e!==$(this.internalLocale))return _.debug(`Setting '${e}' locale.`),this.internalLocale.set(e),this.loading.toPromise(e,$(this.currentRoute))},this.setRoute=e=>{if(e!==$(this.currentRoute)){_.debug(`Setting '${e}' route.`),this.currentRoute.set(e);let a=$(this.internalLocale);return this.loading.toPromise(a,e)}},this.loadConfig=async e=>{await this.configLoader(e)},this.getTranslationProps=async(e=this.locale.get(),a=$(this.currentRoute))=>{let r=$(this.config);if(!r||!e)return[];let o=this.translations.get(),{loaders:s,fallbackLocale:i="",cache:c=Ht}=r||{},u=Number.isNaN(+c)?Ht:+c;this.cachedAt?Date.now()>u+this.cachedAt&&(_.debug("Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(_.debug("Setting cache timestamp."),this.cachedAt=Date.now());let[y,b]=R(e,i),T=o[y],P=o[b],C=(s||[]).map(v=>{var j=v,{locale:S}=j,V=ye(j,["locale"]);return M(k({},V),{locale:R(S)[0]})}).filter(({routes:v})=>!v||(v||[]).some(T0(a))).filter(({key:v,locale:j})=>j===y&&(!T||!(this.loadedKeys[y]||[]).includes(v))||i&&j===b&&(!P||!(this.loadedKeys[b]||[]).includes(v)));if(C.length){this.isLoading.set(!0),_.debug("Fetching translations...");let v=await x0(C);this.isLoading.set(!1);let j=Object.keys(v).reduce((V,x)=>M(k({},V),{[x]:Object.keys(v[x])}),{}),S=C.filter(({key:V,locale:x})=>(j[x]||[]).some(D=>`${D}`.startsWith(V))).reduce((V,{key:x,locale:D})=>M(k({},V),{[D]:[...V[D]||[],x]}),{});return[v,S]}return[]},this.addTranslations=(e,a)=>{if(!e)return;let r=$(this.config),{preprocess:o}=r||{};_.debug("Adding translations...");let s=Object.keys(e||{});this.privateRawTranslations.update(i=>s.reduce((c,u)=>M(k({},c),{[u]:k(k({},c[u]||{}),e[u])}),i)),this.privateTranslations.update(i=>s.reduce((c,u)=>{let y=!0,b=e[u];return typeof o=="function"&&(b=o(b)),(typeof o=="function"||o==="none")&&(y=!1),M(k({},c),{[u]:k(k({},c[u]||{}),y?Ne(b,o==="preserveArrays"):b)})},i)),s.forEach(i=>{let c=Object.keys(e[i]).map(u=>`${u}`.split(".")[0]);a&&(c=a[i]),this.loadedKeys[i]=Array.from(new Set([...this.loadedKeys[i]||[],...c||[]]))})},this.loader=async([e,a])=>{let r=this.getLocale(e)||void 0;_.debug(`Adding loader promise for '${r}' locale and '${a}' route.`);let o=(async()=>{let s=await this.getTranslationProps(r,a);s.length&&this.addTranslations(...s)})();this.promises.add({locale:r,route:a,promise:o}),o.then(()=>{r&&this.locale.get()!==r&&this.locale.forceSet(r)})},this.loadTranslations=(e,a=$(this.currentRoute)||"")=>{let r=this.getLocale(e);if(r)return this.setRoute(a),this.setLocale(r),this.loading.toPromise(r,a)},this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async e=>{e&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),_.debug("Loader promises have been purged."))}),t&&this.loadConfig(t)}async configLoader(t){if(!t)return _.error("No config provided!");let e=t,{initLocale:a,fallbackLocale:r,translations:o,log:s}=e,i=ye(e,["initLocale","fallbackLocale","translations","log"]);s&&O0(Xt(s)),[a]=R(a),[r]=R(r),_.debug("Setting config."),this.config.set(k({initLocale:a,fallbackLocale:r,translations:o},i)),o&&this.addTranslations(o),a&&await this.loadTranslations(a)}},Yt=Object.defineProperty,V0=Object.defineProperties,C0=Object.getOwnPropertyDescriptors,Be=Object.getOwnPropertySymbols,e0=Object.prototype.hasOwnProperty,t0=Object.prototype.propertyIsEnumerable,Gt=(l,t,e)=>t in l?Yt(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,U=(l,t)=>{for(var e in t||(t={}))e0.call(t,e)&&Gt(l,e,t[e]);if(Be)for(var e of Be(t))t0.call(t,e)&&Gt(l,e,t[e]);return l},pt=(l,t)=>V0(l,C0(t)),ae=(l,t)=>{var e={};for(var a in l)e0.call(l,a)&&t.indexOf(a)<0&&(e[a]=l[a]);if(l!=null&&Be)for(var a of Be(l))t.indexOf(a)<0&&t0.call(l,a)&&(e[a]=l[a]);return e},E0=(l,t)=>{for(var e in t)Yt(l,e,{get:t[e],enumerable:!0})},a0={};E0(a0,{ago:()=>I0,currency:()=>F0,date:()=>R0,eq:()=>ht,gt:()=>r0,gte:()=>P0,lt:()=>l0,lte:()=>M0,ne:()=>A0,number:()=>D0});var Ke=(l,t)=>{let{modifierDefaults:e}=t||{},{[l]:a}=e||{};return a||{}},ht=({value:l,options:t=[],defaultValue:e=""})=>(t.find(({key:a})=>`${a}`.toLowerCase()===`${l}`.toLowerCase())||{}).value||e,A0=({value:l,options:t=[],defaultValue:e=""})=>(t.find(({key:a})=>`${a}`.toLowerCase()!==`${l}`.toLowerCase())||{}).value||e,l0=({value:l,options:t=[],defaultValue:e=""})=>(t.sort((a,r)=>+a.key-+r.key).find(({key:a})=>+l<+a)||{}).value||e,r0=({value:l,options:t=[],defaultValue:e=""})=>(t.sort((a,r)=>+r.key-+a.key).find(({key:a})=>+l>+a)||{}).value||e,M0=({value:l,options:t=[],defaultValue:e=""})=>ht({value:l,options:t,defaultValue:l0({value:l,options:t,defaultValue:e})}),P0=({value:l,options:t=[],defaultValue:e=""})=>ht({value:l,options:t,defaultValue:r0({value:l,options:t,defaultValue:e})}),D0=({value:l,props:t,defaultValue:e="",locale:a="",parserOptions:r})=>{if(!a)return"";let o=Ke("number",r),{maximumFractionDigits:s}=o,i=ae(o,["maximumFractionDigits"]),c=(t==null?void 0:t.number)||{},{maximumFractionDigits:u=s||2}=c,y=ae(c,["maximumFractionDigits"]);return new Intl.NumberFormat(a,U(pt(U({},i),{maximumFractionDigits:u}),y)).format(+l||+e)},R0=({value:l,props:t,defaultValue:e="",locale:a="",parserOptions:r})=>{if(!a)return"";let o=ae(Ke("date",r),[]),s=ae((t==null?void 0:t.date)||{},[]);return new Intl.DateTimeFormat(a,U(U({},o),s)).format(+l||+e)},dt=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],s0=(l="",t="")=>new RegExp(`^${l}s?$`).test(t),S0=l=>dt.indexOf(dt.find(({key:t})=>s0(t,l))),z0=(l,t)=>dt.reduce(([e,a],{key:r,multiplier:o},s)=>{if(s0(a,t))return[e,a];if(!a||s===S0(a)+1){let i=Math.round(e/o);if(!a||Math.abs(i)>=1||t!=="auto")return[i,r]}return[e,a]},[l,""]),I0=({value:l,defaultValue:t="",locale:e="",props:a,parserOptions:r})=>{if(!e)return"";let o=Ke("ago",r),{format:s,numeric:i}=o,c=ae(o,["format","numeric"]),u=(a==null?void 0:a.ago)||{},{format:y=s||"auto",numeric:b=i||"auto"}=u,T=ae(u,["format","numeric"]),P=+l||+t,C=z0(P,y);return new Intl.RelativeTimeFormat(e,U(pt(U({},c),{numeric:b}),T)).format(...C)},F0=({value:l,defaultValue:t="",locale:e="",props:a,parserOptions:r})=>{if(!e)return"";let o=Ke("currency",r),{ratio:s,currency:i}=o,c=ae(o,["ratio","currency"]),u=(a==null?void 0:a.currency)||{},{ratio:y=s||1,currency:b=i}=u,T=ae(u,["ratio","currency"]);return new Intl.NumberFormat(e,U(pt(U({},c),{style:"currency",currency:b}),T)).format(y*(l||t))},N0=l=>typeof l=="string"&&/{{(?:(?!{{|}}).)+}}/.test(l),ft=l=>typeof l=="string"?l.replace(/\\(?=:|;|{|})/g,""):l,H0=({value:l,props:t,payload:e,parserOptions:a,locale:r})=>`${l}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,o=>{let s=ft(`${o.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),i=e==null?void 0:e[s],[,c=""]=o.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;}])*)(?=\s*(?:;|}}$))/i)||[];c=c||(e==null?void 0:e.default)||"";let[,u=""]=o.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(i===void 0&&u!=="ne")return c;let y=!!u,{customModifiers:b}=a||{},T=U(U({},a0),b||{});u=Object.keys(T).includes(u)?u:"eq";let P=T[u],C=(o.match(/[^\s:;{](?:[^;]|\\[;])+[^:;}]/gi)||[]).reduce((v,j,S)=>{if(S>0){let V=ft(`${j.match(/(?:(?:\\:)|[^:])+/)}`.trim()),x=`${j.match(/(?:(?:\\:)|[^:])+$/)}`.trimStart();if(V&&V!=="default"&&x)return[...v,{key:V,value:x}]}return v},[]);return!y&&!C.length?i:P({value:i,options:C,props:t,defaultValue:c,locale:r,parserOptions:a})}),o0=({value:l,props:t,payload:e,parserOptions:a,locale:r})=>{if(N0(l)){let o=H0({value:l,payload:e,props:t,parserOptions:a,locale:r});return o0({value:o,payload:e,props:t,parserOptions:a,locale:r})}else return ft(l)},G0=l=>({parse:(t,[e,a],r,o)=>(e!=null&&e.default&&t===void 0&&(t=e.default),t===void 0&&(t=o),o0({value:t,payload:e,props:a,parserOptions:l,locale:r}))}),B0=G0,U0=Object.defineProperty,K0=Object.defineProperties,q0=Object.getOwnPropertyDescriptors,Ue=Object.getOwnPropertySymbols,i0=Object.prototype.hasOwnProperty,n0=Object.prototype.propertyIsEnumerable,Bt=(l,t,e)=>t in l?U0(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,W0=(l,t)=>{for(var e in t||(t={}))i0.call(t,e)&&Bt(l,e,t[e]);if(Ue)for(var e of Ue(t))n0.call(t,e)&&Bt(l,e,t[e]);return l},J0=(l,t)=>K0(l,q0(t)),Z0=(l,t)=>{var e={};for(var a in l)i0.call(l,a)&&t.indexOf(a)<0&&(e[a]=l[a]);if(l!=null&&Ue)for(var a of Ue(l))t.indexOf(a)<0&&n0.call(l,a)&&(e[a]=l[a]);return e},Ut=l=>{var t=l,{parserOptions:e={}}=t,a=Z0(t,["parserOptions"]);return J0(W0({},a),{parser:B0(e)})},Q0=class extends j0{constructor(t){super(t&&Ut(t)),this.loadConfig=e=>super.configLoader(Ut(e))}},X0=Q0;const Y0={loaders:[{locale:"en",key:"",loader:async()=>(await ct(()=>import("../chunks/en.B3n4nFNt.js"),[],import.meta.url)).default},{locale:"fr",key:"",loader:async()=>(await ct(()=>import("../chunks/fr.BHcGtrQX.js"),[],import.meta.url)).default},{locale:"es",key:"",loader:async()=>(await ct(()=>import("../chunks/es.cuUouCMF.js"),[],import.meta.url)).default}],fallbackLocale:"en"},{t:c0,locale:L2,locales:O2,loading:$2,loadTranslations:u0}=new X0(Y0),e2=!0,t2="always",a2=async({url:l})=>{const{pathname:t}=l;return await u0("en",t),{}},x2=Object.freeze(Object.defineProperty({__proto__:null,load:a2,prerender:e2,trailingSlash:t2},Symbol.toStringTag,{value:"Module"})),l2=""+new URL("../assets/favicon.BoGnPWDO.png",import.meta.url).href;function r2(l){let t,e,a="🚧",r,o,s=l[0]("under-construction")+"",i;return{c(){t=p("div"),e=p("span"),e.textContent=a,r=L(),o=p("span"),i=H(s),this.h()},l(c){t=h(c,"DIV",{role:!0,class:!0});var u=w(t);e=h(u,"SPAN",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-ox2x5r"&&(e.textContent=a),r=O(u),o=h(u,"SPAN",{});var y=w(o);i=G(y,s),y.forEach(g),u.forEach(g),this.h()},h(){d(e,"class","text-4xl"),d(t,"role","alert"),d(t,"class","alert alert-warning my-2")},m(c,u){B(c,t,u),n(t,e),n(t,r),n(t,o),n(o,i)},p(c,[u]){u&1&&s!==(s=c[0]("under-construction")+"")&&J(i,s)},i:Rt,o:Rt,d(c){c&&g(t)}}}function s2(l,t,e){let a;return qt(l,c0,r=>e(0,a=r)),[a]}class o2 extends Wt{constructor(t){super(),Jt(this,t,s2,r2,Kt,{})}}const i2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23ffffff'%20d='M375.7%2019.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8%202.4L256%2061.1%20173.5%204.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9%209.8-14.4%2017.8l-18.1%2098.5L19.7%20136.3c-8%201.5-14.7%206.9-17.8%2014.4s-2.2%2016.1%202.4%2022.8L61.1%20256%204.2%20338.5c-4.6%206.7-5.5%2015.3-2.4%2022.8s9.8%2013%2017.8%2014.4l98.5%2018.1%2018.1%2098.5c1.5%208%206.9%2014.7%2014.4%2017.8s16.1%202.2%2022.8-2.4L256%20450.9l82.5%2056.9c6.7%204.6%2015.3%205.5%2022.8%202.4s12.9-9.8%2014.4-17.8l18.1-98.5%2098.5-18.1c8-1.5%2014.7-6.9%2017.8-14.4s2.2-16.1-2.4-22.8L450.9%20256l56.9-82.5c4.6-6.7%205.5-15.3%202.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7%2019.7zM269.6%20110l65.6-45.2%2014.4%2078.3c1.8%209.8%209.5%2017.5%2019.3%2019.3l78.3%2014.4L402%20242.4c-5.7%208.2-5.7%2019%200%2027.2l45.2%2065.6-78.3%2014.4c-9.8%201.8-17.5%209.5-19.3%2019.3l-14.4%2078.3L269.6%20402c-8.2-5.7-19-5.7-27.2%200l-65.6%2045.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8%20335.2%20110%20269.6c5.7-8.2%205.7-19%200-27.2L64.8%20176.8l78.3-14.4c9.8-1.8%2017.5-9.5%2019.3-19.3l14.4-78.3L242.4%20110c8.2%205.7%2019%205.7%2027.2%200zM256%20368a112%20112%200%201%200%200-224%20112%20112%200%201%200%200%20224zM192%20256a64%2064%200%201%201%20128%200%2064%2064%200%201%201%20-128%200z'/%3e%3c/svg%3e",n2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20384%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23000000'%20d='M144.7%2098.7c-21%2034.1-33.1%2074.3-33.1%20117.3c0%2098%2062.8%20181.4%20150.4%20211.7c-12.4%202.8-25.3%204.3-38.6%204.3C126.6%20432%2048%20353.3%2048%20256c0-68.9%2039.4-128.4%2096.8-157.3zm62.1-66C91.1%2041.2%200%20137.9%200%20256C0%20379.7%20100%20480%20223.5%20480c47.8%200%2092-15%20128.4-40.6c1.9-1.3%203.7-2.7%205.5-4c4.8-3.6%209.4-7.4%2013.9-11.4c2.7-2.4%205.3-4.8%207.9-7.3c5-4.9%206.3-12.5%203.1-18.7s-10.1-9.7-17-8.5c-3.7%20.6-7.4%201.2-11.1%201.6c-5%20.5-10.1%20.9-15.3%201c-1.2%200-2.5%200-3.7%200c-.1%200-.2%200-.3%200c-96.8-.2-175.2-78.9-175.2-176c0-54.8%2024.9-103.7%2064.1-136c1-.9%202.1-1.7%203.2-2.6c4-3.2%208.2-6.2%2012.5-9c3.1-2%206.3-4%209.6-5.8c6.1-3.5%209.2-10.5%207.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3%200-6.5%20.1-9.8%20.2c-2.3%20.1-4.6%20.2-6.9%20.4z'/%3e%3c/svg%3e",c2="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%3e%3cpath%20fill='%23FC6D26'%20d='M14.975%208.904L14.19%206.55l-1.552-4.67a.268.268%200%2000-.255-.18.268.268%200%2000-.254.18l-1.552%204.667H5.422L3.87%201.879a.267.267%200%2000-.254-.179.267.267%200%2000-.254.18l-1.55%204.667-.784%202.357a.515.515%200%2000.193.583l6.78%204.812%206.778-4.812a.516.516%200%2000.196-.583z'/%3e%3cpath%20fill='%23E24329'%20d='M8%2014.296l2.578-7.75H5.423L8%2014.296z'/%3e%3cpath%20fill='%23FC6D26'%20d='M8%2014.296l-2.579-7.75H1.813L8%2014.296z'/%3e%3cpath%20fill='%23FCA326'%20d='M1.81%206.549l-.784%202.354a.515.515%200%2000.193.583L8%2014.3%201.81%206.55z'/%3e%3cpath%20fill='%23E24329'%20d='M1.812%206.549h3.612L3.87%201.882a.268.268%200%2000-.254-.18.268.268%200%2000-.255.18L1.812%206.549z'/%3e%3cpath%20fill='%23FC6D26'%20d='M8%2014.296l2.578-7.75h3.614L8%2014.296z'/%3e%3cpath%20fill='%23FCA326'%20d='M14.19%206.549l.783%202.354a.514.514%200%2001-.193.583L8%2014.296l6.188-7.747h.001z'/%3e%3cpath%20fill='%23E24329'%20d='M14.19%206.549H10.58l1.551-4.667a.267.267%200%2001.255-.18c.115%200%20.217.073.254.18l1.552%204.667z'/%3e%3c/svg%3e",u2="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%3e%3cpath%20fill='%23161514'%20fill-rule='evenodd'%20d='M8%201C4.133%201%201%204.13%201%207.993c0%203.09%202.006%205.71%204.787%206.635.35.064.478-.152.478-.337%200-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05%201.073.72%201.073.72.624%201.07%201.638.76%202.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456%200-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85%200%200%20.586-.189%201.924.716A6.711%206.711%200%20018%204.381c.595.003%201.194.08%201.753.236%201.336-.905%201.923-.717%201.923-.717.382.963.142%201.674.07%201.85.448.49.72%201.114.72%201.877%200%202.686-1.638%203.278-3.197%203.45.251.216.475.643.475%201.296%200%20.934-.009%201.688-.009%201.918%200%20.187.127.404.482.336A6.996%206.996%200%200015%207.993%206.997%206.997%200%20008%201z'%20clip-rule='evenodd'/%3e%3c/svg%3e",d2="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20fill='none'%20version='1.1'%20id='svg1'%20sodipodi:docname='github-light.svg'%20inkscape:version='1.3.2%20(091e20ef0f,%202023-11-25,%20custom)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3cdefs%20id='defs1'%20/%3e%3csodipodi:namedview%20id='namedview1'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:zoom='1.06'%20inkscape:cx='562.73585'%20inkscape:cy='400'%20inkscape:window-width='1876'%20inkscape:window-height='1052'%20inkscape:window-x='0'%20inkscape:window-y='0'%20inkscape:window-maximized='1'%20inkscape:current-layer='svg1'%20/%3e%3cpath%20fill='%23161514'%20fill-rule='evenodd'%20d='M%208,1%20C%204.133,1%201,4.13%201,7.993%20c%200,3.09%202.006,5.71%204.787,6.635%200.35,0.064%200.478,-0.152%200.478,-0.337%200,-0.166%20-0.006,-0.606%20-0.01,-1.19%20C%204.308,13.524%203.898,12.164%203.898,12.164%203.579,11.356%203.12,11.141%203.12,11.141%202.485,10.707%203.168,10.716%203.168,10.716%20c%200.703,0.05%201.073,0.72%201.073,0.72%200.624,1.07%201.638,0.76%202.037,0.582%200.063,-0.452%200.244,-0.76%200.444,-0.935%20C%205.168,10.907%203.534,10.307%203.534,7.627%203.534,6.864%203.807,6.239%204.254,5.751%204.182,5.574%203.942,4.863%204.324,3.901%20c%200,0%200.586,-0.189%201.924,0.716%20A%206.711,6.711%200%200%201%208,4.381%20C%208.595,4.384%209.194,4.461%209.753,4.617%2011.089,3.712%2011.676,3.9%2011.676,3.9%20c%200.382,0.963%200.142,1.674%200.07,1.85%200.448,0.49%200.72,1.114%200.72,1.877%200,2.686%20-1.638,3.278%20-3.197,3.45%200.251,0.216%200.475,0.643%200.475,1.296%200,0.934%20-0.009,1.688%20-0.009,1.918%200,0.187%200.127,0.404%200.482,0.336%20A%206.996,6.996%200%200%200%2015,7.993%206.997,6.997%200%200%200%208,1%20Z'%20clip-rule='evenodd'%20id='path1'%20style='display:inline;fill:%23ffffff'%20/%3e%3cpath%20fill='%23161514'%20fill-rule='evenodd'%20d='m%205.787,14.628%20c%200.35,0.064%200.478,-0.152%200.478,-0.337%200,-0.166%20-0.006,-0.606%20-0.01,-1.19%20C%204.308,13.524%203.898,12.164%203.898,12.164%203.579,11.356%203.12,11.141%203.12,11.141%202.485,10.707%203.168,10.716%203.168,10.716%20c%200.703,0.05%201.073,0.72%201.073,0.72%200.624,1.07%201.638,0.76%202.037,0.582%200.063,-0.452%200.244,-0.76%200.444,-0.935%20C%205.168,10.907%203.534,10.307%203.534,7.627%203.534,6.864%203.807,6.239%204.254,5.751%204.182,5.574%203.942,4.863%204.324,3.901%20c%200,0%200.586,-0.189%201.924,0.716%20C%206.8190384,4.4614218%207.4081484,4.3820668%208,4.381%208.595,4.384%209.194,4.461%209.753,4.617%2011.089,3.712%2011.676,3.9%2011.676,3.9%20c%200.382,0.963%200.142,1.674%200.07,1.85%200.448,0.49%200.72,1.114%200.72,1.877%200,2.686%20-1.638,3.278%20-3.197,3.45%200.251,0.216%200.475,0.643%200.475,1.296%200,0.934%20-0.009,1.688%20-0.009,1.918%200,0.187%200.127,0.404%200.482,0.336%20z'%20clip-rule='evenodd'%20id='path3'%20style='fill:%23000000'%20sodipodi:nodetypes='cscccccccscccccccscsscc'%20/%3e%3c/svg%3e",f2="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%3e%3cpath%20fill='%230A66C2'%20d='M12.225%2012.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926%200-1.068.724-1.068%201.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95%201.684-.925%201.802%200%202.135%201.185%202.135%202.728l-.001%203.14zM4.67%205.715a1.037%201.037%200%2001-1.032-1.031c0-.566.466-1.032%201.032-1.032.566%200%201.031.466%201.032%201.032%200%20.566-.466%201.032-1.032%201.032zm.889%206.51h-1.78V6.498h1.78v5.727zM13.11%202H2.885A.88.88%200%20002%202.866v10.268a.88.88%200%2000.885.866h10.226a.882.882%200%2000.889-.866V2.865a.88.88%200%2000-.889-.864z'/%3e%3c/svg%3e",we={mode:{light_icon:i2,dark_icon:n2},icons:{gitlab:c2,github:{light:d2,dark:u2},linkedin:f2}};function p2(l){let t,e;return{c(){t=p("img"),this.h()},l(a){t=h(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){He(t.src,e=we.icons.github.light)||d(t,"src",e),d(t,"alt","github"),d(t,"class","w-10 h-10")},m(a,r){B(a,t,r)},d(a){a&&g(t)}}}function h2(l){let t,e;return{c(){t=p("img"),this.h()},l(a){t=h(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){He(t.src,e=we.icons.github.dark)||d(t,"src",e),d(t,"alt","github"),d(t,"class","w-10 h-10")},m(a,r){B(a,t,r)},d(a){a&&g(t)}}}function v2(l){let t,e=`<title>Nicolas Jeanmenne</title> <link rel="icon" type="image/png" href="${l2}"/>`,a,r,o,s,i,c=l[2]("tabs.home")+"",u,y,b,T=l[2]("tabs.resume")+"",P,C,v,j=l[2]("tabs.projects")+"",S,V,x,D,ke=l[2]("language")+"",Ve,qe,K,Z,he,_e=l[2]("select-lang")+"",Ce,We,z,Q,vt="🇬🇧 English",Je,X,mt="🇫🇷 Français",Ze,Y,gt="🇪🇸 Español",Qe,ee,bt="<button></button>",Xe,le,I,re,Ye,se,yt,et,oe,wt,Ee,Ae,q,Le,F,ie,tt,ne,kt=`<img src="${we.icons.gitlab}" alt="gitlab" class="w-10 h-10"/>`,at,ce,_t=`<img src="${we.icons.linkedin}" alt="linkedin" class="w-10 h-10"/>`,lt,Oe,N,$e=l[2]("footer.code")+"",Me,rt,ue,xe=l[2]("footer.license")+"",Pe,st,de,Te=l[2]("footer.available")+"",De,ot,E,it,Lt;r=new o2({});const nt=l[5].default,A=d0(nt,l,l[4],null);function Ot(f,m){return f[1]==="light"?h2:p2}let Re=Ot(l),W=Re(l);return{c(){t=p("sveltekit:head"),t.innerHTML=e,a=L(),g0(r.$$.fragment),o=L(),s=p("div"),i=p("a"),u=H(c),y=L(),b=p("a"),P=H(T),C=L(),v=p("a"),S=H(j),V=L(),x=p("div"),D=p("button"),Ve=H(ke),qe=L(),K=p("dialog"),Z=p("div"),he=p("h3"),Ce=H(_e),We=L(),z=p("div"),Q=p("button"),Q.textContent=vt,Je=L(),X=p("button"),X.textContent=mt,Ze=L(),Y=p("button"),Y.textContent=gt,Qe=L(),ee=p("form"),ee.innerHTML=bt,Xe=L(),le=p("div"),I=p("label"),re=p("input"),Ye=L(),se=p("img"),et=L(),oe=p("img"),Ee=L(),A&&A.c(),Ae=L(),q=p("footer"),Le=p("nav"),F=p("div"),ie=p("a"),W.c(),tt=L(),ne=p("a"),ne.innerHTML=kt,at=L(),ce=p("a"),ce.innerHTML=_t,lt=L(),Oe=p("aside"),N=p("p"),Me=H($e),rt=L(),ue=p("a"),Pe=H(xe),st=L(),de=p("a"),De=H(Te),ot=H("."),this.h()},l(f){t=h(f,"SVELTEKIT:HEAD",{"data-svelte-h":!0}),te(t)!=="svelte-1dm4t15"&&(t.innerHTML=e),a=O(f),b0(r.$$.fragment,f),o=O(f),s=h(f,"DIV",{role:!0,class:!0});var m=w(s);i=h(m,"A",{role:!0,href:!0,class:!0});var $t=w(i);u=G($t,c),$t.forEach(g),y=O(m),b=h(m,"A",{role:!0,href:!0,class:!0});var xt=w(b);P=G(xt,T),xt.forEach(g),C=O(m),v=h(m,"A",{role:!0,href:!0,class:!0});var Tt=w(v);S=G(Tt,j),Tt.forEach(g),V=O(m),x=h(m,"DIV",{role:!0,class:!0});var Se=w(x);D=h(Se,"BUTTON",{});var jt=w(D);Ve=G(jt,ke),jt.forEach(g),qe=O(Se),K=h(Se,"DIALOG",{class:!0});var ze=w(K);Z=h(ze,"DIV",{class:!0});var Ie=w(Z);he=h(Ie,"H3",{class:!0});var Vt=w(he);Ce=G(Vt,_e),Vt.forEach(g),We=O(Ie),z=h(Ie,"DIV",{class:!0});var ve=w(z);Q=h(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),te(Q)!=="svelte-vsy5hd"&&(Q.textContent=vt),Je=O(ve),X=h(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),te(X)!=="svelte-1wyeoow"&&(X.textContent=mt),Ze=O(ve),Y=h(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),te(Y)!=="svelte-cnvkve"&&(Y.textContent=gt),ve.forEach(g),Ie.forEach(g),Qe=O(ze),ee=h(ze,"FORM",{method:!0,class:!0,"data-svelte-h":!0}),te(ee)!=="svelte-znreoi"&&(ee.innerHTML=bt),ze.forEach(g),Se.forEach(g),Xe=O(m),le=h(m,"DIV",{role:!0,class:!0});var Ct=w(le);I=h(Ct,"LABEL",{class:!0});var me=w(I);re=h(me,"INPUT",{type:!0,class:!0}),Ye=O(me),se=h(me,"IMG",{src:!0,alt:!0,class:!0}),et=O(me),oe=h(me,"IMG",{src:!0,alt:!0,class:!0}),me.forEach(g),Ct.forEach(g),m.forEach(g),Ee=O(f),A&&A.l(f),Ae=O(f),q=h(f,"FOOTER",{class:!0});var Fe=w(q);Le=h(Fe,"NAV",{});var Et=w(Le);F=h(Et,"DIV",{class:!0});var ge=w(F);ie=h(ge,"A",{href:!0});var At=w(ie);W.l(At),At.forEach(g),tt=O(ge),ne=h(ge,"A",{href:!0,"data-svelte-h":!0}),te(ne)!=="svelte-splrke"&&(ne.innerHTML=kt),at=O(ge),ce=h(ge,"A",{href:!0,"data-svelte-h":!0}),te(ce)!=="svelte-t5rmif"&&(ce.innerHTML=_t),ge.forEach(g),Et.forEach(g),lt=O(Fe),Oe=h(Fe,"ASIDE",{});var Mt=w(Oe);N=h(Mt,"P",{});var fe=w(N);Me=G(fe,$e),rt=O(fe),ue=h(fe,"A",{href:!0,class:!0});var Pt=w(ue);Pe=G(Pt,xe),Pt.forEach(g),st=O(fe),de=h(fe,"A",{href:!0,class:!0});var Dt=w(de);De=G(Dt,Te),Dt.forEach(g),ot=G(fe,"."),fe.forEach(g),Mt.forEach(g),Fe.forEach(g),this.h()},h(){d(i,"role","tab"),d(i,"href","/"),d(i,"class","tab tab-active"),d(b,"role","tab"),d(b,"href","#"),d(b,"class","tab"),d(v,"role","tab"),d(v,"href","#"),d(v,"class","tab"),d(he,"class","text-2x1"),d(Q,"class","btn join-item"),d(X,"class","btn join-item"),d(Y,"class","btn join-item"),d(z,"class","join join-vertical"),d(Z,"class","modal-box"),d(ee,"method","dialog"),d(ee,"class","modal-backdrop"),d(K,"class","modal"),d(x,"role","tab"),d(x,"class","tab"),d(re,"type","checkbox"),re.value="light",d(re,"class","theme-controller"),He(se.src,yt=we.mode.light_icon)||d(se,"src",yt),d(se,"alt","light theme icon"),d(se,"class","swap-off w-14 h-5/6 object-contain"),He(oe.src,wt=we.mode.dark_icon)||d(oe,"src",wt),d(oe,"alt","dark theme icon"),d(oe,"class","swap-on w-14 h-5/6 object-contain"),d(I,"class","swap swap-rotate svelte-1ut1aid"),d(le,"role","tab"),d(le,"class","tab"),d(s,"role","tablist"),d(s,"class","tabs tabs-bordered"),d(ie,"href","https://github.com/nicojmn"),d(ne,"href","https://gitlab.com/nicojmn"),d(ce,"href","https://linkedin.com/in/nicolas-jeanmenne/"),d(F,"class","grid grid-flow-col gap-4"),d(ue,"href","https://opensource.org/license/bsd-3-clause"),d(ue,"class","link"),d(de,"href","https://github.com/nicojmn:nicojmn.github.io"),d(de,"class","link"),d(q,"class","footer footer-center p-10 bg-base-200 text-base-content rounded")},m(f,m){B(f,t,m),B(f,a,m),y0(r,f,m),B(f,o,m),B(f,s,m),n(s,i),n(i,u),n(s,y),n(s,b),n(b,P),n(s,C),n(s,v),n(v,S),n(s,V),n(s,x),n(x,D),n(D,Ve),n(x,qe),n(x,K),n(K,Z),n(Z,he),n(he,Ce),n(Z,We),n(Z,z),n(z,Q),n(z,Je),n(z,X),n(z,Ze),n(z,Y),n(K,Qe),n(K,ee),l[10](K),n(s,Xe),n(s,le),n(le,I),n(I,re),n(I,Ye),n(I,se),n(I,et),n(I,oe),B(f,Ee,m),A&&A.m(f,m),B(f,Ae,m),B(f,q,m),n(q,Le),n(Le,F),n(F,ie),W.m(ie,null),n(F,tt),n(F,ne),n(F,at),n(F,ce),n(q,lt),n(q,Oe),n(Oe,N),n(N,Me),n(N,rt),n(N,ue),n(ue,Pe),n(N,st),n(N,de),n(de,De),n(N,ot),E=!0,it||(Lt=[je(D,"click",l[6]),je(Q,"click",l[7]),je(X,"click",l[8]),je(Y,"click",l[9]),je(re,"click",l[11])],it=!0)},p(f,[m]){(!E||m&4)&&c!==(c=f[2]("tabs.home")+"")&&J(u,c),(!E||m&4)&&T!==(T=f[2]("tabs.resume")+"")&&J(P,T),(!E||m&4)&&j!==(j=f[2]("tabs.projects")+"")&&J(S,j),(!E||m&4)&&ke!==(ke=f[2]("language")+"")&&J(Ve,ke),(!E||m&4)&&_e!==(_e=f[2]("select-lang")+"")&&J(Ce,_e),A&&A.p&&(!E||m&16)&&f0(A,nt,f,f[4],E?h0(nt,f[4],m,null):p0(f[4]),null),Re!==(Re=Ot(f))&&(W.d(1),W=Re(f),W&&(W.c(),W.m(ie,null))),(!E||m&4)&&$e!==($e=f[2]("footer.code")+"")&&J(Me,$e),(!E||m&4)&&xe!==(xe=f[2]("footer.license")+"")&&J(Pe,xe),(!E||m&4)&&Te!==(Te=f[2]("footer.available")+"")&&J(De,Te)},i(f){E||(St(r.$$.fragment,f),St(A,f),E=!0)},o(f){zt(r.$$.fragment,f),zt(A,f),E=!1},d(f){f&&(g(t),g(a),g(o),g(s),g(Ee),g(Ae),g(q)),w0(r,f),l[10](null),A&&A.d(f),W.d(),it=!1,v0(Lt)}}}function m2(l,t,e){let a,r;qt(l,c0,v=>e(2,r=v));let{$$slots:o={},$$scope:s}=t,i;function c(v){u0(v),i==null||i.close()}const u=()=>i==null?void 0:i.showModal(),y=()=>c("en"),b=()=>c("fr"),T=()=>c("es");function P(v){m0[v?"unshift":"push"](()=>{i=v,e(0,i)})}const C=()=>a==="light"?e(1,a="light"):e(1,a="dark");return l.$$set=v=>{"$$scope"in v&&e(4,s=v.$$scope)},e(1,a="dark"),[i,a,r,c,s,o,u,y,b,T,P,C]}class T2 extends Wt{constructor(t){super(),Jt(this,t,m2,v2,Kt,{})}}export{T2 as component,x2 as universal};