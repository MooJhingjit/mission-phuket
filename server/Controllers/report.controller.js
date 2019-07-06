const ReportRepo = require('@repository/report.repository');
const ManagementRepo = require('@repository/management.repository');
const DepartmentRepo = require('@repository/department.repository');
const AnswerRepo = require('@repository/answer.repository');
const { to, ReE, ReS }  = require('@service/util.service');
const Helper = require('../Libraries/helper.js')
const { trans } = require('../Config')
module.exports = {
  async getReportTranslation(req, res) {
		return ReS(res, {trans});
  },
  async list(req, res) {
    let err, report;
    let tableConfig = await Helper.getTableConfig(req.query.page, 2);
    [err, report] = await to(ReportRepo.getDataTable({
      type: 'table',
      searchType: req.query.searchType,
      // searchStatusType: req.query.searchStatusType,
      // mainSearch: req.query.mainSearch,
      perPage: tableConfig.perPage,
      from: tableConfig.from,
      sort: req.query.sort,
    }));
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
		[err, report] = await to(ReportRepo.update({...req.body, id: req.params.id}, {user: req.userSession}));
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
	}
  
  // async remove(req, res) {
  //   let err, user;
  //   // console.log(req.query);
	// 	[err, user] = await to(UserRepo.remove(req.query)); // , {userObject: req.userObject}
	// 	if(err) return ReE(res, err, 422);
	// 	return ReS(res, {user});
  // }
};