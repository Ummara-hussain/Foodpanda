import { getRestaurants } from "../config/firebase"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Cards from "../components/Cards"

function Dashboard() {
  const [restaurant, setRestaurant] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getRestaurants()
    setRestaurant(data)
  }

  return (
    <div style={{ margin: '10px', padding: '10px', textAlign: 'center' }}>
      <h1>Restaurants</h1>
      {restaurant.map(item => {
        return <Cards data={item} onclick={() => navigate(`/restro/${item.id}`)} />
      }
      )}
    </div>
  )
}
export default Dashboard