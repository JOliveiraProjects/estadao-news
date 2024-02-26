import React from 'react';
import './home.css';
import { useInitResources } from '../../../hooks/use-init-resources/use-init-resources';
import MenuBarComponent from '../components/menubar';
import NewsList from '../../news/screens/news-screens';

function App() {
  const [loaded] = useInitResources();

  if (!loaded) {
    return null;
  }
  
  return (
    <div className="App">
      <MenuBarComponent/>
      <section className="App-body">
        <NewsList />
      </section>
    </div>
  );
}

export default App;
