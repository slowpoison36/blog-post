(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a.p+"static/media/loading.56e512fd.gif"},132:function(e,t,a){e.exports=a(283)},137:function(e,t,a){},139:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},140:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(123),o=a.n(s),c=(a(137),a(7)),l=a(8),i=a(11),m=a(9),u=a(12),d=(a(139),a(140),a(287)),p=a(288),h=a(284),g=a(124),v=a.n(g),b=a(10);window.location.hostname.includes("localhost");var f=function(){return function(e){return fetch("/api/products").then(function(e){return e.json()}).then(function(t){e(function(){return{type:"ALLPRODUCT",product:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}(t))})}},E=a(289),N=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-4",style:{marginTop:"10px"}},r.a.createElement("div",{className:"card",style:{height:"100%"}},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,this.props.post.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-title"},"Author: ",(e=this.props.post.author.userName)&&e.charAt(0).toUpperCase()+e.substring(1)),r.a.createElement("p",{className:"card-text"},this.props.post.description.substring(0,60)+"..."),r.a.createElement(E.a,{to:"/blog/".concat(this.props.post._id),className:"btn btn-link"},"Read More"))));var e}}]),t}(r.a.Component),w=function(e){return{type:"LOGIN",data:e}},y=a(15),O=a.n(y),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).loginEndpoint="/api/login",window.location.hostname.includes("localhost")&&(a.endpoint="http://localhost:3000"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"login",value:function(e){return fetch(this.loginEndpoint,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return localStorage.setItem("token",e.token),e}).catch(function(e){return e})}},{key:"register",value:function(e){return fetch("/api/register",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){if(e.success)return localStorage.setItem("token",e.token),e}).catch(function(e){return e})}},{key:"resetPassword",value:function(e){return fetch("/api/reset-password",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).catch(function(e){return e})}},{key:"isLoggedIn",value:function(){try{var e=localStorage.getItem("token"),t=(e&&O()(e)).exp<Date.now()/1e3;return!!e&&!t}catch(a){console.log(a)}}},{key:"userDetail",value:function(){try{var e=localStorage.getItem("token");return e&&O()(e)}catch(t){}}}],[{key:"logout",value:function(){localStorage.removeItem("token")}}]),t}(r.a.Component),k=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).showMobileIcon=function(){console.log("hello"),a.setState(function(){return{shMobilIcon:!a.state.shMobilIcon}})},a.state={userData:a.props.userData};var n=a.props.userData;return a.isLoggedIn=n&&!!Object.keys(n).length,a.userName=a.props.userData&&a.props.userData.user&&"".concat(a.props.userData.user.firstName," ").concat(a.props.userData.user.lastName),a.state={userData:a.props.userData,isLoggedIn:a.isLoggedIn,userName:a.userName,shMobilIcon:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.userData&&e.userData.user&&"".concat(e.userData.user.firstName," ").concat(e.userData.user.lastName);this.setState(function(){return{userData:e,isLoggedIn:e&&!!Object.keys(e).length,userName:t}})}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoggedIn,n=t.userName,s=t.shMobilIcon;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(E.a,{className:"navbar-brand",to:"/",activeClassName:"active"},"Blog Post"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.showMobileIcon},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:s?"collapse navbar-collapse show":"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{className:"nav-link",to:"/",activeClassName:"active"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{className:"nav-link",to:"/blog",activeClassName:"active"},"Create Blog ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},!a&&r.a.createElement(E.a,{to:"/register",className:"nav-link",activeClassName:"active"},"Register")),r.a.createElement("li",{className:"nav-item"},!a&&r.a.createElement(E.a,{to:"/login",className:"nav-link",activeClassName:"active"},"Login"))),r.a.createElement("ul",{className:"navbar-nav"},a&&r.a.createElement("div",null,r.a.createElement("span",null,"Welcome ",n)," ",r.a.createElement("button",{className:"btn btn-sm btn-info",onClick:function(){j.logout(),e.setState(function(){return{userData:"",isLoggedIn:!1,userName:""}}),ae.push("/")}},"Logout")))))}}]),t}(r.a.Component),S=Object(b.b)()(k),P=a(126),I=a.n(P),x=function(e){function t(e){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.loading&&r.a.createElement("img",{className:"loading-icon",src:I.a,alt:"loading"}))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1,product:{}},a.componentWillMount=function(){a.setState(function(){return{loading:!0}}),a.props.dispatch(f()).then(function(e){a.setState(function(){return{loading:!1}}),a.setState(function(){return{product:a.props.products}})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.loading);return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("header",null,r.a.createElement("h1",null,"The Blog Post"),r.a.createElement("p",null,"Post your own Blog.Search through some of the best blogs posted by hunderds of user. Sign up and start posting today. Share Knowledge and gain knowledge.Its not always complicated,its simple thing we don't solve the right way. Here we have pleanty of blogs where people have figured out the right way. Read them and share yours own.")))),r.a.createElement("div",{className:"row"},e.state.loading?r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("p",null,"Loading Please wait...")):e.state.product&&e.state.product.post&&e.state.product.post.map(function(e){return r.a.createElement(N,{key:e._id,post:e})}))))}}]),t}(r.a.Component),D=Object(b.b)(function(e){return{products:e.products,userData:e.auth}},null)(C),T=a(2),L=a(13),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).resetPassword=function(){a.setState({resetPassword:!0})},a.handleSubmit=function(e){e.preventDefault();var t=new j,n=a.props,r=n.values,s=n.setSubmitting,o=n.setFieldError;a.state.resetPassword?(s(!0),t.resetPassword(r).then(function(e){s(!1),e.success?(o("login",e.message),a.setState({resetPassword:!1})):o("login",e.message)})):(s(!0),t.login(r).then(function(e){if(s(!1),e.success){var t=O()(e.token);a.props.dispatch(w(t)),a.props.history.push("/")}else o("login",e.message)}).catch(function(e){console.log(e)}))},a.state={resetPassword:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.resetPassword,t=this.props,a=t.errors,n=t.touched,s=t.isSubmitting;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 form"},r.a.createElement("h3",{className:e?"text-center reset-password":"text-center login"},e?"Reset Password":"Login!"),a.login&&r.a.createElement("p",{className:"text-danger"},a.login),r.a.createElement(T.b,{name:"login",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement(T.a,{type:"text",name:"userName",placeholder:"Username",className:"form-control"}),a.userName&&n.userName&&r.a.createElement("p",{className:"text-danger"},a.userName)),r.a.createElement("div",{className:"form-group"},r.a.createElement(T.a,{type:"password",name:e?"newPassword":"password",placeholder:e?"newPassword":"password",className:"form-control"}),a.password&&n.password&&r.a.createElement("p",{className:"text-danger"},a.password)),r.a.createElement("p",{className:"clearfix"},r.a.createElement("button",{type:"button",className:"btn btn-link float-right",onClick:this.resetPassword},e?"":"Reset Password")),r.a.createElement("button",{className:e?"btn btn-block btn-primary":"btn btn-block btn-success",disabled:s},e?"Reset Password":"Login!")))))}}]),t}(r.a.Component),q=Object(T.c)({mapPropsToValues:function(e){return{userName:e.username||"",password:"",newPassword:""}},validationSchema:L.object().shape({userName:L.string().required("User name is required"),password:L.string().min(4,"Must be 4 character in length").required("Password is required")})})(M),F=Object(b.b)(function(e){return{url:e.auth}})(q),R=a(39),B=Object(T.c)({mapPropsToValues:function(e){return{firstName:"",lastName:"",userName:"",password:"",email:"",address:{city:"",state:"",country:""}}},validationSchema:L.object().shape({firstName:L.string().required("first name is required"),lastName:L.string().required("lastName name is required"),userName:L.string().required("user name is required"),password:L.string().min(4,"Must be atleast four character").required("Password is required")}),handleSubmit:function(e,t){var a=t.setSubmitting,n=t.setFieldError,r=Object(R.a)(t,["setSubmitting","setFieldError"]),s=new j;a(!0),s.register(e).then(function(e){if(a(!1),e.success){var t=O()(e.token);r.props.dispatch(w(t)),r.props.history.push("/")}else n("register",e.message)}).catch(function(e){console.log(e)})}})(function(e){var t=e.errors,a=e.touched;Object(R.a)(e,["errors","touched"]);return r.a.createElement("div",{className:"container"},t.register&&r.a.createElement("p",{className:"text-danger"},t.regiter),r.a.createElement(T.b,{name:"register"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mb-3"},r.a.createElement("label",{htmlFor:"firstName"},"First name"),r.a.createElement(T.a,{type:"text",className:"form-control",name:"firstName",id:"firstName"}),t.firstName&&a.firstName&&r.a.createElement("div",{className:"invalid-feedback"},"Valid first name is required.")),r.a.createElement("div",{className:"col-md-6 mb-3"},r.a.createElement("label",{htmlFor:"lastName"},"Last name"),r.a.createElement(T.a,{type:"text",name:"lastName",className:"form-control",id:"lastName"}),r.a.createElement("div",{className:"invalid-feedback"},"Valid last name is required."))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"@")),r.a.createElement(T.a,{type:"text",name:"userName",className:"form-control",id:"username",placeholder:"Username"}),r.a.createElement("div",{className:"invalid-feedback",style:{width:"100%"}},"Your username is required."))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(T.a,{type:"password",name:"password",className:"form-control",id:"password"}),r.a.createElement("div",{className:"invalid-feedback"},"Valid last name is required.")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"email"},"Email ",r.a.createElement("span",{className:"text-muted"},"(Optional)")),r.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"email",placeholder:"you@example.com"}),r.a.createElement("div",{className:"invalid-feedback"},"Please enter a valid email address htmlFor shipping updates.")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement(T.a,{type:"text",name:"address.add1",className:"form-control",id:"address",placeholder:"1234 Main St"}),r.a.createElement("div",{className:"invalid-feedback"},"Please enter your shipping address.")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 mb-3"},r.a.createElement("label",{htmlFor:"country"},"Country"),r.a.createElement(T.a,{component:"select",name:"address.country",className:"custom-select d-block w-100",id:"country"},r.a.createElement("option",{value:""},"Choose..."),r.a.createElement("option",null,"United States")),r.a.createElement("div",{className:"invalid-feedback"},"Please select a valid country.")),r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("label",{htmlFor:"state"},"State"),r.a.createElement(T.a,{component:"select",name:"address.state",className:"custom-select d-block w-100",id:"state"},r.a.createElement("option",{value:""},"Choose..."),r.a.createElement("option",{value:"CA"},"California"),r.a.createElement("option",{value:"TX"},"Texas")),r.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid state.")),r.a.createElement("div",{className:"col-md-3 mb-3"},r.a.createElement("label",{htmlFor:"zip"},"City"),r.a.createElement(T.a,{type:"text",name:"address.city",className:"form-control",id:"zip",placeholder:""}),r.a.createElement("div",{className:"invalid-feedback"},"Zip code required."))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("button",{className:"btn btn-lg btn-primary"},"Submit"))))}),Y=Object(b.b)()(B),A=a(130);function U(e,t,a,n){var r={headers:{"Content-type":"application/json"}};return(!(arguments.length>4&&void 0!==arguments[4])||arguments[4])&&(r.headers.authorization=localStorage.getItem("token")),"POST"==t||"PUT"==t&&JSON.stringify(a),r.method=t,r.body=a,fetch(e,r).then(function(e){return e.json()}).catch(function(e){return e})}var _=function(e,t,a,n){return U("/api/".concat(e,"/review/").concat(t),"POST",a,n)},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2?arguments[2]:void 0;return U("/api/".concat(e,"/reviews?pageNum=").concat(t),"GET",null,a)},z=function(e){return U("/api/".concat(e),"DELETE",null)},G=Object(T.c)({mapPropsToValues:function(e){return{title:"",description:""}},validationSchema:L.object().shape({}),handleSubmit:function(e,t){var a=Object(A.a)({},t);(function(e){return U("/api/post","POST",e)})(e).then(function(e){e.success&&a.props.history.push("/")})}})(function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",null,"Post your Blog"),r.a.createElement(T.b,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement(T.a,{type:"text",name:"title",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement(T.a,{component:"textarea",name:"description",className:"form-control"})),r.a.createElement("button",{className:"btn btn-block btn-secondary"},"Post Blog")))))}),J=a(286),W=Object(b.b)(function(e){return{isLoggedIn:e.auth&&e.auth.user&&!!e.auth.user._id}})(function(e){e.isLoggedIn;var t=e.component,a=Object(R.a)(e,["isLoggedIn","component"]);return r.a.createElement(h.a,Object.assign({},a,{component:function(e){return(new j).isLoggedIn()?r.a.createElement("div",null,r.a.createElement(t,e)):r.a.createElement("div",null,r.a.createElement(J.a,{to:"/login"}))}}))}),H=a(55),K=a(57),X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.getAllComments(),window.addEventListener("scroll",a.handleScroll)},a.handleScroll=function(e){var t=a.state,n=t.scrolling,r=t.totalPage,s=t.pageNum;if(!n&&!(s>=r)){var o=window.pageYOffset+window.innerHeight,c=document.querySelector("li.list-group-item:last-child");if(c)o>Math.round(c.getBoundingClientRect().top+document.documentElement.scrollTop+c.clientHeight)&&a.loadMore()}},a.loadMore=function(){a.setState(function(e){return{scrolling:!0,pageNum:e.pageNum+1}},a.getAllComments)},a.showReview=function(){(new j).isLoggedIn()?a.setState(function(){return{show:!a.state.show}}):ae.push("/login")},a.handleSubmit=function(e){var t=a.props,n=t.productId,r=t.reviewerId,s=t.values,o=t.setFieldError,c=t.resetForm;e.preventDefault(),a.setState({loading:!0}),_(n,r,s,a.state.loading).then(function(e){e.success?(c(),a.setState(function(t){return{comments:[e.comment].concat(Object(K.a)(t.comments)),show:!1,loading:!1}})):o("description",e.message)})},a.getAllComments=function(){var e=a.props.productId,t=a.state.pageNum;a.setState({loading:!0}),V(e,t,a.state.loading).then(function(e){e.success&&a.setState(function(t){return{comments:[].concat(Object(K.a)(t.comments),Object(K.a)(e.reviews)),scrolling:!1,totalPage:e.total,loading:!1}})})},a.deleteReview=function(e){var t=e._id;z(e._id).then(function(e){e.success&&a.setState(function(e){return{comments:e.comments.filter(function(e){return e._id!==t})}})})},a.userId=e.userId,a.reviewerId=e.reviewerId,a.state={show:!1,comments:[],pageNum:0,scrolling:!1,totalPage:0,loading:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.errors,n=t.touched;return r.a.createElement("div",{className:"container"},r.a.createElement(x,{loading:this.state.loading}),r.a.createElement("div",{className:"row"},r.a.createElement("a",{className:"btn btn-link text-info",style:{fontSize:"15px",fontWeight:"600",fontFamily:"monospace"},onClick:this.showReview},"Add Review")),this.state.show&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8",style:{padding:"0"}},a.description&&n.description&&r.a.createElement("p",{className:"text-danger"},a.description),r.a.createElement(T.b,{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement(T.a,{component:"textarea",name:"description",placeholder:"Your Comments",className:"form-control",row:"30",style:{resize:"none"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-outline-secondary"},"Post Comment"))))),this.state.comments.length?r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-sm",style:{padding:"0"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header bg-info"},r.a.createElement("h5",{style:{color:"white"}},"Comments:")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"list-group"},this.state.comments.map(function(t){return r.a.createElement("li",{key:t._id,className:"list-group-item mb-2"},r.a.createElement("p",{className:"card-text clearfix"},t.description,t.author==e.reviewerId&&r.a.createElement("button",{className:"btn btn-sm btn-danger float-right",onClick:e.deleteReview.bind(e,t)},"Delete")),r.a.createElement("p",{className:"float-right",style:{color:"lightseagreen"}},r.a.createElement("em",null,"On ",H(t.created).format("MM/DD/YYYY hh:mm a")," By ",t.authorName)))})))))):r.a.createElement("h4",null,"No comments on this Post Yet"))}}]),t}(r.a.Component),Z=Object(T.c)({mapPropsToValues:function(e){return{description:""}},validationSchema:L.object().shape({description:L.string().required("Please add some comments")})})(X),$=Object(b.b)(function(e){return{reviewerId:e.auth.user&&e.auth.user._id||localStorage.getItem("token")&&O()(localStorage.getItem("token")).user._id}})(Z),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={loading:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});var t=this.props.match.params.id;this.props.blog(t).then(function(t){e.setState({loading:!1})})}},{key:"render",value:function(){var e=this.props.eachPost.post;return r.a.createElement("div",{className:"container",style:{marginTop:"2%"}},this.state.loading&&r.a.createElement(x,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},e.title)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.description)),r.a.createElement("div",{className:"card-footer text-muted"},r.a.createElement("em",null,"Created On: ",H(e.created).format("MM/DD/YYYY")),r.a.createElement("div",{className:"text-right"},r.a.createElement("a",{href:"#",className:"link link-danger",style:{textTransform:"capitalize"}},"".concat(e.author&&e.author.userName,"'s Profile"))))),r.a.createElement($,{productId:this.props.match.params.id,userId:e.author&&e.author._id}))))}}]),t}(r.a.Component),ee=Object(b.b)(function(e){return{eachPost:e.products}},function(e){return{blog:function(t){return e(function(e){return function(t){return fetch("/api/product/"+e).then(function(e){return e.json()}).then(function(e){t(function(){return{type:"BLOG",blog:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}(e))})}}(t))}}})(Q),te=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},"This page is not availabe")))},ae=v()(),ne=Object(b.b)(function(e){return{userData:e.auth}})(function(e){var t=Object.keys(e.userData).length?e.userData:!!localStorage.getItem("token")&&O()(localStorage.getItem("token"));return console.log(t),r.a.createElement(d.a,{history:ae},r.a.createElement("div",null,r.a.createElement(S,{userData:t}),r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/",component:D,exact:!0}),r.a.createElement(h.a,{path:"/register",component:Y}),r.a.createElement(h.a,{path:"/login",component:F}),r.a.createElement(W,{path:"/blog",component:G,exact:!0}),r.a.createElement(h.a,{path:"/blog/:id",component:ee,exact:!0}),r.a.createElement(h.a,{component:te}))))});n.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(30),se=a(131),oe=a(38),ce={success:!1,message:"",post:[]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALLPRODUCT":return Object(oe.a)({},e,t.product);case"BLOG":return Object(oe.a)({},t.blog);default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(oe.a)({},e,t.data);case"REDIRECTURL":return t.url;default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return t.isLoading;default:return e}},ue=function(){return Object(re.d)(Object(re.c)({products:le,auth:ie,loader:me}),Object(re.a)(se.a))}(),de=r.a.createElement(b.a,{store:ue},r.a.createElement(ne,null));o.a.render(de,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,2,1]]]);
//# sourceMappingURL=main.7de1191c.chunk.js.map