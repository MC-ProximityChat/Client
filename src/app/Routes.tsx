import React from "react";

import { Route, Switch } from "react-router-dom";

import { Server } from "./pages/Server"
import { About } from "./pages/About"
import { Home } from "./pages/Home";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {

    return (
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/server/:id"} component={Server} />
            <Route exact path={"/about"} component={About} />
        </Switch>
    )
}