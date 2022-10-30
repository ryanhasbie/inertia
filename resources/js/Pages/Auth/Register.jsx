import React from 'react'
import Guest from '@/Layouts/Guest'
import { Link } from '@inertiajs/inertia-react'

export default function Register() {
    return (
        <Guest title="Register">
            <div className="grid h-screen place-items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Register</h2>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Enter Your Username" className="input input-bordered w-full max-w-xs" />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                        <button type="submit" className="btn btn-primary btn-sm">Register</button>
                        <Link href="/login" className="flex justify-end text-blue-600 font-semibold">Login</Link>
                    </div>
                </div>
            </div>
        </Guest>
    )
}
