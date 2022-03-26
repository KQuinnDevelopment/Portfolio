import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/Login.css';

// my small portfolio is not large enough to justify separating this function to its own file
async function loginUser(credentials) {
    return fetch('https://localhost:7157/token', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: credentials.password
    })
        .then(data => data.json())
        .catch(err => {
            console.log(err);
        });
}

export function Login({ setToken }) {
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({ password });
        setToken(token);
    }

    Login.propTypes = {
        setToken: PropTypes.func.isRequired
    }

    return (
        <div className="min-vh-100 d-flex justify-content-center">
            <div className="login-wrapper col-lg-3 col-md-5 col-xs-9 m-auto">
                <form onSubmit={handleSubmit}>
                    <div className="row px-2 py-3">
                        <div className="col-md-8 col-xs-9 mx-auto text-align-center">
                            <h3>To View My Portfolio</h3>
                            <h4 className="form-label my-2">Please Log In</h4>
                            <input type="text" maxLength="5" className="form-control col-md-3 col-xs-4 mt-2" onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="row p-3">
                        <button type="submit" className="btn btn-primary col-lg-5 col-md-8 col-xs-6 mx-auto">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}