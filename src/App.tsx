/* eslint-disable no-eval */
import React, { FC, useState } from 'react'
import words from 'lodash.words'
import MathOperations from './components/MathOperation'
import Result from './components/Result'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import './App.css';

const App: FC = () => {
    const [stack, setStack] = useState('')
    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length - 1] : "0"
    return (
        <main className="react-calculator">
            <Result value={value}/>
            <Numbers onClickNumber={ number => {
                console.log(number)
                setStack(`${stack}${number}`)
            }} />
            <Functions 
                onContentClear={() => {
                    console.log("Conten Clear")
                    setStack('')
                }}
                onDelete={() => {
                    if (stack.length > 0) {
                        console.log("Conten Delete")
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                }}/>
            <MathOperations 
                onClickOperation={operation => {
                    console.log("Operacion:", operation)
                    setStack(`${stack}${operation}`)
                }} 
                onclickEqual = {equal => {
                    console.log("Operacion:", equal)
                    setStack(eval(stack).toString())
                }}/>
        </main>
    )
}

export default App
