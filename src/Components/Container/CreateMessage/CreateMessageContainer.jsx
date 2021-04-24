import React, {useState} from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import CreateMessage from "./CreateMessage";
import {useDispatch} from "react-redux";
import {createMessage} from "../../../redux/message-reducer";

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

    return (
        <CreateMessage
            dragStartHandler={dragStartHandler} dragLeaveHandler={dragLeaveHandler} onDropHandler={onDropHandler}
            drag={drag} fileError={fileError} file={file} description={description} setDescription={setDescription} handleSubmit={handleSubmit}
        />
    )
}

export default compose(
    withAuthRedirect
)
(CreateMessageContainer)
