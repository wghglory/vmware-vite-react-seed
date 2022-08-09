import {faker} from '@faker-js/faker';

import {Tenant} from '../../models';

const tenants: Tenant[] = [
  {
    id: 'acme',
    name: 'ACME',
    fullName: 'ACME full name',
    enabled: true,
    lastModifiedDate: '2022-01-01',
  },
];
const data = new Array(45).fill(1).map(i => {
  return {
    id: faker.datatype.uuid(),
    name: faker.company.name(),
    fullName: faker.name.firstName(),
    enabled: Math.random() < 0.5,
    lastModifiedDate: faker.date.past().toDateString(),
  };
});

export default [...tenants, ...data];
