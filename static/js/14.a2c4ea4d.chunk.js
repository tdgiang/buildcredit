(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[14],{1312:function(e,t,n){"use strict";function r(e){return function(){return null}}n.d(t,"a",(function(){return r}))},1382:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(280),a=function(){return{type:r.b}},o=function(){return{type:r.a}}},1384:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=r.useState(e),n=t[0],a=t[1],o=e||n;return r.useEffect((function(){null==n&&a("mui-".concat(Math.round(1e5*Math.random())))}),[n]),o}},1388:function(e,t,n){"use strict";function r(e,t,n,r,a){return null}n.d(t,"a",(function(){return r}))},1391:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},1392:function(e,t,n){var r=n(1396).default;function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var o={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=c?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o},e.exports.default=e.exports,e.exports.__esModule=!0},1393:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(1397)},1396:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},1397:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return a.a})),n.d(t,"createSvgIcon",(function(){return o.a})),n.d(t,"debounce",(function(){return c.a})),n.d(t,"deprecatedPropType",(function(){return i})),n.d(t,"isMuiElement",(function(){return s.a})),n.d(t,"ownerDocument",(function(){return u.a})),n.d(t,"ownerWindow",(function(){return l.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return h.a})),n.d(t,"useControlled",(function(){return m.a})),n.d(t,"useEventCallback",(function(){return p.a})),n.d(t,"useForkRef",(function(){return g.a})),n.d(t,"unstable_useId",(function(){return b.a})),n.d(t,"useIsFocusVisible",(function(){return v.a}));var r=n(17),a=n(109),o=n(69),c=n(147);function i(e,t){return function(){return null}}var s=n(211),u=n(48),l=n(213),d=n(1312),f=n(108),h=n(1388),m=n(212),p=n(60),g=n(30),b=n(1384),v=n(375)},1440:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(8),a=n(25),o=n(0),c=n.n(o),i=(n(4),n(1319)),s=n(1308),u=n(1379),l=n(1380),d=n(1448),f=n(1360),h=n(1441),m=n.n(h),p=n(1442),g=n.n(p);Object(i.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"25ch"}}}));function b(e){var t=e.label,n=e.handleChange,o=e.name,i=e.value,h=c.a.useState({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),p=Object(a.a)(h,2),b=p[0],v=p[1];return c.a.createElement(f.a,{variant:"outlined",fullWidth:!0},c.a.createElement(l.a,null,t),c.a.createElement(u.a,{label:t,type:b.showPassword?"text":"password",onChange:function(e){n(e)},value:i,required:!0,name:o,endAdornment:c.a.createElement(d.a,{position:"end"},c.a.createElement(s.a,{"aria-label":"toggle password visibility",onClick:function(){v(Object(r.a)(Object(r.a)({},b),{},{showPassword:!b.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end"},b.showPassword?c.a.createElement(m.a,null):c.a.createElement(g.a,null))),labelWidth:70}))}},1441:function(e,t,n){"use strict";var r=n(1391),a=n(1392);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),c=(0,r(n(1393)).default)(o.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=c},1442:function(e,t,n){"use strict";var r=n(1391),a=n(1392);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),c=(0,r(n(1393)).default)(o.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=c},1448:function(e,t,n){"use strict";var r=n(1),a=n(6),o=n(0),c=(n(5),n(4)),i=n(373),s=n(11),u=n(136),l=o.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,d=e.component,f=void 0===d?"div":d,h=e.disablePointerEvents,m=void 0!==h&&h,p=e.disableTypography,g=void 0!==p&&p,b=e.position,v=e.variant,k=Object(a.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=Object(u.b)()||{},x=v;return v&&y.variant,y&&!x&&(x=y.variant),o.createElement(u.a.Provider,{value:null},o.createElement(f,Object(r.a)({className:Object(c.a)(s.root,l,m&&s.disablePointerEvents,y.hiddenLabel&&s.hiddenLabel,"filled"===x&&s.filled,{start:s.positionStart,end:s.positionEnd}[b],"dense"===y.margin&&s.marginDense),ref:t},k),"string"!==typeof n||g?n:o.createElement(i.a,{color:"textSecondary"},n)))}));t.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(l)},1501:function(e,t,n){"use strict";n.r(t);var r=n(21),a=n(3),o=n.n(a),c=n(8),i=n(12),s=n(25),u=n(0),l=n.n(u),d=n(44),f=n(1365),h=n(1362),m=n(120),p=n(145),g=n(1382),b=n(58),v=n(83),k=n(279),y=n(47),x=n(1377),w=n(146),_=n(1440);t.default=Object(p.b)((function(e){return{}}),{showLoading:g.b,hideLoading:g.a})((function(e){var t=Object(u.useState)({}),n=Object(s.a)(t,2),a=n[0],g=n[1],E=Object(y.g)(),M=Object(x.a)().t,O=Object(w.a)(),j=O.user,P=O.reloadDataUser,S=(Object(p.c)(),function(){var t=Object(i.a)(o.a.mark((function t(n){var r,i,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(k.k)(a),!j.is_have_secure_code){t.next=29;break}if(!(r.old_secret_key&&r.new_secret_key&&r.repeatPassword)){t.next=26;break}if(4!=r.old_secret_key.length||4!=r.new_secret_key.length||4!=r.repeatPassword.length){t.next=23;break}if(r.new_secret_key!=r.repeatPassword){t.next=20;break}return e.showLoading(),t.next=8,Object(v.b)(Object(c.a)({},r));case 8:if(i=t.sent,e.hideLoading(),200!=i.data.code){t.next=17;break}return E.push("/dashboard"),t.next=14,P();case 14:b.c.success("\u0110\u1ed5i m\u1eadt kh\u1ea9u giao d\u1ecbch th\xe0nh c\xf4ng!",{theme:"colored"}),t.next=18;break;case 17:b.c.error(M(i.data.error),{theme:"colored"});case 18:t.next=21;break;case 20:b.c.warning("M\u1eadt kh\u1ea9u m\u1edbi v\xe0 m\u1eadt kh\u1ea9u nh\u1eadp l\u1ea1i  kh\xf4ng tr\xf9ng nhau",{theme:"colored"});case 21:t.next=24;break;case 23:b.c.warning("M\u1eadt kh\u1ea9u giao d\u1ecbch g\u1ed3m 4 ch\u1eef s\u1ed1",{theme:"colored"});case 24:t.next=27;break;case 26:b.c.warning("D\u1eef li\u1ec7u nh\u1eadp v\xe0o kh\xf4ng h\u1ee3p l\u1ec7",{theme:"colored"});case 27:t.next=54;break;case 29:if(!r.new_secret_key||!r.repeatPassword){t.next=53;break}if(4!=r.new_secret_key.length||4!=r.repeatPassword.length){t.next=50;break}if(r.new_secret_key!=r.repeatPassword){t.next=47;break}return e.showLoading(),t.next=35,Object(v.e)(Object(c.a)({},r));case 35:if(s=t.sent,e.hideLoading(),200!=s.data.code){t.next=44;break}return E.push("/dashboard"),t.next=41,P();case 41:b.c.success("T\u1ea1o m\u1eadt kh\u1ea9u giao d\u1ecbch th\xe0nh c\xf4ng!",{theme:"colored"}),t.next=45;break;case 44:b.c.error(M(s.data.error),{theme:"colored"});case 45:t.next=48;break;case 47:b.c.warning("M\u1eadt kh\u1ea9u m\u1edbi v\xe0 m\u1eadt kh\u1ea9u nh\u1eadp l\u1ea1i  kh\xf4ng tr\xf9ng nhau",{theme:"colored"});case 48:t.next=51;break;case 50:b.c.warning("M\u1eadt kh\u1ea9u giao d\u1ecbch g\u1ed3m 4 ch\u1eef s\u1ed1",{theme:"colored"});case 51:t.next=54;break;case 53:b.c.warning("D\u1eef li\u1ec7u nh\u1eadp v\xe0o kh\xf4ng h\u1ee3p l\u1ec7",{theme:"colored"});case 54:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),L=function(e){e.persist(),g(Object(c.a)(Object(c.a)({},a),{},Object(r.a)({},e.target.name,e.target.value)))};console.log("user",j.is_have_secure_code);var D=a.old_secret_key,C=a.new_secret_key,z=a.repeatPassword;return l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(m.a,{routeSegments:[{name:j.is_have_secure_code?"\u0110\u1ed5i m\u1eadt kh\u1ea9u giao d\u1ecbch":"T\u1ea1o m\u1eadt kh\u1ea9u giao d\u1ecbch"}]})),l.a.createElement(m.o,null,l.a.createElement(d.ValidatorForm,{onSubmit:S,onError:function(){return null}},l.a.createElement(f.a,{container:!0,spacing:3},j.is_have_secure_code&&l.a.createElement(f.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(_.a,{name:"old_secret_key",label:"M\u1eadt kh\u1ea9u giao d\u1ecbch c\u0169 *",handleChange:L,value:D,validators:["required","minStringLength:4","maxStringLength:4"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","M\u1eadt kh\u1ea9u GD g\u1ed3m 4 ch\u1eef s\u1ed1","M\u1eadt kh\u1ea9u GD g\u1ed3m 4 ch\u1eef s\u1ed1"]})),l.a.createElement(f.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(_.a,{name:"new_secret_key",label:"M\u1eadt kh\u1ea9u giao d\u1ecbch m\u1edbi *",handleChange:L,value:C,validators:["required","minStringLength:4","maxStringLength:4"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","M\u1eadt kh\u1ea9u GD g\u1ed3m 4 ch\u1eef s\u1ed1","M\u1eadt kh\u1ea9u GD g\u1ed3m 4 ch\u1eef s\u1ed1"]})),l.a.createElement(f.a,{item:!0,lg:6,md:6,sm:12,xs:12},l.a.createElement(_.a,{name:"repeatPassword",label:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u giao d\u1ecbch *",handleChange:L,value:z,validators:["required","minStringLength:4","maxStringLength:4"],errorMessages:["Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u01b0\u1eddng n\xe0y","M\u1eadt kh\u1ea9u GD g\u1ed3m 4 ch\u1eef s\u1ed1","M\u1eadt kh\u1ea9u GD g\u1ed3m 4 ch\u1eef s\u1ed1"]}))),l.a.createElement(f.a,{xs:12,style:{marginTop:20},container:!0,justify:"flex-end"},l.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit"},l.a.createElement("span",{className:"capitalize"},"C\u1eadp nh\u1eadt")))))))}))}}]);