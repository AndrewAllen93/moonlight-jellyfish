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
      {/* Footer */}
      <footer>
        <div className="social-links">
          <a href="https://github.com/AndrewAllen93" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="GitHub" />
          </a>
          <a href="https://twitter.com/allenkandrew1" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedinusername" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
