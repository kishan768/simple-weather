import React from 'react'
import { styled } from 'styled-components'
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="error">
        Result not Found...
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
display: flex;
align-items: start;
padding: 10rem;
justify-content: center;
color: black;
`

export default ErrorPage
