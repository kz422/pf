import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='p-5 bg-slate-700'>
      <h3>Headerrrr</h3>
      <Link href='/'>HOME</Link>
    </header>
  )
}
