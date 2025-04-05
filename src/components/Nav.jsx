import React from 'react'

const Nav = () => {
    return (
        <nav>
            <div className='flex justify-between item-center bg-black text-white p-4'>
                <div>Graphio<span className='text-xs text-blue-400'>Clone</span></div>
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav