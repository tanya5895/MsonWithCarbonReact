(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{410:function(e,t,n){e.exports=n(842)},734:function(e,t,n){},842:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"customTextPage",function(){return s}),n.d(a,"app",function(){return c});var o={};n.r(o),n.d(o,"CustomText",function(){return f});var i=n(49),r=n.n(i),s={name:"app.CustomTextPage",component:"CustomText",text:{0:{FormLabel:{value:"First name",style:{visibility:"visible"}},TextInput:{value:"Eg:jhon",style:{visibility:"visible",width:"500px"}},Select:{style:{visibility:"hidden"}}},1:{FormLabel:{value:"Last name",style:{visibility:"visible"}},TextInput:{value:"Eg:Smith",style:{visibility:"visible",width:"500px"}},Select:{style:{visibility:"hidden"},SelectItems:{0:{text:"bengaluru",value:"option1"},1:{text:"pune",value:"option2"}}}},2:{FormLabel:{value:"City",style:{visibility:"visible"}},TextInput:{value:"Eg:Bengaluru",style:{visibility:"visible",width:"500px"}},Select:{style:{visibility:"visible"}}},3:{FormLabel:{value:"Phone number",style:{visibility:"visible"}},TextInput:{value:"Eg:+91 989355",style:{visibility:"visible",width:"500px"}},Select:{style:{visibility:"hidden"}}},4:{FormLabel:{value:"Email",style:{visibility:"visible"}},TextInput:{value:"Eg:jsmith@in.ibm.com",style:{visibility:"visible",width:"500px"}},Select:{style:{visibility:"hidden"}}}}},c={name:"app.App",component:"App",menu:{component:"Menu",items:[{path:"/custom-text",label:"Custom Components",heading:"Custom Components in MSON",content:{component:"app.CustomTextPage"}}]}},l=n(52),p=n(53),u=n(62),h=n(43),m=n(403),v=n(63),g=n(38),d=n.n(g),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o))))._className="CustomText",n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"_create",value:function(e){Object(m.a)(Object(h.a)(t.prototype),"_create",this).call(this,e),this.set({schema:{component:"Form",fields:[{name:"text",component:"TextField",label:"Text",multiline:!0,docLevel:"basic",help:"Any markdown. See markdownguide.org"},{name:"input",component:"TextField",label:"Text",multiline:!0,docLevel:"basic",help:"Any markdown. See markdownguide.org"}]}})}}]),t}(d.a);for(var b in d.a.setLayer("frontEnd"),a){var y=a[b];r.a.registerComponent(y.name,y)}for(var k in o){var O=o[k];r.a.registerComponent(O.name,O)}var w=r.a.newComponent({component:"app.App"}),S=n(76),C=n.n(S),x=n(105),j=n(0),E=n.n(j),I=n(22),T=n.n(I),A=n(107),L=n(21),N=n.n(L),P=n(374),F=n(382),M=n(359),U=n(326),B=n(247),D=n(48),R=n.n(D),W=n(385),q=n.n(W),G=n(386),_=n.n(G),H=n(75),J=n(179),V=n(25),$=n.n(V),z=(n(332),n(34)),K=(n(846),n(733),n(879)),Q=n(880),X=n(885),Y=n(881),Z=n(882),ee=n(883),te=n(887),ne=(n(734),z.a.prefix,function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"getDisplayStyle",value:function(e){var t=e.visible;return console.log("display",t),t}},{key:"render",value:function(){var e=this.props.text;console.log(e);var t="";return Object.keys(e).forEach(function(n){console.log("element",e[n]);var a=E.a.createElement(K.a,null,E.a.createElement(Q.a,{style:e[n].FormLabel.style},e[n].FormLabel.value),E.a.createElement(X.a,{style:e[n].TextInput.style,placeholder:e[n].TextInput.value}),E.a.createElement(Y.a,{style:e[n].Select.style,labelText:"Select"},E.a.createElement(Z.a,{text:"Choose an option",value:"placeholder-item"})));console.log("temp",a),t=E.a.createElement("div",null,t,a)}),t=E.a.createElement(ee.a,null,t,E.a.createElement(te.a,{kind:"primary",tabIndex:0,type:"submit"},"Submit")),E.a.createElement(j.Fragment,null,t)}}]),t}(E.a.PureComponent)),ae={CustomText:ne=$()(["text"])(ne)},oe=new(function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,[{key:"getUIComponent",value:function(e){console.log("Getting UI Component=================",e);var t=e.getClassName(),n=ae[t];if(void 0!==n)return n;if(r.a.isCompiled(r.a.getComponent(t))){var a=Object.getPrototypeOf(e.constructor);return this.getUIComponent(new a)}var o=r.a.getOldestCompiledAncestor(t),i=r.a.getComponent(o);return this.getUIComponent(new i)}}]),e}()),ie=n(165),re=n.n(ie),se=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e,t){var a=n.props,o=a.on,i=a.component;o&&o({name:e,value:t,component:i});var r="on"+e.charAt(0).toUpperCase()+e.slice(1);n.props[r]&&n.props[r]({value:t,component:i})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"addChangeListener",value:function(){this.props.component.on("$change",this.handleChange),this.props.component.emitChange("mount")}},{key:"removeChangeListener",value:function(){this.props.component.removeListener("$change",this.handleChange)}},{key:"componentDidMount",value:function(){this.props.component&&this.addChangeListener()}},{key:"componentWillUnmount",value:function(){this.props.component.emitChange("unmount"),this.removeChangeListener()}},{key:"componentDidUpdate",value:function(e){this.props.component!==e.component&&(this.removeChangeListener(),this.addChangeListener())}},{key:"render",value:function(){var e=this.props,t=e.component,n=Object(J.a)(e,["component"]),a={};if(t){try{a=re.a.getUIComponent(t)}catch(o){console.log("Couldn't find "+t.get("name")+" component in mson-react, looking for it locally"),a=oe.getUIComponent(t)}return E.a.createElement(a,Object.assign({component:t},n))}return null}}]),t}(E.a.PureComponent),ce=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={component:null},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"createComponent",value:function(){var e=this.props.definition;this.setState({component:r.a.newComponent(e)})}},{key:"componentDidMount",value:function(){this.props.definition&&this.createComponent()}},{key:"componentWillUnmount",value:function(){var e=this.state.component;e&&(e.emitChange("unmount"),this.state.component.destroy())}},{key:"componentDidUpdate",value:function(e){this.props.definition!==e.definition&&this.createComponent()}},{key:"render",value:function(){var e=this.props,t=(e.definition,e.component),n=Object(J.a)(e,["definition","component"]),a=t;return t||(a=this.state.component),E.a.createElement(se,Object.assign({component:a},n))}}]),t}(E.a.PureComponent),le=n(886),pe=n(35),ue=n.n(pe),he=n(397),me=n.n(he),ve=n(249),ge=n.n(ve),de=n(342),fe=n(37),be=n.n(fe),ye=n(241),ke=n.n(ye),Oe=n(163),we=n.n(Oe),Se=n(104),Ce=n.n(Se),xe=n(39),je=n.n(xe),Ee=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={mobileOpen:!1,menuItem:null,snackbarOpen:!1,snackbarMessage:"",confirmationOpen:!1,nextMenuItem:null,showArchivedToggle:!1,searchStringInput:"",showSearch:!1,showSearchOnMobile:!1},n.form=null,n.path=null,n.onNavigate=function(e){var t=n.state.menuItem;t&&t.content.has("dirty")&&t.content.get("dirty")&&!t.fullScreen?ue.a.displayConfirmation({title:"Discard changes?",callback:e}):e(!0)},n.handleDrawerToggle=function(){n.setState({mobileOpen:!n.state.mobileOpen})},n.handleNavigate=function(){var e=Object(x.a)(C.a.mark(function e(t,a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.content instanceof be.a)){e.next=5;break}return e.next=3,t.content.run();case 3:e.next=6;break;case 5:n.props.history.push(t.path);case 6:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.handleConfirmationClose=function(){var e=Object(x.a)(C.a.mark(function e(t){var a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=n.props.confirmation).callback&&t&&a.callback(t),n.setState({confirmationOpen:!1});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.switchContent=function(){var e=Object(x.a)(C.a.mark(function e(t,a){var o,i,r,s,c,l,p,u,h;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t===n.state.menuItem){e.next=22;break}if(n.component&&n.component.emitUnload(),o=t&&t.content instanceof be.a,!t||!t.content){e.next=21;break}if(i=n.props,r=i.location,s=i.component,c=s.get("menu"),ue.a.set({route:c.toRoute({parameters:a,queryString:r.search.substr(1),hash:r.hash.substr(1)})}),l=c.getParent(t.path),!n.requireAccess(t.roles)||l&&!n.requireAccess(l.roles)){e.next=19;break}if(!o){e.next=14;break}return e.next=12,t.content.run();case 12:e.next=19;break;case 14:n.component=t.content,n.component.emitLoad(),p=n.canArchive(),u=p.canArchive,h=p.canSearch,ue.a.set({searchString:null}),n.setState({menuItem:t,showArchived:!1,showArchivedToggle:u,searchStringInput:"",showSearch:h});case 19:e.next=22;break;case 21:n.component=null;case 22:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.onLocation=function(e){ue.a.set({path:e.pathname})},n.handleSnackbarClose=function(){n.setState({snackbarOpen:!1})},n.handleArchivedChange=function(e){n.setState({showArchived:e.target.checked});var t=n.state.menuItem;t&&(t.content.set({showArchived:e.target.checked}),window.scrollTo({top:0}))},n.handleSearchStringInputChange=function(e){n.setState({searchStringInput:e})},n.handleSearch=function(e){n.setState({searchStringInput:e},function(){ue.a.set({searchString:e||null})})},n.toggleShowSearch=function(){n.setState({showSearchOnMobile:!n.state.showSearchOnMobile})},n.setGlobalOnNavigate(),n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"setGlobalOnNavigate",value:function(){ue.a.setOnNavigate(this.onNavigate)}},{key:"redirect",value:function(e){var t=this.props.history;ue.a.set({redirectPath:null}),t.push(e)}},{key:"navigateTo",value:function(e){var t=this.state.menuItem,n=this.props.component.get("menu");if(!t||e!==t.path){var a=n.getItemAndParsePath(e);return this.switchContent(a.item,a.params)}}},{key:"canArchive",value:function(){var e=!1,t=!1;if(this.component&&this.component instanceof we.a){var n=!0,a=!1,o=void 0;try{for(var i,r=this.component.getFields()[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var s=i.value;s instanceof ke.a&&(e=!s.get("forbidViewArchived")&&Ce.a.canArchive(s.get("form")),t=!s.get("forbidSearch"))}}catch(c){a=!0,o=c}finally{try{n||null==r.return||r.return()}finally{if(a)throw o}}}return{canArchive:e,canSearch:t}}},{key:"emitLoggedOut",value:function(){ue.a.set({redirectAfterLogin:this.props.location.pathname}),this.props.component.emitLoggedOut()}},{key:"requireAccess",value:function(e){var t=!e||je.a.client&&je.a.client.user.hasRole(e);return t||this.emitLoggedOut(),t}},{key:"componentWillUpdate",value:function(e){var t=ue.a.get("snackbarMessage");t&&(this.displaySnackbar(t),ue.a.set({snackbarMessage:null}))}},{key:"componentDidUpdate",value:function(e){if(this.props.redirectPath&&this.props.redirectPath!==e.redirectPath&&this.redirect(this.props.redirectPath),this.props.path!==e.path&&this.navigateTo(this.props.path),this.props.confirmation!==e.confirmation&&this.setState({confirmationOpen:!0}),this.props.searchString!==e.searchString){var t=this.state.menuItem;t&&t.content.has("searchString")&&t.content.set({searchString:this.props.searchString})}}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(t){e.state.menuItem&&e.state.menuItem.content.emit("scroll",t)}),this.props.redirectPath&&this.redirect(this.props.redirectPath)}},{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(this.onLocation),Promise.resolve().then(function(){je.a.client&&je.a.client.user.awaitSession()}).then(function(){e.onLocation(e.props.location)})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"displaySnackbar",value:function(e){this.setState({snackbarOpen:!0,snackbarMessage:e})}},{key:"archivedToggle",value:function(){var e=this.state,t=e.showArchived,n=!!t,a=null;return e.showArchivedToggle&&(a=E.a.createElement(F.a,{title:t?"Show Active":"Show Deleted"},E.a.createElement(de.a,{onChange:this.handleArchivedChange,checked:n}))),a}},{key:"searchBox",value:function(e){var t=this.props.classes,n=this.state,a=n.searchStringInput,o=null;return n.showSearch&&(o=E.a.createElement(_.a,{fullWidth:e,className:t.alignRight,searchString:a,onChange:this.handleSearchStringInputChange,onSearch:this.handleSearch})),o}},{key:"menuButton",value:function(){var e=this.props.classes,t=this.isResponsive();return E.a.createElement(B.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerToggle,className:t?e.navIconHide:""},E.a.createElement(R.a,{icon:"Menu"}))}},{key:"title",value:function(){var e=this.state.menuItem;return E.a.createElement(U.a,{variant:"h6",color:"inherit",noWrap:!0},e?e.label:"")}},{key:"appBar",value:function(){var e=this.props,t=e.classes,n=e.width,a=this.state.showSearchOnMobile,o=Object(le.b)("sm",n),i=this.isResponsive(),r=null;return r=o?a?E.a.createElement(E.a.Fragment,null,E.a.createElement(B.a,{color:"inherit","aria-label":"close search",onClick:this.toggleShowSearch},E.a.createElement(R.a,{icon:"ArrowBack"})),this.searchBox(!0)):E.a.createElement(E.a.Fragment,null,this.menuButton(),this.title(),this.archivedToggle(),E.a.createElement(B.a,{color:"inherit","aria-label":"toggle search",onClick:this.toggleShowSearch,className:t.alignRight},E.a.createElement(R.a,{icon:"Search"}))):E.a.createElement(E.a.Fragment,null,this.menuButton(),this.title(),this.archivedToggle(),this.searchBox()),E.a.createElement(P.a,{elevation:1,className:t.appBar+(i?" ".concat(t.appBarResponsive):"")},E.a.createElement(M.a,null,r))}},{key:"isResponsive",value:function(){return!this.props.menuAlwaysTemporary}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.component,a=e.confirmation,o=this.state,i=o.mobileOpen,r=o.menuItem,s=o.snackbarOpen,c=o.snackbarMessage,l=o.confirmationOpen,p=this.isResponsive(),u=n.get("menu"),h=this.props.location.pathname,m=this.component?E.a.createElement(ce,{component:this.component}):null,v=this.appBar(),g=E.a.createElement(q.a,{component:u,onDrawerToggle:this.handleDrawerToggle,mobileOpen:i,onNavigate:this.handleNavigate,path:h,responsive:p}),d=null;return r&&r.fullScreen&&(d={marginLeft:0,marginTop:0}),E.a.createElement("div",{className:t.root},E.a.createElement("div",{className:t.appFrame},r&&r.fullScreen?null:v,r&&r.fullScreen?null:g,E.a.createElement("main",{className:t.content+(p?" ".concat(t.contentResponsive):""),style:d},E.a.createElement(H.d,null,E.a.createElement(H.b,null)),m,E.a.createElement(me.a,{open:s,message:c,onClose:this.handleSnackbarClose}),E.a.createElement(ge.a,{open:l,onClose:this.handleConfirmationClose,title:a?a.title:null,text:a?a.text:null,alert:a?a.alert:null}))))}}]),t}(E.a.PureComponent);Ee=N()(function(e){var t;return{root:{width:"100%",zIndex:1,overflow:"hidden"},appFrame:{position:"relative",display:"flex",width:"100%",height:"100%"},appBar:{position:"fixed",marginLeft:240},appBarResponsive:Object(A.a)({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)")}),navIconHide:Object(A.a)({},e.breakpoints.up("md"),{display:"none"}),content:(t={backgroundColor:e.palette.background.default,width:"100%",padding:3*e.spacing.unit,height:"calc(100% - 56px)",marginTop:56},Object(A.a)(t,e.breakpoints.up("sm"),{height:"calc(100% - 64px)",marginTop:64}),Object(A.a)(t,"overflowAnchor","none"),t),contentResponsive:Object(A.a)({},e.breakpoints.up("md"),{marginLeft:240}),alignRight:{marginLeft:"auto"}}},{withTheme:!0})(Ee),Ee=Object(le.a)()(Ee),Ee=Object(H.g)(Ee),Ee=$()(["menuAlwaysTemporary"])(Ee);var Ie=Ee=$()(["path","redirectPath","snackbarMessage","confirmation","searchString"],ue.a)(Ee),Te=n(884),Ae=n(401),Le=n.n(Ae),Ne=n(245),Pe=n.n(Ne),Fe=n(399),Me=n.n(Fe),Ue=n(400),Be=n.n(Ue),De=n(250),Re=Pe()({palette:{primary:Me.a,secondary:Be.a},typography:{useNextVariants:!0}}),We=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).onNavigate=function(e,t){ue.a.onNavigate(e,t)},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.component,n=e.basename;return E.a.createElement(Le.a,{theme:Re},E.a.createElement(Te.a,null),E.a.createElement(De.a,{getUserConfirmation:this.onNavigate,basename:n},E.a.createElement("div",null,E.a.createElement(Ie,{component:t}),E.a.createElement(H.a,{message:"foo"}))))}}]),t}(E.a.Component),qe=$()(["basename"])(We),Ge=(n(839),function(){var e=Object(x.a)(C.a.mark(function e(t){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!je.a.client){e.next=3;break}return e.next=3,je.a.client.user.awaitSession();case 3:T.a.render(E.a.createElement(qe,{component:t}),document.getElementById("root"));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());n(840);Ge(w)}},[[410,1,2]]]);
//# sourceMappingURL=main.fb04ba71.chunk.js.map