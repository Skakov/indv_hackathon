import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { productsContext } from "../../context/ProductsContext";
import "./ProductCard.css";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
const ProductCard = ({ item }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { showDetails, addProductToCart, checkProductInCart } = useContext(
    productsContext
  );
  console.log(productsContext);
  return (
    <div className="details" style={{ margin: 10, width: 500 }}>
      <Card
        className="details"
        style={{ padding: 15 }}
        className={classes.root}
      >
        <CardMedia className={classes.media} image={item.img1} />
        <div style={{ marginLeft: "40px" }}>
          <div className="product_name">{item.name}</div>
          <div
            style={{ lineHeight: "40px", fontSize: "25px" }}
            className="product_category"
          >
            {item.category}
          </div>
        </div>

        <CardContent style={{ marginLeft: "25px" }}>
          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            <div style={{ lineHeight: "30px" }} className="product_description">
              <img
                alt=""
                style={{ width: 17, marginRight: 5 }}
                src=""
              />
              {item.description}
            </div>
            <div style={{ fontSize: 27, color: "black", lineHeight: "30px" }} className="product_price">
              <img
                alt=""
                style={{ width: 17, marginRight: 5 }}
                src="" 
              />
              {item.price} $
            </div>
            <div style={{ lineHeight: "30px" }} className="product_color">
              <img
                alt=""
                style={{ width: 17, marginRight: 5 }}
                src="" 
              />
              {item.color}
            </div>
            <div
              style={{ fontSize: 27, color: "black", lineHeight: "40px" }}
              className="product_material"
            >
              {item.material} 
            </div>
          </Typography>
        </CardContent>
        <CardActions style={{ marginLeft: "20px" }} disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={() => addProductToCart(item)}
            // color={checkProductInCart(item.id) ? "secondary" : "primary"}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Link to="/details">
            <IconButton
              onClick={() => showDetails(item.id)}
              aria-expanded={expanded}
              aria-label="show more"
              style={{ fontSize: "25px" }}
            >
              {" "}
              learn more
              <ExpandMoreIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;