import React from "react";
import styled, { css } from "styled-components";
import ImageOne from "../images/Kitewire-Logo.png";
const Section = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right bottom,
    rgb(55, 65, 81),
    rgb(17, 24, 39),
    rgb(0, 0, 0)
  );
  /* padding: 4rem 0rem; */
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2) 0.5rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    color: #fff;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: #15c5c5;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;
const InfoSection = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>WE ARE KITEWIRE CONSULTING</h1>
          <p>
            we use innovation to help companies create, launch, and market
            amazing products and services.
          </p>
        </ColumnLeft>
        <ColumnRight>
          <img src={ImageOne} alt="" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
