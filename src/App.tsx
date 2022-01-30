import "./App.css";
import SearchNpm from "./projects/searchnpm";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <SearchNpm />
        </header>
      </div>
    </Provider>
  );
}

export default App;
