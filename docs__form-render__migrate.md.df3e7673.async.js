(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{RZMt:function(M,D,a){},Zxc8:function(M,D,a){"use strict";a.r(D);var i=a("q1tI"),u=a.n(i),E=a("k3GJ"),h=a("MZF8"),r=a("dEAq"),s=a.n(r),g=a("H1Ra"),m=a("RZMt"),C=a.n(m);function c(n,l){return K(n)||W(n,l)||U(n,l)||d()}function d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(n,l){if(!!n){if(typeof n=="string")return P(n,l);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(n,l)}}function P(n,l){(l==null||l>n.length)&&(l=n.length);for(var t=0,o=new Array(l);t<l;t++)o[t]=n[t];return o}function W(n,l){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var o=[],A=!0,B=!1,_,p;try{for(t=t.call(n);!(A=(_=t.next()).done)&&(o.push(_.value),!(l&&o.length===l));A=!0);}catch(e){B=!0,p=e}finally{try{!A&&t.return!=null&&t.return()}finally{if(B)throw p}}return o}}function K(n){if(Array.isArray(n))return n}function y(n,l){var t,o=(t=n.match(/\.(\w+)$/))===null||t===void 0?void 0:t[1];return o||(o=l.tsx?"tsx":"jsx"),o}var $=function(l){var t,o,A,B=Object(i.useRef)(),_=Object(i.useContext)(r.context),p=_.locale,e=Object(r.useLocaleProps)(p,l),V=Object(r.useDemoUrl)(e.identifier),S=e.demoUrl||V,J=(h.a===null||h.a===void 0?void 0:h.a.location.hash)==="#".concat(e.identifier),Z=Object.keys(e.sources).length===1,x=Object(r.useCodeSandbox)(((t=e.hideActions)===null||t===void 0?void 0:t.includes("CSB"))?null:e),R=Object(r.useRiddle)(((o=e.hideActions)===null||o===void 0?void 0:o.includes("RIDDLE"))?null:e),H=Object(r.useMotions)(e.motions||[],B.current),I=c(H,2),z=I[0],G=I[1],X=Object(r.useCopy)(),k=c(X,2),Q=k[0],Y=k[1],q=Object(i.useState)(function(){return e.sources._?"_":Object.keys(e.sources)[0]}),j=c(q,2),f=j[0],uu=j[1],eu=Object(i.useState)(y(f,e.sources[f])),L=c(eu,2),b=L[0],nu=L[1],tu=Object(i.useState)(Boolean(e.defaultShowCode)),w=c(tu,2),v=w[0],au=w[1],lu=Object(i.useState)(Math.random()),N=c(lu,2),ru=N[0],T=N[1],O=e.sources[f][b]||e.sources[f].content,Eu=Object(r.useTSPlaygroundUrl)(p,O),ou=Object(i.useRef)(),Fu=Object(r.usePrefersColor)(),iu=c(Fu,1),cu=iu[0];Object(i.useEffect)(function(){T(Math.random())},[cu]);function su(F){uu(F),nu(y(F,e.sources[F]))}return u.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",J?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&u.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),u.a.createElement("div",{ref:B,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?u.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:ru,src:S,ref:ou}):e.children),u.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&u.a.createElement(r.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),u.a.createElement("div",{className:"__dumi-default-previewer-actions"},x&&u.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:x}),R&&u.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:R}),e.motions&&u.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:G,onClick:function(){return z()}}),e.iframe&&u.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return T(Math.random())}}),!((A=e.hideActions)===null||A===void 0?void 0:A.includes("EXTERNAL"))&&u.a.createElement(r.Link,{target:"_blank",to:S},u.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),u.a.createElement("span",null),u.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":Y,onClick:function(){return Q(O)}}),b==="tsx"&&v&&u.a.createElement(r.Link,{target:"_blank",to:Eu},u.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),u.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(v?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return au(!v)}})),v&&u.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Z&&u.a.createElement(E.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:f,onChange:su},Object.keys(e.sources).map(function(F){return u.a.createElement(E.TabPane,{tab:F==="_"?"index.".concat(y(F,e.sources[F])):F,key:F})})),u.a.createElement("div",{className:"__dumi-default-previewer-source"},u.a.createElement(g.a,{code:O,lang:b,showCopy:!1}))))};D.default=$},pz0r:function(M,D,a){"use strict";a.r(D);var i=a("q1tI"),u=a.n(i),E=a("dEAq"),h=a.n(E),r=a("Zxc8"),s=a("H1Ra"),g=u.a.memo(m=>{var C=m.demos,c=C["migrate-demo"].component,d=C["migrate-demo-1"].component;return u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h1",{id:"\u5347\u7EA7\u65B9\u6848"},u.a.createElement(E.AnchorLink,{to:"#\u5347\u7EA7\u65B9\u6848","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u5347\u7EA7\u65B9\u6848"),u.a.createElement("h2",{id:"\u4E09\u4E2A\u6539\u53D8"},u.a.createElement(E.AnchorLink,{to:"#\u4E09\u4E2A\u6539\u53D8","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u4E09\u4E2A\u6539\u53D8"),u.a.createElement("p",null,u.a.createElement("strong",null,"FormRender v1.0.0 \u7684\u5347\u7EA7\uFF0C\u4ECE\u4F7F\u7528\u65B9\u89C6\u89D2\u6765\u770B\uFF0C\u6700\u4E3B\u8981\u7684\u53D8\u52A8\u5F52\u7ED3\u4E3A\u4E09\u6761\uFF1A")),u.a.createElement("ol",null,u.a.createElement("li",null,u.a.createElement("p",null,"\u63D0\u4EA4\u7684\u65B9\u6CD5\u6536\u675F\uFF08\u5373\u7EDF\u4E00\u63D0\u4F9B submit \u65B9\u6CD5\uFF09\uFF0CformData \u548C\u6821\u9A8C\u4FE1\u606F\u5185\u7F6E")),u.a.createElement("li",null,u.a.createElement("p",null,"Schema \u4E66\u5199\u89C4\u5219\u66F4\u52A0\u6E05\u6670\uFF0C\u66F4\u52A0\u8D34\u8FD1\u7EC4\u4EF6 props")),u.a.createElement("li",null,u.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0D\u518D\u8981\u201C\u5957\u58F3\u201D\uFF0C\u5F88\u591A antd \u7EC4\u4EF6\u76F4\u63A5\u62FF\u6765\u80FD\u7528"))),u.a.createElement("p",null,"\u7B2C 1 \u6761\u662F\u4E3A\u4E86\u66F4\u52A0\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u540E\u4E24\u6761\u5219\u4E3A\u4E86\u66F4\u52A0\u5FEB\u6377\u548C\u8212\u9002\u7684\u5F00\u53D1\u4F53\u9A8C\u3002FormRender 1.0 \u5E26\u6765\u4E86\u54EA\u4E9B\u65B0\u529F\u80FD\uFF0C\u8BE6\u89C1\u6587\u7AE0\u5E95\u90E8 ",u.a.createElement("code",null,"Changelog \u601D\u8003")),u.a.createElement("h2",{id:"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"},u.a.createElement(E.AnchorLink,{to:"#\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"),u.a.createElement("p",null,u.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),u.a.createElement(s.a,{code:`import React, { useState } from 'react';
import FormRender from 'form-render/lib/antd';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
    },
  },
};

function Demo() {
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const onSubmit = () => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        schema={schema}
        formData={formData}
        onChange={setData}
        onValidate={setValid}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}

export default Demo;`,lang:"js"}),u.a.createElement("h3",{id:"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"},u.a.createElement(E.AnchorLink,{to:"#\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"),u.a.createElement("p",null,"\u5B8C\u5168\u4F7F\u7528\u65B0 api\uFF0CformData \u548C onChange \u8FD9\u4E9B\u539F\u672C\u66B4\u9732\u5728\u5916\u7684\u5C5E\u6027\u6536\u675F\uFF0Csubmit \u65B9\u6CD5\u7531 form \u5B9E\u4F8B\u63D0\u4F9B\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u8FC1\u79FB\u4E5F\u5FEB\u7684\uFF0C\u53EA\u662F\u8981\u6CE8\u610F\u6240\u6709\u5728\u5916\u90E8\u4F7F\u7528\u5230 formData \u7684\u573A\u666F\uFF0C\u9700\u8981\u66FF\u6362\u4E3A ",u.a.createElement("code",null,"form.getValues()"),"\uFF0C\u6240\u6709\u4F7F\u7528\u5230 onChange \u7684\u5730\u65B9\u9700\u8981\u4FEE\u6539\u4E3A ",u.a.createElement("code",null,"form.setValues()"))),u.a.createElement(r.default,C["migrate-demo"].previewerProps,u.a.createElement(c,null)),u.a.createElement("div",{className:"markdown"},u.a.createElement("p",null,"\u7531\u4E8E\u65B0\u7248\u7684 formData/onChange/validate/onValidate \u5168\u90E8\u5185\u7F6E\u4E86\uFF0C\u6240\u4EE5\u5728\u8FC1\u79FB\u65F6\uFF0C\u5916\u90E8\u6240\u6709\u4F7F\u7528\u5230\u4E09\u8005\u7684\u5730\u65B9\u4E00\u5F8B\u4F7F\u7528 form \u65B9\u6CD5\u66FF\u6362\uFF1A"),u.a.createElement(s.a,{code:`formData  ->  form.getValues()
onChange  ->  form.setValues(data)
validate  ->  form.errorFields
onValidate  ->  \u76F4\u63A5\u53BB\u6389`,lang:"js"}),u.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4FA7\u7684 0.x \u4E0E 1.x \u7684\u4F7F\u7528\u5BF9\u6BD4\uFF1A"),u.a.createElement(s.a,{code:`// 0.x
const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  'ui:widget': 'myWidget',
  'ui:options': {
    prefix: 'hello',
  },
};

const MyWidget = ({ name, value, onChange, options }) => {
  const handleChange = e => {
    onChange(name, e.target.value);
  };
  return (
    <div>
      <Input value={value} onChange={handleChange} {...options} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};
// 1.x
const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  widget: 'myWidget',
  props: {
    prefix: 'hello',
  },
};

const MyWidget = props => {
  return (
    <div>
      <Input {...props} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};`,lang:"js"}),u.a.createElement("ol",null,u.a.createElement("li",null,u.a.createElement("code",null,"onChange")," \u4E0D\u518D\u63A5\u6536 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u5165\u53C2\uFF0C\u800C\u6539\u4E3A\u66F4\u4E3A\u81EA\u7136\u7684\u53EA\u6709\u4E00\u4E2A\u5165\u53C2 value"),u.a.createElement("li",null,"\u6240\u6709",u.a.createElement("code",null,"ui:options"),"\u7684\u5185\u5BB9\u4F1A\u76F4\u63A5\u5728 props \u91CC\u62FF\u5230\uFF0C\u800C\u4E0D\u9700\u8981\u518D\u4ECE props.options \u91CC\u83B7\u53D6 \uFF08ui:options \u5DF2\u66F4\u540D\u4E3A props\uFF0C\u4E0D\u8FC7\u5728\u9876\u5C42\u505A\u4E86 schema \u5B57\u6BB5\u7684\u517C\u5BB9\uFF09")),u.a.createElement("h2",{id:"schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8"},u.a.createElement(E.AnchorLink,{to:"#schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"schema \u7EC6\u8282\u4E0A\u7684\u6539\u52A8"),u.a.createElement("p",null,"\u5355\u9009\u7EC4\u4EF6\u4E0D\u518D\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u9ED8\u8BA4\u503C\u4E3A undefined\uFF0C\u9664\u975E\u901A\u8FC7 default \u5B57\u6BB5\u6307\u660E\u3002"),u.a.createElement(s.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}`,lang:"js"}),u.a.createElement("h2",{id:"\u65E7\u7248-schema-\u8F6C\u6362\u5668"},u.a.createElement(E.AnchorLink,{to:"#\u65E7\u7248-schema-\u8F6C\u6362\u5668","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u65E7\u7248 schema \u8F6C\u6362\u5668\uFF1A")),u.a.createElement(r.default,C["migrate-demo-1"].previewerProps,u.a.createElement(d,null)),u.a.createElement("div",{className:"markdown"},u.a.createElement("h2",{id:"changelog-\u601D\u8003"},u.a.createElement(E.AnchorLink,{to:"#changelog-\u601D\u8003","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"Changelog \u601D\u8003"),u.a.createElement("p",null,"\u5728\u6700\u540E\u7F57\u5217\u4E00\u4E0B\u7EC6\u8282\u4E0A FormRender 0.x -> 1.0 \u7EC6\u8282\u4E0A\u7684\u6539\u52A8 & \u601D\u8003"),u.a.createElement("h3",{id:"\u529F\u80FD\u589E\u5F3A"},u.a.createElement(E.AnchorLink,{to:"#\u529F\u80FD\u589E\u5F3A","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u529F\u80FD\u589E\u5F3A"),u.a.createElement("ol",null,u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u5C55\u793A\u5347\u7EA7")),u.a.createElement("ul",null,u.a.createElement("li",null,"\u5217\u8868\u7684\u5C55\u793A\u652F\u6301\u4E09\u79CD\u6A21\u5F0F\uFF0C\u5206\u522B\u652F\u6301\u6BCF\u4E2A item 1-2 \u4E2A\u5143\u7D20\uFF0C3-5 \u4E2A\u5143\u7D20\u548C\u590D\u6742\u7ED3\u6784"),u.a.createElement("li",null,"\u5BF9\u8C61\u7684\u5C55\u793A\u652F\u6301\u4E8C\u79CD\u6A21\u5F0F"),u.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A\u548C antd \u6548\u679C\u4E00\u81F4"),u.a.createElement("li",null,"\u5C55\u793A\u7C7B\u578B\u9664\u4E86\u57FA\u7840\u7684 column \u548C row\uFF0C\u8FD8\u652F\u6301\u4E86 inline \u6A21\u5F0F"))),u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u5185\u7F6E\u7EC4\u4EF6\u66F4\u4E30\u5BCC")),u.a.createElement("ul",null,u.a.createElement("li",null,"\u65B0\u589E\u4E86 rate\uFF0CtreeSelect, cascader \u7B49\u7EC4\u4EF6\u7684\u5185\u7F6E\u652F\u6301"))),u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F00\u53D1\u66F4\u4FBF\u6377\uFF0C\u529F\u80FD\u66F4\u5F3A\u5927")),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("p",null,"props \u76F4\u63A5\u900F\u4F20\u4E86\uFF0C\u4E0D\u518D\u9700\u8981\u4ECE options \u5B57\u6BB5\u91CC\u53BB\u53D6\u5F97")),u.a.createElement("li",null,u.a.createElement("p",null,"onChange \u65B9\u6CD5\u7684\u5165\u53C2\u4E0D\u518D\u9700\u8981\u4F20 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08\u8FD9\u4E2A\u8BBE\u8BA1\u5176\u5B9E\u5F88\u4E0D\u81EA\u7136\u548C\u6CA1\u6709\u5FC5\u8981\uFF09\uFF0C\u540C\u65F6\u5982\u679C\u539F\u751F\u7EC4\u4EF6\u7684 onChange \u8FD4\u56DE\u7684\u662F event\uFF0C\u4E5F\u4F1A\u5904\u7406\u4E00\u6B65\u81EA\u52A8\u80FD\u62FF\u5230 value \u503C")),u.a.createElement("li",null,u.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u4E86 onItemChange(namePath, value) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4FEE\u6539\u8868\u5355\u4EFB\u4F55\u6570\u636E\u7684\u503C")),u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u8FD9\u4E9B\u7EC6\u8282\u7684\u76EE\u6807\uFF0C\u662F\u8BA9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u4E66\u5199\u8D34\u8FD1\u62FF\u6765\u4E00\u4E2A\u7EC4\u4EF6\u76F4\u63A5\u80FD\u7528\uFF0C\u800C\u4E0D\u662F\u50CF\u4E4B\u524D\u4E00\u6837\u518D\u7B80\u5355\u7684\u573A\u666F\u4E5F\u9700\u8981\u505A\u4E00\u6B65\u5305\u88C5\u5904\u7406\uFF0C\u4ECE\u539F\u672C\u7684\uFF1A")),u.a.createElement(s.a,{code:`const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  'ui:widget': 'myWidget',
  'ui:options': {
    prefix: 'hello',
  },
};

const MyWidget = ({ name, value, onChange, options }) => {
  const handleChange = e => {
    onChange(name, e.target.value);
  };
  return (
    <div>
      <Input value={value} onChange={handleChange} {...options} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};`,lang:"js"})),u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u53D8\u4E3A\uFF1A")),u.a.createElement(s.a,{code:`const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  widget: 'myWidget',
  props: {
    prefix: 'hello',
  },
};

const MyWidget = props => {
  return (
    <div>
      <Input {...props} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};`,lang:"js"})))),u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u6821\u9A8C\u4E30\u5BCC\u5EA6\u548C\u4F53\u9A8C\u5927\u5E45\u5347\u7EA7")),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A & \u5C55\u793A\u5B9E\u9645\u7EC8\u4E8E\u7B26\u5408\u7528\u6237\u4E60\u60EF\u4E86"),u.a.createElement("li",null,"\u4E0D\u518D\u53EA\u652F\u6301 pattern \u6821\u9A8C\u4E86\uFF0C\u73B0\u5728\u652F\u6301\u5305\u62EC\u81EA\u5B9A\u4E49 validator \u7684\u6240\u6709 antd form \u652F\u6301\u7684\u6821\u9A8C"),u.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5F02\u6B65\u4E86"),u.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5916\u90E8\u6821\u9A8C\u7ED3\u679C\u56DE\u586B\u5C55\u793A\u4E86"))),u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u5176\u4ED6")),u.a.createElement("ul",null,u.a.createElement("li",null,"\u672A\u538B\u7F29\u7684\u5305\u4F53\u79EF\u4ECE 76k -> 11k"),u.a.createElement("li",null,"\u5BF9 typescript \u7684\u5185\u7F6E\u652F\u6301"),u.a.createElement("li",null,"\u6E32\u67D3\u4F1A\u6839\u636E schema \u7684\u7ED3\u6784\u6765\u6E32\u67D3\uFF0C\u4E0D\u518D\u4F1A\u56E0\u4E3A formData \u503C\u7684\u987A\u5E8F\u53D8\u5316\u5F71\u54CD\u5230\u5C55\u793A"),u.a.createElement("li",null,"\u63D0\u4EA4\u7684 formData\uFF0C\u4E0D\u5C55\u793A\u7684 key \u4E0D\u4F1A\u8FD4\u56DE")))),u.a.createElement("h3",{id:"\u8BBE\u8BA1\u53D6\u820D"},u.a.createElement(E.AnchorLink,{to:"#\u8BBE\u8BA1\u53D6\u820D","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u8BBE\u8BA1\u53D6\u820D"),u.a.createElement("ol",null,u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u6682\u65F6\u4E0D\u652F\u6301 fusion \u4E86"),"\uFF1Afusion \u4E0E antd \u5C55\u793A\u4E0A\u975E\u5E38\u7C7B\u4F3C\uFF0C\u4F46\u7EC4\u4EF6 api \u672C\u8EAB\u4EE5\u53CA\u6784\u5EFA\u5C42\u9762\u7684\u914D\u7F6E\u4E0A\u8FD8\u662F\u6709\u4E0D\u5C11\u4E0D\u540C\u7684\uFF0C\u5BF9\u4E24\u8005\u7684\u540C\u65F6\u652F\u6301\u82B1\u4E86\u5927\u91CF\u7684\u7CBE\u529B\u3002FormRender \u9009\u62E9\u6682\u65F6\u653E\u5F03 fusion\uFF0C\u66F4\u52A0\u8D34\u5408 antd\uFF0C\u5728\u529F\u80FD\u6DF1\u5165\u5B9E\u73B0\u548C\u8FED\u4EE3\u6548\u7387\u4E0A\u90FD\u4F1A\u6709\u5F88\u5927\u7684\u63D0\u9AD8\u3002\u4F46\u7EC4\u4EF6\u5E93\u7684\u5165\u53E3\u662F\u4E00\u76F4\u5F00\u653E\u7740\u7684\uFF08widgets props\uFF09\uFF0C\u6B22\u8FCE pr \u652F\u6301 fusion \u4FA7\u7684\u7EC4\u4EF6\u7684\u72EC\u7ACB\u652F\u6301\u3002")),u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u53EA\u5141\u8BB8\u4F7F\u7528\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u51FD\u6570\u8868\u8FBE\u5F0F"),"\uFF1A\u7531\u4E8E schema \u53EF\u4EE5\u662F js \u5BF9\u8C61\uFF0C\u6240\u4EE5\u4E4B\u524D\u652F\u6301 schema \u91CC\u6709\u51FD\u6570\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u4F1A\u5728\u6E32\u67D3\u524D\u8BA1\u7B97\u51FA\u51FD\u6570\u7684 return \u4F5C\u4E3A\u6E32\u67D3\u503C\u3002\u4F46\u7EC4\u4EF6\u7684 props \u4EE5\u53CA\u6821\u9A8C\u51FD\u6570\u53EF\u80FD\u672C\u8EAB\u5C31\u662F\u51FD\u6570\uFF0C\u8FD9\u4E9B\u51FD\u6570\u662F\u4E0D\u5E0C\u671B\u88AB\u63D0\u524D\u8BA1\u7B97\u7684\uFF0C\u800C\u53EA\u662F\u4F5C\u4E3A props \u4F20\u5165\u3002FR \u5E76\u6CA1\u6709\u5F88\u597D\u7684\u529E\u6CD5\u533A\u5206\u4E00\u4E2A\u51FD\u6570\u662F\u9700\u8981\u88AB\u76F4\u63A5\u6267\u884C\u8FD8\u662F\u539F\u6837\u4F5C\u4E3A\u51FD\u6570\u900F\u4F20\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u53D6\u820D\u662F\uFF0C\u4E0D\u5141\u8BB8\u51FD\u6570 props \u6216\u8005\u4E0D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u3002\u7531\u4E8E\u8868\u8FBE\u5F0F\u5DF2\u7ECF\u6709\u5B57\u7B26\u4E32\u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u529F\u80FD\u662F\u5B8C\u5168\u7B49\u4EF7\u7684\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5141\u8BB8\u51FD\u6570\u4F5C\u4E3A props\uFF0C\u6211\u4EEC\u4E0D\u518D\u652F\u6301\u51FD\u6570\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u3002"),u.a.createElement(s.a,{code:`showMore: {
  title: "\u663E\u793A\u66F4\u591A",
  type: "boolean"
},
input1: {
  title: '\u8F93\u5165\u68461',
  type: 'string',
  'ui:hidden': (formData) => !formData.showMore
}

// \u8BF7\u8F6C\u6362\u4E3A\uFF1A
showMore: {
  title: "\u663E\u793A\u66F4\u591A",
  type: "boolean"
},
input1: {
  title: '\u8F93\u5165\u68461',
  type: 'string',
  'ui:hidden': '{{!formData.showMore}}',
}`,lang:"js"})),u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("strong",null,"\u4E0D\u518D\u8BA1\u7B97\u521D\u59CB\u503C"),"\uFF1A\u8FD9\u662F\u4E00\u4E2A\u5185\u90E8\u7684\u6539\u52A8\u3002\u65B0\u7684 FormRender\uFF0C\u4E0D\u4F1A\u6BCF\u6B21 onChange \u540E\u90FD\u6267\u884C resolve \u751F\u6210\u4E00\u4EFD formData \u7684\u9AA8\u67B6\uFF0C\u6CA1\u6709\u586B\u7684\u6846\u7684\u503C\u5C31\u662F undefined\u3002\u800C\u53EA\u5728\u63D0\u4EA4\u548C\u6821\u9A8C\u65F6\u4F1A\u751F\u6210\u9AA8\u67B6\u3002\u8FD9\u907F\u514D\u4E86\u5F88\u591A\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u5C1D\u8BD5\u4FEE\u6539 formData \u65F6\u5BB9\u6613\u4EA7\u751F\u6B7B\u5FAA\u73AF\u6216\u8005\u4FEE\u6539\u65E0\u6548\u7684\u95EE\u9898\uFF0C\u4E5F\u907F\u514D\u4E86\u5916\u90E8\u6CA1\u6709\u5F88\u597D\u7684\u65B9\u6CD5\u62FF\u5230\u9ED1\u7BB1\u7684 resolve \u540E\u7684\u6570\u636E\u3002"))))))});D.default=m=>{var C=u.a.useContext(E.context),c=C.demos;return u.a.useEffect(()=>{var d;m!=null&&(d=m.location)!==null&&d!==void 0&&d.hash&&E.AnchorLink.scrollToAnchor(decodeURIComponent(m.location.hash.slice(1)))},[]),u.a.createElement(g,{demos:c})}}}]);
