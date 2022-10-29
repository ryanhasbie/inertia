import React from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Navbar() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
        </div>
    )
}
