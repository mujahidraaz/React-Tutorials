import React, {useContext} from "react"
import {useCounter} from './App'

function Counter() {
    const counter = useContext(useCounter)
    return (
        <h1>Counter <span>{counter}</span></h1>
    )
}
export default Counter