import React from 'react'
import styled from 'styled-components'
import Content from '../Content/Content'
import InboxElement from './InboxElement/InboxElement'

function Inbox(props) {
  return (
    <Wrapper>
       {props.context.map((context, index) => {
          return (
            <>
                      <InboxElement context={context} key={index}/>
            </>

          )

      })}

    </Wrapper>
  )
}

export default Inbox

const Wrapper = styled.div`
    width: 35%;
    border-radius: 0 0 0 10px;
    background-color: var(--grey);
`
