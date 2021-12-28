import "./styles.css";
import axios from "axios";

export default function App() {
  const onClickUsers = () => {
    axios.get("");
  };
  const onClickUser1 = () => {
    alert("User1");
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のusers</button>
    </div>
  );
}
