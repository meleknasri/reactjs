import Home from "./Home"

import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Home/>
        <Home/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
