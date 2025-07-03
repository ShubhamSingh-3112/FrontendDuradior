import React, { useState } from 'react'
import axios from 'axios'
import './Signup.css'
function Signup(){
    const[Name,setName]=useState('')
     const[PhoneNum,setPhone]=useState('')
      const[Password,setPassword]=useState('')
      const[confirm,setConfirm]=useState('')
       const[error,setError]=useState('')

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    if (Password !== confirm) {
      setError('Passwords do not match');
      return;
    }
      try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/authorize/register`, {
      Name,
      PhoneNum,
      Password,
    }); 
        if(response.status===201){
      setError('');
      // ✅ You can send the data to backend here (e.g., axios.post)
      alert(`you're signed up successfully!`);
      // clear form
      setName('');
      setPhone('');
      setPassword('');
      setConfirm('');}}
      catch(err: any){
console.error('Signup failed:', err);
    setError('Signup failed. Please try again.');
      }
    
  };
  return (
    <div className="SignupContainer">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>Name: </label>
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className='input'>
          <label>Phone Number: </label>
          <input
            type="tel"
            value={PhoneNum}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className='input'>
          <label>Create Password: </label>
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className='input'>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className='signup-btn'  style={{ backgroundColor: 'rgb(221, 218, 207)', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px' }} type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Signup