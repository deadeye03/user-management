import React from 'react'
import './createUser.css'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
function UpdateUser() {
    const path=useLocation().pathname
    const userId=path.split('/').pop();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        fetch(`https://jsonplaceholder.typicode.com/users${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data
            }),
        }).then(response=>response.json()).then(data=>{
            toast('You data successfully Updated')
        }).catch(err=>{
            toast('Something went wrong')
        })
    }
    return (
        <div className='formContainer'>
            <ToastContainer/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>UPDATE YOUR YOUR DETAILS</h1>
            <label htmlFor="">Enter Name:</label>
            <input type="text" {...register('name',{required:true})} placeholder='Enter your name'/>
            {errors.name && <span style={{color:'red'}}>This field is required</span>}
            <label htmlFor="">Enter Email:</label>
            <input type="email" {...register('email',{required:true})} placeholder='Enter your email'/>
            {errors.email && <span style={{color:'red'}}>This field is required</span>}
            <label htmlFor="">Enter Mobile No.</label>
            <input type="number" {...register('phone',{required:true})} placeholder='Enter your phone number'/>
            {errors.phone && <span style={{color:'red'}}>This field is required</span>}
            <h1>
            <button type="submit" className="button text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit Form</button>

            </h1>
            </form>
        </div>
    )
}

export default UpdateUser
