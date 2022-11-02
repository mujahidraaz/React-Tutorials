import { useState } from 'react'
import Profile1 from './Profile1'
import Profile2 from './Profile2'
import Profile3 from './Profile3'


function Home() {

    const [data, setData] = useState(0)

    return (
        <div>
            {/* <Profile1 />
            <Profile2 />
            <Profile3 /> */}

            {data == 1? <Profile1 />:data == 2?<Profile2/>:<Profile3/>}

        </div>
    )
}

export default Home