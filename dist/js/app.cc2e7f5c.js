(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-06448e99":"82f58341","chunk-229c85cd":"8a1e6af5","chunk-23a166ba":"231ae28d","chunk-4f29891f":"0eaf904c","chunk-307ab0f4":"6dbfe950","chunk-069c74b0":"4404fb1a","chunk-f36817e8":"7f29d8e6","chunk-72e2009a":"8d3d8327","chunk-b20dbee2":"48cc5055","chunk-e6463576":"e6b456fe"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-06448e99":1,"chunk-229c85cd":1,"chunk-23a166ba":1,"chunk-307ab0f4":1,"chunk-069c74b0":1,"chunk-f36817e8":1,"chunk-72e2009a":1,"chunk-b20dbee2":1,"chunk-e6463576":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-06448e99":"fcd52dac","chunk-229c85cd":"6ae15e8c","chunk-23a166ba":"fe0843bd","chunk-4f29891f":"31d6cfe0","chunk-307ab0f4":"849c5744","chunk-069c74b0":"a83b1302","chunk-f36817e8":"50d4666f","chunk-72e2009a":"5a42e443","chunk-b20dbee2":"53ab5a75","chunk-e6463576":"726614d1"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f1e":function(e,t,n){"use strict";var r=n("9822"),a=function(e,t){return localStorage.setItem(e,JSON.stringify(t)),!0},o=function(e){var t=null;return localStorage.getItem(e)&&(t=localStorage.getItem(e)),t},c=function(e){return localStorage.removeItem(e)},u=function(e){return JSON.parse(JSON.stringify(e))},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=r["a"].api.apiEndPoint,a="";if(t)for(var o in t)t.hasOwnProperty(o)&&(a+="".concat(o,"=").concat(t[o],"&"));return""!==a?(a="?".concat(a.slice(0,-1)),n.concat(e)+a):n.concat(e)},s=function(e){var t="",n="",r="",a=new Date,o=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];return"now"!==e&&(a=new Date(e)),t=a.getDate(),n=o[a.getMonth()+1],r=a.getFullYear()+543,"".concat(t," ").concat(n," ").concat(r)};t["a"]={SET_STORAGEITEM:a,GET_STORAGEITEM:o,REMOVE_STORAGEITEM:c,GET_FULLAPI:i,GET_DATETHAI:s,COPY_OBJECT:u}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"myApp"}},[n("nprogress-container"),n("router-view"),n("notifications",{attrs:{group:"default",position:"bottom left"}})],1)},o=[],c=n("768b"),u=(n("7f7f"),n("96cf"),n("3b8d")),i=n("cebc"),s=n("4d37"),l=n("2f62"),f=n("9822"),p=n("8671"),h=n("1712"),d={components:{NprogressContainer:s["a"]},data:function(){return{local:{username:null,password:null}}},created:function(){this.fetchData()},methods:Object(i["a"])({},Object(l["b"])(["SET_USER_STORE"]),{fetchData:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("Login"!==this.$route.name){e.next=2;break}return e.abrupt("return");case 2:return r=f["a"].api.user.profile,e.next=5,Object(h["a"])(p["a"].getResource({resourceName:r,queryString:[]}));case 5:if(a=e.sent,o=Object(c["a"])(a,2),t=o[0],n=o[1],!t){e.next=12;break}return this.LOGOUT(),e.abrupt("return");case 12:return this.SET_USER_STORE({data:Object(i["a"])({},n.data.user,{departmentName:n.data.department.name},n.data.department)}),e.abrupt("return");case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),watch:{$route:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.HAD_AUTH()){e.next=3;break}return this.GO_TOPAGE("Login"),e.abrupt("return");case 3:if("Login"!==n.name){e.next=6;break}return e.next=6,this.fetchData();case 6:if(this.HAS_PRIVILEGE(t.name)&&"Login"!==t.name){e.next=9;break}return this.GO_TOPAGE("Report"),e.abrupt("return");case 9:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()}},m=d,b=(n("5c0b"),n("2877")),E=Object(b["a"])(m,a,o,!1,null,null,null),T=E.exports,g=n("8c4f"),v=function(){return n.e("chunk-06448e99").then(n.bind(null,"68219"))},S=function(){return Promise.all([n.e("chunk-4f29891f"),n.e("chunk-307ab0f4"),n.e("chunk-069c74b0")]).then(n.bind(null,"fb4d"))},k=function(){return Promise.all([n.e("chunk-4f29891f"),n.e("chunk-307ab0f4"),n.e("chunk-f36817e8")]).then(n.bind(null,"a127"))},A=function(){return Promise.all([n.e("chunk-4f29891f"),n.e("chunk-72e2009a")]).then(n.bind(null,"c8a6"))},O=function(){return Promise.all([n.e("chunk-4f29891f"),n.e("chunk-b20dbee2")]).then(n.bind(null,"7a71"))},_=function(){return Promise.all([n.e("chunk-4f29891f"),n.e("chunk-e6463576")]).then(n.bind(null,"e7ec"))},R=function(){return n.e("chunk-23a166ba").then(n.bind(null,"90e0"))},y=function(){return n.e("chunk-229c85cd").then(n.bind(null,"bf97"))};r["default"].use(g["a"]);var w=new g["a"]({mode:"history",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/",redirect:"/report",name:"Root",meta:{label:"รายงานอุบัติการณ์"},component:v,children:[{path:"report",name:"Report",meta:{label:"หน้าหลัก"},component:S},{path:"report/create",name:"CreateReport",meta:{label:"สร้างใหม่"},component:k},{path:"report/edit/:key",name:"EditReport",meta:{label:"แก้ไข"},component:k},{path:"report/:key",name:"ReportDetail",meta:{label:"รายละเอียด"},component:A},{path:"management/:key",name:"Management",meta:{label:"บันทึกส่วนงาน"},component:O},{path:"answer/:key",name:"Answer",meta:{label:"ตอบอุบัติการณ์"},component:_},{path:"settings",name:"Settings",meta:{label:"ตั้งค่าระบบ"},component:R},{path:"reportAction",name:"ReportAction",meta:{label:"อัพเดท/ลบ รายงาน",type:"event"},component:null}]},{path:"/",name:"Other",meta:{label:"Other"},component:{render:function(e){return e("router-view")}},children:[{path:"/login",name:"Login",meta:{label:"Login"},component:y}]}]}),P=(n("6762"),n("2fdb"),n("ac6a"),n("456d"),n("0f1e")),G={computed:Object(i["a"])({},Object(l["c"])(["GET_USERDATA_STORE"]),{USER:function(){return this.GET_USERDATA_STORE},IS_ADMIN:function(){return this.GET_USERDATA_STORE.isAdmin},USER_RIGHT:function(){return this.GET_USERDATA_STORE.right},REPORT_CONFIG:function(){return f["a"].programLists}}),filters:{},methods:Object(i["a"])({},Object(l["b"])(["RESET_STATE"]),{GO_TOPAGE:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.push({name:e,params:{key:t.key}})},BUILDPARAM:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t="";if(Object.keys(e).length)return Object.keys(e).forEach(function(n){t+=n+"="+e[n]+"&"}),t.slice(0,-1)},IS_REPORTCREATER:function(e){return e===this.USER.department||this.IS_ADMIN},NOTIFY:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(e){case"success":null===t&&(t="ทำรายการเสร็จสิ้น"),this.$notify(t,"success");break;case"error":null===t&&(t="เกิดข้อผิดพลาด โปรดลองอีกครั้ง"),this.$notify(t,"error");break}},GO_TOHOMEPAGE:function(){var e="admin";switch(e){case"admin":this.GO_TOPAGE("Report");break}},HAD_AUTH:function(){return"1"===P["a"].GET_STORAGEITEM(f["a"].variable.authStorage)},HAS_PRIVILEGE:function(e){return!(!this.USER||"Administrator"!==this.USER.departmentName)||!!(this.USER&&this.USER.right&&this.USER.right.includes(e))},LOGOUT:function(){P["a"].REMOVE_STORAGEITEM(f["a"].variable.tokenStorage),P["a"].REMOVE_STORAGEITEM(f["a"].variable.authStorage),this.RESET_STATE(),this.GO_TOPAGE("Login")}})},I=n("5637"),x=n.n(I),U=n("7bb1"),j=function(){return{app:{},user:null}},L=j(),D={SET_APPDATA:function(e,t){e.app=t},SET_USERDATA:function(e,t){e.user=t},RESET_STATE:function(e){Object.assign(e,j())}},N={SET_USER_STORE:function(e,t){var n=e.commit;n("SET_USERDATA",t.data)},SET_APP_STORE:function(e,t){var n=e.commit;n("SET_APPDATA",t.data)},RESET_STATE:function(e){var t=e.commit;t("RESET_STATE")}},M={GET_USERDATA_STORE:function(e){return e.user},GET_APPDATA_STORE:function(e){return e.app.appData}},C={state:L,getters:M,mutations:D,actions:N};r["default"].use(l["a"]);var F=!1,H=new l["a"].Store({modules:{App:C},strict:F}),B=n("5886"),$=n("ee98"),J=n.n($),q={};r["default"].use(B["a"],q),r["default"].use(J.a),r["default"].use(U["a"],{fieldsBagName:"formFields"}),r["default"].use(x.a,{latencyThreshold:50,router:!0,http:!1});var V=new x.a({parent:"#myApp"});r["default"].config.productionTip=!1,r["default"].mixin(G),new r["default"]({nprogress:V,router:w,store:H,render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},8671:function(e,t,n){"use strict";var r=n("cebc"),a=(n("a481"),n("bc3a")),o=n.n(a),c=n("0f1e"),u=n("9822"),i=function(){var e=c["a"].GET_STORAGEITEM(u["a"].variable.tokenStorage),t={"Content-Type":"application/json"};e&&(t.Authorization=e.replace(/['"]+/g,""));var n=o.a.create({headers:t});return n},s=function(e,t){var n=i();return new Promise(function(t,r){n.get(c["a"].GET_FULLAPI(e.resourceName,e.queryString)).then(function(e){t(e)}).catch(function(e){r(e)})})},l=function(e,t){var n=i();return new Promise(function(t,a){n.post(c["a"].GET_FULLAPI(e.resourceName),Object(r["a"])({},e.data)).then(function(e){t(e)}).catch(function(e){a(e)})})},f=function(e,t){var n=i();return new Promise(function(t,a){n.put(c["a"].GET_FULLAPI(e.resourceName),Object(r["a"])({},e.data)).then(function(e){t(e)}).catch(function(e){a(e)})})},p=function(e,t){var n=i();return new Promise(function(t,r){n.delete(c["a"].GET_FULLAPI(e.resourceName,e.queryString)).then(function(e){t(e)}).catch(function(e){r(e)})})};t["a"]={getResource:s,postResource:l,putResource:f,deleteResource:p}},9822:function(e,t,n){"use strict";var r={host:"".concat(window.location.protocol,"//").concat(window.location.hostname,":3000"),apiEndPoint:"".concat(window.location.protocol,"//").concat(window.location.hostname,":3000/api"),app:{},login:"/login",user:{profile:"/user/profile",index:"/users"},report:{index:"/reports",config:"/report-config",translation:"/report-translation",approve:"/update-report-status"},department:{index:"/department"},management:{index:"/management"},answer:{index:"/answers"},overview:{index:"/overview"}},a={tokenStorage:"mission_phuket_token",authStorage:"mission_phuket_auth"},o={},c=[{key:"all",value:"ทุกสถานะ",color:"text-gray"},{key:"reportCreated",value:"ยังไม่ส่งแบบติดตาม",color:"text-error"},{key:"departmentSpecified",value:"ส่งแบบติดตามแล้วยังไม่ตอบกลับ",color:"text-warning"},{key:"hadSomeAnswer",value:"ส่งแบบติดตามและตอบกลับบางส่วน",color:"text-warning"},{key:"hadAllAnswer",value:"ส่งแบบติดตามและตอบกลับครบถ้วน",color:"text-dark"},{key:"approved",value:"เสร็จสิ้น(Approved)",color:"text-success"}];t["a"]={api:r,variable:a,programLists:o,reportStatus:c}}});
//# sourceMappingURL=app.cc2e7f5c.js.map