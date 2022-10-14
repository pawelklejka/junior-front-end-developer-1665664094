import React from 'react'
import styled from 'styled-components'
import BusinessContent from '../../components/BusinessContent/BusinessContent'
import TaskList from '../../components/TaskList/TaskList'
import data from '../../components/TaskList/task-list.json'
import { Route, Routes } from 'react-router'

function BusinessContainer() {
  return (
    <Wrapper>
        <TaskList context={data}/>
        <Routes >
          <Route path=":contextId" element={<BusinessContent context={data}/>} >
          </Route>
        </Routes>
    </Wrapper>
  )
}

export default BusinessContainer

const Wrapper = styled.div`
    display: flex;
    margin: 0 1.5rem;
    height: 85%;
`