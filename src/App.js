import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar';
import Boxes from './components/Boxes';
import PagesButton from './components/Pages';

function App() {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let url = `https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${page}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [page]);
  // console.log(page)
  return (
    <ChakraProvider>
      <div className="App">
      <Navbar />
    </div>
    <Boxes data={data}/>
    <PagesButton setPage={setPage} page={page} />
    </ChakraProvider>
    
  );
}

export default App;
