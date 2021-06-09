import React from 'react'
import "./BigInput.css"
import PropTypes from 'prop-types'
import { separteWithCommas } from '../common'


const BigInput = ({inputVal}) => {
    return (
        <div className={`bigInput ${inputVal.toString().length>11 && 'changeFontSize'}`}>
            {separteWithCommas(inputVal)}
        </div>
    )
}

BigInput.prototype = {
    inputVal: PropTypes.string.isRequired,
}

export default BigInput
