import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { classNames as cls } from 'react-hook-classnames';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, -4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Tabular() {
  return (
    <Card className='grid'>
      <div className='grid w-full grid-cols-2'>
        <div className='text-md justify-self-start m-2 font-semibold'>
          Languages
        </div>
        <MoreVertIcon className='justify-self-end m-2' />
      </div>
      <TableContainer className='text-black' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sources</TableCell>
              <TableCell align="right">Users</TableCell>
              <TableCell align="right">Sessions</TableCell>
              <TableCell align="right">Bounce Rate</TableCell>
              <TableCell align="right">Avg. Session Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className='text-black' align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell className='grid'>
                  <div className={cls(' w-7 text-center justify-self-center rounded-md',{"bg-green-700":row.protein>=0,"bg-red-500":row.protein<0})}>
                    {row.protein}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}