"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{5545:function(r,n,t){t.d(n,{O:function(){return l}});var e,a,u,c=t(1087),s=t(7689),i=t(168),o=t(6444),p=o.ZP.ul(e||(e=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 20px;\n"]))),f=o.ZP.li(a||(a=(0,i.Z)(["\n  transition: transform 500ms;\n  will-change: transform;\n  cursor: pointer;\n  border-radius: 5px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"]))),x=o.ZP.div(u||(u=(0,i.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 300px;\n  height: 450px;\n"]))),v=t(184),l=function(r){var n=r.movies,t=(0,s.TH)();return(0,v.jsx)(p,{children:n.map((function(r){var n=r.id,e=r.poster_path,a=r.title;return(0,v.jsx)(f,{children:(0,v.jsx)(c.rU,{to:"/movies/".concat(n),state:{from:t},children:(0,v.jsx)(x,{children:(0,v.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://via.placeholder.com/300x450.png?text=".concat(a),alt:a})})})},n)}))})}},5415:function(r,n,t){t.r(n);var e=t(5861),a=t(9439),u=t(7757),c=t.n(u),s=t(2791),i=t(5545),o=t(4390),p=t(9014),f=t(184);n.default=function(){var r=(0,s.useState)([]),n=(0,a.Z)(r,2),t=n[0],u=n[1];return(0,s.useEffect)((function(){var r=new AbortController,n=r.signal,t=function(){var r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.Df)(n);case 3:t=r.sent,u(t.results),r.next=12;break;case 7:if(r.prev=7,r.t0=r.catch(0),"CanceledError"!==r.t0.name){r.next=11;break}return r.abrupt("return");case 11:p.ZP.error("Oops, something went wrong");case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();return t(),function(){r.abort()}}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)(p.x7,{position:"top-right",reverseOrder:!1}),(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(i.O,{movies:t})]})}},4390:function(r,n,t){t.d(n,{Df:function(){return i},TP:function(){return o},qF:function(){return p},tx:function(){return x},zv:function(){return f}});var e=t(5861),a=t(7757),u=t.n(a),c=t(1912),s="b60c32a6f6f2663f6a35c755ff35b4cc";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var r=(0,e.Z)(u().mark((function r(n){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/trending/movie/day",{params:{api_key:s},signal:n});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(n,t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(n),{params:{api_key:s},signal:t});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(n,t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie/",{params:{api_key:s,query:n},signal:t});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(n,t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:s},signal:t});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}(),x=function(){var r=(0,e.Z)(u().mark((function r(n,t){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:s},signal:t});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.1d991df0.chunk.js.map