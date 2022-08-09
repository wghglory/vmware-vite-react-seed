import {User} from '../../core/models/user';

const users: User[] = [
  {
    id: 'admin',
    name: 'Admin',
    username: 'admin',
    password: 'test',
    role: 'System Administrator',
    email: 'admin@vmware.com',
    tenantId: 'tenantId',
  },
  {
    id: 'pa',
    name: 'Provider Admin',
    username: 'pa',
    password: 'vmware',
    role: 'System Administrator',
    email: 'pa@vmware.com',
    tenantId: 'tenantId',
  },
  {
    id: 'ta',
    name: 'Tenant Admin',
    username: 'ta',
    password: 'vmware',
    role: 'Organization Administrator',
    email: 'ta@vmware.com',
    tenantId: 'tenantId',
  },
  {
    id: 'tu',
    name: 'Organization User',
    username: 'tu',
    password: 'vmware',
    role: 'Organization Administrator',
    email: 'tu@vmware.com',
    tenantId: 'tenantId',
  },
];

export default users;
