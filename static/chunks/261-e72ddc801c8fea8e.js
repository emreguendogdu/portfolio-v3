"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{7004:function(e,t,r){r.d(t,{ZP:function(){return k}});let a={origin:"https://api.emailjs.com",blockHeadless:!1},i=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{};class o{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let n=async(e,t,r={})=>{let i=await fetch(a.origin+e,{method:"POST",headers:r,body:t}),n=await i.text(),s=new o(i.status,n);if(i.ok)return s;throw s},s=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},l=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},c=e=>e.webdriver||!e.languages||0===e.languages.length,u=()=>new o(451,"Unavailable For Headless Browser"),d=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},p=e=>!e.list?.length||!e.watchVariable,m=(e,t)=>e instanceof FormData?e.get(t):e[t],f=(e,t)=>{if(p(e))return!1;d(e.list,e.watchVariable);let r=m(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},h=()=>new o(403,"Forbidden"),g=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},y=(e,t,r)=>{let a=Number(r.getItem(e)||0);return t-Date.now()+a},b=(e,t,r)=>{setTimeout(()=>{r.removeItem(e)},t)},v=(e,t,r)=>{if(!r.throttle)return!1;g(r.throttle,r.id);let a=r.id||t,i=y(a,r.throttle,e);return i>0?(b(a,i,e),!0):(e.setItem(a,Date.now().toString()),b(a,r.throttle,e),!1)},x=()=>new o(429,"Too Many Requests"),w=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},E=e=>"string"==typeof e?document.querySelector(e):e;var k={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let r=i(e);a.publicKey=r.publicKey,a.blockHeadless=r.blockHeadless,a.blockList=r.blockList,a.limitRate=r.limitRate,a.origin=r.origin||t},send:(e,t,r,o)=>{let d=i(o),p=d.publicKey||a.publicKey,m=d.blockHeadless||a.blockHeadless,g={...a.blockList,...d.blockList},y={...a.limitRate,...d.limitRate};return m&&c(navigator)?Promise.reject(u()):(s(p,e,t),l(r),r&&f(g,r))?Promise.reject(h()):v(localStorage,location.pathname,y)?Promise.reject(x()):n("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:p,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:(e,t,r,o)=>{let l=i(o),d=l.publicKey||a.publicKey,p=l.blockHeadless||a.blockHeadless,m={...a.blockList,...l.blockList},g={...a.limitRate,...l.limitRate};if(p&&c(navigator))return Promise.reject(u());let y=E(r);s(d,e,t),w(y);let b=new FormData(y);return f(m,b)?Promise.reject(h()):v(localStorage,location.pathname,g)?Promise.reject(x()):(b.append("lib_version","4.1.0"),b.append("service_id",e),b.append("template_id",t),b.append("user_id",d),n("/api/v1.0/email/send-form",b))}}},9663:function(e,t,r){r.d(t,{m:function(){return q}});var a,i=r(7294);let o=(0,i.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),n=(0,i.createContext)({}),s=(0,i.createContext)(null);var l=r(1741);let c=l.j?i.useLayoutEffect:i.useEffect;var u=r(398),d=r(8588);let{schedule:p,cancel:m}=(0,r(9727).Z)(queueMicrotask,!1);var f=r(1804),h=r(7732),g=r(7504);function y(e){return Array.isArray(e)?e.join(" "):e}var b=r(1879);let v=(0,i.createContext)({}),x=(0,i.createContext)({}),w=Symbol.for("motionComponentSymbol");var E=r(2627),k=r(6728),C=r(406),j=r(8057);let S=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function T(e,t,r){for(let a in t)(0,C.i)(t[a])||(0,k.j)(a,r)||(e[a]=t[a])}let P=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function A(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||P.has(e)}let M=e=>!A(e);try{(a=require("@emotion/is-prop-valid").default)&&(M=e=>e.startsWith("on")?!A(e):a(e))}catch(e){}var D=r(5415);let H=()=>({...S(),attrs:{}});var $=r(9854),L=r(8504),O=r(6832),I=r(2445),R=r(9432),N=r(8715);let _=e=>(t,r)=>{let a=(0,i.useContext)(n),o=(0,i.useContext)(s),l=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:r},a,i,o){let n={latestValues:function(e,t,r,a){let i={},o=a(e,{});for(let e in o)i[e]=function(e){let t=(0,C.i)(e)?e.get():e;return(0,N.p)(t)?t.toValue():t}(o[e]);let{initial:n,animate:s}=e,l=(0,g.G)(e),c=(0,g.M)(e);t&&c&&!l&&!1!==e.inherit&&(void 0===n&&(n=t.initial),void 0===s&&(s=t.animate));let u=!!r&&!1===r.initial,d=(u=u||!1===n)?s:n;return d&&"boolean"!=typeof d&&!(0,I.H)(d)&&(Array.isArray(d)?d:[d]).forEach(t=>{let r=(0,R.o)(e,t);if(!r)return;let{transitionEnd:a,transition:o,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}null!==t&&(i[e]=t)}for(let e in a)i[e]=a[e]}),i}(a,i,o,e),renderState:t()};return r&&(n.mount=e=>r(a,e,n)),n})(e,t,a,o);return r?l():function(e){let t=(0,i.useRef)(null);return null===t.current&&(t.current=e()),t.current}(l)};var V=r(6166);let F={useVisualState:_({scrapeMotionValuesFromProps:O.U,createRenderState:H,onMount:(e,t,{renderState:r,latestValues:a})=>{V.Wi.read(()=>{try{r.dimensions="function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){r.dimensions={x:0,y:0,width:0,height:0}}}),V.Wi.render(()=>{(0,D.i)(r,a,{enableHardwareAcceleration:!1},(0,$.a)(t.tagName),e.transformTemplate),(0,L.K)(t,r)})}})},W={useVisualState:_({scrapeMotionValuesFromProps:r(189).U,createRenderState:S})},q=function(e){function t(t,r={}){return function({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:a,Component:m}){e&&(0,b.K)(e);let E=(0,i.forwardRef)(function(b,w){var E;let k;let C={...(0,i.useContext)(o),...b,layoutId:function({layoutId:e}){let t=(0,i.useContext)(v).id;return t&&void 0!==e?t+"-"+e:e}(b)},{isStatic:j}=C,S=function(e){let{initial:t,animate:r}=function(e,t){if((0,g.G)(e)){let{initial:t,animate:r}=e;return{initial:!1===t||(0,h.$)(t)?t:void 0,animate:(0,h.$)(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,(0,i.useContext)(n));return(0,i.useMemo)(()=>({initial:t,animate:r}),[y(t),y(r)])}(b),T=a(b,j);if(!j&&l.j){S.visualElement=function(e,t,r,a){let{visualElement:l}=(0,i.useContext)(n),m=(0,i.useContext)(u.u),f=(0,i.useContext)(s),h=(0,i.useContext)(o).reducedMotion,g=(0,i.useRef)();a=a||m.renderer,!g.current&&a&&(g.current=a(e,{visualState:t,parent:l,props:r,presenceContext:f,blockInitialAnimation:!!f&&!1===f.initial,reducedMotionConfig:h}));let y=g.current;(0,i.useInsertionEffect)(()=>{y&&y.update(r,f)});let b=(0,i.useRef)(!!(r[d.M]&&!window.HandoffComplete));return c(()=>{y&&(p.postRender(y.render),b.current&&y.animationState&&y.animationState.animateChanges())}),(0,i.useEffect)(()=>{y&&(y.updateFeatures(),!b.current&&y.animationState&&y.animationState.animateChanges(),b.current&&(b.current=!1,window.HandoffComplete=!0))}),y}(m,T,C,t);let r=(0,i.useContext)(x),a=(0,i.useContext)(u.u).strict;S.visualElement&&(k=S.visualElement.loadFeatures(C,a,e,r))}return i.createElement(n.Provider,{value:S},k&&S.visualElement?i.createElement(k,{visualElement:S.visualElement,...C}):null,r(m,b,(E=S.visualElement,(0,i.useCallback)(e=>{e&&T.mount&&T.mount(e),E&&(e?E.mount(e):E.unmount()),w&&("function"==typeof w?w(e):(0,f.I)(w)&&(w.current=e))},[E])),T,j,S.visualElement))});return E[w]=m,E}(e(t,r))}if("undefined"==typeof Proxy)return t;let r=new Map;return new Proxy(t,{get:(e,a)=>(r.has(a)||r.set(a,t(a)),r.get(a))})}(function(e,{forwardMotionProps:t=!1},r,a){return{...(0,E.q)(e)?F:W,preloadedFeatures:r,useRender:function(e=!1){return(t,r,a,{latestValues:o},n)=>{let s=((0,E.q)(t)?function(e,t,r,a){let o=(0,i.useMemo)(()=>{let r=H();return(0,D.i)(r,t,{enableHardwareAcceleration:!1},(0,$.a)(a),e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){let t={};T(t,e.style,e),o.style={...t,...o.style}}return o}:function(e,t,r){let a={},o=function(e,t,r){let a=e.style||{},o={};return T(o,a,e),Object.assign(o,function({transformTemplate:e},t,r){return(0,i.useMemo)(()=>{let a=S();return(0,j.r)(a,t,{enableHardwareAcceleration:!r},e),Object.assign({},a.vars,a.style)},[t])}(e,t,r)),o}(e,t,r);return e.drag&&!1!==e.dragListener&&(a.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(a.tabIndex=0),a.style=o,a})(r,o,n,t),l={...function(e,t,r){let a={};for(let i in e)("values"!==i||"object"!=typeof e.values)&&(M(i)||!0===r&&A(i)||!t&&!A(i)||e.draggable&&i.startsWith("onDrag"))&&(a[i]=e[i]);return a}(r,"string"==typeof t,e),...s,ref:a},{children:c}=r,u=(0,i.useMemo)(()=>(0,C.i)(c)?c.get():c,[c]);return(0,i.createElement)(t,{...l,children:u})}}(t),createVisualElement:a,Component:e}})},6501:function(e,t,r){let a,i;r.d(t,{x7:function(){return ed},ZP:function(){return ep}});var o,n=r(7294);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,p=(e,t)=>{let r="",a="",i="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":a+="f"==o[1]?p(n,o):o+"{"+p(n,"k"==o[1]?"":t)+"}":"object"==typeof n?a+=p(n,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(o,n):o+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,i)=>{var o;let n=f(e),s=m[n]||(m[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!m[s]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(u,""));)t[4]?a.shift():t[3]?(r=t[3].replace(d," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(d," ").trim();return a[0]})(e);m[s]=p(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&m.g?m.g:null;return r&&(m.g=m[s]),o=m[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),s},g=(e,t,r)=>e.reduce((e,a,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,v,x,w=y.bind({k:1});function E(e,t){let r=this||{};return function(){let a=arguments;function i(o,n){let s=Object.assign({},o),l=s.className||i.className;r.p=Object.assign({theme:v&&v()},s),r.o=/ *go\d+/.test(l),s.className=y.apply(r,a)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),x&&c[0]&&x(s),b(c,s)}return t?t(i):i}}var k=e=>"function"==typeof e,C=(e,t)=>k(e)?e(t):e,j=(a=0,()=>(++a).toString()),S=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},T=new Map,P=e=>{if(T.has(e))return;let t=setTimeout(()=>{T.delete(e),$({type:4,toastId:e})},1e3);T.set(e,t)},A=e=>{let t=T.get(e);t&&clearTimeout(t)},M=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&A(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?M(e,{type:1,toast:r}):M(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?P(a):e.toasts.forEach(e=>{P(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},D=[],H={toasts:[],pausedAt:void 0},$=e=>{H=M(H,e),D.forEach(e=>{e(H)})},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e={})=>{let[t,r]=(0,n.useState)(H);(0,n.useEffect)(()=>(D.push(r),()=>{let e=D.indexOf(r);e>-1&&D.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},I=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}),R=e=>(t,r)=>{let a=I(t,e,r);return $({type:2,toast:a}),a.id},N=(e,t)=>R("blank")(e,t);N.error=R("error"),N.success=R("success"),N.loading=R("loading"),N.custom=R("custom"),N.dismiss=e=>{$({type:3,toastId:e})},N.remove=e=>$({type:4,toastId:e}),N.promise=(e,t,r)=>{let a=N.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(N.success(C(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{N.error(C(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var _=(e,t)=>{$({type:1,toast:{id:e,height:t}})},V=()=>{$({type:5,time:Date.now()})},F=e=>{let{toasts:t,pausedAt:r}=O(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&N.dismiss(t.id);return}return setTimeout(()=>N.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,n.useCallback)(()=>{r&&$({type:6,time:Date.now()})},[r]),i=(0,n.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:o}=r||{},n=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:_,startPause:V,endPause:a,calculateOffset:i}}},W=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,K=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${K} 1s linear infinite;
`,Z=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,G=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Y=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,J=E("div")`
  position: absolute;
`,X=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(ee,null,t):t:"blank"===r?null:n.createElement(X,null,n.createElement(U,{...a}),"loading"!==r&&n.createElement(J,null,"error"===r?n.createElement(B,{...a}):n.createElement(Y,{...a})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eo=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),ea(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},es=n.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(et,{toast:e}),s=n.createElement(eo,{...e.ariaProps},C(e.message,e));return n.createElement(ei,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:o,message:s}):n.createElement(n.Fragment,null,o,s))});o=n.createElement,p.p=void 0,b=o,v=void 0,x=void 0;var el=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let o=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:o,className:t,style:r},i)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:o,containerClassName:s})=>{let{toasts:l,handlers:c}=F(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let o=r.position||t,s=ec(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(el,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:s},"custom"===r.type?C(r.message,r):i?i(r):n.createElement(es,{toast:r,position:o}))}))},ep=N}}]);