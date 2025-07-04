import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    useEffect(() => {
        document.body.classList.add('sunrise-bg');
        return () => {
          document.body.classList.remove('sunrise-bg');
        };
      }, []);
  const [phNum, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://backend-duradior.vercel.app/api/user/authorize/login", {
        phNum,
        Password,
      });
      localStorage.setItem("user", JSON.stringify({
        Name: response.data.Name,
        PhoneNum: response.data.PhoneNum
      }));
      console.log(response.data)
      if (response.status === 200) {
        alert(`Welcome!`);
        setPhone('');
        setPassword('');
        navigate('/');
      } else {
        alert('Incorrect password!');
      }
    } catch (error) {
      if (error.response) {
        console.error('Login error:', error.response.data);
        alert(error.response.data || 'Login failed');
      } else {
        alert('Server error. Try again.');
      }
    }
  };

  return (
    <div className='LoginContainer'>
      <h2 style={{textAlign:'center',display:'block'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label> Phone: </label>
          <input 
            type="tel"
            value={phNum}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label>Password: </label>
          <input 
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>New user? Sign up <Link className="link" to="/signup">here</Link></p>
      </form>
    </div>
  );
}

export default Login;
