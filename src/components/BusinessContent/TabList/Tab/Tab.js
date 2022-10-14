import React from 'react'
import styled from 'styled-components'
import {ReactComponent as TabIcon} from '../../../../assets/svg/tab.svg'

function Tab() {
  return (
    <Wrapper>
      <TabIcon />
      <span>business context</span>
    </Wrapper>
  )
}

export default Tab

const Wrapper = styled.div`
    display: flex;
    width: fit-content;
    padding: 1.5rem 0 1.5rem 0;
    margin-left: 3rem;
    border-bottom: 2px solid var(--blue-text);
    span{
      height: fit-content;
      padding-left: 1.5rem;
      color: var(--blue-text);
      text-transform: uppercase;
    }

    svg{
      height: fit-content;
    }
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
`