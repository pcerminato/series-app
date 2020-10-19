import React from "react";
import { Container } from "./styled";

export default ({ onChange }) => {
  return (
    <Container>
      <input type="text" placeholder="Buscar" onChange={onChange} />
    </Container>
  );
};
