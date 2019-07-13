
const api = {
  host: `${window.location.protocol}//${window.location.hostname}:3000`,
  apiEndPoint: `${window.location.protocol}//${window.location.hostname}:3000/api`, // for production
  app: {
    // 'resource': '/app/resource',
    // 'notification': '/app/notification'
  },
  login: '/login',
  user: {
    profile : '/user/profile',
    index: '/users'
  },
  report: {
    index: '/reports',
    config: '/report-config',
    translation: '/report-translation'
  },
  department: {
    index: '/department'
  },
  management: {
    index: '/management'
  },
  answer: {
    index: '/answers'
  },
  overview: {
    index: '/overview'
  }
}

const variable = {
  tokenStorage: 'mission_phuket_token',
  authStorage: 'mission_phuket_auth'
}

const programLists = {
  // clinical: {
  //   common: {
  //     review: {
  //       title: 'การทบทวนเวชระเบียน',
  //       options: [
  //         { title: 'TR-1 Re – Admit ภายใน 28  วันโดยโรคเดิมไม่มีการวางแผน', value: 'TR-1'},
  //         { title: 'TR-2 ผู้ป่วยเสียชีวิตในโรงพยาบาล (ยกเว้นผู้ป่วยที่เสียชีวิตตามวาระของโรค) ', value: 'TR-2'},
  //         { title: 'TR-3 ผู้ป่วยมาตรวจรักษาซ้ำโดยมิได้นัดหมายภายใน 24 ชม.', value: 'TR-3'},
  //         { title: 'TR-4 ผู้ป่วยที่ ADE หรือสงสัยว่าจะมี ADE และมีความรุนแรงระดับตั้งแต่ E ขึ้นไป', value: 'TR-4'},
  //         { title: 'TR-5 ผู้ป่วยที่ได้รับการส่งต่อ (Refer) ไปดูแลในระดับที่สูงขึ้น', value: 'TR-5'},
  //         { title: 'TR-6 ผู้ป่วยที่ย้ายเข้า ICU โดยไม่ได้วางแผน', value: 'TR-6'},
  //         { title: 'TR-7 ผู้ป่วยที่มี Cardiac arrest หรือ Pulmonary arrest และทำCPR ', value: 'TR-7'},
  //         { title: 'TR-8 ผู้ป่วยที่ประสบภาวะแทรกซ้อนจากการระงับความรู้สึกซึ่งมีความรุนแรงตั้งแต่ E ขึ้นไป', value: 'TR-8'},
  //         { title: 'TR-9 ผู้ป่วยที่ได้รับการฉีด Epinephrine หรือการทำ CPR ระว่างการผ่าตัด', value: 'TR-9'},
  //         { title: 'TR-10 ผู้ป่วยที่มีการเปลี่ยนแปลงวิธีการระงับความรู้สึกระหว่างระหว่างการผ่าตัด', value: 'TR-10'},
  //         { title: 'TR-11 ผู้ป่วยได้รับการใส่ ET – TUBE ใน RR', value: 'TR-11'},
  //         { title: 'TR-12 ผู้ป่วยที่รับการผ่าตัดนานเกิน 6 ชม.', value: 'TR-12'},
  //         { title: 'TR-13 ผู้ป่วยได้รับการผ่าตัดแตกต่างกับที่วางแผนไว้', value: 'TR-13'},
  //         { title: 'TR-14 ผู้ป่วยที่เกิดการบาดเจ็บต่ออวัยวะระหว่างการผ่าตัดหรือต้องตัดอวัยวะ', value: 'TR-14'},
  //         { title: 'TR-15 ผู้ป่วยที่ต้องรับไว้ใน ICU หลังการผ่าตัดโดยไม่ได้วางแผน', value: 'TR-15'},
  //         { title: 'TR-16 ผู้ป่วยที่ได้รับการผ่าตัดซ้ำโดยไม่ได้วางแผน', value: 'TR-16'},
  //         { title: 'TR-17 ผู้ป่วยที่มีผลการตรวจทางพยาธิวิทยาเป็นปกติ หรือไม่สอดคล้องกับ DX.ก่อนผ่าตัด', value: 'TR-17'},
  //         { title: 'TR-18 ผู้ป่วยที่มีภาวะ Acute MI ระหว่างผ่าตัด หรือหลังผ่าตัด', value: 'TR-18'},
  //         { title: 'TR-19 มารดาที่มีภาวะแทรกซ้อนระหว่างการคลอด (เช่น Server pre – Eclampsia/ Eclampsia ,PPH)', value: 'TR-19'},
  //         { title: 'TR-20 ทารกแรกเกิดที่มี Apgar Score < 7 ที่ 5 นาที', value: 'TR-20'},
  //         { title: 'TR-21 ค่า Blood Sugar < 50 หรือ > 500 mg/dl หลังได้รับการรักษา', value: 'TR-21'},
  //         { title: 'TR-22 ผู้ป่วยที่ได้รับ massive transfusion (ได้เลือด>10 U.ใน 2-3 hr. หรือ > Total blood volume ใน 24 hr.)', value: 'TR-22'},
  //         { title: 'TR-23 ผู้ป่วยที่มีอาการสงสัยว่าจะมีการเลือด / ส่วนประกอบของเลือด', value: 'TR-23'},
  //       ]
  //     },
  //     PCT: {
  //       title: 'โปรแกรมความเสี่ยงด้านการดูแลผู้ป่วย (PCT)',
  //       options: [
  //         { title: 'คัดกรอง-ประเมินผู้ป่วยล่าช้า', value: '1', child: []},
  //         { title: 'การวินิจฉัยล่าช้า/การรักษาผิดพลาด', value: '2', child: []},
  //         { title: 'ผู้ป่วยเสียชีวิตจากกระบวนการดูแลรักษาผิดพลาด', value: '3', child: []},
  //         { title: 'กลับมารักษาซ้ำภายใน 48 ชม./ 28 วัน/ 7 วัน ด้วยโรค/ภาวะเดิม', value: '4', child: []},
  //         { title: 'การระบุตัวผู้ป่วยผิดพลาด (Patient   Identification)', value: '', child: [
  //           { title: 'เวชระเบียนผิดคน/ติดสติ๊กเกอร์ผิด', value: '5.1'},
  //           { title: 'ระบุตัวผู้ป่วยในใบนัดผิดคน', value: '5.2'},
  //           { title: 'ระบุตัวผู้ป่วยในการเก็บสิ่งส่งตรวจผิดคน', value: '5.3'},
  //           { title: 'ระบุตัวผู้ป่วยในการให้ยาผิดคน', value: '5.4'},
  //           { title: 'ระบุตัวทารกแรกเกิดผิดคน', value: '5.5'}
  //         ]},
  //         { title: 'ระบบนัด ผิดแพทย์/ผิดเวลา/ผิดคลินิก/ให้ข้อมูลไม่ครบ ไม่ถูกต้อง', value: '6', child: []},
  //         { title: 'การส่งต่ออาการ/ประวัติผู้ป่วย ไม่ครบ/ส่งผิดพลาด/ไม่ได้ส่ง', value: '7', child: []},
  //         { title: 'การสื่อสารกับผู้ป่วย/เจ้าหน้าที่ ไม่ได้ให้ข้อมูล/ให้ข้อมูลไม่ถูกต้อง', value: '8', child: []},
  //         { title: 'การบันทึกข้อมูลไม่ครบถ้วน/ไม่ได้บันทึกข้อมูล/ข้อมูลไม่ถูกต้อง/ข้อมูลไม่อัพเดท', value: '9', child: []},
  //         { title: 'ติดต่อเจ้าหน้าที่/แพทย์ไม่ได้', value: '10', child: []},
  //         { title: 'ตรวจวิเคราะห์ Lab ผิดพลาด/ล่าช้า/ผิดวิธี', value: '11', child: []},
  //         { title: 'ส่งตรวจทางห้องปฏิบัติการไม่ครบ/ไม่ส่งตรวจ/สิ่งส่งตรวจผิด', value: '12', child: []},
  //         { title: 'จ่ายเลือดผิดพลาด', value: '13', child: []},
  //         { title: 'ผู้ป่วยได้รับอาหารไม่เหมาะสมตามความต้องการพื้นฐาน/การเจ็บป่วย', value: '14', child: []},
  //         { title: 'ผู้ป่วยได้รับอาหารที่มีการปนเปื้อน', value: '15', child: []},
  //         { title: 'เกิดภาวะแทรกซ้อนหลังทำการรักษา', value: '16', child: []},
  //         { title: 'ผู้ป่วยลื่นล้ม/ตกเตียง', value: '17', child: []},
  //         { title: 'เกิดแผลกดทับ', value: '18', child: []},
  //         { title: 'ผ่าตัดซ้ำโดยไม่ได้วางแผน', value: '19', child: []},
  //         { title: 'Un plan ICU', value: '20', child: []},
  //         { title: 'ภาวะแทรกซ้อนจากการใช้เครื่องมือ เช่น Burn, trauma', value: '21', child: []},
  //       ]
  //     },
  //     IC: {
  //       title: 'โปรแกรมความเสี่ยงด้านการป้องกันและควบคุมการติดเชื้อ (IC)',
  //       options: [
  //         { title: 'การติดเชื้อในโรงพยาบาล', value: '', child: [
  //           { title: 'VAP', value: '1.1'},
  //           { title: 'CAUTI', value: '1.2'},
  //           { title: 'Line-BSI', value: '1.3'},
  //           { title: 'SSI', value: '1.4'},
  //           { title: 'การติดเชื้อสะดืออักเสบ', value: '1.5'},
  //           { title: 'การติดเชื้อดื้อยา', value: '1.6'}
  //         ]},
  //         { title: 'อุบัติเหตุจากเข็ม/ของมีคมทิ่ม/ตำ', value: '2', child: []},
  //         { title: 'อุบัติเหตุจากการสัมผัสสารคัดหลั่ง/เลือด', value: '3', child: []},
  //         { title: 'ไม่ปฏิบัติตามแนวทางของ IC', value: '4', child: []},
  //         { title: 'เกิดความผิดพลาดของการแพร่ระบาดของเชื้อโรค (โรคติดต่อ/โรคอุบัติใหม่-อุบัติซ้ำ)', value: '5', child: []},
  //         { title: 'ของติดเชื้อติดมากับผ้าที่ส่งซัก', value: '6', child: []},
  //       ]
  //     },
  //     PTC: {
  //       title: 'โปรแกรมความเสี่ยงด้านระบบยา/ความคลาดเคลื่อนทางยา(PTC)',
  //       options: [
  //         {title: 'ความคลาดเคลื่อนจากการสั่งยา (สั่งยาผิด/ไม่ครบ/วิธีใช้ไม่ถูก): Prescribing error ', value: '1'},
  //         {title: 'ความคลาดเคลื่อนจากการจ่ายยา/สารน้ำ/เลือด(ผิดชนิด/ผิดคน/ผิดจำนวน) : Dispensing error', value: '2'},
  //         {title: 'ผู้ป่วยแพ้ยาซ้ำ/แพ้เลือด', value: '3'},
  //         {title: 'ความคลาดเคลื่อนจากการบริหารยา (แจกยาผิด/แจกยาไม่ครบ/ลืมให้ยา/ฉีดยาผิด/ให้เลือดผิด):Administration error', value: '4'},
  //         {title: 'ความคลาดเคลื่อนจากการรับคำสั่ง/จัดยา/สารน้ำ/เลือด ผิด (คัดลอกคำสั่งผิด/คีย์ยาผิด/จัดเตรียมผิด): Transcribing error', value: '5'},
  //         {title: 'ผู้ป่วยมีอาการไม่พึงประสงค์จากการใช้ยา', value: '6'},
  //         {title: 'ไม่มียา/สารน้ำ/เลือด จ่ายให้ผู้ป่วย', value: '7'},
  //         {title: 'ยาเสื่อมสภาพ/หมดอายุ', value: '7'},
  //       ]
  //     },
  //     operation: {
  //       title: 'โปรแกรมความเสี่ยงด้านการผ่าตัด/วิสัญญี',
  //       options: [
  //         {title: 'งด/เลื่อนผ่าตัด/ไม่พร้อมผ่าตัด', value: '1'},
  //         {title: 'ภาวะแทรกซ้อนจากการผ่าตัด', value: '2'},
  //         {title: 'ทำ spinal block ไม่ถูกต้อง', value: '3'},
  //         {title: 'เตรียมผู้ป่วยผ่าตัดไม่พร้อม/ไม่ถูกต้อง', value: '4'},
  //         {title: ' ภาวะแทรกซ้อนจากการให้ยาระงับความรู้สึก', value: '5'},
  //         {title: ' ลืมสิ่งแปลกปลอมไว้ในตัวผู้ป่วย ', value: '6'},
  //         {title: 'เสียชีวิตระหว่างผ่าตัด ', value: '7'},
  //         {title: 'ภาวะแทรกซ้อนทางวิสัญญี', value: '8'},
  //         {title: 'ตัดอวัยวะออกโดยไม่ได้วางแผน', value: '9'},

  //       ]
  //     },
  //   },
  //   spacific: {
  //     gynecology: {
  //       title: 'การทบทวนเวชระเบียน',
  //       options: [
  //         { title: 'Pregnancy induced hypertension', value: '1'},
  //         { title: 'Postpartum hemorrhage', value: '2'},
  //         { title: 'Labour', value: '3'},
  //         { title: 'Ectopic pregnancy', value: '4'},
  //         { title: 'Ecclampsia / convulsion', value: '5'},
  //         { title: 'Hypovolemic shock', value: '6'},
  //         { title: 'Severe birth asphyxia', value: '7'},
  //         { title: 'Birth trauma', value: '8'},
  //         { title: 'Rupture uterine', value: '9'},
  //         { title: 'Rupture ectopic pregnancy', value: '10'},
  //         { title: 'Pregnancy induced hypertension', value: '11'},
  //         { title: 'Postpartum hemorrhage', value: '12'},
  //         { title: 'Preterm', value: '13'},
  //         { title: 'Thalassemia', value: '14'},
  //         { title: 'Ecclampsia / convulsion', value: '15'},
  //         { title: 'Hysterectomy/Blood Tx', value: '16'},
  //         { title: 'Severe birth asphyxia', value: '17'},
  //         { title: 'LBW', value: '17'},
  //         { title: 'Death after Cordocentesis', value: '19'}
  //       ]
  //     },
  //     surgery: {
  //       title: 'ความเสี่ยงเฉพาะโรคสาขาศัลยกรรม',
  //       options: [
  //         {title: 'Acute appendicitis', value: '1'},
  //         {title: 'Multiple trauma', value: '2'},
  //         {title: 'Limb injuries', value: '3'},
  //         {title: 'IICP/Herniation', value: '4'},
  //         {title: 'Ruptured', value: '5'},
  //         {title: 'Shock', value: '6'},
  //         {title: 'Replantation failure', value: '7'},
  //         {title: 'Head injuries', value: '8'},
  //         {title: 'UGIB', value: '9'},
  //         {title: 'CA breast', value: '10'},
  //         {title: 'Nephrolithotomy', value: '11'},
  //         {title: 'Death/rebleeding', value: '12'},
  //         {title: 'Cx', value: '13'},
  //         {title: 'Pain/SSI', value: '14'},
  //       ]
  //     },
  //     medicine: {
  //       title: 'ความเสี่ยงเฉพาะโรคสาขาอายุรกรรม',
  //       options: [
  //         {title: 'Myocardial infarction', value: '1'},
  //         {title: 'Cerebrovascular disease', value: '2'},
  //         {title: 'Tuberculosis', value: '3'},
  //         {title: 'Diabetic Foot', value: '4'},
  //         {title: 'Shock/CHF', value: '5'},
  //         {title: 'IICP/Rebleeding', value: '6'},
  //         {title: 'Relapse/Reinfection', value: '7'},
  //         {title: 'Limb loss', value: '8'}
  //       ]
  //     },
  //     pediatrics: {
  //       title: 'ความเสี่ยงเฉพาะโรคสาขากุมารเวชกรรม',
  //       options: [
  //         {title: 'Dengue HF', value: '1'},
  //         {title: 'RDS', value: '2'},
  //         {title: 'High Fever', value: '3'},
  //         {title: 'Diarrhea', value: '4'},
  //         {title: 'Asthma', value: '5'},
  //         {title: 'Hemorrhage / Shock', value: '6'},
  //         {title: 'Pneumothorax', value: '7'},
  //         {title: 'Convulsion', value: '8'},
  //         {title: 'Electrolyte imbalance', value: '9'},
  //         {title: 'Respiratory Failure', value: '10'},
  //         {title: 'Pneumonia', value: '11'},
  //         {title: 'Preterm', value: '12'},
  //         {title: 'Death', value: '13'},
  //         {title: 'Hypothermia', value: '14'},
  //         {title: 'RDS', value: '15'}
  //       ]
  //     },
  //     orthopedic: {
  //       title: 'ความเสี่ยงเฉพาะโรคสาขาศัลยกรรมออร์โธปิดิกส์',
  //       options: [
  //         {title: 'Multiple fracture', value: '1'},
  //         {title: 'Open Fracture', value: '2'},
  //         {title: 'Instrument insertion', value: '3'},
  //         {title: 'Closed Fracture BB', value: '4'},
  //         {title: 'Shock', value: '5'},
  //         {title: 'Osteomyelitis', value: '6'},
  //         {title: 'Wound infection', value: '7'},
  //         {title: 'Broken plate', value: '8'},
  //         {title: 'Compartment Synd', value: '9'}
  //       ]
  //     },
  //     generalEnt: {
  //       title: 'ความเสี่ยงเฉพาะโรคสาขาศัลยกรรมทั่วไป- ENT',
  //       options: [
  //         {title: 'Rupture Appendicitis', value: '1'},
  //         {title: 'Sepsis', value: '2'},
  //         {title: 'Bleeding', value: '3'},
  //         {title: 'Pneumothorax', value: '4'},
  //         {title: 'Hematoma', value: '5'}
  //       ]
  //     },
  //     optic: {
  //       title: 'ความเสี่ยงเฉพาะโรคสาขาโสต ศอ นาสิก/จักษุ',
  //       options: [
  //         {title: 'Larygeal / thyroid operation', value: '1'},
  //         {title: 'Tonsillectomy', value: '2'},
  //         {title: 'Cataract Operation', value: '3'},
  //         {title: 'Upper airway obstruction', value: '4'},
  //         {title: 'Acute bleeding', value: '5'},
  //         {title: 'Infection', value: '6'}
  //       ]
  //     },
  //     anesthesiology: {
  //       title: 'ความเสี่ยงเฉพาะโรคด้านวิสัญญีวิทยา',
  //       options: [
  //         {title: 'Regional anesthesia', value: '1'},
  //         {title: 'Intraop-postoperation', value: '2'},
  //         {title: 'Failure', value: '3'},
  //         {title: 'Postspinal headache', value: '4'},
  //         {title: 'Cardiac arrest', value: '5'},
  //         {title: 'Hypoxia', value: '6'}
  //       ]
  //     },
  //     radiology: {
  //       title: 'ความเสี่ยงเฉพาะโรค  ด้านรังสีวิทยา',
  //       options: [
  //         {title: 'Contrast media intervention', value: '1'},
  //         {title: 'Anaphylaxis/Shock', value: '2'},
  //         {title: 'Allergy', value: '3'}
  //       ]
  //     },
  //     dental: {
  //       title: 'ความเสี่ยงเฉพาะโรค ด้านทันตกรรม',
  //       options: [
  //         {title: 'Dry socket', value: '1'},
  //         {title: 'รากฟันเทียมหลุด', value: '2'},
  //         {title: 'วัสดุฟันหลุดก่อน 3 เดือน', value: '3'}
  //       ]
  //     },
  //   },
  //   event: {
  //     event: {
  //       title: 'Sentinel Event',
  //       options: [
  //         {title: 'ผู้ป่วยฆ่าตัวตาย หรือถูกฆาตกรรมในโรงพยาบาล', value: '1'},
  //         {title: 'ผ่าตัดผิดข้าง / ผิดคน / ผิดชนิด / เสียชีวิตหลังผ่าตัด ', value: '2'},
  //         {title: 'ลืมเครื่องมือหรือวัสดุทางการแพทย์ไว้ในตัวผู้ป่วยจากการผ่าตัด', value: '3'},
  //         {title: 'ให้เลือดผิดกรุ๊ป จนทำให้เกิด Hemolytic Blood Tranfusion Reaction', value: '4'},
  //         {title: 'การให้ยาผิด / แพ้ยาซ้ำ จนทำให้ผู้ป่วยเกิดอันตรายถาวร/ต้องทำการช่วยชีวิต/เสียชีวิต', value: '5'},
  //         {title: 'มารดาเสียชีวิต หรือเกิดภาวะแทรกซ้อนรุนแรงเนื่องจากการเจ็บครรภ์และการคลอดบุตร', value: '6'},
  //         {title: 'ส่งมอบทารกแก่มารดาผิดคน', value: '7'},
  //         {title: 'ผู้ป่วย / ทารก / ถูกลักพาตัว / สูญหาย', value: '8'},
  //         {title: 'อัคคีภัย / วินาศภัย', value: '9'},
  //         {title: 'กรณีฟ้องร้อง หรือเผยแพร่ต่อเสื่อมวลชน (ทุกกรณีที่ตาม RM Team)', value: '10'},

  //       ]
  //     },
  //   }
  // },
  // nonClinical: {
  //   env: {
  //     title: 'โปรแกรมความเสี่ยงด้านสิ่งแวดล้อมและความปลอดภัย (ENV)',
  //     options: [
  //       {title: 'ระบบไฟฟ้าขัดข้อง', value: '1'},
  //       {title: 'ทรัพย์สินสูญหาย', value: '2'},
  //       {title: 'เจ้าหน้าที่บาดเจ็บจากการทำงาน', value: '3'},
  //       {title: 'ออกซิเจน,แก๊ส หมด/รั่ว/ระเบิด', value: '4'},
  //       {title: 'ระบบประปาขัดข้อง', value: '5'},
  //       {title: 'ผู้ป่วย/เจ้าหน้าที่ ถูกทำร้าย ข่มขู่ คุกคาม', value: '6'},
  //       {title: 'รถเกิดอุบัติเหตุระหว่างทาง', value: '7'},
  //       {title: 'โครงสร้าง/อาคาร ชำรุด', value: '8'},
  //       {title: 'เครื่องปรับอากาศไม่ทำงาน น้ำรั่ว', value: '9'},
  //       {title: 'มีสัตว์/แมลงรบกวน', value: '10'},
  //       {title: 'การจัดการขยะ ผิดถัง/ผิดวิธี', value: '11'},
  //       {title: 'ห้องน้ำไม่พร้อมใช้ ชำรุด/ไม่พอใช้', value: '12'},
  //       {title: 'การจัดการสารเคมีผิดพลาด/ผิดวิธี', value: '13'},
  //     ]
  //   },
  //   facilities: {
  //     title: 'โปรแกรมความเสี่ยงด้านเครื่องมือ อุปกรณ์และสิ่งอำนวยความสะดวก',
  //     options: [
  //       {title: 'เครื่องมือ/อุปกรณ์ทางการแพทย์ สูญหาย/ ไม่พร้อมใช้/ ขัดข้อง/ ไม่เพียงพอ/ ไม่ครบ /มีสิ่งแปลกปลอม/ระบุรายการไม่ถูกต้อง', value: '1'},
  //       {title: 'อุปกรณ์ เครื่องมือ อื่นๆติดมากับผ้าที่ส่งซัก', value: '2'},
  //       {title: 'ยานพาหนะ ไม่เพียงพอ ไม่พร้อมใช้ สูญหาย', value: '3'}
  //     ]
  //   },
  //   im: {
  //     title: 'โปรแกรมความเสี่ยงด้านเวชระเบียนและสารสนเทศ(IM)',
  //     options: [
  //       {title: 'ข้อมูล, เวชระเบียน ไม่สมบูรณ์/สูญหาย', value: '1'},
  //       {title: 'ส่งSecond sheet ,รายงาน,หนังสือ,เอกสารผิดแผนก', value: '2'},
  //       {title: 'ลงบันทึกข้อมูลไม่ครบถ้วน/ผิดพลาด', value: '3'},
  //       {title: 'การสื่อสารผิดพลาด/ขัดข้อง', value: '4'},
  //       {title: 'เกิดความผิดพลาดด้านข้อมูล สารสนเทศ ไม่ถูกต้อง/ไม่ครบถ้วน/ไม่บันทึก)', value: '5'},
  //       {title: 'ระบบขัดข้อง ไม่พร้อมใช้', value: '6'},
  //       {title: 'ความผิดพลาดทางการเงิน/บัญชี', value: '7'},
  //     ]
  //   },
  //   hrd: {
  //     title: 'โปรแกรมความเสี่ยงด้านการบริหารและพัฒนาทรัพยากรบุคคล (HRD)',
  //     options: [
  //       {title: 'อัตรากำลังไม่เพียงพอ', value: '1'},
  //       {title: 'สมรรถนะ/ทักษะ/ความรู้ในการทำงานไม่เพียงพอ', value: '2'},
  //       {title: 'เจ้าหน้าที่มีภาวะเสี่ยง/เจ็บป่วยทางด้านสุขภาพ', value: '3'},
  //       {title: 'พฤติกรรมบริการไม่เหมาะสม', value: '4'},
  //       {title: 'เกิดความขัดแย้งทำให้เกิดผลกระทบต่อการทำงาน', value: '5'},
  //       {title: 'ไม่มีการจัดทำแนวทางการปฏิบัติเรื่องค่าตอบแทน', value: '6'},
  //     ]
  //   },
  //   budget: {
  //     title: '5.โปรแกรมความเสี่ยงด้านการเงิน งบประมาณและพัสดุ',
  //     options: [
  //       {title: '1.เกิดความผิดพลาดของการจัดการทรัพย์สิน ไม่ถูกระเบียบ/ไม่ตรงตามทะเบียน', value: '1'},
  //       {title: '2.เกิดความผิดพลาดเกี่ยวกับเอกสารการรับและเบิกจ่ายเงิน', value: '2'},
  //       {title: '3.เกิดความผิดพลาดในการส่งมอบเงินและเบิกจ่ายเงิน ไม่มีหลักฐานการส่งมอบ/ไม่ถูกระเบียบขั้นตอน/ยอดเงินรวมไม่ตรง', value: '3'},
  //       {title: '4.เกิดความผิดพลาดด้านการควบคุมและแจกจ่ายพัสดุ ไม่ถูกระเบียบ /เกินราคามาตรฐาน', value: '4'},
  //       {title: '5.เกิดความผิดพลาดด้านการจัดการคลังพัสดุ/วางระบบปฏิบัติงาน (ตรวจรับ/จ่ายเงิน)', value: '5'},
  //       {title: '6.เกิดความล่าช้าในการเบิกจ่ายเงิน', value: '6'}
  //     ]
  //   },
  //   rights: {
  //     title: 'โปรแกรมด้านสิทธิ จริยธรรม และพฤติกรรมบริการ',
  //     options: [
  //       {title: 'ปฏิบัติโดยมีอคติ และ / หรือ ใช้อำนาจหน้าที่เพื่อผลประโยชน์ส่วนตน', value: '1'},
  //       {title: 'ประพฤติตนและประกอบกิจแห่งวิชาชีพโดยไม่ถูกต้องตามกฎหมาย', value: '2'},
  //       {title: 'มีการละเมิดสิทธิผู้ป่วยข้อใดข้อหนึ่งเกิดขั้นในขั้นตอนกระบวนการให้บริการ', value: '3'},
  //       {title: 'ละเลยการปฏิบัติหน้าที่ หรือปฏิบัติหน้าที่โดยไม่ใช้ความรู้ตามหลักวิชาการ', value: '4'},
  //       {title: 'เกิดเหตุการณ์การทุจริตในหน้าที่', value: '5'},
  //       {title: 'แสดงพฤติกรรมบริการไม่เหมาะสม / มีข้อร้องเรียนด้านพฤติกรรมบริการ', value: '6'}
  //     ]
  //   },
  // },
  // violence:  {
  //   clinical: {
  //     title: 'ระดับความรุนแรงทางคลินิก',
  //     options: [
  //       {title: 'ไม่ระบุระดับความรุนแรง', value: '0'},
  //       {title: 'เหตุการณ์ที่มีโอกาสที่จะก่อให้เกิดความคาดเคลื่อน', value: 'A'},
  //       {title: 'เกิดความคาดเคลื่อนแต่ไม่ถึงผู้ป่วย', value: 'B'},
  //       {title: 'เกิดความคาดเคลื่อนขึ้นกับผู้ป่วยแต่ไม่ทำให้ผู้ป่วยได้รับอันตราย', value: 'C'},
  //       {title: 'เกิดความคาดเคลื่อนขึ้นกับผู้ป่วย ต้องเฝ้าระวังให้มั่นใจว่าไม่เกิดอันตรายกับผู้ป่วย', value: 'D'},
  //       {title: 'เกิดความคาดเคลื่อนขึ้นกลับผู้ป่วยส่งผลให้เกิดอันตรายชั่วคราวและต้องบำบัดรักษา', value: 'E'},
  //       {title: 'เกิดความคาดเคลื่อนขึ้นกับผู้ป่วยส่งผลให้เกิดอันตรายชั่วคราวต้องนอนรพ.หรือนอนรพ.นานขึ้น', value: 'F'},
  //       {title: 'เกิดความคาดเคลื่อนขึ้นกับผู้ป่วยส่งผลให้เกิดอันตรายแก่ผู้ป่วย', value: 'G'},
  //       {title: 'เกิดความคาดเคลื่อนขึ้นกับผู้ป่วยส่งผลให้ต้องทำการช่วยชีวิต', value: 'H'},
  //       {title: 'เกิดความคาดเคลื่อนขึ้นกับผู้ป่วยอาจเป็นสาเหตุของการเสียชีวิต (Sentinel event)', value: 'I'},

  //     ]
  //   },
  //   general: {
  //     title: 'ระดับความรุนแรงทั่วไป',
  //     options: [
  //       {title: 'ไม่ระบุระดับความรุนแรง', value: '0'},
  //       {title: 'เหตุการณ์ไม่พึงประสงค์ที่อาจก่อให้เกิดผลเสียต่อระบบบริการหรือก่อให้เกิดผลเสียต่อทรัพย์สิน (แต่ยังไม่เกิด)', value: '1'},
  //       {title: 'เหตุการณ์ไม่พึงประสงค์ที่มีผลกระทบต่อระบบงานหรือบริการน้อย (ระบบบริการยังดำเนินการต่อไปได้) และก่อให้เกิดความสูญเสียต่อทรัพย์สินน้อยกว่า 5000 บาท', value: '2'},
  //       {title: 'เหตุการณ์ไม่พึงประสงค์ที่ทำให้ระบบงานหรือบริการไม่สามารถดำเนินได้ตามปกติ น้อยกว่า 3 วันหรือก่อให้เกิดความสูญเสียต่อทรัพย์สินน้อยกว่า 10000 บาท', value: '3'},
  //       {title: 'เหตุการณ์ไม่พึงประสงค์ที่ทำให้ระบบงานหรือบริการไม่สามารถดำเนินการได้ปกติมากกว่า 5 วันหรือก่อให้เกิดความสูญเสียต่อทรัพย์สินมากกว่า 10000 บาท', value: '4'},

  //     ]
  //   }
  // }
}

const privilege = ['Settings'] // for admin

export default {
  api,
  variable,
  programLists,
  privilege
}
