const UserRepo = require('@repository/user.repository');
const AuthService = require('@service/auth.service');
const { to, ReE, ReS }  = require('@service/util.service');

module.exports = {
	async login(req, res) {
		let err, token;
		[err, token] = await to(AuthService.authUser(req.body));
		if(err) return ReE(res, err, 422);
    console.log(token);
		return ReS(res, {token});
  },
  async signup(req, res) {
		let err, user;
		[err, user] = await to(UserRepo.signup(req.body));
    // console.log(typeof user);
		if(err) return ReE(res, err, 422);
		return ReS(res, {user});
	},
	// async profile(req, res) {
	// 	let err, user = req.user;

	// 	[err, user] = await to(UserRepo.get(user));

	// 	if(err) return ReE(res, err, 400);

	// 	return ReS(res, {user});
	// },
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