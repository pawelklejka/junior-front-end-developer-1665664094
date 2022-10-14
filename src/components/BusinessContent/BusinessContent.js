import React from 'react'
import styled from 'styled-components'
import Content from './Content/Content'
import Inbox from './Inbox/Inbox'
import TabList from './TabList/TabList'

function BusinessContent(props) {
  return (
    <Wrapper>
        <TabList />
        <BusinessContentWrapper>
            <Inbox context={props.context}/>
            <Content context={props.context[0]}/> 
        </BusinessContentWrapper>
    </Wrapper>
  )
}

export default BusinessContent

const Wrapper = styled.div`
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    width: 100%;
    height: auto;
    margin: 0 1.5rem;

`

const BusinessContentWrapper = styled.div`
    display: flex;
    padding: 0px 4px 4px 4px;
`