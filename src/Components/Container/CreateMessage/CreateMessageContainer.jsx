import React, {useState} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import CreateMessage from "./CreateMessage";
import {useDispatch} from "react-redux";
import {createMessage} from "../../../redux/message-reducer";
import {motion} from "framer-motion";

const CreateMessageContainer = (props) => {

    const dispatch = useDispatch()

    const [drag, setDrag] = useState(false)
    const [description, setDescription] = useState('')
    const [fileError, setFileError] = useState(false)
    const [file, setFile] = useState('')

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
            dispatch(createMessage())
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
