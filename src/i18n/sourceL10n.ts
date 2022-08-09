const common = {
  'common.product': 'PRODUCT',
  'common.productSubtitle': 'vCD plugin team react UI',
  'common.productDesc':
    'This product allows you to manage and consume applications uniformly for your multiple geolocation cloud points. It gives both cloud providers and customer organizations more flexibility to optimize performance, control costs, and leverage the best cloud technologies to enable app centric platforms.',
  'common.retry': 'Retry',
  'common.selectAll': 'Select All',
  'common.confirm': 'Confirm',
  'common.back': 'Go Back',
  'common.cancel': 'Cancel',
  'common.lastModifiedDate': 'Last Modified',
  'common.tenants': 'Tenants',
  'common.apiToken': 'API Token',
  'common.about': 'About',
  'common.notFound': 'Oops! Page not found.',
  'common.pending': 'Pending',
  'common.status': 'Status',
  'common.errorContainer': 'Error Container',
  'common.required': 'Required',
  'common.save': 'Save',
  'common.next': 'Next',
  'common.previous': 'Previous',
  'common.reset': 'Reset',
  'common.resetting': 'Resetting',
  'common.activate': 'Activate',
  'common.active': 'Active',
  'common.deactivate': 'Deactivate',
  'common.inactive': 'Inactive',
  'common.fullName': 'Full Name',
  'common.name': 'Name',
  'common.total': 'Total {0} items',
  'common.noAccess': 'Sorry, you do not have access to this page.',
  'common.returnHome': 'You may return home page from here',
};

const auth = {
  'auth.username': 'Username',
  'auth.password': 'Password',
  'auth.login': 'Login',
  'auth.token': 'Token',
  'auth.logout': 'Logout',
  'auth.checkingUserInfo': 'Checking user information...',
  'auth.failLogin': 'Failed to login',
};

const tenant = {
  'tenant.loadingTenant': 'Loading Tenant...',
  'tenant.activateTitle': 'Activate Tenant',
  'tenant.deactivateTitle': 'Deactivate Tenant',
  'tenant.resetTitle': 'Reset Tenant',
  'tenant.activateContent': 'Please confirm if you want to activate tenant <strong>{0}</strong>.',
  'tenant.deactivateContent': 'Please confirm if you want to deactivate tenant <strong>{0}</strong>.',
  'tenant.resetContent':
    'Please confirm if you want to reset tenant <strong>{0}</strong>. You may need to go to Azure portal and transfer subscription back to the home directory.',
};

export const ENGLISH = {
  ...common,
  ...auth,
  ...tenant,
};
