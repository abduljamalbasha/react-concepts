
import React from "react"
import { PageNotFound } from "../Components/404"
import LifeCycle from "../Components/LifeCycle/lifeCycle"
import { Route, Switch } from "react-router-dom"
import UseStateComponent from "../Components/Hooks/UseStateWrapper"
import FragmentComponent from "../Components/Fragment/Fragment"
import ContextWrapperComponent from "../Components/Context/contextWrapper"
import ClassComponentRef from "../Components/ClassComponentRef/focusInput"
import ErrorBountaryComponent from "../Components/ErrorBoundary/errorBountryWrapper"
import RenderPropComponent from "../Components/RenderProps/counterWrapper"
import UseReducerWrapper from "../Components/Hooks/useReducer/useReducerWrapper"
// import UseReducerComponent from "../Components/Hooks/useReducer/useReducerWrapper"
const routesArr = [
  {
    path: '/react-concepts/',
    component: LifeCycle,
    exact: true,
  },
  {
    path: '/LifeCycle',
    component: LifeCycle,
  },
  {
    path: '/UseState',
    component: UseStateComponent,
  },
  {
    path: '/Fragment',
    component: FragmentComponent,
  },
  {
    path: '/Context',
    component: ContextWrapperComponent,
  },
  {
    path: '/ClassCompoenentRef',
    component: ClassComponentRef,
  },
  {
    path: '/ErrorBoundary',
    component: ErrorBountaryComponent,
  },
  {
    path: '/RenderProps',
    component: RenderPropComponent,
  },
  {
    path: '/UseReducer',
    component: UseReducerWrapper,
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
