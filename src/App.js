import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ApercuFont from "./fonts/ApercuArabicPro-Regular.woff2";
import EarthImage from "../src/assets/mask_map.png";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Apercu Arabic Pro';
    src: url(${ApercuFont}) format ('woff2');
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }



body {
  font-family: 'Apercu Arabic Pro', sans-serif;
  font-weight: 400;
  background: #ffff;
  color: #3E3E3E;
  height: 100%;
}
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: relative;
`;
const StyledForm = styled.form`
  width: 100%;
  width: 557px;
  margin-left: 100px;
  margin-right: 30px;
  background-color: #fff;
  box-sizing: border-box;
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 93px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;
`;
const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 189px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;
`;
const StyledButton = styled.button`
  display: block;
  width: 218px;
  background-color: #fad34f;
  border: none;
  border-radius: 500px;
  height: 73px;
  color: white;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;
`;
const StyledMap = styled.div``;
const StyledError = styled.div`
  color: red;
  font-weight: 700;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h1>Reach Out to Us</h1>
          <label htmlFor="name"></label>
          <StyledInput type="text" name="name" />
          <label htmlFor="email"></label>
          <StyledInput type="email" name="email" />
          <label htmlFor="message"></label>
          <StyledTextArea name="message" />
          <StyledError>
            <p>Something going wrong, try again.</p>
          </StyledError>
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
        <StyledMap>
          <img src={EarthImage} alt="map"></img>
        </StyledMap>
      </StyledFormWrapper>
      <Footer />
    </>
  );
}

export default App;
