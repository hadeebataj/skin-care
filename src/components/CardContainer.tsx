import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import BasicCard from "./Card";
import { products } from "../products";

const SimpleContainer: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{ display: "flex", margin: "28px auto", flexWrap: "wrap" }}
      >
        {products.map((prod, id) => (
          <BasicCard key={id} {...prod} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default SimpleContainer;
