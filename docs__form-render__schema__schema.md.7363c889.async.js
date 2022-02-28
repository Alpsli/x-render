(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{RZMt:function(k,B,l){},Zxc8:function(k,B,l){"use strict";l.r(B);var m=l("q1tI"),e=l.n(m),u=l("k3GJ"),y=l("MZF8"),c=l("dEAq"),E=l.n(c),_=l("H1Ra"),d=l("RZMt"),s=l.n(d);function o(n,r){return K(n)||U(n,r)||W(n,r)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(n,r){if(!!n){if(typeof n=="string")return w(n,r);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return w(n,r)}}function w(n,r){(r==null||r>n.length)&&(r=n.length);for(var a=0,i=new Array(r);a<r;a++)i[a]=n[a];return i}function U(n,r){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var i=[],A=!0,p=!1,f,h;try{for(a=a.call(n);!(A=(f=a.next()).done)&&(i.push(f.value),!(r&&i.length===r));A=!0);}catch(t){p=!0,h=t}finally{try{!A&&a.return!=null&&a.return()}finally{if(p)throw h}}return i}}function K(n){if(Array.isArray(n))return n}function b(n,r){var a,i=(a=n.match(/\.(\w+)$/))===null||a===void 0?void 0:a[1];return i||(i=r.tsx?"tsx":"jsx"),i}var $=function(r){var a,i,A,p=Object(m.useRef)(),f=Object(m.useContext)(c.context),h=f.locale,t=Object(c.useLocaleProps)(h,r),z=Object(c.useDemoUrl)(t.identifier),L=t.demoUrl||z,J=(y.a===null||y.a===void 0?void 0:y.a.location.hash)==="#".concat(t.identifier),Z=Object.keys(t.sources).length===1,N=Object(c.useCodeSandbox)(((a=t.hideActions)===null||a===void 0?void 0:a.includes("CSB"))?null:t),O=Object(c.useRiddle)(((i=t.hideActions)===null||i===void 0?void 0:i.includes("RIDDLE"))?null:t),H=Object(c.useMotions)(t.motions||[],p.current),I=o(H,2),G=I[0],X=I[1],Y=Object(c.useCopy)(),j=o(Y,2),V=j[0],Q=j[1],q=Object(m.useState)(function(){return t.sources._?"_":Object.keys(t.sources)[0]}),M=o(q,2),D=M[0],ee=M[1],ue=Object(m.useState)(b(D,t.sources[D])),P=o(ue,2),x=P[0],te=P[1],ne=Object(m.useState)(Boolean(t.defaultShowCode)),R=o(ne,2),g=R[0],ae=R[1],le=Object(m.useState)(Math.random()),S=o(le,2),Ee=S[0],T=S[1],v=t.sources[D][x]||t.sources[D].content,re=Object(c.useTSPlaygroundUrl)(h,v),ce=Object(m.useRef)(),ie=Object(c.usePrefersColor)(),Fe=o(ie,1),me=Fe[0];Object(m.useEffect)(function(){T(Math.random())},[me]);function oe(F){ee(F),te(b(F,t.sources[F]))}return e.a.createElement("div",{style:t.style,className:[t.className,"__dumi-default-previewer",J?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:t.identifier,"data-debug":t.debug||void 0,"data-iframe":t.iframe||void 0},t.iframe&&e.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),e.a.createElement("div",{ref:p,className:"__dumi-default-previewer-demo",style:{transform:t.transform?"translate(0, 0)":void 0,padding:t.compact||t.iframe&&t.compact!==!1?"0":void 0,background:t.background}},t.iframe?e.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(t.iframe).replace(/(\d)$/,"$1px")},key:Ee,src:L,ref:ce}):t.children),e.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":t.title},t.title&&e.a.createElement(c.AnchorLink,{to:"#".concat(t.identifier)},t.title),t.description&&e.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description}})),e.a.createElement("div",{className:"__dumi-default-previewer-actions"},N&&e.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:N}),O&&e.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:O}),t.motions&&e.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:X,onClick:function(){return G()}}),t.iframe&&e.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return T(Math.random())}}),!((A=t.hideActions)===null||A===void 0?void 0:A.includes("EXTERNAL"))&&e.a.createElement(c.Link,{target:"_blank",to:L},e.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),e.a.createElement("span",null),e.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":Q,onClick:function(){return V(v)}}),x==="tsx"&&g&&e.a.createElement(c.Link,{target:"_blank",to:re},e.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),e.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(g?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return ae(!g)}})),g&&e.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Z&&e.a.createElement(u.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:D,onChange:oe},Object.keys(t.sources).map(function(F){return e.a.createElement(u.TabPane,{tab:F==="_"?"index.".concat(b(F,t.sources[F])):F,key:F})})),e.a.createElement("div",{className:"__dumi-default-previewer-source"},e.a.createElement(_.a,{code:v,lang:x,showCopy:!1}))))};B.default=$},dKoY:function(k,B,l){"use strict";l.r(B);var m=l("q1tI"),e=l.n(m),u=l("dEAq"),y=l.n(u),c=l("Zxc8"),E=l("H1Ra"),_=e.a.memo(d=>{var s=d.demos,o=s["schema-demo"].component,C=s["schema-demo-1"].component;return e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"schema-\u89C4\u8303"},e.a.createElement(u.AnchorLink,{to:"#schema-\u89C4\u8303","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"schema \u89C4\u8303"),e.a.createElement("h2",{id:"\u6982\u8FF0"},e.a.createElement(u.AnchorLink,{to:"#\u6982\u8FF0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6982\u8FF0"),e.a.createElement("ol",null,e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("strong",null,e.a.createElement("code",null,"schema")," \u662F <FormRender/> \u7684\u5FC5\u586B props\uFF0C\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7ED3\u6784\u548C\u6821\u9A8C\u3002\u4ED6\u5728\u7ED3\u6784\u4E0A\u4F7F\u7528\u4E86 ",e.a.createElement("code",null,"JSON Schema")," \u56FD\u9645\u89C4\u8303(",e.a.createElement(u.Link,{to:"https://json-schema.org/understanding-json-schema/",target:"_blank"},"Understanding JSON Schema"),")\uFF0C\u4F8B\u5982\uFF1A")),e.a.createElement(E.a,{code:`// \u5BF9\u8C61\u7ED3\u6784\u5982\u4E0B:
{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "count": {
      "title": "\u6570\u5B57",
      "type": "number"
    }
  }
}
// \u5BF9\u8C61\u5217\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A
{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "count": {
        "title": "\u6570\u5B57",
        "type": "number"
      }
    }
  }
}`,lang:"json"})),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("strong",null,"\u5355\u4E2A schema \u7684\u4E66\u5199\u5206\u4E3A",e.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),", ",e.a.createElement("code",null,"rules")," \u548C ",e.a.createElement("code",null,"props"),"\uFF0C",e.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),"\u4E3A\u5404\u4E2A\u7EC4\u4EF6\u5171\u901A\u7684\u63CF\u8FF0\uFF0C",e.a.createElement("code",null,"rules")," \u63CF\u8FF0\u6821\u9A8C\u8865\u5145\u4FE1\u606F\uFF0C",e.a.createElement("code",null,"props")," \u63CF\u8FF0\u7EC4\u4EF6 props\uFF0C\u4F8B\u5982\uFF1A")),e.a.createElement(E.a,{code:`{
  "type": "object",
  "properties": {
    "count": {
      // \u57FA\u7840\u5C5E\u6027
      "title": "\u4EE3\u53F7",
      "type": "string",
      "min": 6,
      // rules (\u8865\u5145\u6821\u9A8C\u4FE1\u606F)
      "rules": [
        {
          "pattern": "^[A-Za-z0-9]+$",
          "message": "\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"
        }
      ],
      // props (\u8865\u5145antd\u7EC4\u4EF6props)
      "props": {
        "allowClear": true
      }
    }
  }
}`,lang:"json"})),e.a.createElement("li",null,e.a.createElement("p",null,"\u201C\u6211\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F\u201D \u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",e.a.createElement(u.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema"))),e.a.createElement("h2",{id:"\u57FA\u7840\u5C5E\u6027"},e.a.createElement(u.AnchorLink,{to:"#\u57FA\u7840\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u5C5E\u6027"),e.a.createElement("p",null,"\u4E3A\u4E86\u66F4\u597D\u7406\u89E3\u57FA\u7840\u5C5E\u6027\u7684\u4F5C\u7528\uFF0C\u4ECE FormRender \u5185\u90E8\u5B9E\u73B0\u7684\u89D2\u5EA6\uFF1A"),e.a.createElement("ol",null,e.a.createElement("li",null,e.a.createElement("code",null,"type"),", ",e.a.createElement("code",null,"format"),", ",e.a.createElement("code",null,"enum")," \u548C ",e.a.createElement("code",null,"widget")," \u5B57\u6BB5\u51B3\u5B9A\u4E86\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u5177\u4F53\u5224\u65AD\u89C4\u5219\u89C1",e.a.createElement(u.AnchorLink,{to:"/form-render/advanced/widget#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6"},"\u5185\u7F6E\u7EC4\u4EF6")),e.a.createElement("li",null,e.a.createElement("code",null,"type"),", ",e.a.createElement("code",null,"format"),", ",e.a.createElement("code",null,"min"),", ",e.a.createElement("code",null,"max"),", ",e.a.createElement("code",null,"required")," \u548C ",e.a.createElement("code",null,"rules")," \u5B57\u6BB5\u7528\u4E8E\u505A\u6821\u9A8C\u5224\u65AD"),e.a.createElement("li",null,e.a.createElement("code",null,"props")," \u5B57\u6BB5\u7528\u4E8E\u8865\u5145\u7EC4\u4EF6\u652F\u6301\u7684\u66F4\u4E3A\u7EC6\u81F4\u7684\u5C5E\u6027")),e.a.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u4F7F\u7528\u5404\u79CD\u201C\u57FA\u7840\u5C5E\u6027\u201D\u7684\u6837\u4F8B\u5982\u4E0B\uFF1A"),e.a.createElement(E.a,{code:`export const basic = {
  displayType: 'row',
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};`,lang:"js"})),e.a.createElement(c.default,s["schema-demo"].previewerProps,e.a.createElement(o,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"title"},e.a.createElement(u.AnchorLink,{to:"#title","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"title"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A",e.a.createElement("code",null,"string")),e.a.createElement("li",null,'\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F\uFF0C\u4F5C\u4E3A label \u5C55\u793A\uFF0C\u6CE8\u610F title \u4E3A""\u65F6\u5360\u4F4D\uFF0Ctitle \u4E0D\u5199\u65F6\u4E0D\u5360\u4F4D')),e.a.createElement("p",null,"\u5982\u4E0B\u4F8B\uFF0C\u901A\u8FC7\u9009\u62E9\u6027\u4E0D\u4F7F\u7528 title\uFF0C\u8FBE\u5230\u5C55\u793A\u6548\u679C")),e.a.createElement(c.default,s["schema-demo-1"].previewerProps,e.a.createElement(C,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"description"},e.a.createElement(u.AnchorLink,{to:"#description","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"description"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A",e.a.createElement("code",null,"string")),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5E38\u5C06\u586B\u5199\u6CE8\u610F\u70B9\u653E\u5165\u6B64\u53C2\u6570")),e.a.createElement("h3",{id:"desctype-v170"},e.a.createElement(u.AnchorLink,{to:"#desctype-v170","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"descType (v1.7.0)"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A'text' | 'icon'"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5F53 displayType = 'row' \u65F6\uFF0C\u65E0\u4F5C\u7528\uFF1B\u4F46\u5F53 displayType = 'column' \uFF08\u9ED8\u8BA4\u503C\uFF09\u65F6\uFF0C\u63CF\u8FF0\u4FE1\u606F\uFF08description\uFF09\u7684\u4E00\u822C\u5C55\u793A\u4E3A\u6587\u6848\u5F62\u5F0F\uFF0C\u5982\u679C\u8BBE\u5B9A descType: 'icon', \u5219\u4F1A\u4F7F\u7528 tooltip \u5F62\u5F0F")),e.a.createElement("h3",{id:"type"},e.a.createElement(u.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"type"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aone of [",e.a.createElement("code",null,"'string'"),", ",e.a.createElement("code",null,"'number'"),", ",e.a.createElement("code",null,"'boolean'"),", ",e.a.createElement("code",null,"'array'"),", ",e.a.createElement("code",null,"'object'"),", ",e.a.createElement("code",null,"'range'"),", ",e.a.createElement("code",null,"'html'"),"]"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Atype \u63CF\u8FF0\u91CC\u7EC4\u4EF6\u7684\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E\u3002")),e.a.createElement("p",null,"\u6CE8 1\uFF1Arange \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u533A\u95F4\u7C7B\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u65F6\u95F4\u533A\u95F4\u9009\u62E9\u3002"),e.a.createElement(E.a,{code:`{
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"json"}),e.a.createElement("p",null,"\u6CE8 2\uFF1Ahtml \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6587\u672C\u7C7B\u7EC4\u4EF6"),e.a.createElement(E.a,{code:`"html": {
  "title": "\u7EAF\u5B57\u7B26\u4E32",
  "type": "html",
  "default": "hello world"
}`,lang:"json"}),e.a.createElement("h3",{id:"format"},e.a.createElement(u.AnchorLink,{to:"#format","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"format"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,"\u7C7B\u578B\uFF1Aone of [",e.a.createElement("code",null,"'image'"),", ",e.a.createElement("code",null,"'textarea'"),", ",e.a.createElement("code",null,"'color'"),", ",e.a.createElement("code",null,"'email'"),", ",e.a.createElement("code",null,"'url'"),", ",e.a.createElement("code",null,"'dateTime'"),", ",e.a.createElement("code",null,"'date'"),", ",e.a.createElement("code",null,"'time'"),", ",e.a.createElement("code",null,"'upload'"),"]")),e.a.createElement("li",null,e.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7528\u6765\u63CF\u8FF0\u8F93\u5165\u6846\u7684\u683C\u5F0F\uFF0C\u8F85\u52A9 type \u4E00\u540C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E"),e.a.createElement(E.a,{code:`// \u9ED8\u8BA4 input
"input": {
  "title": "\u7B80\u5355\u8F93\u5165\u6846",
  "type": "string",
}
// textarea
"textarea": {
  "title": "\u7B80\u5355\u6587\u672C\u7F16\u8F91\u6846",
  "type": "string",
  "format": "textarea"
}
// \u989C\u8272\u7EC4\u4EF6
"color": {
  "title": "\u989C\u8272\u9009\u62E9",
  "type": "string",
  "format": "color"
}
// \u65E5\u671F\u7EC4\u4EF6
"date": {
  "title": "\u65E5\u671F\u9009\u62E9",
  "type": "string",
  "format": "date" // "dateTime"
}
// \u65F6\u95F4\u7EC4\u4EF6
"time": {
  "title": "\u65F6\u95F4\u9009\u62E9",
  "type": "string",
  "format": "time"
}
// \u56FE\u7247\u94FE\u63A5\u7EC4\u4EF6
"image": {
  "title": "\u56FE\u7247\u5C55\u793A",
  "type": "string",
  "format": "image"
}`,lang:"json"}))),e.a.createElement("h3",{id:"default"},e.a.createElement(u.AnchorLink,{to:"#default","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"default"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,"\u7C7B\u578B\uFF1Aany")),e.a.createElement("li",null,e.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C\uFF0C\u6CE8\u610F\u9ED8\u8BA4\u7684\u5BF9\u8C61\u7EC4\u4EF6\u4F7F\u7528 default \u65E0\u6548\uFF08\u5176\u503C\u4F1A\u7531\u5B50\u5143\u7D20\u503C\u51B3\u5B9A\uFF09\uFF0C\u5176\u4ED6\u7C7B\u578B\u5305\u62EC array \u90FD\u53EF\u4EE5\u4F7F\u7528 default\uFF1A"),e.a.createElement(E.a,{code:`"list": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "x": {
        "type": "string",
      }
    }
  },
  "default": [{ "x": "a" }, { "x": "b" }]
}`,lang:"json"}))),e.a.createElement("h3",{id:"required"},e.a.createElement(u.AnchorLink,{to:"#required","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"required"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5FC5\u586B")),e.a.createElement(E.a,{code:`"requiredInput": {
  "title": "\u8F93\u5165\u6846",
  "type": "string",
  "required": true
}`,lang:"json"}),e.a.createElement("h3",{id:"placeholder"},e.a.createElement(u.AnchorLink,{to:"#placeholder","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"placeholder"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1AInput \u7B49\u5143\u7D20\u7684 placeholder\u3002\u8FD9\u4E2A\u5C5E\u6027\u592A\u5E38\u7528\u4E86\uFF0C\u867D\u7136\u4E0D\u662F\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\uFF0C\u4F46 80%\u4EE5\u4E0A\u90FD\u6709\uFF0C\u6240\u4EE5\u51B3\u5B9A\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u3002\u6CE8\u610F placeholder \u7684\u503C\u9075\u5FAA\u5E95\u5C42\u5BF9\u5E94\u7EC4\u4EF6\u6240\u9700\u8981\u7684\u503C\u7684\u4E66\u5199\u89C4\u8303\uFF1A")),e.a.createElement(E.a,{code:`"dateRange": {
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"js"}),e.a.createElement("h3",{id:"bind"},e.a.createElement(u.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"bind"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | string[] | false"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A")),e.a.createElement("ol",null,e.a.createElement("li",null,"\u5F53\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u7684\u5B57\u6BB5\u4E0E\u4F60\u5E0C\u671B\u7684\u8868\u5355\u5C55\u793A\u7ED3\u6784\u4E0D\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 bind \u5B57\u6BB5\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6307\u660E\u8868\u5355\u7684\u67D0\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u5916\u90E8\u6570\u636E\u7684\u53E6\u4E00\u4E2A\u5B57\u6BB5\u3002\u8BE6\u7EC6\u4F8B\u5B50\u89C1 ",e.a.createElement(u.Link,{to:"/form-render/advanced/form-methods"},"\u201C\u8868\u5355\u4E0E\u5916\u754C\u7684\u4EA4\u4E92\u201D")," \u7684\u4F8B 3"),e.a.createElement("li",null,"\u7528\u6237\u5E76\u4E0D\u5E0C\u671B\u7EAF\u5C55\u793A\u7684\u5B57\u6BB5\u4E5F\u51FA\u73B0\u5728\u8868\u5355\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u4F7F\u7528 bind: ",e.a.createElement("code",null,"false")," \u53EF\u907F\u514D\u5B57\u6BB5\u5728\u63D0\u4EA4\u65F6\u51FA\u73B0"),e.a.createElement("li",null,"\u6CE8\u610F\uFF1A\u8BF7\u4E0D\u8981 bind \u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\u4E0B\u9762\u7684\u5B57\u6BB5\uFF0C\u76EE\u524D\u6CA1\u6709\u5BF9\u6B64\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u65E0\u6548\uFF08\u5728\u672A\u6765\u8FD9\u4E2A\u9650\u5236\u4F1A\u89E3\u9664\uFF09")),e.a.createElement("h3",{id:"dependencies"},e.a.createElement(u.AnchorLink,{to:"#dependencies","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"dependencies"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring[]"),e.a.createElement("li",null,"\u652F\u6301\uFF1Av1.6.2 \u4EE5\u4E0A\u7248\u672C"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A")),e.a.createElement("ol",null,e.a.createElement("li",null,"\u4E00\u822C\u6765\u8BF4\u7528 ",e.a.createElement("code",null,"watch")," api \u548C\u52A8\u6001\u8868\u8FBE\u5F0F\uFF0C\u80FD\u591F\u89E3\u51B3\u5927\u90E8\u5206\u8054\u52A8\u95EE\u9898\uFF0C\u4F46\u5F53\u8054\u52A8\u5173\u7CFB\u590D\u6742\u65F6\u5E76\u4E0D\u9002\u5408\u4F7F\u7528\u8868\u8FBE\u5F0F\uFF0C\u5F53\u5173\u8054\u6027\u5B58\u5728\u5217\u8868\u4E2D\u65F6\uFF0C\u4F7F\u7528 watch \u4E5F\u4E0D\u80FD\u5F88\u597D\u5B9E\u73B0"),e.a.createElement("li",null,"\u4E66\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65F6\uFF0C\u5927\u4F19\u513F\u7ECF\u5E38\u60F3\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u5168\u5C40\u7684\u67D0\u4E2A\u503C\uFF0C\u5E76\u6839\u636E\u90A3\u4E2A\u503C\u7684\u53D8\u52A8\u6765\u51B3\u5B9A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u6E32\u67D3\u3002\u4F46\u662F FR 1.0 \u6027\u80FD\u4F18\u5316\u4E0A\u5DF2\u7ECF\u907F\u514D\u4E86\u4E0D\u5FC5\u8981\u7684\u91CD\u590D\u6E32\u67D3\uFF0C\u5982\u679C\u6CA1\u6709\u663E\u5F0F\u7684\u6307\u660E\uFF0C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u662F\u4E0D\u4F1A\u56E0\u4E3A\u5176\u4ED6\u8868\u5355\u9879\u7684\u53D8\u52A8\u800C\u91CD\u65B0\u6E32\u67D3\u7684\uFF0C\u5BFC\u81F4\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u62FF\u5230\u7684 formData \u5E76\u4E0D\u662F\u6700\u65B0\u7684")),e.a.createElement("p",null,"\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u4E24\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u81EA\u7136\u5730\u5F15\u5165\u4E86 ",e.a.createElement("code",null,"dependencies")," \u5B57\u6BB5\u3002\u7528\u4E8E\u663E\u5F0F\u7684\u6307\u660E\u4E00\u4E2A\u8868\u5355\u9879\u4F9D\u8D56\u4E8E\u53E6\u4E00\u4E2A\uFF08\u591A\u4E2A\uFF09\u8868\u5355\u9879\u3002",e.a.createElement("code",null,"dependencies"),"\u4E3A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u4E3A\u6240\u4F9D\u8D56\u7684\u8868\u5355\u9879\u7684\u6570\u636E\u8DEF\u5F84\uFF1A"),e.a.createElement(E.a,{code:`list1: {
  title: '\u5BF9\u8C61\u6570\u7EC4',
  description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        widget: 'radio',
      },
      select2: {
        title: '\u5355\u90092\uFF08\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF09',
        type: 'string',
        widget: 'select2', // select2 \u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5177\u4F53\u5B9E\u73B0\u4E0Edependencies\u7684\u8BA8\u8BBA\u65E0\u5173\uFF0C\u4E0D\u8D58\u8FF0
        dependencies: ['list1[].select1'],
      },
    },
  },
};`,lang:"js"}),e.a.createElement("p",null,"\u5982\u4E0A\u4E3A\u4E00\u4E2A\u5217\u8868 list1\uFF0C\u5176\u4E2D\u6BCF\u4E2A item \u90FD\u5305\u542B\u4E24\u4E2A\u8868\u5355\u9879 select1 \u548C select2\u3002\u901A\u8FC7",e.a.createElement("code",null,"dependencies"),"\u5B57\u6BB5\uFF0Cselect2 \u663E\u5F0F\u7684\u4F9D\u8D56\u4E8E select1\uFF0C\u4EE5\u786E\u4FDD select1 \u7684\u503C\u53D8\u52A8\u7684\u540C\u65F6\uFF0C\u5BF9\u5E94\u7684\u540C\u4E00\u4E2A item \u4E0B\u7684 select2 \u5FC5\u7136\u91CD\u65B0\u6E32\u67D3\u5E76\u83B7\u53D6\u6700\u65B0\u7684\u6570\u636E"),e.a.createElement("h3",{id:"min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min"},e.a.createElement(u.AnchorLink,{to:"#min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"min (0.x \u7248\u672C ",e.a.createElement("code",null,"min"),",",e.a.createElement("code",null,"minItem")," \u548C ",e.a.createElement("code",null,"minLength")," \u7EDF\u4E00\u5230 ",e.a.createElement("code",null,"min"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5C0F\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5C0F\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5C0F\u503C")),e.a.createElement("h3",{id:"max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max"},e.a.createElement(u.AnchorLink,{to:"#max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"max (0.x \u7248\u672C ",e.a.createElement("code",null,"max"),",",e.a.createElement("code",null,"maxItem")," \u548C ",e.a.createElement("code",null,"maxLength")," \u7EDF\u4E00\u5230 ",e.a.createElement("code",null,"max"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5927\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5927\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5927\u503C")),e.a.createElement("h3",{id:"disabled-0x-\u7248\u672C-uidisabled"},e.a.createElement(u.AnchorLink,{to:"#disabled-0x-\u7248\u672C-uidisabled","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"disabled (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:disabled"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u7981\u7528\u72B6\u6001")),e.a.createElement("h3",{id:"readonly-0x-\u7248\u672C-uireadonly"},e.a.createElement(u.AnchorLink,{to:"#readonly-0x-\u7248\u672C-uireadonly","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"readOnly (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:readonly"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u53EA\u8BFB\u72B6\u6001")),e.a.createElement("h3",{id:"hidden-0x-\u7248\u672C-uihidden"},e.a.createElement(u.AnchorLink,{to:"#hidden-0x-\u7248\u672C-uihidden","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"hidden (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:hidden"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u72B6\u6001")),e.a.createElement("h3",{id:"displaytype-0x-\u7248\u672C-uidisplaytype"},e.a.createElement(u.AnchorLink,{to:"#displaytype-0x-\u7248\u672C-uidisplaytype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"displayType (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:displayType"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A",e.a.createElement("code",null,"'row'")," | ",e.a.createElement("code",null,"'column'")),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1ALabel \u4E0E Field \u7684\u5C55\u793A\u5173\u7CFB\uFF0Crow \u8868\u793A\u5E76\u6392\u5C55\u793A\uFF0Ccolumn \u8868\u793A\u4E24\u6392\u5C55\u793A")),e.a.createElement("h3",{id:"width-0x-\u7248\u672C-uiwidth"},e.a.createElement(u.AnchorLink,{to:"#width-0x-\u7248\u672C-uiwidth","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"width (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:width"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6\uFF08\u5E26 label \u4E00\u8D77\uFF09\uFF0C\u4F8B\u5982 '20%'")),e.a.createElement("h3",{id:"labelwidth-0x-\u7248\u672C-uilabelwidth"},e.a.createElement(u.AnchorLink,{to:"#labelwidth-0x-\u7248\u672C-uilabelwidth","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"labelWidth (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:labelWidth"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Anumber | string"),e.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A110"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Alabel \u7684\u5BBD\u5EA6\uFF0C\u6570\u5B57\u503C\u5355\u4F4D\u4E3A px\uFF0C\u4E5F\u53EF\u4F7F\u7528'20%'/'2rem'\u7B49")),e.a.createElement("h3",{id:"classname-0x-\u7248\u672C-uiclassname"},e.a.createElement(u.AnchorLink,{to:"#classname-0x-\u7248\u672C-uiclassname","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"className (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:className"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u660E\u5355\u4E2A\u8868\u5355\u5143\u7D20\u7684 className\uFF0C\u65B9\u4FBF\u81EA\u5B9A\u4E49\u6837\u5F0F")),e.a.createElement("p",null,"\u4F8B\u5982\u5982\u4E0B\u7684 schema \u4F1A\u5728\u751F\u6210\u5143\u7D20\u7684 ",e.a.createElement("code",null,"fr-field")," \u8FD9\u5C42\u6DFB\u52A0\u4E0A\u7528\u6237\u5B9A\u4E49\u7684 ",e.a.createElement("code",null,"my-className")),e.a.createElement(E.a,{code:`audio_on_mic_limit: {
  className: 'my-className',
  title: '\u540C\u65F6\u652F\u6301\u8FDE\u9EA6\u4EBA\u6570',
  default: '1',
  enum: ['1', '2', '3'],
  enumNames: ['1\u4EBA', '2\u4EBA', '3\u4EBA'],
  type: 'string',
  widget: 'radio',
  labelWidth: 145,
}`,lang:"js"}),e.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01iUmLkw1pyzJYsV2fM_!!6000000005430-2-tps-541-119.png",width:"600px"}),e.a.createElement("h3",{id:"widget-0x-\u7248\u672C-uiwidget"},e.a.createElement(u.AnchorLink,{to:"#widget-0x-\u7248\u672C-uiwidget","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"widget (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:widget"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4E00\u4E2A\u5B57\u6BB5\u3002\u7528\u4E8E\u660E\u786E\u6307\u5B9A\u4F7F\u7528\u67D0\u4E2A\u201C\u5185\u7F6E\u7EC4\u4EF6\u201D\u6216\u201C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u201D\u3002\u4F8B\u5982\uFF1A")),e.a.createElement(E.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "widget": "select" // \u660E\u786E\u6307\u660E\u4F7F\u7528\u4E0B\u62C9\u9009\u62E9\u7EC4\u4EF6
}`,lang:"json"}),e.a.createElement("p",null,"FR \u9ED8\u8BA4\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u8BE6\u7EC6\u5339\u914D\u89C4\u5219\u89C1",e.a.createElement(u.Link,{to:"/form-render/schema/inner-widget"},"\u5185\u7F6E\u7EC4\u4EF6"),"\u3002"),e.a.createElement("p",null,e.a.createElement("code",null,"widget"),"\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5339\u914D\u201C\u81EA\u5B9A\u4E49\u201D\u7684\u7EC4\u4EF6\uFF0C\u5982\u4F55\u4F7F\u7528 ",e.a.createElement("code",null,"widget")," \u5B57\u6BB5\u548C ",e.a.createElement("code",null,"widgets")," props \u6765\u505A\u5B9A\u5236\u5316\u8868\u5355\u5143\u7D20\u6E32\u67D3\uFF0C\u53C2\u89C1",e.a.createElement(u.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6")),e.a.createElement("h3",{id:"readonlywidget"},e.a.createElement(u.AnchorLink,{to:"#readonlywidget","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"readOnlyWidget"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3")),e.a.createElement("p",null,"readOnly=true \u7684\u60C5\u51B5\uFF0CFormRender \u9ED8\u8BA4\u4F7F\u7528 html \u7EC4\u4EF6\u6E32\u67D3\u3002\u7279\u6B8A\u60C5\u51B5 html \u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u6B64\u65F6\u901A\u8FC7\u6307\u660E readOnlyWidget \u7684\u65B9\u5F0F\u81EA\u5B9A\u4E49\u6E32\u67D3"),e.a.createElement(E.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "widget": "myWidget", // \u6307\u660E\u4F7F\u7528 myWidget \u6765\u6E32\u67D3
  "readOnlyWidget": "myReadOnlyWidget" // \u6307\u660E\u5728\u53EA\u8BFB\u6A21\u5F0F\u4F7F\u7528 myReadOnlyWidget \u6765\u6E32\u67D3
}`,lang:"json"}),e.a.createElement("h3",{id:"extra"},e.a.createElement(u.AnchorLink,{to:"#extra","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"extra"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5728\u5143\u7D20\u4E0B\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F\uFF0Cextra \u53EF\u4EE5\u662F html string\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EAF\u6587\u6848\uFF0C\u4F1A\u5C55\u793A\u5728\u5143\u7D20\u4E0B\u9762\u4E00\u884C\u7D27\u8D34")),e.a.createElement(E.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "extra": "<a href='xxx'>\u8BE6\u7EC6\u89C4\u8303</a>"
}`,lang:"json"}),e.a.createElement("h3",{id:"properties"},e.a.createElement(u.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"properties"),e.a.createElement("p",null,"\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\uFF08type: object\uFF09\u4E2D\u4F7F\u7528\uFF0C",e.a.createElement("code",null,"properties")," \u7528\u4E8E\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027\uFF1A"),e.a.createElement(E.a,{code:`{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "tickets": {
      "title": "\u95E8\u7968\u6570",
      "type": "number"
    }
  }
}`,lang:"json"}),e.a.createElement("h3",{id:"items"},e.a.createElement(u.AnchorLink,{to:"#items","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"items"),e.a.createElement("p",null,"\u53EA\u5728\u5217\u8868\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u63CF\u8FF0 Array \u4E2D\u6BCF\u4E2A item \u7684\u7ED3\u6784\u3002item \u76EE\u524D\u53EA\u652F\u6301\u662F\u5BF9\u8C61"),e.a.createElement(E.a,{code:`{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "min": 1,
  "max": 3,
  "widget": "cardList",
  "items": {
    "type": "object",
    "properties": {
      "tickets": {
        "title": "\u95E8\u7968\u6570",
        "type": "number"
      }
    }
  }
}`,lang:"json"}),e.a.createElement("h3",{id:"enum--enumnames"},e.a.createElement(u.AnchorLink,{to:"#enum--enumnames","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"enum & enumNames"),e.a.createElement("p",null,"\u53EA\u5728\u9009\u62E9\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C\u548C\u6587\u6848"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | number"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u9009\u9879\u503C & \u9009\u9879\u7684\u6587\u6848")),e.a.createElement(E.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}
// \u591A\u9009
{
  "title": "\u591A\u9009",
  "type": "array",
  "items": {
    "type": "string"
  },
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"]
}`,lang:"json"}),e.a.createElement("p",null,"\u6CE8: \u65E7\u7248 form-render \u4F1A\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u4F46\u662F\u65B0\u7248\u9664\u975E\u901A\u8FC7 default \u6307\u660E\uFF0C\u5426\u5219\u4E0D\u4F1A\u9009\u4E2D\u4EFB\u4F55\u4E00\u9879\uFF0C\u4E14\u521D\u59CB\u503C\u662F undefined"),e.a.createElement("h3",{id:"rules"},e.a.createElement(u.AnchorLink,{to:"#rules","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"rules"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A\u6570\u7EC4"),e.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u6240\u6709\u9664\u4E86\u5FC5\u586B\u4EE5\u5916\u7684\u8868\u5355\u6821\u9A8C\u63CF\u8FF0\u901A\u8FC7 ",e.a.createElement("code",null,"rules")," \u5B57\u6BB5\uFF0C\u8BE6\u89C1 ",e.a.createElement(u.Link,{to:"/form-render/schema/rules"},"rules \u4E66\u5199\u89C4\u8303"))),e.a.createElement("h3",{id:"props-0x-\u7248\u672C-uioptions"},e.a.createElement(u.AnchorLink,{to:"#props-0x-\u7248\u672C-uioptions","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"props (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:options"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aobject"),e.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 ",e.a.createElement("code",null,"props")," \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002",e.a.createElement("code",null,"props")," \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 ",e.a.createElement("code",null,"props")," \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRender \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982")),e.a.createElement(E.a,{code:`url: {
  title: "\u7F51\u5740",
  type: "string",
  props: {
    prefix: 'https://',
    suffix: '.com'
  }
}`,lang:"js"}),e.a.createElement("p",null,"\u8BE6\u89C1 ",e.a.createElement(u.Link,{to:"/form-render/schema/props"},"props \u4E66\u5199\u89C4\u8303")))))});B.default=d=>{var s=e.a.useContext(u.context),o=s.demos;return e.a.useEffect(()=>{var C;d!=null&&(C=d.location)!==null&&C!==void 0&&C.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(d.location.hash.slice(1)))},[]),e.a.createElement(_,{demos:o})}}}]);
