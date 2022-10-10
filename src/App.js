import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ApercuFont from "./fonts/ApercuArabicPro-Regular.woff2";
import EarthImage from "../src/assets/mask_map.png";
import Footer from "./Footer";
import yellowTop from "../src/assets/yellow_item_top.png";
import yellowMid from "../src/assets/yellow_item_mid_map.png";
import redMid from "../src/assets/red_item_mid_map.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setMessage,
  setName,
  setClear,
} from "./redux/slices/dataSlice";
import axios from "axios";
// STYLING //

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
  position: relative;
  width: 100%;
  width: 557px;
  margin-left: 100px;
  margin-right: 30px;
  background-color: #fff;
  box-sizing: border-box;

  .yellow_top_icon {
    position: absolute;
    top: -170px;
    left: -85px;
  }
  @media (max-width: 973px) {
    margin: 0 auto;
    padding: 30px;
  }
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 93px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;
  font-size: 24px;
  padding-left: 20px;

  ::placeholder {
    color: #2d2d2d;
    font-weight: 400;
    font-size: 18px;
    padding-left: 48px;
  }
`;
const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 189px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;
  font-size: 24px;
  padding-left: 20px;
  padding-top: 20px;
  font-family: "Apercu Arabic Pro", sans-serif;

  ::placeholder {
    color: #2d2d2d;
    font-weight: 400;
    font-size: 18px;
    padding: 31px 0px 0px 48px;
  }
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

  :hover {
    background-color: red;
    transition: all 0.5s;
  }
`;
const StyledMap = styled.div`
  position: relative;

  .yellow_mid_icon {
    position: absolute;
    top: 525px;
    left: -35px;
    z-index: 1;
  }
  .red_mid_icon {
    position: absolute;
    top: 555px;
    left: -50px;
  }
  @media (max-width: 973px) {
    display: none;
  }
`;

function App() {
  const dispatch = useDispatch();
  const nameState = useSelector((state) => state.dataFilter.name);
  const emailState = useSelector((state) => state.dataFilter.email);
  const messageState = useSelector((state) => state.dataFilter.message);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameState === "" || emailState === "" || messageState === "") {
      alert("You need to fill all form!");
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          nameState,
          emailState,
          messageState,
        })
        .then(() => {
          alert("Succeded added to database!");
        })
        .catch((err) => console.log(err));
    }
    dispatch(setClear(""));
  };
  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <img className="yellow_top_icon" src={yellowTop} alt="" />
          <h1>Reach Out to Us</h1>
          <label htmlFor="name"></label>
          <StyledInput
            onChange={(e) => dispatch(setName(e.target.value))}
            value={nameState}
            type="text"
            placeholder="Your name*"
            name="name"
          />
          <label htmlFor="email"></label>
          <StyledInput
            onChange={(e) => dispatch(setEmail(e.target.value))}
            value={emailState}
            type="email"
            placeholder="Your e-mail*"
            name="email"
          />
          <label htmlFor="message"></label>
          <StyledTextArea
            onChange={(e) => dispatch(setMessage(e.target.value))}
            value={messageState}
            name="message"
            placeholder="Your Message*"
          />
          <StyledButton onClick={handleSubmit} type="submit">
            Send Message
          </StyledButton>
        </StyledForm>
        <StyledMap>
          <img src={EarthImage} alt="map"></img>
          <img className="yellow_mid_icon" src={yellowMid} alt="" />
          <img className="red_mid_icon" src={redMid} alt="" />
        </StyledMap>
      </StyledFormWrapper>
      <Footer />
    </>
  );
}

export default App;
