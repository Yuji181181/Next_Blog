import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-10 border-b">
        <div>
            <h1 className="text-2xl font-extrabold">
                <Link href="/">My Blog</Link>
            </h1>
        </div>
        <div>
            <nav className="text-sm font-medium">
                <Link href="/articles/new" className="bg-orange-300 px-3 py-3 rounded-md">記事を書く</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header