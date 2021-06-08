import React from "react";
import styled from "styled-components";

const DetailsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
`;

const Header = styled.h1`
  margin: 0px;
  color: #fff;
  font-weight: 700;
  font-size: 38px;
`;

const SubHeader = styled.h3`
  margin: 10px 0px;
  color: #000;
  font-weight: 700;
  font-size: 20px;
`;

const Text = styled.p`
  margin: 0px;
  color: #000;
  font-weight: 500;
  font-size: 15px;
`;

export function Details({ title, name }) {
  return (
    <>
      <DetailsContainer>
        <InnerContainer>
          <Header>{name}</Header>
          <SubHeader>{title}</SubHeader>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            reprehenderit!
          </Text>
        </InnerContainer>
      </DetailsContainer>
    </>
  );
}
