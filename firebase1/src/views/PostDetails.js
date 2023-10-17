import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { details } from "../config/firebase"

function PostDetails() {
    const [adDetail, setAdDetail] = useState()
    const params = useParams()
    const id = params.id

    useEffect(() => {
        productDetail()
    }, [])

    async function productDetail() {
        const addData = await details(id)
        console.log('function', addData)
        setAdDetail(addData)
        console.log('state', details)
    }

    if (!adDetail) {
        return <div>
            <img src="https://i.gifer.com/ZKZg.gif" width='100' />
        </div>
    }
    return <div style={{
        width: 500, textAlign: 'center', padding: 20,
        lineHeight: 1, padding: 5, margin: 10, height: 400, border: '1px solid black'
    }}>

        <img width={250} height={200} src={adDetail.imageUrl} />
        <h4>{adDetail.title}</h4>
        <h3>Price PKR: {adDetail.price}</h3>
        <p>Description: {adDetail.description}</p>
    </div>
}

export default PostDetails