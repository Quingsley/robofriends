(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(12),n(1)),i=n(2),s=n(4),u=n(3),h=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?200*200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},d=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Ooops. That is not good "):this.props.children}}]),n}(a.Component),p=(n(13),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){return e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(m,{robots:a})))):r.a.createElement("h1",null,"Loading")}}]),n}(a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})};n(14);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),g()},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.846208e6.chunk.js.map