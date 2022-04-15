import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Login(props) {
  const [email, setEmail] = useState('abhi@gm');
  const [password, setPassword] = useState('singh');
  const [login, setlogin] = useState(null);
  const [signup, setsignup] = useState(null);
  const [message, setMessage] = useState('');
  useEffect(() => {
    postLogin(login).then(res => setMessage(res));
  }, [login]);
  useEffect(() => {
    postSignup(signup).then(res => setMessage(res));
  }, [signup]);

  const postLogin = async login => {
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(login),
    });
    const message = await res.json();
    localStorage.setItem('token', JSON.stringify(message.accessToken));
    return message;
  };
  const getUsers = async () => {
    const getUsers = await fetch('/users', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    const res = await getUsers.json();
    console.log(res);
  };
  const postSignup = async signup => {
    const res = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(signup),
    });
    const message = await res.json();
    return message;
  };
  const handelChange = change => {
    if (change.target.type === 'email') {
      setEmail(change.target.value);
    }
    if (change.target.type === 'password') {
      setPassword(change.target.value);
    }
  };
  const handelLoginSubmit = async e => {
    e.preventDefault();
    setlogin({ email: email, password: password });
  };
  const handelSignupSubmit = async e => {
    e.preventDefault();
    setsignup({ email: email, password: password });
  };
  return (
    <div ref={props.propref}>
      <div className='login'>
        <h1> This is login</h1>
        {message ? message.message : <p>You are not logged in</p>}
        <form action='' onSubmit={e => handelLoginSubmit(e)}>
          <label htmlFor='userName'>Username: </label>
          <input type='email' value={email} onChange={e => handelChange(e)} />
          <br />
          <br />
          <br />
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            value={password}
            onChange={e => handelChange(e)}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
      <button onClick={getUsers}> Authenticate </button>
      {message && !message.existingUser ? (
        <div className='signup'>
          <h1> This is signup </h1>
          {message ? message.message : <p>Please enter the details</p>}
          <form action='' onSubmit={e => handelSignupSubmit(e)}>
            <label htmlFor='userName'>Username: </label>
            <input type='email' value={email} onChange={e => handelChange(e)} />
            <br />
            <br />
            <br />
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              value={password}
              onChange={e => handelChange(e)}
            />
            <input type='submit' value='Submit' />
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Login;
