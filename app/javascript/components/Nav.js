import React from 'react';
import {Button} from "react-bootstrap";
import {logout} from './lib';

const Nav = ({setUser, user}) => (
    <div data-testid="nav" style={{
        backgroundColor: 'grey',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        width: '100%'
    }}>
        <img
            src="https://bppdigital-assets.s3.amazonaws.com/brand_settings/brand_logos/000/000/001/original/BPPlogo.png?1566210872"
            className="logo-large" alt="BPP University"/>
        <span><h2 style={{color: 'white'}}>Select a Course</h2></span>
        {!!user && (
            <>
                <span>{user.name}</span>
                <Button onClick={() => logout(setUser)}>Logout</Button>
            </>)
        }

    </div>
);

export default Nav;