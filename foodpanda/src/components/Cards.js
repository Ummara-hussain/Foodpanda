import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Cards(props) {
  const { restaurant_name, cuisine_type, image_url } = props.data
  return (
    <Card sx={{ width: '300px' , margin: "5px", display:'inline-block'}}>
      <CardActionArea onClick={props.onclick}>
        <CardMedia
          component="img"
          height="140"
          image={image_url}
          alt="Food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {restaurant_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Cuisine:  {cuisine_type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  )
}

export default Cards