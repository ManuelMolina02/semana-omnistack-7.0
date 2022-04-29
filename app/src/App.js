import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'

import RoutesApp from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
