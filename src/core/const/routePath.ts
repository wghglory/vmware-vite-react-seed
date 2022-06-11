export enum RoutePath {
  root = '/',
  public = '/public',
  signIn = '/sign-in',
  noAccess = '/no-access',
  notFound = '*',

  // system operator, PA
  dashboard = '/dashboard',

  // tenant
  tenantHome = '/tenant/home',
}
