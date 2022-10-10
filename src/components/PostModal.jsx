import React from 'react'
import styled from 'styled-components'

function PostModal() {
  return (
   <Container>
       <Content>
           <Header>
              <h2> Create Post</h2>
              <button>
                  Close
              </button>
           </Header>
           <SharedContent>
               <UserInfo>
                 <img src='/images/user.svg' alt="user"/>
                  <span> Name </span>
               </UserInfo>
           </SharedContent>
           <ShareImage>
              <AttachAssets>
                  <AssetsButton>
                      <img src="/images/photo-upload-icon.svg" alt=""/>
                  </AssetsButton>

                  <AssetsButton>
                  <img src="/images/video-upload-icon.svg" alt=""/>
                  </AssetsButton>
              </AttachAssets>
              <ShareComment>
              <AssetsButton>
                  <img src="/images/comment-icon.svg" alt="" />
                   Anyone
              </AssetsButton>
              </ShareComment>
        <PostButton>Post </PostButton>
           </ShareImage>
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

const Header = styled.div`
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 16px 20px ;
    line-height: 1.5 ;

    button {
         border: none;
         outline: none;
         background: transparent;
         height: 40px;
         width: 40px;
         min-width: auto;
    }
`


const SharedContent = styled.div`
    display:flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    padding : 12px 16px ;
    `


const UserInfo  = styled.div`
     display:  flex;
     align-items: center;
    padding : 12px 24px ;

    svg , img {
         border-radius: 50%;
         width: 50px;
         height: 50px;
    }

    span {
         margin-left : 8px;
    }
`


const ShareImage = styled.div`
     display: flex;
     justify-content: space-between;
     padding : 12px 24px 12px 16px;
`

const AssetsButton = styled.button`
   display : flex ;
   align-items: center;
   height: 40px;
   max-width: auto;
`
const AttachAssets = styled.div`
display:  flex;
align-items: center;
padding-right: 8px ;

  ${AssetsButton} {
      width:40px;
}
`
const  ShareComment = styled.div`
padding-left: 8px;
margin-right: auto;
`



const PostButton = styled.div`
border-radius: 25px;
background-color: #0A66c2;
padding :1rem ;
color: #fff;

 &:hover {
     background : #004182 ;
 }
`


export default PostModal