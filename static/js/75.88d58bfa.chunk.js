"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[75],{18:function(t,n,r){r.d(n,{M1:function(){return d},TP:function(){return h},V0:function(){return p},_L:function(){return f},tx:function(){return v}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),o=r.n(u),i="2951025ecfa7eb766855c73351b1b83e",s="https://api.themoviedb.org/3",f=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/trending/movie/day?api_key=").concat(i));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/search/movie?api_key=").concat(i,"&page=1&query=").concat(n));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/movie/").concat(n,"?api_key=").concat(i));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(i));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(i));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},6075:function(t,n,r){r.r(n);var e=r(885),a=r(2791),c=r(18),u=r(6871),o=r(501),i=r(184);n.default=function(){var t=(0,a.useState)([]),n=(0,e.Z)(t,2),r=n[0],s=n[1],f=(0,u.TH)();return(0,a.useEffect)((function(){(0,c._L)().then((function(t){return s(t.results)}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Trending Today"}),r&&(0,i.jsx)("ul",{children:r.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:"movies/".concat(t.id),state:{from:f},children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=75.88d58bfa.chunk.js.map