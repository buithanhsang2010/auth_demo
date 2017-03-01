
import AppComponent from './di/appComponent'
import ServiceModule from './di/serviceModule'

import Routes from './routes/routes'

const appComponent = new Dagger.Builder(AppComponent).build()

var express = require('express')
var app = express()

var config = appComponent.getConfigService()
var dbInfo = config.getDatabaseInfo()
console.log(dbInfo)
var dbConn = appComponent.getDatabaseService().makeConnection()
var authService = appComponent.getAuthService(dbConn);
var routes = new Routes(authService)

app.listen(config.getPortServer(), function() {
	console.log("Start authdemo server");
})