(this["webpackJsonpspeed-read"]=this["webpackJsonpspeed-read"]||[]).push([[0],{221:function(e,t,n){},223:function(e,t,n){},242:function(e,t,n){},251:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){},307:function(e,t,n){},312:function(e,t,n){},313:function(e,t,n){},396:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),r=n.n(c),s=n(29),i=n.n(s),o=(n(221),n(49)),l=(n(222),n(101)),d=n(60),u=n(72),j=n(38),b=n(45),h=(n(223),function(){return Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)("div",{className:"app-logo",children:Object(a.jsx)(b.a,{className:"button",type:"link",children:Object(a.jsx)(u.b,{to:"/",children:"App Logo"})})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(b.a,{className:"button",type:"link",children:Object(a.jsx)(u.b,{to:"/",children:"Home"})}),Object(a.jsx)(b.a,{className:"button",type:"link",children:Object(a.jsx)(u.b,{to:"/stats",children:"Statistics"})})]})]})}),p=n(403);n(242);function f(){return Object(a.jsxs)(p.a.Footer,{className:"footer-container",style:{textAlign:"center"},children:[Object(a.jsx)("u",{children:"Sumukha Hegde"}),Object(a.jsx)("span",{children:", Reading Speed Test Software Copyright \xa9 1996-2020, All Rights Reserved. Click"}),Object(a.jsx)("a",{href:"mailto:sumukha214@gmail.com?subject=Feedback on Speed read test software",children:"here"}),Object(a.jsx)("span",{children:"to Feedback"})]})}var x=n(407),m=(n(251),x.a.Title);function O(){return Object(a.jsxs)("div",{className:"app-intro-container",children:[Object(a.jsx)(m,{level:3,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iure sed at veniam ad."}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quos! Perspiciatis quis ex velit minima, vero at tempore, aspernatur error quidem accusantium commodi sit hic alias, eum delectus placeat nostrum."})]})}var g=n(63),v=n.n(g),y=n(100),w=n(87),k=n(212),S=n(188),C=n.n(S),T={wpm:0,setWpm:function(){return null}},F=r.a.createContext(T),N="https://sumukhah.github.io/speed-read-json/",M={random:{api:N+"random.json"},article:{api:N+"articles.json"}},z=["arial","times new roman","geneva","verdana"],A=n(134),R=(n(296),n(213)),E=n(410),I=n(83),B=n(412),P=(n(297),E.a.TextArea),W=function(e){var t=e.fontStyle,n=e.toggleFullScreen,c=e.readingMode,r=Object(R.a)(e,["fontStyle","toggleFullScreen","readingMode"]);return Object(a.jsxs)("div",{className:"text-box",children:[c?Object(a.jsxs)("div",{style:t,className:"textContainerBox",children:[Object(a.jsx)("p",{children:r.value}),Object(a.jsx)(b.a,{type:"primary",className:"read-toggle-button",size:"large",onClick:r.toggleReadingMode,children:"Done"})]}):Object(a.jsx)(P,{placeholder:"Add your own Text or select a Topic and press Start",style:t,onChange:function(e){var t=e.target.value;return r.onTextContentChange(t)},value:r.value}),!c&&Object(a.jsx)(b.a,{type:"primary",className:"read-toggle-button start-button",size:"large",onClick:r.toggleReadingMode,children:"Start Test"}),Object(a.jsx)(I.a,{title:"Full Screen",className:"fullscreen-toggle-button",children:Object(a.jsx)(b.a,{type:"text",icon:Object(a.jsx)(B.a,{color:"black"}),onClick:n,style:{backgroundColor:"white"}})})]})},q=n(112),L=n(411),H=n(413),D=n(111),Y=n.n(D),G=(n(307),q.a.Option),V=function(e){return Object(a.jsxs)("div",{className:"text-format-form",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(q.a,{defaultValue:e.defaultFontFamily,className:"font-select-dropdown",onChange:function(t){return e.setFontFamily(t)},children:z.map((function(e){return Object(a.jsx)(G,{value:e,children:Y()(e).humanize().s},e)}))}),Object(a.jsx)(L.a,{min:10,max:30,defaultValue:e.defaultSize,className:"font-size",onChange:function(t){e.setFontSize(t)}}),Object(a.jsx)(q.a,{defaultValue:e.defaultTopic,className:"topic-select-dropdown",onChange:function(t){return e.setTopic(t)},children:Object.keys(M).map((function(e){return Object(a.jsx)(G,{value:e,children:Y()(e).humanize().s},e)}))})]}),Object(a.jsx)("div",{children:Object(a.jsx)(I.a,{title:"Bold",children:Object(a.jsx)(b.a,{onClick:e.setIsBold,icon:Object(a.jsx)(H.a,{})})})})]})};n(312);function J(e){var t=Object(c.useState)("00"),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)("00"),l=Object(o.a)(i,2),d=l[0],u=l[1],j=Object(c.useState)(0),b=Object(o.a)(j,2),h=b[0],p=b[1],f=function(){var e=h%60,t=Math.floor(h/60),n=1===String(e).length?"0".concat(e):e,a=1===String(t).length?"0".concat(t):t;u(n),s(a),p((function(e){return e+1}))};return Object(c.useEffect)((function(){!e.readingMode&&h>1&&(e.calculateWpm(h+1),p(0))}),[e.readingMode,h]),Object(c.useEffect)((function(){var t=e.readingMode?setTimeout(f,1e3):null;return function(){t&&clearInterval(t)}}),[h,e.readingMode]),0===h?null:Object(a.jsx)("div",{className:"timer-container",children:Object(a.jsxs)("span",{children:[r,":",d]})})}var U={fontFamily:"arial",fontWeight:"normal",fontSize:15};function K(){var e=Object(c.useContext)(F).setWpm,t=Object(j.f)(),n=Object(c.useState)("random"),r=Object(o.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),u=d[0],b=d[1],h=Object(c.useState)(U),p=Object(o.a)(h,2),f=p[0],x=p[1],m=Object(c.useRef)(null),O=Object(c.useState)(!1),g=Object(o.a)(O,2),S=g[0],T=g[1],N=function(){var e;document.fullscreenEnabled?document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():null===(e=m.current)||void 0===e||e.requestFullscreen():k.b.error("Full screen mode is not supported in this browser")},z=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u.trim().length>0)){e.next=7;break}if(!(u.split(" ").length<60)){e.next=4;break}return k.b.error("You must insert at least 60 words"),e.abrupt("return");case 4:T(!0),e.next=21;break;case 7:return t=M[s],e.prev=8,e.next=11,C.a.get(t.api);case 11:n=e.sent,a=n.data.body,c=a[Math.floor(Math.random()*a.length)].content,b(c),T(!0),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),k.b.error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"read-box-container",children:[Object(a.jsxs)(A.a,{children:[Object(a.jsx)("title",{children:"Test your reading speed"}),Object(a.jsx)("meta",{name:"description",children:"Free online tool to check your reading ability. Reading speed is proportional to Comprehension at certain level. Check speed reading wpm.Check your average reading speed."})]}),Object(a.jsx)(V,{setFontSize:function(e){x(Object(w.a)(Object(w.a)({},f),{},{fontSize:e}))},setFontFamily:function(e){x(Object(w.a)(Object(w.a)({},f),{},{fontFamily:e}))},setIsBold:function(){x(Object(w.a)(Object(w.a)({},f),{},{fontWeight:"normal"===f.fontWeight?"bold":"normal"}))},setTopic:i,setIsFullScreen:N,defaultTopic:s,defaultSize:f.fontSize,defaultFontFamily:f.fontFamily}),Object(a.jsxs)("div",{ref:m,className:"text-box-ref",children:[Object(a.jsx)(W,{fontStyle:f,toggleFullScreen:N,toggleReadingMode:function(){S?T((function(e){return!e})):z()},onTextContentChange:function(e){b(e)},value:u,readingMode:S}),Object(a.jsx)(J,{calculateWpm:function(n){var a=60*u.split(" ").length/n;e(Math.floor(a)),t.push("/stats")},readingMode:S})]})]})}n(313);var Q=n(405);function X(){return Object(a.jsx)("div",{children:Object(a.jsx)(Q.a,{pagination:!1,columns:[{title:"Screen",dataIndex:"screen"},{title:"Paper",dataIndex:"paper"},{title:"Character",dataIndex:"character"},{title:"Profile",dataIndex:"profile"}],dataSource:[{key:"1",paper:120,screen:100,character:"The Sloth",profile:"Slow reader"},{key:"2",paper:250,screen:200,character:"The Fox",profile:"Average reader"},{key:"3",paper:500,screen:400,character:"The Lion",profile:"Speed reader"},{key:"4",paper:700,screen:600,character:"The Cheetah",profile:"The Expert"}],bordered:!0})})}var Z=n(406),$=n(404),_=n(408);n(396);function ee(e){return Object(a.jsxs)("div",{className:"result-display-container",children:[Object(a.jsxs)(Z.a,{hoverable:!0,cover:Object(a.jsx)("img",{alt:"example",src:"".concat(N,"/images/")+e.character+".gif"}),className:"result-card",children:[Object(a.jsxs)("div",{style:{display:"inline",float:"left"},children:[Object(a.jsx)("h3",{children:"Your speed is"}),Object(a.jsxs)("h1",{children:[e.wpm," WPM"]})]}),Object(a.jsxs)("div",{style:{display:"inline",float:"right"},children:[Object(a.jsx)("h3",{children:"You are a"}),Object(a.jsx)("h2",{children:Y()(e.character).humanize().s})]}),Object(a.jsx)($.a,{}),Object(a.jsx)(b.a,{onClick:e.readAgain,type:"primary",className:"read-again-button",children:"Read again"})]}),Object(a.jsxs)("div",{className:"progress-display",children:[Object(a.jsx)(_.a,{percent:20,type:"circle"}),Object(a.jsxs)("h3",{children:["You are better than ",e.betterThan,"% of our readers"]})]})]})}n(399);var te=x.a.Title;function ne(){return Object(a.jsxs)("div",{className:"app-intro-container",children:[Object(a.jsx)(te,{level:3,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iure sed at veniam ad."}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quos! Perspiciatis quis ex velit minima, vero at tempore, aspernatur error quidem accusantium commodi sit hic alias, eum delectus placeat nostrum."})]})}function ae(){var e=Object(c.useContext)(F).wpm,t=function(e){switch(!0){case e<=120:return{character:"sloth",betterThan:0};case e>120&&e<250:return{character:"fox",betterThan:20};case e>250&&e<500:return{character:"lion",betterThan:50};case e>500:return{character:"cheetah",betterThan:80};default:return{character:"fox",betterThan:20}}}(e),n=t.character,r=t.betterThan,s=Object(j.f)();return Object(a.jsxs)("div",{className:"statistics-container",children:[Object(a.jsxs)(A.a,{children:[Object(a.jsx)("title",{children:"Speed Reading Test and Reading Comprehension Test"}),Object(a.jsx)("meta",{name:"description",children:"Free speed reading online test.Check your reading speed and test your Comprehension.Check your average reading speed. learn to speed read .The average wpm is 150 to 200 wpm.reading wpm test.words per minute reading test.reading wpm test.Check your average reading speed.train yourself with speed reading exercises"})]}),Object(a.jsx)("div",{children:e>10&&Object(a.jsx)(ee,{character:n,wpm:e,betterThan:r,readAgain:function(){s.replace("/")}})}),Object(a.jsx)(X,{}),Object(a.jsx)(ne,{})]})}var ce=n(409),re=n(414);function se(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie();case 3:t=e.sent,r(!!t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),n?Object(a.jsxs)(ce.a,{title:"Disable Ad blocker",visible:n,footer:[Object(a.jsx)(b.a,{onClick:s,children:"Refresh"})],children:[Object(a.jsx)("p",{children:"Please consider helping us financially to continue providing this software for free by disabling the adblock."}),Object(a.jsxs)("span",{children:[Object(a.jsx)(b.a,{icon:Object(a.jsx)(re.a,{style:{color:"red"}}),type:"text"}),"Disable the ",Object(a.jsx)("b",{children:"adblock"})," and hit ",Object(a.jsx)("b",{children:"refresh"})]})]}):Object(a.jsx)("p",{})}function ie(){return oe.apply(this,arguments)}function oe(){return(oe=Object(y.a)(v.a.mark((function e(){var t,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(){return(a=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",{method:"HEAD",mode:"no-cors"})).then((function(e){return t=!1})).catch((function(e){return t=!0})));case 4:throw e.prev=4,e.t0=e.catch(0),t=!0,new Error("Blocked");case 8:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)},n=function(){return a.apply(this,arguments)},void 0===t){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,n();case 8:e.t0=e.sent;case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return Object(c.useEffect)((function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]),Object(a.jsx)("div",{className:"ads",children:Object(a.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2722285596392235","data-ad-slot":"7149145943","data-ad-format":"auto","data-full-width-responsive":"true"})})}function de(){return Object(c.useEffect)((function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]),Object(a.jsx)("div",{className:"ads",children:Object(a.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2722285596392235","data-ad-slot":"4706815431","data-ad-format":"auto","data-full-width-responsive":"true"})})}n(400);var ue=function(e){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{className:"app-body",children:[Object(a.jsx)(d.a,{flex:2,style:{minHeight:"90vh"},children:Object(a.jsx)(de,{})}),Object(a.jsx)(d.a,{flex:"5 500px",style:{minHeight:"90vh"},children:e.children}),Object(a.jsx)(d.a,{flex:2,style:{minHeight:"90vh"},children:Object(a.jsx)(le,{})})]})})},je=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(se,{}),Object(a.jsx)(F.Provider,{value:{wpm:n,setWpm:r},children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/stats",children:Object(a.jsx)(ue,{children:Object(a.jsx)(ae,{})})}),Object(a.jsx)(j.a,{path:"/",children:Object(a.jsxs)(ue,{children:[Object(a.jsx)(O,{}),Object(a.jsx)(K,{})]})})]})}),Object(a.jsx)(f,{})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,415)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},he=n(151);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(je,{})}),document.getElementById("root")),be(),he.a.initialize("G-B2G70QXGKB"),he.a.pageview(window.location.pathname+window.location.search)}},[[401,1,2]]]);
//# sourceMappingURL=main.6d4643c9.chunk.js.map