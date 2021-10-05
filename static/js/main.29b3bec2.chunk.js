(this["webpackJsonpnetflix-webapp-clone"]=this["webpackJsonpnetflix-webapp-clone"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),s=n.n(r),i=n(3),o=n.n(i),u=n(5),l=n(4),d=(n(18),n(0)),j=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){window.scrollY>15?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(d.jsxs)("header",{className:n?"background":"",children:[Object(d.jsx)("div",{className:"header--logo",children:Object(d.jsx)("a",{href:"/",children:Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix"})})}),Object(d.jsx)("div",{className:"header--user",children:Object(d.jsx)("a",{href:"/",children:Object(d.jsx)("img",{src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png",alt:"Usu\xe1rio"})})})]})},m=n(41),v=n(42),h=(n(20),function(e){var t=e.title,n=e.movies,a=150*n.results.length+80,r=Math.round(window.innerWidth/2),s=Object(c.useState)(0),i=Object(l.a)(s,2),o=i[0],u=i[1];return Object(d.jsxs)("div",{className:"movierow",children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("div",{className:"movierow--previous",onClick:function(){var e=o+r;e>0&&(e=0),u(e)},children:Object(d.jsx)(m.a,{style:{fontSize:50}})}),Object(d.jsx)("div",{className:"movierow--next",onClick:function(){var e=o-r;e<window.innerWidth-a&&(e=window.innerWidth-a),u(e)},children:Object(d.jsx)(v.a,{style:{fontSize:50}})}),Object(d.jsx)("div",{className:"movierow--listarea",children:Object(d.jsx)("div",{className:"movierow--list",style:{marginLeft:o,width:a},children:n.results.map((function(e,t){return Object(d.jsx)("div",{className:"movierow--item",children:Object(d.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p").concat("/w500").concat(e.poster_path),alt:e.original_title})},t)}))})})]})}),f=(n(25),function(e){var t=e.lists;return Object(d.jsx)("section",{className:"lists",children:t.map((function(e,t){return Object(d.jsx)(h,{title:e.title,movies:e.movies},t)}))})}),b=(n(26),function(e){var t=e.movie,n=new Date(t.first_air_date),c=[];for(var a in t.genres)c.push(t.genres[a].name);return Object(d.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original").concat(t.backdrop_path,")")},children:Object(d.jsx)("div",{className:"featured--vertical",children:Object(d.jsxs)("div",{className:"featured--horizontal",children:[Object(d.jsx)("div",{className:"featured--name",children:t.original_name}),Object(d.jsxs)("div",{className:"featured--info",children:[Object(d.jsx)("div",{className:"featured--points",children:t.vote_average}),Object(d.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(d.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporada",t.number_of_seasons>1?"s":""]})]}),Object(d.jsx)("div",{className:"featured--description",children:t.overview}),Object(d.jsxs)("div",{className:"featured--buttons",children:[Object(d.jsx)("a",{href:"/watch/".concat(t.id),className:"featured--watchbutton",children:"\u25b6 Assistir"}),Object(d.jsx)("a",{href:"/list/add/".concat(t.id),className:"featured--listbutton",children:"+ Minha Lista"})]}),Object(d.jsxs)("div",{className:"featured--genres",children:[Object(d.jsx)("strong",{children:"G\xeaneros: "}),c.join(", ")]})]})})})}),g="fadc8160b00d6897820716806ddd3138",p="pt-BR",x=28,O=35,w=27,N=10749,_=99,k="/discover/movie",y="/discover/tv",S="/trending/all/week",M="/movie/top_rated",D="/movie",E="/tv",z=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n="".concat("https://api.themoviedb.org/3").concat(t)).includes("?")?n+="&api_key=".concat(g):n+="?api_key=".concat(g),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L={fetchHomeData:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z("".concat(y,"?with_network=").concat(213,"&language=").concat(p));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",movies:e.t0},e.next=6,z("".concat(S,"?with_network=").concat(213,"&language=").concat(p));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",movies:e.t2},e.next=10,z("".concat(M,"?with_network=").concat(213,"&language=").concat(p));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",movies:e.t4},e.next=14,z("".concat(k,"?with_genres=").concat(x,"&language=").concat(p));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",movies:e.t6},e.next=18,z("".concat(k,"?with_genres=").concat(O,"&language=").concat(p));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",movies:e.t8},e.next=22,z("".concat(k,"?with_genres=").concat(w,"&language=").concat(p));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror/Suspense",movies:e.t10},e.next=26,z("".concat(k,"?with_genres=").concat(N,"&language=").concat(p));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",movies:e.t12},e.next=30,z("".concat(k,"?with_genres=").concat(_,"&language=").concat(p));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",movies:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchMovieData:function(){var e=Object(u.a)(o.a.mark((function e(t,n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="","movie"===n?c="".concat(D,"/").concat(t):"tv"===n&&(c="".concat(E,"/").concat(t)),e.next=4,z("".concat(c,"?language=").concat(p));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},A=L,C=(n(27),function(){var e=Object(c.useState)(),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(l.a)(r,2),i=s[0],m=s[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c,r,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.fetchHomeData();case 2:return t=e.sent,a(t),n=t.filter((function(e){return"originals"===e.slug})),c=Object(l.a)(n,1),r=c[0],s=Math.floor(Math.random()*r.movies.results.length),i=r.movies.results[s],e.next=9,A.fetchMovieData(i.id,"tv");case 9:u=e.sent,m(u);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(j,{}),i&&Object(d.jsx)(b,{movie:i}),n&&Object(d.jsx)(f,{lists:n})]})});s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.29b3bec2.chunk.js.map