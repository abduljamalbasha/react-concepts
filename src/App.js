import React from 'react'
import './App.css';
import './styles/tailwind.css';
import { BrowserRouter as Router } from "react-router-dom"
import { Layout } from "./Components/Layout/layout";
import Routes from './router/routers'
import { SideBar } from "./Components/wrapper/sidebar";
import { Header } from "./Components/wrapper/header";

function App() {
  return (
    <div className="App">
       <Router>
        <Layout header={<Header/>} sideBar={<SideBar/>} > 
          <Routes />
        </Layout> 
      </Router>
    </div>
  );
}

export default App;
