(this["webpackJsonphssoft-assignment"]=this["webpackJsonphssoft-assignment"]||[]).push([[0],{27:function(e,n,a){e.exports=a(38)},32:function(e,n,a){},33:function(e,n,a){},38:function(e,n,a){"use strict";a.r(n);var t=a(3),l=a.n(t),r=a(18),c=a.n(r),i=(a(32),a(33),a(14)),o=a(19),s=a(15),u=a(20);function d(){var e=Object(o.a)(["\n    {\n        continents {\n            code\n            name\n            countries {\n                code\n                name\n                languages {\n                    code\n                    name\n                }\n            }\n        }\n    }\n"]);return d=function(){return e},e}var m=a.n(u)()(d()),f=l.a.createContext(null),h=function(e){var n=Object(s.a)(m),a=n.data,r=n.loading,c=n.error,o=Object(t.useState)({first:null,second:null}),u=Object(i.a)(o,2),d=u[0],h=u[1];return l.a.createElement(f.Provider,{value:{data:a,loading:r,error:c,display:d,setDisplay:h}},e.children)},g=function(e){return function n(a,t){return a.map((function(a){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{onClick:function(n){var l,r;!t&&a.children.length&&e.changeDisplay(a.name),t&&(null===a||void 0===a||null===(l=a.children)||void 0===l?void 0:l.length)&&!e.display.second&&e.changeDisplay(t,a.name),t&&(null===a||void 0===a||null===(r=a.children)||void 0===r?void 0:r.length)&&e.display.second&&e.changeDisplay(t,a.name)},key:a.name+"_li",name:a.name,className:"li-block"},a.name),a.children&&e.display.first===a.name&&l.a.createElement("ul",{key:a.name+"_ul"},n(a.children,a.name)),a.children&&t&&e.display.second===a.name&&l.a.createElement("ul",{key:a.name+"_ul"},n(a.children,a.name)))}))}(e.data)},p=function(e){var n=Object(t.useContext)(f),a=n.data,r=n.loading,c=n.error,o=n.setDisplay,s=n.display,u=Object(t.useState)(null),d=Object(i.a)(u,2),m=d[0],h=d[1];return Object(t.useEffect)((function(){if(a){var e=Object.keys(a).toString(),n=function(e){return Object.keys(e).find((function(n){return e[n]instanceof Array}))},t=a[e].map((function(e){var a=function e(a){return a.map((function(a){var t=n(a);return{name:a.name,code:a.code,children:t?e(a[t]):null}}))}(e[n(e)]);return{name:e.name,code:e.code,children:a}}));h(t)}}),[a,s,o]),l.a.createElement(l.a.Fragment,null,r&&l.a.createElement("h1",null,"Loading..."),c&&l.a.createElement("h1",null,c),m&&l.a.createElement("ul",{className:"right-align continent"},l.a.createElement(g,{data:m,display:s,changeDisplay:function(e,n){o({first:s.first!==e||n||s.first===e&&s.second===n?e:null,second:s.second===n?null:n})}})))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"continents-list"},l.a.createElement(h,null,l.a.createElement(p,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(10),E=a(25),b=a(26),k=a(7),w=new E.a,j=new b.a({uri:"https://countries.trevorblades.com/"}),O=new y.a({cache:w,link:j});c.a.render(l.a.createElement(k.a,{client:O},l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.d2b49638.chunk.js.map