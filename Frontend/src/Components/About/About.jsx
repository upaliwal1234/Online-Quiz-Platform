import React from 'react'
import { tokenCheck } from '../../helperToken';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    let response = tokenCheck();
    if (!response) {
      navigate('/Login')
    }
    else {
      navigate('/about');
    }
  }, [])

  return (
    <>
      <div class="bg-red-600 min-h-screen">
        <div class="container mx-auto py-12">
          <h1 class="text-3xl font-bold text-center mb-6 text-white">About Us</h1>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFF1aXolMjB3ZWJzaXRlfGVufDB8fDB8fHww" />
            </div>

            <div>
              <p class="text-lg leading-relaxed text-white">
                Welcome to our Quiz website! We are passionate about bringing fun and knowledge together through an assortment of quizzes covering various topics.
              </p>
              <p class="mt-4 text-lg leading-relaxed text-white">
                Our team comprises dedicated quiz enthusiasts and experts who curate engaging and informative quizzes for all ages and interests.
              </p>
            </div>
          </div>
          <div class="mt-12">
            <h2 class="text-2xl font-bold mb-4 text-white">Our Mission</h2>
            <p class="text-lg leading-relaxed text-white">
              Our mission is to entertain, educate, and challenge our users through a diverse range of quizzes, fostering learning and enjoyment simultaneously.
            </p>
            <div class="flex items-center justify-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlV2zEs5Ufuph_ndZycpBaStBNOxJDOdG5EA&usqp=CAU" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

