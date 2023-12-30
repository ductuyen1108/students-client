import { Checkbox, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import { IPropTableRow } from '../../common/interface';
import { convertDateString } from '@/common/utils/convertData';

export default function ClassTableRow({
  row,
  selected,
  onSelectRow,
  onDeleteRow,
  onEditRow,
  onDetailRow,
}: IPropTableRow) {
  const { id, title, startTime, endTime, content, attended, class: classData } = row;

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onChange={(e) => onSelectRow(e.target.checked)} />
      </TableCell>
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{title}</TableCell>
      <TableCell align="center">{content}</TableCell>
      <TableCell align="center">{convertDateString(startTime)}</TableCell>
      <TableCell align="center">{convertDateString(endTime)}</TableCell>
      <TableCell align="center">{classData?.className}</TableCell>
      <TableCell align="center">
        <Checkbox checked={attended} />
      </TableCell>
    </TableRow>
  );
}
