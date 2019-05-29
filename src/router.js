import React from "react";
import Home from "./components/home/Home";
import Posters from "./components/posters/Posters";
import ViewPoster from "./components/posters/viewPoster/ViewPoster";
import Login from "./components/login/Login";

const routes = [
    {
        path: '/home',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/login',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/Posters',
        exact: true,
        main: () => <Posters />
    },
    {
        path: '/Posterts/id',
        exact: true,
        main: () => <ViewPoster />
    },
    
];

export default routes;