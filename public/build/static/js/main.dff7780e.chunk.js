(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a.p+"static/media/loading.56e512fd.gif"},132:function(e,t,a){e.exports=a(283)},137:function(e,t,a){},139:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},140:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),o=a(123),c=a.n(o),l=(a(137),a(7)),i=a(8),m=a(11),u=a(9),d=a(12),p=(a(139),a(140),a(287)),h=a(288),g=a(284),v=a(124),b=a.n(v),f=a(10);window.location.hostname.includes("localhost")&&(n="http://localhost:3000");var E=function(){return function(e){return fetch(n+"/api/products").then(function(e){return e.json()}).then(function(t){e(function(){return{type:"ALLPRODUCT",product:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}(t))})}},N=a(289),w=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"col-md-4",style:{marginTop:"10px"}},s.a.createElement("div",{className:"card",style:{height:"100%"}},s.a.createElement("div",{className:"card-header"},s.a.createElement("h3",null,this.props.post.title)),s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"card-title"},"Author: ",(e=this.props.post.author.userName)&&e.charAt(0).toUpperCase()+e.substring(1)),s.a.createElement("p",{className:"card-text"},this.props.post.description.substring(0,60)+"..."),s.a.createElement(N.a,{to:"/blog/".concat(this.props.post._id),className:"btn btn-link"},"Read More"))));var e}}]),t}(s.a.Component),y=function(e){return{type:"LOGIN",data:e}},O=a(15),j=a.n(O),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).loginEndpoint=a.endpoint+"/api/login",window.location.hostname.includes("localhost")&&(a.endpoint="http://localhost:3000"),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"login",value:function(e){return fetch(this.loginEndpoint,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return localStorage.setItem("token",e.token),e}).catch(function(e){return e})}},{key:"register",value:function(e){return fetch("/api/register",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){if(e.success)return localStorage.setItem("token",e.token),e}).catch(function(e){return e})}},{key:"resetPassword",value:function(e){return fetch("/api/reset-password",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).catch(function(e){return e})}},{key:"isLoggedIn",value:function(){try{var e=localStorage.getItem("token"),t=(e&&j()(e)).exp<Date.now()/1e3;return!!e&&!t}catch(a){console.log(a)}}},{key:"userDetail",value:function(){try{var e=localStorage.getItem("token");return e&&j()(e)}catch(t){}}}],[{key:"logout",value:function(){localStorage.removeItem("token")}}]),t}(s.a.Component),S=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).showMobileIcon=function(){console.log("hello"),a.setState(function(){return{shMobilIcon:!a.state.shMobilIcon}})},a.state={userData:a.props.userData};var n=a.props.userData;return a.isLoggedIn=n&&!!Object.keys(n).length,a.userName=a.props.userData&&a.props.userData.user&&"".concat(a.props.userData.user.firstName," ").concat(a.props.userData.user.lastName),a.state={userData:a.props.userData,isLoggedIn:a.isLoggedIn,userName:a.userName,shMobilIcon:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.userData&&e.userData.user&&"".concat(e.userData.user.firstName," ").concat(e.userData.user.lastName);this.setState(function(){return{userData:e,isLoggedIn:e&&!!Object.keys(e).length,userName:t}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoggedIn,n=t.userName,r=t.shMobilIcon;return s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},s.a.createElement(N.a,{className:"navbar-brand",to:"/",activeClassName:"active"},"Blog Post"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.showMobileIcon},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:r?"collapse navbar-collapse show":"collapse navbar-collapse",id:"navbarText"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(N.a,{className:"nav-link",to:"/",activeClassName:"active"},"Home ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement(N.a,{className:"nav-link",to:"/blog",activeClassName:"active"},"Create Blog ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item"},!a&&s.a.createElement(N.a,{to:"/register",className:"nav-link",activeClassName:"active"},"Register")),s.a.createElement("li",{className:"nav-item"},!a&&s.a.createElement(N.a,{to:"/login",className:"nav-link",activeClassName:"active"},"Login"))),s.a.createElement("ul",{className:"navbar-nav"},a&&s.a.createElement("div",null,s.a.createElement("span",null,"Welcome ",n)," ",s.a.createElement("button",{className:"btn btn-sm btn-info",onClick:function(){k.logout(),e.setState(function(){return{userData:"",isLoggedIn:!1,userName:""}}),ne.push("/")}},"Logout")))))}}]),t}(s.a.Component),P=Object(f.b)()(S),I=a(126),x=a.n(I),C=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,this.props.loading&&s.a.createElement("img",{className:"loading-icon",src:x.a,alt:"loading"}))}}]),t}(s.a.Component),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={loading:!1,product:{}},a.componentWillMount=function(){a.setState(function(){return{loading:!0}}),a.props.dispatch(E()).then(function(e){a.setState(function(){return{loading:!1}}),a.setState(function(){return{product:a.props.products}})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.loading);return s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"jumbotron"},s.a.createElement("header",null,s.a.createElement("h1",null,"The Blog Post"),s.a.createElement("p",null,"Post your own Blog.Search through some of the best blogs posted by hunderds of user. Sign up and start posting today. Share Knowledge and gain knowledge.Its not always complicated,its simple thing we don't solve the right way. Here we have pleanty of blogs where people have figured out the right way. Read them and share yours own.")))),s.a.createElement("div",{className:"row"},e.state.loading?s.a.createElement("div",null,s.a.createElement(C,null),s.a.createElement("p",null,"Loading Please wait...")):e.state.product&&e.state.product.post&&e.state.product.post.map(function(e){return s.a.createElement(w,{key:e._id,post:e})}))))}}]),t}(s.a.Component),T=Object(f.b)(function(e){return{products:e.products,userData:e.auth}},null)(D),L=a(2),M=a(13),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).resetPassword=function(){a.setState({resetPassword:!0})},a.handleSubmit=function(e){e.preventDefault();var t=new k,n=a.props,r=n.values,s=n.setSubmitting,o=n.setFieldError;a.state.resetPassword?(s(!0),t.resetPassword(r).then(function(e){s(!1),e.success?(o("login",e.message),a.setState({resetPassword:!1})):o("login",e.message)})):(s(!0),t.login(r).then(function(e){if(s(!1),e.success){var t=j()(e.token);a.props.dispatch(y(t)),a.props.history.push("/")}else o("login",e.message)}).catch(function(e){console.log(e)}))},a.state={resetPassword:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.resetPassword,t=this.props,a=t.errors,n=t.touched,r=t.isSubmitting;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 form"},s.a.createElement("h3",{className:e?"text-center reset-password":"text-center login"},e?"Reset Password":"Login!"),a.login&&s.a.createElement("p",{className:"text-danger"},a.login),s.a.createElement(L.b,{name:"login",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement(L.a,{type:"text",name:"userName",placeholder:"Username",className:"form-control"}),a.userName&&n.userName&&s.a.createElement("p",{className:"text-danger"},a.userName)),s.a.createElement("div",{className:"form-group"},s.a.createElement(L.a,{type:"password",name:e?"newPassword":"password",placeholder:e?"newPassword":"password",className:"form-control"}),a.password&&n.password&&s.a.createElement("p",{className:"text-danger"},a.password)),s.a.createElement("p",{className:"clearfix"},s.a.createElement("button",{type:"button",className:"btn btn-link float-right",onClick:this.resetPassword},e?"":"Reset Password")),s.a.createElement("button",{className:e?"btn btn-block btn-primary":"btn btn-block btn-success",disabled:r},e?"Reset Password":"Login!")))))}}]),t}(s.a.Component),F=Object(L.c)({mapPropsToValues:function(e){return{userName:e.username||"",password:"",newPassword:""}},validationSchema:M.object().shape({userName:M.string().required("User name is required"),password:M.string().min(4,"Must be 4 character in length").required("Password is required")})})(q),R=Object(f.b)(function(e){return{url:e.auth}})(F),B=a(39),Y=Object(L.c)({mapPropsToValues:function(e){return{firstName:"",lastName:"",userName:"",password:"",email:"",address:{city:"",state:"",country:""}}},validationSchema:M.object().shape({firstName:M.string().required("first name is required"),lastName:M.string().required("lastName name is required"),userName:M.string().required("user name is required"),password:M.string().min(4,"Must be atleast four character").required("Password is required")}),handleSubmit:function(e,t){var a=t.setSubmitting,n=t.setFieldError,r=Object(B.a)(t,["setSubmitting","setFieldError"]),s=new k;a(!0),s.register(e).then(function(e){if(a(!1),e.success){var t=j()(e.token);r.props.dispatch(y(t)),r.props.history.push("/")}else n("register",e.message)}).catch(function(e){console.log(e)})}})(function(e){var t=e.errors,a=e.touched;Object(B.a)(e,["errors","touched"]);return s.a.createElement("div",{className:"container"},t.register&&s.a.createElement("p",{className:"text-danger"},t.regiter),s.a.createElement(L.b,{name:"register"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement("label",{htmlFor:"firstName"},"First name"),s.a.createElement(L.a,{type:"text",className:"form-control",name:"firstName",id:"firstName"}),t.firstName&&a.firstName&&s.a.createElement("div",{className:"invalid-feedback"},"Valid first name is required.")),s.a.createElement("div",{className:"col-md-6 mb-3"},s.a.createElement("label",{htmlFor:"lastName"},"Last name"),s.a.createElement(L.a,{type:"text",name:"lastName",className:"form-control",id:"lastName"}),s.a.createElement("div",{className:"invalid-feedback"},"Valid last name is required."))),s.a.createElement("div",{className:"mb-3"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement("div",{className:"input-group"},s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("span",{className:"input-group-text"},"@")),s.a.createElement(L.a,{type:"text",name:"userName",className:"form-control",id:"username",placeholder:"Username"}),s.a.createElement("div",{className:"invalid-feedback",style:{width:"100%"}},"Your username is required."))),s.a.createElement("div",{className:"mb-3"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement(L.a,{type:"password",name:"password",className:"form-control",id:"password"}),s.a.createElement("div",{className:"invalid-feedback"},"Valid last name is required.")),s.a.createElement("div",{className:"mb-3"},s.a.createElement("label",{htmlFor:"email"},"Email ",s.a.createElement("span",{className:"text-muted"},"(Optional)")),s.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"email",placeholder:"you@example.com"}),s.a.createElement("div",{className:"invalid-feedback"},"Please enter a valid email address htmlFor shipping updates.")),s.a.createElement("div",{className:"mb-3"},s.a.createElement("label",{htmlFor:"address"},"Address"),s.a.createElement(L.a,{type:"text",name:"address.add1",className:"form-control",id:"address",placeholder:"1234 Main St"}),s.a.createElement("div",{className:"invalid-feedback"},"Please enter your shipping address.")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-5 mb-3"},s.a.createElement("label",{htmlFor:"country"},"Country"),s.a.createElement(L.a,{component:"select",name:"address.country",className:"custom-select d-block w-100",id:"country"},s.a.createElement("option",{value:""},"Choose..."),s.a.createElement("option",null,"United States")),s.a.createElement("div",{className:"invalid-feedback"},"Please select a valid country.")),s.a.createElement("div",{className:"col-md-4 mb-3"},s.a.createElement("label",{htmlFor:"state"},"State"),s.a.createElement(L.a,{component:"select",name:"address.state",className:"custom-select d-block w-100",id:"state"},s.a.createElement("option",{value:""},"Choose..."),s.a.createElement("option",{value:"CA"},"California"),s.a.createElement("option",{value:"TX"},"Texas")),s.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid state.")),s.a.createElement("div",{className:"col-md-3 mb-3"},s.a.createElement("label",{htmlFor:"zip"},"City"),s.a.createElement(L.a,{type:"text",name:"address.city",className:"form-control",id:"zip",placeholder:""}),s.a.createElement("div",{className:"invalid-feedback"},"Zip code required."))),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("button",{className:"btn btn-lg btn-primary"},"Submit"))))}),A=Object(f.b)()(Y),U=a(130);function _(e,t,a,n){var r={"Content-type":"application/json"};(!(arguments.length>4&&void 0!==arguments[4])||arguments[4])&&(r.authorization=localStorage.getItem("token"));var s="POST"==t||"PUT"==t?JSON.stringify(a):"",o={method:t,headers:Object.assign({},r),body:s};return"GET"==t&&delete o.body,fetch(e,o).then(function(e){return e.json()}).catch(function(e){return e})}var G=function(e,t,a,n){return _("/api/".concat(e,"/review/").concat(t),"POST",a,n)},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=arguments.length>3?arguments[3]:void 0;return _("/api/".concat(e,"/reviews?perPage=").concat(a,"&pageNum=").concat(t),"GET",null,n,!0)},z=function(e){return _("/api/".concat(e),"DELETE",null,!0)},J=Object(L.c)({mapPropsToValues:function(e){return{title:"",description:""}},validationSchema:M.object().shape({}),handleSubmit:function(e,t){var a,n,r=Object(U.a)({},t);(a=e,_("/api/post","POST",a,n,!0)).then(function(e){e.success&&r.props.history.push("/")})}})(function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h3",null,"Post your Blog"),s.a.createElement(L.b,null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"title"},"Title"),s.a.createElement(L.a,{type:"text",name:"title",className:"form-control"})),s.a.createElement("div",{className:"form-group"},s.a.createElement(L.a,{component:"textarea",name:"description",className:"form-control"})),s.a.createElement("button",{className:"btn btn-block btn-secondary"},"Post Blog")))))}),W=a(286),H=Object(f.b)(function(e){return{isLoggedIn:e.auth&&e.auth.user&&!!e.auth.user._id}})(function(e){e.isLoggedIn;var t=e.component,a=Object(B.a)(e,["isLoggedIn","component"]);return s.a.createElement(g.a,Object.assign({},a,{component:function(e){return(new k).isLoggedIn()?s.a.createElement("div",null,s.a.createElement(t,e)):s.a.createElement("div",null,s.a.createElement(W.a,{to:"/login"}))}}))}),K=a(55),X=a(57),Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.getAllComments(),window.addEventListener("scroll",a.handleScroll)},a.handleScroll=function(e){var t=a.state,n=t.scrolling,r=t.totalPage,s=t.pageNum;if(!n&&!(s>=r)){var o=window.pageYOffset+window.innerHeight,c=document.querySelector("li.list-group-item:last-child");if(c)o>Math.round(c.getBoundingClientRect().top+document.documentElement.scrollTop+c.clientHeight)&&a.loadMore()}},a.loadMore=function(){a.setState(function(e){return{scrolling:!0,pageNum:e.pageNum+1}},a.getAllComments)},a.showReview=function(){(new k).isLoggedIn()?a.setState(function(){return{show:!a.state.show}}):ne.push("/login")},a.handleSubmit=function(e){var t=a.props,n=t.productId,r=t.reviewerId,s=t.values,o=t.setFieldError,c=t.resetForm;e.preventDefault(),a.setState({loading:!0}),G(n,r,s,a.state.loading).then(function(e){e.success?(c(),a.setState(function(t){return{comments:[e.comment].concat(Object(X.a)(t.comments)),show:!1,loading:!1}})):o("description",e.message)})},a.getAllComments=function(){var e=a.props.productId,t=a.state.pageNum;a.setState({loading:!0}),V(e,t,a.state.loading).then(function(e){e.success&&a.setState(function(t){return{comments:[].concat(Object(X.a)(t.comments),Object(X.a)(e.reviews)),scrolling:!1,totalPage:e.total,loading:!1}})})},a.deleteReview=function(e){var t=e._id;z(e._id).then(function(e){e.success&&a.setState(function(e){return{comments:e.comments.filter(function(e){return e._id!==t})}})})},a.userId=e.userId,a.reviewerId=e.reviewerId,a.state={show:!1,comments:[],pageNum:0,scrolling:!1,totalPage:0,loading:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.errors,n=t.touched;return s.a.createElement("div",{className:"container"},s.a.createElement(C,{loading:this.state.loading}),s.a.createElement("div",{className:"row"},s.a.createElement("a",{className:"btn btn-link text-info",style:{fontSize:"15px",fontWeight:"600",fontFamily:"monospace"},onClick:this.showReview},"Add Review")),this.state.show&&s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8",style:{padding:"0"}},a.description&&n.description&&s.a.createElement("p",{className:"text-danger"},a.description),s.a.createElement(L.b,{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement(L.a,{component:"textarea",name:"description",placeholder:"Your Comments",className:"form-control",row:"30",style:{resize:"none"}})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{className:"btn btn-outline-secondary"},"Post Comment"))))),this.state.comments.length?s.a.createElement("div",{className:"row mb-2"},s.a.createElement("div",{className:"col-sm",style:{padding:"0"}},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header bg-info"},s.a.createElement("h5",{style:{color:"white"}},"Comments:")),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"list-group"},this.state.comments.map(function(t){return s.a.createElement("li",{key:t._id,className:"list-group-item mb-2"},s.a.createElement("p",{className:"card-text clearfix"},t.description,t.author==e.reviewerId&&s.a.createElement("button",{className:"btn btn-sm btn-danger float-right",onClick:e.deleteReview.bind(e,t)},"Delete")),s.a.createElement("p",{className:"float-right",style:{color:"lightseagreen"}},s.a.createElement("em",null,"On ",K(t.created).format("MM/DD/YYYY hh:mm a")," By ",t.authorName)))})))))):s.a.createElement("h4",null,"No comments on this Post Yet"))}}]),t}(s.a.Component),$=Object(L.c)({mapPropsToValues:function(e){return{description:""}},validationSchema:M.object().shape({description:M.string().required("Please add some comments")})})(Z),Q=Object(f.b)(function(e){return{reviewerId:e.auth.user&&e.auth.user._id||localStorage.getItem("token")&&j()(localStorage.getItem("token")).user._id}})($),ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={loading:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});var t=this.props.match.params.id;this.props.blog(t).then(function(t){e.setState({loading:!1})})}},{key:"render",value:function(){var e=this.props.eachPost.post;return s.a.createElement("div",{className:"container",style:{marginTop:"2%"}},this.state.loading&&s.a.createElement(C,null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm"},s.a.createElement("div",{className:"card text-center"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h5",{className:"card-title"},e.title)),s.a.createElement("div",{className:"card-body"},s.a.createElement("p",{className:"card-text"},e.description)),s.a.createElement("div",{className:"card-footer text-muted"},s.a.createElement("em",null,"Created On: ",K(e.created).format("MM/DD/YYYY")),s.a.createElement("div",{className:"text-right"},s.a.createElement("a",{href:"#",className:"link link-danger",style:{textTransform:"capitalize"}},"".concat(e.author&&e.author.userName,"'s Profile"))))),s.a.createElement(Q,{productId:this.props.match.params.id,userId:e.author&&e.author._id}))))}}]),t}(s.a.Component),te=Object(f.b)(function(e){return{eachPost:e.products}},function(e){return{blog:function(t){return e(function(e){return function(t){return fetch(n+"/api/product/"+e).then(function(e){return e.json()}).then(function(e){t(function(){return{type:"BLOG",blog:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}(e))})}}(t))}}})(ee),ae=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},"This page is not availabe")))},ne=b()(),re=Object(f.b)(function(e){return{userData:e.auth}})(function(e){var t=Object.keys(e.userData).length?e.userData:!!localStorage.getItem("token")&&j()(localStorage.getItem("token"));return console.log(t),s.a.createElement(p.a,{history:ne},s.a.createElement("div",null,s.a.createElement(P,{userData:t}),s.a.createElement(h.a,null,s.a.createElement(g.a,{path:"/",component:T,exact:!0}),s.a.createElement(g.a,{path:"/register",component:A}),s.a.createElement(g.a,{path:"/login",component:R}),s.a.createElement(H,{path:"/blog",component:J,exact:!0}),s.a.createElement(g.a,{path:"/blog/:id",component:te,exact:!0}),s.a.createElement(g.a,{component:ae}))))});r.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(30),oe=a(131),ce=a(38),le={success:!1,message:"",post:[]},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALLPRODUCT":return Object(ce.a)({},e,t.product);case"BLOG":return Object(ce.a)({},t.blog);default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(ce.a)({},e,t.data);case"REDIRECTURL":return t.url;default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return t.isLoading;default:return e}},de=function(){return Object(se.d)(Object(se.c)({products:ie,auth:me,loader:ue}),Object(se.a)(oe.a))}(),pe=s.a.createElement(f.a,{store:de},s.a.createElement(re,null));c.a.render(pe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,2,1]]]);
//# sourceMappingURL=main.dff7780e.chunk.js.map