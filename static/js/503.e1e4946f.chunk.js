"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[503],{545:function(n,r,t){t.d(r,{O:function(){return d}});var e,a,u,c=t(87),i=t(689),s=t(168),o=t(444),p=o.ZP.ul(e||(e=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),f=o.ZP.li(a||(a=(0,s.Z)(["\n  //   width: 300px;\n  transition: transform 500ms;\n  will-change: transform;\n  cursor: pointer;\n  border-radius: 5px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"]))),v=o.ZP.div(u||(u=(0,s.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 250px;\n  height: 350px;\n"]))),x=t(184),d=function(n){var r=n.movies,t=(0,i.TH)();return(0,x.jsx)(p,{children:r.map((function(n){var r=n.id,e=n.poster_path,a=n.title;return(0,x.jsx)(f,{children:(0,x.jsxs)(c.rU,{to:"/movies/".concat(r),state:{from:t},children:[(0,x.jsx)(v,{children:(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:a})}),(0,x.jsx)("p",{children:a})]})},r)}))})}},503:function(n,r,t){t.r(r),t.d(r,{default:function(){return x}});var e=t(861),a=t(439),u=t(757),c=t.n(u),i=t(791),s=t(87),o=t(184),p=function(n){var r=n.updateQueryString;return(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget;r(t.elements.query.value),t.reset()},children:[(0,o.jsx)("input",{type:"text",name:"query"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})},f=t(545),v=t(390),x=function(){var n,r=(0,i.useState)([]),t=(0,a.Z)(r,2),u=t[0],x=t[1],d=(0,s.lr)(),l=(0,a.Z)(d,2),h=l[0],m=l[1],w=null!==(n=h.get("query"))&&void 0!==n?n:"";(0,i.useEffect)((function(){if(""!==w){var n=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.qF)(w);case 3:r=n.sent,x(r.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[w]);return(0,o.jsxs)("main",{children:[(0,o.jsx)(p,{updateQueryString:function(n){m({query:n})}}),(0,o.jsx)(f.O,{movies:u})]})}},390:function(n,r,t){t.d(r,{Df:function(){return s},TP:function(){return o},qF:function(){return p},tx:function(){return v},zv:function(){return f}});var e=t(861),a=t(757),u=t.n(a),c=t(912),i="b60c32a6f6f2663f6a35c755ff35b4cc";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie/",{params:{api_key:i,query:r}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=503.e1e4946f.chunk.js.map