import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import Nav from "./Nav";
import {buildButtons} from './lib';

const Courses = ({courses, setUpdateCourses, user, registeredCourses, setErrors, setUser}) => {

    return (
        <div data-testid="courses">
            <Nav setUser={setUser} user={user}/>
            {courses.length > 0 && <Table striped bordered hover variant={"dark"}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Type</th>
                    <th>Seats</th>
                    <th>Register</th>
                </tr>
                </thead>
                <tbody>
                {courses.sort((a, b) => a.id - b.id).map((course) =>
                    <tr key={course.id}>
                        <td>{course.title}</td>
                        <td>{course.description}</td>
                        <td>£{course.cost}</td>
                        <td>{course.course_type}</td>
                        <td>{course.max_seats === 0 ? "Unlimited" : `${course.numbeOfUsers}/${course.max_seats}`}</td>
                        <td>{buildButtons(course, registeredCourses, user, setUpdateCourses, setErrors)}</td>
                    </tr>
                )}
                </tbody>
            </Table>
            }
        </div>);

};

export default Courses;