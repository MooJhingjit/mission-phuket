(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6299e3f6"],{"28a5":function(t,e,a){"use strict";var i=a("aae3"),r=a("cb7c"),n=a("ebd6"),s=a("0390"),l=a("9def"),c=a("5f1b"),o=a("520a"),u=a("79e5"),p=Math.min,d=[].push,m="split",v="length",f="lastIndex",g=4294967295,h=!u(function(){RegExp(g,"y")});a("214f")("split",2,function(t,e,a,u){var C;return C="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[v]||2!="ab"[m](/(?:ab)*/)[v]||4!="."[m](/(.?)(.?)/)[v]||"."[m](/()()/)[v]>1||""[m](/.?/)[v]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!i(t))return a.call(r,t,e);var n,s,l,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,m=void 0===e?g:e>>>0,h=new RegExp(t.source,u+"g");while(n=o.call(h,r)){if(s=h[f],s>p&&(c.push(r.slice(p,n.index)),n[v]>1&&n.index<r[v]&&d.apply(c,n.slice(1)),l=n[0][v],p=s,c[v]>=m))break;h[f]===n.index&&h[f]++}return p===r[v]?!l&&h.test("")||c.push(""):c.push(r.slice(p)),c[v]>m?c.slice(0,m):c}:"0"[m](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,i){var r=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,r,i):C.call(String(r),a,i)},function(t,e){var i=u(C,t,this,e,C!==a);if(i.done)return i.value;var o=r(t),d=String(this),m=n(o,RegExp),v=o.unicode,f=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(h?"y":"g"),b=new m(h?o:"^(?:"+o.source+")",f),R=void 0===e?g:e>>>0;if(0===R)return[];if(0===d.length)return null===c(b,d)?[d]:[];var _=0,y=0,x=[];while(y<d.length){b.lastIndex=h?y:0;var O,k=c(b,h?d:d.slice(y));if(null===k||(O=p(l(b.lastIndex+(h?0:y)),d.length))===_)y=s(d,y,v);else{if(x.push(d.slice(_,y)),x.length===R)return x;for(var D=1;D<=k.length-1;D++)if(x.push(k[D]),x.length===R)return x;y=_=O}}return x.push(d.slice(_)),x}]})},"43af":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.clinicalProgram&&t.programReport.program&&t.nonClinicalProgram&&t.violenceProgram?a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-body"},[t.local.items&&t.local.items.status?a("div",{staticClass:"chip"},[a("i",{class:["fas fa-circle",t.getReportStatusTrans(this.local.items.status).color],staticStyle:{"margin-right":"5px"}}),t._v("\n         "+t._s(t.getReportStatusTrans(this.local.items.status).value)+"\n       ")]):t._e(),a("details",{staticClass:"accordion",attrs:{open:""}},[a("summary",{staticClass:"accordion-header"},[t._v("\n           รายละเอียดเบื้องต้น\n         ")]),a("div",{staticClass:"accordion-body empty"},[a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.moment(t.initialReport.incidentDate).format("DD-MM-YYYY")}},[t._v("วันที่เกิดเหตุ: "+t._s(t.moment(t.initialReport.incidentDate).format("DD-MM-YYYY")))])])]),a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.initialReport.hn}},[t._v("HN: "+t._s(t.initialReport.hn))])])]),a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.initialReport.name}},[t._v("ชื่อ-นามสกุล: "+t._s(t.initialReport.name))])])]),a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.initialReport.age}},[t._v("อายุ: "+t._s(t.initialReport.age))])])]),a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.initialReport.area}},[t._v("แผนกบริเวณที่พบเหตุ: "+t._s(t.initialReport.area))])])]),a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.initialReport.affectedPerson}},[t._v("ผู้ที่ได้รับผลกระทบ: "+t._s(t.initialReport.affectedPerson))])])]),a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.moment(t.initialReport.reportDate).format("DD-MM-YYYY")}},[t._v("วันที่รายงาน: "+t._s(t.moment(t.initialReport.reportDate).format("DD-MM-YYYY")))])])]),t.IS_ADMIN?a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.initialReport.reporter}},[t._v("ผู้รายงาน: "+t._s(t.initialReport.reporter))])])]):t._e()])]),a("details",{staticClass:"accordion",attrs:{open:""}},[a("summary",{staticClass:"accordion-header"},[t._v("\n           รูปแบบของเหตุการณ์ ("+t._s(t.programReport.programType)+")\n         ")]),"clinical"===t.programReport.programType?a("div",{staticClass:"accordion-body empty"},[t._l(t.getClinicalKeys("common"),function(e,i){return a("div",{key:"common"+i,staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.clinicalProgram.common[e].title}},[t._v(t._s(t.clinicalProgram.common[e].title))]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getClinicalProgramRes("common",e,t.programReport.program.common[e])))])])])}),t._l(t.getClinicalKeys("spacific"),function(e,i){return a("div",{key:"spacific"+i,staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.clinicalProgram.spacific[e].title}},[t._v(t._s(t.clinicalProgram.spacific[e].title))]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getClinicalProgramRes("spacific",e,t.programReport.program.spacific[e])))])])])}),t._l(t.getClinicalKeys("event"),function(e,i){return a("div",{key:"event"+i,staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.clinicalProgram.event[e].title}},[t._v(t._s(t.clinicalProgram.event[e].title))]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getClinicalProgramRes("event",e,t.programReport.program.event[e])))])])])})],2):a("div",{staticClass:"accordion-body empty"},t._l(t.getNonClinicalKeys(),function(e,i){return a("div",{key:"NonClinical"+i,staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title",attrs:{title:t.nonClinicalProgram[e].title}},[t._v(t._s(t.nonClinicalProgram[e].title))]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getNonClinicalProgramRes(e,t.programReport.program[e])))])])])}),0)]),t.violenceReport&&t.violenceReport.violence?a("details",{staticClass:"accordion",attrs:{open:""}},[a("summary",{staticClass:"accordion-header"},[t._v("\n           ระดับความรุนแรง\n         ")]),a("div",{staticClass:"accordion-body empty"},[t.violenceReport.violence.clinical?a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title"},[t._v("ระดับความรุนแรงทางคลินิก:")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getViolenceRes("clinical",t.violenceReport.violence.clinical)))])])]):t._e(),t.violenceReport.violence.general?a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title"},[t._v("ระดับความรุนแรงทั่วไป:")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getViolenceRes("general",t.violenceReport.violence.general)))])])]):t._e()])]):t._e(),a("details",{staticClass:"accordion",attrs:{open:""}},[a("summary",{staticClass:"accordion-header"},[t._v("\n           การวิเคราะห์และการอธิบาย\n         ")]),a("div",{staticClass:"accordion-body empty"},[a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title"},[t._v("สรุปเหตุการณ์ (ใคร ทำอะไร ที่ไหน อย่างไร):")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.eventBriefing))])])]),a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title"},[t._v("ความเห็นหัวหน้างาน/ฝ่าย:")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.comment))])])]),a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title"},[t._v("กิจกรรมที่ควรทำ/แนวทางการแก้ไข:")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.causeAnalysis))])])]),a("div",{staticClass:"tile tile-centered m-1"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title"},[t._v("หมายเหตุ:")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.note))])])])])])])]):t._e()},r=[],n=(a("ac6a"),a("456d"),a("768b")),s=(a("96cf"),a("3b8d")),l=a("c1df"),c=a.n(l),o=a("9822"),u=a("8671"),p=a("1712"),d={props:{report:{type:Object,required:!0}},components:{},name:"ReportDetailComponent",data:function(){return{moment:c.a,local:{programLists:null,items:null,ordering:{initialReport:["age","affectedPerson","area","hn","incidentDate","name","reportDate","reporter"],eventReport:["programType","program"],violenceReport:["violence"],analysisReport:["causeAnalysis","eventBriefing","note","comment"]}}}},computed:{initialReport:function(){return this.selectObjByKey(this.local.ordering.initialReport)},programReport:function(){return this.selectObjByKey(this.local.ordering.eventReport)},violenceReport:function(){return this.selectObjByKey(this.local.ordering.violenceReport)},analysisReport:function(){return this.selectObjByKey(this.local.ordering.analysisReport)},clinicalProgram:function(){return this.local.programLists&&this.local.programLists.clinical?this.local.programLists.clinical:null},nonClinicalProgram:function(){return this.local.programLists&&this.local.programLists.nonClinical?this.local.programLists.nonClinical:null},violenceProgram:function(){return this.local.programLists&&this.local.programLists.violence?this.local.programLists.violence:null},programType:function(){return this.local.programType}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchConfigReport();case 2:this.local.items=this.report;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{fetchConfigReport:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["a"])(u["a"].getResource({resourceName:o["a"].api.report.config}));case 2:if(i=t.sent,r=Object(n["a"])(i,2),e=r[0],a=r[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.programLists=a.data.reportConfig;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selectObjByKey:function(t){var e=this,a={};return this.local.items&&t.map(function(t){var i=e.local.items[t];a[t]=i}),a},getViolenceRes:function(t,e){var a=this.violenceProgram[t].options.filter(function(t){return t.value===e})[0];return a?a.title:"-"},getClinicalProgramRes:function(t,e,a){var i=this.clinicalProgram[t][e].options.filter(function(t){return t.value===a})[0];return i?i.title:"-"},getNonClinicalProgramRes:function(t,e){var a=this.nonClinicalProgram[t].options.filter(function(t){return t.value===e})[0];return a?a.title:"-"},getReportStatusTrans:function(t){return o["a"].reportStatus.filter(function(e){return e.key===t})[0]},getClinicalKeys:function(t){var e=this,a=Object.keys(this.clinicalProgram[t]).filter(function(a){return"-"!==e.getClinicalProgramRes(t,a,e.programReport.program[t][a])});return a},getNonClinicalKeys:function(t){var e=this,a=["budget","env","facilities","hrd","im","rights"].filter(function(t){return"-"!==e.getNonClinicalProgramRes(t,e.programReport.program[t])});return a}},watch:{report:{handler:function(){this.local.items=this.report},deep:!0}}},m=d,v=(a("a2ec"),a("2877")),f=Object(v["a"])(m,i,r,!1,null,"12bbe7fc",null);e["a"]=f.exports},"7a71":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container columns"},[a("navigation-bar"),a("div",{staticClass:"column col-4 col-md-12"},[t.local.report?a("report-detail",{attrs:{report:t.local.report}}):t._e()],1),a("div",{staticClass:"column col-8 col-md-12"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-header columns"},[a("div",{staticClass:"form-group column col-6"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.local.departmentInput,expression:"local.departmentInput"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-select",attrs:{name:"departmentInput"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.local,"departmentInput",e.target.multiple?a:a[0])}}},[a("option",{domProps:{value:null}},[t._v("เลือกส่วนงาน")]),t._l(t.local.departmentOptions,function(e,i){return a("option",{key:i,domProps:{value:e._id}},[t._v(t._s(e.name))])})],2)]),a("div",{staticClass:"column col-6"},[a("div",{staticClass:"column col-md-4"},[a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.event("add")}}},[t._v("บันทึกข้อมูล")])])])])]),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("table",{staticClass:"table table-striped table-hover"},[a("tbody",t._l(t.local.managementLists,function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(t.getDepartmentName(e.departmentId)))]),a("td",[a("button",{staticClass:"btn btn-error",on:{click:function(a){return t.event("remove",{key:e.departmentId})}}},[t._v("ลบข้อมูล")])])])}),0)])])])])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-title"},[t._v("ตารางแสดงรายชื่อส่วนงานที่ต้องลงบันทึกและดำเนินการ")])])}],n=(a("7f7f"),a("6762"),a("2fdb"),a("28a5"),a("768b")),s=(a("96cf"),a("3b8d")),l=a("fa7f"),c=a("1712"),o=a("8671"),u=a("9822"),p=a("43af"),d={components:{NavigationBar:l["a"],reportDetail:p["a"]},data:function(){return{local:{idSelected:null,departmentOptions:[],departmentOptionsDefault:[],departmentInput:null,managementLists:null,report:null,reportTrans:{}}}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchReportTransData();case 2:return t.next=4,this.fetchReportData();case 4:return t.next=6,this.fetchData();case 6:this.fetchDepartmentData();case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{fetchReportData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])(o["a"].getResource({resourceName:"".concat(u["a"].api.report.index,"/").concat(this.$route.params.key)}));case 2:if(i=t.sent,r=Object(n["a"])(i,2),e=r[0],a=r[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.report=this.adjustData(a.data.report),"approved"===this.local.report.status&&this.GO_TOPAGE("Report");case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchReportTransData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])(o["a"].getResource({resourceName:u["a"].api.report.translation}));case 2:if(i=t.sent,r=Object(n["a"])(i,2),e=r[0],a=r[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.reportTrans=a.data.trans;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),adjustData:function(t){var e=this,a=t.affectedPerson.split("|"),i=a.map(function(t){return e.local.reportTrans.affectedPerson[t]}).join(", ");return t.affectedPerson=i,t},fetchData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])(o["a"].getResource({resourceName:"".concat(u["a"].api.management.index,"/").concat(this.$route.params.key)}));case 2:if(i=t.sent,r=Object(n["a"])(i,2),e=r[0],a=r[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.managementLists=a.data.management;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchDepartmentData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])(o["a"].getResource({resourceName:u["a"].api.department.index}));case 2:if(i=t.sent,r=Object(n["a"])(i,2),e=r[0],a=r[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.departmentOptions=a.data.department,this.local.departmentOptionsDefault=a.data.department,this.filterOutDepartment();case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),filterOutDepartment:function(){var t=this.local.managementLists.map(function(t){return t.departmentId});this.local.departmentOptions=this.local.departmentOptions.filter(function(e){return!t.includes(e._id)})},event:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var a,i,r,s,l,p,d,m,v,f,g,h,C=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=C.length>1&&void 0!==C[1]?C[1]:null,t.t0=e,t.next="add"===t.t0?4:"remove"===t.t0?24:44;break;case 4:return t.next=6,Object(c["a"])(this.$validator.validate());case 6:if(d=t.sent,m=Object(n["a"])(d,2),i=m[0],r=m[1],!i&&r){t.next=12;break}return t.abrupt("return");case 12:return t.next=14,Object(c["a"])(o["a"].postResource({resourceName:u["a"].api.management.index,data:{departmentId:this.local.departmentInput,reportId:this.$route.params.key}}));case 14:if(v=t.sent,f=Object(n["a"])(v,2),i=f[0],r=f[1],!i){t.next=20;break}return t.abrupt("return");case 20:return t.next=22,this.fetchData();case 22:return this.filterOutDepartment(),t.abrupt("break",44);case 24:return t.next=26,this.$swal({text:"ลบข้อมูลนี้!",type:"warning",showCancelButton:!0,confirmButtonText:"ตกลง",cancelButtonText:"ยกเลิก",reverseButtons:!0});case 26:if(p=t.sent,p.value){t.next=29;break}return t.abrupt("return");case 29:return s=u["a"].api.management.index,a.managementId=this.$route.params.key,l={departmentId:a.key,reportId:this.$route.params.key},t.next=34,Object(c["a"])(o["a"].deleteResource({resourceName:s,queryString:l}));case 34:if(g=t.sent,h=Object(n["a"])(g,2),i=h[0],r=h[1],!i){t.next=40;break}return t.abrupt("return");case 40:return t.next=42,this.fetchData();case 42:return this.fetchDepartmentData(),t.abrupt("break",44);case 44:this.local.departmentInput=null,this.$notify({group:"default",text:"ทำรายการสำเร็จ",type:"success"}),this.fetchReportData();case 47:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getDepartmentName:function(t){var e=this.local.departmentOptionsDefault.filter(function(e){return e._id===t});return e.length?e[0].name:""}}},m=d,v=a("2877"),f=Object(v["a"])(m,i,r,!1,null,null,null);e["default"]=f.exports},a2ec:function(t,e,a){"use strict";var i=a("d126"),r=a.n(i);r.a},d126:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6299e3f6.51abd424.js.map