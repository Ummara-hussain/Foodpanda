import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, details, getAds } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Dashboard() {
    const [ads, setAds] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getData()

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user.email)
            } else {
            }
        })
    }, [])

    const getData = async () => {
        const adsData = await getAds()
        setLoading(false)
        setAds(adsData)
    }

    // const cards = () => {
    //     details()
    //     navigate('/postAd/'+ ads.id)
    // }
    return (
        <div >
            <h1>Welcome to Sell Your Product</h1>
            <p>login account: {currentUser}</p>
            {loading ? <img width='30' src='https://i.gifer.com/ZKZg.gif' />
                : ads.map(item => {
                    return <div onClick={() => navigate('/postAd/'+ item.id)} style={{ width: '100', height: '100', lineHeight: '1', border: '1px solid black' }}>
                        <img src={item.imageUrl} width='150' />
                        <h4>{item.title}</h4>
                        <h4>Rs: {item.price}</h4>
                        {/* <p>Description: {item.description}</p> */}
                    </div>
                })}
            <button onClick={() => navigate('/postAd')}>Post Ad</button>
        </div>
    )
}
export default Dashboard