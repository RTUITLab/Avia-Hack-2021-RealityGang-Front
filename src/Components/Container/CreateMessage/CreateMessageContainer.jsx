import React, {useEffect, useState} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import CreateMessage from "./CreateMessage";
import {useDispatch, useSelector} from "react-redux";
import {createMessage, setIsResponseReceived} from "../../../redux/message-reducer";
import {motion} from "framer-motion";
import Pending from "./Pending/Pending";
import {Redirect} from "react-router-dom";

const CreateMessageContainer = (props) => {

    const dispatch = useDispatch()

    const [drag, setDrag] = useState(false)
    const [description, setDescription] = useState('')
    const [fileError, setFileError] = useState(false)
    const [file, setFile] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const isResponseReceived = useSelector(state => state.messages.isResponseReceived);
    const messageItem = useSelector(state => state.messages.messageItem);

    useEffect(() => {
        return () => {
            dispatch(setIsResponseReceived(false))
        };
    },[])

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
        setFileError(false)
    }
    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
        setFileError(false)
    }
    function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        setFile(files[0])
        setDrag(false)
        matchFileTxt(files[0].name)
    }
    function matchFileTxt(name) {
        let test = /^.*\.txt$/gm

        if(test.test(name) === false) {
            setFile('')
            setFileError(true)
        }
    }
    function handleSubmit() {
        if(file.name) {
            dispatch(createMessage(description, file))
            setIsSubmit(true)
        }
        else {
            setFileError(true)
        }
    }

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

    if (isResponseReceived && messageItem.id) {
        return <Redirect to={`/message/${messageItem.id}`} />
    }

    if (isSubmit) {
        return <Pending />
    }
    return (
        <motion.div variants={animations} initial="hidden" animate="visible"
                    transition={{ duration: 1 }}>
            <CreateMessage
                dragStartHandler={dragStartHandler} dragLeaveHandler={dragLeaveHandler} onDropHandler={onDropHandler}
                drag={drag} fileError={fileError} file={file} description={description} setDescription={setDescription} handleSubmit={handleSubmit}
            />
        </motion.div>
    )
}

export default compose(
    withAuthRedirect
)
(CreateMessageContainer)
