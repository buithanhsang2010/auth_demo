export default class AuthService {

	constructor(databaseService) {
		this.dbConn = databaseService.makeConnection();
	}

	verifyToken(token) {
		return true;
	}

	authenicate(user) {
		var userIds = this.dbConn('users').where({
			user_name: user.user_name,
			password: user.password
			}).select('id')

		return userIds;
	}
}