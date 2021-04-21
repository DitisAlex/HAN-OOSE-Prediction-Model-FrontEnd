import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout(props){
    const history = useHistory();

    useEffect(() => {
        history.push('/')
    })

    return (
        <div className="container">
            <h1>Logout Page</h1>
        </div>
    )
}