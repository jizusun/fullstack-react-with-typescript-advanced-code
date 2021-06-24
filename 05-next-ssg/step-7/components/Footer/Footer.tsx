import React, { FunctionComponent } from "react";
import { Center } from "../Center";
import { Container } from "./style";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Center>
        <a href="https://fullstack.io">Fullstack.io</a> {currentYear}
      </Center>
    </Container>
  );
};
