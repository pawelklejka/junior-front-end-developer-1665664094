import React from 'react'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import TaskList from '../../components/TaskList/TaskList'
import BusinessContainer from '../BusinessContainer/BusinessContainer'
import data from '../../components/TaskList/task-list.json'
import { Route, Routes } from 'react-router'
function Layout() {
  return (
    <>
        <Menu />
        <BusinessContainer />
        <Footer />
    </>

  )
}

export default Layout