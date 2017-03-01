
import AppComponent from './di/appComponent'
import ServiceModule from './di/serviceModule'

import Router from './routers'

const appComponent = new Dagger.Builder(AppComponent).build()
const Routers = require('./routers/routers.js')

var express = require('express')
var app = express()

var dbInfo = appComponent.getDatabaseInfo()
var dbConn = appComponent.getDatabaseService(dbInfo).makeConnection()
var routes = new Routers(appComponen.getAuthService(dbConn))