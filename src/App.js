import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Mynotes from "./Pages/Mynotes/Mynotes";

function App() {
  return (
    <Router>
      <Header />
      <main  >
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/mynotes' element={<Mynotes />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
