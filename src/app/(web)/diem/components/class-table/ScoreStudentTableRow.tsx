import { Checkbox, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import { IPropTableRow } from '../../common/interface';

export default function ClassTableRow({
  row,
  selected,
  onSelectRow,
  onDeleteRow,
  onEditRow,
  onDetailRow,
}: IPropTableRow) {
  const { id, midScore, finalScore, class: classData } = row;

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onChange={(e) => onSelectRow(e.target.checked)} />
      </TableCell>
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{midScore}</TableCell>
      <TableCell align="center">{finalScore}</TableCell>
      <TableCell align="center">{classData?.className}</TableCell>
    </TableRow>
  );
}
