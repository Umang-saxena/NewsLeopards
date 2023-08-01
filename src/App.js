import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
    return (
      <div >
      <BrowserRouter>                                                                 
        <Navbar/>
        <LoadingBar
        color='black'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          <Routes> {/*  We have given key just because at time of routes we have to give key for page reload */}
            <Route exact  path="/" element={<News setProgress={ setProgress}  pageSize={ pageSize} country="in" apiKey={  apiKey} category="general" key= "general" />} />
            <Route exact  path="/business" element={<News setProgress={ setProgress}  pageSize={ pageSize} country="in" apiKey={  apiKey} category="business" key= "business " />} />
            <Route exact  path="/entertainment" element={<News setProgress={ setProgress}  pageSize={ pageSize} country="in" apiKey={  apiKey} category="entertainment" key= "entertainment " />} />
            <Route exact  path="/health" element={<News setProgress={ setProgress}  pageSize={ pageSize} country="in" apiKey={  apiKey} category="health" key= "health " />} />
            <Route exact  path="/science" element={<News setProgress={ setProgress} pageSize={ pageSize} country="in" apiKey={  apiKey} category="science" key= "science" />} />
            <Route exact  path="/sports" element={<News setProgress={ setProgress} pageSize={ pageSize} country="in" apiKey={  apiKey} category="sports" key= "sports" />} />
            <Route exact  path="/technology" element={<News setProgress={ setProgress} pageSize={ pageSize} country="in" apiKey={  apiKey} category="technology" key= "technology " />} />

            
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  export default App

