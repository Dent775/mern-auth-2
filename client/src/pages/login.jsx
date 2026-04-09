import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { data, useNavigate } from 'react-router-dom';
import { Appcontent } from '../context/appContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [state,setState]=useState("Signup");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    
    const {backendUrl,setIsLoggedin,getUserData}=useContext(Appcontent);
    const navigate=useNavigate();

    const onSubmitHandler=async (e)=>{
        try {
            
            e.preventDefault();
            axios.defaults.withCredentials=true;

            if(state==="Signup"){
                const {data}=await axios.post(backendUrl+"/api/auth/register",{name,email,password})
                if(data.success)
                {
                    setIsLoggedin(true);
                    getUserData();
                    navigate("/");
                }
                else
                {
                    toast.error(data.message);
                }
            }
            else{
                const {data}=await axios.post(backendUrl+"/api/auth/login",{name,email,password})
                if(data.success)
                {
                    setIsLoggedin(true);
                    getUserData();
                    navigate("/");
                }
                else
                {
                    toast.error(data.message);
                }
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
      <img src={assets.logo} onClick={()=>{navigate("/")}} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'/>
      
      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
        
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>{state==="Signup"?"Create Account":"Login"}</h2>
        
        <p className='text-center mb-6 text-sm'>{state==="Signup"?"Create your account":"Login to your account!"}</p>

        <form onSubmit={onSubmitHandler}>

            {state==="Signup" && (
                <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
                <img src={assets.person_icon} alt=""/>
                <input type="text" 
                placeholder='Full Name' 
                required className='bg-transparent outline-none'
                onChange={e=>setName(e.target.value)}
                value={name}/>
            </div>)}
            

             <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
                <img src={assets.mail_icon} alt=""/>
                <input type="email" 
                placeholder='Email id' 
                required className='bg-transparent outline-none'
                onChange={e=>setEmail(e.target.value)}
                value={email}/>
            </div>

             <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
                <img src={assets.lock_icon} alt=""/>
                <input type="password" 
                placeholder='Password' 
                required className='bg-transparent outline-none'
                onChange={e=>setPassword(e.target.value)}
                value={password}/>
            </div>

            <p className='mb-4 text-indigo-500 cursor-pointer' onClick={()=>{navigate("/reset-password")}}>Forgot Password</p>

            <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium cursor-pointer'>{state}</button>
            
            {state==="Signup"?
            ( <p className='text-gray-400 text-center text-xs mt-4'>Already have an account? {" "}<span onClick={()=>{setState("Login")}} className='text-blue-400 underline cursor-pointer'>Login here</span></p>)
            :
            (  <p className='text-gray-400 text-center text-xs mt-4'>Don't have an account? {" "}<span onClick={()=>{setState("Signup")}} className='text-blue-400 underline cursor-pointer'>Signup here</span></p>
            )}
           

           
        </form>
      </div>
    </div>
  )
}

export default Login
