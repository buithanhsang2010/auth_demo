export default class AuthService {

	constructor(databaseConn) {
		this.databaseConn = databaseConn;
	}

	verifyToken(token) {
		return true;
	}

	authenicate(user) {
		var userIds = this.databaseConn('users').where(
			user_name: user.user_name,
			password: user.password
			).select('id')

		return userIds;
	}
}