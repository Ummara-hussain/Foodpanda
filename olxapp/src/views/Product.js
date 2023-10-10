import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import { useNavigate } from "react-router-dom"

function Product() {
    const navigate = useNavigate()
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProducts(res))
    }, [])

    if (!products) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {products.map(item => {
                return <Cards click={() => navigate('/products/' + item.id)} title={item.title}
                    price={item.price} image={item.image} />
            })}
        </div>
    )
}
export default Product