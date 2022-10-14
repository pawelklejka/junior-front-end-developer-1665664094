import React from 'react'
import styled from 'styled-components'
import Task from './Task/Task'

function TaskList(props) {
  return (
    
    <Wrapper>
        <Header>
            <Title>Your Tasks</Title>
        </Header>
        <TaskListWrapper>
            {props.context.map(task => {
                return <Task status={task.status} title={task.title} businessContexts={props.businessContexts} />
            })}  
        </TaskListWrapper>
    </Wrapper>
  )
}

export default TaskList

const Wrapper = styled.div`
    width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: auto;
    background: var(--white);
    border-radius: 12px;

`
const TaskListWrapper = styled.div`
    width: 98%;
    height: 100%;
    padding: 0.5rem 0;
    overflow-y: auto;
    ::-webkit-scrollbar{
    width: 6px;

    }

    ::-webkit-scrollbar-thumb{
    background-color: var(--grey);
    max-height: 5px;
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
    border-bottom: 1px solid var(--grey);
`

const Title = styled.span`
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
`

