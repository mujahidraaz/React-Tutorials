function User(props) {
    return (
        <div className="user">
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
        </div>
    )
}

export default User