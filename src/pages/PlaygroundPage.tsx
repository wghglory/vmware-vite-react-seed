import {CdsButton} from '@cds/react/button';
import {
  Datagrid,
  DatagridCell,
  DatagridColumn,
  DatagridColumns,
  DatagridFooter,
  DatagridPagination,
  DatagridPlaceholder,
  DatagridRow,
  DatagridRowDetail,
  DatagridRows,
} from '@vmware-react/clarity/dist';
import {useCallback, useState} from 'react';

import logo from '@/assets/logo.svg';
import AppLoading from '@/components/common/AppLoading';
import {formatDate, l10n} from '@/i18n/i18nUtils';

import {userData} from './userData';

export default function PlaygroundPage() {
  const [count, setCount] = useState(0);

  const [pageState, setPageState] = useState({
    currentPage: 1,
    pageSize: 10,
  });

  const totalUsers = userData.users.length;
  const {currentPage, pageSize} = pageState;
  const fromIndex = (currentPage - 1) * pageSize;
  const toIndex = Math.min(fromIndex + pageSize, totalUsers);
  const visibleUsers = userData.users.slice(fromIndex, toIndex);

  const onStateChange = useCallback((pagination: any) => {
    if (pagination.changed) {
      setPageState(pagination.data);
    }
  }, []);

  const renderDatagridColumns = () => {
    return (
      <DatagridColumns>
        <DatagridColumn>ID</DatagridColumn>
        <DatagridColumn>Name</DatagridColumn>
        <DatagridColumn>Date of Birth</DatagridColumn>
        <DatagridColumn>City</DatagridColumn>
      </DatagridColumns>
    );
  };

  const renderDatagridRows = () => {
    return (
      <DatagridRows>
        {visibleUsers.map(user => {
          return (
            <DatagridRow key={user.id} rowKey={user.name}>
              <DatagridCell>{user.id}</DatagridCell>
              <DatagridCell>{user.name}</DatagridCell>
              <DatagridCell>{user.dob.toDateString()}</DatagridCell>
              <DatagridCell>{user.city}</DatagridCell>
              <DatagridRowDetail>
                My Name is {user.name}. I was born on {user.dob.toDateString()}
              </DatagridRowDetail>
            </DatagridRow>
          );
        })}
      </DatagridRows>
    );
  };

  const renderDatagridPlaceholder = () => {
    return <DatagridPlaceholder>No Data</DatagridPlaceholder>;
  };

  const renderDatagridFooter = () => {
    return (
      <DatagridFooter pagination={renderDatagridPagination()}>
        {totalUsers ? (
          <span>
            {fromIndex + 1} - {toIndex} of {totalUsers} Users
          </span>
        ) : (
          'No users'
        )}
      </DatagridFooter>
    );
  };

  const renderDatagridPagination = () => {
    return <DatagridPagination pageSize={pageSize} totalRows={totalUsers} />;
  };

  return (
    <header className="flex flex-col justify-center p-20">
      <img src={logo} className="w-20" alt="logo" />
      <p>Hello Vite + React!</p>
      <AppLoading size="lg" />
      <p>
        <button type="button" onClick={() => setCount(count => count + 1)}>
          count is: {count}
        </button>
      </p>
      <CdsButton>solid clarity button</CdsButton>
      <p className="text-red-500">Tailwind color</p>
      <p>{l10n('common.back')}</p>
      <p>{formatDate(new Date(), 'MMMM d, y, h:mm:ss a')}</p>
      <Datagrid
        onStateChange={onStateChange}
        expandable={true}
        columns={renderDatagridColumns()}
        placeholder={renderDatagridPlaceholder()}
        footer={renderDatagridFooter()}
        rows={renderDatagridRows()}
      />
    </header>
  );
}
