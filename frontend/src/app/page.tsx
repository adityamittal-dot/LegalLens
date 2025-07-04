'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">LegalLense Home</h1>
      <p>{message}</p>
    </div>
  )
}
