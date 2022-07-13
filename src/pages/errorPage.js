import React from "react"
import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <div>
      <h1>404 not found</h1>
      <h3>Please check your internet connection or the correct domain name</h3>
      <Link to="/home">Go back</Link>
    </div>
  )
}

