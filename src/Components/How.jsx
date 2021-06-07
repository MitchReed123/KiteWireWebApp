import React from "react";
import styled, { css } from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  background: #0fdada;
  /* padding: 4rem 0rem; */
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2) 0.5rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-rows: 200px;
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    color: #fff;
    font-size: clamp(3.5rem, 6vw, 2rem);
    padding-right: 5rem;
  }

  h1::selection {
    background: #fff;
    color: #0ff;
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

  p {
    text-transform: uppercase;
    color: #fff;
    font-size: clamp(2rem, 6vw, 2rem);
  }

  p::selection {
    background: #fff;
    color: #0ff;
  }
`;

const How = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            How.
          </h1>
        </ColumnLeft>
        <ColumnRight>
          <p data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
            we utilize rich data analysis, smart technology integration, and the
            best creative talent to achieve success.
          </p>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default How;
