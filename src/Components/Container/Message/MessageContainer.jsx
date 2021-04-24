import React from "react";
import Message from "./Message";
import {motion} from "framer-motion";

const MessageContainer = (props) => {

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
            <Message />
        </motion.div>
    )
}

export default MessageContainer
