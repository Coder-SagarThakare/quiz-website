import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CLIENT_PATHS } from '../constants';

function PageNotFound() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>
                404 Page Not Found
            </h1>
            <button onClick={() => navigate(CLIENT_PATHS.HOME)}> go to home</button>
            {/* <button > go to home</button> */}
        </div>
    )
}

export default PageNotFound