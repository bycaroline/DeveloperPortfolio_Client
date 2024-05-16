import { Fragment } from 'react'
import LayoutStart from './components/LayoutStart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectCards from './components/ProjectCards';
import ProjectPage from './components/ProjectPage';

// function App() {
//   return (
//     <Fragment>
//       <Routes>
//         <Route index element={<LayoutStart />} />
//         <Route path="/*" element={<LayoutStart />} />
//       </Routes>
//     </Fragment>
//   );
// }

// export default App;



const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LayoutStart />} />
        <Route path="*" element={<LayoutStart />} />
        <Route path="/projects" element={<ProjectCards />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
