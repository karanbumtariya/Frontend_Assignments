import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'
// import Home from './Task5'
import About from './Taskfive'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Navbar from './Task6Navbar'
import Contact from './Task6Contact'
import UsersTable from './Task7UserTable'
import JsonServerCRUD from './Task7jsoncrud'
import Auth from './Task8Auth'
import GoogleLogin from './Task8GoogleLogin'
import CrudFirebase from './Task8CrudFirebase'
import ApiWithLoader from './Task9ApiWithLoader'
import ThemeProvider from "./Task10ThemeContext";
// import Navbar from "./Task10Navbar";
import Home from "./Task10Home";
import AuthProvider from "./Task11AuthContext";
import Navbar from "./Task11Navbar";
import Dashboard from "./Task11Dashboard";
// import Counter from './Task12Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      {/* <Task2 /> */}
      {/* <Task3 /> */}
      {/* <Task4 /> */}
       <BrowserRouter>
       {/* <Navbar /> */}
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
       {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      {/* <UsersTable /> */}
      {/* <JsonServerCRUD /> */}
      {/* <Auth /> */}
      {/* <GoogleLogin /> */}
      {/* <CrudFirebase /> */}
      {/* <ApiWithLoader /> */}
      {/* <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider> */}
    {/* <AuthProvider>
      <Navbar />
      <Dashboard />
    </AuthProvider> */}
    {/* <Counter /> */}
    </BrowserRouter>
    </>
  )
}

export default App
