import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home'

function App() {
  return (
    <div>
      <Header/>
      <Home></Home>
    </div>
  );
}

export default App;
