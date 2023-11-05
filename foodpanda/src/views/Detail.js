import * as React from 'react';
import { Link, Typography } from "@mui/material"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleData } from "../config/firebase"
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch } from 'react-redux';
import { addCartToStore } from '../store/cart';

function Details() {
    const [restroData, setRestroData] = useState()
    const { restro_id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await getSingleData(restro_id)
        setRestroData(data)
    }

    if (!restroData) {
        return <div>Loading...</div>
    }
    const { opening_hours, restaurant_name, address, cuisine_type, menu_categories } = restroData
    const open_hours = []

    for (let key in opening_hours) {
        open_hours.push(`${key}: ${opening_hours[key]}`)
    }

    const addToCart = (item) => {
        dispatch(addCartToStore(item))
    }

    return (
        <div style={{ padding: '10px', margin: '10px' }}>
            <Link color="#D70F64" href="http://localhost:3000/">Homepage</Link>
            <Link color="#D70F64" margin='30px' href="http://localhost:3000/restaurants">Karachi</Link>
            <Typography variant="body1" style={{ paddingTop: '10px', }} color="text.secondary">
                Cuisine:  {cuisine_type} </Typography>
            <Typography gutterBottom component="div" style={{ marginTop: '10px' }} variant="h4">{restaurant_name}</Typography>
            <Typography variant="body2" color="text.secondary">
                Free delivery - Rs. 249 Minimum - Rs. 7.99 Service Fee </Typography>
            <div style={{ border: '1px solid deeppink', width: '270px', margin: '10px', boxShadow:'5px 5px 5px pink' , textAlign: 'center', marginLeft: '400px', borderRadius: '15px' }}>
                <Typography gutterBottom component="div" style={{ marginTop: '10px', color: "#D70F64" }} variant="h6">
                    Restaurant's Info:  
                </Typography>
                <Typography gutterBottom component="div" style={{ marginTop: '10px', color: "#D70F64" }} variant="body1">
                    Address:
                </Typography>
                <Typography    variant="body2">
                     {address.street}, {address.city}</Typography>
                <Typography gutterBottom component="div" style={{ marginTop: '10px', color: "#D70F64" }} variant="body1">
                    Timings:
                </Typography>
                {open_hours.map(item => <Typography variant="body2" >{item}</Typography>)}
            </div>
            <Tabs>
                <TabList style={{ color: "#D70F64" }}>
                    {menu_categories.map(item => {
                        return <Tab>{item.category_name}</Tab>
                    })}
                </TabList>
                <TabPanel>
                    {menu_categories[0].items.map(item => {
                        return <Card sx={{ display: 'flex', border: '1px solid deeppink', width: '350px', height: '170px', margin: '15px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        {item.item}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Rs. {item.price}
                                    </Typography>
                                    <CardActions>
                                        <Button onClick={() => addToCart(item)} size="small"> <img width={40} alt='add to cart' src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-add-icon-isolated-on-abstract-background-png-image_5073728.jpg' /></Button>
                                    </CardActions>
                                </CardContent>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 152, height: 150 }}
                                image={item.item_image_url}
                                alt="Food"
                            />
                        </Card>
                    })}
                </TabPanel>

                <TabPanel>
                    {menu_categories[1].items.map(item => {
                        return <Card sx={{ display: 'flex', border: '1px solid deeppink', width: '330px', height: '160px', margin: '15px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        {item.item}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Rs. {item.price}
                                    </Typography>
                                    <CardActions>
                                        <Button onClick={() => addToCart(item)} size="small"> <img width={40} alt='add to cart' src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-add-icon-isolated-on-abstract-background-png-image_5073728.jpg' /></Button>
                                    </CardActions>
                                </CardContent>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 150, height: 120 }}
                                image={item.item_image_url}
                                alt="Food"
                            />
                        </Card>
                    })}
                </TabPanel>

                <TabPanel>
                    {menu_categories[2].items.map(item => {
                        return <Card sx={{ display: 'flex', border: '1px solid deeppink', width: '320px', height: '160px', margin: '15px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        {item.item}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Rs. {item.price}
                                    </Typography>
                                    <CardActions >
                                        <Button onClick={() => addToCart(item)} size="small"> <img width={40} alt='add to cart' src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-add-icon-isolated-on-abstract-background-png-image_5073728.jpg' /></Button>
                                    </CardActions>
                                </CardContent>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 150, height: 120 }}
                                image={item.item_image_url}
                                alt="Food"
                            />
                        </Card>
                    })}
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Details 