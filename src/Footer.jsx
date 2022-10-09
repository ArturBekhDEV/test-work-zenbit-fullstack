import React from "react";
import styled from "styled-components";
import redIcon from "../src/assets/red_item_bottom.png";
import greenIcon from "../src/assets/green_item_bottom.png";
import yellowIcon from "../src/assets/yellow_item_bottom_map.png";
import iconLinks from "../src/assets/icons_links.png";

const StyledFooterWrapper = styled.div`
  position: relative;
  background-color: #fafafa;
  border-top: 1px solid #d8d8d8;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon_links {
    padding-left: 320px;
  }
  .red_icon {
    position: absolute;
    bottom: 0px;
  }
  .green_icon {
    position: absolute;
    bottom: 101px;
    right: 127px;
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooterWrapper>
        <div>
          <img className="red_icon" src={redIcon} alt="" />
          <img className="icon_links" src={iconLinks} alt="" />
        </div>
        <div>
          <img className="green_icon" src={greenIcon} alt="" />
          <img className="yellow_icon" src={yellowIcon} alt="" />
        </div>
      </StyledFooterWrapper>
    </>
  );
};

export default Footer;
