import React from 'react'
import styled from 'styled-components'
import BusinessContent from '../../components/BusinessContent/BusinessContent'
import TaskList from '../../components/TaskList/TaskList'
import data from '../../components/TaskList/task-list.json'

function BusinessContainer() {
  return (
    <Wrapper>
        <TaskList context={data}/>
        <BusinessContent context={data[0].businessContexts}/>
    </Wrapper>
  )
}

export default BusinessContainer

const Wrapper = styled.div`
    display: flex;
    margin: 0 1.5rem;
    height: 85%;
`