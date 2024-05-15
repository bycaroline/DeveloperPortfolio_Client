import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutStart from './components/LayoutStart';




function App() {
  return (
    <Fragment>
      <Routes>
        <Route index element={<LayoutStart />} />
        <Route path="/*" element={<LayoutStart />} />
      </Routes>
    </Fragment>
  );
}

export default App;
