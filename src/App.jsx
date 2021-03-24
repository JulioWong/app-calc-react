import React from 'react'
import Button from './components/Button'
import MathOperations from './components/MathOperation'
import Result from './components/Result'
import Functions from './components/Functions'
import './App.css';

const App = () => {
    const clickHandler = text => alert(text)

    return (
        <main className="react-calculator">
            <Result value={'10'}/>
            <div className="numbers">
                <Button text="1" clickHandler={ clickHandler }/>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <Functions 
                onContentClear={() => console.log("Conten Clear")}
                onDelete={() => console.log("Conten Clear")}/>
            <MathOperations 
                onClickOperation={operation => console.log("Operacion:", operation)} 
                onclickEqual = {equal => console.log("Operacion:", equal)}/>
        </main>
    )
}

export default App
