(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7636ce1a"],{"28a5":function(t,e,i){"use strict";var r=i("aae3"),a=i("cb7c"),n=i("ebd6"),s=i("0390"),l=i("9def"),o=i("5f1b"),c=i("520a"),p=i("79e5"),u=Math.min,d=[].push,m="split",v="length",g="lastIndex",f=4294967295,_=!p(function(){RegExp(f,"y")});i("214f")("split",2,function(t,e,i,p){var h;return h="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[v]||2!="ab"[m](/(?:ab)*/)[v]||4!="."[m](/(.?)(.?)/)[v]||"."[m](/()()/)[v]>1||""[m](/.?/)[v]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!r(t))return i.call(a,t,e);var n,s,l,o=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,m=void 0===e?f:e>>>0,_=new RegExp(t.source,p+"g");while(n=c.call(_,a)){if(s=_[g],s>u&&(o.push(a.slice(u,n.index)),n[v]>1&&n.index<a[v]&&d.apply(o,n.slice(1)),l=n[0][v],u=s,o[v]>=m))break;_[g]===n.index&&_[g]++}return u===a[v]?!l&&_.test("")||o.push(""):o.push(a.slice(u)),o[v]>m?o.slice(0,m):o}:"0"[m](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,r){var a=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,a,r):h.call(String(a),i,r)},function(t,e){var r=p(h,t,this,e,h!==i);if(r.done)return r.value;var c=a(t),d=String(this),m=n(c,RegExp),v=c.unicode,g=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(_?"y":"g"),b=new m(_?c:"^(?:"+c.source+")",g),C=void 0===e?f:e>>>0;if(0===C)return[];if(0===d.length)return null===o(b,d)?[d]:[];var y=0,R=0,x=[];while(R<d.length){b.lastIndex=_?R:0;var P,w=o(b,_?d:d.slice(R));if(null===w||(P=u(l(b.lastIndex+(_?0:R)),d.length))===y)R=s(d,R,v);else{if(x.push(d.slice(y,R)),x.length===C)return x;for(var k=1;k<=w.length-1;k++)if(x.push(w[k]),x.length===C)return x;R=y=P}}return x.push(d.slice(y)),x}]})},"421a":function(t,e,i){"use strict";var r=i("50be"),a=i.n(r);a.a},"43af":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.clinicalProgram&&t.programReport.program&&t.nonClinicalProgram&&t.violenceProgram?i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-body"},[t.local.items&&t.local.items.status?i("div",{staticClass:"chip"},[i("i",{class:["fas fa-circle",t.getReportStatusTrans(this.local.items.status).color],staticStyle:{"margin-right":"5px"}}),t._v("\n         "+t._s(t.getReportStatusTrans(this.local.items.status).value)+"\n       ")]):t._e(),i("details",{staticClass:"accordion",attrs:{open:""}},[i("summary",{staticClass:"accordion-header"},[t._v("\n           รายละเอียดเบื้องต้น\n         ")]),i("div",{staticClass:"accordion-body empty"},[i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.moment(t.initialReport.incidentDate).format("DD-MM-YYYY")}},[t._v("วันที่เกิดเหตุ: "+t._s(t.moment(t.initialReport.incidentDate).format("DD-MM-YYYY")))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.initialReport.hn}},[t._v("HN: "+t._s(t.initialReport.hn))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.initialReport.name}},[t._v("ชื่อ-นามสกุล: "+t._s(t.initialReport.name))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.initialReport.age}},[t._v("อายุ: "+t._s(t.initialReport.age))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.initialReport.area}},[t._v("แผนกบริเวณที่พบเหตุ: "+t._s(t.initialReport.area))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.initialReport.affectedPerson}},[t._v("ผู้ที่ได้รับผลกระทบ: "+t._s(t.initialReport.affectedPerson))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.moment(t.initialReport.reportDate).format("DD-MM-YYYY")}},[t._v("วันที่รายงาน: "+t._s(t.moment(t.initialReport.reportDate).format("DD-MM-YYYY")))])])]),t.IS_ADMIN?i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.initialReport.reporter}},[t._v("ผู้รายงาน: "+t._s(t.initialReport.reporter))])])]):t._e()])]),i("details",{staticClass:"accordion",attrs:{open:""}},[i("summary",{staticClass:"accordion-header"},[t._v("\n           รูปแบบของเหตุการณ์ ("+t._s(t.programReport.programType)+")\n         ")]),"clinical"===t.programReport.programType?i("div",{staticClass:"accordion-body empty"},[t._l(t.getClinicalKeys("common"),function(e,r){return i("div",{key:"common"+r,staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.clinicalProgram.common[e].title}},[t._v(t._s(t.clinicalProgram.common[e].title))]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getClinicalProgramRes("common",e,t.programReport.program.common[e])))])])])}),t._l(t.getClinicalKeys("spacific"),function(e,r){return i("div",{key:"spacific"+r,staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.clinicalProgram.spacific[e].title}},[t._v(t._s(t.clinicalProgram.spacific[e].title))]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getClinicalProgramRes("spacific",e,t.programReport.program.spacific[e])))])])])}),t._l(t.getClinicalKeys("event"),function(e,r){return i("div",{key:"event"+r,staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.clinicalProgram.event[e].title}},[t._v(t._s(t.clinicalProgram.event[e].title))]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getClinicalProgramRes("event",e,t.programReport.program.event[e])))])])])})],2):i("div",{staticClass:"accordion-body empty"},t._l(t.getNonClinicalKeys(),function(e,r){return i("div",{key:"NonClinical"+r,staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title",attrs:{title:t.nonClinicalProgram[e].title}},[t._v(t._s(t.nonClinicalProgram[e].title))]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getNonClinicalProgramRes(e,t.programReport.program[e])))])])])}),0)]),t.violenceReport&&t.violenceReport.violence?i("details",{staticClass:"accordion",attrs:{open:""}},[i("summary",{staticClass:"accordion-header"},[t._v("\n           ระดับความรุนแรง\n         ")]),i("div",{staticClass:"accordion-body empty"},[t.violenceReport.violence.clinical?i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("ระดับความรุนแรงทางคลินิก:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getViolenceRes("clinical",t.violenceReport.violence.clinical)))])])]):t._e(),t.violenceReport.violence.general?i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("ระดับความรุนแรงทั่วไป:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.getViolenceRes("general",t.violenceReport.violence.general)))])])]):t._e()])]):t._e(),i("details",{staticClass:"accordion",attrs:{open:""}},[i("summary",{staticClass:"accordion-header"},[t._v("\n           การวิเคราะห์และการอธิบาย\n         ")]),i("div",{staticClass:"accordion-body empty"},[i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("สรุปเหตุการณ์ (ใคร ทำอะไร ที่ไหน อย่างไร):")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.eventBriefing))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("ความเห็นหัวหน้างาน/ฝ่าย:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.comment))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("กิจกรรมที่ควรทำ/แนวทางการแก้ไข:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.causeAnalysis))])])]),i("div",{staticClass:"tile tile-centered m-1"},[i("div",{staticClass:"tile-content"},[i("div",{staticClass:"tile-title"},[t._v("หมายเหตุ:")]),i("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.analysisReport.note))])])])])])])]):t._e()},a=[],n=(i("ac6a"),i("456d"),i("768b")),s=(i("96cf"),i("3b8d")),l=i("c1df"),o=i.n(l),c=i("9822"),p=i("8671"),u=i("1712"),d={props:{report:{type:Object,required:!0}},components:{},name:"ReportDetailComponent",data:function(){return{moment:o.a,local:{programLists:null,items:null,ordering:{initialReport:["age","affectedPerson","area","hn","incidentDate","name","reportDate","reporter"],eventReport:["programType","program"],violenceReport:["violence"],analysisReport:["causeAnalysis","eventBriefing","note","comment"]}}}},computed:{initialReport:function(){return this.selectObjByKey(this.local.ordering.initialReport)},programReport:function(){return this.selectObjByKey(this.local.ordering.eventReport)},violenceReport:function(){return this.selectObjByKey(this.local.ordering.violenceReport)},analysisReport:function(){return this.selectObjByKey(this.local.ordering.analysisReport)},clinicalProgram:function(){return this.local.programLists&&this.local.programLists.clinical?this.local.programLists.clinical:null},nonClinicalProgram:function(){return this.local.programLists&&this.local.programLists.nonClinical?this.local.programLists.nonClinical:null},violenceProgram:function(){return this.local.programLists&&this.local.programLists.violence?this.local.programLists.violence:null},programType:function(){return this.local.programType}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchConfigReport();case 2:this.local.items=this.report;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{fetchConfigReport:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["a"])(p["a"].getResource({resourceName:c["a"].api.report.config}));case 2:if(r=t.sent,a=Object(n["a"])(r,2),e=a[0],i=a[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.programLists=i.data.reportConfig;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selectObjByKey:function(t){var e=this,i={};return this.local.items&&t.map(function(t){var r=e.local.items[t];i[t]=r}),i},getViolenceRes:function(t,e){var i=this.violenceProgram[t].options.filter(function(t){return t.value===e})[0];return i?i.title:"-"},getClinicalProgramRes:function(t,e,i){var r=this.clinicalProgram[t][e].options.filter(function(t){return t.value===i})[0];return r?r.title:"-"},getNonClinicalProgramRes:function(t,e){var i=this.nonClinicalProgram[t].options.filter(function(t){return t.value===e})[0];return i?i.title:"-"},getReportStatusTrans:function(t){return c["a"].reportStatus.filter(function(e){return e.key===t})[0]},getClinicalKeys:function(t){var e=this,i=Object.keys(this.clinicalProgram[t]).filter(function(i){return"-"!==e.getClinicalProgramRes(t,i,e.programReport.program[t][i])});return i},getNonClinicalKeys:function(t){var e=this,i=["budget","env","facilities","hrd","im","rights"].filter(function(t){return"-"!==e.getNonClinicalProgramRes(t,e.programReport.program[t])});return i}},watch:{report:{handler:function(){this.local.items=this.report},deep:!0}}},m=d,v=(i("a2ec"),i("2877")),g=Object(v["a"])(m,r,a,!1,null,"12bbe7fc",null);e["a"]=g.exports},"50be":function(t,e,i){},"77b3":function(t,e,i){"use strict";var r=i("ae3e"),a=i.n(r);a.a},a2ec:function(t,e,i){"use strict";var r=i("d126"),a=i.n(r);a.a},ae3e:function(t,e,i){},c8a6:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container columns"},[i("navigation-bar"),i("div",{staticClass:"column col-4 col-md-12"},[t.local.report?i("report-detail",{attrs:{report:t.local.report}}):t._e()],1),i("div",{staticClass:"column col-8 col-md-12"},[i("div",{staticClass:"panel"},[t._m(0),i("div",{staticClass:"panel-body"},t._l(t.local.responsibilities,function(e,r){return i("div",{key:r,staticClass:"card m-2"},[i("div",{staticClass:"card-header"},[i("div",{staticClass:"card-title"},[t._v("แผนก "+t._s(e.department.name))])]),i("div",{staticClass:"card-body p-1"},[i("table",{staticClass:"table table-striped table-hover"},[t._m(1,!0),e.answers.length?i("tbody",t._l(e.answers,function(e,r){return i("tr",{key:r},[i("td",[t._v(t._s(e.cause))]),i("td",[t._v(t._s(e.prevention))]),i("td",[t._v(t._s(e.responsible))])])}),0):t._e()])])])}),0)])]),i("div",{staticClass:"column col-12 text-right"},[t.USER_RIGHT.includes("ReportAction")&&"hadAllAnswer"===t.local.reportStatus?i("button",{staticClass:"m-2 btn",on:{click:function(e){return t.event("updateStatus","approved")}}},[i("i",{staticClass:"fas fa-check-circle"}),t._v(" Approve")]):t._e(),i("button",{staticClass:"m-2 btn btn-link",on:{click:function(e){return t.printReport()}}},[i("i",{staticClass:"fas fa-print"}),t._v(" Print Report")]),t.USER_RIGHT.includes("ReportAction")?i("button",{staticClass:"m-2 btn btn-error",on:{click:function(e){return t.event("remove")}}},[i("i",{staticClass:"fas fa-trash-alt"}),t._v(" Delete")]):t._e()]),t.local.report?i("report-template",{ref:"reportTemplate",staticClass:"report-template",attrs:{responsibilities:t.local.responsibilities,reportObj:t.local.report}}):t._e()],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel-header"},[i("div",{staticClass:"panel-title text-bold"},[t._v("ส่วนงานที่ต้องแก้ไข")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("สาเหตุ")]),i("th",[t._v("ป้องกัน")]),i("th",[t._v("ผู้รับผิดชอบ")])])])}],n=(i("28a5"),i("768b")),s=(i("96cf"),i("3b8d")),l=i("fa7f"),o=i("43af"),c=i("1712"),p=i("8671"),u=i("9822"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.local.programLists?i("div",{ref:"report",staticClass:"page"},[t._m(0),i("br"),i("hr"),i("section",[i("section",{staticClass:"title-section"},[i("table",{attrs:{width:"100%"}},[i("tr",[i("td",[i("label",[t._v("วันที่เกิดเหตุ")]),t._v(": "+t._s(t.moment(t.report.incidentDate).format("DD-MM-YYYY HH:mm:ss"))+"\n          ")]),i("td",[i("label",[t._v("ผู้ที่ได้รับผลกระทบ")]),t._v(": "+t._s(t.report.affectedPerson)+"\n          ")]),i("td")]),i("tr",[i("td",[i("label",[t._v("HN")]),t._v(": "+t._s(t.report.hn)+"\n          ")]),i("td",[i("label",[t._v("ชื่อ-นามสกุล")]),t._v(": "+t._s(t.report.name)+"\n            ")]),i("td",[i("label",[t._v("อายุ")]),t._v(": "+t._s(t.report.age)+"\n            ")])]),i("tr",[i("td",[i("label",[t._v("วันที่รายงาน")]),t._v(": "+t._s(t.moment(t.report.reportDate).format("DD-MM-YYYY"))+"\n          ")]),i("td",[t.IS_ADMIN?[i("label",[t._v("ผู้รายงาน")]),t._v(": "+t._s(t.report.reporter))]:t._e()],2),i("td")]),i("tr",[i("td",{attrs:{colspan:"3"}},[i("label",[t._v("แผนกบริเวณที่พบเหตุ")]),t._v(": "+t._s(t.report.area)+"\n          ")])])])]),i("hr"),i("section",[i("div",[i("label",[t._v("เหตุการณ์ที่เกิดขึ้นของอุบัติการณ์ครั้งนี้ ("+t._s("non-clinical"===t.report.programType?"Non Clinical":"Clinical")+")")])]),i("br"),"non-clinical"===t.report.programType?i("section",{staticClass:"section"},[i("table",{staticClass:"border",attrs:{width:"100%",border:"1"}},[i("tr",[i("td",[i("label",[t._v(t._s(t.nonClinicalProgram.env.title))]),t._v(": "+t._s(t.getNonClinicalValue("env",t.report.program.env))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.nonClinicalProgram.facilities.title))]),t._v(": "+t._s(t.getNonClinicalValue("facilities",t.report.program.facilities))+"\n            ")])]),i("tr",[i("td",[i("label",[t._v(t._s(t.nonClinicalProgram.im.title))]),t._v(": "+t._s(t.getNonClinicalValue("im",t.report.program.im))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.nonClinicalProgram.hrd.title))]),t._v(": "+t._s(t.getNonClinicalValue("hrd",t.report.program.hrd))+"\n            ")])]),i("tr",[i("td",[i("label",[t._v(t._s(t.nonClinicalProgram.budget.title))]),t._v(": "+t._s(t.getNonClinicalValue("budget",t.report.program.budget))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.nonClinicalProgram.rights.title))]),t._v(": "+t._s(t.getNonClinicalValue("rights",t.report.program.rights))+"\n            ")])])])]):i("section",{staticClass:"section"},[i("label",[t._v("ความเสี่ยงทางคลินิกทั่วไป (Common Clinical Risk)")]),i("table",{staticClass:"border",attrs:{width:"100%",border:"1"}},[i("tr",[i("td",[i("label",[t._v(t._s(t.clinicalProgram.common.IC.title))]),t._v(": "+t._s(t.getClinicalValue("common","IC",t.report.program.common.IC))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.clinicalProgram.common.PCT.title))]),t._v(": "+t._s(t.getClinicalValue("common","PCT",t.report.program.common.PCT))+"\n            ")])]),i("tr",[i("td",[i("label",[t._v(t._s(t.clinicalProgram.common.PTC.title))]),t._v(": "+t._s(t.getClinicalValue("common","PTC",t.report.program.common.PTC))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.clinicalProgram.common.operation.title))]),t._v(": "+t._s(t.getClinicalValue("common","operation",t.report.program.common.operation))+"\n            ")])]),i("tr",[i("td",[i("label",[t._v(t._s(t.clinicalProgram.common.review.title))]),t._v(": "+t._s(t.getClinicalValue("common","review",t.report.program.common.review))+"\n            ")]),i("td")])]),i("br"),i("label",[t._v("ความเสี่ยงทางคลินิกเฉพาะโรค (Disease-Specific Clinical Risk)")]),i("table",{staticClass:"border",attrs:{width:"100%",border:"1"}},[i("tr",[i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.anesthesiology.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","anesthesiology",t.report.program.spacific.anesthesiology))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.dental.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","dental",t.report.program.spacific.dental))+"\n            ")])]),i("tr",[i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.generalEnt.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","generalEnt",t.report.program.spacific.generalEnt))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.gynecology.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","gynecology",t.report.program.spacific.gynecology))+"\n            ")])]),i("tr",[i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.medicine.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","medicine",t.report.program.spacific.medicine))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.optic.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","optic",t.report.program.spacific.optic))+"\n            ")])]),i("tr",[i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.orthopedic.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","orthopedic",t.report.program.spacific.orthopedic))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.pediatrics.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","pediatrics",t.report.program.spacific.pediatrics))+"\n            ")])]),i("tr",[i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.radiology.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","radiology",t.report.program.spacific.radiology))+"\n            ")]),i("td",[i("label",[t._v(t._s(t.clinicalProgram.spacific.surgery.title))]),t._v(": "+t._s(t.getClinicalValue("spacific","surgery",t.report.program.spacific.surgery))+"\n            ")])])]),i("br"),i("label",[t._v("Sentinel Event")]),i("table",{staticClass:"border",attrs:{width:"100%",border:"1"}},[i("tr",[i("td",[i("label",[t._v(t._s(t.clinicalProgram.event.event.title))]),t._v(": "+t._s(t.getClinicalValue("event","event",t.report.program.event.event))+"\n            ")])])])]),i("br"),i("div",[t._v("ระดับความรุนแรง: "+t._s(t.getViolence()))])]),i("hr"),i("label",[t._v("สรุปเหตุการณ์ (ใคร ทำอะไร เมื่อไหร่ และผลจากเหตุการณ์เป็นอย่างไร)")]),i("section",{staticClass:"section border",staticStyle:{"min-height":"30px","margin-bottom":"10px"}},[t._v("\n      "+t._s(t.report.eventBriefing)+"\n    ")]),i("label",[t._v("กิจกรรมที่ควรทำ / การแก้ไขปัญหาเบื้องต้น")]),i("section",{staticClass:"section border",staticStyle:{"min-height":"30px","margin-bottom":"10px"}},[t._v("\n      "+t._s(t.report.causeAnalysis)+"\n    ")]),i("label",[t._v("ความเห็นหัวหน้างาน / ฝ่าย")]),i("section",{staticClass:"section border",staticStyle:{"min-height":"30px","margin-bottom":"10px"}},[t._v("\n      "+t._s(t.report.comment)+"\n    ")])]),i("br"),i("hr"),i("footer",[i("p",[t._v("ผู้ออกรายงาน: "+t._s(t.USER.name))]),i("p",[t._v("วันที่ "+t._s(t.moment().format("DD-MM-YYYY HH:mm")))])])]):t._e()},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("h2",[t._v("โรงพยาบาลมิชชั่นภูเก็ต")]),i("h3",[t._v("รายงานอุบัติการณ์ (Hospital Risk Profile)")])])}],v=i("c1df"),g=i.n(v),f={props:{reportObj:{type:Object,required:!0},responsibilities:{type:Array,required:!0}},components:{},name:"reportTemplate",created:function(){this.fetchConfigReport()},data:function(){return{moment:g.a,local:{programLists:null}}},computed:{report:function(){return this.reportObj?this.reportObj:{}},clinicalProgram:function(){return this.local.programLists&&this.local.programLists.clinical?this.local.programLists.clinical:{}},nonClinicalProgram:function(){return this.local.programLists&&this.local.programLists.nonClinical?this.local.programLists.nonClinical:{}}},methods:{fetchConfigReport:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])(p["a"].getResource({resourceName:u["a"].api.report.config}));case 2:if(r=t.sent,a=Object(n["a"])(r,2),e=a[0],i=a[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.programLists=i.data.reportConfig;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),print:function(){var t=this.$refs.report,e=window.open("","Title","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=600,top=0,left=0"),i=document.createElement("style");i.type="text/css";var r="@media print {@page { margin: 0; }body { margin: 1.5cm 1cm; }}";i.styleSheet?i.styleSheet.cssText=r:(i.appendChild(document.createTextNode(r)),i.appendChild(document.createTextNode(".page{margin: 0 auto;width: 1000px;border: 1px solid #ccc;padding: 15px;color: #595959;}\nhtml{font-size: 14px}\nhr{margin: 15px 0}\nheader {text-align: center;}\ntable {border-collapse: collapse;}\ntable, td {border: 0px solid #ccc; word-wrap: break-word;}\ntable, td, label {font-size: 14px;}\ntable.border td {border: 1px solid #ccc; word-wrap: break-word; padding: 3px;}\ntable.border td label {font-weight: bold;}\n.section.border{padding: 10px;border: 1px solid #ccc;}\nlabel, p {}\nfooter{text-align: right;}"))),e.document.getElementsByTagName("head")[0].appendChild(i),e.document.body.innerHTML=t.innerHTML,e.print()},getReportStatusTrans:function(t){return u["a"].reportStatus.filter(function(e){return e.key===t})[0]},getViolence:function(){var t=this,e="non-clinical"===this.reportObj.programType?"general":"clinical",i=this.local.programLists.violence[e].options.filter(function(i){return i.value===t.reportObj.violence[e]})[0];return i?i.title:""},getNonClinicalValue:function(t,e){var i=this.local.programLists.nonClinical[t].options.filter(function(t){return t.value===e})[0];return i?i.title:""},getClinicalValue:function(t,e,i){if(null===i)return"";var r=this.local.programLists.clinical[t][e].options.filter(function(t){return t.value===i})[0];return r?r.title:void 0}}},_=f,h=(i("421a"),i("2877")),b=Object(h["a"])(_,d,m,!1,null,"da10f960",null),C=b.exports,y={components:{NavigationBar:l["a"],reportDetail:o["a"],reportTemplate:C},data:function(){return{local:{report:null,responsibilities:[],reportTrans:{}}}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchReportTransData();case 2:return t.next=4,this.fetchReportData();case 4:return t.next=6,this.fetchData();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{fetchReportData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])(p["a"].getResource({resourceName:"".concat(u["a"].api.report.index,"/").concat(this.$route.params.key)}));case 2:if(r=t.sent,a=Object(n["a"])(r,2),e=a[0],i=a[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.report=this.adjustData(i.data.report),this.local.reportStatus=i.data.report.status;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])(p["a"].getResource({resourceName:"".concat(u["a"].api.overview.index,"/").concat(this.$route.params.key)}));case 2:if(r=t.sent,a=Object(n["a"])(r,2),e=a[0],i=a[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.responsibilities=i.data.responsibilities;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),fetchReportTransData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["a"])(p["a"].getResource({resourceName:u["a"].api.report.translation}));case 2:if(r=t.sent,a=Object(n["a"])(r,2),e=a[0],i=a[1],!e){t.next=8;break}return t.abrupt("return");case 8:this.local.reportTrans=i.data.trans;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),adjustData:function(t){var e=this,i=t.affectedPerson.split("|"),r=i.map(function(t){return e.local.reportTrans.affectedPerson[t]}).join(", ");return t.affectedPerson=r,t},printReport:function(){this.$refs.reportTemplate.print()},event:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var i,r,a,s,l,o,d,m,v=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:v.length>1&&void 0!==v[1]?v[1]:null,a={},s=!1,t.t0=e,t.next="remove"===t.t0?6:"updateStatus"===t.t0?22:39;break;case 6:return t.next=8,this.$swal({text:"ลบรายงานนี้!",type:"warning",showCancelButton:!0,confirmButtonText:"ตกลง",cancelButtonText:"ยกเลิก",reverseButtons:!0});case 8:if(s=t.sent,s.value){t.next=11;break}return t.abrupt("return");case 11:return r=u["a"].api.report.index,a={id:this.$route.params.key},t.next=15,Object(c["a"])(p["a"].deleteResource({resourceName:r,queryString:a}));case 15:if(l=t.sent,o=Object(n["a"])(l,2),i=o[0],o[1],!i){t.next=21;break}return t.abrupt("return");case 21:return t.abrupt("break",39);case 22:return t.next=24,this.$swal({text:"ยืนยันการทำรายการ",type:"warning",showCancelButton:!0,confirmButtonText:"ตกลง",cancelButtonText:"ยกเลิก",reverseButtons:!0});case 24:if(s=t.sent,s.value){t.next=27;break}return t.abrupt("return");case 27:return r="".concat(u["a"].api.report.approve,"/").concat(this.$route.params.key),t.next=30,Object(c["a"])(p["a"].putResource({resourceName:r,data:{status:"approved"}}));case 30:if(d=t.sent,m=Object(n["a"])(d,2),i=m[0],m[1],!i){t.next=36;break}return t.abrupt("return");case 36:return t.next=38,this.fetchReportData();case 38:return t.abrupt("break",39);case 39:this.$notify({group:"default",text:"ทำรายการสำเร็จ",type:"success"}),"remove"===e&&this.GO_TOPAGE("Report");case 41:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},R=y,x=(i("77b3"),Object(h["a"])(R,r,a,!1,null,"dbb18480",null));e["default"]=x.exports},d126:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7636ce1a.cec3ecb5.js.map