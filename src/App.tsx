import { Container } from "@material-ui/core";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { GlobalStyles } from "./_utils/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Container>
      </Container>
    </>
  );
}

export default App;
