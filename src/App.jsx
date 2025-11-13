import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './MainPage';
function App() {


  return (
    <div className="App">
      <Router basename = "/">
      <div className='App'>
        <header className='App-Content'>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </header>
      </div>
    </Router>
    </div>
  )
}

export default App
