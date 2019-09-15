const ReportRepo = require('@repository/report.repository');
const ManagementRepo = require('@repository/management.repository');
const DepartmentRepo = require('@repository/department.repository');
const AnswerRepo = require('@repository/answer.repository');
const { to, ReE, ReS }  = require('@service/util.service');
const Helper = require('../Libraries/helper.js')
const { trans, reportConfig } = require('../Config')
module.exports = {
  async getReportConfig(req, res) {
		return ReS(res, {reportConfig});
  },
  async getReportTranslation(req, res) {
    let [err, reportAssociated] = await to(ManagementRepo.getByDepartments([...req.userSession.childDepartments, req.userSession.departmentId]));
    reportAssociated = reportAssociated.map((item) => {
      return item.reportId;
    })
		return ReS(res, {trans, reportAssociated});
  },
  async list(req, res) {
    let err, report, reportAssociated;
    let tableConfig = await Helper.getTableConfig(req.query.page, 10);
    [err, reportAssociated] = await to(ManagementRepo.getByDepartments([...req.userSession.childDepartments, req.userSession.departmentId]));
    [err, report] = await to(ReportRepo.getDataTable({
      type: 'table',
      searchDetail: req.query,
      perPage: tableConfig.perPage,
      from: tableConfig.from,
      sort: req.query.sort,
      reportAssociated
    }, {...req.userSession}));
    if(err) return ReE(res, err, 400);
    let total = (!report) ? 0 : report.total

    return ReS(res, {
      current_page: tableConfig.currentPage,
      from: tableConfig.from,
      last_page: Math.ceil(total / tableConfig.perPage),
      next_page_url: Helper.getPageUrl(req, parseInt(tableConfig.currentPage) + parseInt(1)),
      per_page: tableConfig.perPage, // req.query.per_page
      prev_page_url: Helper.getPageUrl(req, parseInt(tableConfig.currentPage) - parseInt(1)),
      to: tableConfig.to,
      total: total,
      data: (!report) ? [] : report.data,
      msg: 'success'});
	},
  async get(req, res) {
		let err, report;
    [err, report] = await to(ReportRepo.get(req.params.id));
    if(err) return ReE(res, err, 400);
    report.programLists = reportConfig;
		return ReS(res, {report});
  },
	async create(req, res) {
		let err, report;
		[err, report] = await to(ReportRepo.create(req.body, {user: req.userSession}));
		if(err) return ReE(res, err, 422);
		return ReS(res, {report});
  },
  async update(req, res) {
    let err, report;
		[err, report] = await to(ReportRepo.update(
      {...req.body, id: req.params.id},
      {user: req.userSession, type: 'update'}
    ));
		if(err) return ReE(res, err, 422);
		return ReS(res, {report});
  },
  async updateStatus(req, res) {
    let err, report;
		[err, report] = await to(ReportRepo.update(
      {id: req.params.id, status: req.body.status},
      {user: req.userSession, type: 'updateStatus'}
    ));
		if(err) return ReE(res, err, 422);
		return ReS(res, {report});
  },
  async getOverview(req, res) {
    // console.log(req.params);
    let reportId = req.params.id;
    let err, report;
    [err, management] = await to(ManagementRepo.get(reportId));
    if(err) return ReE(res, err, 400);
    // console.log(management);
    try {
      let responsibilities = await Promise.all(
        management.map( async (item) => {
          let department = await DepartmentRepo.get(item.departmentId)
          let answers = await AnswerRepo.get(reportId, item.departmentId)
          return {
            department,
            answers
          }
        })
      )
      return ReS(res, {responsibilities});
    } catch (error) {
      if(err) return ReE(res, error, 400);
    }
    
    // console.log(responsibilities);
    
    // ManagementRepo
    
    // [err, report] = await to(ReportRepo.getOverview(req.params.id));
    // if(err) return ReE(res, err, 400);
		// return ReS(res, {report});
	},
  
  async remove(req, res) {
    let err, report, answer, management;

    [err, answer] = await to(AnswerRepo.removeByCondition({reportId: req.query.id}));
    if(err) return ReE(res, err, 422);
    [err, management] = await to(ManagementRepo.removeByCondition({reportId: req.query.id}));
    if(err) return ReE(res, err, 422);
		[err, report] = await to(ReportRepo.remove(req.query)); // , {userObject: req.userObject}
		if(err) return ReE(res, err, 422);
		return ReS(res, {status: 'success'});
  }
};