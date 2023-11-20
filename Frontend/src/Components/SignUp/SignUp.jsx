import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  
  const submitData = async () => {
    try {
      const response = await axios.post('http://localhost:5500/signUp', {
        name,
        email,
        password,
        confirmPassword
      });
  
      if (response && response.data) {
        console.log("Hello",response);
        navigate('/Login');
      }
    } catch (error)
     {
      toast.error('User Already Exists');
      console.error('Error during signup:', error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange=(event)=>{
    setEmail(event.target.value)
  }
  const handlePasswordChange=(event)=>{
    setPassword(event.target.value)
  }
  const handleConfirmPasswordChange=(event)=>{
    setConfirmPassword(event.target.value)
  }
  return (
    <>
    <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div style={{ backgroundColor: '#e70e02' }} class="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-white dark:text-white">Your Name</label>
                        <input type="text" name="Name" id="Name"
                          value={name}
                          onChange={handleNameChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Your Name"
                          required=""
                        />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                        <input type="email" name="email" id="email"
                          value={email}
                          onChange={handleEmailChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="name@company.com" 
                          required=""
                        />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                          value={password}
                          onChange={handlePasswordChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          required=""
                        />
                    </div>
                    <div>
                        <label  
                          class="block mb-2 text-sm font-medium text-white dark:text-white">Confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••"
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          required=""
                        />
                    </div>
                    <button type="submit"
                      onClick={submitData}
                      class="w-full text-white bg-primary-600 hover:bg-gray-50 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                      Create an account
                    </button>
                    <p class="text-sm font-light text-white">
                        Already have an account? <a href="/Login" class="font-medium text-primary-600 hover:underline text-white">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  <ToastContainer /> {/* Add this line to render the ToastContainer */}
    </>
  )
}

export default SignUp