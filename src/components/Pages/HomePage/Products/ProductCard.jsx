import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PrimaryButton from '../../../buttons/PrimaryButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
}

export default function ProductCard(props) {
  const { product } = props;
  const [isMouseHover, setIsMouseHover] = React.useState(false);

  return (
    <Card
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
      sx={{ maxWidth: "340px", position: "relative" }}>
      <CardContent>
        <Typography sx={{ textAlign: "right" }}>NEW</Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          width='100'
          sx={{ objectFit: "cover" }}
          image={product.image}
          alt={product.title.slice(0, 10)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {
              product?.title.substr(0, 30)
            }...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {
              product?.description.slice(0, 60)
            }...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <PrimaryButton className={isMouseHover ? "centered" : "hidden"}><RemoveRedEyeIcon /></PrimaryButton>
        <PrimaryButton className={isMouseHover ? "centered" : ""}><ShoppingCartOutlinedIcon /></PrimaryButton>
        <PrimaryButton className={isMouseHover ? "centered" : ""}><FavoriteBorderIcon /></PrimaryButton>
      </CardContent>
    </Card>
  );
}