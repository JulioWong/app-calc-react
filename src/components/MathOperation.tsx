import React, { FC } from 'react'
import Button from './Button'
import { ButtonClickHandler } from './Button'

type Props = {
    onClickOperation: ButtonClickHandler, 
    onclickEqual: ButtonClickHandler,
}

const MathOperations: FC<Props> = ({ onClickOperation, onclickEqual }) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation} />
        <Button text="-" clickHandler={onClickOperation} />
        <Button text="*" clickHandler={onClickOperation} />
        <Button text="/" clickHandler={onClickOperation} />
        <Button text="=" clickHandler={onclickEqual} />
    </section>
)

export default MathOperations