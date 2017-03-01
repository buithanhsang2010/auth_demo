@Module
export default class MiddlewareModule {

  @Singleton
  @Provides('authMiddleware')
  provideAuthMiddleware(authUseCase, configService, errorService) {
    return new AuthMiddleware(...arguments)
  }
}
