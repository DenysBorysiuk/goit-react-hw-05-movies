"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[503],{545:function(n,t,r){r.d(t,{O:function(){return d}});var e,a,u,c=r(87),i=r(689),o=r(168),s=r(444),p=s.ZP.ul(e||(e=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),f=s.ZP.li(a||(a=(0,o.Z)(["\n  transition: transform 500ms;\n  will-change: transform;\n  cursor: pointer;\n  border-radius: 5px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"]))),v=s.ZP.div(u||(u=(0,o.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 305px;\n  height: 445px;\n"]))),x=r(184),d=function(n){var t=n.movies,r=(0,i.TH)();return(0,x.jsx)(p,{children:t.map((function(n){var t=n.id,e=n.poster_path,a=n.title;return(0,x.jsx)(f,{children:(0,x.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:r},children:(0,x.jsx)(v,{children:(0,x.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://via.placeholder.com/305x445.png?text=".concat(a),alt:a})})})},t)}))})}},503:function(n,t,r){r.r(t),r.d(t,{default:function(){return x}});var e=r(861),a=r(439),u=r(757),c=r.n(u),i=r(791),o=r(87),s=r(184),p=function(n){var t=n.updateQueryString;return(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.currentTarget;t(r.elements.query.value),r.reset()},children:[(0,s.jsx)("input",{type:"text",name:"query"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})},f=r(545),v=r(390),x=function(){var n,t=(0,i.useState)([]),r=(0,a.Z)(t,2),u=r[0],x=r[1],d=(0,o.lr)(),l=(0,a.Z)(d,2),h=l[0],m=l[1],w=null!==(n=h.get("query"))&&void 0!==n?n:"";(0,i.useEffect)((function(){if(""!==w){var n=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.qF)(w);case 3:t=n.sent,x(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[w]);return(0,s.jsxs)("main",{children:[(0,s.jsx)(p,{updateQueryString:function(n){m({query:n})}}),(0,s.jsx)(f.O,{movies:u})]})}},390:function(n,t,r){r.d(t,{Df:function(){return o},TP:function(){return s},qF:function(){return p},tx:function(){return v},zv:function(){return f}});var e=r(861),a=r(757),u=r.n(a),c=r(912),i="b60c32a6f6f2663f6a35c755ff35b4cc";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie/",{params:{api_key:i,query:t}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=503.02de9509.chunk.js.map