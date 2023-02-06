"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,r,t){t.r(r),t.d(r,{default:function(){return j}});var e,a,u,c,i,s,o=t(861),p=t(439),f=t(757),x=t.n(f),d=t(791),l=t(689),h=t(390),v=t(168),m=t(444),g=m.ZP.ul(e||(e=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),w=m.ZP.li(a||(a=(0,v.Z)(["\n  border-radius: 5px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  text-align: center;\n"]))),Z=m.ZP.div(u||(u=(0,v.Z)(["\n  border-radius: 5px;\n  overflow: hidden;\n  width: 150px;\n  height: 150px;\n"]))),b=m.ZP.div(c||(c=(0,v.Z)(["\n  padding: 4px;\n  width: 142px;\n"]))),k=m.ZP.h2(i||(i=(0,v.Z)(["\n  font-size: 12px;\n  margin-bottom: 4px;\n"]))),y=m.ZP.p(s||(s=(0,v.Z)(["\n  font-size: 12px;\n"]))),_=t(184),j=function(){var n=(0,d.useState)(null),r=(0,p.Z)(n,2),t=r[0],e=r[1],a=(0,l.UO)().movieId;return(0,d.useEffect)((function(){if(a){var n=new AbortController,r=n.signal,t=function(){var n=(0,o.Z)(x().mark((function n(){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.zv)(a,r);case 3:t=n.sent,e(t.cast),n.next=12;break;case 7:if(n.prev=7,n.t0=n.catch(0),"CanceledError"!==n.t0.name){n.next=11;break}return n.abrupt("return");case 11:console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return t(),function(){n.abort()}}}),[a]),t&&(0,_.jsx)(g,{children:t.map((function(n){var r=n.cast_id,t=n.name,e=n.character,a=n.profile_path;return(0,_.jsxs)(w,{children:[(0,_.jsx)(Z,{children:(0,_.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://via.placeholder.com/150x150.png?text=No+photo",alt:t})}),(0,_.jsxs)(b,{children:[(0,_.jsx)(k,{children:t}),(0,_.jsx)(y,{children:e})]})]},r)}))})}},390:function(n,r,t){t.d(r,{Df:function(){return s},TP:function(){return o},qF:function(){return p},tx:function(){return x},zv:function(){return f}});var e=t(861),a=t(757),u=t.n(a),c=t(912),i="b60c32a6f6f2663f6a35c755ff35b4cc";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day",{params:{api_key:i},signal:r});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r),{params:{api_key:i},signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie/",{params:{api_key:i,query:r},signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:i},signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/reviews"),{params:{api_key:i},signal:t});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.202bd04c.chunk.js.map