import React from 'react'
import App from '@/Layouts/App'

export default function Dashboard() {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Dashboard</h2>
                    <p>This Is Dashboard Pages</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </>
    )
}

Dashboard.layout = (page)   => <App children={page} title="Dashboard"/>
