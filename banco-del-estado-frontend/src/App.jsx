// import logo from './logo.svg';
// import './App.css';
import UserProvider from "./components/context/UserContex";
import Routes from "./components/Routes";

function App() {
  return (
    <UserProvider>
      <Routes></Routes>
    </UserProvider>
  );
}

export default App;
