import './App.css';
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <>
      <NavTabs />
      <header>
        <h1>Andrew Allen</h1>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
