import './style.css'
import mycss from './mycss.module.css'

function Cards() {

    const style = {
        backgroundColor:'red',
        padding:'30px',
        margin:'30px auto',
        width:'500px',
        borderRadius:'9px;'
    }
    return (
        <div>
            <h1 style={style}>Inline CSS</h1>
            <h1 className='cards'>External CSS</h1>
            <h1 className={mycss.cards}>Module CSS</h1>
        </div>
    )
}

export default Cards