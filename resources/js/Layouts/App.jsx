import React, { Children } from 'react'
import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/inertia-react'


export default function App({children, title}) {
    return (
        <div>
            <Head title={title}></Head>
            <Navbar></Navbar>
            {children}
        </div>
    )
}
