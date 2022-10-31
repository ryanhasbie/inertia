import React from 'react'
import Guest from '@/Layouts/Guest'
import { Link, useForm } from '@inertiajs/inertia-react'

export default function Login({errors}) {
    const {data, setData, post} = useForm({
        email: '', password:'', remember: '',
    })

    const changeHandler = (e)  =>  {
        setData({...data, [e.target.id] : e.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        post('/login', data)
    }

    return (
        <>
            <div className="grid h-screen place-items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Login</h2>
                        <form onSubmit={submitHandler} noValidate>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id='email' value={data.email} onChange={changeHandler} placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                            {errors && (<div className='text-red-600'>{errors.email}</div>)}
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" id='password' value={data.password} onChange={changeHandler} placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                            {errors && (<div className='text-red-600'>{errors.password}</div>)}
                            <label className="label cursor-pointer">
                                <span className="label-text">Remember me</span> 
                                <input type="checkbox" value={data.remember} onChange={(e) => setData({...data, remember: e.target.checked})} name="remember" className="checkbox" />
                            </label>
                            <button type="submit" className="btn btn-primary btn-sm">Login</button>
                        </form>
                        <Link href="/register" className="flex justify-end text-blue-600 font-semibold">Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

Login.layout = (page)   => <Guest children={page} title="Login"/>

