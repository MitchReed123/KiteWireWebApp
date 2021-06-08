import React from "react";
import styled from "styled-components";
import KiteArrow from "../images/Kite_arrow.png";
import Max3d from "../images/Max_3d_2.png";
import { motion, AnimatePresence } from "framer-motion";

const Section = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right top,
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
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    color: #fff;
    font-size: clamp(1.5rem, 6vw, 2rem);
    text-transform: uppercase;
  }

  p {
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: #15c5c5;
  }

  @media screen and (max-width: 768px) {
    img {
      /* margin-top: 30rem;
      margin-right: 12rem;
      transform: rotateZ(90deg); */
      display: none;
    }
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 50%;
    object-fit: scale-down;
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }

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
const Creating = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            Creating
          </h1>
          <img src={KiteArrow} />
        </ColumnLeft>
        <ColumnRight>
          <img src={Max3d} alt="" />
          <h1 data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
            We're Create New Worlds
          </h1>
          <p>
            We're helping a gaming company take their game worldwide. From
            creativity to user-data analysis, we are creating a new mobile game
            world that's both entertaining and profitable
          </p>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Creating;
