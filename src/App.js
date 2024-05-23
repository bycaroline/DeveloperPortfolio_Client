import { Fragment } from 'react'
import LayoutStart from './pages/LayoutStart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectCards from './components/ProjectCards';
import ProjectPage from './pages/ProjectPage';
import AdminPage from './pages/AdminPage';



const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LayoutStart />} />
        <Route path="*" element={<LayoutStart />} />
        <Route path="/projects" element={<ProjectCards />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
