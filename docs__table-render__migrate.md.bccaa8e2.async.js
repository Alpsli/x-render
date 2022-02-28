(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{YlJp:function(F,t,u){"use strict";u.r(t);var r=u("q1tI"),e=u.n(r),n=u("dEAq"),d=u.n(n),c=u("H1Ra"),o=e.a.memo(a=>{var E=a.demos;return e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h4",{id:"\u5BF9\u4E8E\u4E4B\u524D\u4F7F\u7528-0x-\u7684\u540C\u5B66\u8003\u8651\u5230\u4EE3\u7801\u4F7F\u7528\u5408\u7406\u6027\u6211\u4EEC\u5BF9\u4E8E-tablerender-10-\u6709\u5982\u4E0B\u66F4\u65B0"},e.a.createElement(n.AnchorLink,{to:"#\u5BF9\u4E8E\u4E4B\u524D\u4F7F\u7528-0x-\u7684\u540C\u5B66\u8003\u8651\u5230\u4EE3\u7801\u4F7F\u7528\u5408\u7406\u6027\u6211\u4EEC\u5BF9\u4E8E-tablerender-10-\u6709\u5982\u4E0B\u66F4\u65B0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5BF9\u4E8E\u4E4B\u524D\u4F7F\u7528 0.x \u7684\u540C\u5B66\uFF0C\u8003\u8651\u5230\u4EE3\u7801\u4F7F\u7528\u5408\u7406\u6027\uFF0C\u6211\u4EEC\u5BF9\u4E8E TableRender 1.0 \u6709\u5982\u4E0B\u66F4\u65B0"),e.a.createElement("ol",null,e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("code",null,"table-render")," \u7684\u5BFC\u51FA\u6709\u5982\u4E0B\u53D8\u5316\uFF0C",e.a.createElement("code",null,"ProTable")," \u4FEE\u6539\u6210 ",e.a.createElement("code",null,"Table"),"\u3002")),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("code",null,"Search"),"\u548C ",e.a.createElement("code",null,"Table"),"\u4E0D\u518D\u9700\u8981\u88AB",e.a.createElement("code",null,"TableContainer"),"\u7EC4\u4EF6\u5305\u88F9\uFF0C\u6240\u6709\u8868\u683C\u4EE3\u7801\u901A\u8FC7 ",e.a.createElement("code",null,"withTable")," \u5305\u4E00\u4E0B\u5373\u53EF\uFF0C\u8FD9\u6837\u4E66\u5199\u66F4\u52A0\u7B80\u6D01\u3002")),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("code",null,"searchApi")," \u539F\u672C\u653E\u5230 ",e.a.createElement("code",null,"TableContainer"),"\u7EC4\u4EF6\u4E0A\u9762\uFF0C\u73B0\u6539\u6210\u653E\u5230 ",e.a.createElement("code",null,"Search")," \u4E0A\uFF0C\u540C\u65F6",e.a.createElement("code",null,"searchApi")," \u6539\u6210 ",e.a.createElement("code",null,"api"),"\uFF0C\u8FD9\u6837\u66F4\u52A0\u5404\u53F8\u5176\u804C\u3002"),e.a.createElement(c.a,{code:`// \u8001\u7248\u672C\u4F7F\u7528
import { ProTable, Search, TableContainer, useTable } from 'table-render';
//...
const TableDemo=(
 <TableContainer searchApi={searchApi}>
   <TableDemo />
 </TableContainer>
);
const TableBody = (
  const { refresh } = useTable();
  <>
     <Search schema={searchSchema} />
     <ProTable />
  </>
);
export default TableDemo;

// \u65B0\u7248\u672C
import { Table, Search, withTable, useTable } from 'table-render';
//...
const TableDemo = (
  const { refresh } = useTable()
  <>
    <Search schema={schema} api={searchApi} />
    <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
  </>
);
export default withTable(TableDemo);`,lang:"js"})))))});t.default=a=>{var E=e.a.useContext(n.context),m=E.demos;return e.a.useEffect(()=>{var l;a!=null&&(l=a.location)!==null&&l!==void 0&&l.hash&&n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),e.a.createElement(o,{demos:m})}}}]);
