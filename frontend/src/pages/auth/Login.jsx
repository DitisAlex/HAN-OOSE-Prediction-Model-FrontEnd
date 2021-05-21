import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
  return (
    <div className="container">
      <h1>Login Page</h1>
      <Link to="/admin">
        <button type="button" className="btn btn-secondary">
          Login
        </button>
      </Link>
    </div>
  )
}
