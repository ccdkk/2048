(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{13:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t.n(r),i=t(8),a=t.n(i),o=(t(13),t.p,t(7),t(2)),u=t(6),s=t(0);var f=function(){var n=new Array(4).fill(0),e=Object(r.useState)(h(n.map((function(){return new Array(4).fill(0)})))),t=Object(u.a)(e,2),c=t[0],i=t[1];function a(n){return h(n)}var f=Object(r.useState)(),d=Object(u.a)(f,2),j=d[0],l=d[1];function h(n){for(var e=n.map((function(n){return Object(o.a)(n)})),t=[],r=0;r<4;r++)for(var c=e[r].indexOf(0);-1!=c;)t.push([r,c]),c=e[r].indexOf(0,c+1);if(0===t.length)return e;var i=t[Math.floor(Math.random()*t.length)];return Math.random()<.8?e[i[0]][i[1]]=2:e[i[0]][i[1]]=4,e}function O(n){for(var e=n.map((function(n){return Object(o.a)(n)})),t=0;t<4;t++)n[t][0]===n[t][1]?(e[t][0]=2*e[t][0],e[t][1]=0,n[t][2]===n[t][3]&&(e[t][2]=2*e[t][2],e[t][3]=0)):n[t][1]===n[t][2]?(e[t][1]=2*e[t][1],e[t][2]=0):n[t][2]===n[t][3]&&(e[t][2]=2*e[t][2],e[t][3]=0);return e}function b(n){for(var e=n.map((function(n){return Object(o.a)(n)})),t=0;t<4;t++)e[t]=n[t].filter((function(n){return 0!==n})).concat(n[t].filter((function(n){return 0===n})));return e}function g(n,e){for(var t=n.map((function(n){return Object(o.a)(n)})),r=n.map((function(n){return Object(o.a)(n)})),c=0;c<e;c++){for(var i=0;i<4;i++)for(var a=0;a<4;a++)t[a][3-i]=r[i][a];r=t.map((function(n){return Object(o.a)(n)}))}return t}function p(n,e){var t=b(g(n,e)),r=g(b(O(t)),4-e);if(JSON.stringify(r)==JSON.stringify(n))i(r);else{var c=a(r);i(c)}}function m(n,e){var t=b(g(n,e)),r=g(b(O(t)),4-e);return JSON.stringify(r)==JSON.stringify(n)?r:a(r)}return window.onkeydown=function(n){37===n.keyCode?p(c,4):38===n.keyCode?p(c,3):39===n.keyCode?p(c,2):40===n.keyCode&&p(c,1)},Object(s.jsxs)(s.Fragment,{children:[function(){for(var n=[],e=0;e<4;e++)JSON.stringify(m(c,e))==JSON.stringify(c)&&n.push(0);if(JSON.stringify(n)==JSON.stringify([0,0,0,0]))return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"game_end",children:Object(s.jsxs)("div",{style:{marginTop:"300px",opacity:"1"},children:[Object(s.jsx)("h1",{style:{fontSize:"50px"},children:"Game Over"}),Object(s.jsx)("h1",{className:"restart",style:{cursor:"pointer",fontSize:"30px"},onClick:function(){return window.location.reload()},children:"New Game"})]})})})}(),function(){for(var n=0;n<4;n++)if(c[n].find((function(n){return 2048==n})))return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"game_end",children:Object(s.jsx)("div",{style:{marginTop:"300px",opacity:"1"},children:Object(s.jsx)("h1",{className:"success",children:"Congratulation !"})})})})}(),Object(s.jsxs)("h1",{className:"score",children:["Score: ",function(){for(var n=0,e=0;e<4;e++)for(var t=0;t<4;t++)n+=c[e][t];return n}()]}),Object(s.jsxs)("table",{onTouchStart:function(n){return l({x:n.changedTouches[0].pageX,y:n.changedTouches[0].pageY})},onTouchEnd:function(n){var e=j.x-n.changedTouches[0].pageX,t=j.y-n.changedTouches[0].pageY;e<-30&&p(c,2),e>30&&p(c,4),t>30&&p(c,3),t<-30&&p(c,1)},children:[Object(s.jsx)("thead",{}),Object(s.jsx)("tbody",{children:c.map((function(n){var e=n.map((function(n){return Object(s.jsx)("td",{className:"color_"+n,children:0===n?"":n})}));return Object(s.jsx)("tr",{children:e})}))})]})]})};var d=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(f,{})})},j=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()},7:function(n,e,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.38fe38db.chunk.js.map