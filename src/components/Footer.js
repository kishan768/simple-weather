import React from "react";
import { styled } from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div className="details">
        &copy;
        <span> {new Date().getFullYear()}</span>
        <span>All right reserved</span>
      </div>
      <div className="watermark">
       
        <h5> developed by  kishan kumar</h5>
        </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  height: 7vh;
  width: 100vw;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  position: fixed;
  .watermark{
    h5{
      /* color: black; */
      text-transform: capitalize;
      color: black;
      position: absolute;
      /* top: 2; */
      right: 0;
      bottom: 13px;
    }
    h5:hover{
      color: aquamarine;
    }
  }
`;

export default Footer;
