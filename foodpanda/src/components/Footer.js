import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import { Typography, Toolbar, Box, Button, Container,Paper } from "@mui/material"

function Footer(){

    return(
        <React.Fragment>
        <AppBar sx={{
        position: 'static',
        bottom: 0,
        top:'auto',
        width: '100%',
        marginTop:'10px',
        background:'white'

        }} component="footer" square variant="outlined">
          <Container maxWidth="lg" sx={{display:'flex'}}>
            <Box
              sx={{
                my:1,
                mt:2,
                marginRight:'60px'
              }}
            >
                <Typography sx={{color:'grey'}}>© 2023 foodpanda</Typography>
            </Box>
    
            <Box
              sx={{
                mb: 2,
                mt: 2,
                marginRight:'60px'
              }}
            >
              <Typography sx={{color:'grey'}}>Press Help Center</Typography>
              <Typography sx={{color:'grey'}}>Refunds with panda pay</Typography>
              <Typography sx={{color:'grey'}}>Panda User Account Terms and Conditions</Typography>
              <Typography sx={{color:'grey'}}>Privacy Policy</Typography>
              <Typography sx={{color:'grey'}}>Security</Typography>
            </Box>

            <Box
              sx={{
                mb: 2,
                mt: 2,
                marginRight:'60px'

              }}
            >
              <Typography sx={{color:'grey'}}>Careers</Typography>
              <Typography sx={{color:'grey'}}>Suggest a Restaurants</Typography>
              <Typography sx={{color:'grey'}}>Corporate Customers</Typography>
              <Typography sx={{color:'grey'}}>Cash Back Terms and Conditions</Typography>
              <Typography sx={{color:'grey'}}>Foodpanda Magazine</Typography>
            </Box>

            <Box
              sx={{
                mb: 2,
                mt: 2,
                marginLeft:'20px',
              }}
            >
              <Typography> <a href='' style={{textDecoration:'none',color:'gray'}}>All cities </a></Typography>
              <Typography> <a href='' style={{textDecoration:'none',color:'gray'}}>Upade on Covid-19 In Pakistan </a> </Typography>
              <Typography> <a href='' style={{textDecoration:'none',color:'gray'}}>Pandamart Grocery Delivery</a> </Typography>
              <Typography> <a href='' style={{textDecoration:'none',color:'gray'}}>Pandapro-Monthly Subscription</a> </Typography>
              <Typography> <a href='' style={{textDecoration:'none',color:'gray'}}>Programme</a> </Typography>

              
            </Box>
          </Container>
        </AppBar>
        </React.Fragment>
    )
}

export default Footer