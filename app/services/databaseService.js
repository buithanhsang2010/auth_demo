var Knex = require('knex');

export default class DatabaseService {
	
	constructor(config) {
		this.config = config;
	}

	makeConnection(){
		console.log(this.config.getDatabaseInfo());
		return Knex(this.config.getDatabaseInfo());
	}
}