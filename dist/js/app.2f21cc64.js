(function(t){function o(o){for(var a,r,c=o[0],l=o[1],i=o[2],m=0,u=[];m<c.length;m++)r=c[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(o);while(u.length)u.shift()();return n.push.apply(n,i||[]),e()}function e(){for(var t,o=0;o<n.length;o++){for(var e=n[o],a=!0,c=1;c<e.length;c++){var l=e[c];0!==s[l]&&(a=!1)}a&&(n.splice(o--,1),t=r(r.s=e[0]))}return t}var a={},s={app:0},n=[];function r(o){if(a[o])return a[o].exports;var e=a[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,o,e){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)r.d(e,a,function(o){return t[o]}.bind(null,a));return e},r.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="/mo-ui-website/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=o,c=c.slice();for(var i=0;i<c.length;i++)o(c[i]);var p=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";e("85ec")},"0d48":function(t,o,e){"use strict";var a=e("c40b"),s=e("2e76"),n=e("2877"),r=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"66dc5289",null);o["default"]=r.exports},"2e76":function(t,o,e){"use strict";var a=e("fef7"),s=e.n(a);o["default"]=s.a},3104:function(t,o,e){"use strict";e("ba61")},"318a":function(t,o,e){"use strict";e("c456")},"37cf":function(t,o,e){},"471d":function(t,o,e){"use strict";e("5ef0")},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{attrs:{id:"app"}},[a("mo-layout",{staticClass:"websiteLayout"},[a("mo-header",{staticClass:"header"},[a("mo-row",[a("mo-col",{attrs:{span:"4"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:e("59c4")}})])],1),a("mo-col",{attrs:{span:"20"}})],1)],1),a("mo-layout",[a("mo-sider",{staticClass:"sider"},[a("div",{staticClass:"collapseWrapper"},[a("mo-collapse",{staticClass:"collapse",attrs:{selected:t.selectedTab},on:{"update:selected":function(o){t.selectedTab=o}}},[a("mo-collapse-item",{attrs:{title:"入门",name:"1"}},[a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"install"}},[t._v("安装")])],1),a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"start"}},[t._v("快速上手")])],1)]),a("mo-collapse-item",{attrs:{title:"组件",name:"2"}},[a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"button"}},[t._v("button-按键")])],1),a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"collapse"}},[t._v("collapse-折叠面板")])],1),a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"grid"}},[t._v("grid-栅格工具")])],1),a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"input"}},[t._v("input-输入框")])],1),a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"layout"}},[t._v("layout-默认布局")])],1),a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"popover"}},[t._v("popover-弹出层")])],1),a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"tabs"}},[t._v("tabs-标签页")])],1),a("p",{staticClass:"linkWrapper"},[a("router-link",{attrs:{to:"toast"}},[t._v("toast-弹出提示框")])],1)])],1)],1)]),a("mo-layout",{staticClass:"contentArea"},[a("mo-content",{staticClass:"websiteContent"},[a("div",{staticClass:"templateWrapper"},[a("router-view")],1)])],1)],1)],1),t._m(0)],1)},n=[function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"githubLink"},[a("a",{attrs:{href:"https://github.com/XXXXXie1997/Mo-UI-Demo1"}},[a("img",{staticStyle:{"max-width":"1.2em","max-height":"1.2em"},attrs:{src:e("d3b8")}}),t._v("GitHub ")])])}],r=e("abe1"),c=(e("c854"),{name:"App",components:{"mo-layout":r["Layout"],"mo-sider":r["Sider"],"mo-header":r["Header"],"mo-content":r["Content"],"mo-collapse":r["Collapse"],"mo-collapse-item":r["CollapseItem"],"mo-row":r["Row"],"mo-col":r["Col"]},data:function(){return{selectedTab:["1","2"]}}}),l=c,i=(e("034f"),e("2877")),p=Object(i["a"])(l,s,n,!1,null,null,null),m=p.exports,u=e("8c4f"),v=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"indexTemplate"},[e("p",[t._v("该页面本来应该是主页，但一想到这个UI除了自己没人会用，于是决定不做了。")]),e("br"),e("p",[t._v("故还请直接移步-> "),e("mo-button",[e("a",{staticClass:"link",attrs:{href:"http://xietianyu1997.top/mo-ui-document/#/start"}},[t._v("快速上手")])])],1)])},d=[],b={components:{"mo-button":r["Button"]}},_=b,f=(e("3104"),Object(i["a"])(_,v,d,!1,null,"b075f0fc",null)),h=f.exports,C=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"start"},[e("h1",[t._v("快速上手")]),e("br"),e("h2",[t._v("1. 引入组件及默认css")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content1))])])]),e("br"),e("h2",[t._v("2. 注册组件")]),e("br"),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content2))])])]),e("br"),e("h2",[t._v("3. 使用组件")]),e("br"),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content3))])])]),e("br"),e("h3",[t._v("预览")]),e("br"),e("div",{staticClass:"example"},[e("mo-button",{attrs:{icon:"thumbs-up"}},[t._v("默认按钮")])],1)])},T=[],x={components:{"mo-button":r["Button"],"mo-icon":r["Icon"]},data:function(){return{content1:'\n             import { Button , Icon } from "mo-ui-beta";\n             import "mo-ui-beta/dist/index.css";\n      ',content2:'\n             export default {\n                  name: "xxx",\n                  components: {\n                      "mo-button": Button,\n                      "mo-icon":Icon\n                               },\n                            }\n      ',content3:'\n             <template>\n                <div>\n                   <mo-button icon="thumbs-up">默认按钮</mo-button>\n                </div>\n             </template>\n      '}}},g=x,y=Object(i["a"])(g,C,T,!1,null,null,null),w=y.exports,W=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"buttonTemplate"},[e("h1",[t._v("button-按钮组件")]),e("br"),e("h3",[t._v("预览：")]),e("mo-button",{staticClass:"example"},[t._v("默认按键")]),e("mo-button",{staticClass:"example",attrs:{icon:"settings"}},[t._v("默认按键")]),e("mo-button",{staticClass:"example",attrs:{iconPosition:"right",loading:!0}},[t._v("默认按键")]),e("mo-button",{staticClass:"example",attrs:{disabled:""}},[t._v("默认按键")]),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content1))])])]),e("br"),e("hr"),e("br"),e("h1",[t._v("button group 按键组")]),e("br"),e("h3",[t._v("预览：")]),e("mo-button-group",{staticClass:"example"},[e("mo-button",[t._v("按键1")]),e("mo-button",{attrs:{disabled:""}},[t._v("按键2")]),e("mo-button",[t._v("按键3")])],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content2))])])]),e("br"),e("hr"),e("br"),t._m(0),e("br"),e("div",{staticClass:"popoverWrapper"},[e("mo-popover",{attrs:{position:"top"}},[e("template",{slot:"content"},[e("p",[e("mo-icon",{attrs:{name:"left"}}),t._v(":left")],1),e("p",[e("mo-icon",{attrs:{name:"right"}}),t._v(":right")],1),e("p",[e("mo-icon",{attrs:{name:"down"}}),t._v(":down")],1),e("p",[e("mo-icon",{attrs:{name:"error"}}),t._v(":error")],1),e("p",[e("mo-icon",{attrs:{name:"info"}}),t._v(":info")],1),e("p",[e("mo-icon",{attrs:{name:"loading"}}),t._v(":loading")],1),e("p",[e("mo-icon",{attrs:{name:"settings"}}),t._v(":settings")],1),e("p",[e("mo-icon",{attrs:{name:"thumbs-up"}}),t._v(":thumbs-up")],1),e("p",[e("mo-icon",{attrs:{name:"download"}}),t._v(":download")],1)]),e("mo-button",[t._v("目前可用的icon")])],2)],1),e("br")],1)},k=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[t._v("> 一个普通的按钮,可以接受 "),e("code",[t._v("icon(String);iconPosition(String);disabled(Boolean)")]),t._v("以及 "),e("code",[t._v(":loading(Boolean)")]),t._v(" 四个参数。")])}],O={components:{"mo-button":r["Button"],"mo-button-group":r["ButtonGroup"],"mo-icon":r["Icon"],"mo-popover":r["Popover"]},data:function(){return{content1:'\n          <mo-button>默认按键</mo-button>\n          <mo-button icon="settings">默认按键</mo-button>\n          <mo-button :loading="true" iconPosition="right">默认按键</mo-button>\n          <mo-button disabled>默认按键</mo-button>\n      ',content2:"\n          <mo-button-group>\n            <mo-button>按键1</mo-button>\n            <mo-button disabled>按键2</mo-button>\n            <mo-button>按键3</mo-button>\n          </mo-button-group>\n      "}}},$=O,j=Object(i["a"])($,W,k,!1,null,"0e99dae8",null),E=j.exports,P=e("0d48"),B=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"collapseTemplate"},[e("h1",[t._v("collapse-折叠面板组件")]),e("br"),e("p",[t._v(">注：该组件默认需要传入一个名为selectedTab的数组以保证正常使用。")]),e("br"),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content))])])]),e("br"),e("hr"),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"collapseWrapper1"},[e("mo-collapse",{attrs:{selected:t.selectedTab1},on:{"update:selected":function(o){t.selectedTab1=o}}},[e("mo-collapse-item",{attrs:{title:"标题1",name:"1"}},[t._v("内容1")]),e("mo-collapse-item",{attrs:{title:"标题2",name:"2"}},[t._v("内容2")])],1)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content1))])])]),e("br"),e("hr"),e("br"),e("div",[t._v(">通过通过添加single参数控制是否只能同时打开一栏")]),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"collapseWrapper2"},[e("mo-collapse",{attrs:{selected:t.selectedTab2,single:""},on:{"update:selected":function(o){t.selectedTab2=o}}},[e("mo-collapse-item",{attrs:{title:"标题1",name:"1"}},[t._v("内容1")]),e("mo-collapse-item",{attrs:{title:"标题2",name:"2"}},[t._v("内容2")])],1)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content2))])])]),e("br")])},I=[],S={components:{"mo-collapse":r["Collapse"],"mo-collapse-item":r["CollapseItem"]},data:function(){return{content:"\n            data() {\n              return {\n                selectedTab: [],\n                     }\n                   }\n                      ",content1:'\n            <mo-collapse :selected.sync="selectedTab">\n              <mo-collapse-item title="标题1" name="1">内容1</mo-collapse-item>\n              <mo-collapse-item title="标题2" name="2">内容2</mo-collapse-item>\n            </mo-collapse>\n                ',content2:'\n            <mo-collapse :selected.sync="selectedTab" single>\n              <mo-collapse-item title="标题1" name="1">内容1</mo-collapse-item>\n              <mo-collapse-item title="标题2" name="2">内容2</mo-collapse-item>\n            </mo-collapse>\n                ',selectedTab1:[],selectedTab2:[]}}},D=S,R=(e("471d"),Object(i["a"])(D,B,I,!1,null,"6367b9ac",null)),L=R.exports,M=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"gridTemplate"},[e("h1",[t._v("Grid-栅格组件")]),e("br"),e("p",[t._v(">通过调整参数span的大小来控制栅格的大小，span的总和为24")]),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"Wrapper"},[e("mo-row",[e("mo-col",{staticClass:"colDemo1",attrs:{span:"12"}},[t._v("1")]),e("mo-col",{staticClass:"colDemo2",attrs:{span:"12"}},[t._v("2")])],1),e("br"),e("mo-row",[e("mo-col",{staticClass:"colDemo1",attrs:{span:"8"}},[t._v("1")]),e("mo-col",{staticClass:"colDemo2",attrs:{span:"8"}},[t._v("2")]),e("mo-col",{staticClass:"colDemo1",attrs:{span:"8"}},[t._v("3")])],1),e("br"),e("mo-row",[e("mo-col",{staticClass:"colDemo1",attrs:{span:"6"}},[t._v("1")]),e("mo-col",{staticClass:"colDemo2",attrs:{span:"6"}},[t._v("2")]),e("mo-col",{staticClass:"colDemo1",attrs:{span:"6"}},[t._v("3")]),e("mo-col",{staticClass:"colDemo2",attrs:{span:"6"}},[t._v("4")])],1)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content1))])])]),e("br"),e("hr"),e("h2",[t._v("Gutter")]),e("br"),t._m(0),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"gutter-wrapper"},[e("mo-row",{attrs:{gutter:"30"}},[e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v(" col-8; gutter-30;")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v(" col-8; gutter-30;")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v(" col-8; gutter-30;")])])],1),e("mo-row",{attrs:{gutter:"20"}},[e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v(" col-8; gutter-20;")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v(" col-8; gutter-20;")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v(" col-8; gutter-20;")])])],1),e("mo-row",{attrs:{gutter:"10"}},[e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v(" col-8; gutter-10;")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v(" col-8; gutter-10;")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v(" col-8; gutter-10;")])])],1)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v("\n            "+t._s(t.content2)+"\n        ")])])]),e("br"),e("hr"),e("h2",[t._v("Offset")]),e("br"),e("p",[t._v(">col除了span属性确定其宽度之外，还可以接受offset属性以从左开始添加空档。")]),e("p",[t._v("需要注意的是：span和offset的总和依然需要为24，因为该组件就是将宽度等分为24份。")]),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"offset-wrapper"},[e("mo-row",[e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v("col-8")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v("col-8")])]),e("mo-col",{staticClass:"item",attrs:{span:"4",offset:"4"}},[e("span",[t._v("col-4")])])],1),e("mo-row",[e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v("col-8")])]),e("mo-col",{staticClass:"item",attrs:{span:"5",offset:"3"}},[e("span",[t._v("col-5")])]),e("mo-col",{staticClass:"item",attrs:{span:"4",offset:"4"}},[e("span",[t._v("col-4")])])],1),e("mo-row",[e("mo-col",{staticClass:"item",attrs:{span:"2",offset:"6"}},[e("span",[t._v("col-2")])]),e("mo-col",{staticClass:"item",attrs:{span:"5",offset:"3"}},[e("span",[t._v("col-5")])]),e("mo-col",{staticClass:"item",attrs:{span:"4",offset:"4"}},[e("span",[t._v("col-4")])])],1)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v("\n            "+t._s(t.content3)+"\n        ")])])]),e("br"),e("hr"),e("h2",[t._v("align")]),e("br"),e("p",[t._v(">在span与offset的总和不到24时会留有空间，此时可以通过给row设置align属性来决定其子组件在节点中的排版方式。")]),e("p",[t._v("可接受left\\center\\right。")]),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"align-wrapper"},[e("mo-row",{staticClass:"row",attrs:{align:"left"}},[e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v("left(span-8)")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v("left(span-8)")])])],1),e("mo-row",{staticClass:"row",attrs:{align:"center"}},[e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v("center(span-8)")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v("center(span-8)")])])],1),e("mo-row",{staticClass:"row",attrs:{align:"right"}},[e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v("right(span-8)")])]),e("mo-col",{staticClass:"item",attrs:{span:"8"}},[e("span",[t._v("right(span-8)")])])],1)],1),e("br"),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v("\n            "+t._s(t.content4)+"\n        ")])])]),e("br")])},H=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[t._v(">可以通过给Row添加gutter属性，给栅格间添加空隙（单位为"),e("code",[t._v("px")]),t._v("）")])}],X={components:{"mo-row":r["Row"],"mo-col":r["Col"]},data:function(){return{content1:'\n            <mo-row>\n                <mo-col span="12">1</mo-col>\n                <mo-col span="12">2</mo-col>\n            </mo-row>\n\n            <mo-row>\n                <mo-col span="8">1</mo-col>\n                <mo-col span="8">2</mo-col>\n                <mo-col span="8">3</mo-col>\n            </mo-row>\n\n            <mo-row>\n                <mo-col span="6">1</mo-col>\n                <mo-col span="6">2</mo-col>\n                <mo-col span="6">3</mo-col>\n                <mo-col span="6">4</mo-col>\n            </mo-row>\n      ',content2:'\n            <mo-row gutter="30">\n                <mo-col class="item" span="8"> <span> col-8; gutter-30;</span> </mo-col>\n                <mo-col class="item" span="8"> <span> col-8; gutter-30;</span> </mo-col>\n                <mo-col class="item" span="8"> <span> col-8; gutter-30;</span> </mo-col>\n            </mo-row>\n            <mo-row gutter="20">\n                <mo-col class="item" span="8"> <span> col-8; gutter-20;</span> </mo-col>\n                <mo-col class="item" span="8"> <span> col-8; gutter-20;</span> </mo-col>\n                <mo-col class="item" span="8"> <span> col-8; gutter-20;</span> </mo-col>\n            </mo-row>\n            <mo-row gutter="10">\n                <mo-col class="item" span="8"> <span> col-8; gutter-10;</span> </mo-col>\n                <mo-col class="item" span="8"> <span> col-8; gutter-10;</span> </mo-col>\n                <mo-col class="item" span="8"> <span> col-8; gutter-10;</span> </mo-col>\n            </mo-row>\n      ',content3:'\n            <mo-row>\n                <mo-col class="item" span="8"> <span>col-8</span> </mo-col>\n                <mo-col class="item" span="8"> <span>col-8</span> </mo-col>\n                <mo-col class="item" span="4" offset="4"> <span>col-4</span> </mo-col>\n            </mo-row>\n            <mo-row>\n                <mo-col class="item" span="8"> <span>col-8</span> </mo-col>\n                <mo-col class="item" span="5" offset="3"> <span>col-5</span> </mo-col>\n                <mo-col class="item" span="4" offset="4"> <span>col-4</span> </mo-col>\n            </mo-row>\n            <mo-row>\n                <mo-col class="item" span="2" offset="6"> <span>col-2</span> </mo-col>\n                <mo-col class="item" span="5" offset="3"> <span>col-5</span> </mo-col>\n                <mo-col class="item" span="4" offset="4"> <span>col-4</span> </mo-col>\n            </mo-row>\n      ',content4:'\n            <mo-row class="row" align="left">\n                <mo-col class="item" span="8"><span>left</span></mo-col>\n                <mo-col class="item" span="8"><span>left</span></mo-col>\n            </mo-row>\n            <mo-row class="row" align="center">\n                <mo-col class="item" span="8"><span>center</span></mo-col>\n                <mo-col class="item" span="8"><span>center</span></mo-col>\n            </mo-row>\n            <mo-row class="row" align="right">\n                <mo-col class="item" span="8"><span>right</span></mo-col>\n                <mo-col class="item" span="8"><span>right</span></mo-col>\n            </mo-row>\n      '}}},z=X,G=(e("6891"),Object(i["a"])(z,M,H,!1,null,null,null)),N=G.exports,U=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"inputTemplate"},[e("h1",[t._v("input-输入框组件")]),e("br"),e("h3",[t._v("可选属性：")]),e("p",[t._v("> error：接收一个String，会在输入框右侧作为错误信息展示。")]),e("br"),e("p",[t._v("> readonly：只读，可以通过tab选中，但是不能修改。")]),e("br"),e("p",[t._v("> disabled：禁用，无法通过tab选中，也不能修改")]),e("br"),e("h3",[t._v("预览：")]),e("mo-input"),e("br"),e("br"),e("mo-input",{attrs:{error:"ERROR"}}),e("br"),e("br"),e("mo-input",{attrs:{readonly:""}}),e("br"),e("br"),e("mo-input",{attrs:{disabled:""}}),e("br"),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content))])])]),e("br")],1)},A=[],F={components:{"mo-input":r["Input"]},data:function(){return{content:'\n        <mo-input></mo-input>\n\n        <mo-input error="ERROR"></mo-input>\n\n        <mo-input readonly></mo-input>\n\n        <mo-input disabled></mo-input>\n      '}}},J=F,V=Object(i["a"])(J,U,A,!1,null,"29fe6a9c",null),q=V.exports,Y=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"installTemplate"},[e("h1",[t._v("如何安装")]),e("br"),e("h2",[t._v("YARN")]),e("br"),e("p",[t._v(">进入项目根目录后运行：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content1))])])]),e("br"),e("hr"),e("br"),e("h2",[t._v("NPM")]),e("br"),e("p",[t._v(">进入项目根目录后运行：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content2))])])]),e("br"),e("p",[t._v("请避免同时使用两种包管理工具，如果你是使用vue-cli搭建的项目，默认使用的包管理工具为yarn，那么请尽量不要使用npm安装。")])])},K=[],Q={data:function(){return{content1:"\n            yarn add mo-ui-beta\n      ",content2:"\n            npm install mo-ui-beta\n      "}}},Z=Q,tt=Object(i["a"])(Z,Y,K,!1,null,"c89af194",null),ot=tt.exports,et=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"LayoutTemplate"},[e("h1",[t._v("layout-默认布局")]),e("br"),e("p",[t._v(">以Layout作为容器，通过对Header，Sider，Content，Footer的组合实现布局。")]),e("br"),e("p",{staticStyle:{"font-style":"oblique","font-size":"12px"}},[t._v("/* 本站就是使用该布局制作 */")]),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"layoutWrapper"},[e("mo-layout",{staticClass:"layoutTemplate-layout"},[e("mo-header",{staticClass:"layoutTemplate-header"},[t._v(" header")]),e("mo-layout",[e("mo-sider",{staticClass:"layoutTemplate-sider"},[t._v(" sider")]),e("mo-content",{staticClass:"layoutTemplate-content"},[t._v(" content")])],1),e("mo-footer",{staticClass:"layoutTemplate-footer"},[t._v(" footer")])],1)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content1))])])]),e("br"),e("hr"),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"layoutWrapper"},[e("mo-layout",{staticClass:"layoutTemplate-layout"},[e("mo-header",{staticClass:"layoutTemplate-header"},[t._v(" header")]),e("mo-content",{staticClass:"layoutTemplate-content"},[t._v(" content")]),e("mo-footer",{staticClass:"layoutTemplate-footer"},[t._v(" footer")])],1)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content2))])])]),e("br"),e("hr"),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"layoutWrapper"},[e("mo-layout",{staticClass:"layoutTemplate-layout"},[e("mo-header",{staticClass:"layoutTemplate-header"},[t._v(" header")]),e("mo-layout",[e("mo-sider",{staticClass:"layoutTemplate-sider"},[t._v(" sider")]),e("mo-layout",{staticClass:"layoutTemplate-layout"},[e("mo-content",{staticClass:"layoutTemplate-content"},[t._v(" content")]),e("mo-footer",{staticClass:"layoutTemplate-footer"},[t._v(" footer")])],1)],1)],1)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content3))])])]),e("br")])},at=[],st={components:{"mo-layout":r["Layout"],"mo-sider":r["Sider"],"mo-header":r["Header"],"mo-footer":r["Footer"],"mo-content":r["Content"]},data:function(){return{content1:"\n                <mo-layout>\n                    <mo-header> header </mo-header>\n                        <mo-layout>\n                            <mo-sider> sider </mo-sider>\n                            <mo-content> content </mo-content>\n                        </mo-layout>\n                    <mo-footer> footer </mo-footer>\n                </mo-layout>\n                  ",content2:"\n                <mo-layout>\n                    <mo-header> header </mo-header>\n                    <mo-content> content </mo-content>\n                    <mo-footer> footer </mo-footer>\n                </mo-layout>\n      ",content3:"\n                <mo-layout>\n                    <mo-header> header </mo-header>\n                    <mo-layout>\n                        <mo-sider> sider </mo-sider>\n                        <mo-layout>\n                            <mo-content> content </mo-content>\n                            <mo-footer> footer </mo-footer>\n                        </mo-layout>\n                    </mo-layout>\n                </mo-layout>\n      "}}},nt=st,rt=(e("edae"),Object(i["a"])(nt,et,at,!1,null,"112b9271",null)),ct=rt.exports,lt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"popoverTemplate"},[e("h1",[t._v("Popover-弹出层组件")]),e("br"),t._m(0),e("br"),e("p",[t._v(">popover可以接受两个参数，分别为position（控制弹出内容的方向）和trigger（控制内容弹出方式，默认为click，可选项hover）。")]),e("br"),e("h3",[t._v("预览：")]),e("span",{staticClass:"example"},[e("mo-popover",{attrs:{position:"left"}},[e("template",{slot:"content"},[t._v("popover内容")]),e("mo-button",[t._v("在左边弹出popover")])],2)],1),e("span",{staticClass:"example"},[e("mo-popover",{attrs:{position:"right"}},[e("template",{slot:"content"},[t._v("popover内容")]),e("mo-button",[t._v("在右边弹出popover")])],2)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content1))])])]),e("br"),e("hr"),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"example"},[e("mo-popover",{attrs:{position:"bottom",trigger:"hover"}},[e("template",{slot:"content"},[t._v("popover内容")]),e("mo-button",[t._v("鼠标悬浮弹出popover")])],2)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content2))])])]),e("br")])},it=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[t._v(">将一个页面元素和一个 "),e("code",[t._v('tamplate slot="content"')]),t._v(" 由mo-popover包裹而成。")])}],pt={components:{"mo-button":r["Button"],"mo-popover":r["Popover"]},data:function(){return{content1:'\n                  <mo-popover position="left">\n                      <template slot="content">popover内容</template>\n                      <mo-button>在左边弹出popover</mo-button>\n                  </mo-popover>\n                  <mo-popover position="right">\n                      <template slot="content">popover内容</template>\n                      <mo-button>在右边弹出popover</mo-button>\n                  </mo-popover>\n      ',content2:'\n                  <mo-popover position="bottom" trigger="hover">\n                      <template slot="content">popover内容</template>\n                      <mo-button>鼠标悬浮弹出popover</mo-button>\n                  </mo-popover>\n      '}}},mt=pt,ut=Object(i["a"])(mt,lt,it,!1,null,"4b05a43e",null),vt=ut.exports,dt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"tabsTamplate"},[e("h1",[t._v("Tabs-标签页组件")]),e("br"),e("p",[t._v(">注：该组件默认需要传入一个名为selectedTab的默认值以保证正常使用,同时tabs-item和tabs-pane必须有一一对应的name。")]),e("br"),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content))])])]),e("br"),e("hr"),e("br"),e("p",[t._v(">mo-tabs-item可以通过接受disabled属性使该标签变得不可用。")]),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"tabsWrapper"},[e("mo-tabs",{attrs:{selected:t.selectedTab},on:{"update:selected":function(o){t.selectedTab=o}}},[e("mo-tabs-head",[e("mo-tabs-item",{attrs:{name:"tab1"}},[t._v("Tab1")]),e("mo-tabs-item",{attrs:{name:"tab2"}},[t._v("Tab2")]),e("mo-tabs-item",{attrs:{name:"tab3",disabled:""}},[t._v("Tab3")]),e("mo-tabs-item",{attrs:{name:"tab4"}},[t._v("Tab4")])],1),e("mo-tabs-body",[e("mo-tabs-pane",{attrs:{name:"tab1"}},[t._v("内容11111")]),e("mo-tabs-pane",{attrs:{name:"tab2"}},[t._v("内容22222")]),e("mo-tabs-pane",{attrs:{name:"tab3"}},[t._v("内容33333")]),e("mo-tabs-pane",{attrs:{name:"tab4"}},[t._v("内容44444")])],1)],1)],1),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content1))])])]),e("br")])},bt=[],_t={components:{"mo-tabs":r["Tabs"],"mo-tabs-head":r["TabsHead"],"mo-tabs-body":r["TabsBody"],"mo-tabs-item":r["TabsItem"],"mo-tabs-pane":r["TabsPane"]},data:function(){return{selectedTab:"tab1",content:"\n                 data() {\n                    return {\n                      selectedTab: 'tab1',\n                           }\n                         }\n      ",content1:"\n                 <mo-tabs :selected.sync=\"selectedTab\">\n                     <mo-tabs-head>\n                         <mo-tabs-item name='tab1'>Tab1</mo-tabs-item>\n                         <mo-tabs-item name='tab2'>Tab2</mo-tabs-item>\n                         <mo-tabs-item name='tab3' disabled>Tab3</mo-tabs-item>\n                         <mo-tabs-item name='tab4'>Tab4</mo-tabs-item>\n                     </mo-tabs-head>\n                     <mo-tabs-body>\n                         <mo-tabs-pane name='tab1'>内容11111</mo-tabs-pane>\n                         <mo-tabs-pane name='tab2'>内容22222</mo-tabs-pane>\n                         <mo-tabs-pane name='tab3'>内容33333</mo-tabs-pane>\n                         <mo-tabs-pane name='tab4'>内容44444</mo-tabs-pane>\n                     </mo-tabs-body>\n                 </mo-tabs>\n      "}}},ft=_t,ht=(e("318a"),Object(i["a"])(ft,dt,bt,!1,null,null,null)),Ct=ht.exports,Tt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"toastTemplate"},[e("h1",[t._v("Toast-弹出提示框组件")]),e("br"),e("h2",[t._v("可用选项")]),e("br"),e("p",[t._v("1. zIndex")]),e("p",[t._v(">该选项用于设置弹出框在当前层叠上下文中的位置。")]),e("br"),e("p",[t._v("2. autoClose")]),e("p",[t._v(">该选项用于设置弹出框是否会自动关闭以及弹出框显示的时长（单位：s），默认为5s后关闭。")]),e("br"),e("p",[t._v("3. closeButton")]),e("p",[t._v(">该选项接受一个对象，包括text（弹出框右侧关闭按钮的内容）与callback（支持传入回调）属性，默认text为“我知道了”。")]),e("br"),e("p",[t._v("4. position")]),e("p",[t._v(">该选项用于设置弹出框在页面中跳出的位置，可接受top,middle,bottom三个值,默认为top。")]),e("br"),e("hr"),e("br"),e("h2",[t._v("使用方式举例")]),e("br"),e("h3",[t._v("预览：")]),e("div",{staticClass:"toastWrapper"},[e("mo-button",{on:{click:t.xxx}},[t._v("toast从顶部弹出")]),e("br"),e("mo-button",{on:{click:t.middle}},[t._v("toast从中间弹出")]),e("br"),e("mo-button",{on:{click:t.bottom}},[t._v("toast从底部弹出")])],1),e("br"),e("p",[t._v(">首个toast修改了部分选项，其他两个除position选项外均为默认。")]),e("h3",[t._v("代码：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content1))])])]),e("br"),e("p",[t._v(">因为toast无法直接通过标签使用，关于该组件的所有内容都在script部分的methods中：")]),e("div",{staticClass:"codeTextWrapper"},[e("pre",[e("code",{staticClass:"codeText"},[t._v(t._s(t.content2))])])]),e("br")])},xt=[];a["a"].use(r["Plugin"]);var gt={components:{"mo-button":r["Button"],"mo-toast":r["Toast"]},methods:{xxx:function(){this.$toast("我是toast内容",{autoClose:5,zIndex:30,closeButton:{text:"已阅",callback:function(){console.log("我是回调")}}})},bottom:function(){this.$toast("我是 toast 内容",{position:"bottom"})},middle:function(){this.$toast("我是 toast 内容",{position:"middle"})}},data:function(){return{content1:'\n              <div class="toastWrapper">\n                  <mo-button @click="xxx">toast从顶部弹出</mo-button>\n                  <mo-button @click="middle">toast从中间弹出</mo-button>\n                  <mo-button @click="bottom">toast从底部弹出</mo-button>\n              </div>\n            ',content2:"\n            import Vue from 'vue'\n            import {Button,Toast,Plugin} from 'mo-ui-beta'\n            Vue.use(Plugin)\n\n            export default {\n                components:{\n                    'mo-button':Button,\n                    'mo-toast':Toast,\n                },\n                methods:{\n                    xxx(){\n                        this.$toast('toast内容',\n                            {autoClose:5 ,zIndex:30,closeButton:{text:'已阅',callback:()=>{console.log('我是回调')}}}\n                        )\n                    },\n                    bottom(){\n                        this.$toast('我是 toast 内容', { position: 'bottom' })\n                    },\n                    middle(){\n                        this.$toast('我是 toast 内容', { position: 'middle' })\n                    },\n                },\n            }\n          "}}},yt=gt,wt=Object(i["a"])(yt,Tt,xt,!1,null,"ff316210",null),Wt=wt.exports;a["a"].use(u["a"]);var kt=new u["a"]({routes:[{path:"/",component:h},{path:"/start",component:w},{path:"/button",component:E},{path:"/collapse",component:L},{path:"/grid",component:N},{path:"/input",component:q},{path:"/install",component:ot},{path:"/layout",component:ct},{path:"/popover",component:vt},{path:"/tabs",component:Ct},{path:"/toast",component:Wt},{path:"/*",component:P["default"]}]});a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(m)},router:kt}).$mount("#app")},"59c4":function(t,o,e){t.exports=e.p+"img/logo.1739f617.png"},"5ef0":function(t,o,e){},6891:function(t,o,e){"use strict";e("37cf")},"85ec":function(t,o,e){},ba61:function(t,o,e){},bf98:function(t,o){function e(t){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="bf98"},c40b:function(t,o,e){"use strict";e.d(o,"a",(function(){return a})),e.d(o,"b",(function(){return s}));var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t._v("404 not found")])},s=[]},c456:function(t,o,e){},d3b8:function(t,o,e){t.exports=e.p+"img/github.e6dbe720.png"},e387:function(t,o,e){},edae:function(t,o,e){"use strict";e("e387")},fef7:function(t,o){}});
//# sourceMappingURL=app.2f21cc64.js.map