(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(29),o=a.n(l),i=(a(38),a(2)),s=a(3),m=a(5),u=a(4),d=a(6),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("nav",{className:"navbar",style:{backgroundColor:"#FF7777"}},c.a.createElement("a",{href:"#",className:"navbar-brand "},c.a.createElement("img",{src:"https://seeklogo.com/images/P/partly-sunny-weather-symbo-logo-FE1CF4CAE5-seeklogo.com.gif",style:{height:"3rem",width:"3rem",margin_left:"2rem"}})),c.a.createElement("ul",{className:"nav justify-content-end"})))}}]),t}(c.a.Component),E=a(16),p=(a(39),a(13)),b=(n={Icon:""},Object(E.a)(n,"Icon",""),Object(E.a)(n,"Icon",""),n),g=[{url:"/india",name:"India",icon:b.Icon,activeIcon:b.Icon},{url:"/russia",name:"Russia",icon:b.Icon,activeIcon:b.Icon},{url:"/canada",name:"Canada",icon:b.Icon,activeIcon:b.Icon},{url:"/australia",name:"Australia",icon:b.Icon,activeIcon:b.Icon},{url:"/brazil",name:"Brazil",icon:b.Icon,activeIcon:b.Icon}],f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isSidebar:!0},a.handleClick=function(){a.setState((function(e){return{isSidebar:!e.isSidebar}}))},a.dashboardRoute=function(e){console.log(e.name)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isSidebar;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2 off-set-2"},t?c.a.createElement(c.a.Fragment,null,g.map((function(t,a){return c.a.createElement("div",{className:"siedbarLinks",key:a},c.a.createElement("img",{src:t.icon,alt:"",className:"icons"}),c.a.createElement(p.b,{className:"links",to:t.url,onClick:function(){return e.dashboardRoute(t)}},t.name))}))):""),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("img",{src:"https://videohive.img.customer.envatousercontent.com/files/1616804/Preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=5891ba8b802b66c8174a9b90534bd7dc",className:"weatherimage",alt:""}))),c.a.createElement("style",{jsx:"true"},"\n            .list-group-item {\n              border: none;\n            }\n            .icons {\n              padding: 0rem 1rem 0rem 0rem;\n            }\n            .siedbarLinks {\n              padding: 0.8rem 0rem 1rem 2rem;\n              background-color: #3F3F3F;\n              height: 6rem;\n              margin-left: 1rem;\n            }\n            .siedbarLinks1 {\n              padding: 0.8rem 0rem 1rem 2rem;\n              background: #3aec69 0% 0% no-repeat padding-box;\n              background-color: #1f1f14;\n              opacity: 0.5;\n            }\n            .links {\n              color: white;\n              opacity: 0.6;\n            }\n            .weatherimage{\n              margin-left: 7rem;\n              height: 30rem;\n              width: 66rem;\n            }\n          "))}}]),t}(c.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"column"},c.a.createElement("div",null,c.a.createElement(h,null)),c.a.createElement("div",null,c.a.createElement(f,null)))}}]),t}(c.a.Component),v=a(11),O=a(32),y=a.n(O).a.create({baseURL:"http://api.weatherstack.com/current?access_key=6ae470ea28f70f3481a461a68dd96cbb&query="}),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){Promise.all([y.get("Mumbai"),y.get("Delhi"),y.get("Bangalore"),y.get("Hyderabad"),y.get("Ahmedabad"),y.get("Berhampur")]).then((function(e){var t=e;a.setState({weather:t})})).catch((function(e){console.log(e)}))},a.state={cities:["Mumbai","Delhi","Bangalore","Hyderabad","Ahmedabad","Berhampur"],weather:[],place:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.state.weather,"weather"),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("br",null),c.a.createElement("h2",null," Listing Weather Report Of India - ",this.state.cities.length),c.a.createElement("br",null),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Place"),c.a.createElement("th",{scope:"col"},"Time"),c.a.createElement("th",{scope:"col"},"Temperature"),c.a.createElement("th",{scope:"col"},"Icon"),c.a.createElement("th",{scope:"col"},"Description"),c.a.createElement("th",{scope:"col"},"Wind Speed"))),c.a.createElement("tbody",null,this.state.weather.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.data.location.name),c.a.createElement("td",null,e.data.current.observation_time),c.a.createElement("td",null,e.data.current.temperature),c.a.createElement("td",null,e.data.current.weather_icons),c.a.createElement("td",null,e.data.current.weather_descriptions),c.a.createElement("td",null,e.data.current.wind_speed))})))))}}]),t}(c.a.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){Promise.all([y.get("Moscow"),y.get("Saint Petersburg"),y.get("Novosibirsk"),y.get("Yekaterinburg"),y.get("Kazan"),y.get("Chelyabinsk")]).then((function(e){var t=e;a.setState({weather:t})})).catch((function(e){console.log(e)}))},a.state={cities:["Moscow","Saint Petersburg","Novosibirsk","Yekaterinburg","Kazan","Chelyabinsk"],weather:[],place:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.state.weather,"weather"),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("br",null),c.a.createElement("h2",null," Listing Weather Report Of Russia - ",this.state.cities.length),c.a.createElement("br",null),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Place"),c.a.createElement("th",{scope:"col"},"Time"),c.a.createElement("th",{scope:"col"},"Temperature"),c.a.createElement("th",{scope:"col"},"Icon"),c.a.createElement("th",{scope:"col"},"Description"),c.a.createElement("th",{scope:"col"},"Wind Speed"))),c.a.createElement("tbody",null,this.state.weather.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.data.location.name),c.a.createElement("td",null,e.data.current.observation_time),c.a.createElement("td",null,e.data.current.temperature),c.a.createElement("td",null,e.data.current.weather_icons),c.a.createElement("td",null,e.data.current.weather_descriptions),c.a.createElement("td",null,e.data.current.wind_speed))})))))}}]),t}(c.a.Component),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){Promise.all([y.get("Toronto"),y.get("Montreal"),y.get("Ottawa"),y.get("Calgary"),y.get("Edmonton"),y.get("Victoria")]).then((function(e){var t=e;a.setState({weather:t})})).catch((function(e){console.log(e)}))},a.state={cities:["Toronto","Montreal","Ottawa","Calgary","Edmonton","Victoria"],weather:[],place:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.state.weather,"weather"),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("br",null),c.a.createElement("h2",null," Listing Weather Report Of Canada - ",this.state.cities.length),c.a.createElement("br",null),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Place"),c.a.createElement("th",{scope:"col"},"Time"),c.a.createElement("th",{scope:"col"},"Temperature"),c.a.createElement("th",{scope:"col"},"Icon"),c.a.createElement("th",{scope:"col"},"Description"),c.a.createElement("th",{scope:"col"},"Wind Speed"))),c.a.createElement("tbody",null,this.state.weather.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.data.location.name),c.a.createElement("td",null,e.data.current.observation_time),c.a.createElement("td",null,e.data.current.temperature),c.a.createElement("td",null,e.data.current.weather_icons),c.a.createElement("td",null,e.data.current.weather_descriptions),c.a.createElement("td",null,e.data.current.wind_speed))})))))}}]),t}(c.a.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){Promise.all([y.get("Sydney"),y.get("Melbourne"),y.get("Brisbane"),y.get("Perth"),y.get("Canberra"),y.get("Hobart")]).then((function(e){var t=e;a.setState({weather:t})})).catch((function(e){console.log(e)}))},a.state={cities:["Sydney","Melbourne","Brisbane","Perth","Canberra","Hobart"],weather:[],place:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.state.weather,"weather"),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("br",null),c.a.createElement("h2",null," Listing Weather Report Of Australia - ",this.state.cities.length),c.a.createElement("br",null),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Place"),c.a.createElement("th",{scope:"col"},"Time"),c.a.createElement("th",{scope:"col"},"Temperature"),c.a.createElement("th",{scope:"col"},"Icon"),c.a.createElement("th",{scope:"col"},"Description"),c.a.createElement("th",{scope:"col"},"Wind Speed"))),c.a.createElement("tbody",null,this.state.weather.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.data.location.name),c.a.createElement("td",null,e.data.current.observation_time),c.a.createElement("td",null,e.data.current.temperature),c.a.createElement("td",null,e.data.current.weather_icons),c.a.createElement("td",null,e.data.current.weather_descriptions),c.a.createElement("td",null,e.data.current.wind_speed))})))))}}]),t}(c.a.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){Promise.all([y.get("Bras\xedlia"),y.get("Salvador"),y.get("Curitiba"),y.get("Recife"),y.get("Goi\xe2nia"),y.get("Bel\xe9m")]).then((function(e){var t=e;a.setState({weather:t})})).catch((function(e){console.log(e)}))},a.state={cities:["Bras\xedlia","Salvador","Curitiba","Recife","Goi\xe2nia","Bel\xe9m"],weather:[],place:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.state.weather,"weather"),c.a.createElement("div",{className:"container mt-5"},c.a.createElement("br",null),c.a.createElement("h2",null," Listing Weather Report Of Brazil - ",this.state.cities.length),c.a.createElement("br",null),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Place"),c.a.createElement("th",{scope:"col"},"Time"),c.a.createElement("th",{scope:"col"},"Temperature"),c.a.createElement("th",{scope:"col"},"Icon"),c.a.createElement("th",{scope:"col"},"Description"),c.a.createElement("th",{scope:"col"},"Wind Speed"))),c.a.createElement("tbody",null,this.state.weather.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.data.location.name),c.a.createElement("td",null,e.data.current.observation_time),c.a.createElement("td",null,e.data.current.temperature),c.a.createElement("td",null,e.data.current.weather_icons),c.a.createElement("td",null,e.data.current.weather_descriptions),c.a.createElement("td",null,e.data.current.wind_speed))})))))}}]),t}(c.a.Component);var _=function(){return c.a.createElement(p.a,null,c.a.createElement(v.c,null,c.a.createElement(v.a,{path:"/",component:w,exact:!0}),c.a.createElement(v.a,{path:"/india",component:j,exact:!0}),c.a.createElement(v.a,{path:"/russia",component:k,exact:!0}),c.a.createElement(v.a,{path:"/canada",component:I,exact:!0}),c.a.createElement(v.a,{path:"/australia",component:C,exact:!0}),c.a.createElement(v.a,{path:"/brazil",component:N,exact:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4d8668c3.chunk.js.map