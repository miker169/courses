import {Button} from "react-bootstrap";
import React from "react";

async function fetchData(user, setErrors, setRegisteredCourses, setUpdateCourses, setCourses) {
    if (!!user) {
        let res = fetch("/api/courses");
        res
            .then(res => res.json())
            .then(res => getCourseUsers(res, setCourses))
            .catch(err => setErrors(err));

        const registered_courses_res = fetch(`/api/users/${user.id}/course_user`);
        registered_courses_res
            .then(registered_courses_res => registered_courses_res.json())
            .then(registered_courses_res => setRegisteredCourses(registered_courses_res))
            .then(() => setUpdateCourses(false))
            .catch(err => setErrors(err));
    }
}

const registerUser = (userLogin, setUser, setErrors) => {
    const res = fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(userLogin),
        headers: {
            "Content-Type": "application/json"
        }
    });
    res
        .then(res => res.json())
        .then(res => {
            setUser(res);
            localStorage.setItem('user', JSON.stringify(res));
        })
        .catch(err => setErrors(err))
};

const loginUser = (userLogin, setUser, setErrors) => {
    const res = fetch(`api/users/login`, {
        method: 'POST',
        body: JSON.stringify({
            email: userLogin.email
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    res
        .then(res => res.json())
        .then(res => {
            setUser(res);
            localStorage.setItem('user', JSON.stringify(res));
        })
        .catch(err => setErrors(err))
}

const getCourseUsers = (courseList, setCourses) => {
    let newCourses = [];
    courseList.forEach((course) => {
        let res = fetch(`/api/courses/${course.id}/course_users`);
        res
            .then(res => res.json())
            .then(res => {
                course.numbeOfUsers = res.length > 0 ? res.length : 0;
                newCourses.push(course);
                setCourses([...newCourses])
            });

    });
};

const unregister = (user, course, registeredCourses, setUpdateCourses, setErrors) => {
    const registeredCourse = registeredCourses.find(item => item.course_id === course.id);
    const res = fetch(`/api/users/${user.id}/course_user/${registeredCourse.id}`, {
        method: 'DELETE',
    });
    res
        .then(() => setUpdateCourses(true))
        .catch(err => setErrors(err))
};

const register = (user, course, setUpdateCourses, setErrors) => {
    const res = fetch(`/api/users/${user.id}/course_user`, {
        method: 'POST',
        body: JSON.stringify({
            course_id: course.id
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    res
        .then(res => res.json())
        .then(res => {
            setUpdateCourses(true);
        })
        .catch(err => setErrors(err))
};

const isRegistered = (courseId, registeredCourses) => registeredCourses.length !== 0 ? registeredCourses.find(item => item.course_id === courseId) : false;

const buildButtons = (course, registeredCourses, user, setUpdateCourses, setErrors) => {
    if (!!isRegistered(course.id, registeredCourses)) {
        return <Button
            onClick={() => unregister(user, course, registeredCourses, setUpdateCourses, setErrors)}>UnRegister</Button>
    } else if ((course.max_seats !== 0) && (course.max_seats === course.numbeOfUsers)) {
        return <span>Course Full</span>
    } else {
        return <Button onClick={() => register(user, course, setUpdateCourses, setErrors)}>Register</Button>
    }
};

const logout = (setUser) => {
    localStorage.removeItem('user');
    setUser(false);
};

export {
    fetchData,
    registerUser,
    loginUser,
    buildButtons,
    logout
}