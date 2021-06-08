import React from "react";
import { Employees } from "../Data/EmployeeData";
import styled from "styled-components";
import { Card } from "../Components/Card";
import VerticalCard from "../Components/VerticalCard";

// 0-600px:    PHONE
// 600-900px:  Tablet portrait
// 900-1200px: Tablet landscape
// [1200 - 1800] is where our normal styles apply
// 1800px +:   Big Desktop

const Section = styled.section`
  height: 100%;
  /* max-height: 1100px; */
  position: relative;
  overflow: auto;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);

  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5rem;
  margin-bottom: 3rem;
  /* grid-template-rows: 800px; */

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    justify-content: center;
  }

  @media screen and (min-width: 600px) and (max-width: 900px) {
    /* border: 4px solid orangered; */
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    justify-content: center;
    align-items: flex-start;
  }

  @media screen and (min-width: 900px) and (max-width: 1200px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    justify-content: center;
  }

  @media screen and (min-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    gap: 3rem;
    /* padding: 5px; */
  }
`;

const TeamMembers = () => {
  return (
    <Section>
      <Container>
        {/* <CardContainer> */}
        {Employees.map((item, index) => {
          return <Card img={item.img} title={item.title} name={item.name} />;
        })}
        {Employees.map((item, index) => {
          return (
            <VerticalCard img={item.img} title={item.title} name={item.name} />
          );
        })}
        {/* </CardContainer> */}
        {/* {displayTest()} */}
      </Container>
    </Section>
  );
};

export default TeamMembers;
