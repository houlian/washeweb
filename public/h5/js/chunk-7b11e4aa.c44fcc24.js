(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b11e4aa"],{"3b8d":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("795b"),i=r.n(n);function o(e,t,r,n,o,a,c){try{var s=e[a](c),u=s.value}catch(l){return void r(l)}s.done?t(u):i.a.resolve(u).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new i.a(function(n,i){var a=e.apply(t,r);function c(e){o(a,n,i,c,s,"next",e)}function s(e){o(a,n,i,c,s,"throw",e)}c(void 0)})}}},"50fc":function(e,t,r){"use strict";r.d(t,"d",function(){return i}),r.d(t,"e",function(){return o}),r.d(t,"c",function(){return a}),r.d(t,"h",function(){return c}),r.d(t,"i",function(){return s}),r.d(t,"b",function(){return u}),r.d(t,"a",function(){return l}),r.d(t,"g",function(){return d}),r.d(t,"f",function(){return f}),r.d(t,"j",function(){return v}),r.d(t,"k",function(){return p});var n=r("b775");function i(){return n["a"].get("/admin/order/statistics",{},{login:!0})}function o(e){return n["a"].get("/admin/order/data",e,{login:!0})}function a(e){return n["a"].get("/admin/order/list",e,{login:!0})}function c(e){return n["a"].post("/admin/order/price",e,{login:!0})}function s(e){return n["a"].post("/admin/order/remark",e,{login:!0})}function u(e){return n["a"].get("/admin/order/detail/"+e,{},{login:!0})}function l(e){return n["a"].get("/admin/order/delivery/gain/"+e,{},{login:!0})}function d(e){return n["a"].post("/admin/order/delivery/keep",e,{login:!0})}function f(e){return n["a"].get("/admin/order/time",e,{login:!0})}function v(e){return n["a"].post("/admin/order/offline",e,{login:!0})}function p(e){return n["a"].post("/admin/order/refund",e,{login:!0})}},"61f7":function(e,t,r){"use strict";r.d(t,"e",function(){return a}),r.d(t,"a",function(){return d}),r.d(t,"d",function(){return f}),r.d(t,"b",function(){return y});var n=r("bd86"),i=(r("ac6a"),r("456d"),r("cebc")),o=(r("a481"),function(e,t){e.message=function(e){return t.replace("%s",e||"")}});function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])({required:!0,message:e,type:"string"},t)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])({type:"url",message:e},t)}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i["a"])({type:"email",message:e},t)}function u(e){return w.pattern(/^[\w]+$/,e)}function l(e){return w.pattern(/^[\w\d_-]+$/,e)}function d(e){return w.pattern(/^[\w\d]+$/,e)}function f(e){return w.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,e)}function v(e){return w.pattern(/^[\u4e00-\u9fa5]+$/,e)}function p(e){return w.pattern(/^[\u4e00-\u9fa5\w]+$/,e)}function h(e){return w.pattern(/^[\u4e00-\u9fa5\w\d]+$/,e)}function m(e){return w.pattern(/^[\u4e00-\u9fa5\w\d-_]+$/,e)}function y(e){return w.pattern(/^1(3|4|5|7|8|9|6)\d{9}$/i,e)}o(a,"请输入%s"),o(c,"请输入正确的链接"),o(s,"请输入正确的邮箱地址"),o(u,"%s必须是字母"),o(l,"%s只能包含由字母、数字，以及 - 和 _"),o(d,"%s只能包含字母、数字"),o(f,"%s格式不正确"),o(v,"%s只能是汉字"),o(p,"%s只能包含汉字、字母"),o(h,"%s只能包含汉字、字母和数字"),o(m,"%s只能包含由汉字、字母、数字，以及 - 和 _"),o(y,"请输入正确的手机号码");var g={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"},w=Object.keys(g).reduce(function(e,t){return e[t]=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="range"===t?{min:e[0],max:e[1]}:Object(n["a"])({},t,e);return Object(i["a"])({message:r.replace(":".concat(t),"range"===t?"".concat(e[0],"-").concat(e[1]):e),type:"string"},a,o)},o(e[t],g[t]),e},{});t["c"]=w},"795b":function(e,t,r){e.exports=r("696e")},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r,n){var i=t&&t.prototype instanceof h?t:h,o=Object.create(i.prototype),a=new E(n||[]);return o._invoke=j(e,r,a),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var l="suspendedStart",d="suspendedYield",f="executing",v="completed",p={};function h(){}function m(){}function y(){}var g={};g[o]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w($([])));_&&_!==r&&n.call(_,o)&&(g=_);var b=y.prototype=h.prototype=Object.create(g);function x(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function L(e){function t(r,i,o,a){var c=u(e[r],e,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,o,a)},function(e){t("throw",e,o,a)}):Promise.resolve(l).then(function(e){s.value=e,o(s)},function(e){return t("throw",e,o,a)})}a(c.arg)}var r;function i(e,n){function i(){return new Promise(function(r,i){t(e,n,r,i)})}return r=r?r.then(i,i):i()}this._invoke=i}function j(e,t,r){var n=l;return function(i,o){if(n===f)throw new Error("Generator is already running");if(n===v){if("throw"===i)throw o;return N()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?v:d,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}function O(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=u(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function $(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){while(++i<e.length)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return m.prototype=b.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(L.prototype),L.prototype[a]=function(){return this},e.AsyncIterator=L,e.async=function(t,r,n,i){var o=new L(s(t,r,n,i));return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},x(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=$,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},afa3:function(e,t,r){e.exports=r.p+"h5/img/line.05bf1c84.jpg"},da81:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"deliver-goods"},[r("header",[r("div",{staticClass:"order-num acea-row row-between-wrapper"},[r("div",{staticClass:"num line1"},[e._v("订单号："+e._s(e.order_id))]),r("div",{staticClass:"name line1"},[r("span",{staticClass:"iconfont icon-yonghu2"}),e._v(e._s(e.delivery.nickname)+"\n      ")])]),r("div",{staticClass:"address"},[r("div",{staticClass:"name"},[e._v("\n        "+e._s(e.delivery.real_name)),r("span",{staticClass:"phone"},[e._v(e._s(e.delivery.user_phone))])]),r("div",[e._v(e._s(e.delivery.user_address))])]),e._m(0)]),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("发货方式")]),r("div",{staticClass:"mode acea-row row-middle row-right"},e._l(e.types,function(t,n){return r("div",{key:n,staticClass:"goods",class:e.active===n?"on":"",on:{click:function(r){return e.changeType(t,n)}}},[e._v("\n          "+e._s(t.title)),r("span",{staticClass:"iconfont icon-xuanzhong2"})])}),0)]),r("div",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active === 0"}],staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("发货方式")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.delivery_name,expression:"delivery_name"}],staticClass:"mode",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.delivery_name=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[e._v("选择快递公司")]),e._l(e.logistics,function(t,n){return r("option",{key:n,domProps:{value:t.name}},[e._v(e._s(t.name))])})],2),r("span",{staticClass:"iconfont icon-up"})]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("快递单号")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.delivery_id,expression:"delivery_id"}],staticClass:"mode",attrs:{type:"text",placeholder:"填写快递单号"},domProps:{value:e.delivery_id},on:{input:function(t){t.target.composing||(e.delivery_id=t.target.value)}}})])]),r("div",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active === 1"}],staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("送货人")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.delivery_name,expression:"delivery_name"}],staticClass:"mode",attrs:{type:"text",placeholder:"填写送货人"},domProps:{value:e.delivery_name},on:{input:function(t){t.target.composing||(e.delivery_name=t.target.value)}}})]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("送货电话")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.delivery_id,expression:"delivery_id"}],staticClass:"mode",attrs:{type:"text",placeholder:"填写送货电话"},domProps:{value:e.delivery_id},on:{input:function(t){t.target.composing||(e.delivery_id=t.target.value)}}})])])]),r("div",{staticStyle:{height:"1.2rem"}}),r("div",{staticClass:"confirm",on:{click:e.saveInfo}},[e._v("确认提交")])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line"},[n("img",{attrs:{src:r("afa3")}})])}],o=(r("96cf"),r("3b8d")),a=r("50fc"),c=r("e876"),s=r("61f7"),u=r("cba2"),l={name:"GoodsDeliver",components:{},props:{},data:function(){return{types:[{type:"express",title:"发货"},{type:"send",title:"送货"},{type:"fictitious",title:"无需发货"}],active:0,order_id:"",delivery:[],logistics:[],delivery_type:"express",delivery_name:"",delivery_id:""}},watch:{"$route.params.oid":function(e){var t=this;void 0!=e&&(t.order_id=e,t.getIndex())}},mounted:function(){this.order_id=this.$route.params.oid,this.getIndex(),this.getLogistics()},methods:{changeType:function(e,t){this.active=t,this.delivery_type=e.type,this.delivery_name="",this.delivery_id=""},getIndex:function(){var e=this;Object(a["a"])(e.order_id).then(function(t){e.delivery=t.data},function(t){e.$dialog.error(t.msg)})},getLogistics:function(){var e=this;Object(c["g"])().then(function(t){e.logistics=t.data},function(t){e.$dialog.error(t.msg)})},saveInfo:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,r,n,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this,r=t.delivery_type,n=t.delivery_name,i=t.delivery_id,o={},o.order_id=t.order_id,o.delivery_type=t.delivery_type,e.t0=r,e.next="send"===e.t0?6:"express"===e.t0?18:"fictitious"===e.t0?30:32;break;case 6:return e.prev=6,e.next=9,this.$validator({delivery_name:[Object(s["e"])(s["e"].message("快递公司"))],delivery_id:[Object(s["e"])(s["e"].message("快递单号"))]}).validate({delivery_name:n,delivery_id:i});case 9:e.next=14;break;case 11:return e.prev=11,e.t1=e["catch"](6),e.abrupt("return",Object(u["b"])(e.t1));case 14:return o.delivery_name=n,o.delivery_id=i,t.setInfo(o),e.abrupt("break",32);case 18:return e.prev=18,e.next=21,this.$validator({delivery_name:[Object(s["e"])(s["e"].message("发货人姓名"))],delivery_id:[Object(s["e"])(s["e"].message("发货人电话"))]}).validate({delivery_name:n,delivery_id:i});case 21:e.next=26;break;case 23:return e.prev=23,e.t2=e["catch"](18),e.abrupt("return",Object(u["b"])(e.t2));case 26:return o.delivery_name=n,o.delivery_id=i,t.setInfo(o),e.abrupt("break",32);case 30:return t.setInfo(o),e.abrupt("break",32);case 32:case"end":return e.stop()}},e,this,[[6,11],[18,23]])}));function t(){return e.apply(this,arguments)}return t}(),setInfo:function(e){var t=this;console.log(e),Object(a["g"])(e).then(function(e){t.$dialog.success(e.msg),t.$router.go(-1)},function(e){t.$dialog.error(e.msg)})}}},d=l,f=r("2877"),v=Object(f["a"])(d,n,i,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-7b11e4aa.c44fcc24.js.map