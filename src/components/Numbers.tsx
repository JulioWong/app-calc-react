import React, { FC } from 'react'
import { ButtonClickHandler } from './Button'
import Button from './Button'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButton = (onClickNumber: ButtonClickHandler) => {
  
  const renderButton = (number: number) => (
    <Button 
      key={ number } 
      text={ number.toString() } 
      clickHandler={ onClickNumber } 
    />
  )
  return numbers.map(renderButton)
}

type Props = {
  onClickNumber: ButtonClickHandler
}

const Numbers: FC<Props> = ({ onClickNumber }) => (
  <section className="numbers">
    {
      renderButton(onClickNumber)
    }
  </section>
)

export default Numbers