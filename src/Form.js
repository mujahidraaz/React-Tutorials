import { useState } from "react"

function Form() {

    const [name, setName] = useState('Rahul')
    const [email, setEame] = useState('rahul@gmail.com')
    const [sClass, setCame] = useState('Class 1')
    const [term, setTerm] = useState(true)

    function FormHandling(e) {
        e.preventDefault()
        console.log(name, email, sClass, term)
    }

    return (
        <div>
            <h1>React Form Handlig #22</h1>
            <div className="form">
                <form onSubmit={FormHandling}>
                    <input type='text' placeholder="full name" onChange={(e) => setName(e.target.value)}/>
                    <input type='email' placeholder="email" onChange={(e) => setEame(e.target.value)}/>
                    <select onChange={(e) => setCame(e.target.value)}>
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                        <option>Class 4</option>
                    </select>
                    <input type="checkbox" onChange={(e) => setTerm(e.target.value)}/><span>Term and condition</span>
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