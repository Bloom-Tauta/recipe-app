import React from 'react'
import { TbRotateClockwise } from 'react-icons/tb'

function Loading() {

    return (
        <div className='flex items-center justify-center bg-slate-900/20  flex-grow'>
            <div className='animate-spin'><TbRotateClockwise size={25 } /></div>
        </div>
    )
}

export default Loading;