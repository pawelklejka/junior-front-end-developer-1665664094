import React from 'react'
import styled from 'styled-components'
import { dateFormatter } from '../../../utils/dateFormatter'
import Avatar from '../../Menu/Avatar/Avatar'

function Content(props) {
  const currentHour = `${new Date().getHours()}:${new Date().getMinutes()}` 
  const date = dateFormatter(`${props.context.created_at}`, 'full')
  return (
    <Wrapper>
      <Title>{props.context.title}</Title>
        <ContentWrapper>
          <Header>
              <Avatar/>
            <Author>
              {props.context.author}
            </Author>
            <span>    •   Today, {date}   •   {currentHour}</span>
          </Header>
          <Description>{props.context.content}</Description>  
        </ContentWrapper>  
    </Wrapper>
  )
}

export default Content

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `

const Header = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  margin: 0 -3rem;
  span{
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: var(--grey-text)
  }


`
const Author = styled.div`
  display: flex;
  margin: 0.5rem;
  width: fit-content;
  height: fit-content;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
`

const Title = styled.div`
  padding: 1rem 2rem;
  height: 10%;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 33px;

`

const Description = styled.div`
  margin: 0.5rem;

  color: var(--grey-text);
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
`

const ContentWrapper = styled.div`
  padding: 0 6rem;
`