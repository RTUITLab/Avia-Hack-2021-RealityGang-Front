import React, {useEffect} from "react";
import Message from "./Message";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getCurrentMessage} from "../../../redux/message-reducer";


const MessageContainer = (props) => {

    const dispatch = useDispatch()
    const messageItem = useSelector(state => state.messages.messageItem);

    useEffect(()=> {

        dispatch(getCurrentMessage(props.match.params.message_id))
    },[])

    const animations = {
        hidden: {
            opacity: 0,
            x:0,
            y: 100,
        },
        visible: {
            opacity: 1,
            x:0,
            y:0,
        }
    }

    return (
        <motion.div variants={animations} initial="hidden" animate="visible"
                    transition={{ duration: 1 }}>
            <Message messageItem={messageItem} />
        </motion.div>
    )
}

export default compose(
    withRouter,
)(MessageContainer)
