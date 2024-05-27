import React from 'react'
import ReactDOM from 'react-dom/client'
// main.ts
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/index.css'
import Menu from "./components/menu"
import Hero from './components/hero'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
export function App() {
  return (
    <>
      <Menu />
     <Hero />
    </>
  );
}
