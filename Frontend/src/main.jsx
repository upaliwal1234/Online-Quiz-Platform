import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Login/Login.jsx'
import CreateQuiz from './Components/CreateQuiz/CreateQuiz.jsx'
import JoinQuiz from './Components/JoinQuiz/JoinQuiz.jsx'
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import QuestionDisplay from './Components/QuestionDisplay/QuestionDisplay.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='CreateQuiz' element={<CreateQuiz/>}/>
      <Route path='JoinQuiz' element={<JoinQuiz/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='SignUp' element={<SignUp/>}/>
      <Route path='QuestionDisplay' element={<QuestionDisplay/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
