import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { getArticles } from '../redux/action'
import PostModal from "./PostModal";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../redux/userSlice";

// import { getArticles } from "../redux/articleSlice";

import { getArticlesApi } from "../redux/action";

const Main = () => {
  const user  = useSelector((state) => state.user)
  const articles = useSelector((state) => state.articles);

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getArticlesApi());
  }, []);

  const [isModalOpen, setIsModalOpen] = useState("close");

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) return;

    switch (isModalOpen) {
      case "close":
        setIsModalOpen("open");
        break;
      case "open":
        setIsModalOpen("close");
        break;

      default:
        setIsModalOpen("close");
    }
  };
  return (
    <>
     {  articles.length === 0 ?  (
         <p> There are no articles</p>
     ) : ( 
    <Container>
      <ShareBox>
        
        Share Post
        <div>
           {user &&  user.photoURL ?  (
               <img src={ user.photoURL } alt="user"/>
           ) : (
            <img  src="/images/user.svg" alt="user" />
           )}
         
          <button onClick={handleClick}> Share Post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="video" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="event" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="article" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
       
      { articles.length >  0 && articles.map((article , index) => {
           const { title ,  description , date  , image} = article.actor
        return   (

      <Article key={index}>
       
      <SharedUser>
        <a>
          <img src={image} alt="user" />
        </a>
        <div>
          <span>{title}</span>
          <span>{description}</span>
          <span>{date.toDate().toLocaleDateString()}</span>
        </div>

        <button>
          <img src="/images/ellipsis.svg" alt="More" />
        </button>
      </SharedUser>
      <Description> { article.description}</Description>
      <SharedImage>
        <img src="/images/ken.png" alt="shared" />
      </SharedImage>
      <SocialCount>
        <li>
          <button>
            <img
              src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
              alt="scoial"
            />
            <img
              src="https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
              alt="scoial"
            />
            <span>10</span>
          </button>
        </li>
        <li>
          <a>2 Comment</a>
        </li>
      </SocialCount>
      <SocialAction>
        <button>
          <img src="/images/like.png" alt="like" width="24px" height="24px" />
          <span> Like </span>
        </button>

        <button>
          <img src="/images/comment-icon.svg" alt="comment" />
          <span>Comment</span>
        </button>

        <button>
          <img src="/images/repost-icon.svg" alt="repost" />
          <span>Repost</span>
        </button>

        <button>
          <img src="/images/send-icon.svg" alt="send" />
          <span>Send</span>
        </button>
      </SocialAction>
    </Article>
          
      )}
) }

      {console.log(articles)}
      <PostModal showModal={isModalOpen} handleClick={handleClick} />
    </Container>
    )}
    </>
  );
};

const Container = styled.div``;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  color: #958b7b;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 1rem;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;

      img {
        width: 48px;
        margin-right: 10px;
        border-radius: 24px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: solid 1px rgba(0, 0, 0, 0.2);
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }

        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
`;

const SharedUser = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 13px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    text-align: center;
    display: flex;
    overflow: hidden;

    img {
      width: 48px;
      height: 48px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 8px;
    overflow: hidden;

    span {
      text-align: start;
      &:first-child {
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 12px;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  text-align: left;
  padding: 0 1rem;
  overflow: hidden;
  margin-bottom: 4px;
`;
const SharedImage = styled.div`
  width: 100%;
  position: relative;
  display: block;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCount = styled.ul`
  list-style-type: none;
  margin: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    button {
      border: none;
      align-items: center;
    }
  }
`;

const SocialAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 8px;
  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 8px;
    border: none;
    outline: none;
    margin-left: 3px;
    background: none;

    @media screen and (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

export default Main;
