var Knex = require('knex');

export default class DatabaseService {
	
	constructor(databaseInfo) {
		this.databaseInfo = databaseInfo;
	}

	makeConnection(){
		return Knex(this.databaseInfo);
	}
}