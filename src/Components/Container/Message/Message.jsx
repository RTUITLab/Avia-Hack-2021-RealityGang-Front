import React from "react";
import s from './Message.module.scss'
import cl from 'classnames'
import download from '../../../assets/images/download.svg'
import {NavLink} from "react-router-dom";
import {Bar} from "react-chartjs-2";

const Message = (props) => {

    const data = {
        labels: [''],
        datasets: [
            {
                label: 'Red',
                data: [12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
            {
                label: 'Blue',
                data: [35],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            }
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
                display: true,
            }
        }
    };

    return (
        <div className={s.messageContainer}>
            <div className={cl('background-container', s.message)}>
                <div className={s.content}>
                    <h2 className={s.title}>Заявка №64728</h2>
                    <div className={s.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor</div>
                    <div className={s.buttons}>
                        Кнопки какие-то
                    </div>
                    <a className={cl('primary-button', s.download)} href={'#'} rel={'noreferrer noopener'} download>Скачать обработанный файл <img src={download} alt="download"/></a>
                    <NavLink className={s.linkBack} to={'/'}>
                        Вернуться на главный экран
                    </NavLink>
                </div>
                <div className={s.graphicContainer}>
                    <div className={s.graphicTitle}>
                        Noname
                    </div>
                    <Bar data={data}
                         className={s.bar}
                         options={options}
                    />
                </div>
            </div>
        </div>
    )
}

export default Message
