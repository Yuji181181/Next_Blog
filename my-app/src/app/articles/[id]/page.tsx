import React from 'react'
import Image from 'next/image'

const Article = ({params}: {params: {id: string}}) => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Image
        src="/blogtest.png"
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">ここがタイトル</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>ここが本文</p>
      </div>
    </div>
  )
}

export default Article