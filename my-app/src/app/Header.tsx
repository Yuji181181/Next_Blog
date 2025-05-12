import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <h1 className="text-2xl font-extrabold">
            <Link href="/">Next_Blog</Link>
        </h1>
        <div>
          <nav>
            <Link href="/articles/new">記事を書く</Link>
          </nav>
        </div>
    </div>
  )
}

export default Header