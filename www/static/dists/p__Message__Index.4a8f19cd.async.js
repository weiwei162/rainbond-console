(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{NuAk:function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var s=l(a("bx4M"));a("Mwp2");var n=l(a("VXEj"));a("+BJd");var i=l(a("mr32"));a("y8nQ");var u,d,o,c=l(a("Vl3Y")),p=r(a("q1tI")),g=a("MuoO"),m=l(a("XZXw")),_=(l(a("WN3O")),l(a("hBcb"))),f=l(a("QDog")),h=(l(a("+iC2")),l(a("8+Sn")),l(a("P6UB"))),y=(a("7DNP"),c.default.Item,u=(0,g.connect)(e=>{var t=e.user;return{currUser:t.currentUser}}),u((o=class extends p.PureComponent{constructor(e){super(e),this.getuserMessage=((e,t,a,l)=>{this.props.dispatch({type:"global/getuserMessage",payload:{team_name:f.default.getCurrTeamName(),page_num:this.state.page,page_size:this.state.pageSize,msg_type:""},callback:e=>{e&&this.setState({list:e.list||[],total:e.total})}})}),this.handlePageChange=(e=>{this.state.page=e,this.getuserMessage()}),this.state={loading:!1,page:1,pageSize:10,list:[],total:0}}componentDidMount(){this.getuserMessage()}render(){this.props.currUser;var e=this.state,t=e.loading,a=e.list,l=(f.default.getCurrTeamName(),{pageSize:this.state.pageSize,total:this.state.total,current:this.state.page,onChange:e=>{this.handlePageChange(e)}});return p.default.createElement(m.default,{breadcrumbList:[{title:"\u9996\u9875",href:"/"},{title:"\u6211\u7684\u6d88\u606f",href:""}]},p.default.createElement(s.default,{style:{marginTop:24},bordered:!1,bodyStyle:{padding:"8px 32px 32px 32px"}},p.default.createElement(n.default,{size:"large",pagination:l,loading:0===a.length&&t,rowKey:"id",itemLayout:"vertical",dataSource:a,renderItem:e=>p.default.createElement(n.default.Item,{key:e.id,actions:[],extra:p.default.createElement("div",{className:_.default.listItemExtra})},p.default.createElement(n.default.Item.Meta,{title:p.default.createElement("a",{className:_.default.listItemMetaTitle,href:e.href},e.title),description:p.default.createElement("span",null,p.default.createElement(i.default,null,h.default.getTypecn(e.msg_type)))}),p.default.createElement("div",{style:{whiteSpace:"pre-wrap"},dangerouslySetInnerHTML:{__html:e.content}}))})))}},d=o))||d);t.default=y},P6UB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={announcement:"\u516c\u544a",news:"\u6d88\u606f",warn:"\u63d0\u9192"},r={getTypecn:e=>l[e]||""},s=r;t.default=s},hBcb:function(e,t,a){e.exports={nameID:"nameID___3SdBx",icon:"icon___368Q1",iconm:"iconm___eYkE9",listContent:"listContent___3SQhY",description:"description___2Cc_1",extra:"extra___B7pSn",listItemMetaTitle:"listItemMetaTitle___10lb2",listItemExtra:"listItemExtra___1EArv",selfTrigger:"selfTrigger___1WKhO"}}}]);