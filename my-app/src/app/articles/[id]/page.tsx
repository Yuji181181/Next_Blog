import React from 'react'
import Image from 'next/image'
import { getDetailArticle } from '@/blogAPI';
import DeleteButton from '@/app/components/DeleteButton';

const Article = async ({params}: {params: {id: string}}) => {
  const detailarticle = await getDetailArticle(params.id);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Image
        src="/blogtest.png"
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">{detailarticle.title}</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailarticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailarticle.id} />
      </div>
    </div>
  )
}

export default Article