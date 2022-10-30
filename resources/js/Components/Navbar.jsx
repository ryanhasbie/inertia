import React from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Navbar() {
    return (
            <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
            </ul>
            </div>
        </div>
    )
}
