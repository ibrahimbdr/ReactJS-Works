import React from 'react'
import { useState } from 'react';
import { LoginContext } from '../context/LoginContext';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

export const Login = (props) => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const value = React.useContext(LoginContext);

    const signIn = async(e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        if (e.target[0].value) {
            value.setIsLogged(true)
            console.log(value.isLogged);
            props.history.push('/');
        }
    }

    const handleInput = (e) => {
        if(e.target.name === 'username'){
            setLoginData({...loginData, username: e.target.value});
        }
        if(e.target.name === 'password'){
            setLoginData({...loginData, password: e.target.value});
        }
    }

  return (
    <div className='min-w-full flex mt-36 mb-52 justify-center items-center'>
        <form onSubmit={(e) => {signIn(e)}}>
            <div>
                <h2 className='font-thin text-5xl mb-10'>Login</h2>
                <div className="form-group mb-4">
                    <label htmlFor='username'>Username</label>
                    <input type="text" value={loginData.username} 
                    name="username" id="username" 
                    className="ml-2 form-input px-6 py-1 rounded-full" 
                    onChange={(e)=>{handleInput(e)}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password</label>
                    <input type="password" value={loginData.password} 
                    name="password" id="password" 
                    className="ml-3 form-input px-6 py-1 rounded-full" 
                    onChange={(e)=>{handleInput(e)}}
                    />
                </div>
                <button type="submit" className="py-2 px-5 mt-4 rounded-full bg-indigo-600 text-slate-200 font-bold hover:bg-indigo-400 transition-all cursor-pointer">
                    Login
                </button>
            </div>
        </form>
    </div>
  )
}
