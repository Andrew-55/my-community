(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{292:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",img:"ProfileInfo_img__1lpBU",mainPhoto:"ProfileInfo_mainPhoto__1Fgjo",contact:"ProfileInfo_contact__1N3gp"}},293:function(e,t,a){e.exports={myPostsBlock:"MyPosts_myPostsBlock__3GdsE",posts:"MyPosts_posts__Vx8ZF"}},294:function(e,t,a){e.exports={item:"Post_item__ueSlo"}},295:function(e,t,a){"use strict";a.r(t);var n=a(35),l=a(36),o=a(38),r=a(37),s=a(39),c=a(0),i=a.n(c),u=a(51),m=a(94),p=a(24),f=a(127),d=a(292),b=a.n(d),E=a(48),v=a.n(E),h=Object(f.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",null,"save")),n&&i.a.createElement("div",{className:v.a.formSymmaryError},n),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",Object(p.c)("Full name","fullName",[],p.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",Object(p.c)("","lookingForAJob",[],p.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",Object(p.c)("My professional skills","lookingForAJobDescription",[],p.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",Object(p.c)("About me","aboutMe",[],p.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map((function(e){return i.a.createElement("div",{className:b.a.contact},i.a.createElement("b",null,e,": ",Object(p.c)(e,"contacts."+e,[],p.a)))}))))})),P=a(41),g=function(e){var t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],l=a[1],o=Object(c.useState)(e.status),r=Object(m.a)(o,2),s=r[0],u=r[1];Object(c.useEffect)((function(){u(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"status: "),i.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"---")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(s)},value:s})))},O=a(105),j=a.n(O),k=function(e){var t=e.profile,a=e.isOwner,n=e.goTOEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null,i.a.createElement("button",{onClick:n},"edit")),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe?t.aboutMe:"no"),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement(y,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},y=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:b.a.contact},i.a.createElement("b",null,t),": ",a)},S=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,s=Object(c.useState)(!1),u=Object(m.a)(s,2),p=u[0],f=u[1];if(!t)return i.a.createElement(P.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:b.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||j.a,className:b.a.mainPhoto,alt:""}),i.a.createElement("div",null,l&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}})),p?i.a.createElement(h,{initialValues:t,profile:t,onSubmit:function(e){r(e).then((function(){f(!1)}))}}):i.a.createElement(k,{profile:t,isOwner:l,goTOEditMode:function(){f(!0)}}),i.a.createElement("div",null,i.a.createElement(g,{status:a,updateStatus:n}))))},_=a(93),N=a(33),w=a(293),A=a.n(w),F=a(294),M=a.n(F),I=function(e){return i.a.createElement("div",{className:M.a.item},i.a.createElement("img",{src:"https://klike.net/uploads/posts/2019-03/1551511862_28.jpg",alt:""}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like ",e.count)))},x=a(87),T=a(72),B=Object(T.a)(10),C=Object(f.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(x.a,{component:p.b,name:"newPostText",placeholder:"Post add",validate:[T.b,B]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))})),J=i.a.memo((function(e){var t=Object(N.a)(e.posts).reverse().map((function(e){return i.a.createElement(I,{message:e.message,count:e.likecount})}));return i.a.createElement("div",{className:A.a.myPostsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(C,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:A.a.posts},t))})),U=a(14),D=Object(U.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(_.a)(t))}}}))(J),V=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.store,o=e.savePhoto,r=e.saveProfile,s=Object(u.a)(e,["profile","status","updateStatus","store","savePhoto","saveProfile"]);return i.a.createElement("div",{className:""},i.a.createElement(S,{isOwner:s.isOwner,profile:t,status:a,updateStatus:n,savePhoto:o,saveProfile:r}),i.a.createElement(D,{store:l}))},z=a(29),L=a(8),G=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement("div",{className:""},i.a.createElement(V,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})))}}]),t}(i.a.Component);t.default=Object(L.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:_.d,getStatus:_.c,updateStatus:_.g,savePhoto:_.e,saveProfile:_.f}),z.g)(G)}}]);
//# sourceMappingURL=3.abf02613.chunk.js.map