import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './MainPage';
import Practice from './Practice';

function App() {


  return (
    <div className="App">
      <Router basename = "/">
      <div className='App'>
        <header className='App-Content'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/practice" element={<Practice/>} />
          </Routes>
        </header>
      </div>
    </Router>
    </div>
  )
}

export default App
