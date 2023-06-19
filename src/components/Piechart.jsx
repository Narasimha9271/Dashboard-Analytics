import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js"

import { Doughnut } from "react-chartjs-2"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { classNames as cls } from "react-hook-classnames";

function createData(source, revenue, value) {
    return { source, revenue, value };
}

const rows = [
    createData('Frozen yoghurt', 159, 6),
    createData('Ice cream sandwich', 237, -9),
    createData('Eclair', 262, 16),
];

ChartJs.register(
    ArcElement, Tooltip, Legend
)

export default function Piechart() {
    const data = {
        labels: ["one", "two", "three"],
        datasets: [{
            data: [3, 6, 9],
            backgroundColor: ["aqua", "bloodorange", "purple"],

        },
        ]
    };
    const options = {
        cutout: 95,
        aspectRatio: 1.4
    }


    return (<Card className="grid">

        <div className='text-black place-self-start ml-2 mt-2 font-medium'>Good job</div>
        <MoreVertIcon className="place-self-end -mt-5 mr-2" />

        <Doughnut
            data={data}
            options={options}
        >
        </Doughnut>
        <TableContainer className='text-black h-60' component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Sources</TableCell>
                        <TableCell>Users</TableCell>
                        <TableCell>Sessions</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.source}
                            </TableCell>
                            <TableCell className='text-black' >{row.revenue}</TableCell>
                            <TableCell className={cls({"text-red-600":row.value<=0,"text-green-500":row.value>=0})}>{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Card>)
}