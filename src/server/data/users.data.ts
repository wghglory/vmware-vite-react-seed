import {User} from '../../core/models/user';

const users: User[] = [
  {
    id: 'admin',
    name: 'Admin',
    username: 'admin',
    password: 'test',
    role: 'PROVIDER_ADMIN',
    email: 'admin@vmware.com',
    tenantId: 'tenantId',
  },
  {
    id: 'pa',
    name: 'Provider Admin',
    username: 'pa',
    password: 'vmware',
    role: 'PROVIDER_ADMIN',
    email: 'pa@vmware.com',
    tenantId: 'tenantId',
  },
  {
    id: 'ta',
    name: 'Tenant Admin',
    username: 'ta',
    password: 'vmware',
    role: 'TENANT_ADMIN',
    email: 'ta@vmware.com',
    tenantId: 'tenantId',
  },
  {
    id: 'tu',
    name: 'Tenant User',
    username: 'tu',
    password: 'vmware',
    role: 'TENANT_USER',
    email: 'tu@vmware.com',
    tenantId: 'tenantId',
  },
];

export default users;
