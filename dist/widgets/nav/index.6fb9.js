!function(e){function a(n){if(t[n])return t[n].exports;var i=t[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}var t={};return a.m=e,a.c=t,a.p="",a(0)}({0:function(e,a,t){e.exports=t(7)},7:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.NavTop=a.Inner=a.NavPageInner=a.NavPage=void 0,t(16);var n=React.createClass({displayName:"NavTop",render:function(){return React.createElement("div",{className:"head"},React.createElement("div",{className:"inner"},React.createElement("a",{className:"logo",href:"/cgi-bin/mmemoticonmgr-bin/stikerchecklist?t=emotion/index&action=check&page=0"},React.createElement("span",{className:"logo_ic"}),React.createElement("span",{className:"logo_text"},"微信 | 表情管理平台"),React.createElement("span",{className:"logo_beta"}))))}}),i=React.createClass({displayName:"NavPage",initNavListEle:function(e){var a=[];for(var t in e){var n=e[t].disabled?"nav_ele "+e[t].className+" disabled":"nav_ele "+e[t].className;a.push(React.createElement("dd",{className:n},e[t].link?React.createElement("a",{className:"nav_link",href:e[t].link,title:e[t].value},e[t].value):React.createElement("div",{className:"nav_link",title:e[t].value},e[t].value)))}return a},initNavList:function(e){var a=[];for(var t in e)a.push(React.createElement("dl",{className:"nav_list"},React.createElement("dt",{className:e[t].disabled?"nav_ele nav_title disabled":"nav_ele nav_title"},e[t].link?React.createElement("a",{className:"nav_link",href:e[t].link,title:e[t].value},e[t].value):React.createElement("div",{className:"nav_link",title:e[t].value},e[t].value),this.initNavListEle(e[t].eles))));return a},componentWillMount:function(){this.initNavList(this.props.data)},render:function(){return React.createElement("div",{className:"nav"},this.initNavList(this.props.data))}}),l=React.createClass({displayName:"NavPageInner",initEles:function(e){var a=[];for(var t in e.eles){var n=t==e.selected?"page_nav_ele selected":"page_nav_ele";a.push(React.createElement("li",{onClick:this.handleClick.bind(this,t),className:n},React.createElement("a",{href:e.eles[t].link,className:"page_nav_link"},e.eles[t].value)))}return a},handleClick:function(e){var a={value:e};this.props.data.handle(a)},render:function(){return React.createElement("ul",{className:"page_nav_list group"},this.initEles(this.props.data))}}),s=React.createClass({displayName:"Inner",getInitialState:function(){return{isOpen:{NavPage:!1,NavPageInner:!1},NavTop:{},NavPageInner:{selected:"dynamicDel",handle:this.handleNavPageClick,eles:{history:{value:"投放历史",link:"javascript:;"},dynamicDel:{value:"动态投放",link:"javascript:;"}}},NavPage:{check:{value:"审核",link:null,disabled:!1,className:"",eles:{album:{value:"表情专辑",link:"/cgi-bin/mmemoticonmgr-bin/stikerchecklist?t=emotion/index&action=check&page=0",disabled:!1,className:""},single:{value:"表情单品",link:"/cgi-bin/mmemoticonmgr-bin/emojichecklist?t=single/index&action=check&page=0",disabled:!1,className:""},artist:{value:"艺术家信息",link:"/cgi-bin/mmemoticonmgr-bin/designerchecklist?t=user/index&page=0&action=pass",disabled:!1,className:""},regist:{value:"企业注册信息",link:"/cgi-bin/mmemoticonmgr-bin/regchecklist?t=enterp/index&action=check&page=0",disabled:!1,className:""}}},operate:{value:"运营",link:null,disabled:!1,className:"",eles:{config:{value:"推荐表情&最近热门配置",link:"/cgi-bin/mmemoticonmgr-bin/celllist?t=banner/index_new&action=online",disabled:!1,className:""},bannerConfig:{value:"banner配置",link:"/cgi-bin/mmemoticonmgr-bin/bannerlist?t=banner/banner&action=online&page=0",disabled:!1,className:""},tagsManage:{value:"标签管理",link:"/cgi-bin/mmemoticonmgr-bin/gettaglist?t=tag/index&action=official",disabled:!1,className:""},appAdjust:{value:"客户端策略调整",link:"javascript:;",disabled:!0,className:""},areaRank:{value:"地区排行管理",link:"javascript:;",disabled:!0,className:""},areaRankRule:{value:"地区排行规则配置",link:"javascript:;",disabled:!0,className:""},clickList:{value:"点击流",link:"/cgi-bin/mmemoticonmgr-bin/getclicklist?t=clicklist/index",disabled:!0,className:""},cdn:{value:"cdn",link:"/cgi-bin/mmemoticonmgr-bin/getclicklist?t=cdn/index",disabled:!1,className:""},pirate:{value:"防盗版",link:"/cgi-bin/mmemoticonmgr-bin/getfakeemoji?t=copyright/index",disabled:!1,className:""},game:{value:"金龙奖",link:"/cgi-bin/mmemoticonmgr-bin/getfakeemoji?t=game/index",disabled:!1,className:""},translate:{value:"翻译表情",link:"/cgi-bin/mmemoticonmgr-bin/getfakeemoji?t=global/index",disabled:!1,className:""}}}}}},handleNavPageClick:function(e){},handleClickOpenSetting:function(e,a){var t=this.state.isOpen;t[e]=!t[e],this.setState({isOpen:t})},render:function(){var e=JSON.stringify(this.state.NavPage,null,"\t"),a=JSON.stringify(this.state.NavTop,null,"\t"),t=JSON.stringify(this.state.NavPageInner,null,"\t");return React.createElement("div",null,React.createElement("h3",{className:this.state.isOpen.NavTop?"title_Widget open":"title_Widget close",onClick:this.handleClickOpenSetting.bind(this,"NavTop")},"nav.NavTop"),this.state.isOpen.NavPage?React.createElement("pre",{className:"setting"},a):null,React.createElement(n,{data:this.state.NavTop}),React.createElement("br",null),React.createElement("br",null),React.createElement("h3",{className:this.state.isOpen.NavPage?"title_Widget open":"title_Widget close",onClick:this.handleClickOpenSetting.bind(this,"NavPage")},"nav.NavPage"),this.state.isOpen.NavPage?React.createElement("pre",{className:"setting"},e):null,React.createElement(i,{data:this.state.NavPage}),React.createElement("br",null),React.createElement("br",null),React.createElement("h3",{className:this.state.isOpen.NavPageInner?"title_Widget open":"title_Widget close",onClick:this.handleClickOpenSetting.bind(this,"NavPageInner")},"nav.NavPageInner"),this.state.isOpen.NavPageInner?React.createElement("pre",{className:"setting"},t):null,React.createElement(l,{data:this.state.NavPageInner}))}});React.render(React.createElement(s,null),document.getElementById("inner")),a.NavPage=i,a.NavPageInner=l,a.Inner=s,a.NavTop=n},16:function(e,a){}});
//# sourceMappingURL=index.6fb9.js.map