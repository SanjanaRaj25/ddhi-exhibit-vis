/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import {
  Laughlin1, Laughlin2, Laughlin3, Stanley1, Stanley2, Stanley3, Beers1, Beers2, Beers3,
} from './components/Cards';

// function Nav() {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/laughlin">Laughlin</NavLink></li>
//         <li><NavLink to="/2">2</NavLink></li>
//         <li><NavLink to="/3">3</NavLink></li>
//       </ul>
//     </nav>
//   );
// }

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Laughlin1 />} />
          <Route path="/laughlin2" element={<Laughlin2 />} />
          <Route path="/laughlin3" element={<Laughlin3 />} />
          <Route path="/stanley1" element={<Stanley1 />} />
          <Route path="/stanley2" element={<Stanley2 />} />
          <Route path="/stanley3" element={<Stanley3 />} />
          <Route path="/beers1" element={<Beers1 />} />
          <Route path="/beers2" element={<Beers2 />} />
          <Route path="/beers3" element={<Beers3 />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
