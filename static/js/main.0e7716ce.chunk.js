(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},162:function(e,t,n){e.exports=n.p+"static/media/matthew.046e91f7.png"},174:function(e,t,n){e.exports=n(304)},304:function(e,t,n){"use strict";n.r(t);var a,l,c,r=n(0),i=n.n(r),u=n(42),o=n.n(u),s=(n(179),n(69)),g=n(70),m=n(77),d=n(71),h=n(78),E=n(51),b=n(312),f=n(311),j={english:"us",icelandic:"is"},O=i.a.createContext({language:j.english}),x=n(316),p=function(e){var t=e.onLanguageChange;return i.a.createElement(x.a,{as:"h3",textAlign:"right"},i.a.createElement(f.a,{name:"us",onClick:function(){return t(j.english)}}),i.a.createElement(f.a,{name:"is",onClick:function(){return t(j.icelandic)}}))},C=n(318),v=n(23),k=n(150),T=n.n(k),y={firstName:"John",lastName:"Snow",year:"2015",description:i.a.createElement(i.a.Fragment,null,"Musician, JavaScript evangelist, ramen\xa0",i.a.createElement(T.a,{symbol:"\u2764\ufe0f",label:"love"}))},w=function(){var e=Object(r.useState)(null),t=Object(v.a)(e,2),n=t[0],a=t[1],l=Object(r.useState)(null),c=Object(v.a)(l,2),i=c[0],u=c[1];return[n,i,function(e,t){a(y),u(!0)},function(){a(null),u(!1)}]},L={isAuthenticated:!1,logIn:function(){},logOut:function(){},user:null},S=i.a.createContext(L),A=(S.Consumer,S),I=n(28),P=n(163),J=n(313),N=n(317),F=n(315),z=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1];return[n,function(e){return a(e.target.value)}]},D=(a={},Object(I.a)(a,j.english,{emailText:"E-mail address",passwordText:"Password",loginText:"Login"}),Object(I.a)(a,j.icelandic,{emailText:"Netfang",passwordText:"Lykilor\xf0",loginText:"Skr\xe1 inn"}),a),M=function(){var e=Object(r.useContext)(O).language,t=Object(r.useContext)(A).logIn,n=D[e],a=n.emailText,l=n.passwordText,c=n.loginText,u=z(""),o=Object(v.a)(u,2),s=o[0],g=o[1],m=z(""),d=Object(v.a)(m,2),h=d[0],E=d[1];return i.a.createElement(J.a,{size:"large"},i.a.createElement(N.a,{stacked:!0},i.a.createElement(J.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:a,value:s,onChange:g}),i.a.createElement(J.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:l,type:"password",value:h,onChange:E}),i.a.createElement(F.a,{color:"teal",fluid:!0,size:"large",onClick:function(){return t(s,h)}},c)))},B=n(161),H=n.n(B),W=(l={},Object(I.a)(l,j.english,"Log-in to your account"),Object(I.a)(l,j.icelandic,"Skr\xe1\xf0u \xfeig inn \xe1 reikninginn \xfeinn"),l),q=function(){return i.a.createElement(O.Consumer,null,function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{as:"h1",color:"teal",textAlign:"center"},i.a.createElement(P.a,{src:H.a})),i.a.createElement(x.a,{as:"h2",color:"teal",textAlign:"center"},W[e.language]),i.a.createElement(M,null))})},G=n(314),K=n(162),Q=n.n(K),R=(c={},Object(I.a)(c,j.english,{joinText:"Joined in",logoutText:"Logout"}),Object(I.a)(c,j.icelandic,{joinText:"Skr\xe1\xf0i sig \xed",logoutText:"Skr\xe1\xf0u \xfeig \xfat"}),c),U=function(){var e=Object(r.useContext)(A),t=e.user,n=e.logOut,a=Object(r.useContext)(O).language,l=R[a],c=l.joinText,u=l.logoutText;return i.a.createElement(G.a,null,i.a.createElement(P.a,{src:Q.a}),i.a.createElement(G.a.Content,null,i.a.createElement(G.a.Header,null,t.firstName),i.a.createElement(G.a.Meta,null,i.a.createElement("span",{className:"date"},"".concat(c," ").concat(t.year))),i.a.createElement(G.a.Description,null,t.description)),i.a.createElement(G.a.Content,{extra:!0},i.a.createElement(F.a,{attached:"bottom",content:u,onClick:n})))},V=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return i.a.createElement(C.a,{textAlign:"center",style:{height:"100%"},verticalAlign:"middle"},i.a.createElement(C.a.Column,{style:{maxWidth:450}},this.context.isAuthenticated?i.a.createElement(U,null):i.a.createElement(q,null)))}}]),t}(i.a.PureComponent);V.contextType=A;var X=V,Y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={language:j.english},n.handleLanguageChange=n.handleLanguageChange.bind(Object(E.a)(Object(E.a)(n))),n}return Object(h.a)(t,e),Object(g.a)(t,[{key:"handleLanguageChange",value:function(e){this.setState({language:e})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,null,i.a.createElement(O.Consumer,null,function(e){return i.a.createElement("p",null,i.a.createElement("b",null,"Default language: "),i.a.createElement(f.a,{name:e.language}))})),i.a.createElement(O.Provider,{value:{language:this.state.language}},i.a.createElement(b.a,null,i.a.createElement(p,{onLanguageChange:this.handleLanguageChange}),i.a.createElement(X,null))))}}]),t}(i.a.Component);o.a.render(i.a.createElement(function(e){var t=e.children,n=w(),a=Object(v.a)(n,4),l=a[0],c=a[1],r=a[2],u=a[3];return i.a.createElement(S.Provider,{value:{user:l,isAuthenticated:c,logIn:r,logOut:u}},t)},null,i.a.createElement(Y,null)),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.0e7716ce.chunk.js.map