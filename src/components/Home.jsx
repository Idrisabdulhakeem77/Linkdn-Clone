import styled from "styled-components"
import { Link } from 'react-router-dom'


function Home() {
  return (
     <Container> 
          <Nav>
             <Link  to="/">
                 <Image src="/images/login-logo.svg" alt="logo"/>
             </Link>
          
           <div>
             <Join>Join Now</Join>
             <SignIn>Sign in</SignIn>
           </div>
          </Nav>

          <Section>
             <Hero>
                <SectionContainer>
                <h1>Join the biggest professional community</h1>
                <Form>

                </Form>
                </SectionContainer>
                
                 <img src="/images/hero.svg"  alt="hero-img"/>
             </Hero>
          </Section>
     </Container>
  )
}

export default Home



const Container = styled.div`
  padding : 0 4rem  ;
    
 @media (max-width : 768px) {
   padding: 0 5px
 }
 
`


const Nav =  styled.nav`
   max-width : 1128px ;
   display : flex ;
   justify-content : space-between;
   align-items : center ;
   margin-top : 1rem ;
   positon: relative ;
   padding :  12px 0 10px ;
   flex-wrap : nowrap

 `

 const Join = styled.a` 
    text-decoration: none ;
    font-size: 1rem;
    border-radius: 1rem;
    margin-right: 0.8rem;
    font-size : 1.2rem;
    padding: 1rem;
    color :  rgba(0, 0, 0, 0.6);
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      color: rgba(0, 0, 0, 0.9);
    }
  
 `

 const SignIn = styled.a`
    border : solid 1px #2977c9;
    padding : 12px 24px;
    border-radius : 24px ;
    transition-duration: 1s;
    font-weight : 600px ;
    font-size : 1.2rem;
    line-height : 12px ;
    &:hover {
      background-color: rgba(112, 181, 249, 0.15);
    }

 `

 const Image = styled.img`
    width: 130px ;
    height : 30px ;

    @mdeia (max-width : 768px) {
       padding : 0 5px;
    }
 `


 const Section = styled.section `
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding:  0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;


  @media (max-width: 768px) {
     margin : auto ;
     min-height : 0px ;
  }
 `


 const Hero = styled.div`
  width: 100%;
  display : flex ;
  h1 {
    padding-bottom: 0;
    width: 100%;
    font-size: 3rem;
    align-self: flex-start;
    padding-right: 42px;
    color: #8F5849;
    font-weight: 200; 
    border : solid 1px black ;
    
    @media (max-width: 768px) {
      text-align: center;
      font-weight : 200 ;
      font-size: 2rem;
      width: 100%;
      line-height: 2;
    }
   }

   img {
       width : 700px;
       height : 560px ;
       padding-top : 2rem ;
       
   }
  }`


const SectionContainer  = styled.div`
   border : solid 1px black ; 
   width : 100% ;
`

const Form =  styled.form``