(()=>{var G1=Object.create;var o_=Object.defineProperty;var H1=Object.getOwnPropertyDescriptor;var W1=Object.getOwnPropertyNames;var X1=Object.getPrototypeOf,Y1=Object.prototype.hasOwnProperty;var rr=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var q1=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of W1(e))!Y1.call(n,r)&&r!==t&&o_(n,r,{get:()=>e[r],enumerable:!(i=H1(e,r))||i.enumerable});return n};var vo=(n,e,t)=>(t=n!=null?G1(X1(n)):{},q1(e||!n||!n.__esModule?o_(t,"default",{value:n,enumerable:!0}):t,n));var v_=rr(Ye=>{"use strict";var Ua=Symbol.for("react.element"),$1=Symbol.for("react.portal"),Z1=Symbol.for("react.fragment"),J1=Symbol.for("react.strict_mode"),K1=Symbol.for("react.profiler"),j1=Symbol.for("react.provider"),Q1=Symbol.for("react.context"),ew=Symbol.for("react.forward_ref"),tw=Symbol.for("react.suspense"),nw=Symbol.for("react.memo"),iw=Symbol.for("react.lazy"),a_=Symbol.iterator;function rw(n){return n===null||typeof n!="object"?null:(n=a_&&n[a_]||n["@@iterator"],typeof n=="function"?n:null)}var u_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,f_={};function xo(n,e,t){this.props=n,this.context=e,this.refs=f_,this.updater=t||u_}xo.prototype.isReactComponent={};xo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function d_(){}d_.prototype=xo.prototype;function vd(n,e,t){this.props=n,this.context=e,this.refs=f_,this.updater=t||u_}var xd=vd.prototype=new d_;xd.constructor=vd;h_(xd,xo.prototype);xd.isPureReactComponent=!0;var l_=Array.isArray,p_=Object.prototype.hasOwnProperty,yd={current:null},m_={key:!0,ref:!0,__self:!0,__source:!0};function g_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)p_.call(e,i)&&!m_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ua,type:n,key:s,ref:o,props:r,_owner:yd.current}}function sw(n,e){return{$$typeof:Ua,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Sd(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ua}function ow(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var c_=/\/+/g;function _d(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ow(""+n.key):e.toString(36)}function Ic(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ua:case $1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+_d(o,0):i,l_(r)?(t="",n!=null&&(t=n.replace(c_,"$&/")+"/"),Ic(r,e,t,"",function(c){return c})):r!=null&&(Sd(r)&&(r=sw(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(c_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",l_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+_d(s,a);o+=Ic(s,e,t,l,r)}else if(l=rw(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+_d(s,a++),o+=Ic(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pc(n,e,t){if(n==null)return n;var i=[],r=0;return Ic(n,i,"","",function(s){return e.call(t,s,r++)}),i}function aw(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var gn={current:null},Lc={transition:null},lw={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Lc,ReactCurrentOwner:yd};function __(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Pc,forEach:function(n,e,t){Pc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Pc(n,function(){e++}),e},toArray:function(n){return Pc(n,function(e){return e})||[]},only:function(n){if(!Sd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ye.Component=xo;Ye.Fragment=Z1;Ye.Profiler=K1;Ye.PureComponent=vd;Ye.StrictMode=J1;Ye.Suspense=tw;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lw;Ye.act=__;Ye.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=h_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)p_.call(e,l)&&!m_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ua,type:n.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(n){return n={$$typeof:Q1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:j1,_context:n},n.Consumer=n};Ye.createElement=g_;Ye.createFactory=function(n){var e=g_.bind(null,n);return e.type=n,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(n){return{$$typeof:ew,render:n}};Ye.isValidElement=Sd;Ye.lazy=function(n){return{$$typeof:iw,_payload:{_status:-1,_result:n},_init:aw}};Ye.memo=function(n,e){return{$$typeof:nw,type:n,compare:e===void 0?null:e}};Ye.startTransition=function(n){var e=Lc.transition;Lc.transition={};try{n()}finally{Lc.transition=e}};Ye.unstable_act=__;Ye.useCallback=function(n,e){return gn.current.useCallback(n,e)};Ye.useContext=function(n){return gn.current.useContext(n)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(n){return gn.current.useDeferredValue(n)};Ye.useEffect=function(n,e){return gn.current.useEffect(n,e)};Ye.useId=function(){return gn.current.useId()};Ye.useImperativeHandle=function(n,e,t){return gn.current.useImperativeHandle(n,e,t)};Ye.useInsertionEffect=function(n,e){return gn.current.useInsertionEffect(n,e)};Ye.useLayoutEffect=function(n,e){return gn.current.useLayoutEffect(n,e)};Ye.useMemo=function(n,e){return gn.current.useMemo(n,e)};Ye.useReducer=function(n,e,t){return gn.current.useReducer(n,e,t)};Ye.useRef=function(n){return gn.current.useRef(n)};Ye.useState=function(n){return gn.current.useState(n)};Ye.useSyncExternalStore=function(n,e,t){return gn.current.useSyncExternalStore(n,e,t)};Ye.useTransition=function(){return gn.current.useTransition()};Ye.version="18.3.1"});var Dc=rr((z3,x_)=>{"use strict";x_.exports=v_()});var R_=rr(dt=>{"use strict";function Td(n,e){var t=n.length;n.push(e);e:for(;0<t;){var i=t-1>>>1,r=n[i];if(0<Nc(r,e))n[i]=e,n[t]=r,t=i;else break e}}function _i(n){return n.length===0?null:n[0]}function Uc(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;e:for(var i=0,r=n.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=n[o],l=o+1,c=n[l];if(0>Nc(a,t))l<r&&0>Nc(c,a)?(n[i]=c,n[l]=t,i=l):(n[i]=a,n[o]=t,i=o);else if(l<r&&0>Nc(c,t))n[i]=c,n[l]=t,i=l;else break e}}return e}function Nc(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(y_=performance,dt.unstable_now=function(){return y_.now()}):(Md=Date,S_=Md.now(),dt.unstable_now=function(){return Md.now()-S_});var y_,Md,S_,Fi=[],Ir=[],cw=1,ti=null,nn=3,Oc=!1,Cs=!1,Ba=!1,E_=typeof setTimeout=="function"?setTimeout:null,T_=typeof clearTimeout=="function"?clearTimeout:null,M_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function bd(n){for(var e=_i(Ir);e!==null;){if(e.callback===null)Uc(Ir);else if(e.startTime<=n)Uc(Ir),e.sortIndex=e.expirationTime,Td(Fi,e);else break;e=_i(Ir)}}function Ad(n){if(Ba=!1,bd(n),!Cs)if(_i(Fi)!==null)Cs=!0,Rd(Cd);else{var e=_i(Ir);e!==null&&Pd(Ad,e.startTime-n)}}function Cd(n,e){Cs=!1,Ba&&(Ba=!1,T_(ka),ka=-1),Oc=!0;var t=nn;try{for(bd(e),ti=_i(Fi);ti!==null&&(!(ti.expirationTime>e)||n&&!C_());){var i=ti.callback;if(typeof i=="function"){ti.callback=null,nn=ti.priorityLevel;var r=i(ti.expirationTime<=e);e=dt.unstable_now(),typeof r=="function"?ti.callback=r:ti===_i(Fi)&&Uc(Fi),bd(e)}else Uc(Fi);ti=_i(Fi)}if(ti!==null)var s=!0;else{var o=_i(Ir);o!==null&&Pd(Ad,o.startTime-e),s=!1}return s}finally{ti=null,nn=t,Oc=!1}}var Bc=!1,Fc=null,ka=-1,b_=5,A_=-1;function C_(){return!(dt.unstable_now()-A_<b_)}function wd(){if(Fc!==null){var n=dt.unstable_now();A_=n;var e=!0;try{e=Fc(!0,n)}finally{e?Oa():(Bc=!1,Fc=null)}}else Bc=!1}var Oa;typeof M_=="function"?Oa=function(){M_(wd)}:typeof MessageChannel<"u"?(Ed=new MessageChannel,w_=Ed.port2,Ed.port1.onmessage=wd,Oa=function(){w_.postMessage(null)}):Oa=function(){E_(wd,0)};var Ed,w_;function Rd(n){Fc=n,Bc||(Bc=!0,Oa())}function Pd(n,e){ka=E_(function(){n(dt.unstable_now())},e)}dt.unstable_IdlePriority=5;dt.unstable_ImmediatePriority=1;dt.unstable_LowPriority=4;dt.unstable_NormalPriority=3;dt.unstable_Profiling=null;dt.unstable_UserBlockingPriority=2;dt.unstable_cancelCallback=function(n){n.callback=null};dt.unstable_continueExecution=function(){Cs||Oc||(Cs=!0,Rd(Cd))};dt.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b_=0<n?Math.floor(1e3/n):5};dt.unstable_getCurrentPriorityLevel=function(){return nn};dt.unstable_getFirstCallbackNode=function(){return _i(Fi)};dt.unstable_next=function(n){switch(nn){case 1:case 2:case 3:var e=3;break;default:e=nn}var t=nn;nn=e;try{return n()}finally{nn=t}};dt.unstable_pauseExecution=function(){};dt.unstable_requestPaint=function(){};dt.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=nn;nn=n;try{return e()}finally{nn=t}};dt.unstable_scheduleCallback=function(n,e,t){var i=dt.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?i+t:i):t=i,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:cw++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>i?(n.sortIndex=t,Td(Ir,n),_i(Fi)===null&&n===_i(Ir)&&(Ba?(T_(ka),ka=-1):Ba=!0,Pd(Ad,t-i))):(n.sortIndex=r,Td(Fi,n),Cs||Oc||(Cs=!0,Rd(Cd))),n};dt.unstable_shouldYield=C_;dt.unstable_wrapCallback=function(n){var e=nn;return function(){var t=nn;nn=e;try{return n.apply(this,arguments)}finally{nn=t}}}});var I_=rr((G3,P_)=>{"use strict";P_.exports=R_()});var Fy=rr(Wn=>{"use strict";var uw=Dc(),Gn=I_();function Q(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bv=new Set,al={};function Vs(n,e){zo(n,e),zo(n+"Capture",e)}function zo(n,e){for(al[n]=e,n=0;n<e.length;n++)Bv.add(e[n])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qd=Object.prototype.hasOwnProperty,hw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L_={},D_={};function fw(n){return Qd.call(D_,n)?!0:Qd.call(L_,n)?!1:hw.test(n)?D_[n]=!0:(L_[n]=!0,!1)}function dw(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function pw(n,e,t,i){if(e===null||typeof e>"u"||dw(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Kt[n]=new xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Kt[e]=new xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Kt[n]=new xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Kt[n]=new xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Kt[n]=new xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Kt[n]=new xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Kt[n]=new xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Kt[n]=new xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Kt[n]=new xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Xp=/[\-:]([a-z])/g;function Yp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Xp,Yp);Kt[e]=new xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Xp,Yp);Kt[e]=new xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Xp,Yp);Kt[e]=new xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Kt[n]=new xn(n,1,!1,n.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Kt[n]=new xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function qp(n,e,t,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pw(e,t,r,i)&&(t=null),i||r===null?fw(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var pr=uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kc=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),wo=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),kv=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),tp=Symbol.for("react.suspense"),np=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),Dr=Symbol.for("react.lazy"),Vv=Symbol.for("react.offscreen"),N_=Symbol.iterator;function za(n){return n===null||typeof n!="object"?null:(n=N_&&n[N_]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,Id;function $a(n){if(Id===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Id=e&&e[1]||""}return`
`+Id+n}var Ld=!1;function Dd(n,e){if(!n||Ld)return"";Ld=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ld=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?$a(n):""}function mw(n){switch(n.tag){case 5:return $a(n.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return n=Dd(n.type,!1),n;case 11:return n=Dd(n.type.render,!1),n;case 1:return n=Dd(n.type,!0),n;default:return""}}function ip(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case wo:return"Fragment";case Mo:return"Portal";case ep:return"Profiler";case $p:return"StrictMode";case tp:return"Suspense";case np:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case zv:return(n.displayName||"Context")+".Consumer";case kv:return(n._context.displayName||"Context")+".Provider";case Zp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Jp:return e=n.displayName||null,e!==null?e:ip(n.type)||"Memo";case Dr:e=n._payload,n=n._init;try{return ip(n(e))}catch{}}return null}function gw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ip(e);case 8:return e===$p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Gv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _w(n){var e=Gv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function zc(n){n._valueTracker||(n._valueTracker=_w(n))}function Hv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Gv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function pu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rp(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function F_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=qr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wv(n,e){e=e.checked,e!=null&&qp(n,"checked",e,!1)}function sp(n,e){Wv(n,e);var t=qr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?op(n,e.type,t):e.hasOwnProperty("defaultValue")&&op(n,e.type,qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function U_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function op(n,e,t){(e!=="number"||pu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Za=Array.isArray;function No(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+qr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ap(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function O_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Q(92));if(Za(t)){if(1<t.length)throw Error(Q(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:qr(t)}}function Xv(n,e){var t=qr(e.value),i=qr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function B_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Yv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Yv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vc,qv=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n})(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Vc=Vc||document.createElement("div"),Vc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ll(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vw=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(n){vw.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ja[e]=ja[n]})});function $v(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ja.hasOwnProperty(n)&&ja[n]?(""+e).trim():e+"px"}function Zv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=$v(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var xw=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cp(n,e){if(e){if(xw[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function up(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hp=null;function Kp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fp=null,Fo=null,Uo=null;function k_(n){if(n=bl(n)){if(typeof fp!="function")throw Error(Q(280));var e=n.stateNode;e&&(e=Gu(e),fp(n.stateNode,n.type,e))}}function Jv(n){Fo?Uo?Uo.push(n):Uo=[n]:Fo=n}function Kv(){if(Fo){var n=Fo,e=Uo;if(Uo=Fo=null,k_(n),e)for(n=0;n<e.length;n++)k_(e[n])}}function jv(n,e){return n(e)}function Qv(){}var Nd=!1;function ex(n,e,t){if(Nd)return n(e,t);Nd=!0;try{return jv(n,e,t)}finally{Nd=!1,(Fo!==null||Uo!==null)&&(Qv(),Kv())}}function cl(n,e){var t=n.stateNode;if(t===null)return null;var i=Gu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Q(231,e,typeof t));return t}var dp=!1;if(ur)try{yo={},Object.defineProperty(yo,"passive",{get:function(){dp=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{dp=!1}var yo;function yw(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Qa=!1,mu=null,gu=!1,pp=null,Sw={onError:function(n){Qa=!0,mu=n}};function Mw(n,e,t,i,r,s,o,a,l){Qa=!1,mu=null,yw.apply(Sw,arguments)}function ww(n,e,t,i,r,s,o,a,l){if(Mw.apply(this,arguments),Qa){if(Qa){var c=mu;Qa=!1,mu=null}else throw Error(Q(198));gu||(gu=!0,pp=c)}}function Gs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function tx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function z_(n){if(Gs(n)!==n)throw Error(Q(188))}function Ew(n){var e=n.alternate;if(!e){if(e=Gs(n),e===null)throw Error(Q(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return z_(r),n;if(s===i)return z_(r),e;s=s.sibling}throw Error(Q(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(t.alternate!==i)throw Error(Q(190))}if(t.tag!==3)throw Error(Q(188));return t.stateNode.current===t?n:e}function nx(n){return n=Ew(n),n!==null?ix(n):null}function ix(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ix(n);if(e!==null)return e;n=n.sibling}return null}var rx=Gn.unstable_scheduleCallback,V_=Gn.unstable_cancelCallback,Tw=Gn.unstable_shouldYield,bw=Gn.unstable_requestPaint,Nt=Gn.unstable_now,Aw=Gn.unstable_getCurrentPriorityLevel,jp=Gn.unstable_ImmediatePriority,sx=Gn.unstable_UserBlockingPriority,_u=Gn.unstable_NormalPriority,Cw=Gn.unstable_LowPriority,ox=Gn.unstable_IdlePriority,Bu=null,ki=null;function Rw(n){if(ki&&typeof ki.onCommitFiberRoot=="function")try{ki.onCommitFiberRoot(Bu,n,void 0,(n.current.flags&128)===128)}catch{}}var Mi=Math.clz32?Math.clz32:Lw,Pw=Math.log,Iw=Math.LN2;function Lw(n){return n>>>=0,n===0?32:31-(Pw(n)/Iw|0)|0}var Gc=64,Hc=4194304;function Ja(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ja(a):(s&=o,s!==0&&(i=Ja(s)))}else o=t&~r,o!==0?i=Ja(o):s!==0&&(i=Ja(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Mi(e),r=1<<t,i|=n[t],e&=~r;return i}function Dw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Mi(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=Dw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function mp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ax(){var n=Gc;return Gc<<=1,(Gc&4194240)===0&&(Gc=64),n}function Fd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function El(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Mi(e),n[e]=t}function Fw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Mi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Qp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Mi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ot=0;function lx(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var cx,em,ux,hx,fx,gp=!1,Wc=[],kr=null,zr=null,Vr=null,ul=new Map,hl=new Map,Fr=[],Uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function G_(n,e){switch(n){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(e.pointerId)}}function Va(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=bl(e),e!==null&&em(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Ow(n,e,t,i,r){switch(e){case"focusin":return kr=Va(kr,n,e,t,i,r),!0;case"dragenter":return zr=Va(zr,n,e,t,i,r),!0;case"mouseover":return Vr=Va(Vr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ul.set(s,Va(ul.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,hl.set(s,Va(hl.get(s)||null,n,e,t,i,r)),!0}return!1}function dx(n){var e=Is(n.target);if(e!==null){var t=Gs(e);if(t!==null){if(e=t.tag,e===13){if(e=tx(t),e!==null){n.blockedOn=e,fx(n.priority,function(){ux(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ru(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=_p(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);hp=i,t.target.dispatchEvent(i),hp=null}else return e=bl(t),e!==null&&em(e),n.blockedOn=t,!1;e.shift()}return!0}function H_(n,e,t){ru(n)&&t.delete(e)}function Bw(){gp=!1,kr!==null&&ru(kr)&&(kr=null),zr!==null&&ru(zr)&&(zr=null),Vr!==null&&ru(Vr)&&(Vr=null),ul.forEach(H_),hl.forEach(H_)}function Ga(n,e){n.blockedOn===e&&(n.blockedOn=null,gp||(gp=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,Bw)))}function fl(n){function e(r){return Ga(r,n)}if(0<Wc.length){Ga(Wc[0],n);for(var t=1;t<Wc.length;t++){var i=Wc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(kr!==null&&Ga(kr,n),zr!==null&&Ga(zr,n),Vr!==null&&Ga(Vr,n),ul.forEach(e),hl.forEach(e),t=0;t<Fr.length;t++)i=Fr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Fr.length&&(t=Fr[0],t.blockedOn===null);)dx(t),t.blockedOn===null&&Fr.shift()}var Oo=pr.ReactCurrentBatchConfig,xu=!0;function kw(n,e,t,i){var r=ot,s=Oo.transition;Oo.transition=null;try{ot=1,tm(n,e,t,i)}finally{ot=r,Oo.transition=s}}function zw(n,e,t,i){var r=ot,s=Oo.transition;Oo.transition=null;try{ot=4,tm(n,e,t,i)}finally{ot=r,Oo.transition=s}}function tm(n,e,t,i){if(xu){var r=_p(n,e,t,i);if(r===null)Gd(n,e,i,yu,t),G_(n,i);else if(Ow(r,n,e,t,i))i.stopPropagation();else if(G_(n,i),e&4&&-1<Uw.indexOf(n)){for(;r!==null;){var s=bl(r);if(s!==null&&cx(s),s=_p(n,e,t,i),s===null&&Gd(n,e,i,yu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gd(n,e,i,null,t)}}var yu=null;function _p(n,e,t,i){if(yu=null,n=Kp(i),n=Is(n),n!==null)if(e=Gs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=tx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return yu=n,null}function px(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Aw()){case jp:return 1;case sx:return 4;case _u:case Cw:return 16;case ox:return 536870912;default:return 16}default:return 16}}var Or=null,nm=null,su=null;function mx(){if(su)return su;var n,e=nm,t=e.length,i,r="value"in Or?Or.value:Or.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return su=r.slice(n,1<i?1-i:void 0)}function ou(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Xc(){return!0}function W_(){return!1}function Hn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xc:W_,this.isPropagationStopped=W_,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Xc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Xc)},persist:function(){},isPersistent:Xc}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},im=Hn(qo),Tl=wt({},qo,{view:0,detail:0}),Vw=Hn(Tl),Ud,Od,Ha,ku=wt({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ha&&(Ha&&n.type==="mousemove"?(Ud=n.screenX-Ha.screenX,Od=n.screenY-Ha.screenY):Od=Ud=0,Ha=n),Ud)},movementY:function(n){return"movementY"in n?n.movementY:Od}}),X_=Hn(ku),Gw=wt({},ku,{dataTransfer:0}),Hw=Hn(Gw),Ww=wt({},Tl,{relatedTarget:0}),Bd=Hn(Ww),Xw=wt({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),Yw=Hn(Xw),qw=wt({},qo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$w=Hn(qw),Zw=wt({},qo,{data:0}),Y_=Hn(Zw),Jw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=jw[n])?!!e[n]:!1}function rm(){return Qw}var eE=wt({},Tl,{key:function(n){if(n.key){var e=Jw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ou(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rm,charCode:function(n){return n.type==="keypress"?ou(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ou(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),tE=Hn(eE),nE=wt({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q_=Hn(nE),iE=wt({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rm}),rE=Hn(iE),sE=wt({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),oE=Hn(sE),aE=wt({},ku,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),lE=Hn(aE),cE=[9,13,27,32],sm=ur&&"CompositionEvent"in window,el=null;ur&&"documentMode"in document&&(el=document.documentMode);var uE=ur&&"TextEvent"in window&&!el,gx=ur&&(!sm||el&&8<el&&11>=el),$_=" ",Z_=!1;function _x(n,e){switch(n){case"keyup":return cE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Eo=!1;function hE(n,e){switch(n){case"compositionend":return vx(e);case"keypress":return e.which!==32?null:(Z_=!0,$_);case"textInput":return n=e.data,n===$_&&Z_?null:n;default:return null}}function fE(n,e){if(Eo)return n==="compositionend"||!sm&&_x(n,e)?(n=mx(),su=nm=Or=null,Eo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gx&&e.locale!=="ko"?null:e.data;default:return null}}var dE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function J_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!dE[n.type]:e==="textarea"}function xx(n,e,t,i){Jv(i),e=Su(e,"onChange"),0<e.length&&(t=new im("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var tl=null,dl=null;function pE(n){Px(n,0)}function zu(n){var e=Ao(n);if(Hv(e))return n}function mE(n,e){if(n==="change")return e}var yx=!1;ur&&(ur?(qc="oninput"in document,qc||(kd=document.createElement("div"),kd.setAttribute("oninput","return;"),qc=typeof kd.oninput=="function"),Yc=qc):Yc=!1,yx=Yc&&(!document.documentMode||9<document.documentMode));var Yc,qc,kd;function K_(){tl&&(tl.detachEvent("onpropertychange",Sx),dl=tl=null)}function Sx(n){if(n.propertyName==="value"&&zu(dl)){var e=[];xx(e,dl,n,Kp(n)),ex(pE,e)}}function gE(n,e,t){n==="focusin"?(K_(),tl=e,dl=t,tl.attachEvent("onpropertychange",Sx)):n==="focusout"&&K_()}function _E(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zu(dl)}function vE(n,e){if(n==="click")return zu(e)}function xE(n,e){if(n==="input"||n==="change")return zu(e)}function yE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ei=typeof Object.is=="function"?Object.is:yE;function pl(n,e){if(Ei(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Qd.call(e,r)||!Ei(n[r],e[r]))return!1}return!0}function j_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Q_(n,e){var t=j_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=j_(t)}}function Mx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Mx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function wx(){for(var n=window,e=pu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=pu(n.document)}return e}function om(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function SE(n){var e=wx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Mx(t.ownerDocument.documentElement,t)){if(i!==null&&om(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Q_(t,s);var o=Q_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ME=ur&&"documentMode"in document&&11>=document.documentMode,To=null,vp=null,nl=null,xp=!1;function ev(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xp||To==null||To!==pu(i)||(i=To,"selectionStart"in i&&om(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nl&&pl(nl,i)||(nl=i,i=Su(vp,"onSelect"),0<i.length&&(e=new im("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=To)))}function $c(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var bo={animationend:$c("Animation","AnimationEnd"),animationiteration:$c("Animation","AnimationIteration"),animationstart:$c("Animation","AnimationStart"),transitionend:$c("Transition","TransitionEnd")},zd={},Ex={};ur&&(Ex=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function Vu(n){if(zd[n])return zd[n];if(!bo[n])return n;var e=bo[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ex)return zd[n]=e[t];return n}var Tx=Vu("animationend"),bx=Vu("animationiteration"),Ax=Vu("animationstart"),Cx=Vu("transitionend"),Rx=new Map,tv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(n,e){Rx.set(n,e),Vs(e,[n])}for(Zc=0;Zc<tv.length;Zc++)Jc=tv[Zc],nv=Jc.toLowerCase(),iv=Jc[0].toUpperCase()+Jc.slice(1),Zr(nv,"on"+iv);var Jc,nv,iv,Zc;Zr(Tx,"onAnimationEnd");Zr(bx,"onAnimationIteration");Zr(Ax,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(Cx,"onTransitionEnd");zo("onMouseEnter",["mouseout","mouseover"]);zo("onMouseLeave",["mouseout","mouseover"]);zo("onPointerEnter",["pointerout","pointerover"]);zo("onPointerLeave",["pointerout","pointerover"]);Vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function rv(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ww(i,e,void 0,n),n.currentTarget=null}function Px(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;rv(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;rv(r,a,c),s=l}}}if(gu)throw n=pp,gu=!1,pp=null,n}function gt(n,e){var t=e[Ep];t===void 0&&(t=e[Ep]=new Set);var i=n+"__bubble";t.has(i)||(Ix(e,n,2,!1),t.add(i))}function Vd(n,e,t){var i=0;e&&(i|=4),Ix(t,n,i,e)}var Kc="_reactListening"+Math.random().toString(36).slice(2);function ml(n){if(!n[Kc]){n[Kc]=!0,Bv.forEach(function(t){t!=="selectionchange"&&(wE.has(t)||Vd(t,!1,n),Vd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Kc]||(e[Kc]=!0,Vd("selectionchange",!1,e))}}function Ix(n,e,t,i){switch(px(e)){case 1:var r=kw;break;case 4:r=zw;break;default:r=tm}t=r.bind(null,e,t,n),r=void 0,!dp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Gd(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Is(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ex(function(){var c=s,u=Kp(t),d=[];e:{var h=Rx.get(n);if(h!==void 0){var p=im,v=n;switch(n){case"keypress":if(ou(t)===0)break e;case"keydown":case"keyup":p=tE;break;case"focusin":v="focus",p=Bd;break;case"focusout":v="blur",p=Bd;break;case"beforeblur":case"afterblur":p=Bd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=X_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Hw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rE;break;case Tx:case bx:case Ax:p=Yw;break;case Cx:p=oE;break;case"scroll":p=Vw;break;case"wheel":p=lE;break;case"copy":case"cut":case"paste":p=$w;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=q_}var _=(e&4)!==0,g=!_&&n==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,f!==null&&(S=cl(m,f),S!=null&&_.push(gl(m,S,x)))),g)break;m=m.return}0<_.length&&(h=new p(h,v,null,t,u),d.push({event:h,listeners:_}))}}if((e&7)===0){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==hp&&(v=t.relatedTarget||t.fromElement)&&(Is(v)||v[hr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?Is(v):null,v!==null&&(g=Gs(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(_=X_,S="onMouseLeave",f="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(_=q_,S="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?h:Ao(p),x=v==null?h:Ao(v),h=new _(S,m+"leave",p,t,u),h.target=g,h.relatedTarget=x,S=null,Is(u)===c&&(_=new _(f,m+"enter",v,t,u),_.target=x,_.relatedTarget=g,S=_),g=S,p&&v)t:{for(_=p,f=v,m=0,x=_;x;x=So(x))m++;for(x=0,S=f;S;S=So(S))x++;for(;0<m-x;)_=So(_),m--;for(;0<x-m;)f=So(f),x--;for(;m--;){if(_===f||f!==null&&_===f.alternate)break t;_=So(_),f=So(f)}_=null}else _=null;p!==null&&sv(d,h,p,_,!1),v!==null&&g!==null&&sv(d,g,v,_,!0)}}e:{if(h=c?Ao(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=mE;else if(J_(h))if(yx)E=xE;else{E=_E;var b=gE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=vE);if(E&&(E=E(n,c))){xx(d,E,t,u);break e}b&&b(n,h,c),n==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&op(h,"number",h.value)}switch(b=c?Ao(c):window,n){case"focusin":(J_(b)||b.contentEditable==="true")&&(To=b,vp=c,nl=null);break;case"focusout":nl=vp=To=null;break;case"mousedown":xp=!0;break;case"contextmenu":case"mouseup":case"dragend":xp=!1,ev(d,t,u);break;case"selectionchange":if(ME)break;case"keydown":case"keyup":ev(d,t,u)}var A;if(sm)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Eo?_x(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(gx&&t.locale!=="ko"&&(Eo||y!=="onCompositionStart"?y==="onCompositionEnd"&&Eo&&(A=mx()):(Or=u,nm="value"in Or?Or.value:Or.textContent,Eo=!0)),b=Su(c,y),0<b.length&&(y=new Y_(y,n,null,t,u),d.push({event:y,listeners:b}),A?y.data=A:(A=vx(t),A!==null&&(y.data=A)))),(A=uE?hE(n,t):fE(n,t))&&(c=Su(c,"onBeforeInput"),0<c.length&&(u=new Y_("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=A))}Px(d,e)})}function gl(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Su(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=cl(n,t),s!=null&&i.unshift(gl(n,s,r)),s=cl(n,e),s!=null&&i.push(gl(n,s,r))),n=n.return}return i}function So(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sv(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=cl(t,s),l!=null&&o.unshift(gl(t,l,a))):r||(l=cl(t,s),l!=null&&o.push(gl(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var EE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function ov(n){return(typeof n=="string"?n:""+n).replace(EE,`
`).replace(TE,"")}function jc(n,e,t){if(e=ov(e),ov(n)!==e&&t)throw Error(Q(425))}function Mu(){}var yp=null,Sp=null;function Mp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wp=typeof setTimeout=="function"?setTimeout:void 0,bE=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,AE=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(n){return av.resolve(null).then(n).catch(CE)}:wp;function CE(n){setTimeout(function(){throw n})}function Hd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),fl(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);fl(e)}function Gr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function lv(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var $o=Math.random().toString(36).slice(2),Bi="__reactFiber$"+$o,_l="__reactProps$"+$o,hr="__reactContainer$"+$o,Ep="__reactEvents$"+$o,RE="__reactListeners$"+$o,PE="__reactHandles$"+$o;function Is(n){var e=n[Bi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[hr]||t[Bi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=lv(n);n!==null;){if(t=n[Bi])return t;n=lv(n)}return e}n=t,t=n.parentNode}return null}function bl(n){return n=n[Bi]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ao(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Q(33))}function Gu(n){return n[_l]||null}var Tp=[],Co=-1;function Jr(n){return{current:n}}function _t(n){0>Co||(n.current=Tp[Co],Tp[Co]=null,Co--)}function pt(n,e){Co++,Tp[Co]=n.current,n.current=e}var $r={},an=Jr($r),Rn=Jr(!1),Us=$r;function Vo(n,e){var t=n.type.contextTypes;if(!t)return $r;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Pn(n){return n=n.childContextTypes,n!=null}function wu(){_t(Rn),_t(an)}function cv(n,e,t){if(an.current!==$r)throw Error(Q(168));pt(an,e),pt(Rn,t)}function Lx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,gw(n)||"Unknown",r));return wt({},t,i)}function Eu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$r,Us=an.current,pt(an,n),pt(Rn,Rn.current),!0}function uv(n,e,t){var i=n.stateNode;if(!i)throw Error(Q(169));t?(n=Lx(n,e,Us),i.__reactInternalMemoizedMergedChildContext=n,_t(Rn),_t(an),pt(an,n)):_t(Rn),pt(Rn,t)}var or=null,Hu=!1,Wd=!1;function Dx(n){or===null?or=[n]:or.push(n)}function IE(n){Hu=!0,Dx(n)}function Kr(){if(!Wd&&or!==null){Wd=!0;var n=0,e=ot;try{var t=or;for(ot=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}or=null,Hu=!1}catch(r){throw or!==null&&(or=or.slice(n+1)),rx(jp,Kr),r}finally{ot=e,Wd=!1}}return null}var Ro=[],Po=0,Tu=null,bu=0,ni=[],ii=0,Os=null,ar=1,lr="";function Rs(n,e){Ro[Po++]=bu,Ro[Po++]=Tu,Tu=n,bu=e}function Nx(n,e,t){ni[ii++]=ar,ni[ii++]=lr,ni[ii++]=Os,Os=n;var i=ar;n=lr;var r=32-Mi(i)-1;i&=~(1<<r),t+=1;var s=32-Mi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ar=1<<32-Mi(e)+r|t<<r|i,lr=s+n}else ar=1<<s|t<<r|i,lr=n}function am(n){n.return!==null&&(Rs(n,1),Nx(n,1,0))}function lm(n){for(;n===Tu;)Tu=Ro[--Po],Ro[Po]=null,bu=Ro[--Po],Ro[Po]=null;for(;n===Os;)Os=ni[--ii],ni[ii]=null,lr=ni[--ii],ni[ii]=null,ar=ni[--ii],ni[ii]=null}var Vn=null,zn=null,xt=!1,Si=null;function Fx(n,e){var t=ri(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function hv(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Vn=n,zn=Gr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Vn=n,zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Os!==null?{id:ar,overflow:lr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ri(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Vn=n,zn=null,!0):!1;default:return!1}}function bp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ap(n){if(xt){var e=zn;if(e){var t=e;if(!hv(n,e)){if(bp(n))throw Error(Q(418));e=Gr(t.nextSibling);var i=Vn;e&&hv(n,e)?Fx(i,t):(n.flags=n.flags&-4097|2,xt=!1,Vn=n)}}else{if(bp(n))throw Error(Q(418));n.flags=n.flags&-4097|2,xt=!1,Vn=n}}}function fv(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Qc(n){if(n!==Vn)return!1;if(!xt)return fv(n),xt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Mp(n.type,n.memoizedProps)),e&&(e=zn)){if(bp(n))throw Ux(),Error(Q(418));for(;e;)Fx(n,e),e=Gr(e.nextSibling)}if(fv(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Q(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){zn=Gr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}zn=null}}else zn=Vn?Gr(n.stateNode.nextSibling):null;return!0}function Ux(){for(var n=zn;n;)n=Gr(n.nextSibling)}function Go(){zn=Vn=null,xt=!1}function cm(n){Si===null?Si=[n]:Si.push(n)}var LE=pr.ReactCurrentBatchConfig;function Wa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Q(309));var i=t.stateNode}if(!i)throw Error(Q(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Q(284));if(!t._owner)throw Error(Q(290,n))}return n}function eu(n,e){throw n=Object.prototype.toString.call(e),Error(Q(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function dv(n){var e=n._init;return e(n._payload)}function Ox(n){function e(f,m){if(n){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function t(f,m){if(!n)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Yr(f,m),f.index=0,f.sibling=null,f}function s(f,m,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=2,m):x):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,m,x,S){return m===null||m.tag!==6?(m=Kd(x,f.mode,S),m.return=f,m):(m=r(m,x),m.return=f,m)}function l(f,m,x,S){var E=x.type;return E===wo?u(f,m,x.props.children,S,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Dr&&dv(E)===m.type)?(S=r(m,x.props),S.ref=Wa(f,m,x),S.return=f,S):(S=du(x.type,x.key,x.props,null,f.mode,S),S.ref=Wa(f,m,x),S.return=f,S)}function c(f,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=jd(x,f.mode,S),m.return=f,m):(m=r(m,x.children||[]),m.return=f,m)}function u(f,m,x,S,E){return m===null||m.tag!==7?(m=Fs(x,f.mode,S,E),m.return=f,m):(m=r(m,x),m.return=f,m)}function d(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Kd(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case kc:return x=du(m.type,m.key,m.props,null,f.mode,x),x.ref=Wa(f,null,m),x.return=f,x;case Mo:return m=jd(m,f.mode,x),m.return=f,m;case Dr:var S=m._init;return d(f,S(m._payload),x)}if(Za(m)||za(m))return m=Fs(m,f.mode,x,null),m.return=f,m;eu(f,m)}return null}function h(f,m,x,S){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:a(f,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case kc:return x.key===E?l(f,m,x,S):null;case Mo:return x.key===E?c(f,m,x,S):null;case Dr:return E=x._init,h(f,m,E(x._payload),S)}if(Za(x)||za(x))return E!==null?null:u(f,m,x,S,null);eu(f,x)}return null}function p(f,m,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(x)||null,a(m,f,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case kc:return f=f.get(S.key===null?x:S.key)||null,l(m,f,S,E);case Mo:return f=f.get(S.key===null?x:S.key)||null,c(m,f,S,E);case Dr:var b=S._init;return p(f,m,x,b(S._payload),E)}if(Za(S)||za(S))return f=f.get(x)||null,u(m,f,S,E,null);eu(m,S)}return null}function v(f,m,x,S){for(var E=null,b=null,A=m,y=m=0,w=null;A!==null&&y<x.length;y++){A.index>y?(w=A,A=null):w=A.sibling;var I=h(f,A,x[y],S);if(I===null){A===null&&(A=w);break}n&&A&&I.alternate===null&&e(f,A),m=s(I,m,y),b===null?E=I:b.sibling=I,b=I,A=w}if(y===x.length)return t(f,A),xt&&Rs(f,y),E;if(A===null){for(;y<x.length;y++)A=d(f,x[y],S),A!==null&&(m=s(A,m,y),b===null?E=A:b.sibling=A,b=A);return xt&&Rs(f,y),E}for(A=i(f,A);y<x.length;y++)w=p(A,f,y,x[y],S),w!==null&&(n&&w.alternate!==null&&A.delete(w.key===null?y:w.key),m=s(w,m,y),b===null?E=w:b.sibling=w,b=w);return n&&A.forEach(function(R){return e(f,R)}),xt&&Rs(f,y),E}function _(f,m,x,S){var E=za(x);if(typeof E!="function")throw Error(Q(150));if(x=E.call(x),x==null)throw Error(Q(151));for(var b=E=null,A=m,y=m=0,w=null,I=x.next();A!==null&&!I.done;y++,I=x.next()){A.index>y?(w=A,A=null):w=A.sibling;var R=h(f,A,I.value,S);if(R===null){A===null&&(A=w);break}n&&A&&R.alternate===null&&e(f,A),m=s(R,m,y),b===null?E=R:b.sibling=R,b=R,A=w}if(I.done)return t(f,A),xt&&Rs(f,y),E;if(A===null){for(;!I.done;y++,I=x.next())I=d(f,I.value,S),I!==null&&(m=s(I,m,y),b===null?E=I:b.sibling=I,b=I);return xt&&Rs(f,y),E}for(A=i(f,A);!I.done;y++,I=x.next())I=p(A,f,y,I.value,S),I!==null&&(n&&I.alternate!==null&&A.delete(I.key===null?y:I.key),m=s(I,m,y),b===null?E=I:b.sibling=I,b=I);return n&&A.forEach(function(F){return e(f,F)}),xt&&Rs(f,y),E}function g(f,m,x,S){if(typeof x=="object"&&x!==null&&x.type===wo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case kc:e:{for(var E=x.key,b=m;b!==null;){if(b.key===E){if(E=x.type,E===wo){if(b.tag===7){t(f,b.sibling),m=r(b,x.props.children),m.return=f,f=m;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Dr&&dv(E)===b.type){t(f,b.sibling),m=r(b,x.props),m.ref=Wa(f,b,x),m.return=f,f=m;break e}t(f,b);break}else e(f,b);b=b.sibling}x.type===wo?(m=Fs(x.props.children,f.mode,S,x.key),m.return=f,f=m):(S=du(x.type,x.key,x.props,null,f.mode,S),S.ref=Wa(f,m,x),S.return=f,f=S)}return o(f);case Mo:e:{for(b=x.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){t(f,m.sibling),m=r(m,x.children||[]),m.return=f,f=m;break e}else{t(f,m);break}else e(f,m);m=m.sibling}m=jd(x,f.mode,S),m.return=f,f=m}return o(f);case Dr:return b=x._init,g(f,m,b(x._payload),S)}if(Za(x))return v(f,m,x,S);if(za(x))return _(f,m,x,S);eu(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(t(f,m.sibling),m=r(m,x),m.return=f,f=m):(t(f,m),m=Kd(x,f.mode,S),m.return=f,f=m),o(f)):t(f,m)}return g}var Ho=Ox(!0),Bx=Ox(!1),Au=Jr(null),Cu=null,Io=null,um=null;function hm(){um=Io=Cu=null}function fm(n){var e=Au.current;_t(Au),n._currentValue=e}function Cp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Bo(n,e){Cu=n,um=Io=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Cn=!0),n.firstContext=null)}function oi(n){var e=n._currentValue;if(um!==n)if(n={context:n,memoizedValue:e,next:null},Io===null){if(Cu===null)throw Error(Q(308));Io=n,Cu.dependencies={lanes:0,firstContext:n}}else Io=Io.next=n;return e}var Ls=null;function dm(n){Ls===null?Ls=[n]:Ls.push(n)}function kx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,dm(e)):(t.next=r.next,r.next=t),e.interleaved=t,fr(n,i)}function fr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Nr=!1;function pm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(tt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fr(n,t)}return r=i.interleaved,r===null?(e.next=e,dm(i)):(e.next=r.next,r.next=e),i.interleaved=e,fr(n,t)}function au(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qp(n,t)}}function pv(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ru(n,e,t,i){var r=n.updateQueue;Nr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,_=a;switch(h=e,p=t,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=wt({},d,h);break e;case 2:Nr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ks|=o,n.lanes=o,n.memoizedState=d}}function mv(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var Al={},zi=Jr(Al),vl=Jr(Al),xl=Jr(Al);function Ds(n){if(n===Al)throw Error(Q(174));return n}function mm(n,e){switch(pt(xl,e),pt(vl,n),pt(zi,Al),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=lp(e,n)}_t(zi),pt(zi,e)}function Wo(){_t(zi),_t(vl),_t(xl)}function Vx(n){Ds(xl.current);var e=Ds(zi.current),t=lp(e,n.type);e!==t&&(pt(vl,n),pt(zi,t))}function gm(n){vl.current===n&&(_t(zi),_t(vl))}var St=Jr(0);function Pu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xd=[];function _m(){for(var n=0;n<Xd.length;n++)Xd[n]._workInProgressVersionPrimary=null;Xd.length=0}var lu=pr.ReactCurrentDispatcher,Yd=pr.ReactCurrentBatchConfig,Bs=0,Mt=null,Bt=null,Wt=null,Iu=!1,il=!1,yl=0,DE=0;function rn(){throw Error(Q(321))}function vm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ei(n[t],e[t]))return!1;return!0}function xm(n,e,t,i,r,s){if(Bs=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lu.current=n===null||n.memoizedState===null?OE:BE,n=t(i,r),il){s=0;do{if(il=!1,yl=0,25<=s)throw Error(Q(301));s+=1,Wt=Bt=null,e.updateQueue=null,lu.current=kE,n=t(i,r)}while(il)}if(lu.current=Lu,e=Bt!==null&&Bt.next!==null,Bs=0,Wt=Bt=Mt=null,Iu=!1,e)throw Error(Q(300));return n}function ym(){var n=yl!==0;return yl=0,n}function Oi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Mt.memoizedState=Wt=n:Wt=Wt.next=n,Wt}function ai(){if(Bt===null){var n=Mt.alternate;n=n!==null?n.memoizedState:null}else n=Bt.next;var e=Wt===null?Mt.memoizedState:Wt.next;if(e!==null)Wt=e,Bt=n;else{if(n===null)throw Error(Q(310));Bt=n,n={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Wt===null?Mt.memoizedState=Wt=n:Wt=Wt.next=n}return Wt}function Sl(n,e){return typeof e=="function"?e(n):e}function qd(n){var e=ai(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=Bt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Bs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=u,ks|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ei(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Mt.lanes|=s,ks|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function $d(n){var e=ai(),t=e.queue;if(t===null)throw Error(Q(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Ei(s,e.memoizedState)||(Cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Gx(){}function Hx(n,e){var t=Mt,i=ai(),r=e(),s=!Ei(i.memoizedState,r);if(s&&(i.memoizedState=r,Cn=!0),i=i.queue,Sm(Yx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(t.flags|=2048,Ml(9,Xx.bind(null,t,i,r,e),void 0,null),Xt===null)throw Error(Q(349));(Bs&30)!==0||Wx(t,e,r)}return r}function Wx(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Xx(n,e,t,i){e.value=t,e.getSnapshot=i,qx(e)&&$x(n)}function Yx(n,e,t){return t(function(){qx(e)&&$x(n)})}function qx(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ei(n,t)}catch{return!0}}function $x(n){var e=fr(n,1);e!==null&&wi(e,n,1,-1)}function gv(n){var e=Oi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sl,lastRenderedState:n},e.queue=n,n=n.dispatch=UE.bind(null,Mt,n),[e.memoizedState,n]}function Ml(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Zx(){return ai().memoizedState}function cu(n,e,t,i){var r=Oi();Mt.flags|=n,r.memoizedState=Ml(1|e,t,void 0,i===void 0?null:i)}function Wu(n,e,t,i){var r=ai();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&vm(i,o.deps)){r.memoizedState=Ml(e,t,s,i);return}}Mt.flags|=n,r.memoizedState=Ml(1|e,t,s,i)}function _v(n,e){return cu(8390656,8,n,e)}function Sm(n,e){return Wu(2048,8,n,e)}function Jx(n,e){return Wu(4,2,n,e)}function Kx(n,e){return Wu(4,4,n,e)}function jx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Qx(n,e,t){return t=t!=null?t.concat([n]):null,Wu(4,4,jx.bind(null,e,n),t)}function Mm(){}function ey(n,e){var t=ai();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ty(n,e){var t=ai();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function ny(n,e,t){return(Bs&21)===0?(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=t):(Ei(t,e)||(t=ax(),Mt.lanes|=t,ks|=t,n.baseState=!0),e)}function NE(n,e){var t=ot;ot=t!==0&&4>t?t:4,n(!0);var i=Yd.transition;Yd.transition={};try{n(!1),e()}finally{ot=t,Yd.transition=i}}function iy(){return ai().memoizedState}function FE(n,e,t){var i=Xr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ry(n))sy(e,t);else if(t=kx(n,e,t,i),t!==null){var r=vn();wi(t,n,i,r),oy(t,e,i)}}function UE(n,e,t){var i=Xr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ry(n))sy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Ei(a,o)){var l=e.interleaved;l===null?(r.next=r,dm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}t=kx(n,e,r,i),t!==null&&(r=vn(),wi(t,n,i,r),oy(t,e,i))}}function ry(n){var e=n.alternate;return n===Mt||e!==null&&e===Mt}function sy(n,e){il=Iu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function oy(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qp(n,t)}}var Lu={readContext:oi,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},OE={readContext:oi,useCallback:function(n,e){return Oi().memoizedState=[n,e===void 0?null:e],n},useContext:oi,useEffect:_v,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,cu(4194308,4,jx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return cu(4194308,4,n,e)},useInsertionEffect:function(n,e){return cu(4,2,n,e)},useMemo:function(n,e){var t=Oi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Oi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=FE.bind(null,Mt,n),[i.memoizedState,n]},useRef:function(n){var e=Oi();return n={current:n},e.memoizedState=n},useState:gv,useDebugValue:Mm,useDeferredValue:function(n){return Oi().memoizedState=n},useTransition:function(){var n=gv(!1),e=n[0];return n=NE.bind(null,n[1]),Oi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Mt,r=Oi();if(xt){if(t===void 0)throw Error(Q(407));t=t()}else{if(t=e(),Xt===null)throw Error(Q(349));(Bs&30)!==0||Wx(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,_v(Yx.bind(null,i,s,n),[n]),i.flags|=2048,Ml(9,Xx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Oi(),e=Xt.identifierPrefix;if(xt){var t=lr,i=ar;t=(i&~(1<<32-Mi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=yl++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=DE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},BE={readContext:oi,useCallback:ey,useContext:oi,useEffect:Sm,useImperativeHandle:Qx,useInsertionEffect:Jx,useLayoutEffect:Kx,useMemo:ty,useReducer:qd,useRef:Zx,useState:function(){return qd(Sl)},useDebugValue:Mm,useDeferredValue:function(n){var e=ai();return ny(e,Bt.memoizedState,n)},useTransition:function(){var n=qd(Sl)[0],e=ai().memoizedState;return[n,e]},useMutableSource:Gx,useSyncExternalStore:Hx,useId:iy,unstable_isNewReconciler:!1},kE={readContext:oi,useCallback:ey,useContext:oi,useEffect:Sm,useImperativeHandle:Qx,useInsertionEffect:Jx,useLayoutEffect:Kx,useMemo:ty,useReducer:$d,useRef:Zx,useState:function(){return $d(Sl)},useDebugValue:Mm,useDeferredValue:function(n){var e=ai();return Bt===null?e.memoizedState=n:ny(e,Bt.memoizedState,n)},useTransition:function(){var n=$d(Sl)[0],e=ai().memoizedState;return[n,e]},useMutableSource:Gx,useSyncExternalStore:Hx,useId:iy,unstable_isNewReconciler:!1};function xi(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Rp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Xu={isMounted:function(n){return(n=n._reactInternals)?Gs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=vn(),r=Xr(n),s=cr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Hr(n,s,r),e!==null&&(wi(e,n,r,i),au(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=vn(),r=Xr(n),s=cr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Hr(n,s,r),e!==null&&(wi(e,n,r,i),au(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=vn(),i=Xr(n),r=cr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Hr(n,r,i),e!==null&&(wi(e,n,i,t),au(e,n,i))}};function vv(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!pl(t,i)||!pl(r,s):!0}function ay(n,e,t){var i=!1,r=$r,s=e.contextType;return typeof s=="object"&&s!==null?s=oi(s):(r=Pn(e)?Us:an.current,i=e.contextTypes,s=(i=i!=null)?Vo(n,r):$r),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function xv(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Xu.enqueueReplaceState(e,e.state,null)}function Pp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},pm(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=oi(s):(s=Pn(e)?Us:an.current,r.context=Vo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xu.enqueueReplaceState(r,r.state,null),Ru(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Xo(n,e){try{var t="",i=e;do t+=mw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Zd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ip(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var zE=typeof WeakMap=="function"?WeakMap:Map;function ly(n,e,t){t=cr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Nu||(Nu=!0,Vp=i),Ip(n,e)},t}function cy(n,e,t){t=cr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ip(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ip(n,e),typeof i!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function yv(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new zE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=eT.bind(null,n,e,t),e.then(n,n))}function Sv(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Mv(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=cr(-1,1),e.tag=2,Hr(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var VE=pr.ReactCurrentOwner,Cn=!1;function _n(n,e,t,i){e.child=n===null?Bx(e,null,t,i):Ho(e,n.child,t,i)}function wv(n,e,t,i,r){t=t.render;var s=e.ref;return Bo(e,r),i=xm(n,e,t,i,s,r),t=ym(),n!==null&&!Cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,dr(n,e,r)):(xt&&t&&am(e),e.flags|=1,_n(n,e,i,r),e.child)}function Ev(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Pm(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,uy(n,e,s,i,r)):(n=du(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:pl,t(o,i)&&n.ref===e.ref)return dr(n,e,r)}return e.flags|=1,n=Yr(s,i),n.ref=e.ref,n.return=e,e.child=n}function uy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(pl(s,i)&&n.ref===e.ref)if(Cn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Cn=!0);else return e.lanes=n.lanes,dr(n,e,r)}return Lp(n,e,t,i,r)}function hy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Do,kn),kn|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,pt(Do,kn),kn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,pt(Do,kn),kn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,pt(Do,kn),kn|=i;return _n(n,e,r,t),e.child}function fy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Lp(n,e,t,i,r){var s=Pn(t)?Us:an.current;return s=Vo(e,s),Bo(e,r),t=xm(n,e,t,i,s,r),i=ym(),n!==null&&!Cn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,dr(n,e,r)):(xt&&i&&am(e),e.flags|=1,_n(n,e,t,r),e.child)}function Tv(n,e,t,i,r){if(Pn(t)){var s=!0;Eu(e)}else s=!1;if(Bo(e,r),e.stateNode===null)uu(n,e),ay(e,t,i),Pp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=oi(c):(c=Pn(t)?Us:an.current,c=Vo(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&xv(e,o,i,c),Nr=!1;var h=e.memoizedState;o.state=h,Ru(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Rn.current||Nr?(typeof u=="function"&&(Rp(e,t,u,i),l=e.memoizedState),(a=Nr||vv(e,t,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,zx(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:xi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=oi(l):(l=Pn(t)?Us:an.current,l=Vo(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&xv(e,o,i,l),Nr=!1,h=e.memoizedState,o.state=h,Ru(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||Rn.current||Nr?(typeof p=="function"&&(Rp(e,t,p,i),v=e.memoizedState),(c=Nr||vv(e,t,c,i,h,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Dp(n,e,t,i,s,r)}function Dp(n,e,t,i,r,s){fy(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&uv(e,t,!1),dr(n,e,s);i=e.stateNode,VE.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ho(e,n.child,null,s),e.child=Ho(e,null,a,s)):_n(n,e,a,s),e.memoizedState=i.state,r&&uv(e,t,!0),e.child}function dy(n){var e=n.stateNode;e.pendingContext?cv(n,e.pendingContext,e.pendingContext!==e.context):e.context&&cv(n,e.context,!1),mm(n,e.containerInfo)}function bv(n,e,t,i,r){return Go(),cm(r),e.flags|=256,_n(n,e,t,i),e.child}var Np={dehydrated:null,treeContext:null,retryLane:0};function Fp(n){return{baseLanes:n,cachePool:null,transitions:null}}function py(n,e,t){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),pt(St,r&1),n===null)return Ap(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$u(o,i,0,null),n=Fs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Fp(t),e.memoizedState=Np,n):wm(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return GE(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yr(a,s):(s=Fs(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Fp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Np,i}return s=n.child,n=s.sibling,i=Yr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function wm(n,e){return e=$u({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function tu(n,e,t,i){return i!==null&&cm(i),Ho(e,n.child,null,t),n=wm(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function GE(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Zd(Error(Q(422))),tu(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$u({mode:"visible",children:i.children},r,0,null),s=Fs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&Ho(e,n.child,null,o),e.child.memoizedState=Fp(o),e.memoizedState=Np,s);if((e.mode&1)===0)return tu(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=Zd(s,i,void 0),tu(n,e,o,i)}if(a=(o&n.childLanes)!==0,Cn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fr(n,r),wi(i,n,r,-1))}return Rm(),i=Zd(Error(Q(421))),tu(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=tT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,zn=Gr(r.nextSibling),Vn=e,xt=!0,Si=null,n!==null&&(ni[ii++]=ar,ni[ii++]=lr,ni[ii++]=Os,ar=n.id,lr=n.overflow,Os=e),e=wm(e,i.children),e.flags|=4096,e)}function Av(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Cp(n.return,e,t)}function Jd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function my(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(_n(n,e,i.children,t),i=St.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Av(n,t,e);else if(n.tag===19)Av(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(pt(St,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Pu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Jd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Pu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Jd(e,!0,t,null,s);break;case"together":Jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uu(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function dr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ks|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Q(153));if(e.child!==null){for(n=e.child,t=Yr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Yr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function HE(n,e,t){switch(e.tag){case 3:dy(e),Go();break;case 5:Vx(e);break;case 1:Pn(e.type)&&Eu(e);break;case 4:mm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Au,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(St,St.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?py(n,e,t):(pt(St,St.current&1),n=dr(n,e,t),n!==null?n.sibling:null);pt(St,St.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return my(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,hy(n,e,t)}return dr(n,e,t)}var gy,Up,_y,vy;gy=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Up=function(){};_y=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Ds(zi.current);var s=null;switch(t){case"input":r=rp(n,r),i=rp(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=ap(n,r),i=ap(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Mu)}cp(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(al.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(al.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};vy=function(n,e,t,i){t!==i&&(e.flags|=4)};function Xa(n,e){if(!xt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function sn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function WE(n,e,t){var i=e.pendingProps;switch(lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return Pn(e.type)&&wu(),sn(e),null;case 3:return i=e.stateNode,Wo(),_t(Rn),_t(an),_m(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Qc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Si!==null&&(Wp(Si),Si=null))),Up(n,e),sn(e),null;case 5:gm(e);var r=Ds(xl.current);if(t=e.type,n!==null&&e.stateNode!=null)_y(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return sn(e),null}if(n=Ds(zi.current),Qc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Bi]=e,i[_l]=s,n=(e.mode&1)!==0,t){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ka.length;r++)gt(Ka[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":F_(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":O_(i,s),gt("invalid",i)}cp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&jc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jc(i.textContent,a,n),r=["children",""+a]):al.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(t){case"input":zc(i),U_(i,s,!0);break;case"textarea":zc(i),B_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Mu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Yv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Bi]=e,n[_l]=i,gy(n,e,!1,!1),e.stateNode=n;e:{switch(o=up(t,i),t){case"dialog":gt("cancel",n),gt("close",n),r=i;break;case"iframe":case"object":case"embed":gt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ka.length;r++)gt(Ka[r],n);r=i;break;case"source":gt("error",n),r=i;break;case"img":case"image":case"link":gt("error",n),gt("load",n),r=i;break;case"details":gt("toggle",n),r=i;break;case"input":F_(n,i),r=rp(n,i),gt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),gt("invalid",n);break;case"textarea":O_(n,i),r=ap(n,i),gt("invalid",n);break;default:r=i}cp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ll(n,l):typeof l=="number"&&ll(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(al.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",n):l!=null&&qp(n,s,l,o))}switch(t){case"input":zc(n),U_(n,i,!1);break;case"textarea":zc(n),B_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+qr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?No(n,!!i.multiple,s,!1):i.defaultValue!=null&&No(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Mu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(n&&e.stateNode!=null)vy(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(t=Ds(xl.current),Ds(zi.current),Qc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Bi]=e,(s=i.nodeValue!==t)&&(n=Vn,n!==null))switch(n.tag){case 3:jc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Bi]=e,e.stateNode=i}return sn(e),null;case 13:if(_t(St),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(xt&&zn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Ux(),Go(),e.flags|=98560,s=!1;else if(s=Qc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[Bi]=e}else Go(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else Si!==null&&(Wp(Si),Si=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(St.current&1)!==0?kt===0&&(kt=3):Rm())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return Wo(),Up(n,e),n===null&&ml(e.stateNode.containerInfo),sn(e),null;case 10:return fm(e.type._context),sn(e),null;case 17:return Pn(e.type)&&wu(),sn(e),null;case 19:if(_t(St),s=e.memoizedState,s===null)return sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Xa(s,!1);else{if(kt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Pu(n),o!==null){for(e.flags|=128,Xa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return pt(St,St.current&1|2),e.child}n=n.sibling}s.tail!==null&&Nt()>Yo&&(e.flags|=128,i=!0,Xa(s,!1),e.lanes=4194304)}else{if(!i)if(n=Pu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return sn(e),null}else 2*Nt()-s.renderingStartTime>Yo&&t!==1073741824&&(e.flags|=128,i=!0,Xa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,t=St.current,pt(St,i?t&1|2:t&1),e):(sn(e),null);case 22:case 23:return Cm(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(kn&1073741824)!==0&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function XE(n,e){switch(lm(e),e.tag){case 1:return Pn(e.type)&&wu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Wo(),_t(Rn),_t(an),_m(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return gm(e),null;case 13:if(_t(St),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));Go()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return _t(St),null;case 4:return Wo(),null;case 10:return fm(e.type._context),null;case 22:case 23:return Cm(),null;case 24:return null;default:return null}}var nu=!1,on=!1,YE=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Lo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Pt(n,e,i)}else t.current=null}function Op(n,e,t){try{t()}catch(i){Pt(n,e,i)}}var Cv=!1;function qE(n,e){if(yp=xu,n=wx(),om(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Sp={focusedElem:n,selectionRange:t},xu=!1,ve=e;ve!==null;)if(e=ve,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ve=n;else for(;ve!==null;){e=ve;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,g=v.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:xi(e.type,_),g);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(S){Pt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}return v=Cv,Cv=!1,v}function rl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Op(e,t,s)}r=r.next}while(r!==i)}}function Yu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Bp(n){var e=n.ref;if(e!==null){var t=n.stateNode;n.tag,n=t,typeof e=="function"?e(n):e.current=n}}function xy(n){var e=n.alternate;e!==null&&(n.alternate=null,xy(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Bi],delete e[_l],delete e[Ep],delete e[RE],delete e[PE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function yy(n){return n.tag===5||n.tag===3||n.tag===4}function Rv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||yy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Mu));else if(i!==4&&(n=n.child,n!==null))for(kp(n,e,t),n=n.sibling;n!==null;)kp(n,e,t),n=n.sibling}function zp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(zp(n,e,t),n=n.sibling;n!==null;)zp(n,e,t),n=n.sibling}var Zt=null,yi=!1;function Lr(n,e,t){for(t=t.child;t!==null;)Sy(n,e,t),t=t.sibling}function Sy(n,e,t){if(ki&&typeof ki.onCommitFiberUnmount=="function")try{ki.onCommitFiberUnmount(Bu,t)}catch{}switch(t.tag){case 5:on||Lo(t,e);case 6:var i=Zt,r=yi;Zt=null,Lr(n,e,t),Zt=i,yi=r,Zt!==null&&(yi?(n=Zt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Zt.removeChild(t.stateNode));break;case 18:Zt!==null&&(yi?(n=Zt,t=t.stateNode,n.nodeType===8?Hd(n.parentNode,t):n.nodeType===1&&Hd(n,t),fl(n)):Hd(Zt,t.stateNode));break;case 4:i=Zt,r=yi,Zt=t.stateNode.containerInfo,yi=!0,Lr(n,e,t),Zt=i,yi=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Op(t,e,o),r=r.next}while(r!==i)}Lr(n,e,t);break;case 1:if(!on&&(Lo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Pt(t,e,a)}Lr(n,e,t);break;case 21:Lr(n,e,t);break;case 22:t.mode&1?(on=(i=on)||t.memoizedState!==null,Lr(n,e,t),on=i):Lr(n,e,t);break;default:Lr(n,e,t)}}function Pv(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new YE),e.forEach(function(i){var r=nT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function vi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Zt=a.stateNode,yi=!1;break e;case 3:Zt=a.stateNode.containerInfo,yi=!0;break e;case 4:Zt=a.stateNode.containerInfo,yi=!0;break e}a=a.return}if(Zt===null)throw Error(Q(160));Sy(s,o,r),Zt=null,yi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)My(e,n),e=e.sibling}function My(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(e,n),Ui(n),i&4){try{rl(3,n,n.return),Yu(3,n)}catch(_){Pt(n,n.return,_)}try{rl(5,n,n.return)}catch(_){Pt(n,n.return,_)}}break;case 1:vi(e,n),Ui(n),i&512&&t!==null&&Lo(t,t.return);break;case 5:if(vi(e,n),Ui(n),i&512&&t!==null&&Lo(t,t.return),n.flags&32){var r=n.stateNode;try{ll(r,"")}catch(_){Pt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wv(r,s),up(a,o);var c=up(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Zv(r,d):u==="dangerouslySetInnerHTML"?qv(r,d):u==="children"?ll(r,d):qp(r,u,d,c)}switch(a){case"input":sp(r,s);break;case"textarea":Xv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?No(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?No(r,!!s.multiple,s.defaultValue,!0):No(r,!!s.multiple,s.multiple?[]:"",!1))}r[_l]=s}catch(_){Pt(n,n.return,_)}}break;case 6:if(vi(e,n),Ui(n),i&4){if(n.stateNode===null)throw Error(Q(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Pt(n,n.return,_)}}break;case 3:if(vi(e,n),Ui(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{fl(e.containerInfo)}catch(_){Pt(n,n.return,_)}break;case 4:vi(e,n),Ui(n);break;case 13:vi(e,n),Ui(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bm=Nt())),i&4&&Pv(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(on=(c=on)||u,vi(e,n),on=c):vi(e,n),Ui(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&(n.mode&1)!==0)for(ve=n,u=n.child;u!==null;){for(d=ve=u;ve!==null;){switch(h=ve,p=h.child,h.tag){case 0:case 11:case 14:case 15:rl(4,h,h.return);break;case 1:Lo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Pt(i,t,_)}}break;case 5:Lo(h,h.return);break;case 22:if(h.memoizedState!==null){Lv(d);continue}}p!==null?(p.return=h,ve=p):Lv(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$v("display",o))}catch(_){Pt(n,n.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){Pt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vi(e,n),Ui(n),i&4&&Pv(n);break;case 21:break;default:vi(e,n),Ui(n)}}function Ui(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(yy(t)){var i=t;break e}t=t.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ll(r,""),i.flags&=-33);var s=Rv(n);zp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rv(n);kp(n,a,o);break;default:throw Error(Q(161))}}catch(l){Pt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function $E(n,e,t){ve=n,wy(n,e,t)}function wy(n,e,t){for(var i=(n.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=nu;var c=on;if(nu=o,(on=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?Dv(r):l!==null?(l.return=o,ve=l):Dv(r);for(;s!==null;)ve=s,wy(s,e,t),s=s.sibling;ve=r,nu=a,on=c}Iv(n,e,t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,ve=s):Iv(n,e,t)}}function Iv(n){for(;ve!==null;){var e=ve;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:on||Yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:xi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}mv(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&fl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}on||e.flags&512&&Bp(e)}catch(h){Pt(e,e.return,h)}}if(e===n){ve=null;break}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}}function Lv(n){for(;ve!==null;){var e=ve;if(e===n){ve=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ve=t;break}ve=e.return}}function Dv(n){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Yu(4,e)}catch(l){Pt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{Bp(e)}catch(l){Pt(e,s,l)}break;case 5:var o=e.return;try{Bp(e)}catch(l){Pt(e,o,l)}}}catch(l){Pt(e,e.return,l)}if(e===n){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var ZE=Math.ceil,Du=pr.ReactCurrentDispatcher,Em=pr.ReactCurrentOwner,si=pr.ReactCurrentBatchConfig,tt=0,Xt=null,Ut=null,Jt=0,kn=0,Do=Jr(0),kt=0,wl=null,ks=0,qu=0,Tm=0,sl=null,An=null,bm=0,Yo=1/0,sr=null,Nu=!1,Vp=null,Wr=null,iu=!1,Br=null,Fu=0,ol=0,Gp=null,hu=-1,fu=0;function vn(){return(tt&6)!==0?Nt():hu!==-1?hu:hu=Nt()}function Xr(n){return(n.mode&1)===0?1:(tt&2)!==0&&Jt!==0?Jt&-Jt:LE.transition!==null?(fu===0&&(fu=ax()),fu):(n=ot,n!==0||(n=window.event,n=n===void 0?16:px(n.type)),n)}function wi(n,e,t,i){if(50<ol)throw ol=0,Gp=null,Error(Q(185));El(n,t,i),((tt&2)===0||n!==Xt)&&(n===Xt&&((tt&2)===0&&(qu|=t),kt===4&&Ur(n,Jt)),In(n,i),t===1&&tt===0&&(e.mode&1)===0&&(Yo=Nt()+500,Hu&&Kr()))}function In(n,e){var t=n.callbackNode;Nw(n,e);var i=vu(n,n===Xt?Jt:0);if(i===0)t!==null&&V_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&V_(t),e===1)n.tag===0?IE(Nv.bind(null,n)):Dx(Nv.bind(null,n)),AE(function(){(tt&6)===0&&Kr()}),t=null;else{switch(lx(i)){case 1:t=jp;break;case 4:t=sx;break;case 16:t=_u;break;case 536870912:t=ox;break;default:t=_u}t=Iy(t,Ey.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ey(n,e){if(hu=-1,fu=0,(tt&6)!==0)throw Error(Q(327));var t=n.callbackNode;if(ko()&&n.callbackNode!==t)return null;var i=vu(n,n===Xt?Jt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Uu(n,i);else{e=i;var r=tt;tt|=2;var s=by();(Xt!==n||Jt!==e)&&(sr=null,Yo=Nt()+500,Ns(n,e));do try{jE();break}catch(a){Ty(n,a)}while(!0);hm(),Du.current=s,tt=r,Ut!==null?e=0:(Xt=null,Jt=0,e=kt)}if(e!==0){if(e===2&&(r=mp(n),r!==0&&(i=r,e=Hp(n,r))),e===1)throw t=wl,Ns(n,0),Ur(n,i),In(n,Nt()),t;if(e===6)Ur(n,i);else{if(r=n.current.alternate,(i&30)===0&&!JE(r)&&(e=Uu(n,i),e===2&&(s=mp(n),s!==0&&(i=s,e=Hp(n,s))),e===1))throw t=wl,Ns(n,0),Ur(n,i),In(n,Nt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:Ps(n,An,sr);break;case 3:if(Ur(n,i),(i&130023424)===i&&(e=bm+500-Nt(),10<e)){if(vu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=wp(Ps.bind(null,n,An,sr),e);break}Ps(n,An,sr);break;case 4:if(Ur(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Mi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ZE(i/1960))-i,10<i){n.timeoutHandle=wp(Ps.bind(null,n,An,sr),i);break}Ps(n,An,sr);break;case 5:Ps(n,An,sr);break;default:throw Error(Q(329))}}}return In(n,Nt()),n.callbackNode===t?Ey.bind(null,n):null}function Hp(n,e){var t=sl;return n.current.memoizedState.isDehydrated&&(Ns(n,e).flags|=256),n=Uu(n,e),n!==2&&(e=An,An=t,e!==null&&Wp(e)),n}function Wp(n){An===null?An=n:An.push.apply(An,n)}function JE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ei(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(n,e){for(e&=~Tm,e&=~qu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Mi(e),i=1<<t;n[t]=-1,e&=~i}}function Nv(n){if((tt&6)!==0)throw Error(Q(327));ko();var e=vu(n,0);if((e&1)===0)return In(n,Nt()),null;var t=Uu(n,e);if(n.tag!==0&&t===2){var i=mp(n);i!==0&&(e=i,t=Hp(n,i))}if(t===1)throw t=wl,Ns(n,0),Ur(n,e),In(n,Nt()),t;if(t===6)throw Error(Q(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ps(n,An,sr),In(n,Nt()),null}function Am(n,e){var t=tt;tt|=1;try{return n(e)}finally{tt=t,tt===0&&(Yo=Nt()+500,Hu&&Kr())}}function zs(n){Br!==null&&Br.tag===0&&(tt&6)===0&&ko();var e=tt;tt|=1;var t=si.transition,i=ot;try{if(si.transition=null,ot=1,n)return n()}finally{ot=i,si.transition=t,tt=e,(tt&6)===0&&Kr()}}function Cm(){kn=Do.current,_t(Do)}function Ns(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,bE(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(lm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wu();break;case 3:Wo(),_t(Rn),_t(an),_m();break;case 5:gm(i);break;case 4:Wo();break;case 13:_t(St);break;case 19:_t(St);break;case 10:fm(i.type._context);break;case 22:case 23:Cm()}t=t.return}if(Xt=n,Ut=n=Yr(n.current,null),Jt=kn=e,kt=0,wl=null,Tm=qu=ks=0,An=sl=null,Ls!==null){for(e=0;e<Ls.length;e++)if(t=Ls[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Ls=null}return n}function Ty(n,e){do{var t=Ut;try{if(hm(),lu.current=Lu,Iu){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Iu=!1}if(Bs=0,Wt=Bt=Mt=null,il=!1,yl=0,Em.current=null,t===null||t.return===null){kt=1,wl=e,Ut=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if((u.mode&1)===0&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Sv(o);if(p!==null){p.flags&=-257,Mv(p,o,a,s,e),p.mode&1&&yv(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if((e&1)===0){yv(s,c,e),Rm();break e}l=Error(Q(426))}}else if(xt&&a.mode&1){var g=Sv(o);if(g!==null){(g.flags&65536)===0&&(g.flags|=256),Mv(g,o,a,s,e),cm(Xo(l,a));break e}}s=l=Xo(l,a),kt!==4&&(kt=2),sl===null?sl=[s]:sl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=ly(s,l,e);pv(s,f);break e;case 1:a=l;var m=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Wr===null||!Wr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=cy(s,a,e);pv(s,S);break e}}s=s.return}while(s!==null)}Cy(t)}catch(E){e=E,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function by(){var n=Du.current;return Du.current=Lu,n===null?Lu:n}function Rm(){(kt===0||kt===3||kt===2)&&(kt=4),Xt===null||(ks&268435455)===0&&(qu&268435455)===0||Ur(Xt,Jt)}function Uu(n,e){var t=tt;tt|=2;var i=by();(Xt!==n||Jt!==e)&&(sr=null,Ns(n,e));do try{KE();break}catch(r){Ty(n,r)}while(!0);if(hm(),tt=t,Du.current=i,Ut!==null)throw Error(Q(261));return Xt=null,Jt=0,kt}function KE(){for(;Ut!==null;)Ay(Ut)}function jE(){for(;Ut!==null&&!Tw();)Ay(Ut)}function Ay(n){var e=Py(n.alternate,n,kn);n.memoizedProps=n.pendingProps,e===null?Cy(n):Ut=e,Em.current=null}function Cy(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=WE(t,e,kn),t!==null){Ut=t;return}}else{if(t=XE(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{kt=6,Ut=null;return}}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);kt===0&&(kt=5)}function Ps(n,e,t){var i=ot,r=si.transition;try{si.transition=null,ot=1,QE(n,e,t,i)}finally{si.transition=r,ot=i}return null}function QE(n,e,t,i){do ko();while(Br!==null);if((tt&6)!==0)throw Error(Q(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Q(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Fw(n,s),n===Xt&&(Ut=Xt=null,Jt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||iu||(iu=!0,Iy(_u,function(){return ko(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=si.transition,si.transition=null;var o=ot;ot=1;var a=tt;tt|=4,Em.current=null,qE(n,t),My(t,n),SE(Sp),xu=!!yp,Sp=yp=null,n.current=t,$E(t,n,r),bw(),tt=a,ot=o,si.transition=s}else n.current=t;if(iu&&(iu=!1,Br=n,Fu=r),s=n.pendingLanes,s===0&&(Wr=null),Rw(t.stateNode,i),In(n,Nt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nu)throw Nu=!1,n=Vp,Vp=null,n;return(Fu&1)!==0&&n.tag!==0&&ko(),s=n.pendingLanes,(s&1)!==0?n===Gp?ol++:(ol=0,Gp=n):ol=0,Kr(),null}function ko(){if(Br!==null){var n=lx(Fu),e=si.transition,t=ot;try{if(si.transition=null,ot=16>n?16:n,Br===null)var i=!1;else{if(n=Br,Br=null,Fu=0,(tt&6)!==0)throw Error(Q(331));var r=tt;for(tt|=4,ve=n.current;ve!==null;){var s=ve,o=s.child;if((ve.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:rl(8,u,s)}var d=u.child;if(d!==null)d.return=u,ve=d;else for(;ve!==null;){u=ve;var h=u.sibling,p=u.return;if(xy(u),u===c){ve=null;break}if(h!==null){h.return=p,ve=h;break}ve=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}ve=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:rl(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ve=f;break e}ve=s.return}}var m=n.current;for(ve=m;ve!==null;){o=ve;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,ve=x;else e:for(o=m;ve!==null;){if(a=ve,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Yu(9,a)}}catch(E){Pt(a,a.return,E)}if(a===o){ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ve=S;break e}ve=a.return}}if(tt=r,Kr(),ki&&typeof ki.onPostCommitFiberRoot=="function")try{ki.onPostCommitFiberRoot(Bu,n)}catch{}i=!0}return i}finally{ot=t,si.transition=e}}return!1}function Fv(n,e,t){e=Xo(t,e),e=ly(n,e,1),n=Hr(n,e,1),e=vn(),n!==null&&(El(n,1,e),In(n,e))}function Pt(n,e,t){if(n.tag===3)Fv(n,n,t);else for(;e!==null;){if(e.tag===3){Fv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wr===null||!Wr.has(i))){n=Xo(t,n),n=cy(e,n,1),e=Hr(e,n,1),n=vn(),e!==null&&(El(e,1,n),In(e,n));break}}e=e.return}}function eT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=vn(),n.pingedLanes|=n.suspendedLanes&t,Xt===n&&(Jt&t)===t&&(kt===4||kt===3&&(Jt&130023424)===Jt&&500>Nt()-bm?Ns(n,0):Tm|=t),In(n,e)}function Ry(n,e){e===0&&((n.mode&1)===0?e=1:(e=Hc,Hc<<=1,(Hc&130023424)===0&&(Hc=4194304)));var t=vn();n=fr(n,e),n!==null&&(El(n,e,t),In(n,t))}function tT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Ry(n,t)}function nT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),Ry(n,t)}var Py;Py=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Rn.current)Cn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Cn=!1,HE(n,e,t);Cn=(n.flags&131072)!==0}else Cn=!1,xt&&(e.flags&1048576)!==0&&Nx(e,bu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;uu(n,e),n=e.pendingProps;var r=Vo(e,an.current);Bo(e,t),r=xm(null,e,i,n,r,t);var s=ym();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pn(i)?(s=!0,Eu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pm(e),r.updater=Xu,e.stateNode=r,r._reactInternals=e,Pp(e,i,n,t),e=Dp(null,e,i,!0,s,t)):(e.tag=0,xt&&s&&am(e),_n(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(uu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rT(i),n=xi(i,n),r){case 0:e=Lp(null,e,i,n,t);break e;case 1:e=Tv(null,e,i,n,t);break e;case 11:e=wv(null,e,i,n,t);break e;case 14:e=Ev(null,e,i,xi(i.type,n),t);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Lp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Tv(n,e,i,r,t);case 3:e:{if(dy(e),n===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,zx(n,e),Ru(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xo(Error(Q(423)),e),e=bv(n,e,i,t,r);break e}else if(i!==r){r=Xo(Error(Q(424)),e),e=bv(n,e,i,t,r);break e}else for(zn=Gr(e.stateNode.containerInfo.firstChild),Vn=e,xt=!0,Si=null,t=Bx(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Go(),i===r){e=dr(n,e,t);break e}_n(n,e,i,t)}e=e.child}return e;case 5:return Vx(e),n===null&&Ap(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Mp(i,r)?o=null:s!==null&&Mp(i,s)&&(e.flags|=32),fy(n,e),_n(n,e,o,t),e.child;case 6:return n===null&&Ap(e),null;case 13:return py(n,e,t);case 4:return mm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ho(e,null,i,t):_n(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),wv(n,e,i,r,t);case 7:return _n(n,e,e.pendingProps,t),e.child;case 8:return _n(n,e,e.pendingProps.children,t),e.child;case 12:return _n(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(Au,i._currentValue),i._currentValue=o,s!==null)if(Ei(s.value,o)){if(s.children===r.children&&!Rn.current){e=dr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=cr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Cp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Cp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_n(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bo(e,t),r=oi(r),i=i(r),e.flags|=1,_n(n,e,i,t),e.child;case 14:return i=e.type,r=xi(i,e.pendingProps),r=xi(i.type,r),Ev(n,e,i,r,t);case 15:return uy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),uu(n,e),e.tag=1,Pn(i)?(n=!0,Eu(e)):n=!1,Bo(e,t),ay(e,i,r),Pp(e,i,r,t),Dp(null,e,i,!0,n,t);case 19:return my(n,e,t);case 22:return hy(n,e,t)}throw Error(Q(156,e.tag))};function Iy(n,e){return rx(n,e)}function iT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,e,t,i){return new iT(n,e,t,i)}function Pm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function rT(n){if(typeof n=="function")return Pm(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Zp)return 11;if(n===Jp)return 14}return 2}function Yr(n,e){var t=n.alternate;return t===null?(t=ri(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function du(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Pm(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case wo:return Fs(t.children,r,s,e);case $p:o=8,r|=8;break;case ep:return n=ri(12,t,e,r|2),n.elementType=ep,n.lanes=s,n;case tp:return n=ri(13,t,e,r),n.elementType=tp,n.lanes=s,n;case np:return n=ri(19,t,e,r),n.elementType=np,n.lanes=s,n;case Vv:return $u(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case kv:o=10;break e;case zv:o=9;break e;case Zp:o=11;break e;case Jp:o=14;break e;case Dr:o=16,i=null;break e}throw Error(Q(130,n==null?n:typeof n,""))}return e=ri(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Fs(n,e,t,i){return n=ri(7,n,i,e),n.lanes=t,n}function $u(n,e,t,i){return n=ri(22,n,i,e),n.elementType=Vv,n.lanes=t,n.stateNode={isHidden:!1},n}function Kd(n,e,t){return n=ri(6,n,null,e),n.lanes=t,n}function jd(n,e,t){return e=ri(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function sT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fd(0),this.expirationTimes=Fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Im(n,e,t,i,r,s,o,a,l){return n=new sT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ri(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pm(s),n}function oT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ly(n){if(!n)return $r;n=n._reactInternals;e:{if(Gs(n)!==n||n.tag!==1)throw Error(Q(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(n.tag===1){var t=n.type;if(Pn(t))return Lx(n,t,e)}return e}function Dy(n,e,t,i,r,s,o,a,l){return n=Im(t,i,!0,n,r,s,o,a,l),n.context=Ly(null),t=n.current,i=vn(),r=Xr(t),s=cr(i,r),s.callback=e??null,Hr(t,s,r),n.current.lanes=r,El(n,r,i),In(n,i),n}function Zu(n,e,t,i){var r=e.current,s=vn(),o=Xr(r);return t=Ly(t),e.context===null?e.context=t:e.pendingContext=t,e=cr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Hr(r,e,o),n!==null&&(wi(n,r,o,s),au(n,r,o)),o}function Ou(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Uv(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Lm(n,e){Uv(n,e),(n=n.alternate)&&Uv(n,e)}function aT(){return null}var Ny=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dm(n){this._internalRoot=n}Ju.prototype.render=Dm.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Q(409));Zu(n,e,null,null)};Ju.prototype.unmount=Dm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;zs(function(){Zu(null,n,null,null)}),e[hr]=null}};function Ju(n){this._internalRoot=n}Ju.prototype.unstable_scheduleHydration=function(n){if(n){var e=hx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Fr.length&&e!==0&&e<Fr[t].priority;t++);Fr.splice(t,0,n),t===0&&dx(n)}};function Nm(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ov(){}function lT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ou(o);s.call(c)}}var o=Dy(e,i,n,0,null,!1,!1,"",Ov);return n._reactRootContainer=o,n[hr]=o.current,ml(n.nodeType===8?n.parentNode:n),zs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ou(l);a.call(c)}}var l=Im(n,0,!1,null,null,!1,!1,"",Ov);return n._reactRootContainer=l,n[hr]=l.current,ml(n.nodeType===8?n.parentNode:n),zs(function(){Zu(e,l,t,i)}),l}function ju(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ou(o);a.call(l)}}Zu(e,o,n,r)}else o=lT(t,e,n,r,i);return Ou(o)}cx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ja(e.pendingLanes);t!==0&&(Qp(e,t|1),In(e,Nt()),(tt&6)===0&&(Yo=Nt()+500,Kr()))}break;case 13:zs(function(){var i=fr(n,1);if(i!==null){var r=vn();wi(i,n,1,r)}}),Lm(n,1)}};em=function(n){if(n.tag===13){var e=fr(n,134217728);if(e!==null){var t=vn();wi(e,n,134217728,t)}Lm(n,134217728)}};ux=function(n){if(n.tag===13){var e=Xr(n),t=fr(n,e);if(t!==null){var i=vn();wi(t,n,e,i)}Lm(n,e)}};hx=function(){return ot};fx=function(n,e){var t=ot;try{return ot=n,e()}finally{ot=t}};fp=function(n,e,t){switch(e){case"input":if(sp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Gu(i);if(!r)throw Error(Q(90));Hv(i),sp(i,r)}}}break;case"textarea":Xv(n,t);break;case"select":e=t.value,e!=null&&No(n,!!t.multiple,e,!1)}};jv=Am;Qv=zs;var cT={usingClientEntryPoint:!1,Events:[bl,Ao,Gu,Jv,Kv,Am]},Ya={findFiberByHostInstance:Is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uT={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=nx(n),n===null?null:n.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||aT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(qa=__REACT_DEVTOOLS_GLOBAL_HOOK__,!qa.isDisabled&&qa.supportsFiber))try{Bu=qa.inject(uT),ki=qa}catch{}var qa;Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cT;Wn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nm(e))throw Error(Q(200));return oT(n,e,null,t)};Wn.createRoot=function(n,e){if(!Nm(n))throw Error(Q(299));var t=!1,i="",r=Ny;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Im(n,1,!1,null,null,t,!1,i,r),n[hr]=e.current,ml(n.nodeType===8?n.parentNode:n),new Dm(e)};Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Q(188)):(n=Object.keys(n).join(","),Error(Q(268,n)));return n=nx(e),n=n===null?null:n.stateNode,n};Wn.flushSync=function(n){return zs(n)};Wn.hydrate=function(n,e,t){if(!Ku(e))throw Error(Q(200));return ju(null,n,e,!0,t)};Wn.hydrateRoot=function(n,e,t){if(!Nm(n))throw Error(Q(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Ny;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Dy(e,null,n,1,t??null,r,!1,s,o),n[hr]=e.current,ml(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ju(e)};Wn.render=function(n,e,t){if(!Ku(e))throw Error(Q(200));return ju(null,n,e,!1,t)};Wn.unmountComponentAtNode=function(n){if(!Ku(n))throw Error(Q(40));return n._reactRootContainer?(zs(function(){ju(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1};Wn.unstable_batchedUpdates=Am;Wn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ku(t))throw Error(Q(200));if(n==null||n._reactInternals===void 0)throw Error(Q(38));return ju(n,e,t,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426"});var By=rr((W3,Oy)=>{"use strict";function Uy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uy)}catch(n){console.error(n)}}Uy(),Oy.exports=Fy()});var zy=rr(Fm=>{"use strict";var ky=By();Fm.createRoot=ky.createRoot,Fm.hydrateRoot=ky.hydrateRoot;var X3});var A1=rr(dd=>{"use strict";var P3=Dc(),I3=Symbol.for("react.element"),L3=Symbol.for("react.fragment"),D3=Object.prototype.hasOwnProperty,N3=P3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F3={key:!0,ref:!0,__self:!0,__source:!0};function b1(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)D3.call(e,i)&&!F3.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:I3,type:n,key:s,ref:o,props:r,_owner:N3.current}}dd.Fragment=L3;dd.jsx=b1;dd.jsxs=b1});var Tc=rr((kN,C1)=>{"use strict";C1.exports=A1()});var D1=vo(zy(),1);var pd=vo(Dc(),1);var cS=0,pg=1,uS=2;var ec=1,hS=2,xa=3,Sr=0,En=1,Yi=2,qi=0,$s=1,mg=2,gg=3,_g=4,fS=5;var ss=100,dS=101,pS=102,mS=103,gS=104,_S=200,vS=201,xS=202,yS=203,yh=204,Sh=205,SS=206,MS=207,wS=208,ES=209,TS=210,bS=211,AS=212,CS=213,RS=214,Mh=0,wh=1,Eh=2,Zs=3,Th=4,bh=5,Ah=6,Ch=7,vg=0,PS=1,IS=2,Ii=0,xg=1,yg=2,Sg=3,Mg=4,wg=5,Eg=6,Tg=7;var bg=300,ds=301,js=302,jh=303,Qh=304,tc=306,Rh=1e3,Gi=1001,Ph=1002,qt=1003,LS=1004;var nc=1005;var jt=1006,ef=1007;var ps=1008;var Ln=1009,Ag=1010,Cg=1011,ya=1012,tf=1013,Li=1014,Di=1015,$i=1016,nf=1017,rf=1018,Sa=1020,Rg=35902,Pg=35899,Ig=1021,Lg=1022,hi=1023,Hi=1026,ms=1027,Dg=1028,sf=1029,Qs=1030,of=1031;var af=1033,ic=33776,rc=33777,sc=33778,oc=33779,lf=35840,cf=35841,uf=35842,hf=35843,ff=36196,df=37492,pf=37496,mf=37488,gf=37489,_f=37490,vf=37491,xf=37808,yf=37809,Sf=37810,Mf=37811,wf=37812,Ef=37813,Tf=37814,bf=37815,Af=37816,Cf=37817,Rf=37818,Pf=37819,If=37820,Lf=37821,Df=36492,Nf=36494,Ff=36495,Uf=36283,Of=36284,Bf=36285,kf=36286;var Nl=2300,Ih=2301,xh=2302,rg=2303,sg=2400,og=2401,ag=2402;var DS=3200;var Ng=0,NS=1,wr="",un="srgb",Js="srgb-linear",Fl="linear",rt="srgb";var qs=7680;var lg=519,FS=512,US=513,OS=514,zf=515,BS=516,kS=517,Vf=518,zS=519,cg=35044;var Fg="300 es",Ci=2e3,ca=2001;function hT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ul(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function VS(){let n=Ul("canvas");return n.style.display="block",n}var Vy={},ua=null;function Ug(...n){let e="THREE."+n.shift();ua?ua("log",e,...n):console.log(e,...n)}function GS(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Fe(...n){n=GS(n);let e="THREE."+n.shift();if(ua)ua("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ne(...n){n=GS(n);let e="THREE."+n.shift();if(ua)ua("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ol(...n){let e=n.join(" ");e in Vy||(Vy[e]=!0,Fe(...n))}function HS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var WS={[Mh]:wh,[Eh]:Ah,[Th]:Ch,[Zs]:bh,[wh]:Mh,[Ah]:Eh,[Ch]:Th,[bh]:Zs},Mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gy=1234567,Ll=Math.PI/180,ha=180/Math.PI;function Ma(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Og(n,e){return(n%e+e)%e}function dT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function pT(n,e,t){return n!==e?(t-n)/(e-n):0}function Dl(n,e,t){return(1-t)*n+t*e}function mT(n,e,t,i){return Dl(n,e,1-Math.exp(-t*i))}function gT(n,e=1){return e-Math.abs(Og(n,e*2)-e)}function _T(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function vT(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xT(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yT(n,e){return n+Math.random()*(e-n)}function ST(n){return n*(.5-Math.random())}function MT(n){n!==void 0&&(Gy=n);let e=Gy+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wT(n){return n*Ll}function ET(n){return n*ha}function TT(n){return(n&n-1)===0&&n!==0}function bT(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function AT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function CT(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function aa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Zi={DEG2RAD:Ll,RAD2DEG:ha,generateUUID:Ma,clamp:Ze,euclideanModulo:Og,mapLinear:dT,inverseLerp:pT,lerp:Dl,damp:mT,pingpong:gT,smoothstep:_T,smootherstep:vT,randInt:xT,randFloat:yT,randFloatSpread:ST,seededRandom:MT,degToRad:wT,radToDeg:ET,isPowerOfTwo:TT,ceilPowerOfTwo:bT,floorPowerOfTwo:AT,setQuaternionFromProperEuler:CT,normalize:yn,denormalize:aa},Xe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],p=s[o+1],v=s[o+2],_=s[o+3];if(d!==_||l!==h||c!==p||u!==v){let g=l*h+c*p+u*v+d*_;g<0&&(h=-h,p=-p,v=-v,_=-_,g=-g);let f=1-a;if(g<.9995){let m=Math.acos(g),x=Math.sin(m);f=Math.sin(f*m)/x,a=Math.sin(a*m)/x,l=l*f+h*a,c=c*f+p*a,u=u*f+v*a,d=d*f+_*a}else{l=l*f+h*a,c=c*f+p*a,u=u*f+v*a,d=d*f+_*a;let m=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=m,c*=m,u*=m,d*=m}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-a*p,e[t+2]=c*v+u*p+a*h-l*d,e[t+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Um.copy(this).projectOnVector(e),this.sub(Um)}reflect(e){return this.sub(Um.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Um=new V,Hy=new Wi,Ge=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],_=r[0],g=r[3],f=r[6],m=r[1],x=r[4],S=r[7],E=r[2],b=r[5],A=r[8];return s[0]=o*_+a*m+l*E,s[3]=o*g+a*x+l*b,s[6]=o*f+a*S+l*A,s[1]=c*_+u*m+d*E,s[4]=c*g+u*x+d*b,s[7]=c*f+u*S+d*A,s[2]=h*_+p*m+v*E,s[5]=h*g+p*x+v*b,s[8]=h*f+p*S+v*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,v=t*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Om.makeScale(e,t)),this}rotate(e){return this.premultiply(Om.makeRotation(-e)),this}translate(e,t){return this.premultiply(Om.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Om=new Ge,Wy=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xy=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RT(){let n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=la(r.r),r.g=la(r.g),r.b=la(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wr?Fl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:e,whitePoint:i,transfer:Fl,toXYZ:Wy,fromXYZ:Xy,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Wy,fromXYZ:Xy,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}var je=RT();function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function la(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Zo,Lh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zo===void 0&&(Zo=Ul("canvas")),Zo.width=e.width,Zo.height=e.height;let r=Zo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Zo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ul("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yr(t[i]/255)*255):t[i]=yr(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},PT=0,fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=Ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bm(r[o].image)):s.push(Bm(r[o]))}else s=Bm(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Bm(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var IT=0,km=new V,Sn=class n extends Mr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gi,r=Gi,s=jt,o=ps,a=hi,l=Ln,c=n.DEFAULT_ANISOTROPY,u=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Ma(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(km).x}get height(){return this.source.getSize(km).y}get depth(){return this.source.getSize(km).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=bg;Sn.DEFAULT_ANISOTROPY=1;var Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],_=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,S=(p+1)/2,E=(f+1)/2,b=(u+h)/4,A=(d+_)/4,y=(v+g)/4;return x>S&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=A/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=y/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=y/s),this.set(i,r,s,t),this}let m=Math.sqrt((g-v)*(g-v)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-_)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dh=class extends Mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new Sn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new fa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Dh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Bl=class extends Sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nh=class extends Sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Et=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,h,p,v,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,p,v,_,g)}set(e,t,i,r,s,o,a,l,c,u,d,h,p,v,_,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Jo.setFromMatrixColumn(e,0).length(),s=1/Jo.setFromMatrixColumn(e,1).length(),o=1/Jo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,p=o*d,v=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*d,v=c*u,_=c*d;t[0]=h+_*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*d,v=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*d,v=a*u,_=a*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=v*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-_*d}else if(e.order==="XZY"){let h=o*l,p=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LT,e,DT)}lookAt(e,t,i){let r=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),jr.crossVectors(i,Xn),jr.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),jr.crossVectors(i,Xn)),jr.normalize(),Qu.crossVectors(Xn,jr),r[0]=jr.x,r[4]=Qu.x,r[8]=Xn.x,r[1]=jr.y,r[5]=Qu.y,r[9]=Xn.y,r[2]=jr.z,r[6]=Qu.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],_=i[6],g=i[10],f=i[14],m=i[3],x=i[7],S=i[11],E=i[15],b=r[0],A=r[4],y=r[8],w=r[12],I=r[1],R=r[5],F=r[9],U=r[13],z=r[2],k=r[6],B=r[10],O=r[14],J=r[3],K=r[7],ue=r[11],pe=r[15];return s[0]=o*b+a*I+l*z+c*J,s[4]=o*A+a*R+l*k+c*K,s[8]=o*y+a*F+l*B+c*ue,s[12]=o*w+a*U+l*O+c*pe,s[1]=u*b+d*I+h*z+p*J,s[5]=u*A+d*R+h*k+p*K,s[9]=u*y+d*F+h*B+p*ue,s[13]=u*w+d*U+h*O+p*pe,s[2]=v*b+_*I+g*z+f*J,s[6]=v*A+_*R+g*k+f*K,s[10]=v*y+_*F+g*B+f*ue,s[14]=v*w+_*U+g*O+f*pe,s[3]=m*b+x*I+S*z+E*J,s[7]=m*A+x*R+S*k+E*K,s[11]=m*y+x*F+S*B+E*ue,s[15]=m*w+x*U+S*O+E*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],_=e[7],g=e[11],f=e[15],m=l*p-c*h,x=a*p-c*d,S=a*h-l*d,E=o*p-c*u,b=o*h-l*u,A=o*d-a*u;return t*(_*m-g*x+f*S)-i*(v*m-g*E+f*b)+r*(v*x-_*E+f*A)-s*(v*S-_*b+g*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],_=e[13],g=e[14],f=e[15],m=t*a-i*o,x=t*l-r*o,S=t*c-s*o,E=i*l-r*a,b=i*c-s*a,A=r*c-s*l,y=u*_-d*v,w=u*g-h*v,I=u*f-p*v,R=d*g-h*_,F=d*f-p*_,U=h*f-p*g,z=m*U-x*F+S*R+E*I-b*w+A*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/z;return e[0]=(a*U-l*F+c*R)*k,e[1]=(r*F-i*U-s*R)*k,e[2]=(_*A-g*b+f*E)*k,e[3]=(h*b-d*A-p*E)*k,e[4]=(l*I-o*U-c*w)*k,e[5]=(t*U-r*I+s*w)*k,e[6]=(g*S-v*A-f*x)*k,e[7]=(u*A-h*S+p*x)*k,e[8]=(o*F-a*I+c*y)*k,e[9]=(i*I-t*F-s*y)*k,e[10]=(v*b-_*S+f*m)*k,e[11]=(d*S-u*b-p*m)*k,e[12]=(a*w-o*R-l*y)*k,e[13]=(t*R-i*w+r*y)*k,e[14]=(_*x-v*E-g*m)*k,e[15]=(u*E-d*x+h*m)*k,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,v=s*d,_=o*u,g=o*d,f=a*d,m=l*c,x=l*u,S=l*d,E=i.x,b=i.y,A=i.z;return r[0]=(1-(_+f))*E,r[1]=(p+S)*E,r[2]=(v-x)*E,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(h+f))*b,r[6]=(g+m)*b,r[7]=0,r[8]=(v+x)*A,r[9]=(g-m)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Jo.set(r[0],r[1],r[2]).length(),a=Jo.set(r[4],r[5],r[6]).length(),l=Jo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ti.copy(this);let c=1/o,u=1/a,d=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,t.setFromRotationMatrix(Ti),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=Ci,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r),v,_;if(l)v=s/(o-s),_=o*s/(o-s);else if(a===Ci)v=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ca)v=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ci,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r),v,_;if(l)v=1/(o-s),_=o/(o-s);else if(a===Ci)v=-2/(o-s),_=-(o+s)/(o-s);else if(a===ca)v=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Jo=new V,Ti=new Et,LT=new V(0,0,0),DT=new V(1,1,1),jr=new V,Qu=new V,Xn=new V,Yy=new Et,qy=new Wi,Pi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yy,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qy.setFromEuler(this),this.setFromQuaternion(qy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},NT=0,$y=new V,Ko=new Wi,mr=new Et,eh=new V,Cl=new V,FT=new V,UT=new Wi,Zy=new V(1,0,0),Jy=new V(0,1,0),Ky=new V(0,0,1),jy={type:"added"},OT={type:"removed"},jo={type:"childadded",child:null},zm={type:"childremoved",child:null},Mn=class n extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=Ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new V,t=new Pi,i=new Wi,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ge}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(e,t){return Ko.setFromAxisAngle(e,t),this.quaternion.premultiply(Ko),this}rotateX(e){return this.rotateOnAxis(Zy,e)}rotateY(e){return this.rotateOnAxis(Jy,e)}rotateZ(e){return this.rotateOnAxis(Ky,e)}translateOnAxis(e,t){return $y.copy(e).applyQuaternion(this.quaternion),this.position.add($y.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zy,e)}translateY(e){return this.translateOnAxis(Jy,e)}translateZ(e){return this.translateOnAxis(Ky,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eh.copy(e):eh.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Cl,eh,this.up):mr.lookAt(eh,Cl,this.up),this.quaternion.setFromRotationMatrix(mr),r&&(mr.extractRotation(r.matrixWorld),Ko.setFromRotationMatrix(mr),this.quaternion.premultiply(Ko.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jy),jo.child=e,this.dispatchEvent(jo),jo.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(OT),zm.child=e,this.dispatchEvent(zm),zm.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jy),jo.child=e,this.dispatchEvent(jo),jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,e,FT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,UT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Mn.DEFAULT_UP=new V(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},BT={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),f=this._getHandJoint(c,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ri;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},XS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},th={h:0,s:0,l:0};function Vm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Og(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Vm(o,s,e+1/3),this.g=Vm(o,s,e),this.b=Vm(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=un){function i(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let i=XS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return je.workingToColorSpace(cn.copy(this),e),Math.round(Ze(cn.r*255,0,255))*65536+Math.round(Ze(cn.g*255,0,255))*256+Math.round(Ze(cn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(cn.copy(this),t);let i=cn.r,r=cn.g,s=cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=un){je.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,r=cn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(th);let i=Dl(Qr.h,th.h,t),r=Dl(Qr.s,th.s,t),s=Dl(Qr.l,th.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Qe;Qe.NAMES=XS;var kl=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bi=new V,gr=new V,Gm=new V,_r=new V,Qo=new V,ea=new V,Qy=new V,Hm=new V,Wm=new V,Xm=new V,Ym=new Tt,qm=new Tt,$m=new Tt,rs=class n{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bi.subVectors(e,t),r.cross(bi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bi.subVectors(r,t),gr.subVectors(i,t),Gm.subVectors(e,t);let o=bi.dot(bi),a=bi.dot(gr),l=bi.dot(Gm),c=gr.dot(gr),u=gr.dot(Gm),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,_r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_r.x),l.addScaledVector(o,_r.y),l.addScaledVector(a,_r.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ym.setScalar(0),qm.setScalar(0),$m.setScalar(0),Ym.fromBufferAttribute(e,t),qm.fromBufferAttribute(e,i),$m.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ym,s.x),o.addScaledVector(qm,s.y),o.addScaledVector($m,s.z),o}static isFrontFacing(e,t,i,r){return bi.subVectors(i,t),gr.subVectors(e,t),bi.cross(gr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),bi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Qo.subVectors(r,i),ea.subVectors(s,i),Hm.subVectors(e,i);let l=Qo.dot(Hm),c=ea.dot(Hm);if(l<=0&&c<=0)return t.copy(i);Wm.subVectors(e,r);let u=Qo.dot(Wm),d=ea.dot(Wm);if(u>=0&&d<=u)return t.copy(r);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Qo,o);Xm.subVectors(e,s);let p=Qo.dot(Xm),v=ea.dot(Xm);if(v>=0&&p<=v)return t.copy(s);let _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(ea,a);let g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return Qy.subVectors(s,r),a=(d-u)/(d-u+(p-v)),t.copy(r).addScaledVector(Qy,a);let f=1/(g+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Qo,o).addScaledVector(ea,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},os=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(s,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nh.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nh.copy(i.boundingBox)),nh.applyMatrix4(e.matrixWorld),this.union(nh)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rl),ih.subVectors(this.max,Rl),ta.subVectors(e.a,Rl),na.subVectors(e.b,Rl),ia.subVectors(e.c,Rl),es.subVectors(na,ta),ts.subVectors(ia,na),Hs.subVectors(ta,ia);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Hs.z,Hs.y,es.z,0,-es.x,ts.z,0,-ts.x,Hs.z,0,-Hs.x,-es.y,es.x,0,-ts.y,ts.x,0,-Hs.y,Hs.x,0];return!Zm(t,ta,na,ia,ih)||(t=[1,0,0,0,1,0,0,0,1],!Zm(t,ta,na,ia,ih))?!1:(rh.crossVectors(es,ts),t=[rh.x,rh.y,rh.z],Zm(t,ta,na,ia,ih))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vr=[new V,new V,new V,new V,new V,new V,new V,new V],Ai=new V,nh=new os,ta=new V,na=new V,ia=new V,es=new V,ts=new V,Hs=new V,Rl=new V,ih=new V,rh=new V,Ws=new V;function Zm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ws.fromArray(n,s);let a=r.x*Math.abs(Ws.x)+r.y*Math.abs(Ws.y)+r.z*Math.abs(Ws.z),l=e.dot(Ws),c=t.dot(Ws),u=i.dot(Ws);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ot=new V,sh=new Xe,kT=0,qn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cg,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sh.fromBufferAttribute(this,t),sh.applyMatrix3(e),this.setXY(t,sh.x,sh.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=aa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cg&&(e.usage=this.usage),e}};var zl=class extends qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Vl=class extends qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ui=class extends qn{constructor(e,t,i){super(new Float32Array(e),t,i)}},zT=new os,Pl=new V,Jm=new V,ma=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):zT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pl.subVectors(e,this.center);let t=Pl.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Pl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pl.copy(e.center).add(Jm)),this.expandByPoint(Pl.copy(e.center).sub(Jm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},VT=0,li=new Et,Km=new Mn,ra=new V,Yn=new os,Il=new os,Yt=new V,Xi=class n extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=Ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hT(e)?Vl:zl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return Km.lookAt(e),Km.updateMatrix(),this.applyMatrix4(Km.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ra).negate(),this.translate(ra.x,ra.y,ra.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ui(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Il.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Yn.min,Il.min),Yn.expandByPoint(Yt),Yt.addVectors(Yn.max,Il.max),Yn.expandByPoint(Yt)):(Yn.expandByPoint(Il.min),Yn.expandByPoint(Il.max))}Yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(ra.fromBufferAttribute(e,c),Yt.add(ra)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new V,l[y]=new V;let c=new V,u=new V,d=new V,h=new Xe,p=new Xe,v=new Xe,_=new V,g=new V;function f(y,w,I){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,I),h.fromBufferAttribute(s,y),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,I),u.sub(c),d.sub(c),p.sub(h),v.sub(h);let R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(R),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(R),a[y].add(_),a[w].add(_),a[I].add(_),l[y].add(g),l[w].add(g),l[I].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,w=m.length;y<w;++y){let I=m[y],R=I.start,F=I.count;for(let U=R,z=R+F;U<z;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let x=new V,S=new V,E=new V,b=new V;function A(y){E.fromBufferAttribute(r,y),b.copy(E);let w=a[y];x.copy(w),x.sub(E.multiplyScalar(E.dot(w))).normalize(),S.crossVectors(b,w);let R=S.dot(l[y])<0?-1:1;o.setXYZW(y,x.x,x.y,x.z,R)}for(let y=0,w=m.length;y<w;++y){let I=m[y],R=I.start,F=I.count;for(let U=R,z=R+F;U<z;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){let v=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),p=0,v=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new qn(h,u,d)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var GT=0,as=class extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Ma(),this.name="",this.type="Material",this.blending=$s,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Sh,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yh&&(i.blendSrc=this.blendSrc),this.blendDst!==Sh&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var xr=new V,jm=new V,oh=new V,ns=new V,Qm=new V,ah=new V,eg=new V,Gl=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jm.copy(e).add(t).multiplyScalar(.5),oh.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(jm);let s=e.distanceTo(t)*.5,o=-this.direction.dot(oh),a=ns.dot(this.direction),l=-ns.dot(oh),c=ns.lengthSq(),u=Math.abs(1-o*o),d,h,p,v;if(u>0)if(d=o*l-a,h=o*a-l,v=s*u,d>=0)if(h>=-v)if(h<=v){let _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(jm).addScaledVector(oh,h),p}intersectSphere(e,t){xr.subVectors(e.center,this.origin);let i=xr.dot(this.direction),r=xr.dot(xr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,i,r,s){Qm.subVectors(t,e),ah.subVectors(i,e),eg.crossVectors(Qm,ah);let o=this.direction.dot(eg),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);let l=a*this.direction.dot(ah.crossVectors(ns,ah));if(l<0)return null;let c=a*this.direction.dot(Qm.cross(ns));if(c<0||l+c>o)return null;let u=-a*ns.dot(eg);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hl=class extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},eS=new Et,Xs=new Gl,lh=new ma,tS=new V,ch=new V,uh=new V,hh=new V,tg=new V,fh=new V,nS=new V,dh=new V,wn=class extends Mn{constructor(e=new Xi,t=new Hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){fh.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(tg.fromBufferAttribute(d,e),o?fh.addScaledVector(tg,u):fh.addScaledVector(tg.sub(t),u))}t.add(fh)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lh.copy(i.boundingSphere),lh.applyMatrix4(s),Xs.copy(e.ray).recast(e.near),!(lh.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(lh,tS)===null||Xs.origin.distanceToSquared(tS)>(e.far-e.near)**2))&&(eS.copy(s).invert(),Xs.copy(e.ray).applyMatrix4(eS),!(i.boundingBox!==null&&Xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){let g=h[v],f=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,E=x;S<E;S+=3){let b=a.getX(S),A=a.getX(S+1),y=a.getX(S+2);r=ph(this,f,e,i,c,u,d,b,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=v,f=_;g<f;g+=3){let m=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);r=ph(this,o,e,i,c,u,d,m,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=h.length;v<_;v++){let g=h[v],f=o[g.materialIndex],m=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,E=x;S<E;S+=3){let b=S,A=S+1,y=S+2;r=ph(this,f,e,i,c,u,d,b,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=v,f=_;g<f;g+=3){let m=g,x=g+1,S=g+2;r=ph(this,o,e,i,c,u,d,m,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function HT(n,e,t,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Sr,a),l===null)return null;dh.copy(a),dh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(dh);return c<t.near||c>t.far?null:{distance:c,point:dh.clone(),object:n}}function ph(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ch),n.getVertexPosition(l,uh),n.getVertexPosition(c,hh);let u=HT(n,e,t,i,ch,uh,hh,nS);if(u){let d=new V;rs.getBarycoord(nS,ch,uh,hh,d),r&&(u.uv=rs.getInterpolatedAttribute(r,a,l,c,d,new Xe)),s&&(u.uv1=rs.getInterpolatedAttribute(s,a,l,c,d,new Xe)),o&&(u.normal=rs.getInterpolatedAttribute(o,a,l,c,d,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new V,materialIndex:0};rs.getNormal(ch,uh,hh,h.normal),u.face=h,u.barycoord=d}return u}var Fh=class extends Sn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=qt,u=qt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ng=new V,WT=new V,XT=new Ge,ci=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ng.subVectors(i,t).cross(WT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ng),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||XT.getNormalMatrix(e),r=this.coplanarPoint(ng).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ys=new ma,YT=new Xe(.5,.5),mh=new V,ga=class{constructor(e=new ci,t=new ci,i=new ci,r=new ci,s=new ci,o=new ci){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],p=s[7],v=s[8],_=s[9],g=s[10],f=s[11],m=s[12],x=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-o,p-u,f-v,E-m).normalize(),r[1].setComponents(c+o,p+u,f+v,E+m).normalize(),r[2].setComponents(c+a,p+d,f+_,E+x).normalize(),r[3].setComponents(c-a,p-d,f-_,E-x).normalize(),i)r[4].setComponents(l,h,g,S).normalize(),r[5].setComponents(c-l,p-h,f-g,E-S).normalize();else if(r[4].setComponents(c-l,p-h,f-g,E-S).normalize(),t===Ci)r[5].setComponents(c+l,p+h,f+g,E+S).normalize();else if(t===ca)r[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=YT.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(mh.x=r.normal.x>0?e.max.x:e.min.x,mh.y=r.normal.y>0?e.max.y:e.min.y,mh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wl=class extends Sn{constructor(e=[],t=ds,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xl=class extends Sn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ls=class extends Sn{constructor(e,t,i=Li,r,s,o,a=qt,l=qt,c,u=Hi,d=1){if(u!==Hi&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Uh=class extends ls{constructor(e,t=Li,i=ds,r,s,o=qt,a=qt,l,c=Hi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yl=class extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},cs=class n extends Xi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(d,2));function v(_,g,f,m,x,S,E,b,A,y,w){let I=S/A,R=E/y,F=S/2,U=E/2,z=b/2,k=A+1,B=y+1,O=0,J=0,K=new V;for(let ue=0;ue<B;ue++){let pe=ue*R-U;for(let ce=0;ce<k;ce++){let Pe=ce*I-F;K[_]=Pe*m,K[g]=pe*x,K[f]=z,c.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[f]=b>0?1:-1,u.push(K.x,K.y,K.z),d.push(ce/A),d.push(1-ue/y),O+=1}}for(let ue=0;ue<y;ue++)for(let pe=0;pe<A;pe++){let ce=h+pe+k*ue,Pe=h+pe+k*(ue+1),ze=h+(pe+1)+k*(ue+1),qe=h+(pe+1)+k*ue;l.push(ce,Pe,qe),l.push(Pe,ze,qe),J+=6}a.addGroup(p,J,w),p+=J,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ql=class n extends Xi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,p=[],v=[],_=[],g=[];for(let f=0;f<u;f++){let m=f*h-o;for(let x=0;x<c;x++){let S=x*d-s;v.push(S,-m,0),_.push(0,0,1),g.push(x/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<a;m++){let x=m+c*f,S=m+c*(f+1),E=m+1+c*(f+1),b=m+1+c*f;p.push(x,S,b),p.push(S,E,b)}this.setIndex(p),this.setAttribute("position",new ui(v,3)),this.setAttribute("normal",new ui(_,3)),this.setAttribute("uv",new ui(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function eo(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=eo(n[t]);for(let r in i)e[r]=i[r]}return e}function qT(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bg(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var YS={clone:eo,merge:fn},$T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$T,this.fragmentShader=ZT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=qT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Oh=class extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_a=class extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ng,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Bh=class extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kh=class extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gh(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var us=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zh=class extends us{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sg,endingEnd:sg}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case og:s=e,a=2*t-i;break;case ag:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case og:o=e,l=2*i-t;break;case ag:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,v=(i-t)/(r-t),_=v*v,g=_*v,f=-h*g+2*h*_-h*v,m=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*v+1,x=(-1-p)*g+(1.5+p)*_+.5*v,S=p*g-p*_;for(let E=0;E!==a;++E)s[E]=f*o[u+E]+m*o[c+E]+x*o[l+E]+S*o[d+E];return s}},Vh=class extends us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}},Gh=class extends us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hh=class extends us{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,h=u.outTangents;if(!d||!h){let _=(i-t)/(r-t),g=1-_;for(let f=0;f!==a;++f)s[f]=o[c+f]*g+o[l+f]*_;return s}let p=a*2,v=e-1;for(let _=0;_!==a;++_){let g=o[c+_],f=o[l+_],m=v*p+_*2,x=h[m],S=h[m+1],E=e*p+_*2,b=d[E],A=d[E+1],y=(i-t)/(r-t),w,I,R,F,U;for(let z=0;z<8;z++){w=y*y,I=w*y,R=1-y,F=R*R,U=F*R;let B=U*t+3*F*y*x+3*R*w*b+I*r-i;if(Math.abs(B)<1e-10)break;let O=3*F*(x-t)+6*R*y*(b-x)+3*w*(r-b);if(Math.abs(O)<1e-10)break;y=y-B/O,y=Math.max(0,Math.min(1,y))}s[_]=U*g+3*F*y*S+3*R*w*A+I*f}return s}},Jn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gh(t,this.TimeBufferType),this.values=gh(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gh(e.times,Array),values:gh(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Nl:t=this.InterpolantFactoryMethodDiscrete;break;case Ih:t=this.InterpolantFactoryMethodLinear;break;case xh:t=this.InterpolantFactoryMethodSmooth;break;case rg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nl;case this.InterpolantFactoryMethodLinear:return Ih;case this.InterpolantFactoryMethodSmooth:return xh;case this.InterpolantFactoryMethodBezier:return rg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ne("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&fT(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===xh,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,h=d-i,p=d+i;for(let v=0;v!==i;++v){let _=t[d+v];if(_!==t[h+v]||_!==t[p+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Ih;var hs=class extends Jn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Nl;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wh=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}};Wh.prototype.ValueTypeName="color";var Xh=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}};Xh.prototype.ValueTypeName="number";var Yh=class extends us{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Wi.slerpFlat(s,0,o,c-a,o,c,l);return s}},$l=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Yh(this.times,this.values,this.getValueSize(),e)}};$l.prototype.ValueTypeName="quaternion";$l.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Jn{constructor(e,t,i){super(e,t,i)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Nl;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var qh=class extends Jn{constructor(e,t,i,r){super(e,t,i,r)}};qh.prototype.ValueTypeName="vector";var $h=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qS=new $h,Zh=class{constructor(e){this.manager=e!==void 0?e:qS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zl=class extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ig=new Et,iS=new V,rS=new V,ug=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;iS.setFromMatrixPosition(e.matrixWorld),t.position.copy(iS),rS.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rS),t.updateMatrixWorld(),ig.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ig,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ca||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ig)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_h=new V,vh=new Wi,Vi=new V,Jl=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_h,vh,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_h,vh,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(_h,vh,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_h,vh,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new V,sS=new Xe,oS=new Xe,hn=class extends Jl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,sS,oS),t.subVectors(oS,sS)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ll*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var va=class extends Jl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hg=class extends ug{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new hg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Kl=class extends Zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var sa=-90,oa=1,Jh=class extends Mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new hn(sa,oa,e,t);r.layers=this.layers,this.add(r);let s=new hn(sa,oa,e,t);s.layers=this.layers,this.add(s);let o=new hn(sa,oa,e,t);o.layers=this.layers,this.add(o);let a=new hn(sa,oa,e,t);a.layers=this.layers,this.add(a);let l=new hn(sa,oa,e,t);l.layers=this.layers,this.add(l);let c=new hn(sa,oa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Kh=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var kg="\\[\\]\\.:\\/",JT=new RegExp("["+kg+"]","g"),zg="[^"+kg+"]",KT="[^"+kg.replace("\\.","")+"]",jT=/((?:WC+[\/:])*)/.source.replace("WC",zg),QT=/(WCOD+)?/.source.replace("WCOD",KT),eb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zg),tb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zg),nb=new RegExp("^"+jT+QT+eb+tb+"$"),ib=["material","materials","bones","map"],fg=class{constructor(e,t,i){let r=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JT,"")}static parseTrackName(e){let t=nb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);ib.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=fg;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q3=new Float32Array(1);var aS=new Et,jl=class{constructor(e,t,i=0,r=1/0){this.ray=new Gl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return aS.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(aS),this}intersectObject(e,t=!0,i=[]){return dg(e,this,i,t),i.sort(lS),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)dg(e[r],this,i,t);return i.sort(lS),i}};function lS(n,e){return n.distance-e.distance}function dg(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)dg(s[o],e,t,!0)}}var Ql=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Fe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Vg(n,e,t,i){let r=rb(i);switch(t){case Ig:return n*e;case Dg:return n*e/r.components*r.byteLength;case sf:return n*e/r.components*r.byteLength;case Qs:return n*e*2/r.components*r.byteLength;case of:return n*e*2/r.components*r.byteLength;case Lg:return n*e*3/r.components*r.byteLength;case hi:return n*e*4/r.components*r.byteLength;case af:return n*e*4/r.components*r.byteLength;case ic:case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cf:case hf:return Math.max(n,16)*Math.max(e,8)/4;case lf:case uf:return Math.max(n,8)*Math.max(e,8)/2;case ff:case df:case mf:case gf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pf:case _f:case vf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case If:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Df:case Nf:case Ff:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Uf:case Of:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Bf:case kf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rb(n){switch(n){case Ln:case Ag:return{byteLength:1,components:1};case ya:case Cg:case $i:return{byteLength:2,components:1};case nf:case rf:return{byteLength:2,components:4};case Li:case tf:case Di:return{byteLength:4,components:1};case Rg:case Pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function gM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ob(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<d.length;p++){let v=d[h],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,v=d.length;p<v;p++){let _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$b=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_A=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,UA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,XA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_C=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:ab,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:hb,alphatest_pars_fragment:fb,aomap_fragment:db,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:vb,bsdfs:xb,iridescence_fragment:yb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:wb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:Tb,color_fragment:bb,color_pars_fragment:Ab,color_pars_vertex:Cb,color_vertex:Rb,common:Pb,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Lb,displacementmap_pars_vertex:Db,displacementmap_vertex:Nb,emissivemap_fragment:Fb,emissivemap_pars_fragment:Ub,colorspace_fragment:Ob,colorspace_pars_fragment:Bb,envmap_fragment:kb,envmap_common_pars_fragment:zb,envmap_pars_fragment:Vb,envmap_pars_vertex:Gb,envmap_physical_pars_fragment:Qb,envmap_vertex:Hb,fog_vertex:Wb,fog_pars_vertex:Xb,fog_fragment:Yb,fog_pars_fragment:qb,gradientmap_pars_fragment:$b,lightmap_pars_fragment:Zb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:Kb,lights_pars_begin:jb,lights_toon_fragment:eA,lights_toon_pars_fragment:tA,lights_phong_fragment:nA,lights_phong_pars_fragment:iA,lights_physical_fragment:rA,lights_physical_pars_fragment:sA,lights_fragment_begin:oA,lights_fragment_maps:aA,lights_fragment_end:lA,logdepthbuf_fragment:cA,logdepthbuf_pars_fragment:uA,logdepthbuf_pars_vertex:hA,logdepthbuf_vertex:fA,map_fragment:dA,map_pars_fragment:pA,map_particle_fragment:mA,map_particle_pars_fragment:gA,metalnessmap_fragment:_A,metalnessmap_pars_fragment:vA,morphinstance_vertex:xA,morphcolor_vertex:yA,morphnormal_vertex:SA,morphtarget_pars_vertex:MA,morphtarget_vertex:wA,normal_fragment_begin:EA,normal_fragment_maps:TA,normal_pars_fragment:bA,normal_pars_vertex:AA,normal_vertex:CA,normalmap_pars_fragment:RA,clearcoat_normal_fragment_begin:PA,clearcoat_normal_fragment_maps:IA,clearcoat_pars_fragment:LA,iridescence_pars_fragment:DA,opaque_fragment:NA,packing:FA,premultiplied_alpha_fragment:UA,project_vertex:OA,dithering_fragment:BA,dithering_pars_fragment:kA,roughnessmap_fragment:zA,roughnessmap_pars_fragment:VA,shadowmap_pars_fragment:GA,shadowmap_pars_vertex:HA,shadowmap_vertex:WA,shadowmask_pars_fragment:XA,skinbase_vertex:YA,skinning_pars_vertex:qA,skinning_vertex:$A,skinnormal_vertex:ZA,specularmap_fragment:JA,specularmap_pars_fragment:KA,tonemapping_fragment:jA,tonemapping_pars_fragment:QA,transmission_fragment:eC,transmission_pars_fragment:tC,uv_pars_fragment:nC,uv_pars_vertex:iC,uv_vertex:rC,worldpos_vertex:sC,background_vert:oC,background_frag:aC,backgroundCube_vert:lC,backgroundCube_frag:cC,cube_vert:uC,cube_frag:hC,depth_vert:fC,depth_frag:dC,distance_vert:pC,distance_frag:mC,equirect_vert:gC,equirect_frag:_C,linedashed_vert:vC,linedashed_frag:xC,meshbasic_vert:yC,meshbasic_frag:SC,meshlambert_vert:MC,meshlambert_frag:wC,meshmatcap_vert:EC,meshmatcap_frag:TC,meshnormal_vert:bC,meshnormal_frag:AC,meshphong_vert:CC,meshphong_frag:RC,meshphysical_vert:PC,meshphysical_frag:IC,meshtoon_vert:LC,meshtoon_frag:DC,points_vert:NC,points_frag:FC,shadow_vert:UC,shadow_frag:OC,sprite_vert:BC,sprite_frag:kC},he={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Ki={basic:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:fn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:fn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:fn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:fn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:fn([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:fn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:fn([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:fn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:fn([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:fn([he.common,he.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:fn([he.lights,he.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Ki.physical={uniforms:fn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Gf={r:0,b:0,g:0},to=new Pi,zC=new Et;function VC(n,e,t,i,r,s){let o=new Qe(0),a=r===!0?0:1,l,c,u=null,d=0,h=null;function p(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let S=m.backgroundBlurriness>0;x=e.get(x,S)}return x}function v(m){let x=!1,S=p(m);S===null?g(o,a):S&&S.isColor&&(g(S,1),x=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(m,x){let S=p(x);S&&(S.isCubeTexture||S.mapping===tc)?(c===void 0&&(c=new wn(new cs(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:eo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),to.copy(x.backgroundRotation),to.x*=-1,to.y*=-1,to.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zC.makeRotationFromEuler(to)),c.material.toneMapped=je.getTransfer(S.colorSpace)!==rt,(u!==S||d!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new wn(new ql(2,2),new Zn({name:"BackgroundMaterial",uniforms:eo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Gf,Bg(n)),t.buffers.color.setClear(Gf.r,Gf.g,Gf.b,x,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:v,addToRenderList:_,dispose:f}}function GC(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(R,F,U,z,k){let B=!1,O=d(R,z,U,F);s!==O&&(s=O,c(s.object)),B=p(R,z,U,k),B&&v(R,z,U,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(R,F,U,z),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function d(R,F,U,z){let k=z.wireframe===!0,B=i[F.id];B===void 0&&(B={},i[F.id]=B);let O=R.isInstancedMesh===!0?R.id:0,J=B[O];J===void 0&&(J={},B[O]=J);let K=J[U.id];K===void 0&&(K={},J[U.id]=K);let ue=K[k];return ue===void 0&&(ue=h(l()),K[k]=ue),ue}function h(R){let F=[],U=[],z=[];for(let k=0;k<t;k++)F[k]=0,U[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:z,object:R,attributes:{},index:null}}function p(R,F,U,z){let k=s.attributes,B=F.attributes,O=0,J=U.getAttributes();for(let K in J)if(J[K].location>=0){let pe=k[K],ce=B[K];if(ce===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),pe===void 0||pe.attribute!==ce||ce&&pe.data!==ce.data)return!0;O++}return s.attributesNum!==O||s.index!==z}function v(R,F,U,z){let k={},B=F.attributes,O=0,J=U.getAttributes();for(let K in J)if(J[K].location>=0){let pe=B[K];pe===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));let ce={};ce.attribute=pe,pe&&pe.data&&(ce.data=pe.data),k[K]=ce,O++}s.attributes=k,s.attributesNum=O,s.index=z}function _(){let R=s.newAttributes;for(let F=0,U=R.length;F<U;F++)R[F]=0}function g(R){f(R,0)}function f(R,F){let U=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;U[R]=1,z[R]===0&&(n.enableVertexAttribArray(R),z[R]=1),k[R]!==F&&(n.vertexAttribDivisor(R,F),k[R]=F)}function m(){let R=s.newAttributes,F=s.enabledAttributes;for(let U=0,z=F.length;U<z;U++)F[U]!==R[U]&&(n.disableVertexAttribArray(U),F[U]=0)}function x(R,F,U,z,k,B,O){O===!0?n.vertexAttribIPointer(R,F,U,k,B):n.vertexAttribPointer(R,F,U,z,k,B)}function S(R,F,U,z){_();let k=z.attributes,B=U.getAttributes(),O=F.defaultAttributeValues;for(let J in B){let K=B[J];if(K.location>=0){let ue=k[J];if(ue===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){let pe=ue.normalized,ce=ue.itemSize,Pe=e.get(ue);if(Pe===void 0)continue;let ze=Pe.buffer,qe=Pe.type,$=Pe.bytesPerElement,ne=qe===n.INT||qe===n.UNSIGNED_INT||ue.gpuType===tf;if(ue.isInterleavedBufferAttribute){let ie=ue.data,Ue=ie.stride,Le=ue.offset;if(ie.isInstancedInterleavedBuffer){for(let ae=0;ae<K.locationSize;ae++)f(K.location+ae,ie.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<K.locationSize;ae++)g(K.location+ae);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ae=0;ae<K.locationSize;ae++)x(K.location+ae,ce/K.locationSize,qe,pe,Ue*$,(Le+ce/K.locationSize*ae)*$,ne)}else{if(ue.isInstancedBufferAttribute){for(let ie=0;ie<K.locationSize;ie++)f(K.location+ie,ue.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<K.locationSize;ie++)g(K.location+ie);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ie=0;ie<K.locationSize;ie++)x(K.location+ie,ce/K.locationSize,qe,pe,ce*$,ce/K.locationSize*ie*$,ne)}}else if(O!==void 0){let pe=O[J];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(K.location,pe);break;case 3:n.vertexAttrib3fv(K.location,pe);break;case 4:n.vertexAttrib4fv(K.location,pe);break;default:n.vertexAttrib1fv(K.location,pe)}}}}m()}function E(){w();for(let R in i){let F=i[R];for(let U in F){let z=F[U];for(let k in z){let B=z[k];for(let O in B)u(B[O].object),delete B[O];delete z[k]}}delete i[R]}}function b(R){if(i[R.id]===void 0)return;let F=i[R.id];for(let U in F){let z=F[U];for(let k in z){let B=z[k];for(let O in B)u(B[O].object),delete B[O];delete z[k]}}delete i[R.id]}function A(R){for(let F in i){let U=i[F];for(let z in U){let k=U[z];if(k[R.id]===void 0)continue;let B=k[R.id];for(let O in B)u(B[O].object),delete B[O];delete k[R.id]}}}function y(R){for(let F in i){let U=i[F],z=R.isInstancedMesh===!0?R.id:0,k=U[z];if(k!==void 0){for(let B in k){let O=k[B];for(let J in O)u(O[J].object),delete O[J];delete k[B]}delete U[z],Object.keys(U).length===0&&delete i[F]}}}function w(){I(),o=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:m}}function HC(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*h[_];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WC(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==hi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!y)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Fe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,maxSamples:E,samples:b}}function XC(n){let e=this,t=null,i=0,r=!1,s=!1,o=new ci,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){let v=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{let m=s?0:i,x=m*4,S=f.clippingState||null;l.value=S,S=u(v,h,x,p);for(let E=0;E!==x;++E)S[E]=t[E];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,v!==!0||g===null){let f=p+_*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(d[x]).applyMatrix4(m,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var gs=4,$S=[.125,.215,.35,.446,.526,.582],io=20,YC=256,ac=new va,ZS=new Qe,Gg=null,Hg=0,Wg=0,Xg=!1,qC=new V,Wf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=qC}=s;Gg=this._renderer.getRenderTarget(),Hg=this._renderer.getActiveCubeFace(),Wg=this._renderer.getActiveMipmapLevel(),Xg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=KS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gg,Hg,Wg),this._renderer.xr.enabled=Xg,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gg=this._renderer.getRenderTarget(),Hg=this._renderer.getActiveCubeFace(),Wg=this._renderer.getActiveMipmapLevel(),Xg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:$i,format:hi,colorSpace:Js,depthBuffer:!1},r=JS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=JS(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$C(s)),this._blurMaterial=JC(s,e,t),this._ggxMaterial=ZC(s,e,t)}return r}_compileMaterial(e){let t=new wn(new Xi,e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,i,r,s){let l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(ZS),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new cs,new Hl({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,f=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,f=!0):(g.color.copy(ZS),f=!0);for(let x=0;x<6;x++){let S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));let E=this._cubeSize;wa(r,S*E,x>2?E:0,E,E),d.setRenderTarget(r),f&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ds||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=KS());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ac)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:v}=this,_=this._sizeLods[i],g=3*_*(i>v-gs?i-v+gs:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,wa(s,g,f,3*_,2*_),r.setRenderTarget(s),r.render(a,ac),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,wa(e,g,f,3*_,2*_),r.setRenderTarget(e),r.render(a,ac)}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*io-1),_=s/v,g=isFinite(s)?1+Math.floor(u*_):io;g>io&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${io}`);let f=[],m=0;for(let A=0;A<io;++A){let y=A/_,w=Math.exp(-y*y/2);f.push(w),A===0?m+=w:A<g&&(m+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;let S=this._sizeLods[r],E=3*S*(r>x-gs?r-x+gs:0),b=4*(this._cubeSize-S);wa(t,E,b,3*S,2*S),l.setRenderTarget(t),l.render(d,ac)}};function $C(n){let e=[],t=[],i=[],r=n,s=n-gs+1+$S.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>n-gs?l=$S[o-n+gs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,g=2,f=1,m=new Float32Array(_*v*p),x=new Float32Array(g*v*p),S=new Float32Array(f*v*p);for(let b=0;b<p;b++){let A=b%3*2/3-1,y=b>2?0:-1,w=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];m.set(w,_*v*b),x.set(h,g*v*b);let I=[b,b,b,b,b,b];S.set(I,f*v*b)}let E=new Xi;E.setAttribute("position",new qn(m,_)),E.setAttribute("uv",new qn(x,g)),E.setAttribute("faceIndex",new qn(S,f)),i.push(new wn(E,null)),r>gs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function JS(n,e,t){let i=new $n(n,e,t);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ZC(n,e,t){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function JC(n,e,t){let i=new Float32Array(io),r=new V(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:io,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function KS(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function jS(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xf=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cs(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:qi});s.uniforms.tEquirect.value=t;let o=new wn(r,s),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=jt),new Jh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};function KC(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===jh||p===Qh)if(e.has(h)){let v=e.get(h).texture;return a(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let _=new Xf(v.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,v=p===jh||p===Qh,_=p===ds||p===js;if(v||_){let g=t.get(h),f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Wf(n)),g=v?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let m=h.image;return v&&m&&m.height>0||_&&m&&l(m)?(i===null&&(i=new Wf(n)),g=v?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,p){return p===jh?h.mapping=ds:p===Qh&&(h.mapping=js),h}function l(h){let p=0,v=6;for(let _=0;_<v;_++)h[_]!==void 0&&p++;return p===v}function c(h){let p=h.target;p.removeEventListener("dispose",c);let v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function jC(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Ol("WebGLRenderer: "+i+" extension not supported."),r}}}function QC(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,v=d.attributes.position,_=0;if(v===void 0)return;if(p!==null){let m=p.array;_=p.version;for(let x=0,S=m.length;x<S;x+=3){let E=m[x+0],b=m[x+1],A=m[x+2];h.push(E,b,b,A,A,E)}}else{let m=v.array;_=v.version;for(let x=0,S=m.length/3-1;x<S;x+=3){let E=x+0,b=x+1,A=x+2;h.push(E,b,b,A,A,E)}}let g=new(v.count>=65535?Vl:zl)(h,1);g.version=_;let f=s.get(d);f&&e.remove(f),s.set(d,g)}function u(d){let h=s.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function eR(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,h*o,v),t.update(p,i,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let g=0;for(let f=0;f<v;f++)g+=p[f];t.update(g,i,1)}function d(h,p,v,_){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,v);let f=0;for(let m=0;m<v;m++)f+=p[m]*_[m];t.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function tR(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Ne("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nR(n,e,t){let i=new WeakMap,r=new Tt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let w=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],m=a.morphAttributes.color||[],x=0;p===!0&&(x=1),v===!0&&(x=2),_===!0&&(x=3);let S=a.attributes.position.count*x,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let b=new Float32Array(S*E*4*d),A=new Bl(b,S,E,d);A.type=Di,A.needsUpdate=!0;let y=x*4;for(let I=0;I<d;I++){let R=g[I],F=f[I],U=m[I],z=S*E*4*I;for(let k=0;k<R.count;k++){let B=k*y;p===!0&&(r.fromBufferAttribute(R,k),b[z+B+0]=r.x,b[z+B+1]=r.y,b[z+B+2]=r.z,b[z+B+3]=0),v===!0&&(r.fromBufferAttribute(F,k),b[z+B+4]=r.x,b[z+B+5]=r.y,b[z+B+6]=r.z,b[z+B+7]=0),_===!0&&(r.fromBufferAttribute(U,k),b[z+B+8]=r.x,b[z+B+9]=r.y,b[z+B+10]=r.z,b[z+B+11]=U.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new Xe(S,E)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function iR(n,e,t,i,r){let s=new WeakMap;function o(c){let u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var rR={[xg]:"LINEAR_TONE_MAPPING",[yg]:"REINHARD_TONE_MAPPING",[Sg]:"CINEON_TONE_MAPPING",[Mg]:"ACES_FILMIC_TONE_MAPPING",[Eg]:"AGX_TONE_MAPPING",[Tg]:"NEUTRAL_TONE_MAPPING",[wg]:"CUSTOM_TONE_MAPPING"};function sR(n,e,t,i,r){let s=new $n(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new $n(e,t,{type:$i,depthBuffer:!1,stencilBuffer:!1}),a=new Xi;a.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ui([0,2,0,0,2,0],2));let l=new Oh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new wn(a,l),u=new va(-1,1,1,-1,0,1),d=null,h=null,p=!1,v,_=null,g=[],f=!1;this.setSize=function(m,x){s.setSize(m,x),o.setSize(m,x);for(let S=0;S<g.length;S++){let E=g[S];E.setSize&&E.setSize(m,x)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;let x=s.width,S=s.height;for(let E=0;E<g.length;E++){let b=g[E];b.setSize&&b.setSize(x,S)}},this.begin=function(m,x){if(p||m.toneMapping===Ii&&g.length===0)return!1;if(_=x,x!==null){let S=x.width,E=x.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Ii,!0},this.hasRenderPass=function(){return f},this.end=function(m,x){m.toneMapping=v,p=!0;let S=s,E=o;for(let b=0;b<g.length;b++){let A=g[b];if(A.enabled!==!1&&(A.render(m,E,S,x),A.needsSwap!==!1)){let y=S;S=E,E=y}}if(d!==m.outputColorSpace||h!==m.toneMapping){d=m.outputColorSpace,h=m.toneMapping,l.defines={},je.getTransfer(d)===rt&&(l.defines.SRGB_TRANSFER="");let b=rR[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(_),m.render(c,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var _M=new Sn,$g=new ls(1,1),vM=new Bl,xM=new Nh,yM=new Wl,QS=[],eM=[],tM=new Float32Array(16),nM=new Float32Array(9),iM=new Float32Array(4);function Ta(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=QS[r];if(s===void 0&&(s=new Float32Array(r),QS[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $f(n,e){let t=eM[e];t===void 0&&(t=new Int32Array(e),eM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function lR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function cR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function uR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;iM.set(i),n.uniformMatrix2fv(this.addr,!1,iM),Vt(t,i)}}function hR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;nM.set(i),n.uniformMatrix3fv(this.addr,!1,nM),Vt(t,i)}}function fR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,i))return;tM.set(i),n.uniformMatrix4fv(this.addr,!1,tM),Vt(t,i)}}function dR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function mR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function gR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function _R(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function xR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function yR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function SR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($g.compareFunction=t.isReversedDepthBuffer()?Vf:zf,s=$g):s=_M,t.setTexture2D(e||s,r)}function MR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||xM,r)}function wR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yM,r)}function ER(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vM,r)}function TR(n){switch(n){case 5126:return oR;case 35664:return aR;case 35665:return lR;case 35666:return cR;case 35674:return uR;case 35675:return hR;case 35676:return fR;case 5124:case 35670:return dR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return _R;case 36294:return vR;case 36295:return xR;case 36296:return yR;case 35678:case 36198:case 36298:case 36306:case 35682:return SR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return wR;case 36289:case 36303:case 36311:case 36292:return ER}}function bR(n,e){n.uniform1fv(this.addr,e)}function AR(n,e){let t=Ta(e,this.size,2);n.uniform2fv(this.addr,t)}function CR(n,e){let t=Ta(e,this.size,3);n.uniform3fv(this.addr,t)}function RR(n,e){let t=Ta(e,this.size,4);n.uniform4fv(this.addr,t)}function PR(n,e){let t=Ta(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IR(n,e){let t=Ta(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function LR(n,e){let t=Ta(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function DR(n,e){n.uniform1iv(this.addr,e)}function NR(n,e){n.uniform2iv(this.addr,e)}function FR(n,e){n.uniform3iv(this.addr,e)}function UR(n,e){n.uniform4iv(this.addr,e)}function OR(n,e){n.uniform1uiv(this.addr,e)}function BR(n,e){n.uniform2uiv(this.addr,e)}function kR(n,e){n.uniform3uiv(this.addr,e)}function zR(n,e){n.uniform4uiv(this.addr,e)}function VR(n,e,t){let i=this.cache,r=e.length,s=$f(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=$g:o=_M;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function GR(n,e,t){let i=this.cache,r=e.length,s=$f(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||xM,s[o])}function HR(n,e,t){let i=this.cache,r=e.length,s=$f(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yM,s[o])}function WR(n,e,t){let i=this.cache,r=e.length,s=$f(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vM,s[o])}function XR(n){switch(n){case 5126:return bR;case 35664:return AR;case 35665:return CR;case 35666:return RR;case 35674:return PR;case 35675:return IR;case 35676:return LR;case 5124:case 35670:return DR;case 35667:case 35671:return NR;case 35668:case 35672:return FR;case 35669:case 35673:return UR;case 5125:return OR;case 36294:return BR;case 36295:return kR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return VR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return WR}}var Zg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=TR(t.type)}},Jg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XR(t.type)}},Kg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Yg=/(\w+)(\])?(\[|\.)?/g;function rM(n,e){n.seq.push(e),n.map[e.id]=e}function YR(n,e,t){let i=n.name,r=i.length;for(Yg.lastIndex=0;;){let s=Yg.exec(i),o=Yg.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rM(t,c===void 0?new Zg(a,n,e):new Jg(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Kg(a),rM(t,d)),t=d}}}var Ea=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);YR(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function sM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var qR=37297,$R=0;function ZR(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var oM=new Ge;function JR(n){je._getMatrix(oM,je.workingColorSpace,n);let e=`mat3( ${oM.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Fl:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function aM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ZR(n.getShaderSource(e),a)}else return s}function KR(n,e){let t=JR(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jR={[xg]:"Linear",[yg]:"Reinhard",[Sg]:"Cineon",[Mg]:"ACESFilmic",[Eg]:"AgX",[Tg]:"Neutral",[wg]:"Custom"};function QR(n,e){let t=jR[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hf=new V;function eP(){je.getLuminanceCoefficients(Hf);let n=Hf.x.toFixed(4),e=Hf.y.toFixed(4),t=Hf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cc).join(`
`)}function nP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cc(n){return n!==""}function lM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rP=/^[ \t]*#include +<([\w\d./]+)>/gm;function jg(n){return n.replace(rP,oP)}var sP=new Map;function oP(n,e){let t=He[e];if(t===void 0){let i=sP.get(e);if(i!==void 0)t=He[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jg(t)}var aP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uM(n){return n.replace(aP,lP)}function lP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var cP={[ec]:"SHADOWMAP_TYPE_PCF",[xa]:"SHADOWMAP_TYPE_VSM"};function uP(n){return cP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hP={[ds]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[tc]:"ENVMAP_TYPE_CUBE_UV"};function fP(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":hP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var dP={[js]:"ENVMAP_MODE_REFRACTION"};function pP(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dP[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mP={[vg]:"ENVMAP_BLENDING_MULTIPLY",[PS]:"ENVMAP_BLENDING_MIX",[IS]:"ENVMAP_BLENDING_ADD"};function gP(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":mP[n.combine]||"ENVMAP_BLENDING_NONE"}function _P(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=uP(t),c=fP(t),u=pP(t),d=gP(t),h=_P(t),p=tP(t),v=nP(s),_=r.createProgram(),g,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(cc).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(cc).join(`
`),f.length>0&&(f+=`
`)):(g=[hM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cc).join(`
`),f=[hM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?He.tonemapping_pars_fragment:"",t.toneMapping!==Ii?QR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,KR("linearToOutputTexel",t.outputColorSpace),eP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cc).join(`
`)),o=jg(o),o=lM(o,t),o=cM(o,t),a=jg(a),a=lM(a,t),a=cM(a,t),o=uM(o),a=uM(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=m+g+o,S=m+f+a,E=sM(r,r.VERTEX_SHADER,x),b=sM(r,r.FRAGMENT_SHADER,S);r.attachShader(_,E),r.attachShader(_,b),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(_)||"",U=r.getShaderInfoLog(E)||"",z=r.getShaderInfoLog(b)||"",k=F.trim(),B=U.trim(),O=z.trim(),J=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,b);else{let ue=aM(r,E,"vertex"),pe=aM(r,b,"fragment");Ne("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+ue+`
`+pe)}else k!==""?Fe("WebGLProgram: Program Info Log:",k):(B===""||O==="")&&(K=!1);K&&(R.diagnostics={runnable:J,programLog:k,vertexShader:{log:B,prefix:g},fragmentShader:{log:O,prefix:f}})}r.deleteShader(E),r.deleteShader(b),y=new Ea(r,_),w=iP(r,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(_,qR)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$R++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}var xP=0,Qg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new e0(e),t.set(e,i)),i}},e0=class{constructor(e){this.id=xP++,this.code=e,this.usedTimes=0}};function yP(n,e,t,i,r,s){let o=new da,a=new Qg,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,I,R,F){let U=R.fog,z=F.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,O=e.get(y.envMap||k,B),J=O&&O.mapping===tc?O.image.height:null,K=p[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Fe("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let ue=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pe=ue!==void 0?ue.length:0,ce=0;z.morphAttributes.position!==void 0&&(ce=1),z.morphAttributes.normal!==void 0&&(ce=2),z.morphAttributes.color!==void 0&&(ce=3);let Pe,ze,qe,$;if(K){let st=Ki[K];Pe=st.vertexShader,ze=st.fragmentShader}else Pe=y.vertexShader,ze=y.fragmentShader,a.update(y),qe=a.getVertexShaderID(y),$=a.getFragmentShaderID(y);let ne=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Le=F.isBatchedMesh===!0,ae=!!y.map,De=!!y.matcap,Ie=!!O,et=!!y.aoMap,$e=!!y.lightMap,Oe=!!y.bumpMap,mt=!!y.normalMap,P=!!y.displacementMap,le=!!y.emissiveMap,Ke=!!y.metalnessMap,it=!!y.roughnessMap,ye=y.anisotropy>0,C=y.clearcoat>0,M=y.dispersion>0,D=y.iridescence>0,X=y.sheen>0,Z=y.transmission>0,q=ye&&!!y.anisotropyMap,Se=C&&!!y.clearcoatMap,se=C&&!!y.clearcoatNormalMap,we=C&&!!y.clearcoatRoughnessMap,Ae=D&&!!y.iridescenceMap,j=D&&!!y.iridescenceThicknessMap,te=X&&!!y.sheenColorMap,Me=X&&!!y.sheenRoughnessMap,ge=!!y.specularMap,me=!!y.specularColorMap,Be=!!y.specularIntensityMap,L=Z&&!!y.transmissionMap,oe=Z&&!!y.thicknessMap,re=!!y.gradientMap,xe=!!y.alphaMap,ee=y.alphaTest>0,Y=!!y.alphaHash,Ee=!!y.extensions,ke=Ii;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ke=n.toneMapping);let ft={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Pe,fragmentShader:ze,defines:y.defines,customVertexShaderID:qe,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Le,batchingColor:Le&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Js,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:De,envMap:Ie,envMapMode:Ie&&O.mapping,envMapCubeUVHeight:J,aoMap:et,lightMap:$e,bumpMap:Oe,normalMap:mt,displacementMap:P,emissiveMap:le,normalMapObjectSpace:mt&&y.normalMapType===NS,normalMapTangentSpace:mt&&y.normalMapType===Ng,metalnessMap:Ke,roughnessMap:it,anisotropy:ye,anisotropyMap:q,clearcoat:C,clearcoatMap:Se,clearcoatNormalMap:se,clearcoatRoughnessMap:we,dispersion:M,iridescence:D,iridescenceMap:Ae,iridescenceThicknessMap:j,sheen:X,sheenColorMap:te,sheenRoughnessMap:Me,specularMap:ge,specularColorMap:me,specularIntensityMap:Be,transmission:Z,transmissionMap:L,thicknessMap:oe,gradientMap:re,opaque:y.transparent===!1&&y.blending===$s&&y.alphaToCoverage===!1,alphaMap:xe,alphaTest:ee,alphaHash:Y,combine:y.combine,mapUv:ae&&v(y.map.channel),aoMapUv:et&&v(y.aoMap.channel),lightMapUv:$e&&v(y.lightMap.channel),bumpMapUv:Oe&&v(y.bumpMap.channel),normalMapUv:mt&&v(y.normalMap.channel),displacementMapUv:P&&v(y.displacementMap.channel),emissiveMapUv:le&&v(y.emissiveMap.channel),metalnessMapUv:Ke&&v(y.metalnessMap.channel),roughnessMapUv:it&&v(y.roughnessMap.channel),anisotropyMapUv:q&&v(y.anisotropyMap.channel),clearcoatMapUv:Se&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:te&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(y.sheenRoughnessMap.channel),specularMapUv:ge&&v(y.specularMap.channel),specularColorMapUv:me&&v(y.specularColorMap.channel),specularIntensityMapUv:Be&&v(y.specularIntensityMap.channel),transmissionMapUv:L&&v(y.transmissionMap.channel),thicknessMapUv:oe&&v(y.thicknessMap.channel),alphaMapUv:xe&&v(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(mt||ye),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(ae||xe),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&mt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:le&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yi,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function g(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)w.push(I),w.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(f(w,y),m(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function f(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function m(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){let w=p[y.type],I;if(w){let R=Ki[w];I=YS.clone(R.uniforms)}else I=y.uniforms;return I}function S(y,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new vP(n,w,y,r),c.push(I),u.set(w,I)),I}function E(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:A}}function SP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function MP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function fM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,v,_,g,f){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:p,material:v,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:f},n[e]=m):(m.id=h.id,m.object=h,m.geometry=p,m.material=v,m.materialVariant=o(h),m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=f),e++,m}function l(h,p,v,_,g,f){let m=a(h,p,v,_,g,f);v.transmission>0?i.push(m):v.transparent===!0?r.push(m):t.push(m)}function c(h,p,v,_,g,f){let m=a(h,p,v,_,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):t.unshift(m)}function u(h,p){t.length>1&&t.sort(h||MP),i.length>1&&i.sort(p||fM),r.length>1&&r.sort(p||fM)}function d(){for(let h=e,p=n.length;h<p;h++){let v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function wP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new dM,n.set(i,[o])):r>=s.length?(o=new dM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function EP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Qe};break;case"SpotLight":t={position:new V,direction:new V,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function TP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var bP=0;function AP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CP(n){let e=new EP,t=TP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let r=new V,s=new Et,o=new Et;function a(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,_=0,g=0,f=0,m=0,x=0,S=0,E=0,b=0,A=0;c.sort(AP);for(let w=0,I=c.length;w<I;w++){let R=c[w],F=R.color,U=R.intensity,z=R.distance,k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Qs?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=F.r*U,d+=F.g*U,h+=F.b*U;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],U);A++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let O=R.shadow,J=t.get(R);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=R.shadow.matrix,m++}i.directional[p]=B,p++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(F).multiplyScalar(U),B.distance=z,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[_]=B;let O=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,O.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[_]=O.matrix,R.castShadow){let J=t.get(R);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=k,S++}_++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(F).multiplyScalar(U),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=B,g++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let O=R.shadow,J=t.get(R);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,J.shadowCameraNear=O.camera.near,J.shadowCameraFar=O.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=k,i.pointShadowMatrix[v]=R.shadow.matrix,x++}i.point[v]=B,v++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(U),B.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[f]=B,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let y=i.hash;(y.directionalLength!==p||y.pointLength!==v||y.spotLength!==_||y.rectAreaLength!==g||y.hemiLength!==f||y.numDirectionalShadows!==m||y.numPointShadows!==x||y.numSpotShadows!==S||y.numSpotMaps!==E||y.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,y.directionalLength=p,y.pointLength=v,y.spotLength=_,y.rectAreaLength=g,y.hemiLength=f,y.numDirectionalShadows=m,y.numPointShadows=x,y.numSpotShadows=S,y.numSpotMaps=E,y.numLightProbes=A,i.version=bP++)}function l(c,u){let d=0,h=0,p=0,v=0,_=0,g=u.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){let x=c[f];if(x.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(x.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){let S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function pM(n){let e=new CP(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function RP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new pM(n),e.set(r,[a])):s>=o.length?(a=new pM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var PP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LP=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],DP=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],mM=new Et,lc=new V,qg=new V;function NP(n,e,t){let i=new ga,r=new Xe,s=new Xe,o=new Tt,a=new Bh,l=new kh,c={},u=t.maxTextureSize,d={[Sr]:En,[En]:Sr,[Yi]:Yi},h=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:PP,fragmentShader:IP}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let v=new Xi;v.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new wn(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let f=this.type;this.render=function(b,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===hS&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ec);let w=n.getRenderTarget(),I=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(qi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let U=f!==this.type;U&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(k=>k.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,k=b.length;z<k;z++){let B=b[z],O=B.shadow;if(O===void 0){Fe("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let J=O.getFrameExtents();r.multiply(J),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,O.mapSize.y=s.y));let K=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=K,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===xa){if(B.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new $n(r.x,r.y,{format:Qs,type:$i,minFilter:jt,magFilter:jt,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new ls(r.x,r.y,Di),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=Hi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt}else B.isPointLight?(O.map=new Xf(r.x),O.map.depthTexture=new Uh(r.x,Li)):(O.map=new $n(r.x,r.y),O.map.depthTexture=new ls(r.x,r.y,Li)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=Hi,this.type===ec?(O.map.depthTexture.compareFunction=K?Vf:zf,O.map.depthTexture.minFilter=jt,O.map.depthTexture.magFilter=jt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt);O.camera.updateProjectionMatrix()}let ue=O.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ue;pe++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,pe),n.clear();else{pe===0&&(n.setRenderTarget(O.map),n.clear());let ce=O.getViewport(pe);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),F.viewport(o)}if(B.isPointLight){let ce=O.camera,Pe=O.matrix,ze=B.distance||ce.far;ze!==ce.far&&(ce.far=ze,ce.updateProjectionMatrix()),lc.setFromMatrixPosition(B.matrixWorld),ce.position.copy(lc),qg.copy(ce.position),qg.add(LP[pe]),ce.up.copy(DP[pe]),ce.lookAt(qg),ce.updateMatrixWorld(),Pe.makeTranslation(-lc.x,-lc.y,-lc.z),mM.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),O._frustum.setFromProjectionMatrix(mM,ce.coordinateSystem,ce.reversedDepth)}else O.updateMatrices(B);i=O.getFrustum(),S(A,y,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===xa&&m(O,y),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(w,I,R)};function m(b,A){let y=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $n(r.x,r.y,{format:Qs,type:$i})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,y,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,y,p,_,null)}function x(b,A,y,w){let I=null,R=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)I=R;else if(I=y.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=I.uuid,U=A.uuid,z=c[F];z===void 0&&(z={},c[F]=z);let k=z[U];k===void 0&&(k=I.clone(),z[U]=k,A.addEventListener("dispose",E)),I=k}if(I.visible=A.visible,I.wireframe=A.wireframe,w===xa?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:d[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=n.properties.get(I);F.light=y}return I}function S(b,A,y,w,I){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===xa)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let U=e.update(b),z=b.material;if(Array.isArray(z)){let k=U.groups;for(let B=0,O=k.length;B<O;B++){let J=k[B],K=z[J.materialIndex];if(K&&K.visible){let ue=x(b,K,w,I);b.onBeforeShadow(n,b,A,y,U,ue,J),n.renderBufferDirect(y,null,U,ue,b,J),b.onAfterShadow(n,b,A,y,U,ue,J)}}}else if(z.visible){let k=x(b,z,w,I);b.onBeforeShadow(n,b,A,y,U,k,null),n.renderBufferDirect(y,null,U,k,b,null),b.onAfterShadow(n,b,A,y,U,k,null)}}let F=b.children;for(let U=0,z=F.length;U<z;U++)S(F[U],A,y,w,I)}function E(b){b.target.removeEventListener("dispose",E);for(let y in c){let w=c[y],I=b.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function FP(n,e){function t(){let L=!1,oe=new Tt,re=null,xe=new Tt(0,0,0,0);return{setMask:function(ee){re!==ee&&!L&&(n.colorMask(ee,ee,ee,ee),re=ee)},setLocked:function(ee){L=ee},setClear:function(ee,Y,Ee,ke,ft){ft===!0&&(ee*=ke,Y*=ke,Ee*=ke),oe.set(ee,Y,Ee,ke),xe.equals(oe)===!1&&(n.clearColor(ee,Y,Ee,ke),xe.copy(oe))},reset:function(){L=!1,re=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,oe=!1,re=null,xe=null,ee=null;return{setReversed:function(Y){if(oe!==Y){let Ee=e.get("EXT_clip_control");Y?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),oe=Y;let ke=ee;ee=null,this.setClear(ke)}},getReversed:function(){return oe},setTest:function(Y){Y?ne(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Y){re!==Y&&!L&&(n.depthMask(Y),re=Y)},setFunc:function(Y){if(oe&&(Y=WS[Y]),xe!==Y){switch(Y){case Mh:n.depthFunc(n.NEVER);break;case wh:n.depthFunc(n.ALWAYS);break;case Eh:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Th:n.depthFunc(n.EQUAL);break;case bh:n.depthFunc(n.GEQUAL);break;case Ah:n.depthFunc(n.GREATER);break;case Ch:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=Y}},setLocked:function(Y){L=Y},setClear:function(Y){ee!==Y&&(ee=Y,oe&&(Y=1-Y),n.clearDepth(Y))},reset:function(){L=!1,re=null,xe=null,ee=null,oe=!1}}}function r(){let L=!1,oe=null,re=null,xe=null,ee=null,Y=null,Ee=null,ke=null,ft=null;return{setTest:function(st){L||(st?ne(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(st){oe!==st&&!L&&(n.stencilMask(st),oe=st)},setFunc:function(st,nr,ir){(re!==st||xe!==nr||ee!==ir)&&(n.stencilFunc(st,nr,ir),re=st,xe=nr,ee=ir)},setOp:function(st,nr,ir){(Y!==st||Ee!==nr||ke!==ir)&&(n.stencilOp(st,nr,ir),Y=st,Ee=nr,ke=ir)},setLocked:function(st){L=st},setClear:function(st){ft!==st&&(n.clearStencil(st),ft=st)},reset:function(){L=!1,oe=null,re=null,xe=null,ee=null,Y=null,Ee=null,ke=null,ft=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,p=[],v=null,_=!1,g=null,f=null,m=null,x=null,S=null,E=null,b=null,A=new Qe(0,0,0),y=0,w=!1,I=null,R=null,F=null,U=null,z=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,O=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=O>=1):J.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=O>=2);let K=null,ue={},pe=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Pe=new Tt().fromArray(pe),ze=new Tt().fromArray(ce);function qe(L,oe,re,xe){let ee=new Uint8Array(4),Y=n.createTexture();n.bindTexture(L,Y),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<re;Ee++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(oe+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return Y}let $={};$[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Zs),Oe(!1),mt(pg),ne(n.CULL_FACE),et(qi);function ne(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ie(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ue(L,oe){return d[L]!==oe?(n.bindFramebuffer(L,oe),d[L]=oe,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Le(L,oe){let re=p,xe=!1;if(L){re=h.get(oe),re===void 0&&(re=[],h.set(oe,re));let ee=L.textures;if(re.length!==ee.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,Ee=ee.length;Y<Ee;Y++)re[Y]=n.COLOR_ATTACHMENT0+Y;re.length=ee.length,xe=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,xe=!0);xe&&n.drawBuffers(re)}function ae(L){return v!==L?(n.useProgram(L),v=L,!0):!1}let De={[ss]:n.FUNC_ADD,[dS]:n.FUNC_SUBTRACT,[pS]:n.FUNC_REVERSE_SUBTRACT};De[mS]=n.MIN,De[gS]=n.MAX;let Ie={[_S]:n.ZERO,[vS]:n.ONE,[xS]:n.SRC_COLOR,[yh]:n.SRC_ALPHA,[TS]:n.SRC_ALPHA_SATURATE,[wS]:n.DST_COLOR,[SS]:n.DST_ALPHA,[yS]:n.ONE_MINUS_SRC_COLOR,[Sh]:n.ONE_MINUS_SRC_ALPHA,[ES]:n.ONE_MINUS_DST_COLOR,[MS]:n.ONE_MINUS_DST_ALPHA,[bS]:n.CONSTANT_COLOR,[AS]:n.ONE_MINUS_CONSTANT_COLOR,[CS]:n.CONSTANT_ALPHA,[RS]:n.ONE_MINUS_CONSTANT_ALPHA};function et(L,oe,re,xe,ee,Y,Ee,ke,ft,st){if(L===qi){_===!0&&(ie(n.BLEND),_=!1);return}if(_===!1&&(ne(n.BLEND),_=!0),L!==fS){if(L!==g||st!==w){if((f!==ss||S!==ss)&&(n.blendEquation(n.FUNC_ADD),f=ss,S=ss),st)switch(L){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mg:n.blendFunc(n.ONE,n.ONE);break;case gg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _g:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ne("WebGLState: Invalid blending: ",L);break}else switch(L){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mg:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gg:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _g:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",L);break}m=null,x=null,E=null,b=null,A.set(0,0,0),y=0,g=L,w=st}return}ee=ee||oe,Y=Y||re,Ee=Ee||xe,(oe!==f||ee!==S)&&(n.blendEquationSeparate(De[oe],De[ee]),f=oe,S=ee),(re!==m||xe!==x||Y!==E||Ee!==b)&&(n.blendFuncSeparate(Ie[re],Ie[xe],Ie[Y],Ie[Ee]),m=re,x=xe,E=Y,b=Ee),(ke.equals(A)===!1||ft!==y)&&(n.blendColor(ke.r,ke.g,ke.b,ft),A.copy(ke),y=ft),g=L,w=!1}function $e(L,oe){L.side===Yi?ie(n.CULL_FACE):ne(n.CULL_FACE);let re=L.side===En;oe&&(re=!re),Oe(re),L.blending===$s&&L.transparent===!1?et(qi):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let xe=L.stencilWrite;a.setTest(xe),xe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){I!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),I=L)}function mt(L){L!==cS?(ne(n.CULL_FACE),L!==R&&(L===pg?n.cullFace(n.BACK):L===uS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),R=L}function P(L){L!==F&&(B&&n.lineWidth(L),F=L)}function le(L,oe,re){L?(ne(n.POLYGON_OFFSET_FILL),(U!==oe||z!==re)&&(U=oe,z=re,o.getReversed()&&(oe=-oe),n.polygonOffset(oe,re))):ie(n.POLYGON_OFFSET_FILL)}function Ke(L){L?ne(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function it(L){L===void 0&&(L=n.TEXTURE0+k-1),K!==L&&(n.activeTexture(L),K=L)}function ye(L,oe,re){re===void 0&&(K===null?re=n.TEXTURE0+k-1:re=K);let xe=ue[re];xe===void 0&&(xe={type:void 0,texture:void 0},ue[re]=xe),(xe.type!==L||xe.texture!==oe)&&(K!==re&&(n.activeTexture(re),K=re),n.bindTexture(L,oe||$[L]),xe.type=L,xe.texture=oe)}function C(){let L=ue[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function X(){try{n.texSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Z(){try{n.texSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function se(){try{n.texStorage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function we(){try{n.texStorage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function Ae(){try{n.texImage2D(...arguments)}catch(L){Ne("WebGLState:",L)}}function j(){try{n.texImage3D(...arguments)}catch(L){Ne("WebGLState:",L)}}function te(L){Pe.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Pe.copy(L))}function Me(L){ze.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ze.copy(L))}function ge(L,oe){let re=c.get(oe);re===void 0&&(re=new WeakMap,c.set(oe,re));let xe=re.get(L);xe===void 0&&(xe=n.getUniformBlockIndex(oe,L.name),re.set(L,xe))}function me(L,oe){let xe=c.get(oe).get(L);l.get(oe)!==xe&&(n.uniformBlockBinding(oe,xe,L.__bindingPointIndex),l.set(oe,xe))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,ue={},d={},h=new WeakMap,p=[],v=null,_=!1,g=null,f=null,m=null,x=null,S=null,E=null,b=null,A=new Qe(0,0,0),y=0,w=!1,I=null,R=null,F=null,U=null,z=null,Pe.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ie,bindFramebuffer:Ue,drawBuffers:Le,useProgram:ae,setBlending:et,setMaterial:$e,setFlipSided:Oe,setCullFace:mt,setLineWidth:P,setPolygonOffset:le,setScissorTest:Ke,activeTexture:it,bindTexture:ye,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:D,texImage2D:Ae,texImage3D:j,updateUBOMapping:ge,uniformBlockBinding:me,texStorage2D:se,texStorage3D:we,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:Se,scissor:te,viewport:Me,reset:Be}}function UP(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return p?new OffscreenCanvas(C,M):Ul("canvas")}function _(C,M,D){let X=1,Z=ye(C);if((Z.width>D||Z.height>D)&&(X=D/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let q=Math.floor(X*Z.width),Se=Math.floor(X*Z.height);d===void 0&&(d=v(q,Se));let se=M?v(q,Se):d;return se.width=q,se.height=Se,se.getContext("2d").drawImage(C,0,0,q,Se),Fe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+Se+")."),se}else return"data"in C&&Fe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function g(C){return C.generateMipmaps}function f(C){n.generateMipmap(C)}function m(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,M,D,X,Z=!1){if(C!==null){if(n[C]!==void 0)return n[C];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=M;if(M===n.RED&&(D===n.FLOAT&&(q=n.R32F),D===n.HALF_FLOAT&&(q=n.R16F),D===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.R8UI),D===n.UNSIGNED_SHORT&&(q=n.R16UI),D===n.UNSIGNED_INT&&(q=n.R32UI),D===n.BYTE&&(q=n.R8I),D===n.SHORT&&(q=n.R16I),D===n.INT&&(q=n.R32I)),M===n.RG&&(D===n.FLOAT&&(q=n.RG32F),D===n.HALF_FLOAT&&(q=n.RG16F),D===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.RG8UI),D===n.UNSIGNED_SHORT&&(q=n.RG16UI),D===n.UNSIGNED_INT&&(q=n.RG32UI),D===n.BYTE&&(q=n.RG8I),D===n.SHORT&&(q=n.RG16I),D===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.RGB8UI),D===n.UNSIGNED_SHORT&&(q=n.RGB16UI),D===n.UNSIGNED_INT&&(q=n.RGB32UI),D===n.BYTE&&(q=n.RGB8I),D===n.SHORT&&(q=n.RGB16I),D===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),D===n.UNSIGNED_INT&&(q=n.RGBA32UI),D===n.BYTE&&(q=n.RGBA8I),D===n.SHORT&&(q=n.RGBA16I),D===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){let Se=Z?Fl:je.getTransfer(X);D===n.FLOAT&&(q=n.RGBA32F),D===n.HALF_FLOAT&&(q=n.RGBA16F),D===n.UNSIGNED_BYTE&&(q=Se===rt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(C,M){let D;return C?M===null||M===Li||M===Sa?D=n.DEPTH24_STENCIL8:M===Di?D=n.DEPTH32F_STENCIL8:M===ya&&(D=n.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Li||M===Sa?D=n.DEPTH_COMPONENT24:M===Di?D=n.DEPTH_COMPONENT32F:M===ya&&(D=n.DEPTH_COMPONENT16),D}function E(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){let M=C.target;M.removeEventListener("dispose",b),y(M),M.isVideoTexture&&u.delete(M)}function A(C){let M=C.target;M.removeEventListener("dispose",A),I(M)}function y(C){let M=i.get(C);if(M.__webglInit===void 0)return;let D=C.source,X=h.get(D);if(X){let Z=X[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&w(C),Object.keys(X).length===0&&h.delete(D)}i.remove(C)}function w(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let D=C.source,X=h.get(D);delete X[M.__cacheKey],o.memory.textures--}function I(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let Z=0;Z<M.__webglFramebuffer[X].length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[X][Z]);else n.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)n.deleteFramebuffer(M.__webglFramebuffer[X]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let D=C.textures;for(let X=0,Z=D.length;X<Z;X++){let q=i.get(D[X]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(D[X])}i.remove(C)}let R=0;function F(){R=0}function U(){let C=R;return C>=r.maxTextures&&Fe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),R+=1,C}function z(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function k(C,M){let D=i.get(C);if(C.isVideoTexture&&Ke(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&D.__version!==C.version){let X=C.image;if(X===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,C,M);return}}else C.isExternalTexture&&(D.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+M)}function B(C,M){let D=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){$(D,C,M);return}else C.isExternalTexture&&(D.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+M)}function O(C,M){let D=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){$(D,C,M);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+M)}function J(C,M){let D=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&D.__version!==C.version){ne(D,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+M)}let K={[Rh]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[Ph]:n.MIRRORED_REPEAT},ue={[qt]:n.NEAREST,[LS]:n.NEAREST_MIPMAP_NEAREST,[nc]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[ef]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},pe={[FS]:n.NEVER,[zS]:n.ALWAYS,[US]:n.LESS,[zf]:n.LEQUAL,[OS]:n.EQUAL,[Vf]:n.GEQUAL,[BS]:n.GREATER,[kS]:n.NOTEQUAL};function ce(C,M){if(M.type===Di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jt||M.magFilter===ef||M.magFilter===nc||M.magFilter===ps||M.minFilter===jt||M.minFilter===ef||M.minFilter===nc||M.minFilter===ps)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,K[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,K[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,K[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ue[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qt||M.minFilter!==nc&&M.minFilter!==ps||M.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Pe(C,M){let D=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));let X=M.source,Z=h.get(X);Z===void 0&&(Z={},h.set(X,Z));let q=z(M);if(q!==C.__cacheKey){Z[q]===void 0&&(Z[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Z[q].usedTimes++;let Se=Z[C.__cacheKey];Se!==void 0&&(Z[C.__cacheKey].usedTimes--,Se.usedTimes===0&&w(M)),C.__cacheKey=q,C.__webglTexture=Z[q].texture}return D}function ze(C,M,D){return Math.floor(Math.floor(C/D)/M)}function qe(C,M,D,X){let q=C.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,D,X,M.data);else{q.sort((j,te)=>j.start-te.start);let Se=0;for(let j=1;j<q.length;j++){let te=q[Se],Me=q[j],ge=te.start+te.count,me=ze(Me.start,M.width,4),Be=ze(te.start,M.width,4);Me.start<=ge+1&&me===Be&&ze(Me.start+Me.count-1,M.width,4)===me?te.count=Math.max(te.count,Me.start+Me.count-te.start):(++Se,q[Se]=Me)}q.length=Se+1;let se=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let j=0,te=q.length;j<te;j++){let Me=q[j],ge=Math.floor(Me.start/4),me=Math.ceil(Me.count/4),Be=ge%M.width,L=Math.floor(ge/M.width),oe=me,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Be,L,oe,re,D,X,M.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,se),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function $(C,M,D){let X=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=n.TEXTURE_3D);let Z=Pe(C,M),q=M.source;t.bindTexture(X,C.__webglTexture,n.TEXTURE0+D);let Se=i.get(q);if(q.version!==Se.__version||Z===!0){t.activeTexture(n.TEXTURE0+D);let se=je.getPrimaries(je.workingColorSpace),we=M.colorSpace===wr?null:je.getPrimaries(M.colorSpace),Ae=M.colorSpace===wr||se===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let j=_(M.image,!1,r.maxTextureSize);j=it(M,j);let te=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),ge=x(M.internalFormat,te,Me,M.colorSpace,M.isVideoTexture);ce(X,M);let me,Be=M.mipmaps,L=M.isVideoTexture!==!0,oe=Se.__version===void 0||Z===!0,re=q.dataReady,xe=E(M,j);if(M.isDepthTexture)ge=S(M.format===ms,M.type),oe&&(L?t.texStorage2D(n.TEXTURE_2D,1,ge,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,ge,j.width,j.height,0,te,Me,null));else if(M.isDataTexture)if(Be.length>0){L&&oe&&t.texStorage2D(n.TEXTURE_2D,xe,ge,Be[0].width,Be[0].height);for(let ee=0,Y=Be.length;ee<Y;ee++)me=Be[ee],L?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,me.width,me.height,te,Me,me.data):t.texImage2D(n.TEXTURE_2D,ee,ge,me.width,me.height,0,te,Me,me.data);M.generateMipmaps=!1}else L?(oe&&t.texStorage2D(n.TEXTURE_2D,xe,ge,j.width,j.height),re&&qe(M,j,te,Me)):t.texImage2D(n.TEXTURE_2D,0,ge,j.width,j.height,0,te,Me,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ge,Be[0].width,Be[0].height,j.depth);for(let ee=0,Y=Be.length;ee<Y;ee++)if(me=Be[ee],M.format!==hi)if(te!==null)if(L){if(re)if(M.layerUpdates.size>0){let Ee=Vg(me.width,me.height,M.format,M.type);for(let ke of M.layerUpdates){let ft=me.data.subarray(ke*Ee/me.data.BYTES_PER_ELEMENT,(ke+1)*Ee/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,ke,me.width,me.height,1,te,ft)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,j.depth,te,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,ge,me.width,me.height,j.depth,0,me.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,j.depth,te,Me,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,ge,me.width,me.height,j.depth,0,te,Me,me.data)}else{L&&oe&&t.texStorage2D(n.TEXTURE_2D,xe,ge,Be[0].width,Be[0].height);for(let ee=0,Y=Be.length;ee<Y;ee++)me=Be[ee],M.format!==hi?te!==null?L?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,me.width,me.height,te,me.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,ge,me.width,me.height,0,me.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,me.width,me.height,te,Me,me.data):t.texImage2D(n.TEXTURE_2D,ee,ge,me.width,me.height,0,te,Me,me.data)}else if(M.isDataArrayTexture)if(L){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ge,j.width,j.height,j.depth),re)if(M.layerUpdates.size>0){let ee=Vg(j.width,j.height,M.format,M.type);for(let Y of M.layerUpdates){let Ee=j.data.subarray(Y*ee/j.data.BYTES_PER_ELEMENT,(Y+1)*ee/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,j.width,j.height,1,te,Me,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,te,Me,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,j.width,j.height,j.depth,0,te,Me,j.data);else if(M.isData3DTexture)L?(oe&&t.texStorage3D(n.TEXTURE_3D,xe,ge,j.width,j.height,j.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,te,Me,j.data)):t.texImage3D(n.TEXTURE_3D,0,ge,j.width,j.height,j.depth,0,te,Me,j.data);else if(M.isFramebufferTexture){if(oe)if(L)t.texStorage2D(n.TEXTURE_2D,xe,ge,j.width,j.height);else{let ee=j.width,Y=j.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ge,ee,Y,0,te,Me,null),ee>>=1,Y>>=1}}else if(Be.length>0){if(L&&oe){let ee=ye(Be[0]);t.texStorage2D(n.TEXTURE_2D,xe,ge,ee.width,ee.height)}for(let ee=0,Y=Be.length;ee<Y;ee++)me=Be[ee],L?re&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,te,Me,me):t.texImage2D(n.TEXTURE_2D,ee,ge,te,Me,me);M.generateMipmaps=!1}else if(L){if(oe){let ee=ye(j);t.texStorage2D(n.TEXTURE_2D,xe,ge,ee.width,ee.height)}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te,Me,j)}else t.texImage2D(n.TEXTURE_2D,0,ge,te,Me,j);g(M)&&f(X),Se.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,D){if(M.image.length!==6)return;let X=Pe(C,M),Z=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+D);let q=i.get(Z);if(Z.version!==q.__version||X===!0){t.activeTexture(n.TEXTURE0+D);let Se=je.getPrimaries(je.workingColorSpace),se=M.colorSpace===wr?null:je.getPrimaries(M.colorSpace),we=M.colorSpace===wr||Se===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,j=M.image[0]&&M.image[0].isDataTexture,te=[];for(let Y=0;Y<6;Y++)!Ae&&!j?te[Y]=_(M.image[Y],!0,r.maxCubemapSize):te[Y]=j?M.image[Y].image:M.image[Y],te[Y]=it(M,te[Y]);let Me=te[0],ge=s.convert(M.format,M.colorSpace),me=s.convert(M.type),Be=x(M.internalFormat,ge,me,M.colorSpace),L=M.isVideoTexture!==!0,oe=q.__version===void 0||X===!0,re=Z.dataReady,xe=E(M,Me);ce(n.TEXTURE_CUBE_MAP,M);let ee;if(Ae){L&&oe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Be,Me.width,Me.height);for(let Y=0;Y<6;Y++){ee=te[Y].mipmaps;for(let Ee=0;Ee<ee.length;Ee++){let ke=ee[Ee];M.format!==hi?ge!==null?L?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee,0,0,ke.width,ke.height,ge,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee,Be,ke.width,ke.height,0,ke.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee,0,0,ke.width,ke.height,ge,me,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee,Be,ke.width,ke.height,0,ge,me,ke.data)}}}else{if(ee=M.mipmaps,L&&oe){ee.length>0&&xe++;let Y=ye(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(j){L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,te[Y].width,te[Y].height,ge,me,te[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,te[Y].width,te[Y].height,0,ge,me,te[Y].data);for(let Ee=0;Ee<ee.length;Ee++){let ft=ee[Ee].image[Y].image;L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee+1,0,0,ft.width,ft.height,ge,me,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee+1,Be,ft.width,ft.height,0,ge,me,ft.data)}}else{L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ge,me,te[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,ge,me,te[Y]);for(let Ee=0;Ee<ee.length;Ee++){let ke=ee[Ee];L?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee+1,0,0,ge,me,ke.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ee+1,Be,ge,me,ke.image[Y])}}}g(M)&&f(n.TEXTURE_CUBE_MAP),q.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ie(C,M,D,X,Z,q){let Se=s.convert(D.format,D.colorSpace),se=s.convert(D.type),we=x(D.internalFormat,Se,se,D.colorSpace),Ae=i.get(M),j=i.get(D);if(j.__renderTarget=M,!Ae.__hasExternalTextures){let te=Math.max(1,M.width>>q),Me=Math.max(1,M.height>>q);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,we,te,Me,M.depth,0,Se,se,null):t.texImage2D(Z,q,we,te,Me,0,Se,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),le(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,Z,j.__webglTexture,0,P(M)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,Z,j.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,M,D){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let X=M.depthTexture,Z=X&&X.isDepthTexture?X.type:null,q=S(M.stencilBuffer,Z),Se=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;le(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(M),q,M.width,M.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(M),q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,C)}else{let X=M.textures;for(let Z=0;Z<X.length;Z++){let q=X[Z],Se=s.convert(q.format,q.colorSpace),se=s.convert(q.type),we=x(q.internalFormat,Se,se,q.colorSpace);le(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(M),we,M.width,M.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(M),we,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,we,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(C,M,D){let X=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ce(n.TEXTURE_CUBE_MAP,M.depthTexture);let Ae=s.convert(M.depthTexture.format),j=s.convert(M.depthTexture.type),te;M.depthTexture.format===Hi?te=n.DEPTH_COMPONENT24:M.depthTexture.format===ms&&(te=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,te,M.width,M.height,0,Ae,j,null)}}else k(M.depthTexture,0);let q=Z.__webglTexture,Se=P(M),se=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,we=M.depthTexture.format===ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Hi)le(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,se,q,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,we,se,q,0);else if(M.depthTexture.format===ms)le(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,se,q,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,we,se,q,0);else throw new Error("Unknown depthTexture format")}function ae(C){let M=i.get(C),D=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){let Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=X}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(D)for(let X=0;X<6;X++)Le(M.__webglFramebuffer[X],C,X);else{let X=C.texture.mipmaps;X&&X.length>0?Le(M.__webglFramebuffer[0],C,0):Le(M.__webglFramebuffer,C,0)}else if(D){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=n.createRenderbuffer(),Ue(M.__webglDepthbuffer[X],C,!1);else{let Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}else{let X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ue(M.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(C,M,D){let X=i.get(C);M!==void 0&&ie(X.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&ae(C)}function Ie(C){let M=C.texture,D=i.get(C),X=i.get(M);C.addEventListener("dispose",A);let Z=C.textures,q=C.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=M.version,o.memory.textures++),q){D.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[se]=[];for(let we=0;we<M.mipmaps.length;we++)D.__webglFramebuffer[se][we]=n.createFramebuffer()}else D.__webglFramebuffer[se]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)D.__webglFramebuffer[se]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Se)for(let se=0,we=Z.length;se<we;se++){let Ae=i.get(Z[se]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&le(C)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let se=0;se<Z.length;se++){let we=Z[se];D.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[se]);let Ae=s.convert(we.format,we.colorSpace),j=s.convert(we.type),te=x(we.internalFormat,Ae,j,we.colorSpace,C.isXRRenderTarget===!0),Me=P(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,te,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,D.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(D.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ce(n.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)ie(D.__webglFramebuffer[se][we],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we);else ie(D.__webglFramebuffer[se],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);g(M)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,we=Z.length;se<we;se++){let Ae=Z[se],j=i.get(Ae),te=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,j.__webglTexture),ce(te,Ae),ie(D.__webglFramebuffer,C,Ae,n.COLOR_ATTACHMENT0+se,te,0),g(Ae)&&f(te)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,X.__webglTexture),ce(se,M),M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)ie(D.__webglFramebuffer[we],C,M,n.COLOR_ATTACHMENT0,se,we);else ie(D.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,se,0);g(M)&&f(se),t.unbindTexture()}C.depthBuffer&&ae(C)}function et(C){let M=C.textures;for(let D=0,X=M.length;D<X;D++){let Z=M[D];if(g(Z)){let q=m(C),Se=i.get(Z).__webglTexture;t.bindTexture(q,Se),f(q),t.unbindTexture()}}}let $e=[],Oe=[];function mt(C){if(C.samples>0){if(le(C)===!1){let M=C.textures,D=C.width,X=C.height,Z=n.COLOR_BUFFER_BIT,q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(C),se=M.length>1;if(se)for(let Ae=0;Ae<M.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let we=C.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Ae]);let j=i.get(M[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,D,X,0,0,D,X,Z,n.NEAREST),l===!0&&($e.length=0,Oe.length=0,$e.push(n.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&($e.push(q),Oe.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Ae=0;Ae<M.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Ae]);let j=i.get(M[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,j,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function P(C){return Math.min(r.maxSamples,C.samples)}function le(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ke(C){let M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function it(C,M){let D=C.colorSpace,X=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||D!==Js&&D!==wr&&(je.getTransfer(D)===rt?(X!==hi||Z!==Ln)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",D)),M}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=J,this.rebindTextures=De,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function OP(n,e){function t(i,r=wr){let s,o=je.getTransfer(r);if(i===Ln)return n.UNSIGNED_BYTE;if(i===nf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pg)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ag)return n.BYTE;if(i===Cg)return n.SHORT;if(i===ya)return n.UNSIGNED_SHORT;if(i===tf)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===$i)return n.HALF_FLOAT;if(i===Ig)return n.ALPHA;if(i===Lg)return n.RGB;if(i===hi)return n.RGBA;if(i===Hi)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===Dg)return n.RED;if(i===sf)return n.RED_INTEGER;if(i===Qs)return n.RG;if(i===of)return n.RG_INTEGER;if(i===af)return n.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===oc)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lf||i===cf||i===uf||i===hf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ff||i===df||i===pf||i===mf||i===gf||i===_f||i===vf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ff||i===df)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===pf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===mf)return s.COMPRESSED_R11_EAC;if(i===gf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===_f)return s.COMPRESSED_RG11_EAC;if(i===vf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xf||i===yf||i===Sf||i===Mf||i===wf||i===Ef||i===Tf||i===bf||i===Af||i===Cf||i===Rf||i===Pf||i===If||i===Lf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ef)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Af)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===If)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Df||i===Nf||i===Ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Df)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uf||i===Of||i===Bf||i===kf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Uf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Of)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var BP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,t0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Yl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Zn({vertexShader:BP,fragmentShader:kP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new ql(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},n0=class extends Mr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null,_=typeof XRWebGLBinding<"u",g=new t0,f={},m=t.getContextAttributes(),x=null,S=null,E=[],b=[],A=new Xe,y=null,w=new hn;w.viewport=new Tt;let I=new hn;I.viewport=new Tt;let R=[w,I],F=new Kh,U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=E[$];return ne===void 0&&(ne=new pa,E[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=E[$];return ne===void 0&&(ne=new pa,E[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=E[$];return ne===void 0&&(ne=new pa,E[$]=ne),ne.getHandSpace()};function k($){let ne=b.indexOf($.inputSource);if(ne===-1)return;let ie=E[ne];ie!==void 0&&(ie.update($.inputSource,$.frame,c||o),ie.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",O);for(let $=0;$<E.length;$++){let ne=b[$];ne!==null&&(b[$]=null,E[$].disconnect(ne))}U=null,z=null,g.reset();for(let $ in f)delete f[$];e.setRenderTarget(x),p=null,h=null,d=null,r=null,S=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",B),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ue=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?ms:Hi,Ue=m.stencil?Sa:Li);let ae={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new $n(h.textureWidth,h.textureHeight,{format:hi,type:Ln,depthTexture:new ls(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $n(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O($){for(let ne=0;ne<$.removed.length;ne++){let ie=$.removed[ne],Ue=b.indexOf(ie);Ue>=0&&(b[Ue]=null,E[Ue].disconnect(ie))}for(let ne=0;ne<$.added.length;ne++){let ie=$.added[ne],Ue=b.indexOf(ie);if(Ue===-1){for(let ae=0;ae<E.length;ae++)if(ae>=b.length){b.push(ie),Ue=ae;break}else if(b[ae]===null){b[ae]=ie,Ue=ae;break}if(Ue===-1)break}let Le=E[Ue];Le&&Le.connect(ie)}}let J=new V,K=new V;function ue($,ne,ie){J.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(ie.matrixWorld);let Ue=J.distanceTo(K),Le=ne.projectionMatrix.elements,ae=ie.projectionMatrix.elements,De=Le[14]/(Le[10]-1),Ie=Le[14]/(Le[10]+1),et=(Le[9]+1)/Le[5],$e=(Le[9]-1)/Le[5],Oe=(Le[8]-1)/Le[0],mt=(ae[8]+1)/ae[0],P=De*Oe,le=De*mt,Ke=Ue/(-Oe+mt),it=Ke*-Oe;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ(Ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Le[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let ye=De+Ke,C=Ie+Ke,M=P-it,D=le+(Ue-it),X=et*Ie/C*ye,Z=$e*Ie/C*ye;$.projectionMatrix.makePerspective(M,D,X,Z,ye,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,ie=$.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),F.near=I.near=w.near=ne,F.far=I.far=w.far=ie,(U!==F.near||z!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),U=F.near,z=F.far),F.layers.mask=$.layers.mask|6,w.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let Ue=$.parent,Le=F.cameras;pe(F,Ue);for(let ae=0;ae<Le.length;ae++)pe(Le[ae],Ue);Le.length===2?ue(F,w,I):F.projectionMatrix.copy(w.projectionMatrix),ce($,F,Ue)};function ce($,ne,ie){ie===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(ie.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ha*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function($){return f[$]};let Pe=null;function ze($,ne){if(u=ne.getViewerPose(c||o),v=ne,u!==null){let ie=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ue=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Ie=0;Ie<ie.length;Ie++){let et=ie[Ie],$e=null;if(p!==null)$e=p.getViewport(et);else{let mt=d.getViewSubImage(h,et);$e=mt.viewport,Ie===0&&(e.setRenderTargetTextures(S,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(S))}let Oe=R[Ie];Oe===void 0&&(Oe=new hn,Oe.layers.enable(Ie),Oe.viewport=new Tt,R[Ie]=Oe),Oe.matrix.fromArray(et.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(et.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set($e.x,$e.y,$e.width,$e.height),Ie===0&&(F.matrix.copy(Oe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(Oe)}let Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Ie=d.getDepthInformation(ie[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(Ie,r.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Ie=0;Ie<ie.length;Ie++){let et=ie[Ie].camera;if(et){let $e=f[et];$e||($e=new Yl,f[et]=$e);let Oe=d.getCameraImage(et);$e.sourceTexture=Oe}}}}for(let ie=0;ie<E.length;ie++){let Ue=b[ie],Le=E[ie];Ue!==null&&Le!==void 0&&Le.update(Ue,ne,c||o)}Pe&&Pe($,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),v=null}let qe=new gM;qe.setAnimationLoop(ze),this.setAnimationLoop=function($){Pe=$},this.dispose=function(){}}},no=new Pi,zP=new Et;function VP(n,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Bg(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,m,x,S){f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),_(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,m,x):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===En&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===En&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let m=e.get(f),x=m.envMap,S=m.envMapRotation;x&&(g.envMap.value=x,no.copy(S),no.x*=-1,no.y*=-1,no.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(no.y*=-1,no.z*=-1),g.envMapRotation.value.setFromMatrix4(zP.makeRotationFromEuler(no)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=x*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GP(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){let S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=r[m.id];S===void 0&&(v(m),S=u(m),r[m.id]=S,m.addEventListener("dispose",g));let E=x.program;i.updateUBOMapping(m,E);let b=e.render.frame;s[m.id]!==b&&(h(m),s[m.id]=b)}function u(m){let x=d();m.__bindingPointIndex=x;let S=n.createBuffer(),E=m.__size,b=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){let x=r[m.id],S=m.uniforms,E=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,A=S.length;b<A;b++){let y=Array.isArray(S[b])?S[b]:[S[b]];for(let w=0,I=y.length;w<I;w++){let R=y[w];if(p(R,b,w,E)===!0){let F=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],z=0;for(let k=0;k<U.length;k++){let B=U[k],O=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,F+z,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(m,x,S,E){let b=m.value,A=x+"_"+S;if(E[A]===void 0)return typeof b=="number"||typeof b=="boolean"?E[A]=b:E[A]=b.clone(),!0;{let y=E[A];if(typeof b=="number"||typeof b=="boolean"){if(y!==b)return E[A]=b,!0}else if(y.equals(b)===!1)return y.copy(b),!0}return!1}function v(m){let x=m.uniforms,S=0,E=16;for(let A=0,y=x.length;A<y;A++){let w=Array.isArray(x[A])?x[A]:[x[A]];for(let I=0,R=w.length;I<R;I++){let F=w[I],U=Array.isArray(F.value)?F.value:[F.value];for(let z=0,k=U.length;z<k;z++){let B=U[z],O=_(B),J=S%E,K=J%O.boundary,ue=J+K;S+=K,ue!==0&&E-ue<O.storage&&(S+=E-ue),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=O.storage}}}let b=S%E;return b>0&&(S+=E-b),m.__size=S,m.__cache={},this}function _(m){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){let x=m.target;x.removeEventListener("dispose",g);let S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(let m in r)n.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var HP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function WP(){return Ji===null&&(Ji=new Fh(HP,16,16,Qs,$i),Ji.name="DFG_LUT",Ji.minFilter=jt,Ji.magFilter=jt,Ji.wrapS=Gi,Ji.wrapT=Gi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var Yf=class{constructor(e={}){let{canvas:t=VS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Ln}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;let _=p,g=new Set([af,of,sf]),f=new Set([Ln,Li,ya,Sa,nf,rf]),m=new Uint32Array(4),x=new Int32Array(4),S=null,E=null,b=[],A=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,I=!1;this._outputColorSpace=un;let R=0,F=0,U=null,z=-1,k=null,B=new Tt,O=new Tt,J=null,K=new Qe(0),ue=0,pe=t.width,ce=t.height,Pe=1,ze=null,qe=null,$=new Tt(0,0,pe,ce),ne=new Tt(0,0,pe,ce),ie=!1,Ue=new ga,Le=!1,ae=!1,De=new Et,Ie=new V,et=new Tt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function mt(){return U===null?Pe:1}let P=i;function le(T,N){return t.getContext(T,N)}try{let T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",ft,!1),P===null){let N="webgl2";if(P=le(N,T),P===null)throw le(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ne("WebGLRenderer: "+T.message),T}let Ke,it,ye,C,M,D,X,Z,q,Se,se,we,Ae,j,te,Me,ge,me,Be,L,oe,re,xe;function ee(){Ke=new jC(P),Ke.init(),oe=new OP(P,Ke),it=new WC(P,Ke,e,oe),ye=new FP(P,Ke),it.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),C=new tR(P),M=new SP,D=new UP(P,Ke,ye,M,it,oe,C),X=new KC(w),Z=new ob(P),re=new GC(P,Z),q=new QC(P,Z,C,re),Se=new iR(P,q,Z,re,C),me=new nR(P,it,D),te=new XC(M),se=new yP(w,X,Ke,it,re,te),we=new VP(w,M),Ae=new wP,j=new RP(Ke),ge=new VC(w,X,ye,Se,v,l),Me=new NP(w,Se,it),xe=new GP(P,C,it,ye),Be=new HC(P,Ke,C),L=new eR(P,Ke,C),C.programs=se.programs,w.capabilities=it,w.extensions=Ke,w.properties=M,w.renderLists=Ae,w.shadowMap=Me,w.state=ye,w.info=C}ee(),_!==Ln&&(y=new sR(_,t.width,t.height,r,s));let Y=new n0(w,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=Ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(T){T!==void 0&&(Pe=T,this.setSize(pe,ce,!1))},this.getSize=function(T){return T.set(pe,ce)},this.setSize=function(T,N,W=!0){if(Y.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=T,ce=N,t.width=Math.floor(T*Pe),t.height=Math.floor(N*Pe),W===!0&&(t.style.width=T+"px",t.style.height=N+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(pe*Pe,ce*Pe).floor()},this.setDrawingBufferSize=function(T,N,W){pe=T,ce=N,Pe=W,t.width=Math.floor(T*W),t.height=Math.floor(N*W),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(_===Ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,N,W,H){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,N,W,H),ye.viewport(B.copy($).multiplyScalar(Pe).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,N,W,H){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,N,W,H),ye.scissor(O.copy(ne).multiplyScalar(Pe).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){ye.setScissorTest(ie=T)},this.setOpaqueSort=function(T){ze=T},this.setTransparentSort=function(T){qe=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,W=!0){let H=0;if(T){let G=!1;if(U!==null){let fe=U.texture.format;G=g.has(fe)}if(G){let fe=U.texture.type,_e=f.has(fe),de=ge.getClearColor(),Te=ge.getClearAlpha(),Ce=de.r,Ve=de.g,We=de.b;_e?(m[0]=Ce,m[1]=Ve,m[2]=We,m[3]=Te,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Ce,x[1]=Ve,x[2]=We,x[3]=Te,P.clearBufferiv(P.COLOR,0,x))}else H|=P.COLOR_BUFFER_BIT}N&&(H|=P.DEPTH_BUFFER_BIT),W&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),ge.dispose(),Ae.dispose(),j.dispose(),M.dispose(),X.dispose(),Se.dispose(),re.dispose(),xe.dispose(),se.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",j0),Y.removeEventListener("sessionend",Q0),bs.stop()};function Ee(T){T.preventDefault(),Ug("WebGLRenderer: Context Lost."),I=!0}function ke(){Ug("WebGLRenderer: Context Restored."),I=!1;let T=C.autoReset,N=Me.enabled,W=Me.autoUpdate,H=Me.needsUpdate,G=Me.type;ee(),C.autoReset=T,Me.enabled=N,Me.autoUpdate=W,Me.needsUpdate=H,Me.type=G}function ft(T){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){let N=T.target;N.removeEventListener("dispose",st),nr(N)}function nr(T){ir(T),M.remove(T)}function ir(T){let N=M.get(T).programs;N!==void 0&&(N.forEach(function(W){se.releaseProgram(W)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,W,H,G,fe){N===null&&(N=$e);let _e=G.isMesh&&G.matrixWorld.determinant()<0,de=U1(T,N,W,H,G);ye.setMaterial(H,_e);let Te=W.index,Ce=1;if(H.wireframe===!0){if(Te=q.getWireframeAttribute(W),Te===void 0)return;Ce=2}let Ve=W.drawRange,We=W.attributes.position,Re=Ve.start*Ce,at=(Ve.start+Ve.count)*Ce;fe!==null&&(Re=Math.max(Re,fe.start*Ce),at=Math.min(at,(fe.start+fe.count)*Ce)),Te!==null?(Re=Math.max(Re,0),at=Math.min(at,Te.count)):We!=null&&(Re=Math.max(Re,0),at=Math.min(at,We.count));let Dt=at-Re;if(Dt<0||Dt===1/0)return;re.setup(G,H,de,W,Te);let Rt,lt=Be;if(Te!==null&&(Rt=Z.get(Te),lt=L,lt.setIndex(Rt)),G.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*mt()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(G.isLine){let tn=H.linewidth;tn===void 0&&(tn=1),ye.setLineWidth(tn*mt()),G.isLineSegments?lt.setMode(P.LINES):G.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else G.isPoints?lt.setMode(P.POINTS):G.isSprite&&lt.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let tn=G._multiDrawStarts,be=G._multiDrawCounts,Bn=G._multiDrawCount,nt=Te?Z.get(Te).bytesPerElement:1,gi=M.get(H).currentProgram.getUniforms();for(let Ni=0;Ni<Bn;Ni++)gi.setValue(P,"_gl_DrawID",Ni),lt.render(tn[Ni]/nt,be[Ni])}else if(G.isInstancedMesh)lt.renderInstances(Re,Dt,G.count);else if(W.isInstancedBufferGeometry){let tn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,tn);lt.renderInstances(Re,Dt,be)}else lt.render(Re,Dt)};function K0(T,N,W){T.transparent===!0&&T.side===Yi&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,Rc(T,N,W),T.side=Sr,T.needsUpdate=!0,Rc(T,N,W),T.side=Yi):Rc(T,N,W)}this.compile=function(T,N,W=null){W===null&&(W=T),E=j.get(W),E.init(N),A.push(E),W.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),T!==W&&T.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();let H=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let fe=G.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){let de=fe[_e];K0(de,W,G),H.add(de)}else K0(fe,W,G),H.add(fe)}),E=A.pop(),H},this.compileAsync=function(T,N,W=null){let H=this.compile(T,N,W);return new Promise(G=>{function fe(){if(H.forEach(function(_e){M.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){G(T);return}setTimeout(fe,10)}Ke.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let md=null;function F1(T){md&&md(T)}function j0(){bs.stop()}function Q0(){bs.start()}let bs=new gM;bs.setAnimationLoop(F1),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(T){md=T,Y.setAnimationLoop(T),T===null?bs.stop():bs.start()},Y.addEventListener("sessionstart",j0),Y.addEventListener("sessionend",Q0),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;let W=Y.enabled===!0&&Y.isPresenting===!0,H=y!==null&&(U===null||W)&&y.begin(w,U);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,N,U),E=j.get(T,A.length),E.init(N),A.push(E),De.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ue.setFromProjectionMatrix(De,Ci,N.reversedDepth),ae=this.localClippingEnabled,Le=te.init(this.clippingPlanes,ae),S=Ae.get(T,b.length),S.init(),b.push(S),Y.enabled===!0&&Y.isPresenting===!0){let _e=w.xr.getDepthSensingMesh();_e!==null&&gd(_e,N,-1/0,w.sortObjects)}gd(T,N,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(ze,qe),Oe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Oe&&ge.addToRenderList(S,T),this.info.render.frame++,Le===!0&&te.beginShadows();let G=E.state.shadowsArray;if(Me.render(G,T,N),Le===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&y.hasRenderPass())===!1){let _e=S.opaque,de=S.transmissive;if(E.setupLights(),N.isArrayCamera){let Te=N.cameras;if(de.length>0)for(let Ce=0,Ve=Te.length;Ce<Ve;Ce++){let We=Te[Ce];t_(_e,de,T,We)}Oe&&ge.render(T);for(let Ce=0,Ve=Te.length;Ce<Ve;Ce++){let We=Te[Ce];e_(S,T,We,We.viewport)}}else de.length>0&&t_(_e,de,T,N),Oe&&ge.render(T),e_(S,T,N)}U!==null&&F===0&&(D.updateMultisampleRenderTarget(U),D.updateRenderTargetMipmap(U)),H&&y.end(w),T.isScene===!0&&T.onAfterRender(w,T,N),re.resetDefaultState(),z=-1,k=null,A.pop(),A.length>0?(E=A[A.length-1],Le===!0&&te.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function gd(T,N,W,H){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ue.intersectsSprite(T)){H&&et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(De);let _e=Se.update(T),de=T.material;de.visible&&S.push(T,_e,de,W,et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ue.intersectsObject(T))){let _e=Se.update(T),de=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),et.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),et.copy(_e.boundingSphere.center)),et.applyMatrix4(T.matrixWorld).applyMatrix4(De)),Array.isArray(de)){let Te=_e.groups;for(let Ce=0,Ve=Te.length;Ce<Ve;Ce++){let We=Te[Ce],Re=de[We.materialIndex];Re&&Re.visible&&S.push(T,_e,Re,W,et.z,We)}}else de.visible&&S.push(T,_e,de,W,et.z,null)}}let fe=T.children;for(let _e=0,de=fe.length;_e<de;_e++)gd(fe[_e],N,W,H)}function e_(T,N,W,H){let{opaque:G,transmissive:fe,transparent:_e}=T;E.setupLightsView(W),Le===!0&&te.setGlobalState(w.clippingPlanes,W),H&&ye.viewport(B.copy(H)),G.length>0&&Cc(G,N,W),fe.length>0&&Cc(fe,N,W),_e.length>0&&Cc(_e,N,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function t_(T,N,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let Re=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new $n(1,1,{generateMipmaps:!0,type:Re?$i:Ln,minFilter:ps,samples:Math.max(4,it.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}let fe=E.state.transmissionRenderTarget[H.id],_e=H.viewport||B;fe.setSize(_e.z*w.transmissionResolutionScale,_e.w*w.transmissionResolutionScale);let de=w.getRenderTarget(),Te=w.getActiveCubeFace(),Ce=w.getActiveMipmapLevel();w.setRenderTarget(fe),w.getClearColor(K),ue=w.getClearAlpha(),ue<1&&w.setClearColor(16777215,.5),w.clear(),Oe&&ge.render(W);let Ve=w.toneMapping;w.toneMapping=Ii;let We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Le===!0&&te.setGlobalState(w.clippingPlanes,H),Cc(T,W,H),D.updateMultisampleRenderTarget(fe),D.updateRenderTargetMipmap(fe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,Dt=N.length;at<Dt;at++){let Rt=N[at],{object:lt,geometry:tn,material:be,group:Bn}=Rt;if(be.side===Yi&&lt.layers.test(H.layers)){let nt=be.side;be.side=En,be.needsUpdate=!0,n_(lt,W,H,tn,be,Bn),be.side=nt,be.needsUpdate=!0,Re=!0}}Re===!0&&(D.updateMultisampleRenderTarget(fe),D.updateRenderTargetMipmap(fe))}w.setRenderTarget(de,Te,Ce),w.setClearColor(K,ue),We!==void 0&&(H.viewport=We),w.toneMapping=Ve}function Cc(T,N,W){let H=N.isScene===!0?N.overrideMaterial:null;for(let G=0,fe=T.length;G<fe;G++){let _e=T[G],{object:de,geometry:Te,group:Ce}=_e,Ve=_e.material;Ve.allowOverride===!0&&H!==null&&(Ve=H),de.layers.test(W.layers)&&n_(de,N,W,Te,Ve,Ce)}}function n_(T,N,W,H,G,fe){T.onBeforeRender(w,N,W,H,G,fe),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(w,N,W,H,T,fe),G.transparent===!0&&G.side===Yi&&G.forceSinglePass===!1?(G.side=En,G.needsUpdate=!0,w.renderBufferDirect(W,N,H,G,T,fe),G.side=Sr,G.needsUpdate=!0,w.renderBufferDirect(W,N,H,G,T,fe),G.side=Yi):w.renderBufferDirect(W,N,H,G,T,fe),T.onAfterRender(w,N,W,H,G,fe)}function Rc(T,N,W){N.isScene!==!0&&(N=$e);let H=M.get(T),G=E.state.lights,fe=E.state.shadowsArray,_e=G.state.version,de=se.getParameters(T,G.state,fe,N,W),Te=se.getProgramCacheKey(de),Ce=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let Ve=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=X.get(T.envMap||H.environment,Ve),H.envMapRotation=H.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",st),Ce=new Map,H.programs=Ce);let We=Ce.get(Te);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===_e)return r_(T,de),We}else de.uniforms=se.getUniforms(T),T.onBeforeCompile(de,w),We=se.acquireProgram(de,Te),Ce.set(Te,We),H.uniforms=de.uniforms;let Re=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=te.uniform),r_(T,de),H.needsLights=B1(T),H.lightsStateVersion=_e,H.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=We,H.uniformsList=null,We}function i_(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Ea.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function r_(T,N){let W=M.get(T);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function U1(T,N,W,H,G){N.isScene!==!0&&(N=$e),D.resetTextureUnits();let fe=N.fog,_e=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,de=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Js,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ce=X.get(H.envMap||_e,Te),Ve=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Dt=!!W.morphAttributes.color,Rt=Ii;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Rt=w.toneMapping);let lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tn=lt!==void 0?lt.length:0,be=M.get(H),Bn=E.state.lights;if(Le===!0&&(ae===!0||T!==k)){let Ht=T===k&&H.id===z;te.setState(H,T,Ht)}let nt=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Bn.state.version||be.outputColorSpace!==de||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Ce||H.fog===!0&&be.fog!==fe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==te.numPlanes||be.numIntersection!==te.numIntersection)||be.vertexAlphas!==Ve||be.vertexTangents!==We||be.morphTargets!==Re||be.morphNormals!==at||be.morphColors!==Dt||be.toneMapping!==Rt||be.morphTargetsCount!==tn)&&(nt=!0):(nt=!0,be.__version=H.version);let gi=be.currentProgram;nt===!0&&(gi=Rc(H,N,G));let Ni=!1,As=!1,go=!1,ct=gi.getUniforms(),$t=be.uniforms;if(ye.useProgram(gi.program)&&(Ni=!0,As=!0,go=!0),H.id!==z&&(z=H.id,As=!0),Ni||k!==T){ye.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(P,"projectionMatrix",T.projectionMatrix),ct.setValue(P,"viewMatrix",T.matrixWorldInverse);let Pr=ct.map.cameraPosition;Pr!==void 0&&Pr.setValue(P,Ie.setFromMatrixPosition(T.matrixWorld)),it.logarithmicDepthBuffer&&ct.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,As=!0,go=!0)}if(be.needsLights&&(Bn.state.directionalShadowMap.length>0&&ct.setValue(P,"directionalShadowMap",Bn.state.directionalShadowMap,D),Bn.state.spotShadowMap.length>0&&ct.setValue(P,"spotShadowMap",Bn.state.spotShadowMap,D),Bn.state.pointShadowMap.length>0&&ct.setValue(P,"pointShadowMap",Bn.state.pointShadowMap,D)),G.isSkinnedMesh){ct.setOptional(P,G,"bindMatrix"),ct.setOptional(P,G,"bindMatrixInverse");let Ht=G.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),ct.setValue(P,"boneTexture",Ht.boneTexture,D))}G.isBatchedMesh&&(ct.setOptional(P,G,"batchingTexture"),ct.setValue(P,"batchingTexture",G._matricesTexture,D),ct.setOptional(P,G,"batchingIdTexture"),ct.setValue(P,"batchingIdTexture",G._indirectTexture,D),ct.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(P,"batchingColorTexture",G._colorsTexture,D));let Rr=W.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&me.update(G,W,gi),(As||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,ct.setValue(P,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&($t.envMapIntensity.value=N.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=WP()),As&&(ct.setValue(P,"toneMappingExposure",w.toneMappingExposure),be.needsLights&&O1($t,go),fe&&H.fog===!0&&we.refreshFogUniforms($t,fe),we.refreshMaterialUniforms($t,H,Pe,ce,E.state.transmissionRenderTarget[T.id]),Ea.upload(P,i_(be),$t,D)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ea.upload(P,i_(be),$t,D),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(P,"center",G.center),ct.setValue(P,"modelViewMatrix",G.modelViewMatrix),ct.setValue(P,"normalMatrix",G.normalMatrix),ct.setValue(P,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Ht=H.uniformsGroups;for(let Pr=0,_o=Ht.length;Pr<_o;Pr++){let s_=Ht[Pr];xe.update(s_,gi),xe.bind(s_,gi)}}return gi}function O1(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function B1(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,N,W){let H=M.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=N,M.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let W=M.get(T);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};let k1=P.createFramebuffer();this.setRenderTarget=function(T,N=0,W=0){U=T,R=N,F=W;let H=null,G=!1,fe=!1;if(T){let de=M.get(T);if(de.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(P.FRAMEBUFFER,de.__webglFramebuffer),B.copy(T.viewport),O.copy(T.scissor),J=T.scissorTest,ye.viewport(B),ye.scissor(O),ye.setScissorTest(J),z=-1;return}else if(de.__webglFramebuffer===void 0)D.setupRenderTarget(T);else if(de.__hasExternalTextures)D.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ve=T.depthTexture;if(de.__boundDepthTexture!==Ve){if(Ve!==null&&M.has(Ve)&&(T.width!==Ve.image.width||T.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(T)}}let Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);let Ce=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?H=Ce[N][W]:H=Ce[N],G=!0):T.samples>0&&D.useMultisampledRTT(T)===!1?H=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?H=Ce[W]:H=Ce,B.copy(T.viewport),O.copy(T.scissor),J=T.scissorTest}else B.copy($).multiplyScalar(Pe).floor(),O.copy(ne).multiplyScalar(Pe).floor(),J=ie;if(W!==0&&(H=k1),ye.bindFramebuffer(P.FRAMEBUFFER,H)&&ye.drawBuffers(T,H),ye.viewport(B),ye.scissor(O),ye.setScissorTest(J),G){let de=M.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,W)}else if(fe){let de=N;for(let Te=0;Te<T.textures.length;Te++){let Ce=M.get(T.textures[Te]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,W,de)}}else if(T!==null&&W!==0){let de=M.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(T,N,W,H,G,fe,_e,de=0){if(!(T&&T.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){ye.bindFramebuffer(P.FRAMEBUFFER,Te);try{let Ce=T.textures[de],Ve=Ce.format,We=Ce.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!it.textureFormatReadable(Ve)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(We)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-H&&W>=0&&W<=T.height-G&&P.readPixels(N,W,H,G,oe.convert(Ve),oe.convert(We),fe)}finally{let Ce=U!==null?M.get(U).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,N,W,H,G,fe,_e,de=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te)if(N>=0&&N<=T.width-H&&W>=0&&W<=T.height-G){ye.bindFramebuffer(P.FRAMEBUFFER,Te);let Ce=T.textures[de],Ve=Ce.format,We=Ce.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+de),!it.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),P.readPixels(N,W,H,G,oe.convert(Ve),oe.convert(We),0);let at=U!==null?M.get(U).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,at);let Dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await HS(P,Dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Re),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(Re),P.deleteSync(Dt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,W=0){let H=Math.pow(2,-W),G=Math.floor(T.image.width*H),fe=Math.floor(T.image.height*H),_e=N!==null?N.x:0,de=N!==null?N.y:0;D.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,_e,de,G,fe),ye.unbindTexture()};let z1=P.createFramebuffer(),V1=P.createFramebuffer();this.copyTextureToTexture=function(T,N,W=null,H=null,G=0,fe=0){let _e,de,Te,Ce,Ve,We,Re,at,Dt,Rt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(W!==null)_e=W.max.x-W.min.x,de=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,Ve=W.min.y,We=W.isBox3?W.min.z:0;else{let $t=Math.pow(2,-G);_e=Math.floor(Rt.width*$t),de=Math.floor(Rt.height*$t),T.isDataArrayTexture?Te=Rt.depth:T.isData3DTexture?Te=Math.floor(Rt.depth*$t):Te=1,Ce=0,Ve=0,We=0}H!==null?(Re=H.x,at=H.y,Dt=H.z):(Re=0,at=0,Dt=0);let lt=oe.convert(N.format),tn=oe.convert(N.type),be;N.isData3DTexture?(D.setTexture3D(N,0),be=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),be=P.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),be=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let Bn=P.getParameter(P.UNPACK_ROW_LENGTH),nt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ni=P.getParameter(P.UNPACK_SKIP_ROWS),As=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ve),P.pixelStorei(P.UNPACK_SKIP_IMAGES,We);let go=T.isDataArrayTexture||T.isData3DTexture,ct=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let $t=M.get(T),Rr=M.get(N),Ht=M.get($t.__renderTarget),Pr=M.get(Rr.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let _o=0;_o<Te;_o++)go&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(T).__webglTexture,G,We+_o),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(N).__webglTexture,fe,Dt+_o)),P.blitFramebuffer(Ce,Ve,_e,de,Re,at,_e,de,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||M.has(T)){let $t=M.get(T),Rr=M.get(N);ye.bindFramebuffer(P.READ_FRAMEBUFFER,z1),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,V1);for(let Ht=0;Ht<Te;Ht++)go?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$t.__webglTexture,G,We+Ht):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$t.__webglTexture,G),ct?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rr.__webglTexture,fe,Dt+Ht):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rr.__webglTexture,fe),G!==0?P.blitFramebuffer(Ce,Ve,_e,de,Re,at,_e,de,P.COLOR_BUFFER_BIT,P.NEAREST):ct?P.copyTexSubImage3D(be,fe,Re,at,Dt+Ht,Ce,Ve,_e,de):P.copyTexSubImage2D(be,fe,Re,at,Ce,Ve,_e,de);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ct?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(be,fe,Re,at,Dt,_e,de,Te,lt,tn,Rt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(be,fe,Re,at,Dt,_e,de,Te,lt,Rt.data):P.texSubImage3D(be,fe,Re,at,Dt,_e,de,Te,lt,tn,Rt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,Re,at,_e,de,lt,tn,Rt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,Re,at,Rt.width,Rt.height,lt,Rt.data):P.texSubImage2D(P.TEXTURE_2D,fe,Re,at,_e,de,lt,tn,Rt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Bn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ni),P.pixelStorei(P.UNPACK_SKIP_IMAGES,As),fe===0&&N.generateMipmaps&&P.generateMipmap(be),ye.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&D.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?D.setTextureCube(T,0):T.isData3DTexture?D.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?D.setTexture2DArray(T,0):D.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){R=0,F=0,U=null,ye.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};function Er(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function RM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var Un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mc={duration:.5,overwrite:!1,delay:0},y0,Qt,yt,di=1e8,ht=1/di,u0=Math.PI*2,YP=u0/4,qP=0,PM=Math.sqrt,$P=Math.cos,ZP=Math.sin,Gt=function(e){return typeof e=="string"},It=function(e){return typeof e=="function"},br=function(e){return typeof e=="number"},rd=function(e){return typeof e>"u"},er=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},S0=function(){return typeof window<"u"},Zf=function(e){return It(e)||Gt(e)},IM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,JP=/random\([^)]+\)/g,KP=/,\s*/g,SM=/(?:-?\.?\d|\.)+/gi,M0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,i0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,w0=/[+-]=-?[.\d]+/,jP=/[^,'"\[\]\s]+/gi,QP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,ji,h0,E0,jn={},Qf={},LM,DM=function(e){return(Qf=Aa(e,jn))&&mn},sd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},gc=function(e,t){return!t&&console.warn(e)},NM=function(e,t){return e&&(jn[e]=t)&&Qf&&(Qf[e]=t)||jn},_c=function(){return 0},e2={suppressEvents:!0,isStart:!0,kill:!1},Jf={suppressEvents:!0,kill:!1},t2={suppressEvents:!0},T0={},vs=[],f0={},FM,Dn={},r0={},MM=30,Kf=[],b0="",A0=function(e){var t=e[0],i,r;if(er(t)||It(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Kf.length;r--&&!Kf[r].targetTest(t););i=Kf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new I0(e[r],i)))||e.splice(r,1);return e},xs=function(e){return e._gsap||A0(pi(e))[0]._gsap},C0=function(e,t,i){return(i=e[t])&&It(i)?e[t]():rd(i)&&e.getAttribute&&e.getAttribute(t)||i},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},lo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},n2=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},ed=function(){var e=vs.length,t=vs.slice(0),i,r;for(f0={},vs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},R0=function(e){return!!(e._initted||e._startAt||e.add)},UM=function(e,t,i,r){vs.length&&!Qt&&ed(),e.render(t,i,r||!!(Qt&&t<0&&R0(e))),vs.length&&!Qt&&ed()},OM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jP).length<2?t:Gt(e)?e.trim():e},BM=function(e){return e},Qn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},i2=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Aa=function(e,t){for(var i in t)e[i]=t[i];return e},wM=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=er(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},td=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},fc=function(e){var t=e.parent||At,i=e.keyframes?i2(pn(e.keyframes)):Qn;if(Fn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},r2=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},kM=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},od=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ys=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ro=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},s2=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},d0=function(e,t,i,r){return e._startAt&&(Qt?e._startAt.revert(Jf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},o2=function n(e){return!e||e._ts&&n(e.parent)},EM=function(e){return e._repeat?Ca(e._tTime,e=e.duration()+e._rDelay)*e:0},Ca=function(e,t){var i=Math.floor(e=bt(e/t));return e&&i===e?i-1:i},nd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ad=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},ld=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=bt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ad(e),i._dirty||ro(i,e)),e},zM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=nd(e.rawTime(),t),(!t._dur||yc(0,t.totalDuration(),i)-t._tTime>ht)&&t.render(i,!0)),ro(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ht}},Qi=function(e,t,i,r){return t.parent&&ys(t),t._start=bt((br(i)?i:i||e!==At?fi(e,i,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kM(e,t,"_first","_last",e._sort?"_start":0),p0(t)||(e._recent=t),r||zM(e,t),e._ts<0&&ld(e,e._tTime),e},VM=function(e,t){return(jn.ScrollTrigger||sd("scrollTrigger",t))&&jn.ScrollTrigger.create(t,e)},GM=function(e,t,i,r,s){if(N0(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&FM!==Nn.frame)return vs.push(e),e._lazy=[s,r],1},a2=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},p0=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},l2=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&a2(e)&&!(!e._initted&&p0(e))||(e._ts<0||e._dp._ts<0)&&!p0(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=yc(0,e._tDur,t),u=Ca(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ca(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Qt||r||e._zTime===ht||!t&&e._zTime){if(!e._initted&&GM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?ht:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&d0(e,t,i,!0),e._onUpdate&&!i&&Kn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ys(e,1),!i&&!Qt&&(Kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},c2=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ra=function(e,t,i,r){var s=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&ld(e,e._tTime=e._tDur*a),e.parent&&ad(e),i||ro(e.parent,e),e},TM=function(e){return e instanceof dn?ro(e):Ra(e,e._dur)},u2={_start:0,endTime:_c,totalDuration:_c},fi=function n(e,t,i){var r=e.labels,s=e._recent||u2,o=e.duration()>=di?s.endTime(!1):e._dur,a,l,c;return Gt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(pn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},dc=function(e,t,i){var r=br(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;o.immediateRender=Fn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ft(t[0],o,t[s+1])},Ss=function(e,t){return e||e===0?t(e):t},yc=function(e,t,i){return i<e?e:i>t?t:i},en=function(e,t){return!Gt(e)||!(t=QP.exec(e))?"":t[1]},h2=function(e,t,i){return Ss(i,function(r){return yc(e,t,r)})},m0=[].slice,HM=function(e,t){return e&&er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&er(e[0]))&&!e.nodeType&&e!==ji},f2=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Gt(r)&&!t||HM(r,1)?(s=i).push.apply(s,pi(r)):i.push(r)})||i},pi=function(e,t,i){return yt&&!t&&yt.selector?yt.selector(e):Gt(e)&&!i&&(h0||!Pa())?m0.call((t||E0).querySelectorAll(e),0):pn(e)?f2(e,i):HM(e)?m0.call(e,0):e?[e]:[]},g0=function(e){return e=pi(e)[0]||gc("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return pi(t,i.querySelectorAll?i:i===e?gc("Invalid scope")||E0.createElement("div"):e)}},WM=function(e){return e.sort(function(){return .5-Math.random()})},XM=function(e){if(It(e))return e;var t=er(e)?e:{each:e},i=so(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return Gt(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(h,p,v){var _=(v||t).length,g=o[_],f,m,x,S,E,b,A,y,w;if(!g){if(w=t.grid==="auto"?0:(t.grid||[1,di])[1],!w){for(A=-di;A<(A=v[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(g=o[_]=[],f=l?Math.min(w,_)*u-.5:r%w,m=w===di?0:l?_*d/w-.5:r/w|0,A=0,y=di,b=0;b<_;b++)x=b%w-f,S=m-(b/w|0),g[b]=E=c?Math.abs(c==="y"?S:x):PM(x*x+S*S),E>A&&(A=E),E<y&&(y=E);r==="random"&&WM(g),g.max=A-y,g.min=y,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(r==="edges"?-1:1),g.b=_<0?s-_:s,g.u=en(t.amount||t.each)||0,i=i&&_<0?T2(i):i}return _=(g[h]-g.min)/g.max||0,bt(g.b+(i?i(_):_)*g.v)+g.u}},_0=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=bt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(br(i)?0:en(i))}},YM=function(e,t){var i=pn(e),r,s;return!i&&er(e)&&(r=i=e.radius||di,e.values?(e=pi(e.values),(s=!br(e[0]))&&(r*=r)):e=_0(e.increment)),Ss(t,i?It(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=di,u=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:o,s||u===o||br(o)?u:u+en(o)}:_0(e))},qM=function(e,t,i,r){return Ss(pn(e)?!t:i===!0?!!(i=0):!r,function(){return pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},d2=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},p2=function(e,t){return function(i){return e(parseFloat(i))+(t||en(i))}},m2=function(e,t,i){return ZM(e,t,0,1,i)},$M=function(e,t,i){return Ss(i,function(r){return e[~~t(r)]})},g2=function n(e,t,i){var r=t-e;return pn(e)?$M(e,n(0,e.length),t):Ss(i,function(s){return(r+(s-e)%r)%r+e})},_2=function n(e,t,i){var r=t-e,s=r*2;return pn(e)?$M(e,n(0,e.length-1),t):Ss(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ia=function(e){return e.replace(JP,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(KP);return qM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ZM=function(e,t,i,r,s){var o=t-e,a=r-i;return Ss(s,function(l){return i+((l-e)/o*a||0)})},v2=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Gt(e),a={},l,c,u,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(v){v*=d;var _=Math.min(h,~~v);return u[_](v-_)},i=t}else r||(e=Aa(pn(e)?[]:{},e));if(!u){for(l in t)L0.call(a,e,l,"get",t[l]);s=function(v){return O0(v,a)||(o?e.p:e)}}}return Ss(i,s)},bM=function(e,t,i){var r=e.labels,s=di,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Kn=function(e,t,i){var r=e.vars,s=r[t],o=yt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&vs.length&&ed(),a&&(yt=a),u=l?s.apply(c,l):s.call(c),yt=o,u},uc=function(e){return ys(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Kn(e,"onInterrupt"),e},ba,JM=[],KM=function(e){if(e)if(e=!e.name&&e.default||e,S0()||e.headless){var t=e.name,i=It(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:_c,render:O0,add:L0,kill:F2,modifier:N2,rawVars:0},o={targetTest:0,get:0,getSetter:cd,aliases:{},register:0};if(Pa(),e!==r){if(Dn[t])return;Qn(r,Qn(td(e,s),o)),Aa(r.prototype,Aa(s,td(e,o))),Dn[r.prop=t]=r,e.targetTest&&(Kf.push(r),T0[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}NM(t,r),e.register&&e.register(mn,r,bn)}else JM.push(e)},ut=255,hc={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},s0=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ut+.5|0},jM=function(e,t,i){var r=e?br(e)?[e>>16,e>>8&ut,e&ut]:0:hc.black,s,o,a,l,c,u,d,h,p,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),hc[e])r=hc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ut,r&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(SM),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=s0(l+1/3,s,o),r[1]=s0(l,s,o),r[2]=s0(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(M0),i&&r.length<4&&(r[3]=1),r}else r=e.match(SM)||hc.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/ut,o=r[1]/ut,a=r[2]/ut,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?l=c=0:(p=d-h,c=u>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},QM=function(e){var t=[],i=[],r=-1;return e.split(Tr).forEach(function(s){var o=s.match(ao)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},AM=function(e,t,i){var r="",s=(e+r).match(Tr),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=jM(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=QM(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Tr,"1").split(ao),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Tr),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Tr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in hc)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),x2=/hsl[a]?\(/,P0=function(e){var t=e.join(" "),i;if(Tr.lastIndex=0,Tr.test(t))return i=x2.test(t),e[1]=AM(e[1],i),e[0]=AM(e[0],i,QM(e[1])),!0},vc,Nn=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,h,p,v=function _(g){var f=n()-r,m=g===!0,x,S,E,b;if((f>e||f<0)&&(i+=f-t),r+=f,E=r-i,x=E-o,(x>0||m)&&(b=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,o+=x+(x>=s?4:s-x),S=1),m||(l=c(_)),S)for(p=0;p<a.length;p++)a[p](E,h,b,g)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){LM&&(!h0&&S0()&&(ji=h0=window,E0=ji.document||{},jn.gsap=mn,(ji.gsapVersions||(ji.gsapVersions=[])).push(mn.version),DM(Qf||ji.GreenSockGlobals||!ji.gsap&&ji||{}),JM.forEach(KM)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(g){return setTimeout(g,o-d.time*1e3+1|0)},vc=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),vc=0,c=_c},lagSmoothing:function(g,f){e=g||1/0,t=Math.min(f||33,e)},fps:function(g){s=1e3/(g||240),o=d.time*1e3+s},add:function(g,f,m){var x=f?function(S,E,b,A){g(S,E,b,A),d.remove(x)}:g;return d.remove(g),a[m?"unshift":"push"](x),Pa(),x},remove:function(g,f){~(f=a.indexOf(g))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d})(),Pa=function(){return!vc&&Nn.wake()},Je={},y2=/^[\d.\-M][\d.\-,\s]/,S2=/["']/g,M2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(S2,"").trim():+c,r=l.substr(a+1).trim();return t},w2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},E2=function(e){var t=(e+"").split("("),i=Je[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[M2(t[1])]:w2(e).split(",").map(OM)):Je._CE&&y2.test(e)?Je._CE("",e):i},T2=function(e){return function(t){return 1-e(1-t)}},so=function(e,t){return e&&(It(e)?e:Je[e]||E2(e))||t},co=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Tn(e,function(a){Je[a]=jn[a]=s,Je[o=a.toLowerCase()]=i;for(var l in s)Je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Je[a+"."+l]=s[l]}),s},e1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},o0=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/u0*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*ZP((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:e1(a);return s=u0/s,l.config=function(c,u){return n(e,c,u)},l},a0=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:e1(i);return r.config=function(s){return n(e,s)},r};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;co(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Je.Linear.easeNone=Je.none=Je.Linear.easeIn;co("Elastic",o0("in"),o0("out"),o0());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};co("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);co("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});co("Circ",function(n){return-(PM(1-n*n)-1)});co("Sine",function(n){return n===1?1:-$P(n*YP)+1});co("Back",a0("in"),a0("out"),a0());Je.SteppedEase=Je.steps=jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-ht;return function(a){return((r*yc(0,o,a)|0)+s)*i}}};mc.ease=Je["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return b0+=n+","+n+"Params,"});var I0=function(e,t){this.id=qP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:C0,this.set=t?t.getSetter:cd},xc=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),vc||Nn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Pa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ld(this,i),!s._dp||s.parent||zM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Qi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ht||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),UM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+EM(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+EM(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ca(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?nd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ht?0:this._rts,this.totalTime(yc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ad(this),s2(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=bt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Qi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Fn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?nd(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=t2);var r=Qt;return Qt=i,R0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,TM(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,TM(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(fi(this,i),Fn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Fn(r)),this._dur||(this._zTime=-ht),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-ht)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=It(i)?i:BM,l=function(){var u=r.then;r.then=null,s&&s(),It(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){uc(this)},n})();Qn(xc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var dn=(function(n){RM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Fn(i.sortChildren),At&&Qi(i.parent||At,Er(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&VM(Er(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return dc(0,arguments,this),this},t.from=function(r,s,o){return dc(1,arguments,this),this},t.fromTo=function(r,s,o,a){return dc(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,fc(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ft(r,s,fi(this,o),1),this},t.call=function(r,s,o){return Qi(this,Ft.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ft(r,o,fi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,fc(o).immediateRender=Fn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,fc(a).immediateRender=Fn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:bt(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,p,v,_,g,f,m,x,S,E,b,A;if(this!==At&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,S=this._start,x=this._ts,f=!x,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(h=bt(u%g),u===l?(_=this._repeat,h=c):(E=bt(u/g),_=~~E,_&&_===E&&(h=c,_--),h>c&&(h=c)),E=Ca(this._tTime,g),!a&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),b&&_&1&&(h=c-h,A=1),_!==E&&!this._lock){var y=b&&E&1,w=y===(b&&_&1);if(_<E&&(y=!y),a=y?0:u%c?c:u,this._lock=1,this.render(a||(A?0:bt(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=_),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=c2(this,bt(a),bt(h)),m&&(u-=h-(h=m._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!E&&(Kn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(v=p._next,(p._act||h>=p._start)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){m=0,v&&(u+=this._zTime=-ht);break}}p=v}else{p=this._last;for(var I=r<0?r:h;p;){if(v=p._prev,(p._act||I<=p._end)&&p._ts&&m!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(I-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(I-p._start)*p._ts,s,o||Qt&&R0(p)),h!==this._time||!this._ts&&!f){m=0,v&&(u+=this._zTime=I?-ht:ht);break}}p=v}}if(m&&!s&&(this.pause(),m.render(h>=a?0:-ht)._zTime=h>=a?1:-1,this._ts))return this._start=S,ad(this),this.render(r,s,o);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ys(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Kn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(br(s)||(s=fi(this,s,r)),!(r instanceof xc)){if(pn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Gt(r))return this.addLabel(r,s);if(It(r))r=Ft.delayedCall(0,r);else return this}return this!==r?Qi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ft?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Gt(r)?this.removeLabel(r):It(r)?this.killTweensOf(r):(r.parent===this&&od(this,r),r===this._recent&&(this._recent=this._last),ro(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(Nn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=fi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ft.delayedCall(0,s||_c,o);return a.data="isPause",this._hasPause=1,Qi(this,a,fi(this,r))},t.removePause=function(r){var s=this._first;for(r=fi(this,r);s;)s._start===r&&s.data==="isPause"&&ys(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)_s!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=pi(r),l=this._first,c=br(s),u;l;)l instanceof Ft?n2(l._targets,a)&&(c?(!_s||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=fi(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,p,v=Ft.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ht,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==g&&Ra(v,g,0,1).render(v._time,!0,!0),p=1}u&&u.apply(v,d||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Qn({startAt:{time:fi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),bM(this,fi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),bM(this,fi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=bt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ro(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ro(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=di,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Qi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=bt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ra(o,o===At&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(At._ts&&(UM(At,nd(r,At)),FM=Nn.frame),Nn.frame>=MM){MM+=Un.autoSleep||120;var s=At._first;if((!s||!s._ts)&&Un.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},e})(xc);Qn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var b2=function(e,t,i,r,s,o,a){var l=new bn(this._pt,e,t,0,1,U0,null,s),c=0,u=0,d,h,p,v,_,g,f,m;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Ia(r)),o&&(m=[i,r],o(m,e,t),i=m[0],r=m[1]),h=i.match(i0)||[];d=i0.exec(r);)v=d[0],_=r.substring(c,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),v!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:v.charAt(1)==="="?lo(g,v)-g:parseFloat(v)-g,m:p&&p<4?Math.round:0},c=i0.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(w0.test(r)||f)&&(l.e=0),this._pt=l,l},L0=function(e,t,i,r,s,o,a,l,c,u){It(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:It(d)?c?e[t.indexOf("set")||!It(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,p=It(d)?c?I2:i1:F0,v;if(Gt(r)&&(~r.indexOf("random(")&&(r=Ia(r)),r.charAt(1)==="="&&(v=lo(h,r)+(en(h)||0),(v||v===0)&&(r=v))),!u||h!==r||v0)return!isNaN(h*r)&&r!==""?(v=new bn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?D2:r1,0,p),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&sd(t,r),b2.call(this,e,t,h,r,p,l||Un.stringFilter,c))},A2=function(e,t,i,r,s){if(It(e)&&(e=pc(e,s,t,i,r)),!er(e)||e.style&&e.nodeType||pn(e)||IM(e))return Gt(e)?pc(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=pc(e[a],s,t,i,r);return o},D0=function(e,t,i,r,s,o){var a,l,c,u;if(Dn[e]&&(a=new Dn[e]).init(s,a.rawVars?t[e]:A2(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new bn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ba))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},_s,v0,N0=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,v=e._dur,_=e._startAt,g=e._targets,f=e.parent,m=f&&f.data==="nested"?f.vars.targets:g,x=e._overwrite==="auto"&&!y0,S=e.timeline,E=r.easeReverse||d,b,A,y,w,I,R,F,U,z,k,B,O,J;if(S&&(!h||!s)&&(s="none"),e._ease=so(s,mc.ease),e._rEase=E&&(so(E)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||h&&!r.stagger){if(U=g[0]?xs(g[0]).harness:0,O=U&&r[U.prop],b=td(r,T0),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!p?_.render(-1,!0):_.revert(u&&v?Jf:e2),_._lazy=0),o){if(ys(e._startAt=Ft.set(g,Qn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Fn(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!a&&!p)&&e._startAt.revert(Jf),a&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&v&&!_){if(t&&(a=!1),y=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Fn(l),immediateRender:a,stagger:0,parent:f},b),O&&(y[U.prop]=O),ys(e._startAt=Ft.set(g,y)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(Jf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&Fn(l)||l&&!v,A=0;A<g.length;A++){if(I=g[A],F=I._gsap||A0(g)[A]._gsap,e._ptLookup[A]=k={},f0[F.id]&&vs.length&&ed(),B=m===g?A:m.indexOf(I),U&&(z=new U).init(I,O||b,e,B,m)!==!1&&(e._pt=w=new bn(e._pt,I,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(K){k[K]=w}),z.priority&&(R=1)),!U||O)for(y in b)Dn[y]&&(z=D0(y,b,e,B,I,m))?z.priority&&(R=1):k[y]=w=L0.call(e,I,y,"get",b[y],B,m,0,r.stringFilter);e._op&&e._op[A]&&e.kill(I,e._op[A]),x&&e._pt&&(_s=e,At.killTweensOf(I,k,e.globalTime(t)),J=!e.parent,_s=0),e._pt&&l&&(f0[F.id]=1)}R&&B0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,h&&t<=0&&S.render(di,!0,!0)},C2=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,p;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(u=h[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return v0=1,e.vars[t]="+=0",N0(e,a),v0=0,l?gc(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)d=c[p],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=Lt(i)+en(d.e)),d.b&&(d.b=u.s+en(d.b))},R2=function(e,t){var i=e[0]?xs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Aa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},P2=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(pn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pc=function(e,t,i,r,s){return It(e)?e.call(t,i,r,s):Gt(e)&&~e.indexOf("random(")?Ia(e):e},t1=b0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",n1={};Tn(t1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return n1[n]=1});var Ft=(function(n){RM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:fc(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,v=l.keyframes,_=l.defaults,g=l.scrollTrigger,f=r.parent||At,m=(pn(i)||IM(i)?br(i[0]):"length"in r)?[i]:pi(i),x,S,E,b,A,y,w,I;if(a._targets=m.length?A0(m):gc("GSAP target "+i+" not found. https://gsap.com",!Un.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||h||Zf(c)||Zf(u)){r=a.vars;var R=r.easeReverse||r.yoyoEase;if(x=a.timeline=new dn({data:"nested",defaults:_||{},targets:f&&f.data==="nested"?f.vars.targets:m}),x.kill(),x.parent=x._dp=Er(a),x._start=0,h||Zf(c)||Zf(u)){if(b=m.length,w=h&&XM(h),er(h))for(A in h)~t1.indexOf(A)&&(I||(I={}),I[A]=h[A]);for(S=0;S<b;S++)E=td(r,n1),E.stagger=0,R&&(E.easeReverse=R),I&&Aa(E,I),y=m[S],E.duration=+pc(c,Er(a),S,y,m),E.delay=(+pc(u,Er(a),S,y,m)||0)-a._delay,!h&&b===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),x.to(y,E,w?w(S,y,m):0),x._ease=Je.none;x.duration()?c=u=0:a.timeline=0}else if(v){fc(Qn(x.vars.defaults,{ease:"none"})),x._ease=so(v.ease||r.ease||"none");var F=0,U,z,k;if(pn(v))v.forEach(function(B){return x.to(m,B,">")}),x.duration();else{E={};for(A in v)A==="ease"||A==="easeEach"||P2(A,v[A],E,v.easeEach);for(A in E)for(U=E[A].sort(function(B,O){return B.t-O.t}),F=0,S=0;S<U.length;S++)z=U[S],k={ease:z.e,duration:(z.t-(S?U[S-1].t:0))/100*c},k[A]=z.v,x.to(m,k,F),F+=k.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return p===!0&&!y0&&(_s=Er(a),At.killTweensOf(m),_s=0),Qi(f,Er(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!v&&a._start===bt(f._time)&&Fn(d)&&o2(Er(a))&&f.data!=="nested")&&(a._tTime=-ht,a.render(Math.max(0,-u)||0)),g&&VM(Er(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-ht&&!u?l:r<ht?0:r,h,p,v,_,g,f,m,x;if(!c)l2(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=bt(d%_),d===l?(v=this._repeat,h=c):(g=bt(d/_),v=~~g,v&&v===g?(h=c,v--):h>c&&(h=c)),f=this._yoyo&&v&1,f&&(h=c-h),g=Ca(this._tTime,_),h===a&&!o&&this._initted&&v===g)return this._tTime=d,this;v!==g&&this.vars.repeatRefresh&&!f&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(bt(_*v),!0).invalidate()._lock=0)}if(!this._initted){if(GM(this,u?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==g))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=h<a;if(S!==this._inv){var E=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(S?-1:1)/E:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(h/c);if(this._from&&(this.ratio=m=1-m),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!g&&(Kn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(m,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&d0(this,r,s,o),Kn(this,"onUpdate")),this._repeat&&v!==g&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&d0(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ys(this,1),!s&&!(u&&!a)&&(d||a||f)&&(Kn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){vc||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||N0(this,c),u=this._ease(c/this._dur),C2(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(ld(this,0),this.parent||kM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?uc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_s&&_s.vars.overwrite!==!0)._first||uc(this),this.parent&&o!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?pi(r):a,c=this._ptLookup,u=this._pt,d,h,p,v,_,g,f;if((!s||s==="all")&&r2(a,l))return s==="all"&&(this._pt=0),uc(this);for(d=this._op=this._op||[],s!=="all"&&(Gt(s)&&(_={},Tn(s,function(m){return _[m]=1}),s=_),s=R2(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=c[f],s==="all"?(d[f]=s,v=h,p={}):(p=d[f]=d[f]||{},v=s);for(_ in v)g=h&&h[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&od(this,g,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&uc(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return dc(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return dc(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return At.killTweensOf(r,s,o)},e})(xc);Qn(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(n){Ft[n]=function(){var e=new dn,t=m0.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var F0=function(e,t,i){return e[t]=i},i1=function(e,t,i){return e[t](i)},I2=function(e,t,i,r){return e[t](r.fp,i)},L2=function(e,t,i){return e.setAttribute(t,i)},cd=function(e,t){return It(e[t])?i1:rd(e[t])&&e.setAttribute?L2:F0},r1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},D2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},U0=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},O0=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},N2=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},F2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?od(this,t,"_pt"):t.dep||(i=1),t=r;return!i},U2=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},B0=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},bn=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||r1,this.d=l||this,this.set=c||F0,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=U2,this.m=i,this.mt=s,this.tween=r},n})();Tn(b0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return T0[n]=1});jn.TweenMax=jn.TweenLite=Ft;jn.TimelineLite=jn.TimelineMax=dn;At=new dn({sortChildren:!1,defaults:mc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Un.stringFilter=P0;var oo=[],jf={},O2=[],CM=0,B2=0,l0=function(e){return(jf[e]||O2).map(function(t){return t()})},x0=function(){var e=Date.now(),t=[];e-CM>2&&(l0("matchMediaInit"),oo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ji.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),l0("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),CM=e,l0("matchMedia"))},s1=(function(){function n(t,i){this.selector=i&&g0(i),this.data=[],this._r=[],this.isReverted=!1,this.id=B2++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){It(i)&&(s=r,r=i,i=It);var o=this,a=function(){var c=yt,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=g0(s)),yt=o,d=r.apply(o,arguments),It(d)&&o._r.push(d),yt=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===It?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=yt;yt=null,i(this),yt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ft&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ft)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=oo.length;o--;)oo[o].id===this.id&&oo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),k2=(function(){function n(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){er(i)||(i={matches:i});var o=new s1(0,s||this.scope),a=o.conditions={},l,c,u;yt&&!o.selector&&(o.selector=yt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ji.matchMedia(i[c]),l&&(oo.indexOf(o)<0&&oo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(x0):l.addEventListener("change",x0)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),id={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return KM(r)})},timeline:function(e){return new dn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,i,r){Gt(e)&&(e=pi(e)[0]);var s=xs(e||{}).get,o=i?BM:OM;return i==="native"&&(i=""),e&&(t?o((Dn[t]&&Dn[t].get||s)(e,t,i,r)):function(a,l,c){return o((Dn[a]&&Dn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=pi(e),e.length>1){var r=e.map(function(u){return mn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=Dn[t],a=xs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;ba._pt=0,d.init(e,i?u+i:u,ba,0,[e]),d.render(1,d),ba._pt&&O0(1,ba)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=mn.to(e,Qn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=so(e.ease,mc.ease)),wM(mc,e||{})},config:function(e){return wM(Un,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Dn[a]&&!jn[a]&&gc(t+" effect requires "+a+" plugin.")}),r0[t]=function(a,l,c){return i(pi(a),Qn(l||{},s),c)},o&&(dn.prototype[t]=function(a,l,c){return this.add(r0[t](a,er(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Je[e]=so(t)},parseEase:function(e,t){return arguments.length?so(e,t):Je},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new dn(e),r,s;for(i.smoothChildTiming=Fn(e.smoothChildTiming),At.remove(i),i._dp=0,i._time=i._tTime=At._time,r=At._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ft&&r.vars.onComplete===r._targets[0]))&&Qi(i,r,r._start-r._delay),r=s;return Qi(At,i,0),i},context:function(e,t){return e?new s1(e,t):yt},matchMedia:function(e){return new k2(e)},matchMediaRefresh:function(){return oo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||x0()},addEventListener:function(e,t){var i=jf[e]||(jf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=jf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:g2,wrapYoyo:_2,distribute:XM,random:qM,snap:YM,normalize:m2,getUnit:en,clamp:h2,splitColor:jM,toArray:pi,selector:g0,mapRange:ZM,pipe:d2,unitize:p2,interpolate:v2,shuffle:WM},install:DM,effects:r0,ticker:Nn,updateRoot:dn.updateRoot,plugins:Dn,globalTimeline:At,core:{PropTween:bn,globals:NM,Tween:Ft,Timeline:dn,Animation:xc,getCache:xs,_removeLinkedListItem:od,reverting:function(){return Qt},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return y0=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return id[n]=Ft[n]});Nn.add(dn.updateRoot);ba=id.to({},{duration:0});var z2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},V2=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=z2(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},c0=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Gt(s)&&(l={},Tn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}V2(a,s)}}}},mn=id.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},c0("roundProps",_0),c0("modifiers"),c0("snap",YM))||id;Ft.version=dn.version=mn.version="3.15.0";LM=1;S0()&&Pa();var G2=Je.Power0,H2=Je.Power1,W2=Je.Power2,X2=Je.Power3,Y2=Je.Power4,q2=Je.Linear,$2=Je.Quad,Z2=Je.Cubic,J2=Je.Quart,K2=Je.Quint,j2=Je.Strong,Q2=Je.Elastic,e3=Je.Back,t3=Je.SteppedEase,n3=Je.Bounce,i3=Je.Sine,r3=Je.Expo,s3=Je.Circ;var o1,Ms,Da,W0,po,o3,a1,X0,a3=function(){return typeof window<"u"},Cr={},fo=180/Math.PI,Na=Math.PI/180,La=Math.atan2,l1=1e8,Y0=/([A-Z])/g,l3=/(left|right|width|margin|padding|x)/i,c3=/[\s,\(]\S/,tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},z0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},u3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},h3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},f3=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},d3=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},g1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},p3=function(e,t,i){return e.style[t]=i},m3=function(e,t,i){return e.style.setProperty(t,i)},g3=function(e,t,i){return e._gsap[t]=i},_3=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},v3=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},x3=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ct="transform",On=Ct+"Origin",y3=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Cr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=tr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ar(r,a)}):this.tfm[e]=o.x?o[e]:Ar(r,e),e===On&&(this.tfm.zOrigin=o.zOrigin);else return tr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ct)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(On,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},v1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},S3=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Y0,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=X0(),(!s||!s.isStart)&&!i[Ct]&&(v1(i),r.zOrigin&&i[On]&&(i[On]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},x1=function(e,t){var i={target:e,props:[],revert:S3,save:y3};return e._gsap||mn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},y1,V0=function(e,t){var i=Ms.createElementNS?Ms.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ms.createElement(e);return i&&i.style?i:Ms.createElement(e)},ei=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Y0,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Fa(t)||t,1)||""},c1="O,Moz,ms,Ms,Webkit".split(","),Fa=function(e,t,i){var r=t||po,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(c1[o]+e in s););return o<0?null:(o===3?"ms":o>=0?c1[o]:"")+e},G0=function(){a3()&&window.document&&(o1=window,Ms=o1.document,Da=Ms.documentElement,po=V0("div")||{style:{}},o3=V0("div"),Ct=Fa(Ct),On=Ct+"Origin",po.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",y1=!!Fa("perspective"),X0=mn.core.reverting,W0=1)},u1=function(e){var t=e.ownerSVGElement,i=V0("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Da.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Da.removeChild(i),s},h1=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},S1=function(e){var t,i;try{t=e.getBBox()}catch{t=u1(e),i=1}return t&&(t.width||t.height)||i||(t=u1(e)),t&&!t.width&&!t.x&&!t.y?{x:+h1(e,["x","cx","x1"])||0,y:+h1(e,["y","cy","y1"])||0,width:0,height:0}:t},M1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&S1(e))},Es=function(e,t){if(t){var i=e.style,r;t in Cr&&t!==On&&(t=Ct),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Y0,"-$1").toLowerCase())):i.removeAttribute(t)}},ws=function(e,t,i,r,s,o){var a=new bn(e._pt,t,i,0,1,o?_1:g1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},f1={deg:1,rad:1,turn:1},M3={grid:1,flex:1},Ts=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=po.style,l=l3.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",v,_,g,f;if(r===o||!s||f1[r]||f1[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&M1(e),(p||o==="%")&&(Cr[t]||~t.indexOf("adius")))return v=f?e.getBBox()[l?"width":"height"]:e[u],Lt(p?s/v*d:s/100*v);if(a[l?"width":"height"]=d+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ms||!_.appendChild)&&(_=Ms.body),g=_._gsap,g&&p&&g.width&&l&&g.time===Nn.time&&!g.uncache)return Lt(s/g.width*d);if(p&&(t==="height"||t==="width")){var m=e.style[t];e.style[t]=d+r,v=e[u],m?e.style[t]=m:Es(e,t)}else(p||o==="%")&&!M3[ei(_,"display")]&&(a.position=ei(e,"position")),_===e&&(a.position="static"),_.appendChild(po),v=po[u],_.removeChild(po),a.position="absolute";return l&&p&&(g=xs(_),g.time=Nn.time,g.width=_[u]),Lt(h?v*s/d:v&&s?d/v*s:0)},Ar=function(e,t,i,r){var s;return W0||G0(),t in tr&&t!=="transform"&&(t=tr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Cr[t]&&t!=="transform"?(s=wc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:hd(ei(e,On))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ud[t]&&ud[t](e,t,i)||ei(e,t)||C0(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ts(e,t,s,i)+i:s},w3=function(e,t,i,r){if(!i||i==="none"){var s=Fa(t,e,1),o=s&&ei(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=ei(e,"borderTopColor"))}var a=new bn(this._pt,e.style,t,0,1,U0),l=0,c=0,u,d,h,p,v,_,g,f,m,x,S,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ei(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=ei(e,t)||r,_?e.style[t]=_:Es(e,t)),u=[i,r],P0(u),i=u[0],r=u[1],h=i.match(ao)||[],E=r.match(ao)||[],E.length){for(;d=ao.exec(r);)g=d[0],m=r.substring(l,d.index),v?v=(v+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(v=1),g!==(_=h[c++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),g.charAt(1)==="="&&(g=lo(p,g)+S),f=parseFloat(g),x=g.substr((f+"").length),l=ao.lastIndex-x.length,x||(x=x||Un.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Ts(e,t,_,x)||0),a._pt={_next:a._pt,p:m||c===1?m:",",s:p,c:f-p,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?_1:g1;return w0.test(r)&&(a.e=0),this._pt=a,a},d1={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},E3=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=d1[i]||i,t[1]=d1[r]||r,t.join(" ")},T3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Cr[a]&&(l=1,a=a==="transformOrigin"?On:Ct),Es(i,a);l&&(Es(i,Ct),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",wc(i,1),o.uncache=1,v1(r)))}},ud={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new bn(e._pt,t,i,0,0,T3);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Mc=[1,0,0,1,0,0],w1={},E1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},p1=function(e){var t=ei(e,Ct);return E1(t)?Mc:t.substr(7).match(M0).map(Lt)},q0=function(e,t){var i=e._gsap||xs(e),r=e.style,s=p1(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Mc:s):(s===Mc&&!e.offsetParent&&e!==Da&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Da.appendChild(e)),s=p1(e),l?r.display=l:Es(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Da.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},H0=function(e,t,i,r,s,o){var a=e._gsap,l=s||q0(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],v=l[1],_=l[2],g=l[3],f=l[4],m=l[5],x=t.split(" "),S=parseFloat(x[0])||0,E=parseFloat(x[1])||0,b,A,y,w;i?l!==Mc&&(A=p*g-v*_)&&(y=S*(g/A)+E*(-_/A)+(_*m-g*f)/A,w=S*(-v/A)+E*(p/A)-(p*m-v*f)/A,S=y,E=w):(b=S1(e),S=b.x+(~x[0].indexOf("%")?S/100*b.width:S),E=b.y+(~(x[1]||x[0]).indexOf("%")?E/100*b.height:E)),r||r!==!1&&a.smooth?(f=S-c,m=E-u,a.xOffset=d+(f*p+m*_)-f,a.yOffset=h+(f*v+m*g)-m):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[On]="0px 0px",o&&(ws(o,a,"xOrigin",c,S),ws(o,a,"yOrigin",u,E),ws(o,a,"xOffset",d,a.xOffset),ws(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+E)},wc=function(e,t){var i=e._gsap||new I0(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ei(e,On)||"0",u,d,h,p,v,_,g,f,m,x,S,E,b,A,y,w,I,R,F,U,z,k,B,O,J,K,ue,pe,ce,Pe,ze,qe;return u=d=h=_=g=f=m=x=S=0,p=v=1,i.svg=!!(e.getCTM&&M1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ct]!=="none"?l[Ct]:"")),r.scale=r.rotate=r.translate="none"),A=q0(e,i.svg),i.svg&&(i.uncache?(J=e.getBBox(),c=i.xOrigin-J.x+"px "+(i.yOrigin-J.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),H0(e,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,A)),E=i.xOrigin||0,b=i.yOrigin||0,A!==Mc&&(R=A[0],F=A[1],U=A[2],z=A[3],u=k=A[4],d=B=A[5],A.length===6?(p=Math.sqrt(R*R+F*F),v=Math.sqrt(z*z+U*U),_=R||F?La(F,R)*fo:0,m=U||z?La(U,z)*fo+_:0,m&&(v*=Math.abs(Math.cos(m*Na))),i.svg&&(u-=E-(E*R+b*U),d-=b-(E*F+b*z))):(qe=A[6],Pe=A[7],ue=A[8],pe=A[9],ce=A[10],ze=A[11],u=A[12],d=A[13],h=A[14],y=La(qe,ce),g=y*fo,y&&(w=Math.cos(-y),I=Math.sin(-y),O=k*w+ue*I,J=B*w+pe*I,K=qe*w+ce*I,ue=k*-I+ue*w,pe=B*-I+pe*w,ce=qe*-I+ce*w,ze=Pe*-I+ze*w,k=O,B=J,qe=K),y=La(-U,ce),f=y*fo,y&&(w=Math.cos(-y),I=Math.sin(-y),O=R*w-ue*I,J=F*w-pe*I,K=U*w-ce*I,ze=z*I+ze*w,R=O,F=J,U=K),y=La(F,R),_=y*fo,y&&(w=Math.cos(y),I=Math.sin(y),O=R*w+F*I,J=k*w+B*I,F=F*w-R*I,B=B*w-k*I,R=O,k=J),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,f=180-f),p=Lt(Math.sqrt(R*R+F*F+U*U)),v=Lt(Math.sqrt(B*B+qe*qe)),y=La(k,B),m=Math.abs(y)>2e-4?y*fo:0,S=ze?1/(ze<0?-ze:ze):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!E1(ei(e,Ct)),O&&e.setAttribute("transform",O))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(p*=-1,m+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,m+=m<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Lt(p),i.scaleY=Lt(v),i.rotation=Lt(_)+a,i.rotationX=Lt(g)+a,i.rotationY=Lt(f)+a,i.skewX=m+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[On]=hd(c)),i.xOffset=i.yOffset=0,i.force3D=Un.force3D,i.renderTransform=i.svg?A3:y1?T1:b3,i.uncache=0,i},hd=function(e){return(e=e.split(" "))[0]+" "+e[1]},k0=function(e,t,i){var r=en(t);return Lt(parseFloat(t)+parseFloat(Ts(e,"x",i+"px",r)))+r},b3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,T1(e,t)},uo="0deg",Sc="0px",ho=") ",T1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,v=i.scaleX,_=i.scaleY,g=i.transformPerspective,f=i.force3D,m=i.target,x=i.zOrigin,S="",E=f==="auto"&&e&&e!==1||f===!0;if(x&&(d!==uo||u!==uo)){var b=parseFloat(u)*Na,A=Math.sin(b),y=Math.cos(b),w;b=parseFloat(d)*Na,w=Math.cos(b),o=k0(m,o,A*w*-x),a=k0(m,a,-Math.sin(b)*-x),l=k0(m,l,y*w*-x+x)}g!==Sc&&(S+="perspective("+g+ho),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(E||o!==Sc||a!==Sc||l!==Sc)&&(S+=l!==Sc||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ho),c!==uo&&(S+="rotate("+c+ho),u!==uo&&(S+="rotateY("+u+ho),d!==uo&&(S+="rotateX("+d+ho),(h!==uo||p!==uo)&&(S+="skew("+h+", "+p+ho),(v!==1||_!==1)&&(S+="scale("+v+", "+_+ho),m.style[Ct]=S||"translate(0, 0)"},A3=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,v=i.xOrigin,_=i.yOrigin,g=i.xOffset,f=i.yOffset,m=i.forceCSS,x=parseFloat(o),S=parseFloat(a),E,b,A,y,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Na,c*=Na,E=Math.cos(l)*d,b=Math.sin(l)*d,A=Math.sin(l-c)*-h,y=Math.cos(l-c)*h,c&&(u*=Na,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,y*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),E*=w,b*=w)),E=Lt(E),b=Lt(b),A=Lt(A),y=Lt(y)):(E=d,y=h,b=A=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Ts(p,"x",o,"px"),S=Ts(p,"y",a,"px")),(v||_||g||f)&&(x=Lt(x+v-(v*E+_*A)+g),S=Lt(S+_-(v*b+_*y)+f)),(r||s)&&(w=p.getBBox(),x=Lt(x+r/100*w.width),S=Lt(S+s/100*w.height)),w="matrix("+E+","+b+","+A+","+y+","+x+","+S+")",p.setAttribute("transform",w),m&&(p.style[Ct]=w)},C3=function(e,t,i,r,s){var o=360,a=Gt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fo:1),c=l-r,u=r+c+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*l1)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*l1)%o-~~(c/o)*o)),e._pt=h=new bn(e._pt,t,i,r,c,u3),h.e=u,h.u="deg",e._props.push(i),h},m1=function(e,t){for(var i in t)e[i]=t[i];return e},R3=function(e,t,i){var r=m1({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,h,p,v;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ct]=t,a=wc(i,1),Es(i,Ct),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ct],o[Ct]=t,a=wc(i,1),o[Ct]=c);for(l in Cr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=en(c),v=en(u),d=p!==v?Ts(i,l,c,v):parseFloat(c),h=parseFloat(u),e._pt=new bn(e._pt,a,l,d,h-d,z0),e._pt.u=v||0,e._props.push(l));m1(a,r)};Tn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ud[e>1?"border"+n:n]=function(a,l,c,u,d){var h,p;if(arguments.length<4)return h=o.map(function(v){return Ar(a,v,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},o.forEach(function(v,_){return p[v]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,d)}});var $0={name:"css",register:G0,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,h,p,v,_,g,f,m,x,S,E,b,A,y,w;W0||G0(),this.styles=this.styles||x1(e),y=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Dn[_]&&D0(_,t,i,r,e,s)))){if(p=typeof u,v=ud[_],p==="function"&&(u=u.call(i,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ia(u)),v)v(this,e,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Tr.lastIndex=0,Tr.test(c)||(g=en(c),f=en(u),f?g!==f&&(c=Ts(e,_,c,f)+f):g&&(u+=g)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),y.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Gt(c)&&~c.indexOf("random(")&&(c=Ia(c)),en(c+"")||c==="auto"||(c+=Un.units[_]||en(Ar(e,_))||""),(c+"").charAt(1)==="="&&(c=Ar(e,_))):c=Ar(e,_),h=parseFloat(c),m=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),m&&(u=u.substr(2)),d=parseFloat(u),_ in tr&&(_==="autoAlpha"&&(h===1&&Ar(e,"visibility")==="hidden"&&d&&(h=0),y.push("visibility",0,a.visibility),ws(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=tr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Cr,x){if(this.styles.save(_),w=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=ei(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=u,u=ei(e,"perspective"),I?e.style.perspective=I:Es(e,"perspective")}d=parseFloat(u)}if(S||(E=e._gsap,E.renderTransform&&!t.parseTransform||wc(e,t.parseTransform),b=t.smoothOrigin!==!1&&E.smooth,S=this._pt=new bn(this._pt,a,Ct,0,1,E.renderTransform,E,0,-1),S.dep=1),_==="scale")this._pt=new bn(this._pt,E,"scaleY",E.scaleY,(m?lo(E.scaleY,m+d):d)-E.scaleY||0,z0),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(On,0,a[On]),u=E3(u),E.svg?H0(e,u,0,b,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==E.zOrigin&&ws(this,E,"zOrigin",E.zOrigin,f),ws(this,a,_,hd(c),hd(u)));continue}else if(_==="svgOrigin"){H0(e,u,1,b,0,this);continue}else if(_ in w1){C3(this,E,_,h,m?lo(h,m+u):u);continue}else if(_==="smoothOrigin"){ws(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){R3(this,u,e);continue}}else _ in a||(_=Fa(_)||_);if(x||(d||d===0)&&(h||h===0)&&!c3.test(u)&&_ in a)g=(c+"").substr((h+"").length),d||(d=0),f=en(u)||(_ in Un.units?Un.units[_]:g),g!==f&&(h=Ts(e,_,c,f)),this._pt=new bn(this._pt,x?E:a,_,h,(m?lo(h,m+d):d)-h,!x&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?d3:z0),this._pt.u=f||0,x&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=f3):g!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=h3);else if(_ in a)w3.call(this,e,_,c,m?m+u:u);else if(_ in e)this.add(e,_,c||e[_],m?m+u:u,r,s);else if(_!=="parseTransform"){sd(_,u);continue}x||(_ in a?y.push(_,0,a[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,c||e[_])),o.push(_)}}A&&B0(this)},render:function(e,t){if(t.tween._time||!X0())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ar,aliases:tr,getSetter:function(e,t,i){var r=tr[t];return r&&r.indexOf(",")<0&&(t=r),t in Cr&&t!==On&&(e._gsap.x||Ar(e,"x"))?i&&a1===i?t==="scale"?_3:g3:(a1=i||{})&&(t==="scale"?v3:x3):e.style&&!rd(e.style[t])?p3:~t.indexOf("-")?m3:cd(e,t)},core:{_removeProperty:Es,_getMatrix:q0}};mn.utils.checkPrefix=Fa;mn.core.getStyleSaver=x1;(function(n,e,t,i){var r=Tn(n+","+e+","+t,function(s){Cr[s]=1});Tn(e,function(s){Un.units[s]="deg",w1[s]=1}),tr[r[13]]=n+","+e,Tn(i,function(s){var o=s.split(":");tr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Un.units[n]="px"});mn.registerPlugin($0);var mo=mn.registerPlugin($0)||mn,NN=mo.core.Tween;var Ec=new V;function mi(n,e,t,i,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Ec.copy(e),Ec[i]=0,Ec.normalize();let c=.5*o/(o+a),u=1-Ec.angleTo(n)/l;return Math.sign(Ec[t])===1?u*c:a/(o+a)+c+c*(1-u)}var fd=class n extends cs{constructor(e=1,t=1,i=1,r=2,s=.1){let o=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new V,c=new V,u=new V(e,t,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,v=d.length/6,_=new V,g=.5/o;for(let f=0,m=0;f<d.length;f+=3,m+=2)switch(l.fromArray(d,f),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[f+0]=u.x*Math.sign(l.x)+c.x*s,d[f+1]=u.y*Math.sign(l.y)+c.y*s,d[f+2]=u.z*Math.sign(l.z)+c.z*s,h[f+0]=c.x,h[f+1]=c.y,h[f+2]=c.z,Math.floor(f/v)){case 0:_.set(1,0,0),p[m+0]=mi(_,c,"z","y",s,i),p[m+1]=1-mi(_,c,"y","z",s,t);break;case 1:_.set(-1,0,0),p[m+0]=1-mi(_,c,"z","y",s,i),p[m+1]=1-mi(_,c,"y","z",s,t);break;case 2:_.set(0,1,0),p[m+0]=1-mi(_,c,"x","z",s,e),p[m+1]=mi(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),p[m+0]=1-mi(_,c,"x","z",s,e),p[m+1]=1-mi(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),p[m+0]=1-mi(_,c,"x","y",s,e),p[m+1]=1-mi(_,c,"y","x",s,t);break;case 5:_.set(0,0,-1),p[m+0]=mi(_,c,"x","y",s,e),p[m+1]=1-mi(_,c,"y","x",s,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var L1=vo(Tc(),1),R1=["/assets/images/hero3d/logo-facebook.png","/assets/images/hero3d/logo-instagram.png","/assets/images/hero3d/logo-paving-leads.png","/assets/images/hero3d/logo-meta.png","/assets/images/hero3d/logo-roofcoat-leads.png","/assets/images/hero3d/logo-whatsapp.png","/assets/images/hero3d/logo-ez.png"],Z0=["/assets/images/hero3d/ezra.jpg","/assets/images/hero3d/marc-friedman.jpg","/assets/images/hero3d/dani-twillo.jpg","/assets/images/hero3d/yael-rubinson.jpg","/assets/images/hero3d/job-roof.jpg","/assets/images/hero3d/job-paving.jpg"],U3="#0c2733";function O3(n,e){let i=document.createElement("canvas");i.width=i.height=512;let r=i.getContext("2d"),s=l=>{if(r.fillStyle=U3,r.fillRect(0,0,512,512),!l)return;let c=512/2,u=512*.4;r.save(),r.beginPath(),r.arc(c,c,u,0,Math.PI*2),r.clip();let d=Math.max(u*2/l.width,u*2/l.height);r.drawImage(l,c-l.width*d/2,c-l.height*d/2,l.width*d,l.height*d),r.restore(),r.beginPath(),r.arc(c,c,u,0,Math.PI*2),r.strokeStyle="rgba(24,184,248,0.5)",r.lineWidth=4,r.stroke()};s();let o=new Xl(i);o.colorSpace=un,o.anisotropy=e;let a=new Image;return a.onload=()=>{s(a),o.needsUpdate=!0},a.src=n,o}var bc=16,Ac=12,P1=[-3.5,-2,-.8,.8,2,3.5];function I1(){let n=(0,pd.useRef)(null);return(0,pd.useEffect)(()=>{if(!n.current)return;let e=n.current,t=new kl,i=e.clientWidth/e.clientHeight,r=new hn(45,i,.1,100);r.position.set(0,0,35);let s=new Yf({antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setSize(e.clientWidth,e.clientHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.outputColorSpace=un,e.appendChild(s.domElement);let o=new Ri;t.add(o);let a=new Kl(16777215,1.4);t.add(a);let l=new Ks(16777215,2);l.position.set(10,20,15),t.add(l);let c=new Ks(15659775,.8);c.position.set(-10,-5,10),t.add(c);let u=new Ks(16777215,.6);u.position.set(0,0,-10),t.add(u);let d=new fd(1.6,1.6,1.6,4,.14),h=new _a({color:796467,roughness:.3,metalness:.05}),p=[],v=[],_=(ae,De,Ie,et)=>{let $e=new Ri,Oe=O3(ae,s.capabilities.getMaxAnisotropy());v.push(Oe);let mt=new _a({map:Oe,color:16777215,roughness:.3,metalness:.05}),P=new wn(d,mt);P.rotation.x=Math.PI/2,P.scale.set(De,De,De),$e.add(P);let le=Ie/et*Math.PI*2,Ke=bc*.7,it=Ac*.7,ye=Math.cos(le)*Ke*(.5+Math.random()*.5),C=Math.sin(le)*it*(.5+Math.random()*.5),M=(Math.random()-.5)*3;$e.position.set(ye,C,M),$e.scale.set(0,0,0),o.add($e);let D=Ie%P1.length,X=P1[D];p.push({mesh:$e,velocity:new V(0,0,0),position:new V(ye,C,M),radius:De,baseRotationSpeed:(Math.random()-.5)*.3,parallaxStrength:X,floatPhase:Math.random()*Math.PI*2,floatSpeed:.4+Math.random()*.5,floatAmplitude:.12+Math.random()*.18}),mo.to($e.scale,{x:1,y:1,z:1,duration:.8,delay:.08*Ie,ease:"back.out(1.4)"})},g=Z0.length+R1.length;Z0.forEach((ae,De)=>_(ae,3.8,De,g)),R1.forEach((ae,De)=>_(ae,3,De+Z0.length,g));let f=new Xe,m=new Xe,x=new jl,S=new ci(new V(0,0,1),0),E=new V,b=null,A=null,y=(ae,De)=>{let Ie=e.getBoundingClientRect();f.x=(ae-Ie.left)/Ie.width*2-1,f.y=-((De-Ie.top)/Ie.height)*2+1,x.setFromCamera(f,r),x.ray.intersectPlane(S,E)},w=()=>{let De=x.intersectObjects(o.children,!0).find(Ie=>Ie.object.parent instanceof Ri);return De&&De.object.parent&&p.find(Ie=>Ie.mesh===De.object.parent)||null},I=ae=>{ae!==A&&(A&&mo.to(A.mesh.scale,{x:1,y:1,z:1,duration:.25}),A=ae,ae?(e.style.cursor="grab",mo.to(ae.mesh.scale,{x:1.12,y:1.12,z:1.12,duration:.3})):e.style.cursor="default")},R=(ae,De)=>{y(ae,De),b||I(w())},F=()=>{A&&(b=A,e.style.cursor="grabbing",mo.to(b.mesh.scale,{x:.95,y:.95,z:.95,duration:.1}))},U=()=>{b&&mo.to(b.mesh.scale,{x:1.12,y:1.12,z:1.12,duration:.4,ease:"elastic.out(1, 0.5)"}),b=null,e.style.cursor=A?"grab":"default"},z=ae=>R(ae.clientX,ae.clientY),k=()=>F(),B=()=>U(),O=ae=>{ae.touches[0]&&(y(ae.touches[0].clientX,ae.touches[0].clientY),I(w()),F())},J=ae=>{ae.touches[0]&&R(ae.touches[0].clientX,ae.touches[0].clientY)},K=()=>U();window.addEventListener("mousemove",z),window.addEventListener("mousedown",k),window.addEventListener("mouseup",B),e.addEventListener("touchstart",O,{passive:!0}),e.addEventListener("touchmove",J,{passive:!0}),e.addEventListener("touchend",K);let ue=new Ql,pe,ce=new V,Pe=new Xe,ze=new Xe,qe=160,$=16,ne=new Xe,ie=new Xe,Ue=()=>{pe=requestAnimationFrame(Ue);let ae=ue.getDelta(),De=Math.min(ae,.05),Ie=ue.elapsedTime;ae>0&&(ie.x=(f.x-ne.x)/De,ie.y=(f.y-ne.y)/De),ne.copy(f);let et=-qe*(Pe.x-f.x)-$*ze.x,$e=-qe*(Pe.y-f.y)-$*ze.y;ze.x+=et*De,ze.y+=$e*De,Pe.x+=ze.x*De,Pe.y+=ze.y*De,m.lerp(f,.05);let Oe=m.x*.1+Zi.clamp(ie.x,-1,1)*.04,mt=-m.y*.07-Zi.clamp(ie.y,-1,1)*.03;o.rotation.y=Zi.lerp(o.rotation.y,Oe,.08),o.rotation.x=Zi.lerp(o.rotation.x,mt,.08),r.position.x=Zi.lerp(r.position.x,-Pe.x*.6,.05),r.position.y=Zi.lerp(r.position.y,Pe.y*.4,.05);for(let P=0;P<p.length;P++){let le=p[P];if(le===b)le.velocity.x+=(E.x-le.position.x)*8*De,le.velocity.y+=(E.y-le.position.y)*8*De,le.velocity.multiplyScalar(.7);else{let X=le.position.x,Z=le.position.y,Se=.8+Math.sqrt(X*X+Z*Z)*.12;le.velocity.x-=X*Se*De,le.velocity.y-=Z*Se*De,le.velocity.y-=.5*De;let se=le.position.distanceTo(E);if(se<7){let we=(7-se)*15*De,Ae=Math.atan2(le.position.y-E.y,le.position.x-E.x);le.velocity.x+=Math.cos(Ae)*we,le.velocity.y+=Math.sin(Ae)*we}for(let we=P+1;we<p.length;we++){let Ae=p[we],j=le.position.x-Ae.position.x,te=le.position.y-Ae.position.y,Me=le.position.z-Ae.position.z,ge=Math.sqrt(j*j+te*te+Me*Me),me=le.radius+Ae.radius+.3;if(ge<me&&ge>0){let Be=(me-ge)*25*De,L=j/ge,oe=te/ge;le.velocity.x+=L*Be,le.velocity.y+=oe*Be,Ae.velocity.x-=L*Be,Ae.velocity.y-=oe*Be}}le.velocity.multiplyScalar(.93)}ce.copy(le.velocity).multiplyScalar(De*12),le.position.add(ce),le.position.x>bc?(le.position.x=bc,le.velocity.x*=-.5):le.position.x<-bc&&(le.position.x=-bc,le.velocity.x*=-.5),le.position.y>Ac?(le.position.y=Ac,le.velocity.y*=-.5):le.position.y<-Ac&&(le.position.y=-Ac,le.velocity.y*=-.5);let Ke=Math.sin(Ie*le.floatSpeed+le.floatPhase)*le.floatAmplitude,it=Math.cos(Ie*le.floatSpeed*.7+le.floatPhase)*le.floatAmplitude*.5,ye=Pe.x*le.parallaxStrength,C=Pe.y*le.parallaxStrength*.7,M=Math.abs(le.parallaxStrength)*Pe.x*.15*Math.sign(le.parallaxStrength);le.mesh.position.set(le.position.x+ye+it,le.position.y+C+Ke,le.position.z+M);let D=le.mesh.children[0];if(D){let X=ze.y*.015*le.parallaxStrength,Z=-ze.x*.015*le.parallaxStrength;D.rotation.x=Zi.lerp(D.rotation.x,Math.PI/2-le.velocity.y*.3+X,.06),D.rotation.z=Zi.lerp(D.rotation.z,le.velocity.x*.3+le.baseRotationSpeed*.1+Z,.06)}}s.render(t,r)};pe=requestAnimationFrame(Ue);let Le=()=>{e&&(r.aspect=e.clientWidth/e.clientHeight,r.updateProjectionMatrix(),s.setSize(e.clientWidth,e.clientHeight))};return window.addEventListener("resize",Le),()=>{window.removeEventListener("mousemove",z),window.removeEventListener("mousedown",k),window.removeEventListener("mouseup",B),e.removeEventListener("touchstart",O),e.removeEventListener("touchmove",J),e.removeEventListener("touchend",K),window.removeEventListener("resize",Le),cancelAnimationFrame(pe),v.forEach(ae=>ae.dispose()),t.traverse(ae=>{ae instanceof wn&&(ae.geometry.dispose(),(Array.isArray(ae.material)?ae.material:[ae.material]).forEach(Ie=>{Ie.map&&Ie.map.dispose(),Ie.dispose()}))}),d.dispose(),h.dispose(),s.dispose(),s.domElement.parentNode===e&&e.removeChild(s.domElement)}},[]),(0,L1.jsx)("div",{ref:n,style:{width:"100%",height:"100%"}})}var N1=vo(Tc(),1),J0=document.querySelector("[data-hero3d]");if(J0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){let n=document.createElement("div");n.className="ezh4__mount",J0.prepend(n),(0,D1.createRoot)(n).render((0,N1.jsx)(I1,{})),requestAnimationFrame(()=>J0.classList.add("is-ready"))}})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
