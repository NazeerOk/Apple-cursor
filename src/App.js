import React from 'react'
import './App.css'
import AppleWatch from './components/AppleWatch'

const App = () => {
    document.addEventListener("touchstart", function() {}, true);
    return (
        <>
            <AppleWatch/>
        </>
    )
}

export default App
