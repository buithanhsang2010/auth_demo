
import AppComponent from './di/appComponent'
import ServiceModule from './di/serviceModule'

import Router from './routers'

const appComponent = new Dagger.Builder(AppComponent).build()
const Routers = require('./routers/routers.js')

var express = require('express')
var app = express()

var config = appComponent.getConfigService()
var dbInfo = config.getDatabaseInfo()
var dbConn = appComponent.getDatabaseService(dbInfo).makeConnection()
var routes = new Routers(appComponen.getAuthService(dbConn))

app.listen(config.getPortServer(), function() {
	console.log("Start authdemo server");
})