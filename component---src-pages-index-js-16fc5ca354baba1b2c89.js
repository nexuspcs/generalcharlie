(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(2),o=t.n(i),c=t(162),l=t(163),s=t(155),u=(t(35),t(185)),m=t.n(u),p=t(151),d=t.n(p),f=t(152),g=t(156);function h(){var e=d()(["\n    margin-bottom: 4rem;\n  "]);return h=function(){return e},e}function b(){var e=d()(["\n  color: #757575;\n  margin: 0 2rem 2rem;\n\n  ",";\n"]);return b=function(){return e},e}function v(){var e=d()(["\n  display: block;\n  font-size: 2rem;\n  font-weight: 500;\n  margin: 2rem 2rem 1rem;\n"]);return v=function(){return e},e}var E=f.c.span(v()),y=f.c.p(b(),g.a.TABLET(h())),w=function(e){var n=e.title,t=e.copy,a=e.image;return r.a.createElement("figure",null,r.a.createElement(m.a,{fluid:a?a.childImageSharp.fluid:{},alt:n}),r.a.createElement("figcaption",null,r.a.createElement(E,null,n),r.a.createElement(y,null,t)))};w.propTypes={title:o.a.string,copy:o.a.string,image:o.a.object.isRequired};var x=w;function k(){var e=d()(["\n    display: block;\n  "]);return k=function(){return e},e}function T(){var e=d()(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 4rem;\n  padding: 0 4rem;\n  margin: 2rem 0;\n\n  ",";\n"]);return T=function(){return e},e}var q=f.c.div(T(),g.a.TABLET(k())),z=function(e){var n=e.items;return r.a.createElement(q,null,n.map(function(e,n){return r.a.createElement(x,Object.assign({},e,{key:n}))}))};z.propTypes={items:o.a.arrayOf(o.a.object).isRequired};var M,O=z,j=t(186),I=t.n(j),R=(t(189),t(190)),S=t.n(R),C=t(6),L=t.n(C),V=[];function B(e){return void 0===e&&(e="-50px"),void 0===M&&"undefined"!=typeof window&&window.IntersectionObserver&&(M=new window.IntersectionObserver(function(e){e.forEach(function(e){V.forEach(function(n){n[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0?n[1](!0):(!e.isIntersecting||e.intersectionRatio<=0)&&n[1](!1))})})},{rootMargin:e})),M}var U=function(e,n,t){var a=B(t);return a.observe(e),V.push([e,n]),a},A=function(e){function n(){var n;return(n=e.call(this)||this).listenToIntersections=function(){n.io=U(n.ref,function(e){n.setState(function(n){var t={};return!n.hasBeenVisible&&e&&(t={hasBeenVisible:!0}),Object.assign({isVisible:e},t)})},n.props.rootMargin)},n.handleRef=function(e){e&&(n.ref=e)},n.state={isVisible:!1,hasBeenVisible:!1,IOSupported:!1},n}L()(n,e);var a=n.prototype;return a.componentDidMount=function(){var e=S()(I.a.mark(function e(){var n,a,r;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!0,a=!0,r=!1,"undefined"==typeof window||window.IntersectionObserver){e.next=6;break}return e.next=6,t.e(10).then(t.t.bind(null,195,7)).then(function(){console.log("IntersectionObserver polyfill injected.")});case 6:"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,a=!1,r=!0),this.setState({isVisible:n,hasBeenVisible:a,IOSupported:r},this.listenToIntersections);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.componentWillUnmount=function(){this.io.disconnect()},a.render=function(){var e=this.state,n=e.isVisible,t=e.hasBeenVisible;return r.a.createElement("div",{ref:this.handleRef},this.props.children({isVisible:n,hasBeenVisible:t}))},n}(a.Component);A.propTypes={children:o.a.func.isRequired,rootMargin:o.a.string};var D=t(157);function F(){var e=d()(["\n  padding: 4rem;\n  margin: 4rem;\n  border-radius: 10px;\n  position: relative;\n  text-align: center;\n  color: #fff;\n  transition: background-color 0.3s ease;\n\n  background-color: ",";\n"]);return F=function(){return e},e}var G=f.c.div(F(),function(e){return e.isVisible?D.a:" #333"}),H=function(){return r.a.createElement(A,{rootMargin:"-50px"},function(e){var n=e.isVisible;return r.a.createElement(G,{isVisible:n},r.a.createElement(s.a,{tag:"span"},"IntersectionObserver"))})},J=t(69);function N(){var e=d()(["\n  -webkit-appearance: none;\n  background-color: transparent;\n  border: none;\n  font-family: inherit;\n  font-size: 4rem;\n  font-weight: normal;\n  padding: 1rem;\n  line-height: 4rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #fff;\n"]);return N=function(){return e},e}function P(){var e=d()(["\n  -webkit-appearance: none;\n  background-color: #fff;\n  border-radius: 5px;\n  border: none;\n  color: #757575;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 1.3rem;\n  font-weight: 500;\n  margin: 4rem 0 2rem;\n  padding: 1rem 2rem;\n  text-transform: uppercase;\n  transition: 0.2s background-color ease;\n\n  &:active,\n  &:focus {\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);\n    outline: none;\n  }\n\n  &:hover {\n    background-color: #f9f9f9;\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return P=function(){return e},e}var _=f.c.button(P()),K=f.c.button(N()),W=t(193),Q=t(191),X=(t(192),function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).onKeyDown=function(e){"Escape"===e.key&&n.props.open&&n.props.hideModal()},n}L()(n,e);var t=n.prototype;return t.componentDidMount=function(){document.addEventListener("keydown",this.onKeyDown)},t.componentWillUnmount=function(){document.removeEventListener("keydown",this.onKeyDown)},t.disableScrolling=function(e){e?(document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"):(document.body.style.overflow=null,document.documentElement.style.overflow=null)},t.render=function(){var e=this.props,n=e.children,t=e.open,a=e.showModal,i=e.hideModal;return"undefined"!=typeof document&&this.disableScrolling(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{onClick:a},"Show Modal"),r.a.createElement(W.a,{isOpen:t},r.a.createElement(K,{onClick:i},r.a.createElement(Q.a,null,"Close"),r.a.createElement("span",{"aria-hidden":!0},"×")),n))},n}(a.PureComponent));X.propTypes={children:o.a.node,open:o.a.bool.isRequired,showModal:o.a.func,hideModal:o.a.func};var Y=function(e){var n=e.children;return r.a.createElement(J.a,null,function(e){var t=e.open,a=e.showModal,i=e.hideModal;return r.a.createElement(X,{open:t,showModal:a,hideModal:i},n)})};Y.propTypes={children:o.a.node.isRequired};var Z=Y;t.d(n,"query",function(){return ee});var $=function(e){var n=e.data;return r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{as:"h2",size:"large"},n.homeJson.content.childMarkdownRemark.rawMarkdownBody),r.a.createElement(Z,null,r.a.createElement("video",{src:"https://i.imgur.com/gzFqNSW.mp4",playsInline:!0,loop:!0,autoPlay:!0,muted:!0}))),r.a.createElement(O,{items:n.homeJson.gallery}),r.a.createElement("div",{style:{height:"50vh"}}),r.a.createElement(H,null))};$.propTypes={data:o.a.object.isRequired};n.default=$;var ee="751990366"},153:function(e,n,t){"use strict";t.d(n,"b",function(){return u});var a=t(0),r=t.n(a),i=t(2),o=t.n(i),c=t(34),l=t.n(c);t.d(n,"a",function(){return l.a});t(154);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,n,t){var a;e.exports=(a=t(160))&&a.default||a},155:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(2),o=t.n(i),c=t(151),l=t.n(c),s=t(152),u=t(156);function m(){var e=l()(["\n    font-size: ",";\n  "]);return m=function(){return e},e}function p(){var e=l()(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n\n  ",";\n"]);return p=function(){return e},e}var d=s.c.span(p(),function(e){var n=e.size;return function(){switch(n){case"large":return"400";default:return"500"}}},function(e){var n=e.size;return function(){switch(n){case"large":return"3.2rem";default:return"2rem"}}},u.a.TABLET(m(),function(e){var n=e.size;return function(){switch(n){case"large":return"2.6rem";default:return"2rem"}}})),f=function(e){var n=e.children,t=e.as,a=void 0===t?"span":t,i=e.size;return r.a.createElement(d,{as:a,size:i},n)};f.propTypes={children:o.a.string.isRequired,as:o.a.string,size:o.a.oneOf(["large"])};n.a=f},156:function(e,n,t){"use strict";var a=t(151),r=t.n(a),i=(t(79),t(56),t(36),t(165),t(152)),o={DESKTOP:992,TABLET:768,PHONE:376};function c(){var e=r()(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return c=function(){return e},e}function l(){var e=r()(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return l=function(){return e},e}var s=Object.keys(o).reduce(function(e,n){return e[n]=function(){return Object(i.b)(l(),o[n]/16,i.b.apply(void 0,arguments))},e["MIN_"+n]=function(){return Object(i.b)(c(),o[n]/16,i.b.apply(void 0,arguments))},e},{});n.a=s},157:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a="#f90000"},158:function(e,n,t){"use strict";t(35);var a=t(161),r=t(0),i=t.n(r),o=t(2),c=t.n(o),l=t(164),s=t(153),u=t(18),m=function(e){var n=e.siteTitle,t=e.siteDescription,a=e.siteUrl,r=e.prefix,o=e.pageTitle,c=e.pageTitleFull,s=void 0===c?o?n+": "+o:n:c,u=e.themeColor,m=e.social,p=e.imageUrl,d=e.location,f=e.canonical,g=void 0===f?a+(d.pathname||""):f;return i.a.createElement(l.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),i.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),i.a.createElement("meta",{content:n+r,name:"apple-mobile-web-app-title"}),i.a.createElement("meta",{content:s,property:"og:title"}),i.a.createElement("meta",{content:s,name:"twitter:title"}),i.a.createElement("title",null,s),i.a.createElement("meta",{content:t,name:"description"}),i.a.createElement("meta",{content:t,property:"og:description"}),i.a.createElement("meta",{content:t,name:"twitter:description"}),i.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),i.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),i.a.createElement("meta",{content:u,name:"theme-color"}),i.a.createElement("meta",{content:n+r,name:"application-name"}),i.a.createElement("meta",{content:"website",property:"og:type"}),i.a.createElement("meta",{content:n+r,property:"og:site_name"}),i.a.createElement("meta",{content:m.fbAppId,property:"fb:app_id"}),i.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),i.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:site"}),i.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:creator"}),i.a.createElement("meta",{content:s,name:"twitter:text:title"}),i.a.createElement("meta",{content:g,property:"og:url"}),i.a.createElement("meta",{content:g,name:"twitter:url"}),i.a.createElement("link",{rel:"canonical",href:g}),i.a.createElement("meta",{content:p||a+r+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:p||a+r+"/social.png",name:"twitter:image"}),i.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),i.a.createElement("meta",{content:"512",name:"twitter:image:height"}),i.a.createElement("meta",{content:p||a+r+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:u,name:"msapplication-TileColor"}),i.a.createElement("meta",{content:r+"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),i.a.createElement("meta",{content:r+"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),i.a.createElement("meta",{content:r+"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),i.a.createElement("meta",{content:r+"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),i.a.createElement("meta",{content:r+"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),i.a.createElement("link",{href:r+"/manifest.json",rel:"manifest"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),i.a.createElement("link",{href:r+"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),i.a.createElement("link",{href:r+"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),i.a.createElement("link",{href:r+"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var n=e.location,t=e.canonical,a=e.siteUrl,r=e.pageTitle,i=e.siteTitle,o=[{"@context":"http://schema.org","@type":"WebSite",url:t,name:r||i,alternateName:e.pageTitleFull}];return r&&"/"!==n.pathname&&o.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:i}},{"@type":"ListItem",position:2,item:{"@id":t,name:r}}]}),o}({location:d,canonical:g,siteUrl:a,pageTitle:o,siteTitle:n,pageTitleFull:s}))))};m.propTypes={siteTitle:c.a.string,prefix:c.a.string,siteTitleShort:c.a.string,siteDescription:c.a.string,siteUrl:c.a.string,themeColor:c.a.string,social:c.a.objectOf(c.a.string),imageUrl:c.a.string,canonical:c.a.string,pageTitle:c.a.string,pageTitleFull:c.a.string,location:c.a.object.isRequired};n.a=function(e){return i.a.createElement(s.b,{query:"3142784422",render:function(n){return i.a.createElement(u.Location,null,function(t){var a=t.location;return i.a.createElement(m,Object.assign({},n.site.siteMetadata,e,{location:a}))})},data:a})}},159:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"General Charlie"}}}}},160:function(e,n,t){"use strict";t.r(n);t(35);var a=t(0),r=t.n(a),i=t(2),o=t.n(i),c=t(57),l=t(4),s=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return t?r.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=s},161:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"General Charlie",prefix:"/generalcharlie",siteTitleShort:"GeneralCharlie",siteDescription:"General Charlie Cafe",siteUrl:"https://nookglobal.github.io",themeColor:"#000",social:{twitter:"generalcharliecrowsnest",fbAppId:"generalcharliecrowsnest"}}}}}},162:function(e,n,t){"use strict";t(35);var a=t(159),r=t(0),i=t.n(r),o=t(2),c=t.n(o),l=t(153),s=t(158),u=t(41),m=t(151),p=t.n(m),d=t(152);function f(){var e=p()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4rem;\n\n  a {\n    color: #757575;\n    transition: color 0.2s ease;\n    text-decoration: none;\n\n    &:hover {\n      color: inherit;\n    }\n  }\n"]);return f=function(){return e},e}var g=d.c.header(f()),h=t(155);function b(){var e=p()(["\n  ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n\n    li {\n      text-transform: uppercase;\n      font-size: 1.3rem;\n\n      & + li {\n        margin-left: 2rem;\n      }\n    }\n  }\n"]);return b=function(){return e},e}var v=d.c.nav(b()),E=function(){return i.a.createElement(v,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/fabe/gatsby-universal"},"GitHub"))))},y=u.b.div({enter:{y:0,transition:{ease:"easeInOut"}},exit:{y:"-100%",transition:{ease:"easeInOut"}}}),w=function(e){var n=e.title;return i.a.createElement(y,null,i.a.createElement(g,null,i.a.createElement(l.a,{to:"/"},i.a.createElement(h.a,{as:"h1"},n)),i.a.createElement(E,null)))};w.propTypes={title:c.a.string.isRequired};var x=w,k=t(157);function T(){var e=p()(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n    line-height: 1;\n    font-size: 1.6rem;\n    color: #000;\n    background-color: #fff;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: "pnum";\n    font-feature-settings: "pnum";\n    font-variant-numeric: proportional-nums;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    color: ',";\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ",';\n    border: 1px solid #ddd;\n    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p {\n    margin-bottom: 2rem;\n  }\n']);return T=function(){return e},e}var q=Object(d.a)(T(),k.a,k.a),z=function(e){var n=e.data,t=e.children;return i.a.createElement("div",null,i.a.createElement(q,null),i.a.createElement(s.a,null),i.a.createElement(x,{title:n.site.siteMetadata.siteTitle}),t)};z.propTypes={children:c.a.node.isRequired,data:c.a.object.isRequired};var M=function(e){return i.a.createElement(l.b,{query:"2302781957",render:function(n){return i.a.createElement(z,Object.assign({data:n},e))},data:a})};M.propTypes={children:c.a.node.isRequired};n.a=M},163:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(2),o=t.n(i),c=t(151),l=t.n(c);function s(){var e=l()(["\n  padding: 2rem 4rem;\n  max-width: 700px;\n"]);return s=function(){return e},e}var u=t(152).c.div(s()),m=function(e){var n=e.children;return r.a.createElement(u,null,n)};m.propTypes={children:o.a.node.isRequired};n.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-16fc5ca354baba1b2c89.js.map