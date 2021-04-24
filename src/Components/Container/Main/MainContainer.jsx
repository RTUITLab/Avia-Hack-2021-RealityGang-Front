import React from "react";
import s from './main.module.scss'
import plane from '../../../assets/images/plane.svg'
import {NavLink} from "react-router-dom";
import left from '../../../assets/images/top-left.svg'
import right from '../../../assets/images/top-right.svg'
import cl from 'classnames'
import {useSelector} from "react-redux";
import AccountContainer from "./Account/AccountContainer";
import TopContainer from "./Top/TopContainer";

const MainContainer = (props) => {

    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <>
            {
                isAuth
                ?
                    <>
                        <TopContainer />
                        <AccountContainer />
                    </>
                :
                    <>
                        <img className={cl(s.cloudImg, s.cloudLeft)} src={left} alt="clouds"/>
                        <img className={cl(s.cloudImg, s.cloudRight)} src={right} alt="clouds"/>
                        <div className={s.main}>
                            <div className={s.planeContainer}>
                                <img className={s.plane} src={plane} alt="plane"/>
                            </div>
                            <h2 className={s.title}>AnyTrack — сервис, способный находить аномалии в треках воздушных судов</h2>
                            <h4 className={s.subTitle}>Данный сервис, способен классифицировать множество поступающих в него трековых данных на два множества – трековые данные, пригодные для дальнейшего использования, и трековые данные с ошибками</h4>
                            <NavLink to={'/login'} className={`primary-button ${s.loginButton}`}>Войти в систему</NavLink>
                        </div>
                    </>
            }

        </>
    )
}

export default MainContainer
