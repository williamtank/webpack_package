!function(t){function e(s){if(a[s])return a[s].exports;var n=a[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}({0:function(t,e,a){t.exports=a(6)},6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Table=e.Inner=e.List=void 0,a(15);var s={isEmptyJson:function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}},n=React.createClass({displayName:"List",render:function(){var t=this.props.data.eles.map(function(t){return React.createElement("li",{className:"msg_list_ele"},React.createElement("div",{className:"msg_list_ele_container"},React.createElement("div",{className:"msg_list_title"},t.title),React.createElement("div",{className:"msg_list_content"},t.content)))});return React.createElement("ul",{className:"msg_list"},t)}}),l=React.createClass({displayName:"Table",render:function(){var t=this.props.data.setting.classname?"table_wrp with_border "+this.props.data.setting.classname:"table_wrp with_border",e=this.props.data.thead.map(function(t){var e=t.setting?t.setting:{},a="table_cell "+e.classname;return React.createElement("th",{className:a},t.content)}),a=[];if("undefined"==typeof this.props.data.tbody||s.isEmptyJson(this.props.data.tbody))console.log("暂无数据！"),a.push(React.createElement("tr",null,React.createElement("td",{className:"table_cell empty",colSpan:this.props.data.thead.length},"暂无数据！")));else{console.log("有数据");for(var n in this.props.data.tbody){var l=this.props.data.tbody[n].setting?this.props.data.tbody[n].setting:{},i=this.props.data.tbody[n].content.map(function(t){var e=t.setting?t.setting:{},a="table_cell "+e.classname;return React.createElement("td",{className:a},t.content)}),c=l.classname?l.classname:"";a.push(React.createElement("tr",{className:c},i))}}return React.createElement("div",{className:t},React.createElement("table",{cellSpacing:"0",className:"table"},React.createElement("thead",{className:"thead"},React.createElement("tr",null,e)),React.createElement("tbody",{className:"tbody"},a)))}}),i=React.createClass({displayName:"Inner",getInitialState:function(){return{isOpen:{List:!1,Table:!1},List:{eles:[{title:"我是list的title1",content:"我是list的content1"},{title:"我是list的title2",content:"我是list的content2"},{title:"我是list的title3",content:"我是list的content3"},{title:"我是list的title4",content:"我是list的content4"}]},Table:{setting:{classname:"history"},thead:[{setting:{classname:"theadClass1"},content:"thead1"},{setting:{classname:"theadClass2"},content:"thead2"},{setting:{classname:"theadClass3"},content:"thead3"}],tbody:{tr1:{setting:{classname:"tr1"},content:[{setting:{classname:"tr1td1Class1"},content:"tr1td1"},{setting:{classname:"tr1td2Class2"},content:"tr1td2"},{setting:{classname:"tr1td3Class3"},content:"tr1td3"}]},tr2:{setting:{classname:"tr2"},content:[{setting:{classname:"tr2td1Class1"},content:"tr2td1"},{setting:{classname:"tr2td2Class2"},content:"tr2td2"},{setting:{classname:"tr2td3Class3"},content:"tr2td3"}]}}},resultList:""}},hadle:function(t){this.setState({resultList:JSON.stringify(t)})},handleClickOpenSetting:function(t,e){var a=this.state.isOpen;a[t]=!a[t],this.setState({isOpen:a})},render:function(){var t=JSON.stringify(this.state.List,null,"\t"),e=JSON.stringify(this.state.Table,null,"\t");return React.createElement("div",null,React.createElement("h3",{className:this.state.isOpen.List?"title_Widget open":"title_Widget close",onClick:this.handleClickOpenSetting.bind(this,"List")},"list.List"),this.state.isOpen.List?React.createElement("pre",{className:"setting"},t):null,React.createElement(n,{data:this.state.List}),React.createElement("div",null,this.state.resultList),React.createElement("br",null),React.createElement("br",null),React.createElement("h3",{className:this.state.isOpen.Table?"title_Widget open":"title_Widget close",onClick:this.handleClickOpenSetting.bind(this,"Table")},"list.Table"),this.state.isOpen.Table?React.createElement("pre",{className:"setting"},e):null,React.createElement(l,{data:this.state.Table}),React.createElement("br",null),React.createElement("br",null))}});React.render(React.createElement(i,null),document.getElementById("inner")),e.List=n,e.Inner=i,e.Table=l},15:function(t,e){}});
//# sourceMappingURL=index.6fb9.js.map