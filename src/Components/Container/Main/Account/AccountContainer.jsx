import React, {useEffect, useState} from "react";
import Account from "./Account";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../../../redux/message-reducer";
import {motion} from "framer-motion"

const AccountContainer = (props) => {

    const dispatch = useDispatch();
    const [findByLetters, setFindByLetters] = useState('')
    const [messages, setMessages] = useState([{id: 1}])

    useEffect(()=> {
        dispatch(getMessages(findByLetters))
    }, [])

    const handleSubmit = () => {
        dispatch(getMessages(findByLetters))
    }

    const handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            handleSubmit()
        }
    }

    // const messages = useSelector(state => state.messages.messages);

    const animationContainer = {
        hidden: {opacity: 1, scale: 1},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    }
    const animationItem = {
        hidden: {x: -100, y: 20, opacity: 0},
        visible: {
            x: 0,
            y: 0,
            opacity: 1
        }
    }

    const animations = {
        hidden: {
            opacity: 0,

        },
        visible: {
            opacity: 1,

        }
    }

    return (
        <div className={'container'}>
            <motion.div variants={animations} initial="hidden" animate="visible">
                <Account messages={messages} setFindByLetters={setFindByLetters} findByLetters={findByLetters}
                         handleKeyUp={handleKeyUp} handleSubmit={handleSubmit} animationContainer={animationContainer}
                         animationItem={animationItem}
                />
            </motion.div>
        </div>
    )
}

export default AccountContainer
