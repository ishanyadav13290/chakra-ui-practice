import * as React from 'react'
import { Center, ChakraProvider } from '@chakra-ui/react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar';
import Boxes from './components/Boxes';
import PagesButton from './components/Pages';

function App() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false)
  let [page, setPage] = useState(1);
  let url = `https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${page}`;
  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => {setData(res.data) 
        setLoading(false)})
      .catch((err) => console.log(err));
  }, [page]);
  // console.log(page)
  return loading?(<Center h="100%"><h1>Loading...</h1></Center>): (
    <ChakraProvider>
      <div className="App">
      <Navbar />
      <Boxes data={data}/>
    <PagesButton setPage={setPage} page={page} />
    </div>
    </ChakraProvider>
    
  );
}

export default App;
