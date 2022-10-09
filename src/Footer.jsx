import React from "react";
import styled from "styled-components";
import redIcon from "../src/assets/red_item_bottom.png";
import greenIcon from "../src/assets/green_item_bottom.png";
import yellowIcon from "../src/assets/yellow_item_bottom_map.png";
import iconLinks from "../src/assets/icons_links.png";

const StyledFooterWrapper = styled.div`
  position: relative;
  bottom: 0px;
  background-color: #fafafa;
  border-top: 1px solid #d8d8d8;
  height: 200px !important;
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;

  .icon_links {
    padding-left: 320px;
    cursor: pointer;
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

  @media (max-width: 655px) {
    justify-content: center;
    align-items: center;
    .green_icon {
      right: 30px;
    }
    .yellow_icon {
      display: none;
    }
    .red_icon {
      display: none;
    }
    .icon_links {
      padding: 0;
    }
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
