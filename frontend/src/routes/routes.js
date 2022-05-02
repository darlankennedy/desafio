import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../main/App'
import Compras from "./../Compras/Compras";
import ComprasForm from '../Compras/ComprasForm'
import Produtos from './../produtos/Produtos';

export default (props) =>{
    return (
        <BrowserRouter>
        <Routes>
            <Route
                exact
                path="/"
               
            />
            {/* The next line is very important for the Navigate component to work */}
            <Route
                path="/produtos"
                element={ <Produtos /> }
            />
            <Route
                path="/compras"
                element={ <Compras/> }
            /> 
             <Route
                path="/realizarCompras"
                element={ <ComprasForm/> }
            /> 
        </Routes>
    </BrowserRouter>
    )
}