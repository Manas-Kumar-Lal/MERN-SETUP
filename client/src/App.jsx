import { useEffect } from 'react';
import './App.css'
import Sidebar from './components/layouts/sidebar/Sidebar'
import useThemeStore from './stores/themeStore/useThemeStore';
import Counter from './pages/Counter';
import { Toaster } from 'react-hot-toast';

function App() {

  const { theme } = useThemeStore();

  // create css variables dynamically
  useEffect(() => {
    Object.keys(theme).forEach((key) => {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });
  }, [theme]);

  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={true}
      />
      <div className='bg-[var(--signatureBG)]'>
        <Sidebar />
        <Counter />
      </div>
    </>
  )
}

export default App
