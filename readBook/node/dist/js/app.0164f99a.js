(function(t){function e(e){for(var a,i,s=e[0],l=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17b6":function(t,e,n){"use strict";var a=n("9fad"),r=n.n(a);r.a},4805:function(t,e,n){"use strict";var a=n("8ce0"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={name:"app"},s=i,l=n("2877"),u=Object(l["a"])(s,r,o,!1,null,null,null),c=u.exports,d=n("9bfb"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),t._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],v={name:"HelloWorld",props:{msg:String}},h=v,g=(n("4805"),Object(l["a"])(h,f,p,!1,null,"b9167eee",null)),b=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"查看列表","right-text":"新增图书"},on:{"click-right":t.onClickRight}}),t._l(t.bookList,(function(e,a){return n("van-card",{key:a,attrs:{price:e.price,desc:e.info,title:e.title,thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"}},[n("div",{attrs:{slot:"tags"},slot:"tags"},[n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v(t._s(e.tag))])],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("van-button",{attrs:{size:"mini"},on:{click:function(n){return t.edit(e._id)}}},[t._v("编辑")]),n("van-button",{attrs:{size:"mini"},on:{click:function(n){return t.dell(e._id,a)}}},[t._v("删除")])],1)])}))],2)},m=[],k=(n("a434"),{created:function(){var t=this;this.$axios({method:"get",url:"/getBookList",data:null}).then((function(e){t.bookList=e.data}))},data:function(){return{bookList:[]}},methods:{onClickRight:function(){this.$router.push({path:"/add"})},edit:function(t){this.$router.push({path:"/add?id="+t})},dell:function(t,e){var n=this;this.$axios({method:"delete",url:"/deleteBook",params:{id:t}}).then((function(t){"success"==t.data&&(n.$notify({type:"success",message:"删除成功"}),n.bookList.splice(e,1))}))}}}),y=k,j=Object(l["a"])(y,_,m,!1,null,"05578d70",null),w=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"图书管理","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-field",{attrs:{label:"图书标题"},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}}),n("van-field",{attrs:{label:"图书信息"},model:{value:t.data.info,callback:function(e){t.$set(t.data,"info",e)},expression:"data.info"}}),n("van-field",{attrs:{label:"标签"},model:{value:t.data.tag,callback:function(e){t.$set(t.data,"tag",e)},expression:"data.tag"}}),n("van-field",{attrs:{type:"number",label:"价格"},model:{value:t.data.price,callback:function(e){t.$set(t.data,"price",e)},expression:"data.price"}}),n("p",[t._v("封面")]),n("van-uploader",{attrs:{"after-read":t.afterRead}}),n("div",[n("van-button",{staticClass:"addBtn",attrs:{type:"info"},on:{click:t.addNewBook}},[t._v("提交")])],1)],1)},x=[],O={data:function(){return{id:null,data:{title:"",info:"",tag:"",price:""}}},created:function(){var t=this,e=this.$route.query.id;e&&(this.id=e,this.$axios({method:"get",url:"/getBookInfo",params:{id:e}}).then((function(e){t.data=e.data[0]})))},methods:{afterRead:function(t){window.console.log(t)},onClickLeft:function(){history.go(-1)},addNewBook:function(){var t=this,e=this.data;if(this.id)return e.id=this.id,void this.$axios({method:"put",url:"/editBook",data:e}).then((function(e){"success"==e.data&&(t.$notify({type:"success",message:"新增成功"}),setTimeout((function(){history.go(-1)}),1e3))}));this.$axios({method:"post",url:"/addBook",data:e}).then((function(e){"success"==e.data&&(t.$notify({type:"success",message:"新增成功"}),setTimeout((function(){history.go(-1)}),1e3))}))}}},C=O,E=(n("17b6"),Object(l["a"])(C,$,x,!1,null,"64924e5c",null)),L=E.exports;a["a"].use(d["a"]);var B=new d["a"]({routes:[{path:"/",name:"HelloWorld",component:b},{path:"/add",name:"add",component:L},{path:"/look",name:"look",component:w}]}),P=(n("44ce"),n("b4a6")),S=(n("e76c"),n("bc3a")),T=n.n(S);a["a"].use(P["a"]),a["a"].config.productionTip=!1,a["a"].prototype.$axios=T.a,new a["a"]({render:function(t){return t(c)},router:B}).$mount("#app")},"8ce0":function(t,e,n){},"9fad":function(t,e,n){}});
//# sourceMappingURL=app.0164f99a.js.map