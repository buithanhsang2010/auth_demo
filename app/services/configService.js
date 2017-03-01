export default class ConfigService {

	getDatabaseInfo() {
		return {
			  client: 'sqlite3',
			  connection: {
			    filename: "./mydb.sqlite"
			  }
			}
	}

	getPortServer() {
		return 3000
	}
}