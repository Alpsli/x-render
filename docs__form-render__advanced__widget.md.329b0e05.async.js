(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{RZMt:function(x,C,a){},Zxc8:function(x,C,a){"use strict";a.r(C);var F=a("q1tI"),u=a.n(F),r=a("k3GJ"),h=a("MZF8"),l=a("dEAq"),s=a.n(l),g=a("H1Ra"),d=a("RZMt"),A=a.n(d);function i(t,E){return K(t)||W(t,E)||U(t,E)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t,E){if(!!t){if(typeof t=="string")return P(t,E);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(t,E)}}function P(t,E){(E==null||E>t.length)&&(E=t.length);for(var n=0,o=new Array(E);n<E;n++)o[n]=t[n];return o}function W(t,E){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var o=[],m=!0,p=!1,v,f;try{for(n=n.call(t);!(m=(v=n.next()).done)&&(o.push(v.value),!(E&&o.length===E));m=!0);}catch(e){p=!0,f=e}finally{try{!m&&n.return!=null&&n.return()}finally{if(p)throw f}}return o}}function K(t){if(Array.isArray(t))return t}function y(t,E){var n,o=(n=t.match(/\.(\w+)$/))===null||n===void 0?void 0:n[1];return o||(o=E.tsx?"tsx":"jsx"),o}var $=function(E){var n,o,m,p=Object(F.useRef)(),v=Object(F.useContext)(l.context),f=v.locale,e=Object(l.useLocaleProps)(f,E),V=Object(l.useDemoUrl)(e.identifier),M=e.demoUrl||V,Z=(h.a===null||h.a===void 0?void 0:h.a.location.hash)==="#".concat(e.identifier),H=Object.keys(e.sources).length===1,R=Object(l.useCodeSandbox)(((n=e.hideActions)===null||n===void 0?void 0:n.includes("CSB"))?null:e),k=Object(l.useRiddle)(((o=e.hideActions)===null||o===void 0?void 0:o.includes("RIDDLE"))?null:e),J=Object(l.useMotions)(e.motions||[],p.current),S=i(J,2),G=S[0],X=S[1],z=Object(l.useCopy)(),j=i(z,2),Q=j[0],Y=j[1],q=Object(F.useState)(function(){return e.sources._?"_":Object.keys(e.sources)[0]}),I=i(q,2),_=I[0],uu=I[1],eu=Object(F.useState)(y(_,e.sources[_])),w=i(eu,2),b=w[0],tu=w[1],nu=Object(F.useState)(Boolean(e.defaultShowCode)),L=i(nu,2),D=L[0],au=L[1],ru=Object(F.useState)(Math.random()),T=i(ru,2),Eu=T[0],N=T[1],O=e.sources[_][b]||e.sources[_].content,lu=Object(l.useTSPlaygroundUrl)(f,O),ou=Object(F.useRef)(),cu=Object(l.usePrefersColor)(),Fu=i(cu,1),iu=Fu[0];Object(F.useEffect)(function(){N(Math.random())},[iu]);function su(c){uu(c),tu(y(c,e.sources[c]))}return u.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",Z?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&u.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),u.a.createElement("div",{ref:p,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?u.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:Eu,src:M,ref:ou}):e.children),u.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&u.a.createElement(l.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),u.a.createElement("div",{className:"__dumi-default-previewer-actions"},R&&u.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:R}),k&&u.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:k}),e.motions&&u.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:X,onClick:function(){return G()}}),e.iframe&&u.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:function(){return N(Math.random())}}),!((m=e.hideActions)===null||m===void 0?void 0:m.includes("EXTERNAL"))&&u.a.createElement(l.Link,{target:"_blank",to:M},u.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),u.a.createElement("span",null),u.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":Y,onClick:function(){return Q(O)}}),b==="tsx"&&D&&u.a.createElement(l.Link,{target:"_blank",to:lu},u.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),u.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(D?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:function(){return au(!D)}})),D&&u.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&u.a.createElement(r.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:su},Object.keys(e.sources).map(function(c){return u.a.createElement(r.TabPane,{tab:c==="_"?"index.".concat(y(c,e.sources[c])):c,key:c})})),u.a.createElement("div",{className:"__dumi-default-previewer-source"},u.a.createElement(g.a,{code:O,lang:b,showCopy:!1}))))};C.default=$},j57V:function(x,C,a){"use strict";a.r(C);var F=a("q1tI"),u=a.n(F),r=a("dEAq"),h=a.n(r),l=a("Zxc8"),s=a("H1Ra"),g=u.a.memo(d=>{var A=d.demos,i=A["widget-demo"].component;return u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h1",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6widget"},u.a.createElement(r.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6widget","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09"),u.a.createElement("p",null,"\u5F53 FormRender \u63D0\u4F9B\u7684\u7EC4\u4EF6\u65E0\u6CD5 100%\u6EE1\u8DB3\u7528\u6237\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u5DF1\u5199\u4E00\u4E2A\u3002\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u529F\u80FD\u4F7F FormRender \u62E5\u6709\u5F88\u597D\u6269\u5C55\u6027\uFF0C\u53EF\u80FD\u7684\u5E94\u7528\u573A\u666F\u5982\u4E0B\uFF1A"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6211\u9700\u8981\u5199\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u7684\u641C\u7D22\u8F93\u5165\u6846\uFF08\u666E\u9002\u6027\u4E0D\u9AD8/\u96BE\u4EE5\u7528 schema \u63CF\u8FF0\u7684\u7EC4\u4EF6\uFF09"),u.a.createElement("li",null,"\u6211\u4EEC\u56E2\u961F\u4F7F\u7528 xxx ui\uFF0C\u4E0E antd \u4E0D\u642D\uFF0C\u5E0C\u671B\u80FD\u9002\u914D\u4E00\u5957 xxx ui \u7EC4\u4EF6\u7684 FormRender\uFF08\u6B22\u8FCE Pull Request\uFF09"),u.a.createElement("li",null,"\u6211\u9700\u8981\u5728\u8868\u5355\u5185\u90E8\u5199\u4E00\u4E2A excel \u4E0A\u4F20\u6309\u94AE\uFF08\u5B8C\u5168\u5B9A\u5236\u5316\u7684\u9700\u6C42\uFF09")),u.a.createElement("p",null,"\u6CE8\uFF1A\u5982\u679C\u662F\u65B0\u589E\u4E00\u4E2A\u5E38\u7528\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u7ED9 FormRender \u7EF4\u62A4\u7684\u540C\u5B66\u6765\u63D0 Pull Request\uFF0C\u8FD9\u6837\u53EF\u4EE5\u66F4\u597D\u6269\u5C55\u5176\u751F\u6001\uFF0CFormRender \u7684\u793E\u533A\u4EE5\u53CA\u63D0\u4F9B\u4E86\u90E8\u5206 ",u.a.createElement(r.Link,{to:"https://github.com/alibaba/x-render/tree/master/widgets"},"\u5E38\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u3002"),u.a.createElement("h2",{id:"\u4F7F\u7528"},u.a.createElement(r.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),u.a.createElement("p",null,"\u7B80\u5355\u7684\u8BF4\uFF0C\u5728 Form \u7EC4\u4EF6\u5C42\u4F7F\u7528 widgets \u5B57\u6BB5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5728 schema \u5185\u4F7F\u7528 widget \u5B57\u6BB5\u6307\u660E\u4F7F\u7528\u7684\u7EC4\u4EF6 key \u503C\u5373\u53EF\uFF1A"),u.a.createElement(s.a,{code:`const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    //...
  },
};

<Form
  schema={schema}
  widgets={{ site: SiteInput }}
  //...
/>;`,lang:"js"}),u.a.createElement("p",null,"\u5B9E\u9645\u4EE3\u7801\u5982\u4E0B\uFF1A")),u.a.createElement(l.default,A["widget-demo"].previewerProps,u.a.createElement(i,null)),u.a.createElement("div",{className:"markdown"},u.a.createElement("h2",{id:"\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6"},u.a.createElement(r.AnchorLink,{to:"#\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6"),u.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5C31\u662F\u666E\u901A\u7684 React \u7EC4\u4EF6\uFF0C\u552F\u4E00\u7684\u8981\u6C42\u662F\u8981\u6709 value/onChange \u8FD9\u4E24\u4E2A props\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A\u503C\u3002\u6240\u4EE5\u5982\u679C\u73B0\u6210\u7684\u7EC4\u4EF6\u5DF2\u7ECF\u9ED8\u8BA4\u4F7F\u7528\u4E86 value/onChange\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u7528\u3002"),u.a.createElement("p",null,"\u4E3E\u4F8B\u6765\u8BF4\uFF1A\u73B0\u5728\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u201C\u7EA7\u8054\u9009\u62E9\u201D\u7EC4\u4EF6\uFF0CFormRender \u5E76\u6CA1\u6709\u5185\u7F6E\u652F\u6301\u3002\u8FD9\u65F6\u6253\u5F00 ",u.a.createElement(r.Link,{to:"https://ant.design/components/cascader/"},"antd \u6587\u6863"),"\uFF0C\u6211\u4EEC\u770B\u5230 cascader \u9ED8\u8BA4\u4F7F\u7528\u4E86 value/onChange\uFF0C\u90A3\u5C31\u76F4\u63A5\u62FF\u6765\u7528\u5427\uFF1A"),u.a.createElement(s.a,{code:`import { Cascader } from 'antd';

// \u9876\u5C42\u5F15\u5165\u6CE8\u518C
...
<Form
  form={form}
  schema={schema}
  widgets={{ cascader: Cascader }}
/>

// schema \u4E2D\u4F7F\u7528
location: {
  title: '\u7701\u5E02\u533A',
  type: 'string',
  widget: 'cascader',
  props: {
    ...
  }
},`,lang:"js"}),u.a.createElement("h2",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684-props"},u.a.createElement(r.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684-props","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684 props"),u.a.createElement("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65F6\uFF0C\u5927\u591A\u6709\u590D\u6742\u5B9A\u5236\u9700\u6C42\uFF0CFormRender \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684 props\uFF1A"),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("strong",null,"disabled"),"\uFF1A\u662F\u5426\u7981\u6B62\u8F93\u5165"),u.a.createElement("li",null,u.a.createElement("strong",null,"readOnly"),"\uFF1A\u662F\u5426\u53EA\u8BFB"),u.a.createElement("li",null,u.a.createElement("strong",null,"value"),"\uFF1A\u7EC4\u4EF6\u73B0\u5728\u7684\u503C"),u.a.createElement("li",null,u.a.createElement("strong",null,"onChange"),"\uFF1A\u51FD\u6570\uFF0C\u63A5\u6536 value \u4E3A\u5165\u53C2\uFF0C\u7528\u4E8E\u5C06\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C\u540C\u6B65\u7ED9 Form"),u.a.createElement("li",null,u.a.createElement("strong",null,"schema"),"\uFF1A\u7EC4\u4EF6\u5BF9\u5E94\u7684\u5B50 schema")),u.a.createElement("p",null,"addons \u4E0A\u6302\u7740\u51E0\u4E4E\u6240\u6709\u7684 form \u65B9\u6CD5\uFF1A"),u.a.createElement(s.a,{code:`const {
  setValueByPath, // (path, value) => void
  getSchemaByPath, // (path) => schema
  setSchemaByPath, // (path) => void
  setSchema, // ({path1: schema1, path2: schema2}) => void
  setValues, // (newData) => void
  getValues, // () => formData
  resetFields, // () => void
  setErrorFields, // (errors) => void
  removeErrorField, // () => void
} = addons;`,lang:"js"}),u.a.createElement("p",null,"\u8BE6\u89C1",u.a.createElement(r.Link,{to:"/form-render/"},"\u5F00\u59CB\u4F7F\u7528"),"\u7684\u201Cform \u65B9\u6CD5\u201D"),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("strong",null,"addons.dataPath"),': \u76EE\u524D\u6570\u636E\u6240\u5728\u7684 path\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0Cstring \u7C7B\u578B\u3002'),u.a.createElement("li",null,u.a.createElement("strong",null,"addons.dataIndex"),': \u5982\u679C dataPath \u4E0D\u5305\u542B\u6570\u7EC4\uFF0C\u5219\u4E3A [], \u5982\u679C dataPath \u5305\u542B\u6570\u7EC4\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0C\u5219\u4E3A [2,0]\u3002\u662F\u81EA\u4E0A\u5230\u4E0B\u6240\u6709\u7ECF\u8FC7\u7684\u6570\u7EC4\u7684 index \u6309\u987A\u5E8F\u5B58\u653E\u7684\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B'),u.a.createElement("li",null,u.a.createElement("strong",null,"addons.dependValues"),": \u5F53\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5BF9\u5E94\u7684 schema \u4F7F\u7528\u5230 dependencies \u5B57\u6BB5\u65F6\uFF0C\u5728\u6B64\u83B7\u5F97 dependencies \u5BF9\u5E94\u7684\u8868\u5355\u9879\u7684\u5B9E\u65F6\u7684\u503C")),u.a.createElement("h2",{id:"antd-\u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},u.a.createElement(r.AnchorLink,{to:"#antd-\u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"antd \u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),u.a.createElement("p",null,"\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0Cantd \u7684\u7EC4\u4EF6\u53EF\u4EE5\u62FF\u6765\u5373\u7528\u3002\u4F46\u6709\u65F6\u7EC4\u4EF6\u7684 props \u5E76\u4E0D\u662F\u7EA6\u5B9A\u7684 value/onChange, \u4F8B\u5982 Checkbox \u7684\u60C5\u51B5\uFF0Cvalue \u503C\u5BF9\u5E94\u7684\u662F checked\uFF0C\u6B64\u65F6\u53EA\u9700\u8981\u5C11\u91CF\u6539\u52A8\u5373\u53EF\uFF1A"),u.a.createElement(s.a,{code:`import { Checkbox } from 'antd';

const MyCheckBox = ({ value, ...rest }) => {
  return <Checkbox checked={value} {...rest} />;
};`,lang:"js"}),u.a.createElement("h2",{id:"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},u.a.createElement(r.AnchorLink,{to:"#\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),u.a.createElement("p",null,"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\uFF0C\u9ED8\u8BA4\u4F1A\u6E32\u67D3\u5185\u7F6E\u7684 html \u7EC4\u4EF6\uFF0C\u4F46\u6709\u65F6 html \u7EC4\u4EF6\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5728\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u9700\u8981\u7684\u5C55\u793A\uFF0C\u6B64\u65F6\u53EF\u4F7F\u7528",u.a.createElement("code",null,"readOnlyWidget"),"\u5B57\u6BB5\u6765\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u5C55\u793A\u3002"),u.a.createElement(s.a,{code:`{
  "type": "object",
  "properties": {
    "string": {
      "title": "\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "siteText"
    }
  }
}`,lang:"json"}),u.a.createElement("p",null,"\u5982\u679C\u4F60\u6253\u7B97\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u91CC\u901A\u8FC7 readOnly \u53C2\u6570\u5224\u65AD\u6761\u4EF6\u5C55\u793A\uFF0C\u65E2\u662F\u8BF4\uFF0Csite \u7EC4\u4EF6\u5DF2\u7ECF\u5199\u4E86\u53EA\u8BFB\u548C\u975E\u53EA\u8BFB\u60C5\u51B5\u4E0B\u7684\u6E32\u67D3"),u.a.createElement(s.a,{code:`const SiteInput = ({ readOnly, value, ...rest }) => {
  if (readOnly) return <div>{\`https://\${value}.com\`}</div>;
  return (
    <Input addonBefore="https://" addonAfter=".com" value={value} {...rest} />
  );
};`,lang:"js"}),u.a.createElement("p",null,"\u6B64\u65F6\u53EF\u4EE5\u6307\u5B9A ",u.a.createElement("code",null,"readOnlyWidget")," \u548C ",u.a.createElement("code",null,"widget")," \u4E3A\u540C\u4E00\u4E2A\u7EC4\u4EF6\uFF1A"),u.a.createElement(s.a,{code:`{
  "type": "object",
  "properties": {
    "string": {
      "title": "\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "site"
    }
  }
}`,lang:"json"}),u.a.createElement("h2",{id:"\u6700\u4F73\u5B9E\u8DF5"},u.a.createElement(r.AnchorLink,{to:"#\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u6700\u4F73\u5B9E\u8DF5"),u.a.createElement("p",null,"\u540C\u4E00\u4E2A\u9879\u76EE\u4E0B\u4E0D\u540C\u7684 form \u91CC\uFF0C\u4F7F\u7528\u5230\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53EF\u80FD\u5927\u81F4\u76F8\u540C\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u4E92\u76F8\u4E0D\u540C\uFF0C\u7B14\u8005\u5EFA\u8BAE\u662F\u4E2D\u5FC3\u5316\u4E00\u4E2A Form \u7EC4\u4EF6\uFF0C\u5E76\u4E00\u6B21\u6027\u5C06\u6240\u6709\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u5165\u5176\u4E2D\u3002\u5728\u9879\u76EE\u7684\u5404\u5904\u5F15\u5165\u5BF9\u5E94\u7EC4\u4EF6\uFF1A"),u.a.createElement(s.a,{code:`//  /Component/FormRender.js
import Form from 'form-render';
import Cascade from './Cascade';
import Percentage from './Percentage';
import MyCheckBox from './MyCheckBox';
import ExcelUploader from './ExcelUploader';

const FormRender = props => {
  return (
    <Form
      widgets={{
        percentage: Percentage,
        cascade: Cascade,
        myCheck: MyCheckBox,
        excelUpload: ExcelUploader,
      }}
      {...props}
    />
  );
};`,lang:"js"}),u.a.createElement("p",null,"\u7136\u540E\u5728\u6BCF\u4E2A form \u9875\u9762\u7EDF\u4E00\u5F15\u5165\u4F7F\u7528"),u.a.createElement(s.a,{code:`import { useForm } from 'form-render';
import FormRender from './Component/FormRender';
const Demo1 = props => {
  const form = useForm();
  return <FormRender form={form} onFinish={() => {}} />;
};`,lang:"js"}),u.a.createElement("h2",{id:"\u5185\u7F6E\u7EC4\u4EF6"},u.a.createElement(r.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u7EC4\u4EF6"),u.a.createElement("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\uFF0C\u4E5F\u8BB8\u5DF2\u7ECF\u6709\u5185\u7F6E\u7EC4\u4EF6\u652F\u6301\u3002\u5177\u4F53\u89C1 ",u.a.createElement(r.Link,{to:"/form-render/schema/inner-widget"},"schema \u4E0E\u5185\u7F6E\u7EC4\u4EF6")))))});C.default=d=>{var A=u.a.useContext(r.context),i=A.demos;return u.a.useEffect(()=>{var B;d!=null&&(B=d.location)!==null&&B!==void 0&&B.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(d.location.hash.slice(1)))},[]),u.a.createElement(g,{demos:i})}}}]);
