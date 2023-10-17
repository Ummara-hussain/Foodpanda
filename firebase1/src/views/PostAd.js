import { useState } from "react"
import { postAd } from "../config/firebase"
import { useNavigate } from "react-router-dom"

export default function PostAd() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [file, setFile] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const addData = async () => {
        setLoading(true)
        await postAd({ title, description, price, file: file[0] })
        setLoading(false)
        navigate('/dashboard')
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", width:400,
         height:350, border: '1px solid #61dafb', backgroundColor:'#e7ebd5',}}>
            <h3>Post Ad</h3>
            <input className="input" onChange={(e) => setTitle(e.target.value)} placeholder="Write Product Name" />
            <input className="input" onChange={(e) => setDescription(e.target.value)} placeholder="Write description" />
            <input className="input" onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price of the product" />
            <input className="input" onChange={(e) => setFile(e.target.files)} type="file" />
            {loading ? <img width='30' src="https://i.gifer.com/ZKZg.gif" /> :
                <button style={{width:100, margin:'auto'}} onClick={addData}>Submit</button>}
        </div>
    )
}