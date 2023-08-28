import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div `
    background: #b7322c;
    color: #fff;
    padding:15px;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    font-family: 'Lato' sans-serif;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error