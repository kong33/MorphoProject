
import './App.css';
import Home from './Page/Home/Home';
import { ThemeProvider } from '@emotion/react';

function App() {
  return(
    <ThemeProvider>
    <Home/>
    </ThemeProvider>
  );
}

export default App;
