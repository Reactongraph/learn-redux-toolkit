import AddTodo from "./components/AddTodo";
import GetData from "./components/GetData";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <AddTodo />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Todos />
        <GetData />
      </div>
    </>
  );
}

export default App;
