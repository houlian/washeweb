(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0177"],{6700:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{ref:"container",staticClass:"promoter-order"},[s("div",{staticClass:"promoterHeader bg-color-red"},[s("div",{staticClass:"headerCon acea-row row-between-wrapper"},[s("div",[s("div",{staticClass:"name"},[t._v("累计推广订单")]),s("div",[s("span",{staticClass:"num"},[t._v(t._s(t.count))]),t._v("单\n        ")])]),s("div",{staticClass:"iconfont icon-2"})])]),s("div",{staticClass:"list"},t._l(t.list,function(a,e){return s("div",{key:e,staticClass:"item"},[s("div",{staticClass:"title acea-row row-column row-center"},[s("div",{staticClass:"data"},[t._v(t._s(a.time))]),s("div",[t._v("本月累计推广订单："+t._s(a.count?a.count:0)+"单")])]),s("div",{staticClass:"listn"},t._l(a.child,function(a,e){return s("div",{key:e,staticClass:"itenm"},[s("div",{staticClass:"top acea-row row-between-wrapper"},[s("div",{staticClass:"pictxt acea-row row-between-wrapper"},[s("div",{staticClass:"pictrue"},[s("img",{attrs:{src:a.avatar}})]),s("div",{staticClass:"text line1"},[t._v(t._s(a.nickname))])]),s("div",{staticClass:"money"},[t._v("\n              返佣："),s("span",{staticClass:"font-color-red"},[t._v("￥"+t._s(a.number?a.number:0))])])]),s("div",{staticClass:"bottom"},[s("div",[s("span",{staticClass:"name"},[t._v("订单号：")]),t._v(t._s(a.order_id))]),s("div",[s("span",{staticClass:"name"},[t._v("下单时间：")]),t._v(t._s(a.time))])])])}),0)])}),0),s("Loading",{attrs:{loaded:t.loaded,loading:t.loading}})],1)},i=[],n=s("c24f"),o=s("3a5e"),d={name:"PromoterOrder",components:{Loading:o["a"]},props:{},data:function(){return{list:[],where:{page:1,limit:15},loaded:!1,loading:!1,loadTitle:"",count:""}},mounted:function(){var t=this;this.getIndex(),this.$scroll(this.$refs.container,function(){!t.loading&&t.getIndex()})},methods:{getIndex:function(){var t=this;1!=t.loaded&&1!=t.loading&&(t.loading=!0,Object(n["B"])(t.where).then(function(a){t.loading=!1,t.loaded=a.data.list.length<t.where.limit,t.loadTitle=t.loaded?"人家是有底线的":"上拉加载更多",t.where.page=t.where.page+1,t.list.push.apply(t.list,a.data.list),t.count=a.data.count},function(a){t.$dialog.message(a.msg)},300))}}},l=d,r=s("2877"),c=Object(r["a"])(l,e,i,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d0177.9014c39e.js.map