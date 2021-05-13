import React, { useContext, useState } from "react";
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
      history.push(`${history.location.pathname.replace("name")}`);
      getProducts(history);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("name", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
  };
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 100000]);
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
  const [searchValue, setSearchValue] = useState(getSearchValue());

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setSearchValue(e.target.value);
    getProducts(history);
  };
  function getSearchValue() {
    const search = new URLSearchParams(history.location.search);
    return search.get("q");
  }
  return (
    <Grid item m={3}>
      <Paper>
        <input
          style={{ width: 300 }}
          onChange={handleValue}
          value={searchValue}
        />
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
            max={100000}
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
          <FormLabel component="legend">LAMBORGHINI</FormLabel>
          <RadioGroup
            onChange={handleChangeMemory}
            aria-label="memory"
            name="memory"
            // value={memory}
          >
            <FormControlLabel value="Jackets" control={<Radio />} label="Jackets" />
            <FormControlLabel value="Tshirts" control={<Radio />} label="Tshirts"/>
            <FormControlLabel value="Accessories" control={<Radio />} label="Accessories"/>
            <FormControlLabel value="Cars" control={<Radio />} label="Cars" />
            <FormControlLabel value="Gifts" control={<Radio />} label="Gifts" />
            <FormControlLabel value="all" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>
      </Paper>
      <Paper className={classes.paper}> </Paper>
    </Grid>
  );
};

export default Sidebar;