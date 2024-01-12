import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Navbar from './component/Navbar';
import { useState } from 'react';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    // Add logic to update your application's theme here
  };

  const navLinks = [
    { url: '#home', text: 'Home' },
    { url: '#about', text: 'About' },
    { url: '#services', text: 'Services' },
    { url: '#contact', text: 'Contact' },
  ];
  return (
    <div >
      {/* <Button onClick={handleClick} color="#e74c3c" textColor="#ffffff">
        Click me!
      </Button> */}

<Navbar bgColor="#3498db" textColor="#ffffff" links={navLinks} onThemeToggle={toggleTheme} />


    </div>
  );
}

export default App;
