(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),c=n.n(r),s=(n(14),n(2)),l=n(3),u=n(5),o=n(4),m=n(6),d=n(1),h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).createTasks=n.createTasks.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"createTasks",value:function(e){var t=this;return i.a.createElement("li",{onClick:function(){return t.delete(e.key)},key:e.key}," ",e.text," ")}},{key:"delete",value:function(e){console.log(e),this.props.delete(e)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return i.a.createElement("ul",{className:"theList"},e)}}]),t}(a.Component),b=(n(16),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={items:[]},n.addItem=n.addItem.bind(Object(d.a)(Object(d.a)(n))),n.deleteItem=n.deleteItem.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addItem",value:function(e){if(""!==this._inputElement){var t={text:this._inputElement.value,key:Date.now()};this.setState(function(e){return{items:e.items.concat(t)}})}this._inputElement.value="",console.log(this.state.items),e.preventDefault()}},{key:"deleteItem",value:function(e){var t=this.state.items.filter(function(t){return t.key!==e});this.setState({items:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"todoListMain"},i.a.createElement("div",{className:"header"},i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{ref:function(t){return e._inputElement=t},placeholder:"enter task..."}),i.a.createElement("button",{type:"submit"},"add"))),i.a.createElement(h,{entries:this.state.items,delete:this.deleteItem}))}}]),t}(a.Component)),f=document.querySelector("#container");c.a.render(i.a.createElement("div",null,i.a.createElement(b,null)),f)},9:function(e,t,n){e.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.1e0686fd.chunk.js.map