import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Login/Login.jsx'
import CreateQuiz from './Components/CreateQuiz/CreateQuiz.jsx'
import JoinQuiz from './Components/JoinQuiz/JoinQuiz.jsx'
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import AddQuestion from './Components/CreateQuiz/AddQuestion.jsx'
import QuizDisplay from './Components/QuizDisplay/QuizDisplay.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='CreateQuiz' element={<CreateQuiz />} />
      <Route path='/CreateQuiz/:createdQuizCode/addQuestion' element={<AddQuestion />} />
      <Route path='JoinQuiz' element={<JoinQuiz />} />
      <Route path='Login' element={<Login />} />
      <Route path='SignUp' element={<SignUp />} />
      <Route path='QuizDisplay' element={<QuizDisplay />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
