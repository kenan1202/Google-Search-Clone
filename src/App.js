import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AllPage from './pages/AllPage';
import ImagesPage from './pages/ImagesPage';
import NewsPage from './pages/NewsPage';
// import VideosPage from './pages/VideosPage';
import { useState } from 'react';



function App() {
  const [darkTheme, setDarkTheme] = useState(false);


  return (
    <Router>
      <div className = {darkTheme ? 'dark': ''}>
        <div className = "relative w-full min-h-screen bg-gray-200 dark:bg-gray-900">
          <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme}></Navbar>
          <Route path = "/search" exact component = {AllPage}></Route>
          <Route path = "/images" component = {ImagesPage}></Route>
          <Route path = "/news" component = {NewsPage}></Route>
          {/* <Route path = "/videos" component = {VideosPage}></Route> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
