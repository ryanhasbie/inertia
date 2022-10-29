import React from 'react'
import App from '@/Layouts/App'

export default function Home(props) {
    return (
        <App title="Home">
            My Name Is {props.username}
        </App>
    )
}
