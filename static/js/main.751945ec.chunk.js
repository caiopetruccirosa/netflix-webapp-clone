(this["webpackJsonpnetflix-webapp-clone"]=this["webpackJsonpnetflix-webapp-clone"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(6),s=n.n(r),o=n(1),i=n.n(o),u=n(3),l=n(4),d=n(0),v=function(){return Object(d.jsx)("h1",{children:"Hello world!"})},m=(n(13),function(e){var t=e.title,n=e.movies;return Object(d.jsxs)("div",{className:"movierow",children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("div",{className:"movierow--listarea",children:Object(d.jsx)("div",{className:"movierow--list",children:n.results.map((function(e,t){return Object(d.jsx)("div",{className:"movierow--item",children:Object(d.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p").concat("/w500").concat(e.poster_path),alt:e.original_title})},t)}))})})]})}),j=(n(14),function(e){var t=e.movie,n=new Date(t.first_air_date),c=[];for(var a in t.genres)c.push(t.genres[a].name);return Object(d.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original").concat(t.backdrop_path,")")},children:Object(d.jsx)("div",{className:"featured--vertical",children:Object(d.jsxs)("div",{className:"featured--horizontal",children:[Object(d.jsx)("div",{className:"featured--name",children:t.original_name}),Object(d.jsxs)("div",{className:"featured--info",children:[Object(d.jsx)("div",{className:"featured--points",children:t.vote_average}),Object(d.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(d.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporadas"]})]}),Object(d.jsx)("div",{className:"featured--description",children:t.overview}),Object(d.jsx)("div",{className:"featured--buttons"}),Object(d.jsxs)("div",{className:"featured--genres",children:[Object(d.jsx)("strong",{children:"G\xeaneros: "}),c.join(", ")]})]})})})}),f=Object({NODE_ENV:"production",PUBLIC_URL:"/netflix-webapp-clone",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TMDB_API_KEY,g="pt-BR",h=28,p=35,b=27,x=10749,O=99,w="/discover/movie",_="/discover/tv",N="/trending/all/week",k="/movie/top_rated",S="/movie",E="/tv",y=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n="".concat("https://api.themoviedb.org/3").concat(t)).includes("?")?n+="&api_key=".concat(f):n+="?api_key=".concat(f),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D={fetchHomeData:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("".concat(_,"?with_network=").concat(213,"&language=").concat(g));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",movies:e.t0},e.next=6,y("".concat(N,"?with_network=").concat(213,"&language=").concat(g));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",movies:e.t2},e.next=10,y("".concat(k,"?with_network=").concat(213,"&language=").concat(g));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",movies:e.t4},e.next=14,y("".concat(w,"?with_genres=").concat(h,"&language=").concat(g));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",movies:e.t6},e.next=18,y("".concat(w,"?with_genres=").concat(p,"&language=").concat(g));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",movies:e.t8},e.next=22,y("".concat(w,"?with_genres=").concat(b,"&language=").concat(g));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror/Suspense",movies:e.t10},e.next=26,y("".concat(w,"?with_genres=").concat(x,"&language=").concat(g));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",movies:e.t12},e.next=30,y("".concat(w,"?with_genres=").concat(O,"&language=").concat(g));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",movies:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchMovieData:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="","movie"===n?c="".concat(S,"/").concat(t):"tv"===n&&(c="".concat(E,"/").concat(t)),e.next=4,y("".concat(c,"?language=").concat(g));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},T=D,R=(n(15),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(l.a)(r,2),o=s[0],f=s[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c,r,s,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.fetchHomeData();case 2:return t=e.sent,a(t),n=t.filter((function(e){return"originals"===e.slug})),c=Object(l.a)(n,1),r=c[0],s=Math.floor(Math.random()*r.movies.results.length),o=r.movies.results[s],e.next=9,T.fetchMovieData(o.id,"tv");case 9:u=e.sent,f(u);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(v,{}),o&&Object(d.jsx)(j,{movie:o}),n&&n.length>0&&Object(d.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(d.jsx)(m,{title:e.title,movies:e.movies},t)}))})]})});s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.751945ec.chunk.js.map