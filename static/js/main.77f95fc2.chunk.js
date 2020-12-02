(this.webpackJsonpignite=this.webpackJsonpignite||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t(0),r=t.n(i),o=t(22),c=t.n(o),s=t(18),d=t(15),l=t(13),u=t(40),p=t(8),b={popularGames2000_2009:[],popularGames2010_2019:[],popularGames2020:[],searchedGames:[]},m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_GAMES":return Object(p.a)(Object(p.a)({},n),{},{popularGames2000_2009:e.payload.popularGames2000_2009,popularGames2010_2019:e.payload.popularGames2010_2019,popularGames2020:e.payload.popularGames2020});case"FETCH_SEARCHED":return Object(p.a)(Object(p.a)({},n),{},{searchedGames:e.payload.searchedGames});case"CLEAR_SEARCHED":return Object(p.a)(Object(p.a)({},n),{},{searchedGames:[]});default:return Object(p.a)({},n)}},h={game:{platforms:[]},screenshots:{results:[]},isLoading:!0},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DETAILS":return Object(p.a)(Object(p.a)({},n),{},{game:e.payload.game,screenshots:e.payload.screenshots,isLoading:!1});case"LOADING_DETAILS":return Object(p.a)(Object(p.a)({},n),{},{isLoading:!0});default:return Object(p.a)({},n)}},f=Object(d.c)({games:m,details:g}),x=t(4),j=t(5),v=t(44),y=t(16),O=t.n(y),w=t(21),k=t(17),z=t.n(k),E="https://api.rawg.io/api/",S=function(n){return"".concat(E,"games/").concat(n,"/screenshots")},C=function(n){return"".concat(E,"games?search=").concat(n,"&page_size=6")},_=t(3),I={hidden:{opacity:0},show:{opacity:1,transition:{duration:.8}},exit:{opacity:0,transition:{duration:.8}}},R={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.8,when:"afterChildren"}},exit:{opacity:0,transition:{duration:.8}}},G=t(6),F=t.p+"static/media/logo.91bf6953.svg";function A(){var n=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  cursor: pointer;\n  img {\n    height: 30px;\n    width: 30px;\n    display: inline-block;\n    margin-right: 20px;\n    max-width: 100%;\n  }\n"]);return A=function(){return n},n}function L(){var n=Object(j.a)(["\n  text-align: center;\n  padding: 30px 50px;\n  input {\n    font-size: 24px;\n    width: 550px;\n    max-width: 100%;\n    margin-top: 10px;\n    padding: 7px 25px;\n    border: none;\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    outline: none;\n  }\n  button {\n    font-size: 24px;\n    color: #fff;\n    background-color: lightskyblue;\n    padding: 7px 20px;\n    border: none;\n    cursor: pointer;\n  }\n  @media (max-width: 780px) {\n    input {\n      text-align: center;\n    }\n    button {\n      width: 550px;\n      max-width: 100%;\n    }\n  }\n  @media (max-width: 500px) {\n    padding: 10px 20px;\n  }\n"]);return L=function(){return n},n}var T=Object(G.b)(_.c.nav)(L()),D=Object(G.b)(_.c.nav)(A()),N=function(){var n=Object(l.b)(),e=Object(i.useState)(""),t=Object(v.a)(e,2),r=t[0],o=t[1];return Object(a.jsxs)(T,{variants:I,initial:"hidden",animate:"show",children:[Object(a.jsxs)(D,{onClick:function(){n({type:"CLEAR_SEARCHED"})},children:[Object(a.jsx)("img",{src:F,alt:"logo"}),Object(a.jsx)("h1",{children:"Meta Games"})]}),Object(a.jsxs)("form",{className:"search",children:[Object(a.jsx)("input",{type:"text",onChange:function(n){o(n.target.value)},value:r,placeholder:"Search games"}),Object(a.jsx)("button",{type:"submit",onClick:function(e){var t;e.preventDefault(),n((t=r,function(){var n=Object(w.a)(O.a.mark((function n(e){var a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z.a.get(C(t));case 2:a=n.sent,e({type:"FETCH_SEARCHED",payload:{searchedGames:a.data.results}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())),o("")},children:"Search"})]})]})},P=function(n,e){return n.match(/media\/screenshots/)?n.replace("media/screenshots","media/resize/".concat(e,"/-/screenshots")):n.replace("media/games/","media/resize/".concat(e,"/-/games/"))};function H(){var n=Object(j.a)(["\n  text-align: center;\n  border-radius: 15px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);\n  min-height: 30vh;\n  overflow: hidden;\n  cursor: pointer;\n  img {\n    width: 100%;\n    max-width: 100%;\n    height: 35vh;\n    display: block;\n    object-fit: cover;\n  }\n"]);return H=function(){return n},n}var M=Object(G.b)(_.c.div)(H()),B=function(n){var e=n.name,t=n.released,i=n.image,r=n.id,o=Object(l.b)(),c=r.toString();return Object(a.jsx)(M,{variants:R,initial:"hidden",animate:"show",layoutId:c,onClick:function(){document.body.style.overflow="hidden",document.body.style.marginRight="8px",o(function(n){return function(){var e=Object(w.a)(O.a.mark((function e(t){var a,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING_DETAILS"}),e.next=3,z.a.get((r=n,"".concat(E,"games/").concat(r)));case 3:return a=e.sent,e.next=6,z.a.get(S(n));case 6:i=e.sent,t({type:"GET_DETAILS",payload:{game:a.data,screenshots:i.data}});case 8:case"end":return e.stop()}var r}),e)})));return function(n){return e.apply(this,arguments)}}()}(r))},children:Object(a.jsxs)(s.b,{to:"/game/".concat(r),children:[Object(a.jsx)(_.c.h3,{layoutId:"title ".concat(c),children:e}),Object(a.jsx)("p",{children:t}),Object(a.jsx)(_.c.img,{layoutId:"image ".concat(c),src:P(i,640),alt:e})]})})},U=t.p+"static/media/steam.304e8415.svg",X=t.p+"static/media/playstation.f0a74f41.svg",J=t.p+"static/media/xbox.2eba2631.svg",V=t.p+"static/media/nintendo.da2a7b5f.svg",q=t.p+"static/media/apple.9a448138.svg",K=t.p+"static/media/gamepad.c3535795.svg",Q=t.p+"static/media/star-empty.a8b3e3a2.svg",W=t.p+"static/media/star-full.49b69529.svg";function Y(){var n=Object(j.a)(["\n  margin: 50px 0;\n  @media (max-width: 780px) {\n    margin: 25px 0;\n    p {\n      font-size: 16px;\n    }\n  }\n  @media (max-width: 500px) {\n    p {\n      font-size: 14px;\n    }\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(j.a)(["\n  margin-top: 25px;\n  img {\n    width: 100%;\n    max-width: 100%;\n    display: block;\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  img {\n    width: 40px;\n    height: 40px;\n    margin-left: 35px;\n    margin-bottom: 20px;\n    display: inline-block;\n  }\n  @media (max-width: 950px) {\n    justify-content: center;\n    img {\n      margin: 0 25px 20px;\n    }\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(j.a)(["\n  text-align: center;\n  padding-left: 50px;\n  h3 {\n    text-align: right;\n  }\n  @media (max-width: 950px) {\n    padding-left: 0;\n    h3 {\n     text-align: center;\n    }\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  \n  img {\n    width: 26px;\n    height: 26px;\n    display: inline-block;\n  }\n  @media (max-width: 950px) {\n    flex-direction: column;\n    text-align: center;\n    h3 {\n     text-align: center;\n    }\n    p {\n      text-align: center;\n    }\n    img {\n      margin: 0 auto;\n    }\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(j.a)(["\n  width: 80%;\n  color: #000;\n  background-color: #fff;\n  border-radius: 15px;\n  padding: 25px 75px;\n  left: 10%;\n  position: absolute;\n  z-index: 10;\n  img {\n    width: 100%;\n    max-width: 100%;\n    display: block;\n  }\n  @media (max-width: 950px) {\n    padding: 10px 30px 25px;\n  }\n"]);return tn=function(){return n},n}function an(){var n=Object(j.a)(["\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  position: fixed;\n  z-index: 5;\n  overflow-y: scroll;\n  min-height: 100vh;\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: lightskyblue;\n    border-radius: 10px;\n  }\n  &::-webkit-scrollbar-track {\n    background-color: #fff;\n  }\n"]);return an=function(){return n},n}var rn=Object(G.b)(_.c.div)(an()),on=Object(G.b)(_.c.div)(tn()),cn=Object(G.b)(_.c.div)(en()),sn=Object(G.b)(_.c.div)(nn()),dn=Object(G.b)(_.c.div)($()),ln=Object(G.b)(_.c.div)(Z()),un=Object(G.b)(_.c.div)(Y()),pn=function(n){var e=n.pathId,t=Object(x.e)(),i=function(n){switch(n){case"PC":return U;case"PlayStation 4":return X;case"Xbox One":return J;case"Nintendo Switch":return V;case"IOS":return q;default:return K}},r=Object(l.c)((function(n){return n.details})),o=r.game,c=r.screenshots,s=r.isLoading;return Object(a.jsx)(a.Fragment,{children:!s&&Object(a.jsx)(rn,{className:"shadow",onClick:function(n){n.target.classList.contains("shadow")&&(document.body.style.overflow="auto",document.body.style.marginRight="0",t.push("/"))},children:Object(a.jsxs)(on,{layoutId:e,children:[Object(a.jsxs)(cn,{children:[Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)(_.c.h3,{layoutId:"title ".concat(e),children:o.name}),Object(a.jsxs)("p",{children:["Rating: ",o.rating]}),function(){for(var n=[],e=Math.round(o.rating),t=1;t<=5;t++)t<=e?n.push(Object(a.jsx)("img",{src:W,alt:""},t)):n.push(Object(a.jsx)("img",{src:Q,alt:""},t));return n}()]}),Object(a.jsxs)(sn,{children:[Object(a.jsx)("h3",{children:"Platforms"}),Object(a.jsx)(dn,{children:o.platforms.map((function(n){return Object(a.jsx)("img",{src:i(n.platform.name),alt:n.platform.name},n.platform.id)}))})]})]}),Object(a.jsx)(ln,{children:Object(a.jsx)(_.c.img,{layoutId:"image ".concat(e),src:P(o.background_image,1280),alt:""})}),Object(a.jsx)(un,{children:Object(a.jsx)("p",{children:o.description_raw})}),Object(a.jsx)("div",{className:"gallery",children:c.results.map((function(n){return Object(a.jsx)("img",{src:P(n.image,1280),alt:""},n.id)}))})]})})})};function bn(){var n=Object(j.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 35px;\n  grid-row-gap: 60px;\n  min-height: 80vh;\n  @media (max-width: 600px) {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  }\n  @media (max-width: 400px) {\n    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  }\n"]);return bn=function(){return n},n}function mn(){var n=Object(j.a)(["\n  padding: 0 50px;\n  h2 {\n    padding: 50px 0;\n  }\n  @media (max-width: 780px) {\n    padding: 0 25px;\n    h2 {\n      text-align: center;\n    }\n  }\n"]);return mn=function(){return n},n}var hn=Object(G.b)(_.c.div)(mn()),gn=Object(G.b)(_.c.div)(bn()),fn=function(){var n=Object(x.f)().pathname.split("/")[2],e=Object(l.b)();Object(i.useEffect)((function(){e(function(){var n=Object(w.a)(O.a.mark((function n(e){var t,a,i;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z.a.get("".concat(E).concat("games?dates=2000-01-01,2009-12-31&ordering=-added&page_size=12"));case 2:return t=n.sent,n.next=5,z.a.get("".concat(E).concat("games?dates=2010-01-01,2019-12-31&ordering=-added&page_size=12"));case 5:return a=n.sent,n.next=8,z.a.get("".concat(E).concat("games?dates=2020-01-01,2020-12-31&ordering=-added&page_size=9"));case 8:i=n.sent,e({type:"FETCH_GAMES",payload:{popularGames2000_2009:t.data.results,popularGames2010_2019:a.data.results,popularGames2020:i.data.results}});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[e]);var t=Object(l.c)((function(n){return n.games})),r=t.popularGames2020,o=t.popularGames2010_2019,c=t.popularGames2000_2009,s=t.searchedGames;return Object(a.jsx)(hn,{variants:I,initial:"hidden",animate:"show",children:Object(a.jsxs)(_.b,{type:"crossfade",children:[Object(a.jsx)(_.a,{children:n&&Object(a.jsx)(pn,{pathId:n})}),s.length?Object(a.jsxs)("div",{className:"searched",children:[Object(a.jsx)("h2",{children:"Searched Games"}),Object(a.jsx)(gn,{children:s.map((function(n){return Object(a.jsx)(B,{name:n.name,released:n.released,image:n.background_image,id:n.id},n.id)}))})]}):"",Object(a.jsx)("h2",{children:"Popular Games 2020"}),Object(a.jsx)(gn,{children:r.map((function(n){return Object(a.jsx)(B,{name:n.name,released:n.released,image:n.background_image,id:n.id},n.id)}))}),Object(a.jsx)("h2",{children:"Popular Games 2010 - 2019"}),Object(a.jsx)(gn,{children:o.map((function(n){return Object(a.jsx)(B,{name:n.name,released:n.released,image:n.background_image,id:n.id},n.id)}))}),Object(a.jsx)("h2",{children:"Popular Games 2000 - 2009"}),Object(a.jsx)(gn,{children:c.map((function(n){return Object(a.jsx)(B,{name:n.name,released:n.released,image:n.background_image,id:n.id},n.id)}))})]})})};function xn(){var n=Object(j.a)(['\n  /*\n   * 1. Correct the line height in all browsers.\n   * 2. Prevent adjustments of font size after orientation changes in iOS.\n  */\n  \n  html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Remove the margin in all browsers. */\n  \n  body {\n    margin: 0;\n    overflow-x: hidden;\n  }\n  \n  /* Render the `main` element consistently in IE. */\n  \n  main {\n    display: block;\n  }\n  \n  /*\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n  */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Remove the gray background on active links in IE 10. */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /* Add the correct font weight in Chrome, Edge, and Safari. */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /* Remove the border on images inside links in IE 10. */\n  \n  img {\n    border-style: none;\n  }\n\n  /*\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n  */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /*\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n  */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /*\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n  */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /* Correct the inability to style clickable types in iOS and Safari. */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /* Remove the inner border and padding in Firefox. */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /* Restore the focus styles unset by the previous rule. */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /* Remove the default vertical scrollbar in IE 10+. */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /*\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n  */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /* Correct the cursor style of increment and decrement buttons in Chrome. */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /* Universal Box Sizing. */\n  \n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    &::-webkit-scrollbar {\n      width: 8px;\n    }\n    &::-webkit-scrollbar-thumb {\n      background-color: darkgray;\n      border-radius: 10px;\n    }\n    &::-webkit-scrollbar-track {\n      background-color: #fff;\n    }\n  }\n  \n  body {\n    font-family: \'Roboto Mono\', sans-serif;\n  }\n  \n  h2 {\n    font-family: \'Nerko One\', cursive;\n    font-size: 46px;\n    font-weight: 400;\n    color: #333;\n  }\n  \n  h3 {\n    font-size: 24px;\n    color: #333;\n  }\n  \n  p {\n    font-size: 18px;\n    line-height: 1.5;\n    color: #696969;\n  }\n  \n  a {\n    text-decoration: none;\n    color: #333;\n  }\n'],['\n  /*\n   * 1. Correct the line height in all browsers.\n   * 2. Prevent adjustments of font size after orientation changes in iOS.\n  */\n  \n  html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Remove the margin in all browsers. */\n  \n  body {\n    margin: 0;\n    overflow-x: hidden;\n  }\n  \n  /* Render the \\`main\\` element consistently in IE. */\n  \n  main {\n    display: block;\n  }\n  \n  /*\n   * Correct the font size and margin on \\`h1\\` elements within \\`section\\` and\n   * \\`article\\` contexts in Chrome, Firefox, and Safari.\n  */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Remove the gray background on active links in IE 10. */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /* Add the correct font weight in Chrome, Edge, and Safari. */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /* Remove the border on images inside links in IE 10. */\n  \n  img {\n    border-style: none;\n  }\n\n  /*\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n  */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /*\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n  */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /*\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n  */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /* Correct the inability to style clickable types in iOS and Safari. */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /* Remove the inner border and padding in Firefox. */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /* Restore the focus styles unset by the previous rule. */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /* Remove the default vertical scrollbar in IE 10+. */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /*\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n  */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /* Correct the cursor style of increment and decrement buttons in Chrome. */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /* Universal Box Sizing. */\n  \n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  html {\n    &::-webkit-scrollbar {\n      width: 8px;\n    }\n    &::-webkit-scrollbar-thumb {\n      background-color: darkgray;\n      border-radius: 10px;\n    }\n    &::-webkit-scrollbar-track {\n      background-color: #fff;\n    }\n  }\n  \n  body {\n    font-family: \'Roboto Mono\', sans-serif;\n  }\n  \n  h2 {\n    font-family: \'Nerko One\', cursive;\n    font-size: 46px;\n    font-weight: 400;\n    color: #333;\n  }\n  \n  h3 {\n    font-size: 24px;\n    color: #333;\n  }\n  \n  p {\n    font-size: 18px;\n    line-height: 1.5;\n    color: #696969;\n  }\n  \n  a {\n    text-decoration: none;\n    color: #333;\n  }\n']);return xn=function(){return n},n}var jn=Object(G.a)(xn());var vn=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(jn,{}),Object(a.jsx)(N,{}),Object(a.jsx)(x.a,{path:["/game/:id","/"],component:fn})]})},yn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),a(n),i(n),r(n),o(n)}))},On=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,wn=Object(d.e)(f,On(Object(d.a)(u.a)));c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{store:wn,children:Object(a.jsx)(s.a,{children:Object(a.jsx)(vn,{})})})}),document.getElementById("root")),yn()}},[[72,1,2]]]);
//# sourceMappingURL=main.77f95fc2.chunk.js.map