import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PrimaryButton from "../../../buttons/PrimaryButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



export default function ProductCard(props) {
  const { product } = props;
  const [isMouseHover, setIsMouseHover] = React.useState(false);

  return (
    <Card
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
      sx={{ maxWidth: "340px", position: "relative" }}
    >
      <CardActionArea>
        <Typography sx={{ textAlign: "right", marginRight: "10px", mt:2,mb:3}}>
          <span style={{border:'5px solid #699403',backgroundColor:'#699403',color:'white',borderEndEndRadius:'20px',
        borderStartStartRadius:'20px',fontWeight:'bold',fontSize:'12px',padding:'6px'}}>NEW</span>
        </Typography>
        <CardMedia
          component="img"
          height="210"
          width="100"
          sx={{ objectFit: "cover",}}
          image={product.image}
          alt={product.title.slice(0, 10)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product?.title.substr(0, 30)}...
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {
              product?.description.slice(0, 60)
            }...
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardContent>
        <PrimaryButton className={isMouseHover ? "centered" : "hidden"}>
          <RemoveRedEyeIcon />
        </PrimaryButton>
        <PrimaryButton className={isMouseHover ? "centered" : ""}>
          <ShoppingCartOutlinedIcon />
        </PrimaryButton>
        <PrimaryButton className={isMouseHover ? "centered" : ""}>
          <FavoriteBorderIcon />
        </PrimaryButton>
      </CardContent>
    </Card>
  );
}
