import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <Navbar />
    </div>
    </ChakraProvider>
  );
}

export default App;
