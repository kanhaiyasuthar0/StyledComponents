
import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      {/* <Button/> */}
     <Button Default >Default</Button>
     <Button Primary >Primary</Button>
     <Button Warning >Warning</Button>
     {/* <Button >Hover</Button> */}
    </div>
  );
}

export default App;
