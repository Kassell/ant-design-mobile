(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[176],{"07z2":function(e,t,n){},"0m3q":function(e,t,n){"use strict";n("ahKI")},"2Pr/":function(e,t,n){},"60ow":function(e,t,n){},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},Bjia:function(e,t,n){"use strict";var a=n("mn0l"),r=n("iojd"),l=n("ahKI"),c=n.n(l),o=n("vumQ"),i=n("TS6m");n("Qf6j"),n("60ow");t["a"]=e=>{var t=e.code,n=e.lang,l=e.showCopy,s=void 0===l||l,m=Object(i["useCopy"])(),d=Object(r["a"])(m,2),u=d[0],v=d[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(o["a"],Object(a["a"])({},o["b"],{code:t,language:n,theme:void 0}),(e=>{var n=e.className,a=e.style,r=e.tokens,l=e.getLineProps,o=e.getTokenProps;return c.a.createElement("pre",{className:n,style:a},s&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":v,onClick:()=>u(t)}),r.map(((e,t)=>c.a.createElement("div",l({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,n){"use strict";n("mn0l"),n("ahKI"),n("2Pr/")},N0lm:function(e,t,n){"use strict";var a=n("mn0l"),r=n("ahKI"),l=n.n(r);n("tCeM");t["a"]=e=>l.a.createElement("div",Object(a["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,n){"use strict"},YWOM:function(e,t,n){},ekZX:function(e,t,n){"use strict";n.r(t),n.d(t,"ACTIVE_MSG_TYPE",(function(){return x}));var a=n("ahKI"),r=n.n(a),l=n("iojd"),c=n("/7QA"),o=n("9kvl"),i=n("TS6m"),s=n("1KG/"),m=n.n(s),d="https://codesandbox.io/api/v1/sandboxes/define";function u(e){return m.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function v(e){var t=Boolean(e.sources._.tsx),n=t?".tsx":".jsx",a={},r={},c=Object.values(e.dependencies).filter((e=>e.css)),o="app".concat(n),i="index".concat(n);Object.entries(e.dependencies).forEach((e=>{var t=Object(l["a"])(e,2),n=t[0],a=t[1].version;r[n]=a})),r["react-dom"]||(r["react-dom"]=r.react||"latest"),a["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},a["index.html"]={content:'<div id="root"></div>'},a[i]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(c.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var s=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(l["a"])(e,2),n=t[0],r=t[1],c=r.tsx,i=r.jsx,m=r.content,d={content:c||i||m};a["_"===n?o:n]=d,s=s||d.content.includes("from 'demos'"),d.content=d.content.replace("from 'demos'","from './demos-util'")})),s&&(r["lorem-ipsum"]="^2.0.8",a["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),a["package.json"]={content:JSON.stringify({name:e.title,main:i,dependencies:r,devDependencies:t?{typescript:"^3"}:{}},null,2)},u({files:a})}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,n=Object(a["useState"])(),r=Object(l["a"])(n,2),c=r[0],o=r[1];return Object(a["useEffect"])((()=>{if(e){var n=document.createElement("form"),a=v(e);function r(e,t){var a=document.createElement("input");n.appendChild(a),a.name=e,a.value=t}return n.method="POST",n.target="_blank",n.style.display="none",n.action=t,r("parameters",a),r("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),n.setAttribute("data-demo",e.title||""),document.body.appendChild(n),o((()=>()=>n.submit())),()=>n.remove()}}),[e]),c}var p=n("Bjia");n("YWOM");function f(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var E=e=>{var t,n=Object(a["useRef"])(null),s=Object(a["useContext"])(i["context"]),m=s.locale,d=Object(i["useLocaleProps"])(m,e),u=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(d.identifier),v=1===Object.keys(d.sources).length,E=h(null!==(t=d.hideActions)&&void 0!==t&&t.includes("CSB")?null:d),b=Object(i["useMotions"])(d.motions||[],n.current),g=Object(l["a"])(b,2),j=g[0],y=g[1],k=Object(i["useCopy"])(),w=Object(l["a"])(k,2),x=w[0],O=w[1],_=Object(a["useState"])("_"),C=Object(l["a"])(_,2),N=C[0],S=C[1],L=Object(a["useState"])(f(N,d.sources[N])),A=Object(l["a"])(L,2),M=A[0],P=A[1],I=d.sources[N][M]||d.sources[N].content,Z=Object(i["useTSPlaygroundUrl"])(m,I),T=Object(i["usePrefersColor"])(),z=Object(l["a"])(T,1);z[0];function V(e){S(e),P(f(e,d.sources[e]))}return r.a.createElement("div",{style:d.style,className:[d.className,"__dumi-default-previewer",u?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:d.identifier,"data-debug":d.debug||void 0},r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":d.title},d.title&&r.a.createElement(i["AnchorLink"],{to:"#".concat(d.identifier)},d.title),d.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},d.debug&&r.a.createElement("span",{className:"debug-badge"},"Debug Only"),E&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:E}),d.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:y,onClick:()=>j()}),r.a.createElement("div",{className:"spacer"}),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":O,onClick:()=>x(I)}),"tsx"===M&&r.a.createElement(i["Link"],{target:"_blank",to:Z},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!v&&r.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:N,onChange:V},Object.keys(d.sources).map((e=>r.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(f(e,d.sources[e])):e,key:e})))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(p["a"],{code:I,lang:M,showCopy:!1}))))},b=E,g=(n("oeoJ"),n("NEWu")),j=(n("q9vG"),e=>{var t=e.url,n=Object(a["useState"])(Math.random()),o=Object(l["a"])(n,2),s=o[0],m=o[1],d=Object(i["usePrefersColor"])(),u=Object(l["a"])(d,1),v=u[0],h=Object(a["useContext"])(i["context"]),p=h.config.mode;return Object(a["useEffect"])((()=>{m(Math.random())}),[v]),r.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":p},r.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),r.a.createElement("div",{className:"adm-doc-device-action"},r.a.createElement("a",{onClick:()=>m(Math.random())},y),r.a.createElement(c["Popover"],{content:r.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},r.a.createElement("a",null,k)),r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},w)))}),y=r.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),k=r.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),w=r.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),x="dumi:scroll-into-demo";t["default"]=e=>{var t,n=Object(i["useDemoUrl"])(e.identifier);return r.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},r.a.createElement("div",{className:"adm-doc-previewer-source"},r.a.createElement(b,e)),r.a.createElement("div",{className:"adm-doc-previewer-device"},r.a.createElement(j,{url:null!==(t=e.demoUrl)&&void 0!==t?t:n})))}},eqKt:function(e,t,n){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,n){"use strict";var a=n("ahKI"),r=n.n(a),l=n("eqKt"),c=n.n(l),o=e=>r.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("div",{className:c.a.content},r.a.createElement("div",{className:c.a.title},e.title),r.a.createElement("div",{className:c.a.description},e.description)));t["a"]=o},mVOg:function(e,t,n){"use strict";var a=n("iojd"),r=n("ahKI"),l=n.n(r),c=n("TS6m"),o=n("/7QA");t["a"]=()=>{var e=Object(r["useContext"])(c["context"]),t=e.locale,n=Object(r["useState"])(!1),i=Object(a["a"])(n,2),s=i[0],m=i[1];return l.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},l.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},l.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,n){},q9vG:function(e,t,n){},sZeP:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),r=n.n(a),l=n("TS6m"),c=(n("N0lm"),n("TAbJ"),n("DgDr"),n("mVOg"),n("ekZX"),n("gKi5"),n("Bjia")),o=(n("0m3q"),n("utj/")),i=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u56fd\u9645\u5316"},r.a.createElement(l["AnchorLink"],{to:"#\u56fd\u9645\u5316","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u56fd\u9645\u5316"),r.a.createElement("h3",{id:"configprovider"},r.a.createElement(l["AnchorLink"],{to:"#configprovider","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ConfigProvider"),r.a.createElement("p",null,"antd-mobile \u63d0\u4f9b\u4e86 ",r.a.createElement(l["Link"],{to:"../components/config-provider"},"ConfigProvider")," \u7ec4\u4ef6\u7528\u4e8e\u5168\u5c40\u914d\u7f6e\u56fd\u9645\u5316\u6587\u6848\u3002"),r.a.createElement(c["a"],{code:"import { ConfigProvider } from \"antd-mobile\";\nimport enUS from 'antd-mobile/es/locales/en-US'\n\nreturn (\n  <ConfigProvider locale={enUS}>\n    <App />\n  </ConfigProvider>\n)",lang:"jsx"}),r.a.createElement("p",null,"\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u8bed\u8a00\uff1a"),r.a.createElement(o["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u8bed\u8a00"),r.a.createElement("th",null,"\u6587\u4ef6\u540d"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"\u7b80\u4f53\u4e2d\u6587"),r.a.createElement("td",null,"zh-CN")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u7e41\u4f53\u4e2d\u6587\uff08\u4e2d\u56fd\u9999\u6e2f\uff09"),r.a.createElement("td",null,"zh-HK")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u7e41\u4f53\u4e2d\u6587\uff08\u4e2d\u56fd\u53f0\u6e7e\uff09"),r.a.createElement("td",null,"zh-TW")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u82f1\u8bed\uff08\u7f8e\u5f0f\uff09"),r.a.createElement("td",null,"en-US")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u6ce2\u65af\u8bed"),r.a.createElement("td",null,"fa-IR")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u897f\u73ed\u7259\u8bed"),r.a.createElement("td",null,"es-ES")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u97e9\u8bed"),r.a.createElement("td",null,"ko-KR")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u65e5\u8bed"),r.a.createElement("td",null,"ja-JP")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u54c8\u8428\u514b\u8bed"),r.a.createElement("td",null,"kk-KZ")),r.a.createElement("tr",null,r.a.createElement("td",null,"\u5370\u5ea6\u5c3c\u897f\u4e9a\u8bed"),r.a.createElement("td",null,"id-ID")))),r.a.createElement("p",null,"\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u6cd5\u8bf7\u53c2\u8003 ",r.a.createElement(l["Link"],{to:"../components/config-provider"},"ConfigProvider")," \u6587\u6863\u3002"),r.a.createElement("h3",{id:"\u589e\u52a0\u8bed\u8a00\u5305"},r.a.createElement(l["AnchorLink"],{to:"#\u589e\u52a0\u8bed\u8a00\u5305","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u589e\u52a0\u8bed\u8a00\u5305"),r.a.createElement("p",null,"\u5982\u679c\u4f60\u627e\u4e0d\u5230\u4f60\u9700\u8981\u7684\u8bed\u8a00\u5305\uff0c\u6b22\u8fce\u4f60\u5728 ",r.a.createElement(l["Link"],{to:"https://github.com/ant-design/ant-design-mobile/blob/master/src/locales/en-US.ts"},"\u82f1\u6587\u8bed\u8a00\u5305")," \u7684\u57fa\u7840\u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8bed\u8a00\u5305\uff0c\u5e76\u7ed9\u6211\u4eec\u53d1\u4e00\u4e2a Pull Request\u3002 ",r.a.createElement(l["Link"],{to:"http://www.lingoes.net/en/translator/langcode.htm"},"\u8bed\u8a00\u5bf9\u7167\u8868")),r.a.createElement("p",null,"\u57fa\u672c\u6b65\u9aa4\u5982\u4e0b\uff1a"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5728 ",r.a.createElement("code",null,"src/locales")," \u4e2d\u589e\u52a0\u8bed\u8a00\u5305\u3002"),r.a.createElement("li",null,"\u5728 ",r.a.createElement(l["Link"],{to:"https://github.com/ant-design/ant-design-mobile/blob/master/src/components/config-provider/tests/config-provider.test.tsx"},"config-provider.test.tsx")," \u6dfb\u52a0\u6539\u8bed\u8a00\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002"),r.a.createElement("li",null,"\u8fd0\u884c ",r.a.createElement("code",null,"pnpm test -u")," \u547d\u4ee4\uff0c\u66f4\u65b0 snapshots\u3002"),r.a.createElement("li",null,"\uff08\u53ef\u9009\uff09\u66f4\u65b0\u6587\u6863 ",r.a.createElement(l["Link"],{to:"https://github.com/ant-design/ant-design-mobile/blob/master/docs/guide/i18n.zh.md"},"i18n.zh.md")," \u548c ",r.a.createElement(l["Link"],{to:"https://github.com/ant-design/ant-design-mobile/blob/master/docs/guide/i18n.en.md"},"i18n.en.md"),"\uff0c\u589e\u52a0\u8bed\u8a00\u5217\u8868\u3002")),r.a.createElement("h2",{id:"faq"},r.a.createElement(l["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"FAQ"),r.a.createElement("h3",{id:"\u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u6307\u4ee4\u5f0f\u7684\u8c03\u7528\u4e0d\u652f\u6301-configprovider"},r.a.createElement(l["AnchorLink"],{to:"#\u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u6307\u4ee4\u5f0f\u7684\u8c03\u7528\u4e0d\u652f\u6301-configprovider","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4e3a\u4ec0\u4e48\u7ec4\u4ef6\u6307\u4ee4\u5f0f\u7684\u8c03\u7528\u4e0d\u652f\u6301 ConfigProvider\uff1f"),r.a.createElement("p",null,"\u4ee5 Modal \u4e3a\u4f8b\uff0c\u76f4\u63a5\u8c03\u7528 ",r.a.createElement("code",null,"Modal.show")," \u65b9\u6cd5\uff0cantd-mobile \u4f1a\u901a\u8fc7 ReactDOM.render \u52a8\u6001\u521b\u5efa\u65b0\u7684 React \u5b9e\u4f53\u3002\u5176 context \u4e0e\u5f53\u524d\u4ee3\u7801\u6240\u5728 context \u5e76\u4e0d\u76f8\u540c\uff0c\u56e0\u800c\u65e0\u6cd5\u83b7\u53d6 context \u4fe1\u606f\u3002"),r.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",r.a.createElement("code",null,"setDefaultConfig")," \u8bbe\u7f6e\u9ed8\u8ba4\u8bed\u8a00"),r.a.createElement(c["a"],{code:"import { setDefaultConfig } from 'antd-mobile'\n\nsetDefaultConfig({\n  locale: enUS,\n})",lang:"jsx"})))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:n})}},tCeM:function(e,t,n){},"utj/":function(e,t,n){"use strict";var a=n("ahKI"),r=n.n(a),l=n("bIC1"),c=n.n(l);n("07z2");function o(e,t){return u(e)||d(e,t)||s(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function u(e){if(Array.isArray(e))return e}var v=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),i=o(l,2),s=i[0],m=i[1],d=Object(a["useState"])(!1),u=o(d,2),v=u[0],h=u[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":s||void 0,"data-right-folded":v||void 0},r.a.createElement("table",null,t)))};t["a"]=v}}]);