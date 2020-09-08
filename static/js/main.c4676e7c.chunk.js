(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),s=(a(99),a(25)),l=a.n(s),i=a(37),u=a(14),m=(a(101),a(237)),d=a(238),f=a(239),v=a(231),p=a(235),h=a(2),E=a(236);a(102);var y=function(e){var t=e.title,a=e.isRed,n=e.cases,c=e.active,o=e.total,s=(e.country,Object(h.a)(e,["title","isRed","cases","active","total","country"]));return r.a.createElement(v.a,{onClick:s.onClick,className:"infobox ".concat(c&&"infobox--selected"," ").concat(a&&"infobox--red")},r.a.createElement(p.a,null,r.a.createElement(E.a,{color:"textSecondary",className:"infobox__title"},t),r.a.createElement("h2",{className:"infobox ".concat(!a&&"infobox__cases--green")},n),r.a.createElement(E.a,{className:"infobox__total",color:"textSecondary"},o," total")))},b=a(242),g=a(243),x=(a(106),a(17)),w=a(240),N=a(241),j=a(18),O=a.n(j),_={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},C=function(e){return Object(x.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},k=function(e){return e?"+".concat(O()(e).format("0.0a")):"+0"};var S=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(b.a,{center:n,zoom:c},r.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href = "http://osm.org/copyright">OpenStreet</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:_[t].hex,fillColor:_[t].hex,radius:Math.sqrt(e[t])*_[t].multiplier},r.a.createElement(N.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"infoFlag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"infoName"},e.country),r.a.createElement("div",{className:"infoConfirmed"},"Cases: ",O()(e.cases).format("0,0")),r.a.createElement("div",{className:"infoRecovered"},"Recovered: ",O()(e.recovered).format("0,0")),r.a.createElement("div",{className:"infoDeaths"},"Deaths: ",O()(e.deaths).format("0,0")))))}))}(t,a)))};a(107);var I=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement("strong",null,O()(a).format("0,0"))))})))},R=a(87),D={legend:{display:!1},elements:{points:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return O()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return O()(e).format("0a")}}}]}},T=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var r in e.cases){if(t){var c={x:r,y:e[a][r]-t};n.push(c)}t=e[a][r]}return n};var z=function(e){var t=e.casesType,a=void 0===t?"cases":t,c=Object(h.a)(e,["casesType"]),o=r.a.useState({}),s=Object(u.a)(o,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=60").then((function(e){return e.json()})).then((function(e){var t=T(e,a);d(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement("div",{className:c.className},(null===m||void 0===m?void 0:m.length)>0&&r.a.createElement(R.Line,{data:{datasets:[{data:m,backgroudnColor:"rgba(204, 16, 52, 0.3)",borderColor:"#cc1034"}]},options:D}))};a(204);var M=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=r.a.useState("worldwide"),s=Object(u.a)(o,2),h=s[0],E=s[1],b=r.a.useState({}),g=Object(u.a)(b,2),x=g[0],w=g[1],N=r.a.useState([]),j=Object(u.a)(N,2),O=j[0],_=j[1],R=r.a.useState({lat:34.80746,lng:-40.4796}),D=Object(u.a)(R,2),T=D[0],M=D[1],W=r.a.useState(3),A=Object(u.a)(W,2),B=A[0],L=A[1],F=r.a.useState([]),J=Object(u.a)(F,2),V=J[0],Y=J[1],q=r.a.useState("cases"),$=Object(u.a)(q,2),G=$[0],H=$[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){w(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=C(e);_(a),Y(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){E(a),w(e),M("worldwide"===a?{lat:34.80746,lng:-40.4796}:[e.countryInfo.lat,e.countryInfo.long]),L(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID-19"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(d.a,{variant:"outlined",value:h,onChange:K},r.a.createElement(f.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return r.a.createElement(f.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(y,{isRed:!0,active:"cases"===G,onClick:function(e){return H("cases")},title:"Corona Virus Cases",cases:k(x.todayCases),total:k(x.cases),country:h}),r.a.createElement(y,{active:"recovered"===G,onClick:function(e){return H("recovered")},title:"Recovered",cases:k(x.todayRecovered),total:k(x.recovered),country:h}),r.a.createElement(y,{isRed:!0,active:"deaths"===G,onClick:function(e){return H("deaths")},title:"Deaths",cases:k(x.todayDeaths),total:k(x.deaths),country:h})),r.a.createElement(S,{countries:V,casesType:G,center:T,zoom:B})),r.a.createElement(v.a,{className:"app__right"},r.a.createElement(p.a,null,r.a.createElement("h3",null,"Live Cases By Country"),r.a.createElement(I,{countries:O}),r.a.createElement("h3",{className:"app__graphTitle"},"Worldwide New ",G),r.a.createElement(z,{className:"app__graph",casesType:G}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.c4676e7c.chunk.js.map