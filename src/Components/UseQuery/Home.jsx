import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { AxiosRQComponent } from './AxiosMethod';
import { UseQueryComponent } from './UseQueryComponent';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { HomeWorkComponent } from './homework';
import { RQSuperHeroDetail } from './RQSuperHero';
import { ParallalQueryComponent } from './parallalQueries';
import { DynamicParallelQueryComponent } from './dynamicParallelQuery';
import { DependentQueryComponent } from './dependentQuery';
import { PaginationQueryComponent } from './paginationQuery';
import { InfiniteQueryComponent } from './infiniteQuery';
import { MutationQueryComponent } from './mutationQuery';

export const USHomeComponent = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} >
      <Router>
        <div >
          <nav>
            <ul>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/'>Home</Link>
              </li>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/super-heroes'>Traditional Axios Fetch Data - Super Heroes</Link>
              </li>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/rq-super-heroes'>Use Query Fetch Data - Super Heroes</Link>
              </li>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/UQhomework'>UseQuery -Home Work</Link>
              </li>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/parallalQuery'>Parallal Query</Link>
              </li>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/dynamicParallalQuery'>Dynamic Parallal Query</Link>
              </li>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/dependentQuery'>Dependent Query</Link>
              </li>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/paginationQuery'>Pagination Query</Link>
              </li>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/infiniteQuery'>Infinite Query</Link>
              </li>
              <li className="float-left p-1 border border-solid border-gray-500 rounded mr-1">
                <Link to='/mutationQuery'>Mutation Query</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path='/super-hero-detail/:heroId'>
            <RQSuperHeroDetail />
          </Route>
          <Route path='/super-heroes'>
            <AxiosRQComponent />
          </Route>
          <Route path='/rq-super-heroes'>
            <UseQueryComponent />
          </Route>
          <Route path="/UQhomework">
            <HomeWorkComponent />
          </Route>
          <Route path="/parallalQuery">
            <ParallalQueryComponent />
          </Route>
          <Route path="/dynamicParallalQuery">
            <DynamicParallelQueryComponent HeroIds={[1, 3]} />
          </Route>
          <Route path="/dependentQuery">
            <DependentQueryComponent emailId="jamal@example.com" />
          </Route>
          <Route path="/paginationQuery">
            <PaginationQueryComponent />
          </Route>
          <Route path="/infiniteQuery">
            <InfiniteQueryComponent />
          </Route>
          <Route path="/mutationQuery">
            <MutationQueryComponent />
          </Route>
          {/* <Route path='/'>
            <USHomeComponent />
          </Route> */}
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}


