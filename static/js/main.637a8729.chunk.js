(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},172:function(e,t,n){e.exports=n(301)},301:function(e,t,n){"use strict";n.r(t);var a,l,c=n(1),r=n.n(c),i=n(41),u=n.n(i),o=(n(177),n(137)),s=n(138),g=n(160),m=n(139),h=n(159),d=n(50),f=n(309),b={english:Symbol("us"),icelandic:Symbol("is")},E=r.a.createContext({language:b.english}),O=n(312),j=n(308),x=function(e){var t=e.onLanguageChange;return r.a.createElement(O.a,{as:"h3",textAlign:"right"},r.a.createElement(j.a,{name:"us",onClick:function(){return t(b.english)}}),r.a.createElement(j.a,{name:"is",onClick:function(){return t(b.icelandic)}}))},v=n(44),C=n(314),p=n(158),k=n(29),w=n(310),y=n(313),T=n(311),L={isAuthenticated:!1,logIn:function(){},logOut:function(){},user:null},S=r.a.createContext(L),A=(S.Consumer,S),I=(a={},Object(v.a)(a,b.english,{emailText:"E-mail address",passwordText:"Password",loginText:"Login"}),Object(v.a)(a,b.icelandic,{emailText:"Netfang",passwordText:"Lykilor\xf0",loginText:"Skr\xe1 inn"}),a),P=function(){var e=Object(c.useState)(""),t=Object(k.a)(e,2),n=t[0],a=t[1];return[n,function(e){return a(e.target.value)}]},J=function(){var e=P(),t=Object(k.a)(e,2),n=t[0],a=t[1],l=P(),i=Object(k.a)(l,2),u=i[0],o=i[1],s=Object(c.useContext)(E).language,g=Object(c.useContext)(A).logIn,m=Object(c.useCallback)(function(){g(n,u)},[n,u,g]),h=I[s],d=h.emailText,f=h.passwordText,b=h.loginText;return r.a.createElement(w.a,{size:"large"},r.a.createElement(y.a,{stacked:!0},r.a.createElement(w.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:d,value:n,onChange:a}),r.a.createElement(w.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:f,type:"password",value:u,onChange:o}),r.a.createElement(T.a,{color:"teal",fluid:!0,size:"large",onClick:m},b)))},N=n(157),z=n.n(N),B=(l={},Object(v.a)(l,b.english,"Log-in to your account"),Object(v.a)(l,b.icelandic,"Skr\xe1\xf0u \xfeig inn \xe1 reikninginn \xfeinn"),l),U=function(){return r.a.createElement(E.Consumer,null,function(e){return r.a.createElement(C.a,{textAlign:"center",style:{height:"100%"},verticalAlign:"middle"},r.a.createElement(C.a.Column,{style:{maxWidth:450}},r.a.createElement(O.a,{as:"h1",color:"teal",textAlign:"center"},r.a.createElement(p.a,{src:z.a})),r.a.createElement(O.a,{as:"h2",color:"teal",textAlign:"center"},B[e.language]),r.a.createElement(J,null)))})},W=function(){return r.a.createElement("h2",null,"User")},q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(g.a)(this,Object(m.a)(t).call(this,e))).state={language:b.english},n.handleLanguageChange=n.handleLanguageChange.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleLanguageChange",value:function(e){this.setState({language:e})}},{key:"render",value:function(){var e=this.context.isAuthenticated;return r.a.createElement(E.Provider,{value:{language:this.state.language}},r.a.createElement(f.a,null,r.a.createElement(x,{onLanguageChange:this.handleLanguageChange}),e?r.a.createElement(W,null):r.a.createElement(U,null)))}}]),t}(r.a.Component);q.contextType=A;var D=q;u.a.render(r.a.createElement(function(e){var t=e.children,n=function(){var e=Object(c.useState)(null),t=Object(k.a)(e,2),n=t[0],a=t[1],l=Object(c.useState)(null),r=Object(k.a)(l,2),i=r[0],u=r[1];return[n,i,function(e,t){a({firstName:"John",lastName:"Snow"}),u(!0)},function(){a(null),u(!1)}]}(),a=Object(k.a)(n,4),l=a[0],i=a[1],u=a[2],o=a[3];return r.a.createElement(S.Provider,{value:{user:l,isAuthenticated:i,logIn:u,logOut:o}},t)},null,r.a.createElement(D,null)),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.637a8729.chunk.js.map