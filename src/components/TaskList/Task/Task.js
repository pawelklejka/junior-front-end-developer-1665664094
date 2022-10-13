import React from 'react'
import styled from 'styled-components'
import './Task.css'
import {ReactComponent as Active} from '../../../assets/svg/active.svg'
import {ReactComponent as Blocked} from '../../../assets/svg/blocked.svg'
import {ReactComponent as Completed} from '../../../assets/svg/completed.svg'

function Task(props) {

    let StatusIcon = (status) => {
        if(status === "active") return <Active />
        if(status === "blocked") return <Blocked />
        if(status === "completed") return <Completed />
    } 

    return (
        <Wrapper>
            {StatusIcon(props.status)}
            <span className={props.status}>{props.title}</span>
        </Wrapper>
    )
}

export default Task

const Wrapper = styled.div`
    height: min-content;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    padding: 0.5rem 1.5rem;
    transition: background-color 500ms;

    :hover{
        background-color: #66a2ff;
    }
    svg{
        margin-right: 0.5rem;
    }
`