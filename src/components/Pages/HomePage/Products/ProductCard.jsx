import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProductCard(props) {
    const {product} = props;
  return (
    <Card sx={{maxWidth:"340px",}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          width='100'
          objectFit = "cover"
          image={product.image}
          alt={product.title.slice(0,10)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {
            product?.title.substr(0,30)
           }...
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {
            product?.description.slice(0,60)
           }...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}