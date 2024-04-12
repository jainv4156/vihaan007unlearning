import React, { useState } from 'react';

import './User.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Studentpage from './components/Studentpage'

function User() {
    const [userType, setUserType] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUserTypeClick = (type) => {
      setUserType(type);
      console.log(`Selected User Type: ${type}`);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'id') {
          setId(value);
        } else if (name === 'password') {
          setPassword(value);
        }
      };
    const handleSubmit = (event) => {
      event.preventDefault(); 
      if (userType === 'student') {
        console.log('Student login successful:', id, password); 
      } else {
        console.error('Invalid user type');
      }
    };

  return (
    <div className=" wrapper d-flex align-ites-center justify-content-center w-100">
      <div className="login-form row h-100 justify-content-center align-items-center">
        <div className="col-md-5 mx-auto">
          <div className="text-center">
            <h1 className="h1 mb-3 font-weight-normal">LOGIN</h1>
          </div>
          <div className="form-group mb-2">
            
            <button
              className="btn btn-lg btn-primary btn-block text-uppercase"
              type="button"
              onClick={() => handleUserTypeClick('teacher')}
            >
              Teacher
            </button>
            <button
              className="btn btn-lg btn-secondary btn-block text-uppercase  mt-2"
              type="button"
              onClick={() => handleUserTypeClick('student')}
            >
              Student
            </button>
          </div>
          {userType === 'student' && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="h3 id">Student ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  placeholder="Enter your Student ID"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor=" h3 password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default User