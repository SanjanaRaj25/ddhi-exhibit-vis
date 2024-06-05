/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '@mantine/core/styles.css';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
import {
  Laughlin1, Laughlin2, Laughlin3, Stanley1, Stanley2, Stanley3, Beers1, Beers2, Beers3, Chilcote1, Chilcote2, Chilcote3, Miller1, Miller2
} from './components/Cards';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Laughlin1 />} />
          <Route path="/laughlin2" element={<Laughlin2 />} />
          <Route path="/laughlin3" element={<Laughlin3 />} />

          <Route path="/stanley1" element={<Stanley1 />} />
          <Route path="/stanley2" element={<Stanley2 />} />
          <Route path="/stanley3" element={<Stanley3 />} />

          <Route path="/beers1" element={<Beers1 />} />
          <Route path="/beers2" element={<Beers2 />} />
          <Route path="/beers3" element={<Beers3 />} />

          <Route path="/chilcote1" element={<Chilcote1 />} />
          <Route path="/chilcote2" element={<Chilcote2 />} />
          <Route path="/chilcote3" element={<Chilcote3 />} />

          <Route path="/miller1" element={<Miller1 />} />
          <Route path="/miller2" element={<Miller2 />} />

          {/* ADD NEW ROUTES BELOW THIS */}

          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<MantineProvider theme={theme}><App /></MantineProvider>);
