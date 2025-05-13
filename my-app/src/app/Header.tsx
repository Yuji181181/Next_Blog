import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
  <header className="py-5 px-10">
    <div>
      <h1 className="text-2xl font-extrabold">
        <Link href="/">Next blog</Link>
      </h1>
    </div>
    <div>
      <nav>
        <Link href="/articles/new">記事を書く</Link>
      </nav>
    </div>
  </header>
  )
}

export default Header