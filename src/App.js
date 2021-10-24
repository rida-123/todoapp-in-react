
import './App.css';
import ParticlesBg from 'particles-bg'
import Todo from './todo/todo';

function App() {
  return (
    <div className="App">
   <Todo></Todo>
   <ParticlesBg type="square" bg={true} />
    </div>
  );
}

export default App;
