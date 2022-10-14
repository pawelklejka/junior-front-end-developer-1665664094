import React from 'react'
import styled from 'styled-components'
import avatar from '../../../assets/png/avatar.png'
function Avatar() {
  return (
    <ImageBox>
        <Image src={avatar} />
    </ImageBox>
  )
}

export default Avatar

const ImageBox = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    border: 1px solid #6B778C;
    border-radius: 50%;
    ::before{
        position:absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-size: 250% 250%;
        border: 1px solid var(--grey);
        border-radius: inherit;
        z-index: 0;

    }
`

const Image = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 50%;
`