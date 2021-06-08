import React from 'react'
import "./BigInput.css"
import PropTypes from 'prop-types'


const BigInput = ({inputVal}) => {
    return (
        <div className="bigInput">
            {inputVal}
        </div>
    )
}

BigInput.prototype = {
    inputVal: PropTypes.string.isRequired,
}

export default BigInput
