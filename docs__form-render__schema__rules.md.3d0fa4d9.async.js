(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"+BWX":function(s,E,a){"use strict";a.r(E);var c=a("q1tI"),u=a.n(c),e=a("dEAq"),o=a.n(e),n=a("H1Ra"),F=u.a.memo(t=>{var r=t.demos;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h1",{id:"rules-\u6821\u9A8C"},u.a.createElement(e.AnchorLink,{to:"#rules-\u6821\u9A8C","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"rules (\u6821\u9A8C)"),u.a.createElement("ol",null,u.a.createElement("li",null,u.a.createElement("p",null,"rules \u7528\u4E8E\u63CF\u8FF0\u7EC6\u81F4\u7684\u3001\u5B9A\u5236\u5316\u7684\u6821\u9A8C\uFF0C\u7528\u6CD5\u4E0E antd \u7C7B\u4F3C\uFF0C\u56E0\u4E3A FormRender \u5728\u5E95\u5C42\u4F7F\u7528\u4E86\u4E0E antd \u76F8\u540C\u7684 ",u.a.createElement("code",null,"async-validator")," \u4F9D\u8D56\u3002\u6240\u4EE5 ",u.a.createElement(e.Link,{to:"https://github.com/yiminghe/async-validator#type"},u.a.createElement("code",null,"async-validator")," \u6587\u6863")," \u7684\u6240\u6709 api \u5728 FormRender \u4E2D\u90FD\u53EF\u652F\u6301\u3002"),u.a.createElement(n.a,{code:`{
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
      ]
    }
  }
}`,lang:"json"}),u.a.createElement(n.a,{code:`"zip": {
  "title": "zip code",
  "type": "string",
  "rules": [{ "len": 8, "message": "invalid zip" }]
}`,lang:"json"})),u.a.createElement("li",null,u.a.createElement("p",null,"\u5F53\u5E38\u89C4\u5B57\u6BB5\u4E0D\u80FD\u6EE1\u8DB3\u65F6\uFF0C\u53EF\u4F7F\u7528 ",u.a.createElement("code",null,"validator")," \u52A8\u6001\u6821\u9A8C\u3002\u8BE6\u89C1 ",u.a.createElement(e.Link,{to:"https://github.com/yiminghe/async-validator#validate"},u.a.createElement("code",null,"async-validator")," \u6587\u6863")),u.a.createElement(n.a,{code:`name: {
  type: 'string',
  required: true,
  rules: [{ validator: (rule, value) => value === 'muji' }]
},`,lang:"js"})),u.a.createElement("li",null,u.a.createElement("p",null,"\u4F5C\u4E3A FormRender \u4E66\u5199\u7684\u7279\u522B\u89C4\u5219\uFF0C\u7531\u4E8E\u4EE5\u4E0B\u4E2A\u5B57\u6BB5\u540C\u65F6\u6D89\u53CA\u5230\u4E86\u5C55\u793A\u548C\u6821\u9A8C\uFF0C\u6240\u4EE5\u5DF2\u7ECF\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u4E2D\uFF0C\u800C\u4E0D\u9700\u8981\u5728 rules \u4E2D\u7279\u522B\u6CE8\u660E"),u.a.createElement(n.a,{code:`type
format
min
max
required`,lang:"text"})),u.a.createElement("li",null,u.a.createElement("p",null,"\u5982\u679C\u60F3\u5B9A\u5236\u4E00\u7C7B\u6821\u9A8C\u7684\u6587\u6848\uFF0C\u5EFA\u8BAE\u4F7F\u7528 ",u.a.createElement("code",null,"validateMessages")," props \u6765\u7EDF\u4E00\u8986\u76D6\u6821\u9A8C\u4FE1\u606F"),u.a.createElement("p",null,u.a.createElement("code",null,"FormRender")," \u4E3A\u6821\u9A8C\u63D0\u4F9B\u4E86",u.a.createElement(e.Link,{to:"https://github.com/alibaba/x-render/blob/master/packages/form-render/src/validateMessageCN.js"},"\u9ED8\u8BA4\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F"),"\uFF0C\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",u.a.createElement("code",null,"validateMessages")," \u5C5E\u6027\uFF0C\u4FEE\u6539\u5BF9\u5E94\u7684\u63D0\u793A\u6A21\u677F\u3002\u4E00\u79CD\u5E38\u89C1\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u662F\u914D\u7F6E\u56FD\u9645\u5316\u63D0\u793A\u4FE1\u606F\uFF1A"),u.a.createElement(n.a,{code:`const validateMessages = {
  required: '\${title}\u662F\u5FC5\u9009\u5B57\u6BB5',
  // ...
};

<Form validateMessages={validateMessages} />;`,lang:"js"}),u.a.createElement("p",null,"\u76EE\u524D\u53EF\u4EE5\u7528\u7684\u8F6C\u4E49\u5B57\u6BB5\u4E3A ",u.a.createElement("code",null,"$","{","title","}"),"/",u.a.createElement("code",null,"$","{","min","}"),"/",u.a.createElement("code",null,"$","{","max","}"),"/",u.a.createElement("code",null,"$","{","len","}"),"/",u.a.createElement("code",null,"$","{","pattern","}"),", \u5982\u679C\u6709\u66F4\u591A\u9700\u6C42\u8BF7\u63D0 ",u.a.createElement(e.Link,{to:"https://github.com/alibaba/x-render/issues/new/choose"},"issue"))),u.a.createElement("li",null,u.a.createElement("p",null,"\u5982\u679C\u60F3\u5B9A\u5236\u5355\u4E2A\u7EC4\u4EF6\u5FC5\u586B\u7684\u9519\u8BEF\u6587\u6848\uFF0C\u8BF7\u540C\u65F6\u4E66\u5199 required \u548C rules\uFF1A"),u.a.createElement(n.a,{code:`"zip": {
  "title": "zip code",
  "type": "string",
  "required": true,
  "rules": [{"len": 8, "message": "invalid zip"},{"required": true, "message": "zip is required"}]
}`,lang:"json"})))))});E.default=t=>{var r=u.a.useContext(e.context),i=r.demos;return u.a.useEffect(()=>{var l;t!=null&&(l=t.location)!==null&&l!==void 0&&l.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),u.a.createElement(F,{demos:i})}}}]);
