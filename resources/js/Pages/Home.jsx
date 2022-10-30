import React from 'react'
import App from '@/Layouts/App'

export default function Home(props) {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Home</h2>
                    <p>My name is {props.username}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </>
    )
}

Home.layout = (page)   => <App children={page} title="Home"/>

