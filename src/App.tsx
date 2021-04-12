import { Navbar } from "./components/Navbar";
import "./App.css";
import { GlobalStyles } from "./_utils/GlobalStyles";
import { HomePage } from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { Modal } from "./components/Modal";
import { useModalManager } from "./_utils/useModalManager";

function App() {
  const [isOpen, setModal] = useModalManager();
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Modal setModal={setModal} isOpen={isOpen} title="Тестовая модалка">
        Модалка открыта
      </Modal>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage setModal={setModal} />}
        ></Route>
      </Switch>
    </>
  );
}

export default App;
