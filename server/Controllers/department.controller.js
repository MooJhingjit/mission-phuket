const DepartmentRepo = require('@repository/department.repository');
// const AuthService = require('@service/auth.service');
const { to, ReE, ReS }  = require('@service/util.service');

module.exports = {
  async list(req, res) {
		let err, department;
		[err, department] = await to(DepartmentRepo.list());
    // if(err) return ReE(res, err, 422);
    // console.log(department);
    if(err) return ReE(res, err, 422);
		return ReS(res, {department});
  },
  async get(req, res) {
		let err, department;
    [err, department] = await to(DepartmentRepo.get(req.params.id));
    if(err) return ReE(res, err, 400);
		return ReS(res, {department});
	},
	async create(req, res) {
		let err, department;
		[err, department] = await to(DepartmentRepo.create(req.body, {user: req.userSession})); // , {userObject: req.userObject}
		if(err) return ReE(res, err, 422);
		return ReS(res, {department});
  },
  async update(req, res) {
    let err, department;
		[err, department] = await to(DepartmentRepo.update({...req.body, id: req.params.id}, {user: req.userSession})); // , {userObject: req.userObject}
		if(err) return ReE(res, err, 422);
		return ReS(res, {department});
  },
  async remove(req, res) {
    let err, department;
    // console.log(req.query);
		[err, department] = await to(DepartmentRepo.remove(req.query)); // , {userObject: req.userObject}
		if(err) return ReE(res, err, 422);
		return ReS(res, {department});
  }
};