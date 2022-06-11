export interface PageModel<T> {
  items: T[];
  pageInfo: PageInfo;
}

interface PageInfo {
  limit: number;
  offset: number;
  total: number;
}

export interface PageQuery {
  offset: number;
  limit: number;
  sortString?: string; // name desc|asc
  filterString?: string; // (name==*s*;enabled==false)
}

export function generatePageQueryString(pageQuery: PageQuery) {
  const {offset, limit, filterString, sortString} = pageQuery;

  let queryString = `offset=${offset}&limit=${limit}`;

  if (filterString) {
    queryString += `&filter=(${filterString})`;
  }
  if (sortString) {
    queryString += `&order=${sortString}`;
  }
  return queryString;
}
