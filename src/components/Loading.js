import React from "react";
import { styled } from "styled-components";
import ErrorPage from "../pages/ErrorPage";
import { ColorRing } from "react-loader-spinner";

const Loading = ({ error }) => {
  //   console.log(error);
  return (
    <Wrapper>
      {error ? (
        <ErrorPage />
      ) : (
        <div className="card">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: start;
  padding: 10rem;
  justify-content: center;
  color: black;
`;

export default Loading;
