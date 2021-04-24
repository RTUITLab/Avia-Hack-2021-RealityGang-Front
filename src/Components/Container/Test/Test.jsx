import React from "react";
import BarElement from 'chart.js/auto';
import BarController from 'chart.js/auto';
import {Bar} from "react-chartjs-2";
import { defaults } from 'react-chartjs-2'
import s from './Test.module.scss'
const Test = () => {

const data = {
    labels: ['', ''],
    datasets: [
    {
        label: '',
        data: [12, 19],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
    },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: false,
                },
            },
        ],
    },
    plugins: {
        legend: {
            display: false,
        }
    }
};

    return (
        <div>
            <div className={s.barContainer}>
                <Bar data={data}
                     options={options}
                     legend={{display: false}}
                />
            </div>
        </div>
    )
}

export default Test
