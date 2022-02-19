import React, { useEffect, useState } from 'react';
import './App.css';

import { Datum, IContent } from './interfaces/contents.interface';

import axios, { AxiosResponse } from 'axios';
import { Post } from './components/Post/component';


function App() {

  const [feed, setFeed] = useState<IContent[]>([]);
  useEffect(() => {

    const callback = async () => {
      const content = await axios.get('http://localhost:1337/api/contents/')
        .then((data) => data.data.data);

      const oldData = feed;
      const newData = [...oldData];
      
      content.map((e: any) => newData.push(e.attributes));
      setFeed(newData);
    };
    setInterval(() => callback(), 1000);
    
  }, []);

  return (
    <div className="App">
      <h1>Anonymous Blog</h1>
      <hr />
      <div className='feed'>
        {
          feed.map((e: any) => <Post title={e.title} description={e.description}/> )
        }  
      </div>
    </div>
  );
}

export default App;
