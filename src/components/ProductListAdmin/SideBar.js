import React, { useContext } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { productsContext } from "../../context/ProductsContext";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  root: {
    width: 300,
  },
}));
const Sidebar = ({ history }) => {
  const { getProducts } = useContext(productsContext);
  const handleChangeMemory = (e) => {
    if (e.target.value === "all") {
      history.push(`${history.location.pathname.replace("category")}`);
      getProducts(history);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("category", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
   
  };
 
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 20000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const showChangePrice = () => {
    const search = new URLSearchParams(history.location.search);
    history.push(
      `${history.location.pathname}?price_gte=${value[0]}&price_lte=${value[1]}`
    );
    getProducts(history);
    search.toString();
  };
  
  return (
    <Grid item m={3}>
      <Paper>
        <div className={classes.root}>
          <Typography id="range-slider" gutterBottom>
            Price from... ...to
          </Typography>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="jackets"
            aria-labelledby="range-slider"
            min={0}
            max={1000000}
            step={100}
          />
          <Button onClick={showChangePrice} variant="outlined" color="primary">
            Show
          </Button>
        </div>
      </Paper>
      <Paper className={classes.paper}>
        {" "}
        <FormControl component="fieldset">
          <FormLabel component="legend">Memory</FormLabel>
          <RadioGroup
            onChange={handleChangeMemory}
            aria-label="memory"
            name="memory"
            // value={memory}
          >
            <FormControlLabel value="64" control={<Radio />} label="64" />
            <FormControlLabel value="128" control={<Radio />} label="128" />
            <FormControlLabel value="512" control={<Radio />} label="512" />
            <FormControlLabel value="1024" control={<Radio />} label="1024" />
            <FormControlLabel value="all" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>
      </Paper>
      <Paper className={classes.paper}> </Paper>
    </Grid>
  );
};

export default Sidebar;