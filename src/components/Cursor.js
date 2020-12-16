import React from 'react'

const Cursor = ({animationName}) => {
    window.addEventListener('mousemove',(e)=>{
        let cursor = document.querySelector('.cursor')
        cursor.style.top = e.pageY + 'px'
        cursor.style.left = e.pageX + 'px'
    })

    return (
        <>
        
        <div className={`cursor ${animationName}`}></div>
        
        </>
    )
}




export default Cursor
