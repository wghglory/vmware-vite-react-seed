import {useState} from 'react';

export default function useDatagrid<T>() {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handlePageSizeChange = async (pageSize: number, page: number) => {
    setPageSize(pageSize);
  };
  const handlePageChange = async (page: number) => {
    setPage(page);
  };

  return {page, pageSize, selectedRows, handlePageSizeChange, setSelectedRows, handlePageChange};
}
