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
     </Container>
  )
}

export default Home



const Container = styled.div`
   padding: 0 5px
`


const Nav =  styled.nav`
   max-width : 1128px ;
   display : flex ;
   justify-content : space-between;
   align-items : center ;
   margin-top : 1rem ;
   positon: relative ;
   padding :  12px 0 16px ;
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
    width: 120px ;
    height : 20px ;

    @mdeia (max-width : 768px) {
       padding : 0 5px;
    }
 `
