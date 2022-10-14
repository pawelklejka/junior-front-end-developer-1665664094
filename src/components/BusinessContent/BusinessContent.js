import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import styled from 'styled-components'
import {convertTitleToUrl} from '../../utils/convertTitleToUrl'
import Content from './Content/Content'
import Inbox from './Inbox/Inbox'
import TabList from './TabList/TabList'

function BusinessContent(props) {

  const url = useLocation().pathname
  const pathNamewWithRemovedDash = url.substring(1)
  let context = props.context.find(d => convertTitleToUrl(d.title) == pathNamewWithRemovedDash).businessContexts
  console.log();

  return (
    <Wrapper>
        <TabList />
        <BusinessContentWrapper>
            <Inbox context={context}/>
            <Routes>
              <Route path=':businessContext/*' element={<Content context={context}/> }/>
            </Routes>
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