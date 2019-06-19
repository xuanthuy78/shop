import React from "react";
import Home from "./components/home/Home";
import Posters from "./components/posters/Posters";
import ViewPoster from "./components/viewPoster/ViewPoster";
import Login from "./components/login/Login";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import ProductCategory from "./components/productCategory/ProductCategory";
import Products from './components/admin/products/Products';
import Categories from './components/admin/categories/Categories';
import CreateProduct from "./components/admin/createProduct/CreateProduct";

const routes = [
    {
        path: '/home',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/posters',
        exact: true,
        main: ({match}) => <Posters match={match} />
    },
    {
        path: '/posters/:id',
        exact: true,
        main: ({match, history}) => <ViewPoster match={match} history={history} />
    },
    {
        path: '/category/:id',
        exact: true,
        main: ({match}) => <ProductCategory match={match} />
    },
    {
        path: '/admin/products',
        exact: true,
        main: () =><Products />
    },
    {
        path: '/admin/products',
        exact: true,
        main: () =><Products />
    },
    {
        path: '/admin/createProduct',
        exact: true,
        main: () =><CreateProduct />
    },
    {
        path: '/admin/categories',
        exact: true,
        main: () =><Categories />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    },
];

export default routes;