import * as React from 'react'
import { Box, Center, ChakraProvider, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Navbar from './components/Navbar';
import Boxes from './components/Boxes';
import PagesButton from './components/Pages';

function App() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let [page, setPage] = useState(1);
  let url = `https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${page}`;
  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => {setLoading(false)
        setData(res.data) 
        })
      .catch((err) => {
        setError(true)
      setLoading(false)});
  }, [page]);

  return loading?<Box><Center><CircularProgress isIndeterminate color='green.300' /></Center> </Box>: error?<h1>An Error Occured! Please try again!</h1>:(
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
