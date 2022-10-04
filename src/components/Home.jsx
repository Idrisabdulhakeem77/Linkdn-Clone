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
                  <input type="text" placeholder="Email or phone number"/>

                  <input type="password" placeholder="Password"/>

                  <p>By clicking Agree &amp; Join, you agree to the LinkedIn <span>User Agreement, Privacy Policy </span>, and <span>
                  Cookie Policy</span>.</p>
                  <Button>Agree &amp; Join</Button>
                   <Divider>
                         <span> or</span>
                   </Divider>
                    <h2>Already a member ? <span> <Link to="/signin" style={{ textDecoration : "none"}}>Sign in</Link></span></h2>
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
   position: relative ;
   padding :  12px 0 10px ;
   flex-wrap : nowrap ;
   

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

    @media (max-width : 768px) {
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
  margin-top : 3rem;

  @media (max-width: 768px) {
     margin-top : 3rem ;
     min-height : 0px ;
  }
 `


 const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
    h1 {
       padding-bottom : 0;
       font-size : 3rem ;
       
       font-weight : 100;
       color:  #8F5849 ;
       line-height : 70px ;
       margin-bottom: 1rem;

       @media(max-width : 768px) {
           text-align: center;
           width: 100%;
           font-size: 1.5rem;
           font-weight: 100;
}
   }

   img {
       width: 500px;
       height: 560px;
       position: absolute;
       display: block;
       right: 0;
      
       
       @media screen and ( max-width: 768px) {
           width : 370px ;
           height: 215px;
           margin: auto;
           position: relative;
          
       }
 }
  `


const SectionContainer  = styled.div`
   width : 50% ;

   @media screen and (max-width: 768px) {
       width: 100%;
   }
`

const Form =  styled.form`
   position: relative;
   margin-right: 1rem;
    margin-left: 1rem;
   input {
       width: 90%;
      padding : 1rem 0.5rem ;
      margin-bottom: 0.7rem;
      font-size: 1rem;
      
      
   }

   p {
       font-size: 1rem;
       margin-bottom: 1rem;

       span {
          color: #0A66C2 ;
           &:hover {
              border-bottom: solid 1px #0A66C2;
           }
       }
       
   }

   h2 {
       text-align: center;
       margin: 1rem 0 ;
   }
  `

const Button  = styled.button`
    color : #fff;
    background-color: #2977C9;
    width: 95%;
    padding: 1rem;
    border: none;
    border-radius: 30px;
    text-align: center;
    font-size: 1rem;
    height: 56px;
    margin-bottom: 1.2rem;
`

const Divider =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    &::before , &::after {
      height: 1px;
      width: auto;
      background-color: rgb(0 0 0 / .35);
      content: "";
      flex-grow: 1;
      margin-left: 1rem;
      margin-right: 1rem;
    }
`