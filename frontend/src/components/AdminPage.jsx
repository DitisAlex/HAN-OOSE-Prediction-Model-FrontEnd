import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminPage(props){

    return (
        <div className="container">
            <h1>Admin Page</h1>
            <Link to="/logout">
                <button type="button" class="btn btn-secondary">Logout</button>
            </Link>
        </div>
    )
}