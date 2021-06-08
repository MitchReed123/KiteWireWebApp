import React from "react";
import styled from "styled-components";
import { Details } from "./Details";
import { SideImage } from "./SideImage";
const CardContainer = styled.div`
  width: 550px;
  height: 250px;
  display: flex;
  border-radius: 26px;
  margin-top: 25px;
  position: relative;
  background: linear-gradient(to left top, #19dada, #068181);

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const TestDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Card({ img, title, name }) {
  return (
    <TestDiv>
      <CardContainer>
        <Details title={title} name={name} />
        <SideImage img={img} />
      </CardContainer>
    </TestDiv>
  );
}
