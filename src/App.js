import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";
import Welcome from "./components/Welcome";

function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <Welcome /> : <Login />}</div>;
}

export default App;
