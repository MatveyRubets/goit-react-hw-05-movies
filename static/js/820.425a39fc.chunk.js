"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[820],{18:function(t,e,r){r.d(e,{M1:function(){return h},TP:function(){return f},V0:function(){return s},_L:function(){return o},tx:function(){return p}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"34dbf9d1a3fd74b10bf7ab9eec59866f",language:"en-US"}}),o=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("trending/movie/day");case 2:if(200===(e=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("/search/movie?/&page=1&query=".concat(e));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("/movie/".concat(e));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("/movie/".concat(e,"/credits"));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("/movie/".concat(e,"/reviews"));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},4820:function(t,e,r){r.r(e);var n=r(885),a=r(5562),u=r(719),c=r(2791),i=r(501),o=r(6871),s=r(18),f=r(184);e.default=function(){var t=(0,c.useState)(null),e=(0,n.Z)(t,2),r=e[0],h=e[1],p=(0,i.lr)(),d=(0,n.Z)(p,2),l=d[0],v=d[1],w=l.get("query"),x=(0,o.TH)();return(0,c.useEffect)((function(){w&&(0,s.V0)(w).then((function(t){return h(t)}))}),[w]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Search for Any Movie You Want"}),(0,f.jsx)("form",{onSubmit:function(t){t.preventDefault();var e=t.target.elements.query.value.toLowerCase(),r=t.currentTarget;v({query:e}),r.reset(),""!==e.trim()||a.Notify.failure("Please,check the correct spelling of the movie title and try again")},children:(0,f.jsxs)("label",{children:[(0,f.jsx)("input",{name:"query",type:"text"}),(0,f.jsx)("button",{type:"submit",children:(0,f.jsx)("span",{children:(0,f.jsx)(u.wTD,{})})})]})}),(0,f.jsxs)("ul",{children:[r&&r.results.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(t.id),state:{from:x},children:t.title})},t.id)})),r&&0===r.total_results&&a.Notify.warning("There are no movies matching your query!")]})]})}}}]);
//# sourceMappingURL=820.425a39fc.chunk.js.map