const ReportRepo = require('@repository/report.repository');
const { to, ReE, ReS }  = require('@service/util.service');

module.exports = {
	async create(req, res) {
		let err, report;
		[err, report] = await to(ReportRepo.create(req.body, {user: req.userSession}));
		if(err) return ReE(res, err, 422);
		return ReS(res, {report});
  },
  // async update(req, res) {
  //   let err, user;
	// 	[err, user] = await to(UserRepo.update({...req.body, id: req.params.id}, {user: req.userSession})); // , {userObject: req.userObject}
	// 	if(err) return ReE(res, err, 422);
	// 	return ReS(res, {user});
  // },
  // async remove(req, res) {
  //   let err, user;
  //   // console.log(req.query);
	// 	[err, user] = await to(UserRepo.remove(req.query)); // , {userObject: req.userObject}
	// 	if(err) return ReE(res, err, 422);
	// 	return ReS(res, {user});
  // }
};