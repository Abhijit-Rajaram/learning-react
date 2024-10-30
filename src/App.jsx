import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import Skills from './components/skills';
import Experience from './components/experience';
import Layout from './components/layout';
import Education from './components/education';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="experience" element={<Experience />}></Route>
            <Route path="skills" element={<Skills />}></Route>
            <Route path="education" element={<Education />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
