"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[427],{7427:function(t,n,e){e.r(n),e.d(n,{default:function(){return o}});var r=e(885),a=e(2791),u=e(6226),c=e(3081),s="HomePage_list__NyQn+",i=e(184);function o(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],o=n[1];return(0,a.useEffect)((function(){(0,u.Vu)().then((function(t){return o(t)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:s,children:"Trending Today"}),(0,i.jsx)(c.Z,{data:e})]})}},6226:function(t,n,e){e.d(n,{Uh:function(){return f},Vu:function(){return o},kT:function(){return p}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),s=e.n(c);s().defaults.baseURL="https://api.themoviedb.org/3";var i="ebd6af47dadeec3d22920a3fb94e7c4a",o=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/trending/movie/day?page=1&api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:"",t.next=3,s().get("/movie/".concat(n).concat(e,"?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=427.ec048938.chunk.js.map