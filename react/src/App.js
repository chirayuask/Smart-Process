import PD from "./components/Processes/index";
import "./App.css";
import DataLists from './components/Data-Lists/Index';

function App() {
  return (
    <div>
      <div className="flex justify-center items-center mt-20 mb-10">
        How do you want to design your process
      </div>
      <div>
        <PD />
      </div>
      <div>
        <DataLists />
      </div>
    </div>
  );
}

export default App;
