import React, {useContext} from "react"
import {useCounter} from './App'

function Timer() {
    const counter = useContext(useCounter)
    return (
        <h1>Timer <span>{counter}</span></h1>
    )
}
export default Timer