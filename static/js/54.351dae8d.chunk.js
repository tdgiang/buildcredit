(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[54],{1529:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(0),l=a.n(r),c=a(1353),o=a(1349),i=a(381),s=a.n(i),m=a(1481),u=a(8),d=a(21),b=a(1308),p=a(1352),h=a(1373),f=a(1378),g=a(1413),v=a(120),E=a(25),x=a(1479),y=a(1525),O=a(1366),j=a(1362),w=a(51),N=a(141),S=a(1319),k=a(4),C=a(87),z=(a(3),a(12),a(22),Object(r.createContext)({notifications:[],deleteNotification:function(){},clearNotifications:function(){},getNotifications:function(){},createNotification:function(){}}),["palette"]),_=(Object(S.a)((function(e){e.palette,Object(n.a)(e,z);return{notification:{width:"var(--sidenav-width)","& .notification__topbar":{height:"var(--topbar-height)"}},notificationCard:{"&:hover":{"& .delete-button":{cursor:"pointer",display:"unset",right:0,marginTop:6,top:0,zIndex:2},"& .card__topbar__time":{display:"none"}},"& .delete-button":{display:"none",position:"absolute",right:0,marginTop:9},"& .card__topbar__button":{borderRadius:15,opacity:.9}}}})),a(57)),I=a(146),D=["palette"],R=Object(S.a)((function(e){var t,a=e.palette,r=Object(n.a)(e,D);return{topbar:{top:0,zIndex:96,transition:"all 0.3s ease",background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))","& .topbar-hold":(t={backgroundColor:a.primary.main,height:80,paddingLeft:18,paddingRight:20},Object(d.a)(t,r.breakpoints.down("sm"),{paddingLeft:16,paddingRight:16}),Object(d.a)(t,r.breakpoints.down("xs"),{paddingLeft:14,paddingRight:16}),t),"& .fixed":{boxShadow:r.shadows[8],height:64}},userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}})),L=l.a.memo((function(){var e,t,a=Object(_.a)(),n=R(),r=Object(C.a)(),c=r.settings,i=r.updateSettings,s=Object(I.a)(),m=s.logout,d=s.user,E=Object(o.a)(a.breakpoints.down("md")),x=null===c||void 0===c||null===(e=c.layout1Settings)||void 0===e||null===(t=e.topbar)||void 0===t?void 0:t.fixed;return l.a.createElement("div",{className:n.topbar},l.a.createElement("div",{className:Object(k.a)({"topbar-hold":!0,fixed:x})},l.a.createElement("div",{className:"flex justify-between items-center h-full"},l.a.createElement("div",{className:"flex"},l.a.createElement(b.a,{onClick:function(){var e,t,a=c.layout1Settings;e=E?"close"===a.leftSidebar.mode?"mobile":"close":"full"===a.leftSidebar.mode?"close":"full",t={mode:e},i({layout1Settings:{leftSidebar:Object(u.a)({},t)}})},className:"hide-on-pc"},l.a.createElement(p.a,null,"menu")),l.a.createElement("div",{className:"hide-on-mobile"})),l.a.createElement("div",{className:"flex items-center"},l.a.createElement(v.k,{menuButton:l.a.createElement("div",{className:n.userMenu},l.a.createElement(h.a,{xsDown:!0},l.a.createElement("span",null,"Hi ",l.a.createElement("strong",null,d.full_name))),l.a.createElement(f.a,{className:"cursor-pointer",src:d.avatar}))},l.a.createElement(g.a,null,l.a.createElement(w.b,{className:n.menuItem,to:"/my-profile"},l.a.createElement(p.a,null," person "),l.a.createElement("span",{className:"pl-4"}," T\xe0i kho\u1ea3n "))),l.a.createElement(g.a,null,l.a.createElement(w.b,{className:n.menuItem,to:"/change-password"},l.a.createElement(p.a,null," settings "),l.a.createElement("span",{className:"pl-4"},"\u0110\u1ed5i m\u1eadt kh\u1ea9u"))),l.a.createElement(g.a,null,l.a.createElement(w.b,{className:n.menuItem,to:"/create-code"},l.a.createElement(p.a,null," password"),l.a.createElement("span",{className:"pl-4"},"M\u1eadt kh\u1ea9u giao d\u1ecbch"))),l.a.createElement(g.a,{onClick:m,className:n.menuItem},l.a.createElement(p.a,{color:"error"}," power_settings_new "),l.a.createElement("span",{className:"pl-4"}," \u0110\u0103ng xu\u1ea5t ")))))))})),T=a(396),M=["palette"],P=Object(S.a)((function(e){e.palette;var t=Object(n.a)(e,M);return{scrollable:{paddingLeft:20,paddingRight:20},sidenavMobileOverlay:Object(d.a)({position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1},t.breakpoints.up("lg"),{display:"none"})}})),B=function(e){var t=e.children,a=P(),n=Object(C.a)(),c=n.settings,o=n.updateSettings,i=Object(r.useState)([]),m=Object(E.a)(i,2),b=m[0],p=m[1],h=Object(I.a)().user;Object(r.useEffect)((function(){f()}),[]);var f=function(){console.log("user",h),p(T.b)};return l.a.createElement(r.Fragment,null,l.a.createElement(s.a,{options:{suppressScrollX:!0},className:Object(k.a)("relative px-4",a.scrollable)},t,l.a.createElement(v.n,{items:b})),l.a.createElement("div",{onClick:function(){return function(e){var t=c.activeLayout+"Settings",a=c[t];o(Object(u.a)(Object(u.a)({},c),{},Object(d.a)({},t,Object(u.a)(Object(u.a)({},a),{},{leftSidebar:Object(u.a)(Object(u.a)({},a.leftSidebar),e)}))))}({mode:"close"})},className:a.sidenavMobileOverlay}))},H=(a(632),["palette"]),W=Object(S.a)((function(e){e.palette,Object(n.a)(e,H);return{brand:{padding:"20px 18px 20px 29px"},hideOnCompact:{display:"none"}}})),F=function(e){var t=e.children,a=W(),n=Object(C.a)().settings.layout1Settings.leftSidebar.mode;return l.a.createElement("div",{className:Object(k.a)("flex items-center justify-between",a.brand)},l.a.createElement(w.b,{to:"/"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement("span",{className:Object(k.a)(Object(d.a)({"text-18 ml-2 font-medium sidenavHoverShow":!0},a.hideOnCompact,"compact"===n)),style:{color:"white"}},"BIZ.DCV"))),l.a.createElement("div",{className:Object(k.a)(Object(d.a)({sidenavHoverShow:!0},a.hideOnCompact,"compact"===n))},t||null))},G=a(1526),U=["palette"],X=Object(S.a)((function(e){var t=e.palette,a=Object(n.a)(e,U);return{sidenav:function(e){var n=e.width,r=e.primaryRGB,l=e.bgImgURL;return{position:"fixed",top:0,left:0,height:"100vh",width:n,boxShadow:a.shadows[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(r,", 0.96), rgba(").concat(r,", 0.96)), url(").concat(l,")"),"&:hover":{width:"var(--sidenav-width)","& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}},hideOnCompact:{display:"none"},userInfo:{}}})),A=l.a.memo((function(){var e=Object(_.a)(),t=Object(C.a)(),a=t.settings,n=t.updateSettings,r=a.layout1Settings.leftSidebar,c=r.mode,o=Object(N.b)(e.palette.primary.main),i=X(Object(u.a)(Object(u.a)({},r),{},{width:function(){switch(c){case"compact":return"var(--sidenav-compact-width)";default:return"var(--sidenav-width)"}}(),primaryRGB:o}));return l.a.createElement("div",{className:i.sidenav},l.a.createElement("div",{className:"flex-column relative h-full"},l.a.createElement(F,null,l.a.createElement(h.a,{smDown:!0},l.a.createElement(G.a,{onChange:function(){var e;e={mode:"compact"===c?"full":"compact"},n({layout1Settings:{leftSidebar:Object(u.a)({},e)}})},checked:"full"!==r.mode,color:"secondary",size:"small"}))),l.a.createElement(B,null)))})),J=a(1527),$=a(1435),V=["palette"],Z=Object(S.a)((function(e){e.palette,Object(n.a)(e,V);return{footer:{minHeight:"var(--topbar-height)","@media (max-width: 499px)":{display:"table",width:"100%",minHeight:"auto",padding:"1rem 0","& .container":{flexDirection:"column !important","& a":{margin:"0 0 16px !important"}}}},appbar:{zIndex:96}}})),q=function(){var e=Z(),t=Object(_.a)(),a=Object(C.a)().settings,n=a.themes[a.footer.theme]||t;return l.a.createElement(c.a,{theme:n},l.a.createElement(J.a,{color:"primary",position:"static",className:e.appbar},l.a.createElement($.a,{className:Object(k.a)("flex items-center",e.footer)},l.a.createElement("div",{className:"flex items-center container w-full"},l.a.createElement("a",{href:"https://material-ui.com/store/items/matx-pro-react-dashboard-template/"},l.a.createElement(j.a,{variant:"contained",color:"secondary"},"Get MatX Pro")),l.a.createElement("span",{className:"m-auto"}),l.a.createElement("p",{className:"m-0"},"Design and Developed by"," ",l.a.createElement("a",{href:"http://ui-lib.com"},"UI Lib"))))))},K=["palette"],Q=Object(S.a)((function(e){e.palette,Object(n.a)(e,K);return{toggle:{position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}}}})),Y=function(){var e,t=Q(),a=Object(C.a)(),n=a.settings,r=a.updateSettings;return l.a.createElement("div",{className:Object(k.a)((e={},Object(d.a)(e,t.toggle,!0),Object(d.a)(e,"open",n.secondarySidebar.open),e))},n.secondarySidebar.open&&l.a.createElement(b.a,{onClick:function(){r({secondarySidebar:{open:!n.secondarySidebar.open}})},size:"small","aria-label":"toggle"},l.a.createElement(p.a,null,"close")))},ee=a(1555),te=a(1528),ae=a(11),ne=Object(ae.a)((function(e){return{badge:{top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}}}))(x.a),re=["palette"],le=Object(S.a)((function(e){var t=e.palette;Object(n.a)(e,re);return{label:{color:t.secondary.main,backgroundColor:t.primary.dark,fontWeight:700,transform:"rotate(90deg)",marginBottom:"2.5rem",padding:".25rem .5rem",borderRadius:"4px",cursor:"pointer",letterSpacing:"1.5px",fontSize:"1rem","&:hover, &.open":{backgroundColor:t.secondary.main,color:t.secondary.contrastText}},helpText:{margin:"0px .5rem 1rem"},maxCustomizer:{position:"fixed",top:0,right:0,zIndex:50},customizerCloseButton:{position:"absolute",right:8,top:8},layoutBox:{"&:hover":{"& .layout-name":{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"rgba(0,0,0,0.3)",zIndex:12}}}}})),ce=[{name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98},topbar:{theme:"blueDark",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Compact Sidebar",thumbnail:"/assets/images/screenshots/layout5-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"whiteBlue",fixed:!0}}}},{name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout1-blue-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"blueDark",fixed:!0}}}},{name:"Dark Theme",thumbnail:"/assets/images/screenshots/layout3-customizer.png",isPro:!0,options:{activeLayout:"layout2",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"purpleDark1",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Horizontal Navigation",thumbnail:"/assets/images/screenshots/layout4-customizer.png",isPro:!0,options:{activeLayout:"layout2",activeTheme:"purple1",layout2Settings:{mode:"full"},footer:{theme:"slateDark1"}}}],oe=function(e){var t,a=Object(r.useState)(!1),n=Object(E.a)(a,2),o=n[0],i=n[1],m=Object(r.useState)(0),h=Object(E.a)(m,2),f=h[0],g=h[1],v=le(),x=Object(C.a)(),w=x.settings,N=x.updateSettings,S=function(){i(!o)},z=function(e){g(e)},_=Object(u.a)({},w.themes[w.activeTheme]);return l.a.createElement(r.Fragment,null,l.a.createElement(ee.a,{title:"Theme Settings",placement:"left"},l.a.createElement("span",{className:Object(k.a)((t={},Object(d.a)(t,v.label,!0),Object(d.a)(t,"open",o),t)),onClick:S},"DEMOS")),l.a.createElement(c.a,{theme:_},l.a.createElement(y.a,{anchor:"right",open:o,variant:"temporary",onClose:S,ModalProps:{keepMounted:!0}},l.a.createElement("div",{className:Object(k.a)("flex-column w-320 pb-8 elevation-z12 h-full-screen bg-default",v.maxCustomizer)},l.a.createElement("div",{className:"flex items-center px-5 py-4 mb-4 min-h-64 elevation-z6"},l.a.createElement(p.a,{color:"primary"},"settings"),l.a.createElement("h5",{className:"mb-0 ml-2"},"Theme Settings"),l.a.createElement(b.a,{onClick:S,className:v.customizerCloseButton},l.a.createElement(p.a,null,"close"))),l.a.createElement("div",{className:"px-6 mb-4 flex"},l.a.createElement(j.a,{variant:"outlined",color:0===f?"secondary":"primary",onClick:function(){return z(0)},className:"mr-4"},"Demos"),l.a.createElement(j.a,{variant:"outlined",color:1===f?"secondary":"primary",onClick:function(){return z(1)}},"Settings")),l.a.createElement(s.a,{options:{suppressScrollX:!0},className:"px-4"},0===f&&l.a.createElement("div",{className:"mb-8 mx-2"},l.a.createElement("div",{className:"text-muted"},"Layouts"),l.a.createElement("div",{className:"flex-column"},ce.map((function(e){return l.a.createElement(ne,{color:"secondary",className:Object(k.a)("w-full my-3 max-h-152 cursor-pointer",v.layoutBox),badgeContent:"Pro",invisible:!e.isPro,key:e.name},l.a.createElement(O.a,{className:"relative",onClick:function(){return N(e.options)},elevation:4},l.a.createElement("div",{className:"layout-name hidden"},l.a.createElement(j.a,{variant:"contained",color:"secondary"},e.name)),l.a.createElement("img",{className:"w-full",src:e.thumbnail,alt:e.name})))})))),1===f&&l.a.createElement("div",null,l.a.createElement("div",{className:v.helpText},"We used React context API to control layout. Check out the"," ",l.a.createElement(te.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank"},"Documentation"))))))))},ie=a(145),se=a(107),me=a(47),ue=["palette"],de=Object(S.a)((function(e){e.palette,Object(n.a)(e,ue);return{miniCart:{width:"var(--sidenav-width)","& .cart__topbar":{height:"var(--topbar-height)"},"& .mini-cart__item":{transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}}}})),be=!1;var pe=function(e){var t=e.container,a=Object(r.useState)(0),n=Object(E.a)(a,2),o=n[0],i=n[1],s=Object(r.useState)(!1),m=Object(E.a)(s,2),u=m[0],d=m[1],h=de(),f=Object(ie.c)(),g=Object(me.g)(),v=Object(I.a)().user,O=Object(ie.d)((function(e){return e.ecommerce})).cartList,w=Object(C.a)().settings;be||(f(Object(se.j)(v.id)),be=!0);var N=function(){d(!u)};return Object(r.useEffect)((function(){var e=0;O.forEach((function(t){e+=t.price*t.amount})),i(e)}),[O]),l.a.createElement(r.Fragment,null,l.a.createElement(b.a,{onClick:N},l.a.createElement(x.a,{color:"secondary",badgeContent:O.length},l.a.createElement(p.a,null,"shopping_cart"))),l.a.createElement(c.a,{theme:w.themes[w.activeTheme]},l.a.createElement(y.a,{container:t,variant:"temporary",anchor:"right",open:u,onClose:N,ModalProps:{keepMounted:!0}},l.a.createElement("div",{className:Object(k.a)("flex-column h-full",h.miniCart)},l.a.createElement("div",{className:"cart__topbar elevation-z6 flex items-center p-1 mb-2 pl-4"},l.a.createElement(p.a,{color:"primary"},"shopping_cart"),l.a.createElement("h5",{className:"ml-2 my-0 font-medium"},"Cart")),l.a.createElement("div",{className:"flex-grow overflow-auto"},O.map((function(e){return l.a.createElement("div",{key:e.id,className:"mini-cart__item flex items-center py-2 px-2"},l.a.createElement("div",{className:"flex flex-column mr-1"},l.a.createElement(b.a,{size:"small",onClick:function(){return f(Object(se.k)(v.id,e.id,e.amount+1))}},l.a.createElement(p.a,{className:"cursor-pointer"},"keyboard_arrow_up")),l.a.createElement(b.a,{disabled:!(e.amount-1),size:"small",onClick:function(){return f(Object(se.k)(v.id,e.id,e.amount-1))}},l.a.createElement(p.a,{className:"cursor-pointer"},"keyboard_arrow_down"))),l.a.createElement("div",{className:"mr-2"},l.a.createElement("img",{className:"w-48",src:e.imgUrl,alt:e.title})),l.a.createElement("div",{className:"mr-2 text-center flex-grow flex-column"},l.a.createElement("h6",{className:"m-0 mb-1 ellipsis w-120"},e.title),l.a.createElement("small",{className:"text-muted"},"$",e.price," x ",e.amount)),l.a.createElement(b.a,{size:"small",onClick:function(){return f(Object(se.i)(v.userId,e.id))}},l.a.createElement(p.a,{fontSize:"small"},"clear")))}))),l.a.createElement(j.a,{className:"w-full border-radius-0",variant:"contained",color:"primary",onClick:function(){o>0&&(g.push("/ecommerce/checkout"),d(!1))}},"Checkout ($",o.toFixed(2),")")))))},he=["palette"],fe=Object(S.a)((function(e){var t=e.palette;return{root:{position:"fixed",height:"100vh",width:function(e){return e.width},right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:Object(n.a)(e,he).shadows[8],backgroundColor:t.primary.main,zIndex:98,transition:"all 0.15s ease"},"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:function(e){return e.width}},".matx-customizer":{right:function(e){return e.width}}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:function(e){return"calc(100% - ".concat(e.width,")")}}}}}})),ge=function(){var e=fe({width:"50px"});return l.a.createElement("div",{className:Object(k.a)("secondary-sidebar",e.root)},l.a.createElement("span",{className:"m-auto"}),l.a.createElement(oe,null),l.a.createElement(pe,null),l.a.createElement(v.c,{icon:l.a.createElement(b.a,{className:"my-3",size:"small"},l.a.createElement(p.a,null,"comments"))},l.a.createElement(v.d,null)),l.a.createElement("span",{className:"m-auto"}))},ve=function(e){var t=e.theme,a=(e.classes,e.children);e.open;return l.a.createElement(c.a,{theme:t},a)},Ee=function(){var e=Object(C.a)().settings,t=e.themes[e.secondarySidebar.theme];return l.a.createElement(ve,{theme:t},e.secondarySidebar.open&&l.a.createElement(ge,null),l.a.createElement(Y,null))},xe=a(283),ye=function(e){var t=e.children,a=Object(_.a)(),n=Object(C.a)().settings,r=n.themes[n.layout1Settings.leftSidebar.theme]||a;return l.a.createElement(c.a,{theme:r},t)},Oe=["palette"],je=Object(S.a)((function(e){e.palette,Object(n.a)(e,Oe);return{contentWrap:function(e){return{verticalAlign:"top",marginLeft:e.width,transition:"all 0.3s ease",marginRight:e.secondarySidebar.open?50:0}},topbar:{top:0,zIndex:96,background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))",transition:"all 0.3s ease"}}}));t.default=l.a.memo((function(){var e=Object(C.a)(),t=e.settings,a=e.updateSettings,n=t.layout1Settings,i=t.secondarySidebar,u=n.leftSidebar,d=u.mode,b=u.show,p=Object(r.useContext)(xe.a).routes;console.log("ROuters in context",p);var h=function(){switch(d){case"full":return"var(--sidenav-width)";case"compact":return"var(--sidenav-compact-width)";default:return"0px"}}(),f=je({width:h,secondarySidebar:i}),g=Object(_.a)(),E=Object(o.a)(g.breakpoints.down("md")),x=Object(r.useRef)({isMdScreen:E,settings:t}),y=t.themes[n.topbar.theme],O="theme-".concat(g.palette.type," flex");return Object(r.useEffect)((function(){var e=x.current.settings,t=e.layout1Settings.leftSidebar.mode;e.layout1Settings.leftSidebar.show&&a({layout1Settings:{leftSidebar:{mode:E?"close":t}}})}),[E]),l.a.createElement("div",{className:Object(k.a)("bg-default",O)},b&&"close"!==d&&l.a.createElement(ye,null,l.a.createElement(A,null)),l.a.createElement("div",{className:Object(k.a)("flex-grow flex-column relative overflow-hidden h-full-screen",f.contentWrap)},n.topbar.show&&n.topbar.fixed&&l.a.createElement(c.a,{theme:y},l.a.createElement(L,{fixed:!0,className:"elevation-z8"})),t.perfectScrollbar&&l.a.createElement(s.a,{className:"flex-grow flex-column relative h-full"},n.topbar.show&&!n.topbar.fixed&&l.a.createElement(c.a,{theme:y},l.a.createElement(L,null)),l.a.createElement("div",{className:"relative flex-grow"},l.a.createElement(v.l,null,Object(m.a)(p))),t.footer.show&&!t.footer.fixed&&l.a.createElement(q,null)),!t.perfectScrollbar&&l.a.createElement("div",{className:"flex-grow flex-column relative h-full scroll-y"},n.topbar.show&&!n.topbar.fixed&&l.a.createElement(c.a,{theme:y},l.a.createElement(L,null)),l.a.createElement("div",{className:"relative flex-grow"},l.a.createElement(v.l,null,Object(m.a)(p))),t.footer.show&&!t.footer.fixed&&l.a.createElement(q,null)),t.footer.show&&t.footer.fixed&&l.a.createElement(q,null)),t.secondarySidebar.show&&l.a.createElement(Ee,null))}))}}]);