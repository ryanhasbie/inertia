import React, {useState} from 'react'
import Guest from '@/Layouts/Guest'
import { Link } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import { ReactDOM } from 'react'

export default function Login({errors}) {
    const [values, setValues] = useState({
        email: '', password:'', remember: '',
    })
    const changeHandler = (e)  =>  {
        setValues({...values, [e.target.id] : e.target.value})
    }
    const submitHandler = (event) => {
        event.preventDefault()
        Inertia.post('/login', values)
    }
    return (
        <>
            <div className="grid h-screen place-items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Login</h2>
                        <form onSubmit={submitHandler} noValidate>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id='email' value={values.email} onChange={changeHandler} placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                            {errors && (<div className='text-red-600'>{errors.email}</div>)}
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" id='password' value={values.password} onChange={changeHandler} placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                            {errors && (<div className='text-red-600'>{errors.password}</div>)}
                            <label className="label cursor-pointer">
                                <span className="label-text">Remember me</span> 
                                <input type="checkbox" value={values.remember} onChange={(e) => setValues({...values, remember: e.target.checked})} name="remember" className="checkbox" />
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

