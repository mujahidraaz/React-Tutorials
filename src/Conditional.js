import { useState } from "react"

function Conditional() {
    const [data, setData] = useState(2)

    return(
        <div>
        {data == 1?<h1>Profile 1</h1>:data == 2?<h1>Profile 2</h1>:<h1>Profile 3</h1>}
        </div>
    )

}

export default Conditional