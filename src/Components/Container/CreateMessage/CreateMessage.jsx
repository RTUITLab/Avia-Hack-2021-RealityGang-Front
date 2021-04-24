import React, {useState} from "react";
import {compose} from "redux";
import s from './CreateMessage.module.scss'
import cl from 'classnames'
import fileIcon from '../../../assets/images/file.svg'
import {NavLink} from "react-router-dom";

const CreateMessage = (props) => {

    return (
        <div className={cl(s.createContainer)}>
            <div className={cl('background-container', s.create)}>
                <h2 className={s.title}>Новая заявка</h2>
                <textarea onChange={(e) => props.setDescription(e.target.value)} value={props.description} placeholder={'Введите описание (по желанию)'} className={cl('input-text', s.textarea)} />

                <div className={s.dragContainer}>
                    {
                        props.drag
                        ?
                            //Тут рука с файлом уже над областью
                            <div
                                className={cl(s.area, s.dropArea)}
                                onDragStart={e => props.dragStartHandler(e)}
                                onDragLeave={e => props.dragLeaveHandler(e)}
                                onDragOver={e => props.dragStartHandler(e)}
                                onDrop={e => props.onDropHandler(e)}
                            >
                                <img className={s.fileIcon} src={fileIcon} alt="file"/>
                                {
                                    props.file.name
                                        ?
                                            <div className={s.loadFile}>
                                                {props.file.name}
                                            </div>
                                        :
                                            <div className={s.loadFile}>
                                                Загрузите файл
                                            </div>
                                }
                                <div className={s.format}>
                                    Поддерживается: TXT
                                </div>
                                {
                                    props.fileError &&
                                    <div className={s.fileError}>
                                        Ошибка в формате файла
                                    </div>
                                }
                            </div>
                        :
                            //Тут еще файлик не тянут в область
                            <div
                                className={cl(s.area, s.dropAreaDrag)}
                                onDragStart={e => props.dragStartHandler(e)}
                                onDragLeave={e => props.dragLeaveHandler(e)}
                                onDragOver={e => props.dragStartHandler(e)}
                            >
                                <img className={s.fileIcon} src={fileIcon} alt="file"/>
                                {
                                    props.file.name
                                        ?
                                            <div className={s.loadFile}>
                                                {props.file.name}
                                            </div>
                                        :
                                        <div className={s.loadFile}>
                                            Загрузите файл
                                        </div>
                                }
                                <div className={s.format}>
                                    Поддерживается: .txt
                                </div>
                                {
                                    props.fileError &&
                                        <div className={s.fileError}>
                                            Ошибка в формате файла
                                        </div>
                                }
                            </div>
                    }
                </div>

                <button onClick={props.handleSubmit} type={'submit'} className={cl('primary-button', s.submitBtn)}>
                    Обработать заявку
                </button>

                <NavLink className={s.backLink} to={'/'}>
                    Вернуться на главный экран
                </NavLink>

            </div>
        </div>
    )
}

export default compose(

)
(CreateMessage)
