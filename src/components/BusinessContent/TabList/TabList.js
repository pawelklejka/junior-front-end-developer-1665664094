import React from 'react'
import styled from 'styled-components'
import Tab from './Tab/Tab'

function TabList() {
  return (
    <List>
      <Tab />
    </List>
  )
}

export default TabList

const List = styled.div`
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid #F4F5F7;

`