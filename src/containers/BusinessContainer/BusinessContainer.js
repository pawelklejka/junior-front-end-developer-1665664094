import React from 'react'
import styled from 'styled-components'
import TaskList from '../../components/TaskList/TaskList'

function BusinessContainer() {
  return (
    <Wrapper>
        <TaskList />
        <div>BusinessContext</div>
    </Wrapper>
  )
}

export default BusinessContainer

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    padding: 9% 76% 4% 2%;
`