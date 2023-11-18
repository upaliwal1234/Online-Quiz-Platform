import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from '../../helperToken';
function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  useEffect(() => {
        let response = tokenCheck();
        if(!response)
        {
          navigate('/Login')
        }
        else{
          setEmail(response.email);
        }
  }, [])

  return (
    <div>
      <div>Home</div>
    </div>
  )
}

export default Home