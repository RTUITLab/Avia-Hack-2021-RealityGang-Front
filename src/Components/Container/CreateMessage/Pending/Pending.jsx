import React from "react";
import s from './Pending.module.scss'
import cl from 'classnames'

import planeLoader from '../../../../assets/images/palne-loader.svg'

const Pending = (props) => {

    return (
        <div className={s.pendingContainer}>
            <div className={cl('background-container', s.pending)}>
                <h2 className={s.title}>Обработка заявки</h2>
                <div className={s.spinner}>

                        <div className={s.planeContainer}>
                            <div className={s.spinnerContainer}>
                                    <div className={s.circle}><img className={s.plane} src={planeLoader} alt="plane"/></div>

                            </div>
                        </div>
                        <div className={s.text}>Ожидайте</div>
                </div>
            </div>
        </div>
    )
}
export default Pending
