import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../../src/assets/svg/logo.svg'
import Avatar from './Avatar/Avatar'

function Menu() {
  return (
    <Header>
        <Logo />
        <Avatar />
    </Header>
  )
}

export default Menu

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 75px;
    padding: 1rem 3rem;
    margin: 0.25rem 0;
    svg{
        margin: 0 -1.5rem;
        min-height: 25px;
        min-width: 155px;
    }
`