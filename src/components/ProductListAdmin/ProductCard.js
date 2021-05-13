import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse"; //////////////////
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { productsContext } from "../../context/ProductsContext"; 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  const { deleteProduct, editProduct, showDetails } = useContext(productsContext);
  return (
    <div style={{ margin: 20 }}>
      <CardMedia className={classes.media} image={item.img1} />
      <Card style={{ padding: 15 }} className={classes.root}>
        <div className="product_name">{item.name}</div>
        <div
          style={{ lineHeight: "40px", fontSize: "25px" }}
          className="product_category"
        >
          {item.category}
        </div>
        <CardContent>
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
            <div style={{ lineHeight: "30px" }} className="product_price">
              <img
                alt=""
                style={{ width: 17, marginRight: 5 }}
                src=""
              />
              {item.price}
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
              {item.material} $
            </div>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={() => deleteProduct(item.id)}
          >
            Delete
          </Button>
          <Link to={`/edit/${item.id}`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Link>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShoppingCartIcon />
          </IconButton>
          <Link to="/details">
            <IconButton
              onClick={() => showDetails(item.id)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;