import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Details() {
    const [productDetails, setProductDetails] = useState()
    const params = useParams()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + params.id)
            .then(res => res.json())
            .then(res => setProductDetails(res))
    }, [])

    if (!productDetails) {
        return <div>Loading...</div>
    }
    return (
        <div style={{
            width: 500, textAlign: 'center', padding: 20,
            lineHeight: 1, padding: 5, margin: 10, height: 500, border: '1px solid black'
        }}>
            <img width={250} height={200} src={productDetails.image} />
            <h2>{productDetails.title}</h2>
            <h1>Price AED: {productDetails.price}</h1>
            <h4>Category: {productDetails.category}</h4>
            <p>Details: {productDetails.description}</p>
            <h4>Rating: {productDetails.rating.rate}</h4>
        </div>
    )
}
export default Details