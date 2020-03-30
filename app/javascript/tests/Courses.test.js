import React from 'react'
import Courses from '../components/Courses';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
describe('Courses', () => {
    const setUser = jest.fn();
    const setErrors = jest.fn();
    const courses = [
        {
            id: 1,
            title: 'Test',
            description: 'A Test course',
            max_seats: 0,
            type: 'unlimited',
            cost: 100
        }
    ];

    let user = {
        name: 'mike',
        email: 'miker1692',
        id: 1
    }

    const registeredCourses = [
        {
            id: 1,
            course_id: 1,
            user_id: 1
        }
    ];

    test('it exists', () => {
        const {getByTestId } = render(<Courses setUser={setUser} setErrors={setErrors} courses={courses} registeredCourses={registeredCourses} user={user} setUpdateCourses={jest.fn()} />);
        expect(getByTestId('courses')).toBeTruthy();
    });
});