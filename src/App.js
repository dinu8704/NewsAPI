import Navbar from './components/Navbar';
import NewsHome from './components/NewsHome';
import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  return (
    <>
     <Router>
      <Navbar />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <Switch>
          <Route exact path="/"><NewsHome setProgress={setProgress} apiKey={apiKey} key="top-headlines" pageSize={6} country={'in'} category={'general'} /></Route>
          <Route exact path="/business"><NewsHome setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country={'in'} category={'business'} /></Route>
          <Route exact path="/entertainment"><NewsHome setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country={'in'} category={'entertainment'} /></Route>
          <Route exact path="/general"><NewsHome setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country={'in'} category={'general'} /></Route>
          <Route exact path="/health"><NewsHome setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country={'in'} category={'health'} /></Route>
          <Route exact path="/science"><NewsHome setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country={'in'} category={'science'} /></Route>
          <Route exact path="/sports"><NewsHome setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country={'in'} category={'sports'} /></Route>
          <Route exact path="/technology"><NewsHome setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country={'in'} category={'technology'} /></Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;