(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347d6f9a"],{"3a0c":function(e,a,l){},a127:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return e.clinicalProgram&&e.nonClinicalProgram&&e.violenceProgram?l("div",{staticClass:"container columns"},[l("navigation-bar"),l("div",{staticClass:"column col-12"},[l("div",{staticClass:"card"},[l("div",{staticClass:"card-header columns"},[l("div",{staticClass:"column col-4 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v("วันที่เกิดเหตุ")]),l("my-date-picker",{attrs:{config:{key:"incidentDate",placeholder:"",rules:"required",validator:e.$validator},value:e.local.incidentDate},on:{input:function(a){e.local.incidentDate=a}}})],1)]),l("div",{staticClass:"column col-4 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v("HN")]),l("my-input",{attrs:{config:{type:"text",key:"hn",placeholder:"",rules:"",validator:e.$validator},value:e.local.hn},on:{input:function(a){e.local.hn=a}}})],1)]),l("div",{staticClass:"column col-4 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v("ชื่อ-นามสกุล")]),l("my-input",{attrs:{config:{type:"text",key:"name",placeholder:"",rules:"",validator:e.$validator},value:e.local.name},on:{input:function(a){e.local.name=a}}})],1)]),l("div",{staticClass:"column col-4 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v("อายุ")]),l("my-input",{attrs:{config:{type:"text",key:"age",placeholder:"",rules:"",validator:e.$validator},value:e.local.age},on:{input:function(a){e.local.age=a}}})],1)]),l("div",{staticClass:"column col-4 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v("วันที่รายงาน")]),l("my-input",{attrs:{config:{type:"text",key:"reportDate",placeholder:"",rules:"required",validator:e.$validator,isDisable:!0},value:e.local.reportDate},on:{input:function(a){e.local.reportDate=a}}})],1)]),l("div",{staticClass:"column col-4 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v("ผู้รายงาน")]),l("my-input",{attrs:{config:{type:"text",key:"reporter",placeholder:"",rules:"required",validator:e.$validator,isDisable:!0},value:e.local.reporter},on:{input:function(a){e.local.reporter=a}}})],1)]),l("div",{staticClass:"column col-4 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v("แผนกบริเวณที่พบเหตุ")]),l("my-input",{attrs:{config:{type:"text",key:"area",placeholder:"",rules:"required",validator:e.$validator},value:e.local.area},on:{input:function(a){e.local.area=a}}})],1)]),l("div",{staticClass:"column col-4 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v("ผู้ที่ได้รับผลกระทบ")]),l("label",{staticClass:"form-radio form-inline"},[l("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.local.affectedPerson,expression:"local.affectedPerson"}],attrs:{type:"radio",name:"affectedPerson",value:"patient"},domProps:{checked:e._q(e.local.affectedPerson,"patient")},on:{change:function(a){return e.$set(e.local,"affectedPerson","patient")}}}),l("i",{staticClass:"form-icon"}),e._v(" ผู้ป่วย\n            ")]),l("label",{staticClass:"form-radio form-inline"},[l("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.local.affectedPerson,expression:"local.affectedPerson"}],attrs:{type:"radio",name:"affectedPerson",value:"relative"},domProps:{checked:e._q(e.local.affectedPerson,"relative")},on:{change:function(a){return e.$set(e.local,"affectedPerson","relative")}}}),l("i",{staticClass:"form-icon"}),e._v(" ญาติ\n            ")]),l("label",{staticClass:"form-radio form-inline"},[l("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.local.affectedPerson,expression:"local.affectedPerson"}],attrs:{type:"radio",name:"affectedPerson",value:"authorities"},domProps:{checked:e._q(e.local.affectedPerson,"authorities")},on:{change:function(a){return e.$set(e.local,"affectedPerson","authorities")}}}),l("i",{staticClass:"form-icon"}),e._v(" เจ้าหน้าที่\n            ")]),l("label",{staticClass:"form-radio form-inline"},[l("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.local.affectedPerson,expression:"local.affectedPerson"}],attrs:{type:"radio",name:"affectedPerson",value:"environment"},domProps:{checked:e._q(e.local.affectedPerson,"environment")},on:{change:function(a){return e.$set(e.local,"affectedPerson","environment")}}}),l("i",{staticClass:"form-icon"}),e._v(" สิ่งแวดล้อม\n            ")])]),e.errors.first("affectedPerson")?l("p",{staticClass:"form-input-hint text-error"},[e._v("กรุณาตรวจสอบข้อมูลข้างต้น")]):e._e()])]),l("div",{staticClass:"card-body"},[l("div",{staticClass:"card p-2"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label text-bold"},[e._v("รูปแบบของเหตุการณ์ที่เกิด")]),l("label",{staticClass:"form-radio form-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.local.programType,expression:"local.programType"}],attrs:{type:"radio",value:"clinical"},domProps:{checked:e._q(e.local.programType,"clinical")},on:{change:function(a){return e.$set(e.local,"programType","clinical")}}}),l("i",{staticClass:"form-icon"}),e._v(" Clinical \n              ")]),l("label",{staticClass:"form-radio form-inline"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.local.programType,expression:"local.programType"}],attrs:{type:"radio",value:"non-clinical"},domProps:{checked:e._q(e.local.programType,"non-clinical")},on:{change:function(a){return e.$set(e.local,"programType","non-clinical")}}}),l("i",{staticClass:"form-icon"}),e._v(" Non Clinical \n              ")])]),"clinical"===e.local.programType?[l("div",{staticClass:"card p-2"},[l("div",{staticClass:"panel-title h6 text-primary"},[e._v("ความเสี่ยงทางคลินิกทั่วไป (Common Clinical Risk) ")]),l("div",{staticClass:"columns p-2"},[l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.common.review.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.common.review,expression:"local.program.common.review"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.common,"review",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.common.review.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.common.PCT.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.common.PCT,expression:"local.program.common.PCT"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.common,"PCT",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.common.PCT.options,function(a,t){return[a.child.length?l("optgroup",{key:t,attrs:{label:a.title}},e._l(a.child,function(t,o){return l("option",{key:o,domProps:{value:a.value}},[e._v(e._s(t.title))])}),0):l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])]})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.common.IC.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.common.IC,expression:"local.program.common.IC"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.common,"IC",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.common.IC.options,function(a,t){return[a.child.length?l("optgroup",{key:t,attrs:{label:a.title}},e._l(a.child,function(t,o){return l("option",{key:o,domProps:{value:a.value}},[e._v(e._s(t.title))])}),0):l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])]})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.common.PTC.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.common.PTC,expression:"local.program.common.PTC"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.common,"PTC",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.common.PTC.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.common.operation.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.common.operation,expression:"local.program.common.operation"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.common,"operation",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.common.operation.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)])])]),l("div",{staticClass:"card p-2 mt-2"},[l("div",{staticClass:"panel-title h6 text-primary"},[e._v("ความเสี่ยงทางคลินิกเฉพาะโรค (Disease-Specific  Clinical Risk)")]),l("div",{staticClass:"columns p-2"},[l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.gynecology.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.gynecology,expression:"local.program.spacific.gynecology"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"gynecology",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.gynecology.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.surgery.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.surgery,expression:"local.program.spacific.surgery"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"surgery",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.surgery.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.medicine.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.medicine,expression:"local.program.spacific.medicine"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"medicine",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.medicine.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.pediatrics.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.pediatrics,expression:"local.program.spacific.pediatrics"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"pediatrics",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.pediatrics.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.orthopedic.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.orthopedic,expression:"local.program.spacific.orthopedic"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"orthopedic",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.orthopedic.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.generalEnt.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.generalEnt,expression:"local.program.spacific.generalEnt"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"generalEnt",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.generalEnt.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.optic.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.optic,expression:"local.program.spacific.optic"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"optic",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.optic.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.anesthesiology.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.anesthesiology,expression:"local.program.spacific.anesthesiology"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"anesthesiology",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.anesthesiology.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.radiology.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.radiology,expression:"local.program.spacific.radiology"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"radiology",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.radiology.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.spacific.dental.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.spacific.dental,expression:"local.program.spacific.dental"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.spacific,"dental",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.spacific.dental.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)])])]),l("div",{staticClass:"card p-2 mt-2"},[l("div",{staticClass:"panel-title h6 text-primary"},[e._v("Sentinel Event")]),l("div",{staticClass:"columns p-2"},[l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.clinicalProgram.event.event.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.event.event,expression:"local.program.event.event"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program.event,"event",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.clinicalProgram.event.event.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)])])])]:[l("div",{staticClass:"card p-2"},[l("div",{staticClass:"panel-title h6 text-primary"},[e._v("ความเสี่ยงทางคลินิกทั่วไป")]),l("div",{staticClass:"columns p-2"},[l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.nonClinicalProgram.env.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.env,expression:"local.program.env"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program,"env",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.nonClinicalProgram.env.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.nonClinicalProgram.facilities.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.facilities,expression:"local.program.facilities"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program,"facilities",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.nonClinicalProgram.facilities.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.nonClinicalProgram.im.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.im,expression:"local.program.im"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program,"im",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.nonClinicalProgram.im.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.nonClinicalProgram.hrd.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.hrd,expression:"local.program.hrd"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program,"hrd",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.nonClinicalProgram.hrd.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.nonClinicalProgram.budget.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.budget,expression:"local.program.budget"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program,"budget",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.nonClinicalProgram.budget.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),l("div",{staticClass:"form-group column col-6"},[l("label",{staticClass:"form-label"},[e._v(e._s(e.nonClinicalProgram.rights.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.program.rights,expression:"local.program.rights"}],staticClass:"form-select",on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.program,"rights",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.nonClinicalProgram.rights.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)])])])]],2),l("div",{staticClass:"card mt-2"},[e._m(0),l("div",{staticClass:"card-body"},[l("div",{staticClass:"columns"},[l("div",{staticClass:"column col-6 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v(e._s(e.violenceProgram.clinical.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.violence.clinical,expression:"local.violence.clinical"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:e.getInputClass("violenceClinical"),attrs:{name:"violenceClinical"},on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.violence,"clinical",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.violenceProgram.clinical.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),e.errors.first("violenceClinical")?l("p",{staticClass:"form-input-hint text-error"},[e._v("กรุณาตรวจสอบข้อมูลข้างต้น")]):e._e()]),l("div",{staticClass:"column col-6 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label require"},[e._v(e._s(e.violenceProgram.general.title))]),l("select",{directives:[{name:"model",rawName:"v-model",value:e.local.violence.general,expression:"local.violence.general"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:e.getInputClass("violenceGeneral"),attrs:{name:"violenceGeneral"},on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.local.violence,"general",a.target.multiple?l:l[0])}}},[l("option",{domProps:{value:null}},[e._v("กรุณาเลือก")]),e._l(e.violenceProgram.general.options,function(a,t){return l("option",{key:t,domProps:{value:a.value}},[e._v(e._s(a.title))])})],2)]),e.errors.first("violenceGeneral")?l("p",{staticClass:"form-input-hint text-error"},[e._v("กรุณาตรวจสอบข้อมูลข้างต้น")]):e._e()])])])]),l("div",{staticClass:"card mt-2"},[e._m(1),l("div",{staticClass:"card-body"},[l("div",{staticClass:"columns"},[l("div",{staticClass:"column col-6 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label"},[e._v("บรรยายสรุปเหตุการณ์ที่เกิด")]),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.local.eventBriefing,expression:"local.eventBriefing"}],staticClass:"form-input",attrs:{placeholder:"",rows:"5"},domProps:{value:e.local.eventBriefing},on:{input:function(a){a.target.composing||e.$set(e.local,"eventBriefing",a.target.value)}}})]),l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label"},[e._v("วิเคราะห์สาเหตุและแนวทางแก้ไข")]),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.local.causeAnalysis,expression:"local.causeAnalysis"}],staticClass:"form-input",attrs:{placeholder:"",rows:"5"},domProps:{value:e.local.causeAnalysis},on:{input:function(a){a.target.composing||e.$set(e.local,"causeAnalysis",a.target.value)}}})])]),l("div",{staticClass:"column col-6 col-sm-12"},[l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label"},[e._v("ความเห็นหัวหน้างาน/ฝ่าย")]),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.local.comment,expression:"local.comment"}],staticClass:"form-input",attrs:{placeholder:"",rows:"5"},domProps:{value:e.local.comment},on:{input:function(a){a.target.composing||e.$set(e.local,"comment",a.target.value)}}})]),l("div",{staticClass:"form-group"},[l("label",{staticClass:"form-label"},[e._v("หมายเหตุ")]),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.local.note,expression:"local.note"}],staticClass:"form-input",attrs:{placeholder:"",rows:"5"},domProps:{value:e.local.note},on:{input:function(a){a.target.composing||e.$set(e.local,"note",a.target.value)}}})])])])])]),l("div",{staticClass:"mt-2 text-right"},[l("button",{staticClass:"m-2 btn",on:{click:function(a){return e.event("add")}}},[l("i",{staticClass:"fas fa-check-circle"}),e._v(" บันทึกข้อมูล")]),e._m(2)])])])])],1):e._e()},o=[function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"card-header"},[l("div",{staticClass:"card-title text-bold"},[e._v("ระดับความรุนแรงทางคลินิก และความรุนแรงทั่วไป")])])},function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"card-header"},[l("div",{staticClass:"card-title text-bold"},[e._v("รูปแบบของการวิเคราะห์และการอธิบาย")])])},function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("button",{staticClass:"m-2 btn btn-error"},[l("i",{staticClass:"fas fa-trash-alt"}),e._v(" ล้างข้อมูล")])}],r=l("cebc"),i=l("768b"),n=(l("7f7f"),l("96cf"),l("3b8d")),s=l("fa7f"),c=l("deaf"),u=l("47b0"),m=l("9822"),p=l("8671"),v=l("1712"),d=l("c1df"),f=l.n(d),g={components:{NavigationBar:s["a"],MyInput:c["a"],MyDatePicker:u["a"]},computed:{clinicalProgram:function(){return this.programLists&&this.programLists.clinical?this.programLists.clinical:null},nonClinicalProgram:function(){return this.programLists&&this.programLists.nonClinical?this.programLists.nonClinical:null},violenceProgram:function(){return this.programLists&&this.programLists.violence?this.programLists.violence:null},programType:function(){return this.local.programType}},data:function(){return{programLists:null,local:{programType:"clinical",incidentDate:null,hn:null,name:null,age:null,reportDate:f()().format("DD-MM-YYYY"),reporter:null,area:null,affectedPerson:null,program:{common:{review:null,PCT:null,IC:null,PTC:null,operation:null},spacific:{gynecology:null,surgery:null,medicine:null,pediatrics:null,orthopedic:null,generalEnt:null,optic:null,anesthesiology:null,radiology:null,dental:null},event:{event:null},env:null,facilities:null,im:null,hrd:null,budget:null,rights:null},violence:{clinical:null,general:null},eventBriefing:null,causeAnalysis:null,comment:null,note:null}}},created:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.local.reporter=this.USER.name,e.next=3,this.fetchConfigReport();case 3:if(!this.$route.params.key){e.next=6;break}return e.next=6,this.fetchData(this.$route.params.key);case 6:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),methods:{fetchData:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(a){var l,t,o,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["a"])(p["a"].getResource({resourceName:"".concat(m["a"].api.report.index,"/").concat(a)}));case 2:if(o=e.sent,r=Object(i["a"])(o,2),l=r[0],t=r[1],!l){e.next=8;break}return e.abrupt("return");case 8:n=t.data.report,"approved"===n.status&&this.GO_TOPAGE("Report"),n.incidentDate=new Date(n.incidentDate),n.reportDate=f()(n.reportDate).format("DD-MM-YYYY"),this.local=n;case 13:case"end":return e.stop()}},e,this)}));function a(a){return e.apply(this,arguments)}return a}(),fetchConfigReport:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var a,l,t,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["a"])(p["a"].getResource({resourceName:m["a"].api.report.config}));case 2:if(t=e.sent,o=Object(i["a"])(t,2),a=o[0],l=o[1],!a){e.next=8;break}return e.abrupt("return");case 8:this.programLists=l.data.reportConfig;case 9:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),getInputClass:function(e){return["form-select",{"is-error":this.errors.has(e)}]},event:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(a){var l,t,o,n,s,c,u,d,g,_,C,y,h=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:h.length>1&&void 0!==h[1]?h[1]:null,this.$route.params.key&&"add"===a&&(a="update"),e.t0=a,e.next="add"===e.t0?5:"remove"===e.t0?26:"update"===e.t0?27:45;break;case 5:return e.next=7,Object(v["a"])(this.$validator.validate());case 7:if(s=e.sent,c=Object(i["a"])(s,2),l=c[0],t=c[1],!l&&t){e.next=13;break}return e.abrupt("return");case 13:return n=Object.assign({},this.local),n.reportDate=f()(this.local.reportDate,"DD-MM-YYYY").format(),n.createdByDepartment=this.USER.department,o=m["a"].api.report.index,e.next=19,Object(v["a"])(p["a"].postResource({resourceName:o,data:Object(r["a"])({},n)}));case 19:if(u=e.sent,d=Object(i["a"])(u,2),l=d[0],t=d[1],!l){e.next=25;break}return e.abrupt("return");case 25:return e.abrupt("break",45);case 26:return e.abrupt("break",45);case 27:return e.next=29,Object(v["a"])(this.$validator.validate());case 29:if(g=e.sent,_=Object(i["a"])(g,2),l=_[0],t=_[1],!l&&t){e.next=35;break}return e.abrupt("return");case 35:return n=Object.assign({},this.local),n.reportDate=f()(this.local.reportDate,"DD-MM-YYYY").format(),o="".concat(m["a"].api.report.index,"/").concat(this.local._id),e.next=40,Object(v["a"])(p["a"].putResource({resourceName:o,data:Object(r["a"])({},n)}));case 40:return C=e.sent,y=Object(i["a"])(C,2),l=y[0],t=y[1],e.abrupt("break",45);case 45:this.$notify({group:"default",text:"ทำรายการสำเร็จ",type:"success"}),"add"===a&&this.GO_TOPAGE("Report");case 47:case"end":return e.stop()}},e,this)}));function a(a){return e.apply(this,arguments)}return a}(),resetProgramForm:function(){this.local.program=Object.assign({},{common:{review:null,PCT:null,IC:null,PTC:null,operation:null},spacific:{gynecology:null,surgery:null,medicine:null,pediatrics:null,orthopedic:null,generalEnt:null,optic:null,anesthesiology:null,radiology:null,dental:null},event:{event:null},env:null,facilities:null,im:null,hrd:null,budget:null,rights:null})}},watch:{}},_=g,C=(l("b46b"),l("2877")),y=Object(C["a"])(_,t,o,!1,null,"7f23cbf9",null);a["default"]=y.exports},b46b:function(e,a,l){"use strict";var t=l("3a0c"),o=l.n(t);o.a}}]);
//# sourceMappingURL=chunk-347d6f9a.7b1a0436.js.map