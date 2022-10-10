import React from 'react'
import styled from 'styled-components'


const Main = () => {
  return (
    <Container>
       <ShareBox> Share Post</ShareBox>
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
             <img src="/images/video-icon.svg" alt=''/>
             <span>Video</span>
          </button>

          <button>
             <img src="/images/event-icon.svg" alt=''/>
             <span>Event</span>
          </button>

          <button>
             <img src="/images/article-icon.svg" alt=''/>
             <span>Write Article</span>
          </button>
       </div>
    </Container>
  )
}



const Container = styled.div``


const ShareBox = styled.div``


export default Main