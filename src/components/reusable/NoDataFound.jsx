import React from 'react'
import { CONSTANTS } from '../../constants'

function NoDataFound({ description }) {
    return (
        <div className="text-center">
            <img
                src={CONSTANTS.NO_DATA_IMG}
                alt="solve quiz and get result img"
                className="w-50"
            />
            <p>{description || "Nothing to see here..."}</p>
        </div>
    )
}

export default NoDataFound