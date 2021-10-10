// import logo from './logo.svg';
// import './App.css';
import FormSales from './components/FormSales';
import Header from './components/Header';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <Menu/>
      <div className="content">        
        <Header/>
        <FormSales/>
      </div>
    </div>
  );
}

export default App;
