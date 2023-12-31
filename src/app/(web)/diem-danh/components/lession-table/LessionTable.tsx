'use client';

import { Box, FormControlLabel, Paper, Switch, Table, TableBody, TableContainer, TablePagination } from '@mui/material';
import ClassFilter from '../LessionFilter';
import { TableHeadCustom, TableNoData, TableSelectedActions } from '@/common/components/table';
import useTable from '@/common/hooks/useTable';
import { useSelectMultiple } from '@/common/hooks/useSelectMultiple';
import { useSelector } from 'react-redux';
import { dataFilter } from '../../common/slice';
import ClassTableRow from './LessionTableRow';
import TableSkeleton from '../SkeletonTable';
import { IParamsLession } from '../../common/interface';
import { HEAD_TABLE_PROPS } from '../../common/constant';
import { useGetLessionByClass } from '../../common/hooks/useGetLessionByClass';
function LessionTable() {
  const { dense, page, rowsPerPage, setPage, onChangeDense, onChangePage, onChangeRowsPerPage } = useTable();

  const contentFilter = useSelector(dataFilter);

  const dataParams: IParamsLession = {
    classId: contentFilter.classId,
  };

  const { scoreLessionData, isLoadingLession } = useGetLessionByClass(dataParams);
  const listScore = scoreLessionData?.items || [];

  const totalItem = scoreLessionData?.meta?.totalItems || 0;

  const {
    isCheckedAll,
    reset: resetSelect,
    selectedIds,
    handleSelectItem,
    handleCheckAll,
  } = useSelectMultiple(
    listScore.map((score) => {
      return score.id;
    }),
    page + 1,
  );

  const handleDeleteRows = (id: number[]) => {
    resetSelect();
  };

  const isNotFound = !isLoadingLession && !listScore.length;

  return (
    <Paper elevation={3} sx={{ padding: 2, boxShadow: 10 }}>
      <ClassFilter onSetPage={setPage} />
      <TableContainer sx={{ position: 'relative' }}>
        {!!selectedIds.length && (
          <TableSelectedActions
            dense={dense}
            isSelectAll={isCheckedAll}
            numSelected={selectedIds.length}
            rowCount={listScore?.length || 0}
            onSelectAllRows={handleCheckAll}
            actions={<></>}
          />
        )}
        <Table size={dense ? 'small' : 'medium'}>
          <TableHeadCustom
            headLabel={HEAD_TABLE_PROPS}
            rowCount={listScore?.length}
            numSelected={selectedIds.length}
            isSelectAll={isCheckedAll}
            onSelectAllRows={handleCheckAll}
          />
          <TableBody>
            {listScore?.map((row) => (
              <ClassTableRow
                key={row?.id}
                row={row}
                selected={selectedIds.includes(row.id)}
                onSelectRow={(e: any) => handleSelectItem(row.id, e)}
                onDeleteRow={() => {
                  handleDeleteRows([row.id]);
                }}
                onEditRow={() => console.log('hello')}
                onDetailRow={() => console.log('hello')}
              />
            ))}
            <TableSkeleton isLoading={isLoadingLession} row={rowsPerPage} />
            <TableNoData isNotFound={isNotFound} />
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ position: 'relative' }}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={totalItem}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
        <FormControlLabel
          control={<Switch checked={dense} onChange={onChangeDense} />}
          label={'Thu gọn'}
          sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
        />
      </Box>
    </Paper>
  );
}

export default LessionTable;
