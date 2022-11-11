function Form() {

    return (
        <div>
            <h1>React Form Styling</h1>
            <div className="form">
                <form>
                    <input type='text' placeholder="full name" />
                    <input type='email' placeholder="email" />
                    <select>
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                        <option>Class 4</option>
                    </select>
                    <input type="checkbox" /><span>Term and condition</span>
                    <input type="submit" value="Submit" />
                </form>
                <div className="output">
                    <h3>Form Output</h3>
                    <ul>
                        <li><span>Full Name:</span> Mujahid</li>
                        <li><span>Email:</span> mujahid@gmail.com</li>
                        <li><span>Class:</span> Class1</li>
                        <li><span>Term and Condition:</span> True</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Form