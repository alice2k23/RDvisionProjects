import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import PostNewJob from './Components/PostNewJob';
import ApplicantList from './Components/ApplicantList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostedJobs from './Components/PostedJobs';
import HrDashboard from './Components/HrDashboard';
import ApplyJob from './Components/ApplyJob';
import ViewJob from './Components/ViewJob';
import ViewApplication from './Components/ViewApplication';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<HrDashboard />} /> */}
          <Route exact path="/" element={<PostNewJob />} />
          <Route exact path="/aplicantList" element={<ApplicantList />} />
          <Route exact path="/postedJobs" element={<PostedJobs />} />
          <Route exact path="/apply/:id" element={<ApplyJob />} />
          <Route exact path="/Job/:id" element={<ViewJob />} />
          <Route exact path="/application/:id" element={<ViewApplication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
