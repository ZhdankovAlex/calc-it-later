import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="app">
      <div className="calc-wrapper">
        <div className="row">
          <Button> 1 </Button>
          <Button> + </Button>
          <Button> 2 </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
