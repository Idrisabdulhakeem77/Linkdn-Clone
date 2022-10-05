import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
  return (
    <div>
        <Container>
            <Content>
            <Logo>
            <Link to="/feed">
            <img src="/images/home-logo.svg" alt="" />
            </Link>
           </Logo>
           <Search>
              <div> 
                 <input type='text' placeholder='Search' />
              </div>
              <SearchIcon>
              <img src="/images/search-icon.svg" alt="search-icon" />
              </SearchIcon>
           </Search>
            </Content>
        </Container>
    </div>
  )
}


const Container = styled.div`
   width : 100vw ;
   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
   position: fixed;
   top: 0;
   left: 0;
   background-color: #fff;
   padding: 0 2rem;
   z-index: 100;
`

const Content= styled.div`
      display: flex;
      align-items: center;
      margin: 0 auto;
      min-height: 100%;
       max-width: 1128px;
`

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
    
`

const Search = styled.div`
    
`


const SearchIcon = styled.div`
    
`

export default Navbar