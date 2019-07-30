(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0036a20"],{"43af":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.clinicalProgram&&t.nonClinicalProgram&&t.violenceProgram?i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-body"},[t.local.items&&t.local.items.status?i("div",{staticClass:"chip"},[i("i",{class:["fas fa-circle",t.getReportStatusTrans(this.local.items.status).color],staticStyle:{"margin-right":"5px"}}),t._v("\n         "+t._s(t.getReportStatusTrans(this.local.items.status).value)+"\n       ")]):t._e(),i("details",{staticClass:"accordion",attrs:{open:""}},[i("summary",{staticClass:"accordion-header"},[t._v("\n           วันที่/สถานที่/ผู้รายงาน\n         ")]),i("div",{staticClass:"accordion-body empty"},[i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("วันที่เกิดเหตุ: "+t._s(t.moment(t.initialReport.incidentDate).format("DD-MM-YYYY")))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("HN: "+t._s(t.initialReport.hn))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("ชื่อ-นามสกุล: "+t._s(t.initialReport.name))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("อายุ: "+t._s(t.initialReport.age))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("แผนกบริเวณที่พบเหตุ: "+t._s(t.initialReport.area))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("ผู้ที่ได้รับผลกระทบ: "+t._s(t.initialReport.affectedPerson))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("วันที่รายงาน: "+t._s(t.moment(t.initialReport.reportDate).format("DD-MM-YYYY")))])])]),t.IS_ADMIN?i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("ผู้รายงาน: "+t._s(t.initialReport.reporter))])])]):t._e()])]),t.violenceReport&&t.violenceReport.violence?i("details",{staticClass:"accordion",attrs:{open:""}},[i("summary",{staticClass:"accordion-header"},[t._v("\n           ระดับความรุนแรง\n         ")]),i("div",{staticClass:"accordion-body empty"},[i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("ระดับความรุนแรงทางคลินิก:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getViolenceTitle("clinical",t.violenceReport.violence.clinical)))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("ระดับความรุนแรงทั่วไป:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getViolenceTitle("general",t.violenceReport.violence.general)))])])])])]):t._e(),i("details",{staticClass:"accordion",attrs:{open:""}},[i("summary",{staticClass:"accordion-header"},[t._v("\n           การวิเคราะห์และการอธิบาย\n         ")]),i("div",{staticClass:"accordion-body empty"},[i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("บรรยายสรุปเหตุการณ์ที่เกิด:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.eventBriefing))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("ความเห็นหัวหน้างาน/ฝ่าย:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.comment))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("วิเคราะห์สาเหตุและแนวทางแก้ไข:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.causeAnalysis))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("หมายเหตุ:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.note))])])])])])])]):t._e()},s=[],r=i("768b"),n=(i("96cf"),i("3b8d")),c=i("c1df"),l=i.n(c),o=i("9822"),u=i("8671"),p=i("1712"),d={props:{report:{type:Object,required:!0}},components:{},name:"ReportDetailComponent",data:function(){return{moment:l.a,local:{programLists:null,items:null,ordering:{initialReport:["age","affectedPerson","area","hn","incidentDate","name","reportDate","reporter"],eventReport:["programType","program"],violenceReport:["violence"],analysisReport:["causeAnalysis","eventBriefing","note","comment"]}}}},computed:{initialReport:function(){return this.selectObjByKey(this.local.ordering.initialReport)},programReport:function(){return this.selectObjByKey(this.local.ordering.eventReport)},violenceReport:function(){return this.selectObjByKey(this.local.ordering.violenceReport)},analysisReport:function(){return this.selectObjByKey(this.local.ordering.analysisReport)},clinicalProgram:function(){return this.local.programLists&&this.local.programLists.clinical?this.local.programLists.clinical:null},nonClinicalProgram:function(){return this.local.programLists&&this.local.programLists.nonClinical?this.local.programLists.nonClinical:null},violenceProgram:function(){return this.local.programLists&&this.local.programLists.violence?this.local.programLists.violence:null},programType:function(){return this.local.programType}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchConfigReport();case 2:this.local.items=this.report;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{fetchConfigReport:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["a"])(u["a"].getResource({resourceName:o["a"].api.report.config}));case 2:if(a=t.sent,s=Object(r["a"])(a,2),e=s[0],i=s[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.programLists=i.data.reportConfig;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selectObjByKey:function(t){var e=this,i={};return this.local.items&&t.map(function(t){var a=e.local.items[t];i[t]=a}),i},getViolenceTitle:function(t,e){return this.violenceProgram[t].options.filter(function(t){return t.value===e})[0].title},getClinicalProgramTitle:function(t,e){return this.clinicalProgram.common[t].options.filter(function(t){return t.value===e})[0].title},getReportStatusTrans:function(t){return o["a"].reportStatus.filter(function(e){return e.key===t})[0]}},watch:{report:{handler:function(){this.local.items=this.report},deep:!0}}},v=d,m=(i("4d3d"),i("2877")),f=Object(m["a"])(v,a,s,!1,null,"568a4dd8",null);e["a"]=f.exports},"4d3d":function(t,e,i){"use strict";var a=i("64ad"),s=i.n(a);s.a},"64ad":function(t,e,i){},c8a6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container columns"},[i("navigation-bar"),i("div",{staticClass:"column col-4 col-md-12"},[t.local.report?i("report-detail",{attrs:{report:t.local.report}}):t._e()],1),i("div",{staticClass:"column col-8 col-md-12"},[i("div",{staticClass:"panel"},[t._m(0),i("div",{staticClass:"panel-body"},t._l(t.local.responsibilities,function(e,a){return i("div",{key:a,staticClass:"card m-2"},[i("div",{staticClass:"card-header"},[i("div",{staticClass:"card-title"},[t._v("แผนก "+t._s(e.department.name))])]),i("div",{staticClass:"card-body p-1"},[i("table",{staticClass:"table table-striped table-hover"},[t._m(1,!0),e.answers.length?i("tbody",t._l(e.answers,function(e,a){return i("tr",{key:a},[i("td",[t._v(t._s(e.cause))]),i("td",[t._v(t._s(e.prevention))]),i("td",[t._v(t._s(e.responsible))])])}),0):t._e()])])])}),0)])]),i("div",{staticClass:"column col-12 text-right"},[t.USER_RIGHT.includes("ReportAction")&&!t.local.isReportApproved?i("button",{staticClass:"m-2 btn",on:{click:function(e){return t.event("updateStatus","approved")}}},[i("i",{staticClass:"fas fa-check-circle"}),t._v(" Approve")]):t._e(),t._m(2),t.USER_RIGHT.includes("ReportAction")?i("button",{staticClass:"m-2 btn btn-error",on:{click:function(e){return t.event("remove")}}},[i("i",{staticClass:"fas fa-trash-alt"}),t._v(" Delete")]):t._e()])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel-header"},[i("div",{staticClass:"panel-title text-bold"},[t._v("ส่วนงานที่ต้องแก้ไข")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("สาเหตุ")]),i("th",[t._v("ป้องกัน")]),i("th",[t._v("ผู้รับผิดชอบ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"m-2 btn btn-link"},[i("i",{staticClass:"fas fa-print"}),t._v(" Print Report")])}],r=i("768b"),n=(i("96cf"),i("3b8d")),c=i("fa7f"),l=i("43af"),o=i("1712"),u=i("8671"),p=i("9822"),d={components:{NavigationBar:c["a"],reportDetail:l["a"]},data:function(){return{local:{report:null,responsibilities:[],isReportApproved:!1}}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchReportData();case 2:return t.next=4,this.fetchData();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{fetchReportData:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["a"])(u["a"].getResource({resourceName:"".concat(p["a"].api.report.index,"/").concat(this.$route.params.key)}));case 2:if(a=t.sent,s=Object(r["a"])(a,2),e=s[0],i=s[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.report=i.data.report,this.local.isReportApproved="approved"===i.data.report.status;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchData:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["a"])(u["a"].getResource({resourceName:"".concat(p["a"].api.overview.index,"/").concat(this.$route.params.key)}));case 2:if(a=t.sent,s=Object(r["a"])(a,2),e=s[0],i=s[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.responsibilities=i.data.responsibilities;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),event:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var i,a,s,n,c,l,d,v,m=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:m.length>1&&void 0!==m[1]?m[1]:null,s={},n=!1,t.t0=e,t.next="remove"===t.t0?6:"updateStatus"===t.t0?22:40;break;case 6:return t.next=8,this.$swal({text:"ลบรายงานนี้!",type:"warning",showCancelButton:!0,confirmButtonText:"ตกลง",cancelButtonText:"ยกเลิก",reverseButtons:!0});case 8:if(n=t.sent,n.value){t.next=11;break}return t.abrupt("return");case 11:return a=p["a"].api.report.index,s={id:this.$route.params.key},t.next=15,Object(o["a"])(u["a"].deleteResource({resourceName:a,queryString:s}));case 15:if(c=t.sent,l=Object(r["a"])(c,2),i=l[0],l[1],!i){t.next=21;break}return t.abrupt("return");case 21:return t.abrupt("break",40);case 22:return t.next=24,this.$swal({text:"ยืนยันการทำรายการ",type:"warning",showCancelButton:!0,confirmButtonText:"ตกลง",cancelButtonText:"ยกเลิก",reverseButtons:!0});case 24:if(n=t.sent,n.value){t.next=27;break}return t.abrupt("return");case 27:return a="".concat(p["a"].api.report.approve,"/").concat(this.$route.params.key),t.next=30,Object(o["a"])(u["a"].putResource({resourceName:a,data:{status:"approved"}}));case 30:if(d=t.sent,v=Object(r["a"])(d,2),i=v[0],v[1],!i){t.next=36;break}return t.abrupt("return");case 36:return this.local.isReportApproved=!0,t.next=39,this.fetchReportData();case 39:return t.abrupt("break",40);case 40:this.$notify({group:"default",text:"ทำรายการสำเร็จ",type:"success"}),"remove"===e&&this.GO_TOPAGE("Report");case 42:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},v=d,m=i("2877"),f=Object(m["a"])(v,a,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-b0036a20.e4d66229.js.map