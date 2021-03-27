import React from 'react'
import HeaderRowOne from './HeaderRowOne'
import HeaderRowTwo from './HeaderRowTwo'

export default function Header({ showFilter}) {
  return (
    <div className="hidden sm:block">
      <HeaderRowOne showFilter={showFilter}/>
      <HeaderRowTwo/>
    </div>
  )
}
