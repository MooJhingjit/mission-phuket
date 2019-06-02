const DepartmentRepo = require('@repository/department.repository');
// const AuthService = require('@service/auth.service');
const { to, ReE, ReS }  = require('@service/util.service');

module.exports = {
	async create(req, res) {
		let err, department;
		[err, department] = await to(DepartmentRepo.create(req.body, {user: req.userObject})); // , {userObject: req.userObject}
		if(err) return ReE(res, err, 422);
		return ReS(res, {department});
  }
};