import './App.css';
import Header from "./components/Header/Header";
import AppContainer from "./components/AppContainer/AppContainer";
import './components/Header/Header.css';
import './components/AppContainer/AppContainer.css';
function App() {
  return (
    <div className="overflow">
      <Header />
      <AppContainer />
    </div>
  );
}

export default App;
