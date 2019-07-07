const UserRepo = require('@repository/user.repository');
const AuthService = require('@service/auth.service');
const DepartmentRepo = require('@repository/department.repository');

const { to, ReE, ReS }  = require('@service/util.service');

module.exports = {
  async profile(req, res) {
		let err, user, department;
    [err, user] = await to(UserRepo.get(req.userSession));
    // console.log(user);
    [err, department] = await to(DepartmentRepo.get(user.department));
    if(err) return ReE(res, err, 400);
    // delete user.password;\
		return ReS(res, {user, department});
	},
	async login(req, res) {
    let err, token;
    // console.log(req.body);
		[err, token] = await to(AuthService.authUser(req.body));
    // console.log(err);
		if(err) return ReE(res, err, 422);
		return ReS(res, {token});
  },
  async signup(req, res) {
		let err, user;
		[err, user] = await to(UserRepo.signup(req.body));
    // console.log(typeof user);
		if(err) return ReE(res, err, 422);
		return ReS(res, {user});
  },
  async list(req, res) {
		let err, user;
		[err, user] = await to(UserRepo.list());
    if(err) return ReE(res, err, 422);
		return ReS(res, {user});
  },
	async create(req, res) {
		let err, user;
		[err, user] = await to(UserRepo.create(req.body, {user: req.userSession}));
		if(err) return ReE(res, err, 422);
		return ReS(res, {user});
  },
  async update(req, res) {
    let err, user;
		[err, user] = await to(UserRepo.update({...req.body, id: req.params.id}, {user: req.userSession})); // , {userObject: req.userObject}
		if(err) return ReE(res, err, 422);
		return ReS(res, {user});
  },
  async remove(req, res) {
    let err, user;
    // console.log(req.query);
		[err, user] = await to(UserRepo.remove(req.query)); // , {userObject: req.userObject}
		if(err) return ReE(res, err, 422);
		return ReS(res, {user});
  }
	// async get(req, res) {
	// 	let err, user;

	// 	[err, user] = await to(UserRepo.get(req.params.id));

	// 	if(err) return ReE(res, err, 400);

	// 	return ReS(res, {user});
	// },
	// async avatar(req, res) {
	// 	let err, avatar;

	// 	[err, avatar] = await to(UserRepo.avatar(req.params.id));

	// 	if(err) return ReE(res, err, 400);

	// 	return ReS(res, {avatar});
	// }
};