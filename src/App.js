import {Switch, Route} from 'react-router-dom'
import './App.css';
import Container from "./Components/Container/Container";
import {toast, ToastContainer} from "react-toastify";
import LoginContainer from "./Components/Login/LoginContainer";
import {useEffect} from "react";

function App() {

    // const notify = () => toast.info("Новость успешно создана");
    // useEffect(() => {
    //     notify()
    // }, []);


    return (
        <>
            <Switch>
                <Route exact path='/login' render={ () => <LoginContainer />} />
                <Container />
            </Switch>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default App;
