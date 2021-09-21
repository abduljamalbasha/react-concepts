import React from "react"
import { SideBar } from "../wrapper/sidebar"
import { Header } from "../wrapper/header"
import { Content } from "../wrapper/mainContant"


export const Layout = ({ sideBar, header, children }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
        <SideBar> {sideBar &&  sideBar} </SideBar>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Header> {header && header} </Header>
        <Content> {children} </Content>
      </div>
  </div>

  )
}
