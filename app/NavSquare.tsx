import React from 'react'

type Props = {}

function NavSquare({}: Props) {
  return (
    <div className='fixed top-50 h-screen'>
        <div className='flex items-center justify-center w-[400px] h-[400px]'>
            <div className='flex flex-col items-center justify-between h-[90%] md:h-[80%] lg:h-[400px] 
            w-[90%] md:w-[80%] lg:w-[300px]'>
                
            </div>
            <div className='flex flex-row items-center justify-between w-[90%] md:w-[80%] lg:w-[400px]
            h-[90%] md:h-[80%] lg:h-[300px]'>
                
            </div>
        </div>
    </div>
  )
}

export default NavSquare