import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="/blogtest.png"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">Tecnology</Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4">Next.js_learning</Link>
          <p className="text-sm pb-3 text-slate-900">pushed on 2025/8/25</p>
          <Link href="#" className="text-slate-900 pb-6">
            ああああああああああああああああああああああ
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList