
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import Login from './components/login';
import Signup from './components/signup';
import Signup2 from './components/signup2';
import { Recorder } from './components/recorder';
import { Checker } from './components/checker';
import { Editor } from './components/editor';


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/Login" element={<Login/> }/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signup2' element={<Signup2/>}/>
      <Route path='/Recorder' element={<Recorder/>}/>
      <Route path='/Checker' element={<Checker/>}/>
      <Route path='/Editor' element={<Editor/>}/>
      <Route path="*" element={<h1>path not found</h1> }/>
    </Routes>
  )
}

export default App
