import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function User() {
  const data = useLoaderData()

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Pawan4356')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  return (
    <div className="h-60">
      <div className="rounded border-2 text-center text-3xl sm:text-4xl text-gray-800 font-bold tracking-tight m-10 p-10 bg-gray-100">Total Public Repo:- {data.public_repos}</div>
    </div>
  )
}

export const gitInfoFetch = async () => {
  const response = await fetch('https://api.github.com/users/Pawan4356')
  return response.json()
}