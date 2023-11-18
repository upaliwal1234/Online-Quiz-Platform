import React from 'react'
import { tokenCheck } from '../../helperToken';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  useEffect(() => {
        let response = tokenCheck();
        if(!response)
        {
          navigate('/Login')
        }
        else
        {
          navigate('/about');
        }
  }, [])

  return (
    <div>About</div>
  )
}

export default About

