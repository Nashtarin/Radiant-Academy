import Link from 'next/link';
import React from 'react';
import { FaRegEnvelope, FaUnlockAlt, FaFacebook, FaGithub, FaGooglePlus } from 'react-icons/fa';
import useFirebase from '../components/Hooks/useFirebase';

const Login = () => {
    const {user,logout, isLoading,authError, googleSignin, loginUser,githubSignin,
        facebookSignin}=useFirebase()
    
    return (
        <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100'>
            <div className=' flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                    <div className='w-3/5 p-5'>
                        <div className='py-6'>
                            <h2 className='text-3xl font-bold text-violet-500 mb-2'>Sign In</h2>
                            <div className='border-2 w-10 border-violet-500 inline-block mb-2 bg-violet-500'></div>
                        </div>
                        <div className='flex flex-col items-center mb-3'>
                            <div className='bg-gray-100 w-64 p-2 flex items-center'>
                                <FaRegEnvelope className='text-gray-400 mr-2' /><input type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 ' />
                            </div>
                        </div>
                        <div className='flex flex-col items-center mt-2'>
                            <div className='bg-gray-100 w-64 p-2 flex items-center'>
                                <FaUnlockAlt className='text-gray-400 mr-2' /><input type="password" name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 ' />
                            </div>
                        </div>
                        <div className='flex flex-col items-center mt-2'>
                            <div className=' w-64 flex items-center justify-between'>
                                <label className='flex items-center text-xs'>
                                    <input type="checkbox" name="remember" className='mr-1' />
                                    Remember Me
                                </label>
                                <a href="#" className='text-xs'>Forgot Password?</a>
                            </div>
                        </div>
                        <a href="#" className='border-2 border-violet-500 text-violet-500 rounded-full px-12 py-2 inline-block w-2/5 mt-4 hover:bg-violet-500 hover:text-white font-semibold mb-14'>Sign In</a>
                        <p className='mt-4 font-semibold text-sm'>New here? <Link href='/register'><span className='text-violet-500 cursor-pointer'>Register</span></Link></p>
                    </div>
                    <div className='w-2/5 bg-violet-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
                        <p className='text-xl font-bold '> Or Sign In With</p>
                        <div className='w-4/5 border-2 border-white rounded-full px-12 py-2 inline-block  mt-2 hover:bg-white hover:text-violet-500 font-semibold'>
                            <a href="#" className='flex items-center justify-center'>
                                <FaFacebook className='text-2xl mr-2'><button onClick={facebookSignin}></button></FaFacebook>
                                Facebook
                            </a>
                        </div>
                        <div className='w-4/5 border-2 border-white rounded-full px-12 py-2 inline-block  mt-2 hover:bg-white hover:text-violet-500 font-semibold'>
                            <a href="#" className='flex items-center  justify-center'>
                                <FaGithub className='text-2xl mr-2'><button onClick={githubSignin}></button></FaGithub>
                                Github
                            </a>
                        </div>
                        <div className='w-4/5 border-2 border-white rounded-full px-12 py-2 inline-block  mt-2 hover:bg-white hover:text-violet-500 font-semibold'>
                            <a href="#" className='flex items-center  justify-center'>
                                <FaGooglePlus className='text-2xl mr-2'><button onClick={googleSignin}></button></FaGooglePlus>
                                Google
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;