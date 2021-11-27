import './css/App.css';
import Canvas from './Canvas';
import Selector from './Selector';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Selector />
          </div>
          <div className="col-9">
            <Canvas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
