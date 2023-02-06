"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[385],{385:function(e,n,r){r.r(n),r.d(n,{default:function(){return k}});var t,a,i=r(861),s=r(439),c=r(757),u=r.n(c),o=r(791),p=r(87),l=r(689),f=r(390),d=r(168),v=r(444),h=v.ZP.div(t||(t=(0,d.Z)(["\n  display: flex;\n  //   flex-wrap: wrap;\n  gap: 15px;\n"]))),x=r(184),m=function(e){var n=e.movie,r=n.poster_path,t=n.original_title,a=n.vote_average,i=n.overview,s=n.genres,c=n.release_date;return(0,x.jsx)("div",{children:(0,x.jsxs)(h,{children:[(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:""}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h2",{children:[t," (",c.slice(0,4),")"]}),(0,x.jsxs)("p",{children:["User Score: ",a]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:i}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:s.map((function(e){return e.name}))})]})]})})},g=r(128),j=(0,v.ZP)(p.rU)(a||(a=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),w=function(e){var n=e.to,r=e.children;return(0,x.jsxs)(j,{to:n,children:[(0,x.jsx)(g.jTe,{size:"24"}),r]})},k=function(){var e,n,r=(0,l.UO)().movieId,t=(0,o.useState)(null),a=(0,s.Z)(t,2),c=a[0],d=a[1],v=(0,l.TH)(),h=(0,o.useRef)(null!==(e=null===(n=v.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,o.useEffect)((function(){var e=new AbortController,n=e.signal,t=function(){var e=(0,i.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.TP)(r,n);case 3:t=e.sent,d(t),e.next=12;break;case 7:if(e.prev=7,e.t0=e.catch(0),"CanceledError"!==e.t0.name){e.next=11;break}return e.abrupt("return");case 11:console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return t(),function(){e.abort()}}),[r]),(0,x.jsxs)("main",{children:[(0,x.jsx)(w,{to:h.current,children:"Back to products"}),c&&(0,x.jsx)(m,{movie:c}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(l.j3,{})})]})}},390:function(e,n,r){r.d(n,{Df:function(){return u},TP:function(){return o},qF:function(){return p},tx:function(){return f},zv:function(){return l}});var t=r(861),a=r(757),i=r.n(a),s=r(912),c="b60c32a6f6f2663f6a35c755ff35b4cc";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{params:{api_key:c},signal:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(n,r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n),{params:{api_key:c},signal:r});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(i().mark((function e(n,r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie/",{params:{api_key:c,query:n},signal:r});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(n,r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:c},signal:r});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(i().mark((function e(n,r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:c},signal:r});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=385.3eff3839.chunk.js.map