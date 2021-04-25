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
                label: 'Correct',
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
                label: 'Incorrect',
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
                    <div className={s.info}>
                        <h2 className={s.title}>Заявка №{props.messageItem.id}</h2>
                        <div className={s.description}>
                            {props.messageItem.description}
                        </div>
                    </div>
                    <div className={s.buttonsContainer}>
                        <div className={s.buttons}>
                            <a href={props.messageItem.correct} className={cl('primary-button', s.smallDownload)}>
                                correct
                            </a>
                            <a href={props.messageItem.kml} className={cl('primary-button', s.smallDownload)}>
                                kml
                            </a>
                            <a href={props.messageItem.incorrect} className={cl('primary-button', s.smallDownload)}>
                                incorrect
                            </a>
                        </div>
                        <a className={cl('primary-button', s.download)} href={'#'} rel={'noreferrer noopener'} download>Скачать обработанный файл <img src={download} alt="download"/></a>
                        <NavLink className={s.linkBack} to={'/'}>
                            Вернуться на главный экран
                        </NavLink>
                    </div>
                </div>
                <div className={s.graphicContainer}>
                    <div className={s.graphicTitle}>
                        Алекс Ченсов
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
