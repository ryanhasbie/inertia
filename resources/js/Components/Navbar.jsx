import React from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'

export default function Navbar({props}) {
    const {auth} = usePage().props;
    return (
            <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                {auth.user !== null ? 
                <li tabIndex={0}>
                    <a>
                        {auth.user.name}
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2 bg-primary">
                    <li><Link>Profile</Link></li>
                    <li><Link>Logout</Link></li>
                    </ul>
                </li>
                : 
                    <ul className='menu menu-horizontal p-0'>
                        <li><Link href="/register">Register</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                }
            </ul>
            </div>
        </div>
    )
}
