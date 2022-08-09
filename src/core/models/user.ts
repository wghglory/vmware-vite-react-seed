export interface User {
  username: string;
  password?: string;
  email: string;
  name: string;
  id: string;
  role: Role;
  tenantId: string;
}

export interface SignInPayload {
  username: string;
  password: string;
}
export interface SignInResponse {
  email: string;
  role: Role;
  token: string;
  username: string;
  name: string;
  tenantId: string;
}

// below are vcd session
export interface VcdSession {
  otherAttributes: any;
  link: Link[];
  href: string;
  type: string;
  authorizedLocations: AuthorizedLocations;
  user: string;
  org: string;
  userId: string;
  roles: string;
  locationId: string;
  vCloudExtension: any[];
}

interface AuthorizedLocations {
  location: Location[];
}

interface Location {
  otherAttributes: any;
  link: any[];
  href?: any;
  type?: any;
  id?: any;
  operationKey?: any;
  description?: any;
  tasks?: any;
  name?: any;
  locationId: string;
  locationName?: any;
  siteName: string;
  orgName: string;
  restApiEndpoint: string;
  useMultisiteToken?: any;
  authContext: string;
  apiVersion: string;
  uiEndpoint: string;
  vCloudExtension: any[];
}

interface Link {
  otherAttributes: Object;
  href: string;
  id?: any;
  type?: string;
  name?: string;
  rel: string;
  model?: any;
  vCloudExtension: any[];
}

// export type Role = 'PROVIDER_ADMIN' | 'TENANT_ADMIN' | 'TENANT_USER';
export type Role = 'System Administrator' | 'Organization Administrator' | 'Organization User';
