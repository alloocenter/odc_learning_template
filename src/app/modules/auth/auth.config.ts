


// Méthode recommandée avec factory
export function provideKeycloak() {
//   return {
//     provide: KeycloakService,
//     useFactory: () => {
//       const keycloakService = new KeycloakService();
      
//       // Configuration Keycloak
//       const keycloakConfig = {
//         url: 'https://your-keycloak-server.com/auth',
//         realm: 'your-realm',
//         clientId: 'your-client-id'
//       };

//       // Initialisation
//       keycloakService.init({
//         config: keycloakConfig,
//         initOptions: {
//           onLoad: 'check-sso', // ou 'login-required'
//           silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
//           checkLoginIframe: false
//         },
//         enableBearerInterceptor: true,
//         bearerPrefix: 'Bearer',
//         bearerExcludedUrls: ['/assets', '/public']
//       });

//       return keycloakService;
//     }
//   };
}