(this["webpackJsonpmy-project-page"]=this["webpackJsonpmy-project-page"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(0),c=n(9),r=n.n(c),s=n(33),o=n(39),l=n(74),u=n(75),j=n(57),d=(n(105),n(12)),m=(n(106),n(173)),p=n(166),b=n(184),h=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"95%"}}}}));function f(e){var t=h();return Object(a.jsx)("form",{id:e.name,className:t.root,noValidate:!0,autoComplete:"off",children:Object(a.jsx)(b.a,{type:e.type,onChange:e.clicked,name:e.name,multiline:e.multiline,rows:5,label:e.label,variant:"outlined"})})}var g=n(172),O=n(186),v=n(187),x=n(183),y=Object(p.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:"95%"},selectEmpty:{marginTop:e.spacing(2)}}}));function w(e){var t=y();return Object(a.jsx)("div",{children:Object(a.jsxs)(g.a,{className:t.formControl,children:[Object(a.jsx)(O.a,{id:"demo-simple-select-label",children:"Type"}),Object(a.jsxs)(x.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e.value,onChange:e.clicked,name:e.name,children:[Object(a.jsx)(v.a,{value:"advanced",children:"Advanced"}),Object(a.jsx)(v.a,{value:"fun",children:"Fun"}),Object(a.jsx)(v.a,{value:"basic",children:"Basic"})]})]})})}var S="SET_INPUT_STATE",C="SEND_DATA_SUCCESS",k="FETCH_PROJECTS_DATA",D=n(79),N=n.n(D).a.create({baseURL:"https://saurab-gami-projects-default-rtdb.firebaseio.com/"}),T=function(e){return"mydelllaptop977"===e.password?function(t){N.post("/projects/".concat(e.select,".json"),e).then((function(e){t({type:C})}))}:{type:C}},P=function(){return function(e){N.get("/projects.json").then((function(t){var n;e((n=t.data,{type:k,data:n}))}))}},E=n(80);var I=Object(o.b)((function(e){return{inputState:e.adminPanel.inputs}}),(function(e){return{onChange:function(t,n){return e(function(e,t){return{type:S,name:e,value:t}}(t,n))},onSubmit:function(t){return e(T(t))}}}))((function(e){var t=function(t,n){e.onChange(t,n)};return Object(a.jsxs)("form",{className:E.Form,onSubmit:function(t){t.preventDefault(),e.onSubmit(e.inputState)},children:[Object(a.jsx)(w,{value:e.inputState.select,clicked:function(e){return t(e.target.name,e.target.value)},name:"select"}),Object(a.jsx)(f,{value:e.inputState.name,clicked:function(e){return t(e.target.name,e.target.value)},name:"name",label:"Project Name"}),Object(a.jsx)(f,{value:e.inputState.github,clicked:function(e){return t(e.target.name,e.target.value)},name:"github",label:"Github"}),Object(a.jsx)(f,{value:e.inputState.liveDemo,clicked:function(e){return t(e.target.name,e.target.value)},name:"liveDemo",label:"Live Demo"}),Object(a.jsx)(f,{value:e.inputState.image,clicked:function(e){return t(e.target.name,e.target.value)},name:"image",label:"Image URL"}),Object(a.jsx)(f,{value:e.inputState.description,clicked:function(e){return t(e.target.name,e.target.value)},name:"description",label:"Description",multiline:!0}),Object(a.jsx)(f,{value:e.inputState.toolsUsed,clicked:function(e){return t(e.target.name,e.target.value)},name:"toolsUsed",label:"Tools used",multiline:!0}),Object(a.jsx)(f,{type:"password",value:e.inputState.password,clicked:function(e){return t(e.target.name,e.target.value)},name:"password",label:"Password"}),Object(a.jsx)(m.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Submit"})]})})),A=n(174),F=n(175),R=n(179),L=n(177),_=n(176),U=n(178),W=Object(p.a)({root:{maxWidth:305,minHeight:400,margin:"10px"},media:{height:140}});function B(e){var t=W();return Object(a.jsxs)(A.a,{className:t.root,children:[Object(a.jsxs)(F.a,{children:[Object(a.jsx)(_.a,{className:t.media,image:e.image,title:"Contemplative Reptile"}),Object(a.jsxs)(L.a,{children:[Object(a.jsx)(U.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(a.jsx)(U.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description})]})]}),Object(a.jsxs)(R.a,{children:[Object(a.jsx)(m.a,{size:"small",color:"primary",children:Object(a.jsx)("a",{href:e.github,children:"Github"})}),Object(a.jsx)(m.a,{size:"small",color:"primary",children:Object(a.jsx)("a",{href:e.liveDemo,children:"Live Demo"})})]})]})}var G=n(180),H=n(81),J=n.n(H);var z=Object(o.b)((function(e){return{projects:e.homepage.data}}),(function(e){return{onfetch:function(){return e(P())}}}))((function(e){Object(i.useEffect)((function(){e.onfetch()}),[]);var t=[];for(var n in e.projects)for(var c in e.projects[n])t.push(e.projects[n][c]);var r=t.filter((function(e){return"advanced"==e.select})),s=t.filter((function(e){return"basic"==e.select}));return t.filter((function(e){return"fun"==e.select})),Object(a.jsx)("div",{children:Object(a.jsxs)(G.a,{style:{padding:"30px"},container:!0,children:[Object(a.jsx)(G.a,{item:!0,xs:12,children:Object(a.jsx)("h1",{style:{marginBottom:"20px"},children:"Advance Projects:"})}),r.map((function(e,t){return Object(a.jsx)(G.a,{item:!0,xs:12,lg:3,sm:6,md:4,children:Object(a.jsx)(B,{name:e.name,description:e.description,github:e.github,liveDemo:e.liveDemo,image:e.image})},t)})),Object(a.jsxs)(G.a,{item:!0,xs:12,children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h1",{children:"Basic Projects:"})]}),s.map((function(e,t){return Object(a.jsx)(G.a,{item:!0,xs:12,lg:3,sm:6,md:4,children:Object(a.jsx)(B,{name:e.name,description:e.description,github:e.github,liveDemo:e.liveDemo,image:e.image})},t)})),Object(a.jsxs)(G.a,{className:J.a.section,item:!0,xs:12,children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h1",{children:"Fun Projects:"})]})]})})})),q=n(28),M=n(181),V=n(86),K=n(19),Q=n(182),X=n(82),Y=n.n(X),Z=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(q.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(q.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(K.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(K.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(q.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function $(e){var t=Z();return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(M.a,{position:"static",children:Object(a.jsxs)(Q.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"center",width:"500px",alignItems:"center"},children:[Object(a.jsx)(U.a,{onClick:function(){return e.history.push("/")},className:t.title,variant:"h6",noWrap:!0,children:"Home"}),Object(a.jsx)(U.a,{onClick:function(){return window.location.replace("https://github.com/Saurabgami977")},className:t.title,variant:"h6",noWrap:!0,children:"Github"}),Object(a.jsx)(U.a,{onClick:function(){return e.history.push("/admin")},className:t.title,variant:"h6",noWrap:!0,children:"Admin"})]}),Object(a.jsxs)("div",{className:t.search,children:[Object(a.jsx)("div",{className:t.searchIcon,children:Object(a.jsx)(Y.a,{})}),Object(a.jsx)(V.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var ee=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d.a,{path:"/",component:$}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/",exact:!0,component:z}),Object(a.jsx)(d.a,{path:"/admin",exact:!0,component:I})]})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,188)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},ne=n(24),ae={inputs:{select:"advanced",name:"",github:"",liveDemo:"",description:"",toolsUsed:[],password:null,image:""}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(ne.a)(Object(ne.a)({},e),{},{inputs:Object(ne.a)(Object(ne.a)({},e.inputs),{},Object(q.a)({},t.name,t.value))});case C:return Object(ne.a)(Object(ne.a)({},e),{},{inputs:{select:"advanced",name:"",github:"",liveDemo:"",description:"",toolsUsed:[],password:null,image:""}});default:return e}},ce={data:null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(ne.a)(Object(ne.a)({},e),{},{data:t.data});default:return e}},se=Object(s.combineReducers)({adminPanel:ie,homepage:re}),oe=Object(s.createStore)(se,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(l.a)));r.a.render(Object(a.jsx)(o.a,{store:oe,children:Object(a.jsx)(j.a,{basename:"/my-project-page",children:Object(a.jsx)(ee,{})})}),document.getElementById("root")),te()},80:function(e,t,n){e.exports={Form:"AdminPanel_Form__ENq5W"}},81:function(e,t,n){}},[[130,1,2]]]);
//# sourceMappingURL=main.f77ee72a.chunk.js.map