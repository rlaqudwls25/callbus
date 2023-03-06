import React from "react";
import styled from "styled-components";

const Container = ({ children }: { children?: React.ReactNode }) => {
  return (
    <SectionContainer>
      <Box>{children}</Box>
    </SectionContainer>
  );
};

export default Container;

const SectionContainer = styled.section`
  position: relative;
`;

const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  padding: 20px;
  transform: translate(-50%, -50%);
  border: 1px solid black;
`;
