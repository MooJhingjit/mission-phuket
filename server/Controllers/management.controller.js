const ManagementRepo = require('@repository/management.repository');
const AnswerRepo = require('@repository/answer.repository');
const { to, ReE, ReS }  = require('@service/util.service');

module.exports = {
  // async list(req, res) {
	// 	let err, reports;
  //   [err, reports] = await to(ReportRepo.list());
  //   if(err) return ReE(res, err, 400);
	// 	return ReS(res, {reports});
	// },
  async get(req, res) {
		let err, management;
    [err, management] = await to(ManagementRepo.get(req.params.id));
    if(err) return ReE(res, err, 400);
		return ReS(res, {management});
	},
	async create(req, res) {
		let err, management;
		[err, management] = await to(ManagementRepo.create(req.body, {user: req.userSession}));
		if(err) return ReE(res, err, 422);
		return ReS(res, {management});
  },
  // async update(req, res) {
  //   let err, report;
	// 	[err, report] = await to(ReportRepo.update({...req.body, id: req.params.id}, {user: req.userSession}));
	// 	if(err) return ReE(res, err, 422);
	// 	return ReS(res, {report});
  // },
  async remove(req, res) {
    let err, management, answer;
    [err, management] = await to(ManagementRepo.remove(req.query)); // departmentId:, reportId
    [err, answer] = await to(AnswerRepo.removeBymanagement(req.query)); // departmentId:, reportId
		if(err) return ReE(res, err, 422);
		return ReS(res, {management});
  }
};