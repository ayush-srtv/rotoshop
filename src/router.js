import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./routes/app";
import Loader from "./components/loader";

const delay = ms => new Promise(res => setTimeout(res, ms));

function RouterConfig() {
  const routes = [
    {
      path: "/filters",
      component: lazy(async () => {
        await delay(700);
        return import(/* webpackChunkName: "filters" */ "./routes/filters/");
      })
    },
    {
      path: "/",
      component: lazy(async props => {
        await delay(700);
        return import(/* webpackChunkName: "canvas" */ "./routes/canvas/");
      })
    },
    {
      path: "/settings",
      component: lazy(async () => {
        await delay(700);
        return import(/* webpackChunkName: "settings" */ "./routes/settings/");
      })
    }
  ];

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <App>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map((props, key) => (
              <Route exact {...{ key, ...props }} />
            ))}
          </Switch>
        </Suspense>
      </App>
    </Router>
  );
}

export default RouterConfig;
