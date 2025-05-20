'use client'
import React from 'react'

const Error = ({reset}: {reset: () => void}) => {
  return (
    <div className='text-center'>
        <h3 className='text-red-500'>エラーが発生しました</h3>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-md' onClick={() => reset()}>もう一度試す</button>
    </div>
  )
}

export default Error