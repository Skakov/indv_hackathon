import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductsContext"; 
import ProductCard from "./ProductCard"; 
import { Grid } from "@material-ui/core";
import Sidebar from "./SideBar";
import { useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

const ProductListAdmin = (props) => {
    const { getProducts, productsData, paginationPages } = useContext(productsContext);
    const [page, setPage] = useState(getProducts());
    const history = useHistory();

    useEffect(() => {
        getProducts(props.history);
      
    }, []);

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        setPage(page);
        getProducts(history);
    };
   
    return (
        <>
            {productsData ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Sidebar />
                    <Grid container spacing={3} style={{ margin: 0 }}>
                        {productsData?.map((item) => (
                            <ProductCard item={item} key={item.id} />
                        ))}
                    </Grid>
                    <Pagination
                        page={+page}
                        onChange={handlePage}
                        count={paginationPages}
                    />
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default ProductListAdmin;