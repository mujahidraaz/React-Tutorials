import { useState } from "react"

import User from './User' 

function Lists() {
        const Profile = [
            {name: 'Mujahid', email:'mujahid@gmail.com', age:30},
            {name: 'Rahul', email:'rahul@gmail.com', age:32}
        ]
        
        const [list, setList] = useState(Profile)

    return (
        <div>
            {list.map((item =>  <User name={item.name} email={item.email} age={item.age} /> ))}
           
        </div>
        
    )
}


export default Lists