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
		let err, answers;
    [err, answers] = await to(AnswerRepo.get(req.params.id));
    if(err) return ReE(res, err, 400);
		return ReS(res, {answers});
	},
	async create(req, res) {
		let err, answers;
		[err, answers] = await to(AnswerRepo.create(req.body, {user: req.userSession}));
		if(err) return ReE(res, err, 422);
		return ReS(res, {answers});
  },
  // async update(req, res) {
  //   let err, report;
	// 	[err, report] = await to(ReportRepo.update({...req.body, id: req.params.id}, {user: req.userSession}));
	// 	if(err) return ReE(res, err, 422);
	// 	return ReS(res, {report});
  // },
  async remove(req, res) {
    let err, answers;
    // console.log(req.query);
		[err, answers] = await to(AnswerRepo.remove(req.query)); // , {userObject: req.userObject}
		if(err) return ReE(res, err, 422);
		return ReS(res, {answers});
  }
};