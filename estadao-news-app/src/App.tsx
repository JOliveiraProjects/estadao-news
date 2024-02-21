import React from 'react';
import logo from './assets/Controls - Left.png';
import './App.css';
import NewsList from './features/news/screens/news-screens';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="App-body">
        <NewsList />
      </section>
      <footer>
        <p>@Estadao</p>
      </footer>
    </div>
  );
}

export default App;
