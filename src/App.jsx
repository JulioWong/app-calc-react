import React from 'react'
import MathOperations from './components/MathOperation'
import Result from './components/Result'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import './App.css';

const App = () => {
    return (
        <main className="react-calculator">
            <Result value={'10'}/>
            <Numbers onClickNumber={ number => console.log(number) } />
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
