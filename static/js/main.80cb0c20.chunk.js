(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={navbar:"Navbar_navbar__CLYHD",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(31),r=n(8),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Valera"},{id:5,name:"Sasha"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}]},c=function(e){return{type:"ADD-MESSAGE",newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:4,message:t.newMessageText};return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}}},132:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__17MJB"}},133:function(e,t,n){e.exports=n.p+"static/media/User_default.81834b04.png"},134:function(e,t,n){e.exports=n.p+"static/media/Cube-1s-200px.3b493ed5.svg"},163:function(e,t,n){e.exports=n(290)},168:function(e,t,n){},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(129),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3e67af7d-111f-4303-88b4-a9cc5b13a435"}}),o={getUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method, Please profile object"),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},289:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(62),c=n.n(o),i=n(34),u=n(35),s=n(37),l=n(36),f=n(38),m=(n(168),n(12)),p=n.n(m),d=n(11),g=function(){return r.a.createElement("nav",{className:p.a.navbar},r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:p.a.active},"Profile")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(d.b,{to:"/dialogs",activeClassName:p.a.active},"Messages")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:p.a.active},"Users")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:p.a.active},"News")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:p.a.active},"Music")),r.a.createElement("div",{className:p.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:p.a.active},"Settings")))},h=function(e){return r.a.createElement("div",null,"News")},E=function(e){return r.a.createElement("div",null,"Music")},b=function(e){return r.a.createElement("div",null,"Settings")},v=n(28),w=n(9),O=n.n(w),S=n(31),P=n(8),y=n(19),C=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(P.a)({},e,{},a):e}))},j={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},_=function(e){return{type:"FOLLOW",userId:e}},I=function(e){return{type:"UNFOLLOW",userId:e}},N=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},T=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},U=function(e,t){return{type:"TOGGLE-IS-FFOLLOWING",isFetching:e,userId:t}},x=function(e,t,n,a){return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e(U(!0,t)),r.next=3,O.a.awrap(n(t));case 3:0===r.sent.data.resultCode&&e(a(t)),e(U(!1,t));case 6:case"end":return r.stop()}}))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(P.a)({},e,{users:C(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(P.a)({},e,{users:C(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(P.a)({},e,{users:Object(S.a)(t.users)});case"SET-CURRENT-PAGE":return Object(P.a)({},e,{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(P.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(P.a)({},e,{isFetching:t.isFetching});case"TOGGLE-IS-FFOLLOWING":return Object(P.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(S.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},L=n(13),A=n(53),F=n(65),z=n(126),D=n(68),M=n.n(D),G=n(131),R=n.n(G),H=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,o=e.onPageChanged,c=e.portionSize,i=void 0===c?20:c,u=Math.ceil(t/n),s=[],l=1;l<=u;l++)s.push(l);var f=Math.ceil(u/i),m=r.a.useState(1),p=Object(z.a)(m,2),d=p[0],g=p[1],h=(d-1)*i+1,E=d*i;return r.a.createElement("div",{className:M.a.paginator},d>1&&r.a.createElement("button",{onClick:function(){g(d-1)}},"PREV"),s.filter((function(e){return e>=h&&e<=E})).map((function(e){return r.a.createElement("span",{className:R()(Object(F.a)({},M.a.selectedPage,a===e),M.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),f>d&&r.a.createElement("button",{onClick:function(){g(d+1)}},"NEXT"))},W=n(132),B=n.n(W),V=n(133),J=n.n(V),K=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,o=e.unfollow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:J.a,className:B.a.userPhoto,alt:""}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.city"),r.a.createElement("div",null,"user.location.country"))))},X=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,o=e.onPageChanged,c=e.users,i=Object(A.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(H,{currentPage:a,onPageChanged:o,totalItemsCount:t,pageSize:n}),r.a.createElement("div",null,c.map((function(e){return r.a.createElement(K,{user:e,followingInProgress:i.followingInProgress,follow:i.follow,unfollow:i.unfollow,key:e.id})}))))},Y=n(40),Z=n(7),q=n(135),$=Object(q.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Q=function(e){return e.usersPage.pageSize},ee=function(e){return e.usersPage.totalUsersCount},te=function(e){return e.usersPage.currentPage},ne=function(e){return e.usersPage.isFetching},ae=function(e){return e.usersPage.followingInProgress},re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Y.a,null):null,r.a.createElement(X,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),oe=Object(Z.d)(Object(L.b)((function(e){return{users:$(e),pageSize:Q(e),totalUsersCount:ee(e),currentPage:te(e),isFetching:ne(e),followingInProgress:ae(e)}}),{follow:function(e){return function(t){return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:x(t,e,y.c.follow.bind(e),_);case 1:case"end":return n.stop()}}))}},unfollow:function(e){return function(t){return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:x(t,e,y.c.unfollow.bind(e),I);case 1:case"end":return n.stop()}}))}},toggleIsFollowing:U,setCurrentPage:N,getUsers:function(e,t){return function(n){var a;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n(T(!0)),n(N(e)),r.next=4,O.a.awrap(y.c.getUser(e,t));case 4:a=r.sent,n(T(!1)),n({type:"SET-USERS",users:a.items}),n({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:a.totalCount});case 8:case"end":return r.stop()}}))}}}))(re),ce=n(90),ie=n.n(ce),ue=function(e){return r.a.createElement("header",{className:ie.a.header},r.a.createElement("img",{src:"https://png.pngtree.com/png-clipart/20190924/original/pngtree-funny-yellow-bear-cartoon-character-png-image_4815036.jpg",alt:""}),r.a.createElement("div",{className:ie.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(d.b,{to:"/login"},"Login")))},se=n(44),le="samurai-network/auth/SET-USER-DATA",fe={userId:null,email:null,login:null,isAuth:!1},me=function(e,t,n,a){return{type:le,payload:{userId:e,email:t,login:n,isAuth:a}}},pe=function(){return function(e){var t,n,a,r,o;return O.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.a.awrap(y.a.me());case 2:0===(t=c.sent).data.resultCode&&(n=t.data.data,a=n.id,r=n.email,o=n.login,e(me(a,r,o,!0)));case 4:case"end":return c.stop()}}))}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(P.a)({},e,{},t.payload);default:return e}},ge=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ue,this.props)}}]),t}(r.a.Component),he=Object(L.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.awrap(y.a.logout());case 2:0===t.sent.data.resultCode&&e(me(null,null,null,!1));case 4:case"end":return t.stop()}}))}}})(ge),Ee=n(125),be=n(72),ve=n(32),we=n(50),Oe=n.n(we),Se=Object(Ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(ve.c)("Email","email",[be.b],ve.a),Object(ve.c)("Password","password",[be.b],ve.a,{type:"password"}),Object(ve.c)(null,"rememberMe",[],ve.a,{type:"checkbox"},"remember me"),n&&r.a.createElement("div",{className:Oe.a.formSymmaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Pe=Object(L.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(a){var r,o;return O.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.a.awrap(y.a.login(e,t,n));case 2:0===(r=c.sent).data.resultCode?a(pe()):(o=r.data.messages.length>0?r.data.messages[0]:"some error",a(Object(se.a)("login",{_error:o})));case 4:case"end":return c.stop()}}))}}})((function(e){return e.isAuth?r.a.createElement(v.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Se,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),ye={initialized:!1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return Object(P.a)({},e,{initialized:!0});default:return e}},je=n(93),_e=n(124),Ie={},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie;arguments.length>1&&arguments[1];return e},Te=n(137),Ue=n(127),xe=Object(Z.c)({profilePage:je.b,dialogsPage:_e.b,usersPage:k,sateBar:Ne,auth:de,form:Ue.a,app:Ce}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,Le=Object(Z.e)(xe,ke(Object(Z.a)(Te.a))),Ae=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Y.a,null)},r.a.createElement(e,t))}},Fe=r.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),ze=r.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),De=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(he,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper-contenet"},r.a.createElement(v.b,{path:"/profile/:userId?",render:Ae(ze)}),r.a.createElement(v.b,{path:"/dialogs",render:Ae(Fe)}),r.a.createElement(v.b,{path:"/users",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(v.b,{path:"/login",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(v.b,{path:"/news",component:h}),r.a.createElement(v.b,{path:"/music",component:E}),r.a.createElement(v.b,{path:"/settings",component:b}))):r.a.createElement(Y.a,null)}}]),t}(r.a.Component),Me=Object(Z.d)(v.f,Object(L.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(pe());Promise.all([t]).then((function(){e({type:"INITIALIZED-SUCCESS"})}))}}}))(De),Ge=function(e){return r.a.createElement(d.a,null,r.a.createElement(L.a,{store:Le},r.a.createElement(Me,null)))};n(289);c.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m}));var a=n(53),r=n(0),o=n.n(r),c=n(87),i=n(50),u=n.n(i),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:u.a.formControl+" "+(c?u.a.error:"")},o.a.createElement("div",null,r),c&&o.a.createElement("span",null," ",a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},m=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,component:a,validate:n},r)),i)}},40:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(134),c=n.n(o);t.a=function(e){return r.a.createElement("img",{src:c.a,alt:""})}},50:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSymmaryError:"FormsControls_formSymmaryError__1gNig"}},68:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},72:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){return t.length>e?"Max lenght is ".concat(e," symbols"):void 0}}},90:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return p}));var a=n(9),r=n.n(a),o=n(31),c=n(8),i=n(19),u={posts:[{id:1,message:"Hi, How are you?",likecount:15},{id:2,message:"Hi, How are you?",likecount:18},{id:3,message:"Hi, How are you?",likecount:17},{id:4,message:"It is my first post",likecount:20}],profile:null,status:""},s=function(e){return{type:"ADD-POST",newPostText:e}},l=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.b.getProfile(e));case 2:n=a.sent,t({type:"SET-USERS-PROFILE",profile:n.data});case 4:case"end":return a.stop()}}))}},m=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.b.getStatus(e));case 2:n=a.sent,t(l(n.data));case 4:case"end":return a.stop()}}))}},p=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(i.b.updateStatus(e));case 2:0===n.sent.data.resultCode&&t(l(e));case 4:case"end":return n.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likecount:0};return Object(c.a)({},e,{newPostText:"",posts:[].concat(Object(o.a)(e.posts),[n])});case"SET-USERS-PROFILE":return Object(c.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});case"DELETE_POST":return Object(c.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.80cb0c20.chunk.js.map