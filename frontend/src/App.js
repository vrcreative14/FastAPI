import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js'
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter
} from "react-router-dom";
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import Calendar from './components/Calendar';
import CreateForm from './components/Form';
import Venues from './components/Venues';
import Event from './components/Event';
import VideoPlayer from './components/VideoPlayer';
import VenueDetail from './components/VenueDetail';
import Chat from './components/Chat';

const router = createBrowserRouter([
  {
    path:"venues/:contactId",
    element:<VenueDetail/>,

  }
])

function App() {
  const logged_in_status = true
  const getDetail = (id) => {
    debugger
      console.log(`blog ${id} clicked`)
  }
  const blogs = [
    {
      'id':1,
      'title':'The Indian Flora',
      'img':'https://i.ibb.co/HBCJj8F/pexels-rfstudio-3886235.jpg',
      'description':"It's very diverse & have been researched thoroughly",
    },
    {
      'id':2,
      'title':"Deforestation & it's consequences",
      'img':'https://i.ibb.co/HBCJj8F/pexels-rfstudio-3886235.jpg',
      'description':"Deforestation has a very bad impact on climate",
    },
    {
      'id':3,
      'title':"Environment conservation",
      'img':'https://i.ibb.co/HBCJj8F/pexels-rfstudio-3886235.jpg',
      'description':"Ways, through which we can conserve our environment",
    },
    
  ]

  const list = blogs.map(b => 
    <Blogs id={b.id} title={b.title} img={b.img} description={b.description} getdetail={getDetail}/>
  )

  

  return (
    <div className="App">
      {/* <Calendar /> */}
      <Router>
        <div className='test'>
        <nav className='d-flex navbar justify-content-end mb-4'>
          <div className='d-flex p-3'>
            <span className='mx-4 '>
              <Link to="/">Home</Link>
            </span>
            <span className='mx-4'>
              <Link to="/about">About</Link>
            </span>
            <span className='mx-4'>
              <Link to="/users">Users</Link>
            </span>
            <span className='mx-4'>
              <Link to="/venues" className=''>Venues</Link>
            </span>
            <span className='mx-4'>
              <Link to="/events" className=''>Events</Link>
            </span>
            <span className='mx-4'>
              <Link to="/login" className=''>Login/Signup</Link>
            </span>
            {/* <span className='mx-4'>
              <Link to="/video">Video</Link>
            </span> */}
          </div>
        </nav>
        
          <Routes>
                <Route path="/" element={<CreateForm/>}></Route>
                <Route path="/about" element={<Home/>}>Login/Signup</Route>
                
                <Route path="/blogs" element={<Card/>}></Route>
                <Route path="/venues" element={<Venues/>}></Route>
                <Route path="/venue/:venueId" element={<VenueDetail/>}></Route>
                <Route path="/events" element={<Event/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/chat" element={<Chat/>}></Route>
                <Route path="/video" element={<VideoPlayer/>}></Route>
          </Routes>
        
        </div>
      </Router>
      {/* <Navbar isAuthenticated={logged_in_status}
      /> */}
      {/* <Routes>
      <Route exact path={'/home'}>
          <Login />
          <Home/>
      <div className="card-container">
          <Card name="John"></Card>
          <Card name="John"></Card>
          <Card name="John"></Card>
          <Card name="John"></Card>
      </div>
      
      </Route>
      <Route exact path={'/team'}>
          <Home />
      </Route>
      </Routes> */}
      {/* <main>
        <Routes>
            <Router exact path="/login">Login/Signup</Router>
            <Router exact path="/blogs">Blogs</Router>
        </Routes>
      </main> */}
      {/* <div className='container text-center'>
        <Signup />
      </div> */}
      
    </div>
  );
}

export default App;
