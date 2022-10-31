import React, { Children, useEffect } from 'react'
import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'
import toast, { Toaster } from 'react-hot-toast';


export default function App({children, title}) {
    const {flash} = usePage().props
    useEffect(() => {
        flash.type && toast[flash.type](flash.message)
    }, [])
    return (
        <div>
            <Head title={title}></Head>
            <Navbar></Navbar>
            <Toaster position='bottom-right'/>
            {children}
        </div>
    )
}
