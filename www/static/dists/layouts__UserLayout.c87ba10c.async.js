(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{jH8a:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a("MuoO"),r=a("7DNP"),o=n(a("q1tI")),i=n(a("rkhD")),s=n(a("W2Kv")),d=n(a("QDog")),u=n(a("tH/r")),c=n(a("mWxT")),f=n(a("ZShK")),h=n(a("BOD2"));class p extends o.default.PureComponent{constructor(e){super(e),this.isRender=(e=>{this.setState({isRender:e})}),this.state={isRender:!1}}componentWillMount(){var e=this.props.dispatch;e({type:"global/fetchRainbondInfo",callback:e=>{if(e){d.default.putLog(e);var t=this.props.location.query,a="/user/login"===this.props.location.pathname;if(a){var n=t.redirect;n&&window.localStorage.setItem("redirect",n)}var l=c.default.OauthbEnable(e)||c.default.OauthEnterpriseEnable(e),r=e.enterprise_center_oauth&&e.enterprise_center_oauth.value;!r&&e.oauth_services&&e.oauth_services.value&&e.oauth_services.value.map(e=>{return e.is_auto_login&&(r=e),null});var o=t&&t.disable_auto_login;l&&r&&a&&r.is_auto_login&&"true"!==o?(d.default.removeCookie(),window.location.href=u.default.getAuthredictURL(r)):this.isRender(!0)}}})}render(){var e=this.props,t=e.rainbondInfo,a=e.children,n=this.state.isRender,l=c.default.fetchLogo(t)||s.default,d=c.default.isEnterpriseEdition(t);return t&&n?o.default.createElement("div",{className:h.default.container},o.default.createElement("div",{className:h.default.headers},o.default.createElement("div",{className:h.default.logo},o.default.createElement(r.Link,{to:"/"},o.default.createElement("img",{src:l,alt:"LOGO"})))),o.default.createElement("div",{className:h.default.content},o.default.createElement("div",{className:h.default.contentBox},o.default.createElement("div",{className:h.default.contentBoxLeft},o.default.createElement("img",{src:i.default,alt:"Rainbond | \u4e91\u539f\u751f\u591a\u4e91\u5e94\u7528\u7ba1\u7406\u5e73\u53f0"})),o.default.createElement("div",{className:h.default.contentBoxRight},a))),!d&&o.default.createElement(f.default,null)):null}}var m=(0,l.connect)(e=>{var t=e.global;return{rainbondInfo:t.rainbondInfo}})(p);t.default=m},rkhD:function(e,t,a){e.exports=a.p+"static/cloud.fdefbf75.png"}}]);