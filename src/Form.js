import { useState } from "react"

function Form() {

    const [name, setName] = useState('')
    const [email, setEame] = useState('')
    const [sClass, setCame] = useState('')
    const [term, setTerm] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [termError, setTermError] = useState(false)

    function FormHandling(e) {
        e.preventDefault()
        console.log(name, email, sClass, term)
        if(name.length == 0){
            setNameError(true)
        }else {
            setNameError(false)
        }
        if(email.length == 0){
            setEmailError(true)
        }else {
            setEmailError(false)
        }
        if(term.length == 0){
            setTermError(true)
        }else {
            setTermError(false)
        }
    }

    return (
        <div>
            <h1>React Form Validations #23</h1>
            <div className="form">
                <form onSubmit={FormHandling}>
                    <input type='text' placeholder="full name" onChange={(e) => setName(e.target.value)}/>
                    {nameError?<label>please fill the full name</label>:""}
                    <input type='email' placeholder="email" onChange={(e) => setEame(e.target.value)}/>
                    {emailError?<label>please fill the email</label>:""}
                    <select onChange={(e) => setCame(e.target.value)}>
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                        <option>Class 4</option>
                    </select>
                    <input type="checkbox" onChange={(e) => setTerm(e.target.value)}/><span>Term and condition</span>
                    {termError?<label>please fill the term</label>:""}
                    <input type="submit" value="Submit" />
                </form>
                <div className="output">
                    <h3>Form Output</h3>
                    <ul>
                        <li><span>Full Name:</span> {name}</li>
                        <li><span>Email:</span> {email}</li>
                        <li><span>Class:</span> {sClass}</li>
                        <li><span>Term and Condition:</span>{term}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Form