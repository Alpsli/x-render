(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{Ov3d:function(g,_,n){"use strict";n.r(_);var c=n("q1tI"),t=n.n(c),f=n("dEAq"),O=n.n(f),l=n("Zxc8"),D=t.a.memo(d=>{var v=d.demos,C=v["generator-playground"].component;return t.a.createElement(t.a.Fragment,null,t.a.createElement(l.default,v["generator-playground"].previewerProps,t.a.createElement(C,null)))});_.default=d=>{var v=t.a.useContext(f.context),C=v.demos;return t.a.useEffect(()=>{var s;d!=null&&(s=d.location)!==null&&s!==void 0&&s.hash&&f.AnchorLink.scrollToAnchor(decodeURIComponent(d.location.hash.slice(1)))},[]),t.a.createElement(D,{demos:C})}},RZMt:function(g,_,n){},Zxc8:function(g,_,n){"use strict";n.r(_);var c=n("q1tI"),t=n.n(c),f=n("k3GJ"),O=n("MZF8"),l=n("dEAq"),D=n.n(l),d=n("H1Ra"),v=n("RZMt"),C=n.n(v);function s(a,o){return $(a)||k(a,o)||W(a,o)||K()}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(a,o){if(!!a){if(typeof a=="string")return S(a,o);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(a,o)}}function S(a,o){(o==null||o>a.length)&&(o=a.length);for(var r=0,i=new Array(o);r<o;r++)i[r]=a[r];return i}function k(a,o){var r=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var i=[],m=!0,E=!1,b,p;try{for(r=r.call(a);!(m=(b=r.next()).done)&&(i.push(b.value),!(o&&i.length===o));m=!0);}catch(e){E=!0,p=e}finally{try{!m&&r.return!=null&&r.return()}finally{if(E)throw p}}return i}}function $(a){if(Array.isArray(a))return a}function M(a,o){var r,i=(r=a.match(/\.(\w+)$/))===null||r===void 0?void 0:r[1];return i||(i=o.tsx?"tsx":"jsx"),i}var F=function(o){var r,i,m,E=Object(c.useRef)(),b=Object(c.useContext)(l.context),p=b.locale,e=Object(l.useLocaleProps)(p,o),Z=Object(l.useDemoUrl)(e.identifier),R=e.demoUrl||Z,J=(O.a===null||O.a===void 0?void 0:O.a.location.hash)==="#".concat(e.identifier),H=Object.keys(e.sources).length===1,T=Object(l.useCodeSandbox)(((r=e.hideActions)===null||r===void 0?void 0:r.includes("CSB"))?null:e),I=Object(l.useRiddle)(((i=e.hideActions)===null||i===void 0?void 0:i.includes("RIDDLE"))?null:e),G=Object(l.useMotions)(e.motions||[],E.current),j=s(G,2),X=j[0],z=j[1],Q=Object(l.useCopy)(),x=s(Q,2),V=x[0],Y=x[1],q=Object(c.useState)(function(){return e.sources._?"_":Object.keys(e.sources)[0]}),L=s(q,2),y=L[0],ee=L[1],te=Object(c.useState)(M(y,e.sources[y])),U=s(te,2),P=U[0],ae=U[1],re=Object(c.useState)(Boolean(e.defaultShowCode)),B=s(re,2),h=B[0],ne=B[1],oe=Object(c.useState)(Math.random()),w=s(oe,2),le=w[0],N=w[1],A=e.sources[y][P]||e.sources[y].content,ie=Object(l.useTSPlaygroundUrl)(p,A),ue=Object(c.useRef)(),ce=Object(l.usePrefersColor)(),se=s(ce,1),de=se[0];Object(c.useEffect)(function(){N(Math.random())},[de]);function me(u){ee(u),ae(M(u,e.sources[u]))}return t.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",J?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&t.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),t.a.createElement("div",{ref:E,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?t.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:le,src:R,ref:ue}):e.children),t.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&t.a.createElement(l.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&t.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),t.a.createElement("div",{className:"__dumi-default-previewer-actions"},T&&t.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:T}),I&&t.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:I}),e.motions&&t.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:function(){return X()}}),e.iframe&&t.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return N(Math.random())}}),!((m=e.hideActions)===null||m===void 0?void 0:m.includes("EXTERNAL"))&&t.a.createElement(l.Link,{target:"_blank",to:R},t.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),t.a.createElement("span",null),t.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":Y,onClick:function(){return V(A)}}),P==="tsx"&&h&&t.a.createElement(l.Link,{target:"_blank",to:ie},t.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),t.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(h?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return ne(!h)}})),h&&t.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&t.a.createElement(f.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:y,onChange:me},Object.keys(e.sources).map(function(u){return t.a.createElement(f.TabPane,{tab:u==="_"?"index.".concat(M(u,e.sources[u])):u,key:u})})),t.a.createElement("div",{className:"__dumi-default-previewer-source"},t.a.createElement(d.a,{code:A,lang:P,showCopy:!1}))))};_.default=F}}]);
