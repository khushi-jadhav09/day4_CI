import { useState } from "react";
import "./App.css";

function App() {
const [count, setCount] = useState(0);

return ( <div className="app"> <nav className="navbar"> <div className="logo">DevOps Demo</div>


    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#ci">CI Pipeline</a>
    </div>
  </nav>

  <main>
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="tag">REACT + CI/CD</p>

        <h1>
          My First
          <span> CI Project</span>
        </h1>

        <p className="description">
          A simple React frontend created for learning Continuous
          Integration and DevOps.
        </p>

        <button onClick={() => setCount(count + 1)}>
          Test Application: {count}
        </button>
      </div>
    </section>

    <section className="section" id="about">
      <h2>About This Project</h2>

      <p>
        This application is a demo project that can be connected to a
        CI pipeline using GitHub Actions, Jenkins, GitLab CI, or other
        CI tools.
      </p>

      <div className="cards">
        <div className="card">
          <div className="icon">⚛️</div>
          <h3>React</h3>
          <p>Frontend application built using React.</p>
        </div>

        <div className="card">
          <div className="icon">🔧</div>
          <h3>CI</h3>
          <p>Automatically test and build the application.</p>
        </div>

        <div className="card">
          <div className="icon">🚀</div>
          <h3>Deployment</h3>
          <p>Ready to deploy on AWS EC2 or another server.</p>
        </div>
      </div>
    </section>

    <section className="pipeline" id="ci">
      <h2>CI Pipeline</h2>

      <div className="pipeline-container">
        <div className="step">
          <strong>1</strong>
          <span>Code</span>
          <small>Push to GitHub</small>
        </div>

        <div className="arrow">→</div>

        <div className="step">
          <strong>2</strong>
          <span>Build</span>
          <small>npm run build</small>
        </div>

        <div className="arrow">→</div>

        <div className="step">
          <strong>3</strong>
          <span>Test</span>
          <small>Run tests</small>
        </div>

        <div className="arrow">→</div>

        <div className="step">
          <strong>4</strong>
          <span>Deploy</span>
          <small>Deploy to server</small>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <p>© 2026 DevOps Demo Project</p>
    <p>Built with React for CI/CD learning</p>
  </footer>
</div>


);
}

export default App;
