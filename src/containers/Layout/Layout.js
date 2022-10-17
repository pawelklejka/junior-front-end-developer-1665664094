import React from 'react'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import TaskList from '../../components/TaskList/TaskList'
import { Outlet, Route, Routes } from 'react-router'
import styled from 'styled-components'

function Layout(props) {
  return (
    <>
        <Menu />
        <Wrapper>
          <TaskList context={props.context}/>
          <Outlet context={props.context}/>
        </Wrapper>
        <Footer />
    </>

  )
}

export default Layout

const Wrapper = styled.div`
  display: flex;
  height: 85%;
  padding: 0 1.5rem;
`