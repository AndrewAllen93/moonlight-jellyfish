import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {

  return (
    <>
    <header>
      <h1>Andrew Allen</h1>
      <Nav />
    </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App