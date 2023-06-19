import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import { Card } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function createData(lang, users, usersquantity) {
    return { lang, users, usersquantity };
}

const rows = [
    createData('Frozen yoghurt', 159, 6),
    createData('Ice cream sandwich', 237, 90.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
];

export default function Tablewithbars() {
    return (<Card className='grid '>
        <div className='grid w-full grid-cols-2'>
            <div className='text-md justify-self-start m-2 font-semibold'>
                Languages
            </div>
            <MoreVertIcon className='justify-self-end m-2' />
        </div>        <TableContainer className='text-black' component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Language</TableCell>
                        <TableCell >Users</TableCell>
                        <TableCell >Users%</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.lang}
                            </TableCell>
                            <TableCell className='text-black' >{row.users}</TableCell>
                            <TableCell><LinearProgress className='rounded-lg h-2' variant="determinate" value={row.usersquantity} /></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </Card>
    );
}