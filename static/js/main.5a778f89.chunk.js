(this["webpackJsonpspeed-read"]=this["webpackJsonpspeed-read"]||[]).push([[0],{218:function(e,t,n){},222:function(e,t,n){},239:function(e,t,n){},248:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},279:function(e,t,n){},288:function(e,t,n){},295:function(e,t,n){},378:function(e,t,n){},381:function(e,t,n){},407:function(e,t,n){},408:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),s=n.n(r),c=n(30),i=n.n(c),o=(n(218),n(49)),d=(n(219),n(99)),l=n(61),u=n(44),h=n(34),j=n(151),b=n(45),p=(n(222),function(){return Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)("div",{className:"app-logo",children:Object(a.jsx)(b.a,{className:"button",type:"link",children:Object(a.jsx)("h2",{children:Object(a.jsx)(u.b,{to:"/",children:"Reading speed test"})})})}),Object(a.jsxs)("div",{className:"navs-href",children:[Object(a.jsx)(u.b,{to:"/",children:"Home"}),Object(a.jsx)(u.b,{to:"/stats",children:"Statistics"}),Object(a.jsx)(u.b,{to:"/guide",children:"Guide"})]})]})}),g=n(410);n(239);function f(){return Object(a.jsxs)(g.a.Footer,{className:"footer-container",style:{textAlign:"center"},children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("a",{href:"https://readingspeedtest.tech",children:"Reading Speed Test "}),"Software Copyright \xa92020, All Rights Reserved. Click\xa0"]}),Object(a.jsx)("a",{href:"mailto:sumukha214@gmail.com?subject=Feedback on Speed read test software",children:"here"}),Object(a.jsx)("span",{children:"\xa0to Feedback"})]})}n(248);function x(){return Object(a.jsxs)("div",{className:"app-intro-container",children:[Object(a.jsx)("h1",{children:"Pick up a topic and check your Reading Speed for free."}),Object(a.jsx)("p",{className:"intro-p",children:"Speed reading is the process of rapidly absorbing the meaning of a context rather than identifying individual words. Speed Reading became so important to gain knowledge in the current scenario. The average reading speed of most adults is around 200 to 250 words per minute. If You cross this range you will have an advantage over others to get knowledge with less time. We provide a free tool to test your reading speed online. Pick a topic or paste a text you want to read. You can choose any fonts with font size, and you can read in a full-screen mode."})]})}var O=n(65),m=n.n(O),y=n(98),v=n(86),w=n(209),k=n(183),S=n.n(k),T={wpm:0,setWpm:function(){return null}},C=s.a.createContext(T),A="https://sumukhah.github.io/speed-read-json/",F={random:{api:A+"random.json"},article:{api:A+"articles.json"}},N=["arial","times new roman","geneva","verdana"],I=n(90),z=(n(266),n(210)),M=n(416),B=n(136),R=n(418),E=(n(267),M.a.TextArea),W=function(e){var t=e.fontStyle,n=e.toggleFullScreen,r=e.readingMode,s=Object(z.a)(e,["fontStyle","toggleFullScreen","readingMode"]);return Object(a.jsxs)("div",{className:"text-box",children:[r?Object(a.jsxs)("div",{style:t,className:"textContainerBox",children:[Object(a.jsx)("p",{children:s.value}),Object(a.jsx)(b.a,{type:"primary",className:"read-toggle-button",size:"large",onClick:s.toggleReadingMode,children:"Done"})]}):Object(a.jsx)(E,{placeholder:"Add your own Text or select a Topic and press Start",style:t,onChange:function(e){var t=e.target.value;return s.onTextContentChange(t)},value:s.value}),!r&&Object(a.jsx)(b.a,{type:"primary",className:"read-toggle-button start-button",size:"large",onClick:s.toggleReadingMode,children:"Start Test"}),Object(a.jsx)(B.a,{title:"Full Screen",className:"fullscreen-toggle-button",children:Object(a.jsx)(b.a,{type:"text",icon:Object(a.jsx)(R.a,{color:"black"}),onClick:n,style:{backgroundColor:"white"}})})]})},q=n(110),D=n(417),Y=n(419),H=n(108),Q=n.n(H),P=(n(279),q.a.Option),G=function(e){return Object(a.jsxs)("div",{className:"text-format-form",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(q.a,{defaultValue:e.defaultFontFamily,className:"font-select-dropdown",onChange:function(t){return e.setFontFamily(t)},children:N.map((function(e){return Object(a.jsx)(P,{value:e,children:Q()(e).humanize().s},e)}))}),Object(a.jsx)(D.a,{min:10,max:30,defaultValue:e.defaultSize,className:"font-size",onChange:function(t){e.setFontSize(t)}}),Object(a.jsx)(q.a,{defaultValue:e.defaultTopic,className:"topic-select-dropdown",onChange:function(t){return e.setTopic(t)},children:Object.keys(F).map((function(e){return Object(a.jsx)(P,{value:e,children:Q()(e).humanize().s},e)}))})]}),Object(a.jsx)("div",{children:Object(a.jsx)(B.a,{title:"Bold",children:Object(a.jsx)(b.a,{onClick:e.setIsBold,icon:Object(a.jsx)(Y.a,{})})})})]})};n(288);function L(e){var t=Object(r.useState)("00"),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(r.useState)("00"),d=Object(o.a)(i,2),l=d[0],u=d[1],h=Object(r.useState)(0),j=Object(o.a)(h,2),b=j[0],p=j[1],g=function(){var e=b%60,t=Math.floor(b/60),n=1===String(e).length?"0".concat(e):e,a=1===String(t).length?"0".concat(t):t;u(n),c(a),p((function(e){return e+1}))};return Object(r.useEffect)((function(){!e.readingMode&&b>1&&(e.calculateWpm(b+1),p(0))}),[e.readingMode,b]),Object(r.useEffect)((function(){var t=e.readingMode?setTimeout(g,1e3):null;return function(){t&&clearInterval(t)}}),[b,e.readingMode]),0===b?null:Object(a.jsx)("div",{className:"timer-container",children:Object(a.jsxs)("span",{children:[s,":",l]})})}var U={fontFamily:"arial",fontWeight:"normal",fontSize:15};function V(){var e=Object(r.useContext)(C).setWpm,t=Object(h.f)(),n=Object(r.useState)("random"),s=Object(o.a)(n,2),c=s[0],i=s[1],d=Object(r.useState)(""),l=Object(o.a)(d,2),u=l[0],j=l[1],b=Object(r.useState)(U),p=Object(o.a)(b,2),g=p[0],f=p[1],x=Object(r.useRef)(null),O=Object(r.useState)(!1),k=Object(o.a)(O,2),T=k[0],A=k[1],N=function(){var e;document.fullscreenEnabled?document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():null===(e=x.current)||void 0===e||e.requestFullscreen():w.b.error("Full screen mode is not supported in this browser")},z=function(){var e=Object(y.a)(m.a.mark((function e(){var t,n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u.trim().length>0)){e.next=7;break}if(!(u.split(" ").length<60)){e.next=4;break}return w.b.error("You must insert at least 60 words"),e.abrupt("return");case 4:A(!0),e.next=21;break;case 7:return t=F[c],e.prev=8,e.next=11,S.a.get(t.api);case 11:n=e.sent,a=n.data.body,r=a[Math.floor(Math.random()*a.length)].content,j(r),A(!0),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),w.b.error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"read-box-container",children:[Object(a.jsxs)(I.a,{children:[Object(a.jsx)("title",{children:"Test your reading speed"}),Object(a.jsx)("meta",{name:"description",content:"Free online tool to check your reading ability. Reading speed is proportional to Comprehension at certain level. Check speed reading wpm.Check your average reading speed."})]}),Object(a.jsx)(G,{setFontSize:function(e){f(Object(v.a)(Object(v.a)({},g),{},{fontSize:e}))},setFontFamily:function(e){f(Object(v.a)(Object(v.a)({},g),{},{fontFamily:e}))},setIsBold:function(){f(Object(v.a)(Object(v.a)({},g),{},{fontWeight:"normal"===g.fontWeight?"bold":"normal"}))},setTopic:i,setIsFullScreen:N,defaultTopic:c,defaultSize:g.fontSize,defaultFontFamily:g.fontFamily}),Object(a.jsxs)("div",{ref:x,className:"text-box-ref",children:[Object(a.jsx)(W,{fontStyle:g,toggleFullScreen:N,toggleReadingMode:function(){T?A((function(e){return!e})):z()},onTextContentChange:function(e){j(e)},value:u,readingMode:T}),Object(a.jsx)(L,{calculateWpm:function(n){var a=60*u.split(" ").length/n;e(Math.floor(a)),t.push("/stats")},readingMode:T})]})]})}n(295);var J=n(412);function K(){return Object(a.jsx)("div",{children:Object(a.jsx)(J.a,{pagination:!1,columns:[{title:"Screen",dataIndex:"screen"},{title:"Paper",dataIndex:"paper"},{title:"Character",dataIndex:"character"},{title:"Profile",dataIndex:"profile"}],dataSource:[{key:"1",paper:120,screen:100,character:"The Sloth",profile:"Slow reader"},{key:"2",paper:250,screen:200,character:"The Fox",profile:"Average reader"},{key:"3",paper:500,screen:400,character:"The Lion",profile:"Speed reader"},{key:"4",paper:700,screen:600,character:"The Cheetah",profile:"The Expert"}],bordered:!0})})}var _=n(413),X=n(411),Z=n(414);n(378);function $(e){return Object(a.jsxs)("div",{className:"result-display-container",children:[Object(a.jsxs)(_.a,{hoverable:!0,cover:Object(a.jsx)("img",{alt:"example",src:"".concat(A,"/images/")+e.character+".gif"}),className:"result-card",children:[Object(a.jsxs)("div",{style:{display:"inline",float:"left"},children:[Object(a.jsx)("h3",{children:"Your speed is"}),Object(a.jsxs)("h1",{children:[e.wpm," WPM"]})]}),Object(a.jsxs)("div",{style:{display:"inline",float:"right"},children:[Object(a.jsx)("h3",{children:"You are a"}),Object(a.jsx)("h2",{children:Q()(e.character).humanize().s})]}),Object(a.jsx)(X.a,{}),Object(a.jsx)(b.a,{onClick:e.readAgain,type:"primary",className:"read-again-button",children:"Read again"})]}),Object(a.jsxs)("div",{className:"progress-display",children:[Object(a.jsx)(Z.a,{percent:20,type:"circle"}),Object(a.jsxs)("h3",{children:["You are better than ",e.betterThan,"% of our readers"]})]})]})}n(381);function ee(){return Object(a.jsxs)("div",{className:"app-intro-container",children:[Object(a.jsx)("h1",{children:"Reading Speed and Comprehension are proportional"}),Object(a.jsxs)("p",{children:[Object(a.jsx)(u.b,{to:"/",children:"Speed reading"})," will help you to improve your comprehension up to a point. By improving your reading speed, you will spend less time in sub-vocalization. If you master visualization while reading, you can dramatically improve reading speed and can become an expert."]})]})}function te(){var e=Object(r.useContext)(C).wpm,t=function(e){switch(!0){case e<=120:return{character:"sloth",betterThan:0};case e>120&&e<250:return{character:"fox",betterThan:20};case e>250&&e<500:return{character:"lion",betterThan:50};case e>500:return{character:"cheetah",betterThan:80};default:return{character:"fox",betterThan:20}}}(e),n=t.character,s=t.betterThan,c=Object(h.f)();return Object(a.jsxs)("div",{className:"statistics-container",children:[Object(a.jsxs)(I.a,{children:[Object(a.jsx)("title",{children:"Speed reading statistics"}),Object(a.jsx)("meta",{name:"description",content:"Free speed reading online test.Check your reading speed and test your Comprehension.Check your average reading speed. learn to speed read .The average wpm is 150 to 200 wpm.reading wpm test.words per minute reading test.reading wpm test.Check your average reading speed.train yourself with speed reading exercises"})]}),Object(a.jsx)("div",{children:e>10&&Object(a.jsx)($,{character:n,wpm:e,betterThan:s,readAgain:function(){c.replace("/")}})}),Object(a.jsx)(ee,{}),Object(a.jsx)("h2",{children:"The following table shows how reading speed and Comprehensions are related"}),Object(a.jsx)(K,{}),Object(a.jsxs)("div",{className:"benefits-container",children:[Object(a.jsx)("h2",{children:"Benefits of speed reading"}),Object(a.jsxs)(_.a,{children:[Object(a.jsx)("b",{children:"Read more in less time: "}),Object(a.jsx)("span",{children:"By learning to speed read, you can double or triple the amount that you read in the same amount of time. You may find that you only need to skim material to understand what is being discussed. So that you can spend less time to gain knowledge."})]}),Object(a.jsxs)(_.a,{children:[Object(a.jsx)("b",{children:"Better Concentration: "}),Object(a.jsx)("span",{children:"Speed reading improves your ability to focus your attention on completing a text before moving to achieve other tasks. Your mind stops wandering while reading faster, And the attention and focus will be on the book you are reading."})]}),Object(a.jsxs)(_.a,{children:[Object(a.jsx)("b",{children:"Improves Comprehension: "}),Object(a.jsx)("span",{children:"Speed reading helps you quit sub-vocalization and focus on the text you are reading, And your ability to remember the contents will gradually increase."})]}),Object(a.jsxs)("h4",{children:["Check how to improve your reading speed in the\xa0",Object(a.jsx)(u.b,{to:"/guide",children:"Guide"})]})]})]})}var ne=n(415),ae=n(420);function re(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],c=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se();case 3:t=e.sent,s(!!t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),n?Object(a.jsxs)(ne.a,{title:"Disable Ad blocker",visible:n,footer:[Object(a.jsx)(b.a,{onClick:c,children:"Refresh"})],children:[Object(a.jsx)("p",{children:"Please consider helping us financially to continue providing this software for free by disabling the adblock."}),Object(a.jsxs)("span",{children:[Object(a.jsx)(b.a,{icon:Object(a.jsx)(ae.a,{style:{color:"red"}}),type:"text"}),"Disable the ",Object(a.jsx)("b",{children:"adblock"})," and hit ",Object(a.jsx)("b",{children:"refresh"})]})]}):Object(a.jsx)("p",{})}function se(){return ce.apply(this,arguments)}function ce(){return(ce=Object(y.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(){return(a=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",{method:"HEAD",mode:"no-cors"})).then((function(e){return t=!1})).catch((function(e){return t=!0})));case 4:throw e.prev=4,e.t0=e.catch(0),t=!0,new Error("Blocked");case 8:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)},n=function(){return a.apply(this,arguments)},void 0===t){e.next=6;break}e.t0=t,e.next=9;break;case 6:return e.next=8,n();case 8:e.t0=e.sent;case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return Object(r.useEffect)((function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]),Object(a.jsx)("div",{className:"ads",children:Object(a.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2722285596392235","data-ad-slot":"7149145943","data-ad-format":"auto","data-full-width-responsive":"true"})})}function oe(){return Object(r.useEffect)((function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]),Object(a.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-2722285596392235","data-ad-slot":"4706815431","data-ad-format":"auto","data-full-width-responsive":"true","data-adtest":"on"})}var de=n(150),le=n.n(de);function ue(){return Object(a.jsxs)("div",{className:"guide-container",children:[Object(a.jsxs)(I.a,{children:[Object(a.jsx)("title",{children:"Speed reading Guide"}),Object(a.jsx)("meta",{name:"description",content:"Improve your reading speed with various techniques taught by experts all around the world. When you increase your reading speed, automatically your ability to memorize and comprehension will increase gradually. Use our free online tool to measure your progress and become an expert of speed reading. "})]}),Object(a.jsx)("h1",{children:"A guide to improve your reading speed"}),Object(a.jsx)(X.a,{}),Object(a.jsx)("h2",{children:"Techniques to improve your speed"}),Object(a.jsx)("p",{children:"There are many Techniques to improve your reading speed. Refer these videos from experts and follow step by step."}),Object(a.jsx)(le.a,{url:"https://www.youtube.com/watch?v=xiTK523Ot5U"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Techniques:"}),Object(a.jsx)("h4",{children:"Stop sub-vocalization:"}),Object(a.jsx)("p",{children:"Listen to classical music or Chew gums or start humming in your voice while you are reading. And This is the primary reason for reducing our reading speed. We have trained to subvocalize from our childhood. So, Fixing this is not the easiest thing, and it requires a lot of time and effort."}),Object(a.jsx)("h4",{children:"Using pointers:"}),Object(a.jsx)("p",{children:"Children use these Techniques naturally, but we forcefully make them stop using pointers while reading. There are many benefits to use pointers like markers, pens, or a finger while reading.One of the biggest points for speed reading and learning how to speed read is to use your finger whenever you read and force your eye to follow your finger. This will keep your eye from bouncing around the page because this does slow you down."}),Object(a.jsx)("h4",{children:"Do not read every word:"}),Object(a.jsxs)("p",{children:["Make 2 or 3 words as a group and read them. If you fix your eye on the middle or middle-word you can grasp their neighboring words. With progress, you can\xa0",Object(a.jsx)("a",{href:"https://learningcenter.unc.edu/tips-and-tools/skimming/",children:"skimming"}),"\xa0through any texts. But this is an advanced technique and should not be used for all types of textual knowledge."]})]}),Object(a.jsx)(X.a,{}),Object(a.jsx)("h3",{children:"Advise from Michel Wozniak(Speed reader)"}),Object(a.jsx)(le.a,{url:"https://www.youtube.com/watch?v=HKYmwD_weE8"}),Object(a.jsx)("h2",{children:"It's a long process"}),Object(a.jsxs)("p",{children:["From our childhood, everyone taught us to read every word aloud. And our brain doesn't know an alternative way. For this reason, everyone thinks speed reading is difficult to achieve. But we can change any habits through repetition, but it may take some time to rewire our brain. It will take a lot of effort, time, and energy to achieve this. Mentally be prepare for the journey and take every tiny step to achieve your goal. There are many books"," ",Object(a.jsx)("a",{href:"https://www.google.com/search?rlz=1C5CHFA_enIN926IN926&ei=JV70X6qtL5DRrQH_kb24DA&q=the+speed+reading+book+tony+buzan&oq=The+speed+reading+book+tony&gs_lcp=CgZwc3ktYWIQAxgAMgcIABDJAxBDMgIIADIGCAAQFhAeOgcIABBHELADOgQIABBDUKQmWPkrYII0aAFwAngAgAGVAYgBqgSSAQMzLjKYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab",children:"The speed reading book by tony buzan"})," ","and"," ",Object(a.jsxs)("a",{href:"https://www.amazon.com/First-90-Days-Strategies-Expanded/dp/1422188612",children:["The First 90 Days, by Michael Watkins"," "]}),"may help you."]}),Object(a.jsxs)("b",{children:["Track your progress with ",Object(a.jsx)(u.b,{to:"/",children:"Reading speed test"})]})]})}n(407);var he=function(e){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(d.a,{className:"app-body",children:[Object(a.jsx)(l.a,{flex:2,style:{minHeight:"90vh"},children:Object(a.jsx)(oe,{})}),Object(a.jsx)(l.a,{flex:"5 500px",style:{minHeight:"90vh"},children:e.children}),Object(a.jsx)(l.a,{flex:2,style:{minHeight:"90vh"},children:Object(a.jsx)(ie,{})})]}),Object(a.jsxs)(d.a,{children:[Object(a.jsx)(l.a,{children:Object(a.jsx)(oe,{})}),Object(a.jsx)(l.a,{children:Object(a.jsx)(oe,{})})]})]})},je=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(r.useEffect)((function(){j.a.initialize("UA-186125804-1"),j.a.pageview(window.location.pathname+window.location.search)}),[]),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(re,{}),Object(a.jsx)(C.Provider,{value:{wpm:n,setWpm:s},children:Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{path:"/stats",children:Object(a.jsx)(he,{children:Object(a.jsx)(te,{})})}),Object(a.jsx)(h.a,{path:"/guide",children:Object(a.jsx)(he,{children:Object(a.jsx)(ue,{})})}),Object(a.jsx)(h.a,{path:"/",children:Object(a.jsxs)(he,{children:[Object(a.jsx)(x,{}),Object(a.jsx)(V,{})]})})]})}),Object(a.jsx)(f,{})]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(je,{})}),document.getElementById("root"))}},[[408,1,2]]]);
//# sourceMappingURL=main.5a778f89.chunk.js.map