import React from 'react'
import { Outlet, useLocation, useOutletContext } from 'react-router'
import styled from 'styled-components'
import {convertTitleToUrl} from '../../utils/convertTitleToUrl'
import Inbox from './Inbox/Inbox'
import TabList from './TabList/TabList'

function BusinessContent(props) {

  const url = useLocation().pathname
  const pathNamesWithRemovedDash = url.split('/')
  const [taskId, businessContextId] = [1, 2]
  const context = useOutletContext().find(d => convertTitleToUrl(d.title) == pathNamesWithRemovedDash[taskId]).businessContexts
  const businessContextPath = pathNamesWithRemovedDash[businessContextId]


  return (
    <Wrapper>
        <TabList />
        <BusinessContentWrapper>
            <Inbox context={context}/>
            <Outlet context={{ context, businessContextPath } }/>
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