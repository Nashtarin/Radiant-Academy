import Link from "next/link";
import { useRouter } from 'next/router'
import React, { useState } from "react";
import { FaRegEnvelope, FaUnlockAlt, FaFacebook, FaGithub, FaGooglePlus } from "react-icons/fa";
import useAuth from '../../utilities/Hooks/useAuth';

const LoginSection = () => {
    const router=useRouter()
    const { googleSignIn, githubSignIn, facebookSignIn, user, isLoading, authError, loginUser } = useAuth();

    const checkMarkValidation = () => {
        //will do some validation here
    }
    const [logindata, setLoginData] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logindata }
        newLoginData[field] = value
        setLoginData(newLoginData)

    }
    const handleLoginSubmit = e => {
        e.preventDefault()

        console.log(logindata)
        loginUser(logindata.email, logindata.password);
     
        
    {!authError && router.push("/")}
    }

    const something = () => {
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center justify-center w-full flex-1 p-5 md:px-20 text-center sm:p-20">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:w-2/3 md:max-w-4xl sm:flex-col sm:w-full sm:p-5 md:flex-row md:p-0">
                    <div className="w-full md:w-3/5 p-5 sm:w-full">
                        <div className="py-6">
                            <h2 className="text-3xl font-bold text-violet-500 mb-2">Sign In</h2>
                            <div className="border-2 w-10 border-violet-500 inline-block mb-2 bg-violet-500"></div>
                        </div>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="flex flex-col items-center mb-3">
                                <div className="bg-gray-100 w-64 pb-2 flex items-center">
                                    <FaRegEnvelope className="text-gray-400 mr-2" />
                                    <input type="email" name="email" placeholder="Email" onBlur={handleOnBlur} className="bg-gray-100 outline-none text-sm flex-1 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-2">
                                <div className="bg-gray-100 w-64 pb-2 flex items-center">
                                    <FaUnlockAlt className="text-gray-400 mr-2" />
                                    <input type="password" name="password" placeholder="Password" autoComplete="true" onBlur={handleOnBlur} className="bg-gray-100 outline-none text-sm flex-1 p-1" />
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-2">
                                <div className="w-64 flex items-center justify-between">
                                    <label className="flex items-center text-xs">
                                        <input type="checkbox" name="remember" className="mr-1" checked onChange={something}/>
                                        Remember Me
                                    </label>
                                    <p className="text-xs">Forgot Password?</p>
                                </div>
                            </div>
                            <button type="submit" className="border-2 border-violet-500 text-violet-500 rounded-full text-center py-2 inline-block w-2/5 mt-10 sm:mt-20 hover:bg-violet-500 hover:text-white font-semibold">
                                Sign In
                            </button>
                  
                        </form>
                        {/* {/* {user?.email && <p className="text-lime-600 text-2xl">User Signed in successfully!</p>} */}
                        {/* {authError && <p className="text-red-600">{authError}</p>} */}
                        {authError && <p className="text-red-600 text-2xl">Email/password is Wrong!Try again or Sign Up</p>}
                        <p className="mt-10 font-semibold text-sm">New here? <Link passHref href="/register"><span className="text-violet-500 cursor-pointer">Sign up</span></Link></p>
                    </div>
                    <div className="w-full md:w-2/5 bg-violet-500 text-white rounded-bl-2xl md:rounded-tr-2xl rounded-br-2xl md:rounded-bl-none py-36 px-12 sm:w-full">
                        <p className="text-lg font-bold"> Or Sign In With</p>
                        <div className="flex flex-col justify-center items-center">
                            <button onClick={facebookSignIn} className="w-full sm:w-3/5 md:w-4/5 border-2 border-white rounded-full px-8 py-2 mt-2 text-lg text-center flex items-center justify-center hover:bg-slate-100 hover:text-blue-500">
                                <FaFacebook className="text-2xl mr-2" /> Facebook
                            </button>
                            <button onClick={githubSignIn} className="w-full sm:w-3/5 md:w-4/5 border-2 border-white rounded-full px-8 py-2 mt-2 text-lg text-center flex items-center justify-center hover:bg-slate-100 hover:text-black">
                                <FaGithub className="text-2xl mr-2" /> Github
                            </button>
                            <button onClick={googleSignIn} className="w-full sm:w-3/5 md:w-4/5 border-2 border-white rounded-full px-8 py-2 mt-2 text-lg text-center flex items-center justify-center hover:bg-slate-100 hover:text-red-500">
                                <FaGooglePlus className="text-2xl mr-2" /> Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSection;