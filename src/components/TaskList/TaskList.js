import React from 'react'
import data from './task-list.json'
import styled from 'styled-components'
import Task from './Task/Task'

function TaskList(props) {
  return (
    <Wrapper>
        <Header>
            <Title>Your Tasks</Title>
        </Header>
        <TaskListWrapper>
            {data.map(task => {
                return <Task status={task.status} title={task.title} businessContexts={props.businessContexts} />
            })}  
        </TaskListWrapper>
    </Wrapper>
  )
}

export default TaskList

const Wrapper = styled.div`
    width: 320px;
    height: 783px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    background: #FFFFFF;
    border-radius: 12px;

`
const TaskListWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem 0;
    overflow-y: auto;
    ::-webkit-scrollbar{
    width: 4px;
    }

    ::-webkit-scrollbar-thumb{
    background-color: #F4F5F7;
    border-radius: 5px;
        :hover{
        background-color: #A4A5A7;
        }
    }

`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 65px;
    justify-content: space-between;
    padding: 1.5rem 1.5rem;
    width: 100%;
    border-bottom: 1px solid #F4F5F7;
`

const Title = styled.span`
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
`

