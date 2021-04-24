import React from "react";
import s from './Message.module.scss'
import {NavLink} from "react-router-dom";
import cl from 'classnames'
import {motion} from "framer-motion"

const Message = (props) => {

    return (
        <motion.div variants={props.animationItem}>
            <NavLink to={'#'} className={s.message}>
                    <div className={s.top}>
                        <div className={s.name}>
                            <div className={s.title}>
                                Заявка №6493
                            </div>
                            <div className={s.time}>
                                13.06.2021, 18:34
                            </div>
                        </div>
                        <div className={cl(s.status, s.success)}>
                            Обработано
                        </div>
                    </div>
                    <div className={s.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
            </NavLink>
        </motion.div>
    )
}

export default Message
