import React, {useState, useEffect, useRef} from "react"
import Courses from './Courses'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import {fetchData, registerUser, loginUser} from './lib';

const Index = () => {
    // Initialise some state which will get passed to various react components
    const [hasError, setErrors] = useState(false);
    const [courses, setCourses] = useState([]);
    const [registeredCourses, setRegisteredCourses] = useState([]);
    let [userLogin, setLogin] = useState(false);
    const [user, setUser] = useState(false);
    const [updateCourses, setUpdateCourses] = useState(false);

    const createLogin = (login) => {
        setLogin(login);
    };

    useEffect(() => {
        const login = JSON.parse(localStorage.getItem('user'));
        if (!!login) {
            userLogin = login;
        }
        if (!!userLogin) {
            if (userLogin.register) {
                registerUser(userLogin, setUser, setErrors);
            } else {
                loginUser(userLogin, setUser, setErrors)
            }
        }

    }, [userLogin]);

    useEffect(() => {
        fetchData(user, setErrors, setRegisteredCourses, setUpdateCourses, setCourses);
    }, [user, updateCourses]);

    return (
        <div data-testid="main">
            {!user && <Login setLogin={createLogin}/>}
            {!!user && <Courses setUser={setUser} setErrors={setErrors} setUpdateCourses={setUpdateCourses}
                                registeredCourses={registeredCourses} courses={courses} setCourse={setCourses}
                                user={user}/>}
        </div>
    );
};

export default Index;

