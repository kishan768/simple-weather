import React, { useState } from "react";
import { styled } from "styled-components";
import logo from "../assets/logo.svg";

const Navbar = ({setSearchTerm}) => {
  const [value, setValue] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log('click')
    setSearchTerm(value);
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="simple-weather" className="logo" />
          <span className="title">simple-weather</span>

          <form className="nav-form" onSubmit={handleSubmit}>
            <input type="search" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="city,state"/>
            <button type="submit" disabled={value<1} >Search</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  height: 15vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    height: 60px;
    width: 70px;
    background-color: aquamarine;
    border-radius: 5rem;
    color: white;
    padding: 0.4rem;
    /* margin-left: 0.1rem; */
  }
  .title {
    letter-spacing: 0.1rem;
      font-weight: 600;
      font-size: 0.9rem;
  }
.nav-form{
    display: block;
   
}
  @media (min-width: 992px) {
    .title {
      letter-spacing: 0.7rem;
      font-weight: 900;
      font-size: 2rem;
    }
    .nav-form{
        display: block;
        & input{
          padding: 0.5rem;
        }
        button{
          padding: 0.5rem;
        }
    }
  }
`;
export default Navbar;
