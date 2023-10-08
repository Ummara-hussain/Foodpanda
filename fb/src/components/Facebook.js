function Facebook(props) {
    const { userName, date, profilePic, description } = props
    return <div >
        <img width={80} src={profilePic} />
        <div style={{ display: 'inline-block' }}>
            <h4>{userName}</h4>
            <h5 >{date.toDateString()}</h5>
        </div>
        <br />
        <h5>{description}</h5>
    </div>
}

export default Facebook