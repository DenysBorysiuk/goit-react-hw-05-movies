"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{545:function(n,r,t){t.d(r,{O:function(){return x}});var e,a,c,u=t(87),s=t(168),i=t(444),o=i.ZP.ul(e||(e=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),p=i.ZP.li(a||(a=(0,s.Z)(["\n  //   width: 300px;\n  transition: transform 500ms;\n  will-change: transform;\n  cursor: pointer;\n  border-radius: 5px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"]))),f=i.ZP.div(c||(c=(0,s.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 250px;\n  height: 350px;\n"]))),d=t(184),x=function(n){var r=n.movies;return(0,d.jsx)(o,{children:r.map((function(n){var r=n.id,t=n.poster_path,e=n.title;return(0,d.jsx)(p,{children:(0,d.jsxs)(u.rU,{to:"/movies/".concat(r),children:[(0,d.jsx)(f,{children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:e})}),(0,d.jsx)("p",{children:e})]})},r)}))})}},415:function(n,r,t){t.r(r);var e=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(545),o=t(390),p=t(184);r.default=function(){var n=(0,s.useState)([]),r=(0,a.Z)(n,2),t=r[0],c=r[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Df)();case 3:r=n.sent,c(r.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(i.O,{movies:t})]})}},390:function(n,r,t){t.d(r,{Df:function(){return i},TP:function(){return o},qF:function(){return p},zv:function(){return f}});var e=t(861),a=t(757),c=t.n(a),u=t(912),s="b60c32a6f6f2663f6a35c755ff35b4cc";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie/",{params:{api_key:s,query:r}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.be35a0dd.chunk.js.map