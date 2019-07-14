const { Reports, Management, Answer  } = require('@model');
const { to, TE } = require('@service/util.service');


const checkAndUpdateReportStatus = async function(objData){
  let err, report, management, answer;
  let reportId = objData.reportId
  [err, report] = await to(Reports.findById(objData.reportId));
  if(err) TE(err.message);
  [err, management] = await to(Management.find({reportId})); // .countDocuments()
  if(err) TE(err.message);
  [err, answer] = await to(Answer.find({reportId}));
  if(err) TE(err.message);
  let reportStatus = '';
  let countManagement = management.length;
  if (countManagement === 0) {
    reportStatus = 'reportCreated'
  } else {
    let countAnswer = 0
    await Promise.all(
      management.map(async (managementItem) => {
        let answer = await Answer.find({reportId, departmentId: managementItem.departmentId}).countDocuments();
        // console.log(answer);
        if (answer) {
          countAnswer += 1;
        }
      })
    )
    reportStatus = 'departmentSpecified'
    if (countManagement === countAnswer && countAnswer >= 1) {
      reportStatus = 'hadAllAnswer';
    } else if (countManagement > countAnswer && countAnswer >= 1) {
      reportStatus = 'hadSomeAnswer';
    }
  }
  
  console.log(reportStatus);
  await Reports.findByIdAndUpdate(reportId, {status: reportStatus})

};

module.exports.checkAndUpdateReportStatus = checkAndUpdateReportStatus;