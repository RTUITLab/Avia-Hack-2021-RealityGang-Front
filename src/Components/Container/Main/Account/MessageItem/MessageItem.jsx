import React from "react";
import s from './MessageItem.module.scss'
import {NavLink} from "react-router-dom";
import cl from 'classnames'
import {motion} from "framer-motion"

const MessageItem = (props) => {
    return (
        <motion.div variants={props.animationItem}
                    transition={{ delay: 0.3 }}>
            <NavLink to={`/message/${props.id}`} className={s.message}>
                    <div className={s.top}>
                        <div className={s.name}>
                            <div className={s.title}>
                                Заявка №{props.id}
                            </div>
                            <div className={s.time}>
                                {props.created_at}
                            </div>
                        </div>
                        <div className={cl(s.status, s.success)}>
                            Обработано
                        </div>
                    </div>
                    <div className={s.description}>
                        {props.description}
                    </div>
            </NavLink>
        </motion.div>
    )
}

export default MessageItem
