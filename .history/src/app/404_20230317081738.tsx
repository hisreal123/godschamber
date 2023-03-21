"use client"
import Link from 'next/link'
import React from 'react'

export default function error404() {
  return (
    <div>
      <h1> Sorry .... Error  page </h1>
      <Link href='/'>Back to HomePage </Link>
    </div>
  )
}
