import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// import { Link } from "react-router-dom";
import ShopIcon from "@material-ui/icons/Shop";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<AddCircleIcon />}
      >
        Add product
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<ShopIcon />}
      >
        Shop
      </Button>
    </Paper>
  );
};

export default Sidebar;