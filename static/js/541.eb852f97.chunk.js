"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[541],{18:function(t,r,n){n.d(r,{M1:function(){return p},TP:function(){return f},V0:function(){return s},_L:function(){return i},tx:function(){return h}});var e=n(5861),a=n(7757),u=n.n(a),c=n(4569),o=n.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"34dbf9d1a3fd74b10bf7ab9eec59866f",language:"en-US"}}),i=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("trending/movie/day");case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("/search/movie?/&page=1&query=".concat(r));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("/movie/".concat(r));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("/movie/".concat(r,"/credits"));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("/movie/".concat(r,"/reviews"));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error("Nothing Found \ud83e\udd37");case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},2541:function(t,r,n){n.r(r);var e=n(885),a=n(2791),u=n(6871),c=n(18),o=n(184);r.default=function(){var t=(0,a.useState)([]),r=(0,e.Z)(t,2),n=r[0],i=r[1],s=(0,u.UO)().movieid;return(0,a.useEffect)((function(){(0,c.M1)(s).then((function(t){return i(t.cast)}))}),[s]),n&&0===n.length?(0,o.jsx)("p",{children:"There is no cast information \ud83e\udd37\ud83c\udffb"}):(0,o.jsx)("ul",{children:n.map((function(t){var r=t.id,n=t.profile_path,e=t.original_name,a=t.name,u=t.character;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w200".concat(n):"https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o=",alt:e}),(0,o.jsx)("h3",{children:a}),(0,o.jsxs)("p",{children:["Character: ",u]})]},r)}))})}}}]);
//# sourceMappingURL=541.eb852f97.chunk.js.map