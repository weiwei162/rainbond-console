(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"oyw+":function(e,t,a){e.exports={commandBox:"commandBox___3uWqu",commandIcon:"commandIcon___39a8a",command:"command___3Hs9F",commandSpan:"commandSpan___36cG1",antd_row:"antd_row___94gX0",antd_form:"antd_form___3adtc",antd_row_btn:"antd_row_btn___3FX59",antd_btn:"antd_btn___3Qagw"}},wN07:function(e,t,a){"use strict";var n=a("g09b"),o=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var s=n(a("bx4M"));a("+L6B");var r=n(a("2/Rp"));a("jCWc");var l=n(a("kPKH"));a("fOrg");var d=n(a("+KLJ"));a("T2oS");var i=n(a("W9HT"));a("14J3");var c=n(a("BMrR"));a("/xke");var m=n(a("TeRw"));a("FJo9");var u=n(a("L41K"));a("y8nQ");var p,f,h,v,g=n(a("Vl3Y")),y=a("RBnf"),_=n(a("+QRC")),k=a("MuoO"),b=a("7DNP"),C=a("LvDl"),w=n(a("Qyje")),E=o(a("q1tI")),x=a("LLXN"),L=n(a("2lxJ")),M=n(a("3a4m")),N=n(a("XZXw")),S=n(a("+iC2")),F=n(a("oyw+")),D=(g.default.Item,u.default.Step),I=(p=g.default.create(),f=(0,k.connect)(e=>{var t=e.user,a=e.list,n=e.loading,o=e.global,s=e.index;return{user:t.currentUser,list:a,loading:n.models.list,rainbondInfo:o.rainbondInfo,enterprise:o.enterprise,isRegist:o.isRegist,oauthLongin:n.effects["global/creatOauth"],overviewInfo:s.overviewInfo}}),p(h=f((v=class extends E.PureComponent{constructor(e){super(e),this.handleOptionData=(e=>{if(e){for(var t in e)"object"!==typeof e[t]?"true"===e[t]?e[t]=!0:"false"===e[t]&&(e[t]=!1):this.handleOptionData(e[t]);return e}}),this.loadSteps=(()=>{var e=[{title:(0,x.formatMessage)({id:"enterpriseColony.ACksterList.basic"})},{title:(0,x.formatMessage)({id:"enterpriseColony.ACksterList.senior"})},{title:(0,x.formatMessage)({id:"enterpriseColony.ACksterList.install"})},{title:(0,x.formatMessage)({id:"enterpriseColony.ACksterList.Docking"})}];return e}),this.toLinkNext=(e=>{var t=this.props,a=t.match.params.eid,n=t.location.search,o=this.state,s=o.helmToken,r=o.resCommand,l=o.copyCommand,d=w.default.parse(n.substr(1))||{},i=(d.data,d.name),c=d.step;if("goback"===e)switch(i){case"helm":M.default.push("/enterprise/".concat(a,"/provider/ACksterList"));break;case"ack":M.default.push("/enterprise/".concat(a,"/provider/Aliack"));break;case"huawei":M.default.push("/enterprise/".concat(a,"/provider/HuaweiList"));break;case"tencent":M.default.push("/enterprise/".concat(a,"/provider/tencentList"));break;default:break}else M.default.push({pathname:"/enterprise/".concat(a,"/provider/ACksterList/result"),search:w.default.stringify({token:s,data:r,copy:l,name:i,step:c})})}),this.helmToken=(e=>{var t=this.props,a=t.dispatch,n=t.match.params.eid,o=t.location.search,s=w.default.parse(o.substr(1))||{},r=(s.data,s.name,s.step,s.cloudserver),l=window.location.href,d=l.match(/(\S*)\/#\//)[1];a({type:"region/fetchHelmToken",payload:{eid:n},callback:t=>{200===t.status_code&&t.bean&&a({type:"region/fetchHelmCommand",payload:{eid:n,domain:d,token:t.bean,data:e,cloudserver:r},callback:e=>{var a=e.response_data.command.split(" & "),n=(0,C.cloneDeep)(a),o=n.join("\n ");this.setState({helmToken:t.bean,resCommand:a,copyCommand:o,commandFlag:!0})}})}})}),this.onCopy=(()=>{var e=this.state.copyCommand;(0,_.default)(e),m.default.success({message:(0,x.formatMessage)({id:"notification.success.copy"})})});var t=this.props.user,a=S.default.isCompanyAdmin(t);this.state={adminer:a,commandFlag:!1,resCommand:[],copyCommand:"",helmToken:""}}componentWillMount(){var e=this.state.adminer,t=this.props.dispatch;e||t(b.routerRedux.push("/"))}componentDidMount(){var e=this.props.location.search,t=w.default.parse(e.substr(1))||{},a=t.data,n=(t.name,t.step),o=t.token,s=t.copy,r=t.isResult,l=void 0!==r&&r,d=(0,C.cloneDeep)(a),i=this.handleOptionData(d);"base"===n&&!l||"advanced"===n&&!l?this.helmToken(i):l&&this.setState({resCommand:a,copyCommand:s,commandFlag:!0,helmToken:o})}render(){var e=this.props.match.params,t=(e.eid,e.provider,e.clusterID,this.state),a=t.commandFlag,n=t.resCommand;this.props.form.getFieldDecorator;return E.default.createElement(N.default,{title:E.default.createElement(x.FormattedMessage,{id:"enterpriseColony.button.text"}),content:E.default.createElement(x.FormattedMessage,{id:"enterpriseColony.PageHeaderLayout.content"}),titleSvg:L.default.getSvg("clusterSvg",18)},E.default.createElement(c.default,{style:{marginBottom:"16px"}},E.default.createElement(u.default,{current:2},this.loadSteps().map(e=>E.default.createElement(D,{key:e.title,title:e.title})))),E.default.createElement(s.default,{style:{padding:"24px"}},!a&&E.default.createElement(i.default,{tip:"Loading..."},E.default.createElement("div",{className:F.default.commandBox}," ")),a&&E.default.createElement("div",{className:F.default.commandBox},E.default.createElement("div",{className:F.default.commandIcon},E.default.createElement(y.CopyOutlined,{onClick:this.onCopy})),E.default.createElement("div",{className:F.default.command},n.length>0&&n.map((e,t)=>E.default.createElement("span",{key:t,className:F.default.commandSpan},e)))),E.default.createElement(c.default,{style:{marginBottom:"10px"}},E.default.createElement(l.default,{span:24},E.default.createElement(d.default,{style:{fontSize:"16px",fontWeight:"bolder"},type:"info",message:(0,x.formatMessage)({id:"enterpriseColony.cloud.msg"})}))),E.default.createElement(c.default,null,E.default.createElement("div",{className:F.default.antd_row_btn},E.default.createElement(r.default,{className:F.default.antd_btn,type:"primary",onClick:()=>this.toLinkNext("goback")},E.default.createElement(x.FormattedMessage,{id:"button.previous"})),E.default.createElement(r.default,{className:F.default.antd_btn,type:"primary",onClick:()=>this.toLinkNext("next")},E.default.createElement(x.FormattedMessage,{id:"button.next"}))))))}},h=v))||h)||h);t.default=I}}]);