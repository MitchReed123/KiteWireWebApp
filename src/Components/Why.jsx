import React from "react";
import styled, { css } from "styled-components";

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
  padding: 3rem calc((100vw - 1300px) / 2) 0rem calc((100vw - 1300px) / 2);
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

  p {
    text-transform: uppercase;
    color: #0ff;
    font-size: clamp(2rem, 6vw, 2rem);
  }

  p::selection {
    background: #0ff;
    color: #fff;
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

  h1 {
    margin-bottom: 1rem;
    color: #0ff;
    font-size: clamp(3.5rem, 6vw, 2rem);
    padding-right: 5rem;
  }

  /* h1::selection {
    background: #0ff;
    color: #fff;
  } */
`;

const Why = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <p data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">
            our mission is to elevate people, businesses and ideas.
          </p>
        </ColumnLeft>
        <ColumnRight>
          <h1 data-aos="fade-left" data-aos-duration="700" data-aos-delay="200">
            Why.
          </h1>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Why;
