import './App.css';
import Houses from './components/Houses/Houses';
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

  function App() {
   return (
   <div className="App">
    <NavBar/>
   <Houses />
   </div>
  );
}

export default App;