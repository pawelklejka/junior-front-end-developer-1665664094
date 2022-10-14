import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <StyledFooter>
        <Left>
          <ul>
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Copyright</li>
          </ul>
        </Left>
        <Right>
          <ul>
            <li>nerds.family Version 1.2</li>
            <li>Last update 10/09/2022</li>
          </ul>
        </Right>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 75px;
  margin: 1rem 1.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  color: var(--grey-text);
  ul{
    display: flex;
    flex-direction: row;
    height: fit-content;
    li{
      margin: 0.25rem;
      height: fit-content;
    }
  }
`
const Left = styled.div`
  height: auto;
`
const Right = styled.div`
  margin: 0 1.5rem;
`