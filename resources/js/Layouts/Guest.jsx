import React, { Children } from 'react'
import { Head } from '@inertiajs/inertia-react'
import ApplicationLogo from '@/Components/ApplicationLogo'


export default function App({children, title}) {
    return (
        <div>
            <Head title={title}></Head>
            {children}
        </div>
    )
}
