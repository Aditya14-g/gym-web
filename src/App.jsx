import './App.css';
import Home from './components/home/home';
import Program from './components/programs/programs';
import Information from './components/information/information';
import Plans from './components/plans/plans';
function App() {
  return (
    <div className="App">
          <Home/>
          <Program/>
          <Information/>
          <Plans/>
    </div>
  );
}

export default App;
