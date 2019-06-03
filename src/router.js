import React from "react";
import Home from "./components/home/Home";
import Posters from "./components/posters/Posters";
import ViewPoster from "./components/viewPoster/ViewPoster";
import Login from "./components/login/Login";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import ProductCategory from "./components/productCategory/ProductCategory";

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
        main: ({match, history}) => <ViewPoster match={match} history={history}/>
    },
    {
        path: '/product/:id',
        exact: true,
        main: ({match}) => <ProductCategory match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    },
];

export default routes;