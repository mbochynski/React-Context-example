(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},173:function(e,t,n){e.exports=n(303)},303:function(e,t,n){"use strict";n.r(t);var a,l,c,r=n(0),u=n.n(r),i=n(42),o=n.n(i),s=(n(178),n(69)),g=n(70),m=n(77),d=n(71),h=n(78),E=n(51),b=n(311),f=n(310),j={english:"us",icelandic:"is"},O=u.a.createContext({language:j.english}),x=n(315),p=function(e){var t=e.onLanguageChange;return u.a.createElement(x.a,{as:"h3",textAlign:"right"},u.a.createElement(f.a,{name:"us",onClick:function(){return t(j.english)}}),u.a.createElement(f.a,{name:"is",onClick:function(){return t(j.icelandic)}}))},C=n(317),v=n(23),k=n(150),T=n.n(k),y={firstName:"John",lastName:"Snow",year:"2015",description:u.a.createElement(u.a.Fragment,null,"Musician, JavaScript evangelist, ramen\xa0",u.a.createElement(T.a,{symbol:"\u2764\ufe0f",label:"love"}))},w=function(){var e=Object(r.useState)(null),t=Object(v.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)(null),c=Object(v.a)(l,2),u=c[0],i=c[1];return[n,u,function(e,t){a(y),i(!0)},function(){a(null),i(!1)}]},L={isAuthenticated:!1,logIn:function(){},logOut:function(){},user:null},S=u.a.createContext(L),A=(S.Consumer,S),I=n(28),P=n(162),J=n(312),N=n(316),F=n(314),z=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1];return[n,function(e){return a(e.target.value)}]},D=(a={},Object(I.a)(a,j.english,{emailText:"E-mail address",passwordText:"Password",loginText:"Login"}),Object(I.a)(a,j.icelandic,{emailText:"Netfang",passwordText:"Lykilor\xf0",loginText:"Skr\xe1 inn"}),a),M=function(){var e=Object(r.useContext)(O).language,t=Object(r.useContext)(A).logIn,n=D[e],a=n.emailText,l=n.passwordText,c=n.loginText,i=z(""),o=Object(v.a)(i,2),s=o[0],g=o[1],m=z(""),d=Object(v.a)(m,2),h=d[0],E=d[1];return u.a.createElement(J.a,{size:"large"},u.a.createElement(N.a,{stacked:!0},u.a.createElement(J.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:a,value:s,onChange:g}),u.a.createElement(J.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:l,type:"password",value:h,onChange:E}),u.a.createElement(F.a,{color:"teal",fluid:!0,size:"large",onClick:function(){return t(s,h)}},c)))},B=n(161),H=n.n(B),W=(l={},Object(I.a)(l,j.english,"Log-in to your account"),Object(I.a)(l,j.icelandic,"Skr\xe1\xf0u \xfeig inn \xe1 reikninginn \xfeinn"),l),q=function(){return u.a.createElement(O.Consumer,null,function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(x.a,{as:"h1",color:"teal",textAlign:"center"},u.a.createElement(P.a,{src:H.a})),u.a.createElement(x.a,{as:"h2",color:"teal",textAlign:"center"},W[e.language]),u.a.createElement(M,null))})},G=n(313),K=(c={},Object(I.a)(c,j.english,{joinText:"Joined in",logoutText:"Logout"}),Object(I.a)(c,j.icelandic,{joinText:"Skr\xe1\xf0i sig \xed",logoutText:"Skr\xe1\xf0u \xfeig \xfat"}),c),Q=function(){var e=Object(r.useContext)(A),t=e.user,n=e.logOut,a=Object(r.useContext)(O).language,l=K[a],c=l.joinText,i=l.logoutText;return u.a.createElement(G.a,null,u.a.createElement(P.a,{src:"/matthew.png"}),u.a.createElement(G.a.Content,null,u.a.createElement(G.a.Header,null,t.firstName),u.a.createElement(G.a.Meta,null,u.a.createElement("span",{className:"date"},"".concat(c," ").concat(t.year))),u.a.createElement(G.a.Description,null,t.description)),u.a.createElement(G.a.Content,{extra:!0},u.a.createElement(F.a,{attached:"bottom",content:i,onClick:n})))},R=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return u.a.createElement(C.a,{textAlign:"center",style:{height:"100%"},verticalAlign:"middle"},u.a.createElement(C.a.Column,{style:{maxWidth:450}},this.context.isAuthenticated?u.a.createElement(Q,null):u.a.createElement(q,null)))}}]),t}(u.a.PureComponent);R.contextType=A;var U=R,V=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={language:j.english},n.handleLanguageChange=n.handleLanguageChange.bind(Object(E.a)(Object(E.a)(n))),n}return Object(h.a)(t,e),Object(g.a)(t,[{key:"handleLanguageChange",value:function(e){this.setState({language:e})}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,null,u.a.createElement(O.Consumer,null,function(e){return u.a.createElement("p",null,u.a.createElement("b",null,"Default language: "),u.a.createElement(f.a,{name:e.language}))})),u.a.createElement(O.Provider,{value:{language:this.state.language}},u.a.createElement(b.a,null,u.a.createElement(p,{onLanguageChange:this.handleLanguageChange}),u.a.createElement(U,null))))}}]),t}(u.a.Component);o.a.render(u.a.createElement(function(e){var t=e.children,n=w(),a=Object(v.a)(n,4),l=a[0],c=a[1],r=a[2],i=a[3];return u.a.createElement(S.Provider,{value:{user:l,isAuthenticated:c,logIn:r,logOut:i}},t)},null,u.a.createElement(V,null)),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.4d23f729.chunk.js.map