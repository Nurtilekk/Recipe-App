import { Container } from "@material-ui/core";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { GlobalStyles } from "./_utils/GlobalStyles";
import { HomePage } from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </>
  );
}

export default App;
