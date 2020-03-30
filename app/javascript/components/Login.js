import React from "react";
import Nav from './Nav';
import LoginForm from "./LoginForm";

const Login = ({setLogin}) => {

    const setUser = (evt) => {
        let login = {
            name: evt.currentTarget.form.name.value,
            email: evt.currentTarget.form.email.value,
            register: evt.currentTarget.form.register.checked
        };
        setLogin(login);
    };

    return (
        <div data-testid="login">
            <Nav/>
            <LoginForm setUser={setUser}/>
        </div>
    )
};

export default Login;