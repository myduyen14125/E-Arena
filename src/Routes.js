import React from "react";
import { Route, Switch } from "react-router-dom";
import Chapter from "./pages/Chapter";
import Courses from "./pages/Courses";
import GamePlay from "./pages/GamePlay";
import Scheduler from "./pages/Scheduler";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/courses">
        <Courses />
      </Route>
      <Route path="/course/:id" exact>
        <Chapter />
      </Route>
      <Route path="/play/:id" exact>
        <GamePlay />
      </Route>
      <Route path="/scheduler">
        <Scheduler />
      </Route>
      <Route path="/ranking">
        <Ranking />
      </Route>
    </Switch>
  );
};

export default Routes;
