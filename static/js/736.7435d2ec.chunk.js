"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,r,t){t.r(r),t.d(r,{default:function(){return b}});var e,a,c,u=t(861),s=t(439),i=t(757),o=t.n(i),p=t(791),f=t(689),v=t(390),d=t(168),h=t(444),x=h.ZP.ul(e||(e=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),l=h.ZP.li(a||(a=(0,d.Z)(["\n  transition: transform 500ms;\n  will-change: transform;\n  cursor: pointer;\n  border-radius: 5px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n  }\n"]))),m=h.ZP.div(c||(c=(0,d.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n"]))),w=t(184),b=function(){var n=(0,p.useState)(null),r=(0,s.Z)(n,2),t=r[0],e=r[1],a=(0,f.UO)().movieId;return(0,p.useEffect)((function(){if(a){var n=function(){var n=(0,u.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.zv)(a);case 3:r=n.sent,e(r.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[a]),t&&(0,w.jsx)(x,{children:t.map((function(n){var r=n.cast_id,t=n.name,e=n.character,a=n.profile_path;return(0,w.jsxs)(l,{children:[(0,w.jsx)(m,{children:(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:t})}),(0,w.jsx)("h2",{children:t}),(0,w.jsx)("p",{children:e})]},r)}))})}},390:function(n,r,t){t.d(r,{Df:function(){return i},TP:function(){return o},qF:function(){return p},tx:function(){return v},zv:function(){return f}});var e=t(861),a=t(757),c=t.n(a),u=t(912),s="b60c32a6f6f2663f6a35c755ff35b4cc";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,e.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie/",{params:{api_key:s,query:r}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.7435d2ec.chunk.js.map