import {
    Chart as ChartJS,

    BarElement, Tooltip,
    CategoryScale, LinearScale,
    Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"

import { Card } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

ChartJS.register(
    BarElement, Tooltip,
    CategoryScale, LinearScale,
    Legend
)

export default function Barchart() {

    const data = {
        labels: ["jan", "fab", "march","april","may","june","july","august","sept","oct","nov","dec"],
        datasets: [
            {
                data: [73, 45, 27, 65, 40, 43, 34, 33, 23,55,26,76],
                label: "Mobile",
                backgroundColor: "Yellow",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 100,
                categorySpacing: 5,
                barPercentage: 0.2

            },
            {
                data: [100, 66, 45, 80, 58, 69, 50, 34, 47,98,120,90],
                label: "Desktop",
                backgroundColor: "Blue",
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 100,
                categorySpacing: 5,
                barPercentage: 0.2
            }
        ]





    }
    const options = {

        scales: {
            x: {
                stacked: true,
                xAxes: [{
                    barValueSpacing: 0.1,
                    barDatasetSpacing: 0.1,
                }]
            },

            y: {
                beginAtZero: true
            }
        }
    }
    return (<Card>
        <div className='grid w-full grid-cols-2'>
            <div className='text-md justify-self-start m-2 font-semibold'>
                Languages
            </div>
            <MoreVertIcon className='justify-self-end m-2' />
        </div>
        <Bar
            style={{ width: "500px" }}
            data={data}
            options={options}

        ></Bar>
    </Card>)

}