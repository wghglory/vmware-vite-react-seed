import {AxiosResponse} from 'axios';
import {useEffect} from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';

import {generatePageQueryString, PageModel, PageQuery, Tenant} from '@/models';
import http from '@/utils/axios';

export function useGetTenants(pageQuery: PageQuery) {
  return useQuery<PageModel<Tenant>, Error>(
    ['getTenants', {...pageQuery}],
    () => getTenants(pageQuery).then(res => res.data),
    {
      keepPreviousData: true,
      // staleTime: 5000,
    },
  );
}

export function usePrefetchTenants({data, page, pagination, filterString, sortString}: any, pageQuery: PageQuery) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data && data.pageInfo.total > page * pagination.pageSize) {
      queryClient.prefetchQuery(['getTenants', {...pageQuery}], () => getTenants(pageQuery));
    }
  }, [data, page, pagination.pageSize, filterString, sortString, queryClient, pageQuery]);
}

export async function getTenants(pageQuery: PageQuery) {
  // order: name desc|asc
  // filter: (name==*s*;enabled==false)
  const queryString = generatePageQueryString(pageQuery);

  return await http.get(`/core/tenants?${queryString}`);
}
