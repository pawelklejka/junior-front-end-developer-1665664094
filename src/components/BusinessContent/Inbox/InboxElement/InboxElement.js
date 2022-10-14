import React from 'react'
import styled from 'styled-components'
import './InboxElement.css'
import { dateFormatter } from '../../../../utils/dateFormatter'
import { useLocation } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

function InboxElement(props) {
    const punctuationMarksRegex = /[.,\s]/g
    const businessContextPath = `${props.context.title}`.toLowerCase().replaceAll(" ", "-").replaceAll(punctuationMarksRegex, '')
    const url = `${businessContextPath}`

    const onClickChangeStatus = (event) => {
        event.preventDefault()
        props.context.isNew = "false"
    }


    //change 'true' when adding fetch data from outside source to true
  return (
    <Wrapper className={props.context.readStatus} onClick={event => onClickChangeStatus(event)}>
        <NavLink to={url}>
            <Header>{props.context.isNew === 'true' ? <Label><span>new</span></Label> : null} <span>{props.context.author}    •   {dateFormatter(props.context.created_at, 'short')}</span> </Header>
            <Content>
                <Title >{props.context.title}</Title>
                <Description>{props.context.content}</Description>
            </Content>
        </NavLink>
    </Wrapper>
  )
}

export default InboxElement

const Wrapper = styled.div`
  height: 130px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
`

const Header = styled.div`
    margin: 0 0 0.5rem 0;
    display: flex;
    width: 100%;
    height: min-content;
    color: var(--grey-text);
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    span{
        justify-content: center;
    }
`
const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 14px;
    width: 39px;
    height: 20px;
    background: var(--blue-text);
    border-radius: 4px;
    span{
        height: fit-content;
        color: var(--white);
        text-transform: uppercase;
    }
`
const Content = styled.div`
    height: fit-content;
`
const Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
`
const Description = styled.div`
    height: 30px;
    color: var(--grey-text);
    margin: 0.5rem 0;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
`