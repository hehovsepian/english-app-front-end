import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import PageWrapper from './components/global/PageWrapper';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
              <Route path="/signin" element={<SignIn/>} />
              <Route path="/" element={<PageWrapper page="home"/>} />
              {/* <Route path="/courses" element={<Courses/>} />
              <Route path="/students" element={<Students/>} /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
