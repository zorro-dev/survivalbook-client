import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./component/NavBar";
import AppRouter from "./component/AppRouter";

function App() {

  return (
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
