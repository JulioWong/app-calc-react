import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const MathOperations = ({ onClickOperation, onclickEqual }) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onclickEqual} />
    </section>
)

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onclickEqual: PropTypes.func.isRequired
}

export default MathOperations