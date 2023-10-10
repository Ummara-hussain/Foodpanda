function Cards(props) {
    const { click, image, title, price } = props
    return (
        <div onClick={click} style={{
            width: 300, textAlign: 'center', padding: 20,
            lineHeight: 1, padding: 5, margin: 10, display: "inline-block", height: 300, border: '1px solid black'
        }}>
            <img width={150} height={150} src={image} />
            <h4>{title} </h4>
            <h3>Price AED: {price}</h3>
        </div>
    )
}

export default Cards