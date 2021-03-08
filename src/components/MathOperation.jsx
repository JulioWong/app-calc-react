import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const MathOperations = ({ onClickOperation, onclickEqual }) => ()

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onclickEqual: PropTypes.func.isRequired
}

export default MathOperations