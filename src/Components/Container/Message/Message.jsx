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
                data: [props.correctNum],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
            {
                label: 'Incorrect',
                data: [props.incorrectNum],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
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
                <div className={s.top}>
                    <div className={s.content}>
                        <div className={s.info}>
                            <h2 className={s.title}>Заявка №{props.messageItem.id}</h2>
                            <div className={s.description}>
                                {props.messageItem.description}
                            </div>
                        </div>
                        <div className={s.buttonsContainer}>
                            <div className={s.buttons}>
                                <a target={'_blank'} rel={'noreferrer noopener'} href={props.messageItem.correct} download className={cl('primary-button', s.smallDownload, s.correct)}>
                                    Скачать корректные треки
                                </a>

                                <a target={'_blank'} rel={'noreferrer noopener'} href={props.messageItem.incorrect} download className={cl('primary-button', s.smallDownload, s.incorrect)}>
                                    Скачать некорректные треки
                                </a>
                            </div>
                            <NavLink className={s.linkBack} to={'/'}>
                                Вернуться на главный экран
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.graphicContainer}>
                        <div className={s.graphicTitle}>
                            Треки
                        </div>
                        <Bar data={data}
                             className={s.bar}
                             options={options}
                        />
                    </div>
                </div>
                <div className={s.footer}>
                    <a target={'_blank'} rel={'noreferrer noopener'} href={props.messageItem.kml} download className={cl('primary-button', s.kml)}>
                        Скачать KML
                    </a>
                    <a target={'_blank'} className={cl('primary-button', s.footerDownload)} href={props.messageItem.answer} rel={'noreferrer noopener'} download><img src={download} alt="download"/>Скачать обработанный файл</a>
                </div>
            </div>
        </div>
    )
}

export default Message
