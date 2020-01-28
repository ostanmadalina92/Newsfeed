import React, { Fragment, useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route,
  Switch,
} from "react-router-dom";
import Header from "./Components/Core/Header/Header";
import Navigation from "./Components/Core/Navigation";
import Content from "./Components/News/Content";
import Footer from './Components/Core/Footer/Footer';
import About from './Components/Core/Header/About';
import Home from './Components/Core/Header/Home';
import Contact from './Components/Core/Header/Contact';


const App = () => {

  useEffect (() => {
    myNews();
  },[]);

  const [news, setNews] = useState([]);

  const myNews = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=0117b26232bd4e88ae110f71ec0f05ed')
    const data = await response.json();
    console.log(data);
    setNews(data.hits);
  }

  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
        {news.map(content => (
          <Content /> 
         ))};
      </>
    </Router>        
  );
};

export default App;
