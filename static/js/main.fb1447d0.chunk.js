(this.webpackJsonpreact_17=this.webpackJsonpreact_17||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(6),s=n.n(o),r=(n(12),n(1)),i=n(2),u=n(3),l=n(4),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={count:Math.round(t.props.time/60),start:!0,width:100,change:(100/Math.round(t.props.time/60)).toFixed(4)},t.startTime=function(){t.setState({start:!0})},t.pauseTime=function(){t.setState({start:!1,count:t.state.count})},t.changeCount=function(){t.setState({count:t.state.count-t.props.step})},t.changeWidth=function(){t.setState({width:t.state.width-t.state.change})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.state.start?0!==t.state.count&&(t.props.onTick(t.state),t.startTime(),t.changeCount(),t.changeWidth()):t.pauseTime()}),1e3)}},{key:"render",value:function(){return c.a.createElement("div",{className:"timer"},c.a.createElement("h2",{className:"seconds"},"Time: ",this.state.count," seconds!"),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{onClick:this.pauseTime},"pause"),c.a.createElement("button",{onClick:this.startTime},"start")),c.a.createElement("div",{className:"polosa",style:{width:this.state.width+"%"}}))}}]),n}(a.Component),p=(n(13),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).onTick=function(){console.log("\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "+t.state.time)},t}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,{time:12e3,step:1,onTick:function(t){return console.log("\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "+t.count)}}),c.a.createElement(m,{time:48e3,step:2,onTick:function(t){return console.log("\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "+t.count)}}))}}]),n}(a.Component));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.fb1447d0.chunk.js.map