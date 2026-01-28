import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import styled from "styled-components";

function App() {
  

  return (
    <>
     <Maincontainer>
       <Topcontainer>
        <div className="nav" >
        <img src="/images/logo.svg" alt="" className="logo" />
        <input type="text" placeholder='Search Food....' />
         </div>
         <div className="selection">
          <button>All</button>
          <button>BreakFast</button>
          <button>Lunch</button>
          <button>Dinner</button>
         </div>
       </Topcontainer>
       <BottomContainer>
        
       </BottomContainer>
     </Maincontainer>
    </>
  )
}

export default App
const Maincontainer = styled.div`
  background: black;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Topcontainer =styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #1c1b1b;
height: 130px;
gap: 35px;

.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
}
  input{
    background:  transparent;
    color: white;
    border : red 1px solid;
    padding: 10px;
    border-radius: 5px;
  }
 .selection{
  display :flex;
  gap: 14px;

  button{
    background-color: red;
    color: white;
    border : none;
    padding: 7px;
    border-radius: 2px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }}`
const BottomContainer = styled.div`
  background-image: url("/images/bg.png");
  flex:1;

`;

