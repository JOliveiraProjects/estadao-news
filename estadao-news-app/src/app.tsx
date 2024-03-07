import React, { useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { useInitResources } from 'hooks/use-init-resources/use-init-resources';
import Theme, { GlobalStyle }  from 'Theme/default-theme';
import LightTheme from 'Theme/light-theme';
import { store } from './store/store';
import HomeScreen from './features/home/screens/home-screen';

function App() {
    const [loaded] = useInitResources();
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    if (!loaded) {
      return null;
    }
  
    const handleChangeTheme = () => {
      setIsDarkTheme(!isDarkTheme);
    };
  
    return (
      <React.StrictMode>
        <ReduxProvider store={store}>
            <StyledComponentsThemeProvider theme={isDarkTheme ? Theme : LightTheme}>
              <GlobalStyle />
              <HomeScreen handleChangeTheme={handleChangeTheme}/>
            </StyledComponentsThemeProvider>
        </ReduxProvider>
      </React.StrictMode>
    );
};

export default App;