const MiddlewareModule = require('./appModule')
const ServiceModule = require('./serviceModule')

@Component(modules = [MiddlewareModule, ServiceModule])
module.exports = class AppComponent {

}