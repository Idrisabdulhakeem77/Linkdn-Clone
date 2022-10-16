import React  , {useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Timestamp } from 'firebase/firestore/lite'
import {postArticleApi} from '../redux/userSlice'



function PostModal({ handleClick , showModal }) {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [editInfo , setEditInfo ] = useState("")
    const [shareImage , setShowImage] = useState("")

    const hanldeChange = (e) => {
        const image = e.target.files[0]

        if(image === "" || image === "undefine") {
            alert(`No image , the file type is ${typeof(image)}`)
            return 
        }

        setShowImage(image)
    }


    const postArticle = (e) => {
         e.preventDefault()
         if(e.target !== e.currentTarget) return
        
         const payload = {
            id : Math.floor(Math.random() * 100 + 1),
           image : shareImage,
           user : user,
           description : editInfo,
           timestamp : Timestamp.now().toDate()
       }
         

       dispatch(postArticleApi(payload))
         reset(e)
    }

    const reset = (e) => {
         setEditInfo("")
         setShowImage("")
        handleClick(e)
    }
  return (
    
    <>
    { showModal === "open" &&  
   <Container>
       <Content>
           <Header>
              <h2> Create Post</h2>
              <button onClick={(e) => reset(e)}>
                  Close
              </button>
           </Header>
           <SharedContent>
               <UserInfo>
                { user.photoURL ? (
                    <img src={user.photoURL} alt="user"/>
                ) : (
                    <img src='/images/user.svg' alt="user"/>
                )}
                 
                  <span> { user.displayName} </span>
               </UserInfo>
               <Editor>
               <textarea
                 value={editInfo}
              onChange={(e) => setEditInfo(e.target.value)}
               placeholder="What do You want to talk about?"
               autoFocus={true}
                />
                <UploadImage>
                <input
                  type="file"
                  name="image"
                  id="file"
                  accept='image/gif image/jpeg image/png'
                  style={{ display : "none"}}
                  onChange={hanldeChange}
                 />
                 <p>
                     <label htmlFor='file'>
                         Select an image
                     </label>
                 </p>
                 {shareImage && <img src={URL.createObjectURL(shareImage)} alt="imag"/>}
                 </UploadImage>
               </Editor>
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
        <PostButton disabled={!editInfo ? true : false } onClick={(e) => postArticle(e)}>Post </PostButton>
           </ShareImage>
       </Content>
   </Container>
   }
   </>
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
background-color: ${props => props.disabled ? "rgba(0 ,0 , 0 , 0.8)" : " #0A66c2"};
padding :12px ;
color: #fff;

 &:hover {
     background : #004182 ;
 }
`

const Editor = styled.div `
    padding : 12px 24px ;
    textarea {
         width: 100%;
         min-height: 100px;
         resize: none;
    }
 `


const UploadImage = styled.div`
   text-align: center;
     img {
         width: 100%;
     }
 `


export default PostModal