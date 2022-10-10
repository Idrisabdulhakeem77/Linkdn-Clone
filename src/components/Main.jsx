import React from 'react'
import styled from 'styled-components'


const Main = () => {
  return (
    <Container>
       <ShareBox> Share Post
       <div>
          <img src="/images/user.svg" alt='user'/>
          <button> Share Post</button>
       </div>

       <div>
          <button>
             <img src="/images/photo-icon.svg" alt=''/>
             <span>Photo</span>
          </button>

          <button>
             <img src="/images/video-icon.svg" alt='video'/>
             <span>Video</span>
          </button>

          <button>
             <img src="/images/event-icon.svg" alt='event'/>
             <span>Event</span>
          </button>

          <button>
             <img src="/images/article-icon.svg" alt='article'/>
             <span>Write Article</span>
          </button>
       </div>
       </ShareBox>
    </Container>
  )
}



const Container = styled.div``


const CommonCard = styled.div`
   text-align: center;
   overflow: hidden;
   margin-bottom:8px;
   background-color: #fff;
   border-radius: 5px;
   position: relative;
   border: none;
`

const ShareBox = styled(CommonCard)`
     display: flex;
     flex-direction: column;
     margin : 0 0 8px;
     color: #958b7b ;
      div {
        button {
            outline: none;
            color: rgba(0,0,0,0.6) ;
            font-size : 1rem;
            line-height: 1.5;
            min-height: 48px;
            background: transparent  ;
            border : none;
            display: flex;
            align-items : center;
            font-weight: 600;
 }
      &:first-child{
               display: flex;
               align-items: center;
               padding : 8px 16px 0 16px;
    
                 img {
                  width: 48px;
                  margin-right: 10px ;
                  border-radius: 24px;
               }

               button {
                  margin: 4px 0;
                  flex-grow: 1;
                  border-radius: 35px;
                  padding-left: 16px;
                  border: solid 1px rgba(0,0,0,0.2);

               }
            }

        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 4px;

            button {
               img {
                  margin: 0 4px 0 -2px;
                
               }

               span {
                 color: #70b5f9
               }
            }
        }
        }
  `


export default Main 