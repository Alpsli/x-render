(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{y1sG:function(c,F,e){"use strict";e.r(F);var r=e("q1tI"),u=e.n(r),n=e("dEAq"),d=e.n(n),a=e("H1Ra"),i=u.a.memo(t=>{var l=t.demos;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h1",{id:"\u5185\u7F6E\u7EC4\u4EF6"},u.a.createElement(n.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u7EC4\u4EF6"),u.a.createElement("p",null,"\u6709\u65F6\uFF0C\u7528\u6237\u5E0C\u671B\u5F3A\u5236\u6307\u5B9A\u4E00\u4E2A\u8868\u5355\u539F\u4EF6\u7528\u67D0\u4E2A\u5185\u7F6E\u6216\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u6765\u5C55\u793A\uFF0C\u53EF\u4F7F\u7528 widget \u5B57\u6BB5\u6765\u8BF4\u660E\uFF0C\u8FD9\u4E2A\u6307\u5B9A\u7684\u4F18\u5148\u7EA7\u662F\u6700\u9AD8\u7684\uFF0C\u88AB\u6307\u5B9A\u7684\u8868\u5355\u9879\u4E00\u5B9A\u4F1A\u4F7F\u7528\u6B64 widget \u6765\u6E32\u67D3\uFF0C\u4F8B\u5982\u4E0B\u9762\u7684 schema \u5982\u679C\u4E0D\u4EE5 widget \u6307\u660E\uFF0C\u4F1A\u9ED8\u8BA4\u7528 input \u8F93\u5165\u6846\u6765\u6E32\u67D3\uFF0C\u4F46\u73B0\u5728\u4F1A\u7528 select \u4E0B\u62C9\u5355\u9009\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u5373\u4F7F\u6CA1\u6709\u4E0B\u62C9\u9009\u9879\uFF1A"),u.a.createElement(a.a,{code:`string: {
  title: '\u4E0B\u62C9\u9009\u6846',
  type: 'string',
  widget: 'select',
},`,lang:"js"}),u.a.createElement("p",null,"\u76EE\u524D FormRender \u5DF2\u7ECF\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\u7684\u5C55\u793A\uFF0C\u89C1 ",u.a.createElement(n.Link,{to:"/playground"},"playground")," - \u57FA\u7840\u63A7\u4EF6"),u.a.createElement("p",null,"\u7EC4\u4EF6\u4E0E widget name \u7684\u89C4\u5219\u5982\u4E0B\uFF1A"),u.a.createElement(a.a,{code:`# \u8F93\u5165\u7C7B
\u8F93\u5165\u6846 input
\u591A\u884C\u8F93\u5165\u6846 textarea
\u6570\u5B57\u8F93\u5165\u6846 number
\u94FE\u63A5\u8F93\u5165\u6846 url
\u56FE\u7247\u8F93\u5165\u6846 imageInput

# \u65E5\u671F\u7C7B
\u65E5\u671F\u7EC4\u4EF6 date
\u65F6\u95F4\u7EC4\u4EF6 time
\u65E5\u671F\u8303\u56F4 dateRange
\u65F6\u95F4\u8303\u56F4 timeRange

# \u9009\u62E9\u7C7B
\u662F\u5426\u9009\u62E9 checkbox
\u4E0B\u62C9\u5355\u9009 select
\u70B9\u51FB\u5355\u9009 radio
\u4E0B\u62C9\u591A\u9009\u6846 multiSelect
\u70B9\u51FB\u591A\u9009\u6846 checkboxes
\u6811\u5F62\u9009\u62E9 treeSelect

# \u5176\u4ED6
\u989C\u8272\u9009\u62E9 color
\u4E0A\u4F20\u7EC4\u4EF6 upload
\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09html
\u6ED1\u52A8\u8F93\u5165\u6761 slider
\u4E94\u661F\u8BC4\u5206 rate

# \u7ED3\u6784\u7C7B
\u5BF9\u8C61 map
\u5217\u8868 cardList/simpleList/tableList/drawerList`,lang:"sh"}),u.a.createElement("p",null,"\u6CE8\uFF1A\u5176\u4E2D\u5217\u8868\u7684 ",u.a.createElement("code",null,"widget")," \u6709\u56DB\u4E2A\u53EF\u5339\u914D\u7EC4\u4EF6\uFF08cardList/simpleList/tableList/drawerList\uFF09"),u.a.createElement("ol",null,u.a.createElement("li",null,"\u9ED8\u8BA4\u4F7F\u7528 widget: ",u.a.createElement("code",null,"'cardList'"),"\uFF0C\u5361\u7247 list \u7684\u5C55\u793A\uFF0C\u9002\u5B9C\u6709\u590D\u6742\u7ED3\u6784\uFF0C\u4F46 item \u6570\u91CF\u4E0D\u5927\u7684\u573A\u666F"),u.a.createElement("li",null,"\u5982\u679C\u6BCF\u4E2A item \u6570\u636E 1-2 \u6761\uFF0C\u4E14\u6CA1\u6709\u590D\u6742\u7ED3\u6784\uFF08\u4F8B\u5982\u5BF9\u8C61\u3001\u5217\u8868\uFF09\uFF0C\u5EFA\u8BAE\u4F7F\u7528 widget: ",u.a.createElement("code",null,"'simpleList'")),u.a.createElement("li",null,"\u5982\u679C\u6BCF\u4E2A item \u6570\u636E 3-5 \u6761\uFF0C\u4E14\u6CA1\u6709\u590D\u6742\u7ED3\u6784\uFF08\u4F8B\u5982\u5BF9\u8C61\u3001\u5217\u8868\uFF09\uFF0C\u5EFA\u8BAE\u4F7F\u7528 widget: ",u.a.createElement("code",null,"'tableList'")),u.a.createElement("li",null,"\u5982\u679C\u6BCF\u4E2A\u5404 item \u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742\uFF0C\u5EFA\u8BAE\u4F7F\u7528 widget: ",u.a.createElement("code",null,"'drawerList'"))),u.a.createElement("p",null,"\u56DB\u79CD\u5C55\u793A\u89C1",u.a.createElement(n.AnchorLink,{to:"/form-render/advanced/display#%E5%88%97%E8%A1%A8%E7%9A%84%E5%B1%95%E7%A4%BA"},"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5")),u.a.createElement("p",null,"\u5728 schema \u4E2D\u901A\u8FC7 widget \u5173\u952E\u5B57\u58F0\u660E\uFF0C\u53EF\u4EE5\u5F3A\u5236\u58F0\u660E\u4F7F\u7528\u67D0\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3"),u.a.createElement(a.a,{code:`string: {
  title: '\u4E0B\u62C9\u9009\u6846',
  type: 'string',
  widget: 'select',
},`,lang:"js"}),u.a.createElement("p",null,"\u5F88\u591A\uFF08\u4F46\u4E0D\u662F\u6240\u6709\u7684\uFF09\u5185\u7F6E\u7EC4\u4EF6\u4E0E schema \u6709\u9ED8\u8BA4\u5339\u914D\u89C4\u5219\uFF1A"),u.a.createElement(a.a,{code:`export const mapping = {
  default: 'input',
  string: 'input',
  array: 'list',
  boolean: 'checkbox',
  integer: 'number',
  number: 'number',
  object: 'map',
  html: 'html',
  'string:upload': 'upload',
  'string:url': 'url',
  'string:dateTime': 'date',
  'string:date': 'date',
  'string:time': 'time',
  'string:textarea': 'textarea',
  'string:color': 'color',
  'string:image': 'imageInput',
  'range:time': 'timeRange',
  'range:date': 'dateRange',
  'range:dateTime': 'dateRange',
  '*?enum': 'radio',
  '*?enum_long': 'select',
  'array?enum': 'checkboxes',
  'array?enum_long': 'multiSelect',
  '*?readOnly': 'html',
};`,lang:"js"}),u.a.createElement("p",null,"\u5176\u4E2D\u5DE6\u4FA7\u4E3A\u5339\u914D\u89C4\u5219\uFF08\u683C\u5F0F\u4E3A ",u.a.createElement("code",null,"type:format?enum/readOnly"),"\uFF09\uFF0C\u53F3\u4FA7\u4E3A\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u3002\u4F8B\u5982"),u.a.createElement(a.a,{code:`string: {
  title: '\u5355\u9009\u6846',
  type: 'string',
  enum: ['a', 'b'],
  enumNames: ['\u9009\u98791', '\u9009\u98792'],
}`,lang:"js"})))});F.default=t=>{var l=u.a.useContext(n.context),m=l.demos;return u.a.useEffect(()=>{var E;t!=null&&(E=t.location)!==null&&E!==void 0&&E.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),u.a.createElement(i,{demos:m})}}}]);
