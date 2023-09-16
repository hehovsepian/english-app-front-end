import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Onboarding from './components/onboarding/Onboarding'
import PageWrapper from './components/global/PageWrapper';

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                  <Route path="/signin" element={<SignIn/>} />
                  <Route path="/onboarding" element={<Onboarding/>} />
                  <Route path="/home" element={<PageWrapper page="home"/>} />
                  <Route path="/courses" element={<PageWrapper page="courses"/>} />
                  <Route path="/students" element={<PageWrapper page="students"/>} />
                  <Route path="/profile" element={<PageWrapper page="profile"/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App



