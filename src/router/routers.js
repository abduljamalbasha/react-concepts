
import React from "react"
import { PageNotFound } from "../Components/404"
import LifeCycle from "../Components/LifeCycle/lifeCycle"
import { Route, Switch } from "react-router-dom"
const routesArr = [
  {
    path: '/',
    component: LifeCycle,
    exact: true,
  },
  {
    path: '/LifeCycle',
    component: LifeCycle,
  },
  {
    path: '*',
    component: PageNotFound,
  },
]

const RouteWithSubRoutes = (
  route,
) => {
  return (
    <Route
      path={route.path}
      exact={true}
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

const Routes = () => {
  return (
    <Switch>
      {routesArr.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  )
}

export default Routes
