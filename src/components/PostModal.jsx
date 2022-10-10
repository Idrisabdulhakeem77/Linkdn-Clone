import React from 'react'
import styled from 'styled-components'

function PostModal() {
  return (
   <Container>
       <Content>
           Coneten
       </Content>
   </Container>
  )
}


const Container =  styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom : 0;
    z-index : 999;
    background-color : rgba(0 , 0 , 0 , 0.7);
`

const Content =  styled.div`
    position: relative;
    width: 100%;
    max-width: 550px;
   background-color: #fff;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   border-radius: 5px;
   max-height: 90%;
   top : 2rem ;
`

export default PostModal