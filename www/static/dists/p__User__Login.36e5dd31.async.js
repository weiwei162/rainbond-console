(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[59],{Y5yc:function(e,t,a){"use strict";var l=a("g09b"),r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var n=l(a("BMrR"));a("5Dmo");var i=l(a("3S7+"));a("/zsF");var d,s,u,o=l(a("PArb")),c=l(a("p0pE")),f=a("MuoO"),h=r(a("q1tI")),p=l(a("QDog")),v=l(a("tH/r")),m=l(a("mWxT")),b=l(a("w2qy")),g=l(a("CTfg")),E=(d=(0,f.connect)(e=>{var t=e.global;return{isRegist:t.isRegist,rainbondInfo:t.rainbondInfo}}),d((u=class extends h.Component{constructor(e){super(e),this.handleSubmit=(e=>{var t=this.props,a=t.dispatch,l=t.location,r=new URLSearchParams(l.search),n=r.get("redirect");a({type:"user/login",payload:(0,c.default)({},e),callback:()=>{var e="/";n&&(e=n),window.location.href=e}})}),this.fetchEnterpriseInfo=(e=>{var t=this.props.dispatch;t({type:"global/fetchEnterpriseInfo",payload:{enterprise_id:e},callback:e=>{if(e&&200===e._code&&e.bean&&e.bean.oauth_services){var t=e.bean.oauth_services,a=void 0===t?{}:t;a.enable&&this.setState({oauthServicesList:a.value&&a.value.length>0&&a.value})}}})}),this.state={}}componentWillMount(){var e=this.props.dispatch;e({type:"global/hideNeedLogin"}),p.default.removeCookie()}render(){var e=this.props.rainbondInfo,t=e&&e.enterprise_center_oauth&&e.enterprise_center_oauth.value,a=t&&v.default.getAuthredictURL(t),l=t&&v.default.getIcon(t),r=[];return e&&e.oauth_services&&e.oauth_services.enable&&e.oauth_services.value&&e.oauth_services.value.length>0&&(r=e.oauth_services.value),h.default.createElement("div",{className:b.default.main,style:{marginTop:"100px"}},h.default.createElement("h3",null,"\u7528\u6237\u767b\u5f55"),h.default.createElement(g.default,{onSubmit:this.handleSubmit,type:"login"}),m.default.OauthbEnable(e)&&(t||r&&r.length>0)&&h.default.createElement("div",{className:b.default.thirdBox},h.default.createElement(o.default,null,h.default.createElement("div",{className:b.default.thirdLoadingTitle},"\u7b2c\u4e09\u65b9\u767b\u5f55")),h.default.createElement(n.default,{className:b.default.third},t&&h.default.createElement("div",{className:b.default.thirdCol,key:t.client_id},h.default.createElement(i.default,{placement:"top",title:t.name},h.default.createElement("a",{href:a,title:t.name},l))),r.map(e=>{var t=e.name,a=e.service_id;return h.default.createElement("div",{className:b.default.thirdCol,key:a},h.default.createElement(i.default,{placement:"top",title:t},h.default.createElement("a",{href:v.default.getAuthredictURL(e),title:t},v.default.getIcon(e))))}))))}},s=u))||s);t.default=E}}]);