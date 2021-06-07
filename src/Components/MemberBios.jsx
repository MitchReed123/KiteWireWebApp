import React from "react";
import styled, { css } from "styled-components";
import { Employees } from "../Data/EmployeeData";
const MemberBios = () => {
  return (
    <div>
      {Employees.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>{item.title}</p>
          <img src={item.img} alt="" />
        </div>
      ))}
      <h1>test</h1>
    </div>
  );
};

export default MemberBios;
