import { Container } from "@material-ui/core";
import styled from "styled-components";
import { Button } from "../components/Button";
import {
  BTN_LG_FONT_SIZE,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_LIGHT,
  PRIMARY_BTN_COLOR,
} from "../constants";

export const HomePage: React.FC = () => {
  return (
    <SSection>
      <Container>
        <STitle>Find your best recipe</STitle>
        <Button
          width="240px"
          color="#fff"
          size={BTN_LG_FONT_SIZE}
          bgColor={PRIMARY_BTN_COLOR}
        >
          Find
        </Button>
      </Container>
    </SSection>
  );
};

const SSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 20% 0;
  text-align: center;
  background: no-repeat center/cover
    url("https://firebasestorage.googleapis.com/v0/b/recipe-app-7442b.appspot.com/o/placeholder.png?alt=media&token=26a6df8a-2665-4243-b174-8ee2d6c28cbf");
`;

const STitle = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  color: #fff;
  font-size: 48px;
  font-weight: ${FONT_WEIGHT_LIGHT};
`;
