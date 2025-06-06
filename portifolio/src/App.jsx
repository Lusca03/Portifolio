import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projetos from './components/Projetos';
import Sobre from './pages/Sobre';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projetos />
          </>
        } />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}

export default App;