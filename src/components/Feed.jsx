import React from 'react'
import styled from 'styled-components';
import Leftside from './Leftside';
import Rightside from './Rightside';
import Main from './Main';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



const Feed = () => {
  const user =  useSelector(state => state.user)
 
  return (
     <Container>
      {!user &&<Navigate replace to="/" />} 
         <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
         <Leftside/>
         <Main/>
         <Rightside/>
      </Layout>
  
     </Container>
  )
}



const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

export default Feed;


const Section = styled.section`
  min-height: 50px;
  padding: 2rem 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout  = styled.div`
  display: grid;
  grid-template-areas:"leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  gap: 25px;

  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`
