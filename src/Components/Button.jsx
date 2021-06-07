import styled from "styled-components";
import { Link } from "react-router-dom";
//header font size: 125px;
//default font size: 16px;
//secondary font size atleast 2 sizes smaller(12=16px);
//tertiary/caption/label/wildcard font size: up to me i guess;

const Colors = {
  mainColor: "#0ff",
  secondaryColor: "#fff",
  tertiaryColor: "#D9B08C",
  fourthColor: "#FFCB9A",
  fifthColor: "#D1E8E2",
};

const FontSizes = {
  large: "20px",
  medium: "16px",
  small: "14px",
  default: "16px",
};

const PrimaryTheme = {
  color: `${(props) => Colors.mainColor}`,
  radius: "5px",
  padding: "14px 24px",
  fontsize: "14px",
};

export const Button = styled(Link)`
  white-space: nowrap;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  outline: none;
  border: 2px solid
    ${(props) =>
      props.primary
        ? Colors.mainColor
        : props.secondary
        ? Colors.secondaryColor
        : // : props.tertiary
          // ? Colors.tertiaryColor
          "none"};
  /* min-width: 100px; */
  width: ${(props) =>
    props.large ? "200px" : props.med ? "175px" : props.sm ? "150px" : "100px"};
  max-width: 250px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) =>
    props.large
      ? "10px 50px"
      : props.med
      ? "10px 45px"
      : props.sm
      ? "10px 30px"
      : PrimaryTheme.padding};
  color: ${(props) =>
    props.primary
      ? Colors.mainColor
      : props.secondary
      ? Colors.secondaryColor
      : //   : props.tertiary
        //   ? Colors.tertiaryColor
        PrimaryTheme.color};

  font-size: ${(props) =>
    props.large
      ? FontSizes.large
      : props.med
      ? FontSizes.medium
      : props.sm
      ? FontSizes.small
      : FontSizes.default};
  border-radius: ${(props) => (props.round ? PrimaryTheme.radius : 0)};
`;
// {this.props.conditionA ? "Condition A" : this.props.conditionB ? "Condition B" : "Neither"}
export const ButtonPrimary = styled(Link)`
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.PrimaryTheme.color};
  border: 2px solid ${(props) => props.PrimaryTheme.color};
  padding: ${(props) => props.PrimaryTheme.padding};
  border-radius: ${(props) => props.PrimaryTheme.radius};
`;
