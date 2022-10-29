function Home() {
    function ClickMe(name) {
        alert('code with' + name)
    }
    return(
        <div>
            <button onClick={() => ClickMe(" Mujahid")}>Click Me</button>
        </div>
    )
}

export default Home