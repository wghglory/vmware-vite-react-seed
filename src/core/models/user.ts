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

export type Role = 'PROVIDER_ADMIN' | 'TENANT_ADMIN' | 'TENANT_USER';
