import React from 'react'
import { useOutletContext } from 'react-router'
import styled from 'styled-components'
import { convertTitleToUrl } from '../../../utils/convertTitleToUrl'
import { dateFormatter } from '../../../utils/dateFormatter'
import Avatar from '../../Menu/Avatar/Avatar'

function Content() {
  const {context, businessContextPath} = useOutletContext()
  const currentHour = `${new Date().getHours()}:${new Date().getMinutes()}` 
  
  let businessContext = context.find(d => convertTitleToUrl(d.title) == businessContextPath)
  const date = dateFormatter(`${businessContext.created_at}`, 'full')

  return (
    <Wrapper>
      <Title>{businessContext.title}</Title>
        <ContentWrapper>
          <Header>
              <Avatar/>
            <Author>
              {businessContext.author}
            </Author>
            <span>    •   Today, {date}   •   {currentHour}</span>
          </Header>
          <Description>{businessContext.content}</Description>  
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