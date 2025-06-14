import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import ScrollToTopPage from './utils/ScrollToTopPage';

const App: FC = () => {
  return (
    <>
      <ScrollToTopPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        {/* <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
};

export default App;
