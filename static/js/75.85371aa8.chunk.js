"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[75],{18:function(r,t,n){n.d(t,{M1:function(){return p},TP:function(){return f},V0:function(){return i},_L:function(){return s},tx:function(){return h}});var e=n(5861),a=n(7757),u=n.n(a),c=n(4569),o=n.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"34dbf9d1a3fd74b10bf7ab9eec59866f",language:"en-US"}}),s=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("trending/movie/day");case 2:if(200===(t=r.sent).status){r.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return r.abrupt("return",t.data);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("/search/movie?/&page=1&query=".concat(t));case 2:if(200===(n=r.sent).status){r.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return r.abrupt("return",n.data);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("/movie/".concat(t));case 2:if(200===(n=r.sent).status){r.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return r.abrupt("return",n.data);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("/movie/".concat(t,"/credits"));case 2:if(200===(n=r.sent).status){r.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return r.abrupt("return",n.data);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o("/movie/".concat(t,"/reviews"));case 2:if(200===(n=r.sent).status){r.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return r.abrupt("return",n.data);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},6075:function(r,t,n){n.r(t);var e=n(885),a=n(2791),u=n(18),c=n(6871),o=n(501),s=n(184);t.default=function(){var r=(0,a.useState)([]),t=(0,e.Z)(r,2),n=t[0],i=t[1],f=(0,c.TH)();return(0,a.useEffect)((function(){(0,u._L)().then((function(r){return i(r.results)}))}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Trending Today"}),n&&(0,s.jsx)("ul",{children:n.map((function(r){return(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"movies/".concat(r.id),state:{from:f},children:r.title})},r.id)}))})]})}}}]);
//# sourceMappingURL=75.85371aa8.chunk.js.map