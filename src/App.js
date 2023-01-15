import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar';
import Boxes from './components/Boxes';

let url = "https://jsonplaceholder.typicode.com/photos?_limit=10";
function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ChakraProvider>
      <div className="App">
      <Navbar />
    </div>
    <Boxes data={data}/>
    </ChakraProvider>
    
  );
}

export default App;
