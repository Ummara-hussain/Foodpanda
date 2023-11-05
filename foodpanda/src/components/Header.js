import { useNavigate } from 'react-router-dom'
import { auth, logout } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'

import * as React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import Theme from './Theme'

function Header() {
  const [userExists, setUserExists] = useState(false)
  const navigate = useNavigate()
  const [showCart, setShowCart] = useState(false)


  const cart = useSelector(state => state.cartReducer.cart)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserExists(true)
        navigate('/restaurants')
      }
      else {
        setUserExists(false)
        navigate('/')
        // navigate('/signin')
      }
    });
  }, [])

  let totalPrice = 0
  cart.map(item => {
    totalPrice += item.price
  })

  return (
    <div style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: 'white' }} position="sticky">
          <Toolbar >
            <img style={{ padding: '10px' }} width={50} src="https://play-lh.googleusercontent.com/e5GPTe3zNL4KKPvywZhXFeiDUaowHmlLLCoYjkbw0QGu5LUT39QrL65n2X74IBbCeUEn" />
            <Typography style={{ color: 'deeppink' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              foodpanda
            </Typography>
            <Typography style={{ color: 'deeppink' }} variant="body1" component="div" sx={{ flexGrow: 1 }}>
             <img width={20} src='https://cdn-icons-png.flaticon.com/512/2838/2838912.png'/> Location : Karachi </Typography>
       
            <Theme />
            {userExists ? <Button onClick={logout} style={{ margin: '10px', color: 'deeppink', border: '1px solid deeppink' }} variant="outlined">Log out</Button>
              : <Button onClick={() => navigate("/signin")} style={{ margin: '10px', color: 'deeppink', border: '1px solid deeppink' }} variant="outlined">Login</Button>}
            <Button onClick={() => navigate("/signin")} style={{ color: 'white', margin: '10px', backgroundColor: 'deeppink', border: '1px solid deeppink' }} variant="contained">Sign up</Button>
            <Button onClick={() => setShowCart(!showCart)} ><img width={40} src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559866.jpg' /> </Button>
            {/* <Typography>{cart.length} </Typography> */}
          </Toolbar>
        </AppBar>
      </Box>
      {showCart && <div style={{ position: 'absolute', top: 100, right: 10, backgroundColor: 'white', width: '300px', color: 'black' }}>
        <div style={{ border: '1px solid deeppink', borderRadius: '10px 10px' }}>
          <table> <tr> <th>Items</th> <th>Prices</th> </tr>
            {cart.map(item => {
              return <tr><td>{item.item}</td>
                <td>Rs. {item.price}</td>
              </tr>
            })}
            <tr><th>Total Price: </th>
              <th>Rs. {totalPrice}</th></tr>
          </table>
        </div>
      </div>}
    </div>
  )
}

export default Header