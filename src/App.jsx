import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Heroes from './heroes';
import About from  './about';
import Experience from './experience';
import Services from './services';
import Process from './process';
import Procedure from './procedure';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

import Blog from './blog';
import TeamSection from './team';
function App() {
  

  return (
   <Router>
      <Header/>
      <Routes>
          <Route path='/' element={
             <>
             <Header/> 
             <Heroes/>
             <About/>
             <Experience/>
             <Services/>
             <Process/>
             <Procedure/>
             <Projects/>
             <Contact/>
             <Footer/>
            </>
          }
          ></Route>
          {/*blog page */}
          <Route path='/blog.jsx' element={<Blog/>}/>

          {/*our team */}
          <Route path='/team.jsx' element={<TeamSection/>}/>
      </Routes>
   </Router>
  )
}

export default App
