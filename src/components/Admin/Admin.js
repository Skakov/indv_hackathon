import React from "react";
import Sidebar from "./SideBar"; 
import AddProduct from "../AddProduct/AddProduct"; 
import Paper from "@material-ui/core/Paper";
const Admin = () => {
  return (
    <Paper elevation={3}>
      <Sidebar />
      <AddProduct />
    </Paper>
  );
};

export default Admin;