(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-249cbda8"],{"563c":function(s,t,a){s.exports=a.p+"h5/img/noAddress.d76a1cef.png"},ab22:function(s,t,a){"use strict";var i=a("e733"),e=a.n(i);e.a},afa3:function(s,t,a){s.exports=a.p+"h5/img/line.05bf1c84.jpg"},bb9a:function(s,t,a){"use strict";a.r(t);var i=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{ref:"container",staticClass:"address-management",class:s.addressList.length<1&&s.page>1?"on":""},[s.addressList.length>0?i("div",{staticClass:"line"},[i("img",{attrs:{src:a("afa3")}})]):s._e(),s._l(s.addressList,function(t,a){return i("div",{key:a,staticClass:"item"},[i("div",{staticClass:"address"},[i("div",{staticClass:"consignee"},[s._v("\n        收货人："+s._s(t.real_name)),i("span",{staticClass:"phone"},[s._v(s._s(t.phone))])]),i("div",[s._v("\n        收货地址："+s._s(t.province)+s._s(t.city)+s._s(t.district)+s._s(t.detail)+"\n      ")])]),i("div",{staticClass:"operation acea-row row-between-wrapper"},[i("div",{staticClass:"select-btn"},[i("div",{staticClass:"checkbox-wrapper"},[i("label",{staticClass:"well-check"},[i("input",{attrs:{type:"radio",name:"default",value:""},domProps:{checked:!!t.is_default},on:{click:function(t){return s.radioChange(a)}}}),i("i",{staticClass:"icon"}),i("span",{staticClass:"default"},[s._v("设为默认")])])])]),i("div",{staticClass:"acea-row row-middle"},[i("div",{on:{click:function(t){return s.editAddress(a)}}},[i("span",{staticClass:"iconfont icon-bianji"}),s._v("编辑\n        ")]),i("div",{on:{click:function(t){return s.delAddress(a)}}},[i("span",{staticClass:"iconfont icon-shanchu"}),s._v("删除\n        ")])])])])}),i("Loading",{attrs:{loaded:s.loadend,loading:s.loading}}),s.addressList.length<1&&s.page>1?i("div",{staticClass:"noCommodity"},[s._m(0)]):s._e(),i("div",{staticStyle:{height:"1.2rem"}}),i("div",{staticClass:"footer acea-row row-between-wrapper"},[s.isWechat?i("div",{staticClass:"addressBnt bg-color-red",on:{click:s.addAddress}},[i("span",{staticClass:"iconfont icon-tianjiadizhi"}),s._v("添加新地址\n    ")]):i("div",{staticClass:"addressBnt on bg-color-red",on:{click:s.addAddress}},[i("span",{staticClass:"iconfont icon-tianjiadizhi"}),s._v("添加新地址\n    ")]),s.isWechat?i("div",{staticClass:"addressBnt wxbnt",on:{click:s.getAddress}},[i("span",{staticClass:"iconfont icon-weixin2"}),s._v("导入微信地址\n    ")]):s._e()])],2)},e=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"noPictrue"},[i("img",{staticClass:"image",attrs:{src:a("563c")}})])}],d=a("c24f"),n=a("3a5e"),c=a("ed08"),o=a("74f9"),r={components:{Loading:n["a"]},data:function(){return{page:1,limit:20,addressList:[],loadTitle:"",loading:!1,loadend:!1,isWechat:Object(c["d"])()}},mounted:function(){var s=this;this.AddressList(),this.$scroll(this.$refs.container,function(){!s.loading&&s.AddressList()})},methods:{AddressList:function(){var s=this;s.loading||s.loadend||(s.loading=!0,Object(d["f"])({page:s.page,limit:s.limit}).then(function(t){s.loading=!1,s.addressList.push.apply(s.addressList,t.data),s.loadend=t.data.length<s.limit,s.page=s.page+1}))},editAddress:function(s){this.$router.push({path:"/user/add_address/"+this.addressList[s].id})},delAddress:function(s){var t=this,a=this.addressList[s],i=a.id;Object(d["g"])(i).then(function(){t.$dialog.toast({mes:"删除成功!",callback:function(){t.addressList.splice(s,1),t.$set(t,"addressList",t.addressList)}})})},radioChange:function(s){var t=this,a=this.addressList[s],i=a.id;Object(d["e"])(i).then(function(){for(var a=0,i=t.addressList.length;a<i;a++)t.addressList[a].is_default=a===s?1:0;t.$set(t,"addressList",t.addressList)})},addAddress:function(){this.$router.push({path:"/user/add_address"})},getAddress:function(){var s=this;Object(o["openAddress"])().then(function(t){s.$dialog.loading.open(),Object(d["J"])({real_name:t.userName,phone:t.telNumber,address:{province:t.provinceName,city:t.cityName,district:t.countryName},detail:t.detailInfo,post_code:t.postalCode,wx_export:1}).then(function(){s.page=1,s.loading=!1,s.loadend=!1,s.addressList=[],s.AddressList(),s.$dialog.loading.close(),s.$dialog.toast({mes:"添加成功"})}).catch(function(t){s.$dialog.loading.close(),s.$dialog.error(t.msg||"添加失败")})})}}},l=r,u=(a("ab22"),a("2877")),p=Object(u["a"])(l,i,e,!1,null,"c7960950",null);t["default"]=p.exports},e733:function(s,t,a){}}]);
//# sourceMappingURL=chunk-249cbda8.0fc4eccd.js.map