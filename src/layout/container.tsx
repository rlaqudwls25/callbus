import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Container = ({ children }: { children?: React.ReactNode }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default Container;

const SectionContainer = styled.section`
  position: relative;
  width: 380px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
`;
