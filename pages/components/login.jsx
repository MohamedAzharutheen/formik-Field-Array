import React, { useState } from 'react'
import Link from 'next/link'
import {Form,Field,ErrorMessage, Formik} from "formik"
import * as Yup from 'yup';
import {AiOutlineEye}from 'react-icons/ai'
import {AiOutlineEyeInvisible}from 'react-icons/ai'

const validationSchema = Yup.object().shape({

    email: Yup.string()
    .email('INVALID EMAIL')
    .required('Enter Your Email!'),

    password: Yup.string()
    .min(8, 'password min 8 character')
    .max(16, 'password max 16 character')
    .required('Enter Your Password!')

})

function Login() {

const [show,setShow]=useState(false)



return(
 
    
    <Formik
    initialValues={{
        email: "",
        password: ""
    
    }}
 validationSchema={validationSchema}
    onSubmit={values=>console.log(values)}
 

>
{({ values, handleSubmit }) => {


  return (




    <div>
      
      <div className='h-screen py-32 bg-yellow-200 '>


<div className='p-10 mx-auto my-10 mt-4 bg-purple-200 shadow-2xl h-80 w-72 rounded-2xl sm:mx-auto sm:w-96 '>
    <div className='flex justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mr-2 rounded-full shadow cursor-wait hover:shadow-2xl ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

        <h1 className='mt-4 text-2xl font-bold text-center text-blue-700 underline underline-offset-8 hover:text-blue-400'>Login Form </h1>
    </div>
    <Form onSubmit={handleSubmit}>
        
        <div className='flex flex-col my-3 text-black' >
            <label className='mb-1 text-base font-medium'>Email</label>
            <Field className='p-1 outline-none sm:w-auto ' name={"email"}  type={"email"} placeholder={"Enter Your email"} />
            <ErrorMessage component={"div"} className="text-red-600" name={"email"}/>
          </div>
       
        <div className='relative flex flex-col text-black ' >

            <label className='mb-1 text-base font-medium'>Password</label>

            <Field className='p-1 outline-none ' name={"password"} type={show ? "text" : "password"} placeholder={"Enter Your Pssword"} />
           {/* <span className="absolute bottom-0 right-0 m-1"><Icon icon={eyeOff}/></span>     */}
           {values.password ? show ? <AiOutlineEye className="absolute bottom-0 right-0 m-1 cursor-pointer" onClick={() => setShow(!show)} /> : <AiOutlineEyeInvisible className="absolute bottom-0 right-0 m-1 cursor-pointer" onClick={() => setShow(!show)} /> : null}
            </div>
           
        <div className='absolute flex justify-end my-3 '>
        <Link href={'/components/reg'} className='mt-3 mr-3 text-blue-900 hover:text-blue-800 hover:to-blue-400'>Create New Account</Link>
            <button type={"submit"} onClick={""} className='px-3 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-400'>Login Now</button>

        </div>
        <div>
            
        </div>
    
    </Form>



</div></div>

    </div>);}}
</Formik>

)  

  }  
export default Login
