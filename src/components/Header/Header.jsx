import React from 'react'
import HeaderRowOne from './HeaderRowOne'
import HeaderRowTwo from './HeaderRowTwo'

export default function Header() {
  return (
    <div className="hidden sm:block">
      <HeaderRowOne/>
      <HeaderRowTwo/>
    </div>
  )
}
