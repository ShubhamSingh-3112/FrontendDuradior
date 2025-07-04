import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [phNum, setPhone] = useState('');
  const [Password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://backend-duradior.vercel.app/api/authorize/login", {
        phNum,
        Password,
      });

      if (response.status===200) {
        alert(`Welcome!`);
        setPhone('');
        setPassword('');
      navigate('/');
    } else {
        alert('Incorrect password!');
      }
    } catch (error:any) {
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
      <h2>Login</h2>

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

        <button  type="submit">Login</button>
        <p>New user? Sign up <Link className="link" to="/signup">here</Link></p>
      </form>
    </div>
  );
}

export default Login;
