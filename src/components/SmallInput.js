import React from 'react'
import PropTypes from 'prop-types'
import "./SmallInput.css"

const SmallInput = ({inputVal}) => {
    return (
        <div className="smallInput">
            {inputVal}
        </div>
    )
}

SmallInput.prototype = {
    inputVal: PropTypes.string.isRequired,
}

export default SmallInput
