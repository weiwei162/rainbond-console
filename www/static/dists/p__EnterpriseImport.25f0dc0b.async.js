(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{AkSM:function(e,t,a){e.exports={tit:"tit___AJoBY",upText:"upText___25PJ2",mb10:"mb10___3z1Aa",rl:"rl___nfYuz",box:"box___3iPdf",con:"con___3LnAo",desc:"desc___1V9Za",btn:"btn___77hST"}},NlwA:function(e,t,a){"use strict";var s=a("g09b"),l=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var i=s(a("2/Rp"));a("OaEy");var r=s(a("2fM7"));a("7Kak");var n=s(a("9yH6"));a("sRBo");var d=s(a("kaz8"));a("DZo9");var o=s(a("8z0m"));a("Pwec");var c=s(a("CtXQ"));a("MXD1");var p=s(a("CFYs"));a("IzEo");var u=s(a("bx4M"));a("14J3");var m=s(a("BMrR"));a("jCWc");var f=s(a("kPKH"));a("/xke");var h=s(a("TeRw"));a("2qtc");var _,g,v,E=s(a("kLXV")),y=a("MuoO"),b=a("7DNP"),M=l(a("q1tI")),k=a("LLXN"),x=s(a("XZXw")),w=s(a("+iC2")),S=s(a("AkSM")),C=E.default.confirm,I=(_=(0,y.connect)(e=>{var t=e.user,a=e.global;return{user:t.currentUser,rainbondInfo:a.rainbondInfo}}),_((v=class extends M.PureComponent{constructor(e){super(e),this.cancelImport=(()=>{var e=this.props,t=e.dispatch,a=e.match.params.eid;t({type:"market/cancelImportApp",payload:{enterprise_id:a,event_id:this.state.event_id},callback:e=>{e&&(h.default.success({message:(0,k.formatMessage)({id:"notification.success.cancel_successfully"})}),t(b.routerRedux.push("/enterprise/".concat(a,"/shared/local"))))}})}),this.complete=(()=>{this.props.onOK&&this.props.onOK()}),this.onChangeUpload=(e=>{var t=e.fileList;t=t.filter(e=>{return!e.response||"success"===e.response.msg}),e&&e.event&&e.event.percent&&this.setState({percents:e.event.percent});var a=e.file.status;"done"===a&&this.setState({percents:!1}),this.setState({fileList:t})}),this.onRemove=(()=>{this.setState({fileList:[]})}),this.onFileChange=(e=>{this.setState({file_list:e})}),this.openQueryImportStatus=(()=>{this.statusloop=!0,this.queryImportStatus()}),this.handleSubmit=(()=>{var e=this.props.match.params.eid,t=this.state,a=t.scopeValue,s=t.tenant_name,l=t.event_id,i=t.file_list;if(0===i.length)return h.default.destroy(),void h.default.warning({message:(0,k.formatMessage)({id:"notification.warn.choose_one"})});if(""===s&&"enterprise"!==a)return h.default.destroy(),void h.default.warning({message:(0,k.formatMessage)({id:"popover.enterpriseOverview.joinTeam.placeholder"})});var r="";i.map(e=>{return r+="".concat(e,","),e}),r=r.slice(0,r.length-1),this.props.dispatch({type:"market/importApp",payload:{scope:a,tenant_name:s,enterprise_id:e,event_id:l,file_name:r},callback:e=>{e&&(h.default.success({message:(0,k.formatMessage)({id:"notification.success.starting_imported"})}),this.loop=!1,this.openQueryImportStatus())}})}),this.queryImportRecord=(()=>{var e=this.props,t=e.dispatch,a=e.match.params.eid;t({type:"market/queryImportRecord",payload:{enterprise_id:a},callback:e=>{e&&200===e.status_code&&(e.bean&&""!==e.bean.region_name||C({content:(0,k.formatMessage)({id:"applicationMarket.Offline.not"})}),this.setState({record:e.bean,event_id:e.bean.event_id,region_name:e.bean&&e.bean.region_name},()=>{""!==e.bean.region_name&&(this.openQueryImportStatus(),this.handleQueryImportDir())}))}})}),this.queryImportStatus=(()=>{var e=this.props,t=e.dispatch,a=e.match.params.eid;t({type:"market/queryImportApp",payload:{enterprise_id:a,event_id:this.state.event_id},callback:e=>{if(e&&200===e.status_code){if(this.setState({import_file_status:e.list}),e.bean&&"uploading"===e.bean.status)return;if(e.bean&&"partial_success"===e.bean.status)return void h.default.success({message:(0,k.formatMessage)({id:"notification.error.failed_import_app"})});if(e.bean&&"success"===e.bean.status)return h.default.success({message:(0,k.formatMessage)({id:"notification.success.imports_closure"})}),void t(b.routerRedux.push("/enterprise/".concat(a,"/shared/local")));if(e.bean&&"failed"===e.bean.status)return h.default.warning({message:(0,k.formatMessage)({id:"notification.error.failed_import"})}),void this.setState({import_file_status:[]});this.statusloop&&setTimeout(()=>{this.queryImportStatus()},3e3)}},handleError:()=>{}})}),this.handleQueryImportDir=(()=>{var e=this.props,t=e.dispatch,a=e.match.params.eid;t({type:"market/queryImportDirApp",payload:{enterprise_id:a,event_id:this.state.event_id},callback:e=>{e&&this.setState({existFileList:e.list}),this.loop&&setTimeout(()=>{this.handleQueryImportDir()},6e3)},handleError:()=>{}})}),this.onChangeRadio=(e=>{this.setState({scopeValue:e.target.value})}),this.getUserTeams=(()=>{var e=this.props,t=e.dispatch,a=e.match.params.eid;t({type:"global/fetchMyTeams",payload:{enterprise_id:a,page:1,page_size:999},callback:e=>{e&&200===e.status_code&&this.setState({userTeamList:e.list})}})}),this.handleChangeTeam=(e=>{this.setState({tenant_name:e})});var t=this.props.user,a=w.default.isCompanyAdmin(t);this.state={enterpriseAdmin:a,fileList:[],existFileList:[],record:{},event_id:"",file_list:[],import_file_status:[],userTeamList:[],scopeValue:a?"enterprise":"team",tenant_name:"",percents:!1,region_name:""}}componentDidMount(){this.loop=!0,this.queryImportRecord(),this.getUserTeams()}componentWillUnmount(){this.loop=!1,this.statusloop=!1}render(){var e=()=>M.default.createElement("svg",{t:"1582646117495",viewBox:"0 0 1026 1024","p-id":"5405",width:"23",height:"23"},M.default.createElement("path",{d:"M536.149154 400.348544c56.251093 47.113428 112.500379 94.243113 168.749666 141.372797 20.850997 17.471561 22.241786 33.339199 4.763001 54.179359-17.460724 20.858222-33.353649 22.249011-54.20284 4.779257-34.630646-29.020528-69.259485-58.042862-103.906387-87.045328v448.330764c0 27.203471-11.259972 38.458025-38.477893 38.458024-27.201665 0-38.477893-11.254553-38.477894-38.458024V513.634629a541926.23157 541926.23157 0 0 0-103.906387 87.045328c-20.850997 17.469755-36.72586 16.078966-54.206452-4.779257-17.478786-20.84016-16.086191-36.707798 4.763001-54.179359 56.252899-47.129684 112.502185-94.259369 168.751472-141.372797 16.660568-13.953045 29.490145-13.953045 46.150713 0z",fill:"#4D73B1","p-id":"5406"}),M.default.createElement("path",{d:"M923.532655 8.543418H102.61494C45.939386 8.543418 0 54.477385 0 111.113203v512.865179c0 56.632205 45.939386 102.569785 102.61494 102.569784h217.178022c27.216115 0 38.494149-11.272616 38.494149-38.476087 0-27.187215-11.276228-38.459831-38.494149-38.459831H102.61494c-18.148893 0-25.662766-7.506648-25.662766-25.63206V111.115009c0-18.125412 7.513873-25.633867 25.662766-25.633867h820.917715c18.148893 0 25.66096 7.508454 25.66096 25.633867v512.865179c0 18.125412-7.512067 25.63206-25.66096 25.63206H706.356439c-27.216115 0-38.494149 11.272616-38.494149 38.459831 0 27.205278 11.276228 38.476087 38.494149 38.476087h217.176216c56.675554 0 102.61494-45.93758 102.61494-102.569784V111.113203c0-56.635817-45.939386-102.569785-102.61494-102.569785z",fill:"#4D73B1","p-id":"5407"})),t={},a=this.state,s=a.existFileList,l=a.percents,h=a.userTeamList,_=a.record,g=a.region_name,v=a.enterpriseAdmin,E=a.import_file_status,y=s&&s.length>0&&s,b={display:"block",height:"30px",lineHeight:"30px"},w=h&&h.length>0&&h;return M.default.createElement(x.default,{title:M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.import"}),content:M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.mode"})},M.default.createElement("div",{style:{margin:"75px 21px 0 24px"}},M.default.createElement("div",{className:S.default.tit},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.import"})),M.default.createElement(u.default,{bodyStyle:{padding:"25px 0 25px 29px"},className:S.default.mb10},M.default.createElement(m.default,{className:S.default.box},M.default.createElement(f.default,{span:24,className:S.default.desc},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.use"}),M.default.createElement("span",null,"\u201c",g,"\u201d"),M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.import_task"})))),M.default.createElement(u.default,{bodyStyle:{padding:"0 0 0 27px"},className:S.default.mb10},M.default.createElement(m.default,{className:S.default.box},M.default.createElement(f.default,{span:23,className:S.default.con},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.upload_app"}),l&&M.default.createElement(p.default,{percent:parseInt(l),size:"small",style:{width:"98%"}})),M.default.createElement(f.default,{span:1,className:S.default.rl},M.default.createElement(o.default,{showUploadList:!1,name:"appTarFile",accept:".zip,.tar,.gz",action:_.upload_url,fileList:this.state.fileList,onChange:this.onChangeUpload,onRemove:this.onRemove,headers:t,disabled:""===g},M.default.createElement(c.default,{component:e}),M.default.createElement("div",{className:S.default.upText},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.upload"})))))),y&&M.default.createElement("div",null,M.default.createElement("div",{className:S.default.tit},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.upload_list"})),M.default.createElement(u.default,{className:S.default.mb10},M.default.createElement(d.default.Group,{style:{width:"100%"},onChange:this.onFileChange},M.default.createElement(m.default,null,y.map(e=>{return M.default.createElement(f.default,{key:"col".concat(e),span:24},M.default.createElement(d.default,{key:e,value:e},e," ",E.map(t=>{if(t.file_name===e)switch(t.status){case"failed":return M.default.createElement(c.default,{type:"check-circle",theme:"twoTone",twoToneColor:"red"});case"success":return M.default.createElement(c.default,{type:"check-circle",theme:"twoTone",twoToneColor:"#52c41a"});default:return M.default.createElement(c.default,{type:"sync",spin:!0})}})))})))),M.default.createElement("div",{className:S.default.tit},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.import_Range"})),M.default.createElement(u.default,{className:S.default.mb10},M.default.createElement(n.default.Group,{onChange:this.onChangeRadio,value:this.state.scopeValue},M.default.createElement(n.default,{style:b,value:"enterprise",disabled:!v},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.upload_enterprise"})),M.default.createElement(n.default,{style:b,value:"team"},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.upload_team"}),M.default.createElement(r.default,{getPopupContainer:e=>e.parentNode,size:"small",defaultValue:M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.select"}),style:{width:150,marginLeft:"15px"},onChange:this.handleChangeTeam},w&&w.map(e=>{var t=e.team_id,a=e.team_alias,s=e.team_name;return M.default.createElement(Option,{key:t,value:s},a)}))))),M.default.createElement(m.default,{style:{marginTop:"25px"}},M.default.createElement(f.default,{span:24,className:S.default.btn},M.default.createElement(i.default,{onClick:()=>{this.cancelImport()}},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.Abort_import"})),0===this.state.import_file_status.length&&M.default.createElement(i.default,{type:"primary",onClick:()=>{this.handleSubmit()}},M.default.createElement(k.FormattedMessage,{id:"applicationMarket.Offline.confirm_import"})))))))}},g=v))||g);t.default=I}}]);