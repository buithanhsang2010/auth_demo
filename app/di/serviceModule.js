const ConfigService = require('../services/configService')
const DatabaseService = require('../services/databaseService')
const AuthService = require('../services/authenService')

@Module
module.exports = class ServiceModule {

  @Singleton
  @Provides('configService')
  provideConfigService() {
    return new ConfigService(...arguments)
  }

  @Singleton
  @Provides('databaseService')
  provideDatabaseService(configService) {
    return new DatabaseService(...arguments)
  }

   @Provides('authService')
   provideAuthService(databaseConn) {
   	return new DatabaseService(...arguments)
   }
}