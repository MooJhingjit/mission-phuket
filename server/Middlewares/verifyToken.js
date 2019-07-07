const jwt = require('jsonwebtoken')
const { Departments, Users } = require('@model');
const { to, TE }  = require('@service/util.service');
module.exports = (req, res, next) => {
  if (req.url === '/api/signup' || req.url === '/api/login' || req.method === 'OPTIONS' || req.url === '/checking') {
    next()
    return
  }
  let token = req.headers['authorization']
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' })
  }
  jwt.verify(token, 'MissionPhuket', async function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
    let user, department;
    [err, user] = await to(Users.findById(decoded._id));
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
    // console.log(user);
    Departments.findById(user.department, function (err, department) {
      req.userId = decoded._id
      decoded.departmentId = department._id;
      decoded.isAdmin = department.isAdmin;

      // console.log(decoded);
      req.userSession = decoded
      next()
    });

  })
}
